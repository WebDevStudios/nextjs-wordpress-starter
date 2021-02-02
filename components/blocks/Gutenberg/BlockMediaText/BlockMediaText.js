import Blocks from '@/components/molecules/Blocks'
import MediaText from '@/components/organisms/MediaText'
import PropTypes from 'prop-types'

// TODO: Swap `img` in `MediaText` component with `Image` atom component.

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param media.media
 * @param {object}    media               Media props.
 * @param {string}    media.anchor        The anchor/id of the block.
 * @param {string}    media.mediaAlt      The image alt text.
 * @param {string}    media.caption       The image caption.
 * @param {string}    media.className     The image class.
 * @param {string}    media.mediaId       The image ID.
 * @param {string}    media.href          The URL of the link.
 * @param {string}    media.linkTarget    Target for the link.
 * @param {string}    media.linkClass     Class for the link.
 * @param {string}    media.rel           The rel attribute for the link.
 * @param {string}    media.sizeSlug      The WP image size.
 * @param {string}    media.mediaUrl      The full URL path of the image.
 * @param {string}    media.mediaPosition The position of the image, left or right.
 * @param {Array}     media.innerBlocks   The array of inner blocks to display.
 * @return {Element}                   The Code component.
 */
export default function BlockMediaText({media, innerBlocks}) {
  return (
    <>
      {!!media && innerBlocks?.length && (
        <MediaText
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
  media: PropTypes.shape({
    anchor: PropTypes.string,
    caption: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    linkTarget: PropTypes.string,
    linkClass: PropTypes.string,
    rel: PropTypes.string,
    sizeSlug: PropTypes.string,
    mediaAlt: PropTypes.string,
    mediaId: PropTypes.number,
    mediaType: PropTypes.string,
    mediaUrl: PropTypes.string,
    mediaPosition: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  )
}
BlockMediaText.defaultProps = {
  media: PropTypes.shape({
    mediaPosition: 'left'
  })
}
