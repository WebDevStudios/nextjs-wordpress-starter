import * as Blocks from '@/components/blocks'
import PropTypes from 'prop-types'

/**
 * Decide which block component to display.
 *
 * @author WebDevStudios
 * @param {object} block The block data.
 * @param {number} index A unique key required by React.
 * @return {Element}     A block-based component.
 */
export default function displayBlock(block, index) {
  const {attributes, name, innerBlocks} = block

  // prettier-ignore
  switch (name) {
    // case 'acf/accordions':
    //   return <Blocks.BlockAccordions {...attributes} key={index} />
    // case 'acf/netflix':
    //   return <Blocks.BlockNetflixCarousel {...attributes} key={index} />
    case 'core/quote':
      return <Blocks.BlockQuote {...attributes} key={index} />
    case 'core/pullquote':
      return <Blocks.BlockPullQuote {...attributes} key={index} />
    case 'core/code':
    case 'core/preformatted':
      return <Blocks.BlockCode {...attributes} key={index} />
    // case 'core/embed':
    //   return <Blocks.BlockVideoEmbed {...attributes} key={index} />
    case 'core/media-text':
      return <Blocks.BlockMediaText media={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/button':
      return <Blocks.BlockButton {...attributes} key={index} />
    case 'core/buttons':
      return <Blocks.BlockButtons options={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/columns':
      return  <Blocks.BlockColumns columns={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/cover':
      return <Blocks.BlockCover media={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/heading':
      return <Blocks.BlockHeadings {...attributes} key={index} />
    case 'core/image':
      return <Blocks.BlockImage {...attributes} key={index} />
    case 'core/gallery':
      return <Blocks.BlockImageGallery {...attributes} key={index} />
    case 'core/table':
      return <Blocks.BlockTable {...attributes} key={index} />
    case 'core/list':
      return <Blocks.BlockList {...attributes} key={index} />
    case 'core/paragraph':
      return <Blocks.BlockParagraph {...attributes} key={index} />
    case 'core/separator':
      return <Blocks.BlockSeparator {...attributes} key={index} />
    case 'core/spacer':
      return <Blocks.BlockSpacer {...attributes} key={index} />
    case 'lazyblock/mediatext':
      return <Blocks.LzbBlockMediaText attributes={attributes} key={index} />
    case 'lazyblock/hero':
      return <Blocks.LzbBlockHero attributes={attributes} key={index} />
    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
