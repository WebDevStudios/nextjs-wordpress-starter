import Blocks from '@/components/molecules/Blocks'
import Hero from '@/components/organisms/Hero'
import formatFocalPoint from '@/functions/formatFocalPoint'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'

/**
 * Cover Block
 *
 * The core Columns block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                 The component properties.
 * @param  {string}  props.align           Optional alignment style.
 * @param  {string}  props.anchor          Optional anchor/id.
 * @param  {string}  props.className       Optional classnames.
 * @param  {string}  props.contentPosition The alignment of the component content.
 * @param  {string}  props.customGradient  The custom gradient color.
 * @param  {number}  props.dimRatio        The overlay dim ratio.
 * @param  {object}  props.focalPoint      The focal point coordinates for the image.
 * @param  {string}  props.gradientHex     The background gradient hex value.
 * @param  {boolean} props.hasParallax     Whether image has parallex.
 * @param  {Array}   props.innerBlocks     The array of inner blocks to display.
 * @param  {boolean} props.isRepeated      Whether image is repeated.
 * @param  {number}  props.minHeight       The image minimum height.
 * @param  {string}  props.minHeightUnit   The image minimum height unit.
 * @param  {string}  props.overlayColorHex The overlay color hex value.
 * @param  {object}  props.style           The style attributes.
 * @param  {string}  props.url             The image src attribute.
 * @return {Element}                       The Cover component.
 */
export default function BlockCover({
  align,
  anchor,
  className,
  contentPosition,
  customGradient,
  dimRatio,
  focalPoint,
  gradientHex,
  hasParallax,
  innerBlocks,
  isRepeated,
  minHeight,
  minHeightUnit,
  overlayColorHex,
  style,
  url
}) {
  const overlayColor = overlayColorHex || '#000000'
  const overlayGradient = customGradient || gradientHex
  const overlayOpacity = url ? dimRatio / 100 : 1

  // Add custom styles for Hero.
  const coverStyle = {}

  if (overlayColor && !overlayGradient) {
    coverStyle.backgroundColor = overlayColor
  }

  if (overlayGradient) {
    coverStyle.background = overlayGradient
  }

  if (minHeight && minHeightUnit !== 'vh') {
    coverStyle.minHeight = `${minHeight}px`
  }

  const newFocalPoint = formatFocalPoint(focalPoint)

  const [newInnerBlocks, setInnerBlocks] = useState()

  // Add extra class(es) to inner blocks on initial load.
  useEffect(() => {
    setInnerBlocks(
      !innerBlocks?.length
        ? []
        : innerBlocks.map((block) => {
            const classes = (block?.attributes?.className ?? '').split(' ')

            // Extra check to only add class once.
            if (classes.includes('relative')) {
              return block
            }

            block.attributes = {
              ...block?.attributes,
              className: `${block?.attributes?.className || ''} relative z-10`
            }

            return block
          })
    )
  }, [innerBlocks])

  // Only proceed if we're provided a media URL or a user-selected overlay color/gradient.
  if (!url && !overlayColorHex && !overlayGradient) {
    return null
  }

  return (
    <Hero
      align={align}
      contentAlign={contentPosition}
      backgroundImage={{url}}
      className={className}
      duotone={style?.color?.duotone}
      fixed={hasParallax}
      focalPoint={newFocalPoint}
      fullHeight={minHeight === 100 && minHeightUnit === 'vh'}
      id={anchor}
      overlayOpacity={overlayOpacity}
      repeat={isRepeated}
      style={coverStyle}
    >
      {!!newInnerBlocks?.length && <Blocks blocks={newInnerBlocks} />}
    </Hero>
  )
}

BlockCover.propTypes = {
  align: PropTypes.string,
  anchor: PropTypes.string,
  className: PropTypes.string,
  contentPosition: PropTypes.string,
  customGradient: PropTypes.string,
  dimRatio: PropTypes.number,
  focalPoint: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string
  }),
  gradientHex: PropTypes.string,
  hasParallax: PropTypes.bool,
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  ),
  isRepeated: PropTypes.bool,
  minHeight: PropTypes.number,
  minHeightUnit: PropTypes.string,
  overlayColorHex: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string
}
