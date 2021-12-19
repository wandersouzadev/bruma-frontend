import { InferGetStaticPropsType } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import { ReactElement } from "react";
import { ContactLayout } from "../components/layouts/contact";
import { ContactTemplate } from "../components/template/contact";
import {
  ContactPageDocument,
  ContactPageQuery,
  ContactPageQueryVariables,
} from "../graphql/generated/graphql";
import { initializeApollo } from "../lib/apollo";
import { socialMapper } from "../utils/mapper";

export default function ContactPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const SEO: NextSeoProps = {
    title: props.seo?.title,
    description: props.seo?.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ContactTemplate {...props} />
    </>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    ContactPageQuery,
    ContactPageQueryVariables
  >({
    query: ContactPageDocument,
  });
  return {
    props: {
      seo: data.contactPage?.SEO ?? {
        title: "Contato",
        description: "",
      },
      social: socialMapper(data),
    },
    revalidate: 10,
  };
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <ContactLayout>{page}</ContactLayout>;
};
