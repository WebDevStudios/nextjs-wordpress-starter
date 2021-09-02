import {gql} from '@apollo/client'
import {initializeWpApollo} from '../client'

// Mutation: Get Auth Token using Refresh Token.
export const mutationRefreshAuthToken = gql`
  mutation REFRESH_AUTH_TOKEN($refreshToken: String!) {
    refreshJwtAuthToken(
      input: {
        jwtRefreshToken: $refreshToken
        clientMutationId: "RefreshAuthToken"
      }
    ) {
      authToken
    }
  }
`

/**
 * Get a new auth token using refresh token.
 *
 * @author WebDevStudios
 * @param  {string} refreshToken User refresh token.
 * @param  {object} client       Apollo client instance.
 * @return {object}              User data or error object.
 */
export async function refreshAuthToken(refreshToken, client = null) {
  const apolloClient = client ?? initializeWpApollo()

  return apolloClient
    .mutate({
      mutation: mutationRefreshAuthToken,
      variables: {
        refreshToken
      }
    })
    .then(
      (response) =>
        response?.data?.refreshJwtAuthToken?.authToken ?? {
          error: true,
          errorMessage: `An error occurred while trying to fetch auth token.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}
