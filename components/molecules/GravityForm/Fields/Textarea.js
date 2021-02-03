import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import {Field} from 'formik'
import InputError from '@/components/atoms/Inputs/InputError'
import styles from '@/components/atoms/Inputs/Text/Text.module.css'
import cn from 'classnames'

/**
 * Render GravityForms Textarea field component.
 *
 * @param {object}        props             GravityForm Select field as props.
 * @param {string}        props.className   GravityForm field wrapper class.
 * @param {string}        props.description GravityForm field description.
 * @param {string|number} props.id          GravityForm field id.
 * @param {boolean}       props.isRequired  GravityForm field is required.
 * @param {string}        props.label       GravityForm field label.
 * @param {boolean}       props.visibility  GravityForm visibility option.
 * @return {Element}                        The File component.
 */
export default function TextArea({
  className,
  description,
  id,
  isRequired,
  label,
  visibility
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
        as="textarea"
        style={{borderWidth: '1px'}}
      />
      {description && <p>{description}</p>}
      <InputError name={id} />
    </div>
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  selectChoices: PropTypes.arrayOf(PropTypes.object),
  visibility: PropTypes.string
}
