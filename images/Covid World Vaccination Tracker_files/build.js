var renderCovidSignupModule = (function () {
'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.14.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var react_development = createCommonjsModule(function (module, exports) {
});
var react_development_1 = react_development.Children;
var react_development_2 = react_development.Component;
var react_development_3 = react_development.Fragment;
var react_development_4 = react_development.Profiler;
var react_development_5 = react_development.PureComponent;
var react_development_6 = react_development.StrictMode;
var react_development_7 = react_development.Suspense;
var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_development_9 = react_development.cloneElement;
var react_development_10 = react_development.createContext;
var react_development_11 = react_development.createElement;
var react_development_12 = react_development.createFactory;
var react_development_13 = react_development.createRef;
var react_development_14 = react_development.forwardRef;
var react_development_15 = react_development.isValidElement;
var react_development_16 = react_development.lazy;
var react_development_17 = react_development.memo;
var react_development_18 = react_development.useCallback;
var react_development_19 = react_development.useContext;
var react_development_20 = react_development.useDebugValue;
var react_development_21 = react_development.useEffect;
var react_development_22 = react_development.useImperativeHandle;
var react_development_23 = react_development.useLayoutEffect;
var react_development_24 = react_development.useMemo;
var react_development_25 = react_development.useReducer;
var react_development_26 = react_development.useRef;
var react_development_27 = react_development.useState;
var react_development_28 = react_development.version;

var react = createCommonjsModule(function (module) {

{
  module.exports = react_production_min;
}
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.PropTypes;
var react_4 = react.createElement;
var react_5 = react.createContext;
var react_6 = react.forwardRef;

var scheduler_production_min = createCommonjsModule(function (module, exports) {
var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null;}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0));};g=function(a,b){q=setTimeout(a,b);};h=function(){clearTimeout(q);};k=function(){return !1};l=exports.unstable_forceFrameRate=function(){};}else {var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else {var B=x.now();exports.unstable_now=function(){return x.now()-B};}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5;};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null);}catch(b){throw I.postMessage(null),b;}}else C=!1;};f=function(a){D=a;C||(C=!0,I.postMessage(null));};g=function(a,b){E=y(function(){a(exports.unstable_now());},b);};h=function(){z(E);E=-1;};}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O);}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else {var b=L(O);null!==b&&g(W,b.startTime-a);}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b);}else M(N);Q=L(N);}if(null!==Q)var m=!0;else {var n=L(O);null!==n&&g(W,n.startTime-b);m=!1;}return m}finally{Q=null,R=c,S=!1;}}
function Y(a){switch(a){case 1:return -1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X));};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R;}var c=R;R=b;try{return a()}finally{R=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=R;R=a;try{return b()}finally{R=c;}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a);}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c;}}};
});
var scheduler_production_min_1 = scheduler_production_min.unstable_now;
var scheduler_production_min_2 = scheduler_production_min.unstable_forceFrameRate;
var scheduler_production_min_3 = scheduler_production_min.unstable_IdlePriority;
var scheduler_production_min_4 = scheduler_production_min.unstable_ImmediatePriority;
var scheduler_production_min_5 = scheduler_production_min.unstable_LowPriority;
var scheduler_production_min_6 = scheduler_production_min.unstable_NormalPriority;
var scheduler_production_min_7 = scheduler_production_min.unstable_Profiling;
var scheduler_production_min_8 = scheduler_production_min.unstable_UserBlockingPriority;
var scheduler_production_min_9 = scheduler_production_min.unstable_cancelCallback;
var scheduler_production_min_10 = scheduler_production_min.unstable_continueExecution;
var scheduler_production_min_11 = scheduler_production_min.unstable_getCurrentPriorityLevel;
var scheduler_production_min_12 = scheduler_production_min.unstable_getFirstCallbackNode;
var scheduler_production_min_13 = scheduler_production_min.unstable_next;
var scheduler_production_min_14 = scheduler_production_min.unstable_pauseExecution;
var scheduler_production_min_15 = scheduler_production_min.unstable_requestPaint;
var scheduler_production_min_16 = scheduler_production_min.unstable_runWithPriority;
var scheduler_production_min_17 = scheduler_production_min.unstable_scheduleCallback;
var scheduler_production_min_18 = scheduler_production_min.unstable_shouldYield;
var scheduler_production_min_19 = scheduler_production_min.unstable_wrapCallback;

var scheduler_development = createCommonjsModule(function (module, exports) {
});
var scheduler_development_1 = scheduler_development.unstable_now;
var scheduler_development_2 = scheduler_development.unstable_forceFrameRate;
var scheduler_development_3 = scheduler_development.unstable_IdlePriority;
var scheduler_development_4 = scheduler_development.unstable_ImmediatePriority;
var scheduler_development_5 = scheduler_development.unstable_LowPriority;
var scheduler_development_6 = scheduler_development.unstable_NormalPriority;
var scheduler_development_7 = scheduler_development.unstable_Profiling;
var scheduler_development_8 = scheduler_development.unstable_UserBlockingPriority;
var scheduler_development_9 = scheduler_development.unstable_cancelCallback;
var scheduler_development_10 = scheduler_development.unstable_continueExecution;
var scheduler_development_11 = scheduler_development.unstable_getCurrentPriorityLevel;
var scheduler_development_12 = scheduler_development.unstable_getFirstCallbackNode;
var scheduler_development_13 = scheduler_development.unstable_next;
var scheduler_development_14 = scheduler_development.unstable_pauseExecution;
var scheduler_development_15 = scheduler_development.unstable_requestPaint;
var scheduler_development_16 = scheduler_development.unstable_runWithPriority;
var scheduler_development_17 = scheduler_development.unstable_scheduleCallback;
var scheduler_development_18 = scheduler_development.unstable_shouldYield;
var scheduler_development_19 = scheduler_development.unstable_wrapCallback;

var scheduler = createCommonjsModule(function (module) {

{
  module.exports = scheduler_production_min;
}
});

function u$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(u$1(227));
function ba$1(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a;}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba$1.apply(ia,arguments);}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null;}else throw Error(u$1(198));fa||(fa=!0,ha=l);}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null;}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u$1(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u$1(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u$1(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0;}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u$1(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u$1(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies;}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u$1(102,c));qa[c]=d;b=!0;}}b&&ra();}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u$1(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b));}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a;}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a]);}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea();}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La();}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return !0;if(Oa.call(Pa,a))return !1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return !1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v$1(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;}var C$1={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C$1[a]=new v$1(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C$1[b]=new v$1(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C$1[a]=new v$1(a,2,!1,a.toLowerCase(),null,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C$1[a]=new v$1(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C$1[a]=new v$1(a,3,!1,a.toLowerCase(),null,!1);});
["checked","multiple","muted","selected"].forEach(function(a){C$1[a]=new v$1(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){C$1[a]=new v$1(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){C$1[a]=new v$1(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){C$1[a]=new v$1(a,5,!1,a.toLowerCase(),null,!1);});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C$1[b]=new v$1(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){C$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!1);});
C$1.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!0);});var Wa=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C$1.hasOwnProperty(b)?C$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
var Ya=/^(.*)[\\\/]/,E$1="function"===typeof Symbol&&Symbol.for,Za=E$1?Symbol.for("react.element"):60103,$a=E$1?Symbol.for("react.portal"):60106,ab=E$1?Symbol.for("react.fragment"):60107,bb=E$1?Symbol.for("react.strict_mode"):60108,cb=E$1?Symbol.for("react.profiler"):60114,db=E$1?Symbol.for("react.provider"):60109,eb=E$1?Symbol.for("react.context"):60110,fb=E$1?Symbol.for("react.concurrent_mode"):60111,gb=E$1?Symbol.for("react.forward_ref"):60112,hb=E$1?Symbol.for("react.suspense"):60113,ib=E$1?Symbol.for("react.suspense_list"):
60120,jb=E$1?Symbol.for("react.memo"):60115,kb=E$1?Symbol.for("react.lazy"):60116,lb=E$1?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return "function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return "Fragment";case $a:return "Portal";case cb:return "Profiler";case bb:return "StrictMode";case hb:return "Suspense";case ib:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return "Context.Consumer";case db:return "Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function sb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a));}function yb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1);}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function Fb(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function Gb(a,b){a=objectAssign({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u$1(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u$1(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:rb(c)};}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else {Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u$1(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling;}throw Error(u$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(u$1(189));}}if(c.alternate!==d)throw Error(u$1(190));}if(3!==c.tag)throw Error(u$1(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
function ic(a,b){if(null==b)throw Error(u$1(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u$1(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a);}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return {topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else {for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l));}mc(h);}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F$1(a,b);}c.set(a,null);}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c);});Ic.forEach(function(a){uc(a,b,c);});}function Kc(a,b,c,d,e){return {blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId);}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;scheduler.unstable_runWithPriority(a.priority,function(){yc(c);});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}function Qc(a){if(null!==a.blockedOn)return !1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return !1}return !0}
function Sc(a,b,c){Qc(a)&&c.delete(b);}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift();}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc);}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Tc)));}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift();}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f;}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=scheduler.unstable_UserBlockingPriority,ed=scheduler.unstable_runWithPriority,fd=!0;function F$1(a,b){vc(b,a,!1);}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a);}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1);}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d);}finally{(Ja=f)||La();}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d));}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else {var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a);}finally{qc(a);}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else {var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null;}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null;}else e!==c&&(c=null);}}a=rc(a,d,c,b);try{Ma(sc,a);}finally{qc(a);}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a];});});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var nd=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u$1(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u$1(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u$1(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c);}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=ud(c);}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=td(a.document);}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
function Gd(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--;}else c===Ad&&b++;}a=a.previousSibling;}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a);}return b}a=c;c=a.parentNode;}return null}function Nc(a){a=a[Md]||a[Od];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u$1(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(u$1(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a);}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a);}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a));}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a);}function Xd(a){jc(a,Ud);}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return !0}function ce(){return !1}
function G$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
objectAssign(G$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be);},persist:function(){this.isPersistent=be;},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null;}});G$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G$1);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u$1(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe;}var ge=G$1.extend({data:null}),he=G$1.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return -1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function re(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return "compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0;}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G$1.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a);}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null);}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else {Ja=!0;try{Fa(Ce,a);}finally{Ja=!1,La();}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge();}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else {g=Je;var h=Ie;}else (f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value);}},Ne=G$1.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null;}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse";}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m);}k=null;}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d);}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p);}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return !1;return !0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G$1.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0;}f=!e;}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return "keypress"===
a.type?of(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G$1;}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u$1(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H$1(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--);}
function I$1(a,b){zf++;yf[zf]=a.current;a.current=b;}var Af={},J$1={current:Af},K$1={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H$1(K$1);H$1(J$1);}function Ef(a,b,c){if(J$1.current!==Af)throw Error(u$1(168));I$1(J$1,b);I$1(K$1,c);}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u$1(108,pb(b)||"Unknown",e));return objectAssign({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J$1.current;I$1(J$1,a);I$1(K$1,K$1.current);return !0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u$1(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H$1(K$1),H$1(J$1),I$1(J$1,a)):H$1(K$1);I$1(K$1,c);}
var If=scheduler.unstable_runWithPriority,Jf=scheduler.unstable_scheduleCallback,Kf=scheduler.unstable_cancelCallback,Lf=scheduler.unstable_requestPaint,Mf=scheduler.unstable_now,Nf=scheduler.unstable_getCurrentPriorityLevel,Of=scheduler.unstable_ImmediatePriority,Pf=scheduler.unstable_UserBlockingPriority,Qf=scheduler.unstable_NormalPriority,Rf=scheduler.unstable_LowPriority,Sf=scheduler.unstable_IdlePriority,Tf={},Uf=scheduler.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u$1(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u$1(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a);}fg();}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null;}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1;}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null;}
function og(a){var b=jg.current;H$1(jg);a.type._context._currentValue=b;}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return;}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null);}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u$1(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null};}else lg=lg.next=b;}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null};}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects});}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b);}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h;}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g));}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g);}else {null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=objectAssign({},k,g);break a;case 2:tg=!0;}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z));}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null;}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k;}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u$1(191,d));d.call(e);}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new react.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c);}
var Jg={isMounted:function(a){return (a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c);}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L$1(b)?Bf:J$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null);}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L$1(b)?Bf:J$1.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u$1(309));var d=c.stateNode;}if(!d)throw Error(u$1(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u$1(284));if(!c._owner)throw Error(u$1(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u$1(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b);}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c);}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d);}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A;}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u$1(150));h=k.call(h);
if(null==h)throw Error(u$1(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A;}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h);}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=
d.sibling;}d=Vg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u$1(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u$1(174));return a}function dh(a,b){I$1(bh,b);I$1(ah,a);I$1($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a);}H$1($g);I$1($g,b);}function eh(){H$1($g);H$1(ah);H$1(bh);}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I$1(ah,a),I$1($g,c));}function gh(a){ah.current===a&&(H$1($g),H$1(ah));}var M$1={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}function ih(a,b){return {responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N$1=null,O$1=null,P$1=null,mh=!1;function Q$1(){throw Error(u$1(321));}function nh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return !1;return !0}
function oh(a,b,c,d,e,f){lh=f;N$1=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u$1(301));f+=1;P$1=O$1=null;b.updateQueue=null;jh.current=rh;a=c(d,e);}while(b.expirationTime===lh)}jh.current=sh;b=null!==O$1&&null!==O$1.next;lh=0;P$1=O$1=N$1=null;mh=!1;if(b)throw Error(u$1(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;return P$1}function uh(){if(null===O$1){var a=N$1.alternate;a=null!==a?a.memoizedState:null;}else a=O$1.next;var b=null===P$1?N$1.memoizedState:P$1.next;if(null!==b)P$1=b,O$1=a;else {if(null===a)throw Error(u$1(310));O$1=a;a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,baseQueue:O$1.baseQueue,queue:O$1.queue,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;}return P$1}
function vh(a,b){return "function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u$1(311));c.lastRenderedReducer=a;var d=O$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N$1.expirationTime&&
(N$1.expirationTime=l,Bg(l));}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N$1,a);return [b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N$1.updateQueue;null===b?(b={lastEffect:null},N$1.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N$1.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d);}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N$1.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d);}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0);});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c();}finally{kh.suspense=d;}});}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N$1||null!==f&&f===N$1)mh=!0,e.expirationTime=lh,N$1.expirationTime=lh;else {if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d);}}
var sh={readContext:sg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useResponder:Q$1,useDeferredValue:Q$1,useTransition:Q$1},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N$1,a);return [d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=
c;}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return [Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return [Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return [Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c);}Oh=a;Ph=Jd(b.firstChild);}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a;}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a;}
function Wh(a){if(a!==Oh)return !1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--;}else c!==zd&&c!==Cd&&c!==Bd||b++;}a=a.nextSibling;}Ph=null;}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return !0}
function Xh(){Ph=Oh=null;Qh=!1;}var Yh=Wa.ReactCurrentOwner,rg=!1;function R$1(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d);}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R$1(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function di(a,b,c,d,e){var f=L$1(c)?Bf:J$1.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R$1(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L$1(c)){var f=!0;Gf(b);}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L$1(c)?Bf:J$1.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K$1.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L$1(c)?Bf:J$1.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K$1.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R$1(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo);}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M$1.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I$1(M$1,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b);}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f);}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R$1(a,b,d.children,c);d=M$1.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else {if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I$1(M$1,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u$1(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd);}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else "dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k]);}else c||(a||(a=[]),a.push(h,c)),c=l;else "dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l));}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4;}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4);};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L$1(b.type)&&Df(),null;case 3:return eh(),H$1(K$1),H$1(J$1),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else {if(!d){if(null===b.stateNode)throw Error(u$1(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F$1("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F$1(ac[a],d);break;case "source":F$1("error",d);break;case "img":case "image":case "link":F$1("error",d);F$1("load",d);break;case "form":F$1("reset",d);F$1("submit",d);break;case "details":F$1("toggle",d);break;case "input":Ab(d,f);F$1("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F$1("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F$1("invalid",d),rd(c,"onChange");}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g);}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd);}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4);}else {g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F$1("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F$1(ac[h],a);h=d;break;case "source":F$1("error",a);h=d;break;case "img":case "image":case "link":F$1("error",a);F$1("load",a);h=d;break;case "form":F$1("reset",a);F$1("submit",a);h=d;break;case "details":F$1("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F$1("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=objectAssign({},d,{value:void 0});F$1("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F$1("invalid",a);rd(c,"onChange");break;default:h=d;}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g));}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd);}Fd(e,d)&&(b.effectTag|=4);}null!==b.ref&&(b.effectTag|=128);}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(u$1(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c);}return null;case 13:H$1(M$1);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M$1.current&1))S$1===ti&&(S$1=ui);else {if(S$1===ti||S$1===ui)S$1=vi;0!==wi&&null!==T$1&&(xi(T$1,U$1),yi(T$1,wi));}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L$1(b.type)&&Df(),null;case 19:H$1(M$1);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else {if(S$1!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I$1(M$1,M$1.current&1|2);return b.child}f=f.sibling;}}else {if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f);}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M$1.current,I$1(M$1,e?b&1|2:b&1),c):null}throw Error(u$1(156,
b.tag));}function zi(a){switch(a.tag){case 1:L$1(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H$1(K$1);H$1(J$1);b=a.effectTag;if(0!==(b&64))throw Error(u$1(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H$1(M$1),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H$1(M$1),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return {value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(c){Ei(a,c);}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Ei(a,c);}else b.current=null;}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u$1(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d();}c=c.next;}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else {var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate);}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Cg(c,b,a);}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u$1(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c();}catch(h){Ei(g,h);}}a=a.next;}while(a!==d)});}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c);}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b);}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return;}throw Error(u$1(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u$1(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b);}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling;}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling;}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u$1(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return;}e=!0;}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else {if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return;}m.sibling.return=m.return;m=m.sibling;}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode);}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1);}d.sibling.return=d.return;d=d.sibling;}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b);}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(u$1(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u$1(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b);};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V$1=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W$1=V$1,T$1=null,X$1=null,U$1=0,S$1=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y$1=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return (W$1&(fj|gj))!==V$1?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W$1&fj)!==V$1)return U$1;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u$1(326));}null!==T$1&&a===U$1&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u$1(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W$1&ej)!==V$1&&(W$1&(fj|gj))===V$1?yj(a):(Z$1(a),W$1===V$1&&gg()):Z$1(a);(W$1&4)===V$1||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)));}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}null!==e&&(T$1===e&&(Bg(b),S$1===vi&&xi(e,U$1)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z$1(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else {var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else {var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c);}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b;}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z$1(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W$1&(fj|gj))!==V$1)throw Error(u$1(327));Dj();a===T$1&&c===U$1||Ej(a,c);if(null!==X$1){var d=W$1;W$1|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h);}while(1);ng();W$1=d;cj.current=e;if(S$1===hj)throw b=kj,Ej(a,c),xi(a,c),Z$1(a),b;if(null===X$1)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S$1,T$1=null,d){case ti:case hj:throw Error(u$1(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u$1(329));}Z$1(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W$1&(fj|gj))!==V$1)throw Error(u$1(327));Dj();a===T$1&&b===U$1||Ej(a,b);if(null!==X$1){var c=W$1;W$1|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e);}while(1);ng();W$1=c;cj.current=d;if(S$1===hj)throw c=kj,Ej(a,b),xi(a,b),Z$1(a),c;if(null!==X$1)throw Error(u$1(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T$1=null;Jj(a);Z$1(a);}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z$1(c);});gg();}}
function Mj(a,b){var c=W$1;W$1|=1;try{return a(b)}finally{W$1=c,W$1===V$1&&gg();}}function Nj(a,b){var c=W$1;W$1&=-2;W$1|=ej;try{return a(b)}finally{W$1=c,W$1===V$1&&gg();}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X$1)for(c=X$1.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H$1(K$1);H$1(J$1);break;case 5:gh(d);break;case 4:eh();break;case 13:H$1(M$1);break;case 19:H$1(M$1);break;case 10:og(d);}c=c.return;}T$1=a;X$1=Sg(a.current,null);U$1=b;S$1=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1;}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N$1.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next;}lh=0;P$1=O$1=N$1=null;mh=!1;if(null===X$1||null===X$1.return)return S$1=hj,kj=b,X$1=null;a:{var e=a,f=X$1.return,g=X$1,h=b;b=U$1;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null);}var m=0!==(M$1.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else {var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0;}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t;}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else {var y=wg(1073741823,null);y.tag=2;xg(g,y);}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q);}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return;}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g));}S$1!==
jj&&(S$1=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return;}while(null!==p)}X$1=Pj(X$1);}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b);}function Bg(a){a>wi&&(wi=a);}function Kj(){for(;null!==X$1;)X$1=Qj(X$1);}function Gj(){for(;null!==X$1&&!Uf();)X$1=Qj(X$1);}function Qj(a){var b=Rj(a.alternate,a,U$1);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X$1=a;do{var b=X$1.alternate;a=X$1.return;if(0===(X$1.effectTag&2048)){b=si(b,X$1,U$1);if(1===U$1||1!==X$1.childExpirationTime){for(var c=0,d=X$1.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling;}X$1.childExpirationTime=c;}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X$1.firstEffect),null!==X$1.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X$1.firstEffect),a.lastEffect=X$1.lastEffect),1<X$1.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X$1:a.firstEffect=X$1,a.lastEffect=X$1));}else {b=zi(X$1);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048);}b=X$1.sibling;if(null!==b)return b;X$1=a;}while(null!==X$1);S$1===ti&&(S$1=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W$1&(fj|gj))!==V$1)throw Error(u$1(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u$1(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T$1&&(X$1=T$1=null,U$1=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W$1;W$1|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType;}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A;}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode;}t=A;}h=-1===x||-1===z?null:{start:x,end:z};}else h=null;}h=h||{start:0,end:0};}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y$1=e;do try{Tj();}catch(wb){if(null===Y$1)throw Error(u$1(330));Ei(Y$1,wb);Y$1=Y$1.nextEffect;}while(null!==Y$1);Y$1=e;do try{for(g=a,h=b;null!==Y$1;){var q=Y$1.effectTag;q&16&&Rb(Y$1.stateNode,"");if(q&128){var B=Y$1.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null);}}switch(q&1038){case 2:Pi(Y$1);Y$1.effectTag&=-3;break;case 6:Pi(Y$1);Y$1.effectTag&=-3;Si(Y$1.alternate,Y$1);break;case 1024:Y$1.effectTag&=-1025;break;case 1028:Y$1.effectTag&=
-1025;Si(Y$1.alternate,Y$1);break;case 4:Si(Y$1.alternate,Y$1);break;case 8:l=Y$1,Mi(g,l,h),Ni(l);}Y$1=Y$1.nextEffect;}}catch(wb){if(null===Y$1)throw Error(u$1(330));Ei(Y$1,wb);Y$1=Y$1.nextEffect;}while(null!==Y$1);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top;}fd=!!Dd;Ed=Dd=null;a.current=c;Y$1=e;do try{for(q=a;null!==Y$1;){var ub=Y$1.effectTag;ub&36&&Ji(q,Y$1.alternate,Y$1);if(ub&128){B=void 0;var vb=Y$1.ref;if(null!==vb){var Xc=Y$1.stateNode;switch(Y$1.tag){case 5:B=Xc;break;default:B=Xc;}"function"===typeof vb?vb(B):vb.current=B;}}Y$1=Y$1.nextEffect;}}catch(wb){if(null===Y$1)throw Error(u$1(330));Ei(Y$1,wb);Y$1=Y$1.nextEffect;}while(null!==Y$1);Y$1=
null;Vf();W$1=f;}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y$1=e;null!==Y$1;)b=Y$1.nextEffect,Y$1.nextEffect=null,Y$1=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z$1(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W$1&ej)!==V$1)return null;gg();return null}function Tj(){for(;null!==Y$1;){var a=Y$1.effectTag;0!==(a&256)&&Gi(Y$1.alternate,Y$1);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y$1=Y$1.nextEffect;}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return !1;var a=rj;rj=null;if((W$1&(fj|gj))!==V$1)throw Error(u$1(331));var b=W$1;W$1|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c);}}catch(d){if(null===a)throw Error(u$1(330));Ei(a,d);}c=a.nextEffect;a.nextEffect=null;a=c;}W$1=b;gg();return !0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z$1(a);}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z$1(c);break}}c=c.return;}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T$1===a&&U$1===c?S$1===vi||S$1===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U$1):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z$1(a)));}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z$1(a);}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K$1.current)rg=!0;else {if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L$1(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I$1(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I$1(M$1,M$1.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I$1(M$1,M$1.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I$1(M$1,M$1.current);if(!d)return null}return $h(a,b,c)}rg=!1;}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J$1.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L$1(d)){var f=!0;Gf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c);}else b.tag=0,R$1(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u$1(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u$1(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else {if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R$1(a,b,d,c),Xh();b=b.child;}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R$1(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R$1(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R$1(a,b,b.pendingProps,c),b.child;case 8:return R$1(a,
b,b.pendingProps.children,c),b.child;case 12:return R$1(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I$1(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K$1.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=
g;}R$1(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R$1(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L$1(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u$1(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64));}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a);}catch(e){}};}catch(d){}return !0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return !(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u$1(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0;}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0);}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b));}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b;}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u$1(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L$1(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(u$1(171));}if(1===c.tag){var k=c.type;if(L$1(k)){c=Ff(c,k,h);break a}}c=h;}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b);}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b);}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d;}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null);};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null;});};
function gk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a);};}bk(b,g,a,e);}else {f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a);};}Nj(function(){bk(b,g,a,e);});}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b);}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3));};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b);}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u$1(90));yb(d);Cb(d,e);}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1);}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W$1;W$1|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W$1=f,W$1===V$1&&gg();}};Ha=function(){(W$1&(1|fj|gj))===V$1&&(Lj(),Dj());};Ia=function(a,b){var c=W$1;W$1|=2;try{return a(b)}finally{W$1=c,W$1===V$1&&gg();}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u$1(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd);},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(objectAssign({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1=lk;var createPortal=kk;var findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u$1(188));throw Error(u$1(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
var flushSync=function(a,b){if((W$1&(fj|gj))!==V$1)throw Error(u$1(187));var c=W$1;W$1|=1;try{return cg(99,a.bind(null,b))}finally{W$1=c,gg();}};var hydrate=function(a,b,c){if(!gk(b))throw Error(u$1(200));return ik(null,a,b,!0,c)};var render=function(a,b,c){if(!gk(b))throw Error(u$1(200));return ik(null,a,b,!1,c)};
var unmountComponentAtNode=function(a){if(!gk(a))throw Error(u$1(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null;});}),!0):!1};var unstable_batchedUpdates=Mj;var unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
var unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u$1(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u$1(38));return ik(a,b,c,!1,d)};var version$1="16.14.0";

