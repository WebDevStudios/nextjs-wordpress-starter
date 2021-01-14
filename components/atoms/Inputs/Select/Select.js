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
      <option value="grapefruit">{options?.[0]}</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </Field>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf([PropTypes.object])
}
