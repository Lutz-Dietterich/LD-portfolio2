import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Lutz Dietterich - WEB DEVELOPMENT</title>
        <meta
          name="description"
          content="Lutz Dietterich - Web Developer aus Lauenburg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
