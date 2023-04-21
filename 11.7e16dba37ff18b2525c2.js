"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[11],{68061:(e,t,a)=>{a.d(t,{Z:()=>p});var o=a(87462),n=a(63366),r=a(67294),i=a(70785),l=a(51705),s=a(49299),c=a(80209),d=a(27909),u=a(85893);const m=["actions","children","defaultValue","name","onChange","value"],p=r.forwardRef((function(e,t){const{actions:a,children:p,defaultValue:h,name:v,onChange:b,value:g}=e,f=(0,n.Z)(e,m),Z=r.useRef(null),[y,S]=(0,s.Z)({controlled:g,default:h,name:"RadioGroup"});r.useImperativeHandle(a,(()=>({focus:()=>{let e=Z.current.querySelector("input:not(:disabled):checked");e||(e=Z.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const k=(0,l.Z)(t,Z),x=(0,d.Z)(v),w=r.useMemo((()=>({name:x,onChange(e){S(e.target.value),b&&b(e,e.target.value)},value:y})),[x,b,S,y]);return(0,u.jsx)(c.Z.Provider,{value:w,children:(0,u.jsx)(i.Z,(0,o.Z)({role:"radiogroup",ref:k},f,{children:p}))})}))},80209:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a(67294).createContext(void 0)},94757:(e,t,a)=>{a.d(t,{a:()=>o.Z});var o=a(57707)},57707:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(67294),n=a(80209);function r(){return o.useContext(n.Z)}},81825:(e,t,a)=>{a.d(t,{Z:()=>z});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),l=a(94780),s=a(41796),c=a(32207),d=a(71657),u=a(21218),m=a(79840),p=a(90948),h=a(85893);const v=(0,p.ZP)("span")({position:"relative",display:"flex"}),b=(0,p.ZP)(u.Z)({transform:"scale(1)"}),g=(0,p.ZP)(m.Z)((({theme:e,ownerState:t})=>(0,n.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})})));const f=function(e){const{checked:t=!1,classes:a={},fontSize:o}=e,r=(0,n.Z)({},e,{checked:t});return(0,h.jsxs)(v,{className:a.root,ownerState:r,children:[(0,h.jsx)(b,{fontSize:o,className:a.background,ownerState:r}),(0,h.jsx)(g,{fontSize:o,className:a.dot,ownerState:r})]})};var Z=a(98216),y=a(35893),S=a(57707),k=a(64568);const x=["checked","checkedIcon","color","icon","name","onChange","size","className"],w=(0,p.ZP)(c.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`color${(0,Z.Z)(a.color)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${k.Z.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${k.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled}})));const C=(0,h.jsx)(f,{checked:!0}),R=(0,h.jsx)(f,{}),z=r.forwardRef((function(e,t){var a,s;const c=(0,d.Z)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:m=C,color:p="primary",icon:v=R,name:b,onChange:g,size:f="medium",className:z}=c,L=(0,o.Z)(c,x),A=(0,n.Z)({},c,{color:p,size:f}),F=(e=>{const{classes:t,color:a}=e,o={root:["root",`color${(0,Z.Z)(a)}`]};return(0,n.Z)({},t,(0,l.Z)(o,k.l,t))})(A),j=(0,S.Z)();let P=u;const $=(0,y.Z)(g,j&&j.onChange);let M=b;var N,V;return j&&(void 0===P&&(N=j.value,P="object"==typeof(V=c.value)&&null!==V?N===V:String(N)===String(V)),void 0===M&&(M=j.name)),(0,h.jsx)(w,(0,n.Z)({type:"radio",icon:r.cloneElement(v,{fontSize:null!=(a=R.props.fontSize)?a:f}),checkedIcon:r.cloneElement(m,{fontSize:null!=(s=C.props.fontSize)?s:f}),ownerState:A,classes:F,name:M,checked:P,onChange:$,ref:t,className:(0,i.Z)(F.root,z)},L))}))},30297:(e,t,a)=>{a.d(t,{Gv:()=>o.Z,lR:()=>o.l});var o=a(64568)},64568:(e,t,a)=>{a.d(t,{Z:()=>i,l:()=>r});var o=a(1588),n=a(34867);function r(e){return(0,n.Z)("MuiRadio",e)}const i=(0,o.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"])},91071:(e,t,a)=>{a.d(t,{Z:()=>$});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),l=a(13113),s=a(94780),c=a(2734),d=a(98216),u=a(27909),m=a(49299),p=a(79674),h=a(51705),v=a(60527),b=a(2259),g=a(71657),f=a(90948),Z=a(75470),y=a(85893);const S=["value"],k=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function x(e,t){if(null==e)return e;const a=Math.round(e/t)*t;return Number(a.toFixed(function(e){const t=e.toString().split(".")[1];return t?t.length:0}(t)))}const w=(0,f.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{[`& .${Z.Z.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${(0,d.Z)(a.size)}`],a.readOnly&&t.readOnly]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${Z.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Z.Z.focusVisible} .${Z.Z.iconActive}`]:{outline:"1px solid #999"},[`& .${Z.Z.visuallyHidden}`]:l.Z},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"}))),C=(0,f.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})((({ownerState:e})=>(0,n.Z)({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}))),R=(0,f.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.icon,a.iconEmpty&&t.iconEmpty,a.iconFilled&&t.iconFilled,a.iconHover&&t.iconHover,a.iconFocus&&t.iconFocus,a.iconActive&&t.iconActive]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(e.vars||e).palette.action.disabled}))),z=(0,f.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>(0,f.Dz)(e)&&"iconActive"!==e,overridesResolver:(e,t)=>{const{iconActive:a}=e;return[t.decimal,a&&t.iconActive]}})((({iconActive:e})=>(0,n.Z)({position:"relative"},e&&{transform:"scale(1.2)"})));function L(e){const t=(0,o.Z)(e,S);return(0,y.jsx)("span",(0,n.Z)({},t))}function A(e){const{classes:t,disabled:a,emptyIcon:o,focus:l,getLabelText:s,highlightSelectedOnly:c,hover:d,icon:m,IconContainerComponent:p,isActive:h,itemValue:v,labelProps:b,name:g,onBlur:f,onChange:Z,onClick:S,onFocus:k,readOnly:x,ownerState:w,ratingValue:z,ratingValueRounded:L}=e,A=c?v===z:v<=z,F=v<=d,j=v<=l,P=v===L,$=(0,u.Z)(),M=(0,y.jsx)(R,{as:p,value:v,className:(0,i.Z)(t.icon,A?t.iconFilled:t.iconEmpty,F&&t.iconHover,j&&t.iconFocus,h&&t.iconActive),ownerState:(0,n.Z)({},w,{iconEmpty:!A,iconFilled:A,iconHover:F,iconFocus:j,iconActive:h}),children:o&&!A?o:m});return x?(0,y.jsx)("span",(0,n.Z)({},b,{children:M})):(0,y.jsxs)(r.Fragment,{children:[(0,y.jsxs)(C,(0,n.Z)({ownerState:(0,n.Z)({},w,{emptyValueFocused:void 0}),htmlFor:$},b,{children:[M,(0,y.jsx)("span",{className:t.visuallyHidden,children:s(v)})]})),(0,y.jsx)("input",{className:t.visuallyHidden,onFocus:k,onBlur:f,onChange:Z,onClick:S,disabled:a,value:v,id:$,type:"radio",name:g,checked:P})]})}const F=(0,y.jsx)(v.Z,{fontSize:"inherit"}),j=(0,y.jsx)(b.Z,{fontSize:"inherit"});function P(e){return`${e} Star${1!==e?"s":""}`}const $=r.forwardRef((function(e,t){const a=(0,g.Z)({name:"MuiRating",props:e}),{className:l,defaultValue:v=null,disabled:b=!1,emptyIcon:f=j,emptyLabelText:S="Empty",getLabelText:R=P,highlightSelectedOnly:$=!1,icon:M=F,IconContainerComponent:N=L,max:V=5,name:T,onChange:O,onChangeActive:I,onMouseLeave:E,onMouseMove:H,precision:B=1,readOnly:X=!1,size:_="medium",value:q}=a,W=(0,o.Z)(a,k),D=(0,u.Z)(T),[Y,U]=(0,m.Z)({controlled:q,default:v,name:"Rating"}),Q=x(Y,B),J=(0,c.Z)(),[{hover:K,focus:G},ee]=r.useState({hover:-1,focus:-1});let te=Q;-1!==K&&(te=K),-1!==G&&(te=G);const{isFocusVisibleRef:ae,onBlur:oe,onFocus:ne,ref:re}=(0,p.Z)(),[ie,le]=r.useState(!1),se=r.useRef(),ce=(0,h.Z)(re,se,t),de=e=>{let t=""===e.target.value?null:parseFloat(e.target.value);-1!==K&&(t=K),U(t),O&&O(e,t)},ue=e=>{0===e.clientX&&0===e.clientY||(ee({hover:-1,focus:-1}),U(null),O&&parseFloat(e.target.value)===Q&&O(e,null))},me=e=>{ne(e),!0===ae.current&&le(!0);const t=parseFloat(e.target.value);ee((e=>({hover:e.hover,focus:t})))},pe=e=>{if(-1!==K)return;oe(e),!1===ae.current&&le(!1);ee((e=>({hover:e.hover,focus:-1})))},[he,ve]=r.useState(!1),be=(0,n.Z)({},a,{defaultValue:v,disabled:b,emptyIcon:f,emptyLabelText:S,emptyValueFocused:he,focusVisible:ie,getLabelText:R,icon:M,IconContainerComponent:N,max:V,precision:B,readOnly:X,size:_}),ge=(e=>{const{classes:t,size:a,readOnly:o,disabled:n,emptyValueFocused:r,focusVisible:i}=e,l={root:["root",`size${(0,d.Z)(a)}`,n&&"disabled",i&&"focusVisible",o&&"readOnly"],label:["label","pristine"],labelEmptyValue:[r&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,s.Z)(l,Z.s,t)})(be);return(0,y.jsxs)(w,(0,n.Z)({ref:ce,onMouseMove:e=>{H&&H(e);const t=se.current,{right:a,left:o}=t.getBoundingClientRect(),{width:n}=t.firstChild.getBoundingClientRect();let r;r="rtl"===J.direction?(a-e.clientX)/(n*V):(e.clientX-o)/(n*V);let i=x(V*r+B/2,B);i=function(e,t,a){return e<t?t:e>a?a:e}(i,B,V),ee((e=>e.hover===i&&e.focus===i?e:{hover:i,focus:i})),le(!1),I&&K!==i&&I(e,i)},onMouseLeave:e=>{E&&E(e);ee({hover:-1,focus:-1}),I&&-1!==K&&I(e,-1)},className:(0,i.Z)(ge.root,l,X&&"MuiRating-readOnly"),ownerState:be,role:X?"img":null,"aria-label":X?R(te):null},W,{children:[Array.from(new Array(V)).map(((e,t)=>{const a=t+1,o={classes:ge,disabled:b,emptyIcon:f,focus:G,getLabelText:R,highlightSelectedOnly:$,hover:K,icon:M,IconContainerComponent:N,name:D,onBlur:pe,onChange:de,onClick:ue,onFocus:me,ratingValue:te,ratingValueRounded:Q,readOnly:X,ownerState:be},r=a===Math.ceil(te)&&(-1!==K||-1!==G);if(B<1){const e=Array.from(new Array(1/B));return(0,y.jsx)(z,{className:(0,i.Z)(ge.decimal,r&&ge.iconActive),ownerState:be,iconActive:r,children:e.map(((t,r)=>{const i=x(a-1+(r+1)*B,B);return(0,y.jsx)(A,(0,n.Z)({},o,{isActive:!1,itemValue:i,labelProps:{style:e.length-1===r?{}:{width:i===te?(r+1)*B*100+"%":"0%",overflow:"hidden",position:"absolute"}}}),i)}))},a)}return(0,y.jsx)(A,(0,n.Z)({},o,{isActive:r,itemValue:a}),a)})),!X&&!b&&(0,y.jsxs)(C,{className:(0,i.Z)(ge.label,ge.labelEmptyValue),ownerState:be,children:[(0,y.jsx)("input",{className:ge.visuallyHidden,value:"",id:`${D}-empty`,type:"radio",name:D,checked:null==Q,onFocus:()=>ve(!0),onBlur:()=>ve(!1),onChange:de}),(0,y.jsx)("span",{className:ge.visuallyHidden,children:S})]})]}))}))},71034:(e,t,a)=>{a.d(t,{fs:()=>o.Z,sE:()=>o.s});var o=a(75470)},75470:(e,t,a)=>{a.d(t,{Z:()=>i,s:()=>r});var o=a(1588),n=a(34867);function r(e){return(0,n.Z)("MuiRating",e)}const i=(0,o.Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"])},52273:(e,t,a)=>{a.d(t,{Z:()=>v});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),l=a(94780),s=a(71657),c=a(90948),d=a(66720),u=a(64231),m=a(85893);const p=["className","component","enableColorScheme"],h=(0,c.ZP)("div",{name:"MuiScopedCssBaseline",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const a={};return t.enableColorScheme&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((([t,o])=>{var n;a[`&${e.getColorSchemeSelector(t).replace(/\s*&/,"")}`]={colorScheme:null==(n=o.palette)?void 0:n.mode}})),(0,n.Z)({},(0,d.dy)(e,t.enableColorScheme),(0,d.d1)(e),{"& *, & *::before, & *::after":{boxSizing:"inherit"},"& strong, & b":{fontWeight:e.typography.fontWeightBold}},a)})),v=r.forwardRef((function(e,t){const a=(0,s.Z)({props:e,name:"MuiScopedCssBaseline"}),{className:r,component:c="div"}=a,d=(0,o.Z)(a,p),v=(0,n.Z)({},a,{component:c}),b=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},u.Q,t)})(v);return(0,m.jsx)(h,(0,n.Z)({as:c,className:(0,i.Z)(b.root,r),ref:t,ownerState:v},d))}))},9262:(e,t,a)=>{a.d(t,{Bh:()=>o.Z,Qd:()=>o.Q});var o=a(64231)},64231:(e,t,a)=>{a.d(t,{Q:()=>r,Z:()=>i});var o=a(1588),n=a(34867);function r(e){return(0,n.Z)("MuiScopedCssBaseline",e)}const i=(0,o.Z)("MuiScopedCssBaseline",["root"])},44025:(e,t,a)=>{a.d(t,{ef:()=>o.Z,oX:()=>o.o});var o=a(95603)},22054:(e,t,a)=>{a.d(t,{Z:()=>w});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),l=a(70917),s=a(94780),c=a(88606),d=a(41796),u=a(90948),m=a(71657),p=a(3472),h=a(85893);const v=["animation","className","component","height","style","variant","width"];let b,g,f,Z,y=e=>e;const S=(0,l.F4)(b||(b=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,l.F4)(g||(g=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),x=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const a=(0,c.Wy)(e.shape.borderRadius)||"px",o=(0,c.YL)(e.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${a}/${Math.round(o/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,l.iv)(f||(f=y`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),S)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,l.iv)(Z||(Z=y`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(t.vars||t).palette.action.hover))),w=r.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:l,component:c="span",height:d,style:u,variant:b="text",width:g}=a,f=(0,o.Z)(a,v),Z=(0,n.Z)({},a,{animation:r,component:c,variant:b,hasChildren:Boolean(f.children)}),y=(e=>{const{classes:t,variant:a,animation:o,hasChildren:n,width:r,height:i}=e,l={root:["root",a,o,n&&"withChildren",n&&!r&&"fitContent",n&&!i&&"heightAuto"]};return(0,s.Z)(l,p.B,t)})(Z);return(0,h.jsx)(x,(0,n.Z)({as:c,ref:t,className:(0,i.Z)(y.root,l),ownerState:Z},f,{style:(0,n.Z)({width:g,height:d},u)}))}))},71982:(e,t,a)=>{a.d(t,{BV:()=>o.B,Q6:()=>o.Z});var o=a(3472)},3472:(e,t,a)=>{a.d(t,{B:()=>r,Z:()=>i});var o=a(1588),n=a(34867);function r(e){return(0,n.Z)("MuiSkeleton",e)}const i=(0,o.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"])},22999:(e,t,a)=>{a.d(t,{jz:()=>R,J$:()=>z,_U:()=>k,l7:()=>S,gs:()=>w,Uj:()=>x,Kq:()=>C,ZP:()=>A});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),l=a(94780),s=a(90358),c=a(28442),d=a(7761),u=a(41796),m=a(71657),p=a(90948),h=a(2734),v=a(96285),b=a(98216),g=a(16706),f=a(85893);const Z=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function y(e){return e}const S=(0,p.ZP)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`color${(0,b.Z)(a.color)}`],"medium"!==a.size&&t[`size${(0,b.Z)(a.size)}`],a.marked&&t.marked,"vertical"===a.orientation&&t.vertical,"inverted"===a.track&&t.trackInverted,!1===a.track&&t.trackFalse]}})((({theme:e,ownerState:t})=>(0,n.Z)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===t.orientation&&(0,n.Z)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===t.size&&{height:2},t.marked&&{marginBottom:20}),"vertical"===t.orientation&&(0,n.Z)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===t.size&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${g.Z.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${g.Z.dragging}`]:{[`& .${g.Z.thumb}, & .${g.Z.track}`]:{transition:"none"}}}))),k=(0,p.ZP)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})((({ownerState:e})=>(0,n.Z)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===e.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===e.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===e.track&&{opacity:1}))),x=(0,p.ZP)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e,ownerState:t})=>{const a="light"===e.palette.mode?(0,u.$n)(e.palette[t.color].main,.62):(0,u._j)(e.palette[t.color].main,.5);return(0,n.Z)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},"small"===t.size&&{border:"none"},"horizontal"===t.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===t.track&&{display:"none"},"inverted"===t.track&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:a,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:a})})),w=(0,p.ZP)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.thumb,t[`thumbColor${(0,b.Z)(a.color)}`],"medium"!==a.size&&t[`thumbSize${(0,b.Z)(a.size)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},"small"===t.size&&{width:12,height:12},"horizontal"===t.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===t.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":(0,n.Z)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"small"===t.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${g.Z.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:(0,u.Fq)(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${g.Z.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:(0,u.Fq)(e.palette[t.color].main,.16)}`},[`&.${g.Z.disabled}`]:{"&:hover":{boxShadow:"none"}}}))),C=(0,p.ZP)((function(e){const{children:t,className:a,value:o}=e,n=(e=>{const{open:t}=e;return{offset:(0,i.Z)(t&&g.Z.valueLabelOpen),circle:g.Z.valueLabelCircle,label:g.Z.valueLabelLabel}})(e);return t?r.cloneElement(t,{className:(0,i.Z)(t.props.className)},(0,f.jsxs)(r.Fragment,{children:[t.props.children,(0,f.jsx)("span",{className:(0,i.Z)(n.offset,a),"aria-hidden":!0,children:(0,f.jsx)("span",{className:n.circle,children:(0,f.jsx)("span",{className:n.label,children:o})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})((({theme:e,ownerState:t})=>(0,n.Z)({[`&.${g.Z.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===t.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"vertical"===t.orientation&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},"small"===t.size&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}))),R=(0,p.ZP)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>(0,p.Dz)(e)&&"markActive"!==e,overridesResolver:(e,t)=>{const{markActive:a}=e;return[t.mark,a&&t.markActive]}})((({theme:e,ownerState:t,markActive:a})=>(0,n.Z)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===t.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===t.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},a&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}))),z=(0,p.ZP)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>(0,p.Dz)(e)&&"markLabelActive"!==e,overridesResolver:(e,t)=>t.markLabel})((({theme:e,ownerState:t,markLabelActive:a})=>(0,n.Z)({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===t.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===t.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},a&&{color:(e.vars||e).palette.text.primary}))),L=({children:e})=>e,A=r.forwardRef((function(e,t){var a,u,p,A,F,j,P,$,M,N,V,T,O,I,E,H,B,X,_,q,W,D,Y,U;const Q=(0,m.Z)({props:e,name:"MuiSlider"}),J="rtl"===(0,h.Z)().direction,{"aria-label":K,"aria-valuetext":G,"aria-labelledby":ee,component:te="span",components:ae={},componentsProps:oe={},color:ne="primary",classes:re,className:ie,disableSwap:le=!1,disabled:se=!1,getAriaLabel:ce,getAriaValueText:de,marks:ue=!1,max:me=100,min:pe=0,orientation:he="horizontal",size:ve="medium",step:be=1,scale:ge=y,slotProps:fe,slots:Ze,track:ye="normal",valueLabelDisplay:Se="off",valueLabelFormat:ke=y}=Q,xe=(0,o.Z)(Q,Z),we=(0,n.Z)({},Q,{isRtl:J,max:me,min:pe,classes:re,disabled:se,disableSwap:le,orientation:he,marks:ue,color:ne,size:ve,step:be,scale:ge,track:ye,valueLabelDisplay:Se,valueLabelFormat:ke}),{axisProps:Ce,getRootProps:Re,getHiddenInputProps:ze,getThumbProps:Le,open:Ae,active:Fe,axis:je,focusedThumbIndex:Pe,range:$e,dragging:Me,marks:Ne,values:Ve,trackOffset:Te,trackLeap:Oe}=(0,d.ZP)((0,n.Z)({},we,{ref:t}));we.marked=Ne.length>0&&Ne.some((e=>e.label)),we.dragging=Me,we.focusedThumbIndex=Pe;const Ie=(e=>{const{disabled:t,dragging:a,marked:o,orientation:n,track:r,classes:i,color:s,size:c}=e,d={root:["root",t&&"disabled",a&&"dragging",o&&"marked","vertical"===n&&"vertical","inverted"===r&&"trackInverted",!1===r&&"trackFalse",s&&`color${(0,b.Z)(s)}`,c&&`size${(0,b.Z)(c)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",c&&`thumbSize${(0,b.Z)(c)}`,s&&`thumbColor${(0,b.Z)(s)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,l.Z)(d,g.k,i)})(we),Ee=null!=(a=null!=(u=null==Ze?void 0:Ze.root)?u:ae.Root)?a:S,He=null!=(p=null!=(A=null==Ze?void 0:Ze.rail)?A:ae.Rail)?p:k,Be=null!=(F=null!=(j=null==Ze?void 0:Ze.track)?j:ae.Track)?F:x,Xe=null!=(P=null!=($=null==Ze?void 0:Ze.thumb)?$:ae.Thumb)?P:w,_e=null!=(M=null!=(N=null==Ze?void 0:Ze.valueLabel)?N:ae.ValueLabel)?M:C,qe=null!=(V=null!=(T=null==Ze?void 0:Ze.mark)?T:ae.Mark)?V:R,We=null!=(O=null!=(I=null==Ze?void 0:Ze.markLabel)?I:ae.MarkLabel)?O:z,De=null!=(E=null!=(H=null==Ze?void 0:Ze.input)?H:ae.Input)?E:"input",Ye=null!=(B=null==fe?void 0:fe.root)?B:oe.root,Ue=null!=(X=null==fe?void 0:fe.rail)?X:oe.rail,Qe=null!=(_=null==fe?void 0:fe.track)?_:oe.track,Je=null!=(q=null==fe?void 0:fe.thumb)?q:oe.thumb,Ke=null!=(W=null==fe?void 0:fe.valueLabel)?W:oe.valueLabel,Ge=null!=(D=null==fe?void 0:fe.mark)?D:oe.mark,et=null!=(Y=null==fe?void 0:fe.markLabel)?Y:oe.markLabel,tt=null!=(U=null==fe?void 0:fe.input)?U:oe.input,at=(0,s.Z)({elementType:Ee,getSlotProps:Re,externalSlotProps:Ye,externalForwardedProps:xe,additionalProps:(0,n.Z)({},(0,v.Z)(Ee)&&{as:te}),ownerState:(0,n.Z)({},we,null==Ye?void 0:Ye.ownerState),className:[Ie.root,ie]}),ot=(0,s.Z)({elementType:He,externalSlotProps:Ue,ownerState:we,className:Ie.rail}),nt=(0,s.Z)({elementType:Be,externalSlotProps:Qe,additionalProps:{style:(0,n.Z)({},Ce[je].offset(Te),Ce[je].leap(Oe))},ownerState:(0,n.Z)({},we,null==Qe?void 0:Qe.ownerState),className:Ie.track}),rt=(0,s.Z)({elementType:Xe,getSlotProps:Le,externalSlotProps:Je,ownerState:(0,n.Z)({},we,null==Je?void 0:Je.ownerState),className:Ie.thumb}),it=(0,s.Z)({elementType:_e,externalSlotProps:Ke,ownerState:(0,n.Z)({},we,null==Ke?void 0:Ke.ownerState),className:Ie.valueLabel}),lt=(0,s.Z)({elementType:qe,externalSlotProps:Ge,ownerState:we,className:Ie.mark}),st=(0,s.Z)({elementType:We,externalSlotProps:et,ownerState:we,className:Ie.markLabel}),ct=(0,s.Z)({elementType:De,getSlotProps:ze,externalSlotProps:tt,ownerState:we});return(0,f.jsxs)(Ee,(0,n.Z)({},at,{children:[(0,f.jsx)(He,(0,n.Z)({},ot)),(0,f.jsx)(Be,(0,n.Z)({},nt)),Ne.filter((e=>e.value>=pe&&e.value<=me)).map(((e,t)=>{const a=(0,d.Rg)(e.value,pe,me),o=Ce[je].offset(a);let l;return l=!1===ye?-1!==Ve.indexOf(e.value):"normal"===ye&&($e?e.value>=Ve[0]&&e.value<=Ve[Ve.length-1]:e.value<=Ve[0])||"inverted"===ye&&($e?e.value<=Ve[0]||e.value>=Ve[Ve.length-1]:e.value>=Ve[0]),(0,f.jsxs)(r.Fragment,{children:[(0,f.jsx)(qe,(0,n.Z)({"data-index":t},lt,!(0,c.Z)(qe)&&{markActive:l},{style:(0,n.Z)({},o,lt.style),className:(0,i.Z)(lt.className,l&&Ie.markActive)})),null!=e.label?(0,f.jsx)(We,(0,n.Z)({"aria-hidden":!0,"data-index":t},st,!(0,c.Z)(We)&&{markLabelActive:l},{style:(0,n.Z)({},o,st.style),className:(0,i.Z)(Ie.markLabel,st.className,l&&Ie.markLabelActive),children:e.label})):null]},t)})),Ve.map(((e,t)=>{const a=(0,d.Rg)(e,pe,me),o=Ce[je].offset(a),r="off"===Se?L:_e;return(0,f.jsx)(r,(0,n.Z)({},!(0,c.Z)(r)&&{valueLabelFormat:ke,valueLabelDisplay:Se,value:"function"==typeof ke?ke(ge(e),t):ke,index:t,open:Ae===t||Fe===t||"on"===Se,disabled:se},it,{children:(0,f.jsx)(Xe,(0,n.Z)({"data-index":t},rt,{className:(0,i.Z)(Ie.thumb,rt.className,Fe===t&&Ie.active,Pe===t&&Ie.focusVisible),style:(0,n.Z)({},o,{pointerEvents:le&&Fe!==t?"none":void 0},rt.style),children:(0,f.jsx)(De,(0,n.Z)({"data-index":t,"aria-label":ce?ce(t):K,"aria-valuenow":ge(e),"aria-labelledby":ee,"aria-valuetext":de?de(ge(e),t):G,value:Ve[t]},ct))}))}),t)}))]}))}))},66443:(e,t,a)=>{a.d(t,{J$:()=>o.J$,Kq:()=>o.Kq,TW:()=>n.Z,Uj:()=>o.Uj,_U:()=>o._U,gs:()=>o.gs,jz:()=>o.jz,k_:()=>n.k,l7:()=>o.l7});var o=a(22999),n=a(16706)},16706:(e,t,a)=>{a.d(t,{Z:()=>i,k:()=>r});var o=a(1588),n=a(34867);function r(e){return(0,n.Z)("MuiSlider",e)}const i=(0,o.Z)("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"])},24465:(e,t,a)=>{a.d(t,{Ap:()=>o.A,_J:()=>o.Z});var o=a(40416)},47442:(e,t,a)=>{a.d(t,{aW:()=>o.Z,h_:()=>o.h});var o=a(93908)}}]);