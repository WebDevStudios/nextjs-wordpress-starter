import PropTypes from 'prop-types'
import styles from '../AlgoliaResults.module.css'

/**
 * Component for rendering individual search result.
 */
const Hit = ({hit}) => {
  console.log(hit)
  return (
    <div className={styles.hit}>
      <h3>{hit.post_title}</h3>
      <p className={styles.date}>{hit.post_date_formatted}</p>
      <a href={hit.permalink}>Learn More</a>
    </div>
  )
}

export default Hit

Hit.propTypes = {
  hit: PropTypes.any
}
