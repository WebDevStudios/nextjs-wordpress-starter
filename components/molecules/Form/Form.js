import React from 'react'
import {Formik, Form as FormikForm} from 'formik'
import styles from './Form.module.css'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default function Form({
  className,
  children,
  formDefaults,
  validationSchema
}) {
  return (
    <Formik
      className={className}
      initialValues={formDefaults}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <FormikForm className={cn(styles.form, className)}>
        {children}
        <button type="submit">Submit</button>
      </FormikForm>
    </Formik>
  )
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  formDefaults: PropTypes.object,
  validationSchema: PropTypes.object
}
