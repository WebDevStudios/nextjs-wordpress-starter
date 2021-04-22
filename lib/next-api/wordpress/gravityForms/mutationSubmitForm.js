import {nextApiRoutes} from '@/lib/next-api/connector'
import {gql} from '@apollo/client'

// Mutation: submit GF form via frontend.
const mutationSubmitForm = gql`
  mutation SUBMIT_FORM(
    $formId: Int!
    $formValues: [FieldValuesInput]
  ) {
    formEntry (
      formId: $formId,
      formValues: $formValues
    ) @rest(type: "GravityForms", path: "${nextApiRoutes.wordpress.gravityForms}?{args}") {
      entryId
    }
  }
`

export default mutationSubmitForm
