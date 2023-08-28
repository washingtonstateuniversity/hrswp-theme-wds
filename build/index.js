!function(){var e,t={428:function(e,t,o){"use strict";var l={};o.r(l),o.d(l,{metadata:function(){return i},name:function(){return u}});var n={};o.r(n),o.d(n,{metadata:function(){return d},name:function(){return m}});var r={};o.r(r),o.d(r,{metadata:function(){return g},name:function(){return h}});var a={};o.r(a),o.d(a,{metadata:function(){return S},name:function(){return B},settings:function(){return x}});var c={};o.r(c),o.d(c,{metadata:function(){return G},name:function(){return j},settings:function(){return D}});var s=window.wp.blocks,i=JSON.parse('{"name":"core/button","apiVersion":3,"styles":[{"name":"round","label":"Round"},{"name":"small","label":"Small"},{"name":"large","label":"Large"}],"extraStyle":[{"source":"file:./block.css","internal":true}]}');const{name:u}=i;var d=JSON.parse('{"name":"core/image","apiVersion":3,"styles":[{"name":"framed","label":"Framed"}],"extraStyle":[{"source":"file:./block.css","internal":true}]}');const{name:m}=d;var g=JSON.parse('{"name":"core/list","apiVersion":3,"styles":[{"name":"boxed","label":"Rectangle"},{"name":"arrow","label":"Arrow"},{"name":"checkbox","label":"Checkbox"},{"name":"checkmark","label":"Checkmark"},{"name":"lined","label":"Lined"}],"extraStyle":[{"source":"file:./block.css","internal":true}]}');const{name:h}=g;var p=window.wp.element,b=window.wp.i18n,v=window.wp.blockEditor,f=window.wp.components,w=window.wp.primitives,C=(0,p.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,p.createElement)(w.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"})),k=(0,p.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,p.createElement)(w.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"}));const _=["hrswds/svg-selector","core/site-title","core/site-tagline","core/group"],E=[["hrswds/svg-selector",{iconColor:"primary",iconColorValue:"var(--wp--custom--wsu-color-crimson--crimson)",iconColorClass:"has-primary-icon-color",slug:"cougar",size:86}],["core/group",{className:"wsu-logo-lockup__title-wrapper"},[["core/site-tagline",{fontSize:"small"}],["core/site-title",{level:0,isLink:!1}]]]],y=({url:e,setAttributes:t,setPopover:o,popoverAnchor:l})=>(0,p.createElement)(v.URLPopover,{anchor:l,onClose:()=>o(!1)},(0,p.createElement)("form",{className:"block-editor-url-popover__link-editor",onSubmit:e=>{e.preventDefault(),o(!1)}},(0,p.createElement)("div",{className:"block-editor-url-input"},(0,p.createElement)(v.URLInput,{__nextHasNoMarginBottom:!0,value:e,onChange:e=>t({url:e}),placeholder:(0,b.__)("Enter address"),disableSuggestions:!0})),(0,p.createElement)(f.Button,{icon:C,label:(0,b.__)("Apply"),type:"submit"})));var S=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hrswds/logo-lockup","title":"Logo Lockup","category":"theme","description":"The WSU HRS logo lockup.","keywords":["img","logo"],"textdomain":"default","attributes":{"url":{"type":"string"}},"supports":{"reusable":false,"html":false,"align":true},"editorScript":"hrswds-blocks-script","editorStyle":"hrswds-global-editor-style","extraStyle":[{"source":"file:./block.css","internal":true}]}');const{name:B}=S,x={icon:({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"M28.8,45.1c0,0,2.2-0.9,3.4-4.5c0.6,1.4,0.9,2.9,0.8,4.4C31.4,45.1,30.1,45.1,28.8,45.1z M37.8,37.9 c-6.3,0.9-7.4-12.3-7.4-12.3s2.1,6.8,6.7,6.5c4.7-0.3,3.4-7.4,3.4-7.4S44.9,37,37.8,37.9z M8.8,34.9c-2,0.6-4,1.1-6,1.4 c0,0,3.6-2.8,6.2-11.1l2.6,2.4l-0.4,1.6c0.7,0.9,1.2,1.9,1.5,3c1-2.2,0.9-4.7-0.2-6.8l-0.3,1l-1.1-0.9l-1.7-1.6 c0.7-2.2,1.9-4.3,3.2-6.1l0.3,0.3l2,2.3l-0.6,0.9c0.9,1.1,1.8,2,2.6,3.2c0.4-2,0.3-4.1-0.3-6.1l-0.9,0.9l-2.2-2.6 c2.8-2.8,6-5,9.9-6.2c-0.3,0.3-0.4,0.4-0.6,0.8c-1.2,1.8-2.5,4.9-1.4,10c0.2,0.8,0.4,2,0.7,3.1c0.5,2.3,1.2,5,1.3,6.7 c0.4,3.5,0.1,5.7-1.1,6.9c-0.8,0.9-2.1,1.2-3.9,1.2v-0.9c0-1.4-0.2-2.9-0.4-4.4l-0.4-1.6l-0.7,1.6c-1.2,2.5-5.2,8.5-10.5,9.8 C7.7,40.9,8.6,37.9,8.8,34.9z M24.2,44.9H24h-0.1h-0.2c-0.3,0-0.4-0.1-0.7-0.1c-0.4-0.1-1-0.1-1.6-0.3c-3.9-0.7-7.8-1.1-11.8-1.2 c3.7-2.2,6.3-6,7.3-7.6c0.1,0.8,0.2,1.5,0.2,2.3c0,0.4,0,1-0.1,1.3l0,0.7l0.7,0.1c0.4,0.1,0.8,0.1,1.2,0.1c2,0,3.5-0.4,4.4-1.5 c1.4-1.5,1.9-4.1,1.4-8c-0.3-1.8-0.9-4.5-1.4-6.8c-0.3-1.2-0.5-2.3-0.7-3c-0.9-4.6,0.2-7.5,1.2-9c0.8-1.2,2-2,3.4-2.6h0.1l2-6.6H30 l-1.4,6.2C29,9,29.3,9,29.6,8.9l1.9-5.8H32l-1.2,5.6c1.8-0.3,3.7-0.4,6.2-0.6c0.4,0.3,0.9,0.7,1.1,1.2l6-1.9l0.3,0.7l-5.8,2.2 c0.1,0.1,0.1,0.3,0.1,0.4l6.2-0.8l0.1,0.7l-6,1.2c0,0.1,0.1,0.3,0.1,0.4l6.3,0.2v0.7l-6.1,0.3c0,0.7-0.1,1.4-0.3,2.2 c0.4,1.2,0.4,2.6,0.2,3.9c-1.1-2.4-1.9-3.1-1.9-3.1c-0.9-0.4-1.8-0.6-2.8-0.6c-1.5,0-2.9,0.7-3.9,1.8c-1.4,1.6-2.1,3.6-2,5.8 c0.1,1.4,0.4,3.1,0.9,5.2c0.4,2.2,1,4.9,1.4,8.2c0.4,2.5-0.1,4.4-1.1,5.9c-1,1.2-2.4,2-3.9,2.3h-0.1h-0.1h-0.1 C25.6,44.9,24.2,44.9,24.2,44.9z M30.5,13.6c-1.2-0.1-2.6,0.3-3.6,0.8C26,15,25.4,16,25.3,17.2c-0.1,0.4-0.1,0.7,0,1.1 c0.4-0.9,1.2-1.7,2-2.4c1.4-0.9,3.1-1.4,4.8-1.4h0.5h0.2c0.3,0,0.4-0.1,0.4-0.1c0-0.1-0.1-0.2-0.3-0.3 C32.3,13.7,31.4,13.5,30.5,13.6z"})),edit:function({attributes:e,setAttributes:t,isSelected:o}){const{url:l}=e,[n,r]=(0,p.useState)(!1),[a,c]=(0,p.useState)(null),s=(0,v.useBlockProps)(),{children:i,...u}=(0,v.useInnerBlocksProps)(s,{allowedBlocks:_,template:E,templateLock:"all"}),d=l?(0,p.createElement)("a",{href:l,...u,onClick:e=>{e.preventDefault()}},i):(0,p.createElement)("span",{...u},i);return(0,p.createElement)(p.Fragment,null,(0,p.createElement)(v.BlockControls,{group:"other"},(0,p.createElement)(f.ToolbarButton,{icon:k,title:(0,b.__)("Add link"),ref:c,onClick:()=>r(!0)})),d,o&&n&&(0,p.createElement)(y,{url:l,setAttributes:t,setPopover:r,popoverAnchor:a}))},save:function({attributes:e}){const{url:t}=e,o=v.useBlockProps.save(),{children:l,...n}=v.useInnerBlocksProps.save(o);return t?(0,p.createElement)("a",{href:t,...n},l):(0,p.createElement)("span",{...n},l)}};var V=o(184),L=o.n(V),P=window.lodash,z=window.wp.data;const A=({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"M19.647,16.706a1.134,1.134,0,0,0-.343-.833l-2.549-2.549a1.134,1.134,0,0,0-.833-.343,1.168,1.168,0,0,0-.883.392l.233.226q.2.189.264.264a2.922,2.922,0,0,1,.184.233.986.986,0,0,1,.159.312,1.242,1.242,0,0,1,.043.337,1.172,1.172,0,0,1-1.176,1.176,1.237,1.237,0,0,1-.337-.043,1,1,0,0,1-.312-.159,2.76,2.76,0,0,1-.233-.184q-.073-.068-.264-.264l-.226-.233a1.19,1.19,0,0,0-.4.895,1.134,1.134,0,0,0,.343.833L15.837,19.3a1.13,1.13,0,0,0,.833.331,1.18,1.18,0,0,0,.833-.318l1.8-1.789a1.12,1.12,0,0,0,.343-.821Zm-8.615-8.64a1.134,1.134,0,0,0-.343-.833L8.163,4.7a1.134,1.134,0,0,0-.833-.343,1.184,1.184,0,0,0-.833.331L4.7,6.473a1.12,1.12,0,0,0-.343.821,1.134,1.134,0,0,0,.343.833l2.549,2.549a1.13,1.13,0,0,0,.833.331,1.184,1.184,0,0,0,.883-.38L8.728,10.4q-.2-.189-.264-.264A2.922,2.922,0,0,1,8.28,9.9a.986.986,0,0,1-.159-.312,1.242,1.242,0,0,1-.043-.337A1.172,1.172,0,0,1,9.254,8.079a1.237,1.237,0,0,1,.337.043,1,1,0,0,1,.312.159,2.761,2.761,0,0,1,.233.184q.073.068.264.264l.226.233a1.19,1.19,0,0,0,.4-.895ZM22,16.706a3.343,3.343,0,0,1-1.042,2.488l-1.8,1.789a3.536,3.536,0,0,1-4.988-.025l-2.525-2.537a3.384,3.384,0,0,1-1.017-2.488,3.448,3.448,0,0,1,1.078-2.561l-1.078-1.078a3.434,3.434,0,0,1-2.549,1.078,3.4,3.4,0,0,1-2.5-1.029L3.029,9.794A3.4,3.4,0,0,1,2,7.294,3.343,3.343,0,0,1,3.042,4.806l1.8-1.789A3.384,3.384,0,0,1,7.331,2a3.357,3.357,0,0,1,2.5,1.042l2.525,2.537a3.384,3.384,0,0,1,1.017,2.488,3.448,3.448,0,0,1-1.078,2.561l1.078,1.078a3.551,3.551,0,0,1,5.049-.049l2.549,2.549A3.4,3.4,0,0,1,22,16.706Z"})),M=({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"M28.8,45.1c0,0,2.2-0.9,3.4-4.5c0.6,1.4,0.9,2.9,0.8,4.4C31.4,45.1,30.1,45.1,28.8,45.1z M37.8,37.9 c-6.3,0.9-7.4-12.3-7.4-12.3s2.1,6.8,6.7,6.5c4.7-0.3,3.4-7.4,3.4-7.4S44.9,37,37.8,37.9z M8.8,34.9c-2,0.6-4,1.1-6,1.4 c0,0,3.6-2.8,6.2-11.1l2.6,2.4l-0.4,1.6c0.7,0.9,1.2,1.9,1.5,3c1-2.2,0.9-4.7-0.2-6.8l-0.3,1l-1.1-0.9l-1.7-1.6 c0.7-2.2,1.9-4.3,3.2-6.1l0.3,0.3l2,2.3l-0.6,0.9c0.9,1.1,1.8,2,2.6,3.2c0.4-2,0.3-4.1-0.3-6.1l-0.9,0.9l-2.2-2.6 c2.8-2.8,6-5,9.9-6.2c-0.3,0.3-0.4,0.4-0.6,0.8c-1.2,1.8-2.5,4.9-1.4,10c0.2,0.8,0.4,2,0.7,3.1c0.5,2.3,1.2,5,1.3,6.7 c0.4,3.5,0.1,5.7-1.1,6.9c-0.8,0.9-2.1,1.2-3.9,1.2v-0.9c0-1.4-0.2-2.9-0.4-4.4l-0.4-1.6l-0.7,1.6c-1.2,2.5-5.2,8.5-10.5,9.8 C7.7,40.9,8.6,37.9,8.8,34.9z M24.2,44.9H24h-0.1h-0.2c-0.3,0-0.4-0.1-0.7-0.1c-0.4-0.1-1-0.1-1.6-0.3c-3.9-0.7-7.8-1.1-11.8-1.2 c3.7-2.2,6.3-6,7.3-7.6c0.1,0.8,0.2,1.5,0.2,2.3c0,0.4,0,1-0.1,1.3l0,0.7l0.7,0.1c0.4,0.1,0.8,0.1,1.2,0.1c2,0,3.5-0.4,4.4-1.5 c1.4-1.5,1.9-4.1,1.4-8c-0.3-1.8-0.9-4.5-1.4-6.8c-0.3-1.2-0.5-2.3-0.7-3c-0.9-4.6,0.2-7.5,1.2-9c0.8-1.2,2-2,3.4-2.6h0.1l2-6.6H30 l-1.4,6.2C29,9,29.3,9,29.6,8.9l1.9-5.8H32l-1.2,5.6c1.8-0.3,3.7-0.4,6.2-0.6c0.4,0.3,0.9,0.7,1.1,1.2l6-1.9l0.3,0.7l-5.8,2.2 c0.1,0.1,0.1,0.3,0.1,0.4l6.2-0.8l0.1,0.7l-6,1.2c0,0.1,0.1,0.3,0.1,0.4l6.3,0.2v0.7l-6.1,0.3c0,0.7-0.1,1.4-0.3,2.2 c0.4,1.2,0.4,2.6,0.2,3.9c-1.1-2.4-1.9-3.1-1.9-3.1c-0.9-0.4-1.8-0.6-2.8-0.6c-1.5,0-2.9,0.7-3.9,1.8c-1.4,1.6-2.1,3.6-2,5.8 c0.1,1.4,0.4,3.1,0.9,5.2c0.4,2.2,1,4.9,1.4,8.2c0.4,2.5-0.1,4.4-1.1,5.9c-1,1.2-2.4,2-3.9,2.3h-0.1h-0.1h-0.1 C25.6,44.9,24.2,44.9,24.2,44.9z M30.5,13.6c-1.2-0.1-2.6,0.3-3.6,0.8C26,15,25.4,16,25.3,17.2c-0.1,0.4-0.1,0.7,0,1.1 c0.4-0.9,1.2-1.7,2-2.4c1.4-0.9,3.1-1.4,4.8-1.4h0.5h0.2c0.3,0,0.4-0.1,0.4-0.1c0-0.1-0.1-0.2-0.3-0.3 C32.3,13.7,31.4,13.5,30.5,13.6z"})),q=[{name:"cougar",title:(0,b.__)("WSU Cougar head"),attributes:{slug:"cougar"},scope:["block"],icon:M},{name:"chain",title:(0,b.__)("Link"),attributes:{slug:"chain"},scope:["block"],icon:A},{name:"lab",title:(0,b.__)("Laboratory beaker"),attributes:{slug:"lab"},scope:["block"],icon:({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"M9 41q-1.6 0-2.275-1.475-.675-1.475.425-2.675l12.3-14.15V9.25H16.6q-.45 0-.775-.325T15.5 8.1q0-.45.325-.775T16.6 7h14.8q.45 0 .775.325t.325.825q0 .5-.325.8-.325.3-.775.3h-2.85V22.7l12.3 14.15q1.1 1.2.425 2.675Q40.6 41 39 41Z"}))},{name:"rocket",title:(0,b.__)("Rocket"),attributes:{slug:"rocket"},scope:["block"],icon:({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"m9.5 42.6 7.75-3.05q-1.45-3.45-2.125-6.35-.675-2.9-.925-6.75l-3.05 2.05q-.8.5-1.225 1.325-.425.825-.425 1.725Zm9.2-3.8h10.6q1.4-3.4 2.15-6.85.75-3.45.75-6.9 0-5.75-2.15-10.725T24 6.2q-3.9 3.15-6.05 8.125T15.8 25.05q0 3.45.75 6.9t2.15 6.85ZM24 25.15q-1.3 0-2.225-.925T20.85 22q0-1.3.925-2.225T24 18.85q1.3 0 2.225.925T27.15 22q0 1.3-.925 2.225T24 25.15ZM38.45 42.6V31.55q0-.9-.425-1.725Q37.6 29 36.85 28.55l-3.05-2.1q-.3 3.85-.95 6.775-.65 2.925-2.1 6.325Z"}))},{name:"trees",title:(0,b.__)("Trees"),attributes:{slug:"trees"},scope:["block"],icon:({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"M27.85 43v-6.2h4.35V43Zm-12 0v-7.6H1.9L11 22.15H6.45L18 5.75l11.55 16.4h-4.5l9.1 13.25H20.2V43Zm20-7.6-8.1-11.85h4.5L24.85 13 30 5.75l11.55 16.4h-4.5L46.1 35.4Z"}))},{name:"wrench",title:(0,b.__)("Wrench"),attributes:{slug:"wrench"},scope:["block"],icon:({size:e})=>(0,p.createElement)(w.SVG,{width:e,height:e,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},(0,p.createElement)(w.Path,{d:"M35.65 41.35 22.45 28.1q-1.15.45-2.325.75-1.175.3-2.475.3-4.65 0-7.95-3.275T6.4 17.9q0-1.35.325-2.65.325-1.3.975-2.45l7.15 7.1 5-4.8-7.2-7.25q1.15-.65 2.425-1t2.575-.35q4.75 0 8.1 3.35 3.35 3.35 3.35 8.05 0 1.35-.275 2.525-.275 1.175-.775 2.275L41.3 35.9q.45.5.45 1.2t-.45 1.15l-3.35 3.15q-.5.45-1.15.425-.65-.025-1.15-.475Z"}))}];q.forEach((e=>{e.isActive||(e.isActive=(e,t)=>e.slug===t.slug)}));var H=q;const N=e=>e.preventDefault(),T=e=>{const{slug:t,url:o,showLabel:l,label:n,labelCondensed:r,size:a}=e,c=(e=>{const t=H.find((t=>t.name===e));return t?t.icon:A})(t),s=(e=>{const t=H.find((t=>t.name===e));return t?t.title:(0,b.__)("Icon")})(t),i=null!=n?n:s,u=null!=r?r:"",d=L()("hrswds-svg-icon-label",{"screen-reader-text":!l}),m=L()("hrswds-svg-icon-label-condensed",{"screen-reader-text":!l}),g=(0,p.createElement)(p.Fragment,null,(0,p.createElement)(c,{size:a}),(0,p.createElement)("span",{className:d},i),u.length>0&&(0,p.createElement)("span",{className:m},r));return o?(0,p.createElement)("a",{href:o,className:"hrswds-svg-icon-container",onClick:N},g):(0,p.createElement)("span",{className:"hrswds-svg-icon-container"},g)},O=({url:e,setAttributes:t,setPopover:o,popoverAnchor:l})=>(0,p.createElement)(v.URLPopover,{anchor:l,onClose:()=>o(!1)},(0,p.createElement)("form",{className:"block-editor-url-popover__link-editor",onSubmit:e=>{e.preventDefault(),o(!1)}},(0,p.createElement)("div",{className:"block-editor-url-input"},(0,p.createElement)(v.URLInput,{__nextHasNoMarginBottom:!0,value:e,onChange:e=>t({url:e}),placeholder:(0,b.__)("Enter address"),disableSuggestions:!0})),(0,p.createElement)(f.Button,{icon:C,label:(0,b.__)("Apply"),type:"submit"}))),I=e=>{const{attributes:t,clientId:o,iconBackgroundColor:l,iconColor:n,isSelected:r,setAttributes:a,setIconBackgroundColor:c,setIconColor:s}=e,{iconBackgroundColorValue:i,iconBackgroundColorClass:u,iconColorValue:d,iconColorClass:m,iconLabel:g,labelCondensed:h,labelPosition:w,showLabel:C,size:_,slug:E,url:y}=t,[S,B]=(0,p.useState)(!1),[x,V]=(0,p.useState)(null),P=!(t.className?.includes("is-style-round")||t.className?.includes("is-style-square")),z=(0,p.useRef)({});(0,p.useEffect)((()=>{P?(z.current={iconBackgroundColor:l,iconBackgroundColorValue:i,iconBackgroundColorClass:u},a({iconBackgroundColor:void 0,iconBackgroundColorValue:void 0,iconBackgroundColorClass:void 0})):a({...z.current})}),[P]),(0,p.useEffect)((()=>{a({iconColorClass:n.class})}),[n,a]),(0,p.useEffect)((()=>{a({iconBackgroundColorClass:l.class})}),[l,a]);let A="";A=_<30?"has-small-icon-size":_>200?"has-large-icon-size":"has-default-icon-size";const M=L()(A,{"has-visible-label":C,[`is-label-position-${w}`]:C,"has-icon-color":n.color||d,"has-icon-background-color":l.color||i,[m]:m,[u]:u}),q=(0,v.useBlockProps)({className:M}),H=[{value:n.color||d,onChange:e=>{s(e),a({iconColorValue:e})},label:(0,b.__)("Icon color"),resetAllFilter:()=>{s(void 0),a({iconColorValue:void 0})}}];P||H.push({value:l.color||i,onChange:e=>{c(e),a({iconBackgroundColorValue:e})},label:(0,b.__)("Icon background"),resetAllFilter:()=>{c(void 0),a({iconBackgroundColorValue:void 0})}});const N=(0,v.__experimentalUseMultipleOriginColorsAndGradients)();return(0,p.createElement)("div",{...q},(0,p.createElement)(v.BlockControls,{group:"other"},(0,p.createElement)(f.ToolbarButton,{icon:k,title:(0,b.__)("Add link"),ref:V,onClick:()=>B(!0)}),(0,p.createElement)(f.ToolbarButton,{title:(0,b.__)("Replace SVG icon"),text:(0,b.__)("Replace"),onClick:()=>a({slug:""})})),(0,p.createElement)(v.InspectorControls,null,(0,p.createElement)(f.PanelBody,{title:(0,b.__)("Icon settings")},(0,p.createElement)(f.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Size"),onChange:e=>a({size:e}),min:16,max:400,initialPosition:_,value:_||48})),(0,p.createElement)(f.PanelBody,{title:(0,b.__)("Label settings")},(0,p.createElement)(f.PanelRow,null,(0,p.createElement)(f.TextControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Icon label"),help:(0,b.__)("Add accompanying text or briefly describe the icon to help screen reader users."),value:g||"",onChange:e=>a({iconLabel:e})})),(0,p.createElement)(f.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Show label"),checked:C,onChange:()=>a({showLabel:!C})}),C&&(0,p.createElement)(f.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Label position"),value:w,options:[{label:"Top",value:"top"},{label:"Right",value:"right"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"}],onChange:e=>a({labelPosition:e})}))),(0,p.createElement)(v.InspectorControls,{group:"advanced"},(0,p.createElement)(f.TextControl,{__nextHasNoMarginBottom:!0,label:(0,b.__)("Icon label (short version)"),help:(0,b.__)("Add accompanying text that will replace the label on small screens."),value:h||"",onChange:e=>a({labelCondensed:e})})),(0,p.createElement)(v.InspectorControls,{group:"color"},H.map((({onChange:e,label:t,value:l,resetAllFilter:n})=>(0,p.createElement)(v.__experimentalColorGradientSettingsDropdown,{key:`svg-selector-color-${t}`,__experimentalIsRenderedInSidebar:!0,settings:[{colorValue:l,label:t,onColorChange:e,isShownByDefault:!0,resetAllFilter:n,enableAlpha:!0}],panelId:o,...N}))),!P&&(0,p.createElement)(v.ContrastChecker,{textColor:d,backgroundColor:i,isLargeText:!1})),(0,p.createElement)(T,{slug:E,url:y,showLabel:C,label:g,labelCondensed:h,size:_}),r&&S&&(0,p.createElement)(O,{url:y,setAttributes:a,setPopover:B,popoverAnchor:x}))},R=({name:e,setAttributes:t})=>{const{blockType:o,defaultVariation:l,variations:n}=(0,z.useSelect)((t=>{const{getBlockVariations:o,getBlockType:l,getDefaultBlockVariation:n}=t(s.store);return{blockType:l(e),defaultVariation:n(e,"block"),variations:o(e,"block")}}),[e]),r=(0,v.useBlockProps)();return(0,p.createElement)("div",{...r},(0,p.createElement)(v.__experimentalBlockVariationPicker,{icon:(0,P.get)(o,["icon","src"]),label:(0,P.get)(o,["title"]),variations:n,onSelect:(e=l)=>{e.attributes&&t(e.attributes)}}))};var Z=(0,v.withColors)({iconColor:"icon-color",iconBackgroundColor:"icon-background-color"})((e=>{const{attributes:t}=e,o=t.slug?.length>0?I:R;return(0,p.createElement)(o,{...e})})),G=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hrswds/svg-selector","title":"SVG Selector","category":"media","description":"Insert an icon from a library of SVGs.","keywords":["img","icon","svg"],"textdomain":"default","attributes":{"iconColor":{"type":"string"},"iconColorValue":{"type":"string"},"iconColorClass":{"type":"string"},"iconBackgroundColor":{"type":"string"},"iconBackgroundColorValue":{"type":"string"},"iconBackgroundColorClass":{"type":"string"},"slug":{"type":"string"},"size":{"type":"number","default":48},"url":{"type":"string"},"showLabel":{"type":"boolean","default":false},"iconLabel":{"type":"string"},"labelCondensed":{"type":"string"},"labelPosition":{"type":"string","default":"right"}},"providesContext":{"iconColor":"iconColor","iconColorValue":"iconColorValue","backgroundColor":"backgroundColorValue","iconBackgroundColorValue":"iconBackgroundColorValue"},"supports":{"reusable":false,"html":false,"align":true,"color":{"enableContrastChecker":false,"text":true,"background":true,"link":false}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"round","label":"Round tile"},{"name":"square","label":"Square tile "}],"editorScript":"hrswds-blocks-script","extraStyle":[{"source":"file:./block.css","internal":true}]}');const{name:j}=G,D={icon:M,edit:Z,save:function(e){const{attributes:{slug:t,url:o,showLabel:l,iconLabel:n,labelCondensed:r,labelPosition:a,size:c,iconBackgroundColorValue:s,iconBackgroundColorClass:i,iconColorValue:u,iconColorClass:d}}=e;let m="";m=c<30?"has-small-icon-size":c>200?"has-large-icon-size":"has-default-icon-size";const g=L()(m,{"has-visible-label":l,[`is-label-position-${a}`]:l,"has-icon-color":u,"has-icon-background-color":s,[d]:d,[i]:i}),h=v.useBlockProps.save({className:g});return(0,p.createElement)("div",{...h},(0,p.createElement)(T,{slug:t,url:o,showLabel:l,label:n,labelCondensed:r,size:c}))},variations:H},F=[l,n,r];[a,c].forEach((e=>{if(!e)return;const{metadata:t,settings:o,name:l}=e;(0,s.registerBlockType)(l,{...t,...o})})),F.forEach((e=>{if(!e)return;const{metadata:t,name:o}=e;(0,s.registerBlockStyle)(o,t.styles)}))},184:function(e,t){var o;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var c in o)l.call(o,c)&&o[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function l(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,o,n,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],r=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](o[s])}))?o.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,a=o[0],c=o[1],s=o[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var u=s(l)}for(t&&t(o);i<a.length;i++)r=a[i],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},o=self.webpackChunk_washingtonstateuniversity_hrswp_theme_wds=self.webpackChunk_washingtonstateuniversity_hrswp_theme_wds||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=l.O(void 0,[431],(function(){return l(428)}));n=l.O(n)}();