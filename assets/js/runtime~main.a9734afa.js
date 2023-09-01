(()=>{"use strict";var e,t,r,o,n,a={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=a,d.c=i,e=[],d.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(d.O).every((e=>d.O[e](r[c])))?r.splice(c--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var f=o();void 0!==f&&(t=f)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(n,a),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({37:"819f2a6e",53:"935f2afb",72:"7395ad26",195:"c4f5d8e4",353:"c5cd67b1",464:"1b2b1957",514:"1be78505",582:"b7cdef20",592:"common",661:"5d10e1b5",686:"e637c5d9",719:"2de5b51b",767:"0cb45dbb",864:"70742374",891:"a1307c09",893:"fc4e1e23",918:"17896441"}[e]||e)+"."+{6:"fe908a88",37:"93e94cc8",53:"582c1f37",72:"569416d1",195:"b5c33e84",353:"af6e2142",464:"9ea72c1e",514:"cb8243cc",582:"a57fe5c1",592:"0149ca74",661:"f0c1e77c",686:"b8267279",719:"73459cac",767:"d0b2cee5",864:"9e100c29",891:"c792af4f",893:"9bcd67c7",918:"0a8a5a0f"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="@simple-web-utilities/documentation:",d.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,c;if(void 0!==r)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var b=(t,r)=>{i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=b.bind(null,i.onerror),i.onload=b.bind(null,i.onload),c&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/simple-web-utilities/",d.gca=function(e){return e={17896441:"918",70742374:"864","819f2a6e":"37","935f2afb":"53","7395ad26":"72",c4f5d8e4:"195",c5cd67b1:"353","1b2b1957":"464","1be78505":"514",b7cdef20:"582",common:"592","5d10e1b5":"661",e637c5d9:"686","2de5b51b":"719","0cb45dbb":"767",a1307c09:"891",fc4e1e23:"893"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],i=r[1],c=r[2],f=0;if(a.some((t=>0!==e[t]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);if(c)var u=c(d)}for(t&&t(r);f<a.length;f++)n=a[f],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(u)},r=self.webpackChunk_simple_web_utilities_documentation=self.webpackChunk_simple_web_utilities_documentation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();