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
 * @param  {string}  props.align           The alignment of the hero component.
 * @param  {string}  props.backgroundImage The background image object.
 * @param  {string}  props.body            Text for the body.
 * @param  {string}  props.className       The className.
 * @param  {any}     props.children        InnerBlocks.
 * @param  {string}  props.contentAlign    The alignment of the component content.
 * @param  {object}  props.ctaText         The cta text.
 * @param  {object}  props.ctaUrl          The cta url.
 * @param  {Array}   props.duotone         Array of duotone color values.
 * @param  {boolean} props.fixed           Whether the background is fixed (parallax).
 * @param  {object}  props.focalPoint      The focal point coordinates for the image.
 * @param  {boolean} props.fullHeight      Whether hero is full height.
 * @param  {string}  props.id              Optional element ID.
 * @param  {number}  props.overlayOpacity  The overlay opacity as a float.
 * @param  {boolean} props.repeat          Whether background is repeated.
 * @param  {object}  props.style           Custom hero styles.
 * @param  {string}  props.subtitle        Text for the subtitle.
 * @param  {string}  props.title           Text for the title.
 * @return {Element}                       The Hero component.
 */
export default function Hero({
  align,
  backgroundImage,
  body,
  className,
  children,
  contentAlign,
  ctaText,
  ctaUrl,
  duotone,
  fixed,
  focalPoint,
  fullHeight,
  id,
  overlayOpacity = 0.5,
  repeat,
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

  const hasFilter = !!backgroundImage?.url && !!duotone && !fixed && !repeat

  // Generate unique ID for filter.
  const filterKey = Math.random().toString(36).substr(2, 9)
  const filterId = `duotone-filter-${filterKey}`

  const filterStyle = {
    filter: `url(#${filterId})`
  }

  // Conditionally apply focal point.
  if (focalPoint) {
    const focalPointStyle = `${focalPoint.x} ${focalPoint.y}`

    heroStyle.backgroundPosition = focalPointStyle
    filterStyle.objectPosition = focalPointStyle
  }

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
        className={cn(
          styles.hero,
          className,
          align === 'left' ? styles.alignLeft : null,
          align === 'right' ? styles.alignRight : null,
          contentAlign && contentAlign.indexOf('top') === 0
            ? styles.contentAlignTop
            : null,
          contentAlign && contentAlign.indexOf('bottom') === 0
            ? styles.contentAlignBottom
            : null,
          contentAlign && contentAlign.indexOf('left') > -1
            ? styles.contentAlignLeft
            : null,
          contentAlign && contentAlign.indexOf('right') > -1
            ? styles.contentAlignRight
            : null,
          fixed ? styles.fixed : null,
          fullHeight ? styles.fullHeight : null,
          repeat ? styles.repeat : null
        )}
        style={{
          ...style,
          ...heroStyle
        }}
      >
        <div
          className={cn(
            styles.overlay,
            !backgroundImage?.url ? styles.overlayOnly : null
          )}
          style={{opacity: overlayopacity}}
        ></div>
        <div className={styles.content}>
          {!!subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {!!title && <h1 className={styles.title}>{title}</h1>}
          {!!body && <p className={styles.body}>{body}</p>}
          {!!ctaText && ctaUrl && (
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
            style={filterStyle}
          />
        )}

        {children}
      </section>
    </>
  )
}

Hero.propTypes = {
  align: PropTypes.string,
  backgroundImage: PropTypes.object,
  body: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  contentAlign: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  duotone: PropTypes.array,
  fixed: PropTypes.bool,
  focalPoint: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string
  }),
  fullHeight: PropTypes.bool,
  id: PropTypes.string,
  overlayOpacity: PropTypes.number,
  repeat: PropTypes.bool,
  style: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string
}
