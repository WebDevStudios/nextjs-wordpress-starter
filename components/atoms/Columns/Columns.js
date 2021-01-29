import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Columns.module.css'

/**
 * Render the Columns component.
 *
 * @param {object} props             Container component props.
 * @param {string} props.id          Optional ID/Anchor.
 * @param {string} props.className   Optional className.
 * @param {string} props.columnCount Total number of columns.
 * @param {object} props.children    React children.
 * @return {Element}                 The Columns component.
 */
export default function Columns({id, className, columnCount, children}) {
  return (
    <div
      id={id || null}
      className={cn(
        styles.columns,
        columnCount && styles[`columns-${columnCount}`],
        className
      )}
    >
      {children && children}
    </div>
  )
}

Columns.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  columnCount: PropTypes.number,
  children: PropTypes.node
}
Columns.defaultProps = {
  columnCount: 3
}
