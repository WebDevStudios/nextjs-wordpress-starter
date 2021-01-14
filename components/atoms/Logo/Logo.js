import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="/logo.svg"
          alt="site logo"
          loading="lazy"
          height="128"
          width="128"
        />
      </a>
    </Link>
  )
}
