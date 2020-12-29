import {Field, ErrorMessage} from 'formik'
import PropTypes from 'prop-types'

export default function Text({className, fieldId, label, type}) {
  return (
    <div className={className} key={fieldId}>
      <label htmlFor={fieldId}>{label}</label>
      <Field id={fieldId} type={type} name={fieldId} />
      <ErrorMessage name={fieldId} />
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
