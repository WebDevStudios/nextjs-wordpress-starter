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
 * @param  {object}  props                    The component properties.
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color hex value.
 * @param  {string}  props.className          Optional classnames.
 * @param  {string}  props.gradientHex        The background gradient hex value.
 * @param  {object}  props.innerBlocks        The array of inner blocks to display.
 * @param  {object}  props.style              The style attributes.
 * @param  {string}  props.textColorHex       The text color hex value.
 * @param  {string}  props.verticalAlignment  Vertical alignment of columns.
 * @return {Element}                          The Columns component.
 */
export default function BlockColumns({
  anchor,
  backgroundColorHex,
  className,
  gradientHex,
  innerBlocks,
  style,
  textColorHex,
  verticalAlignment
}) {
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
              style: attributes?.style,
              width: attributes?.width || '50%'
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
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  className: PropTypes.string,
  gradientHex: PropTypes.string,
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      block: PropTypes.object,
      index: PropTypes.number
    })
  ),
  style: PropTypes.object,
  textColorHex: PropTypes.string,
  verticalAlignment: PropTypes.string
}
