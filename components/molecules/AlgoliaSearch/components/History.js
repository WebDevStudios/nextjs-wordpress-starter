import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PropTypes from 'prop-types'
import styles from '../AlgoliaSearch.module.css'

/**
 * Render the History component.
 *
 * @author WebDevStudios
 * @param {object}   props                   The component attributes as props.
 * @param {Function} props.buildSearchUrl    Construct Search URL and navigate user to results.
 * @param {Function} props.clearLocalStorage Delete the localStorage for search results.
 * @param {Array}    props.history           The history of searches.
 * @param {Function} props.searchClick       Click Event for Search Results
 * @return {Element}                         The History component.
 */
export default function History({
  buildSearchUrl,
  clearLocalStorage,
  history,
  searchClick
}) {
  /**
   * Convert date and time to relative from now.
   *
   * @see https://day.js.org/docs/en/display/from-now
   * @see https://day.js.org/docs/en/plugin/relative-time
   * @param {string} time The time as a timestamp.
   * @return {string}     Returns the string of relative time from now.
   */
  function convertDate(time) {
    dayjs.extend(relativeTime)
    const newTime = dayjs(time).fromNow()
    return newTime
  }

  return (
    <>
      {!!history?.length && (
        <div className={styles.history}>
          <ul>
            {history.map((item, index) => (
              <li key={`history-${index}`}>
                <button
                  type="button"
                  data-url={buildSearchUrl(item.title)}
                  onClick={(e) => searchClick(e)}
                >
                  <span>{item.title}</span>
                  <span className={styles.time}>{convertDate(item.time)}</span>
                </button>
              </li>
            ))}
            <li className={styles.clear}>
              <button type="button" onClick={clearLocalStorage}>
                Clear History
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

History.propTypes = {
  buildSearchUrl: PropTypes.func,
  clearLocalStorage: PropTypes.func,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      title: PropTypes.string
    })
  ),
  searchClick: PropTypes.func
}
