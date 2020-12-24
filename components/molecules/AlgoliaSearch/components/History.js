import PropTypes from 'prop-types'
import styles from '../AlgoliaSearch.module.css'

/**
 * Component for rendering search history.
 */
const History = ({history, searchClick, clearLocalStorage, buildSearchUrl}) => {
  const config = {
    now: new Date(), // Now, as a date object
    nowTs: Date.now(),
    dayLength: 86400000, // Day in milliseconds.
    weekLength: 604800000, // Week in milliseconds.
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
  }

  /**
   * Compare two date for the same year, month, day.
   *
   * @param {*} first
   * @param {*} second
   */
  const isSameDate = (first, second) => {
    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
    )
  }

  /**
   * Convert Timestamp into readable date.
   *
   * @param {*} time
   */
  const convertDate = (time) => {
    if (!time) {
      return false
    }

    const date = new Date(time) // History date converted to date.
    const month = date.getMonth() // Month.
    const dayNumber = date.getDate() // Day.
    const day = date.getDay() // Day name.
    let data = ''

    if (isSameDate(config.now, date)) {
      data = 'Today' // Renders: Today
    } else {
      data =
        config.nowTs - time < config.weekLength // Renders: Day of Week
          ? config.days[day]
          : `${config.months[month]} ${dayNumber}` // Renders: Month Abv + day
    }
    return data
  }

  return (
    <>
      {!!history && !!history.length && (
        <div className={styles.aisHistory}>
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
export default History

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
