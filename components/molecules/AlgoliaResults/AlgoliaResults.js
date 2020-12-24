import {searchResultsClient} from '@/api/algolia/connector'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import {Configure, InstantSearch} from 'react-instantsearch-dom'
import styles from './AlgoliaResults.module.css'
import NoResults from './Templates/NoResults'
import SearchResults from './Templates/SearchResults'

// TODO: Create Storybook for this component.

export default function AlgoliaResults({indexName, config, show_filters}) {
  return (
    <section className={cn('container', styles.algoliaResults)}>
      <div className={styles.resultsWrap}>
        <h1>Search Results</h1>
        {config.query !== '' && (
          <InstantSearch
            searchClient={config.query !== '' ? searchResultsClient : ''}
            indexName={indexName}
          >
            <Configure {...config} />
            <SearchResults indexName={indexName} />
          </InstantSearch>
        )}
        {config.query === '' && <NoResults query={config.query} />}
      </div>
    </section>
  )
}

AlgoliaResults.propTypes = {
  indexName: PropTypes.string,
  config: PropTypes.shape({
    query: PropTypes.string,
    hitsPerPage: PropTypes.number.isRequired
  })
}

AlgoliaResults.defaultProps = {
  config: {
    query: '',
    hitsPerPage: 15
  }
}
