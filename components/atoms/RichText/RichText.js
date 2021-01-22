import createMarkup from '@/functions/createMarkup'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './RichText.module.css'

/**
 * Render the RichText component.
 *
 * @param {object} props            RichText component props.
 * @param {string} props.attributes Optional element attributes.
 * @param {string} props.children   Child component(s) to render.
 * @param {string} props.className  Optional classNames.
 * @param {string} props.id         Optional element ID.
 * @param {string} props.tag        The type of element to render.
 * @return {Element}                The RichText component.
 */
export default function RichText({attributes, children, className, id, tag}) {
  const tagClassName = tag !== 'div' ? tag : ''
  return React.createElement(tag, {
    ...attributes,
    className: cn(styles.richtext, styles?.[tagClassName], className),
    id: id || null,
    dangerouslySetInnerHTML: createMarkup(children)
  })
}

RichText.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  tag: PropTypes.string
}

RichText.defaultProps = {
  tag: 'div'
}