var reactDom_production_min = {
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1,
	createPortal: createPortal,
	findDOMNode: findDOMNode,
	flushSync: flushSync,
	hydrate: hydrate,
	render: render,
	unmountComponentAtNode: unmountComponentAtNode,
	unstable_batchedUpdates: unstable_batchedUpdates,
	unstable_createPortal: unstable_createPortal,
	unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
	version: version$1
};

/** @license React v0.19.1
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=0;var __interactionsRef=null;var __subscriberRef=null;var unstable_clear=function(a){return a()};var unstable_getCurrent=function(){return null};var unstable_getThreadID=function(){return ++b};var unstable_subscribe=function(){};var unstable_trace=function(a,d,c){return c()};var unstable_unsubscribe=function(){};var unstable_wrap=function(a){return a};

var schedulerTracing_production_min = {
	__interactionsRef: __interactionsRef,
	__subscriberRef: __subscriberRef,
	unstable_clear: unstable_clear,
	unstable_getCurrent: unstable_getCurrent,
	unstable_getThreadID: unstable_getThreadID,
	unstable_subscribe: unstable_subscribe,
	unstable_trace: unstable_trace,
	unstable_unsubscribe: unstable_unsubscribe,
	unstable_wrap: unstable_wrap
};

var schedulerTracing_development = createCommonjsModule(function (module, exports) {
});
var schedulerTracing_development_1 = schedulerTracing_development.__interactionsRef;
var schedulerTracing_development_2 = schedulerTracing_development.__subscriberRef;
var schedulerTracing_development_3 = schedulerTracing_development.unstable_clear;
var schedulerTracing_development_4 = schedulerTracing_development.unstable_getCurrent;
var schedulerTracing_development_5 = schedulerTracing_development.unstable_getThreadID;
var schedulerTracing_development_6 = schedulerTracing_development.unstable_subscribe;
var schedulerTracing_development_7 = schedulerTracing_development.unstable_trace;
var schedulerTracing_development_8 = schedulerTracing_development.unstable_unsubscribe;
var schedulerTracing_development_9 = schedulerTracing_development.unstable_wrap;

var tracing = createCommonjsModule(function (module) {

{
  module.exports = schedulerTracing_production_min;
}
});

var reactDom_development = createCommonjsModule(function (module, exports) {
});
var reactDom_development_1 = reactDom_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var reactDom_development_2 = reactDom_development.createPortal;
var reactDom_development_3 = reactDom_development.findDOMNode;
var reactDom_development_4 = reactDom_development.flushSync;
var reactDom_development_5 = reactDom_development.hydrate;
var reactDom_development_6 = reactDom_development.render;
var reactDom_development_7 = reactDom_development.unmountComponentAtNode;
var reactDom_development_8 = reactDom_development.unstable_batchedUpdates;
var reactDom_development_9 = reactDom_development.unstable_createPortal;
var reactDom_development_10 = reactDom_development.unstable_renderSubtreeIntoContainer;
var reactDom_development_11 = reactDom_development.version;

var reactDom = createCommonjsModule(function (module) {

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = reactDom_production_min;
}
});

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
});

unwrapExports(interopRequireWildcard);

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var REACT_ELEMENT_TYPE;

function _createRawReactElement(type, props, key, children) {
  if (!REACT_ELEMENT_TYPE) {
    REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
  }

  var defaultProps = type && type.defaultProps;
  var childrenLength = arguments.length - 3;

  if (!props && childrenLength !== 0) {
    props = {
      children: void 0
    };
  }

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = new Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 3];
    }

    props.children = childArray;
  }

  if (props && defaultProps) {
    for (var propName in defaultProps) {
      if (props[propName] === void 0) {
        props[propName] = defaultProps[propName];
      }
    }
  } else if (!props) {
    props = defaultProps || {};
  }

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key === undefined ? null : '' + key,
    ref: null,
    props: props,
    _owner: null
  };
}

var jsx = _createRawReactElement;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v$2=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d:return u}}}function A$1(a){return z$1(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n$1;var Fragment$1=e;var Lazy=t$1;var Memo=r$1;var Portal=d;
var Profiler$1=g;var StrictMode$1=f;var Suspense$1=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e};var isLazy=function(a){return z$1(a)===t$1};
var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d};var isProfiler=function(a){return z$1(a)===g};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$2)};var typeOf=z$1;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment$1,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var has = Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf$1 = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf$1(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty$1(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var p$2=function(){function e(e){this.isSpeedy=void 0===e.speedy?"production"==="production":e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null;}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t=function(e){var t=document.createElement("style");return t.setAttribute("data-lights",e.key||""),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);this.container.insertBefore(t,0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling),this.tags.push(t);}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t+=1)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var o=105===e.charCodeAt(1)&&64===e.charCodeAt(0);n.insertRule(e,o?0:n.cssRules.length);}catch(t){}}else r.appendChild(document.createTextNode(e));this.ctr+=1;},t.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0;},e}(),d$1={current:null};function h$1(e){e&&d$1.current.insert(e+"}");}var f$1,m$1=function(e,t,r,n,o,i,s,a,c,l){switch(e){default:break;case 1:switch(t.charCodeAt(0)){default:break;case 64:return d$1.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return ""}break;case 2:if(0===a)return t+"/*|*/";break;case 3:switch(a){case 102:case 112:return d$1.current.insert(r[0]+t),"";default:return t+(0===l?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(h$1);}},v$3=function(e,t){if(1===e&&108===t.charCodeAt(0)&&98===t.charCodeAt(2))return ""},y$2="undefined"!=typeof document,g$1=/\/\*\|\*\//g,b$2={},_=y$2?void 0:weakMemoize(function(){var e=weakMemoize(function(){return {}}),r={},n={};return function(t){return void 0===t||!0===t?r:!1===t?n:e(t)}}),N$2=/[A-Z]|^ms/g,w$2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,k$1=function(e){return 45===e.charCodeAt(1)},O$2=function(e){return null!=e&&"boolean"!=typeof e},x$2=memoize(function(e){return k$1(e)?e:e.replace(N$2,"-$&").toLowerCase()}),S$2=function(e,t){switch(e){default:break;case"animation":case"animationName":if("string"==typeof t)return t.replace(w$2,function(e,t,r){return f$1={name:t,styles:r,next:f$1},t})}return 1===unitlessKeys[e]||k$1(e)||"number"!=typeof t||0===t?t:t+"px"};function T$2(e,t,r,n){if(null==r)return "";if(void 0!==r.__lights_styles){var o=r.toString();if("NO_COMPONENT_SELECTOR"===o&&"production"!=="production")throw new Error("Component selectors can only be used in conjunction with pretty-lights/babel.");return o}switch(typeof r){case"boolean":return "";case"object":if(1===r.anim)return f$1={name:r.name,styles:r.styles,next:f$1},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)f$1={name:i.name,styles:i.styles,next:f$1},i=i.next;var s=r.styles+";";return s}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o+=1)n+=T$2(e,t,r[o],!1);else for(var i in r){var s=r[i];if("object"!=typeof s)null!=t&&void 0!==t[s]?n+=i+"{"+t[s]+"}":O$2(s)&&(n+=x$2(i)+":"+S$2(i,s)+";");else {if("NO_COMPONENT_SELECTOR"===i&&"production"!=="production")throw new Error("Component selectors can only be used in conjunction with pretty-lights/babel.");if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var a=T$2(e,t,s,!1);switch(i){case"animation":case"animationName":n+=x$2(i)+":"+a+";";break;default:n+=i+"{"+a+"}";}}else for(var c=0;c<s.length;c+=1)O$2(s[c])&&(n+=x$2(i)+":"+S$2(i,s[c])+";");}}return n}(e,t,r);case"function":if(void 0!==e){var a=f$1,c=r(e);return f$1=a,T$2(e,t,c,n)}break;}if(null==t)return r;var p=t[r];return !1===n&&void 0!==p?p:r}var z$2=/label:\s*([^\s;\n{]+)\s*;/g;function I$2(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,i="";f$1=void 0;var s,a=e[0];null==a||void 0===a.raw?(o=!1,i+=T$2(n,t,a,!1)):(i+=a[0]);for(var c=1;c<e.length;c+=1)i+=T$2(n,t,e[c],46===i.charCodeAt(i.length-1)),o&&(i+=a[c]);z$2.lastIndex=0;for(var l,u="";null!==(l=z$2.exec(i));)u+="-"+l[1];return {name:murmur2(i)+u,styles:i,map:s,next:f$1}}var q$2="undefined"!=typeof document;function L$2(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]):r&&(n+=r+" ");}),n}var G$2=function(e,t){var r=e.key+"-"+t.name;if(void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var n="",o=t;do{var i=e.insert("."+r,o,e.sheet,!0);q$2||void 0===i||(n+=i),o=o.next;}while(void 0!==o);if(!q$2&&0!==n.length)return n}};function Y$2(e,t,r){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0,r)}function M$2(e,t,r){var n=[],o=L$2(e,n,r);return n.length<2?r:o+t(n)}var U$2=function e(t){for(var r="",n=0;n<t.length;n+=1){var o=t[n];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o;}i&&(r&&(r+=" "),r+=i);}}return r};function F$2(){return (F$2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}var $=react.createContext({}),H$2="undefined"!=typeof document,W$2=index,B$1=function(e){return "theme"!==e&&"innerRef"!==e},J$2=function(e){return "string"==typeof e&&e.charCodeAt(0)>96?W$2:B$1},Z$2=weakMemoize(function(e){return weakMemoize(function(t){return function(e,t){if("function"==typeof t){var r=t(e);return r}return F$2({},e,t)}(e,t)})}),K$2=function(e){return react_4($.Consumer,null,function(t){return e.theme!==t&&(t=Z$2(t)(e.theme)),react_4($.Provider,{value:t},e.children)})};function Q$2(e){var t=e.displayName||e.name||"Component",r=react_6(function(t,r){return react_4($.Consumer,null,function(n){return react_4(e,F$2({theme:n,ref:r},t))})});return r.displayName="WithTheme("+t+")",hoistNonReactStatics_cjs(r,e)}function X$2(){return react.useContext($)}function ee$1(e,t,r){var n,o=t.theme&&t.theme[e];return "function"==typeof(n="function"==typeof o?o(r):r[o]?r[o]:r.none)?n(t):n}function te$1(e,t){return function(r){return ee$1(e,r,t)}}K$2.displayName="ThemeProvider",te$1.variants=function(e,t,r){return function(n){var o=n[t]&&r[n[t]];return o&&ee$1(e,n,o)}};var re$1=function(t,r){if(void 0!==t.__SECRET_LIGHTS__)return t.__SECRET_LIGHTS__;var n=function(t){void 0===t&&(t={});var r,n,o=t.key||"css";void 0!==t.prefix&&(n={prefix:t.prefix});var i,s,a=new stylis_min(n),c={};if(y$2){i=t.container||document.head;var l="data-lights-"+o,u=document.querySelectorAll("style["+l+"]");Array.prototype.forEach.call(u,function(e){(e.getAttribute(l)||"").split(" ").forEach(function(e){c[e]=!0;}),e.parentNode!==i&&i.appendChild(e);});}if(y$2)a.use(t.stylisPlugins)(m$1),s=function(e,t,n,o,i){if(d$1.current=n,"production"!=="production");if(void 0===r.inserted[t.name]){var c=a(e,t.styles);o&&(r.inserted[t.name]=c.replace(g$1,""),""===e&&i&&(r.global[t.name]=!0));}};else {a.use(v$3);var h=b$2;(t.stylisPlugins||void 0!==t.prefix)&&(a.use(t.stylisPlugins),h=_(t.stylisPlugins||b$2)(t.prefix)),s=function(e,t,n,o,i){if(void 0===r.inserted[t.name]){var s=function(e,t){var r=t.name;return void 0===h[r]&&(h[r]=a(e,t.styles)),h[r]}(e,t);if(!o)return s;r.inserted[t.name]=s,""===e&&i&&(r.global[t.name]=!0);}};}return r={key:o,sheet:new p$2({key:o,container:i,nonce:t.nonce,speedy:t.speedy}),nonce:t.nonce,inserted:c,registered:{},global:{},insert:s}}(void 0);n.sheet.speedy=function(e){this.isSpeedy=e;},n.compat=!0;var o=function(){var e=I$2([].slice.call(arguments),n.registered),t=n.key+"-"+e.name;return G$2(n,e),t},i={css:o,cx:function(){return M$2(n.registered,o,U$2([].slice.call(arguments)))},injectGlobal:function(){var e=I$2([].slice.call(arguments),n.registered);Y$2(n,e,!0);},keyframes:function(){var e=I$2([].slice.call(arguments),n.registered),t="animation-"+e.name;return Y$2(n,{name:e.name,styles:"@keyframes "+t+"{"+e.styles+"}"}),t},hydrate:function(e){e.forEach(function(e){n.inserted[e]=!0;});},flush:function(){n.registered={},n.inserted={},n.global={},n.sheet.flush();},sheet:n.sheet,cache:n,getRegisteredStyles:L$2,merge:M$2.bind(null,n.registered,o)};return t.__SECRET_LIGHTS__=i,i}("undefined"!=typeof global?global:{}),ne$1=function(e){var t=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){this.sheet=new p$2({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-lights-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles();},o.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles();},o.insertStyles=function(){void 0!==this.props.serialized.next&&G$2(this.props.cache,this.props.serialized.next),this.sheet.tags.length&&(this.sheet.before=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling,this.sheet.flush()),this.props.cache.insert("",this.props.serialized,this.sheet,!1);},o.componentWillUnmount=function(){this.sheet.flush();},o.render=function(){if(!H$2){for(var e,t=this.props.serialized,r=t.name,n=t.styles,o=t.next;void 0!==o;)r+=" "+o.name,n+=o.styles,o=o.next;this.props.cache.insert("",{name:r,styles:n},this.sheet,!0);var i=((e={})["data-global-"+this.props.cache.key]=r,e);return react_4("style",i)}return null},n}(react_2);return t.displayName="InnerGlobal",function(r){var n=r.styles;if("function"==typeof n)return react_4($.Consumer,null,function(r){var o=I$2([n(r)],e.cache.registered);return react_4(t,{serialized:o,cache:e.cache})});var o=I$2([n],e.cache.registered);return react_4(t,{serialized:o,cache:e.cache})}}(re$1),oe$1=function(e){return function t(r,n){var o,i,a;void 0!==n&&(o=n.label,a=n.target,i=r.__lights_forwardProp&&n.shouldForwardProp?function(e){return r.__lights_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var c=r.__lights_real===r,l=c&&r.__lights_base||r;"function"!=typeof i&&c&&(i=r.__lights_forwardProp);var u=i||J$2(l),p=!u("as");return function(){var d=[].slice.call(arguments),h=c&&void 0!==r.__lights_styles?r.__lights_styles.slice(0):[];if(void 0!==o&&h.push("label:"+o+";"),null==d[0]||void 0===d[0].raw)h.push.apply(h,d);else {h.push(d[0][0]);for(var f=d.length,m=1;m<f;m+=1)h.push(d[m],d[0][m]);}var v=function(t){return react_4($.Consumer,null,function(r){var n=p&&t.as||l,o="",c=[],d=t;if(null==t.theme){for(var f in d={},t)d[f]=t[f];d.theme=r;}"string"==typeof t.className?o=L$2(e.cache.registered,c,t.className):null!=t.className&&(o=t.className+" ");var m=I$2(h.concat(c),e.cache.registered,d);G$2(e.cache,m),o+=e.cache.key+"-"+m.name,void 0!==a&&(o+=" "+a);var v=p&&void 0===i?J$2(n):u,y={};for(var g in t)p&&"as"===g||v(g)&&(y[g]=t[g]);return y.className=o,y.ref=t.innerRef,react_4(n,y)})};return v.displayName=void 0!==o?o:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",void 0!==r.defaultProps&&(v.defaultProps=r.defaultProps),v.__lights_styles=h,v.__lights_base=l,v.__lights_real=v,v.__lights_forwardProp=i,Object.defineProperty(v,"toString",{value:function(){return void 0===a&&"production"!=="production"?"NO_COMPONENT_SELECTOR":"."+a}}),v.withComponent=function(e,r){return t(e,void 0!==r?F$2({},n||{},r):n).apply(void 0,h)},v}}}(re$1).bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){oe$1[e]=oe$1(e);});var ie$1=re$1.flush,se$1=re$1.hydrate,ae$1=re$1.cx,ce$1=re$1.merge,le$1=re$1.getRegisteredStyles,ue$1=re$1.injectGlobal,pe$1=re$1.keyframes,de$1=re$1.css,he$1=re$1.sheet,fe$1=re$1.cache;

