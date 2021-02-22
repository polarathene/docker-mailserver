(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{104:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return f}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(i),b=n,f=d["".concat(o,".").concat(b)]||d[b]||m[b]||a;return i?r.a.createElement(f,l(l({ref:t},c),{},{components:i})):r.a.createElement(f,l({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},84:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(3),r=i(7),a=(i(0),i(104)),o={id:"email-sieve",title:"Email filtering with Sieve Filters"},l={unversionedId:"email-sieve",id:"email-sieve",isDocsHomePage:!1,title:"Email filtering with Sieve Filters",description:"User-defined sieve filters",source:"@site/docs/Configure-Sieve-filters.md",slug:"/email-sieve",permalink:"/docker-mailserver/email-sieve",editUrl:"https://github.com/polarathene/docker-mailserver/tree/docs/docusaurus-demo/website/docs/Configure-Sieve-filters.md",version:"current",sidebar:"docs",previous:{title:"Override the default config of Postfix",permalink:"/docker-mailserver/override-postfix"},next:{title:"Email gathering with fetchmail",permalink:"/docker-mailserver/email-fetchmail"}},s=[{value:"User-defined sieve filters",id:"user-defined-sieve-filters",children:[]},{value:"Manage Sieve",id:"manage-sieve",children:[]}],c={toc:s};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"user-defined-sieve-filters"},"User-defined sieve filters"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://sieve.info/"},"Sieve")," allows to specify filtering rules for incoming emails that allow for example sorting mails into different folders depending on the title of an email.\nThere are global and user specific filters which are filtering the incoming emails in the following order:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Global-before -> User specific -> Global-after")),Object(a.b)("p",null,"Global filters are applied to EVERY incoming mail for EVERY email address.\nTo specify a global Sieve filter provide a ",Object(a.b)("inlineCode",{parentName:"p"},"config/before.dovecot.sieve")," or a ",Object(a.b)("inlineCode",{parentName:"p"},"config/after.dovecot.sieve")," file with your filter rules.\nIf any filter in this filtering chain discards an incoming mail, the delivery process will stop as well and the mail will not reach any following filters(e.g. global-before stops an incoming spam mail: The mail will get discarded and a user-specific filter won't get applied.)"),Object(a.b)("p",null,"To specify a user-defined Sieve filter place a ",Object(a.b)("inlineCode",{parentName:"p"},".dovecot.sieve")," file into a virtual user's mail folder e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"/var/mail/domain.com/user1/.dovecot.sieve"),". If this file exists dovecot will apply the filtering rules."),Object(a.b)("p",null,"It's even possible to install a user provided Sieve filter at startup during users setup: simply include a Sieve file in the ",Object(a.b)("inlineCode",{parentName:"p"},"config "),"path for each user login that need a filter. The file name provided should be in the form ",Object(a.b)("strong",{parentName:"p"},"\\<user_login",">",".dovecot.sieve"),", so for example for ",Object(a.b)("inlineCode",{parentName:"p"},"user1@domain.tld")," you should provide a Sieve file named ",Object(a.b)("inlineCode",{parentName:"p"},"config/user1@domain.tld.dovecot.sieve"),"."),Object(a.b)("p",null,"An example of a sieve filter that moves mails to a folder ",Object(a.b)("inlineCode",{parentName:"p"},"INBOX/spam")," depending on the sender address:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'require ["fileinto", "reject"];\n\nif address :contains ["From"] "spam@spam.com" {\n   fileinto "INBOX.spam";\n} else {\n     keep;\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Note:"))," that folders have to exist beforehand if sieve should move them."),Object(a.b)("p",null,"Another example of a sieve filter that forward mails to a different address:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'require ["copy"];\n\nredirect :copy "user2@otherdomain.tld";\n')),Object(a.b)("p",null,"Just forward all incoming emails and do not save them locally:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'redirect "user2@otherdomain.tld";\n')),Object(a.b)("p",null,"You can also use external programs to filter or pipe (process) messages by adding executable scripts in ",Object(a.b)("inlineCode",{parentName:"p"},"config/sieve-pipe")," or ",Object(a.b)("inlineCode",{parentName:"p"},"config/sieve-filter"),". This can be used in lieu of a local alias file, for instance to forward an email to a webservice. These programs can then be referenced by filename, by all users. Note that the process running the scripts run as a privileged user. For further information see ",Object(a.b)("a",{parentName:"p",href:"https://wiki.dovecot.org/Pigeonhole/Sieve/Plugins/Pipe"},"Dovecot's wiki"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'require ["vnd.dovecot.pipe"];\npipe "external-program";\n')),Object(a.b)("p",null,"For more examples or a detailed description of the Sieve language have a look at ",Object(a.b)("a",{parentName:"p",href:"http://sieve.info/examplescripts"},"the official site"),". Other resources are available on the internet where you can find several ",Object(a.b)("a",{parentName:"p",href:"https://support.tigertech.net/sieve#sieve-example-rules-jmp"},"examples"),"."),Object(a.b)("h3",{id:"manage-sieve"},"Manage Sieve"),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://doc.dovecot.org/admin_manual/pigeonhole_managesieve_server/"},"Manage Sieve")," extension allows users to modify their Sieve script by themselves. The authentication mechanisms are the same as for the main dovecot service. ManageSieve runs on port ",Object(a.b)("inlineCode",{parentName:"p"},"4190")," and needs to be enabled using the ",Object(a.b)("inlineCode",{parentName:"p"},"ENABLE_MANAGESIEVE=1")," environment variable."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'(docker-compose.yml)\nports:\n - ...\n - "4190:4190"\nenvironment:\n - ...\n - ENABLE_MANAGESIEVE=1\n')),Object(a.b)("p",null,"All user defined sieve scripts that are managed by ManageSieve are stored in the user's home folder in ",Object(a.b)("inlineCode",{parentName:"p"},"/var/mail/domain.com/user1/sieve"),". Just one sieve script might be active for a user and is sym-linked to ",Object(a.b)("inlineCode",{parentName:"p"},"/var/mail/domain.com/user1/.dovecot.sieve")," automatically."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Note:"))," ManageSieve makes sure to not overwrite an existing ",Object(a.b)("inlineCode",{parentName:"p"},".dovecot.sieve")," file. If a user activates a new sieve script the old one is backuped and moved to the ",Object(a.b)("inlineCode",{parentName:"p"},"sieve")," folder."),Object(a.b)("p",null,"The extension is known to work with the following ManageSieve clients:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Sieve Editor"),"  a portable standalone application based on the former Thunderbird plugin (",Object(a.b)("a",{parentName:"li",href:"https://github.com/thsmi/sieve"},"https://github.com/thsmi/sieve"),").")))}p.isMDXComponent=!0}}]);