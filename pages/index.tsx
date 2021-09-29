import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SimpleHeading from '../components/shared/headings/SimpleHeading'
import BlogPostGrid from '../components/shared/layouts/BlogPostGrid'
import PrimaryLayout from '../components/shared/layouts/PrimaryLayout'
import SignUpForm from '../components/shared/newsletter/SignUpForm'

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
          <SimpleHeading content="Read" />
          <BlogPostGrid />
          <div className="h-10"></div>
          <SimpleHeading content="Subscribe" />
          <SignUpForm />
        </PrimaryLayout>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
