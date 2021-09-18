import Blocks from '@/components/molecules/Blocks'
import ButtonGroup from '@/components/molecules/ButtonGroup'
import PropTypes from 'prop-types'

/**
 * Buttons Block
 *
 * The core Buttons block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                      The component properties.
 * @param  {string}  props.anchor               Optional anchor/id.
 * @param  {string}  props.contentJustification The justification of the buttons.
 * @param  {Array}   props.innerBlocks          The array of inner blocks to display.
 * @param  {string}  props.orientation          The orientation of buttons.
 * @return {Element}                            The Buttons component.
 */
export default function BlockButtons({
  anchor,
  contentJustification,
  innerBlocks,
  orientation
}) {
  return (
    <ButtonGroup
      id={anchor}
      orientation={orientation}
      contentJustification={contentJustification}
    >
      {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
    </ButtonGroup>
  )
}

BlockButtons.propTypes = {
  anchor: PropTypes.string,
  contentJustification: PropTypes.string,
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  ),
  orientation: PropTypes.string
}

BlockButtons.defaultProps = {
  options: PropTypes.shape({
    orientation: 'horizontal',
    contentJustification: 'left'
  })
}
