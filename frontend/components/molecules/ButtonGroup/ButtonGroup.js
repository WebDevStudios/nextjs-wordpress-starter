import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ButtonGroup.module.css'

/**
 * Render the ButtonGroup component.
 *
 * @author WebDevStudios
 * @param  {object}  props                      The component properties.
 * @param  {Element} props.children             The children props to render.
 * @param  {string}  props.contentJustification The justification of the buttons.
 * @param  {string}  props.id                   The id of the block.
 * @param  {string}  props.orientation          The orientation of buttons.
 * @return {Element}                            The ButtonGroup component.
 */
export default function ButtonGroup({
  children,
  contentJustification,
  id,
  orientation
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
  children: PropTypes.element,
  contentJustification: PropTypes.string,
  id: PropTypes.string,
  orientation: PropTypes.string
}
