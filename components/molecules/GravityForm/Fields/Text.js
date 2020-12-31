import PropTypes from 'prop-types'
import * as Input from '@/components/atoms/Inputs'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/GravityForms'
import cn from 'classnames'

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
        fieldId={fieldId}
        label={label}
        type={(enablePasswordInput && 'password') || type}
        isRequired={isRequired}
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
