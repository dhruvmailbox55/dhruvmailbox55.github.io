"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[807],{23926:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),o=n(30067),i=n(73633),a=n(57094),l=n(85893);function s(e){return e.substring(2).toLowerCase()}const u=function(e){const{children:t,disableReactTree:n=!1,mouseEvent:u="onClick",onClickAway:c,touchEvent:d="onTouchEnd"}=e,f=r.useRef(!1),p=r.useRef(null),v=r.useRef(!1),m=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{v.current=!0}),0),()=>{v.current=!1})),[]);const h=(0,o.Z)(t.ref,p),g=(0,i.Z)((e=>{const t=m.current;m.current=!1;const r=(0,a.Z)(p.current);if(!v.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(f.current)return void(f.current=!1);let o;o=e.composedPath?e.composedPath().indexOf(p.current)>-1:!r.documentElement.contains(e.target)||p.current.contains(e.target),o||!n&&t||c(e)})),b=e=>n=>{m.current=!0;const r=t.props[e];r&&r(n)},x={ref:h};return!1!==d&&(x[d]=b(d)),r.useEffect((()=>{if(!1!==d){const e=s(d),t=(0,a.Z)(p.current),n=()=>{f.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",n)}}}),[g,d]),!1!==u&&(x[u]=b(u)),r.useEffect((()=>{if(!1!==u){const e=s(u),t=(0,a.Z)(p.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}}),[g,u]),(0,l.jsx)(r.Fragment,{children:r.cloneElement(t,x)})}},31187:(e,t,n)=>{n.d(t,{GU:()=>r.G,gk:()=>r.Z,vk:()=>o.Z,xS:()=>o.x});var r=n(72047),o=n(79503)},79104:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(16600),i=n(85893);const a=function(e){const{children:t,defer:n=!1,fallback:a=null}=e,[l,s]=r.useState(!1);return(0,o.Z)((()=>{n||s(!0)}),[n]),r.useEffect((()=>{n&&s(!0)}),[n]),(0,i.jsx)(r.Fragment,{children:l?t:a})}},68111:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),o=n(63366),i=n(67294),a=n(30067),l=n(16600),s=n(57094),u=n(74511),c=n(94780),d=n(78385),f=n(34867);function p(e){return(0,f.Z)("MuiPopper",e)}(0,n(1588).Z)("MuiPopper",["root"]);var v=n(90358),m=n(31873),h=n(85893);const g=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],b=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function x(e){return"function"==typeof e?e():e}function y(e){return void 0!==e.nodeType}const k={},w=i.forwardRef((function(e,t){var n;const{anchorEl:s,children:d,component:f,direction:b,disablePortal:y,modifiers:k,open:w,ownerState:E,placement:S,popperOptions:O,popperRef:Z,slotProps:P={},slots:L={},TransitionProps:R}=e,C=(0,o.Z)(e,g),T=i.useRef(null),A=(0,a.Z)(T,t),M=i.useRef(null),D=(0,a.Z)(M,Z),I=i.useRef(D);(0,l.Z)((()=>{I.current=D}),[D]),i.useImperativeHandle(Z,(()=>M.current),[]);const F=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(S,b),[H,$]=i.useState(F),[V,B]=i.useState(x(s));i.useEffect((()=>{M.current&&M.current.forceUpdate()})),i.useEffect((()=>{s&&B(x(s))}),[s]),(0,l.Z)((()=>{if(!V||!w)return;let e=[{name:"preventOverflow",options:{altBoundary:y}},{name:"flip",options:{altBoundary:y}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{$(e.placement)}}];null!=k&&(e=e.concat(k)),O&&null!=O.modifiers&&(e=e.concat(O.modifiers));const t=(0,u.fi)(V,T.current,(0,r.Z)({placement:F},O,{modifiers:e}));return I.current(t),()=>{t.destroy(),I.current(null)}}),[V,y,k,w,O,F]);const z={placement:H};null!==R&&(z.TransitionProps=R);const N=(0,c.Z)({root:["root"]},(0,m.T)(p)),j=null!=(n=null!=f?f:L.root)?n:"div",q=(0,v.Z)({elementType:j,externalSlotProps:P.root,externalForwardedProps:C,additionalProps:{role:"tooltip",ref:A},ownerState:(0,r.Z)({},e,E),className:N.root});return(0,h.jsx)(j,(0,r.Z)({},q,{children:"function"==typeof d?d(z):d}))})),E=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:l,direction:u="ltr",disablePortal:c=!1,keepMounted:f=!1,modifiers:p,open:v,placement:m="bottom",popperOptions:g=k,popperRef:E,style:S,transition:O=!1,slotProps:Z={},slots:P={}}=e,L=(0,o.Z)(e,b),[R,C]=i.useState(!0);if(!f&&!v&&(!O||R))return null;let T;if(l)T=l;else if(n){const e=x(n);T=e&&y(e)?(0,s.Z)(e).body:(0,s.Z)(null).body}const A=v||!f||O&&!R?void 0:"none",M=O?{in:v,onEnter:()=>{C(!1)},onExited:()=>{C(!0)}}:void 0;return(0,h.jsx)(d.Z,{disablePortal:c,container:T,children:(0,h.jsx)(w,(0,r.Z)({anchorEl:n,direction:u,disablePortal:c,modifiers:p,ref:t,open:O?!R:v,placement:m,popperOptions:g,popperRef:E,slotProps:Z,slots:P},L,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:A},S),TransitionProps:M,children:a}))})}))},93362:(e,t,n)=>{n.d(t,{D:()=>d,Z:()=>h});var r=n(87462),o=n(67294),i=n(57579),a=n(8925),l=n(2097),s=n(73633),u=n(7960);function c(e){return void 0!==e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function d(e={}){const{ignoreAccents:t=!0,ignoreCase:n=!0,limit:r,matchFrom:o="any",stringify:i,trim:a=!1}=e;return(e,{inputValue:l,getOptionLabel:s})=>{let u=a?l.trim():l;n&&(u=u.toLowerCase()),t&&(u=c(u));const d=u?e.filter((e=>{let r=(i||s)(e);return n&&(r=r.toLowerCase()),t&&(r=c(r)),"start"===o?0===r.indexOf(u):r.indexOf(u)>-1})):e;return"number"==typeof r?d.slice(0,r):d}}function f(e,t){for(let n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}const p=d(),v=5,m=e=>{var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function h(e){const{unstable_isActiveElementInListbox:t=m,unstable_classNamePrefix:n="Mui",autoComplete:c=!1,autoHighlight:d=!1,autoSelect:h=!1,blurOnSelect:g=!1,clearOnBlur:b=!e.freeSolo,clearOnEscape:x=!1,componentName:y="useAutocomplete",defaultValue:k=(e.multiple?[]:null),disableClearable:w=!1,disableCloseOnSelect:E=!1,disabled:S,disabledItemsFocusable:O=!1,disableListWrap:Z=!1,filterOptions:P=p,filterSelectedOptions:L=!1,freeSolo:R=!1,getOptionDisabled:C,getOptionLabel:T=(e=>{var t;return null!=(t=e.label)?t:e}),groupBy:A,handleHomeEndKeys:M=!e.freeSolo,id:D,includeInputInList:I=!1,inputValue:F,isOptionEqualToValue:H=((e,t)=>e===t),multiple:$=!1,onChange:V,onClose:B,onHighlightChange:z,onInputChange:N,onOpen:j,open:q,openOnFocus:U=!1,options:_,readOnly:W=!1,selectOnFocus:X=!e.freeSolo,value:K}=e,Y=(0,i.Z)(D);let G=T;G=e=>{const t=T(e);return"string"!=typeof t?String(t):t};const J=o.useRef(!1),Q=o.useRef(!0),ee=o.useRef(null),te=o.useRef(null),[ne,re]=o.useState(null),[oe,ie]=o.useState(-1),ae=d?0:-1,le=o.useRef(ae),[se,ue]=(0,a.Z)({controlled:K,default:k,name:y}),[ce,de]=(0,a.Z)({controlled:F,default:"",name:y,state:"inputValue"}),[fe,pe]=o.useState(!1),ve=o.useCallback(((e,t)=>{if(!($?se.length<t.length:null!==t)&&!b)return;let n;if($)n="";else if(null==t)n="";else{const e=G(t);n="string"==typeof e?e:""}ce!==n&&(de(n),N&&N(e,n,"reset"))}),[G,ce,$,N,de,b,se]),[me,he]=(0,a.Z)({controlled:q,default:!1,name:y,state:"open"}),[ge,be]=o.useState(!0),xe=!$&&null!=se&&ce===G(se),ye=me&&!W,ke=ye?P(_.filter((e=>!L||!($?se:[se]).some((t=>null!==t&&H(e,t))))),{inputValue:xe&&ge?"":ce,getOptionLabel:G}):[],we=(0,l.Z)({filteredOptions:ke,value:se});o.useEffect((()=>{const e=se!==we.value;fe&&!e||R&&!e||ve(null,se)}),[se,ve,fe,we.value,R]);const Ee=me&&ke.length>0&&!W;const Se=(0,s.Z)((e=>{-1===e?ee.current.focus():ne.querySelector(`[data-tag-index="${e}"]`).focus()}));o.useEffect((()=>{$&&oe>se.length-1&&(ie(-1),Se(-1))}),[se,$,oe,Se]);const Oe=(0,s.Z)((({event:e,index:t,reason:r="auto"})=>{if(le.current=t,-1===t?ee.current.removeAttribute("aria-activedescendant"):ee.current.setAttribute("aria-activedescendant",`${Y}-option-${t}`),z&&z(e,-1===t?null:ke[t],r),!te.current)return;const o=te.current.querySelector(`[role="option"].${n}-focused`);o&&(o.classList.remove(`${n}-focused`),o.classList.remove(`${n}-focusVisible`));const i=te.current.parentElement.querySelector('[role="listbox"]');if(!i)return;if(-1===t)return void(i.scrollTop=0);const a=te.current.querySelector(`[data-option-index="${t}"]`);if(a&&(a.classList.add(`${n}-focused`),"keyboard"===r&&a.classList.add(`${n}-focusVisible`),i.scrollHeight>i.clientHeight&&"mouse"!==r)){const e=a,t=i.clientHeight+i.scrollTop,n=e.offsetTop+e.offsetHeight;n>t?i.scrollTop=n-i.clientHeight:e.offsetTop-e.offsetHeight*(A?1.3:0)<i.scrollTop&&(i.scrollTop=e.offsetTop-e.offsetHeight*(A?1.3:0))}})),Ze=(0,s.Z)((({event:e,diff:t,direction:n="next",reason:r="auto"})=>{if(!ye)return;const o=function(e,t){if(!te.current||-1===e)return-1;let n=e;for(;;){if("next"===t&&n===ke.length||"previous"===t&&-1===n)return-1;const e=te.current.querySelector(`[data-option-index="${n}"]`),r=!O&&(!e||e.disabled||"true"===e.getAttribute("aria-disabled"));if(!(e&&!e.hasAttribute("tabindex")||r))return n;n+="next"===t?1:-1}}((()=>{const e=ke.length-1;if("reset"===t)return ae;if("start"===t)return 0;if("end"===t)return e;const n=le.current+t;return n<0?-1===n&&I?-1:Z&&-1!==le.current||Math.abs(t)>1?0:e:n>e?n===e+1&&I?-1:Z||Math.abs(t)>1?e:0:n})(),n);if(Oe({index:o,reason:r,event:e}),c&&"reset"!==t)if(-1===o)ee.current.value=ce;else{const e=G(ke[o]);ee.current.value=e;0===e.toLowerCase().indexOf(ce.toLowerCase())&&ce.length>0&&ee.current.setSelectionRange(ce.length,e.length)}})),Pe=o.useCallback((()=>{if(!ye)return;if((()=>{if(-1!==le.current&&we.filteredOptions&&we.filteredOptions.length!==ke.length&&($?se.length===we.value.length&&we.value.every(((e,t)=>G(se[t])===G(e))):(e=we.value,t=se,(e?G(e):"")===(t?G(t):"")))){const e=we.filteredOptions[le.current];if(e&&ke.some((t=>G(t)===G(e))))return!0}var e,t;return!1})())return;const e=$?se[0]:se;if(0!==ke.length&&null!=e){if(te.current)if(null==e)le.current>=ke.length-1?Oe({index:ke.length-1}):Oe({index:le.current});else{const t=ke[le.current];if($&&t&&-1!==f(se,(e=>H(t,e))))return;const n=f(ke,(t=>H(t,e)));-1===n?Ze({diff:"reset"}):Oe({index:n})}}else Ze({diff:"reset"})}),[ke.length,!$&&se,L,Ze,Oe,ye,ce,$]),Le=(0,s.Z)((e=>{(0,u.Z)(te,e),e&&Pe()}));o.useEffect((()=>{Pe()}),[Pe]);const Re=e=>{me||(he(!0),be(!0),j&&j(e))},Ce=(e,t)=>{me&&(he(!1),B&&B(e,t))},Te=(e,t,n,r)=>{if($){if(se.length===t.length&&se.every(((e,n)=>e===t[n])))return}else if(se===t)return;V&&V(e,t,n,r),ue(t)},Ae=o.useRef(!1),Me=(e,t,n="selectOption",r="options")=>{let o=n,i=t;if($){i=Array.isArray(se)?se.slice():[];const e=f(i,(e=>H(t,e)));-1===e?i.push(t):"freeSolo"!==r&&(i.splice(e,1),o="removeOption")}ve(e,i),Te(e,i,o,{option:t}),E||e&&(e.ctrlKey||e.metaKey)||Ce(e,o),(!0===g||"touch"===g&&Ae.current||"mouse"===g&&!Ae.current)&&ee.current.blur()};const De=(e,t)=>{if(!$)return;""===ce&&Ce(e,"toggleInput");let n=oe;-1===oe?""===ce&&"previous"===t&&(n=se.length-1):(n+="next"===t?1:-1,n<0&&(n=0),n===se.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;let n=e;for(;;){if("next"===t&&n===se.length||"previous"===t&&-1===n)return-1;const e=ne.querySelector(`[data-tag-index="${n}"]`);if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),ie(n),Se(n)},Ie=e=>{J.current=!0,de(""),N&&N(e,"","clear"),Te(e,$?[]:null,"clear")},Fe=e=>t=>{if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==oe&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(ie(-1),Se(-1)),229!==t.which))switch(t.key){case"Home":ye&&M&&(t.preventDefault(),Ze({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":ye&&M&&(t.preventDefault(),Ze({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),Ze({diff:-v,direction:"previous",reason:"keyboard",event:t}),Re(t);break;case"PageDown":t.preventDefault(),Ze({diff:v,direction:"next",reason:"keyboard",event:t}),Re(t);break;case"ArrowDown":t.preventDefault(),Ze({diff:1,direction:"next",reason:"keyboard",event:t}),Re(t);break;case"ArrowUp":t.preventDefault(),Ze({diff:-1,direction:"previous",reason:"keyboard",event:t}),Re(t);break;case"ArrowLeft":De(t,"previous");break;case"ArrowRight":De(t,"next");break;case"Enter":if(-1!==le.current&&ye){const e=ke[le.current],n=!!C&&C(e);if(t.preventDefault(),n)return;Me(t,e,"selectOption"),c&&ee.current.setSelectionRange(ee.current.value.length,ee.current.value.length)}else R&&""!==ce&&!1===xe&&($&&t.preventDefault(),Me(t,ce,"createOption","freeSolo"));break;case"Escape":ye?(t.preventDefault(),t.stopPropagation(),Ce(t,"escape")):x&&(""!==ce||$&&se.length>0)&&(t.preventDefault(),t.stopPropagation(),Ie(t));break;case"Backspace":if($&&!W&&""===ce&&se.length>0){const e=-1===oe?se.length-1:oe,n=se.slice();n.splice(e,1),Te(t,n,"removeOption",{option:se[e]})}break;case"Delete":if($&&!W&&""===ce&&se.length>0&&-1!==oe){const e=oe,n=se.slice();n.splice(e,1),Te(t,n,"removeOption",{option:se[e]})}}},He=e=>{pe(!0),U&&!J.current&&Re(e)},$e=e=>{t(te)?ee.current.focus():(pe(!1),Q.current=!0,J.current=!1,h&&-1!==le.current&&ye?Me(e,ke[le.current],"blur"):h&&R&&""!==ce?Me(e,ce,"blur","freeSolo"):b&&ve(e,se),Ce(e,"blur"))},Ve=e=>{const t=e.target.value;ce!==t&&(de(t),be(!1),N&&N(e,t,"input")),""===t?w||$||Te(e,null,"clear"):Re(e)},Be=e=>{Oe({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},ze=e=>{Oe({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Ae.current=!0},Ne=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index"));Me(e,ke[t],"selectOption"),Ae.current=!1},je=e=>t=>{const n=se.slice();n.splice(e,1),Te(t,n,"removeOption",{option:se[e]})},qe=e=>{me?Ce(e,"toggleInput"):Re(e)},Ue=e=>{e.target.getAttribute("id")!==Y&&e.preventDefault()},_e=()=>{ee.current.focus(),X&&Q.current&&ee.current.selectionEnd-ee.current.selectionStart==0&&ee.current.select(),Q.current=!1},We=e=>{""!==ce&&me||qe(e)};let Xe=R&&ce.length>0;Xe=Xe||($?se.length>0:null!==se);let Ke=ke;if(A){new Map;Ke=ke.reduce(((e,t,n)=>{const r=A(t);return e.length>0&&e[e.length-1].group===r?e[e.length-1].options.push(t):e.push({key:n,index:n,group:r,options:[t]}),e}),[])}return S&&fe&&$e(),{getRootProps:(e={})=>(0,r.Z)({"aria-owns":Ee?`${Y}-listbox`:null},e,{onKeyDown:Fe(e),onMouseDown:Ue,onClick:_e}),getInputLabelProps:()=>({id:`${Y}-label`,htmlFor:Y}),getInputProps:()=>({id:Y,value:ce,onBlur:$e,onFocus:He,onChange:Ve,onMouseDown:We,"aria-activedescendant":ye?"":null,"aria-autocomplete":c?"both":"list","aria-controls":Ee?`${Y}-listbox`:void 0,"aria-expanded":Ee,autoComplete:"off",ref:ee,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:S}),getClearProps:()=>({tabIndex:-1,onClick:Ie}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:qe}),getTagProps:({index:e})=>(0,r.Z)({key:e,"data-tag-index":e,tabIndex:-1},!W&&{onDelete:je(e)}),getListboxProps:()=>({role:"listbox",id:`${Y}-listbox`,"aria-labelledby":`${Y}-label`,ref:Le,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:({index:e,option:t})=>{const n=($?se:[se]).some((e=>null!=e&&H(t,e))),r=!!C&&C(t);return{key:G(t),tabIndex:-1,role:"option",id:`${Y}-option-${e}`,onMouseOver:Be,onClick:Ne,onTouchStart:ze,"data-option-index":e,"aria-disabled":r,"aria-selected":n}},id:Y,inputValue:ce,value:se,dirty:Xe,expanded:ye&&ne,popupOpen:ye,focused:fe||-1!==oe,anchorEl:ne,setAnchorEl:re,focusedTag:oe,groupedOptions:Ke}}},7761:(e,t,n)=>{n.d(t,{Rg:()=>g,ZP:()=>O});var r=n(87462),o=n(67294),i=n(57094),a=n(8925),l=n(99962),s=n(30067),u=n(16600),c=n(73633),d=n(13113);const f=2;function p(e,t){return e-t}function v(e,t,n){return null==e?t:Math.min(Math.max(t,e),n)}function m(e,t){var n;const{index:r}=null!=(n=e.reduce(((e,n,r)=>{const o=Math.abs(t-n);return null===e||o<e.distance||o===e.distance?{distance:o,index:r}:e}),null))?n:{};return r}function h(e,t){if(void 0!==t.current&&e.changedTouches){const n=e;for(let e=0;e<n.changedTouches.length;e+=1){const r=n.changedTouches[e];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function g(e,t,n){return 100*(e-t)/(n-t)}function b(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),n=t[0].split(".")[1];return(n?n.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function x({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(p)}function y({sliderRef:e,activeIndex:t,setActive:n}){var r,o;const a=(0,i.Z)(e.current);var l;null!=(r=e.current)&&r.contains(a.activeElement)&&Number(null==a||null==(o=a.activeElement)?void 0:o.getAttribute("data-index"))===t||(null==(l=e.current)||l.querySelector(`[type="range"][data-index="${t}"]`).focus());n&&n(t)}const k={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},w=e=>e;let E;function S(){return void 0===E&&(E="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("touch-action","none")),E}function O(e){const{"aria-labelledby":t,defaultValue:n,disabled:E=!1,disableSwap:O=!1,isRtl:Z=!1,marks:P=!1,max:L=100,min:R=0,name:C,onChange:T,onChangeCommitted:A,orientation:M="horizontal",ref:D,scale:I=w,step:F=1,tabIndex:H,value:$}=e,V=o.useRef(),[B,z]=o.useState(-1),[N,j]=o.useState(-1),[q,U]=o.useState(!1),_=o.useRef(0),[W,X]=(0,a.Z)({controlled:$,default:null!=n?n:R,name:"Slider"}),K=T&&((e,t,n)=>{const r=e.nativeEvent||e,o=new r.constructor(r.type,r);Object.defineProperty(o,"target",{writable:!0,value:{value:t,name:C}}),T(o,t,n)}),Y=Array.isArray(W);let G=Y?W.slice().sort(p):[W];G=G.map((e=>v(e,R,L)));const J=!0===P&&null!==F?[...Array(Math.floor((L-R)/F)+1)].map(((e,t)=>({value:R+F*t}))):P||[],Q=J.map((e=>e.value)),{isFocusVisibleRef:ee,onBlur:te,onFocus:ne,ref:re}=(0,l.Z)(),[oe,ie]=o.useState(-1),ae=o.useRef(),le=(0,s.Z)(re,ae),se=(0,s.Z)(D,le),ue=e=>t=>{var n;const r=Number(t.currentTarget.getAttribute("data-index"));ne(t),!0===ee.current&&ie(r),j(r),null==e||null==(n=e.onFocus)||n.call(e,t)},ce=e=>t=>{var n;te(t),!1===ee.current&&ie(-1),j(-1),null==e||null==(n=e.onBlur)||n.call(e,t)};(0,u.Z)((()=>{var e;E&&ae.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[E]),E&&-1!==B&&z(-1),E&&-1!==oe&&ie(-1);const de=e=>t=>{var n;null==(n=e.onChange)||n.call(e,t);const r=Number(t.currentTarget.getAttribute("data-index")),o=G[r],i=Q.indexOf(o);let a=t.target.valueAsNumber;if(J&&null==F&&(a=a<o?Q[i-1]:Q[i+1]),a=v(a,R,L),J&&null==F){const e=Q.indexOf(G[r]);a=a<G[r]?Q[e-1]:Q[e+1]}if(Y){O&&(a=v(a,G[r-1]||-1/0,G[r+1]||1/0));const e=a;a=x({values:G,newValue:a,index:r});let t=r;O||(t=a.indexOf(e)),y({sliderRef:ae,activeIndex:t})}X(a),ie(r),K&&K(t,a,r),A&&A(t,a)},fe=o.useRef();let pe=M;Z&&"horizontal"===M&&(pe+="-reverse");const ve=({finger:e,move:t=!1})=>{const{current:n}=ae,{width:r,height:o,bottom:i,left:a}=n.getBoundingClientRect();let l,s;if(l=0===pe.indexOf("vertical")?(i-e.y)/o:(e.x-a)/r,-1!==pe.indexOf("-reverse")&&(l=1-l),s=function(e,t,n){return(n-t)*e+t}(l,R,L),F)s=b(s,F,R);else{const e=m(Q,s);s=Q[e]}s=v(s,R,L);let u=0;if(Y){u=t?fe.current:m(G,s),O&&(s=v(s,G[u-1]||-1/0,G[u+1]||1/0));const e=s;s=x({values:G,newValue:s,index:u}),O&&t||(u=s.indexOf(e),fe.current=u)}return{newValue:s,activeIndex:u}},me=(0,c.Z)((e=>{const t=h(e,V);if(!t)return;if(_.current+=1,"mousemove"===e.type&&0===e.buttons)return void he(e);const{newValue:n,activeIndex:r}=ve({finger:t,move:!0});y({sliderRef:ae,activeIndex:r,setActive:z}),X(n),!q&&_.current>f&&U(!0),K&&n!==W&&K(e,n,r)})),he=(0,c.Z)((e=>{const t=h(e,V);if(U(!1),!t)return;const{newValue:n}=ve({finger:t,move:!0});z(-1),"touchend"===e.type&&j(-1),A&&A(e,n),V.current=void 0,be()})),ge=(0,c.Z)((e=>{if(E)return;S()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(V.current=t.identifier);const n=h(e,V);if(!1!==n){const{newValue:t,activeIndex:r}=ve({finger:n});y({sliderRef:ae,activeIndex:r,setActive:z}),X(t),K&&K(e,t,r)}_.current=0;const r=(0,i.Z)(ae.current);r.addEventListener("touchmove",me),r.addEventListener("touchend",he)})),be=o.useCallback((()=>{const e=(0,i.Z)(ae.current);e.removeEventListener("mousemove",me),e.removeEventListener("mouseup",he),e.removeEventListener("touchmove",me),e.removeEventListener("touchend",he)}),[he,me]);o.useEffect((()=>{const{current:e}=ae;return e.addEventListener("touchstart",ge,{passive:S()}),()=>{e.removeEventListener("touchstart",ge,{passive:S()}),be()}}),[be,ge]),o.useEffect((()=>{E&&be()}),[E,be]);const xe=e=>t=>{var n;if(null==(n=e.onMouseDown)||n.call(e,t),E)return;if(t.defaultPrevented)return;if(0!==t.button)return;t.preventDefault();const r=h(t,V);if(!1!==r){const{newValue:e,activeIndex:n}=ve({finger:r});y({sliderRef:ae,activeIndex:n,setActive:z}),X(e),K&&K(t,e,n)}_.current=0;const o=(0,i.Z)(ae.current);o.addEventListener("mousemove",me),o.addEventListener("mouseup",he)},ye=g(Y?G[0]:R,R,L),ke=g(G[G.length-1],R,L)-ye,we=e=>t=>{var n;null==(n=e.onMouseOver)||n.call(e,t);const r=Number(t.currentTarget.getAttribute("data-index"));j(r)},Ee=e=>t=>{var n;null==(n=e.onMouseLeave)||n.call(e,t),j(-1)};return{active:B,axis:pe,axisProps:k,dragging:q,focusedThumbIndex:oe,getHiddenInputProps:(n={})=>{var o;const i={onChange:de(n||{}),onFocus:ue(n||{}),onBlur:ce(n||{})},a=(0,r.Z)({},n,i);return(0,r.Z)({tabIndex:H,"aria-labelledby":t,"aria-orientation":M,"aria-valuemax":I(L),"aria-valuemin":I(R),name:C,type:"range",min:e.min,max:e.max,step:null!=(o=e.step)?o:void 0,disabled:E},a,{style:(0,r.Z)({},d.Z,{direction:Z?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:(e={})=>{const t={onMouseDown:xe(e||{})},n=(0,r.Z)({},e,t);return(0,r.Z)({ref:se},n)},getThumbProps:(e={})=>{const t={onMouseOver:we(e||{}),onMouseLeave:Ee(e||{})};return(0,r.Z)({},e,t)},marks:J,open:N,range:Y,trackLeap:ke,trackOffset:ye,values:G}}},68236:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(87462),o=n(67294),i=n(73633),a=n(30437);function l(e){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:l,open:s,ref:u,resumeHideDuration:c}=e,d=o.useRef();o.useEffect((()=>{if(s)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==l||l(e,"escapeKeyDown")}}),[s,l]);const f=(0,i.Z)(((e,t)=>{null==l||l(e,t)})),p=(0,i.Z)((e=>{l&&null!=e&&(clearTimeout(d.current),d.current=setTimeout((()=>{f(null,"timeout")}),e))}));o.useEffect((()=>(s&&p(t),()=>{clearTimeout(d.current)})),[s,t,p]);const v=()=>{clearTimeout(d.current)},m=o.useCallback((()=>{null!=t&&p(null!=c?c:.5*t)}),[t,c,p]),h=e=>t=>{const n=e.onBlur;null==n||n(t),m()},g=e=>t=>{const n=e.onFocus;null==n||n(t),v()},b=e=>t=>{const n=e.onMouseEnter;null==n||n(t),v()},x=e=>t=>{const n=e.onMouseLeave;null==n||n(t),m()};o.useEffect((()=>{if(!n&&s)return window.addEventListener("focus",m),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",v)}}),[n,m,s]);return{getRootProps:(t={})=>{const n=(0,a.Z)(e),o=(0,r.Z)({},n,t);return(0,r.Z)({ref:u,role:"presentation"},o,{onBlur:h(o),onFocus:g(o),onMouseEnter:b(o),onMouseLeave:x(o)})},onClickAway:e=>{null==l||l(e,"clickaway")}}}},82019:(e,t,n)=>{var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.default=a},61659:(e,t,n)=>{var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.default=a},37958:(e,t,n)=>{var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=a},64910:(e,t,n)=>{n.d(t,{Z:()=>o});var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const o=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}))},84839:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=1/60*1e3,r="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()},o="undefined"!=typeof window?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout((function(){return e(r())}),n)};var i=!0,a=!1,l=!1,s={delta:0,timestamp:0},u=["read","update","preRender","render","postRender"],c=u.reduce((function(e,t){return e[t]=function(e){var t=[],n=[],r=0,o=!1,i=new WeakSet,a={schedule:function(e,a,l){void 0===a&&(a=!1),void 0===l&&(l=!1);var s=l&&o,u=s?t:n;return a&&i.add(e),-1===u.indexOf(e)&&(u.push(e),s&&o&&(r=t.length)),e},cancel:function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1),i.delete(e)},process:function(l){var s;if(o=!0,t=(s=[n,t])[0],(n=s[1]).length=0,r=t.length)for(var u=0;u<r;u++){var c=t[u];c(l),i.has(c)&&(a.schedule(c),e())}o=!1}};return a}((function(){return a=!0})),e}),{}),d=u.reduce((function(e,t){var n=c[t];return e[t]=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!1),a||h(),n.schedule(e,t,r)},e}),{}),f=u.reduce((function(e,t){return e[t]=c[t].cancel,e}),{}),p=u.reduce((function(e,t){return e[t]=function(){return c[t].process(s)},e}),{}),v=function(e){return c[e].process(s)},m=function(e){a=!1,s.delta=i?n:Math.max(Math.min(e-s.timestamp,40),1),s.timestamp=e,l=!0,u.forEach(v),l=!1,a&&(i=!1,o(m))},h=function(){a=!0,i=!0,l||o(m)};t.cancelSync=f,t.default=d,t.flushSync=p,t.getFrameData=function(){return s}},24394:(e,t,n)=>{n.r(t),n.d(t,{invariant:()=>o,warning:()=>r});var r=function(){},o=function(){}}}]);