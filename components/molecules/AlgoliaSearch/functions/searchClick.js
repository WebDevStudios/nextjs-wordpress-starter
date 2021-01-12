/**
 * Click Event for Search Results
 *
 * @author WebDevStudios
 * @param {*} e
 */
const searchClick = (e) => {
  const target = e.currentTarget
  if (!target) {
    return false
  }

  const url = target.dataset.url
  if (url && window) {
    // router.push(url) // Does not work, does not rerender and causes `InfiniteHits` component to get out of sync.
    window.location = url
  }
}

export default searchClick
