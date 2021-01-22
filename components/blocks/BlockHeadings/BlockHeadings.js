import RichText from '@/components/atoms/RichText'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Headings Block
 *
 * The core Headings block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} className Optional classnames.
 * @param {string} align     Optional alignment style.
 * @param {string} anchor    Optional anchor/id.
 * @param {string} content   The content of the block.
 * @param {string} level     The heading level.
 * @return {Element}         The RichText component.
 */
export default function BlockHeadings({
  className,
  align,
  anchor,
  content,
  level
}) {
  const alignment = !align ? 'left' : align

  return (
    <RichText
      tag={'h' + level}
      className={cn(`text-${alignment}`, className)}
      id={anchor}
    >
      {content}
    </RichText>
  )
}

BlockHeadings.propTypes = {
  anchor: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  level: PropTypes.string
}
