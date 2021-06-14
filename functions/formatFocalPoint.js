/**
 * Parse and format focal point coordinates into percent.
 *
 * @author WebDevStudios
 * @param  {object} focalPoint The focal point coordinats.
 * @return {object}            Formatted focal point coordinates for styling.
 */
export default function formatFocalPoint(focalPoint) {
  const newFocalPoint = {}
  const x = parseFloat(focalPoint?.x || '.5') ?? 0.5
  const y = parseFloat(focalPoint?.y || '.5') ?? 0.5

  newFocalPoint.x = `${x * 100}%`
  newFocalPoint.y = `${y * 100}%`

  return newFocalPoint
}
