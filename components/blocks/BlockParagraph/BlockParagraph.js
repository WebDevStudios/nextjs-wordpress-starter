import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * Paragraph Block
 *
 * The core Paragraph block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockParagraph({props}) {
  const {className, align, anchor, content} = props
  // TODO Add settings for unused props in default WP Paragraph Block
  const alignment = !align ? 'left' : align
  return (
    <p
      className={cn(
        'container',
        'container--sm',
        `text-${alignment}`,
        className
      )}
      id={anchor}
      tag="p"
    >
      {content}
    </p>
  )
}

BlockParagraph.propTypes = {
  props: PropTypes.object.isRequired,
  align: PropTypes.string,
  anchor: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  fontSize: PropTypes.string,
  textColor: PropTypes.string
}
