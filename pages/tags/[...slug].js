import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Archive from '@/components/organisms/Archive'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getTaxonomyStaticPaths from '@/functions/wordpress/taxonomies/getTaxonomyStaticPaths'
import getTaxonomyStaticProps from '@/functions/wordpress/taxonomies/getTaxonomyStaticProps'
import PropTypes from 'prop-types'

// Define route taxonomy.
const taxonomyType = 'tag'

/**
 * Render the Tag component.
 *
 * @author WebDevStudios
 * @param  {object}  props            The component attributes as props.
 * @param  {object}  props.pagination Archive pagination data from WordPress.
 * @param  {object}  props.post       Post data from WordPress.
 * @param  {object}  props.posts      Taxonomy posts data from WordPress.
 * @param  {string}  props.term       WP taxonomy term slug.
 * @return {Element}                  The Tag component.
 */
export default function Tag({pagination, post, posts, term}) {
  return (
    <Layout seo={{...post?.seo}}>
      <Container>
        <RichText tag="h1">{post?.title}</RichText>
        <Archive
          pagination={pagination}
          posts={posts}
          postType="post"
          taxonomy={taxonomyType}
          term={term}
        />
      </Container>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getTaxonomyStaticPaths(taxonomyType)
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @param  {object} context        Context for current post.
 * @param  {object} context.params Route parameters for current post.
 * @return {object}                Post props.
 */
export async function getStaticProps({params}) {
  return await getTaxonomyStaticProps(params, taxonomyType)
}

Tag.propTypes = {
  ...getPagePropTypes(taxonomyType),
  taxonomy: PropTypes.string,
  term: PropTypes.string
}
