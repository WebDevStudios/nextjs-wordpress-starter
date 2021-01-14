import {Field} from 'formik'
import PropTypes from 'prop-types'

/**
 * Render the Select component.
 *
 * @author WebDevStudios
 * @param {object} props         props.
 * @param {string} props.label   GravityForm field label.
 * @param {Array}  props.options Array of input options objects.
 * @return {Element}             The Select component.
 */
export default function Select({label, options}) {
  return (
    <div>
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
      </Field>
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf([PropTypes.object])
}
