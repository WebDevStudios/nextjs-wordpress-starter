import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ButtonGroup.module.css'

/**
 * Render the ButtonGroup component.
 *
 * @author WebDevStudios
 * @param {object}  props                      The component properties.
 * @param {string}  props.id                   The id of the block.
 * @param {string}  props.orientation          The orientation of buttons.
 * @param {string}  props.contentJustification The justification of the buttons.
 * @param {Element} props.children             The children props to render.
 * @return {Element}                           The ButtonGroup component.
 */
export default function ButtonGroup({
  id,
  orientation,
  contentJustification,
  children
}) {
  return (
    <>
      <div
        id={id || null}
        className={cn(
          styles.buttonGroup,
          styles[orientation],
          styles[contentJustification]
        )}
      >
        {children}
      </div>
    </>
  )
}

ButtonGroup.propTypes = {
  id: PropTypes.string,
  orientation: PropTypes.string,
  contentJustification: PropTypes.string,
  children: PropTypes.element
}
