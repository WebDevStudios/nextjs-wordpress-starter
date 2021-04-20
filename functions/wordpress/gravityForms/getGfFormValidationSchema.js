import getGfFieldId from '@/functions/wordpress/gravityForms/getGfFieldId'
import ArraySchemaFactory from '@/functions/wordpress/gravityForms/yupSchema/ArraySchemaFactory'
import StringSchemaFactory from '@/functions/wordpress/gravityForms/yupSchema/StringSchemaFactory'
import * as Yup from 'yup'

/**
 * Match field type with Yup schema object.
 *
 * Match GravityForm field to Yup API property.
 *
 * @author WebDevStudios
 * @see https://github.com/jquense/yup#api
 * @param {object} fieldData GravityForm field props.
 * @return {object}          Schema validation for field.
 */
function getValidationSchemaByType(fieldData) {
  let schemaGetter = null

  switch (fieldData?.type) {
    case 'checkbox':
      schemaGetter = new ArraySchemaFactory(fieldData).schema
      break

    case 'email':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'phone':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'text':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'select':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    case 'website':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    default:
      return
  }

  return schemaGetter
}

/**
 * Create validation schema Object for a single field.
 *
 * @author WebDevStudios
 * @param {object} fieldData GravityForm field props.
 * @return {object}          Field validation schema object.
 */
function getGfFieldValidationSchema(fieldData) {
  return {
    [getGfFieldId(fieldData.id)]: getValidationSchemaByType(fieldData)
  }
}

/**
 * Create validation schema Object for GravityForm.
 *
 * @param {Array} fields Array of fields.
 * @return {object}      Form validation schema object.
 */
export default function getGfFormValidationSchema(fields) {
  const formValidationSchema = {}

  if (!fields || !fields.length) {
    return formValidationSchema
  }

  fields.forEach((field) => {
    if (!field.node.id) {
      return
    }

    Object.assign(formValidationSchema, getGfFieldValidationSchema(field?.node))
  })

  return Yup.object(formValidationSchema)
}
