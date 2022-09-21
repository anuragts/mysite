import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const Navbar: NextPage = () => {
  return (
    <>
      <Head>
        <title>anurag</title>
        <meta name="description" content="Hey There I am Anurag , I build things"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Script src="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap" />
      <Script src="https://api.fontshare.com/v2/css?f[]=chillax@600,500,300,400&display=swap" />
    </>
  );
};

export default Navbar;
