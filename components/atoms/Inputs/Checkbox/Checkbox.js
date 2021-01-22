import PropTypes from 'prop-types'
import {Field} from 'formik'

/**
 * Render Checkbox component.
 *
 * @param {object}        props           The component attributes as props.
 * @param {string}        props.className Input className.
 * @param {string|number} props.id        Input id.
 * @param {string}        props.label     Input label.
 * @param {string}        props.name      Input name.
 * @param {string}        props.value     Input value.
 * @return {Element}                      The Checkbox component.
 */
export default function Checkbox({className, id, label, name, value}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id}>
          <Field name={name} type="checkbox" value={value || name} />
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string
}
