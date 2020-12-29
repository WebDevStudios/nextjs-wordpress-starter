import {Field, ErrorMessage} from 'formik'
import PropTypes from 'prop-types'
import getGfFieldId from '@/functions/GravityForms/getGfFieldId'

export default function GravityFormFields({className, fields}) {
  return (
    <>
      {fields.length > 0 &&
        fields.map((field) => {
          const {id, label, type} = field.node
          const fieldId = getGfFieldId(id)

          return (
            <div className={className} key={id}>
              <label htmlFor={fieldId}>{label}</label>
              <Field id={fieldId} type={type} name={fieldId} />
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
