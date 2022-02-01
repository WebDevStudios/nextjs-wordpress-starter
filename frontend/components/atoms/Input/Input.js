// import PropTypes from 'prop-types'
import cn from 'classnames'
import React from 'react'
import styles from './Input.module.css'

/**
 * Render the Input component.
 *
 * @param  {object}  props Input component props.
 * @return {Element}       The Input component.
 */
export default function Input() {
  return <div className={cn(styles.input)}></div>
}

Input.propTypes = {}
