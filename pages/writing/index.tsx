import type { NextPage } from 'next'
import Head from 'next/head'
import SimpleHeading from '../../components/shared/headings/SimpleHeading'
import BlogPostGrid from '../../components/shared/layouts/BlogPostGrid'
import PrimaryLayout from '../../components/shared/layouts/PrimaryLayout'

const Writing: NextPage = () => {
  return (
    <div style={{background: "radial-gradient(circle at bottom right, rgba(251, 113, 133, 0.5) 0%, rgba(191, 219, 254, 0.5) 25%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 100%), #FFFFFF"}} >
      <Head>
        <title>Finn Elliott</title>
        <meta name="description" content="This is currently work in progress. Soon this site will hold all of my projects and writing on topics I find interesting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PrimaryLayout>
          <SimpleHeading content="Read" />
          <BlogPostGrid />
          {/* <div className="h-10"></div>
          <SignUpForm /> */}
        </PrimaryLayout>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Writing
