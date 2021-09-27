/**
 * Gutenberg block functionality.
 *
 * @author WebDevStudios
 * @package WDS_Headless_Blocks
 * @since 1.0.0
 */

const {validateThemeColors, validateThemeGradients} = wp.blockEditor
const {useEffect, createElement} = wp.element
const {addFilter, applyFilters} = wp.hooks
const {createHigherOrderComponent} = wp.compose

/**
 * Customize core block settings.
 *
 * @author WebDevStudios
 * @since 1.0.0
 */
wp.domReady(() => {
  wp.blocks.unregisterBlockStyle('core/image', 'default')
  wp.blocks.unregisterBlockStyle('core/separator', 'dots')
  wp.blocks.unregisterBlockStyle('core/separator', 'wide')
  wp.blocks.registerBlockStyle('core/separator', {
    name: 'full-width',
    label: 'Full Width'
  })
})

/**
 * Filter block registration to add custom color attributes.
 *
 * @author WebDevStudios
 * @since 1.0.0
 * @param {object} settings Block settings config.
 * @return {object}         Block settings config.
 */
function wdsAddColorPaletteHexValues(settings) {
  const attributes = {}

  // Add background color hex attribute.
  if (settings.attributes.hasOwnProperty('backgroundColor')) {
    attributes.backgroundColorHex = {
      type: 'string',
      default: ''
    }
  }

  // Add gradient background hex attribute.
  if (settings.attributes.hasOwnProperty('gradient')) {
    attributes.gradientHex = {
      type: 'string',
      default: ''
    }
  }

  // Add main color hex attribute.
  if (settings.attributes.hasOwnProperty('mainColor')) {
    attributes.mainColorHex = {
      type: 'string',
      default: ''
    }
  }

  // Add overlay color hex attribute.
  if (settings.attributes.hasOwnProperty('overlayColor')) {
    attributes.overlayColorHex = {
      type: 'string',
      default: ''
    }
  }

  // Add text color hex attribute.
  if (settings.attributes.hasOwnProperty('textColor')) {
    attributes.textColorHex = {
      type: 'string',
      default: ''
    }
  }

  return lodash.assign({}, settings, {
    attributes: lodash.assign({}, settings.attributes, attributes)
  })
}

addFilter(
  'blocks.registerBlockType',
  'wds/filterBlockColorAttrs',
  wdsAddColorPaletteHexValues
)

/**
 * Filter block edit function to set custom color attributes.
 *
 * @author WebDevStudios
 * @since 1.0.1
 */
const withColorPaletteHexValues = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const {
      attributes: {
        backgroundColor,
        gradient,
        mainColor,
        overlayColor,
        textColor
      }
    } = props

    useEffect(() => {
      // Note: This may not work as expected if a custom theme palette has been set.
      // In that case, this filter may need to be customized.
      const defaultColors = validateThemeColors()

      const defaultGradients = validateThemeGradients()

      // Check for presence of background color attr.
      if (backgroundColor) {
        // Get color object by slug.
        const backgroundColorObj = defaultColors.filter(
          (color) => color.slug === backgroundColor
        )

        // Retrieve color hex value.
        props.attributes.backgroundColorHex =
          backgroundColorObj?.[0]?.color || null
      } else {
        delete props.attributes.backgroundColorHex
      }

      // Check for presence of gradient color attr.
      if (gradient) {
        // Get color object by slug.
        const gradientObj = defaultGradients.filter(
          (color) => color.slug === gradient
        )

        // Retrieve color hex value.
        props.attributes.gradientHex = gradientObj?.[0]?.gradient || null
      } else {
        delete props.attributes.gradientHex
      }

      // Check for presence of main color attr.
      if (mainColor) {
        // Get color object by slug.
        const mainColorObj = defaultColors.filter(
          (color) => color.slug === mainColor
        )

        // Retrieve color hex value.
        props.attributes.mainColorHex = mainColorObj?.[0]?.color || null
      } else {
        delete props.attributes.mainColorHex
      }

      // Check for presence of overlay color attr.
      if (overlayColor) {
        // Get color object by slug.
        const overlayColorObj = defaultColors.filter(
          (color) => color.slug === overlayColor
        )

        // Retrieve color hex value.
        props.attributes.overlayColorHex = overlayColorObj?.[0]?.color || null
      } else {
        delete props.attributes.overlayColorHex
      }

      // Check for presence of text color attr.
      if (textColor) {
        // Get color object by slug.
        const textColorObj = defaultColors.filter(
          (color) => color.slug === textColor
        )

        // Retrieve color hex value.
        props.attributes.textColorHex = textColorObj?.[0]?.color || null
      } else {
        delete props.attributes.textColorHex
      }
    }, [backgroundColor, mainColor, textColor])

    return createElement(BlockEdit, props)
  }
}, 'withColorPaletteHexValues')

addFilter(
  'editor.BlockEdit',
  'wds/filterBlockEditColorAttrs',
  withColorPaletteHexValues
)
