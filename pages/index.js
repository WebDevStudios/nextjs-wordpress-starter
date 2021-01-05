import PropTypes from 'prop-types'
import Layout from '@/components/common/Layout'
import Hero from '@/components/molecules/Hero'
import config from '@/functions/config'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Page from './[...slug]'

// Define route post type.
const postType = 'page'

/**
 * The HomePage component displays the home page via dynamic routing.
 *
 * @author WebDevStudios
 * @param  {Object} [props] Properties passed to the component.
 * @return {Element}        Element to render.
 */
export default function HomePage({post}) {
  // Display dynamic page data if homepage retrieved from WP.
  if (post) {
    return <Page post={post} />
  }

  // Display static page content as fallback.
  return (
    <Layout title={config.siteTitle} description={config.siteDescription}>
      <>
        <Hero
          background="https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70"
          title="Next.js Starter"
          description="A slightly opinionated, yet bare-bones Next.js starter."
        />
        <p>
          To display your WordPress homepage dynamically, set your homepage to a
          static page via the WP dashboard (Settings: Reading Settings).
        </p>
      </>
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
  const props = await getPostTypeStaticProps({slug: '/'}, postType)

  return !props.props.error
    ? props
    : // Fallback to empty props if homepage not set in WP.
      {
        props: {
          post: null
        }
      }
}

HomePage.propTypes = {
  post: PropTypes.object
}
