import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {connectStateResults, InfiniteHits} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'
import Hit from './Hit'
import NoResults from './NoResults'

/**
 * Component for rendering search results.
 */
const SearchResults = connectStateResults(({searchResults, indexName}) => {
  return (
    <>
      <h1>Search Results</h1>
      {searchResults && searchResults.nbHits ? (
        <>
          <p className={styles.total}>
            <span>{searchResults.nbHits} Results</span> for{' '}
            {searchResults.query}
          </p>

          <InfiniteHits
            className={styles.aisHits}
            hitComponent={Hit}
            translations={{
              loadMore: 'Load More'
            }}
          />
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
