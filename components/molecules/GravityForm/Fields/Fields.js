import PropTypes from 'prop-types'
import * as GfFields from '.'

export default function Fields({fields}) {
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
  fields: PropTypes.array
}

Fields.defaultProps = {
  fields: []
}
