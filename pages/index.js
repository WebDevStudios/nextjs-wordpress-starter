import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import getMenus from '@/api/wordpress/_global/getMenus'
import Layout from '@/components/common/Layout'
import Hero from '@/components/molecules/Hero'
import PropTypes from 'prop-types'
import Page from './[...slug]'
import formatHeirarchialMenu from '@/functions/formatHeirarchialMenu'

// Define route post type.
const postType = 'page'

export default function HomePage({post, menus}) {
  console.log(menus)
  // console.log('primaryMenu', formatHeirarchialMenu(primaryMenu))
  // console.log('footerMenu', formatHeirarchialMenu(footerMenu))
  // console.log('mobileMenu', formatHeirarchialMenu(mobileMenu))

  // Display dynamic page data if homepage retrieved from WP.
  if (post) {
    return <Page post={post} />
  }

  // Display static page content as fallback.
  return (
    <Layout
      title="Query from Yoast SEO"
      description="Query from Yoast SEO"
      noIndex={false} // query from yoast seo
      noFollow={false} // query from yoast seo
      openGraph={{
        title: 'Query from Yoast SEO',
        description: 'Query from Yoast SEO',
        images: [
          {
            url: 'Query from Yoast SEO',
            alt: 'Query from Yoast SEO'
          }
        ]
      }}
    >
      <Hero
        background="https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70"
        title="Next.js Starter"
        description="A slightly opinionated, yet bare-bones Next.js starter."
      />
      <p>
        To display your WordPress homepage dynamically, set your homepage to a
        static page via the WP dashboard (Settings: Reading Settings).
      </p>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @param  {Object}  context             Context for current post.
 * @param  {boolean} context.preview     Whether requesting preview of post.
 * @param  {Object}  context.previewData Post preview data.
 * @return {Object}                      Post props.
 */
export async function getStaticProps() {
  const post = await getPostTypeStaticProps({slug: '/'}, postType)
  // const primaryMenu = await getMenu('primary-menu')
  // const footerMenu = await getMenu('footer-menu')
  // const mobileMenu = await getMenu('mobile-menu')

  const menus = await getMenus(['primary-menu', 'footer-menu', 'mobile-menu'])

  return {
    props: {
      post: post,
      menus: menus
    }
  }
}
