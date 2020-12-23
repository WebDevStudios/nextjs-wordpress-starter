import buildSearchUrl from './buildSearchUrl'
import {setLocalStorage} from './localStorage'

/**
 * Search Form Submit Handler
 *
 * @param {object} event
 * @param {array}  searchState Search state array.
 * @param {string} storageName Local storage name
 */
const searchSubmit = (event, setSearchState, searchState, storageName) => {
  event.preventDefault()

  const target = event.target
  if (!target) {
    return false
  }

  // Search term.
  const term = target.querySelector('input').value.trim()

  if (searchState !== '' && target.querySelector('input').value.trim() !== '') {
    // Save search to local storage.
    setLocalStorage(storageName, term)
    document.location = buildSearchUrl(term)
  } else {
    // Empty search, set focus back on input.
    target.querySelector('input').focus()
    setSearchState('')
  }
}

export default searchSubmit
