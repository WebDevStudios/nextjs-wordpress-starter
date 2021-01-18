import PropTypes from 'prop-types'
import {SortBy} from 'react-instantsearch-dom'

/**
 * Render the Sort component.
 *
 * @author WebDevStudios
 * @param {object} props                   The component attributes as props.
 * @param {string} props.index             The index property.
 * @param {string} props.defaultRefinement The default refinement setting.
 * @return {Element}                       The Sort component.
 */
export default function Sort({index, defaultRefinement}) {
  return (
    <SortBy
      items={[
        {
          value: index,
          label: '-- Sort by -- '
        },
        {
          value: `${index}_title_asc`,
          label: 'Alphabetical'
        },
        {
          value: `${index}_date_desc`,
          label: 'Most Recent'
        }
      ]}
      defaultRefinement={
        defaultRefinement ? `${index}${defaultRefinement}` : index
      }
    />
  )
}

Sort.propTypes = {
  index: PropTypes.string.isRequired,
  defaultRefinement: PropTypes.string
}
