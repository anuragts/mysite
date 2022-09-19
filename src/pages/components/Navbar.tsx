import { NextPage } from "next";
import Head from "next/head";

const Navbar: NextPage = () => {
  return (
    <>
      <Head>
        <title>anurag</title>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@600,500,300,400&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default Navbar;
