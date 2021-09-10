import Blocks from '@/components/molecules/Blocks'
import MediaText from '@/components/organisms/MediaText'
import formatFocalPoint from '@/functions/formatFocalPoint'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
import PropTypes from 'prop-types'

/**
 * Media & Text Block
 *
 * The core Media & Text block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                    The component properties.
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color
 * @param  {string}  props.className          The image class name.
 * @param  {object}  props.focalPoint         The focal point coordinates for the image.
 * @param  {string}  props.gradientHex        The background gradient hex value.
 * @param  {boolean} props.imageFill          Whether to crop image to fill.
 * @param  {Array}   props.innerBlocks        The array of inner blocks to display.
 * @param  {boolean} props.isStackedOnMobile  Whether to stack media and text on mobile.
 * @param  {string}  props.mediaAlt           The image alt attribute.
 * @param  {string}  props.mediaPosition      The image position relative to the text.
 * @param  {string}  props.mediaUrl           The media URL.
 * @param  {number}  props.mediaWidth         The image width.
 * @param  {object}  props.style              The style attributes.
 * @param  {string}  props.textColorHex       The text color hex value.
 * @param  {string}  props.verticalAlignment  Vertical alignment of text.
 * @return {Element}                          The Media & Text component.
 */
export default function BlockMediaText({
  anchor,
  backgroundColorHex,
  className,
  focalPoint,
  gradientHex,
  imageFill,
  innerBlocks,
  isStackedOnMobile,
  mediaAlt,
  mediaPosition,
  mediaUrl,
  mediaWidth,
  style,
  textColorHex,
  verticalAlignment
}) {
  const mediaTextStyle = getBlockStyles({
    backgroundColorHex,
    gradientHex,
    textColorHex,
    style
  })

  // Add additional styles.
  const gridtemplatecolumns =
    mediaPosition === 'left' ? `${mediaWidth}% 1fr` : `1fr ${mediaWidth}%`
  mediaTextStyle.gridTemplateColumns = gridtemplatecolumns

  const newFocalPoint = imageFill ? formatFocalPoint(focalPoint) : {}

  return (
    <>
      {!!mediaUrl && innerBlocks?.length && (
        <MediaText
          className={className}
          focalPoint={newFocalPoint}
          id={anchor}
          image={{url: mediaUrl, alt: mediaAlt}}
          imageFill={imageFill}
          mediaLeft={mediaPosition === 'left' ? true : false}
          mediaWidth={mediaWidth}
          style={mediaTextStyle}
          stackOnMobile={isStackedOnMobile}
          verticalAlignment={verticalAlignment}
        >
          <Blocks blocks={innerBlocks} />
        </MediaText>
      )}
    </>
  )
}

BlockMediaText.propTypes = {
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  className: PropTypes.string,
  focalPoint: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string
  }),
  gradientHex: PropTypes.string,
  imageFill: PropTypes.bool,
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.object,
      name: PropTypes.string
    })
  ),
  isStackedOnMobile: PropTypes.bool,
  mediaAlt: PropTypes.string,
  mediaPosition: PropTypes.string,
  mediaUrl: PropTypes.string,
  mediaWidth: PropTypes.number,
  style: PropTypes.object,
  textColorHex: PropTypes.string,
  verticalAlignment: PropTypes.string
}

BlockMediaText.defaultProps = {
  media: PropTypes.shape({
    mediaPosition: 'left'
  })
}
