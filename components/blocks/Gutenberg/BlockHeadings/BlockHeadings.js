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
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color hex value.
 * @param  {string}  props.className          Optional classnames.
 * @param  {string}  props.content            The content of the block.
 * @param  {string}  props.level              The heading level.
 * @param  {object}  props.style              The style attributes.
 * @param  {string}  props.textAlign          Optional alignment style.
 * @param  {string}  props.textColorHex       The text color hex value.
 * @return {Element}                          The RichText component.
 */
export default function BlockHeadings({
  anchor,
  backgroundColorHex,
  className,
  content,
  level,
  style,
  textAlign,
  textColorHex
}) {
  const alignment = !textAlign ? 'left' : textAlign
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
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  level: PropTypes.number,
  style: PropTypes.object,
  textAlign: PropTypes.string,
  textColorHex: PropTypes.string
}
