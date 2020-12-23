import PropTypes from 'prop-types'

/**
 * Spacer Block
 *
 * The core Spacer block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockSpacer({props}) {
  const {anchor, height} = props
  return <pre>{JSON.stringify({anchor, height}, null, 2)}</pre>
}

BlockSpacer.propTypes = {
  props: PropTypes.object.isRequired,
  anchor: PropTypes.string,
  height: PropTypes.number
}
