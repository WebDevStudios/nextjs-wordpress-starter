import PropTypes from 'prop-types'
import React from 'react'
import displayBlock from '@/functions/displayBlock'

/**
 * Render the Blocks component.
 *
 * @param {array} blocks An array of blocks.
 * @return {Element}     The Blocks component.
 */
export default function Blocks({blocks}) {
  return (
    <>
      {
        // If there are blocks, loop over and display.
        !!blocks &&
          blocks.length > 0 &&
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
