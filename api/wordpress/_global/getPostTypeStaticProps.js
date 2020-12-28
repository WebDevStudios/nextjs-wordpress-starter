import getPostTypeById from './getPostTypeById'
import {addApolloState} from '../connector'

/**
 * Retrieve static props by post type.
 *
 * @param  {string}  params      Post params (e.g., slug).
 * @param  {string}  postType    Post Type.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {?Object} previewData Post preview data.
 * @return {Object}              Object containing post props and revalidate setting.
 */
export default async function getPostTypeStaticProps(
  params,
  postType
  // preview = false, // TODO - add preview handling.
  // previewData = null
) {
  // Handle catch-all routes.
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  // Retrieve post data.
  const {apolloClient, post, error, errorMessage} = await getPostTypeById(
    postType,
    slug
  )

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props: {
      post,
      error,
      errorMessage
    },
    revalidate: 60 * 5
  })
}
