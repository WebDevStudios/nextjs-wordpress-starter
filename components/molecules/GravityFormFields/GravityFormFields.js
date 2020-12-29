import PropTypes from 'prop-types'
import getGfFieldId from '@/functions/GravityForms/getGfFieldId'
import * as Fields from '.'

export default function GravityFormFields({className, fields}) {
  return (
    <>
      {fields.length > 0 &&
        fields.map((field) => {
          const {id, label, type} = field.node
          const fieldId = getGfFieldId(id)

          let fieldToRender = null

          switch (type) {
            case 'text':
              fieldToRender = (
                <Fields.Text
                  fieldId={fieldId}
                  key={id}
                  label={label}
                  type={type}
                  className={className}
                />
              )
              break

            default:
              fieldToRender = (
                <pre key={id}>
                  {`"${type}" GravityForm field is unsupported.`}
                </pre>
              )
          }

          return fieldToRender
        })}
    </>
  )
}

GravityFormFields.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.array
}

GravityFormFields.defaultProps = {
  fields: []
}
