import {initializeNextApiApollo} from '@/lib/next-api/connector'
import queryArchivePosts from '@/lib/next-api/wordpress/archive/queryArchivePosts'

/**
 * Retrieve next page of posts for post type archive.
 *
 * @author WebDevStudios
 * @param  {string} postType   WP post type.
 * @param  {string} cursor     Start cursor for pagination.
 * @param  {object} date       Optional date query props.
 * @param  {string} date.day   Date query: day.
 * @param  {string} date.month Date query: month.
 * @param  {string} date.year  Date query: year.
 * @param  {string} orderBy    Order by: field.
 * @param  {string} order      Order by: direction.
 * @return {object}            Archive post and pagination data or error object.
 */
export default async function getArchivePosts(
  postType,
  cursor = null,
  date = {},
  orderBy = 'DATE',
  order = 'DESC'
) {
  const {day, month, year} = date
  const apolloClient = initializeNextApiApollo()

  return apolloClient
    .query({
      query: queryArchivePosts,
      variables: {
        postType,
        cursor,
        orderBy,
        order,
        day,
        month,
        year
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
