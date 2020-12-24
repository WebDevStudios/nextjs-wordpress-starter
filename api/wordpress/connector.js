import {useMemo} from 'react'
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import getEnvVar from '@/functions/getEnvVar'

// Define env vars.
export const wpApiUrlBase = getEnvVar('WORDPRESS_API_URL')

// Set global state name.
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

/**
 * Create an basic Apollo client.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 */
export function createApolloClient() {
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
 * Init Apollo and merge with initial state.
 *
 * @param {mixed} initialState The initial state of things.
 */
export function initializeApollo(initialState = null) {
  // Only run one instance of the Apollo client.
  const _apolloClient = apolloClient ?? createApolloClient()

  // If a page has Next.js data fetching methods that
  // use Apollo Client, the initial state gets hydrated here.
  if (initialState) {
    // Get existing cache, loaded during client side data fetching.
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps()/getServerSideProps().
    const data = merge(initialState, existingCache, {
      // Combine arrays using object equality (like in sets).
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        )
      ]
    })

    // Restore the cache with the merged data.
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client.
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

/**
 * Pass down Apollo state to page props.
 *
 * @param {object} client Apollo  Client props.
 * @param {object} pageProps      Props from getStaticProps().
 */
export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

/**
 * Only update when the cache value has changed.
 *
 * @param {object} pageProps Props from getStaticProps().
 */
export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
