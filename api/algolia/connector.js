import algoliasearch from 'algoliasearch/lite'
import getEnvVar from '@/functions/getEnvVar'

// Define env vars.
export const algoliaIndexName = getEnvVar('ALGOLIA_INDEX_NAME', true)
export const algoliaSearchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY
export const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID

const algoliaClient = algoliasearch(algoliaAppId, algoliaSearchKey)

export const searchClient = {
  search(requests) {
    if (requests.every(({params}) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0
        }))
      })
    }

    return algoliaClient.search(requests)
  }
}

export const searchResultsClient = {
  search(requests) {
    return algoliaClient.search(requests)
  }
}
