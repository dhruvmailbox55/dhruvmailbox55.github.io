"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[865],{73891:(e,o,n)=>{n.d(o,{Z:()=>P});var t=n(63366),r=n(87462),s=n(67294),i=n(86010),a=n(94780),l=n(98216),c=n(90948),d=n(71657),u=n(79674),p=n(51705),m=n(23972),b=n(23400),h=n(54844),Z=n(41796);const f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=({theme:e,ownerState:o})=>{const n=(e=>f[e]||e)(o.color),t=(0,h.DW)(e,`palette.${n}`,!1)||o.color,r=(0,h.DW)(e,`palette.${n}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:(0,Z.Fq)(t,.4)};var g=n(85893);const y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,c.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&o.button]}})((({theme:e,ownerState:o})=>(0,r.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,r.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:v({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.Z.focusVisible}`]:{outline:"auto"}}))),P=s.forwardRef((function(e,o){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:m="primary",component:h="a",onBlur:Z,onFocus:v,TypographyClasses:P,underline:M="always",variant:x="inherit",sx:w}=n,F=(0,t.Z)(n,y),{isFocusVisibleRef:S,onBlur:C,onFocus:D,ref:R}=(0,u.Z)(),[E,L]=s.useState(!1),T=(0,p.Z)(o,R),A=(0,r.Z)({},n,{color:m,component:h,focusVisible:E,underline:M,variant:x}),N=(e=>{const{classes:o,component:n,focusVisible:t,underline:r}=e,s={root:["root",`underline${(0,l.Z)(r)}`,"button"===n&&"button",t&&"focusVisible"]};return(0,a.Z)(s,b.w,o)})(A);return(0,g.jsx)(k,(0,r.Z)({color:m,className:(0,i.Z)(N.root,c),classes:P,component:h,onBlur:e=>{C(e),!1===S.current&&L(!1),Z&&Z(e)},onFocus:e=>{D(e),!0===S.current&&L(!0),v&&v(e)},ref:T,ownerState:A,variant:x,sx:[...Object.keys(f).includes(m)?[]:[{color:m}],...Array.isArray(w)?w:[w]]},F))}))},23400:(e,o,n)=>{n.d(o,{Z:()=>i,w:()=>s});var t=n(1588),r=n(34867);function s(e){return(0,r.Z)("MuiLink",e)}const i=(0,t.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},18843:(e,o,n)=>{n.d(o,{Z:()=>h});var t=n(63366),r=n(87462),s=n(67294),i=n(86010),a=n(94780),l=n(90948),c=n(71657),d=n(59773),u=n(72847),p=n(85893);const m=["children","className","component","dense","disablePadding","subheader"],b=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,!n.disablePadding&&o.padding,n.dense&&o.dense,n.subheader&&o.subheader]}})((({ownerState:e})=>(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),h=s.forwardRef((function(e,o){const n=(0,c.Z)({props:e,name:"MuiList"}),{children:l,className:h,component:Z="ul",dense:f=!1,disablePadding:v=!1,subheader:g}=n,y=(0,t.Z)(n,m),k=s.useMemo((()=>({dense:f})),[f]),P=(0,r.Z)({},n,{component:Z,dense:f,disablePadding:v}),M=(e=>{const{classes:o,disablePadding:n,dense:t,subheader:r}=e,s={root:["root",!n&&"padding",t&&"dense",r&&"subheader"]};return(0,a.Z)(s,u.z,o)})(P);return(0,p.jsx)(d.Z.Provider,{value:k,children:(0,p.jsxs)(b,(0,r.Z)({as:Z,className:(0,i.Z)(M.root,h),ref:o,ownerState:P},y,{children:[g,l]}))})}))},59773:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n(67294).createContext({})},72847:(e,o,n)=>{n.d(o,{Z:()=>i,z:()=>s});var t=n(1588),r=n(34867);function s(e){return(0,r.Z)("MuiList",e)}const i=(0,t.Z)("MuiList",["root","padding","dense","subheader"])},68976:(e,o,n)=>{n.d(o,{Z:()=>f});var t=n(87462),r=n(63366),s=n(67294),i=(n(59864),n(8038)),a=n(18843),l=n(256),c=n(51705),d=n(58974),u=n(85893);const p=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function m(e,o,n){return e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:n?null:e.firstChild}function b(e,o,n){return e===o?n?e.firstChild:e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:n?null:e.lastChild}function h(e,o){if(void 0===o)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),n=n.trim().toLowerCase(),0!==n.length&&(o.repeating?n[0]===o.keys[0]:0===n.indexOf(o.keys.join("")))}function Z(e,o,n,t,r,s){let i=!1,a=r(e,o,!!o&&n);for(;a;){if(a===e.firstChild){if(i)return!1;i=!0}const o=!t&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&h(a,s)&&!o)return a.focus(),!0;a=r(e,a,n)}return!1}const f=s.forwardRef((function(e,o){const{actions:n,autoFocus:f=!1,autoFocusItem:v=!1,children:g,className:y,disabledItemsFocusable:k=!1,disableListWrap:P=!1,onKeyDown:M,variant:x="selectedMenu"}=e,w=(0,r.Z)(e,p),F=s.useRef(null),S=s.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,d.Z)((()=>{f&&F.current.focus()}),[f]),s.useImperativeHandle(n,(()=>({adjustStyleForScrollbar:(e,o)=>{const n=!F.current.style.width;if(e.clientHeight<F.current.clientHeight&&n){const n=`${(0,l.Z)((0,i.Z)(e))}px`;F.current.style["rtl"===o.direction?"paddingLeft":"paddingRight"]=n,F.current.style.width=`calc(100% + ${n})`}return F.current}})),[]);const C=(0,c.Z)(F,o);let D=-1;s.Children.forEach(g,((e,o)=>{s.isValidElement(e)&&(e.props.disabled||("selectedMenu"===x&&e.props.selected||-1===D)&&(D=o),D===o&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(D+=1,D>=g.length&&(D=-1)))}));const R=s.Children.map(g,((e,o)=>{if(o===D){const o={};return v&&(o.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===x&&(o.tabIndex=0),s.cloneElement(e,o)}return e}));return(0,u.jsx)(a.Z,(0,t.Z)({role:"menu",ref:C,className:y,onKeyDown:e=>{const o=F.current,n=e.key,t=(0,i.Z)(o).activeElement;if("ArrowDown"===n)e.preventDefault(),Z(o,t,P,k,m);else if("ArrowUp"===n)e.preventDefault(),Z(o,t,P,k,b);else if("Home"===n)e.preventDefault(),Z(o,null,P,k,m);else if("End"===n)e.preventDefault(),Z(o,null,P,k,b);else if(1===n.length){const r=S.current,s=n.toLowerCase(),i=performance.now();r.keys.length>0&&(i-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&s!==r.keys[0]&&(r.repeating=!1)),r.lastTime=i,r.keys.push(s);const a=t&&!r.repeating&&h(t,r);r.previousKeyMatched&&(a||Z(o,t,!1,k,m,r))?e.preventDefault():r.previousKeyMatched=!1}M&&M(e)},tabIndex:f?0:-1},w,{children:R}))}))},24486:(e,o,n)=>{n.d(o,{Z:()=>M});var t=n(87462),r=n(63366),s=n(67294),i=(n(59864),n(86010)),a=n(94780),l=n(68976),c=n(21987),d=n(90103),u=n(90948),p=n(2734),m=n(71657),b=n(272),h=n(85893);const Z=["onEntering"],f=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],v={vertical:"top",horizontal:"right"},g={vertical:"top",horizontal:"left"},y=(0,u.ZP)(d.ZP,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,o)=>o.root})({}),k=(0,u.ZP)(c.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),P=(0,u.ZP)(l.Z,{name:"MuiMenu",slot:"List",overridesResolver:(e,o)=>o.list})({outline:0}),M=s.forwardRef((function(e,o){const n=(0,m.Z)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:c,disableAutoFocusItem:d=!1,MenuListProps:u={},onClose:M,open:x,PaperProps:w={},PopoverClasses:F,transitionDuration:S="auto",TransitionProps:{onEntering:C}={},variant:D="selectedMenu"}=n,R=(0,r.Z)(n.TransitionProps,Z),E=(0,r.Z)(n,f),L=(0,p.Z)(),T="rtl"===L.direction,A=(0,t.Z)({},n,{autoFocus:l,disableAutoFocusItem:d,MenuListProps:u,onEntering:C,PaperProps:w,transitionDuration:S,TransitionProps:R,variant:D}),N=(e=>{const{classes:o}=e;return(0,a.Z)({root:["root"],paper:["paper"],list:["list"]},b.Q,o)})(A),I=l&&!d&&x,B=s.useRef(null);let K=-1;return s.Children.map(c,((e,o)=>{s.isValidElement(e)&&(e.props.disabled||("selectedMenu"===D&&e.props.selected||-1===K)&&(K=o))})),(0,h.jsx)(y,(0,t.Z)({onClose:M,anchorOrigin:{vertical:"bottom",horizontal:T?"right":"left"},transformOrigin:T?v:g,PaperProps:(0,t.Z)({as:k},w,{classes:(0,t.Z)({},w.classes,{root:N.paper})}),className:N.root,open:x,ref:o,transitionDuration:S,TransitionProps:(0,t.Z)({onEntering:(e,o)=>{B.current&&B.current.adjustStyleForScrollbar(e,L),C&&C(e,o)}},R),ownerState:A},E,{classes:F,children:(0,h.jsx)(P,(0,t.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),M&&M(e,"tabKeyDown"))},actions:B,autoFocus:l&&(-1===K||d),autoFocusItem:I,variant:D},u,{className:(0,i.Z)(N.list,u.className),children:c}))}))}))},272:(e,o,n)=>{n.d(o,{Q:()=>s,Z:()=>i});var t=n(1588),r=n(34867);function s(e){return(0,r.Z)("MuiMenu",e)}const i=(0,t.Z)("MuiMenu",["root","paper","list"])},25827:(e,o,n)=>{n.d(o,{W:()=>Z,Z:()=>g});var t=n(63366),r=n(87462),s=n(67294),i=n(86010),a=n(79503),l=n(19069),c=n(71276),d=n(28442),u=n(90948),p=n(71657),m=n(45889),b=n(85893);const h=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],Z=a.Z,f=(0,u.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,!n.open&&n.exited&&o.hidden]}})((({theme:e,ownerState:o})=>(0,r.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!o.open&&o.exited&&{visibility:"hidden"}))),v=(0,u.ZP)(m.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,o)=>o.backdrop})({zIndex:-1}),g=s.forwardRef((function(e,o){var n,a,u,m,Z,g;const y=(0,p.Z)({name:"MuiModal",props:e}),{BackdropComponent:k=v,BackdropProps:P,classes:M,className:x,closeAfterTransition:w=!1,children:F,component:S,components:C={},componentsProps:D={},disableAutoFocus:R=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:L=!1,disablePortal:T=!1,disableRestoreFocus:A=!1,disableScrollLock:N=!1,hideBackdrop:I=!1,keepMounted:B=!1,slotProps:K,slots:j,theme:z}=y,H=(0,t.Z)(y,h),[V,W]=s.useState(!0),$={closeAfterTransition:w,disableAutoFocus:R,disableEnforceFocus:E,disableEscapeKeyDown:L,disablePortal:T,disableRestoreFocus:A,disableScrollLock:N,hideBackdrop:I,keepMounted:B},O=(0,r.Z)({},y,$,{exited:V}),Q=null!=(n=null!=(a=null==j?void 0:j.root)?a:C.Root)?n:f,_=null!=(u=null!=(m=null==j?void 0:j.backdrop)?m:C.Backdrop)?u:k,q=null!=(Z=null==K?void 0:K.root)?Z:D.root,U=null!=(g=null==K?void 0:K.backdrop)?g:D.backdrop;return(0,b.jsx)(l.Z,(0,r.Z)({slots:{root:Q,backdrop:_},slotProps:{root:()=>(0,r.Z)({},(0,c.Z)(q,O),!(0,d.Z)(Q)&&{as:S,theme:z},{className:(0,i.Z)(x,null==q?void 0:q.className,null==M?void 0:M.root,!O.open&&O.exited&&(null==M?void 0:M.hidden))}),backdrop:()=>(0,r.Z)({},P,(0,c.Z)(U,O),{className:(0,i.Z)(null==U?void 0:U.className,null==M?void 0:M.backdrop)})},onTransitionEnter:()=>W(!1),onTransitionExited:()=>W(!0),ref:o},H,$,{children:F}))}))}}]);