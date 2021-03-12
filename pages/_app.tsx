import Head from "next/head";
import React, { ElementType } from "react";
import Navigation from "../components/Navigation";
import { AppProvider } from "../shared/AppContext";

import "../styles/globals.css";

function MyApp<P = Record<string, any>>({ Component, pageProps }: { Component: ElementType, pageProps: P }) {
  return (
    <>
      <Head>
        <title>Epsilon Community</title>
        <link rel="icon" href="/EC-Logo-v2-32.ico" />
      </Head>
      <AppProvider>
        <Navigation />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
