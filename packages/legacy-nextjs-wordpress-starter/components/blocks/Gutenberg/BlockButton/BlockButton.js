import Button from '@/components/atoms/Button'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
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
 * @param  {string}  props.gradientHex        The background gradient hex value.
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
  gradientHex,
  linkTarget,
  rel,
  style,
  text,
  textColorHex,
  url,
  width
}) {
  const buttonStyle = getBlockStyles({
    backgroundColorHex,
    gradientHex,
    textColorHex,
    width,
    style
  })

  // Add additional styles.
  buttonStyle.borderRadius = `${borderRadius}px`

  // Extract button style.
  const styleOutline = className && className.includes('is-style-outline')

  // Remove styles from className.
  className &&
    className.replace('is-style-outline', '').replace('is-style-fill', '')

  return (
    <Button
      attributes={{
        id: anchor || null,
        target: linkTarget || null,
        rel: rel || null
      }}
      className={className}
      style={buttonStyle}
      styleOutline={styleOutline}
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
  gradientHex: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  textColorHex: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number
}
