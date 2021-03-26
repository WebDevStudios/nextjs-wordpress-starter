import {gql} from '@apollo/client'

// Mutation: Register a user in WP.
const mutationRegisterUser = gql`
  mutation REGISTER_USER(
    $email: String!
    $username: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    registerUser(
      input: {
        email: $email
        username: $username
        password: $password
        firstName: $firstName
        lastName: $lastName
        clientMutationId: "RegisterUser"
      }
    ) {
      user {
        databaseId
        username
        firstName
        lastName
        jwtAuthToken
        email
      }
    }
  }
`

export default mutationRegisterUser
