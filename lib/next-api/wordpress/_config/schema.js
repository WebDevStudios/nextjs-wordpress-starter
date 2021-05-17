import {gql} from '@apollo/client'

// Define WP Next.js API GraphQL schema.
export const typeDefs = gql`
  scalar Upload

  type AddressInput {
    street: String
    lineTwo: String
    city: String
    state: String
    zip: String
    country: String
  }

  type ChainedSelectInput {
    inputId: Float
    value: String
  }

  type CheckboxInput {
    inputId: Float
    value: String
  }

  type ListInput {
    values: [String]
    rowValues: [String]
  }

  type NameInput {
    prefix: String
    first: String
    middle: String
    last: String
    suffix: String
  }

  type Upload {
    name: String
    type: String
    size: Int
    tmp_name: String
  }

  type FieldValuesInput {
    id: Int!
    addressValues: AddressInput
    chainedSelectValues: [ChainedSelectInput]
    checkboxValues: [CheckboxInput]
    fileUploadValues: Upload
    listValues: [ListInput]
    nameValues: NameInput
    values: [String]
    value: String
  }
`
