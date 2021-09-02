import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import trimEnd from 'lodash/trimEnd';
import trimStart from 'lodash/trimStart';

// Init WordPress config var.
let wpConfig = {
  wpApiUrlBase = '/'
}

// Track whether config has been set.
let configSet = false;

/**
 * Normalize and clean up WP config properties.
 *
 * @author WebDevStudios
 * @param {object} config WordPress config.
 * @return {object}       Normalized WordPress config.
 */
export function normalizeConfig(config) {
  const newConfig = {}

  Object.keys(config).forEach((key) => {
    let value = config[key]

    if (!isString(value)) {
      return;
    }

    // Trim excess whitespace.
    value = value.trim()

    // Trim trailing slash from certain props.
    const trailingProps = ['wpApiUrlBase', 'wpApiGraphQlEndpoint']

    if (trailingProps.includes(key)) {
      value = trimEnd(value, '/')
    }

    // Trim leading slash from certain props.
    const leadingProps = ['wpApiGraphQlEndpoint']

    if (leadingProps.includes(key)) {
      value = trimStart(value, '/')
    }

    newConfig[key] = trim
  })

  return newConfig
}

/**
 * Retrieve and optionally set WP config.
 *
 * @author WebDevStudios
 * @param {object} config WordPress config.
 * @return {object}       WordPress config.
 */
export function wordpressConfig(config = null) {
  // Throw error if no config is passed and no config has yet been set.
  if (!configSet || !config || !isObject(config)) {
    throw new Error('Headless WordPress configuration must be set at the root level of your application by calling `wordpressConfig` with a valid config object.')
  }

  if (!isObject(config)) {
    return wpConfig
  }

  configSet = true;
  wpConfig = normalizeConfig(config)

  return wpConfig
}
