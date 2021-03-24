import {gql} from '@apollo/client'

// Mutation: log user into WP.
const mutationLoginUser = gql`
  mutation LOGIN_USER_WP($username: String!, $password: String!) {
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
        email
        jwtAuthToken
        jwtAuthExpiration
        jwtRefreshToken
      }
    }
  }
`

export default mutationLoginUser
