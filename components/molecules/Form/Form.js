import React from 'react'
import {Formik, Form as FormikForm} from 'formik'
import styles from './Form.module.css'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

export default function Form({children}) {
  const formDefaults = {
    ['field-0']: '',
    firstName: '',
    lastName: '',
    email: ''
  }

  return (
    <Formik
      initialValues={formDefaults}
      validationSchema={Yup.object({
        ['field-0']: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .max(15, 'Must be 15 characters or less')
          .required('Required')
      })}
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
  children: PropTypes.Object
}
