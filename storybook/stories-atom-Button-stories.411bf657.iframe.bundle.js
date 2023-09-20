"use strict";(self.webpackChunkgsp_front=self.webpackChunkgsp_front||[]).push([[844],{"./src/stories/atom/Button.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_home_runner_work_gsp_front_gsp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Component/atom/Button",component:__webpack_require__("./src/component/atom/Button/Button.tsx").Z,parameters:{layout:"centered"}};__webpack_exports__.default=meta;var Primary={args:{context:"disabled",label:"Button"}};Primary.parameters=(0,_home_runner_work_gsp_front_gsp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_gsp_front_gsp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Primary.parameters),{},{docs:(0,_home_runner_work_gsp_front_gsp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_gsp_front_gsp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,_home_runner_work_gsp_front_gsp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    context: 'disabled',\n    label: 'Button'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/component/atom/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function Button(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"m":_ref$size,_ref$label=_ref.label,label=void 0===_ref$label?"Button":_ref$label,_ref$context=_ref.context,context=void 0===_ref$context?"disabled":_ref$context,_ref$fill=_ref.fill,fill=void 0!==_ref$fill&&_ref$fill,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,onClick=_ref.onClick,BTN_COLOR={color:{disabled:fill?"#fff":"#666",primary:fill?"#fff":"#007bff",danger:fill?"#fff":"#dc3545",success:fill?"#fff":"#28a745",warning:fill?"#fff":"#ffc107"},backgroundColor:{disabled:fill?"#b6b6b6":"#fff",primary:fill?"#007bff":"#fff",danger:fill?"#dc3545":"#fff",success:fill?"#28a745":"#fff",warning:fill?"#ffc107":"#fff"},border:{disabled:"#b6b6b6",primary:"#007bff",danger:"#dc3545",success:"#28a745",warning:"#ffc107"},hover:{color:{disabled:fill?"#fff":"#444",primary:fill?"#fff":"#005bbc",danger:fill?"#fff":"#d92032",success:fill?"#fff":"#208d39",warning:fill?"#fff":"#d5a001"},backgroundColor:{disabled:fill?"#6d6d6d":"#fff",primary:fill?"#005bbc":"#fff",danger:fill?"#d92032":"#fff",success:fill?"#208d39":"#fff",warning:fill?"#d5a001":"#fff"},border:{disabled:"#6d6d6d",primary:"#005bbc",danger:"#d92032",success:"#208d39",warning:"#d5a001"}}},Button=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("button",{target:"e16c0t7f0"})({display:"block",overflow:"hidden",width:"100%",maxWidth:null!=label&&label.length?40*label.length+"px":"100%",padding:"".concat("s"===size?"0.6rem 1.6rem":"m"===size?"1rem 2rem":"l"===size?"1.4rem 2.4rem":"1rem 2rem"),margin:"".concat("s"===size?"0.4rem 0":"m"===size?"0.8rem 0":"l"===size?"1.2rem 0":"0.8rem 0"),borderRadius:".4rem",borderWidth:border||fill?"1px":"0px",borderColor:BTN_COLOR.border[context],borderStyle:"solid",cursor:"pointer",transition:".4s background-color ease",fontSize:"".concat("s"===size?"1.6rem":"m"===size?"2rem":"l"===size?"2.4rem":"2rem"),backgroundColor:BTN_COLOR.backgroundColor[context],color:BTN_COLOR.color[context],"&:hover":{borderColor:BTN_COLOR.hover.border[context],backgroundColor:BTN_COLOR.hover.backgroundColor[context],color:BTN_COLOR.hover.color[context]}},"");return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.tZ)(Button,{type:"button",onClick:onClick},label)}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},label:{defaultValue:{value:"Button"},description:"",name:"label",required:!1,type:{name:"string"}},context:{defaultValue:{value:"disabled"},description:"",name:"context",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'}]}},fill:{defaultValue:{value:"false"},description:"",name:"fill",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/atom/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/component/atom/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);