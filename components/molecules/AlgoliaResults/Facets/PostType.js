import PropTypes from 'prop-types'
import CustomRefinementList from '../Refinements/CustomRefinementList'

/**
 * Component for displaying Post Type facets.
 */
const PostType = ({refinements, defaultRefinement, className}) => {
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
export default PostType

PostType.propTypes = {
  refinements: PropTypes.shape({
    limit: PropTypes.number,
    translations: PropTypes.any
  }),
  defaultRefinement: PropTypes.string,
  className: PropTypes.string
}
