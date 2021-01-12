import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'
import Checkbox from '@/components/atoms/Inputs/Checkbox'

export default function CheckboxGroup({
  checkboxes,
  className,
  description,
  id: groupId,
  label
}) {
  return (
    <div
      aria-labelledby={groupId}
      className={className}
      id={groupId}
      role="group"
    >
      {label && <label htmlFor={groupId}>{label}</label>}
      {description && <p>{description}</p>}
      {!!checkboxes.length > 0 &&
        checkboxes.map((checkbox) => {
          const {id, label} = checkbox

          return (
            <Checkbox
              id={id}
              key={`${groupId}-${id}`}
              label={label}
              name={groupId}
            />
          )
        })}
      <ErrorMessage name={groupId} />
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
