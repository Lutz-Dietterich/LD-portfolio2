import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Lutz Dietterich - WEB DEVELOPMENT</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
