/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={926:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(763),a=r(527);const o=function(){var e=(0,a.g)().id?"detail":"list",t={list:n.default.createElement("lottie-player",{src:"https://lottie.host/32088d8f-efaf-4463-8681-6f0e8ac3a783/SRpeTrRQjE.json",background:"##FFFFFF",speed:"1",style:{width:"50%",height:"auto",margin:"auto"},loop:!0,autoplay:!0,direction:"1",mode:"normal"}),detail:n.default.createElement("img",{src:"https://media1.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy_s.gif",alt:"portal"})};return n.default.createElement("div",{className:"loading-placeholder"},t[e],n.default.createElement("h3",null,"Loading ",e,"...."))}},551:(e,t,r)=>{var n=r(763),a=r(730),o=r(468),i=r(704),l=r(960),c=r(863),u=r(644),s=(0,i.Z0)({name:"configuration",initialState:{theme:"dark"},reducers:{switchTheme:function(e,t){var r=e.theme;e.theme="dark"===r?"light":"dark"}}}),f=s.actions.switchTheme;const d=s.reducer;var m=r(100);const p=(0,u.HY)({config:d,episodes:m.Ay});var h=r(750),y=r(346),v={key:"rick-morty",storage:(0,c.A)("rick-morty"),version:1,stateReconciler:h.A},g=(0,l.rL)(v,p),b=(0,i.U1)({reducer:g,devTools:!1,middleware:function(){return[y.P]},maxAge:50}),E=(0,l.GM)(b),w=r(131),k=r(527);const j=function(){return n.default.createElement("div",{className:"home-page"},n.default.createElement("div",{className:"link-wrapper"},n.default.createElement(k.N_,{to:"/episodes",className:"home-link",style:{"--bg-image":"url(https://cdn.themedizine.com/2020/02/rick-morty-influencias-1000x667.jpg)"}},n.default.createElement("span",null,"Episodes"))),n.default.createElement("div",{className:"link-wrapper"},n.default.createElement("div",{className:"home-link  disabled-item",style:{"--bg-image":"url(https://preview.redd.it/nq7j6ngb4kn71.jpg?width=1080&crop=smart&auto=webp&s=cfd043648838495ab7058f91c50e558841d08bde)"}},n.default.createElement("span",null,"Characters"),n.default.createElement("small",null,"Work in progress"))),n.default.createElement("div",{className:"link-wrapper"},n.default.createElement("div",{className:"home-link disabled-item",style:{"--bg-image":"url(https://haztucuadro.com/cdn/shop/products/wallpaperbetter_98__pagina.jpg?v=1676744498)"}},n.default.createElement("span",null,"Locations"),n.default.createElement("small",null,"Work in progress"))))};const O=function(){return n.default.createElement("div",{className:"not-found-page"},n.default.createElement("img",{alt:"Not found",src:"https://i.gifer.com/WG8Q.gif"}),n.default.createElement("div",null,n.default.createElement("h2",null,"404"),n.default.createElement("p",null,"Not found")))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const N=function(){var e=(0,k.zy)(),t=S((0,n.useState)(!1),2),r=t[0],a=t[1];return(0,n.useEffect)((function(){a(!1)}),[e]),n.default.createElement(n.default.Fragment,null,n.default.createElement("button",{className:"menu-action",onClick:function(){return a(!0)}},n.default.createElement("span",null),n.default.createElement("span",null),n.default.createElement("span",null)),n.default.createElement("div",{className:"menu ".concat(r?"visible":"")},n.default.createElement("ul",null,n.default.createElement(k.k2,{to:"/episodes",className:"link"},"Episodes"),n.default.createElement("p",{className:"link"},"Characters"),n.default.createElement("p",{className:"link"},"Locations")),n.default.createElement("button",{className:"link",onClick:function(){return a(!1)}},"Close")))};const L=function(){var e=(0,o.wA)(),t=(0,o.d4)((function(e){return e.config.theme}),o.bN);return n.default.createElement("button",{className:"image-theme",onClick:function(){return e(f())}},n.default.createElement("img",{alt:"Theme switcher",src:{dark:"https://cdn1.iconfinder.com/data/icons/interface-flat-6/4000/22-06-28-Ui-icons-Interface-flat-color-59-512.png",light:"https://static.thenounproject.com/png/1664849-200.png"}[t],width:30,height:30}))};const P=function(){return n.default.createElement("header",null,n.default.createElement(N,null),n.default.createElement(k.N_,{to:"/"},n.default.createElement("img",{src:"https://img.icons8.com/?size=30&id=57324&format=png",alt:"Logo Rick&Morty"})),n.default.createElement(L,null))};const A=function(){return n.default.createElement("footer",null,n.default.createElement("p",null,"“Sometimes science is more art than science, Morty. A lot of people don’t get that.” – Rick Sanchez"),n.default.createElement("p",null,n.default.createElement("small",null,"© 2025, Rick y Morty Fan Page")))};const C=function(e){var t=e.children,r=(0,o.d4)((function(e){return e.config.theme}),o.bN);return n.default.createElement("div",{className:"wrapper ".concat(r)},n.default.createElement(P,null),n.default.createElement("main",null,t),n.default.createElement(A,null))};var _=r(926),T=(0,n.lazy)((function(){return r.e(917).then(r.bind(r,917))})),F=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(k.I9,{basename:"/"},n.default.createElement(k.BV,null,n.default.createElement(k.qh,{path:"/",element:n.default.createElement(C,null,n.default.createElement(j,null))}),n.default.createElement(k.qh,{path:"/episodes/:id?",element:n.default.createElement(C,null,n.default.createElement(n.Suspense,{fallback:n.default.createElement(_.A,null)},n.default.createElement(T,null)))}),n.default.createElement(k.qh,{path:"*",element:n.default.createElement(C,null,n.default.createElement(O,null))}))))};const I=(0,n.memo)(F);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const M=function(){var e=Z((0,n.useState)(!0),2),t=e[0],r=e[1];if((0,n.useEffect)((function(){setTimeout((function(){r(!1)}),2e3)}),[]),t)return n.default.createElement("div",{id:"enter_animation"},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 698.2 725.21"},n.default.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},n.default.createElement("path",{d:"M595.95,595.95c65.93-65.93,102.25-153.6,102.25-246.85s-36.32-180.91-102.25-246.84C530.01,36.32,442.35,0,349.1,0S168.19,36.32,102.25,102.26,0,255.86,0,349.1s36.32,180.92,102.25,246.85c6.99,6.98,14.22,13.64,21.68,19.95-3.27,12-5.18,24.23-2.5,35.93,1,4.38,.79,8.94,6.72,9.79,2.61,.37,8.72,6.47,10.89,7.89,101.36,66.73,239.39,66.16,353.26,36.55,24.59-6.39,47.58-15.53,70.53-26.15,6.08-2.82,7.64-6.98,8.44-12.29,.33-2.2,.43-4.46,.42-6.72-5.82-8.93-9.13-20.31-9.13-30.25,0-1.8,.12-3.64,.32-5.49,11.53-8.96,22.58-18.7,33.08-29.2Zm-392.45,30.53c-.81,.88-1.78,1.61-2.84,2.56-.13-.71-.36-1.14-.23-1.31,5.78-8.39,5.57-8.1-2.84-14.85-6.47-5.19-12.45-11.03-18.27-16.96-1.38-1.39-2.3-4.58-1.7-6.36,10.19-30.52,20.81-60.88,36.46-89.16,.26-.47,.59-.88,.9-1.32,.3,.19,.6,.38,.9,.56-3.46,7.21-7.36,14.26-10.31,21.68-8.67,21.84-16.9,43.85-25.51,65.73-1.65,4.19-.63,7.07,2.5,9.76,6.72,5.77,13.43,11.57,20.14,17.36q6.78,5.83,.79,12.32Zm13.04-11.33c-.5-.01-1-.02-1.5-.04l2.92-104.57c.72-.03,1.45-.08,2.18-.11l-3.6,104.73Zm17.69-290.36c-.4,1.16-3.53,2.1-5.28,1.91-7.85-.88-15.65-2.19-23.21-3.32-8.59,1.17-16.78,2.45-24.99,3.25-1.53,.14-4.25-1.26-4.72-2.56-6.11-16.99,3.58-35.64,20.5-40,20.52-5.3,38.89,7.7,39.93,28.91,.2,3.92-.91,8.05-2.23,11.8Zm23.46-2.68c-4.22,.18-5.71-1.34-5.28-5.41,.24-2.19,.2-4.44,.02-6.65-.9-11.44,5.37-13.72,13.57-14.67,2.37-.27,4.79-.3,7.18-.36,13.32-.29,25.33,3.95,36.16,11.67,6,4.28,6.9,15.93,1.38,20.75-.62,.55-2,.65-2.87,.39-16.4-4.8-33.17-6.46-50.17-5.72Zm22.22,191.59c7.6,27.78,8.87,59.54,10.26,91.28l-10.26-91.28Zm51.37,148.46c.59-2.82,.67-4.44,1.28-5.84,1.94-4.46-.3-7.31-3.4-10.03-7.64-6.71-15.27-13.43-22.81-20.24-5.71-5.17-5.64-6.48,.09-11.76,5.98-5.51,11.82-11.17,18-16.45,3.79-3.24,4.68-6.77,2.72-11.18-8.38-18.93-16.34-38.05-25.37-56.67-5-10.32-11.81-19.77-17.8-29.61,.45-.35,.88-.69,1.31-1.04,6.69,10.52,14.35,20.57,19.86,31.68,8.86,17.88,16.21,36.53,24.44,54.74,2.44,5.41,1.18,9.42-2.94,13.16-5.47,4.95-10.65,10.22-16.25,15.01-6.36,5.44-6.51,6.8-.38,12.34,6.59,5.95,13.15,11.92,19.62,18,6.68,6.27,6.91,8.38,1.64,17.89Zm164.86-170.24c-10.81-14.73-10.12-28.13,.35-43.91,1.78-2.69,4.03-5.09,6.62-8.32,1.28,10.41,7.27,15.34,15.76,18.05,15.43,4.9,31.24,7.19,47.37,6.46,5.63-.27,6.77,2.19,6.27,6.86-2.57,23.82-20.87,37.13-40.42,37.77-15,.5-27.2-4.99-35.95-16.91Zm45.82,94.34c1.3-.98,2.1-1.65,2.97-2.24,12.4-8.33,23.31-18.26,31.4-30.88,2.95-4.6,6.22-7.44,11.61-9.12,14.76-4.59,24.07-26.44,10.3-37.71-.95-.77-1.79-2.59-1.58-3.72,9.96-51.52,1.6-105.66-41.05-141.07-32.43-26.94-77.54-32.9-117.13-20.13-42.6,13.74-70.56,45.41-84.19,87.17-5.34,16.4-15.21,39.46-5.5,55.89,3.73,6.31,7.57,12.57,11.32,18.78-13.2,12.57-15.21,20.99-7.98,32.58,4.85,7.78,16.23,12.91,23.32,10.47-1.34-3.37-2.77-6.71-3.99-10.13-1.16-3.25-2.09-6.58-3.13-9.89,23.06,57.62,69.64,74.58,126.36,74.65-28.2,3.06-55.05-2.85-80.65-12.96-22.96,28.7-26.29,62.89-28.95,97.22-.06,.65-.11,1.28-.16,1.93-.18-.62-.35-1.24-.51-1.86-1.93-7.08-3.32-14.03-5.08-20.87-7.86-30.56-15.66-61.15-23.87-91.62-5.24-19.47-11.07-38.78-16.88-58.09-.65-2.15-2.59-4.99-4.49-5.52-17.29-4.79-34.7-9.06-52.05-13.66-3.13-.82-6.78-1.8-6.22-6.38,.5-4.11-1.98-8.85,5.21-10.79,10.57-2.84,18.9-9.55,25.23-18.81,1.87-2.74,5.33-4.87,8.52-6.11,6.55-2.55,13.39-4.32,20.76-6.6-4.16-5.24-7.85-9.57-11.14-14.17-1.39-1.94-1.96-4.46-2.91-6.72,2.28-.89,4.5-2.15,6.87-2.62,6.19-1.24,12.45-2.12,19.03-3.2l-9.83-27.18c13.82-4.5,27.02-8.68,39.23-17.49-7.37-4.01-14.17-7.23-20.45-11.24-6.37-4.07-12.21-8.94-19.54-14.4,23.89-8.07,45.95-15.24,64.84-30.85l-48.16-20.24,45.4-42.46-58.28-9.1,34.33-58.72-.97-.83-55.36,20.1c-6.87-23.89-8.63-47.4-6.21-71.75-1.76,.47-3.05,.6-4.14,1.15-21.82,10.92-41.5,24.58-56.37,45.53-14.23-18.81-26.84-37.87-44.71-53.27-2.49,23.1-4.69,45.39-15.88,66.13-16.89-10.54-34.9-16.97-55.64-19.34,10.92,18.05,17.16,36.42,19.05,56.42l-72.71,5.62c.61,1.15,.78,1.7,1.14,2.08,.87,.95,1.81,1.84,2.77,2.69,13.27,11.88,25.85,24.29,34.56,40.15,5.47,9.96,1.22,11.34-7.2,17.27-12.01,8.43-28.77,16.71-38.24,27.64,1.83,.87,4.28,1.75,6.39,1.75,7.77,1.26,57.03,22.91,46.55,32.89-9.51,9.05-18.76,18.36-28.03,27.65-1.04,1.02-1.59,2.53-2.45,3.93,12.6,4.07,24.36,8.27,36.35,11.57,5.21,1.42,5.71,3.28,4.32,8.04-3.07,10.51-5.44,21.22-8.29,32.61,10.94-.83,21.2-1.31,31.36-2.55,3.74-.46,4.4,.42,4.61,3.79,.49,7.72,1.39,15.4,2.18,23.75l19.08-7.99c-26.83-38.13-32.01-81.12-32.09-125.09,.6,6.81,1.39,13.63,1.75,20.45,1.43,27.06,7.63,52.98,17.76,78.09,8.18,20.27,21.3,35.1,43.11,40.77,3.75,.98,3.76,3.53,3.65,6.39-.12,3.03,.63,6-3.79,7.41-19.61,6.3-39.11,12.88-58.53,19.72-2.24,.79-4.69,3.48-5.38,5.8-6.79,22.83-13.35,45.75-20.07,68.6-1.76,5.96-3.93,12.18-6.01,18.55C56.24,542.08,11.13,450.75,11.13,349.1,11.13,162.74,162.74,11.13,349.1,11.13s337.97,151.61,337.97,337.97c0,107.04-50.02,202.62-127.91,264.58-3.74-9.96-8.9-19.32-17.2-27.42Zm-72.15-104.66c-4.24,15.75-15.32,25.7-31.9,28.28-21.95,3.43-41.21-7.63-47.83-27.15-.35-1.04-.72-2.08-.89-3.15-2.33-14.6-2.15-14.33,12.22-15.34,11.31-.8,22.66-2.25,33.73-4.59,10.35-2.2,19.91-6.46,20.22-20.54,14.77,11.82,18.76,26.42,14.44,42.49Z"}))),n.default.createElement("h3",null,"Welcome"))};const z=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.Kq,{store:b,stabilityCheck:"always"},n.default.createElement(w.Q,{loading:null,persistor:E},n.default.createElement(M,null),n.default.createElement(I,null))))};var D=document.getElementById("rickmorty-app");(0,a.Hr)(D).render(n.default.createElement(z,null))},100:(e,t,r)=>{r.d(t,{Ay:()=>p,Et:()=>m,FE:()=>d});var n=r(704);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(){o=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),l=new _(n||[]);return i(o,"_invoke",{value:L(e,r,l)}),o}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var p="suspendedStart",h="suspendedYield",y="executing",v="completed",g={};function b(){}function E(){}function w(){}var k={};f(k,c,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(T([])));O&&O!==r&&n.call(O,c)&&(k=O);var S=w.prototype=b.prototype=Object.create(k);function x(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function r(o,i,l,c){var u=m(e[o],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==a(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(f).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function L(t,r,n){var a=p;return function(o,i){if(a===y)throw Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var l=n.delegate;if(l){var c=P(l,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var u=m(t,r,n);if("normal"===u.type){if(a=n.done?v:h,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=v,n.method="throw",n.arg=u.arg)}}}function P(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=m(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(a(t)+" is not iterable")}return E.prototype=w,i(S,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:E,configurable:!0}),E.displayName=f(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,f(e,s,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},x(N.prototype),f(N.prototype,u,(function(){return this})),t.AsyncIterator=N,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new N(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(S),f(S,s,"Generator"),f(S,c,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return l.type="throw",l.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function i(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}var l=function(){var e,t=(e=o().mark((function e(){var t,r,n,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(t=a.length>0&&void 0!==a[0]?a[0]:"")?"/"+t:"",e.next=4,fetch("https://rickandmortyapi.com/api/episode".concat(r));case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Failed to fetch episode detail");case 7:return e.abrupt("return",n.json());case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){i(o,n,a,l,c,"next",e)}function c(e){i(o,n,a,l,c,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=(0,n.zD)("episodes/getEpisode",l),m=(0,n.zD)("episodes/getEpisodeById",l);const p=(0,n.Z0)({name:"episodes",initialState:{list:{data:[],loading:!1,refreshing:!1,error:!1},detail:{}},extraReducers:function(e){e.addCase(d.pending,(function(e){var t,r;return s(s({},e),{},{list:s(s({},e.list),{},{loading:!(null!==(t=e.list)&&void 0!==t&&t.data),refreshing:!(null===(r=e.list)||void 0===r||!r.data),error:null})})})).addCase(d.fulfilled,(function(e,t){return s(s({},e),{},{list:s(s({},e.list),{},{data:t.payload,loading:!1,refreshing:!1})})})).addCase(d.rejected,(function(e){return s(s({},e),{},{list:s(s({},e.list),{},{loading:!1,refreshing:!1,error:null})})})).addCase(m.pending,(function(e,t){var r,n,a,o=t.meta.arg;e.detail=s(s({},e.detail),{},f({},o,s(s({},null==e||null===(r=e.detail)||void 0===r?void 0:r[o]),{},{loading:!(null!==(n=e.detail[o])&&void 0!==n&&n.data),refreshing:!(null===(a=e.detail[o])||void 0===a||!a.data),error:null})))})).addCase(m.fulfilled,(function(e,t){var r=t.meta.arg;e.detail=s(s({},e.detail),{},f({},r,{data:t.payload,loading:!1,refreshing:!1}))})).addCase(m.rejected,(function(e,t){var r,n=t.meta.arg;e.detail=s(s({},e.detail),{},f({},n,s(s({},null==e||null===(r=e.detail)||void 0===r?void 0:r[n]),{},{loading:!1,refreshing:!1,error:t.error.message})))}))}}).reducer}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,a]=e[s],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,n,a]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".3c5a99192a1afaffca5a.vendors.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="rickmorty:",o.l=(e,n,a,i)=>{if(t[e])t[e].push(n);else{var l,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+a){l=f;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",r+a),l.src=e),t[e]=[n];var d=(r,n)=>{l.onerror=l.onload=null,clearTimeout(m);var a=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),r)return r(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),c&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={792:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var i=o.p+o.u(t),l=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var s=c(o)}for(t&&t(r);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},r=self.webpackChunkrickmorty=self.webpackChunkrickmorty||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=o.O(void 0,[96],(()=>o(551)));i=o.O(i)})();