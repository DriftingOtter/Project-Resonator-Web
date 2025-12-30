// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project Resonator',
  tagline: 'The Open-Source IEM | A love letter to the IEM/CIEM hobby',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://driftingotter.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Project-Resonator-Web/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DriftingOtter', // Usually your GitHub org/user name.
  projectName: 'project-resonator-web', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Mermaid diagram support
  markdown: {
    mermaid: true,
  },
  
  // Add Mermaid theme
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DriftingOtter/project-resonator-web/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DriftingOtter/project-resonator-web/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Project Resonator',
        logo: {
          alt: 'Project Resonator Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/DriftingOtter/Project-Resonator',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Tools & Software',
                to: '/docs/Tools-&-Software',
              },
              {
                label: 'Driver Selection',
                to: '/docs/Driver-Selection',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Repository',
                href: 'https://github.com/DriftingOtter/Project-Resonator',
              },
              {
                label: 'YouTube Playlist',
                href: 'https://youtube.com/playlist?list=PL4ahDGGN5zBFhmGqVUoBdOnjuF_9HXV5L',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Crossover Design',
                to: '/docs/Crossover-Design',
              },
              {
                label: 'Component Picking',
                to: '/docs/Component-Picking',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project Resonator. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Optional: Configure Mermaid theme
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
};

export default config;
