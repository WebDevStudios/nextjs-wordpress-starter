import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import cn from 'classnames'
import {Field} from 'formik'
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
      <div id="checkbox-group">Checked</div>
      <div role="group" aria-labelledby="checkbox-group">
        <label htmlFor="One">
          <Field type="checkbox" name="checked" value="One" />
          One
        </label>
        <label htmlFor="Two">
          <Field type="checkbox" name="checked" value="Two" />
          Two
        </label>
        <label htmlFor="Three">
          <Field type="checkbox" name="checked" value="Three" />
          Three
        </label>
      </div>
      <Input.CheckboxGroup
        checkboxes={inputs}
        label={label}
        description={description}
        fieldId={fieldId}
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
