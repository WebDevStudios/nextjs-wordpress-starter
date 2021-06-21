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
 * @param  {object}  props           The component props.
 * @param  {string}  props.align     Optional alignment style.
 * @param  {string}  props.anchor    Optional anchor/id.
 * @param  {string}  props.className Optional classnames.
 * @param  {string}  props.content   The content of the block.
 * @param  {string}  props.level     The heading level.
 * @return {Element}                 The RichText component.
 */
export default function BlockHeadings({
  align,
  anchor,
  className,
  content,
  level
}) {
  const alignment = !align ? 'left' : align

  return (
    <RichText
      className={cn(`text-${alignment}`, className)}
      id={anchor}
      tag={'h' + level}
    >
      {content}
    </RichText>
  )
}

BlockHeadings.propTypes = {
  align: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  level: PropTypes.number
}
