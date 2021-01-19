import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'

/**
 * Render the InputError component.
 *
 * @param {object}        props      The component attributes as props.
 * @param {string|number} props.name Input id.
 * @return {Element}                 The InputError component.
 */
export default function Error({name}) {
  return <ErrorMessage name={name} />
}

Error.propTypes = {
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
