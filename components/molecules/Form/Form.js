import React from 'react'
import {Formik, Form as FormikForm} from 'formik'
import styles from './Form.module.css'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Render Form component.
 *
 * @param {object}        props                  The component attributes as props.
 * @param {Element}       props.children         Form children elements.
 * @param {string}        props.className        Form wrapper class.
 * @param {object}        props.formDefaults     Formik default data.
 * @param {string|number} props.id               Form id.
 * @param {object}        props.validationSchema Yup validation schema object.
 * @param {Function}      props.onSubmit         Function to execute when form is submitted
 * @return {Element}                             The Form component.
 */
export default function Form({
  children,
  className,
  formDefaults,
  id,
  validationSchema,
  onSubmit
}) {
  return (
    <Formik
      initialValues={formDefaults}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormikForm id={id} className={cn(styles.form, className)}>
        {children}
        <button type="submit">Submit</button>
      </FormikForm>
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  formDefaults: PropTypes.object,
  id: PropTypes.string,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func
}

Form.defaultProps = {
  formDefaults: {}
}
