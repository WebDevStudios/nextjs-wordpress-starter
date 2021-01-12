import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import cn from 'classnames'
import * as Input from '@/components/atoms/Inputs'

export default function Checkbox({
  className,
  description,
  id,
  inputs,
  label,
  size,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)

  return (
    <div
      className={cn(className, isHiddenClass) || null}
      field-size={size && `size-${size}`}
    >
      <Input.CheckboxGroup
        checkboxes={inputs}
        description={description}
        id={fieldId}
        label={label}
      />
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  size: PropTypes.string,
  visibility: PropTypes.string
}
