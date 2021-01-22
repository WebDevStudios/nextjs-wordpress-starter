import Link from 'next/link'

/**
 * Render the Logo component.
 *
 * @author WebDevStudios
 * @return {Element}     The Blocks component.
 */
// TODO: Create Storybook for this component.
export default function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="/images/wds-logo-inverse.svg"
          alt="Site logo"
          loading="lazy"
          height="128"
          width="128"
        />
      </a>
    </Link>
  )
}
