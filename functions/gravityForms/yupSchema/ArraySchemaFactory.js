import * as Yup from 'yup'

/**
 * Create Yup Array schema object.
 *
 * @author WebDevStudios
 * @see https://github.com/jquense/yup#array
 * @return {object} Yup validationSchema Object.
 */
export default class ArraySchemaFactory {
  /**
   * Constructor.
   *
   * Note: wp-graphql-gravity-forms plugin may need to be replaced.
   *
   * @see https://github.com/harness-software/wp-graphql-gravity-forms
   * @param {object} fieldData from GravityForm GraphQL data Object.
   */
  constructor(fieldData) {
    this.fieldData = fieldData
  }

  /**
   * Get Yup schema object with validation requirements.
   *
   * Combine multiple schemas into one.
   *
   * @see https://github.com/jquense/yup#mixedconcatschema-schema-schema
   * @return {object} Combined Yup validationSchema Object.
   */
  get schema() {
    return Yup.array().concat(this.getMinLengthSchema())
  }

  /**
   * Set a minimum length limit for the array.
   *
   * @see https://github.com/jquense/yup#arrayminlimit-number--ref-message-string--function-schema
   * @return {object} Yup validationSchema Object.
   */
  getMinLengthSchema() {
    if (!this.fieldData?.isRequired) {
      return Yup.array()
    }

    return Yup.array().min(1, 'Atleast one option must be checked.')
  }
}
