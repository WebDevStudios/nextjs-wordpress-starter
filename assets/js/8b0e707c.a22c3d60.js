"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[447],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={title:"wp-config.php",sidebar_position:2},s=void 0,l={unversionedId:"backend/wp-config",id:"backend/wp-config",title:"wp-config.php",description:"There are three constants required in wp-config.php to help Next.js work with WordPress.",source:"@site/docs/backend/wp-config.md",sourceDirName:"backend",slug:"/backend/wp-config",permalink:"/nextjs-wordpress-starter/docs/backend/wp-config",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/docs/backend/wp-config.md",tags:[],version:"current",lastUpdatedBy:"Jeffrey de Wit",lastUpdatedAt:1655839911,formattedLastUpdatedAt:"6/21/2022",sidebarPosition:2,frontMatter:{title:"wp-config.php",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backend Setup",permalink:"/nextjs-wordpress-starter/docs/backend/"},next:{title:"Algolia",permalink:"/nextjs-wordpress-starter/docs/backend/algolia"}},c={},d=[{value:"Constants",id:"constants",level:2},{value:"HEADLESS_FRONTEND_URL",id:"headless_frontend_url",level:3},{value:"PREVIEW_SECRET_TOKEN",id:"preview_secret_token",level:3},{value:"GRAPHQL_JWT_AUTH_SECRET_KEY",id:"graphql_jwt_auth_secret_key",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three constants required in ",(0,a.kt)("inlineCode",{parentName:"p"},"wp-config.php")," to help Next.js work with WordPress."),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("h3",{id:"headless_frontend_url"},"HEADLESS_FRONTEND_URL"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HEADLESS_FRONTEND_URL")," constant will forward users in the WordPress dashboard to the Next.js frontend when clicking certain links, like Preview."),(0,a.kt)("p",null,"This need to be whatever your Next.js frontend is-- and could be different depending on your environment setup."),(0,a.kt)("p",null,"For example, on your local it would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// local wp-config.php\ndefine('HEADLESS_FRONTEND_URL', 'http://localhost:3000/');\n")),(0,a.kt)("p",null,"On production, your URL probably needs to point at the production version of the frontend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// production wp-config.php\ndefine('HEADLESS_FRONTEND_URL', 'https://mywebsite.com');\n")),(0,a.kt)("h3",{id:"preview_secret_token"},"PREVIEW_SECRET_TOKEN"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PREVIEW_SECRET_TOKEN")," is so Next.js can authenticate with WordPress in order to show post and page previews. It can be any random string, as long as it matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"WORDPRESS_PREVIEW_SECRET")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/frontend/env-variables#list-of-env-variables"},"ENV variable")," on the frontend."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Any random string\ndefine('PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');\n")),(0,a.kt)("h3",{id:"graphql_jwt_auth_secret_key"},"GRAPHQL_JWT_AUTH_SECRET_KEY"),(0,a.kt)("p",null,"The `GRAPHQL_JWT_AUTH_SECRET_KEY allows the frontend to auth with the backend. Learn more about setting up the ",(0,a.kt)("a",{parentName:"p",href:"https://www.wpgraphql.com/extenstion-plugins/wpgraphql-jwt-authentication/"},"WPGraphQL JWT plugin"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'YOUR_JWT_SECRET_KEY');\n")))}f.isMDXComponent=!0}}]);