import Icon from '@/components/atoms/Icon'
import PropTypes from 'prop-types'
import styles from './EstimatedReadingTime.module.css'

/**
 * The Yoast Estimated Reading Time block.
 *
 * @author WebDevStudios
 * @param {object} props            The component properties as props.
 * @param {object} props.attributes The block attributes.
 * @return {Element}                The Estimated Reading Time component.
 */
export default function EstimatedReadingTime({attributes}) {
  return (
    <div className={styles.container}>
      {attributes?.showIcon && (
        <Icon
          className={styles.icon}
          icon="clock"
          title="Estimated Reading Time"
          size="sm"
        />
      )}
      {attributes?.showDescriptiveText && (
        <span className={styles.description}>
          {attributes?.descriptiveText}
        </span>
      )}
      <time className={styles.time}>
        {attributes?.estimatedReadingTime}{' '}
        {attributes?.estimatedReadingTime >= 2 ? <>minutes</> : <>minute</>}
      </time>
    </div>
  )
}

EstimatedReadingTime.propTypes = {
  attributes: PropTypes.shape({
    estimatedReadingTime: PropTypes.number,
    descriptiveText: PropTypes.string,
    showDescriptiveText: PropTypes.bool,
    showIcon: PropTypes.bool
  })
}
