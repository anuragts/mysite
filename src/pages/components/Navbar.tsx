import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const Navbar: NextPage = () => {
  return (
    <>
      <Head>
        <title>anurag</title>
        <meta
          property="og:image"
          content="https://anuragdev.me/api/og"
          name="description"
        />
        <meta
          name="description"
          content="Hey There I am Anurag , I build things"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default Navbar;
