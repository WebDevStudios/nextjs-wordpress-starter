import createMarkup from '@/functions/createMarkup'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * @param props0
 * @param props0.children
 * @param props0.className
 * @param props0.id
 * @param props0.tag
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
