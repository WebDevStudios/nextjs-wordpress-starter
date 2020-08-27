import {CMS_NAME, CMS_URL} from '@/lib/config'

export default function Intro() {
  return (
    <section className=" mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        NextJS Static Blog.
      </h1>
      <p className="text-center md:text-left text-lg mt-5">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </p>
    </section>
  )
}
