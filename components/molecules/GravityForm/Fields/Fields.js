import PropTypes from 'prop-types'
import * as GfFields from '.'
import {useEffect} from 'react'
import getGfFieldValidationSchema from '@/functions/gravityForms/getGfFieldValidationSchema'

/**
 * Render the Fields component.
 *
 * @author WebDevStudios
 * @param {object}   props                   The component attributes as props.
 * @param {Array}    props.fields            GravityForm fields data.
 * @param {Function} props.setFormValidation Callback function for setting formValidation state.
 * @return {Element}                         The Fields component.
 */
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
      Object.assign(
        formValidationSchema,
        getGfFieldValidationSchema(field?.node)
      )
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
            case 'checkbox':
              fieldToRender = <GfFields.Checkbox {...field.node} key={id} />
              break

            case 'email':
              fieldToRender = <GfFields.Text {...field.node} key={id} />
              break

            case 'phone':
              fieldToRender = <GfFields.Text {...field.node} key={id} />
              break

            case 'select':
              fieldToRender = <GfFields.Select {...field.node} key={id} />
              break

            case 'text':
              fieldToRender = <GfFields.Text {...field.node} key={id} />
              break

            case 'website':
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
