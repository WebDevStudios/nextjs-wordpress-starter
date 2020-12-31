import PropTypes from 'prop-types'
import {Field, ErrorMessage} from 'formik'

export default function Text({className, description, fieldId, label, type}) {
  return (
    <div className={className} key={fieldId}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Field id={fieldId} type={type} name={fieldId} />
      {description && <p>{description}</p>}
      <ErrorMessage name={fieldId} />
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
