import {searchClient} from '@/api/algolia/connector'
import {parseQuerystring} from '@/lib/functions'
import {useRouter} from 'next/router'
import searchSubmit from './functions/searchSubmit'
import PropTypes from 'prop-types'
import React, {useCallback, useEffect, useState} from 'react'
import {Configure, InstantSearch, SearchBox} from 'react-instantsearch-dom'
import styles from './AlgoliaSearch.module.css'
import Results from './components/Results'
import {deleteLocalStorage} from './functions/localStorage'

export default function AlgoliaSearch({indexName}) {
  const router = useRouter()
  const path = router?.asPath // URL from router.
  const query = path.includes('q=') ? parseQuerystring(path, 'q') : '' // Parse the querystring.
  const storageName = indexName // Local Storage Name - set to algolia index.
  const historyLength = 6 // Max amount of history items to save to local storage.

  // React state.
  const [searchState, setSearchState] = useState(query)
  const [searchHistory, setSearchHistory] = useState([])
  const [displayHistory, setDisplayHistory] = useState(0)

  // Initial Algolia config.
  const algoliaConfig = {
    query: router?.query?.q || '',
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
    if (localStorage) {
      const history = localStorage.getItem(storageName)
      if (history) {
        let searchHistory = JSON.parse(history)
        setSearchHistory(searchHistory)
      }
    }
  }, [storageName])

  // Delete recent searches and clear history.
  const clearLocalStorage = () => {
    deleteLocalStorage(storageName)
    setSearchHistory([])
  }

  return (
    <section className={styles.algoliaSearch} id="site-search">
      <div className={styles.wrap}>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <Configure {...algoliaConfig} />
          <SearchBox
            className={styles.aisSearchBox}
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
            defaultRefinement={router?.query?.q || null}
            translations={{
              submitTitle: 'Submit Search Query.',
              resetTitle: 'Clear Search Query',
              placeholder: 'Enter search term...'
            }}
          />
          <Results
            displayHistory={displayHistory}
            searchHistory={searchHistory}
            clearLocalStorage={clearLocalStorage}
          />
        </InstantSearch>
      </div>
    </section>
  )
}

AlgoliaSearch.propTypes = {
  indexName: PropTypes.string
}
