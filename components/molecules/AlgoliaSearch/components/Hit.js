import PropTypes from 'prop-types'
import searchClick from '../functions/searchClick'
import {Highlight} from 'react-instantsearch-dom'

/**
 * Component for rendering individual search result.
 */
const Hit = ({hit}) => {
  console.log(hit)
  return (
    <button
      type="button"
      data-url={hit?.permalink}
      data-title={hit.post_title}
      onClick={(e) => searchClick(e)}
    >
      <Highlight attribute="post_title" hit={hit} />
    </button>
  )
}
export default Hit

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}
