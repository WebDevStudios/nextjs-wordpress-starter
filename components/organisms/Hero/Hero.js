import Button from '@/components/atoms/Button'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'

/**
 * Render the Hero component.
 *
 * @param  {object}  props                 Hero component props.
 * @param  {string}  props.backgroundImage The background image object.
 * @param  {string}  props.body            Text for the body.
 * @param  {string}  props.className       The className.
 * @param  {any}     props.children        InnerBlocks.
 * @param  {object}  props.ctaText         The cta text.
 * @param  {object}  props.ctaUrl          The cta url.
 * @param  {string}  props.id              Optional element ID.
 * @param  {number}  props.overlayOpacity  The overlay opacity as a float.
 * @param  {object}  props.style           Custom hero styles.
 * @param  {string}  props.subtitle        Text for the subtitle.
 * @param  {string}  props.title           Text for the title.
 * @return {Element}                       The Hero component.
 */
export default function Hero({
  backgroundImage,
  body,
  className,
  children,
  ctaText,
  ctaUrl,
  id,
  overlayOpacity = 0.5,
  style,
  subtitle,
  title
}) {
  const heroStyle = backgroundImage?.url
    ? {
        // These css custom properties are used inside the css module file to set the card's background image, tint overlay, and fallback bg color.
        '--image-url': `url(${backgroundImage.url})`,
        '--image-tint-color': `#00000020`,
        '--image-fallback-color': `#000`
      }
    : {}

  // Rename to stylelint-accepted const name.
  const overlayopacity = overlayOpacity

  return (
    <section
      id={id}
      className={cn(styles.hero, className)}
      style={{
        ...style,
        ...heroStyle
      }}
    >
      <div className={styles.overlay} style={{opacity: overlayopacity}}></div>
      <div className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h1 className={styles.title}>{title}</h1>
        {body && <p className={styles.body}>{body}</p>}
        {ctaText && ctaUrl && (
          <Button
            className={styles.button}
            url={ctaUrl}
            text={ctaText}
            icon="arrowRight"
            type="primary"
            size="md"
          />
        )}
      </div>
      {!!children &&
        !!children?.length &&
        React.Children.map(children, (child) => {
          // Create copy of child element to add custom classes.
          const newChild = !child
            ? child
            : React.cloneElement(child, {
                className: cn(child?.className, styles?.child)
              })

          return newChild
        })}
    </section>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.object,
  body: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  id: PropTypes.string,
  overlayOpacity: PropTypes.number,
  style: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string
}
