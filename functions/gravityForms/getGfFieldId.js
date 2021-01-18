/**
 * Create a field ID based on GravityForms provided ID.
 *
 * @author WebDevStudios
 * @param {number} fieldId GravityForm field ID.
 * @return {string} A unique string identifer for the field.
 */
export default function getGfFieldId(fieldId) {
  if (!fieldId || typeof fieldId !== 'number') {
    return fieldId
  }

  return `field-${fieldId}`
}
