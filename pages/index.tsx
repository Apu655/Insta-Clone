import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home: NextPage = () => {

  return (
    <>
    
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Feed></Feed>
      <p>Hello World</p>
    </div>
    </>
  )
}

export default Home
