import {initializeWpApollo} from '@/lib/wordpress/connector'
import queryFormById from '@/lib/wordpress/gravityForms/queryFormById'

/**
 * Retrieve single form by ID.
 *
 * @author WebDevStudios
 * @param  {string} id Form ID.
 * @return {object}    Post data or error object.
 */
export default async function getGfFormById(id) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const form = await apolloClient
    .query({query: queryFormById, variables: {id}})
    .then((response) => response?.data?.gravityFormsForm ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message
      }
    })

  if (!form) {
    return {
      isError: true,
      message: `An error occurred while trying to retrieve data for form "${id}."`
    }
  }

  return form
}
