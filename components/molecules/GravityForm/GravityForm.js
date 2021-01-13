import PropTypes from 'prop-types'
import Form from '@/components/molecules/Form'
import Fields from './Fields'
import * as Yup from 'yup'
import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import {useState} from 'react'
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
  const [formValidation, setFormValidation] = useState({})
  const validationSchema = Yup.object(formValidation)
  const fieldData = fields?.edges

  /**
   * Map field GravityForm ids and defaults to Object.
   *
   * @param {Array} fields Array of fields.
   * @return {object}      Default field values.
   */
  function getFieldDefaults(fields) {
    const defaults = {}

    if (!fields || !fields.length) {
      return defaults
    }

    fields.forEach((field) => {
      if (!field.node.id) {
        return
      }

      Object.assign(defaults, {
        [getGfFieldId(field.node.id)]: field.node.defaultValue
      })
    })

    return defaults
  }

  // Generate default state based on field ids.
  const fieldDefaults = getFieldDefaults(fieldData)

  return (
    <Form
      className={cn(styles.gravityForm, cssClass)}
      formDefaults={fieldDefaults}
      id={formId && `gform-${formId}`}
      title={title}
      validationSchema={validationSchema}
    >
      {fieldData && (
        <Fields fields={fieldData} setFormValidation={setFormValidation} />
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
