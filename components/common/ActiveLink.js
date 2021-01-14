import Link from 'next/link'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import React, {Children} from 'react'

/**
 * Render the ActiveLink Component.
 *
 * @author WebDevStudios
 * @see https://nextjs.org/docs/api-reference/next/link
 * @param {object}  props             props.
 * @param {object}  props.children    Child objects for rendering.
 * @param {string}  props.activeClass The classname for the active element.
 * @param {object}  props.href        The href to be added as a link.
 * @return {Element}                  The ActiveLink component.
 */
export default function ActiveLink({children, activeClass, ...props}) {
  const {asPath} = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  /**
   * Remove the last trailing slash from a URL path.
   *
   * @param {string} str The string to search and replace /.
   * @return {string}    Updated string.
   */
  function stripTrailingSlash(str) {
    if (str.substr(-1) === '/') {
      return str.substr(0, str.length - 1)
    }
    return str
  }

  const className =
    asPath === stripTrailingSlash(props.href) || asPath === props.as
      ? `${childClassName} ${activeClass}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  children: PropTypes.object,
  activeClass: PropTypes.string,
  props: PropTypes.object
}
