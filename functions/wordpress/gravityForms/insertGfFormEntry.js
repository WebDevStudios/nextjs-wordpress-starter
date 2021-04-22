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
    .then((response) => {
      const {entryId, entry} = response?.data?.submitGravityFormsForm?.entryId

      // Set error props if data not found.
      if (!entryId) {
        response.error = true
        response.errorMessage =
          'An error occurred while submitting the form entry.'

        return null
      }

      response.entryId = entryId
      response.confirmationMessage =
        entry?.form?.node?.confirmations?.message ||
        'Thanks for contacting us! We will get in touch with you shortly.'
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
