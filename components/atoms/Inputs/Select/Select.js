import {Field, ErrorMessage} from 'formik'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './Select.module.css'

/**
 * Render the Select component.
 *
 * @author WebDevStudios
 * @param {object}  props             The component attributes as props.
 * @param {string}  props.className   Select wrapper className.
 * @param {string}  props.description Select description.
 * @param {string}  props.label       Select input label.
 * @param {string}  props.id          Select input id.
 * @param {boolean} props.isRequired  If input is required.
 * @param {Array}   props.options     Array of input options objects.
 * @return {Element}                  The Select component.
 */
export default function Select({
  className,
  description,
  id,
  isRequired,
  label,
  options
}) {
  return (
    <div className={cn(styles.select, className)}>
      {label && <label required={isRequired}>{label}</label>}
      <Field as="select" id={id} name={id} required={isRequired}>
        {!!options?.length > 0 &&
          options.map((option, key) => {
            const {text, value} = option

            return (
              <option key={key} value={value}>
                {text}
              </option>
            )
          })}
        {description && <p>{description}</p>}
      </Field>
      <ErrorMessage name={id} />
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
}

Select.defaultProps = {
  isRequired: false
}
