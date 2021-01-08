import getGfFieldId from '@/functions/gravityForms/getGfFieldId'
import * as Yup from 'yup'

/**
 * Create Yup string schema object.
 *
 * @author Mike England <mike.england@webdevstudios.com>
 * @since 2021-01-07
 * @link https://github.com/jquense/yup#string
 */
class StringSchemaFactory {
  /**
   * Constructor.
   *
   * Note: wp-graphql-gravity-forms plugin may need to be replaced.
   *
   * @param {Object} fieldData from GravityForm GraphQL data Object.
   * @link https://github.com/harness-software/wp-graphql-gravity-forms
   */
  constructor(fieldData) {
    this.fieldData = fieldData
  }

  /**
   * Get Yup schema object with validation requirements.
   *
   * Combine multiple schemas into one.
   *
   * @author Mike England <mike.england@webdevstudios.com>
   * @since 2021-01-07
   * @returns {Object} Combined Yup validationSchema Object.
   * @link https://github.com/jquense/yup#mixedconcatschema-schema-schema
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
    if (!this.fieldData?.isRequired) {
      return
    }

    return Yup.string().required('Required!')
  }

  /**
   * Get Yup max line length validation.
   *
   * @author Mike England <mike.england@webdevstudios.com>
   * @since 2021-01-07
   * @return {Object} Yup validationSchema Object.
   * @link https://github.com/jquense/yup#stringmaxlimit-number--ref-message-string--function-schema
   */
  getMaxLengthSchema() {
    if (!this.fieldData?.maxLength) {
      return
    }

    return Yup.string().max(
      this.fieldData.maxLength,
      `Must be ${this.fieldData.maxLength} characters or less`
    )
  }
}

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
function getValidationSchemaType(fieldData) {
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
 */
export default function getGfFieldValidationSchema(fieldData) {
  const validationSchema = getValidationSchemaType(fieldData)

  return {
    [getGfFieldId(fieldData.id)]: validationSchema
  }
}
