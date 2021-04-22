import {initializeNextApiApollo} from '@/lib/next-api/connector'
import mutationSubmitForm from '@/lib/next-api/wordpress/gravityForms/mutationSubmitForm'
import processGfFieldValues from './processGfFieldValues'

/**
 * Process GF form submission via Next API.
 *
 * @author WebDevStudios
 * @param {number} formId   GF form ID.
 * @param {object} formData GF form data.
 * @return {object}         Confirmation or error messaging.
 */
export default function processGfFormSubmission(formId, formData) {
  // Check data values.
  if (!formId || !parseInt(formId, 10)) {
    return {
      error: true,
      errorMessage: 'Form ID is not valid.'
    }
  }

  if (!formData) {
    return {
      error: true,
      errorMessage: 'No form data provided.'
    }
  }

  const fieldValues = processGfFieldValues(formId, formData)

  const apolloClient = initializeNextApiApollo()

  return apolloClient
    .mutate({
      mutation: mutationSubmitForm,
      variables: {
        formId,
        fieldValues
      }
    })
    .then((response) => {
      const {entryId, confirmationMessage} = response?.data

      if (!entryId) {
        return {
          error: true,
          errorMessage:
            'An error occurred while attempting to process the form entry.'
        }
      }

      return {
        entryId,
        confirmationMessage
      }
    })
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
