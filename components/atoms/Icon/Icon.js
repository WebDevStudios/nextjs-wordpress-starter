import PropTypes from 'prop-types'
import React from 'react'
import tailwindConfig from '../../../tailwind.config.js'
import {icons} from './icons'

/**
 * Convert icon size to px taking rem into account.
 *
 * @param {string} size The icon size.
 * @return {string} The size in px.
 */
function sizeToPx(size) {
  const sizeToRem = {
    sm: '1',
    md: '1.25',
    lg: '1.5'
  }

  return sizeToRem[size] * parseFloat(tailwindConfig.theme.fontSize['root-em'])
}

export default function Icon({
  icon,
  size,
  style,
  title,
  className,
  ariaHidden
}) {
  return (
    <svg
      fill="currentColor"
      width={sizeToPx(size)}
      height={sizeToPx(size)}
      viewBox={`0 0 24 24`}
      aria-hidden={ariaHidden}
      className={className}
    >
      {title && <title>{title}</title>}
      <path d={icons[icon][style]}></path>
    </svg>
  )
}

Icon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['fill', 'line']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  title: PropTypes.string.isRequired
}

Icon.defaultProps = {
  ariaHidden: true,
  size: 'lg',
  style: 'line'
}
