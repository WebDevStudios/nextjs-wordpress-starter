import PropTypes from 'prop-types'
import {Field} from 'formik'

export default function Checkbox({className, id, label}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id}>
          <Field name="checked" type="checkbox" value={`field-${id}`} />
          {label}
        </label>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
