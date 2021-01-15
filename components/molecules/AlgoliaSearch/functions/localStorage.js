/**
 * Set localStorage for search results.
 *
 * @author WebDevStudios
 * @param {string} name      Local Storage name.
 * @param {string} value     The value to store.
 * @param {number} maxLength Maximum history items to store.
 * @return {Function}        Sets the value of the pair identified by key to value
 */
export function setLocalStorage(name, value, maxLength) {
  if (!localStorage) {
    return false
  }
  const item = {
    title: value,
    time: Date.now()
  }

  let data = [item] // Default `data` array.
  const storage = localStorage.getItem(name) // Get storage.

  if (storage) {
    // If local storage exists.
    let storageArr = JSON.parse(storage)
    storageArr = removeStorageDuplicates(storageArr, value) // Remove dups.
    storageArr.unshift(item) // Add item to top of list.
    data = storageArr
  }

  data = data.slice(0, maxLength) // Slice array to maxLength.

  localStorage.setItem(name, JSON.stringify(data)) // Set local storage.
}

/**
 * Delete the localStorage for search results.
 *
 * @author WebDevStudios
 * @param {any} name Local Storage name.
 * @return {Function} Removes the key/value pair with the given key
 */
export function deleteLocalStorage(name) {
  if (!name) {
    return false
  }
  localStorage.removeItem(name)
}

/**
 * Remove duplicate entries from local storage.
 *
 * @author WebDevStudios
 * @param {*} array Potential localStorage items.
 * @param {*} value Potential duplicate items.
 * @return {Array}  The the potential storage.
 */
function removeStorageDuplicates(array = [], value = '') {
  if (!array || !value) {
    return false
  }
  return array.filter((item) => item.title !== value)
}
