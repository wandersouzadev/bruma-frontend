import { ReactElement } from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { DefaultLayout } from "../components/layouts/default";
import { AboutTemplate } from "../components/template/about";
import { InferGetStaticPropsType } from "next";
import {
  AboutPageDocument,
  AboutPageQuery,
  AboutPageQueryVariables,
} from "../graphql/generated/graphql";
import { initializeApollo } from "../lib/apollo";
import {
  blogPostForSliderMapper,
  portfolioSingleMapper,
  professionalExperiencesMapper,
} from "../utils/mapper";

export default function AboutPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO: NextSeoProps = {
    title: props.seo?.title,
    description: props.seo?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <AboutTemplate {...props} />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    AboutPageQuery,
    AboutPageQueryVariables
  >({
    query: AboutPageDocument,
    variables: { limit: 6 },
  });

  return {
    props: {
      professionalExperiences: professionalExperiencesMapper(data),
      portfolio: portfolioSingleMapper(data),
      blogPosts: blogPostForSliderMapper(data),
      seo: data.aboutPage?.SEO ?? { title: "Sobre", description: "" },
    },
    revalidate: 10,
  };
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
