const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Elian Codes',
  tagline: 'Let\'s write some docs',
  url: 'https://docs.elian.codes',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'elianvancutsem', // Usually your GitHub org/user name.
  projectName: 'eliancodes-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/elianvancutsem/eliancodes-docs/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Elian Codes',
        logo: {
          alt: 'Elian Codes Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.elian.codes/',
            label: 'www.elian.codes',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Frontend',
                to: '/docs/',
              },
              {
                label: 'API',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Follow Me',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/htmelian',
              },
              {
                label: 'Website',
                href: 'https://www.elian.codes/',
              },
              {
                label: 'email',
                href: 'mailto:hello@elian.codes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.elian.codes/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/elianvancutsem/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Elian Codes`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
