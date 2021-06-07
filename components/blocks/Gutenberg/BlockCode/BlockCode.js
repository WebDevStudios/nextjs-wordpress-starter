import Code from '@/components/atoms/Code'
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
 * @param  {object}  props.style              The style attributes (Typography panel).
 * @param  {string}  props.textColorHex       The text color hex value.
 * @return {Element}                          The Code component.
 */
export default function BlockCode({
  anchor,
  backgroundColorHex,
  className,
  content,
  style,
  textColorHex
}) {
  // Determine background and text colors, and font size, using stylelint-accepted const names.
  const backgroundcolor = backgroundColorHex || style?.color?.background
  const textcolor = textColorHex || style?.color?.text
  const fontsize = style?.typography?.fontSize

  // Create style object for code.
  const codeStyle = {}

  // Only add custom styles if set.
  if (style?.color?.gradient) {
    codeStyle.background = style.color.gradient
  }
  if (backgroundcolor) {
    codeStyle.backgroundColor = backgroundcolor
  }
  if (textcolor) {
    codeStyle.color = textcolor
    codeStyle['code[class*="language-"]'] = textcolor
  }
  if (fontsize) {
    codeStyle.fontSize = fontsize
  }

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
  style: PropTypes.object,
  textColorHex: PropTypes.string
}
