import PropTypes from 'prop-types'
import styles from '../AlgoliaSearch.module.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

/**
 * Component for rendering search history.
 */
export default function History({
  history,
  searchClick,
  clearLocalStorage,
  buildSearchUrl
}) {
  /**
   * Convert date and time to relative from now.
   *
   * @author WebDevStudios
   * @see https://day.js.org/docs/en/display/from-now
   * @see https://day.js.org/docs/en/plugin/relative-time
   * @param  {string}  time   The time as a timestamp.
   * @return {string} newTime Returns the string of relative time from now.
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
  history: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      time: PropTypes.number
    })
  ),
  searchClick: PropTypes.func,
  clearLocalStorage: PropTypes.func,
  buildSearchUrl: PropTypes.func
}
