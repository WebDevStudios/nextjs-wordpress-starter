import PropTypes from 'prop-types'
import React from 'react'

/**
 * @param props0
 * @param props0.className
 */
export default function TypographyExample({className}) {
  return <p className={className}>Lorem ipsum</p>
}

TypographyExample.propTypes = {
  className: PropTypes.string
}
