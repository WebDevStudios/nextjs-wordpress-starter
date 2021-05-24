/**
 * Process and format GF form field values for submission.
 *
 * Note: the following fields are currently unsupported in the project; if they are added, they will need custom handling for display and entry handling here:
 * - AddressField
 * - CaptchaField
 * - ChainedSelectField
 * - DateField
 * - EmailField with Email Confirmation enabled
 * - FileUploadField
 * - HiddenField
 * - ListField
 * - MultiSelectField
 * - NameField
 * - NumberField
 * - RadioField
 * - TimeField
 *
 * @see https://github.com/harness-software/wp-graphql-gravity-forms#submit-a-form
 * @author WebDevStudios
 * @param  {object} entryData GF form entry data.
 * @param  {object} fieldData GF form field config.
 * @return {Array}            Formatted GF field values.
 */
export default function processGfFieldValues(entryData, fieldData) {
  const fieldValues = []
  const fields = {}

  // Ensure fieldData is valid.
  if (!fieldData?.edges || !fieldData.edges.length) {
    return fieldValues
  }

  fieldData.edges.forEach((field) => {
    if (!field?.node?.id) {
      return
    }

    // Add fields config to fields object with ID as key.
    fields[field.node.id] = field.node
  })

  Object.keys(entryData).forEach((fieldName) => {
    // Extract first part of field name ("field-<ID>").
    const fieldNamePieces = fieldName.match(/^field-\d+/)

    // Ensure a field ID was found.
    if (!fieldNamePieces || !fieldNamePieces.length) {
      return
    }

    // Extract field ID from field name.
    const fieldId = parseInt(fieldNamePieces[0].replace('field-', ''), 10)

    // Get field config by ID.
    const field = fields?.[fieldId]

    // Ensure field ID exists in field config.
    if (!field) {
      return
    }

    const fieldValue = {
      id: fieldId
    }

    // Skip if empty/undefined value.
    if (!entryData[fieldName]) {
      return
    }

    switch (field?.__typename) {
      case 'CheckboxField':
        fieldValue.checkboxValues = []

        if (!entryData[fieldName].length) {
          return
        }

        // Determine checkbox input IDs from index in field config choices array.
        field.checkboxChoices.forEach((choice, index) => {
          if (!entryData[fieldName].includes(choice.value)) {
            return
          }

          fieldValue.checkboxValues.push({
            inputId: parseFloat(`${fieldId}.${index + 1}`),
            value: choice.value
          })
        })
        break

      case 'EmailField':
        // TODO: As of WP GraphQL Gravity Forms v.0.4.1, this is accurate, but it appears it may be changing to a nested version in the next release: fieldValue.emailValues = { value, confirmationValue }.
        fieldValue.value = entryData[fieldName]
        break

      case 'FileUploadField':
        fieldValue.fileUploadValues = entryData[fieldName]
        break

      default:
        fieldValue.value = entryData[fieldName]
        break
    }

    fieldValues.push(fieldValue)
  })

  return fieldValues
}