var prettyLights_modern = /*#__PURE__*/Object.freeze({
__proto__: null,
Global: ne$1,
ThemeContext: $,
ThemeProvider: K$2,
cache: fe$1,
css: de$1,
cx: ae$1,
flush: ie$1,
getRegisteredStyles: le$1,
hydrate: se$1,
injectGlobal: ue$1,
keyframes: pe$1,
merge: ce$1,
sheet: he$1,
styled: oe$1,
themeFn: te$1,
useTheme: X$2,
withTheme: Q$2
});

var visibilitySensor = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory(react, reactDom);
})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value; // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.

  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibilitySensor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    var _this;

    _classCallCheck(this, VisibilitySensor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return _this.props.containment || window;
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function later() {
        timeout = null;

        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };
      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    });

    _defineProperty(_assertThisInitialized(_this), "startWatching", function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      } // if dont need delayed call, check on load ( before the first interval fires )


      !_this.props.delayedCall && _this.check();
    });

    _defineProperty(_assertThisInitialized(_this), "stopWatching", function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];
            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }

      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      var el = _this.node;
      var rect;
      var containmentRect; // if the component has rendered to null, dont update visibility

      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();

        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      } // Check if visibility is wanted via offset?


      var offset = _this.props.offset || {};
      var hasValidOffset = _typeof(offset) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      }; // https://github.com/joshwnj/react-visibility-sensor/pull/114

      var hasSize = rect.height > 0 && rect.width > 0;
      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right; // check for partial visibility

      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left; // account for partial visibility on a single edge

        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        } // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.


        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      } // Deprecated options for calculating offset.


      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
        isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
      }

      var state = _this.state; // notify the parent when the value changes

      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };

        _this.setState(state);

        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    });

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });
        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }
    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VisibilitySensor, "defaultProps", {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
});

_defineProperty(VisibilitySensor, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }), // deprecated offset property
  prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })]),
  scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })
/******/ ]);
});
});

unwrapExports(visibilitySensor);

var context = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailSignupProvider = exports.useEmailSignupContext = exports.EmailSignupContext = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var shape = _propTypes["default"].shape,
    node = _propTypes["default"].node;

var EmailSignupContext = /*#__PURE__*/_react["default"].createContext({});

exports.EmailSignupContext = EmailSignupContext;

var useEmailSignupContext = function useEmailSignupContext() {
  return (0, _react.useContext)(EmailSignupContext);
};

exports.useEmailSignupContext = useEmailSignupContext;

var EmailSignupProvider = function EmailSignupProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsx2["default"])(EmailSignupContext.Provider, {
    value: value
  }, void 0, children);
};

exports.EmailSignupProvider = EmailSignupProvider;
EmailSignupProvider.displayName = "EmailSignupProvider";
});

unwrapExports(context);
var context_1 = context.EmailSignupProvider;
var context_2 = context.useEmailSignupContext;
var context_3 = context.EmailSignupContext;

var loadScriptOnce_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = interopRequireDefault(defineProperty);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 *  frontend utility to load an external JS file once
 *  @param {string} url - url of external script
 *  @return {Promise} - resolved when script is loaded (immediate if already loaded)
 */
var loadScriptOnce = function loadScriptOnce(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    var addListeners = function addListeners(script) {
      script.addEventListener('load', function () {
        script.dataset.loaded = true;
        resolve(script);
      });
      script.addEventListener('error', function (e) {
        script.dataset.loaded = true;
        script.dataset.error = true;
        reject(e);
      });
      return script;
    };

    var script = document.querySelector("script[src=\"".concat(url, "\"]"));

    if (script) {
      // if there's already a script on the page, and it's loaded, resolve immediately
      if (script.dataset.loaded) {
        return script.dataset.error ? reject() : resolve(script);
      } // script is on the page but hasn't yet fired onload


      return addListeners(script);
    }

    if (opts.readyCode && window[opts.readyCode] && !(typeof window[opts.readyCode] === 'function' && window[opts.readyCode]() === false)) {
      return resolve();
    }

    var _asyncProp$deferProp$ = _objectSpread({
      asyncProp: true,
      deferProp: true
    }, opts),
        asyncProp = _asyncProp$deferProp$.asyncProp,
        deferProp = _asyncProp$deferProp$.deferProp; // otherwise, it hasn't been added to the page yet, so add it and wait for it to load


    var s = document.createElement('script');
    s.src = url;
    s.async = asyncProp;
    s.defer = deferProp;
    document.body.appendChild(s);
    return addListeners(s);
  });
};

var _default = loadScriptOnce;
exports["default"] = _default;
});

unwrapExports(loadScriptOnce_1);

var captcha = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetReCaptcha = exports.executeReCaptcha = exports.renderReCaptcha = exports.loadReCaptchaScript = void 0;

var _loadScriptOnce = interopRequireDefault(loadScriptOnce_1);

var RECAPTCHA_ON_LOAD_CALLBACK = 'BFX6JY';
var RECAPTCHA_SCRIPT_URI = "https://www.google.com/recaptcha/api.js?onload=".concat(RECAPTCHA_ON_LOAD_CALLBACK, "&render=explicit");

function getCaptchaSiteKey(env) {
  var _window, _window$vi;

  // is this vi? if so, use that key
  if ((_window = window) !== null && _window !== void 0 && (_window$vi = _window.vi) !== null && _window$vi !== void 0 && _window$vi.env) {
    var _window2, _window2$vi;

    return (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$vi = _window2.vi) === null || _window2$vi === void 0 ? void 0 : _window2$vi.env.RECAPTCHA_SITEKEY;
  } // it's not vi? use the env that is passed in


  if (env === 'production') {
    return '6LevSGcUAAAAAF-7fVZF05VTRiXvBDAY4vBSPaTF';
  }

  return '6LfW9GcUAAAAAKLqQzehfTHHdWrtQf2UcRBOgA-J';
}

function handleReCaptchaLoad() {
  window.isCaptchaLoaded = true;
}

var loadReCaptchaScript = function loadReCaptchaScript() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : handleReCaptchaLoad;

  if (!window[RECAPTCHA_ON_LOAD_CALLBACK]) {
    window[RECAPTCHA_ON_LOAD_CALLBACK] = callback;
    (0, _loadScriptOnce["default"])(RECAPTCHA_SCRIPT_URI);
  }
};

exports.loadReCaptchaScript = loadReCaptchaScript;

var renderReCaptcha = function renderReCaptcha(env, ref, callback, errorCallback) {
  var _window3;

  if ((_window3 = window) !== null && _window3 !== void 0 && _window3.isCaptchaLoaded) {
    var _window4, _window4$grecaptcha;

    return (_window4 = window) === null || _window4 === void 0 ? void 0 : (_window4$grecaptcha = _window4.grecaptcha) === null || _window4$grecaptcha === void 0 ? void 0 : _window4$grecaptcha.render(ref, {
      sitekey: getCaptchaSiteKey(env),
      callback: callback,
      'error-callback': errorCallback,
      size: 'invisible',
      isolated: true,
      badge: 'none'
    });
  }

  throw new Error('Captcha has not loaded');
};

exports.renderReCaptcha = renderReCaptcha;

var executeReCaptcha = function executeReCaptcha(id) {
  var _window5, _window5$grecaptcha;

  return (_window5 = window) === null || _window5 === void 0 ? void 0 : (_window5$grecaptcha = _window5.grecaptcha) === null || _window5$grecaptcha === void 0 ? void 0 : _window5$grecaptcha.execute(id);
};

exports.executeReCaptcha = executeReCaptcha;

var resetReCaptcha = function resetReCaptcha(id) {
  var _window6, _window6$grecaptcha;

  return (_window6 = window) === null || _window6 === void 0 ? void 0 : (_window6$grecaptcha = _window6.grecaptcha) === null || _window6$grecaptcha === void 0 ? void 0 : _window6$grecaptcha.reset(id);
};

exports.resetReCaptcha = resetReCaptcha;
});

unwrapExports(captcha);
var captcha_1 = captcha.resetReCaptcha;
var captcha_2 = captcha.executeReCaptcha;
var captcha_3 = captcha.renderReCaptcha;
var captcha_4 = captcha.loadReCaptchaScript;

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNYTDomain = isNYTDomain;
exports.hasNYTSCookie = hasNYTSCookie;
exports.getCookie = getCookie;
exports.handleAutoSubscribe = handleAutoSubscribe;
exports.checkToSubscribeRedirectedUser = checkToSubscribeRedirectedUser;
exports.getLoggedOutView = getLoggedOutView;
exports.getViewFromUser = getViewFromUser;
exports.isValidNewsletterCode = void 0;



/**
 * NYTimes domain validation
 * @param {string} hostname
 * @return boolean
 */
function isNYTDomain(hostname) {
  return /nytimes\.com$/.test(hostname);
}
/**
 * Newsletter code validation
 * @param {string} code
 * @return boolean
 */


var isValidNewsletterCode = function isValidNewsletterCode(code) {
  var codePattern = /^[A-Z]{2,4}$/;

  if (Array.isArray(code) && code.length > 0) {
    var validCodes = code.filter(function (value) {
      return codePattern.test(value);
    });
    return validCodes.length > 0;
  }

  return codePattern.test(code);
};
/**
 * Check for NYT-S cookie
 * @return boolean
 */


exports.isValidNewsletterCode = isValidNewsletterCode;

function hasNYTSCookie() {
  return typeof window !== 'undefined' && document.cookie.indexOf('NYT-S') !== -1;
}

function getCookie(name) {
  var value = "; ".concat(document.cookie);
  var parts = value.split("; ".concat(name, "="));
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function subscribeAnonymousRedirectedUser(env, ref, handleAnonymousNewsletterSignup) {
  var onLoadCallback = function onLoadCallback() {
    window.isCaptchaLoaded = true;

    try {
      var grecaptchaId;

      var callback = function callback(captchaToken) {
        // pull the user's email address from a short-lived cookie
        var email = getCookie('nyt-newsletter-email');

        if (email) {
          handleAnonymousNewsletterSignup(captchaToken, email);
          (0, captcha.resetReCaptcha)(grecaptchaId);
        } else {
          // eslint-disable-next-line no-console
          console.error('Unable to find user email');
        }
      };

      var errorCallback = function errorCallback() {
        // eslint-disable-next-line no-console
        console.error('Captcha error');
      };

      grecaptchaId = (0, captcha.renderReCaptcha)(env, ref, callback, errorCallback);
      (0, captcha.executeReCaptcha)(grecaptchaId);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Captcha has not loaded'); // some kind of error state
    }
  };

  (0, captcha.loadReCaptchaScript)(onLoadCallback);
}
/**
 * check if productCode matches with product_code query params
 *
 * @param {string} productCode
 * @param {object} params
 * @return boolean
 */


function checkMatchingProductCodes(productCode, params) {
  var productCodeParam = decodeURIComponent(params.get('product_code'));
  if (!productCodeParam) return false; // check for single product code

  if (productCode === productCodeParam) return true;
  return false;
}
/**
 * Auto subscribe to a newsletter if users are logged in with
 * newsletter_signup and product_code query params
 * ******
 * Display newsletter signup form if users are logged out with
 * newsletter_signup and product_code query params
 * (trigger modal, inline already displays by default)
 * ******
 * @param {string} productCode
 * @param {string} type
 * @param {function} handleNewsletterSignup
 * @param {function} handleModalButtonClick
 */


function handleAutoSubscribe(productCode, type, handleNewsletterSignup, handleModalButtonClick) {
  try {
    var params = new URL(window.location).searchParams;
    var isOneClickSignup = params.get('newsletter_signup') === 'true';
    if (!isOneClickSignup) return;
    var loggedIn = hasNYTSCookie();
    var isMatchingProductCode = checkMatchingProductCodes(productCode, params); // if there are multiple versions of this component on the page,
    // ensure we are subscribing the user to the correct product code

    if (!isMatchingProductCode) return; // if logged in, automatically sign them up

    if (loggedIn) handleNewsletterSignup(); // if not logged in and the layout type is a modal, display the modal

    if (!loggedIn && type === 'modal') handleModalButtonClick();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Unable to auto subscribe user');
  }
}

function checkToSubscribeRedirectedUser(env, ref, productCode, handleNewsletterSignup, handleAnonymousNewsletterSignup) {
  try {
    var params = new URL(window.location).searchParams;
    var auth = params.get('auth');
    var isMatchingProductCode = checkMatchingProductCodes(productCode, params); // if there are multiple versions of this component on the page,
    // ensure we are subscribing the user to the correct product code

    if (!isMatchingProductCode) return; // intended to capture the many ways people can register
    // such as register-email and register-google

    if (auth && auth.includes('register-')) {
      // subscribe by NYTS cookie
      handleNewsletterSignup();
    }

    if (auth === 'validate-regi') {
      // subscribe by email
      subscribeAnonymousRedirectedUser(env, ref, handleAnonymousNewsletterSignup);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Unable to subscribe the user');
  }
}
/**
 * Get string used to set view state for logged out users
 * @param {string} type
 * @return string
 */


function getLoggedOutView(type) {
  // Is the user not logged in and the type is modal?
  // Display a button which will deploy the Modal onClick.
  if (type === 'modal') {
    return 'loggedOutModal';
  } // Is the user not logged in and the type is inline?
  // Display the NewsletterSubscribe email-first iframe.
  // If the product code is not valid, don't display modal.


  return 'loggedOut';
}
/**
 * Get string used to set view state
 * @param {object} props
 * @return string
 */


function getViewFromUser(_ref) {
  var _data$user, _data$user2, _data$user2$newslette;

  var data = _ref.data,
      productCode = _ref.productCode,
      onIsSubscribed = _ref.onIsSubscribed,
      onIsNotSubscribed = _ref.onIsNotSubscribed,
      type = _ref.type;
  var isLoggedIn = data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.profile;
  var codes = (data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : (_data$user2$newslette = _data$user2.newsletterSubscriptions) === null || _data$user2$newslette === void 0 ? void 0 : _data$user2$newslette.newsletterCodes) || []; // Is the user logged in?

  if (isLoggedIn) {
    // Does ths user already receive this newsletter?
    // If so, display the already subscribed message.
    // Unless showAlreadySubscribedMessage is false.
    if (codes.includes(productCode)) {
      if (onIsSubscribed) onIsSubscribed();
      return 'alreadySubscribed';
    } // If the user doesn't already subscribe to this newsletter,
    // Display the logged in subscribe button


    if (onIsNotSubscribed) onIsNotSubscribed();
    return 'loggedIn';
  }

  if (onIsNotSubscribed) onIsNotSubscribed();
  return getLoggedOutView(type);
}
});

unwrapExports(utils);
var utils_1 = utils.isNYTDomain;
var utils_2 = utils.hasNYTSCookie;
var utils_3 = utils.getCookie;
var utils_4 = utils.handleAutoSubscribe;
var utils_5 = utils.checkToSubscribeRedirectedUser;
var utils_6 = utils.getLoggedOutView;
var utils_7 = utils.getViewFromUser;
var utils_8 = utils.isValidNewsletterCode;

var queries = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeAnonymousQuery = exports.subscribeQuery = exports.userQuery = void 0;
var userGraphql = "\n  query UserQuery {\n    user {\n      __typename\n      profile {\n        displayName\n        email\n      }\n      newsletterSubscriptions {\n        newsletterCodes\n      }\n    }\n  }";
var subscribeGraphql = "\n  mutation subToNewsletters($input: CreateNoCaptchaNewsletterSubscriptionInput!) {\n    createNoCaptchaNewsletterSubscription(input: $input) {\n      message\n    }\n  }\n";
var subscribeAnonymousGraphql = "\n  mutation CreateNewsletterSubscriptionInput($newsletterInput: CreateNewsletterSubscriptionInput!) {\n    createNewsletterSubscription(input: $newsletterInput) {\n      clientMutationId\n      userErrors\n      __typename\n    }\n  }";
var userQuery = JSON.stringify({
  operationName: 'UserQuery',
  variables: {},
  query: userGraphql
});
exports.userQuery = userQuery;

var subscribeQuery = function subscribeQuery(productCode) {
  return JSON.stringify({
    operationName: 'subToNewsletters',
    variables: {
      input: {
        newsletterCodes: [productCode]
      }
    },
    query: subscribeGraphql
  });
};

exports.subscribeQuery = subscribeQuery;

var subscribeAnonymousQuery = function subscribeAnonymousQuery(userCaptchaToken, productCode, userEmail) {
  return JSON.stringify({
    operationName: 'CreateNewsletterSubscriptionInput',
    variables: {
      newsletterInput: {
        clientMutationId: '0',
        userCaptchaToken: userCaptchaToken,
        newsletterCodes: [productCode],
        userEmail: userEmail,
        signupFormVersion: 'newsletter_updates_v1'
      }
    },
    query: subscribeAnonymousGraphql
  });
};

exports.subscribeAnonymousQuery = subscribeAnonymousQuery;
});

unwrapExports(queries);
var queries_1 = queries.subscribeAnonymousQuery;
var queries_2 = queries.subscribeQuery;
var queries_3 = queries.userQuery;

var samizdat = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = user;
exports.subscribe = subscribe;
exports.subscribeAnonymous = subscribeAnonymous;

var _defineProperty2 = interopRequireDefault(defineProperty);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getInitialState() {
  if (typeof window !== 'undefined' && window.__preloadedData) {
    var _window;

    var config = window.__preloadedData.config;

    var _window$location = (_window = window) === null || _window === void 0 ? void 0 : _window.location,
        hostname = _window$location.hostname;

    return _objectSpread(_objectSpread({}, config), {}, {
      hostname: hostname
    });
  }

  return {};
}

function client(query) {
  var _getInitialState = getInitialState(),
      gqlUrlClient = _getInitialState.gqlUrlClient,
      gqlRequestHeaders = _getInitialState.gqlRequestHeaders,
      hostname = _getInitialState.hostname;

  if (typeof fetch !== 'undefined' && gqlUrlClient && gqlRequestHeaders) {
    return fetch(gqlUrlClient, {
      method: 'POST',
      credentials: 'include',
      mode: (0, utils.isNYTDomain)(hostname) ? 'cors' : 'no-cors',
      headers: gqlRequestHeaders,
      body: query
    }).then(function (response) {
      var ok = response.ok,
          type = response.type;
      if (type === 'opaque') return response; // for testing in non nytimes domains

      if (!ok) {
        return Promise.reject(new Error(response.statusText));
      }

      return response.json();
    });
  }

  return Promise.resolve({});
}

function user() {
  return client(queries.userQuery);
}

function subscribe(productCode) {
  return client((0, queries.subscribeQuery)(productCode));
}

function subscribeAnonymous(captchaToken, productCode, email) {
  return client((0, queries.subscribeAnonymousQuery)(captchaToken, productCode, email));
}
});

unwrapExports(samizdat);
var samizdat_1 = samizdat.user;
var samizdat_2 = samizdat.subscribe;
var samizdat_3 = samizdat.subscribeAnonymous;

var tracking = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackIframeLoadFailure = exports.trackInvalidNewsletterCode = exports.trackSubscribe = exports.trackImpression = void 0;

