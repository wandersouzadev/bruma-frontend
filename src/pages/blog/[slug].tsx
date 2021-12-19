import { ReactElement } from "react";
import { DefaultLayout } from "../../components/layouts/default";
import { initializeApollo } from "../../lib/apollo";
import {
  BlogPostBySlugDocument,
  BlogPostBySlugQuery,
  BlogPostBySlugQueryVariables,
  BlogPostSlugDocument,
  BlogPostSlugQuery,
  BlogPostSlugQueryVariables,
} from "../../graphql/generated/graphql";
import { BlogPostTemplate } from "../../components/template/blog-post";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { blogPostMapper } from "../../utils/mapper";
import { NextSeo, NextSeoProps } from "next-seo";
import { loadImg } from "../../utils";
import { useRouter } from "next/router";

export default function BlogPage(
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
      images: [
        {
          url: loadImg(props.post?.cover.url),
          alt: props.post?.cover.alternativeText,
          width: 600,
          height: 400,
        },
      ],
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <BlogPostTemplate {...props} />
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >({
    query: BlogPostBySlugDocument,
    variables: { slug: `${params?.slug}` },
  });

  if (!data.blogPosts?.length) {
    throw new Error();
  }

  const post = data.blogPosts[0];

  return {
    props: {
      post: blogPostMapper(post),
      seo: post?.SEO,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    BlogPostSlugQuery,
    BlogPostSlugQueryVariables
  >({
    query: BlogPostSlugDocument,
  });
  const paths = data.blogPosts?.map((post) => ({
    params: { slug: post?.slug },
  }));

  return { paths, fallback: "blocking" };
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
