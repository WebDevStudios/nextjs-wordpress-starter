import PropTypes from 'prop-types'
import React from 'react'
import styles from './Container.module.css'

/**
 * Render the Container component.
 *
 * @param {object}  props          Container component props.
 * @param {Element} props.children Container children.
 * @return {Element}               The Container component.
 */
export default function Container({children}) {
  return <div className={styles.containerW}>{children && children}</div>
}

Container.propTypes = {
  children: PropTypes.element
}
