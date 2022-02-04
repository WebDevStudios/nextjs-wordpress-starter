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
    .email('Your email address must be properly formatted: email@example.com')
    .validate(value)
    .then(() => null)
    .catch((error) => {
      return error.message
    })
}

/**
 * Validate number input.
 *
 * @author                WebDevStudios
 * @param  {string} value Input value.
 * @return {string}       Error message, if error encountered.
 */
async function validateNumber(value) {
  return await Yup.number('Your number input must be a valid number')
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
    .url('Your website address must be properly formatted: https://example.com')
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

    case 'number':
      return validateNumber

    case 'url':
      return validateUrl
  }
}
