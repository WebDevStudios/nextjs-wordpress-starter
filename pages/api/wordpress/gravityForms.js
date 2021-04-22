import insertGfFormEntry from '@/functions/wordpress/gravityForms/insertGfFormEntry'

/**
 * Process Gravity Forms form entries.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
 */
export default async function gravityForms(req, res) {
  try {
    // Retrieve props from request query params.
    const {formId, fieldValues} = req.query

    // Basic check to see if the referer matches the host.
    // This is trivially easy to bypass, but it's a first step.
    if (
      !req.headers.referer ||
      !req.headers.referer.includes(req.headers.host)
    ) {
      throw new Error('Unauthorized access')
    }

    const formEntry = await insertGfFormEntry(formId, fieldValues)

    // Check for errors.
    if (formEntry?.error) {
      throw new Error(formEntry?.errorMessage)
    }

    // Remove Apollo client from return.
    delete formEntry?.apolloClient

    res.status(200).send(formEntry)
  } catch (error) {
    res
      .status(error?.status || 500)
      .end(
        error?.message || 'An error occurred while processing the form entry'
      )
  }
}
