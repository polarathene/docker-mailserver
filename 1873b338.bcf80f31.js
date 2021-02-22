(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,b=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(104)),i={id:"home",title:"Home",slug:"/"},c={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"Home",description:"Welcome to the extended documentation for docker-mailserver!",source:"@site/docs/Home.md",slug:"/",permalink:"/docker-mailserver/",editUrl:"https://github.com/polarathene/docker-mailserver/tree/docs/docusaurus-demo/website/docs/Home.md",version:"current",sidebar:"docs",next:{title:"An Introduction to Mail Servers",permalink:"/docker-mailserver/introduction"}},l=[{value:"Welcome to the extended documentation for docker-mailserver!",id:"welcome-to-the-extended-documentation-for-docker-mailserver",children:[]}],s={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"welcome-to-the-extended-documentation-for-docker-mailserver"},"Welcome to the extended documentation for docker-mailserver!"),Object(a.b)("p",null,"Please first have a look at the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/docker-mailserver/docker-mailserver/blob/master/README.md"},Object(a.b)("inlineCode",{parentName:"a"},"README.md"))," to setup and configure this server. This wiki provides you with advanced configuration, detailed examples, hints - see navigation on the right side."),Object(a.b)("h4",{id:"to-get-you-started"},"To get you started"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The script ",Object(a.b)("inlineCode",{parentName:"li"},"setup.sh")," is supplied with this project. It supports you in ",Object(a.b)("strong",{parentName:"li"},"configuring and administrating")," your server. Information on how to get it and how to use it is available ",Object(a.b)("a",{parentName:"li",href:"https://github.com/docker-mailserver/docker-mailserver/wiki/setup.sh"},"on a dedicated page"),"."),Object(a.b)("li",{parentName:"ol"},"Be aware that advanced tasks may still require tweaking environment variables, reading through documentation and sometimes inspecting your running container for debugging purposes. After all, a mail server is a complex arrangement of various programs."),Object(a.b)("li",{parentName:"ol"},"A list of all configuration options is provided in ",Object(a.b)("a",{parentName:"li",href:"https://github.com/docker-mailserver/docker-mailserver/blob/master/ENVIRONMENT.md"},Object(a.b)("inlineCode",{parentName:"a"},"ENVIRONMENT.md")),". The ",Object(a.b)("a",{parentName:"li",href:"https://github.com/docker-mailserver/docker-mailserver/blob/master/REEADME.md"},Object(a.b)("inlineCode",{parentName:"a"},"README.md"))," is a good starting point to understand what this image is capable of."),Object(a.b)("li",{parentName:"ol"},"A list of all optional and automatically created configuration files and directories is available ",Object(a.b)("a",{parentName:"li",href:"https://github.com/docker-mailserver/docker-mailserver/wiki/List-of-optional-config-files-&-directories"},"on the dedicated page"),"."),Object(a.b)("li",{parentName:"ol"},"See the ",Object(a.b)("a",{parentName:"li",href:"https://github.com/docker-mailserver/docker-mailserver/wiki/FAQ-and-Tips"},"FAQ")," for some more tips!")))}d.isMDXComponent=!0}}]);