import {gql} from '@apollo/client'
import fieldProps from './fieldProps'

/**
 * Partial: retrieve basic data on all form fields.
 *
 * @author WebDevStudios
 * @return {string} Form fields query partial.
 */
function getFormFieldsPartial() {
  return (
    Object.keys(fieldProps)
      // Build individual query partials by field type.
      .map(
        (field) => `
          ... on ${field} {
            ${fieldProps[field]}
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
    formFields {
      edges {
        node {
          conditionalLogic {
            rules {
              fieldId
              operator
              value
            }
            actionType
            logicType
          }
          cssClass
          id
          type
          ${getFormFieldsPartial()}
        }
      }
    }
  }
`

// Query: retrieve form by ID.
const queryFormById = gql`
  query GET_FORM_BY_ID($id: ID!) {
    gravityFormsForm(id: $id, idType: DATABASE_ID) {
      ...SingleFormFields
    }
  }
  ${singleFormFragment}
`

export default queryFormById
