"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[325],{23926:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),o=n(30067),a=n(73633),u=n(57094),l=n(85893);function s(e){return e.substring(2).toLowerCase()}const c=function(e){const{children:t,disableReactTree:n=!1,mouseEvent:c="onClick",onClickAway:i,touchEvent:d="onTouchEnd"}=e,f=r.useRef(!1),p=r.useRef(null),v=r.useRef(!1),m=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{v.current=!0}),0),()=>{v.current=!1})),[]);const h=(0,o.Z)(t.ref,p),b=(0,a.Z)((e=>{const t=m.current;m.current=!1;const r=(0,u.Z)(p.current);if(!v.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(f.current)return void(f.current=!1);let o;o=e.composedPath?e.composedPath().indexOf(p.current)>-1:!r.documentElement.contains(e.target)||p.current.contains(e.target),o||!n&&t||i(e)})),C=e=>n=>{m.current=!0;const r=t.props[e];r&&r(n)},L={ref:h};return!1!==d&&(L[d]=C(d)),r.useEffect((()=>{if(!1!==d){const e=s(d),t=(0,u.Z)(p.current),n=()=>{f.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}}),[b,d]),!1!==c&&(L[c]=C(c)),r.useEffect((()=>{if(!1!==c){const e=s(c),t=(0,u.Z)(p.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}}),[b,c]),(0,l.jsx)(r.Fragment,{children:r.cloneElement(t,L)})}},93470:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(30067),a=n(57094),u=n(85893);const l=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function s(e){const t=[],n=[];return Array.from(e.querySelectorAll(l)).forEach(((e,r)=>{const o=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==o&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function c(){return!0}const i=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:l=!1,disableRestoreFocus:i=!1,getTabbable:d=s,isEnabled:f=c,open:p}=e,v=r.useRef(!1),m=r.useRef(null),h=r.useRef(null),b=r.useRef(null),C=r.useRef(null),L=r.useRef(!1),Z=r.useRef(null),y=(0,o.Z)(t.ref,Z),M=r.useRef(null);r.useEffect((()=>{p&&Z.current&&(L.current=!n)}),[n,p]),r.useEffect((()=>{if(!p||!Z.current)return;const e=(0,a.Z)(Z.current);return Z.current.contains(e.activeElement)||(Z.current.hasAttribute("tabIndex")||Z.current.setAttribute("tabIndex","-1"),L.current&&Z.current.focus()),()=>{i||(b.current&&b.current.focus&&(v.current=!0,b.current.focus()),b.current=null)}}),[p]),r.useEffect((()=>{if(!p||!Z.current)return;const e=(0,a.Z)(Z.current),t=t=>{const{current:n}=Z;if(null!==n)if(e.hasFocus()&&!l&&f()&&!v.current){if(!n.contains(e.activeElement)){if(t&&C.current!==t.target||e.activeElement!==C.current)C.current=null;else if(null!==C.current)return;if(!L.current)return;let a=[];if(e.activeElement!==m.current&&e.activeElement!==h.current||(a=d(Z.current)),a.length>0){var r,o;const e=Boolean((null==(r=M.current)?void 0:r.shiftKey)&&"Tab"===(null==(o=M.current)?void 0:o.key)),t=a[0],n=a[a.length-1];"string"!=typeof t&&"string"!=typeof n&&(e?n.focus():t.focus())}else n.focus()}}else v.current=!1},n=t=>{M.current=t,!l&&f()&&"Tab"===t.key&&e.activeElement===Z.current&&t.shiftKey&&(v.current=!0,h.current&&h.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&t(null)}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[n,l,i,f,p,d]);const E=e=>{null===b.current&&(b.current=e.relatedTarget),L.current=!0};return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{tabIndex:p?0:-1,onFocus:E,ref:m,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:y,onFocus:e=>{null===b.current&&(b.current=e.relatedTarget),L.current=!0,C.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,u.jsx)("div",{tabIndex:p?0:-1,onFocus:E,ref:h,"data-testid":"sentinelEnd"})]})}},72047:(e,t,n)=>{n.d(t,{G:()=>u,Z:()=>d});var r=n(57094),o=n(58290),a=n(95806);function u(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function l(e){return parseInt((0,o.Z)(e).getComputedStyle(e).paddingRight,10)||0}function s(e,t,n,r,o){const a=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===a.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&u(e,o)}))}function c(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}function i(e,t){const n=[],u=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,r.Z)(e);return t.body===e?(0,o.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(u)){const e=(0,a.Z)((0,r.Z)(u));n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${l(u)+e}px`;const t=(0,r.Z)(u).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${l(t)+e}px`}))}let e;if(u.parentNode instanceof DocumentFragment)e=(0,r.Z)(u).body;else{const t=u.parentElement,n=(0,o.Z)(u);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:u}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}class d{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&u(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);s(t,e.mount,e.modalRef,r,!0);const o=c(this.containers,(e=>e.container===t));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=c(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=i(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=c(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&u(e.modalRef,t),s(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&u(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}},19069:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(87462),o=n(63366),a=n(67294),u=n(30067),l=n(57094),s=n(73633),c=n(49064),i=n(94780),d=n(78385),f=n(72047),p=n(93470),v=n(79503),m=n(90358),h=n(31873),b=n(85893);const C=["children","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"];const L=new f.Z,Z=a.forwardRef((function(e,t){var n,Z;const{children:y,closeAfterTransition:M=!1,component:E,container:H,disableAutoFocus:g=!1,disableEnforceFocus:A=!1,disableEscapeKeyDown:x=!1,disablePortal:R=!1,disableRestoreFocus:k=!1,disableScrollLock:V=!1,hideBackdrop:T=!1,keepMounted:_=!1,manager:w=L,onBackdropClick:P,onClose:O,onKeyDown:S,open:I,onTransitionEnter:F,onTransitionExited:N,slotProps:j={},slots:D={}}=e,K=(0,o.Z)(e,C),[B,W]=a.useState(!I),U=a.useRef({}),Y=a.useRef(null),$=a.useRef(null),q=(0,u.Z)($,t),G=function(e){return!!e&&e.props.hasOwnProperty("in")}(y),X=null==(n=e["aria-hidden"])||n,z=()=>(U.current.modalRef=$.current,U.current.mountNode=Y.current,U.current),J=()=>{w.mount(z(),{disableScrollLock:V}),$.current&&($.current.scrollTop=0)},Q=(0,s.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(H)||(0,l.Z)(Y.current).body;w.add(z(),e),$.current&&J()})),ee=a.useCallback((()=>w.isTopModal(z())),[w]),te=(0,s.Z)((e=>{Y.current=e,e&&$.current&&(I&&ee()?J():(0,f.G)($.current,X))})),ne=a.useCallback((()=>{w.remove(z(),X)}),[w,X]);a.useEffect((()=>()=>{ne()}),[ne]),a.useEffect((()=>{I?Q():G&&M||ne()}),[I,ne,G,M,Q]);const re=(0,r.Z)({},e,{closeAfterTransition:M,disableAutoFocus:g,disableEnforceFocus:A,disableEscapeKeyDown:x,disablePortal:R,disableRestoreFocus:k,disableScrollLock:V,exited:B,hideBackdrop:T,keepMounted:_}),oe=(e=>{const{open:t,exited:n}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,i.Z)(r,(0,h.T)(v.x))})(re),ae=()=>{W(!1),F&&F()},ue=()=>{W(!0),N&&N(),M&&ne()},le={};void 0===y.props.tabIndex&&(le.tabIndex="-1"),G&&(le.onEnter=(0,c.Z)(ae,y.props.onEnter),le.onExited=(0,c.Z)(ue,y.props.onExited));const se=null!=(Z=null!=E?E:D.root)?Z:"div",ce=(0,m.Z)({elementType:se,externalSlotProps:j.root,externalForwardedProps:K,additionalProps:{ref:q,role:"presentation",onKeyDown:e=>{S&&S(e),"Escape"===e.key&&ee()&&(x||(e.stopPropagation(),O&&O(e,"escapeKeyDown")))}},className:oe.root,ownerState:re}),ie=D.backdrop,de=(0,m.Z)({elementType:ie,externalSlotProps:j.backdrop,additionalProps:{"aria-hidden":!0,onClick:e=>{e.target===e.currentTarget&&(P&&P(e),O&&O(e,"backdropClick"))},open:I},className:oe.backdrop,ownerState:re});return _||I||G&&!B?(0,b.jsx)(d.Z,{ref:te,container:H,disablePortal:R,children:(0,b.jsxs)(se,(0,r.Z)({},ce,{children:[!T&&ie?(0,b.jsx)(ie,(0,r.Z)({},de)):null,(0,b.jsx)(p.Z,{disableEnforceFocus:A,disableAutoFocus:g,disableRestoreFocus:k,isEnabled:ee,open:I,children:a.cloneElement(y,le)})]}))}):null}))},79503:(e,t,n)=>{n.d(t,{Z:()=>u,x:()=>a});var r=n(1588),o=n(34867);function a(e){return(0,o.Z)("MuiModal",e)}const u=(0,r.Z)("MuiModal",["root","hidden","backdrop"])},75615:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z","AccountCircle");t.Z=o},79622:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z","ArrowRight");t.Z=o},70929:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z","Cart");t.Z=o},9312:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z","CartOutline");t.Z=o},22296:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z","CheckBold");t.Z=o},42734:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z","Close");t.Z=o},93365:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z","Heart");t.Z=o},31056:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z","HeartOutline");t.Z=o},48179:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z","Home");t.Z=o},84022:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z","Menu");t.Z=o},7551:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M19,13H5V11H19V13Z","Minus");t.Z=o},65834:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z","Plus");t.Z=o},69752:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,4.5L8.95,4.53C8.71,5.05 8.34,5.93 8.07,7H10.93C10.66,5.93 10.29,5.05 10.05,4.53C9.87,4.5 9.69,4.5 9.5,4.5M13.83,7C13.24,5.97 12.29,5.17 11.15,4.78C11.39,5.31 11.7,6.08 11.93,7H13.83M5.17,7H7.07C7.3,6.08 7.61,5.31 7.85,4.78C6.71,5.17 5.76,5.97 5.17,7M4.5,9.5C4.5,10 4.58,10.53 4.73,11H6.87L6.75,9.5L6.87,8H4.73C4.58,8.47 4.5,9 4.5,9.5M14.27,11C14.42,10.53 14.5,10 14.5,9.5C14.5,9 14.42,8.47 14.27,8H12.13C12.21,8.5 12.25,9 12.25,9.5C12.25,10 12.21,10.5 12.13,11H14.27M7.87,8L7.75,9.5L7.87,11H11.13C11.21,10.5 11.25,10 11.25,9.5C11.25,9 11.21,8.5 11.13,8H7.87M9.5,14.5C9.68,14.5 9.86,14.5 10.03,14.47C10.28,13.95 10.66,13.07 10.93,12H8.07C8.34,13.07 8.72,13.95 8.97,14.47L9.5,14.5M13.83,12H11.93C11.7,12.92 11.39,13.69 11.15,14.22C12.29,13.83 13.24,13.03 13.83,12M5.17,12C5.76,13.03 6.71,13.83 7.85,14.22C7.61,13.69 7.3,12.92 7.07,12H5.17Z","SearchWeb");t.Z=o},83829:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z","TrashCan");t.Z=o},67955:(e,t,n)=>{var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M3,3H11V7.34L16.66,1.69L22.31,7.34L16.66,13H21V21H13V13H16.66L11,7.34V11H3V3M3,13H11V21H3V13Z","Widgets");t.Z=o},65129:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=a?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(o,l,s):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(67294)),a=n(323);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.default=function(e,t){return(0,a.createSvgIcon)(o.createElement("path",{d:e}),t)}}}]);