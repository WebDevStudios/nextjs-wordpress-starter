import Spacer from '@/components/atoms/Spacer'
import PropTypes from 'prop-types'

/**
 * Spacer Block
 *
 * The core Spacer block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props        The component attributes as props.
 * @param {string} props.anchor Optional anchor/id.
 * @param {number} props.height The height of the spacer.
 * @return {Element}            The Spacer component.
 */
export default function BlockSpacer({anchor, height}) {
  return <Spacer height={height} id={anchor} />
}

BlockSpacer.propTypes = {
  anchor: PropTypes.string,
  height: PropTypes.number
}
BlockSpacer.defaultProps = {
  height: 40
}
