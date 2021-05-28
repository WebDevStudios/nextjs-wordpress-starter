import encodeGfFormData from '@/functions/wordpress/gravityForms/encodeGfFormData'
import {initializeApollo} from '@/lib/apolloConfig'
import {typeDefs} from '@/lib/next-api/wordpress/_config/schema'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {RestLink} from 'apollo-link-rest'

let nextApiApolloClient

// Define API route bases.
const nextApiRouteBases = {
  wordpress: '/wordpress'
}

// Define API routes.
export const nextApiRoutes = {
  wordpress: {
    archive: `${nextApiRouteBases.wordpress}/archive`,
    comments: `${nextApiRouteBases.wordpress}/comments`,
    gravityForms: `${nextApiRouteBases.wordpress}/gravityForms`
  }
}

// Define Next.js API route link.
const restLink = new RestLink({
  uri: '/api',
  bodySerializers: {
    encodeGfFormData
  }
})

/**
 * Create a basic Apollo client for connecting to Next.js API Routes.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 * @author WebDevStudios
 * @return {object} Apollo client instance.
 */
export function createNextApiApolloClient() {
  return new ApolloClient({
    ssrMode: false,
    link: restLink,
    cache: new InMemoryCache(),
    // TODO: figure out how to combine multiple type defs (i.e., WP and other APIs) and pass as single prop here.
    typeDefs
  })
}

/**
 * Init Apollo for Next.js API and merge with initial state.
 *
 * @author WebDevStudios
 * @param  {*}      initialState Initial Apollo state.
 * @return {object}              Next.js API Apollo client instance.
 */
export function initializeNextApiApollo(initialState = null) {
  // Only run one instance of the Apollo client.
  const _apolloClient = nextApiApolloClient ?? createNextApiApolloClient()

  const newApolloClient = initializeApollo(_apolloClient, initialState)

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') return newApolloClient

  // Create the Apollo Client once in the client.
  if (!nextApiApolloClient) nextApiApolloClient = newApolloClient

  return newApolloClient
}
