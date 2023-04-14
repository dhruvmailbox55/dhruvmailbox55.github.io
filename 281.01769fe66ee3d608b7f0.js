"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[281],{35262:(e,t,n)=>{n.d(t,{SJ:()=>m,ZP:()=>g,wU:()=>v});var o=n(63366),r=n(87462),i=n(67294),a=n(86010),l=n(94780),s=n(98216),d=n(12268),u=n(90948),c=n(85893);const p=["className","disabled","IconComponent","inputRef","variant"],v=({ownerState:e,theme:t})=>(0,r.Z)({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":(0,r.Z)({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:"light"===t.palette.mode?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${d.Z.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},"filled"===e.variant&&{"&&&":{paddingRight:32}},"outlined"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),h=(0,u.ZP)("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:u.FO,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],{[`&.${d.Z.multiple}`]:t.multiple}]}})(v),m=({ownerState:e,theme:t})=>(0,r.Z)({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${d.Z.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},"filled"===e.variant&&{right:7},"outlined"===e.variant&&{right:7}),f=(0,u.ZP)("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${(0,s.Z)(n.variant)}`],n.open&&t.iconOpen]}})(m),g=i.forwardRef((function(e,t){const{className:n,disabled:u,IconComponent:v,inputRef:m,variant:g="standard"}=e,b=(0,o.Z)(e,p),Z=(0,r.Z)({},e,{disabled:u,variant:g}),x=(e=>{const{classes:t,variant:n,disabled:o,multiple:r,open:i}=e,a={select:["select",n,o&&"disabled",r&&"multiple"],icon:["icon",`icon${(0,s.Z)(n)}`,i&&"iconOpen",o&&"disabled"]};return(0,l.Z)(a,d.f,t)})(Z);return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)(h,(0,r.Z)({ownerState:Z,className:(0,a.Z)(x.select,n),disabled:u,ref:m||t},b)),e.multiple?null:(0,c.jsx)(f,{as:v,ownerState:Z,className:x.icon})]})}))},12268:(e,t,n)=>{n.d(t,{Z:()=>a,f:()=>i});var o=n(1588),r=n(34867);function i(e){return(0,r.Z)("MuiNativeSelect",e)}const a=(0,o.Z)("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"])},32580:(e,t,n)=>{n.d(t,{Z:()=>P});var o,r=n(63366),i=n(87462),a=n(67294),l=n(94780),s=n(90948),d=n(85893);const u=["children","classes","className","label","notched"],c=(0,s.ZP)("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),p=(0,s.ZP)("legend")((({ownerState:e,theme:t})=>(0,i.Z)({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&(0,i.Z)({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}))));var v=n(74423),h=n(15704),m=n(54656),f=n(78543),g=n(71657);const b=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],Z=(0,s.ZP)(f.Ej,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiOutlinedInput",slot:"Root",overridesResolver:f.Gx})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return(0,i.Z)({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${m.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${m.Z.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${m.Z.focused} .${m.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${m.Z.error} .${m.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${m.Z.disabled} .${m.Z.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&(0,i.Z)({padding:"16.5px 14px"},"small"===t.size&&{padding:"8.5px 14px"}))})),x=(0,s.ZP)((function(e){const{className:t,label:n,notched:a}=e,l=(0,r.Z)(e,u),s=null!=n&&""!==n,v=(0,i.Z)({},e,{notched:a,withLabel:s});return(0,d.jsx)(c,(0,i.Z)({"aria-hidden":!0,className:t,ownerState:v},l,{children:(0,d.jsx)(p,{ownerState:v,children:s?(0,d.jsx)("span",{children:n}):o||(o=(0,d.jsx)("span",{className:"notranslate",children:"​"}))})}))}),{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})((({theme:e})=>{const t="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}})),w=(0,s.ZP)(f.rA,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:f._o})((({theme:e,ownerState:t})=>(0,i.Z)({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.mode?null:"#fff",caretColor:"light"===e.palette.mode?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},"small"===t.size&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0}))),R=a.forwardRef((function(e,t){var n,o,s,u,c;const p=(0,g.Z)({props:e,name:"MuiOutlinedInput"}),{components:R={},fullWidth:P=!1,inputComponent:O="input",label:S,multiline:C=!1,notched:k,slots:y={},type:$="text"}=p,N=(0,r.Z)(p,b),M=(e=>{const{classes:t}=e,n=(0,l.Z)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},m.e,t);return(0,i.Z)({},t,n)})(p),z=(0,v.Z)(),W=(0,h.Z)({props:p,muiFormControl:z,states:["required"]}),j=(0,i.Z)({},p,{color:W.color||"primary",disabled:W.disabled,error:W.error,focused:W.focused,formControl:z,fullWidth:P,hiddenLabel:W.hiddenLabel,multiline:C,size:W.size,type:$}),I=null!=(n=null!=(o=y.root)?o:R.Root)?n:Z,E=null!=(s=null!=(u=y.input)?u:R.Input)?s:w;return(0,d.jsx)(f.ZP,(0,i.Z)({slots:{root:I,input:E},renderSuffix:e=>(0,d.jsx)(x,{ownerState:j,className:M.notchedOutline,label:null!=S&&""!==S&&W.required?c||(c=(0,d.jsxs)(a.Fragment,{children:[S," ","*"]})):S,notched:void 0!==k?k:Boolean(e.startAdornment||e.filled||e.focused)}),fullWidth:P,inputComponent:O,multiline:C,ref:t,type:$},N,{classes:(0,i.Z)({},M,{notchedOutline:null})}))}));R.muiName="Input";const P=R},54656:(e,t,n)=>{n.d(t,{Z:()=>s,e:()=>l});var o=n(87462),r=n(1588),i=n(34867),a=n(55827);function l(e){return(0,i.Z)("MuiOutlinedInput",e)}const s=(0,o.Z)({},a.Z,(0,r.Z)("MuiOutlinedInput",["root","notchedOutline","input"]))},21987:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(63366),r=n(87462),i=n(67294),a=n(86010),l=n(94780),s=n(41796),d=n(90948),u=n(72029),c=n(71657),p=n(53160),v=n(85893);const h=["className","component","elevation","square","variant"],m=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",(0,u.Z)(t.elevation))}, ${(0,s.Fq)("#fff",(0,u.Z)(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),f=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:d=1,square:u=!1,variant:f="elevation"}=n,g=(0,o.Z)(n,h),b=(0,r.Z)({},n,{component:s,elevation:d,square:u,variant:f}),Z=(e=>{const{square:t,elevation:n,variant:o,classes:r}=e,i={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,l.Z)(i,p.J,r)})(b);return(0,v.jsx)(m,(0,r.Z)({as:s,ownerState:b,className:(0,a.Z)(Z.root,i),ref:t},g))}))},53160:(e,t,n)=>{n.d(t,{J:()=>i,Z:()=>a});var o=n(1588),r=n(34867);function i(e){return(0,r.Z)("MuiPaper",e)}const a=(0,o.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"])},90103:(e,t,n)=>{n.d(t,{ZP:()=>k,oJ:()=>w,pB:()=>R});var o=n(87462),r=n(63366),i=n(67294),a=n(86010),l=n(94780),s=n(90948),d=n(71657),u=n(57144),c=n(8038),p=n(5340),v=n(51705),h=n(96514),m=n(25827),f=n(21987),g=n(3994),b=n(85893);const Z=["onEntering"],x=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function w(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function R(e,t){let n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function P(e){return[e.horizontal,e.vertical].map((e=>"number"==typeof e?`${e}px`:e)).join(" ")}function O(e){return"function"==typeof e?e():e}const S=(0,s.ZP)(m.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),C=(0,s.ZP)(f.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),k=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiPopover"}),{action:s,anchorEl:m,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:k,anchorReference:y="anchorEl",children:$,className:N,container:M,elevation:z=8,marginThreshold:W=16,open:j,PaperProps:I={},transformOrigin:E={vertical:"top",horizontal:"left"},TransitionComponent:T=h.Z,transitionDuration:F="auto",TransitionProps:{onEntering:q}={}}=n,A=(0,r.Z)(n.TransitionProps,Z),L=(0,r.Z)(n,x),B=i.useRef(),H=(0,v.Z)(B,I.ref),J=(0,o.Z)({},n,{anchorOrigin:f,anchorReference:y,elevation:z,marginThreshold:W,PaperProps:I,transformOrigin:E,TransitionComponent:T,transitionDuration:F,TransitionProps:A}),D=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"],paper:["paper"]},g.s,t)})(J),_=i.useCallback((()=>{if("anchorPosition"===y)return k;const e=O(m),t=(e&&1===e.nodeType?e:(0,c.Z)(B.current).body).getBoundingClientRect();return{top:t.top+w(t,f.vertical),left:t.left+R(t,f.horizontal)}}),[m,f.horizontal,f.vertical,k,y]),G=i.useCallback((e=>({vertical:w(e,E.vertical),horizontal:R(e,E.horizontal)})),[E.horizontal,E.vertical]),U=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=G(t);if("none"===y)return{top:null,left:null,transformOrigin:P(n)};const o=_();let r=o.top-n.vertical,i=o.left-n.horizontal;const a=r+t.height,l=i+t.width,s=(0,p.Z)(O(m)),d=s.innerHeight-W,u=s.innerWidth-W;if(r<W){const e=r-W;r-=e,n.vertical+=e}else if(a>d){const e=a-d;r-=e,n.vertical+=e}if(i<W){const e=i-W;i-=e,n.horizontal+=e}else if(l>u){const e=l-u;i-=e,n.horizontal+=e}return{top:`${Math.round(r)}px`,left:`${Math.round(i)}px`,transformOrigin:P(n)}}),[m,y,_,G,W]),[X,Y]=i.useState(j),K=i.useCallback((()=>{const e=B.current;if(!e)return;const t=U(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,Y(!0)}),[U]);i.useEffect((()=>{j&&K()})),i.useImperativeHandle(s,(()=>j?{updatePosition:()=>{K()}}:null),[j,K]),i.useEffect((()=>{if(!j)return;const e=(0,u.Z)((()=>{K()})),t=(0,p.Z)(m);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[m,j,K]);let Q=F;"auto"!==F||T.muiSupportAuto||(Q=void 0);const V=M||(m?(0,c.Z)(O(m)).body:void 0);return(0,b.jsx)(S,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(D.root,N),container:V,open:j,ref:t,ownerState:J},L,{children:(0,b.jsx)(T,(0,o.Z)({appear:!0,in:j,onEntering:(e,t)=>{q&&q(e,t),K()},onExited:()=>{Y(!1)},timeout:Q},A,{children:(0,b.jsx)(C,(0,o.Z)({elevation:z},I,{ref:H,className:(0,a.Z)(D.paper,I.className)},X?void 0:{style:(0,o.Z)({},I.style,{opacity:0})},{ownerState:J,children:$}))}))}))}))},3994:(e,t,n)=>{n.d(t,{Z:()=>a,s:()=>i});var o=n(1588),r=n(34867);function i(e){return(0,r.Z)("MuiPopover",e)}const a=(0,o.Z)("MuiPopover",["root","paper"])}}]);