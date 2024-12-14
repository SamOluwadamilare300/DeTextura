import { notFound } from "next/navigation";
import { db } from "@/db";
import dynamic from "next/dynamic";
const  DesignConfigurator = dynamic(() => import  ('./DesignConfigurator'), {ssr: false} )

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const id = Array.isArray(searchParams.id) ? searchParams.id[0] : searchParams.id;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  try {
    const configuration = await db.configuration.findUnique({
      where: { id },
    });

    if (!configuration) {
      return notFound();
    }

    const { imageUrl, width, height } = configuration;

    return (
      <DesignConfigurator
        configId={configuration.id}
        imageDimensions={{ width, height }}
        imageUrl={imageUrl}
      />
    );
  } catch (error) {
    console.error("Error fetching configuration:", error);
    return notFound();
  }
};

export default Page;
