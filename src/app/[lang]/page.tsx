import { sanityFetch } from "@/sanity/lib/live";
import { homeQuery } from "@/sanity/lib/queries";
import AboutSection from "../_sections/about";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  params: Promise<{
    lang: Locale;
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
      <AboutSection profile={data.profile} {...params} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
