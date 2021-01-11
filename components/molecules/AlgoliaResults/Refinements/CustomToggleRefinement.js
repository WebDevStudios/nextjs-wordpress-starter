import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import {connectToggleRefinement} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'

/**
 * Custom display of Algolia [ToggleRefinement](https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/) widget.
 */
function ToggleRefinement({
  currentRefinement,
  label,
  value,
  refine,
  title,
  className
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
  currentRefinement: PropTypes.bool.isRequired,
  refine: PropTypes.func,
  title: PropTypes.string,
  label: PropTypes.string,
  limit: PropTypes.number,
  value: PropTypes.string,
  className: PropTypes.string
}

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement)
export default CustomToggleRefinement
