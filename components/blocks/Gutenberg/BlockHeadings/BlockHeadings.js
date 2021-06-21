import RichText from '@/components/atoms/RichText'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Headings Block
 *
 * The core Headings block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                    The component props.
 * @param  {string}  props.align              Optional alignment style.
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color hex value.
 * @param  {string}  props.className          Optional classnames.
 * @param  {string}  props.content            The content of the block.
 * @param  {string}  props.level              The heading level.
 * @param  {object}  props.style              The style attributes.
 * @param  {string}  props.textColorHex       The text color hex value.
 * @return {Element}                          The RichText component.
 */
export default function BlockHeadings({
  align,
  anchor,
  backgroundColorHex,
  className,
  content,
  level,
  style,
  textColorHex
}) {
  const alignment = !align ? 'left' : align
  const headingStyle = getBlockStyles({backgroundColorHex, textColorHex, style})

  return (
    <RichText
      className={cn(`text-${alignment}`, className)}
      id={anchor}
      tag={'h' + level}
      style={headingStyle}
    >
      {content}
    </RichText>
  )
}

BlockHeadings.propTypes = {
  align: PropTypes.string,
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  level: PropTypes.number,
  style: PropTypes.object,
  textColorHex: PropTypes.string
}