function add(data) {
  try {
    (window.dataLayer = window.dataLayer || []).push(data);
  } catch (ex) {// do nothing
  }
}

var trackImpression = function trackImpression(_ref) {
  var clientId = _ref.clientId,
      campaignId = _ref.campaignId,
      productCode = _ref.productCode,
      placement = _ref.placement,
      algos = _ref.algos;
  add({
    event: 'impression',
    module: {
      name: 'newsletter',
      context: clientId,
      label: placement || campaignId,
      region: 'body|marginalia',
      algos: algos,
      element: {
        name: productCode
      }
    },
    newsletter: {
      product: productCode,
      productName: 'Newsletter Lire'
    }
  });
};

exports.trackImpression = trackImpression;

var trackSubscribe = function trackSubscribe(_ref2) {
  var clientId = _ref2.clientId,
      campaignId = _ref2.campaignId,
      productCode = _ref2.productCode,
      placement = _ref2.placement,
      algos = _ref2.algos;
  add({
    event: 'moduleInteraction',
    eventData: {
      pagetype: 'article',
      trigger: 'module',
      type: 'click',
      status: 'success'
    },
    module: {
      name: 'newsletters',
      context: clientId,
      label: placement || campaignId,
      region: 'body|marginalia',
      algos: algos,
      element: {
        name: 'subscribe',
        label: ''
      }
    },
    newsletter: {
      product: productCode,
      productName: 'Newsletter Lire'
    }
  });
};

exports.trackSubscribe = trackSubscribe;

var trackInvalidNewsletterCode = function trackInvalidNewsletterCode(_ref3) {
  var clientId = _ref3.clientId,
      campaignId = _ref3.campaignId,
      productCode = _ref3.productCode;
  add({
    event: 'moduleInteraction',
    eventData: {
      type: 'response',
      trigger: 'module'
    },
    module: {
      name: 'newsletter-shared-ui',
      label: clientId,
      context: campaignId,
      region: 'embed',
      element: {
        name: 'newsletter code invalid',
        label: productCode,
        url: ''
      }
    }
  });
};

exports.trackInvalidNewsletterCode = trackInvalidNewsletterCode;

var trackIframeLoadFailure = function trackIframeLoadFailure(_ref4) {
  var clientId = _ref4.clientId,
      campaignId = _ref4.campaignId;
  add({
    event: 'moduleInteraction',
    eventData: {
      type: 'response',
      trigger: 'module'
    },
    module: {
      name: 'newsletter-shared-ui',
      label: clientId,
      context: campaignId,
      region: 'embed',
      element: {
        name: 'newsletter iframe load failure',
        label: '15 second timeout exceeded',
        url: ''
      }
    }
  });
};

exports.trackIframeLoadFailure = trackIframeLoadFailure;
});

unwrapExports(tracking);
var tracking_1 = tracking.trackIframeLoadFailure;
var tracking_2 = tracking.trackInvalidNewsletterCode;
var tracking_3 = tracking.trackSubscribe;
var tracking_4 = tracking.trackImpression;

var a11y = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



/* eslint-disable pretty-lights/move-rules-to-file */
var _default = {
  visuallyHidden: /*#__PURE__*/(0, prettyLights_modern.css)("border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;"),
  focusable: /*#__PURE__*/(0, prettyLights_modern.css)("&:active,&:focus{clip:auto;overflow:visible;width:auto;height:auto;}"),
  imageReplacement: /*#__PURE__*/(0, prettyLights_modern.css)("font-size:0;line-height:0;overflow:hidden;text-indent:100%;white-space:nowrap;")
};
exports["default"] = _default;
});

unwrapExports(a11y);

var breakpoints = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.textMaxWidthsClass = exports.mobileFullWidth = exports.breakpointMap = exports.widths = void 0;

var _defineProperty2 = interopRequireDefault(defineProperty);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var widths = {
  small: 600,
  medium: 740,
  mediumLarge: 1024,
  large: 1150,
  extraLarge: 1440
};
exports.widths = widths;
var breakpointMap = {
  small: "@media (min-width: ".concat(widths.small, "px)"),
  medium: "@media (min-width: ".concat(widths.medium, "px)"),
  mediumLarge: "@media (min-width: ".concat(widths.mediumLarge, "px)"),
  large: "@media (min-width: ".concat(widths.large, "px)"),
  extraLarge: "@media (min-width: ".concat(widths.extraLarge, "px)")
};
exports.breakpointMap = breakpointMap;
var mobileFullWidth = 'calc(100% - 40px)'; // for inline components that need to respect max paragraph width.

exports.mobileFullWidth = mobileFullWidth;
var textMaxWidthsClass = /*#__PURE__*/(0, prettyLights_modern.css)("max-width:", mobileFullWidth, ";margin:auto;", breakpointMap.small, "{max-width:100%;}");
exports.textMaxWidthsClass = textMaxWidthsClass;

var _default = _objectSpread(_objectSpread({}, breakpointMap), {}, {
  width: widths,
  maxMobileContentWidth: 600,
  maxDesktopContentWidth: 1200,
  mediaMaxWidth: 1200,
  textBodyWidth: 600,
  textBodyWidthExtralarge: 600,
  mediumMediaExtralarge: 720,
  mastheadMaxWidth: 1605,
  mobileFullWidth: mobileFullWidth,
  textMaxWidthsClass: textMaxWidthsClass
});

exports["default"] = _default;
});

unwrapExports(breakpoints);
var breakpoints_1 = breakpoints.textMaxWidthsClass;
var breakpoints_2 = breakpoints.mobileFullWidth;
var breakpoints_3 = breakpoints.breakpointMap;
var breakpoints_4 = breakpoints.widths;

var colors = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var blue20 = '#326891';
var gray20 = '#333';
var gray25 = '#444';
var gray35 = '#888';
/**
 * Color Palette
 *
 * This is in its own folder for Styleguide purposes.
 *
 * @visibleName Color Palette
 */

var _default = {
  black: '#000',
  blue10: '#004276',
  blue15: '#0f73be',
  blue17: '#1564a0',
  blue20: blue20,
  blue30: '#567b95',
  blue40: '#879cb4',
  blue45: '#b3c4ca',
  blue50: '#f0f8fc',
  blue55: '#f1f9ff',
  gray10: '#121212',
  gray20: gray20,
  gray25: gray25,
  gray27: '#555',
  gray30: '#666',
  gray33: '#787878',
  gray35: gray35,
  gray40: '#999',
  gray45: '#b3b3b3',
  gray50: '#ccc',
  gray54: '#d3d3d3',
  gray55: '#dcdcdc',
  gray60: '#e2e2e2',
  gray70: '#ebebeb',
  gray75: '#eee',
  gray80: '#f3f3f3',
  gray90: '#f7f7f7',
  gray100: '#f8f8f8',
  red10: '#a81817',
  red15: '#c52b03',
  red20: '#d31e25',
  red50: '#fcf6f6',
  red15Dark: '#fb3504',
  // for use on dark mode
  yellow10: '#fcb036',
  yellow15: '#ffb932',
  yellow20: '#f8f8d4',
  yellow30: '#fbfbea',
  white: '#fff',
  green50: '#33c065',
  newsprint10: '#bab8b3',
  newsprint20: '#e9ebe4',
  newsprint25: '#f4f5f2',
  newsprint30: '#f7f7f5',
  textColor: gray20,
  sponsoredTextColor: gray25,
  sponsoredTextColorLight: gray35,
  linkColor: blue20,
  linkVisitedColor: blue20,
  requiredYellow: '#9a8958',
  insiderYellow: '#fed464',
  opinionGray: '#a19d9d',
  opinionBlue: '#0bb4f7',
  reviewCritPickGold: '#c5a257',
  liveColor: '#d0021b',
  developingColor: '#f48751',
  developingOrange: '#eb6e00',
  breakingColor: '#d0021b',
  stocksRedColor: '#a61b1e',
  stocksGreenColor: '#3f893b',
  stocksIconColor: '#231f20',
  atHomeGray: '#6c6c6c',
  atHomeLightGray: '#bbb',
  cookingPrimaryColor: '#e33d26',
  cookingHoverColor: '#be1e08',
  bundleBasic: '#2e84ed',
  bundleAllAccess: '#0f4a92',
  bundleHD: gray20
};
exports["default"] = _default;
});

unwrapExports(colors);

var fonts = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var cheltenham = 'nyt-cheltenham';
var cheltenhamCond = 'nyt-cheltenham-cond';
var cheltenhamSmall = 'nyt-cheltenham-small';
var franklin = 'nyt-franklin';
var graphik = 'nyt-graphik';
var imperial = 'nyt-imperial';
var karnak = 'nyt-karnak';
var magsans = 'nyt-magsans';
var magslab = 'nyt-magslab';
var montserrat = 'montserrat';
var schnyderScond = 'nyt-schnyder-scond';
var factDeck = 'nyt-fact-deck';
var factDisplay = 'nyt-fact-display';
var kippenberger = 'nyt-kippenberger';
var sourceSansPro = 'Source Sans Pro'; // following constatns are Chinese web safe fonts.

var songTiSC = 'Songti SC';
var songTiTC = 'Songti TC';
var simSun = 'simsun';
var baseEn = "georgia, 'times new roman'";
var timesBaseEn = "".concat(baseEn, ", times");
var serifSmall = "".concat(cheltenhamSmall, ", ").concat(baseEn);
var serifBase = "".concat(imperial, ", ").concat(timesBaseEn, ", serif");
var sansBase = "helvetica, arial, sans-serif";
var serifMedium = "".concat(cheltenham, ", ").concat(timesBaseEn, ", serif");
var magazineSansBase = "".concat(magsans, ", ").concat(sansBase);
var franklinBase = "".concat(franklin, ", ").concat(sansBase);
var tmagSansBase = "".concat(kippenberger, ", ").concat(sansBase);
var tmagSerifDisplayBase = "".concat(factDisplay, ", ").concat(timesBaseEn, ", serif");
var tmagSerifDeckBase = "".concat(factDeck, ", ").concat(timesBaseEn, ", serif");
var opinionBase = "".concat(cheltenhamCond, ", ").concat(serifMedium);
var karnakBase = "".concat(karnak, ", ").concat(timesBaseEn, ", serif");
var sponsoredBase = "".concat(sourceSansPro, ", ").concat(sansBase);
var sponsoredSensitive = "".concat(montserrat, ", ").concat(sansBase);
var imperialSCSerifBase = "".concat(imperial, ", ").concat(timesBaseEn, ", ").concat(songTiSC, ", ").concat(simSun, ", serif");
var imperialTCSerifBase = "".concat(imperial, ", ").concat(timesBaseEn, ", ").concat(songTiTC, ", ").concat(simSun, ", serif");
var cheltenhamSCSerifBase = "".concat(cheltenham, ", ").concat(timesBaseEn, ", ").concat(songTiSC, ", ").concat(simSun, ", serif");
var cheltenhamTCSerifBase = "".concat(cheltenham, ", ").concat(timesBaseEn, ", ").concat(songTiTC, ", ").concat(simSun, ", serif");
var baseFontSize = 16;
var _default = {
  cheltenham: cheltenham,
  cheltenhamCond: cheltenhamCond,
  cheltenhamSmall: cheltenhamSmall,
  franklin: franklin,
  graphik: graphik,
  imperial: imperial,
  karnak: karnak,
  magsans: magsans,
  magslab: magslab,
  schnyderScond: schnyderScond,
  factDeck: factDeck,
  factDisplay: factDisplay,
  kippenberger: kippenberger,
  serif: cheltenham,
  sans: franklin,
  serifSmall: serifSmall,
  serifBase: serifBase,
  sansBase: sansBase,
  serifMedium: serifMedium,
  magazineSansBase: magazineSansBase,
  franklinBase: franklinBase,
  tmagSansBase: tmagSansBase,
  tmagSerifDisplayBase: tmagSerifDisplayBase,
  tmagSerifDeckBase: tmagSerifDeckBase,
  opinionBase: opinionBase,
  karnakBase: karnakBase,
  sponsoredBase: sponsoredBase,
  sponsoredSensitive: sponsoredSensitive,
  baseFontSize: baseFontSize,
  songTiSC: songTiSC,
  songTiTC: songTiTC,
  simSun: simSun,
  timesBaseEn: timesBaseEn,
  imperialSCSerifBase: imperialSCSerifBase,
  imperialTCSerifBase: imperialTCSerifBase,
  cheltenhamSCSerifBase: cheltenhamSCSerifBase,
  cheltenhamTCSerifBase: cheltenhamTCSerifBase,
  size: function size(px) {
    return "".concat(px / baseFontSize, "rem");
  },
  sponsoredBaseImportUrl: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i',
  sponsoredSensitiveImportUrl: 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i,700,700i|Source+Sans+Pro:400,600,700',
  weight: {
    extraLight: 200,
    light: 300,
    book: 400,
    medium: 500,
    mediumBold: 600,
    bold: 700,
    extraBold: 800,
    headline: 900
  }
};
exports["default"] = _default;
});

unwrapExports(fonts);

var buttons = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _colors = interopRequireDefault(colors);

var _fonts = interopRequireDefault(fonts);

var _breakpoints = interopRequireDefault(breakpoints);

/* eslint-disable pretty-lights/move-rules-to-file */

/* eslint-disable pretty-lights/disambiguate-vars */
var base = /*#__PURE__*/(0, prettyLights_modern.css)("border-radius:3px;cursor:pointer;font-family:", _fonts["default"].franklinBase, ";transition:ease 0.6s;white-space:nowrap;vertical-align:middle;&::-moz-focus-inner{padding:0;border:0;}&:-moz-focusring{outline:1px dotted;}&:disabled,&.disabled{opacity:0.5;cursor:default;}");
var action = /*#__PURE__*/(0, prettyLights_modern.css)(base, ";background-color:", _colors["default"].blue30, ";border:1px solid ", _colors["default"].blue20, ";color:", _colors["default"].white, ";font-size:11px;line-height:11px;font-weight:", _fonts["default"].weight.bold, ";letter-spacing:0.05em;padding:11px 12px 8px;text-transform:uppercase;", _breakpoints["default"].medium, "{&:hover{background-color:", _colors["default"].blue20, ";}}");
var transparent = /*#__PURE__*/(0, prettyLights_modern.css)(base, ";background-color:transparent;color:", _colors["default"].black, ";font-size:11px;line-height:11px;font-weight:", _fonts["default"].weight.bold, ";letter-spacing:0.02em;padding:11px 12px 8px;&:active,&.active{background-color:", _colors["default"].gray90, ";}", _breakpoints["default"].medium, "{&:hover{background-color:", _colors["default"].gray90, ";}}");
var defaultButton = /*#__PURE__*/(0, prettyLights_modern.css)(base, ";background-color:", _colors["default"].white, ";border:1px solid ", _colors["default"].gray70, ";color:", _colors["default"].gray20, ";font-size:11px;line-height:11px;font-weight:", _fonts["default"].weight.medium, ";letter-spacing:0.02em;padding:11px 12px 8px;text-transform:uppercase;&:active,&.active{background-color:", _colors["default"].gray90, ";}", _breakpoints["default"].medium, "{&:hover{background-color:", _colors["default"].gray90, ";}}");
var primary = /*#__PURE__*/(0, prettyLights_modern.css)(base, ";appearance:button;background:", _colors["default"].blue30, ";border:1px solid ", _colors["default"].blue20, ";color:", _colors["default"].white, ";font-size:15px;line-height:15px;font-weight:", _fonts["default"].weight.book, ";letter-spacing:0.02em;padding:10px 20px;", _breakpoints["default"].medium, "{&:active,&:hover{background:", _colors["default"].blue20, ";}}");
var secondary = /*#__PURE__*/(0, prettyLights_modern.css)(base, ";background:", _colors["default"].gray80, ";border:1px solid ", _colors["default"].gray70, ";color:", _colors["default"].gray20, ";font-size:15px;line-height:15px;font-weight:", _fonts["default"].weight.medium, ";letter-spacing:0.02em;padding:10px 20px;&:active,&.active{background:", _colors["default"].gray70, ";border:1px solid ", _colors["default"].gray50, ";}", _breakpoints["default"].medium, "{&:hover{background:", _colors["default"].gray70, ";border:1px solid ", _colors["default"].gray50, ";}}");
var _default = {
  base: base,
  action: action,
  transparent: transparent,
  primary: primary,
  secondary: secondary,
  "default": defaultButton
};
exports["default"] = _default;
});

unwrapExports(buttons);

var grid = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var pageMargin = 20;

var widthHelper = function widthHelper(columns) {
  var gutterWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '15px';
  var numColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  var scrollBarWidth = '15px';
  var numOfGutters = numColumns - 1;
  var widthOfGutters = numOfGutters * gutterWidth + pageMargin * 2;
  return "calc(".concat(columns, " * (((100vw - ").concat(widthOfGutters, ") - ").concat(scrollBarWidth, ") / ").concat(numColumns, ") + (").concat(columns, " - 1) * ").concat(gutterWidth, ")");
};

var _default = {
  widthHelper: widthHelper,
  pageMargin: pageMargin
};
exports["default"] = _default;
});

unwrapExports(grid);

var print_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.printHide = void 0;



/* eslint-disable pretty-lights/disambiguate-vars */
var print = /*#__PURE__*/(0, prettyLights_modern.css)("@media print{margin-left:0;margin-right:0;width:100%;max-width:100%;}");
var printHide = /*#__PURE__*/(0, prettyLights_modern.css)("@media print{display:none;}");
exports.printHide = printHide;
var _default = print;
exports["default"] = _default;
});

unwrapExports(print_1);
var print_2 = print_1.printHide;

var textAlign_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



/* eslint-disable pretty-lights/move-rules-to-file */
var textAlign = {
  left: /*#__PURE__*/(0, prettyLights_modern.css)("text-align:left;"),
  center: /*#__PURE__*/(0, prettyLights_modern.css)("text-align:center;"),
  right: /*#__PURE__*/(0, prettyLights_modern.css)("text-align:right;")
};
var _default = textAlign;
exports["default"] = _default;
});

unwrapExports(textAlign_1);

var headerSpacing = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _fonts = interopRequireDefault(fonts);

var _breakpoints = interopRequireDefault(breakpoints);

/* eslint-disable pretty-lights/disambiguate-vars */
var bottom = _fonts["default"].size(20);

var top = _fonts["default"].size(25);

var topMedium = _fonts["default"].size(60);

var marginTop = /*#__PURE__*/(0, prettyLights_modern.css)("margin-top:", top, ";", _breakpoints["default"].medium, "{margin-top:", topMedium, ";}");
var _default = {
  marginTop: marginTop,
  bottom: bottom,
  top: top,
  topMedium: topMedium
};
exports["default"] = _default;
});

unwrapExports(headerSpacing);

var sts = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var STS = function STS(sectionedStyles, tonedStyles, section, tone) {
  var styles = null;

  if (section !== 'magazine' && section !== 't-magazine' && tonedStyles && tonedStyles[tone]) {
    styles = tonedStyles[tone];
  }

  if (sectionedStyles && sectionedStyles[section]) {
    styles = sectionedStyles[section];
  }

  return styles;
};

var _default = STS;
exports["default"] = _default;
});

unwrapExports(sts);

var utils$1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "STS", {
  enumerable: true,
  get: function get() {
    return _sts["default"];
  }
});
exports["default"] = void 0;

var _a11y = interopRequireDefault(a11y);

var _breakpoints = interopRequireDefault(breakpoints);

var _buttons = interopRequireDefault(buttons);

var _colors = interopRequireDefault(colors);

var _fonts = interopRequireDefault(fonts);

var _grid = interopRequireDefault(grid);

var _print = interopRequireWildcard(print_1);

var _textAlign = interopRequireDefault(textAlign_1);

var _headerSpacing = interopRequireDefault(headerSpacing);

var _sts = interopRequireDefault(sts);

var _default = {
  a11y: _a11y["default"],
  breakpoint: _breakpoints["default"],
  button: _buttons["default"],
  color: _colors["default"],
  font: _fonts["default"],
  grid: _grid["default"],
  print: _print["default"],
  printHide: _print.printHide,
  textAlign: _textAlign["default"],
  headerSpacing: _headerSpacing["default"],
  zIndex: {
    sectionOverlay: 100000000,
    menuOverlay: 1000000000,
    mastheadLogo: 1000000001,
    mastheadButtongroup: 1000000002,
    ribbon: 1000000100,
    dock: 1000000101,
    commentsPanel: 1000000109,
    overlay: 1000000110,
    modal: 1000000120,
    searchModalResults: 1000000130,
    navigation: 1000000140,
    navigationModal: 1000000150,
    interstitialModal: 1000000160
  }
};
exports["default"] = _default;
});

unwrapExports(utils$1);

var styled = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.summaryClass = exports.headingClass = exports.confirmationClass = exports.buttonClass = exports.containerClass = void 0;



var _utils = interopRequireDefault(utils$1);

