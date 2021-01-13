import PropTypes from 'prop-types'
import {Highlight} from 'react-instantsearch-dom'
import searchClick from '../functions/searchClick'

/**
 * Render the Hit component.
 *
 * @author WebDevStudios
 * @see https://www.algolia.com/doc/api-reference/widgets/hits/react/
 * @param {object} props     The component attributes as props.
 * @param {object} props.hit Renders each hit from the results.
 * @return {Element}         The Hit component.
 */
export default function Hit({hit}) {
  return (
    <button
      type="button"
      data-url={hit?.permalink}
      data-title={hit?.post_title}
      onClick={(e) => searchClick(e)}
    >
      <Highlight attribute="post_title" hit={hit} />
    </button>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}
