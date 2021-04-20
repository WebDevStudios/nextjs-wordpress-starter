import getGfFieldId from '@/functions/wordpress/gravityForms/getGfFieldId'

/**
 * Assign default values for GravityForm Checkboxes.
 *
 * @param {Array} checkboxes Array of checkbox data Objects.
 * @return {Array}           Array of isSelected checkbox values.
 */
function getCheckboxDefaults(checkboxes) {
  let checkboxDefault = []

  if (!checkboxes.length > 0) {
    return checkboxDefault
  }

  /**
   * Assign values from isSelected checkboxes.
   */
  checkboxes
    .filter((checkbox) => !!checkbox?.isSelected)
    .forEach((checkbox) => {
      checkboxDefault.push(checkbox.value)
    })

  return checkboxDefault
}

/**
 * Assign default values for GravityForm Select.
 *
 * @param {Array} options Array of select option data Objects.
 * @return {string}       Select option value that is selected.
 */
function getSelectDefaults(options) {
  let selectDefault = ''

  if (!options.length > 0) {
    return selectDefault
  }

  /**
   * Get first option with isSelected property.
   */
  const selectedOption = options.filter((option) => !!option.isSelected).shift()

  if (selectedOption) {
    selectDefault = selectedOption.value
  }

  return selectDefault
}

/**
 * Match field type with a default value.
 *
 * @author WebDevStudios
 * @param {object} fieldData GravityForm field props.
 * @return {any}             Field default value.
 */
function getFieldDefaultByType(fieldData) {
  // Setup field data default
  let defaultValue = ''

  switch (fieldData?.type) {
    case 'checkbox':
      defaultValue = getCheckboxDefaults(fieldData?.checkboxChoices)
      break

    case 'select':
      defaultValue = getSelectDefaults(fieldData?.selectChoices)
      break

    default:
      defaultValue = fieldData?.defaultValue
  }

  return defaultValue
}

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
      [getGfFieldId(field.node.id)]: getFieldDefaultByType(field.node)
    })
  })

  return formDefaults
}
