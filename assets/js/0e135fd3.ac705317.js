"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[821],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={title:"NPM Workflows"},i=void 0,p={unversionedId:"other/npm-workflows",id:"other/npm-workflows",title:"NPM Workflows",description:"The /packages directory contains a number of NPM packages that are part of the core functionality of the project. These packages are listed under the WebDevStudios organization.",source:"@site/docs/other/npm-workflows.md",sourceDirName:"other",slug:"/other/npm-workflows",permalink:"/nextjs-wordpress-starter/docs/other/npm-workflows",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/docs/other/npm-workflows.md",tags:[],version:"current",lastUpdatedBy:"Jeffrey de Wit",lastUpdatedAt:1655839911,formattedLastUpdatedAt:"6/21/2022",frontMatter:{title:"NPM Workflows"},sidebar:"tutorialSidebar",previous:{title:"Internal Documentation for WDS",permalink:"/nextjs-wordpress-starter/docs/other/internal-documentation-for-wds"},next:{title:"Recommended Extensions",permalink:"/nextjs-wordpress-starter/docs/other/recommended-extensions"}},u={},c=[{value:"Testing Locally",id:"testing-locally",level:2},{value:"Publishing to NPM",id:"publishing-to-npm",level:2},{value:"Log into NPM",id:"log-into-npm",level:3},{value:"Bump the version",id:"bump-the-version",level:3},{value:"Publish a Release",id:"publish-a-release",level:3},{value:"Unpublish a Release",id:"unpublish-a-release",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages")," directory contains a number of NPM packages that are part of the core functionality of the project. These packages are listed under the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/webdevstudios"},"WebDevStudios organization"),"."),(0,o.kt)("h2",{id:"testing-locally"},"Testing Locally"),(0,o.kt)("p",null,"Instead of publishing a new release every time you make changes, use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm link")," to create a symlink to the package on your local. This allows you to test your changes without having to publish a release before it's ready."),(0,o.kt)("p",null,"It's a two step process. First, you create a symlink to the latest version of the package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/headless-core\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm link\n")),(0,o.kt)("p",null,"Second, use the symlink in another project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/basic\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm link @webdevstudios/headless-core\n")),(0,o.kt)("p",null,"Finally, you can install the package and test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @webdevstudios/headless-core\n")),(0,o.kt)("p",null,"After your testing checks out, you can safely publish to NPM. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-link"},"Learn more about NPM link"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"publishing-to-npm"},"Publishing to NPM"),(0,o.kt)("h3",{id:"log-into-npm"},"Log into NPM"),(0,o.kt)("p",null,"Before logging in, you must have an account on ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/"},"npmjs.com")," and be part of the WebDevStudios organization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm adduser\n")),(0,o.kt)("p",null,"Follow the prompts and enter your username, password, and two-factor authentication code (if enabled). ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-adduser"},"Learn more about NPM adduser"),"."),(0,o.kt)("h3",{id:"bump-the-version"},"Bump the version"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file and bump the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," number. For example, if the current version is ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0-main.1"),", then the next version will be ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0-main.2"),"."),(0,o.kt)("h3",{id:"publish-a-release"},"Publish a Release"),(0,o.kt)("p",null,"If you're publishing a ",(0,o.kt)("strong",{parentName:"p"},"stable release"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm publish --tag=latest --access=public\n")),(0,o.kt)("p",null,"If you're publishing a ",(0,o.kt)("strong",{parentName:"p"},"prerelease"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm publish --tag=next --access=public\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-publish"},"Learn more about NPM publish"),"."),(0,o.kt)("h3",{id:"unpublish-a-release"},"Unpublish a Release"),(0,o.kt)("p",null,"If something goes wrong with the release, you can unpublish it. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0-main.2")," is not working the following will remove it from NPM's registry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm unpublish @webdevstudios/headless-core@1.0.0-main.2\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-unpublish"},"Learn more about NPM unpublish"),"."))}d.isMDXComponent=!0}}]);