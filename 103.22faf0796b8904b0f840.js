"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[103],{21987:(e,o,t)=>{t.d(o,{Z:()=>m});var n=t(63366),r=t(87462),a=t(67294),i=t(86010),l=t(94780),s=t(41796),c=t(90948),v=t(72029),u=t(71657),p=t(53160),d=t(85893);const f=["className","component","elevation","square","variant"],h=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,"elevation"===t.variant&&o[`elevation${t.elevation}`]]}})((({theme:e,ownerState:o})=>{var t;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===o.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",(0,v.Z)(o.elevation))}, ${(0,s.Fq)("#fff",(0,v.Z)(o.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[o.elevation]}))})),m=a.forwardRef((function(e,o){const t=(0,u.Z)({props:e,name:"MuiPaper"}),{className:a,component:s="div",elevation:c=1,square:v=!1,variant:m="elevation"}=t,Z=(0,n.Z)(t,f),g=(0,r.Z)({},t,{component:s,elevation:c,square:v,variant:m}),P=(e=>{const{square:o,elevation:t,variant:n,classes:r}=e,a={root:["root",n,!o&&"rounded","elevation"===n&&`elevation${t}`]};return(0,l.Z)(a,p.J,r)})(g);return(0,d.jsx)(h,(0,r.Z)({as:s,ownerState:g,className:(0,i.Z)(P.root,a),ref:o},Z))}))},53160:(e,o,t)=>{t.d(o,{J:()=>a,Z:()=>i});var n=t(1588),r=t(34867);function a(e){return(0,r.Z)("MuiPaper",e)}const i=(0,n.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"])},90103:(e,o,t)=>{t.d(o,{ZP:()=>C,oJ:()=>w,pB:()=>x});var n=t(87462),r=t(63366),a=t(67294),i=t(86010),l=t(94780),s=t(90948),c=t(71657),v=t(57144),u=t(8038),p=t(5340),d=t(51705),f=t(96514),h=t(25827),m=t(21987),Z=t(3994),g=t(85893);const P=["onEntering"],b=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function w(e,o){let t=0;return"number"==typeof o?t=o:"center"===o?t=e.height/2:"bottom"===o&&(t=e.height),t}function x(e,o){let t=0;return"number"==typeof o?t=o:"center"===o?t=e.width/2:"right"===o&&(t=e.width),t}function y(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function k(e){return"function"==typeof e?e():e}const R=(0,s.ZP)(h.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,o)=>o.root})({}),z=(0,s.ZP)(m.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),C=a.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiPopover"}),{action:s,anchorEl:h,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:C,anchorReference:E="anchorEl",children:M,className:T,container:O,elevation:q=8,marginThreshold:N=16,open:S,PaperProps:$={},transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:H=f.Z,transitionDuration:W="auto",TransitionProps:{onEntering:B}={}}=t,D=(0,r.Z)(t.TransitionProps,P),I=(0,r.Z)(t,b),J=a.useRef(),F=(0,d.Z)(J,$.ref),L=(0,n.Z)({},t,{anchorOrigin:m,anchorReference:E,elevation:q,marginThreshold:N,PaperProps:$,transformOrigin:j,TransitionComponent:H,transitionDuration:W,TransitionProps:D}),_=(e=>{const{classes:o}=e;return(0,l.Z)({root:["root"],paper:["paper"]},Z.s,o)})(L),A=a.useCallback((()=>{if("anchorPosition"===E)return C;const e=k(h),o=(e&&1===e.nodeType?e:(0,u.Z)(J.current).body).getBoundingClientRect();return{top:o.top+w(o,m.vertical),left:o.left+x(o,m.horizontal)}}),[h,m.horizontal,m.vertical,C,E]),X=a.useCallback((e=>({vertical:w(e,j.vertical),horizontal:x(e,j.horizontal)})),[j.horizontal,j.vertical]),Y=a.useCallback((e=>{const o={width:e.offsetWidth,height:e.offsetHeight},t=X(o);if("none"===E)return{top:null,left:null,transformOrigin:y(t)};const n=A();let r=n.top-t.vertical,a=n.left-t.horizontal;const i=r+o.height,l=a+o.width,s=(0,p.Z)(k(h)),c=s.innerHeight-N,v=s.innerWidth-N;if(r<N){const e=r-N;r-=e,t.vertical+=e}else if(i>c){const e=i-c;r-=e,t.vertical+=e}if(a<N){const e=a-N;a-=e,t.horizontal+=e}else if(l>v){const e=l-v;a-=e,t.horizontal+=e}return{top:`${Math.round(r)}px`,left:`${Math.round(a)}px`,transformOrigin:y(t)}}),[h,E,A,X,N]),[G,K]=a.useState(S),Q=a.useCallback((()=>{const e=J.current;if(!e)return;const o=Y(e);null!==o.top&&(e.style.top=o.top),null!==o.left&&(e.style.left=o.left),e.style.transformOrigin=o.transformOrigin,K(!0)}),[Y]);a.useEffect((()=>{S&&Q()})),a.useImperativeHandle(s,(()=>S?{updatePosition:()=>{Q()}}:null),[S,Q]),a.useEffect((()=>{if(!S)return;const e=(0,v.Z)((()=>{Q()})),o=(0,p.Z)(h);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[h,S,Q]);let U=W;"auto"!==W||H.muiSupportAuto||(U=void 0);const V=O||(h?(0,u.Z)(k(h)).body:void 0);return(0,g.jsx)(R,(0,n.Z)({BackdropProps:{invisible:!0},className:(0,i.Z)(_.root,T),container:V,open:S,ref:o,ownerState:L},I,{children:(0,g.jsx)(H,(0,n.Z)({appear:!0,in:S,onEntering:(e,o)=>{B&&B(e,o),Q()},onExited:()=>{K(!1)},timeout:U},D,{children:(0,g.jsx)(z,(0,n.Z)({elevation:q},$,{ref:F,className:(0,i.Z)(_.paper,$.className)},G?void 0:{style:(0,n.Z)({},$.style,{opacity:0})},{ownerState:L,children:M}))}))}))}))},3994:(e,o,t)=>{t.d(o,{Z:()=>i,s:()=>a});var n=t(1588),r=t(34867);function a(e){return(0,r.Z)("MuiPopover",e)}const i=(0,n.Z)("MuiPopover",["root","paper"])}}]);