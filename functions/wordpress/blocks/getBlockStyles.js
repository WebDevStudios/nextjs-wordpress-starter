/**
 * Get formatted block styles.
 *
 * @author WebDevStudios
 * @param  {object} styles                    Various block custom and preset styles.
 * @param  {string} styles.backgroundColorHex The background color hex value.
 * @param  {string} styles.gradientHex        The background gradient hex value.
 * @param  {string} styles.textColorHex       The text color hex value.
 * @param  {number} styles.width              The width in percent.
 * @param  {object} styles.style              The style attributes.
 * @return {object}                           The formatted style object.
 */
export default function getBlockStyles({
  backgroundColorHex,
  gradientHex,
  textColorHex,
  width,
  style
}) {
  const blockStyle = {}

  // Determine styles, using stylelint-accepted const names.
  const background = gradientHex || style?.color?.gradient
  const backgroundcolor = backgroundColorHex || style?.color?.background
  const fontsize = style?.typography?.fontSize
  const fontweight = style?.typography?.fontWeight
  const textcolor = textColorHex || style?.color?.text

  // Only add styles if set.
  if (background) {
    blockStyle.background = background
  }

  if (backgroundcolor) {
    blockStyle.backgroundColor = backgroundcolor
  }

  if (fontsize) {
    blockStyle.fontSize = fontsize
  }

  if (fontweight) {
    blockStyle.fontWeight = fontweight
  }

  if (textcolor) {
    blockStyle.color = textcolor
  }

  if (width) {
    blockStyle.width = width ? `${width}%` : 'auto'
  }

  return blockStyle
}
