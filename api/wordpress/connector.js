import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import getEnvVar from '@/functions/getEnvVar'
import {initializeApollo} from '../apolloConfig'

// Define env vars.
export const wpApiUrlBase = getEnvVar('WORDPRESS_API_URL')

// Define Frontend WP API data endpoint base.
const wpDataEndpointBase = '/api/wp'

// Define Frontend WP API data endpoints.
export const wpDataEndpoints = {
  archive: `${wpDataEndpointBase}/loadMorePosts`
}

let wpApolloClient

/**
 * Create a basic Apollo client for connecting to WP.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 *
 * @author WebDevStudios
 * @return {Object} Apollo client instance.
 */
export function createWpApolloClient() {
  return new ApolloClient({
    ssrMode: false,
    link: new HttpLink({
      uri: `${wpApiUrlBase}graphql`,
      credentials: ''
    }),
    cache: new InMemoryCache()
  })
}

/**
 * Init Apollo for WP and merge with initial state.
 *
 * @author WebDevStudios
 * @param  {mixed} initialState Initial Apollo state.
 * @return {Object}             WP Apollo client instance.
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
