import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './VideoEmbed.module.css'

/**
 * VideoEmbed Block
 *
 * @author WebDevStudios
 * @param {object} props           VideoEmbed component props.
 * @param {string} props.className Optional className.
 * @param {string} props.url       The full URL to the video.
 * @param {string} props.type      The type of video (youtube, vimeo).
 * @param {string} props.caption   Optional caption.
 * @return {Element}               The VideoEmbed component.
 */
export default function VideoEmbed({className, url, type, caption}) {
  /**
   * Create URL embed for YouTube or Vimeo videos.
   *
   * @param {string} url The video URL.
   * @return {string}    Formatted video URL.
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

  return (
    <div className={cn(styles.videoEmbed, className)}>
      <div className={styles.wrapper}>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="315"
          loading="lazy"
          src={createVideoUrl(url)}
          width="560"
          title={`Embedded content from ${type}`}
          className={className}
        ></iframe>
      </div>
      {!!caption && (
        <div className={styles.caption}>
          <RichText tag="span">{caption}</RichText>
        </div>
      )}
    </div>
  )
}

VideoEmbed.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string.isRequired
}
