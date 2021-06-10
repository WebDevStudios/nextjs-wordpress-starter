import Columns from '@/components/atoms/Columns'
import Blocks from '@/components/molecules/Blocks'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
import PropTypes from 'prop-types'

/**
 * Columns Block
 *
 * The core Columns block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props             The component properties.
 * @param  {object}  props.columns     Option props object.
 * @param  {object}  props.innerBlocks The array of inner blocks to display.
 * @return {Element}                   The Columns component.
 */
export default function BlockColumns({columns, innerBlocks}) {
  const {
    anchor,
    backgroundColorHex,
    className,
    gradientHex,
    style,
    textColorHex
  } = columns

  const columnsStyle = getBlockStyles({
    backgroundColorHex,
    gradientHex,
    textColorHex,
    style
  })

  return (
    <>
      {!!innerBlocks?.length && (
        <Columns
          id={anchor}
          className={className}
          columnCount={innerBlocks?.length}
          style={columnsStyle}
        >
          {innerBlocks.map((block, index) => {
            return (
              <div
                key={`column-${index}`}
                id={block?.attributes?.anchor}
                className={block?.attributes?.className}
              >
                {!!block?.innerBlocks?.length && (
                  <Blocks blocks={block.innerBlocks} />
                )}
              </div>
            )
          })}
        </Columns>
      )}
    </>
  )
}

BlockColumns.propTypes = {
  columns: PropTypes.shape({
    anchor: PropTypes.string,
    backgroundColorHex: PropTypes.string,
    className: PropTypes.string,
    gradientHex: PropTypes.string,
    style: PropTypes.object,
    textColorHex: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  )
}
