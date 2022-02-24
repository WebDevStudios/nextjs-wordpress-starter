import Button from '@/components/atoms/Button'
import Card from '@/components/molecules/Card'
import {archivePropTypes} from '@/functions/getPagePropTypes'
import getArchivePosts from '@/functions/next-api/wordpress/archive/getArchivePosts'
import {PropTypes} from 'prop-types'
import {useRef, useState} from 'react'

/**
 * Render the Archive component.
 *
 * @author WebDevStudios
 * @param  {object}  props            The component attributes as props.
 * @param  {object}  props.date       Optional date query props.
 * @param  {string}  props.date.day   Date query: day.
 * @param  {string}  props.date.month Date query: month.
 * @param  {string}  props.date.year  Date query: year.
 * @param  {object}  props.pagination Archive pagination data from WordPress.
 * @param  {Array}   props.posts      Array of post data from WordPress.
 * @param  {string}  props.postType   WP post type.
 * @param  {string}  props.taxonomy   WP taxonomy type slug.
 * @param  {string}  props.term       The manually-selected term.
 * @return {Element}                  The Archive component.
 */
export default function Archive({
  date: {day, month, year} = {},
  posts,
  pagination,
  postType,
  taxonomy,
  term
}) {
  // console.log('ARCHIVE')
  // Track all posts, including initial posts and additionally loaded pages.
  const [allPosts, setAllPosts] = useState(posts)

  // Track "load more" button state.
  const [loadingMore, setLoadingMore] = useState(false)

  // Track current pagination object.
  const paginationRef = useRef(pagination)

  /**
   * Load more posts for archive.
   */
  async function loadPosts() {
    setLoadingMore(true)

    const newPosts = await getArchivePosts(
      postType,
      paginationRef.current?.endCursor,
      {day, month, year},
      {taxonomy, term}
    )

    setAllPosts([...allPosts, ...(newPosts?.posts ?? [])])

    // Update pagination ref.
    paginationRef.current = newPosts?.pagination

    setLoadingMore(false)
  }

  if (!allPosts || !allPosts.length) {
    return <p>No posts found.</p>
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12">
        {allPosts.map((post, index) => (
          <Card
            key={index}
            title={post?.title}
            url={post?.uri}
            body={post?.excerpt}
          />
        ))}
      </div>
      {paginationRef.current?.hasNextPage && (
        <Button
          onClick={loadPosts}
          text={loadingMore ? 'Loading...' : 'Load More'}
          type="secondary"
          disabled={loadingMore}
        />
      )}
    </>
  )
}

Archive.propTypes = {
  ...archivePropTypes,
  date: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string
  }),
  taxonomy: PropTypes.string,
  term: PropTypes.string
}
