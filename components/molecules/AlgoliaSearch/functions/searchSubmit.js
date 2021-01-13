import buildSearchUrl from './buildSearchUrl'
import {setLocalStorage} from './localStorage'

/**
 * Search Form Submit Handler
 *
 * @author WebDevStudios
 * @param {object}   event          Form submit.
 * @param {Function} setSearchState Callback function to set search state.
 * @param {Array}    searchState    Search state array.
 * @param {string}   storageName    Local storage name.
 * @param {number}   maxLength      Maximum history items to store.
 * @return {string}                 The search term.
 */
export default function searchSubmit(
  event,
  setSearchState,
  searchState,
  storageName,
  maxLength
) {
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
