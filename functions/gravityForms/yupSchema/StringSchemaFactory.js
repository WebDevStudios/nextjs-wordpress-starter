import * as Yup from 'yup'

/**
 * Create Yup string schema object.
 *
 * @author WebDevStudios
 * @see    https://github.com/jquense/yup#string
 */
export default class StringSchemaFactory {
  /**
   * Constructor.
   *
   * Note: wp-graphql-gravity-forms plugin may need to be replaced.
   *
   * @param  {Object} fieldData from GravityForm GraphQL data Object.
   *
   * @author WebDevStudios
   * @see    https://github.com/harness-software/wp-graphql-gravity-forms
   */
  constructor(fieldData) {
    this.fieldData = fieldData
  }

  /**
   * Get Yup schema object with validation requirements.
   *
   * Combine multiple schemas into one.
   *
   * @returns {Object} Combined Yup validationSchema Object.
   *
   * @author  WebDevStudios
   * @see     https://github.com/jquense/yup#mixedconcatschema-schema-schema
   */
  get schema() {
    return Yup.string()
      .concat(this.getMaxLengthSchema())
      .concat(this.getRequiredSchema())
  }

  /**
   * Get Yup required field validaion.
   *
   * @return {Object} Yup validationSchema Object.
   *
   * @author WebDevStudios
   * @see    https://github.com/jquense/yup#stringrequiredmessage-string--function-schema
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
   * @return {Object} Yup validationSchema Object.
   *
   * @author WebDevStudios
   * @see    https://github.com/jquense/yup#stringmaxlimit-number--ref-message-string--function-schema
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
