import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContentSection from '../../components/writing/ContentSection'
import PrimaryLayout from '../../components/shared/layouts/PrimaryLayout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Finn Elliott</title>
        <meta name="description" content="This is currently work in progress. Soon this site will hold all of my projects and writing on topics I find interesting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PrimaryLayout>
          <ContentSection />
        </PrimaryLayout>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
