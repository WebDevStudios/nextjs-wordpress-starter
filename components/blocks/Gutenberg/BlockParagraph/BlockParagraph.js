import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * Paragraph Block
 *
 * The core Paragraph block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object}  props                    The component props.
 * @param {string}  props.backgroundColorHex The background color hex value.
 * @param {string}  props.className          Optional classnames.
 * @param {string}  props.align              Optional alignment style.
 * @param {string}  props.anchor             Optional anchor/id.
 * @param {string}  props.content            The content of the block.
 * @param {boolean} props.dropCap            Whether the paragraph has a drop cap.
 * @param {object}  props.style              The style attributes (Typography panel).
 * @param {string}  props.textColorHex       The text color hex value.
 * @return {Element}                         The RichText component.
 */
export default function BlockParagraph({
  align,
  anchor,
  backgroundColorHex,
  className,
  content,
  dropCap,
  style,
  textColorHex
}) {
  const alignment = !align ? 'left' : align
  return (
    <RichText
      className={cn(`text-${alignment}`, className)}
      id={anchor}
      tag="p"
      dropCap={dropCap}
      textColor={textColorHex || style?.color?.text || null}
      backgroundColor={backgroundColorHex || style?.color?.background || null}
      inlineStyles={style}
    >
      {content}
    </RichText>
  )
}

BlockParagraph.propTypes = {
  align: PropTypes.string,
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  dropCap: PropTypes.bool,
  style: PropTypes.object,
  textColorHex: PropTypes.string
}
