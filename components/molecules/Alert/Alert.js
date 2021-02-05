import Icon from '@/components/atoms/Icon'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Alert.module.css'

/**
 * Render the Alert component.
 *
 * @param {object} props           Alert component props.
 * @param {string} props.body      Alert message.
 * @param {string} props.className Optional classNames.
 * @param {string} props.icon      Icon to use.
 * @param {string} props.type      The type of alert.
 * @return {Element}               The Alert component.
 */
export default function Alert({body, className, icon, type}) {
  return (
    <div
      className={cn(
        styles.alert,
        type === 'error' && styles.error,
        type === 'success' && styles.success,
        className
      )}
      role="alert"
    >
      {icon && (
        <Icon className={styles.icon} icon={icon} title={icon} style="line" />
      )}
      <p className={styles.body}>{body}</p>
    </div>
  )
}

Alert.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['default', 'error', 'success'])
}

Alert.defaultProps = {
  type: 'default'
}
