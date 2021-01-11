import SearchIcon from './SearchIcon'
import styles from '../AlgoliaSearch.module.css'
import PropTypes from 'prop-types'

/**
 * This component renders a placeholder for the Algolia `Search` component.
 * The `Search` component is loaded using Dynamic Imports in Next once initiated by the user.
 */
export default function SearchPlaceholder({toggleAlgolia, query}) {
  return (
    <div className={styles.searchPlaceholder}>
      <div className={styles.searchBox}>
        <div
          role="button"
          tabIndex="0"
          className={styles.trigger}
          onClick={() => {
            toggleAlgolia(true)
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              toggleAlgolia(true)
            }
          }}
        />
        <input
          tabIndex="-1"
          type="search"
          value={query}
          placeholder="Enter search term..."
          readOnly
        />
        <button type="button" tabIndex="-1">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

SearchPlaceholder.propTypes = {
  toggleAlgolia: PropTypes.func,
  query: PropTypes.string
}
