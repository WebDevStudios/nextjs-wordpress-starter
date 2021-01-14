import {Field} from 'formik'

/**
 * Render the Select component.
 *
 * @author WebDevStudios
 * @return {Element} The Select component.
 */
export default function Select() {
  return (
    <Field as="select" name="color">
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </Field>
  )
}
