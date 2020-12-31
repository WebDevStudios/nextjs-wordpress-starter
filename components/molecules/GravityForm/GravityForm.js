import PropTypes from 'prop-types'
import Form from '@/components/molecules/Form'
import Fields from './Fields'
import * as Yup from 'yup'
import getGfFieldId from '@/functions/GravityForms/getGfFieldId'

export default function GravityForm({formData}) {
  const fieldData = formData?.fields?.edges

  /**
   * Map field GravityForm ids and defaults to Object.
   *
   * @param {Array} fields Array of fields.
   * @returns {Object} default field values.
   */
  function getFieldDefaults(fields) {
    const defaults = {}

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

  const fieldDefaults = getFieldDefaults(fieldData)

  return (
    <Form
      formDefaults={fieldDefaults}
      validationSchema={Yup.object({
        ['field-1']: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .max(15, 'Must be 15 characters or less')
          .required('Required')
      })}
    >
      {fieldData && <Fields fields={fieldData} />}
    </Form>
  )
}

GravityForm.propTypes = {
  formData: PropTypes.object
}
