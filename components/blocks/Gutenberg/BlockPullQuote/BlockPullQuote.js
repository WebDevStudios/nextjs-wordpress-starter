import PullQuote from '@/components/atoms/PullQuote'
import PropTypes from 'prop-types'

/**
 * Pull Quote Block
 *
 * The core Pull Quote block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                 The component props.
 * @param  {string}  props.anchor          Optional anchor/id.
 * @param  {string}  props.citation        The optional author citation.
 * @param  {string}  props.className       Optional classnames.
 * @param  {string}  props.customMainColor The custom background color.
 * @param  {string}  props.customTextColor The custom text color.
 * @param  {string}  props.mainColorHex    The background color hex value.
 * @param  {string}  props.textColorHex    The text color hex value.
 * @param  {string}  props.value           The quote content of the block.
 * @return {Element}                       The Quote component.
 */
export default function BlockPullQuote({
  anchor,
  citation,
  className,
  customMainColor,
  customTextColor,
  mainColorHex,
  textColorHex,
  value
}) {
  // Determine background and text colors, using stylelint-accepted const names.
  const backgroundcolor = mainColorHex || customMainColor || 'inherit'
  const textcolor = textColorHex || customTextColor || 'inherit'

  // Create style object for pullquote.
  const pullQuoteStyle = {
    backgroundColor: backgroundcolor,
    color: textcolor
  }

  // Extract pullquote style.
  const styleSolid = className && className.includes('is-style-solid-color')

  // Remove styles from className.
  className &&
    className
      .replace('is-style-solid-color', '')
      .replace('is-style-default', '')

  // Remove background for default style.
  if (!styleSolid) {
    pullQuoteStyle.backgroundColor = 'inherit'
  }

  return (
    <PullQuote
      citation={citation}
      className={className}
      id={anchor}
      style={pullQuoteStyle}
      styleSolid={styleSolid}
      value={value}
    />
  )
}

BlockPullQuote.propTypes = {
  anchor: PropTypes.string,
  citation: PropTypes.string,
  className: PropTypes.string,
  customMainColor: PropTypes.string,
  customTextColor: PropTypes.string,
  mainColorHex: PropTypes.string,
  textColorHex: PropTypes.string,
  value: PropTypes.string
}
