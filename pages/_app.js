import '../styles/globals.css'
import '../styles/tailwind.css'


import App from "next/app";
import Head from "next/head";
// import "../assets/css/style.css";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  let activeFilters = [
    {
      filterTitle: "employer",
      filterOptions: ["startup", "academia", "corporate"]
    },
    {
      filterTitle: "type",
      filterOptions: ["full time", "part time", "internship", "thesis"]
    },
    {
      filterTitle: "city",
      filterOptions: ["muenchen", "heidelberg"]
    }
  ]
  
  const { global } = pageProps;

  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}  
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalContext.Provider value={{global: global, activeFilters: activeFilters}}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getStaticProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  // console.log("global: ", global)
  return { ...appProps, pageProps: { global } };
};


export default MyApp;