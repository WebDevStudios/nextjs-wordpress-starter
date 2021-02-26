import Blocks from '@/components/molecules/Blocks'
import Hero from '@/components/organisms/Hero'
import PropTypes from 'prop-types'

/**
 * Cover Block
 *
 * The core Columns block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props             The component properties.
 * @param {object} props.media       Media props object.
 * @param {Array}  props.innerBlocks The array of inner blocks to display.
 * @return {Element}                 The Cover component.
 */
export default function BlockCover({media, innerBlocks}) {
  return (
    <>
      {!!media?.url && (
        <Hero backgroundImage={media} id={media?.anchor}>
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
