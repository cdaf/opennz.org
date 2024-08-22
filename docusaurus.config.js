// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Standards New Zealand',
  tagline: 'Kiwis can Fly',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opennz.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cdaf', // Usually your GitHub org/user name.
  projectName: 'opennz.org', // Usually your repo name.

  // https://docusaurus.io/docs/deployment
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenNZ',
        logo: {
          alt: 'Open Standards New Zealand',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
          },
          {
            href: 'https://github.com/cdaf/opennz.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sector',
            items: [
              {
                label: 'HealthCare',
                to: '/HealthCare/intro',
              },
              {
                label: 'Education',
                to: '/Education/intro',
              },
            ],
          },
          {
            title: 'Industry',
            items: [
              {
                label: 'Telco',
                to: '/Telco/intro',
              },
              {
                label: 'OpenBanking',
                to: '/OpenBanking/intro',
              },
            ],
          },
          {
            title: 'Other Initiatives',
            items: [
              {
                label: 'CDAF',
                href: 'https://cdaf.io',
              },
              {
                label: 'CDAF Guides',
                href: 'https://learn.cdaf.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenNZ. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
