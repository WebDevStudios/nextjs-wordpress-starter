import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'
import Checkbox from '@/components/atoms/Inputs/Checkbox'

/**
 * Render CheckboxGroup component.
 *
 * @param {object}        props             The component attributes as props.
 * @param {Array}         props.checkboxes  Array of checkbox data objects.
 * @param {string}        props.className   CheckboxGroup wrapper className.
 * @param {string|number} props.id          CheckboxGroup id.
 * @param {string}        props.label       CheckboxGroup input label.
 * @param {string}        props.description CheckboxGroup input name.
 * @param {boolean}       props.isRequired  If input is required.
 * @return {Element}                        The CheckboxGroup component.
 */
export default function CheckboxGroup({
  checkboxes,
  className,
  description,
  id: groupId,
  label,
  isRequired
}) {
  return (
    <div
      aria-labelledby={groupId}
      className={className}
      id={groupId}
      role="group"
    >
      {label && (
        <label htmlFor={groupId} required={isRequired}>
          {label}
        </label>
      )}
      {description && <p>{description}</p>}
      {!!checkboxes.length > 0 &&
        checkboxes.map((checkbox) => {
          const {id, label, value} = checkbox

          return (
            <Checkbox
              id={id}
              key={`${groupId}-${id}`}
              label={label}
              name={groupId}
              value={value}
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
