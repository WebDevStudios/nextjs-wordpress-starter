import Button from '@/components/atoms/Button'
import PropTypes from 'prop-types'

/**
 * Button Block
 *
 * The core Button block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                    The component properties.
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color hex value.
 * @param  {number}  props.borderRadius       The border radius in pixels.
 * @param  {string}  props.className          Optional classnames.
 * @param  {string}  props.linkTarget         The target for the link.
 * @param  {string}  props.rel                The rel attribute for the link.
 * @param  {object}  props.style              The style attributes.
 * @param  {string}  props.text               The link label.
 * @param  {string}  props.textColorHex       The text color hex value.
 * @param  {string}  props.url                The link for the button.
 * @param  {number}  props.width              The width in percent.
 * @return {Element}                          The Button component.
 */
export default function BlockButton({
  anchor,
  backgroundColorHex,
  borderRadius,
  className,
  linkTarget,
  rel,
  style,
  text,
  textColorHex,
  url,
  width
}) {
  // Determine background and text colors, using stylelint-accepted const names.
  const backgroundcolor =
    backgroundColorHex || style?.color?.background || 'inherit'
  const textcolor = textColorHex || style?.color?.text || 'inherit'

  // Create style object for button.
  const buttonStyle = {
    background: style?.color?.gradient || 'inherit',
    backgroundColor: backgroundcolor,
    borderRadius: `${borderRadius}px`,
    color: textcolor
  }

  return (
    <Button
      attributes={{
        id: anchor || null,
        target: linkTarget || null,
        rel: rel || null
      }}
      className={className}
      style={buttonStyle}
      text={text}
      url={url}
      urlExternal={true}
    />
  )
}

BlockButton.propTypes = {
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  borderRadius: PropTypes.number,
  className: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  textColorHex: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number
}
