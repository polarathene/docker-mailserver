module.exports = {
  title: 'Docker Mailserver',
  tagline: 'A fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) using Docker.',
  url: 'https://polarathene.github.io',
  baseUrl: '/docker-mailserver/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'polarathene', // Usually your GitHub org/user name.
  projectName: 'docker-mailserver', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docker Mailserver',
      logo: {
        alt: 'Docker Mailserver Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/polarathene/docker-mailserver',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© <a href="https://github.com/docker-mailserver"><em>Docker Mailserver Organization</em></a><br/>This project is licensed under the MIT license.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/polarathene/docker-mailserver/tree/docs/docusaurus-demo/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
