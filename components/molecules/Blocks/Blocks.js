import displayBlock from '@/functions/wordpress/blocks/displayBlock'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Render the Blocks component.
 *
 * @author WebDevStudios
 * @param {object} props        The component attributes as props.
 * @param {Array}  props.blocks The array of blocks.
 * @return {Element} The Blocks component.
 */
export default function Blocks({blocks}) {
  return (
    <>
      {
        // If there are blocks, loop over and display.
        !!blocks?.length &&
          blocks.map((block, index) => {
            return displayBlock(block, index)
          })
      }
    </>
  )
}

Blocks.propTypes = {
  blocks: PropTypes.array.isRequired
}

Blocks.defaultProps = {
  blocks: []
}
