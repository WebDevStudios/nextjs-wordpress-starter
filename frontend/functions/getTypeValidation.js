import * as Yup from 'yup'

/**
 * Validate email input.
 *
 * @author                WebDevStudios
 * @param  {string} value Input value.
 * @return {string}       Error message, if error encountered.
 */
async function validateEmail(value) {
  return await Yup.string()
    .email('Please provide a valid email')
    .validate(value)
    .then(() => null)
    .catch((error) => {
      return error.message
    })
}

/**
 * Validate URL input.
 *
 * @author                WebDevStudios
 * @param  {string} value Input value.
 * @return {string}       Error message, if error encountered.
 */
async function validateUrl(value) {
  return await Yup.string()
    .url('Please provide a valid URL')
    .validate(value)
    .then(() => null)
    .catch((error) => {
      return error.message
    })
}

/**
 * Get type-based validation.
 *
 * @author                           WebDevStudios
 * @param  {string}   type           Field type.
 * @return {Function|undefined}      Type-based validation or undefined.
 */
export default function getTypeValidation(type) {
  if (!type) {
    return
  }

  switch (type) {
    case 'email':
      return validateEmail

    case 'url':
      return validateUrl
  }
}
