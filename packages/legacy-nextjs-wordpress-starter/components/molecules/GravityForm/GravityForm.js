import Form from '@/components/molecules/Form'
import processGfFormSubmission from '@/functions/next-api/wordpress/gravityForms/processGfFormSubmission'
import getGfFormDefaults from '@/functions/wordpress/gravityForms/getGfFormDefaults'
import getGfFormValidationSchema from '@/functions/wordpress/gravityForms/getGfFormValidationSchema'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import Fields from './Fields'
import styles from './GravityForm.module.css'

/**
 * Render the GravityForm component.
 *
 * @param  {object}  props                      The GravityForm block attributes as props.
 * @param  {object}  props.formData             GravityForm form data.
 * @param  {string}  props.formData.cssClass    GravityForm form classname.
 * @param  {string}  props.formData.description GravityForm form description.
 * @param  {object}  props.formData.formFields  GravityForm form fields.
 * @param  {number}  props.formData.formId      GravityForm form id.
 * @param  {string}  props.formData.title       GravityForm form title.
 * @return {Element}                            The GravityForm component.
 */
export default function GravityForm({
  formData: {cssClass, description, formFields, formId, title}
}) {
  // Setup form defaults and validation based on GravityForm field data.
  const fieldData = formFields?.edges
  const formValidationSchema = getGfFormValidationSchema(fieldData)
  const fieldDefaults = getGfFormDefaults(fieldData)

  const [formFeedback, setFeedback] = useState(false)

  /**
   * Handle form submission.
   *
   * @author WebDevStudios
   * @param {object} values Form values.
   */
  async function handleFormSubmission(values) {
    const response = await processGfFormSubmission(formId, values, formFields)

    if (response?.error) {
      setFeedback(response.errorMessage)
      return
    }

    setFeedback(response.confirmationMessage)
  }

  return (
    <Form
      className={cn(styles.gravityForm, cssClass)}
      formDefaults={fieldDefaults}
      id={formId && `gform-${formId}`}
      validationSchema={formValidationSchema}
      onSubmit={handleFormSubmission}
    >
      {(formikProps) => (
        <>
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p>{description}</p>}
          {fieldData && <Fields fields={fieldData} formikProps={formikProps} />}
          {!!formFeedback && (
            <div
              className="feedback"
              dangerouslySetInnerHTML={{__html: formFeedback}}
            />
          )}
        </>
      )}
    </Form>
  )
}

GravityForm.propTypes = {
  formData: PropTypes.shape({
    cssClass: PropTypes.string,
    description: PropTypes.string,
    formFields: PropTypes.object,
    formId: PropTypes.number,
    title: PropTypes.string
  })
}
