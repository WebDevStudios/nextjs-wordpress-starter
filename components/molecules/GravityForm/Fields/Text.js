import PropTypes from 'prop-types'
import * as Input from '@/components/atoms/Inputs'

export default function Text({className, fieldId, label, type}) {
  return (
    <Input.Text
      className={className}
      fieldId={fieldId}
      label={label}
      type={type}
    />
  )
}

Text.propTypes = {
  className: PropTypes.string,
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
