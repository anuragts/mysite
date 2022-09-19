import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
  <>
  <Head>
    <title>anurag</title>
    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap" rel="stylesheet"/>
  </Head>
  <div className='text-3xl font-bold text-center mt-[20%]'>
  Hello world ☄️
  </div>
  </> 
  )
}

export default Home
