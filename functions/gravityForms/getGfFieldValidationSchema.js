import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import StringSchemaFactory from '@/functions/gravityForms/yupSchema/StringSchemaFactory'

/**
 * Match field type with Yup schema object.
 *
 * Match GravityForm field to Yup API property.
 *
 * @param {Object} fieldData GravityForm field props.
 * @returns {Object} Schema validation for field.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2021-01-07
 * @link https://github.com/jquense/yup#api
 */
function getValidationSchemaByType(fieldData) {
  let schemaGetter = null

  switch (fieldData?.type) {
    case 'text':
      schemaGetter = new StringSchemaFactory(fieldData).schema
      break

    default:
      return
  }

  return schemaGetter
}

/**
 * Map props to validation schemas.
 *
 * @param {Object} fieldData GravityForm field props.
 * @returns {Object} Schema validation for field.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2021-01-08
 */
export default function getGfFieldValidationSchema(fieldData) {
  return {
    [getGfFieldId(fieldData.id)]: getValidationSchemaByType(fieldData)
  }
}
