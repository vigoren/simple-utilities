"use strict";(self.webpackChunk_simple_web_utilities_documentation=self.webpackChunk_simple_web_utilities_documentation||[]).push([[464],{6943:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(2784);const i="exampleContainer_OAjT",s="code_WOWu",l="animation_Hb9N",o="previewWrapper_eHYJ",m="preview_o8ca",r="expandExample_x55K",c="collapseExample_SnLw",d="options_AoHf",p="title_iqoi",u="group_v4ez";var h=a(5e3);a(9741);class f extends n.Component{expandExample;collapseExample;constructor(e){super(e);const t=e.animation||"",a=e.text||"";this.expandExample=e.expandExample||!1,this.collapseExample=e.collapseExample||!1,this.state={animation:t,text:a,duration:"",repeat:"",delay:""}}onDurationChange(e){const t=e.target;if(t){const e=t.options[t.selectedIndex].value;e?this.setState({duration:e}):this.setState({duration:""})}}onRepeatChange(e){const t=e.target;if(t){const e=t.options[t.selectedIndex].value;e?this.setState({repeat:e}):this.setState({repeat:""})}}onDelayChange(e){const t=e.target;if(t){t.checked?this.setState({delay:"sa-delay"}):this.setState({delay:""})}}runAnimation(e){a(7274).U.initialize();const t=e.target;if(t){const e=t.dataset.animation,a=t.previousSibling.firstChild;e&&a&&(a.classList.remove(e),a.offsetWidth,a.classList.add(e))}}render(){let e=[this.state.duration,this.state.repeat,this.state.delay].filter((e=>e)).join(" ");return e&&(e=" "+e),n.createElement("div",null,n.createElement("div",{className:i},n.createElement("div",{className:l},n.createElement("div",{className:o},n.createElement("div",{"data-preview":"true",className:`${m} simple-animation ${e} ${this.expandExample?r:this.collapseExample?c:""}`},this.expandExample||this.collapseExample?n.createElement("ul",null,n.createElement("li",null,"Item 1"),n.createElement("li",null,"Item 2"),n.createElement("li",null,"Item 3"),n.createElement("li",null,"Item 4"),n.createElement("li",null,"Item 5")):this.state.text)),n.createElement("button",{type:"button","data-animation":this.state.animation,onClick:this.runAnimation,"data-sa-collapse":this.expandExample?`.${r}`:this.collapseExample?`.${c}`:""},"Run Animation")),n.createElement("div",{className:d},n.createElement("strong",{className:p},"Options"),n.createElement("div",{className:u},n.createElement("select",{onChange:this.onRepeatChange.bind(this)},n.createElement("option",{value:""},"No Repeat"),n.createElement("option",{value:"sa-infinite"},"Infinite Repeat")),n.createElement("label",null,"Repeat Animation")),n.createElement("div",{className:u},n.createElement("select",{defaultValue:"",onChange:this.onDurationChange.bind(this)},n.createElement("option",{value:"sa-duration-quadruple"},"Quadruple Duration"),n.createElement("option",{value:"sa-duration-triple"},"Triple Duration"),n.createElement("option",{value:"sa-duration-double"},"Double Duration"),n.createElement("option",{value:""},"Normal Duration"),n.createElement("option",{value:"sa-duration-half"},"Half Duration"),n.createElement("option",{value:"sa-duration-third"},"Third Duration"),n.createElement("option",{value:"sa-duration-quarter"},"Quarter Duration")),n.createElement("label",null,"Animation Duration")),n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",onChange:this.onDelayChange.bind(this)})," Delay Animation")))),n.createElement("div",{className:s},n.createElement(h.Z,{language:"html",showLineNumbers:!0},`<div className="simple-animation ${this.state.animation}${e}">${this.state.text}</div>`)))}}const E=f},2841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var n=a(7896),i=(a(2784),a(876)),s=a(6943);const l={},o="Fade",m={unversionedId:"simple-animation/css-animations/fade",id:"simple-animation/css-animations/fade",title:"Fade",description:"Basic animations for fading elements in and out.",source:"@site/docs/simple-animation/css-animations/fade.mdx",sourceDirName:"simple-animation/css-animations",slug:"/simple-animation/css-animations/fade",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/fade",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"simpleAnimationSidebar",previous:{title:"CSS Animations",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/"},next:{title:"Slide",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/slide"}},r={},c=[{value:"Fade In",id:"fade-in",level:2},{value:"Fade Out",id:"fade-out",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fade"},"Fade"),(0,i.kt)("p",null,"Basic animations for fading elements in and out."),(0,i.kt)("h2",{id:"fade-in"},"Fade In"),(0,i.kt)("p",null,"Fades an element into view."),(0,i.kt)("p",null,"To use this animation add ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-animation sa-fade-in")," class to the element."),(0,i.kt)("p",null,"This animation can be combined with any utility class to delay, repeat or change the speed of the animation."),(0,i.kt)(s.Z,{animation:"sa-fade-in",text:"Fade In",mdxType:"AnimationExample"}),(0,i.kt)("h2",{id:"fade-out"},"Fade Out"),(0,i.kt)("p",null,"Fades an element out of view."),(0,i.kt)("p",null,"To use this animation add ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-animation sa-fade-out")," class to the element."),(0,i.kt)("p",null,"This animation can be combined with any utility class to delay, repeat or change the speed of the animation."),(0,i.kt)(s.Z,{animation:"sa-fade-out",text:"Fade Out",mdxType:"AnimationExample"}))}u.isMDXComponent=!0},7274:(e,t,a)=>{a.d(t,{U:()=>d});var n,i,s,l,o,m,r=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},c=(e,t,a)=>(((e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)})(e,t,"access private method"),a);class d{constructor(){}static initialize(){c(this,n,i).call(this).forEach((e=>{if(e.addEventListener("click",c(this,o,m).bind(this)),e.dataset.saCollapse){const t=document.querySelector(e.dataset.saCollapse||"");t&&t.style.setProperty("--simple-animation-collapse-max-height",c(this,s,l).call(this,t))}}))}}n=new WeakSet,i=function(){return document.querySelectorAll("*[data-sa-collapse]")},s=new WeakSet,l=function(e){return`${Math.max(e.offsetHeight,e.scrollHeight,e.clientHeight)}px`},o=new WeakSet,m=function(e){const t=e.target;if(t){const e=t.closest("*[data-sa-collapse]");if(e&&e.dataset.saCollapse){const t=document.querySelector(e.dataset.saCollapse);t&&(t.classList.toggle("sa-collapse-up"),t.classList.toggle("sa-expand-down"))}}},r(d,n),r(d,s),r(d,o),d.initialize()}}]);