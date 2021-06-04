import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="images/logo_98.png" />
        <title>Landing Delux Mortgage</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
