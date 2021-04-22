import {initializeWpApollo} from '@/lib/wordpress/connector'
import mutationInsertFormEntry from '@/lib/wordpress/gravityForms/mutationInsertFormEntry'

/**
 * Submit GF form entry via WP GraphQL.
 *
 * @author WebDevStudios
 * @param {number} formId     GF form ID.
 * @param {object} formValues GF form field values.
 * @return {formValues}       Entry ID or error object.
 */
export default async function insertGfFormEntry(formId, formValues) {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    success: false,
    entryId: null
  }

  // Determine query variables.
  const variables = {
    formId,
    formValues
  }

  // Execute query.
  await apolloClient
    .mutate({
      mutation: mutationInsertFormEntry,
      variables
    })
    .then((entry) => {
      const {entryId} = entry?.data?.submitGravityFormsForm?.entryId

      // Set error props if data not found.
      if (!entryId) {
        response.error = true
        response.errorMessage =
          'An error occurred while submitting the form entry.'

        return null
      }

      response.entryId = entryId
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
