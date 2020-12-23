import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * Headings Block
 *
 * The core Headings block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props The component attributes as props.
 */
export default function BlockHeadings({props}) {
  const {anchor, align, className, content, level} = props
  const alignment = !align ? 'left' : align

  return (
    <h1
      tag={'h' + level}
      className={cn('container container--sm', `text-${alignment}`, className)}
      id={anchor}
    >
      {content}
    </h1>
  )
}

BlockHeadings.propTypes = {
  props: PropTypes.object.isRequired,
  anchor: PropTypes.string,
  align: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  fontSize: PropTypes.string,
  level: PropTypes.string,
  textColor: PropTypes.string
}
