import formidable from 'formidable'

// Init formidable, allowing for an array of multiple files.
const form = formidable({multiples: true})

/**
 * Check if field value is valid JSON and can be parsed.
 *
 * @author WebDevStudios
 * @param  {any}     value Field value.
 * @return {boolean}       Whether field value is valid JSON.
 */
function isJsonString(value) {
  try {
    JSON.parse(value)
  } catch (error) {
    return false
  }

  return true
}

/**
 * Parse JSON field value if valid JSON, otherwise return original field value.
 *
 * @author WebDevStudios
 * @param  {any}        value Field value.
 * @return {object|any}       Parsed JSON field value or original field value if not JSON.
 */
function parseFieldValue(value) {
  if (!isJsonString(value)) {
    return value
  }

  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

/**
 *
 * @author WebDevStudios
 * @param {object}   req  Instance of http.IncomingMessage.
 * @param {object}   res  Instance of http.ServerResponse.
 * @param {Function} next Instance of NextHandler.
 */
export default async function gfMultipartFormParser(req, res, next) {
  const contentType = req.headers['content-type']

  // Bail and continue to next middleware or to the route if content type is not multipart form.
  if (!contentType || contentType.indexOf('multipart/form-data') === -1) {
    next()
  }

  form.parse(req, (err, fields, files) => {
    if (err) {
      next()
    }

    // Structure our return data.
    const data = {
      formId: 0,
      fieldValues: []
    }

    // Iterate through fields to format field data.
    Object.keys(fields).forEach((fieldName) => {
      const value = parseFieldValue(fields[fieldName])

      // If not a field, save to top-level of return data (e.g., `formId`).
      if (!fieldName.includes('field_')) {
        data[fieldName] = value
        return
      }

      // Save all field data to `fieldValues` array.
      data.fieldValues.push(value)
    })

    // Iterate through files to format as field data.
    Object.keys(files).forEach((fieldName) => {
      const id = parseInt(fieldName.replace('field_', ''), 10)

      // Save to `fieldValues` array in same format as non-file fields.
      data.fieldValues.push({
        id,
        fileUploadValues: files[fieldName]
      })
    })

    req.body = {
      ...data
    }

    // Set content type header back to JSON.
    req.headers['content-type'] = 'application/json'

    next()
  })
}
