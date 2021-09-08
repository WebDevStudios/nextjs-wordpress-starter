import getMediaItem from '../media/single'

/**
 * Parse and format expanded block data.
 *
 * @author WebDevStudios
 * @param  {Array} blocks Basic block data.
 * @return {Array}        Formatted block data.
 */
export async function parseBlocks(blocks) {
  if (!blocks || !blocks.length) {
    return []
  }

  return await Promise.all(
    blocks.map(async (block) => {
      const {name, attributes, innerBlocks} = block

      switch (name) {
        case 'core/image':
          // Retrieve additional image meta.
          attributes.imageMeta = await getMediaItem(attributes?.id)
          break
      }

      const innerBlocksFormatted = await parseBlocks(innerBlocks)

      return {name, attributes, innerBlocks: innerBlocksFormatted}
    })
  )
}
