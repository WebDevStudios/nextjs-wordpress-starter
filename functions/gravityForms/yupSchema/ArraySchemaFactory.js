import * as Yup from 'yup'

/**
 * Create Yup Array schema object.
 *
 * @author WebDevStudios
 * @see https://github.com/jquense/yup#array
 * @return {Object} Yup validationSchema Object.
 */
export default class ArraySchemaFactory {
  /**
   * Constructor.
   *
   * Note: wp-graphql-gravity-forms plugin may need to be replaced.
   *
   * @see https://github.com/harness-software/wp-graphql-gravity-forms
   * @param {Object} fieldData from GravityForm GraphQL data Object.
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
   * @return {Object} Combined Yup validationSchema Object.
   */
  get schema() {
    return Yup.array()
  }
}
