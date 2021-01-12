import PropTypes from 'prop-types'
import {Field} from 'formik'

export default function Checkbox({className, id, label, name}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id}>
          <Field name={name} type="checkbox" value={`value${id}`} />
          {label}
        </label>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
