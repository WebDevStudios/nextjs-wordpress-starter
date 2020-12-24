import * as Blocks from '@/components/blocks'
import PropTypes from 'prop-types'

/**
 * Decide which block component to display.
 * @author WebDevStudios
 * @param {object} block        The block data.
 * @param {number} index        A unique key required by React.
 * @param {object} siteSettings Global settings.
 * @return {node}               A block-based component
 */
export default function displayBlock(block, index, siteSettings) {
  const {attributes, name} = block
  const {algolia} = siteSettings

  // prettier-ignore
  switch (name) {
    case 'acf/accordions':
      return <Blocks.BlockAccordions props={attributes} key={index} />
    case 'acf/algolia':
      return (
        <Blocks.BlockAlgolia
          props={attributes}
          key={index}
          indexName={
            algolia?.indexName
              ? algolia.indexName
              : ''
          }
        />
      )
    case 'acf/netflix':
      return (
        <Blocks.BlockNetflixCarousel props={attributes} key={index} />
      )
    case 'core/block-quote':
      return <Blocks.BlockBlockquote props={attributes} key={index} />
    case 'core/embed':
      return <Blocks.BlockVideoEmbed props={attributes} key={index} />
    case 'core/heading':
      return <Blocks.BlockHeadings props={attributes} key={index} />
    case 'core/image':
      return <Blocks.BlockImage props={attributes} key={index} />
    case 'core/image-gallery':
      return <Blocks.BlockImageGallery props={attributes} key={index} />
    case 'core/list':
      return <Blocks.BlockList props={attributes} key={index} />
    case 'core/paragraph':
      return <Blocks.BlockParagraph props={attributes} key={index} />
    case 'core/separator':
      return <Blocks.BlockSeparator props={attributes} key={index} />
    case 'core/shortcode':
      return <Blocks.BlockShortcode props={attributes} key={index} />
    case 'core/spacer':
      return <Blocks.BlockSpacer props={attributes} key={index} />
    default:
      return <pre key={index}>{JSON.stringify(attributes, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  siteSettings: PropTypes.object.isRequired
}
