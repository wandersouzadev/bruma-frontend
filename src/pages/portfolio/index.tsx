import { ReactElement } from "react";
import { DefaultLayout } from "../../components/layouts/default";
import { InferGetStaticPropsType } from "next";
import { initializeApollo } from "../../lib/apollo";
import {
  PortfolioPageDocument,
  PortfolioPageQuery,
  PortfolioPageQueryVariables,
} from "../../graphql/generated/graphql";
import { blogPostsMapper, portfolioMapper } from "../../utils/mapper";
import {
  PortfolioData,
  PortfolioTemplate,
} from "../../components/template/portfolio";
import { NextSeo, NextSeoProps } from "next-seo";

export default function PortfolioPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO: NextSeoProps = {
    title: props.seo?.title,
    description: props.seo?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <PortfolioTemplate {...props} />
    </>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    PortfolioPageQuery,
    PortfolioPageQueryVariables
  >({
    query: PortfolioPageDocument,
    variables: { limit: 7 },
  });

  const portfolios = portfolioMapper(data);

  return {
    props: {
      portfolioForTop: portfolios.shift() || (null as unknown as PortfolioData),
      portfolioTopForGrid: portfolios.splice(0, 2),
      portfolios,
      blogPosts: blogPostsMapper(data),
      seo: data.portfolioPage?.SEO ?? { title: "Portfólio", description: "" },
    },
    revalidate: 10,
  };
};

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
