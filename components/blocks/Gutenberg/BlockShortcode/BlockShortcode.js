import PropTypes from 'prop-types'

/**
 * Shortcode Block.
 *
 * The core Shortcode block from Gutenberg.
 *
 * @author WebDevStudios
 * @param props.props
 * @param {object}    props The component attributes as props.
 */
export default function BlockShortcode({props}) {
  const {content} = props

  return <div dangerouslySetInnerHTML={{__html: content}} />
}

BlockShortcode.propTypes = {
  props: PropTypes.object.isRequired,
  content: PropTypes.string
}
