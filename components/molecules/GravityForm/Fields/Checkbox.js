import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import cn from 'classnames'
import * as Input from '@/components/atoms/Inputs'

/**
 * Merge GravityForm checkbox field data into single Array.
 *
 * @param {Array} checkboxChoices Array of checkbox field input data.
 * @param {Array} inputs          Array of checkbox field input data.
 * @return {Array}                Checkbox data Array with combined Objects.
 */
function getMergedCheckboxes(checkboxChoices, inputs) {
  let checkboxes = []

  checkboxChoices.forEach((checkbox, index) => {
    checkboxes.push({
      ...checkbox,
      ...inputs[index]
    })
  })

  return checkboxes
}

/**
 * Render GravityForms Checkbox field component.
 *
 * @param {object}        props                 GravityForm Checkbox field as props.
 * @param {Array}         props.checkboxChoices Array of checkbox field input data.
 * @param {string}        props.className       GravityForm field wrapper class.
 * @param {string}        props.description     GravityForm field description.
 * @param {Array}         props.inputs          Array of checkbox field input data.
 * @param {string|number} props.id              GravityForm field id.
 * @param {string}        props.label           GravityForm field label.
 * @param {boolean}       props.visibility      GravityForm field visibility.
 * @return {Element}                            The Checkbox component.
 */
export default function Checkbox({
  className,
  checkboxChoices,
  description,
  id,
  inputs,
  label,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)
  const checkboxes = getMergedCheckboxes(checkboxChoices, inputs)

  return (
    <Input.CheckboxGroup
      className={cn(className, isHiddenClass) || null}
      checkboxes={checkboxes}
      description={description}
      id={fieldId}
      label={label}
    />
  )
}

Checkbox.propTypes = {
  checkboxChoices: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  visibility: PropTypes.string
}
