import PropTypes from 'prop-types'
import React from 'react'
import styles from './DocTable.module.css'

/**
 * Render the DocTable component.
 *
 * This component is used in documentaion-only stories to display tabular documentation.
 *
 * @param {*} props The DocTable attributes as props.
 * @return {Element} The DocTable component.
 */
function DocTable(props) {
  return (
    <div className={styles.docTableWrap}>
      <table className={styles.docTable}>{props.children}</table>
    </div>
  )
}

DocTable.propTypes = {
  children: PropTypes.element
}

export default DocTable
