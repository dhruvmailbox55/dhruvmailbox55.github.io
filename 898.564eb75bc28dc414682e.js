"use strict";(self.webpackChunkanimal_nutrition=self.webpackChunkanimal_nutrition||[]).push([[898],{58052:(t,e,n)=>{n.d(e,{ZP:()=>E});var r=n(63366),i=n(51721),o=n(67294),s=n(73935);const a=!1;var u=n(220),c="unmounted",p="exited",l="entering",f="entered",d="exiting",h=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var i,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(i=p,r.appearStatus=l):i=f:i=e.unmountOnExit||e.mountOnEnter?c:p,r.state={status:i},r.nextCallback=null,r}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:p}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==l&&n!==f&&(e=l):n!==l&&n!==f||(e=d)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===l){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[s.findDOMNode(this),r],o=i[0],u=i[1],c=this.getTimeouts(),p=r?c.appear:c.enter;!t&&!n||a?this.safeSetState({status:f},(function(){e.props.onEntered(o)})):(this.props.onEnter(o,u),this.safeSetState({status:l},(function(){e.props.onEntering(o,u),e.onTransitionEnd(p,(function(){e.safeSetState({status:f},(function(){e.props.onEntered(o,u)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:s.findDOMNode(this);e&&!a?(this.props.onExit(r),this.safeSetState({status:d},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:s.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,i=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(u.Z.Provider,{value:null},"function"==typeof n?n(t,i):o.cloneElement(o.Children.only(n),i))},e}(o.Component);function b(){}h.contextType=u.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},h.UNMOUNTED=c,h.EXITED=p,h.ENTERING=l,h.ENTERED=f,h.EXITING=d;const E=h},94537:(t,e,n)=>{n.d(e,{Z:()=>h});var r=n(63366),i=n(87462),o=n(97326),s=n(51721),a=n(67294),u=n(220);function c(t,e){var n=Object.create(null);return t&&a.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&(0,a.isValidElement)(t)?e(t):t}(t)})),n}function p(t,e,n){return null!=n[e]?n[e]:t.props[e]}function l(t,e,n){var r=c(t.children),i=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var r,i=Object.create(null),o=[];for(var s in t)s in e?o.length&&(i[s]=o,o=[]):o.push(s);var a={};for(var u in e){if(i[u])for(r=0;r<i[u].length;r++){var c=i[u][r];a[i[u][r]]=n(c)}a[u]=n(u)}for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(e,r);return Object.keys(i).forEach((function(o){var s=i[o];if((0,a.isValidElement)(s)){var u=o in e,c=o in r,l=e[o],f=(0,a.isValidElement)(l)&&!l.props.in;!c||u&&!f?c||!u||f?c&&u&&(0,a.isValidElement)(l)&&(i[o]=(0,a.cloneElement)(s,{onExited:n.bind(null,s),in:l.props.in,exit:p(s,"exit",t),enter:p(s,"enter",t)})):i[o]=(0,a.cloneElement)(s,{in:!1}):i[o]=(0,a.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:p(s,"exit",t),enter:p(s,"enter",t)})}})),i}var f=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},d=function(t){function e(e,n){var r,i=(r=t.call(this,e,n)||this).handleExited.bind((0,o.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,s.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,r,i=e.children,o=e.handleExited;return{children:e.firstRender?(n=t,r=o,c(n.children,(function(t){return(0,a.cloneElement)(t,{onExited:r.bind(null,t),in:!0,appear:p(t,"appear",n),enter:p(t,"enter",n),exit:p(t,"exit",n)})}))):l(t,i,o),firstRender:!1}},n.handleExited=function(t,e){var n=c(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=(0,i.Z)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,i=(0,r.Z)(t,["component","childFactory"]),o=this.state.contextValue,s=f(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===e?a.createElement(u.Z.Provider,{value:o},s):a.createElement(u.Z.Provider,{value:o},a.createElement(e,i,s))},e}(a.Component);d.propTypes={},d.defaultProps={component:"div",childFactory:function(t){return t}};const h=d},220:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n(67294).createContext(null)},39620:(t,e,n)=>{n.d(e,{p5:()=>E});var r=n(14890),i="persist/FLUSH",o="persist/REHYDRATE",s="persist/PAUSE",a="persist/PERSIST",u="persist/PURGE",c="persist/REGISTER";function p(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={registry:[],bootstrapped:!1},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return f({},t,{registry:[].concat(p(t.registry),[e.key])});case o:var n=t.registry.indexOf(e.key),r=p(t.registry);return r.splice(n,1),f({},t,{registry:r,bootstrapped:0===r.length});default:return t}};function E(t,e,n){var p=n||!1,l=(0,r.MT)(b,h,e&&e.enhancer?e.enhancer:void 0),d=function(t){l.dispatch({type:c,key:t})},E=function(e,n,r){var i={type:o,payload:n,err:r,key:e};t.dispatch(i),l.dispatch(i),p&&y.getState().bootstrapped&&(p(),p=!1)},y=f({},l,{purge:function(){var e=[];return t.dispatch({type:u,result:function(t){e.push(t)}}),Promise.all(e)},flush:function(){var e=[];return t.dispatch({type:i,result:function(t){e.push(t)}}),Promise.all(e)},pause:function(){t.dispatch({type:s})},persist:function(){t.dispatch({type:a,register:d,rehydrate:E})}});return e&&e.manualPersist||y.persist(),y}},78603:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return n=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?s(t):e}(this,(t=o(e)).call.apply(t,[this].concat(a))),u(s(n),"state",{bootstrapped:!1}),u(s(n),"_unsubscribe",void 0),u(s(n),"handlePersistorState",(function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally((function(){return n.setState({bootstrapped:!0})})):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())})),n}var n,c,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),n=e,(c=[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}])&&i(n.prototype,c),p&&i(n,p),e}(n(67294).PureComponent);u(c,"defaultProps",{children:null,loading:null})},53894:(t,e,n)=>{function r(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(i){return"function"==typeof i?i(n,r,t):e(i)}}}}n.d(e,{Z:()=>o});var i=r();i.withExtraArgument=r;const o=i}}]);