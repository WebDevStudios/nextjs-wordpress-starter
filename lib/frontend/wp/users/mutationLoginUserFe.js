import {wpDataEndpoints} from '@/lib/wordpress/connector'
import {gql} from '@apollo/client'

// Mutation: log user into WP via FE.
const mutationLoginUserFe = gql`
  mutation LOGIN_USER_FE(
    $username: String!
    $password: String!
  ) {
    login(
      username: $username
      password: $password
    ) @rest(type: "Login", path: "${wpDataEndpoints.login}?{args}") {
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

export default mutationLoginUserFe
