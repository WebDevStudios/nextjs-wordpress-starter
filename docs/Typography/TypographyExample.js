import PropTypes from 'prop-types'
import React from 'react'

export default function TypographyExample({className}) {
  return <p className={className}>Lorem ipsum</p>
}

TypographyExample.propTypes = {
  className: PropTypes.string
}
