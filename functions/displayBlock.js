import * as Blocks from '@/components/blocks'
import PropTypes from 'prop-types'

/**
 * Decide which block component to display.
 *
 * @author WebDevStudios
 * @param {object} block The block data.
 * @param {number} index A unique key required by React.
 * @return {Element} A block-based component.
 */
export default function displayBlock(block, index) {
  const {attributes, name} = block

  // prettier-ignore
  switch (name) {
    // case 'acf/accordions':
    //   return <Blocks.BlockAccordions {...attributes} key={index} />
    // case 'acf/netflix':
    //   return <Blocks.BlockNetflixCarousel {...attributes} key={index} />
    case 'core/quote':
      return <Blocks.BlockQuote {...attributes} key={index} />
    case 'core/pullquote':
      return <Blocks.PullQuote {...attributes} key={index} />
    // case 'core/embed':
    //   return <Blocks.BlockVideoEmbed {...attributes} key={index} />
    case 'core/heading':
      return <Blocks.BlockHeadings {...attributes} key={index} />
    case 'core/image':
      return <Blocks.BlockImage {...attributes} key={index} />
    // case 'core/image-gallery':
    //   return <Blocks.BlockImageGallery {...attributes} key={index} />
    case 'core/table':
      return <Blocks.BlockTable {...attributes} key={index} />
    case 'core/list':
      return <Blocks.BlockList {...attributes} key={index} />
    case 'core/paragraph':
      return <Blocks.BlockParagraph {...attributes} key={index} />
    case 'core/separator':
      return <Blocks.BlockSeparator {...attributes} key={index} />
    // case 'core/shortcode':
    //   return <Blocks.BlockShortcode {...attributes} key={index} />
    case 'core/spacer':
      return <Blocks.BlockSpacer {...attributes} key={index} />
    default:
      return <pre key={index}>{JSON.stringify(attributes, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
