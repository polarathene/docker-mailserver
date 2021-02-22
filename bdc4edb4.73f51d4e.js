(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),m=function(e){var a=i.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=m(e.components);return i.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(t),b=n,u=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return t?i.a.createElement(u,s(s({ref:a},l),{},{components:t})):i.a.createElement(u,s({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return m}));var n=t(3),i=t(7),r=(t(0),t(104)),o={id:"faq",title:"FAQ and Tips"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ and Tips",description:"What kind of database are you using?",source:"@site/docs/FAQ-and-Tips.md",slug:"/faq",permalink:"/docker-mailserver/faq",editUrl:"https://github.com/polarathene/docker-mailserver/tree/docs/docusaurus-demo/website/docs/FAQ-and-Tips.md",version:"current",sidebar:"docs",previous:{title:"Debugging",permalink:"/docker-mailserver/debugging"},next:{title:"Mail delivery with POP3",permalink:"/docker-mailserver/config-pop3"}},c=[{value:"What kind of database are you using?",id:"what-kind-of-database-are-you-using",children:[]},{value:"Where are emails stored?",id:"where-are-emails-stored",children:[]},{value:"How to alter the running mailserver instance <em>without</em> relaunching the container?",id:"how-to-alter-the-running-mailserver-instance-without-relaunching-the-container",children:[]},{value:"How can I sync container with host date/time? Timezone?",id:"how-can-i-sync-container-with-host-datetime-timezone",children:[]},{value:"What is the file format?",id:"what-is-the-file-format",children:[]},{value:"What about backups?",id:"what-about-backups",children:[]},{value:"What about <code>mail-state</code> folder?",id:"what-about-mail-state-folder",children:[]},{value:"How can I configure my email client?",id:"how-can-i-configure-my-email-client",children:[]},{value:"How can I manage my custom Spamassassin rules?",id:"how-can-i-manage-my-custom-spamassassin-rules",children:[]},{value:"What are acceptable <code>SA_SPAM_SUBJECT</code> values?",id:"what-are-acceptable-sa_spam_subject-values",children:[]},{value:"Can I use naked/bare domains (no host name)?",id:"can-i-use-nakedbare-domains-no-host-name",children:[]},{value:"Why are Spamassassin x-headers not inserted into my sample.domain.com subdomain emails?",id:"why-are-spamassassin-x-headers-not-inserted-into-my-sampledomaincom-subdomain-emails",children:[]},{value:"How can I make SpamAssassin learn spam?",id:"how-can-i-make-spamassassin-learn-spam",children:[]},{value:"How can I configure a catch-all?",id:"how-can-i-configure-a-catch-all",children:[]},{value:"How can I delete all the e-mails for a specific user?",id:"how-can-i-delete-all-the-e-mails-for-a-specific-user",children:[]},{value:"How do I have more control about what SPAMASSASIN is filtering?",id:"how-do-i-have-more-control-about-what-spamassasin-is-filtering",children:[]},{value:"What kind of SSL certificates can I use?",id:"what-kind-of-ssl-certificates-can-i-use",children:[]},{value:"I just moved from my old mail server but &quot;it doesn&#39;t work&quot;.",id:"i-just-moved-from-my-old-mail-server-but-it-doesnt-work",children:[]},{value:"Which system requirements needs my container to run <code>docker-mailserver</code> effectively?",id:"which-system-requirements-needs-my-container-to-run-docker-mailserver-effectively",children:[]},{value:"Is <code>docker-mailserver</code> running in a rancher environment?",id:"is-docker-mailserver-running-in-a-rancher-environment",children:[]},{value:"How can I authenticate users with SMTP_ONLY?",id:"how-can-i-authenticate-users-with-smtp_only",children:[]},{value:"Common errors",id:"common-errors",children:[]},{value:"Using behind proxy",id:"using-behind-proxy",children:[]},{value:"What about updates",id:"what-about-updates",children:[]},{value:"Howto adjust settings with the user-patches.sh script",id:"howto-adjust-settings-with-the-user-patchessh-script",children:[]}],l={toc:c};function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"what-kind-of-database-are-you-using"},"What kind of database are you using?"),Object(r.b)("p",null,"None! No database is required. Filesystem is the database.",Object(r.b)("br",{parentName:"p"}),"\n","This image is based on config files that can be persisted using Docker volumes, and as such versioned, backed up and so forth.  "),Object(r.b)("h3",{id:"where-are-emails-stored"},"Where are emails stored?"),Object(r.b)("p",null,"Mails are stored in ",Object(r.b)("inlineCode",{parentName:"p"},"/var/mail/${domain}/${username}"),".",Object(r.b)("br",{parentName:"p"}),"\n","You should use a ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/@ramangupta/why-docker-data-containers-are-good-589b3c6c749e#.uxyrp7xpu"},"data volume container")," for ",Object(r.b)("inlineCode",{parentName:"p"},"/var/mail")," to persist data. Otherwise, your data may be lost."),Object(r.b)("h3",{id:"how-to-alter-the-running-mailserver-instance-without-relaunching-the-container"},"How to alter the running mailserver instance ",Object(r.b)("em",{parentName:"h3"},"without")," relaunching the container?"),Object(r.b)("p",null,'docker-mailserver aggregates multiple "sub-services", such as Postfix, Dovecot, Fail2ban, SpamAssasin, etc.  In many cases, on may edit a sub-service\'s config and reload that very sub-service, without stopping and relaunching the whole mail server.'),Object(r.b)("p",null,"In order to do so, you'll probably want to push your config updates to your server through a Docker volume, then restart the sub-service to apply your changes, using ",Object(r.b)("inlineCode",{parentName:"p"},"supervisorctl"),". For instance, after editing fail2ban's config: ",Object(r.b)("inlineCode",{parentName:"p"},"supervisorctl restart fail2ban"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"http://supervisord.org/running.html#running-supervisorctl"},"supervisorctl's documentation"),"."),Object(r.b)("p",null,"Tips: to add/update/delete an email account, there is no need to restart postfix/dovecot service inside the container after using setup.sh script.\nFor more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver/issues/1639"},"issues/1639")),Object(r.b)("h3",{id:"how-can-i-sync-container-with-host-datetime-timezone"},"How can I sync container with host date/time? Timezone?"),Object(r.b)("p",null,"Share the host's ",Object(r.b)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/localtime.html"},Object(r.b)("inlineCode",{parentName:"a"},"/etc/localtime"))," with the docker-mailserver container, using a Docker volume:  "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"volumes:\n  - /etc/localtime:/etc/localtime:ro\n")),Object(r.b)("p",null,"(optional) Add one line to ",Object(r.b)("inlineCode",{parentName:"p"},".env")," or ",Object(r.b)("inlineCode",{parentName:"p"},"env-mailserver")," to set timetzone for container, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"TZ=Europe/Berlin\n")),Object(r.b)("p",null,"check here for ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},Object(r.b)("inlineCode",{parentName:"a"},"tz name list"))),Object(r.b)("h3",{id:"what-is-the-file-format"},"What is the file format?"),Object(r.b)("p",null,"All files are using the Unix format with ",Object(r.b)("inlineCode",{parentName:"p"},"LF")," line endings.\nPlease do not use ",Object(r.b)("inlineCode",{parentName:"p"},"CRLF"),"."),Object(r.b)("h3",{id:"what-about-backups"},"What about backups?"),Object(r.b)("p",null,"Assuming that you use ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," and a data volumes, you can backup your user mails like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker run --rm -ti \\\n  -v maildata:/var/mail \\\n  -v mailstate:/var/mail-state \\\n  -v /backup/mail:/backup \\\n  alpine:3.2 \\\n  tar czf /backup/mail-`date +%y%m%d-%H%M%S`.tgz /var/mail /var/mail-state\n\nfind /backup/mail -type f -mtime +30 -exec rm -f {} \\;\n")),Object(r.b)("h3",{id:"what-about-mail-state-folder"},"What about ",Object(r.b)("inlineCode",{parentName:"h3"},"mail-state")," folder?"),Object(r.b)("p",null,"This folder consolidates all data generated by the server itself to persist when you upgrade.\nExample of data folder persisted: lib-amavis, lib-clamav, lib-fail2ban, lib-postfix, lib-postgrey, lib-spamassasin, lib-spamassassin, spool-postfix, ..."),Object(r.b)("h3",{id:"how-can-i-configure-my-email-client"},"How can I configure my email client?"),Object(r.b)("p",null,"Login are full email address (",Object(r.b)("inlineCode",{parentName:"p"},"user@domain.com"),").  "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# imap\nusername:           <user1@domain.tld>\npassword:           <mypassword>\nserver:             <mail.domain.tld>\nimap port:          143 or 993 with ssl (recommended)\nimap path prefix:   INBOX\n\n# smtp\nsmtp port:          25 or 587 with ssl (recommended)\nusername:           <user1@domain.tld>\npassword:           <mypassword>\n")),Object(r.b)("p",null,"Please use ",Object(r.b)("inlineCode",{parentName:"p"},"STARTTLS"),"."),Object(r.b)("h3",{id:"how-can-i-manage-my-custom-spamassassin-rules"},"How can I manage my custom Spamassassin rules?"),Object(r.b)("p",null,"Antispam rules are managed in ",Object(r.b)("inlineCode",{parentName:"p"},"config/spamassassin-rules.cf"),"."),Object(r.b)("h3",{id:"what-are-acceptable-sa_spam_subject-values"},"What are acceptable ",Object(r.b)("inlineCode",{parentName:"h3"},"SA_SPAM_SUBJECT")," values?"),Object(r.b)("p",null,"For no subject set ",Object(r.b)("inlineCode",{parentName:"p"},"SA_SPAM_SUBJECT=undef"),"."),Object(r.b)("p",null,"For a trailing white-space subject one can define the whole variable with quotes in ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-docker-compose"},'    environment:\n      - "SA_SPAM_SUBJECT=[SPAM] "\n')),Object(r.b)("h3",{id:"can-i-use-nakedbare-domains-no-host-name"},"Can I use naked/bare domains (no host name)?"),Object(r.b)("p",null,"Yes, but not without some configuration changes. Normally it is assumed that docker-mailserver runs on a host with a name, so the fully qualified host name might be ",Object(r.b)("inlineCode",{parentName:"p"},"mail.example.com")," with the domain ",Object(r.b)("inlineCode",{parentName:"p"},"example.com"),". The MX records point to ",Object(r.b)("inlineCode",{parentName:"p"},"mail.example.com"),". To use a bare domain where the host name is ",Object(r.b)("inlineCode",{parentName:"p"},"example.com")," and the domain is also ",Object(r.b)("inlineCode",{parentName:"p"},"example.com"),", change mydestination from:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mydestination = $myhostname, localhost.$mydomain, localhost")),Object(r.b)("p",null,"To:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mydestination = localhost.$mydomain, localhost")),Object(r.b)("p",null,"Add the latter line to config/postfix-main.cf. That should work. Without that change there will be warnings in the logs like:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"warning: do not list domain example.com in BOTH mydestination and virtual_mailbox_domains")),Object(r.b)("p",null,"Plus of course mail delivery fails."),Object(r.b)("h3",{id:"why-are-spamassassin-x-headers-not-inserted-into-my-sampledomaincom-subdomain-emails"},"Why are Spamassassin x-headers not inserted into my sample.domain.com subdomain emails?"),Object(r.b)("p",null,'In the default setup, amavis only applies Spamassassin x-headers into domains matching the template listed in the config  file 05-domain_id (in the amavis defaults). The default setup @local_domains_acl = ( ".$mydomain" ); does not match subdomains. To match subdomains, you can override the @local_domains_acl directive in the amavis user config file 50-user with @local_domains_maps = ("."); to match any sort of domain template. '),Object(r.b)("h3",{id:"how-can-i-make-spamassassin-learn-spam"},"How can I make SpamAssassin learn spam?"),Object(r.b)("p",null,"Put received spams in ",Object(r.b)("inlineCode",{parentName:"p"},".Junk/")," imap folder using ",Object(r.b)("inlineCode",{parentName:"p"},"SPAMASSASSIN_SPAM_TO_INBOX=1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MOVE_SPAM_TO_JUNK=1")," and add a ",Object(r.b)("em",{parentName:"p"},"user")," cron like the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# This assumes you're having `environment: ONE_DIR=1` in the env-mailserver,\n# with a consolidated config in `/var/mail-state`\n#\n# m h dom mon dow command\n# Everyday 2:00AM, learn spam from a specific user\n0 2 * * * docker exec mail sa-learn --spam /var/mail/domain.com/username/.Junk --dbpath /var/mail-state/lib-amavis/.spamassassin\n")),Object(r.b)("p",null,"If you run the server with docker-compose, you can leverage on docker configs and the mailserver's own cron. This is less problematic than the simple solution shown above, because it decouples the learning from the host on which the mailserver is running and avoids errors if the server is not running. "),Object(r.b)("p",null,"The following configuration works nicely:"),Object(r.b)("p",null,"create a ",Object(r.b)("em",{parentName:"p"},"system")," cron file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# in the docker-compose.yml root directory\nmkdir cron\ntouch cron/sa-learn\nchown root:root cron/sa-learn\nchmod 0644 cron/sa-learn\n")),Object(r.b)("p",null,"edit the system cron file ",Object(r.b)("inlineCode",{parentName:"p"},"nano cron/sa-learn"),", and set an appropriate configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# This assumes you're having `environment: ONE_DIR=1` in the env-mailserver,\n# with a consolidated config in `/var/mail-state`\n#\n# m h dom mon dow user command\n#\n# Everyday 2:00AM, learn spam from a specific user\n# spam: junk directory\n0  2 * * * root  sa-learn --spam /var/mail/domain.com/username/.Junk --dbpath /var/mail-state/lib-amavis/.spamassassin\n# ham: archive directories\n15 2 * * * root  sa-learn --ham /var/mail/domain.com/username/.Archive* --dbpath /var/mail-state/lib-amavis/.spamassassin\n# ham: inbox subdirectories\n30 2 * * * root  sa-learn --ham /var/mail/domain.com/username/cur* --dbpath /var/mail-state/lib-amavis/.spamassassin\n#\n# Everyday 3:00AM, learn spam from all users of a domain\n# spam: junk directory\n0  3 * * * root  sa-learn --spam /var/mail/otherdomain.com/*/.Junk --dbpath /var/mail-state/lib-amavis/.spamassassin\n# ham: archive directories\n15 3 * * * root  sa-learn --ham /var/mail/otherdomain.com/*/.Archive* --dbpath /var/mail-state/lib-amavis/.spamassassin\n# ham: inbox subdirectories\n30 3 * * * root  sa-learn --ham /var/mail/otherdomain.com/*/cur* --dbpath /var/mail-state/lib-amavis/.spamassassin\n")),Object(r.b)("p",null,"with plain docker-compose:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-docker-compose"},'version: "2"\n\nservices:\n  mail:\n    image: tvial/docker-mailserver:latest\n    # ...\n    volumes:\n      - ./cron/sa-learn:/etc/cron.d/sa-learn\n')),Object(r.b)("p",null,"with ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/swarm/configs/"},"docker swarm"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-docker-compose"},'version: "3.3"\n\nservices:\n  mail:\n    image: tvial/docker-mailserver:latest\n    # ...\n    configs:\n      - source: my_sa_crontab\n        target: /etc/cron.d/sa-learn\n\nconfigs:\n  my_sa_crontab:\n    file: ./cron/sa-learn\n')),Object(r.b)("p",null,"With the default settings, Spamassassin will require 200 mails trained for spam (for example with the method explained above) and 200 mails trained for ham (using the same command as above but using ",Object(r.b)("inlineCode",{parentName:"p"},"--ham")," and providing it with some ham mails). Until you provided these 200+200 mails, Spamassasin will not take the learned mails into account. For further reference, see the ",Object(r.b)("a",{parentName:"p",href:"https://wiki.apache.org/spamassassin/BayesNotWorking"},"Spamassassin Wiki"),"."),Object(r.b)("h3",{id:"how-can-i-configure-a-catch-all"},"How can I configure a catch-all?"),Object(r.b)("p",null,"Considering you want to redirect all incoming e-mails for the domain ",Object(r.b)("inlineCode",{parentName:"p"},"domain.tld")," to ",Object(r.b)("inlineCode",{parentName:"p"},"user1@domain.tld"),", add the following line to ",Object(r.b)("inlineCode",{parentName:"p"},"config/postfix-virtual.cf"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"@domain.tld user1@domain.tld\n")),Object(r.b)("h3",{id:"how-can-i-delete-all-the-e-mails-for-a-specific-user"},"How can I delete all the e-mails for a specific user?"),Object(r.b)("p",null,"First of all, create a special alias named ",Object(r.b)("inlineCode",{parentName:"p"},"devnull")," by editing ",Object(r.b)("inlineCode",{parentName:"p"},"config/postfix-aliases.cf"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"devnull:    /dev/null\n")),Object(r.b)("p",null,"Considering you want to delete all the e-mails received for ",Object(r.b)("inlineCode",{parentName:"p"},"baduser@domain.tld"),", add the following line to ",Object(r.b)("inlineCode",{parentName:"p"},"config/postfix-virtual.cf"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"baduser@domain.tld  devnull\n")),Object(r.b)("h3",{id:"how-do-i-have-more-control-about-what-spamassasin-is-filtering"},"How do I have more control about what SPAMASSASIN is filtering?"),Object(r.b)("p",null,"By default, SPAM and INFECTED emails are put to a quarantine which is not very straight forward to access. Several config settings are affecting this behavior:"),Object(r.b)("p",null,"First, make sure you have the proper thresholds set:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"SA_TAG=-100000.0\nSA_TAG2=3.75\nSA_KILL=100000.0\n")),Object(r.b)("p",null,"The very negative vaue in ",Object(r.b)("inlineCode",{parentName:"p"},"SA_TAG")," makes sure, that all emails have the Spamassasin headers included.\n",Object(r.b)("inlineCode",{parentName:"p"},"SA_TAG2")," is the actual threshold to set the YES/NO flag for spam detection.\n",Object(r.b)("inlineCode",{parentName:"p"},"SA_KILL")," needs to be very high, to make sure nothing is bounced at all (",Object(r.b)("inlineCode",{parentName:"p"},"SA_KILL")," superseeds ",Object(r.b)("inlineCode",{parentName:"p"},"SPAMASSASSIN_SPAM_TO_INBOX"),")"),Object(r.b)("p",null,"Make sure everything (including SPAM) is delivered to the inbox and not quarantined."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"SPAMASSASSIN_SPAM_TO_INBOX=1\n")),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"MOVE_SPAM_TO_JUNK=1")," or create a sieve script which puts spam to the Junk folder."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'require ["comparator-i;ascii-numeric","relational","fileinto"];\n\nif header :contains "X-Spam-Flag" "YES" {\n  fileinto "Junk";\n} elsif allof (\n   not header :matches "x-spam-score" "-*",\n   header :value "ge" :comparator "i;ascii-numeric" "x-spam-score" "3.75" ) {\n  fileinto "Junk";\n}\n')),Object(r.b)("p",null,"Create a dedicated mailbox for emails which are infected/bad header and everything amavis is blocking by default and put its address into ",Object(r.b)("inlineCode",{parentName:"p"},"config/amavis.cf")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$clean_quarantine_to      = "amavis\\@domain.com";\n$virus_quarantine_to      = "amavis\\@domain.com";\n$banned_quarantine_to     = "amavis\\@domain.com";\n$bad_header_quarantine_to = "amavis\\@domain.com";\n$spam_quarantine_to       = "amavis\\@domain.com";\n\n')),Object(r.b)("h3",{id:"what-kind-of-ssl-certificates-can-i-use"},"What kind of SSL certificates can I use?"),Object(r.b)("p",null,"You can use the same certificates you use with another mail server.",Object(r.b)("br",{parentName:"p"}),"\n","The only thing is that we provide a ",Object(r.b)("inlineCode",{parentName:"p"},"self-signed")," certificate tool and a ",Object(r.b)("inlineCode",{parentName:"p"},"letsencrypt")," certificate loader."),Object(r.b)("h3",{id:"i-just-moved-from-my-old-mail-server-but-it-doesnt-work"},'I just moved from my old mail server but "it doesn\'t work".'),Object(r.b)("p",null,"If this migration implies a DNS modification, be sure to wait for DNS propagation before opening an issue.\nFew examples of symptoms can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver/issues/95"},"here")," or ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver/issues/97"},"here"),".",Object(r.b)("br",{parentName:"p"}),"\n","This could be related to a modification of your ",Object(r.b)("inlineCode",{parentName:"p"},"MX")," record, or the IP mapped to ",Object(r.b)("inlineCode",{parentName:"p"},"mail.my-domain.tld"),". Additionally, ",Object(r.b)("a",{parentName:"p",href:"https://intodns.com/"},"validate your DNS configuration"),". "),Object(r.b)("p",null,"If everything is OK regarding DNS, please provide ",Object(r.b)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"formatted logs")," and config files. This will allow us to help you."),Object(r.b)("p",null,"If we're blind, we won't be able to do anything."),Object(r.b)("h3",{id:"which-system-requirements-needs-my-container-to-run-docker-mailserver-effectively"},"Which system requirements needs my container to run ",Object(r.b)("inlineCode",{parentName:"h3"},"docker-mailserver")," effectively?"),Object(r.b)("p",null,"1 core and 1GB of RAM + swap partition is recommended to run ",Object(r.b)("inlineCode",{parentName:"p"},"docker-mailserver")," with clamav.\nOtherwise, it could work with 512M of RAM."),Object(r.b)("p",null,"Please note that clamav can consume a lot of memory, as it reads the entire signature database into RAM. Current figure is about 850M and growing. If you get errors about clamav or amavis failing to allocate memory you need more RAM or more swap and of course docker must be allowed to use swap (not always the case). If you can't use swap at all you may need 3G RAM."),Object(r.b)("h3",{id:"is-docker-mailserver-running-in-a-rancher-environment"},"Is ",Object(r.b)("inlineCode",{parentName:"h3"},"docker-mailserver")," running in a ",Object(r.b)("a",{parentName:"h3",href:"http://rancher.com/rancher/"},"rancher environment"),"?"),Object(r.b)("p",null,"Yes, by Adding the Environment Variable ",Object(r.b)("inlineCode",{parentName:"p"},"PERMIT_DOCKER: network"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"WARNING"),": Adding the docker network's gateway to the list of trusted hosts, e.g. using the ",Object(r.b)("inlineCode",{parentName:"p"},"network")," or ",Object(r.b)("inlineCode",{parentName:"p"},"connected-networks")," option, can create an ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_mail_relay"},Object(r.b)("strong",{parentName:"a"},"open relay")),", ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver/issues/1405#issuecomment-590106498"},"for instance")," if IPv6 is enabled on the host machine but not in Docker. (",Object(r.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver/issues/1405"},"#1405"),")"),Object(r.b)("h3",{id:"how-can-i-authenticate-users-with-smtp_only"},"How can I authenticate users with SMTP_ONLY?"),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver/issues/1247"},"https://github.com/tomav/docker-mailserver/issues/1247")," for an example."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"ToDo: Write a HowTo/UseCase/Tutorial about authentication with SMTP_ONLY.")),Object(r.b)("h3",{id:"common-errors"},"Common errors"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"warning: connect to Milter service inet:localhost:8893: Connection refused\n# DMARC not running\n# => /etc/init.d/opendmarc restart\n\nwarning: connect to Milter service inet:localhost:8891: Connection refused\n# DKIM not running\n# => /etc/init.d/opendkim restart\n\nmail amavis[1459]: (01459-01) (!)connect to /var/run/clamav/clamd.ctl failed, attempt #1: Can't connect to a UNIX socket /var/run/clamav/clamd.ctl: No such file or directory\nmail amavis[1459]: (01459-01) (!)ClamAV-clamd: All attempts (1) failed connecting to /var/run/clamav/clamd.ctl, retrying (2)\nmail amavis[1459]: (01459-01) (!)ClamAV-clamscan av-scanner FAILED: /usr/bin/clamscan KILLED, signal 9 (0009) at (eval 100) line 905.\nmail amavis[1459]: (01459-01) (!!)AV: ALL VIRUS SCANNERS FAILED\n# Clamav is not running (not started or because you don't have enough memory)\n# => check requirements and/or start Clamav\n")),Object(r.b)("h3",{id:"using-behind-proxy"},"Using behind proxy"),Object(r.b)("p",null,"Add to ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/postfix/main.cf")," :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," \nproxy_interfaces = X.X.X.X (your public IP) \n\n")),Object(r.b)("h3",{id:"what-about-updates"},"What about updates"),Object(r.b)("p",null,"You can of course use a own script or every now and then pull && stop && rm && start the images but there are tools available for this.\nThere is a page in the ",Object(r.b)("a",{parentName:"p",href:"Update-and-cleanup"},"Update and cleanup")," wiki page that explains how to use it the docker way."),Object(r.b)("h3",{id:"howto-adjust-settings-with-the-user-patchessh-script"},"Howto adjust settings with the user-patches.sh script"),Object(r.b)("p",null,"Suppose you want to change a number of settings that are not listed as variables or add things to the server that are not included?"),Object(r.b)("p",null,"This docker-container has a built-in way to do post-install processes. If you place a script called ",Object(r.b)("strong",{parentName:"p"},"user-patches.sh")," in the config directory it will be run after all configuration files are set up, but before the postfix, amavis and other daemons are started."),Object(r.b)("p",null,"The config file I am talking about is this volume in the yml file: "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"- ./config/:/tmp/docker-mailserver/")),Object(r.b)("p",null,"To place such a script you can just make it in the config dir, for instance like this:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cd ./config")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"touch user-patches.sh")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"chmod +x  user-patches.sh")),Object(r.b)("p",null,"and then fill it with suitable code. "),Object(r.b)("p",null,"If you want to test it you can move into the running container, run it and see if it does what you want. For instance:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"./setup.sh debug login    # start shell in container")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cat /tmp/docker-mailserver/user-patches.sh  #check the file")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"/tmp/docker-mailserver/user-patches.sh  ## run the script")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"exit")),Object(r.b)("p",null,"You can do a lot of things with such a script. You can find an example user-patches.sh script here: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/hanscees/dockerscripts/blob/master/scripts/tomav-user-patches.sh"},"example user-patches.sh script")),Object(r.b)("h4",{id:"special-case-patching-supervisord-config"},"Special case patching supervisord config"),Object(r.b)("p",null,"It seems worth noting, that the ",Object(r.b)("inlineCode",{parentName:"p"},"user-patches.sh")," gets executed trough supervisord. If you need to patch some supervisord config (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/supervisor/conf.d/saslauth.conf"),"), the patching happens too late.\nAn easy workaround is to make the ",Object(r.b)("inlineCode",{parentName:"p"},"user-patches.sh")," reload the supervisord config after patching it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\nsed -i 's/rimap -r/rimap/' /etc/supervisor/conf.d/saslauth.conf\nsupervisorctl update\n")))}m.isMDXComponent=!0}}]);