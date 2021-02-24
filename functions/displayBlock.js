import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

// Import WP blocks using Next Dynamic Imports
// @see https://nextjs.org/docs/advanced-features/dynamic-import

const BlockQuote = dynamic(() => import('@/blocks/Gutenberg/BlockQuote'))
const BlockPullQuote = dynamic(() =>
  import('@/blocks/Gutenberg/BlockPullQuote')
)
const BlockCode = dynamic(() => import('@/blocks/Gutenberg/BlockCode'))
const BlockEmbed = dynamic(() => import('@/blocks/Gutenberg/BlockEmbed'))
const BlockMediaText = dynamic(() =>
  import('@/blocks/Gutenberg/BlockMediaText')
)
const BlockButton = dynamic(() => import('@/blocks/Gutenberg/BlockButton'))
const BlockButtons = dynamic(() => import('@/blocks/Gutenberg/BlockButtons'))
const BlockColumns = dynamic(() => import('@/blocks/Gutenberg/BlockColumns'))
const BlockCover = dynamic(() => import('@/blocks/Gutenberg/BlockCover'))
const BlockHeadings = dynamic(() => import('@/blocks/Gutenberg/BlockHeadings'))
const BlockImage = dynamic(() => import('@/blocks/Gutenberg/BlockImage'))
const BlockImageGallery = dynamic(() =>
  import('@/blocks/Gutenberg/BlockImageGallery')
)
const BlockTable = dynamic(() => import('@/blocks/Gutenberg/BlockTable'))
const BlockList = dynamic(() => import('@/blocks/Gutenberg/BlockList'))
const BlockParagraph = dynamic(() =>
  import('@/blocks/Gutenberg/BlockParagraph')
)
const BlockSeparator = dynamic(() =>
  import('@/blocks/Gutenberg/BlockSeparator')
)
const BlockSpacer = dynamic(() => import('@/blocks/Gutenberg/BlockSpacer'))
const BlockGravityForm = dynamic(() =>
  import('@/blocks/Gutenberg/BlockGravityForm')
)
const LzbBlockMediaText = dynamic(() =>
  import('@/blocks/LazyBlocks/LzbBlockMediaText')
)
const LzbBlockHero = dynamic(() => import('@/blocks/LazyBlocks/LzbBlockHero'))
const AcfBlockMediaText = dynamic(() =>
  import('@/blocks/ACF/AcfBlockMediaText')
)

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
    case 'core/quote':
      return <BlockQuote {...attributes} key={index} />
    case 'core/pullquote':
      return <BlockPullQuote {...attributes} key={index} />
    case 'core/code':
    case 'core/preformatted':
      return <BlockCode {...attributes} key={index} />
    case 'core/embed':
      return <BlockEmbed {...attributes} key={index} />
    case 'core/media-text':
      return <BlockMediaText media={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/button':
      return <BlockButton {...attributes} key={index} />
    case 'core/buttons':
      return <BlockButtons options={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/columns':
      return <BlockColumns columns={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/cover':
      return <BlockCover media={attributes} innerBlocks={innerBlocks} key={index} />
    case 'core/heading':
      return <BlockHeadings {...attributes} key={index} />
    case 'core/image':
      return <BlockImage {...attributes} key={index} />
    case 'core/gallery':
      return <BlockImageGallery {...attributes} key={index} />
    case 'core/table':
      return <BlockTable {...attributes} key={index} />
    case 'core/list':
      return <BlockList {...attributes} key={index} />
    case 'core/paragraph':
      return <BlockParagraph {...attributes} key={index} />
    case 'core/separator':
      return <BlockSeparator {...attributes} key={index} />
    case 'core/spacer':
      return <BlockSpacer {...attributes} key={index} />
    case 'gravityforms/form':
      return <BlockGravityForm attributes={attributes} key={index} />
    case 'lazyblock/mediatext':
      return <LzbBlockMediaText attributes={attributes} key={index} />
    case 'lazyblock/hero':
      return <LzbBlockHero attributes={attributes} key={index} />
    case 'acf/acf-media-text':
      return <AcfBlockMediaText attributes={attributes} key={index} />
    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
