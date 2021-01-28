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
      onSubmit={(values, actions) => console.log({values, actions})}
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
