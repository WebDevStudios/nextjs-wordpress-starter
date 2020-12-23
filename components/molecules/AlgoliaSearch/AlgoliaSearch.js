import {searchClient} from '@/api/algolia/connector'
import {parseQuerystring} from '@/lib/functions'
import cn from 'classnames'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import React, {useCallback, useEffect, useState} from 'react'
import {
  Configure,
  connectStateResults,
  Highlight,
  Hits,
  InstantSearch,
  SearchBox
} from 'react-instantsearch-dom'
import styles from './AlgoliaSearch.module.css'
import History from './Components/History'
import {deleteLocalStorage, setLocalStorage} from './Components/LocalStorage'

export default function AlgoliaSearch({indexName}) {
  const router = useRouter()
  const path = router?.asPath // URL from router.
  const hasQuery = path.includes('q=') // Do we have a querystring value.
  const query = hasQuery ? parseQuerystring(path, 'q') : '' // Parse the QS.

  const [searchState, setSearchState] = useState(query)
  const [searchHistory, setSearchHistory] = useState([])
  const [displayHistory, setDisplayHistory] = useState(0)
  const storageName = indexName

  const config = {
    query: router?.query?.q || '',
    hitsPerPage: 6
  }

  /**
   * Construct Search URL and send user to results.
   *
   * @param {string} query
   * @return {string} url
   */
  const searchUrl = (query) => {
    if (!query) {
      return false
    }
    return `/search?q=${query}`
  }

  /**
   * Individual search dropdown template (Hit)
   *
   * @param {*} props
   */
  const SearchTemplate = ({hit}) => {
    return (
      <button
        type="button"
        data-url={hit?.permalink}
        data-title={hit.post_title}
        onClick={(e) => searchClick(e)}
      >
        <Highlight attribute="post_title" hit={hit} />
      </button>
    )
  }
  SearchTemplate.propTypes = {
    hit: PropTypes.object.isRequired
  }

  /**
   * Display Hits and Search History Results
   */
  const Results = connectStateResults(({searchResults, searchState}) => {
    return (
      <div className={styles.aisDropmenu}>
        {searchState &&
        searchState.query &&
        searchState.query.length > 0 &&
        searchResults &&
        searchResults.nbHits > 0 ? (
          <Hits className={styles.aisHits} hitComponent={SearchTemplate} />
        ) : (
          displayHistory && (
            <History
              history={searchHistory}
              searchClick={searchClick}
              clearLocalStorage={clearLocalStorage}
              searchUrl={searchUrl}
            />
          )
        )}
      </div>
    )
  })

  /**
   * Form submit handler
   *
   * @param {*} e
   */
  const onSubmit = (e) => {
    e.preventDefault()
    const target = e.target
    if (!target) {
      return false
    }
    const term = target.querySelector('input').value.trim()

    if (
      searchState !== '' &&
      target.querySelector('input').value.trim() !== ''
    ) {
      setLocalStorage(storageName, term)

      document.location = searchUrl(term)
    } else {
      // Empty search, set focus back on input.
      target.querySelector('input').focus()
      setSearchState('')
    }
  }

  /**
   * Delete recent searches and reset state
   */
  const clearLocalStorage = () => {
    deleteLocalStorage(storageName)
    setSearchHistory([])
  }

  /**
   * Click Event for Search Results
   *
   * @param {*} e
   */
  const searchClick = (e) => {
    const target = e.currentTarget
    if (!target) {
      return false
    }

    const url = target.dataset.url
    if (url && window) {
      // router.push(url) // Does not work, does not rerender and causes `InfiniteHits` component to get out of sync.
      window.location = url
    }
  }

  /**
   * Show/Hide the search history.
   */
  const showHistory = useCallback(() => {
    setDisplayHistory(searchState === '' ? true : false)
  }, [searchState])

  // SearchState
  useEffect(() => {
    showHistory()
  }, [searchState, showHistory])

  // On Page Load
  useEffect(() => {
    // Get Search History
    if (localStorage) {
      const history = localStorage.getItem(storageName)
      if (history) {
        let searchHistory = JSON.parse(history)
        searchHistory = searchHistory.slice(0, 6)
        setSearchHistory(searchHistory)
      }
    }
  }, [])

  return (
    <section className={styles.algoliaSearch} id="site-search">
      <div className={styles.wrap}>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <Configure {...config} />
          <SearchBox
            className={styles.aisSearchBox}
            onSubmit={(e) => onSubmit(e)}
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
          <Results />
        </InstantSearch>
      </div>
    </section>
  )
}

AlgoliaSearch.propTypes = {
  indexName: PropTypes.string
}
