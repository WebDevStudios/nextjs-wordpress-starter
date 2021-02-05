import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import {connectToggleRefinement} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'

/**
 * Render the ToggleRefinement component.
 *
 * @author WebDevStudios
 * @see https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/
 * @param {object}   props                   The component attributes as props.
 * @param {boolean}  props.currentRefinement The current refinement.
 * @param {Function} props.refine            Update the current refinement.
 * @param {string}   props.className         The component class.
 * @param {string}   props.title             The component title.
 * @param {string}   props.value             The form value.
 * @param {string}   props.label             The form label.
 * @return {Element}                         The ToggleRefinement component.
 */
function ToggleRefinement({
  className,
  currentRefinement,
  label,
  refine,
  title,
  value
}) {
  return (
    <section className={cn(styles.filterPanel, className)}>
      {title && <h3>{title}</h3>}
      <ul>
        <li>
          <input
            type="checkbox"
            id={`chk-${label}`}
            label={label}
            name={label}
            value={value}
            onChange={() => refine(currentRefinement ? false : true)}
            checked={currentRefinement}
          />
          <label htmlFor={`chk-${label}`}>{label}</label>
        </li>
      </ul>
    </section>
  )
}

ToggleRefinement.propTypes = {
  className: PropTypes.string,
  currentRefinement: PropTypes.bool.isRequired,
  label: PropTypes.string,
  refine: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string
}

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement)
export default CustomToggleRefinement
