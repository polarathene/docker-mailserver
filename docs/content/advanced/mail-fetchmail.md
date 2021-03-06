---
title: 'Email Gathering with Fetchmail'
---

To enable the [fetchmail](http://www.fetchmail.info) service to retrieve e-mails set the environment variable `ENABLE_FETCHMAIL` to `1`. Your `docker-compose.yml` file should look like following snippet:

```yaml
...
environment:
  - ENABLE_FETCHMAIL=1
  - FETCHMAIL_POLL=300
...
```

Generate a file called `fetchmail.cf` and place it in the `config` folder. Your `docker-mailserver` folder should look like this example:

```
├── config
│   ├── dovecot.cf
│   ├── fetchmail.cf
│   ├── postfix-accounts.cf
│   └── postfix-virtual.cf
├── docker-compose.yml
└── README.md
```

# Configuration

A detailed description of the configuration options can be found in the [online version of the manual page](http://www.fetchmail.info/fetchmail-man.html).

## Example IMAP configuration

```
poll 'imap.example.com' proto imap
	user 'username'
	pass 'secret'
	is 'user1@domain.tld'
	ssl
```

## Example POP3 configuration

```
poll 'pop3.example.com' proto pop3
	user 'username'
	pass 'secret'
	is 'user2@domain.tld'
	ssl
```

__IMPORTANT__: Don’t forget the last line: e. g. `is 'user1@domain.tld'`. After `is` you have to specify one email address from the configuration file `config/postfix-accounts.cf`. 

More details how to configure fetchmail can be found in the [fetchmail man page in the chapter “The run control file”](http://www.fetchmail.info/fetchmail-man.html#31).

## Polling interval

By default the fetchmail service searches every 5 minutes for new mails on your external mail accounts. You can override this default value by changing the ENV variable `FETCHMAIL_POLL`.

```yaml
  - FETCHMAIL_POLL=60
```
You must specify a numeric argument which is a polling interval in seconds. The example above polls every minute for new mails.

# Debugging

To debug your `fetchmail.cf` configuration run this command:

```
./setup.sh debug fetchmail
```

For more informations about the configuration script `setup.sh` [[read the corresponding wiki page|Setup-docker-mailserver-using-the-script-setup.sh]].

Here a sample output of `./setup.sh debug fetchmail`:

```
fetchmail: 6.3.26 querying outlook.office365.com (protocol POP3) at Mon Aug 29 22:11:09 2016: poll started
Trying to connect to 132.245.48.18/995...connected.
fetchmail: Server certificate:
fetchmail: Issuer Organization: Microsoft Corporation
fetchmail: Issuer CommonName: Microsoft IT SSL SHA2
fetchmail: Subject CommonName: outlook.com
fetchmail: Subject Alternative Name: outlook.com
fetchmail: Subject Alternative Name: *.outlook.com
fetchmail: Subject Alternative Name: office365.com
fetchmail: Subject Alternative Name: *.office365.com
fetchmail: Subject Alternative Name: *.live.com
fetchmail: Subject Alternative Name: *.internal.outlook.com
fetchmail: Subject Alternative Name: *.outlook.office365.com
fetchmail: Subject Alternative Name: outlook.office.com
fetchmail: Subject Alternative Name: attachment.outlook.office.net
fetchmail: Subject Alternative Name: attachment.outlook.officeppe.net
fetchmail: Subject Alternative Name: *.office.com
fetchmail: outlook.office365.com key fingerprint: 3A:A4:58:42:56:CD:BD:11:19:5B:CF:1E:85:16:8E:4D
fetchmail: POP3< +OK The Microsoft Exchange POP3 service is ready. [SABFADEAUABSADAAMQBDAEEAMAAwADAANwAuAGUAdQByAHAAcgBkADAAMQAuAHAAcgBvAGQALgBlAHgAYwBoAGEAbgBnAGUAbABhAGIAcwAuAGMAbwBtAA==]
fetchmail: POP3> CAPA
fetchmail: POP3< +OK
fetchmail: POP3< TOP
fetchmail: POP3< UIDL
fetchmail: POP3< SASL PLAIN
fetchmail: POP3< USER
fetchmail: POP3< .
fetchmail: POP3> USER user1@outlook.com
fetchmail: POP3< +OK
fetchmail: POP3> PASS *
fetchmail: POP3< +OK User successfully logged on.
fetchmail: POP3> STAT
fetchmail: POP3< +OK 0 0
fetchmail: No mail for user1@outlook.com at outlook.office365.com
fetchmail: POP3> QUIT
fetchmail: POP3< +OK Microsoft Exchange Server 2016 POP3 server signing off.
fetchmail: 6.3.26 querying outlook.office365.com (protocol POP3) at Mon Aug 29 22:11:11 2016: poll completed
fetchmail: normal termination, status 1
```