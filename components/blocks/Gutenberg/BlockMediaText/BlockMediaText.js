import Blocks from '@/components/molecules/Blocks'
import MediaText from '@/components/organisms/MediaText'
import formatFocalPoint from '@/functions/formatFocalPoint'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
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
