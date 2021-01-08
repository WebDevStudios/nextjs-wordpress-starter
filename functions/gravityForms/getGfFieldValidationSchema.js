import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import * as Yup from 'yup'

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

  /**
   * Get Yup schema object based on fieldData.
   *
   * @author Mike England <mike.england@webdevstudios.com>
   * @since 2021-01-07
   * @returns ~~~~
   */
  get schema() {
    return Yup.string()
      .concat(this.getMaxLengthSchema())
      .concat(this.getRequiredSchema())
  }

  /**
   * Get Yup required field validaion.
   *
   * @author Mike England <mike.england@webdevstudios.com>
   * @since 2021-01-07
   * @return {Object} Yup validationSchema Object.
   * @link https://github.com/jquense/yup#stringrequiredmessage-string--function-schema
   */
  getRequiredSchema() {
    let schema = Yup.string()

    if (!this.fieldData?.isRequired) {
      return
    }

    return schema.required('Required!')
  }

  /**
   * Get Yup max line length validaion.
   *
   * @author Mike England <mike.england@webdevstudios.com>
   * @since 2021-01-07
   * @return {Object} Yup validationSchema Object.
   * @link https://github.com/jquense/yup#stringmaxlimit-number--ref-message-string--function-schema
   */
  getMaxLengthSchema() {
    let schema = Yup.string()

    if (!this.fieldData?.maxLength) {
      return
    }

    return schema.max(
      this.fieldData.maxLength,
      `Must be ${this.fieldData.maxLength} characters or less`
    )
  }
}

/**
 * Match field type with Yup schema object.
 *
 * @param {Object} fieldData GravityForm field props.
 * @returns {Object} Schema validation for field.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2021-01-07
 * @link https://github.com/jquense/yup#api
 */
function getValidationSchemaType(fieldData) {
  let schemaGetter = null

  // Get Schema based on GravityForm field type.
  switch (fieldData?.type) {
    case 'text':
      schemaGetter = new stringSchemaGetter(fieldData)
      break

    default:
      return
  }

  return schemaGetter.schema
}

/**
 * Map props to validation schemas.
 *
 * @param {Object} fieldData GravityForm field props.
 */
export default function getGfFieldValidationSchema(fieldData) {
  // TEMPORARY HOOK FOR TESTING.
  const validationSchema = getValidationSchemaType(fieldData)

  // const validationTypes = {
  //   text: 'string'
  // }

  // const type = validationTypes?.[fieldData?.type]

  // if (!type) {
  //   return
  // }

  // const yupType = Yup[type]()

  // /**
  //  * Conditionally concat Yup validations.
  //  */
  // const validationSchema = yupType
  //   .concat(
  //     fieldData?.maxLength
  //       ? yupType.max(
  //           fieldData.maxLength,
  //           `Must be ${fieldData.maxLength} characters or less`
  //         )
  //       : null
  //   )
  //   .concat(fieldData?.isRequired ? yupType.required('Required!') : null)

  return {
    [getGfFieldId(fieldData.id)]: validationSchema
  }
}
