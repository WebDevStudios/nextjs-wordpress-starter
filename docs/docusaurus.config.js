const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Next.js WordPress Starter',
  tagline: 'Build headless websites with this starter from WebDevStudios',
  customFields: {
    description: 'WebDevStudios Next.js WordPress Starter'
  },
  url: 'https://webdevstudios.github.io',
  baseUrl: '/nextjs-wordpress-starter/',
  organizationName: 'webdevstudios',
  projectName: 'nextjs-wordpress-starter',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Next.js WordPress Starter',
      logo: {
        alt: 'WebDevStudios Logo',
        src: 'img/wds-logo-60x60.webp'
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Documentation'
        },
        {
          label: 'Blog',
          href: 'https://webdevstudios.com/blog/',
          position: 'right'
        },
        {
          label: 'Careers',
          href: 'https://webdevstudios.com/careers',
          position: 'right'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/webdevstudios-llc-/',
          position: 'right'
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/webdevstudios',
          position: 'right'
        },
        {
          href: 'https://github.com/WebDevStudios/nextjs-wordpress-starter',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - Next.js WordPress Starter from <a href="https://webdevstudios.com">WebDevStudios</a>`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
