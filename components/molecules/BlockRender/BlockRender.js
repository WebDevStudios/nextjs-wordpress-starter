import Icon from '@/components/atoms/Icon'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import displayBlock from '@/functions/displayBlock'

/**
 * Render the BlockRender component.
 *
 * @param {array} blocks An array of blocks.
 * @return {Element}     The BlockRender component.
 */
export default function BlockRender({blocks}) {
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

BlockRender.propTypes = {
  blocks: PropTypes.array.isRequired
}

BlockRender.defaultProps = {
  blocks: []
}
