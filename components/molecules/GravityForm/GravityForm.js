import PropTypes from 'prop-types'
import Form from '@/components/molecules/Form'
import Fields from './Fields'
import getGfFormValidationSchema from '@/functions/gravityForms/getGfFormValidationSchema'
import getGfFormDefaults from '@/functions/gravityForms/getGfFormDefaults'
import styles from './GravityForm.module.css'
import cn from 'classnames'

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

  return (
    <Form
      className={cn(styles.gravityForm, cssClass)}
      formDefaults={fieldDefaults}
      id={formId && `gform-${formId}`}
      validationSchema={formValidationSchema}
      onSubmit={(values) => {
        const formApiUrl = `https://nextjswp.test/wp-json/gf/v2/forms/${formId}/submissions`
        const formData = new FormData()
        const formKeys = Object.keys(values)

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
                //if (values[key] instanceof File) {
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
        }).then((response) => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.log({error}))
      }}
    >
      {(formikProps) => (
        <>
          {title && <h2 className={styles.title}>{title}</h2>}
          {fieldData && <Fields fields={fieldData} formikProps={formikProps} />}
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
