import * as Blocks from '@/components/blocks'
import PropTypes from 'prop-types'

/**
 * Decide which block to display.
 *
 * @author WebDevStudios
 * @param {object} block The block data.
 */
export default function displayBlock(block, index, siteSettings) {
  // prettier-ignore
  switch (block.name) {
    case 'acf/accordions':
      return <Blocks.BlockAccordions props={block.attributes} key={index} />
    case 'acf/algolia':
      return (
        <Blocks.BlockAlgolia
          props={block.attributes}
          key={index}
          indexName={
            siteSettings?.algolia?.indexName
              ? siteSettings.algolia.indexName
              : ''
          }
        />
      )
    case 'acf/netflix':
      return (
        <Blocks.BlockNetflixCarousel props={block.attributes} key={index} />
      )
    case 'core/block-quote':
      return <Blocks.BlockBlockquote props={block.attributes} key={index} />
    case 'core/embed':
      return <Blocks.BlockVideoEmbed props={block.attributes} key={index} />
    case 'core/heading':
      return <Blocks.BlockHeadings props={block.attributes} key={index} />
    case 'core/image':
      return <Blocks.BlockImage props={block.attributes} key={index} />
    case 'core/image-gallery':
      return <Blocks.BlockImageGallery props={block.attributes} key={index} />
    case 'core/list':
      return <Blocks.BlockList props={block.attributes} key={index} />
    case 'core/paragraph':
      return <Blocks.BlockParagraph props={block.attributes} key={index} />
    case 'core/separator':
      return <Blocks.BlockSeparator props={block.attributes} key={index} />
    case 'core/shortcode':
      return <Blocks.BlockShortcode props={block.attributes} key={index} />
    case 'core/spacer':
      return <Blocks.BlockSpacer props={block.attributes} key={index} />
    default:
      return <pre key={index}>{JSON.stringify(block.attributes, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired
}
