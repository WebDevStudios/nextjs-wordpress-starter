"use strict";(self.webpackChunk_webdevstudios_nextjs_wordpress_starter=self.webpackChunk_webdevstudios_nextjs_wordpress_starter||[]).push([[143],{"./components/blocks/core/BlockParagraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BlockParagraph});__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js");var RichText=__webpack_require__("./components/atoms/RichText/index.js"),getBlockStyles=__webpack_require__("./functions/wordpress/blocks/getBlockStyles.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockParagraph(_ref){var align=_ref.align,anchor=_ref.anchor,backgroundColorHex=_ref.backgroundColorHex,className=_ref.className,content=_ref.content,dropCap=_ref.dropCap,style=_ref.style,textColorHex=_ref.textColorHex,paragraphStyle=(0,getBlockStyles.Z)({backgroundColorHex,textColorHex,style});return(0,jsx_runtime.jsx)(RichText.Z,{className:classnames_default()(className,"center"===align?"text-center":null,align&&"left"!==align?null:"text-left","right"===align?"text-right":null),id:anchor,tag:"p",dropCap,style:paragraphStyle,children:content})}BlockParagraph.displayName="BlockParagraph",BlockParagraph.propTypes={align:prop_types_default().string,anchor:prop_types_default().string,backgroundColorHex:prop_types_default().string,className:prop_types_default().string,content:prop_types_default().string,dropCap:prop_types_default().bool,style:prop_types_default().object,textColorHex:prop_types_default().string},BlockParagraph.__docgenInfo={description:"Paragraph Block\n\nThe core Paragraph block from Gutenberg.\n\n@author WebDevStudios\n@param  {object}  props                    The component props.\n@param  {string}  props.backgroundColorHex The background color hex value.\n@param  {string}  props.className          Optional classnames.\n@param  {string}  props.align              Optional alignment style.\n@param  {string}  props.anchor             Optional anchor/id.\n@param  {string}  props.content            The content of the block.\n@param  {boolean} props.dropCap            Whether the paragraph has a drop cap.\n@param  {object}  props.style              The style attributes (Typography panel).\n@param  {string}  props.textColorHex       The text color hex value.\n@return {Element}                          The RichText component.",methods:[],displayName:"BlockParagraph",props:{align:{type:{name:"string"},required:!1,description:""},anchor:{type:{name:"string"},required:!1,description:""},backgroundColorHex:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},content:{type:{name:"string"},required:!1,description:""},dropCap:{type:{name:"bool"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},textColorHex:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/blocks/core/BlockParagraph/BlockParagraph.js"]={name:"BlockParagraph",docgenInfo:BlockParagraph.__docgenInfo,path:"components/blocks/core/BlockParagraph/BlockParagraph.js"})},"./functions/wordpress/blocks/getBlockStyles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getBlockStyles(_ref){var _style$color,_style$color2,_style$typography,_style$typography2,_style$color3,backgroundColorHex=_ref.backgroundColorHex,gradientHex=_ref.gradientHex,textColorHex=_ref.textColorHex,width=_ref.width,style=_ref.style,blockStyle={},background=gradientHex||(null==style||null===(_style$color=style.color)||void 0===_style$color?void 0:_style$color.gradient),backgroundcolor=backgroundColorHex||(null==style||null===(_style$color2=style.color)||void 0===_style$color2?void 0:_style$color2.background),fontsize=null==style||null===(_style$typography=style.typography)||void 0===_style$typography?void 0:_style$typography.fontSize,fontweight=null==style||null===(_style$typography2=style.typography)||void 0===_style$typography2?void 0:_style$typography2.fontWeight,textcolor=textColorHex||(null==style||null===(_style$color3=style.color)||void 0===_style$color3?void 0:_style$color3.text);return background&&(blockStyle.background=background),backgroundcolor&&(blockStyle.backgroundColor=backgroundcolor),fontsize&&(blockStyle.fontSize=fontsize),fontweight&&(blockStyle.fontWeight=fontweight),textcolor&&(blockStyle.color=textcolor),width&&(isNaN(width)?blockStyle.width=width:blockStyle.width=width+"%"),blockStyle}__webpack_require__.d(__webpack_exports__,{Z:()=>getBlockStyles})}}]);