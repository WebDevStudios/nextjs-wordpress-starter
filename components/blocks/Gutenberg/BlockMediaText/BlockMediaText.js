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
    href,
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

  // Create style object for button.
  const mediaTextStyle = {
    background: style?.color?.gradient || 'inherit',
    backgroundColor: backgroundcolor,
    color: textcolor,
    gridTemplateColumns: `1fr ${mediaWidth}%`
  }

  return (
    <>
      {!!media && innerBlocks?.length && (
        <MediaText
          className={className}
          id={anchor}
          image={{url: mediaUrl, alt: mediaAlt}}
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
    href: PropTypes.string,
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
