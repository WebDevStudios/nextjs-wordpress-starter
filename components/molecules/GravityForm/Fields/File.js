import InputError from '@/components/atoms/Inputs/InputError'
import styles from '@/components/atoms/Inputs/Text/Text.module.css'
import {
  getGfFieldId,
  getGfHiddenClassName
} from '@/functions/wordpress/gravityForms'
import cn from 'classnames'
import {Field} from 'formik'
import PropTypes from 'prop-types'

/**
 * Render GravityForms File field component.
 *
 * @param {object}        props               GravityForm Select field as props.
 * @param {string}        props.className     GravityForm field wrapper class.
 * @param {string}        props.description   GravityForm field description.
 * @param {string|number} props.id            GravityForm field id.
 * @param {boolean}       props.isRequired    GravityForm field is required.
 * @param {string}        props.label         GravityForm field label.
 * @param {boolean}       props.visibility    GravityForm visibility option.
 * @param {Function}      props.setFieldValue Formik function to set state.
 * @return {Element}                          The File component.
 */
export default function File({
  className,
  description,
  id,
  isRequired,
  label,
  visibility,
  setFieldValue
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)
  const thisClassName = cn(className, isHiddenClass)

  return (
    <div className={cn(styles.text, thisClassName)}>
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
        onChange={(e) => {
          // Save to _filedata here so we don't corrupt state.
          setFieldValue(`${fieldId}_filedata`, e.currentTarget.files[0])
        }}
      />
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
  visibility: PropTypes.string,
  setFieldValue: PropTypes.func
}
