import Button from '@/components/atoms/Button'
import Card from '@/components/molecules/Card'
import {archivePropTypes} from '@/functions/getPagePropTypes'
import getArchivePosts from '@/functions/next-api/wordpress/archive/getArchivePosts'
import {useRef, useState} from 'react'

/**
 * Render the Archive component.
 *
 * @author WebDevStudios
 * @param  {object}  props            The component attributes as props.
 * @param  {Array}   props.posts      Array of post data from WordPress.
 * @param  {object}  props.pagination Archive pagination data from WordPress.
 * @param  {string}  props.postType   WP post type.
 * @return {Element}                  The Archive component.
 */
export default function Archive({posts, pagination, postType}) {
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
      paginationRef.current?.endCursor
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

      <Button
        onClick={loadPosts}
        text={loadingMore ? 'Loading...' : 'Load More'}
        type="secondary"
        disabled={!paginationRef.current?.hasNextPage || loadingMore}
      />
    </>
  )
}

Archive.propTypes = {
  ...archivePropTypes
}
