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
 * @param props.props
 * @param {object}    props The component attributes as props.
 */
export default function BlockHeadings({props}) {
  const {anchor, align, className, content, level} = props
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
  props: PropTypes.object.isRequired,
  anchor: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  level: PropTypes.string
}
