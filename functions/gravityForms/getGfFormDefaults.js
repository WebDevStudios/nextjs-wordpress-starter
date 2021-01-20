import getGfFieldId from '@/functions/gravityForms/getGfFieldId'

/**
 * Map field GravityForm ids and defaults to Object.
 *
 * @param {Array} fields Array of fields.
 * @return {object}      Default field values.
 */
export default function getGfFormDefaults(fields) {
  const formDefaults = {}

  if (!fields || !fields.length) {
    return formDefaults
  }

  fields.forEach((field) => {
    if (!field.node.id) {
      return
    }

    Object.assign(formDefaults, {
      [getGfFieldId(field.node.id)]: field.node.defaultValue
    })
  })

  return formDefaults
}
