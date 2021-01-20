import PropTypes from 'prop-types'
import Form from '@/components/molecules/Form'
import Fields from './Fields'
import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import getGfFormValidationSchema from '@/functions/gravityForms/getGfFormValidationSchema'
import styles from './GravityForm.module.css'
import cn from 'classnames'

/**
 * Map field GravityForm ids and defaults to Object.
 *
 * @param {Array} fields Array of fields.
 * @return {object}      Default field values.
 */
function getFormFieldDefaults(fields) {
  const formDefaults = {}

  if (!fields || !fields.length) {
    return formDefaults
  }

  fields.forEach((field) => {
    if (!field.node.id) {
      return
    }

    Object.assign(formDefaults, {
      [getGfFieldId(field.node.id)]: field.node.defaultValue
    })
  })

  return formDefaults
}

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
  const fieldData = fields?.edges

  // Generate default state based on field ids.
  const fieldValidationSchema = getGfFormValidationSchema(fieldData)
  const formValidationSchema = fieldValidationSchema
  const fieldDefaults = getFormFieldDefaults(fieldData)

  return (
    <Form
      className={cn(styles.gravityForm, cssClass)}
      formDefaults={fieldDefaults}
      id={formId && `gform-${formId}`}
      validationSchema={formValidationSchema}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      {fieldData && <Fields fields={fieldData} />}
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
