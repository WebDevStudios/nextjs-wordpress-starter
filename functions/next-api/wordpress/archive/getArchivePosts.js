import {initializeNextApiApollo} from '@/lib/next-api/connector'
import queryArchivePosts from '@/lib/next-api/wordpress/archive/queryArchivePosts'

/**
 * Retrieve next page of posts for post type archive.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @param {string} cursor   Start cursor for pagination.
 * @param {string} orderBy  Order by: field.
 * @param {string} order    Order by: direction.
 * @return {object}         Archive post and pagination data or error object.
 */
export default async function getArchivePosts(
  postType,
  cursor = null,
  orderBy = 'DATE',
  order = 'DESC'
) {
  const apolloClient = initializeNextApiApollo()

  return apolloClient
    .query({
      query: queryArchivePosts,
      variables: {
        postType,
        cursor,
        orderBy,
        order
      }
    })
    .then(
      (response) =>
        response?.data?.archive ?? {
          error: true,
          errorMessage: `An error occurred while trying to retrieve data for ${postType} archive.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
