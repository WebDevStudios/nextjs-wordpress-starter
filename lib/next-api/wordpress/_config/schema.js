import {gql} from '@apollo/client'
import {GraphQLUpload} from 'graphql-upload'

// Define WP Next.js API GraphQL resolvers.
export const resolvers = {
  Upload: GraphQLUpload
}

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
