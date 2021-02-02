import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '../Container'
import styles from './Separator.module.css'

/**
 * Render the Separator component.
 *
 * @author WebDevStudios
 * @param {string}  className Optional classname.
 * @param {boolean} fullWidth Is this a fullwidth block.
 * @return {Element} The Separator component.
 */
export default function Separator({className, fullWidth}) {
  return (
    <>
      {fullWidth ? (
        <hr className={cn(styles.separator, className)} />
      ) : (
        <Container>
          <hr className={cn(styles.separator, className)} />
        </Container>
      )}
    </>
  )
}

Separator.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool.isRequired
}

Separator.defaultProps = {
  fullWidth: false
}
