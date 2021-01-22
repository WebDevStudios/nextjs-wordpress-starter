import Spacer from '@/components/atoms/Spacer'
import PropTypes from 'prop-types'

/**
 * Spacer Block
 *
 * The core Spacer block from Gutenberg.
 *
 * @author WebDevStudios
 * @param props.props
 * @param {object}    props        The component attributes as props.
 * @param {string}    props.anchor Optional anchor/id.
 * @param {string}    props.height The height of the spacer.
 * @return {Element}               The Spacer component.
 */
export default function BlockSpacer({props}) {
  const {anchor, height} = props
  return <Spacer pxHeight={height} id={anchor} />
}

BlockSpacer.propTypes = {
  props: PropTypes.object.isRequired,
  anchor: PropTypes.string,
  height: PropTypes.number
}
