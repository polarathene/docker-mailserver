(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),f=t,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return r?o.a.createElement(m,c(c({ref:n},u),{},{components:r})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(104)),i={id:"config-pop3",title:"Mail delivery with POP3"},c={unversionedId:"config-pop3",id:"config-pop3",isDocsHomePage:!1,title:"Mail delivery with POP3",description:"We do not recommend using POP. Use IMAP instead.",source:"@site/docs/Configure-POP3.md",slug:"/config-pop3",permalink:"/docker-mailserver/config-pop3",editUrl:"https://github.com/polarathene/docker-mailserver/tree/docs/docusaurus-demo/website/docs/Configure-POP3.md",version:"current",sidebar:"docs",previous:{title:"FAQ and Tips",permalink:"/docker-mailserver/faq"},next:{title:"Optional Configuration",permalink:"/docker-mailserver/optional-configuration"}},p=[],u={toc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"We do not recommend using POP. Use IMAP instead.")),Object(a.b)("p",null,"If you really want to have POP3 running, add 3 lines to the docker-compose.yml :",Object(a.b)("br",{parentName:"p"}),"\n","Add the ports 110 and 995, and add environment variable ENABLE_POP : "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'mail:\n  [...]\n  ports:\n  - "25:25"\n  - "143:143"\n  - "587:587"\n  - "993:993"\n  - "110:110"\n  - "995:995" \n  environment:\n  - ENABLE_POP3=1\n')))}l.isMDXComponent=!0}}]);