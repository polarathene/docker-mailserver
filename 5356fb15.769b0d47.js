(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(a,".").concat(p)]||d[p]||b[p]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(125)),a={id:"debugging",title:"Debugging"},l={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging",description:"..todo..  - Please contribute more to help others debug this package",source:"@site/docs/Debugging.md",slug:"/debugging",permalink:"/docker-mailserver/docs/debugging",editUrl:"https://github.com/polarathene/docker-mailserver/tree/docs/docusaurus-demo/website/docs/Debugging.md",version:"current",sidebar:"docs",previous:{title:"Configure Fail2Ban",permalink:"/docker-mailserver/docs/config-fail2ban"},next:{title:"FAQ and Tips",permalink:"/docker-mailserver/docs/faq"}},c=[{value:"Enable verbose debugging output",id:"enable-verbose-debugging-output",children:[]},{value:"Invalid username or Password",id:"invalid-username-or-password",children:[]},{value:"Installation Errors",id:"installation-errors",children:[]},{value:"Testing Connection",id:"testing-connection",children:[]},{value:"Send email is never received",id:"send-email-is-never-received",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"..todo..  - Please contribute more to help others debug this package"),Object(i.b)("h2",{id:"enable-verbose-debugging-output"},"Enable verbose debugging output"),Object(i.b)("p",null,"You may find it useful to enable the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/tomav/docker-mailserver#dms_debug"},"DMS_DEBUG")," environment variable."),Object(i.b)("h2",{id:"invalid-username-or-password"},"Invalid username or Password"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Login Container")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker exec -it <mycontainer> bash\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Check log files")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/var/log/mail"),"\ncould not find any mention of incorrect logins here\nneither in the dovecot logs"),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check the supervisors logfiles\n",Object(i.b)("inlineCode",{parentName:"p"},"/var/log/supervisor"),"\nYou can find the logs for startup of fetchmail, postfix and others here - they might indicate problems during startup")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make sure you set your hostname to 'mail' or whatever you specified in your docker-compose.yml file or else your FQDN will be wrong"))),Object(i.b)("h2",{id:"installation-errors"},"Installation Errors"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"During setup, if you get errors trying to edit files inside of the container, you likely need to install vi:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo su\ndocker exec -it <mycontainer> apt-get install -y vim\n")),Object(i.b)("h2",{id:"testing-connection"},"Testing Connection"),Object(i.b)("p",null,'I spent HOURS trying to debug "Connection Refused" and "Connection closed by foreign host" errors when trying to use telnet to troubleshoot my connection. I was also trying to connect from my email client (macOS mail) around the same time. Telnet had also worked earlier, so I was extremely confused as to why it suddenly stopped working. I stumbled upon fail2ban.log in my container. In short, when trying to get my macOS client working, I exceeded the number of failed login attempts and fail2ban put dovecot and postfix in jail! I got around it by whitelisting my ipaddresses (my ec2 instance and my local computer)'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"sudo su\ndocker exec -ti mail bash\ncd /var/log\ncat fail2ban.log | grep dovecot\n\n# Whitelist ip addresses:\nfail2ban-client set dovecot addignoreip <server ip>  # Server\nfail2ban-client set postfix addignoreip <server ip>\nfail2ban-client set dovecot addignoreip <client ip>  # Client\nfail2ban-client set postfix addignoreip <client ip>\n\n# this will delete the jails entirely - nuclear option\nfail2ban-client stop dovecot\nfail2ban-client stop postfix\n")),Object(i.b)("h2",{id:"send-email-is-never-received"},"Send email is never received"),Object(i.b)("p",null,"Some hosting provides have a stealth block on port 25. Make sure to check with your hosting provider that traffic on port 25 is allowed"),Object(i.b)("p",null,"Common hosting providers known to have this issue:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-network/troubleshoot-outbound-smtp-connectivity"},"Azure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/ec2-port-25-throttle/"},"AWS EC2"))))}u.isMDXComponent=!0}}]);