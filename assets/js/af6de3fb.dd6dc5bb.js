"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[103],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,b=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Docusaurus"},u=void 0,d={unversionedId:"other/docusaurus",id:"other/docusaurus",title:"Docusaurus",description:"The documentation website is powered by Docusaurus and served from Github Pages.",source:"@site/docs/other/docusaurus.md",sourceDirName:"other",slug:"/other/docusaurus",permalink:"/nextjs-wordpress-starter/docs/other/docusaurus",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/docs/other/docusaurus.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1646168973,formattedLastUpdatedAt:"3/1/2022",frontMatter:{title:"Docusaurus"},sidebar:"tutorialSidebar",previous:{title:"3rd Party Services",permalink:"/nextjs-wordpress-starter/docs/other/3rd-party-services"},next:{title:"Internal Documentation for WDS",permalink:"/nextjs-wordpress-starter/docs/other/internal-documentation-for-wds"}},s=[{value:"Adding or Updating Documentation",id:"adding-or-updating-documentation",children:[],level:2},{value:"Local Development",id:"local-development",children:[{value:"NPM Scripts",id:"npm-scripts",children:[],level:3},{value:"Github Actions",id:"github-actions",children:[],level:3},{value:"Key Pair",id:"key-pair",children:[{value:"ENV Variables",id:"env-variables",children:[],level:4}],level:3}],level:2}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The documentation website is powered by ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," and served from Github Pages."),(0,o.kt)("h2",{id:"adding-or-updating-documentation"},"Adding or Updating Documentation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new branch off ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," (e.g,. ",(0,o.kt)("inlineCode",{parentName:"li"},"feature/my-doc-update"),")"),(0,o.kt)("li",{parentName:"ol"},"From the root of the project, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run dev:docs")," to start a local server"),(0,o.kt)("li",{parentName:"ol"},"Add or edit markdown files in the ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/")," directory"),(0,o.kt)("li",{parentName:"ol"},"Commit your changes and push to Github"),(0,o.kt)("li",{parentName:"ol"},"Open a Pull Request and mark it as ready for review")),(0,o.kt)("h2",{id:"local-development"},"Local Development"),(0,o.kt)("h3",{id:"npm-scripts"},"NPM Scripts"),(0,o.kt)("p",null,"You can run the following commands from the root of the project:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm run dev:docs")),(0,o.kt)("td",{parentName:"tr",align:null},"Start a local dev server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm run lint:docs ")),(0,o.kt)("td",{parentName:"tr",align:null},"Format and lint markdown files")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm run build:docs")),(0,o.kt)("td",{parentName:"tr",align:null},"Run a build locally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm run serve:docs ")),(0,o.kt)("td",{parentName:"tr",align:null},"Serve a statically generated version of the docs locally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm run publish:docs")),(0,o.kt)("td",{parentName:"tr",align:null},"Publish the docs to Github Pages (used by Github Actions)")))),(0,o.kt)("h3",{id:"github-actions"},"Github Actions"),(0,o.kt)("p",null,"This repo uses a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebDevStudios/nextjs-wordpress-starter/tree/main/.github/workflows"},"Github Action")," which automatically publishes changes to Github Pages."),(0,o.kt)("h3",{id:"key-pair"},"Key Pair"),(0,o.kt)("p",null,"The Github Action requires a key pair to be set up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t ed25519 -C "your_email@example.com"\n')),(0,o.kt)("p",null,"Copy the public key and add it to ",(0,o.kt)("inlineCode",{parentName:"p"},"Github Repo --\x3e Settings --\x3e Deploy Keys"),". The Private Key will be added as an ENV variable (see below)."),(0,o.kt)("h4",{id:"env-variables"},"ENV Variables"),(0,o.kt)("p",null,"The following ENV variables are required by ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run publish:docs")," command. They must be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"Github Repo --\x3e Settings --\x3e Secrets --\x3e Actions")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"ENV Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GH_PAGES_PRIVATE_KEY")),(0,o.kt)("td",{parentName:"tr",align:null},"Private key used to deploy to Github Pages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GIT_USER_EMAIL")),(0,o.kt)("td",{parentName:"tr",align:null},"Email address used to commit to Github.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GIT_USER_NAME")),(0,o.kt)("td",{parentName:"tr",align:null},"Name used to commit to Github")))))}c.isMDXComponent=!0}}]);