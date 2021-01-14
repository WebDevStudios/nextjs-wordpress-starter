/**
 * Render the Select component.
 *
 * @author WebDevStudios
 * @return {Element} The Select component.
 */
export default function Select() {
  return (
    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">
        Coconut
      </option>
      <option value="mango">Mango</option>
    </select>
  )
}
