/**
 * Parse and format focal point coordinates into percent.
 *
 * @author WebDevStudios
 * @param  {object} focalPoint The focal point coordinats.
 * @return {object}            Formatted focal point coordinates for styling.
 */
export default function formatFocalPoint(focalPoint) {
  const newFocalPoint = {}
  let x = focalPoint?.x
  let y = focalPoint?.y
  x = parseFloat(x && !isNaN(x) ? x : '.5') ?? 0.5
  y = parseFloat(y && !isNaN(y) ? y : '.5') ?? 0.5

  newFocalPoint.x = `${x * 100}%`
  newFocalPoint.y = `${y * 100}%`

  return newFocalPoint
}
