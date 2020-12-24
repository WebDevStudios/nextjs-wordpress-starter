import PropTypes from 'prop-types'

/**
 * Block Quote Block
 *
 * The core Block Quote block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockBlockquote({props}) {
  const {
    id,
    anchor,
    className,
    data: {quote, style}
  } = props

  const type = style === 'misc-white' ? 'a' : 'b'
  return (
    <pre>
      {JSON.stringify(
        type,
        {
          id,
          anchor,
          className,
          data: {quote, style}
        },
        null,
        2
      )}
    </pre>
  )
}

BlockBlockquote.propTypes = {
  props: PropTypes.object.isRequired,
  id: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.shape({
    quote: PropTypes.string,
    style: PropTypes.string
  })
}
