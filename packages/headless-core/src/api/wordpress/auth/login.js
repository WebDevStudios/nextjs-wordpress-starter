import {gql} from '@apollo/client'
import {initializeWpApollo} from '../client'

// Mutation: log user into WP.
export const mutationLoginUser = gql`
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

/**
 * Log user into WP.
 *
 * @author WebDevStudios
 * @param  {string} username Username.
 * @param  {string} password User password.
 * @param  {object} client   Apollo client instance.
 * @return {object}          User data or error object.
 */
export async function loginUser(username, password, client = null) {
  const apolloClient = client ?? initializeWpApollo()

  return apolloClient
    .mutate({
      mutation: mutationLoginUser,
      variables: {
        username,
        password
      }
    })
    .then(
      (response) =>
        response?.data?.login?.user ?? {
          error: true,
          errorMessage: `An error occurred while attempting to login.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
