(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{UNdd:function(e){e.exports=JSON.parse('{"data":{"allTeamJson":{"edges":[{"node":{"name":"Martin Monperrus","img":"https://avatars2.githubusercontent.com/u/803666?s=400&v=4"}},{"node":{"name":"Benoit Baudry","img":"https://avatars1.githubusercontent.com/u/2844085?s=400&v=4"}},{"node":{"name":"Javier Cabrera Arteaga","img":"https://avatars3.githubusercontent.com/u/16924379?s=400&u=b90501bd4169297252e42a22013e783ee3dbe8ed&v=4"}},{"node":{"name":"Shrinish Donde","img":"https://avatars2.githubusercontent.com/u/23298265?s=400&v=4"}},{"node":{"name":"Jian Gu ","img":"https://avatars0.githubusercontent.com/u/9079360?s=400&v=4"}},{"node":{"name":"Lucas Satabin","img":"https://avatars2.githubusercontent.com/u/2537737?s=400&v=4"}}]}}}')},v0SW:function(e,t,n){"use strict";n.r(t);n("f3/d");var r=n("UNdd"),a=n("q1tI"),o=n.n(a),s=n("bx4M"),i=n("Ol7k"),c=n("BMrR"),l=n("kPKH"),u=(n("V+eJ"),n("hHhE"),n("/SS/"),n("HAE/"),n("91GP"),n("rE2o"),n("ioFf"),n("TSYQ")),f=n.n(u),p=n("CtXQ"),m=n("H84U");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=v(this,g(t).apply(this,arguments))).state={scale:1,mounted:!1,isImgExist:!0},e.setScale=function(){if(e.avatarChildren&&e.avatarNode){var t=e.avatarChildren.offsetWidth,n=e.avatarNode.offsetWidth;0===t||0===n||e.lastChildrenWidth===t&&e.lastNodeWidth===n||(e.lastChildrenWidth=t,e.lastNodeWidth=n,e.setState({scale:n-8<t?(n-8)/t:1}))}},e.handleImgLoadError=function(){var t=e.props.onError;!1!==(t?t():void 0)&&e.setState({isImgExist:!1})},e.renderAvatar=function(t){var n,r,o=t.getPrefixCls,s=e.props,i=s.prefixCls,c=s.shape,l=s.size,u=s.src,m=s.srcSet,d=s.icon,b=s.className,v=s.alt,g=S(s,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),E=e.state,O=E.isImgExist,w=E.scale,x=(E.mounted,o("avatar",i)),C=f()((y(n={},"".concat(x,"-lg"),"large"===l),y(n,"".concat(x,"-sm"),"small"===l),n)),j=f()(x,b,C,(y(r={},"".concat(x,"-").concat(c),c),y(r,"".concat(x,"-image"),u&&O),y(r,"".concat(x,"-icon"),d),r)),N="number"==typeof l?{width:l,height:l,lineHeight:"".concat(l,"px"),fontSize:d?l/2:18}:{},P=e.props.children;if(u&&O)P=a.createElement("img",{src:u,srcSet:m,onError:e.handleImgLoadError,alt:v});else if(d)P=a.createElement(p.a,{type:d});else{if(e.avatarChildren||1!==w){var k="scale(".concat(w,") translateX(-50%)"),I={msTransform:k,WebkitTransform:k,transform:k},J="number"==typeof l?{lineHeight:"".concat(l,"px")}:{};P=a.createElement("span",{className:"".concat(x,"-string"),ref:function(t){return e.avatarChildren=t},style:h(h({},J),I)},P)}else{P=a.createElement("span",{className:"".concat(x,"-string"),style:{opacity:0},ref:function(t){return e.avatarChildren=t}},P)}}return a.createElement("span",h({},g,{style:h(h({},N),g.style),className:j,ref:function(t){return e.avatarNode=t}}),P)},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(e){this.setScale(),e.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return a.createElement(m.a,null,this.renderAvatar)}}])&&b(n.prototype,r),o&&b(n,o),t}(a.Component);O.defaultProps={shape:"circle",size:"default"};var w=n("rxcZ");s.a.Meta,i.a.Header,i.a.Content,i.a.Footer,t.default=function(){var e=r.data.allTeamJson.edges.map((function(e){return e.node}));return o.a.createElement(w.a,{name:"Team",color:"#fff"},o.a.createElement(c.a,{type:"flex",justify:"center"},e.map((function(e,t){return o.a.createElement(l.a,{key:"team"+t,span:2},o.a.createElement("div",{className:"teamContainer"},o.a.createElement(O,{shape:"square",src:e.img,size:96,icon:"user"}),o.a.createElement("h5",null,e.name)))}))))}}}]);
//# sourceMappingURL=component---src-pages-sections-team-js-95ae18e924b1106ad996.js.map