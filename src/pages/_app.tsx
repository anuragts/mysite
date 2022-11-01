import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import Layout from "./components/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
    </>
  );
}
export default MyApp
