import PropTypes from 'prop-types'
import * as Input from '@/components/atoms/Inputs'
import getGfFieldId from '@/functions/GravityForms/getGfFieldId'
import cn from 'classnames'

export default function Text({
  className,
  errorMessage,
  id,
  label,
  type,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = visibility === 'visible' ? null : 'isHidden'

  return (
    <div className={cn(className, isHiddenClass) || null}>
      <Input.Text
        errorMessage={errorMessage}
        fieldId={fieldId}
        label={label}
        type={type}
      />
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  visibility: PropTypes.string
}
