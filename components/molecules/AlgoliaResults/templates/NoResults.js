import PropTypes from 'prop-types'
import styles from '../AlgoliaResults.module.css'

/**
 * Render the NoResults component.
 *
 * @author WebDevStudios
 * @param {object} props       The component attributes as props.
 * @param {object} props.query The no results data.
 * @return {Element}           The NoResults component.
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
