import cn from 'classnames'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {connectRefinementList} from 'react-instantsearch-dom'
import styles from '../AlgoliaResults.module.css'

/**
 * Custom display of Algolia RefinementList widget.
 *
 * @see https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/
 */
function RefinementList({
  items,
  refine,
  title,
  showMore,
  limit,
  translations,
  attribute,
  className,
  showCount
}) {
  const [extended, setExtended] = useState(false)

  return (
    <>
      {!!items && items.length > 0 && (
        <section className={cn(styles.filterPanel, className)}>
          {title && <h3>{title}</h3>}
          <ul>
            {items.map(
              (item, index) =>
                (index < limit || extended) && (
                  <li key={`${item.label}-${index}-${item.isRefined}`}>
                    <input
                      type="checkbox"
                      id={`chk-${item.label}`}
                      name={attribute}
                      value={item.value.join(',')}
                      onChange={() => refine(item.value)}
                      checked={item.isRefined}
                    />
                    <label htmlFor={`chk-${item.label}`}>
                      {item.label} {showCount && <span>[{item.count}]</span>}
                    </label>
                  </li>
                )
            )}
          </ul>
          {showMore && limit < items.length && (
            <button
              type="button"
              onClick={() => {
                setExtended(!extended)
              }}
              className={styles.moreBtn}
            >
              {translations['showMore'](extended)}
            </button>
          )}
        </section>
      )}
    </>
  )
}
RefinementList.propTypes = {
  items: PropTypes.any.isRequired,
  refine: PropTypes.func,
  title: PropTypes.string,
  showMore: PropTypes.bool,
  limit: PropTypes.number,
  translations: PropTypes.object,
  attribute: PropTypes.string,
  className: PropTypes.string,
  showCount: PropTypes.bool
}

RefinementList.defaultProps = {
  showCount: true
}

const CustomRefinementList = connectRefinementList(RefinementList)
export default CustomRefinementList
