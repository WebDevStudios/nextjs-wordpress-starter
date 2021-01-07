import PropTypes from 'prop-types'
import {Field, ErrorMessage} from 'formik'

export default function Text({
  className,
  description,
  fieldId,
  isRequired,
  label,
  type,
  validation
}) {
  return (
    <div className={className} key={fieldId}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Field
        aria-required={isRequired}
        id={fieldId}
        name={fieldId}
        required={isRequired}
        type={type}
        validate={validation}
      />
      {description && <p>{description}</p>}
      <ErrorMessage name={fieldId} />
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validation: PropTypes.func
}

Text.defaultProps = {
  isRequired: false
}
