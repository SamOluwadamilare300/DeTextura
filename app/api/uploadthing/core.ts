import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { db } from "@/db";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })

    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input;

      try {
        const res = await fetch(file.url);
        const buffer = await res.arrayBuffer();

        const imgMetadata = await sharp(Buffer.from(buffer)).metadata();
        const { width = 500, height = 500 } = imgMetadata;

        if (!configId) {
          // Create a new configuration if configId is missing
          const configuration = await db.configuration.create({
            data: {
              imageUrl: file.url,
              height,
              width,
            },
          });
          return { configId: configuration.id };
        } else {
          // Update existing configuration if configId exists
          const updateConfiguration = await db.configuration.update({
            where: {
              id: configId,
            },
            data: {
              croppedImageUrl: file.url,
            },
          });
          return { configId: updateConfiguration.id };
        }
      } catch (error) {
        console.error("Error in onUploadComplete:", error);
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
