// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyberLINKS',
  tagline: 'Cybersecurity Research Group at LINKS Foundation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cybersecurity-links.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cybersecurity-LINKS', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          id: 'docs-mediterraneus', // omitted => default instance
          sidebarPath: './sidebars.js', 
          path: 'docs_mediterraneus',
          routeBasePath: 'mediterraneus',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/Cybersecurity-LINKS/cybersecurity-links.github.io',
          // ... other options
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // docRootComponent: '@theme/DocPage',
          // docItemComponent: "@theme/ApiItem", // Derived from https://docusaurus-openapi.tryingpan.dev/#configuring-the-theme
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Cybersecurity-LINKS/cybersecurity-links.github.io',
        // },
        // Will be passed to @docusaurus/plugin-sitemap (false to disable)
        sitemap: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-embrave',
        path: 'docs_embrave',
        routeBasePath: 'embrave',
        sidebarPath: './sidebars.js',
        // ... other options
      },
    ],
    // wait for Docusaurus v3.0 compatibility
    // [
    //   // https://docusaurus-openapi.tryingpan.dev/
    //   "docusaurus-plugin-openapi-docs", 
    //   {
    //     id: "openapi",
    //     docsPluginId: "classic",
    //     config: {
    //       // issuer: {  // is considered the <id> that you will reference in the CLI
    //       //   specPath: "apis/spec/issuer.yaml",
    //       //   outputDir: "docs_mediterraneus/apis/issuer",
    //       //   sidebarOptions: {
    //       //     groupPathsBy: "tag",
    //       //     categoryLinkSource: "tag",
    //       //   },
    //       // },
    //       connector: {
    //         specPath: "apis/spec/connector.yaml",
    //         outputDir: "docs_mediterraneus/apis/connector",
    //         sidebarOptions: {
    //           groupPathsBy: "tag",
    //           categoryLinkSource: "tag",
    //         },
    //       },
    //     },
    //   },
    // ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CyberLINKS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {to: 'publications', label: 'Publications', position: 'left'},
          {
            type: 'docSidebar',
            docsPluginId: 'docs-mediterraneus',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Mediterraneus',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'docs-embrave',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Embrave',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Cybersecurity-LINKS',
            label: 'GitHub',
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
                label: 'Mediterraneus',
                to: '/mediterraneus',
              },
              {
                label: 'Embrave',
                to: '/embrave/intro',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Publications',
                href: '/publications',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Cybersecurity-LINKS',
              },
              {
                label: 'Crates.io',
                href: 'https://crates.io/teams/github:cybersecurity-links:publish'
              },
              {
                label: 'Fondazione LINKS',
                href: 'https://linksfoundation.com/'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cybersecurity team, Fondazione LINKS. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: [
          'bash',
          'json',
          'editorconfig',
        ],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'] //, "docusaurus-theme-openapi-docs"], 
};

export default config;
