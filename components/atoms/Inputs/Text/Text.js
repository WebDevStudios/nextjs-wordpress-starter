import PropTypes from 'prop-types'
import {Field, ErrorMessage} from 'formik'

/**
 * Render the Text component.
 *
 * @author WebDevStudios
 * @param {object}  props             props.
 * @param {string}  props.className   Text wrapper className.
 * @param {string}  props.description Text description.
 * @param {string}  props.id          Text input id.
 * @param {string}  props.label       Text input label.
 * @param {boolean} props.isRequired  If input is required.
 * @param {string}  props.type        Text input type.
 * @return {Element}                  The Text component.
 */
export default function Text({
  className,
  description,
  id,
  isRequired,
  label,
  type
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
  type: PropTypes.string.isRequired
}

Text.defaultProps = {
  isRequired: false
}
