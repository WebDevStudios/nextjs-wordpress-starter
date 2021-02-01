import VideoEmbed from '@/components/molecules/VideoEmbed'
import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'

/**
 * Embed Block
 *
 * The core Embed block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} className Optional classnames.
 * @param {string} align     Optional alignment style.
 * @param {string} anchor    Optional anchor/id.
 * @param {string} content   The content of the block.
 * @param {string} level     The heading level.
 * @return {Element}         The component to embed.
 */
export default function BlockEmbed({
  className,
  url,
  caption,
  providerNameSlug
}) {
  if (providerNameSlug === 'twitter') {
    fetch(
      'https://publish.twitter.com/oembed?url=https://twitter.com/Interior/status/463440424141459456'
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      {!!url && (
        <>
          {providerNameSlug === 'twitter' ? (
            <div></div>
          ) : (
            <VideoEmbed className={className} url={url} caption={caption} />
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
