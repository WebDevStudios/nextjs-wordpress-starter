import PropTypes from 'prop-types'
import styles from '../AlgoliaResults.module.css'

/**
 * Component for rendering no results content.
 */
export default function NoResults({query}) {
  return (
    <>
      <h1>Search Results</h1>
      {query !== '' && (
        <p className={styles.total}>
          <span>0 Results</span> for {query}
        </p>
      )}
      <div className={styles.empty}>
        Sorry, there are no results found for your search criteria.
        <br />
        <span>Try searching again with a different term.</span>
      </div>
    </>
  )
}

NoResults.propTypes = {
  query: PropTypes.string
}
NoResults.defaultProps = {
  query: ''
}
