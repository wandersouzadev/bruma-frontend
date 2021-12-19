import { ReactElement } from "react";
import { InferGetStaticPropsType } from "next";
import { DefaultLayout } from "../../components/layouts/default";
import { initializeApollo } from "../../lib/apollo";
import {
  BlogPageQuery,
  BlogPageQueryVariables,
  BlogPageDocument,
} from "../../graphql/generated/graphql";
import { blogPostsMapper, portfolioSingleMapper } from "../../utils/mapper";
import { BlogTemplate } from "../../components/template/blog";
import { NextSeo } from "next-seo";

export default function BlogPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO = {
    title: props.seo?.title,
    description: props.seo?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <BlogTemplate {...props} />
    </>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    BlogPageQuery,
    BlogPageQueryVariables
  >({
    query: BlogPageDocument,
    variables: { limit: 8 },
  });

  const blogPosts = blogPostsMapper(data);

  return {
    props: {
      latestPosts: blogPosts.splice(0, 2),
      firstGrid: blogPosts.splice(0, 3),
      blogPosts,
      portfolioArray: portfolioSingleMapper(data),
      seo: data.blogPage?.SEO ?? { title: "Blog", description: "" },
    },
    revalidate: 10,
  };
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
