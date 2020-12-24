import PropTypes from 'prop-types'
import styles from '../AlgoliaResults.module.css'

/**
 * Component for rendering no results content.
 */
const NoResults = ({query}) => {
  return (
    <div className={styles.noResults}>
      {query !== '' && (
        <p className={styles.total}>
          <span>0 Results</span> for {query}
        </p>
      )}
      <div className={styles.empty}>
        <div className={styles.title}>
          Sorry, there are no results found for your search criteria.
          <br />
          <span>Try searching again with a different term.</span>
        </div>
      </div>
    </div>
  )
}
NoResults.propTypes = {
  query: PropTypes.string
}
NoResults.defaultProps = {
  query: ''
}

export default NoResults
