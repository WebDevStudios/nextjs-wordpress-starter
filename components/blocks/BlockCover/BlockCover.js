import Blocks from '@/components/molecules/Blocks'
import Hero from '@/components/organisms/Hero'
import PropTypes from 'prop-types'

/**
 * Cover Block
 *
 * The core Columns block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object}          props        The component properties.
 * @param {string}          media.anchor The optional anchor/id of the block.
 * @param {string}          media.url    The background image URL.
 * @param props.media
 * @param props.innerBlocks
 * @param {Array}           innerBlocks  The array of inner blocks to display.
 * @return {Element}            The Cover component.
 */
export default function BlockCover({media, innerBlocks}) {
  return (
    <>
      {!!media?.url && (
        <Hero backgroundImage={media.url} id={media?.anchor}>
          {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
        </Hero>
      )}
    </>
  )
}

BlockCover.propTypes = {
  media: PropTypes.shape({
    anchor: PropTypes.string,
    url: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  )
}
