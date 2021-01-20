import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'
import styles from './InputError.module.css'

/**
 * Render the InputError component.
 *
 * @param {object}        props      The component attributes as props.
 * @param {string|number} props.name Input id.
 * @return {Element}                 The InputError component.
 */
export default function InputError({name}) {
  return (
    <span className={styles.inputError}>
      <ErrorMessage name={name} />
    </span>
  )
}

InputError.propTypes = {
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
