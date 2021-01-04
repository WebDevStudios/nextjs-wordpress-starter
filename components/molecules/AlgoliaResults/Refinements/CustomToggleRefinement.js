import InputCheckbox from '@/components/molecules/InputCheckbox'
import PropTypes from 'prop-types'
import React from 'react'
import {connectToggleRefinement} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'

/**
 * Custom display of Algolia [ToggleRefinement](https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/) widget.
 *
 * @param {*} param
 */
const ToggleRefinement = ({
  currentRefinement,
  attribute,
  label,
  value,
  refine,
  title
}) => {
  return (
    <section className={cn(styles.filterPanel, className)}>
      {title && <h3>{title}</h3>}
      <ul>
        <li>
          <InputCheckbox
            id={attribute}
            label={label}
            name={label}
            value={value}
            onChange={() => refine(currentRefinement ? false : true)}
            checked={currentRefinement}
          />
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
  attribute: PropTypes.string
}

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement)
export default CustomToggleRefinement
