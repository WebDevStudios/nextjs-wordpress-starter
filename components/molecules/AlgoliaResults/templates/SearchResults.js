import PropTypes from 'prop-types'
import React from 'react'
import {connectStateResults, InfiniteHits} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'
import Hit from './Hit'
import NoResults from './NoResults'
import PostType from '../Facets/PostType'
import Authors from '../Facets/Authors'
import CustomClearRefinements from '../Refinements/CustomClearRefinements'
import Sort from '../Facets/Sort'

/**
 * Refinement config passed into Algolia facets.
 */
const refinements = {
  limit: 3,
  translations: {
    showMore(expanded) {
      return expanded ? 'Less' : 'More'
    }
  }
}

/**
 * Component for rendering search results.
 */
const SearchResults = connectStateResults(({searchResults, indexName}) => {
  return (
    <>
      {searchResults && searchResults.nbHits ? (
        <>
          <div className={styles.resultsHeader}>
            <div>
              <h1>Search Results</h1>
              <p className={styles.total}>
                <span>{searchResults.nbHits} Results</span> for{' '}
                {searchResults.query}
              </p>
            </div>
            <Sort index={indexName} />
          </div>
          <div className={styles.results}>
            <aside className={styles.sidebar}>
              <Authors refinements={refinements} />
              <PostType refinements={refinements} />
              <CustomClearRefinements clearsQuery={true} />
            </aside>
            <div className={styles.content}>
              <InfiniteHits
                className={styles.aisHits}
                hitComponent={Hit}
                translations={{
                  loadMore: 'Load More'
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {searchResults && searchResults.nbHits === 0 && (
        <NoResults query={searchResults.query} />
      )}
    </>
  )
})
export default SearchResults

SearchResults.propTypes = {
  searchResults: PropTypes.any,
  indexName: PropTypes.string
}
