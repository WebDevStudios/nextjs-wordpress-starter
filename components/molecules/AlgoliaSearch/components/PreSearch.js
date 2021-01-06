import SearchIcon from './SearchIcon'
import styles from '../AlgoliaSearch.module.css'
import PropTypes from 'prop-types'

/**
 * Component for rendering a "fake" Algolia search bar.
 */
export default function PreSearch({setLoadAlgolia, query}) {
  return (
    <div className={styles.aisPreSearch}>
      <div className={styles.aisSearchBox}>
        <div
          tabIndex="0"
          className={styles.trigger}
          onClick={() => {
            !setLoadAlgolia(true)
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

PreSearch.propTypes = {
  setLoadAlgolia: PropTypes.func,
  query: PropTypes.string
}
