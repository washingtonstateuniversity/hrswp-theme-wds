!function(){var e,t={297:function(e,t,n){"use strict";var l={};n.r(l),n.d(l,{metadata:function(){return s},name:function(){return i}});var r={};n.r(r),n.d(r,{metadata:function(){return c},name:function(){return u}});var a={};n.r(a),n.d(a,{metadata:function(){return z},name:function(){return V},settings:function(){return T}});var o=window.wp.blocks,s=JSON.parse('{"name":"core/button","styles":[{"name":"round","label":"Round"},{"name":"small","label":"Small"},{"name":"large","label":"Large"}]}');const{name:i}=s;var c=JSON.parse('{"name":"core/image","styles":[{"name":"framed","label":"Framed"}]}');const{name:u}=c;var m=window.wp.element,h=n(184),d=n.n(h),b=window.lodash,g=window.wp.blockEditor,p=window.wp.components,v=window.wp.i18n,w=window.wp.primitives,f=(0,m.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,m.createElement)(w.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"})),_=(0,m.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,m.createElement)(w.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),E=window.wp.data;const k=e=>{let{size:t}=e;return(0,m.createElement)(w.SVG,{width:t,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,m.createElement)(w.Path,{d:"M19.647,16.706a1.134,1.134,0,0,0-.343-.833l-2.549-2.549a1.134,1.134,0,0,0-.833-.343,1.168,1.168,0,0,0-.883.392l.233.226q.2.189.264.264a2.922,2.922,0,0,1,.184.233.986.986,0,0,1,.159.312,1.242,1.242,0,0,1,.043.337,1.172,1.172,0,0,1-1.176,1.176,1.237,1.237,0,0,1-.337-.043,1,1,0,0,1-.312-.159,2.76,2.76,0,0,1-.233-.184q-.073-.068-.264-.264l-.226-.233a1.19,1.19,0,0,0-.4.895,1.134,1.134,0,0,0,.343.833L15.837,19.3a1.13,1.13,0,0,0,.833.331,1.18,1.18,0,0,0,.833-.318l1.8-1.789a1.12,1.12,0,0,0,.343-.821Zm-8.615-8.64a1.134,1.134,0,0,0-.343-.833L8.163,4.7a1.134,1.134,0,0,0-.833-.343,1.184,1.184,0,0,0-.833.331L4.7,6.473a1.12,1.12,0,0,0-.343.821,1.134,1.134,0,0,0,.343.833l2.549,2.549a1.13,1.13,0,0,0,.833.331,1.184,1.184,0,0,0,.883-.38L8.728,10.4q-.2-.189-.264-.264A2.922,2.922,0,0,1,8.28,9.9a.986.986,0,0,1-.159-.312,1.242,1.242,0,0,1-.043-.337A1.172,1.172,0,0,1,9.254,8.079a1.237,1.237,0,0,1,.337.043,1,1,0,0,1,.312.159,2.761,2.761,0,0,1,.233.184q.073.068.264.264l.226.233a1.19,1.19,0,0,0,.4-.895ZM22,16.706a3.343,3.343,0,0,1-1.042,2.488l-1.8,1.789a3.536,3.536,0,0,1-4.988-.025l-2.525-2.537a3.384,3.384,0,0,1-1.017-2.488,3.448,3.448,0,0,1,1.078-2.561l-1.078-1.078a3.434,3.434,0,0,1-2.549,1.078,3.4,3.4,0,0,1-2.5-1.029L3.029,9.794A3.4,3.4,0,0,1,2,7.294,3.343,3.343,0,0,1,3.042,4.806l1.8-1.789A3.384,3.384,0,0,1,7.331,2a3.357,3.357,0,0,1,2.5,1.042l2.525,2.537a3.384,3.384,0,0,1,1.017,2.488,3.448,3.448,0,0,1-1.078,2.561l1.078,1.078a3.551,3.551,0,0,1,5.049-.049l2.549,2.549A3.4,3.4,0,0,1,22,16.706Z"}))},y=e=>{let{size:t}=e;return(0,m.createElement)(w.SVG,{width:t,height:t,viewBox:"0 0 70.2 69.6",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,m.createElement)(w.Path,{d:"m42.8 69.6s3.6-1.5 5.5-7.4c1 2.3 1.5 4.8 1.3 7.3-2.3 0.1-4.5 0.2-6.8 0.1zm14.9-11.8c-10.4 1.4-12.2-20.3-12.2-20.3s3.5 11.1 10.9 10.7c7.7-0.4 5.5-12.2 5.5-12.2s7.5 20.2-4.2 21.8zm-47.7-5c-3.3 1-6.6 1.8-10 2.4 0 0 5.9-4.5 10.3-18.3l4.3 3.9-0.8 2.6c1.1 1.5 1.9 3.1 2.5 4.9 1.6-3.6 1.5-7.7-0.3-11.2l-0.5 1.6-1.7-1.5-2.8-2.7c1.2-3.6 3-7 5.3-10.1l0.4 0.4 3.3 3.8-1 1.7c1.5 1.7 2.9 3.4 4.2 5.3 0.6-3.4 0.4-6.8-0.4-10.1l-1.5 1.4-3.6-4.2c4.5-4.7 10-8.2 16.2-10.3-0.4 0.4-0.7 0.8-1 1.3-2 2.9-4.1 8.1-2.4 16.4 0.3 1.3 0.7 3.2 1.1 5.1 0.9 3.8 1.9 8.2 2.2 10.9 0.7 5.7 0.1 9.4-1.8 11.4-1.3 1.4-3.5 2-6.4 1.9v-1.4c0-2.4-0.3-4.8-0.8-7.2l-0.8-2.7-1.2 2.6c-1.9 4.1-8.6 14.1-17.2 16.1 2.6-4.2 4.1-9 4.4-14zm25.4 16.4h-0.5-0.1-0.3c-0.5 0-0.8-0.1-1.2-0.1-0.7-0.1-1.6-0.2-2.6-0.4-6.4-1.1-12.9-1.7-19.4-2 6.2-3.6 10.4-9.9 12-12.5 0.2 1.3 0.3 2.5 0.3 3.8 0 0.8 0 1.6-0.1 2.2l-0.1 1.1 1.1 0.1c0.7 0.1 1.3 0.1 1.9 0.1 3.3 0 5.7-0.8 7.3-2.5 2.4-2.5 3.1-6.7 2.3-13.1-0.4-2.9-1.4-7.4-2.3-11.1-0.5-2-0.9-3.8-1.1-5-1.5-7.6 0.3-12.3 2.1-14.8 1.3-1.9 3.2-3.4 5.5-4.2h0.1l3.3-10.8h1.1l-2.3 10.3c0.7-0.1 1.2-0.2 1.7-0.3l3-9.5h1.1l-2 9.2c2.9-0.4 6.1-0.7 10.3-1 0.8 0.4 1.4 1.1 1.8 1.9l9.8-3 0.4 1.1-9.5 3.7c0.1 0.2 0.2 0.4 0.2 0.6l10.3-1.3 0.2 1.1-10 2c0 0.2 0.1 0.4 0.1 0.6l10.4 0.3v1.1l-10.2 0.4c0 1.2-0.2 2.4-0.5 3.6 0.6 2.1 0.7 4.3 0.3 6.5-1.7-3.9-3-5.1-3-5.1-1.4-0.7-2.9-1-4.5-1-2.5 0-4.8 1.1-6.4 2.9-2.3 2.6-3.5 6-3.3 9.5 0.2 2.4 0.7 5.1 1.4 8.6 0.7 3.6 1.6 8.1 2.3 13.5 0.6 4.1-0.1 7.3-1.8 9.7-1.6 2.1-4 3.4-6.5 3.8h-0.1-0.2-0.1-2.2zm10.4-51.5c-2.1-0.1-4.2 0.4-6 1.3-1.5 1-2.5 2.7-2.6 4.5-0.1 0.6-0.1 1.2 0 1.8 0.8-1.5 2-2.8 3.3-3.9 2.4-1.5 5.1-2.3 7.9-2.4h0.9 0.3c0.4 0 0.7-0.1 0.8-0.2 0-0.1-0.1-0.3-0.4-0.4-1.3-0.5-2.7-0.8-4.2-0.7z"}))},x=[{name:"cougar",title:(0,v.__)("WSU Cougar head"),attributes:{slug:"cougar"},scope:["block"],icon:y},{name:"chain",title:(0,v.__)("Link"),attributes:{slug:"chain"},scope:["block"],icon:k},{name:"lab",title:(0,v.__)("Laboratory beaker"),attributes:{slug:"lab"},scope:["block"],icon:e=>{let{size:t}=e;return(0,m.createElement)(w.SVG,{width:t,height:t,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,m.createElement)(w.Path,{d:"M9 41q-1.6 0-2.275-1.475-.675-1.475.425-2.675l12.3-14.15V9.25H16.6q-.45 0-.775-.325T15.5 8.1q0-.45.325-.775T16.6 7h14.8q.45 0 .775.325t.325.825q0 .5-.325.8-.325.3-.775.3h-2.85V22.7l12.3 14.15q1.1 1.2.425 2.675Q40.6 41 39 41Z"}))}},{name:"rocket",title:(0,v.__)("Rocket"),attributes:{slug:"rocket"},scope:["block"],icon:e=>{let{size:t}=e;return(0,m.createElement)(w.SVG,{width:t,height:t,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,m.createElement)(w.Path,{d:"m9.5 42.6 7.75-3.05q-1.45-3.45-2.125-6.35-.675-2.9-.925-6.75l-3.05 2.05q-.8.5-1.225 1.325-.425.825-.425 1.725Zm9.2-3.8h10.6q1.4-3.4 2.15-6.85.75-3.45.75-6.9 0-5.75-2.15-10.725T24 6.2q-3.9 3.15-6.05 8.125T15.8 25.05q0 3.45.75 6.9t2.15 6.85ZM24 25.15q-1.3 0-2.225-.925T20.85 22q0-1.3.925-2.225T24 18.85q1.3 0 2.225.925T27.15 22q0 1.3-.925 2.225T24 25.15ZM38.45 42.6V31.55q0-.9-.425-1.725Q37.6 29 36.85 28.55l-3.05-2.1q-.3 3.85-.95 6.775-.65 2.925-2.1 6.325Z"}))}},{name:"trees",title:(0,v.__)("Trees"),attributes:{slug:"trees"},scope:["block"],icon:e=>{let{size:t}=e;return(0,m.createElement)(w.SVG,{width:t,height:t,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,m.createElement)(w.Path,{d:"M27.85 43v-6.2h4.35V43Zm-12 0v-7.6H1.9L11 22.15H6.45L18 5.75l11.55 16.4h-4.5l9.1 13.25H20.2V43Zm20-7.6-8.1-11.85h4.5L24.85 13 30 5.75l11.55 16.4h-4.5L46.1 35.4Z"}))}},{name:"wrench",title:(0,v.__)("Wrench"),attributes:{slug:"wrench"},scope:["block"],icon:e=>{let{size:t}=e;return(0,m.createElement)(w.SVG,{width:t,height:t,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,m.createElement)(w.Path,{d:"M35.65 41.35 22.45 28.1q-1.15.45-2.325.75-1.175.3-2.475.3-4.65 0-7.95-3.275T6.4 17.9q0-1.35.325-2.65.325-1.3.975-2.45l7.15 7.1 5-4.8-7.2-7.25q1.15-.65 2.425-1t2.575-.35q4.75 0 8.1 3.35 3.35 3.35 3.35 8.05 0 1.35-.275 2.525-.275 1.175-.775 2.275L41.3 35.9q.45.5.45 1.2t-.45 1.15l-3.35 3.15q-.5.45-1.15.425-.65-.025-1.15-.475Z"}))}}];x.forEach((e=>{e.isActive||(e.isActive=(e,t)=>e.slug===t.slug)}));var S=x;const B=e=>e.preventDefault(),q=e=>{const{slug:t,url:n,showLabel:l,label:r,labelCondensed:a,size:o}=e,s=(e=>{const t=S.find((t=>t.name===e));return t?t.icon:k})(t),i=(e=>{const t=S.find((t=>t.name===e));return t?t.title:(0,v.__)("Icon")})(t),c=null!=r?r:i,u=null!=a?a:"",h=d()("hrswds-svg-icon-label",{"screen-reader-text":!l}),b=d()("hrswds-svg-icon-label-condensed",{"screen-reader-text":!l}),g=(0,m.createElement)(m.Fragment,null,(0,m.createElement)(s,{size:o}),(0,m.createElement)("span",{className:h},c),u.length>0&&(0,m.createElement)("span",{className:b},a));return n?(0,m.createElement)("a",{href:n,onClick:B},g):g},C=e=>{let{url:t,setAttributes:n,setPopover:l,popoverAnchor:r}=e;return(0,m.createElement)(g.URLPopover,{anchor:r,onClose:()=>l(!1)},(0,m.createElement)("form",{className:"block-editor-url-popover__link-editor",onSubmit:e=>{e.preventDefault(),l(!1)}},(0,m.createElement)("div",{className:"block-editor-url-input"},(0,m.createElement)(g.URLInput,{__nextHasNoMarginBottom:!0,value:t,onChange:e=>n({url:e}),placeholder:(0,v.__)("Enter address"),disableSuggestions:!0})),(0,m.createElement)(p.Button,{icon:f,label:(0,v.__)("Apply"),type:"submit"})))},P=e=>{let{attributes:t,isSelected:n,setAttributes:l}=e;const{slug:r,url:a,showLabel:o,label:s,labelCondensed:i,labelPosition:c,size:u}=t,[h,b]=(0,m.useState)(!1),[w,f]=(0,m.useState)(null),E=d()({"has-visible-label":o,[`is-label-position-${c}`]:o},"hrswds-svg-icon","hrswds-svg-icon-"+r),k=(0,g.useBlockProps)({className:E});return(0,m.createElement)("div",k,(0,m.createElement)(g.BlockControls,{group:"block"},(0,m.createElement)(p.ToolbarButton,{icon:_,title:(0,v.__)("Add link"),ref:f,onClick:()=>b(!0)}),(0,m.createElement)(p.ToolbarButton,{title:(0,v.__)("Replace SVG icon"),text:(0,v.__)("Replace"),onClick:()=>l({slug:""})})),(0,m.createElement)(g.InspectorControls,null,(0,m.createElement)(p.PanelBody,{title:(0,v.__)("Icon settings")},(0,m.createElement)(p.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,v.__)("Size"),onChange:e=>l({size:e}),min:8,max:1e3,initialPosition:u,value:u||48})),(0,m.createElement)(p.PanelBody,{title:(0,v.__)("Label settings")},(0,m.createElement)(p.PanelRow,null,(0,m.createElement)(p.TextControl,{__nextHasNoMarginBottom:!0,label:(0,v.__)("Icon label"),help:(0,v.__)("Add accompanying text or briefly describe the icon to help screen reader users."),value:s||"",onChange:e=>l({label:e})})),(0,m.createElement)(p.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,v.__)("Show label"),checked:o,onChange:()=>l({showLabel:!o})}),o&&(0,m.createElement)(p.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,v.__)("Label position"),value:c,options:[{label:"Top",value:"top"},{label:"Right",value:"right"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"}],onChange:e=>l({labelPosition:e})}))),(0,m.createElement)(g.InspectorControls,{group:"advanced"},(0,m.createElement)(p.TextControl,{__nextHasNoMarginBottom:!0,label:(0,v.__)("Icon label (short version)"),help:(0,v.__)("Add accompanying text that will replace the label on small screens."),value:i||"",onChange:e=>l({labelCondensed:e})})),(0,m.createElement)(q,{slug:r,url:a,showLabel:o,label:s,labelCondensed:i,size:u}),n&&h&&(0,m.createElement)(C,{url:a,setAttributes:l,setPopover:b,popoverAnchor:w}))},L=e=>{let{name:t,setAttributes:n}=e;const{blockType:l,defaultVariation:r,variations:a}=(0,E.useSelect)((e=>{const{getBlockVariations:n,getBlockType:l,getDefaultBlockVariation:r}=e(o.store);return{blockType:l(t),defaultVariation:r(t,"block"),variations:n(t,"block")}}),[t]),s=(0,g.useBlockProps)();return(0,m.createElement)("div",s,(0,m.createElement)(g.__experimentalBlockVariationPicker,{icon:(0,b.get)(l,["icon","src"]),label:(0,b.get)(l,["title"]),variations:a,onSelect:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;e.attributes&&n(e.attributes)}}))};var z=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hrswds/svg-selector","title":"SVG Selector","category":"media","description":"Insert an icon from a library of SVGs.","keywords":["img","icon","svg"],"textdomain":"default","attributes":{"slug":{"type":"string"},"size":{"type":"number","default":48},"url":{"type":"string"},"showLabel":{"type":"boolean","default":false},"label":{"type":"string"},"labelCondensed":{"type":"string"},"labelPosition":{"type":"string","default":"right"}},"supports":{"reusable":false,"html":false,"align":true,"color":{"text":true,"background":true,"link":false}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"round","label":"Round tile"},{"name":"square","label":"Square tile"}],"editorScript":"hrswds-blocks-script","style":"hrswds-blocks-style"}');const{name:V}=z,T={icon:y,edit:e=>{const{attributes:t}=e,n=t.slug?.length>0?P:L;return(0,m.createElement)(n,e)},save:function(e){let{attributes:t}=e;const{slug:n,url:l,showLabel:r,label:a,labelCondensed:o,labelPosition:s,size:i}=t,c=d()({"has-visible-label":r,[`is-label-position-${s}`]:r},"hrswds-svg-icon","hrswds-svg-icon-"+n),u=g.useBlockProps.save({className:c});return(0,m.createElement)("div",u,(0,m.createElement)(q,{slug:n,url:l,showLabel:r,label:a,labelCondensed:o,size:i}))},variations:S},A=[l,r];[a].forEach((e=>{if(!e)return;const{metadata:t,settings:n,name:l}=e;(0,o.registerBlockType)(l,{...t,...n})})),A.forEach((e=>{if(!e)return;const{metadata:t,name:n}=e;(0,o.registerBlockStyle)(n,t.styles)}))},184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)l.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=function(t,n,r,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||o>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],s=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(i)var u=i(l)}for(t&&t(n);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},n=self.webpackChunk_washingtonstateuniversity_hrswp_theme_wds=self.webpackChunk_washingtonstateuniversity_hrswp_theme_wds||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=l.O(void 0,[431],(function(){return l(297)}));r=l.O(r)}();