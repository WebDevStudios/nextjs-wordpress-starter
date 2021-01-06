import PropTypes from 'prop-types'
import * as GfFields from '.'
import {useEffect} from 'react'
import * as Yup from 'yup'

export default function Fields({fields, setFormValidation}) {
  /**
   * Map through fields to setup form validation.
   *
   * Note: Yup form validation cannot be set at the field level
   * to prevent too many re-renders.
   */
  useEffect(() => {
    const formValidationSchema = {}

    fields.forEach((field) => {
      Object.assign(formValidationSchema, {
        [`field-${field?.node?.id}`]: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .max(15, 'Must be 15 characters or less')
          .required('Required!!!!!')
      })
    })

    setFormValidation(formValidationSchema)
  }, [fields, setFormValidation])

  return (
    <>
      {fields.length > 0 &&
        fields.map((field) => {
          const {id, type} = field.node
          let fieldToRender = null

          switch (type) {
            case 'text':
              fieldToRender = <GfFields.Text {...field.node} key={id} />
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

Fields.propTypes = {
  fields: PropTypes.array,
  setFormValidation: PropTypes.func
}

Fields.defaultProps = {
  fields: []
}
