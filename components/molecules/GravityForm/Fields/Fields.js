import PropTypes from 'prop-types'
import * as GfFields from '.'

/**
 * Render the Fields component.
 *
 * @author WebDevStudios
 * @param {object} props             The component attributes as props.
 * @param {Array}  props.fields      GravityForm fields data.
 * @param {object} props.formikProps Props available to Formik components.
 * @return {Element}                 The Fields component.
 */
export default function Fields({fields, formikProps}) {
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

            case 'textarea':
              fieldToRender = <GfFields.Textarea {...field.node} key={id} />
              break

            case 'fileupload':
              fieldToRender = (
                <GfFields.File
                  {...field.node}
                  setFieldValue={formikProps.setFieldValue}
                  key={id}
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

Fields.propTypes = {
  fields: PropTypes.array,
  setFormValidation: PropTypes.func,
  formikProps: PropTypes.object
}

Fields.defaultProps = {
  fields: []
}
