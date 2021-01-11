import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'
import Checkbox from '@/components/atoms/Inputs/Checkbox'

export default function CheckboxGroup({
  checkboxes,
  className,
  description,
  fieldId,
  label
}) {
  return (
    <div className={className} key={fieldId}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      {description && <p>{description}</p>}
      {!!checkboxes.length > 0 &&
        checkboxes.map((checkbox) => (
          <Checkbox key={checkbox.id} {...checkbox} />
        ))}
      <ErrorMessage name={fieldId} />
    </div>
  )
}

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  validation: PropTypes.func
}

CheckboxGroup.defaultProps = {
  isRequired: false
}
