import PropTypes from 'prop-types'
import {SortBy} from 'react-instantsearch-dom'

/**
 * Component for displaying Post Type facets.
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
