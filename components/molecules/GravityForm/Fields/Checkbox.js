import PropTypes from 'prop-types'
import {getGfHiddenClassName} from '@/functions/gravityForms'
import cn from 'classnames'
import {Field} from 'formik'

export default function Checkbox({className, size, visibility}) {
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
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  visibility: PropTypes.string
}
