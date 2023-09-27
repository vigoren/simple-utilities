"use strict";(self.webpackChunk_simple_web_utilities_documentation=self.webpackChunk_simple_web_utilities_documentation||[]).push([[259],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4236:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(2784);const a={colorPreviewWrapper:"colorPreviewWrapper_NLU0",colorPreview:"colorPreview_Jeep"};function l(e){return n.createElement("div",{className:a.colorPreviewWrapper},n.createElement("div",{className:a.colorPreview,style:{backgroundColor:e.color}}),e.color)}},6443:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(2784);class a extends n.Component{constructor(e){super(e),this.state={id:e.id}}render(){return n.createElement("div",{style:{marginBottom:"1rem"}},n.createElement("label",null,n.createElement("input",{type:"checkbox",id:this.state.id,className:"simple-toggle"}),n.createElement("span",null,"Simple Toggle")))}}const l=a},8924:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2784),a=r(6277);const l={tabItem:"tabItem_imSB"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},5185:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7896),a=r(2784),l=r(6277),o=r(9374),i=r(7267),s=r(1331),u=r(5903),c=r(5018);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var f=r(9741);const h={tabList:"tabList_pBzr",tabItem:"tabItem_uMOY"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},8655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(7896),a=(r(2784),r(876)),l=r(5185),o=r(8924);r(4236),r(6443);const i={},s="Simple Toggle",u={unversionedId:"simple-toggle/index",id:"simple-toggle/index",title:"Simple Toggle",description:"A CSS only library that changes the appearance of checkboxes to look like toggles.",source:"@site/docs/simple-toggle/index.mdx",sourceDirName:"simple-toggle",slug:"/simple-toggle/",permalink:"/simple-web-utilities/docs/simple-toggle/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"simpleToggleSidebar",next:{title:"CSS Variables",permalink:"/simple-web-utilities/docs/simple-toggle/css-variables"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"HTML",id:"html",level:3},{value:"CSS",id:"css",level:3},{value:"Dark Mode",id:"dark-mode",level:4}],m={toc:p},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-toggle"},"Simple Toggle"),(0,a.kt)("p",null,"A CSS only library that changes the appearance of checkboxes to look like toggles."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @simple-web-utilities/simple-toggle\n")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started make sure that you include the CSS on your page or into your project files."),(0,a.kt)("h3",{id:"html"},"HTML"),(0,a.kt)("p",null,"The HTML for the toggle is very simple. It is just a native input element with the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"checkbox")," and a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-toggle"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="checkbox" class="simple-toggle" />\n')),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("p",null,"You can link to the css file directly or import it into your own css file."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is encouraged to import the library into your own css file.")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"file",label:"CSS File",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="node_modules/@simple-web-utilities/simple-toggle/dist/simple-toggle.css" />\n'))),(0,a.kt)(o.Z,{value:"import",label:"Import",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import '@simple-web-utilities/simple-toggle/dist/simple-toggle.css';\n")))),(0,a.kt)("p",null,"For more options on customizing the CSS check out the available ",(0,a.kt)("a",{parentName:"p",href:"css-variables"},"CSS Variables"),"."),(0,a.kt)("h4",{id:"dark-mode"},"Dark Mode"),(0,a.kt)("p",null,"This library supports dark mode by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"data-theme")," attribute on the ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," element. The default theme is ",(0,a.kt)("inlineCode",{parentName:"p"},"light"),". To use the dark theme set the ",(0,a.kt)("inlineCode",{parentName:"p"},"data-theme")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"dark"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html data-theme="dark">\n')))}g.isMDXComponent=!0}}]);