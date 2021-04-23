import {initializeApollo} from '@/lib/apolloConfig'
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'

// Define env vars.
export const wpApiUrlBase = process.env.WORDPRESS_URL
export const wpPreviewSecret = process.env.WORDPRESS_PREVIEW_SECRET
const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME
const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD

// Set WP application password auth header.
const wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
  'base64'
)

let wpApolloClient

/**
 * Create a basic Apollo client for connecting to WP.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 *
 * @author WebDevStudios
 * @param {boolean} auth Whether to include authentication via WP application password.
 * @return {object} Apollo client instance.
 */
export function createWpApolloClient(auth = false) {
  return new ApolloClient({
    ssrMode: false,
    link: new HttpLink({
      uri: `${wpApiUrlBase}graphql`,
      credentials: '',
      headers: {
        authorization: auth ? `Basic ${wpAuthorization}` : ''
      }
    }),
    cache: new InMemoryCache()
  })
}

/**
 * Init Apollo for WP and merge with initial state.
 *
 * @author WebDevStudios
 * @param {*} initialState Initial Apollo state.
 * @return {object} WP Apollo client instance.
 */
export function initializeWpApollo(initialState = null) {
  // Only run one instance of the Apollo client.
  const _apolloClient = wpApolloClient ?? createWpApolloClient()

  const newApolloClient = initializeApollo(_apolloClient, initialState)

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') return newApolloClient

  // Create the Apollo Client once in the client.
  if (!wpApolloClient) wpApolloClient = newApolloClient

  return newApolloClient
}
