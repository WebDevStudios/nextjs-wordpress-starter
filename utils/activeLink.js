import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import Link from 'next/link'
import React, {Children} from 'react'

const ActiveLink = ({router, children, ...props}) => {
  const child = Children.only(children)
  let className = child.props.className || ''

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim()
  }

  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, {className})}</Link>
}

export default withRouter(ActiveLink)

ActiveLink.propTypes = {
  router: PropTypes.object,
  children: PropTypes.object,
  props: PropTypes.object,
  href: PropTypes.string,
  activeClassName: PropTypes.string
}
