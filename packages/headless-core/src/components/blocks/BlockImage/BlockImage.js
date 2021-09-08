import PropTypes from 'prop-types'
import DisplayImage from '../../atoms/Image'

/**
 * Image Block
 *
 * The core Image block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props The component props.
 * @return {Element}       The Block Image component.
 */
export function BlockImage(props) {
  return <DisplayImage {...props} />
}

BlockImage.propTypes = {
  props: PropTypes.object
}
