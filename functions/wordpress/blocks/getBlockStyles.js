/**
 * Get formatted block styles.
 *
 * @author WebDevStudios
 * @param  {object} styles                    Various block custom and preset styles.
 * @param  {string} styles.backgroundColorHex The background color hex value.
 * @param  {string} styles.gradientHex        The background gradient hex value.
 * @param  {string} styles.textColorHex       The text color hex value.
 * @param  {object} styles.style              The style attributes.
 * @return {object}                           The formatted style object.
 */
export default function getBlockStyles({
  backgroundColorHex,
  gradientHex,
  textColorHex,
  style
}) {
  const blockStyle = {}

  // Determine styles, using stylelint-accepted const names.
  const background = gradientHex || style?.color?.gradient
  const backgroundcolor = backgroundColorHex || style?.color?.background
  const fontsize = style?.typography?.fontSize
  const textcolor = textColorHex || style?.color?.text

  // Only add styles if set.
  if (background) {
    blockStyle.background = background
  }

  if (fontsize) {
    blockStyle.fontSize = fontsize
  }

  if (backgroundcolor) {
    blockStyle.backgroundColor = backgroundcolor
  }

  if (textcolor) {
    blockStyle.color = textcolor
  }

  return blockStyle
}
