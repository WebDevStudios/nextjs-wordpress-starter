import PropTypes from 'prop-types'
import React from 'react'
import tailwindConfig from '../../../tailwind.config'

/**
 * Render the Spacer component.
 *
 * @author WebDevStudios
 * @param {string} anchor Optional anchor/id.
 * @param {number} height The height of the spacer.
 * @return {Element} The Spacer component.
 */
export default function Spacer({height, anchor}) {
  const rootEmVal = parseFloat(tailwindConfig.theme.fontSize['root-em'])

  return (
    <div
      id={anchor || null}
      style={{
        /* stylelint-disable-next-line value-keyword-case */
        height: `${height / rootEmVal}rem`
      }}
      aria-hidden="true"
    />
  )
}

Spacer.propTypes = {
  anchor: PropTypes.string,
  height: PropTypes.number.isRequired
}

Spacer.defaultProps = {
  height: 40
}
