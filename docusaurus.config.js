// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OLA 使用指南 v4',
  tagline: 'AI-native B2B Sales CRM',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://pipipig-yz.github.io',
  baseUrl: '/ola_user_guide_v4/',

  organizationName: 'SeekMi-Technologies',
  projectName: 'ola-user-guide',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // 暂时隐藏的章节：文件保留，但不参与构建/不在网页展示。待启用时删除以下两行。
          exclude: ['**/channel.md', '**/admin.md'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'OLA 使用指南 v4',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cnSidebar',
            position: 'left',
            label: '中文',
          },
          {
            type: 'docSidebar',
            sidebarId: 'enSidebar',
            position: 'left',
            label: 'English',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'OLA',
            items: [
              {
                label: '官网 / Website',
                href: 'https://olatech.ai',
              },
              {
                label: '客服邮箱 / Support',
                href: 'mailto:support@olatech.ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OLA Technologies. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
