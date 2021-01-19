import {ApolloClient, InMemoryCache} from '@apollo/client'
import {initializeApollo} from '../apolloConfig'
import {RestLink} from 'apollo-link-rest'

let feApolloClient

// Define Frontend API endpoint.
const restLink = new RestLink({
  uri: '/api'
})

/**
 * Create a basic Apollo client for connecting to Frontend API.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 *
 * @author WebDevStudios
 * @return {object} Apollo client instance.
 */
export function createFeApolloClient() {
  return new ApolloClient({
    ssrMode: false,
    link: restLink,
    cache: new InMemoryCache()
  })
}

/**
 * Init Apollo for Frontend API and merge with initial state.
 *
 * @author WebDevStudios
 * @param {*} initialState Initial Apollo state.
 * @return {object}        Frontend Apollo client instance.
 */
export function initializeFeApollo(initialState = null) {
  // Only run one instance of the Apollo client.
  const _apolloClient = feApolloClient ?? createFeApolloClient()

  const newApolloClient = initializeApollo(_apolloClient, initialState)

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') return newApolloClient

  // Create the Apollo Client once in the client.
  if (!feApolloClient) feApolloClient = newApolloClient

  return newApolloClient
}
