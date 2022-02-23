import parse from 'html-react-parser'
import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitize comments when they're posted and displayed.
 *
 * @see https://www.npmjs.com/package/dompurify
 * @see https://www.npmjs.com/package/html-react-parser
 * @author WebDevStudios
 * @param  {string} dirtyComment A potentially dirty string.
 * @return {string}              A sanitized string.
 */
export default function sanitizeComment(dirtyComment) {
  /**
   * Process comment hyperlinks.
   *
   * @see https://github.com/cure53/DOMPurify/blob/main/demos/hooks-target-blank-demo.html
   */
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if ('target' in node) {
      // Force all links to open in a new tab.
      node.setAttribute('target', '_blank')
      // Add rel attribute and set appropriate values.
      node.setAttribute('rel', 'external noopener noreferrer nofollow')
    }
  })

  return parse(DOMPurify.sanitize(dirtyComment))
}
