import {useMemo} from 'react'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'

// Set global state name.
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

/**
 * Init Apollo and merge with initial state.
 *
 * @author WebDevStudios
 * @param  {Object} apolloClient Apollo client instance.
 * @param  {mixed}  initialState The initial state of things.
 * @return {Object}              Apollo client instance.
 */
export function initializeApollo(apolloClient, initialState = null) {
  // If a page has Next.js data fetching methods that
  // use Apollo Client, the initial state gets hydrated here.
  if (initialState) {
    // Get existing cache, loaded during client side data fetching.
    const existingCache = apolloClient.extract()

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
    apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') return apolloClient

  return apolloClient
}

/**
 * Pass down Apollo state to page props.
 *
 * @author WebDevStudios
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
 * @author WebDevStudios
 * @param  {object} pageProps Props from getStaticProps().
 */
export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
