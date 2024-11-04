interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const id = Array.isArray(searchParams.id) ? searchParams.id[0] : searchParams.id;

  return <p>{id}</p>;
};

export default Page;
