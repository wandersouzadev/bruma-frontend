import { ReactElement } from "react";
import { DefaultLayout } from "../components/layouts/default";
import { PublicityTemplate } from "../components/template/publicity";
import { InferGetStaticPropsType } from "next";
import {
  PublicityPageDocument,
  PublicityPageQuery,
  PublicityPageQueryVariables,
} from "../graphql/generated/graphql";
import { portfolioForSliderMapper } from "../utils/mapper";
import { initializeApollo } from "../lib/apollo";
import { NextSeo, NextSeoProps } from "next-seo";

export default function PublicityPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO: NextSeoProps = {
    title: props.seo?.title,
    description: props.seo?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <PublicityTemplate {...props} />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    PublicityPageQuery,
    PublicityPageQueryVariables
  >({
    query: PublicityPageDocument,
  });

  return {
    props: {
      portfolioArray: portfolioForSliderMapper(data),
      publicityText: data.publicityPage?.text || "",
      seo: data.publicityPage?.SEO ?? {
        title: "Publicitário",
        description: "",
      },
    },
    revalidate: 10,
  };
}

PublicityPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
