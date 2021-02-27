import DisplayImage from '@/components/atoms/Image'
import PropTypes from 'prop-types'

/**
 * Image Block
 *
 * The core Image block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component props.
 * @return {Element}     The Block Image component.
 */
export default function BlockImage(props) {
  return <DisplayImage {...props} />
}

BlockImage.propTypes = {
  props: PropTypes.object
}
