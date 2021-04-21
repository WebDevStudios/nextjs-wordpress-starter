import {gql} from '@apollo/client'

// Mutation: submit GF form entry.
const mutationInsertFormEntry = gql`
  mutation SUBMIT_FORM_ENTRY($formId: Int!, $fieldValues: [FieldValuesInput]) {
    submitGravityFormsForm(
      input: {
        formId: $formId
        clientMutationId: "submitGfForm"
        fieldValues: $fieldValues
      }
    ) {
      clientMutationId
      entryId
      resumeToken
      resumeUrl
    }
  }
`

export default mutationInsertFormEntry

