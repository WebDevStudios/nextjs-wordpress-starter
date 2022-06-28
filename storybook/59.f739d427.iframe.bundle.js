"use strict";(self.webpackChunk_webdevstudios_nextjs_wordpress_starter=self.webpackChunk_webdevstudios_nextjs_wordpress_starter||[]).push([[59],{"./components/blocks/core/BlockButtons/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BlockButtons});__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js");var Blocks=__webpack_require__("./components/molecules/Blocks/index.js"),ButtonGroup=__webpack_require__("./components/molecules/ButtonGroup/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockButtons(_ref){var anchor=_ref.anchor,contentJustification=_ref.contentJustification,innerBlocks=_ref.innerBlocks,orientation=_ref.orientation;return(0,jsx_runtime.jsx)(ButtonGroup.Z,{id:anchor,orientation,contentJustification,children:!(null==innerBlocks||!innerBlocks.length)&&(0,jsx_runtime.jsx)(Blocks.Z,{blocks:innerBlocks})})}BlockButtons.displayName="BlockButtons",BlockButtons.propTypes={anchor:prop_types_default().string,contentJustification:prop_types_default().string,innerBlocks:prop_types_default().arrayOf(prop_types_default().shape({name:prop_types_default().string,attributes:prop_types_default().object})),orientation:prop_types_default().string},BlockButtons.defaultProps={options:prop_types_default().shape({orientation:"horizontal",contentJustification:"left"})},BlockButtons.__docgenInfo={description:"Buttons Block\n\nThe core Buttons block from Gutenberg.\n\n@author WebDevStudios\n@param  {object}  props                      The component properties.\n@param  {string}  props.anchor               Optional anchor/id.\n@param  {string}  props.contentJustification The justification of the buttons.\n@param  {Array}   props.innerBlocks          The array of inner blocks to display.\n@param  {string}  props.orientation          The orientation of buttons.\n@return {Element}                            The Buttons component.",methods:[],displayName:"BlockButtons",props:{options:{defaultValue:{value:"PropTypes.shape({\n  orientation: 'horizontal',\n  contentJustification: 'left'\n})",computed:!0},required:!1},anchor:{type:{name:"string"},required:!1,description:""},contentJustification:{type:{name:"string"},required:!1,description:""},innerBlocks:{type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!1},attributes:{name:"object",required:!1}}}},required:!1,description:""},orientation:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/blocks/core/BlockButtons/BlockButtons.js"]={name:"BlockButtons",docgenInfo:BlockButtons.__docgenInfo,path:"components/blocks/core/BlockButtons/BlockButtons.js"})}}]);