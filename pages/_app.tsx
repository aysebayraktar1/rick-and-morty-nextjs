import type { AppProps } from "next/app";
import React from "react";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
