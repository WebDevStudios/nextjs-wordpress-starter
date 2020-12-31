import PropTypes from 'prop-types'

/**
 * List Block
 *
 * The core List block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockList({props}) {
  const {className, ordered, anchor, values} = props

  return (
    <pre>{JSON.stringify({className, ordered, anchor, values}, null, 2)}</pre>
  )
}

BlockList.propTypes = {
  props: PropTypes.object.isRequired,
  anchor: PropTypes.string,
  ordered: PropTypes.string,
  className: PropTypes.string,
  values: PropTypes.string
}
