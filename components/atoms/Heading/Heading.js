import createMarkup from '@/functions/createMarkup'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Heading.module.css'

/**
 * Render the Heading component.
 *
 * @param  {object}  props           The props object.
 * @param  {string}  props.alignment The text alignment.
 * @param  {string}  props.children  The elements or text you'd like to render inside the heading.
 * @param  {string}  props.className The optional classname.
 * @param  {string}  props.id        The optional ID.
 * @param  {object}  props.style     The style attributes.
 * @param  {string}  props.tag       The tag name you'd like the heading to render as.
 * @return {Element}                 The Heading element.
 */
export default function Heading({
  alignment,
  children,
  className,
  id,
  style,
  tag
}) {
  const newClassName = cn(
    className,
    styles.heading,
    alignment === 'right' ? styles.right : null,
    alignment === 'center' ? styles.center : null
  )

  if (typeof children === 'string') {
    return React.createElement(tag, {
      className: newClassName,
      id,
      style,
      dangerouslySetInnerHTML: createMarkup(children)
    })
  } else {
    return React.createElement(
      tag,
      {
        className: newClassName,
        id,
        style
      },
      children
    )
  }
}

Heading.propTypes = {
  alignment: PropTypes.oneOf(['center', 'left', 'right']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Heading.defaultProps = {
  tag: 'h1'
}
