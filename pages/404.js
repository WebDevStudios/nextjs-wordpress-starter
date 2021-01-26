import PropTypes from 'prop-types'
import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import Layout from '@/components/common/Layout'
import {seoPropTypes} from '@/functions/getPagePropTypes'
import Page from './[...slug]'

/**
 * Render the Custom404 component.
 *
 * @author WebDevStudios
 * @param {object} props      The component attributes as props.
 * @param {object} props.post Post data from WordPress.
 * @return {Element}          The Search component.
 */
export default function Custom404({post}) {
  // Display dynamic page data if 404 page retrieved from WP.
  if (post) {
    return <Page post={post} />
  }

  return (
    <Layout seo={{...post?.seo}}>
      <h1>404 Not Found</h1>
      <p>That post could not be found!</p>
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
  return await getPostTypeStaticProps(null, '404')
}

Custom404.propTypes = {
  post: PropTypes.shape({
    seo: {...seoPropTypes.seo}
  })
}
