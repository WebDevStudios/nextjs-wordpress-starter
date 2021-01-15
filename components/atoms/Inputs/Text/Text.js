import PropTypes from 'prop-types'
import {Field, ErrorMessage} from 'formik'

/**
 * @param props0
 * @param props0.className
 * @param props0.description
 * @param props0.id
 * @param props0.isRequired
 * @param props0.label
 * @param props0.type
 * @param props0.validation
 */
export default function Text({
  className,
  description,
  id,
  isRequired,
  label,
  type,
  validation
}) {
  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <Field
        aria-required={isRequired}
        id={id}
        name={id}
        required={isRequired}
        type={type}
        validate={validation}
      />
      {description && <p>{description}</p>}
      <ErrorMessage name={id} />
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validation: PropTypes.func
}

Text.defaultProps = {
  isRequired: false
}
