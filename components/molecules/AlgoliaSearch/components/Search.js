import {searchClient} from '@/api/algolia/connector'
import searchSubmit from '../functions/searchSubmit'
import PropTypes from 'prop-types'
import React, {useCallback, useEffect, useState} from 'react'
import {Configure, InstantSearch, SearchBox} from 'react-instantsearch-dom'
import {deleteLocalStorage} from '../functions/localStorage'
import Results from './Results'
import styles from '../AlgoliaSearch.module.css'
import SearchIcon from './SearchIcon'

// TODO: Create Storybook for this component.

/**
 * Component for rendering Algolia search with history.
 */
export default function Search({indexName, useHistory, query}) {
  const storageName = indexName // Local Storage Name - set to algolia index.
  const historyLength = 6 // Max amount of history items to save to local storage.

  const [searchState, setSearchState] = useState(query)
  const [searchHistory, setSearchHistory] = useState([])
  const [displayHistory, setDisplayHistory] = useState(0)

  const config = {
    query: query,
    hitsPerPage: 6
  }

  /**
   * Show/Hide the search history.
   *
   * @return {boolean}
   */
  const showHistory = useCallback(() => {
    setDisplayHistory(searchState === '')
  }, [searchState])

  // Track changes in `searchState`.
  useEffect(() => {
    showHistory()
  }, [searchState, showHistory])

  // Get search history on initial page load.
  useEffect(() => {
    if (localStorage && useHistory) {
      const history = localStorage.getItem(storageName)
      if (history) {
        let searchHistory = JSON.parse(history)
        setSearchHistory(searchHistory)
      }
    }
  }, [storageName, useHistory])

  // Delete recent searches and clear history.
  const clearLocalStorage = () => {
    deleteLocalStorage(storageName)
    setSearchHistory([])
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <Configure {...config} />
      <div className={styles.aisSearchBox}>
        <SearchBox
          autoFocus={true}
          onSubmit={(e) =>
            searchSubmit(
              e,
              setSearchState,
              searchState,
              storageName,
              historyLength
            )
          }
          onFocus={() => showHistory()}
          onKeyUp={(e) => {
            setSearchState(e.currentTarget.value)
          }}
          onReset={() => {
            setSearchState('')
          }}
          submit={<SearchIcon />}
          defaultRefinement={query || null}
          translations={{
            submitTitle: 'Submit Search Query.',
            resetTitle: 'Clear Search Query',
            placeholder: 'Enter search term...'
          }}
        />
      </div>
      <Results
        displayHistory={displayHistory}
        searchHistory={searchHistory}
        clearLocalStorage={clearLocalStorage}
      />
    </InstantSearch>
  )
}

Search.propTypes = {
  indexName: PropTypes.string.isRequired,
  useHistory: PropTypes.bool,
  query: PropTypes.string
}

Search.defaultProps = {
  useHistory: true
}
