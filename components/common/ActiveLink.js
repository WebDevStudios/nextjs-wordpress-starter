import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, {Children} from 'react'

export default function ActiveLink({children, activeClassName, ...props}) {
  const {asPath} = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  /**
   * Remove the last trailing slash from a URL path.
   *
   * @param {string} str String to replace /.
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
      ? `${childClassName} ${activeClassName}`.trim()
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
  activeClassName: PropTypes.string,
  props: PropTypes.object
}
