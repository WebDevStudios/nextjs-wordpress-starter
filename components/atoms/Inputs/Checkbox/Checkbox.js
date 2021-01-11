import PropTypes from 'prop-types'
import {Field} from 'formik'

export default function Checkbox({className, fieldId, label}) {
  return (
    <div className={className} key={fieldId}>
      {label && (
        <label htmlFor={fieldId}>
          <Field name="checked" type="checkbox" value="One" />
          {label}
        </label>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
