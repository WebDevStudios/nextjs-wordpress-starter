import buildSearchUrl from './buildSearchUrl'
import {setLocalStorage} from './localStorage'

/**
 * Search Form Submit Handler
 *
 * @param {object} event            Form submit.
 * @param {function} setSearchState Callback function to set search state.
 * @param {array}  searchState      Search state array.
 * @param {string} storageName      Local storage name.
 * @param {number} maxLength        Maximum history items to store.
 */
const searchSubmit = (
  event,
  setSearchState,
  searchState,
  storageName,
  maxLength
) => {
  event.preventDefault()

  const target = event.target
  if (!target) {
    return false
  }

  const term = target.querySelector('input').value.trim() // Search term.

  if (searchState !== '' && target.querySelector('input').value.trim() !== '') {
    // Save search term to local storage.
    setLocalStorage(storageName, term, maxLength)
    document.location = buildSearchUrl(term)
  } else {
    // Empty search, set focus back on input.
    target.querySelector('input').focus()
    setSearchState('')
  }
}

export default searchSubmit
