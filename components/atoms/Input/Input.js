import getTypeValidation from '@/functions/getTypeValidation'
import cn from 'classnames'
import {ErrorMessage, Field, useField} from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Input.module.css'

/**
 * Render the Input component.
 *
 * @author WebDevStudios
 * @param  {object}  props               Input component props.
 * @param  {string}  props.label         Input label.
 * @param  {object}  props.passThruProps Input props to pass through to Formik.
 * @return {Element}                     The Input component.
 */
export default function Input({label, ...passThruProps}) {
  const {id, name, required, type = 'text', validate} = passThruProps

  // Add type-based validation if no other validation provided.
  const newValidate = validate ?? getTypeValidation(type)

  const fieldProps = {
    ...passThruProps,
    validate: newValidate
  }

  const [field] = useField(fieldProps)

  if (!name?.length) {
    return null
  }

  return (
    <div className={cn(styles.input, required && styles.required)}>
      <label className={styles.label} htmlFor={id || name}>
        {label}
      </label>
      <Field {...field} {...fieldProps} />
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
