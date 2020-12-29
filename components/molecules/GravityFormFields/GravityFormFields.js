import {Field, ErrorMessage} from 'formik'
import PropTypes from 'prop-types'

export default function GravityFormFields({className, fields}) {
  return (
    <>
      {fields.length > 0 &&
        fields.map((field, index) => {
          const {label} = field.node
          const fieldId = `field-${index}`

          return (
            <div className={className} key={index}>
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
  className: PropTypes.string,
  fields: PropTypes.array
}

GravityFormFields.defaultProps = {
  fields: []
}
