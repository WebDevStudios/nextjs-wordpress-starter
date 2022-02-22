import RichText from '@/components/atoms/RichText'
import PropTypes from 'prop-types'
import React from 'react'
import {connectStateResults, InfiniteHits} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'
import Authors from '../facets/Authors'
import PostType from '../facets/PostType'
import Sort from '../facets/Sort'
import CustomClearRefinements from '../refinements/CustomClearRefinements'
import Hit from './Hit'
import NoResults from './NoResults'

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
              <RichText tag="h1">Search Results</RichText>
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
