import Form from '@/components/molecules/Form'
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
 * @param {object} props                   The GravityForm block attributes as props.
 * @param {object} props.formData          GravityForm form data.
 * @param {string} props.formData.cssClass GravityForm form classname.
 * @param {object} props.formData.fields   GravityForm form fields.
 * @param {number} props.formData.formId   GravityForm form id.
 * @param {string} props.formData.title    GravityForm form title.
 * @return {Element}                       The GravityForm component.
 */
export default function GravityForm({
  formData: {cssClass, fields, formId, title}
}) {
  // Setup form defaults and validation based on GravityForm field data.
  const fieldData = fields?.edges
  const formValidationSchema = getGfFormValidationSchema(fieldData)
  const fieldDefaults = getGfFormDefaults(fieldData)

  const [formFeedback, setFeedback] = useState(false)

  return (
    <Form
      className={cn(styles.gravityForm, cssClass)}
      formDefaults={fieldDefaults}
      id={formId && `gform-${formId}`}
      validationSchema={formValidationSchema}
      onSubmit={async (values) => {
        const wpBaseRequest = await fetch('/api/wordpress/getWPUrl')
        const wpBaseObject = await wpBaseRequest.json()
        const wpBase = wpBaseObject.wpApiUrlBase

        const formApiUrl = `${wpBase}wp-json/gf/v2/forms/${formId}/submissions`
        const formData = new FormData()
        const formKeys = Object.keys(values)

        formData.append('form_id', formId)

        formKeys.forEach((key) => {
          let fieldName = key.replaceAll('-', '_')
          if (fieldName.endsWith('_filedata')) {
            fieldName = fieldName.slice(0, -9)
          }
          fieldName = fieldName.replaceAll('field_', 'input_')

          switch (typeof values[key]) {
            case 'undefined':
              break
            case 'object':
              if (values[key] instanceof Array) {
                values[key].forEach((arrayFieldValue, index) => {
                  formData.append(`${fieldName}_${index + 1}`, arrayFieldValue)
                })
              } else {
                formData.append(fieldName, values[key])
              }
              break
            default:
              formData.append(fieldName, values[key])
              break
          }
        })

        fetch(formApiUrl, {
          method: 'POST',
          mimeType: 'multipart/form-data',
          body: formData
        })
          .then((response) => response.json())
          .then((feedback) => setFeedback(feedback.confirmation_message))
          .catch((error) => {
            setFeedback(`Error in form submission: ${error.message}`)
          })
      }}
    >
      {(formikProps) => (
        <>
          {title && <h2 className={styles.title}>{title}</h2>}
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
    fields: PropTypes.object,
    formId: PropTypes.number,
    title: PropTypes.string
  })
}
