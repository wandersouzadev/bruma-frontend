import { ReactElement } from "react";
import { DefaultLayout } from "../components/layouts/default";
import { HomeTemplate } from "../components/template/home";
import { initializeApollo } from "../lib/apollo";
import { InferGetStaticPropsType } from "next";
import {
  HomePageDocument,
  HomePageQuery,
  HomePageQueryVariables,
} from "../graphql/generated/graphql";
import {
  blogPostForSliderMapper,
  portfolioForSliderMapper,
  testimonialsMapper,
} from "../utils/mapper";
import { NextSeo, NextSeoProps } from "next-seo";

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO: NextSeoProps = {
    title: props.seo?.title,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <HomeTemplate {...props} />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    HomePageQuery,
    HomePageQueryVariables
  >({
    query: HomePageDocument,
    variables: { limit: 6 },
  });
  return {
    props: {
      portfolioArray: portfolioForSliderMapper(data),
      blogPosts: blogPostForSliderMapper(data),
      testimonials: testimonialsMapper(data),
      seo: data.homePage?.SEO ?? { title: "Home" },
    },
    revalidate: 10,
  };
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
