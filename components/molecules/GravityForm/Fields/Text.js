import PropTypes from 'prop-types'
import * as Input from '@/components/atoms/Inputs'
import getGfFieldId from '@/functions/GravityForms/getGfFieldId'

export default function Text({className, errorMessage, id, label, type}) {
  const fieldId = getGfFieldId(id)

  return (
    <Input.Text
      className={className}
      errorMessage={errorMessage}
      fieldId={fieldId}
      label={label}
      type={type}
    />
  )
}

Text.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
}
