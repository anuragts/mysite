import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const Navbar: NextPage = () => {
  return (
    <>
      <Head>
        <title>anurag</title>
      </Head>
      <Script src="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap" />
      <Script src="https://api.fontshare.com/v2/css?f[]=chillax@600,500,300,400&display=swap" />
    </>
  );
};

export default Navbar;
