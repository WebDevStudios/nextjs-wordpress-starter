import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './VideoEmbed.module.css'

export default function VideoEmbed({className, title, url}) {
  /**
   * Create URL embed for YouTube or Vimeo videos.
   *
   * @param {string} url The video URL.
   */
  function createVideoUrl(url) {
    if (!url) {
      return false
    }

    let videoUrl, videoId

    videoId = url.indexOf('v=') !== -1 ? url.split('v=') : url.split('/')
    videoId = videoId[videoId.length - 1]

    videoUrl = url.includes('vimeo')
      ? `//player.vimeo.com/video/${videoId}`
      : `//youtube.com/embed/${videoId}`

    return videoUrl
  }

  /* eslint-disable jsx-a11y/iframe-has-title */
  return (
    <div className={cn(styles.videoEmbed, className)}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="315"
        loading="lazy"
        src={createVideoUrl(url)}
        width="560"
        title={title}
        className={className}
      ></iframe>
    </div>
  )
  /* eslint-enable jsx-a11y/iframe-has-title */
}

VideoEmbed.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired
}
