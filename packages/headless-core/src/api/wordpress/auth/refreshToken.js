import {gql} from '@apollo/client'

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
