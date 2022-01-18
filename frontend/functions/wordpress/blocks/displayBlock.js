import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

// Import WP blocks using Next Dynamic Imports
// @see https://nextjs.org/docs/advanced-features/dynamic-import

/**
 * Decide which block component to display.
 *
 * @author WebDevStudios
 * @param  {object}  block The block data.
 * @param  {number}  index A unique key required by React.
 * @return {Element}       A block-based component.
 */
export default function displayBlock(block, index) {
  const {attributes, name, innerBlocks} = block

  // prettier-ignore
  switch (name) {
    /* -- CORE BLOCKS -- */
    case 'core/button': {
      const BlockButton = dynamic(() => import('@/components/blocks/Gutenberg/BlockButton'))
      return <BlockButton {...attributes} key={index} />
    }

    case 'core/buttons': {
      const BlockButtons = dynamic(() => import('@/components/blocks/Gutenberg/BlockButtons'))
      return <BlockButtons {...attributes} innerBlocks={innerBlocks} key={index} />
    }

    case 'core/code':
    case 'core/preformatted': {
      const BlockCode = dynamic(() => import('@/components/blocks/Gutenberg/BlockCode'))
      return <BlockCode {...attributes} key={index} />
    }

    case 'core/columns': {
      const BlockColumns = dynamic(() => import('@/components/blocks/Gutenberg/BlockColumns'))
      return <BlockColumns {...attributes} innerBlocks={innerBlocks} key={index} />
    }

    case 'core/cover': {
      const BlockCover = dynamic(() => import('@/components/blocks/Gutenberg/BlockCover'))
      return <BlockCover {...attributes} innerBlocks={innerBlocks} key={index} />
    }

    case 'core/embed': {
      const BlockEmbed = dynamic(() => import('@/components/blocks/Gutenberg/BlockEmbed'))
      return <BlockEmbed {...attributes} key={index} />
    }

    case 'core/gallery': {
      const BlockImageGallery = dynamic(() => import('@/components/blocks/Gutenberg/BlockImageGallery'))
      return <BlockImageGallery {...attributes} key={index} />
    }

    case 'core/heading': {
      const BlockHeadings = dynamic(() => import('@/components/blocks/Gutenberg/BlockHeadings'))
      return <BlockHeadings {...attributes} key={index} />
    }

    case 'core/image': {
      const BlockImage = dynamic(() => import('@/components/blocks/Gutenberg/BlockImage'))
      return <BlockImage {...attributes} key={index} />
    }

    case 'core/list': {
      const BlockList = dynamic(() => import('@/components/blocks/Gutenberg/BlockList'))
      return <BlockList {...attributes} key={index} />
    }

    case 'core/media-text': {
      const BlockMediaText = dynamic(() => import('@/components/blocks/Gutenberg/BlockMediaText'))
      return <BlockMediaText {...attributes} innerBlocks={innerBlocks} key={index} />
    }

    case 'core/paragraph': {
      const BlockParagraph = dynamic(() => import('@/components/blocks/Gutenberg/BlockParagraph'))
      return <BlockParagraph {...attributes} key={index} />
    }

    case 'core/pullquote': {
      const BlockPullQuote = dynamic(() => import('@/components/blocks/Gutenberg/BlockPullQuote'))
      return <BlockPullQuote {...attributes} key={index} />
    }

    case 'core/quote': {
      const BlockQuote = dynamic(() => import('@/components/blocks/Gutenberg/BlockQuote'))
      return <BlockQuote {...attributes} key={index} />
    }

    case 'core/separator': {
      const BlockSeparator = dynamic(() => import('@/components/blocks/Gutenberg/BlockSeparator'))
      return <BlockSeparator {...attributes} key={index} />
    }

    case 'core/spacer': {
      const BlockSpacer = dynamic(() => import('@/components/blocks/Gutenberg/BlockSpacer'))
      return <BlockSpacer {...attributes} key={index} />
    }

    case 'core/table': {
      const BlockTable = dynamic(() => import('@/components/blocks/Gutenberg/BlockTable'))
      return <BlockTable {...attributes} key={index} />
    }

    /* -- GRAVITY FORMS BLOCKS -- */
    case 'gravityforms/form': {
      const BlockGravityForm = dynamic(() => import('@/components/blocks/Gutenberg/BlockGravityForm'))
      return <BlockGravityForm {...attributes} key={index} />
    }

    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}
