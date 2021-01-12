import PropTypes from 'prop-types'
import {connectCurrentRefinements} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'

/**
 * Custom display of Algolia [ClearRefinements](https://www.algolia.com/doc/api-reference/widgets/clear-refinements/react/) widget.
 */
function ClearRefinements({items, refine}) {
  return (
    <>
      {!!items.length && (
        <button
          type="button"
          onClick={() => refine(items)}
          disabled={!items.length}
          className={styles.clearBtn}
        >
          Clear All Filters
        </button>
      )}
    </>
  )
}

ClearRefinements.propTypes = {
  items: PropTypes.any.isRequired,
  refine: PropTypes.func
}

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements)
export default CustomClearRefinements
