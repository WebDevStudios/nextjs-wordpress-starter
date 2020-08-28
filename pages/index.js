import PropTypes from 'prop-types'
import Head from 'next/head'
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import {getMenus, getAllPostsForHome} from '@/lib/api'
import {CMS_NAME} from '@/lib/config'

export default function Index({allPosts: {edges}, preview, menus}) {
  console.log(menus)
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
      <Layout preview={preview} menus={menus}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

Index.propTypes = {
  allPosts: PropTypes.object,
  preview: PropTypes.bool,
  menus: PropTypes.object
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsForHome(preview)
  const menus = await getMenus()

  return {
    props: {allPosts, preview, menus}
  }
}
