/**
 * Handle markup that contains HTML.
 *
 * @param {Array} props Array of JSX Objects.
 */
export default function createMarkup(props) {
  return {__html: props}
}
