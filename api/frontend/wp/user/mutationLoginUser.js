import {gql} from '@apollo/client'

// Mutation: Login a user in WP
const mutationLoginUser = gql`
  mutation LOGIN_USER($username: String!, $password: String!) {
    login(
      input: {
        username: $username
        password: $password
        clientMutationId: "LoginUser"
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

export default mutationLoginUser
