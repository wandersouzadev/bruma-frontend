import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { DefaultLayout } from "../../components/layouts/default";
import { PortfolioPostTemplate } from "../../components/template/portfolio-post";
import {
  PortfolioBySlugDocument,
  PortfolioBySlugQuery,
  PortfolioBySlugQueryVariables,
  PortfolioSlugDocument,
  PortfolioSlugQuery,
  PortfolioSlugQueryVariables,
} from "../../graphql/generated/graphql";
import { initializeApollo } from "../../lib/apollo";
import { loadImg } from "../../utils";
import { customerMapper, portfolioPostMapper } from "../../utils/mapper";

export default function PortfolioPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  const SEO: NextSeoProps = {
    title: props.seo?.title,
    description: props.seo?.description,
    openGraph: {
      url: "https://next.brunavaltrick.com.br" + router.asPath,
      title: props.seo?.title,
      description: props.seo?.description,
      type: "article",
      images: [
        {
          url: props.post?.cover.url,
          alt: props.post?.cover.alternativeText,
          width: 600,
          height: 400,
        },
      ],
      article: {
        section: props.post.category.name,
        tags: props.seo?.keywords.split(","),
        publishedTime: props.post?.created_at,
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <PortfolioPostTemplate {...props} />
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    PortfolioBySlugQuery,
    PortfolioBySlugQueryVariables
  >({
    query: PortfolioBySlugDocument,
    variables: { slug: `${params?.slug}` },
  });

  if (!data.portfolios?.length) {
    throw new Error();
  }

  const post = data.portfolios[0];

  return {
    props: {
      post: portfolioPostMapper(post),
      customer: customerMapper(post),
      seo: post?.SEO,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    PortfolioSlugQuery,
    PortfolioSlugQueryVariables
  >({
    query: PortfolioSlugDocument,
  });
  const paths = data.portfolios?.map((portfolio) => ({
    params: { slug: portfolio?.slug },
  }));

  return { paths, fallback: "blocking" };
}

PortfolioPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
