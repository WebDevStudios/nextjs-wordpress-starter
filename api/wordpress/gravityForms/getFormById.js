import {initializeWpApollo} from '../connector'
import queryFormById from './queryFormById'

/**
 * Retrieve single form by ID.
 *
 * @author WebDevStudios
 * @param  {string} id Form ID.
 * @return {Object}    Post data or error object.
 */
export default async function getFormById(id) {
  // Determine form global ID.
  const formId = Buffer.from(`GravityFormsForm:${id}`).toString('base64')

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const form = await apolloClient
    .query({query: queryFormById, variables: {id: formId}})
    .then((form) => form?.data?.gravityFormsForm ?? null)
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
