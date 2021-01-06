import getGfFieldId from '@/functions/GravityForms/getGfFieldId'
import * as Yup from 'yup'

/**
 * Map props to validation schemas.
 *
 * @param {Object} fieldData GravityForm field props.
 */
export default function getGfFieldValidationSchema(fieldData) {
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
