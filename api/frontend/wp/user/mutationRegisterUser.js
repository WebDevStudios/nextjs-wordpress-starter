import {gql} from '@apollo/client'

// Mutation: Register a user in WP
const mutationRegisterUser = gql`
  mutation REGISTER_USER(
    $email: String!
    $username: String!
    $password: String!
  ) {
    registerUser(
      input: {
        email: $email
        username: $username
        password: $password
        clientMutationId: "RegisterUser"
      }
    ) {
      user {
        databaseId
        username
        jwtAuthToken
      }
    }
  }
`

export default mutationRegisterUser
