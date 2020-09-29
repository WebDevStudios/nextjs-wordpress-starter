import PropTypes from 'prop-types'
import Head from 'next/head'
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import {getAllPostsForHome} from '@/lib/api'
import {CMS_NAME, HOME_OG_IMAGE_URL} from '@/lib/config'

export default function Index({allPosts: {edges}, preview}) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const seo = {
    metaDesc: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
    ogImage: HOME_OG_IMAGE_URL
  };

  return (
    <>
      <Layout preview={preview} seo={seo}>
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
  preview: PropTypes.bool
}

export async function getStaticProps({preview = false}) {
  const data = await getAllPostsForHome(preview)
  return {
    props: {
      allPosts: data?.posts,
      globalSeo: data?.seo,
      preview
    },
    revalidate: 60
  }
}
