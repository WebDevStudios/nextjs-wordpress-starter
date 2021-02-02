import TwitterEmbed from '@/components/atoms/TwitterEmbed'
import VideoEmbed from '@/components/atoms/VideoEmbed'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Embed Block
 *
 * The core Embed block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} className        Optional classnames.
 * @param {string} url              The URL of the video.
 * @param {string} caption          Optional caption.
 * @param {string} align            Block alignment caption.
 * @param {string} providerNameSlug The type of embed.
 * @return {Element}                The component to embed.
 */
export default function BlockEmbed({
  className,
  url,
  caption,
  providerNameSlug
}) {
  return (
    <>
      {!!url && (
        <>
          {providerNameSlug === 'twitter' ? (
            <TwitterEmbed className={className} url={url} caption={caption} />
          ) : (
            // <div dangerouslySetInnerHTML={{__html: tweetContent}} />
            <VideoEmbed
              className={className}
              url={url}
              caption={caption}
              type={providerNameSlug}
            />
          )}
        </>
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
