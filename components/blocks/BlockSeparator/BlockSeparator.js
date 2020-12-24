import PropTypes from 'prop-types'

/**
 * Separator Block
 *
 * The core Separator block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockSeparator({props}) {
  const {className, color, anchor} = props

  const isFullWidth =
    (className && className.includes('is-style-full-width')) > 0 ? true : false

  return (
    <pre>
      {JSON.stringify(isFullWidth, {className, color, anchor}, null, 2)}
    </pre>
  )
}

BlockSeparator.propTypes = {
  props: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  anchor: PropTypes.string
}
