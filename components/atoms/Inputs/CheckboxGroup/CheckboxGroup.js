import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'

export default function CheckboxGroup({
  checkboxes,
  className,
  description,
  fieldId,
  label
}) {
  console.log(checkboxes)
  return (
    <div className={className} key={fieldId}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      {description && <p>{description}</p>}
      {!!checkboxes.length > 0 &&
        checkboxes.map((checkbox) => {
          const {id, label, name} = checkbox

          return (
            <ul key={id}>
              <li>{`Checkbox id:${id}`}</li>
              <li>{`Checkbox name:${name}`}</li>
              <li>{label}</li>
            </ul>
          )
        })}
      {/* <Field
        aria-required={isRequired}
        id={fieldId}
        name={fieldId}
        required={isRequired}
        type={type}
        validate={validation}
      /> */}
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
