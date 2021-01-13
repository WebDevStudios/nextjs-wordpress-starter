import PropTypes from 'prop-types'
import styles from '../AlgoliaResults.module.css'

/**
 * Render the Hit component.
 *
 * @author WebDevStudios
 * @param {object} props     The component attributes as props.
 * @param {object} props.hit The hit data.
 * @return {Element}         The Hit component.
 */
export default function Hit({hit}) {
  return (
    <div className={styles.hit}>
      <h3>{hit.post_title}</h3>
      <p className={styles.date}>{hit.post_date_formatted}</p>
      <a href={hit.permalink}>Learn More</a>
    </div>
  )
}

Hit.propTypes = {
  hit: PropTypes.any
}
