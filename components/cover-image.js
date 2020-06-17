import PropTypes from 'prop-types'
import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({title, coverImage, slug}) {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

CoverImage.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.object,
  slug: PropTypes.string
}
