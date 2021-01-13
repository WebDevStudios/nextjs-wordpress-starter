import PropTypes from 'prop-types'
import * as Input from '@/components/atoms/Inputs'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import cn from 'classnames'

/**
 * Render the GravityForm Text component.
 *
 * @author WebDevStudios
 * @param {object}  props                     GravityForm field props.
 * @param {string}  props.className           Classname string.
 * @param {string}  props.description         GravityForm field description.
 * @param {boolean} props.enablePasswordInput GravityForm password enabled option.
 * @param {string}  props.errorMessage        GravityForm error message option.
 * @param {number}  props.id                  GravityForm unique field id.
 * @param {boolean} props.isRequired          GravityForm isRequired field.
 * @param {string}  props.label               GravityForm field label.
 * @param {string}  props.size                GravityForm field size.
 * @param {string}  props.type                GravityForm field type.
 * @param {boolean} props.visibility          GravityForm visibility option.
 * @return {Element}                          The Text component.
 */
export default function Text({
  className,
  description,
  enablePasswordInput,
  errorMessage,
  id,
  isRequired,
  label,
  size,
  type,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)

  return (
    <div
      className={cn(className, isHiddenClass) || null}
      field-size={size && `size-${size}`}
    >
      <Input.Text
        description={description}
        errorMessage={errorMessage}
        id={fieldId}
        isRequired={isRequired}
        label={label}
        type={(enablePasswordInput && 'password') || type}
      />
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  enablePasswordInput: PropTypes.bool,
  errorMessage: PropTypes.string,
  id: PropTypes.number.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string.isRequired,
  visibility: PropTypes.string
}

Text.defaultProps = {
  enablePasswordInput: false,
  isRequired: false
}
