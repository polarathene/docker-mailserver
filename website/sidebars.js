module.exports = {
  docs: [
    'home',
    'introduction',
    {
      Configuration: [
        'setupsh',
        {
          'User Management': [
            'config-accounts',
            'config-aliases'
          ],
        },
        {
          'Best Practices': [
            'config-dkim',
            'config-dmarc',
            'config-spf',
            'config-autodiscover'
          ],
        },
        {
          Security: [
            'understanding-ports',
            'config-ssl',
            'config-fail2ban'
          ],
        },
        {
          'When something went wrong': [
            'debugging',
            'faq'
          ],
        },
        'config-pop3'],
    },
    {

      Advanced: [
        'optional-configuration',
        {
          Maintenance: [
            'update-and-cleanup'
          ],
        },
        {
          'Override the default config of': [
            'override-dovecot',
            'override-postfix'
          ],
        },
        'email-sieve',
        'email-fetchmail',
        {
          'Email forwarding with': [
            'email-forward-relayhosts',
            'email-forward-awsses',
          ],
        },
        'fulltext-search',
        'kubernetes',
        'ipv6'
      ],
    },
    // Can also make categories more explicit
    // to differentiate from their items:
    {
      type: 'category',
      label: 'Tutorials',
      items: ['faq', 'install-examples'],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: ['usecase-forwardonly-ldap-auth'],
    }
  ],
};
