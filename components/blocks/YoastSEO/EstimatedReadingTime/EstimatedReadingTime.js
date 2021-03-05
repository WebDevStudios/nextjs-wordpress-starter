import styles from './EstimatedReadingTime.module.css'

/**
 * The Yoast Estimated Reading Time block.
 *
 * @author WebDevStudios
 * @param {object} props The component properties as props.
 * @return {Element}     The Estimated Reading Time component.
 */
export default function EstimatedReadingTime(props) {
  return (
    <>
      <pre className={styles.estimatedReadingTime}>
        {JSON.stringify(props, null, 2)}
      </pre>
    </>
  )
}
