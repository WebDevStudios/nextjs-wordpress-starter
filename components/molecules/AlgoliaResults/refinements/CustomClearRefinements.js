import PropTypes from 'prop-types'
import {connectCurrentRefinements} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'

/**
 * Render the ClearRefinements component.
 *
 * @author WebDevStudios
 * @see https://www.algolia.com/doc/api-reference/widgets/clear-refinements/react/
 * @param {object}   props        The component attributes as props.
 * @param {any}      props.items  Any refinement.
 * @param {Function} props.refine Modifies the items being displayed.
 * @return {Element}              The ClearRefinements component.
 */
function ClearRefinements({items, refine}) {
  return (
    <>
      {!!items?.length && (
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
