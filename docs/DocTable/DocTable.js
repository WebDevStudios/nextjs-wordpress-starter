import PropTypes from 'prop-types'
import React from 'react'
import styles from './DocTable.module.css'

/**
 * This component is used in documentaion-only stories to display tabular documentation.
 */
const DocTable = (props) => {
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
