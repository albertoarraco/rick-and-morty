"use strict";(self.webpackChunkrickmorty=self.webpackChunkrickmorty||[]).push([[917],{917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(763),n=a(527),l=a(100),s=a(468),c=a(926);const i=function(e){var t=e.type,a=e.data,l=e.loading,s=e.refreshing,i=(e.error,e.classList),o=void 0===i?"default":i,u=e.itemTemplate;if(l||s)return r.default.createElement(c.A,{placeholderMessage:"Loading ".concat(t,"...")});var d;return r.default.createElement("div",{className:"list-container appear"},r.default.createElement("h2",null,t),r.default.createElement("ul",{className:"list-component ".concat(o,"-list")},null==a||null===(d=a.results)||void 0===d?void 0:d.map((function(e){return r.default.createElement("li",{key:e.id},u?u(e):r.default.createElement(n.N_,{to:"/".concat(t,"/").concat(e.id)},e.name))}))))};function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l,s,c=[],i=!0,o=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(r=l.call(a)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{if(!i&&null!=a.return&&(s=a.return(),Object(s)!==s))return}finally{if(o)throw n}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}const d=function(e){var t=e.url,a=o((0,r.useState)({}),2),n=a[0],l=a[1],s=o((0,r.useState)(!1),2),c=s[0],i=s[1];return(0,r.useEffect)((function(){i(!0),fetch(t).then((function(e){return e.json()})).then(l).finally((function(){return i(!1)}))}),[t]),r.default.createElement("li",{className:"appear",style:{"--bg-image":"url(".concat(c?"https://elcomercio.pe/resizer/v2/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg?auth=8a023522ad969a505c109d936b7e56d4948d7b7e88b9df5ec736e46b8db0d567&width=300&height=300&quality=90&smart=true":n.image,")")}},r.default.createElement("span",{className:"tag-status"},null==n?void 0:n.status),r.default.createElement("p",null,null==n?void 0:n.name))};var m=["https://variety.com/wp-content/uploads/2017/10/rickandmorty.jpg","https://m.media-amazon.com/images/M/MV5BZDI5OTRmZDAtZjkzZC00MGZhLTg5ZTUtY2Y5MjNiNDkyM2QwXkEyXkFqcGc@._V1_.jpg","https://pyxis.nymag.com/v1/imgs/dcb/698/eea6b585943cfb9f9ce6048e514f174dbc-The-Old-Man-and-the-Seat.rhorizontal.w700.jpg","https://www.nme.com/wp-content/uploads/2019/11/Rick-and-Morty.png","https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10815739/Rick_and_Morty1.jpg?quality=90&strip=all&crop=7.8308535630384,0,84.338292873923,100","https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e963c60-36c8-4503-a2ba-578a03ae07cf_1333x750.jpeg","https://sm.ign.com/ign_in/gallery/t/the-top-15/the-top-15-rick-and-morty-episodes_5ht4.jpg","https://media.cnn.com/api/v1/images/stellar/prod/230926103801-rick-morty-trailer-s7.jpg?c=16x9&q=h_833,w_1480,c_fill","https://resizer.glanacion.com/resizer/v2/los-secretos-detras-de-rick-morty-una-de-las-3FH5L72275GQVLLF3PZVB7JZ7E.jpg?auth=921c9a1467ecd0ed56181b88d50652b7f64e261d8aed01d926d9e8f1d8a08047&width=768&quality=70&smart=false","https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2024/01/23/1245006-205355348.jpg?itok=H2JIVpe0","https://wanhabercom.teimg.com/crop/1280x720/wanhaber-com/uploads/2024/09/rick-and-morty-8-sezon-ne-zaman-cikacak-16106.webp","https://images.cgames.de/images/gamestar/290/rick-and-morty_6257113.jpg","https://imageio.forbes.com/specials-images/imageserve/5dd31bc8e0af7b0006b1a833/rick-and-morty/960x0.jpg?format=jpg&width=960","https://i.ytimg.com/vi/2MgusblpT9Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnCQTsKHQhBKjiQwiJj9_c86cbcw","https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/rick-and-morty-episode-montage.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CUE5Qp58-l-Mn_Fj2xeiX7Fig17zxbrn7VlAmSfi8tL7hmS6XmeahQxvwgYlJqNmfWc&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSunGwTGJW1j9vcdExDbHMURPt1tJyBRy8156OYDSn6CvOdJQhHi3t4fXkiOHwyyD7OA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgchkIJ5ZwY5MY-ZEphpsKUC5PwIEebDzqsw5xxLimpOX37siIYZFb7JhhtY0RsQjk4M&usqp=CAU","https://external-preview.redd.it/rick-and-morty-renewed-for-seasons-11-12-season-8-premieres-v0-MGZtA-vItlSJLoG7YI2NhUQBrX3Dyswten2LUoowgo8.jpg?auto=webp&s=581288a7531b548d1f62c462a291e694c6b6d791","https://www.nerdevil.it/wp-content/uploads/2022/08/rick-morty-stagione-6-italia.jpg"];const p=function(e){var t=e.episode,a=(0,s.wA)(),c=(0,s.d4)((function(e){var a;return null===(a=e.episodes.detail)||void 0===a?void 0:a[t]}),s.bN);(0,r.useEffect)((function(){a((0,l.Et)(t))}),[]);if(c){var i=c.data,o=c.loading,u=(c.refreshing,c.error);if(o)return r.default.createElement("h1",null,"Loading episode...");if(o)return r.default.createElement("h1",null,"Refresh episode...");if(u)return r.default.createElement("p",{style:{color:"#f00"}},u);var p=i.id,f=i.air_date,h=i.episode,g=i.name,y=i.characters;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"episode-detail appear"},r.default.createElement("div",{className:"episode-header appear",style:{"--bg-image":"url(".concat(m[p-1],")")}},r.default.createElement("h1",null,h," - ",g)),r.default.createElement("div",{className:"episode-info"},r.default.createElement("div",{className:"breadcrumbs"},r.default.createElement(n.N_,{to:"/episodes"},"Episodes")," | ",r.default.createElement("b",null,h," - ",g)),r.default.createElement("p",null,r.default.createElement("b",null,"Air date: ",f)))),r.default.createElement("div",{className:"characters-carousel"},r.default.createElement("h3",null,"Characters"),r.default.createElement("ul",{className:"characters-list"},function(e){return e.map((function(e){return r.default.createElement(d,{url:e,key:e})}))}(y))))}};function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f.apply(null,arguments)}const h=function(){var e=(0,s.wA)(),t=(0,n.g)().id,a=(0,s.d4)((function(e){return e.episodes.list}),s.bN);(0,r.useEffect)((function(){t||e((0,l.FE)()),t&&scrollTo(0,0)}),[t]);return t?r.default.createElement(p,{episode:t}):r.default.createElement(i,f({type:"episodes",classList:"episodes"},a,{itemTemplate:function(e){var t=e.id,a=e.episode,l=e.name,s=e.air_date;return r.default.createElement(n.N_,{to:"/episodes/".concat(t),style:{"--bg-image":"url(".concat(m[t-1],")")},key:t},r.default.createElement("span",null,"[",a,"]"),r.default.createElement("p",null,l),r.default.createElement("b",null,s))}}))}}}]);