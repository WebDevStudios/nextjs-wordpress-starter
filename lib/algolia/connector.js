import algoliasearch from 'algoliasearch/lite'

// Define env vars.
export const algoliaIndexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
export const algoliaSearchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_KEY
export const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID

const algoliaClient = algoliasearch(algoliaAppId, algoliaSearchKey)

// https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?client=javascript
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
