import createMarkup from '@/functions/createMarkup'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Render the Heading component.
 *
 * @param {object} props           The props object.
 * @param {string} props.children  The elements or text you'd like to render inside the heading.
 * @param {string} props.className The optional classname.
 * @param {string} props.id        The optional ID.
 * @param {string} props.tag       The tag name you'd like the heading to render as.
 * @return {Element}               The Heading element.
 */
export default function Heading({children, className, id, tag}) {
  if (typeof children === 'string') {
    return React.createElement(tag, {
      className,
      id,
      dangerouslySetInnerHTML: createMarkup(children)
    })
  } else {
    return React.createElement(
      tag,
      {
        className,
        id
      },
      children
    )
  }
}

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Heading.defaultProps = {
  tag: 'h1'
}
