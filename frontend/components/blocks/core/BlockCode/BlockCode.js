import Code from '@/components/atoms/Code'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
import PropTypes from 'prop-types'

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                    The component props.
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color hex value.
 * @param  {string}  props.className          Optional classnames.
 * @param  {string}  props.content            The content of the block.
 * @param  {string}  props.gradientHex        The background gradient hex value.
 * @param  {object}  props.style              The style attributes (Typography panel).
 * @param  {string}  props.textColorHex       The text color hex value.
 * @return {Element}                          The Code component.
 */
export default function BlockCode({
  anchor,
  backgroundColorHex,
  className,
  content,
  gradientHex,
  style,
  textColorHex
}) {
  const codeStyle = getBlockStyles({
    backgroundColorHex,
    gradientHex,
    textColorHex,
    style
  })

  return (
    <Code
      className={className}
      id={anchor}
      content={content}
      style={codeStyle}
    />
  )
}

BlockCode.propTypes = {
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  gradientHex: PropTypes.string,
  style: PropTypes.object,
  textColorHex: PropTypes.string
}
