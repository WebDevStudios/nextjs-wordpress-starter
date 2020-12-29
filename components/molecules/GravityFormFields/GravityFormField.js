import {Field, ErrorMessage} from 'formik'
import PropTypes from 'prop-types'

export default function GravityFormFields({fields}) {
  return (
    <>
      {fields.length > 0 &&
        fields.map((field, index) => {
          const {label} = field.node
          const fieldId = `field-${index}`

          return (
            <div key={index}>
              <label htmlFor={fieldId}>{label}</label>
              <Field id={fieldId} type="text" name={fieldId} />
              <ErrorMessage name={fieldId} />
            </div>
          )
        })}
    </>
  )
}

GravityFormFields.propTypes = {
  fields: PropTypes.array
}

GravityFormFields.defaultProps = {
  fields: []
}
