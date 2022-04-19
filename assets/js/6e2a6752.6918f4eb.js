"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[374],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"Backend Setup"},i=void 0,p={unversionedId:"backend/index",id:"backend/index",title:"Backend Setup",description:"Turning WordPress into a Headless CMS isn't straightforward, so grab a cup of \u2615\ufe0f because following these steps will take ~20 minutes.",source:"@site/docs/backend/index.md",sourceDirName:"backend",slug:"/backend/",permalink:"/nextjs-wordpress-starter/docs/backend/",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/docs/backend/index.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1650385808,formattedLastUpdatedAt:"4/19/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Backend Setup"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/nextjs-wordpress-starter/docs/"},next:{title:"wp-config.php",permalink:"/nextjs-wordpress-starter/docs/backend/wp-config"}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"WordPress Setup",id:"wordpress-setup",level:2},{value:"Step 1: Install WordPress",id:"step-1-install-wordpress",level:3},{value:"Step 2: Install Plugins and Theme",id:"step-2-install-plugins-and-theme",level:3},{value:"Step 3: Configure <code>wp-config.php</code>",id:"step-3-configure-wp-configphp",level:3},{value:"Step 4: Create Pages",id:"step-4-create-pages",level:3},{value:"Step 5: Set Page Options",id:"step-5-set-page-options",level:3},{value:"Step 6: Set Permalinks",id:"step-6-set-permalinks",level:3},{value:"Step 7: Set Menus",id:"step-7-set-menus",level:3},{value:"Plugins Setup",id:"plugins-setup",level:2},{value:"Update Block Registry",id:"update-block-registry",level:3},{value:"Application Password",id:"application-password",level:3},{value:"WP Search with Algolia",id:"wp-search-with-algolia",level:3},{value:"Gravity Forms",id:"gravity-forms",level:3},{value:"Enable Previews",id:"enable-previews",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Turning WordPress into a Headless CMS isn't straightforward, so grab a cup of \u2615\ufe0f because following these steps will take ~20 minutes."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The following instructions assume you'll be standing up a fresh local install of WordPress.")),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Make sure you have the following dependencies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://getcomposer.org/"},"Composer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.gravityforms.com/"},"Gravity Forms")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://localwp.com/"},"Local WP")," (or Docker or VVV or whatever you prefer as a WordPress development tool)")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"wordpress-setup"},"WordPress Setup"),(0,s.kt)("h3",{id:"step-1-install-wordpress"},"Step 1: Install WordPress"),(0,s.kt)("p",null,"Create a new WordPress install. We recommend the following settings:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Either NGINX or Apache"),(0,s.kt)("li",{parentName:"ul"},"PHP 7.4+"),(0,s.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,s.kt)("li",{parentName:"ul"},"Enable SSL certificate")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of local wp",src:n(2995).Z,width:"1986",height:"1294"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"step-2-install-plugins-and-theme"},"Step 2: Install Plugins and Theme"),(0,s.kt)("p",null,"Now that you've got a local WordPress install, it's time to turn it into a Headless CMS!"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In your terminal, change directories to your new WordPress install's ",(0,s.kt)("inlineCode",{parentName:"li"},"/wp-content")," directory, then download our ",(0,s.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/WebDevStudios/nextjs-wordpress-starter/main/backend/composer.json"},(0,s.kt)("inlineCode",{parentName:"a"},"composer.json")),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://raw.githubusercontent.com/WebDevStudios/nextjs-wordpress-starter/main/backend/composer.json\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Install free plugins and the theme:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"composer install\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Install premium plugin: ",(0,s.kt)("a",{parentName:"p",href:"https://www.gravityforms.com/"},"Gravity Forms"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Activate all plugins and theme in the WP Dashboard or use ",(0,s.kt)("a",{parentName:"p",href:"https://wp-cli.org/"},"WP CLI"),":"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wp plugin activate --all\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wp theme activate wds-headless-theme\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"step-3-configure-wp-configphp"},"Step 3: Configure ",(0,s.kt)("inlineCode",{parentName:"h3"},"wp-config.php")),(0,s.kt)("p",null,"The follow constants needs to be in ",(0,s.kt)("inlineCode",{parentName:"p"},"wp-config.php"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"define( 'HEADLESS_FRONTEND_URL', 'http://localhost:3000/' );\ndefine( 'PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');\ndefine( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'ANY_RANDOM_STRING' );\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To generate a random strings, we recommend using the ",(0,s.kt)("a",{parentName:"p",href:"https://api.wordpress.org/secret-key/1.1/salt/"},"WordPress Salt Generator"),". Just copy and paste any of the generated strings into the constants above.")),(0,s.kt)("p",null,"Learn more about setting up ",(0,s.kt)("a",{parentName:"p",href:"/docs/backend/wp-config"},"wp-config.php"),"."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"step-4-create-pages"},"Step 4: Create Pages"),(0,s.kt)("p",null,"In the WordPress Dashboard, navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"Pages -> Add New")),(0,s.kt)("p",null,"Create three blank pages named:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Homepage"),(0,s.kt)("li",{parentName:"ol"},"Blog"),(0,s.kt)("li",{parentName:"ol"},"404")),(0,s.kt)("p",null,"There's nothing else needed for this step."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"step-5-set-page-options"},"Step 5: Set Page Options"),(0,s.kt)("p",null,"In the WordPress Dashboard, navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},'Settings -> Reading -> "Your homepage displays"')," and set static pages for Homepage and Posts page:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot",src:n(1969).Z,width:"479",height:"180"})),(0,s.kt)("p",null,"Now navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"Settings -> Headless Config -> Custom Page Options")," and set the custom 404 page:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot",src:n(3025).Z,width:"950",height:"258"})),(0,s.kt)("p",null,"You should now see your Homepage, Blog, and 404 page like so:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot",src:n(8027).Z,width:"625",height:"588"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"step-6-set-permalinks"},"Step 6: Set Permalinks"),(0,s.kt)("p",null,"In the WordPress Dashboard, navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"Settings -> Permalinks")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Select the ",(0,s.kt)("inlineCode",{parentName:"li"},"Day and name")," structure:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"/%year%/%monthnum%/%day%/%postname%/\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Save the settings.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of saving the settings",src:n(4091).Z,width:"617",height:"156"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"step-7-set-menus"},"Step 7: Set Menus"),(0,s.kt)("p",null,"You'll need to create at least one menu, ",(0,s.kt)("inlineCode",{parentName:"p"},"Primary"),". Additionally, you can create a Mobile and Footer menu. In the WordPress Dashboard, navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"Appearance -> Menus")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Menu Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"Primary")),(0,s.kt)("li",{parentName:"ol"},"Display location: ",(0,s.kt)("inlineCode",{parentName:"li"},"Primary Menu")),(0,s.kt)("li",{parentName:"ol"},'Click "Save Menu"'),(0,s.kt)("li",{parentName:"ol"},"Add menu items as needed")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of setting the menu",src:n(6987).Z,width:"1275",height:"677"})),(0,s.kt)("h2",{id:"plugins-setup"},"Plugins Setup"),(0,s.kt)("h3",{id:"update-block-registry"},"Update Block Registry"),(0,s.kt)("p",null,"In order for the WP GraphQL Gutenberg plugin to create ",(0,s.kt)("inlineCode",{parentName:"p"},"blockJSON"),", you'll need to click this button to update the block registry:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GraphQL Gutenberg -> Update")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of updating graphql gutenberg",src:n(8713).Z,width:"951",height:"675"})),(0,s.kt)("h3",{id:"application-password"},"Application Password"),(0,s.kt)("p",null,"The frontend will need to authenticate with WordPress, we can use ",(0,s.kt)("a",{parentName:"p",href:"https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/"},"Application Passwords"),"."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Users -> Profile -> Scroll to the bottom")),(0,s.kt)("li",{parentName:"ol"},"Enter a name, e.g, ",(0,s.kt)("inlineCode",{parentName:"li"},"nextjs-wordpress-starter")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Click -> Add New Application Password"))),(0,s.kt)("p",null,"Copy and paste the password into a safe location. You will need to add both your ",(0,s.kt)("strong",{parentName:"p"},"WordPress username")," and Application password to the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file for the frontend. Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/frontend/env-variables"},"ENV Variables"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot of setting application password",src:n(9026).Z,width:"798",height:"381"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"wp-search-with-algolia"},"WP Search with Algolia"),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://webdevstudios.github.io/nextjs-wordpress-starter/docs/backend/algolia"},"WDS Headless Algolia documentation"),"."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gravity-forms"},"Gravity Forms"),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://webdevstudios.github.io/nextjs-wordpress-starter/docs/backend/gravity-forms"},"WDS Headless Gravity Forms documentation"),"."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"enable-previews"},"Enable Previews"),(0,s.kt)("p",null,"To enable previews, you'll need both a ",(0,s.kt)("inlineCode",{parentName:"p"},"PREVIEW_SECRET_TOKEN")," constant in ",(0,s.kt)("inlineCode",{parentName:"p"},"wp-config.php")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"WORDPRESS_PREVIEW_SECRET")," ENV variable in the frontend ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The token can be any random string, as long as they match in both locations!")),(0,s.kt)("p",null,"WordPress:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"// wp-config.php\ndefine('PREVIEW_SECRET_TOKEN', 'ANY_RANDOM_STRING');\n")),(0,s.kt)("p",null,"Next.js:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// .env\nWORDPRESS_PREVIEW_SECRET = 'ANY_RANDOM_STRING'\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"next-steps"},"Next Steps"),(0,s.kt)("p",null,"Now that WordPress is ready, head on over and set up the ",(0,s.kt)("a",{parentName:"p",href:"/docs/frontend"},"Frontend")," to continue."))}m.isMDXComponent=!0},8713:function(e,t,n){t.Z=n.p+"assets/images/screenshot-activate-graphql-gutenberg-56d37074e097320791ceaef98ede13ae.png"},2995:function(e,t,n){t.Z=n.p+"assets/images/screenshot-local-by-flywheel-cef9536b645dc135f11a0ba1e46f8f7a.png"},8027:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-404-page-2-24d17ef2d2f00239f183fb40763c1f24.png"},3025:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-404-page-0ef619454f0b78398ab9de5faeaa22cb.png"},9026:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-application-password-0903a700c4b2d7fc31549c187adaaa2b.png"},6987:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-menus-b92d2e34a05abd58eae66cd43c048d4e.png"},1969:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-page-options-c3cb680aef1570427bd25807975b8c90.png"},4091:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-permalinks-93ef298e7047af5c3e82820209f7557c.png"}}]);