var _fonts = interopRequireDefault(fonts);

var _colors = interopRequireDefault(colors);

var containerClass = /*#__PURE__*/(0, prettyLights_modern.css)("text-align:center;font-family:", _fonts["default"].serifBase, ";font-size:", _fonts["default"].size(17), ";line-height:24px;", _utils["default"].breakpoint.small, "{font-size:", _fonts["default"].size(18), ";line-height:29px;}");
exports.containerClass = containerClass;
var buttonClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:block;margin:20px auto 0 auto;");
exports.buttonClass = buttonClass;
var confirmationClass = /*#__PURE__*/(0, prettyLights_modern.css)("font-style:italic;a{color:", _colors["default"].linkColor, ";text-decoration:underline;}");
exports.confirmationClass = confirmationClass;
var headingClass = /*#__PURE__*/(0, prettyLights_modern.css)("font-weight:bold;");
exports.headingClass = headingClass;
var summaryClass = /*#__PURE__*/(0, prettyLights_modern.css)("font-style:italic;");
exports.summaryClass = summaryClass;
});

unwrapExports(styled);
var styled_1 = styled.summaryClass;
var styled_2 = styled.headingClass;
var styled_3 = styled.confirmationClass;
var styled_4 = styled.buttonClass;
var styled_5 = styled.containerClass;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var Button_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = interopRequireDefault(defineProperty);

var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);



var _utils = interopRequireDefault(utils$1);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Button = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var theme = props.theme,
      className = props.className,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["theme", "className"]);

  var passedProps = _objectSpread({
    className: (0, prettyLights_modern.cx)(className, _utils["default"].button[theme] || _utils["default"].button["default"]),
    ref: ref
  }, otherProps);

  var isAnchor = Object.keys(otherProps).includes('href');
  return /*#__PURE__*/_react["default"].createElement(isAnchor ? 'a' : 'button', passedProps);
});

Button.defaultProps = {
  className: undefined,
  theme: 'default',
  children: null
};
var _default = Button;
exports["default"] = _default;
});

unwrapExports(Button_1);

var Heading_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);



var styles = interopRequireWildcard(styled);



var Heading = function Heading() {
  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      heading = _useEmailSignupContex.heading,
      summary = _useEmailSignupContex.summary,
      headingClassName = _useEmailSignupContex.headingClassName,
      summaryClassName = _useEmailSignupContex.summaryClassName;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, heading && /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styles.headingClass, headingClassName)
  }, void 0, heading, ": "), summary && /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styles.summaryClass, summaryClassName)
  }, void 0, summary));
};

var _default = Heading;
exports["default"] = _default;
});

unwrapExports(Heading_1);

var styled$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingSpinnerClass = exports.spinner = void 0;



var spinner = /*#__PURE__*/(0, prettyLights_modern.keyframes)("100%{transform:rotate(360deg);transform-origin:center;}");
exports.spinner = spinner;
var loadingSpinnerClass = /*#__PURE__*/(0, prettyLights_modern.css)("margin:0 auto;display:inherit;opacity:1;width:30px;animation:", spinner, " 0.8s steps(10,end) infinite;");
exports.loadingSpinnerClass = loadingSpinnerClass;
});

unwrapExports(styled$1);
var styled_1$1 = styled$1.loadingSpinnerClass;
var styled_2$1 = styled$1.spinner;

var Spinner_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);



var styles = interopRequireWildcard(styled$1);

var _ref2 = /*#__PURE__*/(0, _jsx2["default"])("g", {
  stroke: "black",
  strokeWidth: "3.75",
  strokeLinecap: "round"
}, void 0, /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: 0,
  y1: -14,
  x2: 0,
  y2: -30,
  opacity: "1"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: -8.229,
  y1: -11.33,
  x2: -17.63,
  y2: -24.27,
  opacity: "0.87"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: -13.31,
  y1: -4.326,
  x2: -28.53,
  y2: -9.271,
  opacity: "0.74"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: -13.31,
  y1: 4.326,
  x2: -28.53,
  y2: 9.271,
  opacity: "0.61"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: -8.23,
  y1: 11.33,
  x2: -17.63,
  y2: 24.27,
  opacity: "0.48"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: 0,
  y1: 14,
  x2: 0,
  y2: 30,
  opacity: "0.37"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: 8.23,
  y1: 11.33,
  x2: 17.63,
  y2: 24.27,
  opacity: "0.26"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: 13.31,
  y1: 4.33,
  x2: 28.53,
  y2: 9.27,
  opacity: "0.17"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: 13.31,
  y1: -4.33,
  x2: 28.53,
  y2: -9.27,
  opacity: "0.09"
}), /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: 8.23,
  y1: -11.33,
  x2: 17.63,
  y2: -24.27,
  opacity: "0.02"
}));

var Spinner = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var loadingSpinnerClassName = _ref.loadingSpinnerClassName;
  return /*#__PURE__*/(0, _jsx2["default"])("svg", {
    className: (0, prettyLights_modern.cx)(styles.loadingSpinnerClass, loadingSpinnerClassName),
    xmlns: "http://www.w3.org/2000/svg",
    alt: "Loading spinner icon",
    version: "1.1",
    width: "30px",
    height: "30px",
    viewBox: "-50 -50 100 100"
  }, void 0, _ref2);
});

Spinner.propTypes = {
  loadingSpinnerClassName: _propTypes["default"].string
};
Spinner.defaultProps = {
  loadingSpinnerClassName: undefined
};
var _default = Spinner;
exports["default"] = _default;
});

unwrapExports(Spinner_1);

var LoggedIn_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);

var _Button = interopRequireDefault(Button_1);

var _Heading = interopRequireDefault(Heading_1);

var _Spinner = interopRequireDefault(Spinner_1);



var func = _propTypes["default"].func,
    bool = _propTypes["default"].bool;

var _ref2 = /*#__PURE__*/(0, _jsx2["default"])(_Heading["default"], {});

var LoggedIn = function LoggedIn(_ref) {
  var isLoading = _ref.isLoading,
      buttonClick = _ref.buttonClick;

  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      buttonText = _useEmailSignupContex.buttonText,
      buttonClassName = _useEmailSignupContex.buttonClassName,
      loadingSpinnerClassName = _useEmailSignupContex.loadingSpinnerClassName;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _ref2, isLoading ? /*#__PURE__*/(0, _jsx2["default"])(_Spinner["default"], {
    loadingSpinnerClassName: loadingSpinnerClassName
  }) : /*#__PURE__*/(0, _jsx2["default"])(_Button["default"], {
    type: "button",
    theme: "primary",
    className: buttonClassName,
    onClick: buttonClick
  }, void 0, buttonText));
};

var _default = LoggedIn;
exports["default"] = _default;
});

unwrapExports(LoggedIn_1);

var Confirmation_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _typeof2 = interopRequireDefault(_typeof_1);

var _react = interopRequireDefault(react);



var styles = interopRequireWildcard(styled);



var _window$vi, _window$vi$env;

var authHost = (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === 'object' && (_window$vi = window.vi) !== null && _window$vi !== void 0 && (_window$vi$env = _window$vi.env) !== null && _window$vi$env !== void 0 && _window$vi$env.AUTH_HOST ? window.vi.env.AUTH_HOST : 'https://myaccount.nytimes.com';

var _ref = /*#__PURE__*/(0, _jsx2["default"])("a", {
  href: "/newsletters"
}, void 0, "See our other newsletters");

var Confirmation = function Confirmation() {
  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      confirmationMessage = _useEmailSignupContex.confirmationMessage,
      confirmationClassName = _useEmailSignupContex.confirmationClassName;

  return /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styles.confirmationClass, confirmationClassName)
  }, void 0, confirmationMessage, " ", _ref, " or", ' ', /*#__PURE__*/(0, _jsx2["default"])("a", {
    href: "".concat(authHost, "/seg/settings")
  }, void 0, "manage your email preferences."));
};

Confirmation.displayName = "Confirmation";
var _default = Confirmation;
exports["default"] = _default;
});

unwrapExports(Confirmation_1);

var AlreadySubscribed_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);



var styles = interopRequireWildcard(styled);



var _ref = /*#__PURE__*/(0, _jsx2["default"])("a", {
  href: "/newsletters"
}, void 0, "See our other newsletters.");

var AlreadySubscribed = function AlreadySubscribed() {
  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      alreadySubscribedMessage = _useEmailSignupContex.alreadySubscribedMessage,
      confirmationClassName = _useEmailSignupContex.confirmationClassName;

  return /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styles.confirmationClass, confirmationClassName)
  }, void 0, alreadySubscribedMessage, " ", _ref);
};

AlreadySubscribed.displayName = "AlreadySubscribed";
var _default = AlreadySubscribed;
exports["default"] = _default;
});

unwrapExports(AlreadySubscribed_1);

var utils$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScript = exports.add = exports.getOrigin = void 0;

/**
 * get the host based on the environment or host passed
 * this needs to be backwards compatible
 *
 * @param  string host
 * @param  string env
 * @return string
 */
var getOrigin = function getOrigin(host, env) {
  if (host) {
    return host;
  }

  switch (env) {
    case 'production':
      return 'https://myaccount.nytimes.com';

    case 'staging':
      return 'https://myaccount.stg.nytimes.com';

    case 'local':
      return 'https://myaccount-sbx.dev.nytimes.com';

    default:
      return 'https://myaccount.nytimes.com';
  }
};
/**
 * We need to pass events to the data layer for tracking
 *
 * @param {object} data  adding to the datalayer
 * @return undefined
 */


exports.getOrigin = getOrigin;

var add = function add(data) {
  try {
    (window.dataLayer = window.dataLayer || []).push(data);
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.log('datalayer push error');
  }
};
/**
 * Helper func for JS script loader
 * @param  object options       contains source, sciprtloaded, client id, campaign id
 * @return undefined
 */


exports.add = add;

var loadScript = function loadScript(options) {
  var src = options.src,
      scriptLoaded = options.scriptLoaded,
      clientId = options.clientId,
      campaignId = options.campaignId,
      handleIframeLoadFailure = options.handleIframeLoadFailure;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = true;

  script.onload = function () {
    if (scriptLoaded) {
      window[scriptLoaded] = true;
    }
  };

  script.onerror = function () {
    handleIframeLoadFailure({
      clientId: clientId,
      campaignId: campaignId
    });
  };

  document.head.appendChild(script);
};

exports.loadScript = loadScript;
});

unwrapExports(utils$2);
var utils_1$1 = utils$2.loadScript;
var utils_2$1 = utils$2.add;
var utils_3$1 = utils$2.getOrigin;

var Button = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _utils = interopRequireDefault(utils$1);

var _default = /*#__PURE__*/(0, prettyLights_modern.styled)("a", {
  target: "e1ydmf1w0"
})("display:block;background-color:", function (props) {
  return props.color || '#333';
}, ";border-radius:3px;text-align:center;font-family:", _utils["default"].font.franklinBase, ";font-weight:", _utils["default"].font.weight.bold, ";font-size:1em;line-height:2.5em;height:2.5em;color:white;width:8em;margin:0 auto;");

exports["default"] = _default;
});

unwrapExports(Button);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

var utils$3 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSrc = void 0;

var _slicedToArray2 = interopRequireDefault(slicedToArray);

/* eslint-disable camelcase */

/* eslint-disable import/prefer-default-export */

/**
 * Creates URL for full page redirect
 * @param {Object} args.params - asset, client_id, application, campaign_id, display
 * @param {String} host
 */
var formatSrc = function formatSrc(_ref) {
  var params = _ref.params,
      host = _ref.host,
      productCode = _ref.productCode;
  var redirectURI = new URL(params.redirect_uri);
  var product_code = productCode;
  redirectURI.searchParams.append('product_code', product_code);
  var client_id = params.client_id || 'unknown-client';
  var asset = params.asset,
      _params$display = params.display,
      display = _params$display === void 0 ? 'default' : _params$display,
      campaign_id = params.campaign_id,
      application = params.application;
  var queryParams = {
    response_type: 'cookie',
    redirect_uri: redirectURI.toString(),
    client_id: client_id,
    display: display,
    asset: asset,
    campaign_id: campaign_id,
    application: application
  };
  var url = new URL("".concat(host, "/auth/validate-regi"));
  Object.entries(queryParams).filter(function (_ref2) {
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        v = _ref3[1];

    return v;
  }).forEach(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
        k = _ref5[0],
        v = _ref5[1];

    return url.searchParams.append(k, v);
  });
  return url.toString();
};

exports.formatSrc = formatSrc;
});

unwrapExports(utils$3);
var utils_1$2 = utils$3.formatSrc;

var ValidateRegistration_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _defineProperty2 = interopRequireDefault(defineProperty);

var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

var _classCallCheck2 = interopRequireDefault(classCallCheck);

var _createClass2 = interopRequireDefault(createClass);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

var _inherits2 = interopRequireDefault(inherits);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);



var _Button = interopRequireDefault(Button);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Newsletter / Registration component adds the the following script on the page

 * and this code places an iframe on the page
 * The Iframe provides functionality to subscribe a user to a newsletter (if regi) or create an account and then subscribe them (if anon)
 *
 * @return React component
 */
var ValidateRegistration = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ValidateRegistration, _Component);

  var _super = _createSuper(ValidateRegistration);

  /**
   * Create the unique container id for the iframe
   */
  function ValidateRegistration(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ValidateRegistration);
    _this = _super.call(this, props);
    _this.state = {
      iframeLoadFailed: false
    };
    var rand = Math.ceil(Math.random() * 1000000);
    _this.containerId = "newsletter-iframe-container-".concat(rand);
    _this.formId = "newsletter-form-".concat(rand);
    _this.host = (0, utils$2.getOrigin)(props.host, props.env);
    _this.handleIframeLoadFailure = _this.handleIframeLoadFailure.bind((0, _assertThisInitialized2["default"])(_this)); // this method will be invoked outside of the component, so we need to bind scope

    window.LireUI = window.LireUI || [];
    return _this;
  }
  /**
   * On mount
   * - Add the client configuration in the newsletter subscribe window object
   * - load the standalone newsletter client bundle
   *
   * @return undefined
   */


  (0, _createClass2["default"])(ValidateRegistration, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var windowLocation = window.location.href;
      var script = 'LireUILoaded';
      var _this$props = this.props,
          originalParams = _this$props.params,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["params"]);
      var additionalParams = {
        redirect_uri: windowLocation
      };

      var params = _objectSpread(_objectSpread({}, originalParams), additionalParams);

      this.setState({
        params: params
      }); // download the standalone script

      if (!window[script]) {
        var _this$props$params, _this$props$params2;

        var options = {
          src: "".concat(this.host, "/unified_lire/js/standalone-client.bundle.js"),
          scriptLoaded: script,
          form_id: this.formId,
          handleIframeLoadFailure: this.handleIframeLoadFailure,
          clientId: ((_this$props$params = this.props.params) === null || _this$props$params === void 0 ? void 0 : _this$props$params.client_id) || null,
          campaignId: ((_this$props$params2 = this.props.params) === null || _this$props$params2 === void 0 ? void 0 : _this$props$params2.campaign_id) || null
        };
        (0, utils$2.loadScript)(options);
      }

      window.LireUI.push(_objectSpread(_objectSpread({
        hostName: this.host,
        form_id: this.formId,
        container: "#".concat(this.containerId),
        params: params
      }, otherProps), {}, {
        type: 'validate-regi'
      }));
    }
    /**
     * Will be invoked by the client newsletter bundle if the iframe
     * fails to send a load success post message after 15 seconds
     */

  }, {
    key: "handleIframeLoadFailure",
    value: function handleIframeLoadFailure(_ref) {
      var clientId = _ref.clientId,
          campaignId = _ref.campaignId;
      this.setState({
        iframeLoadFailed: true
      });
      (0, tracking.trackIframeLoadFailure)({
        clientId: clientId,
        campaignId: campaignId
      });
    }
    /**
     * render the unique iframe container
     *
     * @return React component
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          iframeLoadFailed = _this$state.iframeLoadFailed,
          params = _this$state.params;
      var fallbackButtonText = this.props.fallbackButtonText;
      var productCode = this.context.productCode;
      return /*#__PURE__*/(0, _jsx2["default"])("div", {
        id: this.containerId,
        name: "newsletter-iframe",
        style: {
          minHeight: this.props.initialHeight
        }
      }, void 0, iframeLoadFailed && /*#__PURE__*/(0, _jsx2["default"])(_Button["default"], {
        href: (0, utils$3.formatSrc)({
          host: this.host,
          params: params,
          productCode: productCode
        })
      }, void 0, fallbackButtonText));
    }
  }]);
  return ValidateRegistration;
}(_react.Component);

ValidateRegistration.contextType = context.EmailSignupContext;
ValidateRegistration.displayName = "ValidateRegistration";

/**
 * Define default props
 * @type {Object}
 */
ValidateRegistration.defaultProps = {
  fallbackButtonText: 'Sign up',
  id: null,
  className: undefined,
  params: {
    client_id: 'shared-ui'
  },
  env: 'production',
  host: '',
  initialHeight: 420
};
var _default = ValidateRegistration;
exports["default"] = _default;
});

unwrapExports(ValidateRegistration_1);

var LoggedOut_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _classCallCheck2 = interopRequireDefault(classCallCheck);

var _createClass2 = interopRequireDefault(createClass);

var _inherits2 = interopRequireDefault(inherits);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _Button = interopRequireDefault(Button_1);

var _ValidateRegistration = interopRequireDefault(ValidateRegistration_1);

var _Heading = interopRequireDefault(Heading_1);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var func = _propTypes["default"].func,
    bool = _propTypes["default"].bool;
var defaultHost = {
  production: 'https://myaccount.nytimes.com',
  staging: 'https://myaccount.stg.nytimes.com'
};

var _ref = /*#__PURE__*/(0, _jsx2["default"])(_Heading["default"], {});

var LoggedOut = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(LoggedOut, _Component);

  var _super = _createSuper(LoggedOut);

  function LoggedOut() {
    var _this;

    (0, _classCallCheck2["default"])(this, LoggedOut);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      email: null
    };
    _this.wrapperRef = _react["default"].createRef ? /*#__PURE__*/_react["default"].createRef() : null;

    _this.setCaptchaRef = function (el) {
      _this.captcha = el;
    };

    _this.captchaCallback = function (captchaToken) {
      var handleAnonymousNewsletterSignup = _this.props.handleAnonymousNewsletterSignup;
      var _this$state = _this.state,
          email = _this$state.email,
          grecaptchaId = _this$state.grecaptchaId;
      handleAnonymousNewsletterSignup(captchaToken, email);
      (0, captcha.resetReCaptcha)(grecaptchaId);
    };

    _this.captchaErrorCallback = function () {
      // eslint-disable-next-line no-console
      console.error('captcha error');
    };

    return _this;
  }

  (0, _createClass2["default"])(LoggedOut, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.wrapperRef) this.wrapper = this.wrapperRef.current;
      (0, captcha.loadReCaptchaScript)();
    }
  }, {
    key: "renderReCaptcha",
    value: function renderReCaptcha(env) {
      try {
        var grecaptchaId = (0, captcha.renderReCaptcha)(env, this.wrapper, this.captchaCallback, this.captchaErrorCallback);
        (0, captcha.executeReCaptcha)(grecaptchaId);
        this.setState({
          grecaptchaId: grecaptchaId
        });
      } catch (e) {
        // some kind of error state
        this.captchaErrorCallback();
      }
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(env, message) {
      var email = message.props.email;
      var handleNewsletterSignup = this.props.handleNewsletterSignup; // The NewsletterSubscribe iframe drops an NYTS cookie for users who
      // create a new account

      if (!(0, utils.hasNYTSCookie)()) {
        this.renderReCaptcha(env);
        this.setState({
          email: email
        });
      } else {
        handleNewsletterSignup();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          validProductCode = _this$props.validProductCode,
          hideHeading = _this$props.hideHeading;
      var _this$context = this.context,
          productCode = _this$context.productCode,
          env = _this$context.env,
          buttonClassName = _this$context.buttonClassName,
          buttonText = _this$context.buttonText,
          _this$context$lirePro = _this$context.lireProps,
          host = _this$context$lirePro.host,
          lireClassName = _this$context$lirePro.lireClassName,
          onViewChanged = _this$context$lirePro.onViewChanged,
          params = _this$context$lirePro.params;

      if (!validProductCode) {
        return /*#__PURE__*/(0, _jsx2["default"])(_Button["default"], {
          href: "/newsletters",
          type: "button",
          theme: "primary",
          className: buttonClassName
        }, void 0, buttonText);
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        id: productCode,
        ref: this.wrapperRef || this.setWrapper
      }), !hideHeading && _ref, /*#__PURE__*/(0, _jsx2["default"])(_ValidateRegistration["default"], {
        onSuccess: function onSuccess(message) {
          return _this2.onSuccess(env, message);
        },
        onError: function onError(e) {
          // eslint-disable-next-line no-console
          console.error(e);
        },
        fallbackButtonText: "Sign Up",
        onViewChanged: onViewChanged,
        env: env,
        host: host || defaultHost[env],
        params: params,
        initialHeight: 140,
        className: lireClassName
      }));
    }
  }]);
  return LoggedOut;
}(_react.Component);

