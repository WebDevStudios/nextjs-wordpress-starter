import PropTypes from 'prop-types'
import React from 'react'
import tailwindConfig from '../../../tailwind.config'

/**
 * @param props
 */
export default function Spacer(props) {
  const {pxHeight, anchor} = props

  const rootEmVal = parseFloat(tailwindConfig.theme.fontSize['root-em'])

  return (
    <div
      id={anchor || null}
      style={{
        /* stylelint-disable-next-line value-keyword-case */
        height: `${pxHeight / rootEmVal}rem`
      }}
      aria-hidden="true"
    />
  )
}

Spacer.propTypes = {
  anchor: PropTypes.string,
  pxHeight: PropTypes.number.isRequired
}

Spacer.defaultProps = {
  pxHeight: 40
}
