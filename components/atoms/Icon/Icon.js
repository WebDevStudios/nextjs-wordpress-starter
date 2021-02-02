import PropTypes from 'prop-types'
import React from 'react'
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

  return sizeToRem[size] * 16
}

/**
 * Render the Icon component.
 *
 * @param {object}  props            The component attributes as props.
 * @param {boolean} props.ariaHidden If aria-hidden is true.
 * @param {string}  props.className  Icon className.
 * @param {string}  props.icon       Icon svg.
 * @param {string}  props.size       Icon size.
 * @param {string}  props.style      Icon style variation.
 * @param {string}  props.title      Icon title.
 * @return {Element}                 The Icon component.
 */
export default function Icon({
  ariaHidden,
  className,
  icon,
  size,
  style,
  title
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
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  style: PropTypes.oneOf(['fill', 'line']),
  title: PropTypes.string.isRequired
}

Icon.defaultProps = {
  ariaHidden: true,
  size: 'lg',
  style: 'line'
}
