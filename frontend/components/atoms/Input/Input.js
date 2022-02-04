import cn from 'classnames'
import {ErrorMessage, Field, useField} from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Input.module.css'

/**
 * Render the Input component.
 *
 * @param  {object}  props               Input component props.
 * @param  {string}  props.label         Input label.
 * @param  {object}  props.passThruProps Input props to pass through to Formik.
 * @return {Element}                     The Input component.
 */
export default function Input({label, ...passThruProps}) {
  const [field] = useField(passThruProps)
  const {as, id, name, type} = passThruProps

  return (
    <div className={cn(styles.input)}>
      <label className={styles.label} htmlFor={id || name}>
        {label}
      </label>
      <Field {...field} {...passThruProps} />
      <p className={styles.error}>
        <ErrorMessage name={name} />
      </p>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  passThruProps: PropTypes.object
}
