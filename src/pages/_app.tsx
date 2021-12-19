import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { GlobalStyles } from "../styles/global-styles";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useApollo } from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { NextSeo } from "next-seo";
import DefaultSeo from "../../next-seo";
import "swiper/css/bundle";
import "../styles/ck-editor-styles.css";

SwiperCore.use([Navigation, Pagination]);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return getLayout(
    <>
      <NextSeo {...DefaultSeo} />
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
