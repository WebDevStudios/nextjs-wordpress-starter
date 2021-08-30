const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Next.js WordPress Framework',
  tagline: 'WebDevStudios Next.js WordPress Framework',
  customFields: {
    description: 'WebDevStudios Next.js WordPress Framework'
  },
  url: 'https://webdevstudios.github.io',
  baseUrl: '/docs/',
  organizationName: 'webdevstudios',
  projectName: 'nextjs-wordpress-starter',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Next.js WordPress Framework',
      logo: {
        alt: 'WebDevStudios Logo',
        src: 'img/wds-logo-60x60.png'
      },
      items: [
        {
          href: '/',
          label: 'Home',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Getting Started'
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
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/WebDevStudios/nextjs-wordpress-starter/discussions'
            }
          ]
        },
        {
          title: 'WebDevStudios',
          items: [
            {
              label: 'Blog',
              href: 'https://webdevstudios.com/blog/'
            },
            {
              label: 'Careers',
              href: 'https://webdevstudios.com/careers'
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/webdevstudios-llc-/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/webdevstudios'
            }
          ]
        }
      ],
      copyright: `Next.js WordPress Framework from WebDevStudios`
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
