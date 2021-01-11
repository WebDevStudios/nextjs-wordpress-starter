import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'
import Checkbox from '@/components/atoms/Inputs/Checkbox'

export default function CheckboxGroup({
  checkboxes,
  className,
  description,
  id,
  label
}) {
  return (
    <div className={className} key={id}>
      {label && <label htmlFor={id}>{label}</label>}
      {description && <p>{description}</p>}
      {!!checkboxes.length > 0 &&
        checkboxes.map((checkbox) => (
          <Checkbox key={checkbox.id} {...checkbox} />
        ))}
      <ErrorMessage name={id} />
    </div>
  )
}

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  validation: PropTypes.func
}

CheckboxGroup.defaultProps = {
  isRequired: false
}
