import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Columns.module.css'

/**
 * Render the Columns component.
 *
 * @param  {object}  props                   Container component props.
 * @param  {string}  props.id                Optional ID/Anchor.
 * @param  {string}  props.className         Optional className.
 * @param  {string}  props.columnCount       Total number of columns.
 * @param  {object}  props.children          React children.
 * @param  {object}  props.style             Custom columns styles.
 * @param  {string}  props.verticalAlignment Vertical alignment of columns.
 * @return {Element}                         The Columns component.
 */
export default function Columns({
  id,
  className,
  columnCount,
  children,
  style,
  verticalAlignment
}) {
  return (
    <div
      id={id || null}
      className={cn(
        styles.columns,
        columnCount && styles[`columns-${columnCount}`],
        className,
        verticalAlignment === 'center' ? styles.alignCenter : null,
        verticalAlignment === 'bottom' ? styles.alignBottom : null,
        style?.background || style?.backgroundColor
          ? styles.hasBackground
          : null
      )}
      style={style}
    >
      {!!children &&
        !!children?.length &&
        React.Children.map(children, (column) => {
          // Create copy of child column to add custom classes.
          const newColumn = React.cloneElement(column, {
            className: cn(
              column?.className,
              styles?.column,
              column?.props?.style?.background ||
                column?.props?.style?.backgroundColor
                ? styles.hasBackground
                : null
            )
          })

          return newColumn
        })}
    </div>
  )
}

Columns.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  columnCount: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.shape({
    background: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string
  }),
  verticalAlignment: PropTypes.string
}
Columns.defaultProps = {
  columnCount: 3
}
