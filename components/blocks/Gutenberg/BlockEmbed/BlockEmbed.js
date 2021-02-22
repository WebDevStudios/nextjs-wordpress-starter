import VideoEmbed from '@/components/atoms/VideoEmbed'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'

const Tweet = dynamic(() => import('@/components/atoms/TwitterEmbed'))

/**
 * Embed Block
 *
 * The core Embed block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props                  The component properties.
 * @param {string} props.className        Optional classnames.
 * @param {string} props.url              The URL of the video.
 * @param {string} props.caption          Optional caption.
 * @param {string} props.providerNameSlug The type of embed.
 * @return {Element}                      The component to embed.
 */
export default function BlockEmbed({
  className,
  url,
  caption,
  providerNameSlug
}) {
  const [loadTweet, setLoadTweet] = useState(0)
  const supportedVideoTypes = ['youtube', 'vimeo']

  useEffect(() => {
    // Load Tweet library using Next Dynamic
    // @see https://nextjs.org/docs/advanced-features/dynamic-import
    if (providerNameSlug === 'twitter') {
      setLoadTweet(1)
    }
  }, [providerNameSlug])

  if (!url) {
    return
  }

  return (
    <>
      {!!loadTweet && (
        <Tweet className={className} url={url} caption={caption} />
      )}
      {!!supportedVideoTypes.includes(providerNameSlug) && (
        <VideoEmbed
          className={className}
          url={url}
          caption={caption}
          type={providerNameSlug}
        />
      )}
    </>
  )
}

BlockEmbed.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  align: PropTypes.string,
  caption: PropTypes.string,
  providerNameSlug: PropTypes.string
}
BlockEmbed.defaultProps = {
  align: 'left'
}
