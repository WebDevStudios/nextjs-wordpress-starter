import React from 'react'
import {Formik, Form as FormikForm} from 'formik'
import styles from './Form.module.css'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Render Form component.
 *
 * @param {object}        props                  Form props.
 * @param {Element}       props.children         Form children elements.
 * @param {string}        props.className        Form wrapper class.
 * @param {object}        props.formDefaults     Formik default data.
 * @param {string|number} props.id               Form id.
 * @param {string}        props.title            Form Title
 * @param {object}        props.validationSchema Yup validation schema object.
 * @return {Element}                             The Form component.
 */
export default function Form({
  children,
  className,
  formDefaults,
  id,
  validationSchema
}) {
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
      <FormikForm id={id} className={cn(styles.form, className)}>
        {children}
        <button type="submit">Submit</button>
      </FormikForm>
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  formDefaults: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  validationSchema: PropTypes.object
}

Form.defaultProps = {
  formDefaults: {}
}
