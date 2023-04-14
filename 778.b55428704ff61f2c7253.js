"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[778],{32077:(e,o,t)=>{t.d(o,{Z:()=>S});var n=t(63366),i=t(87462),r=t(67294),a=t(86010),s=t(94780),c=t(41796),l=t(90948),p=t(71657),d=t(98850),u=t(21023),m=t(98216),f=t(1189),Z=t(85893);const v=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],b=(0,l.ZP)(d.Z,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.fab,!t.open&&o.fabClosed]}})((({theme:e,ownerState:o})=>(0,i.Z)({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:(0,c._4)(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!o.open&&{opacity:0,transform:"scale(0)"}))),h=(0,l.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.staticTooltip,!t.open&&o.staticTooltipClosed,o[`tooltipPlacement${(0,m.Z)(t.tooltipPlacement)}`]]}})((({theme:e,ownerState:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${f.Z.staticTooltipLabel}`]:(0,i.Z)({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!o.open&&{opacity:0,transform:"scale(0.5)"},"left"===o.tooltipPlacement&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},"right"===o.tooltipPlacement&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})}))),g=(0,l.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,o)=>o.staticTooltipLabel})((({theme:e})=>(0,i.Z)({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"}))),S=r.forwardRef((function(e,o){const t=(0,p.Z)({props:e,name:"MuiSpeedDialAction"}),{className:c,delay:l=0,FabProps:d={},icon:S,id:y,open:D,TooltipClasses:w,tooltipOpen:x=!1,tooltipPlacement:T="left",tooltipTitle:I}=t,P=(0,n.Z)(t,v),C=(0,i.Z)({},t,{tooltipPlacement:T}),$=(e=>{const{open:o,tooltipPlacement:t,classes:n}=e,i={fab:["fab",!o&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${(0,m.Z)(t)}`,!o&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return(0,s.Z)(i,f.F,n)})(C),[R,M]=r.useState(x),O={transitionDelay:`${l}ms`},k=(0,Z.jsx)(b,(0,i.Z)({size:"small",className:(0,a.Z)($.fab,c),tabIndex:-1,role:"menuitem",ownerState:C},d,{style:(0,i.Z)({},O,d.style),children:S}));return x?(0,Z.jsxs)(h,(0,i.Z)({id:y,ref:o,className:$.staticTooltip,ownerState:C},P,{children:[(0,Z.jsx)(g,{style:O,id:`${y}-label`,className:$.staticTooltipLabel,ownerState:C,children:I}),r.cloneElement(k,{"aria-labelledby":`${y}-label`})]})):(!D&&R&&M(!1),(0,Z.jsx)(u.Z,(0,i.Z)({id:y,ref:o,title:I,placement:T,onClose:()=>{M(!1)},onOpen:()=>{M(!0)},open:D&&R,classes:w},P,{children:k})))}))},41397:(e,o,t)=>{t.d(o,{Fy:()=>n.F,K4:()=>n.Z});var n=t(1189)},1189:(e,o,t)=>{t.d(o,{F:()=>r,Z:()=>a});var n=t(1588),i=t(34867);function r(e){return(0,i.Z)("MuiSpeedDialAction",e)}const a=(0,n.Z)("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"])},10838:(e,o,t)=>{t.d(o,{Z:()=>v});var n=t(63366),i=t(87462),r=t(67294),a=t(86010),s=t(94780),c=t(90948),l=t(71657),p=t(77058),d=t(79303),u=t(85893);const m=["className","icon","open","openIcon"],f=(0,c.ZP)("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${d.Z.icon}`]:o.icon},{[`& .${d.Z.icon}`]:t.open&&o.iconOpen},{[`& .${d.Z.icon}`]:t.open&&t.openIcon&&o.iconWithOpenIconOpen},{[`& .${d.Z.openIcon}`]:o.openIcon},{[`& .${d.Z.openIcon}`]:t.open&&o.openIconOpen},o.root]}})((({theme:e,ownerState:o})=>({height:24,[`& .${d.Z.icon}`]:(0,i.Z)({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short})},o.open&&(0,i.Z)({transform:"rotate(45deg)"},o.openIcon&&{opacity:0})),[`& .${d.Z.openIcon}`]:(0,i.Z)({position:"absolute",transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},o.open&&{transform:"rotate(0deg)",opacity:1})}))),Z=r.forwardRef((function(e,o){const t=(0,l.Z)({props:e,name:"MuiSpeedDialIcon"}),{className:c,icon:Z,openIcon:v}=t,b=(0,n.Z)(t,m),h=t,g=(e=>{const{classes:o,open:t,openIcon:n}=e,i={root:["root"],icon:["icon",t&&"iconOpen",n&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]};return(0,s.Z)(i,d.K,o)})(h);function S(e,o){return r.isValidElement(e)?r.cloneElement(e,{className:o}):e}return(0,u.jsxs)(f,(0,i.Z)({className:(0,a.Z)(g.root,c),ref:o,ownerState:h},b,{children:[v?S(v,g.openIcon):null,Z?S(Z,g.icon):(0,u.jsx)(p.Z,{className:g.icon})]}))}));Z.muiName="SpeedDialIcon";const v=Z},32153:(e,o,t)=>{t.d(o,{K$:()=>n.K,iG:()=>n.Z});var n=t(79303)},79303:(e,o,t)=>{t.d(o,{K:()=>r,Z:()=>a});var n=t(1588),i=t(34867);function r(e){return(0,i.Z)("MuiSpeedDialIcon",e)}const a=(0,n.Z)("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"])},97500:(e,o,t)=>{t.d(o,{Z:()=>I});var n=t(63366),i=t(87462),r=t(67294),a=(t(59864),t(86010)),s=t(94780),c=t(90948),l=t(71657),p=t(2734),d=t(6585),u=t(98850),m=t(98216),f=t(96798),Z=t(51705),v=t(49299),b=t(40839),h=t(85893);const g=["ref"],S=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],y=["ref"];function D(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const w=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`direction${(0,m.Z)(t.direction)}`]]}})((({theme:e,ownerState:o})=>(0,i.Z)({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===o.direction&&{flexDirection:"column-reverse",[`& .${b.Z.actions}`]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===o.direction&&{flexDirection:"column",[`& .${b.Z.actions}`]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===o.direction&&{flexDirection:"row-reverse",[`& .${b.Z.actions}`]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===o.direction&&{flexDirection:"row",[`& .${b.Z.actions}`]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}}))),x=(0,c.ZP)(u.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})((()=>({pointerEvents:"auto"}))),T=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.actions,!t.open&&o.actionsClosed]}})((({ownerState:e})=>(0,i.Z)({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"}))),I=r.forwardRef((function(e,o){const t=(0,l.Z)({props:e,name:"MuiSpeedDial"}),c=(0,p.Z)(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:I,FabProps:{ref:P}={},children:C,className:$,direction:R="up",hidden:M=!1,icon:O,onBlur:k,onClose:E,onFocus:L,onKeyDown:N,onMouseEnter:F,onMouseLeave:j,onOpen:A,open:K,TransitionComponent:B=d.Z,transitionDuration:z=u,TransitionProps:V}=t,W=(0,n.Z)(t.FabProps,g),_=(0,n.Z)(t,S),[H,G]=(0,v.Z)({controlled:K,default:!1,name:"SpeedDial",state:"open"}),U=(0,i.Z)({},t,{open:H,direction:R}),q=(e=>{const{classes:o,open:t,direction:n}=e,i={root:["root",`direction${(0,m.Z)(n)}`],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return(0,s.Z)(i,b.D,o)})(U),J=r.useRef();r.useEffect((()=>()=>{clearTimeout(J.current)}),[]);const Q=r.useRef(0),X=r.useRef(),Y=r.useRef([]);Y.current=[Y.current[0]];const ee=r.useCallback((e=>{Y.current[0]=e}),[]),oe=(0,Z.Z)(P,ee),te=(e,o)=>t=>{Y.current[e+1]=t,o&&o(t)};r.useEffect((()=>{H||(Q.current=0,X.current=void 0)}),[H]);const ne=e=>{"mouseleave"===e.type&&j&&j(e),"blur"===e.type&&k&&k(e),clearTimeout(J.current),"blur"===e.type?J.current=setTimeout((()=>{G(!1),E&&E(e,"blur")})):(G(!1),E&&E(e,"mouseLeave"))},ie=e=>{"mouseenter"===e.type&&F&&F(e),"focus"===e.type&&L&&L(e),clearTimeout(J.current),H||(J.current=setTimeout((()=>{if(G(!0),A){A(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},re=I.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ae=r.Children.toArray(C).filter((e=>r.isValidElement(e))),se=ae.map(((e,o)=>{const t=e.props,{FabProps:{ref:a}={},tooltipPlacement:s}=t,c=(0,n.Z)(t.FabProps,y),l=s||("vertical"===D(R)?"left":"top");return r.cloneElement(e,{FabProps:(0,i.Z)({},c,{ref:te(o,a)}),delay:30*(H?o:ae.length-o),open:H,tooltipPlacement:l,id:`${re}-action-${o}`})}));return(0,h.jsxs)(w,(0,i.Z)({className:(0,a.Z)(q.root,$),ref:o,role:"presentation",onKeyDown:e=>{N&&N(e);const o=e.key.replace("Arrow","").toLowerCase(),{current:t=o}=X;if("Escape"===e.key)return G(!1),Y.current[0].focus(),void(E&&E(e,"escapeKeyDown"));if(D(o)===D(t)&&void 0!==D(o)){e.preventDefault();const a=o===t?1:-1,s=(n=Q.current+a,i=0,r=Y.current.length-1,n<i?i:n>r?r:n);Y.current[s].focus(),Q.current=s,X.current=t}var n,i,r},onBlur:ne,onFocus:ie,onMouseEnter:ie,onMouseLeave:ne,ownerState:U},_,{children:[(0,h.jsx)(B,(0,i.Z)({in:!M,timeout:z,unmountOnExit:!0},V,{children:(0,h.jsx)(x,(0,i.Z)({color:"primary","aria-label":I,"aria-haspopup":"true","aria-expanded":H,"aria-controls":`${re}-actions`},W,{onClick:e=>{W.onClick&&W.onClick(e),clearTimeout(J.current),H?(G(!1),E&&E(e,"toggle")):(G(!0),A&&A(e,"toggle"))},className:(0,a.Z)(q.fab,W.className),ref:oe,ownerState:U,children:r.isValidElement(O)&&(0,f.Z)(O,["SpeedDialIcon"])?r.cloneElement(O,{open:H}):O}))})),(0,h.jsx)(T,{id:`${re}-actions`,role:"menu","aria-orientation":D(R),className:(0,a.Z)(q.actions,!H&&q.actionsClosed),ownerState:U,children:se})]}))}))},21624:(e,o,t)=>{t.d(o,{DH:()=>n.D,PN:()=>n.Z});var n=t(40839)},40839:(e,o,t)=>{t.d(o,{D:()=>r,Z:()=>a});var n=t(1588),i=t(34867);function r(e){return(0,i.Z)("MuiSpeedDial",e)}const a=(0,n.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"])}}]);