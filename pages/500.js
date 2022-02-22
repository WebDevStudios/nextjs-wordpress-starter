import Code from '@/components/atoms/Code'
import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import PropTypes from 'prop-types'

// Define route post type.
const postType = '500'

/**
 * Render the Custom500 component.
 *
 * @author WebDevStudios
 * @param  {object}  props              The component attributes as props.
 * @param  {string}  props.errorMessage The 500 error message.
 * @param  {object}  props.post         Post data from WordPress.
 * @return {Element}                    The Custom500 component.
 */
export default function Custom500({errorMessage, post}) {
  const {seo = {}} = post

  // Update robots SEO meta.
  seo.metaRobotsNofollow = 'noindex'
  seo.metaRobotsNoindex = 'nofollow'

  return (
    <Layout seo={{...seo}}>
      <Container>
        <article>
          <RichText tag="h1">500 Error</RichText>
          <p>A server-side error has occurred.</p>
          {errorMessage && <Code content={errorMessage} />}
        </article>
      </Container>
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
  return await getPostTypeStaticProps(null, postType)
}

Custom500.propTypes = {
  ...getPagePropTypes(postType),
  errorMessage: PropTypes.string
}
