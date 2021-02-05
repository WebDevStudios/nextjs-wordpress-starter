import PropTypes from 'prop-types'
import styles from '../AlgoliaSearch.module.css'
import SearchIcon from './SearchIcon'

/**
 * Render the SearchPlaceholder component.
 *
 * Note: the `Search` component is loaded using Dynamic Imports.
 *
 * @author WebDevStudios
 * @param {object}   props               The component attributes as props.
 * @param {Function} props.toggleAlgolia Toggle the Search component.
 * @param {string}   props.query         The search query.
 * @return {Element} The SearchPlaceholder component.
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
        >
          <span>Click to start searching</span>
        </div>
        <input
          tabIndex="-1"
          type="search"
          value={query}
          placeholder="Enter search term..."
          readOnly
        />
        <button type="button" tabIndex="-1" disabled>
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
