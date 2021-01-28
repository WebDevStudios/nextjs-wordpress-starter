import Image from '@/components/atoms/Image'
import Blocks from '@/components/molecules/Blocks'
import PropTypes from 'prop-types'

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param media.media
 * @param {object}          media               media props.
 * @param {string}          media.anchor        The anchor/id of the block.
 * @param {string}          media.mediaAlt      The image alt text.
 * @param {string}          media.caption       The image caption.
 * @param {string}          media.className     The image class.
 * @param {string}          media.mediaId       The image ID.
 * @param {string}          media.href          The URL of the link.
 * @param {string}          media.linkTarget    Target for the link.
 * @param {string}          media.linkClass     Class for the link.
 * @param {string}          media.rel           The rel attribute for the link.
 * @param {string}          media.sizeSlug      The WP image size.
 * @param {string}          media.mediaUrl      The full URL path of the image.
 * @param {string}          media.mediaPosition The position of the image, left or right.
 * @param media.innerBlocks
 * @param {Array}           innerBlocks         The array of inner blocks to display.
 * @return {Element} The Code component.
 */
export default function BlockMediaText({media, innerBlocks}) {
  return (
    <div>
      {!!media && (
        <Image
          alt={media?.mediaAlt}
          anchor={media?.anchor}
          caption={media?.caption}
          className={media?.className}
          id={media?.mediaId}
          href={media?.href}
          linkTarget={media?.linkTarget}
          linkClass={media?.linkClass}
          rel={media?.rel}
          sizeSlug={media?.sizeSlug}
          url={media?.mediaUrl}
        />
      )}
      {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
    </div>
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
