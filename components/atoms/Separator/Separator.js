import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Separator.module.css'

/**
 * Render the Separator component.
 *
 * @author WebDevStudios
 * @param {object}  props           The component attributes as props.
 * @param {string}  props.className Optional classname.
 * @param {boolean} props.fullWidth Is this a fullwidth block.
 * @return {Element}                The Separator component.
 */
export default function Separator(props) {
  const {className, fullWidth} = props

  return (
    <>
      {fullWidth ? (
        <hr className={cn(styles.separator, className)} />
      ) : (
        <div>
          <hr className={cn(styles.separator, className)} />
        </div>
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
