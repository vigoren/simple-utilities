(()=>{"use strict";var e,t,r,o,a,d={},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=d,i.c=n,e=[],i.O=(t,r,o,a)=>{if(!r){var d=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var n=!0,c=0;c<r.length;c++)(!1&a||d>=a)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(n=!1,a<d&&(d=a));if(n){e.splice(f--,1);var b=o();void 0!==b&&(t=b)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var d={};t=t||[null,r({}),r([]),r(r)];for(var n=2&o&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,i.d(a,d),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({37:"819f2a6e",53:"935f2afb",72:"7395ad26",92:"d53415b6",195:"c4f5d8e4",259:"ed1d6853",353:"c5cd67b1",464:"1b2b1957",482:"42d3609d",514:"1be78505",525:"601fd880",526:"50b7cca2",582:"b7cdef20",597:"c1d4a26c",661:"5d10e1b5",686:"e637c5d9",719:"2de5b51b",736:"1a0273bb",767:"0cb45dbb",794:"4d4b0845",827:"10939b82",864:"70742374",891:"a1307c09",893:"fc4e1e23",918:"17896441"}[e]||e)+"."+{37:"fdb52d66",53:"80fbe702",72:"569416d1",92:"0d71c71b",195:"0b6327c7",259:"1b10a6b9",353:"ac581a3d",385:"765d8c9b",464:"33acd044",482:"6d519fd9",514:"4ac01e38",525:"f63f9d53",526:"5ca8c0ac",582:"a57fe5c1",597:"bcf71b13",661:"75bca48f",686:"9a47628a",719:"66f4da34",736:"da4f6112",767:"217758e8",794:"9047e37e",827:"c89994db",864:"df5e48b8",891:"38746768",893:"d3c7e367",918:"61c74fff",969:"6eb19886"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="@simple-web-utilities/documentation:",i.l=(e,t,r,d)=>{if(o[e])o[e].push(t);else{var n,c;if(void 0!==r)for(var b=document.getElementsByTagName("script"),f=0;f<b.length;f++){var u=b[f];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",a+r),n.src=e),o[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/simple-web-utilities/",i.gca=function(e){return e={17896441:"918",70742374:"864","819f2a6e":"37","935f2afb":"53","7395ad26":"72",d53415b6:"92",c4f5d8e4:"195",ed1d6853:"259",c5cd67b1:"353","1b2b1957":"464","42d3609d":"482","1be78505":"514","601fd880":"525","50b7cca2":"526",b7cdef20:"582",c1d4a26c:"597","5d10e1b5":"661",e637c5d9:"686","2de5b51b":"719","1a0273bb":"736","0cb45dbb":"767","4d4b0845":"794","10939b82":"827",a1307c09:"891",fc4e1e23:"893"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var d=i.p+i.u(t),n=new Error;i.l(d,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+d+")",n.name="ChunkLoadError",n.type=a,n.request=d,o[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,d=r[0],n=r[1],c=r[2],b=0;if(d.some((t=>0!==e[t]))){for(o in n)i.o(n,o)&&(i.m[o]=n[o]);if(c)var f=c(i)}for(t&&t(r);b<d.length;b++)a=d[b],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(f)},r=self.webpackChunk_simple_web_utilities_documentation=self.webpackChunk_simple_web_utilities_documentation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();