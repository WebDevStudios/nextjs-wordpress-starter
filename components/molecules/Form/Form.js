import React from 'react'
import {Formik, Form as FormikForm} from 'formik'
import styles from './Form.module.css'
import PropTypes from 'prop-types'

export default function Form({children, formDefaults, validationSchema}) {
  return (
    <Formik
      initialValues={formDefaults}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <FormikForm className={styles.form}>
        {children}
        <button type="submit">Submit</button>
      </FormikForm>
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.object,
  formDefaults: PropTypes.object,
  validationSchema: PropTypes.object
}
