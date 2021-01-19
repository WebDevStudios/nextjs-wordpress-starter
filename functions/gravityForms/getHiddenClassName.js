/**
 * Determine hidden className.
 *
 * @author WebDevStudios
 * @param {string} visibility setting of GravityForm field.
 * @return {string} Classname selector based on visibility.
 */
export default function getGfHiddenClassName(visibility) {
  if (!visibility || typeof visibility !== 'string') {
    return ''
  }

  let className = ''

  switch (visibility) {
    case 'hidden':
      className = 'gfFieldHidden'
      break

    case 'administrative':
      className = 'gfFieldHiddenAdmin'
      break

    default:
      break
  }

  return className
}
