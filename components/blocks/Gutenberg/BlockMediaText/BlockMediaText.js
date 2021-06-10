import Blocks from '@/components/molecules/Blocks'
import MediaText from '@/components/organisms/MediaText'
import PropTypes from 'prop-types'

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props             The component properties.
 * @param  {Array}   props.innerBlocks The array of inner blocks to display.
 * @param  {object}  props.media       Media props.
 * @return {Element}                   The Code component.
 */
export default function BlockMediaText({innerBlocks, media}) {
  /* eslint-disable no-unused-vars */
  const {
    anchor,
    backgroundColorHex,
    caption,
    className,
    focalPoint,
    gradientHex,
    href,
    imageFill,
    isStackedOnMobile,
    linkClass,
    linkTarget,
    mediaAlt,
    mediaId,
    mediaPosition,
    mediaType,
    mediaWidth,
    mediaUrl,
    rel,
    sizeSlug,
    style,
    textColorHex,
    verticalAlignment
  } = media
  /* eslint-enable no-unused-vars */

  // Determine background and text colors, using stylelint-accepted const names.
  const backgroundcolor =
    backgroundColorHex || style?.color?.background || 'inherit'
  const textcolor = textColorHex || style?.color?.text || 'inherit'
  const background = gradientHex || style?.color?.gradient || 'inherit'
  const gridtemplatecolumns =
    mediaPosition === 'left' ? `${mediaWidth}% 1fr` : `1fr ${mediaWidth}%`

  // Create style object for block.
  const mediaTextStyle = {
    background: background,
    backgroundColor: backgroundcolor,
    color: textcolor,
    gridTemplateColumns: gridtemplatecolumns
  }

  const newFocalPoint = {}

  // Convert focal point values to percent.
  if (imageFill) {
    const x = parseFloat(focalPoint?.x || '.5') ?? 0.5
    const y = parseFloat(focalPoint?.y || '.5') ?? 0.5

    newFocalPoint.x = `${x * 100}%`
    newFocalPoint.y = `${y * 100}%`
  }

  return (
    <>
      {!!media && innerBlocks?.length && (
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
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.object,
      name: PropTypes.string
    })
  ),
  media: PropTypes.shape({
    anchor: PropTypes.string,
    backgroundColorHex: PropTypes.string,
    caption: PropTypes.string,
    className: PropTypes.string,
    focalPoint: PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.string
    }),
    gradientHex: PropTypes.string,
    href: PropTypes.string,
    imageFill: PropTypes.bool,
    isStackedOnMobile: PropTypes.bool,
    linkClass: PropTypes.string,
    linkTarget: PropTypes.string,
    mediaAlt: PropTypes.string,
    mediaId: PropTypes.number,
    mediaPosition: PropTypes.string,
    mediaType: PropTypes.string,
    mediaWidth: PropTypes.number,
    mediaUrl: PropTypes.string,
    rel: PropTypes.string,
    sizeSlug: PropTypes.string,
    style: PropTypes.object,
    textColorHex: PropTypes.string,
    verticalAlignment: PropTypes.string
  })
}
BlockMediaText.defaultProps = {
  media: PropTypes.shape({
    mediaPosition: 'left'
  })
}