LoggedOut.contextType = context.EmailSignupContext;
LoggedOut.displayName = "LoggedOut";
LoggedOut.defaultProps = {
  hideHeading: false
};
var _default = LoggedOut;
exports["default"] = _default;
});

unwrapExports(LoggedOut_1);

var tabbable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];
});

unwrapExports(tabbable_1);

var focusManager = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;



var _tabbable2 = _interopRequireDefault(tabbable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}
});

unwrapExports(focusManager);
var focusManager_1 = focusManager.handleBlur;
var focusManager_2 = focusManager.handleFocus;
var focusManager_3 = focusManager.markForFocusLater;
var focusManager_4 = focusManager.returnFocus;
var focusManager_5 = focusManager.popWithoutFocus;
var focusManager_6 = focusManager.setupScopedFocus;
var focusManager_7 = focusManager.teardownScopedFocus;

var scopeTab_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;



var _tabbable2 = _interopRequireDefault(tabbable_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];
});

unwrapExports(scopeTab_1);

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var warning = function() {};

var warning_1 = warning;

var exenv = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if ( module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
});

var safeHTMLElement = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;



var _exenv2 = _interopRequireDefault(exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;
});

unwrapExports(safeHTMLElement);
var safeHTMLElement_1 = safeHTMLElement.canUseDOM;

var ariaAppHider = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;



var _warning2 = _interopRequireDefault(warning_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}
});

unwrapExports(ariaAppHider);
var ariaAppHider_1 = ariaAppHider.assertNodeList;
var ariaAppHider_2 = ariaAppHider.setElement;
var ariaAppHider_3 = ariaAppHider.validateElement;
var ariaAppHider_4 = ariaAppHider.hide;
var ariaAppHider_5 = ariaAppHider.show;
var ariaAppHider_6 = ariaAppHider.documentNotReadyOrSSRTesting;
var ariaAppHider_7 = ariaAppHider.resetForTesting;

var classList = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
});

unwrapExports(classList);
var classList_1 = classList.dumpClassLists;
var classList_2 = classList.add;
var classList_3 = classList.remove;

var portalOpenInstances_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];
});

unwrapExports(portalOpenInstances_1);

var bodyTrap_1 = createCommonjsModule(function (module) {



var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);
});

unwrapExports(bodyTrap_1);

var ModalPortal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();





var _propTypes2 = _interopRequireDefault(propTypes);



var focusManager$1 = _interopRequireWildcard(focusManager);



var _scopeTab2 = _interopRequireDefault(scopeTab_1);



var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



var classList$1 = _interopRequireWildcard(classList);



var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



var _portalOpenInstances2 = _interopRequireDefault(portalOpenInstances_1);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList$1.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider$1.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager$1.returnFocus(_this.props.preventScroll);
          focusManager$1.teardownScopedFocus();
        } else {
          focusManager$1.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager$1.setupScopedFocus(_this.node);
          focusManager$1.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList$1.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList$1.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider$1.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];
});

unwrapExports(ModalPortal_1);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
__proto__: null,
polyfill: polyfill
});

var Modal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _reactDom2 = _interopRequireDefault(reactDom);



var _propTypes2 = _interopRequireDefault(propTypes);



var _ModalPortal2 = _interopRequireDefault(ModalPortal_1);



var ariaAppHider$1 = _interopRequireWildcard(ariaAppHider);



var _safeHTMLElement2 = _interopRequireDefault(safeHTMLElement);



function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider$1.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, reactLifecyclesCompat_es.polyfill)(Modal);

exports.default = Modal;
});

unwrapExports(Modal_1);
var Modal_2 = Modal_1.bodyOpenClassName;
var Modal_3 = Modal_1.portalClassName;

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _Modal2 = _interopRequireDefault(Modal_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];
});

unwrapExports(lib);

var Close = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CloseIcon;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);

var _utils = interopRequireDefault(utils$1);

var _ref2 = /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: "11",
  y1: "1",
  x2: "1",
  y2: "11"
});

var _ref3 = /*#__PURE__*/(0, _jsx2["default"])("line", {
  x1: "1",
  y1: "1",
  x2: "11",
  y2: "11"
});

function CloseIcon(_ref) {
  var className = _ref.className,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth;
  return /*#__PURE__*/(0, _jsx2["default"])("svg", {
    className: className,
    viewBox: "0 0 12 12",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    style: {
      opacity: 0.95
    }
  }, void 0, _ref2, _ref3);
}

CloseIcon.displayName = "CloseIcon";
CloseIcon.defaultProps = {
  className: undefined,
  stroke: _utils["default"].color.black,
  strokeWidth: '1'
};
});

unwrapExports(Close);

var styled$2 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissIconClass = exports.dismissClass = exports.modalClass = exports.overlayClass = exports.bodyOpenClass = void 0;



var _utils = interopRequireDefault(utils$1);

var bodyOpenClass = /*#__PURE__*/(0, prettyLights_modern.css)("position:fixed;width:100%;overflow:hidden;");
exports.bodyOpenClass = bodyOpenClass;
var overlayClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:block;position:fixed;box-sizing:border-box;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:", _utils["default"].zIndex.overlay, ";background-color:rgba(0,0,0,0.5);opacity:1;");
exports.overlayClass = overlayClass;
var modalClass = /*#__PURE__*/(0, prettyLights_modern.css)("position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;width:100%;box-shadow:none;border-radius:0;background-color:", _utils["default"].color.white, ";font-family:", _utils["default"].font.franklinBase, ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", _utils["default"].color.black, ";z-index:", _utils["default"].zIndex.interstitialModal, ";", _utils["default"].breakpoint.small, "{width:450px;left:50%;top:50%;right:unset;bottom:unset;transform:translate(-50%,-50%);margin:0 auto;overflow:unset;position:absolute;border-radius:3px;box-shadow:0 0 8px rgba(0,0,0,0.2);}");
exports.modalClass = modalClass;
var dismissClass = /*#__PURE__*/(0, prettyLights_modern.css)("position:absolute;top:1px;right:0;padding:16px;cursor:pointer;background-color:", _utils["default"].color.white, ";");
exports.dismissClass = dismissClass;
var dismissIconClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:block;width:15px;height:15px;");
exports.dismissIconClass = dismissIconClass;
});

unwrapExports(styled$2);
var styled_1$2 = styled$2.dismissIconClass;
var styled_2$2 = styled$2.dismissClass;
var styled_3$1 = styled$2.modalClass;
var styled_4$1 = styled$2.overlayClass;
var styled_5$1 = styled$2.bodyOpenClass;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var BodyScrollLock = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableBodyScroll = exports.clearAllBodyScrollLocks = exports.disableBodyScroll = void 0;

var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

// From https://github.com/willmcpo/body-scroll-lock/blob/master/lib/bodyScrollLock.es6.js
// Older browsers don't support event options, feature detect it.
// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
var hasPassiveEvents = false;

if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }

  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting;
var previousBodyPaddingRight; // returns true if `el` should be allowed to receive touchmove events

var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event; // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.

  if (allowTouchMove(e.target)) {
    return true;
  } // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom)


  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function () {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (previousBodyPaddingRight === undefined) {
      var reserveScrollBarGap = !!(options !== null && options !== void 0 && options.reserveScrollBarGap) === true;
      var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = "".concat(scrollBarGap, "px");
      }
    } // If previousBodyOverflowSetting is already set, don't set it again.


    if (previousBodyOverflowSetting === undefined) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  });
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function () {
    if (previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = previousBodyPaddingRight; // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
      // can be set again.

      previousBodyPaddingRight = undefined;
    }

    if (previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = previousBodyOverflowSetting; // Restore previousBodyOverflowSetting to undefined
      // so setOverflowHidden knows it can be set again.

      previousBodyOverflowSetting = undefined;
    }
  });
}; // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions


var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if ((targetElement === null || targetElement === void 0 ? void 0 : targetElement.scrollTop) === 0 && clientY > 0) {
    // element is at the top of its scroll
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the top of its scroll
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  if (isIosDevice) {
    // targetElement must be provided, and disableBodyScroll must not have been
    // called on this targetElement before.
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
      return;
    }

    if (targetElement && !locks.some(function (lock) {
      return lock.targetElement === targetElement;
    })) {
      var lock = {
        targetElement: targetElement,
        options: options || {}
      };
      locks = [].concat((0, _toConsumableArray2["default"])(locks), [lock]);

      targetElement.ontouchstart = function (event) {
        if (event.targetTouches.length === 1) {
          // detect single touch
          initialClientY = event.targetTouches[0].clientY;
        }
      };

      targetElement.ontouchmove = function (event) {
        if (event.targetTouches.length === 1) {
          // detect single touch
          handleScroll(event, targetElement);
        }
      };

      if (!documentListenerAdded) {
        document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = true;
      }
    }
  } else {
    setOverflowHidden(options);
    var _lock = {
      targetElement: targetElement,
      options: options || {}
    };
    locks = [].concat((0, _toConsumableArray2["default"])(locks), [_lock]);
  }
};

exports.disableBodyScroll = disableBodyScroll;

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }

    locks = []; // Reset initial clientY

    initialClientY = -1;
  } else {
    restoreOverflowSetting();
    locks = [];
  }
};

exports.clearAllBodyScrollLocks = clearAllBodyScrollLocks;

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (isIosDevice) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
      return;
    }

    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    locks = locks.filter(function (lock) {
      return lock.targetElement !== targetElement;
    });

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }
  } else if (locks.length === 1 && locks[0].targetElement === targetElement) {
    restoreOverflowSetting();
    locks = [];
  } else {
    locks = locks.filter(function (lock) {
      return lock.targetElement !== targetElement;
    });
  }
};

exports.enableBodyScroll = enableBodyScroll;
});

unwrapExports(BodyScrollLock);
var BodyScrollLock_1 = BodyScrollLock.enableBodyScroll;
var BodyScrollLock_2 = BodyScrollLock.clearAllBodyScrollLocks;
var BodyScrollLock_3 = BodyScrollLock.disableBodyScroll;

var Modal_1$1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _classCallCheck2 = interopRequireDefault(classCallCheck);

var _createClass2 = interopRequireDefault(createClass);

var _inherits2 = interopRequireDefault(inherits);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);



var _reactModal = interopRequireDefault(lib);

var _utils = interopRequireDefault(utils$1);

var _Close = interopRequireDefault(Close);

var styles = interopRequireWildcard(styled$2);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var func = _propTypes["default"].func,
    node = _propTypes["default"].node,
    string = _propTypes["default"].string,
    shape = _propTypes["default"].shape,
    bool = _propTypes["default"].bool;
/**
 * Please visit http://reactcommunity.org/react-modal for more comprehensive documentation of React Modal.
 */

var Modal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    (0, _classCallCheck2["default"])(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.targetElement = null;
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _reactModal["default"].setAppElement('body');

      this.targetElement = document.querySelector('#sharedui-modal');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, BodyScrollLock.clearAllBodyScrollLocks)();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isOpen = this.props.isOpen;

      if (prevProps.isOpen !== isOpen) {
        if (isOpen) {
          (0, BodyScrollLock.disableBodyScroll)(this.targetElement);
        } else {
          (0, BodyScrollLock.enableBodyScroll)(this.targetElement);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          handleClose = _this$props.handleClose,
          onAfterOpen = _this$props.onAfterOpen,
          overlayClassName = _this$props.overlayClassName,
          className = _this$props.className,
          dismissClassName = _this$props.dismissClassName,
          contentLabel = _this$props.contentLabel,
          role = _this$props.role,
          shouldFocusAfterRender = _this$props.shouldFocusAfterRender,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEsc = _this$props.shouldCloseOnEsc,
          shouldReturnFocusAfterClose = _this$props.shouldReturnFocusAfterClose,
          aria = _this$props.aria,
          overlayRef = _this$props.overlayRef,
          contentRef = _this$props.contentRef,
          closeIconStroke = _this$props.closeIconStroke;
      return /*#__PURE__*/(0, _jsx2["default"])(_reactModal["default"], {
        id: "sharedui-modal",
        isOpen: isOpen,
        overlayClassName: (0, prettyLights_modern.cx)(styles.overlayClass, overlayClassName),
        className: (0, prettyLights_modern.cx)(styles.modalClass, className),
        bodyOpenClassName: styles.bodyOpenClass,
        onAfterOpen: onAfterOpen,
        onRequestClose: handleClose,
        contentLabel: contentLabel,
        role: role,
        shouldFocusAfterRender: shouldFocusAfterRender,
        shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
        shouldCloseOnEsc: shouldCloseOnEsc,
        shouldReturnFocusAfterClose: shouldReturnFocusAfterClose,
        aria: aria,
        overlayRef: overlayRef,
        contentRef: contentRef,
        ariaHideApp: true
      }, void 0, children, /*#__PURE__*/(0, _jsx2["default"])("button", {
        type: "button",
        className: (0, prettyLights_modern.cx)(styles.dismissClass, dismissClassName),
        onClick: handleClose
      }, void 0, /*#__PURE__*/(0, _jsx2["default"])("i", {
        className: styles.dismissIconClass
      }, void 0, /*#__PURE__*/(0, _jsx2["default"])(_Close["default"], {
        stroke: closeIconStroke
      }), /*#__PURE__*/(0, _jsx2["default"])("span", {
        className: _utils["default"].a11y.visuallyHidden
      }, void 0, "Close Modal"))));
    }
  }]);
  return Modal;
}(_react.Component);

Modal.displayName = "Modal";
Modal.defaultProps = {
  onAfterOpen: function onAfterOpen() {},
  overlayClassName: undefined,
  className: undefined,
  dismissClassName: undefined,
  contentLabel: '',
  role: 'dialog',
  shouldFocusAfterRender: true,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  shouldReturnFocusAfterClose: true,
  aria: {},
  overlayRef: function overlayRef() {},
  contentRef: function contentRef() {},
  closeIconStroke: '#555'
};
var _default = Modal;
exports["default"] = _default;
});

unwrapExports(Modal_1$1);

var styled$3 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.summaryClass = exports.dismissClass = exports.modalClass = exports.overlayClass = void 0;



var _utils = interopRequireDefault(utils$1);

var overlayClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:block;position:fixed;box-sizing:border-box;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:", _utils["default"].zIndex.overlay, ";background-color:rgba(0,0,0,0.5);opacity:1;");
exports.overlayClass = overlayClass;
var modalClass = /*#__PURE__*/(0, prettyLights_modern.css)("text-align:center;position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;width:unset;padding:32px 20px 40px;box-shadow:none;border-radius:0;background-color:", _utils["default"].color.white, ";font-family:", _utils["default"].font.franklinBase, ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:", _utils["default"].color.black, ";z-index:", _utils["default"].zIndex.interstitialModal, ";", _utils["default"].breakpoint.small, "{width:450px;left:50%;top:50%;border-radius:3px;box-shadow:0 0 8px rgba(0,0,0,0.2);right:unset;bottom:unset;transform:translate(-50%,-50%);margin:0 auto;overflow:unset;position:absolute;padding:32px 30px 40px 30px;}");
exports.modalClass = modalClass;
var dismissClass = /*#__PURE__*/(0, prettyLights_modern.css)("position:absolute;top:1px;right:0;padding:16px;cursor:pointer;background-color:", _utils["default"].color.white, ";");
exports.dismissClass = dismissClass;
var summaryClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:block;font-family:", _utils["default"].font.serifMedium, ";font-size:", _utils["default"].font.size(24), ";line-height:26px;text-align:center;color:", _utils["default"].color.gray20, ";font-style:normal;margin-bottom:10px;padding:0 16px;");
exports.summaryClass = summaryClass;
});

unwrapExports(styled$3);
var styled_1$3 = styled$3.summaryClass;
var styled_2$3 = styled$3.dismissClass;
var styled_3$2 = styled$3.modalClass;
var styled_4$2 = styled$3.overlayClass;

var Modal = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);



var _Modal = interopRequireDefault(Modal_1$1);

var _LoggedOut = interopRequireDefault(LoggedOut_1);

var styles = interopRequireWildcard(styled$3);



var func = _propTypes["default"].func,
    bool = _propTypes["default"].bool;
var signupMessage = 'Enter your information to receive this newsletter.';

var ValidateRegistrationModal = function ValidateRegistrationModal(_ref) {
  var isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      handleNewsletterSignup = _ref.handleNewsletterSignup,
      handleAnonymousNewsletterSignup = _ref.handleAnonymousNewsletterSignup,
      validProductCode = _ref.validProductCode;

  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      modalProps = _useEmailSignupContex.modalProps;

  var overlayClassName = modalProps.overlayClassName,
      modalClassName = modalProps.modalClassName,
      dismissClassName = modalProps.dismissClassName,
      closeIconStroke = modalProps.closeIconStroke,
      headerTextClassName = modalProps.headerTextClassName,
      headerText = modalProps.headerText;
  return /*#__PURE__*/(0, _jsx2["default"])(_Modal["default"], {
    isOpen: isOpen,
    handleClose: handleClose,
    overlayClassName: (0, prettyLights_modern.cx)(styles.overlayClass, overlayClassName),
    className: (0, prettyLights_modern.cx)(styles.modalClass, modalClassName),
    dismissClassName: (0, prettyLights_modern.cx)(styles.dismissClass, dismissClassName),
    contentLabel: "Log in and Registration",
    role: "dialog",
    closeIconStroke: closeIconStroke,
    shouldFocusAfterRender: true,
    shouldReturnFocusAfterClose: true,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true
  }, void 0, /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styles.summaryClass, headerTextClassName)
  }, void 0, headerText || signupMessage), /*#__PURE__*/(0, _jsx2["default"])(_LoggedOut["default"], {
    hideHeading: true,
    validProductCode: validProductCode,
    handleNewsletterSignup: handleNewsletterSignup,
    handleAnonymousNewsletterSignup: handleAnonymousNewsletterSignup
  }));
};

ValidateRegistrationModal.displayName = "ValidateRegistrationModal";
var _default = ValidateRegistrationModal;
exports["default"] = _default;
});

unwrapExports(Modal);

var LoggedOutModal_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);

var _Button = interopRequireDefault(Button_1);

var _Modal = interopRequireDefault(Modal);



var _Heading = interopRequireDefault(Heading_1);

var func = _propTypes["default"].func,
    bool = _propTypes["default"].bool;

var _ref2 = /*#__PURE__*/(0, _jsx2["default"])(_Heading["default"], {});

var LoggedOutModal = function LoggedOutModal(_ref) {
  var isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      handleNewsletterSignup = _ref.handleNewsletterSignup,
      handleAnonymousNewsletterSignup = _ref.handleAnonymousNewsletterSignup,
      buttonClick = _ref.buttonClick,
      validProductCode = _ref.validProductCode;

  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      buttonText = _useEmailSignupContex.buttonText,
      buttonClassName = _useEmailSignupContex.buttonClassName;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _ref2, /*#__PURE__*/(0, _jsx2["default"])(_Button["default"], {
    type: "button",
    theme: "primary",
    className: buttonClassName,
    onClick: buttonClick
  }, void 0, buttonText), /*#__PURE__*/(0, _jsx2["default"])(_Modal["default"], {
    validProductCode: validProductCode,
    isOpen: isOpen,
    handleClose: handleClose,
    handleNewsletterSignup: handleNewsletterSignup,
    handleAnonymousNewsletterSignup: handleAnonymousNewsletterSignup
  }));
};

var _default = LoggedOutModal;
exports["default"] = _default;
});

unwrapExports(LoggedOutModal_1);

var Views_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);



var _LoggedIn = interopRequireDefault(LoggedIn_1);

var _Confirmation = interopRequireDefault(Confirmation_1);

var _AlreadySubscribed = interopRequireDefault(AlreadySubscribed_1);

var _LoggedOut = interopRequireDefault(LoggedOut_1);

var _LoggedOutModal = interopRequireDefault(LoggedOutModal_1);

var shape = _propTypes["default"].shape,
    string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    func = _propTypes["default"].func;

var _ref2 = /*#__PURE__*/(0, _jsx2["default"])("div", {});

var _ref3 = /*#__PURE__*/(0, _jsx2["default"])(_AlreadySubscribed["default"], {});

var _ref4 = /*#__PURE__*/(0, _jsx2["default"])("div", {});

var _ref5 = /*#__PURE__*/(0, _jsx2["default"])(_Confirmation["default"], {});

var _ref6 = /*#__PURE__*/(0, _jsx2["default"])("div", {});

