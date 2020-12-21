const config = {
  siteName: 'Site Name',
  siteDescription: 'The description of this website',
  siteUrl: 'https://website.vercel.app',
  author: '@yourname',
  navigation: [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'SSG', href: '/ssg'},
    {label: 'SSR', href: '/ssr'},
    {label: 'ISR', href: '/isr'}
  ],
  social: {
    github: {
      label: 'Github',
      href: 'https://github.com/yourname/'
    },
    twitter: {
      label: 'Twitter',
      href: 'https://twitter.com/yourname/'
    }
  }
}

export default config
