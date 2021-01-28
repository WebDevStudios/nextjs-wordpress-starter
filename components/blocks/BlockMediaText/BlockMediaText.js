import Image from '@/components/atoms/Image'
import Blocks from '@/components/molecules/Blocks'
import PropTypes from 'prop-types'

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} className Optional classnames.
 * @param {string} anchor    Optional anchor/id.
 * @param {string} content   The content of the block.
 * @return {Element} The Code component.
 */
export default function BlockMediaText({media, innerBlocks}) {
  //const position = media?.mediaPosition === 'right' ? 'right' : 'left';
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
