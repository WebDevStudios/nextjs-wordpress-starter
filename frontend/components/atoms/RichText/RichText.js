import createMarkup from '@/functions/createMarkup'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './RichText.module.css'

/**
 * Render the RichText component.
 *
 * @param  {object}  props            RichText component props.
 * @param  {string}  props.attributes Optional element attributes.
 * @param  {string}  props.children   Child component(s) to render.
 * @param  {string}  props.className  Optional classNames.
 * @param  {boolean} props.dropCap    Whether or not there should be a drop cap.
 * @param  {string}  props.id         Optional element ID.
 * @param  {object}  props.style      Inline styles.
 * @param  {string}  props.tag        The type of element to render.
 * @return {Element}                  The RichText component.
 */
export default function RichText({
  attributes,
  children,
  className,
  dropCap,
  id,
  style,
  tag
}) {
  const tagClassName = tag !== 'div' ? tag : ''
  return React.createElement(tag, {
    ...attributes,
    className: cn(
      styles.richtext,
      styles?.[tagClassName],
      dropCap && styles.dropcap,
      className
    ),
    id: id || null,
    dangerouslySetInnerHTML: createMarkup(children),
    style: style
  })
}

RichText.propTypes = {
  attributes: PropTypes.object,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  dropCap: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string
  }),
  tag: PropTypes.string
}

RichText.defaultProps = {
  dropCap: false,
  tag: 'div'
}
