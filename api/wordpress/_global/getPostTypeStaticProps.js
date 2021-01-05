import getPostTypeById from './getPostTypeById'
import getPostTypeArchive from './getPostTypeArchive'
import {addApolloState} from '@/api/apolloConfig'

/**
 * Retrieve static props by post type.
 *
 * @author WebDevStudios
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
  // Check for dynamic archive display.
  if (!Object.keys(params).length) {
    const {apolloClient, posts, error, errorMessage} = await getPostTypeArchive(
      postType
    )

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        posts,
        error,
        errorMessage,
        archive: true
      },
      revalidate: 60 * 5
    })
  }

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
