import {Field} from 'formik'
import PropTypes from 'prop-types'

/**
 * Render the Select component.
 *
 * @author WebDevStudios
 * @param {object} props             props.
 * @param {string} props.className   Select wrapper className.
 * @param {string} props.description Select description.
 * @param {string} props.label       Select input label.
 * @param {Array}  props.options     Array of input options objects.
 * @return {Element}             The Select component.
 */
export default function Select({className, description, label, options}) {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <Field as="select" name="color">
        {!!options?.length > 0 &&
          options.map((option, key) => {
            const {text, value} = option

            return (
              <option key={key} value={value}>
                {text}
              </option>
            )
          })}
        {description && <p>{description}</p>}
      </Field>
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf([PropTypes.object])
}
