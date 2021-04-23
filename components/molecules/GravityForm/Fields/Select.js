import * as Input from '@/components/atoms/Inputs'
import {
  getGfFieldId,
  getGfHiddenClassName
} from '@/functions/wordpress/gravityForms'
import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * Render GravityForms Select field component.
 *
 * @param {object}        props               GravityForm Select field as props.
 * @param {string}        props.className     GravityForm field wrapper class.
 * @param {string}        props.description   GravityForm field description.
 * @param {string|number} props.id            GravityForm field id.
 * @param {boolean}       props.isRequired    GravityForm field is required.
 * @param {string}        props.label         GravityForm field label.
 * @param {Array}         props.selectChoices GravityForm field selection options.
 * @param {boolean}       props.visibility    GravityForm field visibility.
 * @return {Element}                          The Select component.
 */
export default function Select({
  className,
  description,
  id,
  isRequired,
  label,
  selectChoices,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)

  return (
    <Input.Select
      className={cn(className, isHiddenClass) || null}
      description={description}
      id={fieldId}
      isRequired={isRequired}
      label={label}
      options={selectChoices}
    />
  )
}

Select.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  selectChoices: PropTypes.arrayOf(PropTypes.object),
  visibility: PropTypes.string
}
