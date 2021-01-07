import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import * as Yup from 'yup'

// TODO Refactor this file for scaling purposes.

/**
 * Get Yup string schema object based on GF Feild Props.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2021-01-07
 */
class stringSchemaGetter {
  constructor(fieldData) {
    this.fieldData = fieldData
  }

  // Getter
  get required() {
    return this.fieldRequired()
  }

  // Method
  fieldRequired() {
    return this.fieldData?.required
  }
}

/**
 * Match field type with Yup schema object.
 *
 * @param {string} type GravityForm field type.
 * @param {*} fieldData GravityForm field props.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2021-01-07
 */
function getValidationSchemaType(type, fieldData) {
  let schemaGetter

  // Get Schema based on GravityForm field type.
  switch (type) {
    case 'text':
      schemaGetter = new stringSchemaGetter(fieldData)
      break

    default:
      return
  }

  console.log('schemaGetter', schemaGetter)

  return schemaGetter
}

/**
 * Map props to validation schemas.
 *
 * @param {Object} fieldData GravityForm field props.
 */
export default function getGfFieldValidationSchema(fieldData) {
  // TEMPORARY HOOK FOR TESTING.
  getValidationSchemaType('text', fieldData)

  const validationTypes = {
    text: 'string'
  }

  const type = validationTypes?.[fieldData?.type]

  if (!type) {
    return
  }

  const yupType = Yup[type]()

  /**
   * Conditionally concat Yup validations.
   */
  const validationSchema = yupType
    .concat(
      fieldData?.maxLength
        ? yupType.max(
            fieldData.maxLength,
            `Must be ${fieldData.maxLength} characters or less`
          )
        : null
    )
    .concat(fieldData?.isRequired ? yupType.required('Required!') : null)

  return {
    [getGfFieldId(fieldData.id)]: validationSchema
  }
}
