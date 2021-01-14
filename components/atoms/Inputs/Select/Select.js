import {Field} from 'formik'
import PropTypes from 'prop-types'

/**
 * Render the Select component.
 *
 * @param {object} props         props.
 * @param {Array}  props.options Array of input options objects.
 * @author WebDevStudios
 * @return {Element}             The Select component.
 */
export default function Select({options}) {
  return (
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
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf([PropTypes.object])
}
