(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{8141:function(e,t,n){"use strict";var o=n(4836);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=o(n(404));e.exports=t.default},404:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},602:function(e){"use strict";function t(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}},2703:function(e,t,n){"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6871:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState((function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}).bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:function(){return a}}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},1239:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(7294)),i=a(n(129));function a(e){return e&&e.__esModule?e:{default:e}}(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,modalVideoWidth:"100%"},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n.timeout,n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"==typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this)),this.setState({modalVideoWidth:this.getWidthFulfillAspectRatio(this.props.ratio,window.innerHeight,window.innerWidth)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})},10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var o=e.split(":"),r=Number(o[0]),i=Number(o[1]);return t<n*(i/r)?Math.floor(r/i*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return r.default.createElement(i.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?r.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},r.default.createElement("div",{className:e.props.classNames.modalVideoBody},r.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},r.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},r.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||r.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null})}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t})(r.default.Component).defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},7355:function(e){e.exports=(()=>{"use strict";var e={7418:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?function(e,r){for(var i,a,s=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var c=0;c<a.length;c++)o.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}:Object.assign},2408:(e,t,n)=>{var o=n(7418),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function S(){}function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=E.prototype;var _=w.prototype=new S;_.constructor=w,o(_,E.prototype),_.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var o,r={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!x.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];r.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===r[o]&&(r[o]=l[o]);return{$$typeof:i,type:e,key:a,ref:s,props:r,_owner:O.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,T=[];function j(e,t,n,o){if(T.length){var r=T.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,n){return null==e?0:function e(t,n,o,r){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case a:l=!0}}if(l)return o(r,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=n+M(s=t[u],u);l+=e(s,c,o,r)}else if("function"==typeof(c=null===t||"object"!=typeof t?null:"function"==typeof(c=y&&t[y]||t["@@iterator"])?c:null))for(t=c.call(t),u=0;!(s=t.next()).done;)l+=e(s=s.value,c=n+M(s,u++),o,r);else if("object"===s)throw Error(v(31,"[object Object]"==(o=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":o,""));return l}(e,"",t,n)}function M(e,t){var n,o;return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,o={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return o[e]})):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var o,r,a=e.result,s=e.keyPrefix;Array.isArray(e=e.func.call(e.context,t,e.count++))?W(e,a,n,function(e){return e}):null!=e&&(C(e)&&(o=e,r=s+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n,e={$$typeof:i,type:o.type,key:r,ref:o.ref,props:o.props,_owner:o._owner}),a.push(e))}function W(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),I(e,R,t=j(t,i,o,r)),D(t)}var L={current:null};function A(){var e=L.current;if(null===e)throw Error(v(321));return e}t.Children={map:function(e,t,n){if(null==e)return e;var o=[];return W(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;I(e,U,t=j(null,null,t,n)),D(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return W(e,t,null,function(e){return e}),t},only:function(e){if(!C(e))throw Error(v(143));return e}},t.Component=E,t.Fragment=s,t.Profiler=u,t.PureComponent=w,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:o},t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var r=o({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)k.call(t,c)&&!x.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){u=Array(c);for(var p=0;p<c;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:i,type:e.type,key:a,ref:s,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.14.0"},7294:(e,t,n)=>{e.exports=n(2408)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{default:()=>u});var e=n(7294);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s="undefined"!=typeof window,l="react-scrollspy-nav";let u=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}(p,n);var o,u,c=(u=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=a(p);if(u){var o=a(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return i(e)}(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,p),(t=c.call(this,e)).props=e,t.scrollTargetIds=t.props.scrollTargetIds,t.activeNavClass=t.props.activeNavClass,t.scrollDuration=Number(t.props.scrollDuration)||1e3,t.headerBackground="true"===t.props.headerBackground,t.offset=t.props.offset||0,t.onScroll=t.onScroll.bind(i(t)),t.props.router&&"HashRouter"===t.props.router?(t.homeDefaultLink="#/",t.hashIdentifier="#/#"):(t.homeDefaultLink="/",t.hashIdentifier="#"),t}return o=[{key:"onScroll",value:function(){var e,t=this;this.scrollTargetIds.forEach(function(n,o){document.getElementById(n)?(e=document.getElementById(n).offsetTop-(t.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),s&&window.pageYOffset-t.offset>=e&&window.pageYOffset<e+document.getElementById(n).scrollHeight?(t.getNavLinkElement(n).classList.add(t.activeNavClass),t.clearOtherNavLinkActiveStyle(n)):t.getNavLinkElement(n).classList.remove(t.activeNavClass),s&&window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&o===t.scrollTargetIds.length-1&&(t.getNavLinkElement(n).classList.add(t.activeNavClass),t.clearOtherNavLinkActiveStyle(n))):console.warn("".concat(l,": no element with id ").concat(n," present in the DOM"))})}},{key:"easeInOutQuad",value:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,n){var o=this,r=t-e,i=0;!function t(){i+=10;var a=o.easeInOutQuad(i,e,r,n);s&&window.scrollTo(0,a),i<n&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.map(function(n,o){n!==e&&t.getNavLinkElement(n).classList.remove(t.activeNavClass)})}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"#']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"#']")).addEventListener("click",function(t){t.preventDefault(),s&&e.scrollTo(window.pageYOffset,0,e.scrollDuration),s&&(window.location.hash="")}),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach(function(t){t.addEventListener("click",function(n){n.preventDefault();var o=e.getNavToSectionID(t.getAttribute("href"));if(o){if(document.getElementById(o)){var r=document.getElementById(o).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);s&&e.scrollTo(window.pageYOffset,r+e.offset,e.scrollDuration)}else console.warn("".concat(l,": no element with id ").concat(o," present in the DOM"))}else s&&e.scrollTo(window.pageYOffset,0,e.scrollDuration)})}),s&&window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){s&&window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){return e.createElement("div",{"data-nav":"list"},this.props.children)}}],function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(p.prototype,o),Object.defineProperty(p,"prototype",{writable:!1}),p}(e.Component)})(),o})()},129:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,function(e){if(!e||!e.__esModule){var t={};if(null!=e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}}t.default=e}}(n(5697));var o=s(n(8141)),r=s(n(602)),i=s(n(7294)),a=s(n(644));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n(4726);var u=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,o.default)(e,t)})},c=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,r.default)(e,t)})},p=function(e){function t(){for(var t,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).onEnter=function(e,n){var o=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,o),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,o),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.getClassNames("appear").doneClassName,r=t.getClassNames("enter").doneClassName,i=n?o+" "+r:r;t.removeClasses(e,n?"appear":"enter"),u(e,i),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,r=o?(o&&n?n+"-":"")+e:n[e],i=o?r+"-active":n[e+"Active"],a=o?r+"-done":n[e+"Done"];return{className:r,activeClassName:i,doneClassName:a}},t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var n=t.prototype;return n.removeClasses=function(e,t){var n=this.getClassNames(t),o=n.className,r=n.activeClassName,i=n.doneClassName;o&&c(e,o),r&&c(e,r),i&&c(e,i)},n.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},n.render=function(){var e=l({},this.props);return delete e.classNames,i.default.createElement(a.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.default.Component);p.defaultProps={classNames:""},p.propTypes={},t.default=p,e.exports=t.default},644:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}}return t.default=e,t}(n(5697)),r=s(n(7294)),i=s(n(3935)),a=n(6871);function s(e){return e&&e.__esModule?e:{default:e}}n(4726);var l="unmounted";t.UNMOUNTED=l;var u="exited";t.EXITED=u;var c="entering";t.ENTERING=c;var p="entered";t.ENTERED=p;var f="exiting";t.EXITING=f;var d=function(e){function t(t,n){o=e.call(this,t,n)||this;var o,r,i=n.transitionGroup,a=i&&!i.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?a?(r=u,o.appearStatus=c):r=p:r=t.unmountOnExit||t.mountOnEnter?l:u,o.state={status:r},o.nextCallback=null,o}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var n=t.prototype;return n.getChildContext=function(){return{transitionGroup:null}},t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null},n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(t=c):(n===c||n===p)&&(t=f)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},n.performEnter=function(e,t){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),a=r?i.appear:i.enter;if(!t&&!o){this.safeSetState({status:p},function(){n.props.onEntered(e)});return}this.props.onEnter(e,r),this.safeSetState({status:c},function(){n.props.onEntering(e,r),n.onTransitionEnd(e,a,function(){n.safeSetState({status:p},function(){n.props.onEntered(e,r)})})})},n.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();if(!n){this.safeSetState({status:u},function(){t.props.onExited(e)});return}this.props.onExit(e),this.safeSetState({status:f},function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,function(){t.safeSetState({status:u},function(){t.props.onExited(e)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;if(!e||o){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)},n.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},t}(r.default.Component);function h(){}d.contextTypes={transitionGroup:o.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var m=(0,a.polyfill)(d);t.default=m},4726:function(e,t,n){"use strict";var o;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(o=n(5697))&&o.__esModule,t.timeoutsShape=null,t.classNamesShape=null},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);