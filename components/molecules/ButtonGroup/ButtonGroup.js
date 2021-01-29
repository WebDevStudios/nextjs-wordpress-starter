import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ButtonGroup.module.css'

// TODO: Create storybook for ButtonGroup component.

/**
 * Render the ButtonGroup component.
 *
 * @author WebDevStudios
 * @param {string}  id                   The id of the block.
 * @param {string}  orientation          The orientation of buttons.
 * @param {string}  contentJustification The justification of the buttons.
 * @param {element} children             The children props to render.
 * @return {Element}                     The ButtonGroup component.
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
