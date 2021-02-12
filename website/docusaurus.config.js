module.exports = {
  title: 'Docker Mailserver',
  tagline: 'A fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) using Docker.',
  url: 'https://docker-mailserver-docs-demo.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'docker-mailserver', // Usually your GitHub org/user name.
  projectName: 'docker-mailserver', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docker Mailserver',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/polarathene/docker-mailserver',
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
              label: 'Wiki Example',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Releases',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/polarathene/docker-mailserver',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} [_Docker Mailserver Organization_](https://github.com/docker-mailserver). This project is licensed under the MIT license. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/polarathene/docker-mailserver/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
