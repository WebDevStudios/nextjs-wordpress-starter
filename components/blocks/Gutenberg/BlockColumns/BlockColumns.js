import Columns from '@/components/atoms/Columns'
import Blocks from '@/components/molecules/Blocks'
import PropTypes from 'prop-types'

/**
 * Columns Block
 *
 * The core Columns block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props             The component properties.
 * @param {object} props.options     Option props object.
 * @param {object} props.innerBlocks The array of inner blocks to display.
 * @return {Element}                 The Columns component.
 */
export default function BlockColumns({options, innerBlocks}) {
  return (
    <>
      {!!innerBlocks?.length && (
        <Columns
          id={options?.anchor}
          className={options?.className}
          columnCount={innerBlocks?.length}
        >
          {innerBlocks.map((block, index) => {
            return (
              <div key={`column-${index}`}>
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
  options: PropTypes.shape({
    anchor: PropTypes.string,
    className: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  )
}
