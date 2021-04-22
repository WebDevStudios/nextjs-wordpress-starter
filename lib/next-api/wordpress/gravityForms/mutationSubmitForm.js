import {nextApiRoutes} from '@/lib/next-api/connector'
import {gql} from '@apollo/client'

// Mutation: submit GF form via frontend.
const mutationSubmitForm = gql`
  mutation SUBMIT_FORM(
    $formId: Int!
    $fieldValues: [FieldValuesInput]!
  ) {
    formEntry (
      formId: $formId,
      fieldValues: $fieldValues
    ) @rest(type: "GravityForms", path: "${nextApiRoutes.wordpress.gravityForms}?{args}") {
      entryId
      confirmationMessage
    }
  }
`

export default mutationSubmitForm
