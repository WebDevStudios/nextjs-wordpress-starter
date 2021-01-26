import Table from '@/components/atoms/Table'
import PropTypes from 'prop-types'

/**
 * Paragraph Block
 *
 * The core Paragraph block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} className Optional classnames.
 * @param {string} align     Optional alignment style.
 * @param {string} anchor    Optional anchor/id.
 * @param {string} content   The content of the block.
 * @return {Element} The RichText component.
 */
export default function BlockTable({
  anchor,
  head,
  body,
  foot,
  caption,
  className
}) {
  return (
    <Table
      id={anchor}
      className={className}
      tag="p"
      head={head}
      body={body}
      foot={foot}
      caption={caption}
    />
  )
}

BlockTable.propTypes = {
  anchor: PropTypes.string,
  className: PropTypes.string,
  head: PropTypes.array,
  body: PropTypes.array,
  foot: PropTypes.array,
  caption: PropTypes.string
}
