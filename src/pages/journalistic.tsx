import { InferGetStaticPropsType } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import { ReactElement } from "react";
import { DefaultLayout } from "../components/layouts/default";
import { JournalisticTemplate } from "../components/template/journalistic";
import {
  JournalisticPageDocument,
  JournalisticPageQuery,
  JournalisticPageQueryVariables,
} from "../graphql/generated/graphql";
import { initializeApollo } from "../lib/apollo";
import { portfolioForSliderMapper } from "../utils/mapper";

export default function JournalisticPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO: NextSeoProps = {
    title: props.seo?.title,
    description: props.seo?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <JournalisticTemplate {...props} />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    JournalisticPageQuery,
    JournalisticPageQueryVariables
  >({
    query: JournalisticPageDocument,
  });
  return {
    props: {
      portfolioArray: portfolioForSliderMapper(data),
      journalisticText: data.journalisticPage?.text || "",
      seo: data.journalisticPage?.SEO ?? {
        title: "Jornalístico",
        description: "",
      },
    },
    revalidate: 10,
  };
}

JournalisticPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
