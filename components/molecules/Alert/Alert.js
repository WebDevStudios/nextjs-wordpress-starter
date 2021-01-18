import Icon from '@/components/atoms/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Alert.module.css'

export default function Alert({icon, body}) {
  return (
    <div className={styles.alert} role="alert">
      <Icon className={styles.icon} icon={icon} title={icon} />
      <p className={styles.body}>{body}</p>
    </div>
  )
}

Alert.propTypes = {
  icon: PropTypes.string,
  body: PropTypes.string
}
