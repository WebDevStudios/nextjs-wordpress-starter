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
  const hasQuery = path.includes('q=') // Do we have a querystring value.
  const query = hasQuery ? parseQuerystring(path, 'q') : '' // Parse the QS.
  const storageName = indexName // Local Storage Name.

  const [searchState, setSearchState] = useState(query)
  const [searchHistory, setSearchHistory] = useState([])
  const [displayHistory, setDisplayHistory] = useState(0)

  // Delete recent searches and history
  const clearLocalStorage = () => {
    deleteLocalStorage(storageName)
    setSearchHistory([])
  }

  // Show/Hide the search history.
  const showHistory = useCallback(() => {
    setDisplayHistory(searchState === '' ? true : false)
  }, [searchState])

  // SearchState
  useEffect(() => {
    showHistory()
  }, [searchState, showHistory])

  // On Page Load
  useEffect(() => {
    console.log('dwdw')
    // Get Search History
    if (localStorage) {
      const history = localStorage.getItem(storageName)
      if (history) {
        let searchHistory = JSON.parse(history)
        searchHistory = searchHistory.slice(0, 6)
        setSearchHistory(searchHistory)
      }
    }
  }, [storageName])

  return (
    <section className={styles.algoliaSearch} id="site-search">
      <div className={styles.wrap}>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <Configure query={router?.query?.q || ''} hitsPerPage={6} />
          <SearchBox
            className={styles.aisSearchBox}
            onSubmit={(e) =>
              searchSubmit(e, setSearchState, searchState, storageName)
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
              placeholder: 'Search resources...'
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
