import { db } from "@/db";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
const DesignPreview= dynamic(() => import  ('./DesignPreview'), {ssr: false} )

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

    return <DesignPreview configuration={configuration} />;
  } catch (error) {
    console.error("Error fetching configuration:", error);
    return notFound();
  }
};

export default Page;
