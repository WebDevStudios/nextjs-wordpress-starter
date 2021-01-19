import PropTypes from 'prop-types'
import CustomRefinementList from '../refinements/CustomRefinementList'

/**
 * Render the Authors component.
 *
 * @author WebDevStudios
 * @param {object} props                   The component attributes as props.
 * @param {object} props.refinements       The refinement properties.
 * @param {string} props.defaultRefinement The default refinement setting.
 * @param {string} props.className         The component className.
 * @return {Element}                       The Authors component.
 */
export default function Authors({refinements, defaultRefinement, className}) {
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

Authors.propTypes = {
  refinements: PropTypes.shape({
    limit: PropTypes.number,
    translations: PropTypes.any
  }),
  defaultRefinement: PropTypes.string,
  className: PropTypes.string
}
