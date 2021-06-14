import Button from '@/components/atoms/Button'
import convertHextoRgb from '@/functions/convertHextoRgb'
import extractRgbValues from '@/functions/extractRgbValues'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'

/**
 * Render the DuotoneFilter component.
 *
 * @author WebDevStudios
 * @param  {object}  props           Component props.
 * @param  {string}  props.className The className.
 * @param  {Array}   props.duotone   Array of duotone color values.
 * @param  {string}  props.id        Unique filter ID.
 * @return {Element}                 The DuotoneFilter component.
 */
function DuotoneFilter({className, duotone, id}) {
  const rgbValues =
    duotone?.length &&
    duotone.map((color) =>
      color.indexOf('#') !== -1
        ? convertHextoRgb(color)
        : extractRgbValues(color)
    )

  // Calculate R, G, B decimal values.
  const rValues = rgbValues.map((color) => color[0] / 255)
  const gValues = rgbValues.map((color) => color[1] / 255)
  const bValues = rgbValues.map((color) => color[2] / 255)

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id={id}>
          <feColorMatrix
            type="matrix"
            values=".299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 0 0 0 1 0"
          ></feColorMatrix>
          <feComponentTransfer colorInterpolationFilters="sRGB">
            <feFuncR type="table" tableValues={rValues.join(' ')}></feFuncR>
            <feFuncG type="table" tableValues={gValues.join(' ')}></feFuncG>
            <feFuncB type="table" tableValues={bValues.join(' ')}></feFuncB>
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}

DuotoneFilter.propTypes = {
  className: PropTypes.string,
  duotone: PropTypes.array,
  id: PropTypes.string
}

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
 * @param  {Array}   props.duotone         Array of duotone color values.
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
  duotone,
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
        '--image-tint-color': `#00000000`,
        '--image-fallback-color': `#000`
      }
    : {}

  // Rename to stylelint-accepted const name.
  const overlayopacity = overlayOpacity

  const hasFilter = !!backgroundImage?.url && !!duotone

  // Generate unique ID for filter.
  const filterKey = Math.random().toString(36).substr(2, 9)
  const filterId = `duotone-filter-${filterKey}`

  return (
    <>
      {hasFilter && (
        <DuotoneFilter
          className={styles.filter}
          duotone={duotone}
          id={filterId}
        />
      )}
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

        {hasFilter && (
          <img
            alt=""
            className={styles.filterImage}
            src={backgroundImage?.url}
            style={{
              filter: `url(#${filterId})`
            }}
          />
        )}

        {children}
      </section>
    </>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.object,
  body: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  duotone: PropTypes.array,
  id: PropTypes.string,
  overlayOpacity: PropTypes.number,
  style: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string
}