var Views = function Views(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var isOpen = state.isOpen,
      view = state.view,
      isLoading = state.isLoading,
      validProductCode = state.validProductCode;
  var handleLoggedInButtonClick = handlers.handleLoggedInButtonClick,
      handleNewsletterSignup = handlers.handleNewsletterSignup,
      handleAnonymousNewsletterSignup = handlers.handleAnonymousNewsletterSignup,
      handleClose = handlers.handleClose,
      handleModalButtonClick = handlers.handleModalButtonClick;

  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      showConfirmationMessage = _useEmailSignupContex.showConfirmationMessage,
      showAlreadySubscribedMessage = _useEmailSignupContex.showAlreadySubscribedMessage,
      shouldReturnFocus = _useEmailSignupContex.shouldReturnFocus;

  var previousViewRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    previousViewRef.current = view;
  });
  var previousView = previousViewRef.current;
  var loggedOutModalComponent = /*#__PURE__*/(0, _jsx2["default"])(_LoggedOutModal["default"], {
    validProductCode: validProductCode,
    isOpen: isOpen,
    handleClose: handleClose,
    handleNewsletterSignup: handleNewsletterSignup,
    handleAnonymousNewsletterSignup: handleAnonymousNewsletterSignup,
    buttonClick: handleModalButtonClick
  });

  switch (view) {
    case 'alreadySubscribed':
      if (!showAlreadySubscribedMessage) return _ref2;
      return _ref3;

    case 'confirmation':
      // return loggedOutModalComponent to switch focus back to the page on modal close.
      if (previousView === 'loggedOutModal' && !showConfirmationMessage && shouldReturnFocus) return loggedOutModalComponent;
      if (!showConfirmationMessage) return _ref4;
      return _ref5;

    case 'loggedIn':
      return /*#__PURE__*/(0, _jsx2["default"])(_LoggedIn["default"], {
        buttonClick: handleLoggedInButtonClick,
        isLoading: isLoading
      });

    case 'loggedOut':
      return /*#__PURE__*/(0, _jsx2["default"])(_LoggedOut["default"], {
        validProductCode: validProductCode,
        handleNewsletterSignup: handleNewsletterSignup,
        handleAnonymousNewsletterSignup: handleAnonymousNewsletterSignup
      });

    case 'loggedOutModal':
      return loggedOutModalComponent;

    default:
      return _ref6;
  }
};

var _default = Views;
exports["default"] = _default;
});

unwrapExports(Views_1);

var withTransitions = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = interopRequireDefault(defineProperty);

var _classCallCheck2 = interopRequireDefault(classCallCheck);

var _createClass2 = interopRequireDefault(createClass);

var _inherits2 = interopRequireDefault(inherits);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Transition = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Transition, _React$PureComponent);

  var _super = _createSuper(Transition);

  function Transition() {
    var _this;

    (0, _classCallCheck2["default"])(this, Transition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      exiting: false,
      exited: false,
      entered: false,
      entering: false
    };

    _this.finishEnter = function () {
      _this.setState({
        entered: true,
        entering: false
      });

      if (typeof _this.props.onEntered === 'function') _this.props.onEntered();
    };

    _this.handleEnter = function () {
      var enterDuration = _this.props.enterDuration;
      if (_this.enterTimer) clearTimeout(_this.enterTimer);
      _this.enterTimer = setTimeout(_this.finishEnter, enterDuration);
    };

    _this.finishExit = function () {
      _this.setState({
        exited: true,
        exiting: false,
        entered: false
      });

      if (typeof _this.props.onExited === 'function') _this.props.onExited();
    };

    _this.handleExit = function () {
      var exitDuration = _this.props.exitDuration;
      setTimeout(_this.finishExit, exitDuration);
    };

    return _this;
  }

  (0, _createClass2["default"])(Transition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) this.handleEnter();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.visible && this.props.visible) this.handleEnter();
      if (prevProps.visible && !this.props.visible) this.handleExit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          exited = _this$state.exited,
          exiting = _this$state.exiting;
      var visible = this.props.visible;
      if (exited || !visible && !exiting) return null;
      return this.props.children(this.state);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.visible && (prevState.entering || prevState.entered)) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          exiting: true
        });
      }

      if (nextProps.visible && !prevState.entered) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          entering: true,
          exiting: false,
          exited: false
        });
      }

      return prevState;
    }
  }]);
  return Transition;
}(_react["default"].PureComponent);

Transition.defaultProps = {
  onExited: null,
  onEntered: null,
  exitDuration: 500,
  enterDuration: 500
};
Transition.displayName = "Transition";
var _default = Transition;
exports["default"] = _default;
});

unwrapExports(withTransitions);

/* eslint-disable no-param-reassign */
var index$1 = function (breakpoints) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      literal = _ref.literal,
      overlap = _ref.overlap;

  var mq = literal ? breakpoints : ['&'].concat(breakpoints);

  function flatten(obj) {
    if (typeof obj !== 'object' || obj == null) {
      return [];
    }

    if (Array.isArray(obj)) {
      return obj.map(flatten);
    }

    var slots = {};
    var objects = {};
    var props = {};
    Object.keys(obj).forEach(function (key) {
      // Check if value is an array, but skip if it looks like a selector.
      // key.indexOf('&') === 0

      var item = obj[key];
      if (!Array.isArray(item) && literal) item = [item];

      if ((literal || Array.isArray(item)) && key.charCodeAt(0) !== 38) {
        var prior = void 0;
        item.forEach(function (v, index) {
          // Optimize by removing duplicated media query entries
          // when they are explicitly known to overlap.
          if (overlap && prior === v) {
            return;
          }

          if (v == null) {
            // Do not create entries for undefined values as this will
            // generate empty media media quries
            return;
          }

          prior = v;

          if (index === 0 && !literal) {
            props[key] = v;
          } else if (slots[mq[index]] === undefined) {
            var _slots$mq$index;

            slots[mq[index]] = (_slots$mq$index = {}, _slots$mq$index[key] = v, _slots$mq$index);
          } else {
            slots[mq[index]][key] = v;
          }
        });
      } else if (typeof item === 'object') {
        objects[key] = flatten(item);
      } else {
        props[key] = item;
      }
    });

    // Ensure that all slots and then child objects are pushed to the end
    mq.forEach(function (el) {
      if (slots[el]) {
        props[el] = slots[el];
      }
    });
    Object.assign(props, objects);
    return props;
  }

  return function () {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    return values.map(flatten);
  };
};
//# sourceMappingURL=index.es.js.map

var styled$4 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeInActiveClass = exports.fadeInClass = exports.fadeOutDoneClass = exports.fadeOutActiveClass = exports.fadeOutVisibleClass = exports.buttonClass = exports.buttonActivatedClass = exports.confirmationClass = exports.summaryClass = exports.headingClass = exports.signupMessageClass = exports.signupMessageContainerClass = exports.signupContentContainerClass = exports.signupContainerClass = exports.oakContainerClass = void 0;



var _facepaint = interopRequireDefault(index$1);

var _utils = interopRequireDefault(utils$1);

var breakpointExtraSmall = '@media (min-width: 480px)';
var mq = (0, _facepaint["default"])([breakpointExtraSmall, _utils["default"].breakpoint.small]);
var _ref = "0%{transform:translate3d(100%,0,0);}100%{transform:translate3d(0,0,0);}";

var slideIn = function slideIn() {
  return /*#__PURE__*/(0, prettyLights_modern.keyframes)(_ref);
};

var _ref2 = "0%{transform:translate3d(0,0,0);}100%{transform:translate3d(-100%,0,0);}";

var slideOut = function slideOut() {
  return /*#__PURE__*/(0, prettyLights_modern.keyframes)(_ref2);
};

var prefersReducedMotion = "\n  @media (prefers-reduced-motion: reduce) {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n";
var oakContainerClass = /*#__PURE__*/(0, prettyLights_modern.css)("text-align:center;font-family:", _utils["default"].font.serifBase, ";font-size:", _utils["default"].font.size(17), ";line-height:", _utils["default"].font.size(24), ";");
exports.oakContainerClass = oakContainerClass;
var signupContainerClass = /*#__PURE__*/(0, prettyLights_modern.css)("position:relative;display:flex;overflow:hidden;box-sizing:border-box;padding-top:", _utils["default"].font.size(12), ";border-top:1px solid ", _utils["default"].color.gray60, ";color:", _utils["default"].color.gray20, ";max-width:600px;margin:", _utils["default"].font.size(25), " auto ", _utils["default"].font.size(15), ";font-style:italic;");
exports.signupContainerClass = signupContainerClass;
var signupContentContainerClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:flex;flex-grow:1;justify-content:space-between;align-items:flex-start;padding-right:3px;");
exports.signupContentContainerClass = signupContentContainerClass;
var signupMessageContainerClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:flex;align-items:center;height:100%;");
exports.signupMessageContainerClass = signupMessageContainerClass;
var signupMessageClass = /*#__PURE__*/(0, prettyLights_modern.css)("max-width:500px;text-align:left;", mq({
  marginRight: ['10px', null, '20px']
}));
exports.signupMessageClass = signupMessageClass;
var headingClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:inline;margin:0;font-size:", _utils["default"].font.size(14), ";font-weight:", _utils["default"].font.weight.bold, ";font-family:", _utils["default"].font.franklinBase, ";font-style:normal;line-height:", _utils["default"].font.size(18), ";letter-spacing:0.03rem;text-transform:uppercase;");
exports.headingClass = headingClass;
var summaryClass = /*#__PURE__*/(0, prettyLights_modern.css)("margin:0;");
exports.summaryClass = summaryClass;
var confirmationClass = /*#__PURE__*/(0, prettyLights_modern.css)("text-align:left;padding-bottom:", _utils["default"].font.size(10), ";a{color:", _utils["default"].color.linkColor, ";text-decoration:underline;&:hover{text-decoration:none;}}");
exports.confirmationClass = confirmationClass;
var buttonActivatedClass = /*#__PURE__*/(0, prettyLights_modern.css)("color:", _utils["default"].color.white, ";background-color:", _utils["default"].color.gray30, ";");
exports.buttonActivatedClass = buttonActivatedClass;
var buttonClass = /*#__PURE__*/(0, prettyLights_modern.css)("display:block;margin-top:4px;background:", _utils["default"].color.white, ";border:1px solid ", _utils["default"].color.black, ";border-radius:2px;color:", _utils["default"].color.black, ";font-family:", _utils["default"].font.franklinBase, ";font-style:normal;font-weight:", _utils["default"].font.weight.bold, ";height:auto;line-height:", _utils["default"].font.size(20), ";white-space:nowrap;letter-spacing:0.02em;cursor:pointer;text-transform:none;text-decoration:none;text-align:center;box-sizing:border-box;transition:background-color 0.4s,color 0.4s;", mq({
  fontSize: [_utils["default"].font.size(14), null, _utils["default"].font.size(15)],
  padding: ['6px 10px 4px', null, '6px 12px 4px']
}), " &:hover{color:", _utils["default"].color.white, ";background-color:", _utils["default"].color.black, ";}&:active{", buttonActivatedClass, "}");
exports.buttonClass = buttonClass;
var fadeOutVisibleClass = /*#__PURE__*/(0, prettyLights_modern.css)("position:relative;opacity:1;transform:translate3d(0,0,0);");
exports.fadeOutVisibleClass = fadeOutVisibleClass;
var fadeOutActiveClass = /*#__PURE__*/(0, prettyLights_modern.css)("width:100%;opacity:0;transition:opacity 400ms;animation:400ms ", slideOut(), ";", prefersReducedMotion);
exports.fadeOutActiveClass = fadeOutActiveClass;
var fadeOutDoneClass = /*#__PURE__*/(0, prettyLights_modern.css)("opacity:0;display:none;");
exports.fadeOutDoneClass = fadeOutDoneClass;
var fadeInClass = /*#__PURE__*/(0, prettyLights_modern.css)("opacity:0;transform:translate3d(100%,0,0);backface-visibility:hidden;");
exports.fadeInClass = fadeInClass;
var fadeInActiveClass = /*#__PURE__*/(0, prettyLights_modern.css)("opacity:1;transition:opacity 400ms;animation:400ms ", slideIn(), ";", prefersReducedMotion, " backface-visibility:hidden;");
exports.fadeInActiveClass = fadeInActiveClass;
});

unwrapExports(styled$4);
var styled_1$4 = styled$4.fadeInActiveClass;
var styled_2$4 = styled$4.fadeInClass;
var styled_3$3 = styled$4.fadeOutDoneClass;
var styled_4$3 = styled$4.fadeOutActiveClass;
var styled_5$2 = styled$4.fadeOutVisibleClass;
var styled_6 = styled$4.buttonClass;
var styled_7 = styled$4.buttonActivatedClass;
var styled_8 = styled$4.confirmationClass;
var styled_9 = styled$4.summaryClass;
var styled_10 = styled$4.headingClass;
var styled_11 = styled$4.signupMessageClass;
var styled_12 = styled$4.signupMessageContainerClass;
var styled_13 = styled$4.signupContentContainerClass;
var styled_14 = styled$4.signupContainerClass;
var styled_15 = styled$4.oakContainerClass;

var Heading_1$1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);







var Heading = function Heading() {
  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      heading = _useEmailSignupContex.heading,
      summary = _useEmailSignupContex.summary,
      headingClassName = _useEmailSignupContex.headingClassName,
      summaryClassName = _useEmailSignupContex.summaryClassName;

  return /*#__PURE__*/(0, _jsx2["default"])("div", {
    className: styled$4.signupMessageContainerClass
  }, void 0, /*#__PURE__*/(0, _jsx2["default"])("div", {
    className: styled$4.signupMessageClass
  }, void 0, heading && /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styled$4.headingClass, headingClassName)
  }, void 0, heading, ": "), summary && /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styled$4.summaryClass, summaryClassName)
  }, void 0, summary)));
};

Heading.displayName = "Heading";
var _default = Heading;
exports["default"] = _default;
});

unwrapExports(Heading_1$1);

var Confirmation_1$1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _react = interopRequireDefault(react);



var styles = interopRequireWildcard(styled$4);



var _ref = /*#__PURE__*/(0, _jsx2["default"])("a", {
  href: "/newsletters"
}, void 0, "Take a look");

var Confirmation = function Confirmation() {
  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      confirmationMessage = _useEmailSignupContex.confirmationMessage,
      confirmationClassName = _useEmailSignupContex.confirmationClassName;

  return /*#__PURE__*/(0, _jsx2["default"])("span", {
    className: (0, prettyLights_modern.cx)(styles.confirmationClass, confirmationClassName)
  }, void 0, confirmationMessage, " We have other newsletters you may enjoy.", ' ', _ref, ".");
};

Confirmation.displayName = "Confirmation";
var _default = Confirmation;
exports["default"] = _default;
});

unwrapExports(Confirmation_1$1);

var OakArticleSignupViews_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _defineProperty2 = interopRequireDefault(defineProperty);

var _slicedToArray2 = interopRequireDefault(slicedToArray);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);



var _Modal = interopRequireDefault(Modal);



var _withTransitions = interopRequireDefault(withTransitions);

var _Heading = interopRequireDefault(Heading_1$1);

var _Confirmation = interopRequireDefault(Confirmation_1$1);



var shape = _propTypes["default"].shape,
    string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    func = _propTypes["default"].func;
var validViews = /loggedIn|loggedOut|confirmation/; // Custom component for email singups that will specifically be used in articles.
// Different than the default views in terms of styling and how the views are decided to be shown.

var _ref3 = /*#__PURE__*/(0, _jsx2["default"])(_Heading["default"], {});

var _ref6 = /*#__PURE__*/(0, _jsx2["default"])(_Confirmation["default"], {});

var OakArticleSignupViews = function OakArticleSignupViews(_ref) {
  var _ref$state = _ref.state,
      isOpen = _ref$state.isOpen,
      validProductCode = _ref$state.validProductCode,
      view = _ref$state.view,
      _ref$handlers = _ref.handlers,
      handleClose = _ref$handlers.handleClose,
      handleNewsletterSignup = _ref$handlers.handleNewsletterSignup,
      handleAnonymousNewsletterSignup = _ref$handlers.handleAnonymousNewsletterSignup,
      handleModalButtonClick = _ref$handlers.handleModalButtonClick;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      confirmed = _useState2[0],
      setConfirmed = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      buttonWasClicked = _useState4[0],
      setButtonWasClicked = _useState4[1];

  var _useEmailSignupContex = (0, context.useEmailSignupContext)(),
      buttonText = _useEmailSignupContex.buttonText;

  var shouldDisplayView = validViews.test(view);

  var handeLoggedInClick = function handeLoggedInClick() {
    if (buttonWasClicked) return;
    setButtonWasClicked(true);
    handleNewsletterSignup();
  };

  var _ref4 = /*#__PURE__*/(0, _jsx2["default"])(_Modal["default"], {
    validProductCode: validProductCode,
    isOpen: isOpen,
    handleClose: handleClose,
    handleNewsletterSignup: handleNewsletterSignup,
    handleAnonymousNewsletterSignup: handleAnonymousNewsletterSignup
  });

  var signupView = function () {
    // If the view is not one we are expecting, just return an empty div
    if (!shouldDisplayView) return null; // Lgged in/out state

    if (!confirmed) {
      var clickEvent = view === 'loggedIn' ? handeLoggedInClick : handleModalButtonClick;
      return /*#__PURE__*/(0, _jsx2["default"])(_withTransitions["default"], {
        exitDuration: 400,
        visible: view === 'loggedOut' || view === 'loggedIn',
        onExited: function onExited() {
          return setConfirmed(true);
        }
      }, void 0, function (_ref2) {
        var exiting = _ref2.exiting;
        return /*#__PURE__*/(0, _jsx2["default"])("div", {
          className: (0, prettyLights_modern.cx)(styled$4.signupContentContainerClass, (0, _defineProperty2["default"])({}, styled$4.fadeOutActiveClass, exiting))
        }, void 0, _ref3, /*#__PURE__*/(0, _jsx2["default"])("button", {
          type: "button",
          className: (0, prettyLights_modern.cx)(styled$4.buttonClass, (0, _defineProperty2["default"])({}, styled$4.buttonActivatedClass, buttonWasClicked)),
          onClick: clickEvent
        }, void 0, buttonText), view === 'loggedOut' && _ref4);
      });
    } // Confirmation state


    return /*#__PURE__*/(0, _jsx2["default"])(_withTransitions["default"], {
      enterDuration: 500,
      visible: view === 'confirmation' && confirmed
    }, void 0, function (_ref5) {
      var entering = _ref5.entering;
      return /*#__PURE__*/(0, _jsx2["default"])("div", {
        className: (0, prettyLights_modern.cx)(styled$4.signupContentContainerClass, (0, _defineProperty2["default"])({}, styled$4.fadeInActiveClass, entering))
      }, void 0, _ref6);
    });
  }();

  return shouldDisplayView ? /*#__PURE__*/(0, _jsx2["default"])("div", {
    className: styled$4.signupContainerClass
  }, void 0, signupView) : null;
};

var _default = OakArticleSignupViews;
exports["default"] = _default;
});

unwrapExports(OakArticleSignupViews_1);

var EmailSignup_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = interopRequireDefault(jsx);

var _defineProperty2 = interopRequireDefault(defineProperty);

var _classCallCheck2 = interopRequireDefault(classCallCheck);

var _createClass2 = interopRequireDefault(createClass);

var _inherits2 = interopRequireDefault(inherits);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);



var _reactVisibilitySensor = interopRequireDefault(visibilitySensor);









var styles = interopRequireWildcard(styled);

var _Views = interopRequireDefault(Views_1);

var _OakArticleSignupViews = interopRequireDefault(OakArticleSignupViews_1);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var func = _propTypes["default"].func,
    string = _propTypes["default"].string,
    shape = _propTypes["default"].shape,
    oneOf = _propTypes["default"].oneOf,
    bool = _propTypes["default"].bool;

