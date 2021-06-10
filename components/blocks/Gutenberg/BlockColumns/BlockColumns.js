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
    textColorHex,
    verticalAlignment
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
          verticalAlignment={verticalAlignment}
        >
          {innerBlocks.map(({attributes, innerBlocks}, index) => {
            const columnStyle = getBlockStyles({
              backgroundColorHex: attributes?.backgroundColorHex,
              gradientHex: attributes?.gradientHex,
              textColorHex: attributes?.textColorHex,
              style: attributes?.style
            })

            return (
              <div
                key={`column-${index}`}
                id={attributes?.anchor}
                className={attributes?.className}
                style={columnStyle}
              >
                {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
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
    textColorHex: PropTypes.string,
    verticalAlignment: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      block: PropTypes.object,
      index: PropTypes.number
    })
  )
}
