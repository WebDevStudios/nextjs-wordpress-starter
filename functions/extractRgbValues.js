/**
 * Extract numeric RGB values from string.
 *
 * @see https://stackoverflow.com/a/34980657
 * @author WebDevStudios
 * @param  {string} rgbString RGB string.
 * @return {Array}            Array of numeric RGB values.
 */
export default function extractRgbValues(rgbString) {
  const rgbValues = rgbString.match(
    /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
  )

  // Remove first element (original RGB string) and last element (undefined).
  rgbValues.shift()
  rgbValues.pop()

  return rgbValues
}
