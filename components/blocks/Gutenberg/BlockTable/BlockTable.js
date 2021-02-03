import Table from '@/components/atoms/Table'
import PropTypes from 'prop-types'

/**
 * Paragraph Block
 *
 * The core Paragraph block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props           The component props.
 * @param {string} props.anchor    Optional anchor/id.
 * @param {Array}  props.body      The body blocks.
 * @param {string} props.caption   The caption.
 * @param {string} props.className Optional classnames.
 * @param {Array}  props.foot      The foot blocks
 * @param {Array}  props.head      The head blocks.
 * @return {Element}               The RichText component.
 */
export default function BlockTable({
  anchor,
  body,
  caption,
  className,
  foot,
  head
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
