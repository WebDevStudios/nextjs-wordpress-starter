import Blocks from '@/components/molecules/Blocks'
import MediaText from '@/components/organisms/MediaText'
import PropTypes from 'prop-types'

/**
 * Code Block
 *
 * The core Code block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props             The component properties.
 * @param {object} props.media       Media props.
 * @param {Array}  props.innerBlocks The array of inner blocks to display.
 * @return {Element}                 The Code component.
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
