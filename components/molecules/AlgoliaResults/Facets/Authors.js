import PropTypes from 'prop-types'
import CustomRefinementList from '../Refinements/CustomRefinementList'

/**
 * Component for displaying Post Type facets.
 */
const Authors = ({refinements, defaultRefinement, className}) => {
  const data = {
    title: 'Authors',
    attribute: 'post_author.display_name',
    showMore: true,
    limit: refinements.limit,
    translations: refinements.translations,
    defaultRefinement: defaultRefinement ? [defaultRefinement] : [],
    className: className
  }
  return <CustomRefinementList {...data} />
}
export default Authors

Authors.propTypes = {
  refinements: PropTypes.shape({
    limit: PropTypes.number,
    translations: PropTypes.any
  }),
  defaultRefinement: PropTypes.string,
  className: PropTypes.string
}
