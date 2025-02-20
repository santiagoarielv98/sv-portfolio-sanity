import { sanityFetch } from "@/sanity/lib/live";
import { homeQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home(props: Props) {
  // console.log(await props.params);
  const params = await props.params;

  const { data } = await sanityFetch({
    query: homeQuery,
    params,
  });

  return (
    <main className="relative">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
