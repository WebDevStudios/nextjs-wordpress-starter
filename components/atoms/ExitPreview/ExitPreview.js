import Link from 'next/link'

/**
 * Renders an anchor to exit Preview Mode.
 *
 * @param  {object}         props         The component as props.
 * @param  {object}         props.preview Checks if a preview exists.
 * @return {Element | null}               The ExitPreview component.
 */
export default function ExitPreview({preview}) {
  if (preview) {
    return (
      <p>
        This page is a preview.
        <Link href="/api/exit-preview">
          <a>Exit preview mode</a>
        </Link>
      </p>
    )
  }

  return null
}
