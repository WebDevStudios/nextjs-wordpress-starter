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
 * @param  {string}  props.customTextColor The custom text color.
 * @param  {string}  props.textColorHex    The text color hex value.
 * @param  {string}  props.value           The quote content of the block.
 * @return {Element}                       The Quote component.
 */
export default function BlockPullQuote(props) {
  const {anchor, citation, className, customTextColor, textColorHex, value} =
    props

  // Determine background and text colors, using stylelint-accepted const names.
  const textcolor = textColorHex || customTextColor || 'inherit'

  // Create style object for pullquote.
  const pullQuoteStyle = {
    color: textcolor
  }

  return (
    <PullQuote
      citation={citation}
      className={className}
      id={anchor}
      style={pullQuoteStyle}
      value={value}
    />
  )
}

BlockPullQuote.propTypes = {
  anchor: PropTypes.string,
  citation: PropTypes.string,
  className: PropTypes.string,
  customTextColor: PropTypes.string,
  textColorHex: PropTypes.string,
  value: PropTypes.string
}
