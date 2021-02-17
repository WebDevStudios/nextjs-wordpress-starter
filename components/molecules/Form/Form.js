import cn from 'classnames'
import {Form as FormikForm, Formik} from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Form.module.css'

/**
 * Render Form component.
 *
 * @param {object}           props                  The component attributes as props.
 * @param {Element|Function} props.children         Form children elements.
 * @param {string}           props.className        Form wrapper class.
 * @param {object}           props.formDefaults     Formik default data.
 * @param {string|number}    props.id               Form id.
 * @param {object}           props.validationSchema Yup validation schema object.
 * @param {Function}         props.onSubmit         Function to execute when form is submitted
 * @return {Element}                                The Form component.
 */
export default function Form({
  children,
  className,
  formDefaults,
  id,
  validationSchema,
  onSubmit
}) {
  let formattedChildren = children
  if ('function' !== typeof children) {
    formattedChildren = () => children
  }

  return (
    <Formik
      initialValues={formDefaults}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <FormikForm id={id} className={cn(styles.form, className)}>
          {formattedChildren(formikProps)}
          <button type="submit">Submit</button>
        </FormikForm>
      )}
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  formDefaults: PropTypes.object,
  id: PropTypes.string,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func
}

Form.defaultProps = {
  formDefaults: {}
}
