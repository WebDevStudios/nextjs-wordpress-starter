import PropTypes from 'prop-types'
import CustomRefinementList from '../refinements/CustomRefinementList'

/**
 * Component for displaying Post Type facets.
 */
export default function PostType({refinements, defaultRefinement, className}) {
  const data = {
    title: 'Content Type',
    attribute: 'post_type_label',
    showMore: true,
    limit: refinements.limit,
    translations: refinements.translations,
    defaultRefinement: defaultRefinement ? [defaultRefinement] : [],
    className: className
  }
  return <CustomRefinementList {...data} />
}

PostType.propTypes = {
  refinements: PropTypes.shape({
    limit: PropTypes.number,
    translations: PropTypes.any
  }),
  defaultRefinement: PropTypes.string,
  className: PropTypes.string
}
