import Blocks from '@/components/molecules/Blocks'
import ButtonGroup from '@/components/molecules/ButtonGroup'
import PropTypes from 'prop-types'

/**
 * Buttons Block
 *
 * The core Buttons block from Gutenberg.
 *
 * @author WebDevStudios
 * @param options.options
 * @param {object}            options                      Option props object.
 * @param {string}            options.anchor               The anchor/id of the block.
 * @param {string}            options.orientation          The orientation of buttons.
 * @param {string}            options.contentJustification The justification of the buttons.
 * @param options.innerBlocks
 * @param {Array}             innerBlocks                  The array of inner blocks to display.
 * @return {Element}                            The Buttons component.
 */
export default function BlockButtons({options, innerBlocks}) {
  return (
    <ButtonGroup
      id={options?.anchor}
      orientation={options?.orientation}
      contentJustification={options?.contentJustification}
    >
      {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
    </ButtonGroup>
  )
}

BlockButtons.propTypes = {
  options: PropTypes.shape({
    anchor: PropTypes.string,
    contentJustification: PropTypes.string,
    orientation: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  )
}

BlockButtons.defaultProps = {
  options: PropTypes.shape({
    orientation: 'horizontal',
    contentJustification: 'left'
  })
}
