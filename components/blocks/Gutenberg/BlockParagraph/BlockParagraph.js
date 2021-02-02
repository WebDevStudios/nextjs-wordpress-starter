import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * Paragraph Block
 *
 * The core Paragraph block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props           The component props.
 * @param {string} props.className Optional classnames.
 * @param {string} props.align     Optional alignment style.
 * @param {string} props.anchor    Optional anchor/id.
 * @param {string} props.content   The content of the block.
 * @return {Element}               The RichText component.
 */
export default function BlockParagraph({className, align, anchor, content}) {
  // TODO Add settings for unused props in default WP Paragraph Block
  const alignment = !align ? 'left' : align
  return (
    <RichText
      className={cn(`text-${alignment}`, className)}
      id={anchor}
      tag="p"
    >
      {content}
    </RichText>
  )
}

BlockParagraph.propTypes = {
  align: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string
}
