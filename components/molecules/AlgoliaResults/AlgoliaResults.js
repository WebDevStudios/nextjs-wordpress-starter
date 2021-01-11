import {searchResultsClient} from '@/api/algolia/connector'
import cn from 'classnames'
import PropTypes from 'prop-types'
import {AlgoliaContext} from '@/components/common/AlgoliaProvider'
import React, {useContext} from 'react'
import {Configure, InstantSearch} from 'react-instantsearch-dom'
import styles from './AlgoliaResults.module.css'
import NoResults from './Templates/NoResults'
import SearchResults from './Templates/SearchResults'

// TODO: Create Storybook for this component.

export default function AlgoliaResults({config}) {
  const {indexName} = useContext(AlgoliaContext)
  return (
    <section className={cn('container', styles.algoliaResults)}>
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
    </section>
  )
}

AlgoliaResults.propTypes = {
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
