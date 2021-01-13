import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import Hero from '@/components/molecules/Hero'
import Page from './[...slug]'
import getPagePropTypes from '@/functions/getPagePropTypes'

// Define route post type.
const postType = 'page'

/**
 * Render the HomePage component.
 *
 * @author WebDevStudios
 * @param {object} props      The component attributes as props.
 * @param {object} props.post Post data from WordPress.
 * @return {Element}          The HomePage component.
 */
export default function HomePage({post}) {
  // Display dynamic page data if homepage retrieved from WP.
  if (post) {
    return <Page post={post} />
  }

  // Display static page content as fallback.
  return (
    <Layout seo={{...post.seo}}>
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
 * @author WebDevStudios
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps({slug: '/'}, postType)
}

HomePage.propTypes = {
  ...getPagePropTypes(postType)
}
