import React from 'react'
import {Formik, Form as FormikForm, Field, ErrorMessage} from 'formik'
import GravityFormFields from '@/components/molecules/GravityFormFields'
import styles from './Form.module.css'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

export default function Form({attributes: {formData}}) {
  const gravityFormFields = formData?.fields?.edges

  console.log(gravityFormFields)

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
          .required('Required'),
        firstName: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required')
      })}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <FormikForm className={styles.form}>
        <GravityFormFields
          className={styles.fields}
          fields={gravityFormFields}
        />

        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <button type="submit">Submit</button>
      </FormikForm>
    </Formik>
  )
}

Form.propTypes = {
  attributes: PropTypes.shape({
    formData: PropTypes.Object
  })
}
