/**
 * Set localStorage for search results
 *
 * @param {*} name  Local Storage name.
 * @param {*} value The value to store.
 */
export const setLocalStorage = (name, value) => {
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

  localStorage.setItem(name, JSON.stringify(data)) // Set local storage.
}

/**
 * Delete the localStorage for search results
 *
 * @param {*} name  Local Storage name.
 */
export const deleteLocalStorage = (name) => {
  if (!name) {
    return false
  }
  localStorage.removeItem(name)
}

/**
 * Remove duplicate entries from local storage
 *
 * @param {*} array
 * @param {*} value
 */
const removeStorageDuplicates = (array = [], value = '') => {
  if (!array || !value) {
    return false
  }
  return array.filter((item) => item.title !== value)
}
