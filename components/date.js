import PropTypes from 'prop-types'
import {parseISO, format} from 'date-fns'

export default function Date({dateString}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

Date.propTypes = {
  dateString: PropTypes.string
}
