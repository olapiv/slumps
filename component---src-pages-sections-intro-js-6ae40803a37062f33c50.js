(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5nCB":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("hHhE"),n("/SS/"),n("HAE/"),n("91GP"),n("rE2o"),n("ioFf"),n("17x9")),i=n.n(a),c=(n("bWfx"),n("V+eJ"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("i8i4")),s=n("TSYQ"),l=n.n(s),p=n("sEfC"),u=n.n(p);function f(){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=window.document.documentElement;return"flex"in e.style||"webkitFlex"in e.style||"Flex"in e.style||"msFlex"in e.style}return!1}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=h(t).call(this,e),n=!o||"object"!=typeof o&&"function"!=typeof o?O(r):o,g(O(n),"onStepClick",(function(e){var t=n.props,r=t.onChange,o=t.current;r&&o!==e&&r(e)})),g(O(n),"calcStepOffsetWidth",(function(){if(!f()){var e=n.state.lastStepOffsetWidth,t=Object(c.findDOMNode)(O(n));t.children.length>0&&(n.calcTimeout&&clearTimeout(n.calcTimeout),n.calcTimeout=setTimeout((function(){var r=(t.lastChild.offsetWidth||0)+1;e===r||Math.abs(e-r)<=3||n.setState({lastStepOffsetWidth:r})})))}})),n.state={flexSupported:!0,lastStepOffsetWidth:0},n.calcStepOffsetWidth=u()(n.calcStepOffsetWidth,150),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.calcStepOffsetWidth(),f()||this.setState({flexSupported:!1})}},{key:"componentDidUpdate",value:function(){this.calcStepOffsetWidth()}},{key:"componentWillUnmount",value:function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.prefixCls,i=n.style,c=void 0===i?{}:i,s=n.className,p=n.children,u=n.direction,f=n.type,b=n.labelPlacement,h=n.iconPrefix,O=n.status,v=n.size,j=n.current,E=n.progressDot,w=n.initial,P=n.icons,S=n.onChange,x=d(n,["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","initial","icons","onChange"]),C="navigation"===f,k=this.state,N=k.lastStepOffsetWidth,W=k.flexSupported,T=o.a.Children.toArray(p).filter((function(e){return!!e})),_=T.length-1,D=E?"vertical":b,M=l()(a,"".concat(a,"-").concat(u),s,(g(e={},"".concat(a,"-").concat(v),v),g(e,"".concat(a,"-label-").concat(D),"horizontal"===u),g(e,"".concat(a,"-dot"),!!E),g(e,"".concat(a,"-navigation"),C),g(e,"".concat(a,"-flex-not-supported"),!W),e));return o.a.createElement("div",m({className:M,style:c},x),r.Children.map(T,(function(e,n){if(!e)return null;var o=w+n,i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({stepNumber:"".concat(o+1),stepIndex:o,prefixCls:a,iconPrefix:h,wrapperStyle:c,progressDot:E,icons:P,onStepClick:S&&t.onStepClick},e.props);return W||"vertical"===u||(C?(i.itemWidth="".concat(100/(_+1),"%"),i.adjustMarginRight=0):n!==_&&(i.itemWidth="".concat(100/_,"%"),i.adjustMarginRight=-Math.round(N/_+1))),"error"===O&&n===j-1&&(i.className="".concat(a,"-next-error")),e.props.status||(i.status=o===j?O:o<j?"finish":"wait"),i.active=o===j,Object(r.cloneElement)(e,i)})))}}])&&b(n.prototype,a),i&&b(n,i),t}(r.Component);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){return"string"==typeof e}g(j,"propTypes",{type:i.a.string,prefixCls:i.a.string,className:i.a.string,iconPrefix:i.a.string,direction:i.a.string,labelPlacement:i.a.string,children:i.a.any,status:i.a.string,size:i.a.string,progressDot:i.a.oneOfType([i.a.bool,i.a.func]),style:i.a.object,initial:i.a.number,current:i.a.number,icons:i.a.shape({finish:i.a.node,error:i.a.node}),onChange:i.a.func}),g(j,"defaultProps",{type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1});var T=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=x(t)).call.apply(e,[this].concat(i)),n=!o||"object"!=typeof o&&"function"!=typeof o?C(r):o,N(C(n),"onClick",(function(){var e=n.props,t=e.onClick,r=e.onStepClick,o=e.stepIndex;t&&t.apply(void 0,arguments),r(o)})),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(r=[{key:"renderIconNode",value:function(){var e,t=this.props,n=t.prefixCls,r=t.progressDot,a=t.stepNumber,i=t.status,c=t.title,s=t.description,p=t.icon,u=t.iconPrefix,f=t.icons,m=l()("".concat(n,"-icon"),"".concat(u,"icon"),(N(e={},"".concat(u,"icon-").concat(p),p&&W(p)),N(e,"".concat(u,"icon-check"),!p&&"finish"===i&&f&&!f.finish),N(e,"".concat(u,"icon-close"),!p&&"error"===i&&f&&!f.error),e)),y=o.a.createElement("span",{className:"".concat(n,"-icon-dot")});return r?"function"==typeof r?o.a.createElement("span",{className:"".concat(n,"-icon")},r(y,{index:a-1,status:i,title:c,description:s})):o.a.createElement("span",{className:"".concat(n,"-icon")},y):p&&!W(p)?o.a.createElement("span",{className:"".concat(n,"-icon")},p):f&&f.finish&&"finish"===i?o.a.createElement("span",{className:"".concat(n,"-icon")},f.finish):f&&f.error&&"error"===i?o.a.createElement("span",{className:"".concat(n,"-icon")},f.error):p||"finish"===i||"error"===i?o.a.createElement("span",{className:m}):o.a.createElement("span",{className:"".concat(n,"-icon")},a)}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,a=t.style,i=t.itemWidth,c=t.active,s=t.status,p=void 0===s?"wait":s,u=(t.iconPrefix,t.icon),f=(t.wrapperStyle,t.adjustMarginRight),m=(t.stepNumber,t.disabled),y=t.description,d=t.title,b=t.subTitle,h=(t.progressDot,t.tailContent),O=(t.icons,t.stepIndex,t.onStepClick),v=t.onClick,g=P(t,["className","prefixCls","style","itemWidth","active","status","iconPrefix","icon","wrapperStyle","adjustMarginRight","stepNumber","disabled","description","title","subTitle","progressDot","tailContent","icons","stepIndex","onStepClick","onClick"]),j=l()("".concat(r,"-item"),"".concat(r,"-item-").concat(p),n,(N(e={},"".concat(r,"-item-custom"),u),N(e,"".concat(r,"-item-active"),c),N(e,"".concat(r,"-item-disabled"),!0===m),e)),S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a);i&&(S.width=i),f&&(S.marginRight=f);var x={};return O&&!m&&(x.role="button",x.tabIndex=0,x.onClick=this.onClick),o.a.createElement("div",E({},g,{className:j,style:S}),o.a.createElement("div",E({onClick:v},x,{className:"".concat(r,"-item-container")}),o.a.createElement("div",{className:"".concat(r,"-item-tail")},h),o.a.createElement("div",{className:"".concat(r,"-item-icon")},this.renderIconNode()),o.a.createElement("div",{className:"".concat(r,"-item-content")},o.a.createElement("div",{className:"".concat(r,"-item-title")},d,b&&o.a.createElement("div",{title:b,className:"".concat(r,"-item-subtitle")},b)),y&&o.a.createElement("div",{className:"".concat(r,"-item-description")},y))))}}])&&S(n.prototype,r),a&&S(n,a),t}(o.a.Component);N(T,"propTypes",{className:i.a.string,prefixCls:i.a.string,style:i.a.object,wrapperStyle:i.a.object,itemWidth:i.a.oneOfType([i.a.number,i.a.string]),active:i.a.bool,disabled:i.a.bool,status:i.a.string,iconPrefix:i.a.string,icon:i.a.node,adjustMarginRight:i.a.oneOfType([i.a.number,i.a.string]),stepNumber:i.a.string,stepIndex:i.a.number,description:i.a.any,title:i.a.any,subTitle:i.a.any,progressDot:i.a.oneOfType([i.a.bool,i.a.func]),tailContent:i.a.any,icons:i.a.shape({finish:i.a.node,error:i.a.node}),onClick:i.a.func,onStepClick:i.a.func}),j.Step=T;var _=j,D=n("CtXQ"),M=n("H84U");function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=L(this,A(t).apply(this,arguments))).renderSteps=function(t){var n=t.getPrefixCls,o=n("steps",e.props.prefixCls),a=n("",e.props.iconPrefix),i={finish:r.createElement(D.a,{type:"check",className:"".concat(o,"-finish-icon")}),error:r.createElement(D.a,{type:"close",className:"".concat(o,"-error-icon")})};return r.createElement(_,z({icons:i},e.props,{prefixCls:o,iconPrefix:a}))},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement(M.a,null,this.renderSteps)}}])&&I(n.prototype,o),a&&I(n,a),t}(r.Component);J.Step=_.Step,J.defaultProps={current:0},J.propTypes={prefixCls:a.string,iconPrefix:a.string,current:a.number};var U=n("bx4M"),H=n("Ol7k"),K=n("PArb"),V=n("BMrR"),G=n("kPKH"),Q=(n("Wbzz"),n("rxcZ")),X=J.Step,B=U.a.Meta,q=H.a.Content;t.default=function(){return o.a.createElement(q,null,o.a.createElement(K.a,null,o.a.createElement("h1",null,"SLUMPS")),o.a.createElement("p",{className:"center-p"},"Research on randomization and superoptimization for WebAssembly WASM"),o.a.createElement(V.a,{type:"flex",justify:"center"},o.a.createElement(G.a,{key:"obj1",span:4},o.a.createElement(U.a,{style:{margin:"15px"}},o.a.createElement(B,{title:"Objective 1",description:"Lorem ipsum"}))),o.a.createElement(G.a,{key:"obj2",span:4},o.a.createElement(U.a,{style:{margin:"15px"}},o.a.createElement(B,{title:"Objective 2",description:"Lorem ipsum"}))),o.a.createElement(G.a,{key:"obj3",span:4},o.a.createElement(U.a,{style:{margin:"15px"}},o.a.createElement(B,{title:"Objective 3",description:"Lorem ipsum"})))),o.a.createElement(Q.a,{name:"Where we are?",color:"#fff"},o.a.createElement(V.a,{type:"flex",justify:"center"},o.a.createElement(G.a,null,o.a.createElement(J,{direction:"vertical"},o.a.createElement(X,{status:"finish",title:"WASM",description:"WASM binary to Souper IR",icon:o.a.createElement(D.a,{type:"code"})}),o.a.createElement(X,{status:"process",title:"Souper (Work in progress)",description:"Souper generates several candidates in the path to the 'opmitimazed' version. We keep those candidates",icon:o.a.createElement(D.a,{type:"loading"})}),o.a.createElement(X,{status:"process",title:"LLVM (Work in progress)",description:"Get the LLVM IR from the optimization candidates",icon:o.a.createElement(D.a,{type:"loading"})}),o.a.createElement(X,{status:"wait",title:"WASMs",description:"Generate the mutated versions of the original WASM file",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{type:"code"}),o.a.createElement(D.a,{type:"code"}),o.a.createElement(D.a,{type:"code"}),o.a.createElement(D.a,{type:"dash"}),o.a.createElement(D.a,{type:"code"}))}))))))}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},jm62:function(e,t,n){var r=n("XKFU"),o=n("mQtv"),a=n("aCFj"),i=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),s=i.f,l=o(r),p={},u=0;l.length>u;)void 0!==(n=s(r,t=l[u++]))&&c(p,t,n);return p}})},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),a=n("y3w9"),i=n("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}}}]);
//# sourceMappingURL=component---src-pages-sections-intro-js-6ae40803a37062f33c50.js.map