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
  return (
    <>
      {!!media && innerBlocks?.length && (
        <MediaText
          id={media?.anchor}
          className={media?.className}
          mediaLeft={media?.mediaPosition === 'left' ? true : false}
          image={{url: media?.mediaUrl, alt: media?.mediaAlt}}
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
    caption: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    linkClass: PropTypes.string,
    linkTarget: PropTypes.string,
    mediaAlt: PropTypes.string,
    mediaId: PropTypes.number,
    mediaPosition: PropTypes.string,
    mediaType: PropTypes.string,
    mediaUrl: PropTypes.string,
    rel: PropTypes.string,
    sizeSlug: PropTypes.string
  })
}
BlockMediaText.defaultProps = {
  media: PropTypes.shape({
    mediaPosition: 'left'
  })
}
