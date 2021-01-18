import PropTypes from 'prop-types'
import {connectStateResults, Hits} from 'react-instantsearch-dom'
import styles from '../AlgoliaSearch.module.css'
import buildSearchUrl from '../functions/buildSearchUrl'
import searchClick from '../functions/searchClick'
import History from './History'
import Hit from './Hit'

/**
 * Component for rendering Algolia `Hits` and search `History` components.
 */
const Results = connectStateResults(
  ({
    searchResults,
    searchState,
    displayHistory,
    searchHistory,
    clearLocalStorage
  }) => {
    return (
      <div className={styles.dropMenu}>
        {searchState &&
        searchState.query &&
        searchState.query.length > 0 &&
        searchResults &&
        searchResults.nbHits > 0 ? (
          <Hits className={styles.hits} hitComponent={Hit} />
        ) : (
          displayHistory && (
            <History
              history={searchHistory}
              searchClick={searchClick}
              clearLocalStorage={clearLocalStorage}
              buildSearchUrl={buildSearchUrl}
            />
          )
        )}
      </div>
    )
  }
)
export default Results

Results.propTypes = {
  searchResults: PropTypes.object,
  searchState: PropTypes.object,
  displayHistory: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  searchHistory: PropTypes.array,
  clearLocalStorage: PropTypes.func
}