var EmailSignup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EmailSignup, _Component);

  var _super = _createSuper(EmailSignup);

  function EmailSignup() {
    var _this;

    (0, _classCallCheck2["default"])(this, EmailSignup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isOpen: false,
      isLoading: false,
      view: undefined,
      appearedInViewport: false,
      validProductCode: (0, utils.isValidNewsletterCode)(_this.props.productCode)
    };
    _this.wrapperRef = _react["default"].createRef ? /*#__PURE__*/_react["default"].createRef() : null;

    _this.setCaptchaRef = function (el) {
      _this.captcha = el;
    };

    _this.onVisibilityChange = function (isVisible) {
      if (isVisible) {
        _this.setState({
          appearedInViewport: true
        });
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(EmailSignup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.wrapperRef) this.wrapper = this.wrapperRef.current;
      var _this$props = this.props,
          env = _this$props.env,
          type = _this$props.type,
          onIsSubscribed = _this$props.onIsSubscribed,
          onIsNotSubscribed = _this$props.onIsNotSubscribed,
          productCode = _this$props.productCode,
          disableUserQuery = _this$props.disableUserQuery,
          enableAutoSubscribe = _this$props.enableAutoSubscribe,
          _this$props$lireProps = _this$props.lireProps.params,
          clientId = _this$props$lireProps.client_id,
          campaignId = _this$props$lireProps.campaign_id;
      var validProductCode = this.state.validProductCode;
      (0, utils.checkToSubscribeRedirectedUser)(env, this.wrapper, productCode, function () {
        return _this2.handleNewsletterSignup();
      }, function (c, e) {
        return _this2.handleAnonymousNewsletterSignup(c, e);
      });

      if (enableAutoSubscribe) {
        (0, utils.handleAutoSubscribe)(productCode, type, function () {
          return _this2.handleNewsletterSignup();
        }, function () {
          return _this2.handleModalButtonClick();
        });
      }

      if (!validProductCode) {
        (0, tracking.trackInvalidNewsletterCode)({
          clientId: clientId,
          campaignId: campaignId,
          productCode: productCode
        });
        throw new Error('Invalid Newsletter Product Code', productCode);
      } // for pages which handle user/newsletter state


      if (disableUserQuery) {
        this.setDisabledUserQueryState(type);
      } else {
        // for most pages
        this.checkUserStatus({
          productCode: productCode,
          onIsSubscribed: onIsSubscribed,
          onIsNotSubscribed: onIsNotSubscribed,
          type: type
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var appearedInViewport = this.state.appearedInViewport;

      if (appearedInViewport !== prevState.appearedInViewport) {
        var _this$props2 = this.props,
            productCode = _this$props2.productCode,
            _this$props2$tracking = _this$props2.trackingProps,
            placement = _this$props2$tracking.placement,
            algos = _this$props2$tracking.algos,
            disableBaseTracking = _this$props2.disableBaseTracking,
            _this$props2$lireProp = _this$props2.lireProps.params,
            clientId = _this$props2$lireProp.client_id,
            campaignId = _this$props2$lireProp.campaign_id;

        if (!disableBaseTracking && appearedInViewport) {
          (0, tracking.trackImpression)({
            clientId: clientId,
            campaignId: campaignId,
            productCode: productCode,
            placement: placement,
            algos: algos
          });
        }
      }
    }
  }, {
    key: "setDisabledUserQueryState",
    value: function setDisabledUserQueryState(type) {
      var view = (0, utils.hasNYTSCookie)() ? 'loggedIn' : (0, utils.getLoggedOutView)(type);
      this.setState({
        view: view
      });
    }
  }, {
    key: "checkUserStatus",
    value: function checkUserStatus(_ref) {
      var _this3 = this;

      var productCode = _ref.productCode,
          onIsSubscribed = _ref.onIsSubscribed,
          onIsNotSubscribed = _ref.onIsNotSubscribed,
          type = _ref.type;
      (0, samizdat.user)().then(function (_ref2) {
        var data = _ref2.data;
        var view = (0, utils.getViewFromUser)({
          data: data,
          productCode: productCode,
          onIsSubscribed: onIsSubscribed,
          onIsNotSubscribed: onIsNotSubscribed,
          type: type
        });

        _this3.setState({
          view: view
        });
      })["catch"](function (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    }
  }, {
    key: "handleAnonymousNewsletterSignup",
    value: function handleAnonymousNewsletterSignup(captchaToken, email) {
      var _this4 = this;

      var _this$props3 = this.props,
          onSuccess = _this$props3.onSuccess,
          productCode = _this$props3.productCode,
          disableBaseTracking = _this$props3.disableBaseTracking,
          _this$props3$tracking = _this$props3.trackingProps,
          placement = _this$props3$tracking.placement,
          algos = _this$props3$tracking.algos,
          _this$props3$lireProp = _this$props3.lireProps.params,
          clientId = _this$props3$lireProp.client_id,
          campaignId = _this$props3$lireProp.campaign_id;
      (0, samizdat.subscribeAnonymous)(captchaToken, productCode, email).then(function (response) {
        _this4.setState({
          isOpen: false,
          view: 'confirmation'
        });

        if (!disableBaseTracking) {
          (0, tracking.trackSubscribe)({
            clientId: clientId,
            campaignId: campaignId,
            productCode: productCode,
            placement: placement,
            algos: algos
          });
        }

        if (onSuccess) onSuccess(response);
      });
    }
  }, {
    key: "handleNewsletterSignup",
    value: function handleNewsletterSignup() {
      var _this5 = this;

      var _this$props4 = this.props,
          onSuccess = _this$props4.onSuccess,
          productCode = _this$props4.productCode,
          disableBaseTracking = _this$props4.disableBaseTracking,
          _this$props4$tracking = _this$props4.trackingProps,
          placement = _this$props4$tracking.placement,
          algos = _this$props4$tracking.algos,
          _this$props4$lireProp = _this$props4.lireProps.params,
          clientId = _this$props4$lireProp.client_id,
          campaignId = _this$props4$lireProp.campaign_id;
      (0, samizdat.subscribe)(productCode).then(function (response) {
        _this5.setState({
          isOpen: false,
          view: 'confirmation'
        });

        if (!disableBaseTracking) {
          (0, tracking.trackSubscribe)({
            clientId: clientId,
            campaignId: campaignId,
            productCode: productCode,
            placement: placement,
            algos: algos
          });
        }

        if (onSuccess) onSuccess(response);
      });
    }
  }, {
    key: "handleModalButtonClick",
    value: function handleModalButtonClick() {
      var onClick = this.props.onClick;
      this.setState({
        isOpen: true
      });
      if (onClick) onClick();
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "handleLoggedInButtonClick",
    value: function handleLoggedInButtonClick() {
      var _this$props5 = this.props,
          onClick = _this$props5.onClick,
          onLoading = _this$props5.onLoading;
      if (onLoading) onLoading();
      this.setState({
        isLoading: true
      });
      this.handleNewsletterSignup();
      if (onClick) onClick();
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this,
          _cx;

      var _this$props6 = this.props,
          productCode = _this$props6.productCode,
          heading = _this$props6.heading,
          summary = _this$props6.summary,
          buttonText = _this$props6.buttonText,
          confirmationMessage = _this$props6.confirmationMessage,
          alreadySubscribedMessage = _this$props6.alreadySubscribedMessage,
          env = _this$props6.env,
          headingClassName = _this$props6.headingClassName,
          summaryClassName = _this$props6.summaryClassName,
          confirmationClassName = _this$props6.confirmationClassName,
          buttonClassName = _this$props6.buttonClassName,
          loadingSpinnerClassName = _this$props6.loadingSpinnerClassName,
          containerClassName = _this$props6.containerClassName,
          modalProps = _this$props6.modalProps,
          lireProps = _this$props6.lireProps,
          showConfirmationMessage = _this$props6.showConfirmationMessage,
          showAlreadySubscribedMessage = _this$props6.showAlreadySubscribedMessage,
          shouldReturnFocus = _this$props6.shouldReturnFocus,
          type = _this$props6.type;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          view = _this$state.view,
          isLoading = _this$state.isLoading,
          appearedInViewport = _this$state.appearedInViewport,
          validProductCode = _this$state.validProductCode;
      var isOakArticleType = type === 'oakArticle';
      var handlers = {
        handleLoggedInButtonClick: function handleLoggedInButtonClick() {
          return _this6.handleLoggedInButtonClick();
        },
        handleNewsletterSignup: function handleNewsletterSignup() {
          return _this6.handleNewsletterSignup();
        },
        handleAnonymousNewsletterSignup: function handleAnonymousNewsletterSignup(c, e) {
          return _this6.handleAnonymousNewsletterSignup(c, e);
        },
        handleClose: function handleClose() {
          return _this6.handleClose();
        },
        handleModalButtonClick: function handleModalButtonClick() {
          return _this6.handleModalButtonClick();
        }
      };
      var SignupViews = isOakArticleType ? _OakArticleSignupViews["default"] : _Views["default"];
      var code = productCode;
      return /*#__PURE__*/(0, _jsx2["default"])(_reactVisibilitySensor["default"], {
        onChange: function onChange(isVisible) {
          return _this6.onVisibilityChange(isVisible);
        },
        active: !appearedInViewport
      }, void 0, /*#__PURE__*/(0, _jsx2["default"])("div", {
        className: (0, prettyLights_modern.cx)((_cx = {}, (0, _defineProperty2["default"])(_cx, styles.containerClass, !isOakArticleType), (0, _defineProperty2["default"])(_cx, styled$4.oakContainerClass, isOakArticleType), _cx), containerClassName)
      }, void 0, /*#__PURE__*/_react["default"].createElement("div", {
        id: code,
        ref: this.wrapperRef || this.setWrapper
      }), /*#__PURE__*/(0, _jsx2["default"])(context.EmailSignupProvider, {
        value: {
          productCode: productCode,
          heading: heading,
          summary: summary,
          buttonText: buttonText,
          confirmationMessage: confirmationMessage,
          alreadySubscribedMessage: alreadySubscribedMessage,
          env: env,
          headingClassName: headingClassName,
          summaryClassName: summaryClassName,
          confirmationClassName: confirmationClassName,
          buttonClassName: buttonClassName,
          loadingSpinnerClassName: loadingSpinnerClassName,
          modalProps: modalProps,
          lireProps: lireProps,
          showConfirmationMessage: showConfirmationMessage,
          showAlreadySubscribedMessage: showAlreadySubscribedMessage,
          shouldReturnFocus: shouldReturnFocus
        }
      }, void 0, /*#__PURE__*/(0, _jsx2["default"])(SignupViews, {
        state: {
          isOpen: isOpen,
          view: view,
          isLoading: isLoading,
          validProductCode: validProductCode
        },
        handlers: handlers
      }))));
    }
  }]);
  return EmailSignup;
}(_react.Component);

EmailSignup.displayName = "EmailSignup";
EmailSignup.defaultProps = {
  productCode: null,
  type: 'inline',
  env: 'production',
  buttonText: 'Sign Up',
  confirmationMessage: 'Thank you for signing up.',
  alreadySubscribedMessage: 'You are already subscribed!',
  showAlreadySubscribedMessage: false,
  showConfirmationMessage: true,
  disableUserQuery: false,
  enableAutoSubscribe: false,
  shouldReturnFocus: false,
  heading: null,
  summary: null,
  containerClassName: '',
  headingClassName: '',
  summaryClassName: '',
  confirmationClassName: '',
  buttonClassName: '',
  loadingSpinnerClassName: '',
  onLoading: function onLoading() {},
  onIsSubscribed: function onIsSubscribed() {},
  onIsNotSubscribed: function onIsNotSubscribed() {},
  onSuccess: function onSuccess() {},
  onClick: function onClick() {},
  modalProps: {
    closeIconStroke: '#555',
    headerText: '',
    headerTextClassName: '',
    overlayClassName: '',
    modalClassName: '',
    dismissClassName: ''
  },
  lireProps: {
    host: '',
    lireClassName: '',
    onViewChanged: function onViewChanged() {},
    params: {
      client_id: 'shared-ui',
      asset: 'shared-ui',
      response_type: 'cookie',
      application: 'shared-ui'
    }
  },
  trackingProps: {
    placement: null,
    algos: {}
  },
  disableBaseTracking: false
};
var _default = EmailSignup;
exports["default"] = _default;
});

var EmailSignup = unwrapExports(EmailSignup_1);

const confirmationClass = de$1`
  position: relative;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 10px;
  margin: 25px auto 15px;
  border-top: 1px solid #e2e2e2;
  max-width: 600px;
  color: #333;
  font-family: nyt-imperial, georgia, "times new roman", times, serif;
  font-size: 17px;
  line-height: 24px;
  font-style: italic;
  text-align: left;

  a {
    color: #326891;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
const fadeInClass = de$1`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.5s ease-in;
`;

const Confirmation = () => {
  return /*#__PURE__*/react.createElement("div", {
    className: ae$1(confirmationClass, fadeInClass)
  }, "Thank you for signing up. You can customize the locations for your email\xA0", /*#__PURE__*/react.createElement("a", {
    href: "https://www.nytimes.com/interactive/2020/us/covid-cases-deaths-tracker.html"
  }, "here"), ".");
};

const geoip = async function () {
  const res = await fetch('https://www.nytimes.com/svc/int/functions/geoip');

  if (res && res.ok) {
    let val = await res.json();
    return Promise.resolve(val);
  } else {
    return Promise.reject('Error fetching geoip information');
  }
};

const godzown = async function (payload) {
  let host = 'www.nytimes.com';

  if (/local/.test(location.hostname) || /preview/.test(location.hostname)) {
    host = 'www.stg.nytimes.com';
  }

  const res = await fetch(`https://${host}/svc/int/godzown/u/2020-03-16-coronavirus-maps`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(payload)
  });

  if (res && res.ok) {
    let val = await res.json();
    return Promise.resolve(val);
  } else {
    return Promise.reject('Error saving to godzown');
  }
};

function Email() {
  let payload;
  const [confirmation, showConfirmation] = react.useState(false);
  react.useEffect(() => {
    geoip().then(location => {
      if (location?.data?.fips_county && location?.data?.fips_geoid && location?.data?.fips_state) {
        const user_location = location.data;
        const {
          fips_county,
          fips_geoid,
          fips_state
        } = user_location;
        const user_county = `USA-${fips_geoid}`;
        const user_geoid = `USA-${fips_geoid}`;
        const user_state = `USA-${fips_state}`;
        const user_country = 'USA';
        const updated_at = new Date().getTime();
        const selected = [user_geoid, user_state, user_country];
        payload = {
          selected,
          updated_at,
          user_county,
          user_geoid,
          user_state,
          user_location
        };
      }
    }).catch(error => console.error(error));
  }, []);

  const onEmailSignupSuccess = () => {
    showConfirmation(true);

    if (payload) {
      godzown(payload).catch(error => console.error(error));
    }
  };

  const signupProps = {
    productCode: 'YCT',
    type: 'oakArticle',
    disableUserQuery: false,
    trackingProps: 'interactive',
    summary: `We’ll send you the latest data for places you care about each day.`,
    heading: 'Your Coronavirus Tracker',
    onSuccess: () => onEmailSignupSuccess()
  };
  return /*#__PURE__*/react.createElement("section", null, confirmation && /*#__PURE__*/react.createElement(Confirmation, null), !confirmation && /*#__PURE__*/react.createElement(EmailSignup, signupProps));
}

const fadeInClass$1 = de$1`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.5s ease-in;
`;
const pushContainerClass = de$1`
  min-height: 40px;
  padding: 12px 0;
  margin: 20px 0 24px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;

  .Hybrid.DarkTheme & {
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
  }

  @media (min-width: 600px) {
    min-height: auto;
    padding: 15px 0;
    margin: 24px 0 28px;
  }
`;
const pushContentClass = de$1`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const pushHeadlineClass = de$1`
  margin-right: 10px;
  width: calc(100% - 44px);
  -webkit-box-flex: 1;
  flex-grow: 1;
  font-family: 'nyt-franklin', arial, helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.04px;
  color: #000;

  span {
    font-weight: 700;
  }

  .Hybrid.DarkTheme & {
    color: #ccc;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;
const errorClass = de$1`
  font-family: 'nyt-franklin', arial, helvetica, sans-serif;
  font-size: 12px;
  min-height: 12px;
  color: #d31e25;
  padding-top: 5px;
`;
const buttonStylesBase = de$1`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 25px;
  background-color: var(--clr-bg);
  border-radius: 20px;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #dcdcdc;

  .Hybrid.DarkTheme & {
    border: 1px solid #999;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 2px var(--clr-shadow, rgba(0, 0, 0, 0.3));
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: var(--pos-button, 0);
    width: 22.5px;
    height: 22.5px;
    background-color: var(--clr-button, #aaa);
    border-radius: 20px;
    transition: left 250ms ease-in-out;
  }

  &.on {
    border: 1px solid #121212;
    --pos-button: calc(50% - 2px);
    --clr-bg: #121212;
    --clr-button: #fff;

    .Hybrid.DarkTheme & {
      border: 1px solid #999;
      --clr-bg: #999;
    }
  }

  &.off {
    --pos-button: 1px;
    --clr-bg: #dcdcdc;
    --clr-button: #fff;

    .Hybrid.DarkTheme & {
      --pos-button: 0;
      --clr-bg: transparent;
    }
  }
`;
const buttonWrapperClass = de$1`
  position: relative;
  width: 44px;
  height: 25x;
`;

function Toggle({
  isSubscribed,
  onSubscribe,
  onUnsubscribe
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: buttonWrapperClass
  }, /*#__PURE__*/react.createElement("button", {
    className: ae$1(buttonStylesBase, isSubscribed ? 'on' : 'off'),
    onClick: isSubscribed ? onUnsubscribe : onSubscribe
  }));
}

const ERROR_MESSAGE = 'Something went wrong. Please try again in a moment.';
function PushSignup({
  channel,
  channelName,
  ctaMsg,
  subscribedMsg,
  region,
  productCode,
  pushSubscription
}) {
  const [isSubscribed, setIsSubscribed] = react.useState(Boolean(pushSubscription && pushSubscription === 'true'));
  const [error, setError] = react.useState(false);
  react.useEffect(() => {
    if (window && window.NativeBridge && window.NativeBridge.subscriptionStatus) {
      window.NativeBridge.subscriptionStatus(channel).then(result => {
        if (result.success === true) {
          if (result.values.subscribed === 'true') {
            setIsSubscribed(true);
            localStorage.setItem(`push-${channel}`, true);
          }

          if (result.values.subscribed === 'false') {
            setIsSubscribed(false);
            localStorage.setItem(`push-${channel}`, false);
          }
        }
      }).catch(e => console.log(e));
    }
  }, []);

  const updateSubscription = status => {
    const data = {
      tag: channel,
      region: region,
      product: productCode
    };

    if (window && window.NativeBridge && window.NativeBridge.updateSubscription) {
      window.NativeBridge.updateSubscription(data).then(result => {
        if (result.success === true) {
          if (error) setError(false);

          if (result.values.subscribed === 'true') {
            setIsSubscribed(true);
            localStorage.setItem(`push-${channel}`, true);
          }

          if (result.values.subscribed === 'false') {
            setIsSubscribed(false);
            localStorage.setItem(`push-${channel}`, false);
          }
        } else {
          setError(true);
        }
      }).catch(e => setError(true));
    }
  };

  const onSubscribe = () => updateSubscription();

  const onUnsubscribe = () => updateSubscription();

  return /*#__PURE__*/react.createElement("div", {
    className: pushContainerClass
  }, /*#__PURE__*/react.createElement("div", {
    className: pushContentClass
  }, isSubscribed && /*#__PURE__*/react.createElement("div", {
    className: ae$1(pushHeadlineClass, fadeInClass$1)
  }, "You\u2019re signed up to receive ", /*#__PURE__*/react.createElement("span", null, "Covid Tracker"), " ", /*#__PURE__*/react.createElement("br", null), " alerts."), !isSubscribed && /*#__PURE__*/react.createElement("div", {
    className: ae$1(pushHeadlineClass, fadeInClass$1)
  }, /*#__PURE__*/react.createElement("span", null, "Track the coronavirus:\xA0"), "Get alerts on the vaccine rollout, case counts and local policies."), /*#__PURE__*/react.createElement(Toggle, {
    isSubscribed: isSubscribed,
    onSubscribe: onSubscribe,
    onUnsubscribe: onUnsubscribe
  })), error && /*#__PURE__*/react.createElement("div", {
    className: errorClass
  }, ERROR_MESSAGE));
}

function setup(config) {
  const {
    target,
    options
  } = config;
  const isApp = navigator.userAgent.includes('nytios') || navigator.userAgent.includes('nyt_android');

  const isAndroidWebView = navigator.userAgent.includes('nyt_android') && window.__preloadedData; // Do not render the Push module on Android until
  // Native Bridge functions are supported in Web Views


  if (isAndroidWebView) {
    return;
  }

  if (isApp) {
    if (window && window.NativeBridge && window.NativeBridge.pageLoadSendExpose) {
      window.NativeBridge.pageLoadSendExpose('APP_push_promo_article').catch(e => console.error(e));
    }

    if (window && window.config && window.config.AbraConfig && window.config.AbraConfig.APP_push_promo_article !== '1_articleCTA') {
      return;
    }

    if (window && window.NativeBridge && window.NativeBridge.sendAnalytic) {
      // impression
      const eventData = {
        module: {
          region: options.region,
          name: 'APP_push_promo_article',
          context: 'push_covid_vaccine_signup',
          label: '1_articleCTA',
          product: options.productCode,
          product_name: options.channel
        }
      };
      window.NativeBridge.sendAnalytic('impression', eventData).catch(e => console.error(e));
    }
  }

  const component = isApp ? PushSignup : Email;
  reactDom.render( /*#__PURE__*/react.createElement(component, { ...options
  }), target);
}

return setup;

}());
//# sourceMappingURL=build.js.map
