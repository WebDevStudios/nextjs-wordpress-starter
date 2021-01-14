import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import * as Input from '@/components/atoms/Inputs'
import cn from 'classnames'

/**
 * Render GravityForms Checkbox field component.
 *
 * @param {object}        props               GravityForm Checkbox field props.
 * @param {string}        props.className     GravityForm field wrapper class.
 * @param {string}        props.description   GravityForm field description.
 * @param {string|number} props.id            GravityForm field id.
 * @param {boolean}       props.isRequired    GravityForm field is required.
 * @param {string}        props.label         GravityForm field label.
 * @param {string}        props.size          GravityForm field size.
 * @param {Array}         props.selectChoices GravityForm field selection options.
 * @param {boolean}       props.visibility    GravityForm field visibility.
 * @return {Element}                          The Checkbox component.
 */
export default function Select({
  className,
  description,
  id,
  isRequired,
  label,
  size,
  selectChoices,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)

  return (
    <div
      className={cn(className, isHiddenClass) || null}
      field-size={size && `size-${size}`}
    >
      <Input.Select
        id={fieldId}
        isRequired={isRequired}
        description={description}
        label={label}
        options={selectChoices}
      />
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  selectChoices: PropTypes.arrayOf([PropTypes.object]),
  size: PropTypes.string,
  visibility: PropTypes.string
}
