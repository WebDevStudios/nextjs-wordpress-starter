import PropTypes from 'prop-types'
import CustomRefinementList from '../refinements/CustomRefinementList'

/**
 * Render the PostType component.
 *
 * @author WebDevStudios
 * @param {object} props                   The component attributes as props.
 * @param {object} props.refinements       The refinement properties.
 * @param {string} props.defaultRefinement The default refinement setting.
 * @param {string} props.className         The component className.
 * @return {Element}                       The PostType component.
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
