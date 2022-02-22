/**
 * Convert a hex color value to RGB.
 *
 * @see https://stackoverflow.com/a/39077686
 * @author WebDevStudios
 * @param  {string} hexValue Hex color value.
 * @return {Array}           RGB color value as array.
 */
export default function convertHextoRgb(hexValue) {
  return hexValue
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
}
