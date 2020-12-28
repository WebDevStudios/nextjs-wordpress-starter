const {gql} = require('@apollo/client')

/**
 * Partial: retrieve basic data on all form fields.
 *
 * @return {string} Form fields query partial.
 */
function getFormFieldsPartial() {
  const fields = [
    'AddressField',
    'CaptchaField',
    'ChainedSelectField',
    'CheckboxField',
    'DateField',
    'EmailField',
    'FileUploadField',
    'HiddenField',
    'HtmlField',
    'ListField',
    'MultiSelectField',
    'NameField',
    'NumberField',
    'PageField',
    'PasswordField',
    'PhoneField',
    'PostCategoryField',
    'PostContentField',
    'PostCustomField',
    'PostExcerptField',
    'PostImageField',
    'PostTagsField',
    'PostTitleField',
    'RadioField',
    'SectionField',
    'SignatureField',
    'SelectField',
    'TextAreaField',
    'TextField',
    'TimeField',
    'WebsiteField'
  ]

  return (
    fields
      // Build individual query partials by field type.
      .map(
        (field) => `
          ... on ${field} {
            type
            label
            cssClass
          }
        `
      )
      // Connect query partial pieces.
      .join('')
  )
}

// Fragment: retrieve single form fields.
const singleFormFragment = gql`
  fragment SingleFormFields on GravityFormsForm {
    formId
    title
    description
    cssClass
    fields(first: 100) {
      edges {
        node {
          ${getFormFieldsPartial()}
        }
      }
    }
  }
`

// Query: retrieve form by ID.
const queryFormById = gql`
  query GET_FORM_BY_ID($id: ID!) {
    gravityFormsForm(id: $id) {
      ...SingleFormFields
    }
  }
  ${singleFormFragment}
`

export default queryFormById
