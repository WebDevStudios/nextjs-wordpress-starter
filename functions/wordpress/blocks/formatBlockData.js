import getGfFormById from '@/functions/wordpress/gravityForms/getGfFormById'
import getMediaByID from '@/functions/wordpress/media/getMediaByID'

/**
 * Format and retrieve expanded block data.
 *
 * @author WebDevStudios
 * @param {Array} blocks Basic block data.
 * @return {Array}       Formatted block data.
 */
export default async function formatBlockData(blocks) {
  if (!blocks || !blocks.length) {
    return []
  }

  return await Promise.all(
    blocks.map(async (block) => {
      const {name, attributes, innerBlocks} = block
      switch (name) {
        case 'core/image':
          // Retrieve additional image meta.
          attributes.imageMeta = await getMediaByID(attributes?.id)
          break
        case 'gravityforms/form':
          // Retrieve form data.
          attributes.formData = await getGfFormById(attributes?.formId)
          break
      }

      const innerBlocksFormatted = await formatBlockData(innerBlocks)

      return {name, attributes, innerBlocks: innerBlocksFormatted}
    })
  )
}
