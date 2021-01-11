import cn from 'classnames'
import parseQuerystring from '@/functions/parseQuerystring'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import React, {useContext, useRef, useState} from 'react'
import {AlgoliaContext} from '@/components/common/AlgoliaProvider'
import styles from './AlgoliaSearch.module.css'
import dynamic from 'next/dynamic'
import SearchPlaceholder from './Components/SearchPlaceholder'

/* eslint-disable */
// This always throws an error: `Component definition is missing display name`.
// Error also appears when using the [NextJS example](https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component)
const Search = dynamic(() => import('./Components/Search'), {
  loading: () => <SearchPlaceholder />
})
/* eslint-enable */

export default function AlgoliaSearch({useHistory, usePlaceholder, className}) {
  const router = useRouter()
  const path = router?.asPath // URL from router.
  const query = path.includes('q=') ? parseQuerystring(path, 'q') : '' // Parse the querystring.
  const [loadAlgolia, setLoadAlgolia] = useState(0)
  const searchRef = useRef()
  const {indexName} = useContext(AlgoliaContext)

  /**
   * Set a min-height value on the search wrapper to avoid DOM movement during dynamic render.
   */
  function setMinHeight() {
    const minHeight =
      searchRef?.current && usePlaceholder
        ? searchRef.current.offsetHeight
        : '0'
    return {minHeight: `${minHeight}px`}
  }

  /**
   * Toggle the state of the Algolia `Search` and `SearchPlaceholder` components.
   *
   * @param {boolean} value Show/hide Algolia search input.
   */
  function toggleAlgolia(value) {
    setLoadAlgolia(value)
  }

  return (
    <div
      className={cn(styles.algoliaSearch, className)}
      ref={searchRef}
      style={setMinHeight()}
    >
      {!!loadAlgolia || !usePlaceholder ? (
        <Search indexName={indexName} useHistory={useHistory} query={query} />
      ) : (
        <SearchPlaceholder query={query} toggleAlgolia={toggleAlgolia} />
      )}
    </div>
  )
}

AlgoliaSearch.propTypes = {
  useHistory: PropTypes.bool,
  usePlaceholder: PropTypes.bool,
  className: PropTypes.string
}

AlgoliaSearch.defaultProps = {
  useHistory: true,
  usePlaceholder: true
}
