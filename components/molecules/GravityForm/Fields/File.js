import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import {Field} from 'formik'
import InputError from '@/components/atoms/Inputs/InputError'
import styles from '@/components/atoms/Inputs/Text/Text.module.css'
import cn from 'classnames'

/**
 * Render GravityForms File field component.
 *
 * @param {object}        props               GravityForm Select field as props.
 * @param {string}        props.className     GravityForm field wrapper class.
 * @param {string}        props.description   GravityForm field description.
 * @param {string|number} props.id            GravityForm field id.
 * @param {boolean}       props.isRequired    GravityForm field is required.
 * @param {string}        props.label         GravityForm field label.
 * @param {Array}         props.selectChoices GravityForm field selection options.
 * @param {boolean}       props.visibility    GravityForm field visibility.
 * @return {Element}                          The Select component.
 */
export default function File({className, description, id, isRequired, label}) {
  const fieldId = getGfFieldId(id)

  // const [upload, setUpload] = useState([])

  return (
    <div className={cn(styles.text, className)}>
      {label && (
        <label htmlFor={id} required={isRequired}>
          {label}
        </label>
      )}
      <Field
        aria-required={isRequired}
        id={fieldId}
        name={fieldId}
        required={isRequired}
        type="file"
        render={({field, form}) => (
            <input
              {...field}
              type="file"
              onChange={e => {
                form.setFieldValue(fieldId, e.currentTarget.files[0])
              }}
            />
          )}
      />
      {/* <input
        id={fieldId}
        name={fieldId}
        type="file"
        onChange={(event) => {
          setFieldValue(fieldId, event.currentTarget.files[0])
        }}
        required={isRequired}
      /> */}
      {description && <p>{description}</p>}
      <InputError name={id} />
    </div>
  )
}

File.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  selectChoices: PropTypes.arrayOf(PropTypes.object),
  visibility: PropTypes.string
}
