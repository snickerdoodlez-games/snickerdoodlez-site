const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Level1_Standard-DrD-yWzs.js","assets/DebugMenu-BlYmMh_k.js","assets/Level2_Filter-1DcF9k5W.js","assets/Level1_Emoji-S3fC_r9E.js","assets/Level3_Cascading-CUXvw6pA.js","assets/Level4_Translations-BdZBo0Eg.js","assets/Level5_Group-DqOCLQ0k.js"])))=>i.map(i=>d[i]);
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))u(L);new MutationObserver(L=>{for(const p of L)if(p.type==="childList")for(const B of p.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&u(B)}).observe(document,{childList:!0,subtree:!0});function O(L){const p={};return L.integrity&&(p.integrity=L.integrity),L.referrerPolicy&&(p.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?p.credentials="include":L.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(L){if(L.ep)return;L.ep=!0;const p=O(L);fetch(L.href,p)}})();function tS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ts={exports:{}},Un={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BA;function GO(){if(BA)return Un;BA=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function O(u,L,p){var B=null;if(p!==void 0&&(B=""+p),L.key!==void 0&&(B=""+L.key),"key"in L){p={};for(var P in L)P!=="key"&&(p[P]=L[P])}else p=L;return L=p.ref,{$$typeof:s,type:u,key:B,ref:L!==void 0?L:null,props:p}}return Un.Fragment=c,Un.jsx=O,Un.jsxs=O,Un}var UA;function FO(){return UA||(UA=1,Ts.exports=GO()),Ts.exports}var f=FO(),ds={exports:{}},Q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bA;function YO(){if(bA)return Q;bA=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),B=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),U=Symbol.iterator;function W(S){return S===null||typeof S!="object"?null:(S=U&&S[U]||S["@@iterator"],typeof S=="function"?S:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,F={};function b(S,M,K){this.props=S,this.context=M,this.refs=F,this.updater=K||q}b.prototype.isReactComponent={},b.prototype.setState=function(S,M){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,M,"setState")},b.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Z(){}Z.prototype=b.prototype;function te(S,M,K){this.props=S,this.context=M,this.refs=F,this.updater=K||q}var ne=te.prototype=new Z;ne.constructor=te,J(ne,b.prototype),ne.isPureReactComponent=!0;var ea=Array.isArray;function Be(){}var ee={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function Le(S,M,K){var G=K.ref;return{$$typeof:s,type:S,key:M,ref:G!==void 0?G:null,props:K}}function ke(S,M){return Le(S.type,M,S.props)}function Ue(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function me(S){var M={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(K){return M[K]})}var be=/\/+/g;function qe(S,M){return typeof S=="object"&&S!==null&&S.key!=null?me(""+S.key):M.toString(36)}function Ve(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Be,Be):(S.status="pending",S.then(function(M){S.status==="pending"&&(S.status="fulfilled",S.value=M)},function(M){S.status==="pending"&&(S.status="rejected",S.reason=M)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function m(S,M,K,G,z){var X=typeof S;(X==="undefined"||X==="boolean")&&(S=null);var Ae=!1;if(S===null)Ae=!0;else switch(X){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(S.$$typeof){case s:case c:Ae=!0;break;case v:return Ae=S._init,m(Ae(S._payload),M,K,G,z)}}if(Ae)return z=z(S),Ae=G===""?"."+qe(S,0):G,ea(z)?(K="",Ae!=null&&(K=Ae.replace(be,"$&/")+"/"),m(z,M,K,"",function(Zt){return Zt})):z!=null&&(Ue(z)&&(z=ke(z,K+(z.key==null||S&&S.key===z.key?"":(""+z.key).replace(be,"$&/")+"/")+Ae)),M.push(z)),1;Ae=0;var We=G===""?".":G+":";if(ea(S))for(var ye=0;ye<S.length;ye++)G=S[ye],X=We+qe(G,ye),Ae+=m(G,M,K,X,z);else if(ye=W(S),typeof ye=="function")for(S=ye.call(S),ye=0;!(G=S.next()).done;)G=G.value,X=We+qe(G,ye++),Ae+=m(G,M,K,X,z);else if(X==="object"){if(typeof S.then=="function")return m(Ve(S),M,K,G,z);throw M=String(S),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function Y(S,M,K){if(S==null)return S;var G=[],z=0;return m(S,G,"","",function(X){return M.call(K,X,z++)}),G}function j(S){if(S._status===-1){var M=S._result;M=M(),M.then(function(K){(S._status===0||S._status===-1)&&(S._status=1,S._result=K)},function(K){(S._status===0||S._status===-1)&&(S._status=2,S._result=K)}),S._status===-1&&(S._status=0,S._result=M)}if(S._status===1)return S._result.default;throw S._result}var ue=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Te={map:Y,forEach:function(S,M,K){Y(S,function(){M.apply(this,arguments)},K)},count:function(S){var M=0;return Y(S,function(){M++}),M},toArray:function(S){return Y(S,function(M){return M})||[]},only:function(S){if(!Ue(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return Q.Activity=H,Q.Children=Te,Q.Component=b,Q.Fragment=O,Q.Profiler=L,Q.PureComponent=te,Q.StrictMode=u,Q.Suspense=y,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,Q.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ee.H.useMemoCache(S)}},Q.cache=function(S){return function(){return S.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(S,M,K){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var G=J({},S.props),z=S.key;if(M!=null)for(X in M.key!==void 0&&(z=""+M.key),M)!Ee.call(M,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&M.ref===void 0||(G[X]=M[X]);var X=arguments.length-2;if(X===1)G.children=K;else if(1<X){for(var Ae=Array(X),We=0;We<X;We++)Ae[We]=arguments[We+2];G.children=Ae}return Le(S.type,z,G)},Q.createContext=function(S){return S={$$typeof:B,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:p,_context:S},S},Q.createElement=function(S,M,K){var G,z={},X=null;if(M!=null)for(G in M.key!==void 0&&(X=""+M.key),M)Ee.call(M,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(z[G]=M[G]);var Ae=arguments.length-2;if(Ae===1)z.children=K;else if(1<Ae){for(var We=Array(Ae),ye=0;ye<Ae;ye++)We[ye]=arguments[ye+2];z.children=We}if(S&&S.defaultProps)for(G in Ae=S.defaultProps,Ae)z[G]===void 0&&(z[G]=Ae[G]);return Le(S,X,z)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(S){return{$$typeof:P,render:S}},Q.isValidElement=Ue,Q.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:j}},Q.memo=function(S,M){return{$$typeof:C,type:S,compare:M===void 0?null:M}},Q.startTransition=function(S){var M=ee.T,K={};ee.T=K;try{var G=S(),z=ee.S;z!==null&&z(K,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Be,ue)}catch(X){ue(X)}finally{M!==null&&K.types!==null&&(M.types=K.types),ee.T=M}},Q.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},Q.use=function(S){return ee.H.use(S)},Q.useActionState=function(S,M,K){return ee.H.useActionState(S,M,K)},Q.useCallback=function(S,M){return ee.H.useCallback(S,M)},Q.useContext=function(S){return ee.H.useContext(S)},Q.useDebugValue=function(){},Q.useDeferredValue=function(S,M){return ee.H.useDeferredValue(S,M)},Q.useEffect=function(S,M){return ee.H.useEffect(S,M)},Q.useEffectEvent=function(S){return ee.H.useEffectEvent(S)},Q.useId=function(){return ee.H.useId()},Q.useImperativeHandle=function(S,M,K){return ee.H.useImperativeHandle(S,M,K)},Q.useInsertionEffect=function(S,M){return ee.H.useInsertionEffect(S,M)},Q.useLayoutEffect=function(S,M){return ee.H.useLayoutEffect(S,M)},Q.useMemo=function(S,M){return ee.H.useMemo(S,M)},Q.useOptimistic=function(S,M){return ee.H.useOptimistic(S,M)},Q.useReducer=function(S,M,K){return ee.H.useReducer(S,M,K)},Q.useRef=function(S){return ee.H.useRef(S)},Q.useState=function(S){return ee.H.useState(S)},Q.useSyncExternalStore=function(S,M,K){return ee.H.useSyncExternalStore(S,M,K)},Q.useTransition=function(){return ee.H.useTransition()},Q.version="19.2.3",Q}var PA;function ps(){return PA||(PA=1,ds.exports=YO()),ds.exports}var le=ps();const Ka=tS(le);var fs={exports:{}},bn={},Ns={exports:{}},Cs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vA;function KO(){return vA||(vA=1,(function(s){function c(m,Y){var j=m.length;m.push(Y);e:for(;0<j;){var ue=j-1>>>1,Te=m[ue];if(0<L(Te,Y))m[ue]=Y,m[j]=Te,j=ue;else break e}}function O(m){return m.length===0?null:m[0]}function u(m){if(m.length===0)return null;var Y=m[0],j=m.pop();if(j!==Y){m[0]=j;e:for(var ue=0,Te=m.length,S=Te>>>1;ue<S;){var M=2*(ue+1)-1,K=m[M],G=M+1,z=m[G];if(0>L(K,j))G<Te&&0>L(z,K)?(m[ue]=z,m[G]=j,ue=G):(m[ue]=K,m[M]=j,ue=M);else if(G<Te&&0>L(z,j))m[ue]=z,m[G]=j,ue=G;else break e}}return Y}function L(m,Y){var j=m.sortIndex-Y.sortIndex;return j!==0?j:m.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var B=Date,P=B.now();s.unstable_now=function(){return B.now()-P}}var y=[],C=[],v=1,H=null,U=3,W=!1,q=!1,J=!1,F=!1,b=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ne(m){for(var Y=O(C);Y!==null;){if(Y.callback===null)u(C);else if(Y.startTime<=m)u(C),Y.sortIndex=Y.expirationTime,c(y,Y);else break;Y=O(C)}}function ea(m){if(J=!1,ne(m),!q)if(O(y)!==null)q=!0,Be||(Be=!0,me());else{var Y=O(C);Y!==null&&Ve(ea,Y.startTime-m)}}var Be=!1,ee=-1,Ee=5,Le=-1;function ke(){return F?!0:!(s.unstable_now()-Le<Ee)}function Ue(){if(F=!1,Be){var m=s.unstable_now();Le=m;var Y=!0;try{e:{q=!1,J&&(J=!1,Z(ee),ee=-1),W=!0;var j=U;try{a:{for(ne(m),H=O(y);H!==null&&!(H.expirationTime>m&&ke());){var ue=H.callback;if(typeof ue=="function"){H.callback=null,U=H.priorityLevel;var Te=ue(H.expirationTime<=m);if(m=s.unstable_now(),typeof Te=="function"){H.callback=Te,ne(m),Y=!0;break a}H===O(y)&&u(y),ne(m)}else u(y);H=O(y)}if(H!==null)Y=!0;else{var S=O(C);S!==null&&Ve(ea,S.startTime-m),Y=!1}}break e}finally{H=null,U=j,W=!1}Y=void 0}}finally{Y?me():Be=!1}}}var me;if(typeof te=="function")me=function(){te(Ue)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,qe=be.port2;be.port1.onmessage=Ue,me=function(){qe.postMessage(null)}}else me=function(){b(Ue,0)};function Ve(m,Y){ee=b(function(){m(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(m){m.callback=null},s.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<m?Math.floor(1e3/m):5},s.unstable_getCurrentPriorityLevel=function(){return U},s.unstable_next=function(m){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var j=U;U=Y;try{return m()}finally{U=j}},s.unstable_requestPaint=function(){F=!0},s.unstable_runWithPriority=function(m,Y){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var j=U;U=m;try{return Y()}finally{U=j}},s.unstable_scheduleCallback=function(m,Y,j){var ue=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ue+j:ue):j=ue,m){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=j+Te,m={id:v++,callback:Y,priorityLevel:m,startTime:j,expirationTime:Te,sortIndex:-1},j>ue?(m.sortIndex=j,c(C,m),O(y)===null&&m===O(C)&&(J?(Z(ee),ee=-1):J=!0,Ve(ea,j-ue))):(m.sortIndex=Te,c(y,m),q||W||(q=!0,Be||(Be=!0,me()))),m},s.unstable_shouldYield=ke,s.unstable_wrapCallback=function(m){var Y=U;return function(){var j=U;U=Y;try{return m.apply(this,arguments)}finally{U=j}}}})(Cs)),Cs}var GA;function wO(){return GA||(GA=1,Ns.exports=KO()),Ns.exports}var Is={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FA;function kO(){if(FA)return $e;FA=1;var s=ps();function c(y){var C="https://react.dev/errors/"+y;if(1<arguments.length){C+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)C+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var u={d:{f:O,r:function(){throw Error(c(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},L=Symbol.for("react.portal");function p(y,C,v){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:H==null?null:""+H,children:y,containerInfo:C,implementation:v}}var B=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(y,C){if(y==="font")return"";if(typeof C=="string")return C==="use-credentials"?C:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,$e.createPortal=function(y,C){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C||C.nodeType!==1&&C.nodeType!==9&&C.nodeType!==11)throw Error(c(299));return p(y,C,null,v)},$e.flushSync=function(y){var C=B.T,v=u.p;try{if(B.T=null,u.p=2,y)return y()}finally{B.T=C,u.p=v,u.d.f()}},$e.preconnect=function(y,C){typeof y=="string"&&(C?(C=C.crossOrigin,C=typeof C=="string"?C==="use-credentials"?C:"":void 0):C=null,u.d.C(y,C))},$e.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},$e.preinit=function(y,C){if(typeof y=="string"&&C&&typeof C.as=="string"){var v=C.as,H=P(v,C.crossOrigin),U=typeof C.integrity=="string"?C.integrity:void 0,W=typeof C.fetchPriority=="string"?C.fetchPriority:void 0;v==="style"?u.d.S(y,typeof C.precedence=="string"?C.precedence:void 0,{crossOrigin:H,integrity:U,fetchPriority:W}):v==="script"&&u.d.X(y,{crossOrigin:H,integrity:U,fetchPriority:W,nonce:typeof C.nonce=="string"?C.nonce:void 0})}},$e.preinitModule=function(y,C){if(typeof y=="string")if(typeof C=="object"&&C!==null){if(C.as==null||C.as==="script"){var v=P(C.as,C.crossOrigin);u.d.M(y,{crossOrigin:v,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0})}}else C==null&&u.d.M(y)},$e.preload=function(y,C){if(typeof y=="string"&&typeof C=="object"&&C!==null&&typeof C.as=="string"){var v=C.as,H=P(v,C.crossOrigin);u.d.L(y,v,{crossOrigin:H,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0,type:typeof C.type=="string"?C.type:void 0,fetchPriority:typeof C.fetchPriority=="string"?C.fetchPriority:void 0,referrerPolicy:typeof C.referrerPolicy=="string"?C.referrerPolicy:void 0,imageSrcSet:typeof C.imageSrcSet=="string"?C.imageSrcSet:void 0,imageSizes:typeof C.imageSizes=="string"?C.imageSizes:void 0,media:typeof C.media=="string"?C.media:void 0})}},$e.preloadModule=function(y,C){if(typeof y=="string")if(C){var v=P(C.as,C.crossOrigin);u.d.m(y,{as:typeof C.as=="string"&&C.as!=="script"?C.as:void 0,crossOrigin:v,integrity:typeof C.integrity=="string"?C.integrity:void 0})}else u.d.m(y)},$e.requestFormReset=function(y){u.d.r(y)},$e.unstable_batchedUpdates=function(y,C){return y(C)},$e.useFormState=function(y,C,v){return B.H.useFormState(y,C,v)},$e.useFormStatus=function(){return B.H.useHostTransitionStatus()},$e.version="19.2.3",$e}var YA;function VO(){if(YA)return Is.exports;YA=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Is.exports=kO(),Is.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KA;function zO(){if(KA)return bn;KA=1;var s=wO(),c=ps(),O=VO();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function B(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function P(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(u(188))}function C(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(u(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return y(n),e;if(i===l)return y(n),a;i=i.sibling}throw Error(u(188))}if(t.return!==l.return)t=n,l=i;else{for(var o=!1,r=n.child;r;){if(r===t){o=!0,t=n,l=i;break}if(r===l){o=!0,l=n,t=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===t){o=!0,t=i,l=n;break}if(r===l){o=!0,l=i,t=n;break}r=r.sibling}if(!o)throw Error(u(189))}}if(t.alternate!==l)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:a}function v(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=v(e),a!==null)return a;e=e.sibling}return null}var H=Object.assign,U=Symbol.for("react.element"),W=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case b:return"Profiler";case F:return"StrictMode";case ea:return"Suspense";case Be:return"SuspenseList";case Le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case te:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case ne:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return a=e.displayName||null,a!==null?a:qe(e.type)||"Memo";case Ee:a=e._payload,e=e._init;try{return qe(e(a))}catch{}}return null}var Ve=Array.isArray,m=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},ue=[],Te=-1;function S(e){return{current:e}}function M(e){0>Te||(e.current=ue[Te],ue[Te]=null,Te--)}function K(e,a){Te++,ue[Te]=e.current,e.current=a}var G=S(null),z=S(null),X=S(null),Ae=S(null);function We(e,a){switch(K(X,a),K(z,e),K(G,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?eA(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=eA(a),e=aA(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(G),K(G,e)}function ye(){M(G),M(z),M(X)}function Zt(e){e.memoizedState!==null&&K(Ae,e);var a=G.current,t=aA(a,e.type);a!==t&&(K(z,e),K(G,t))}function pt(e){z.current===e&&(M(G),M(z)),Ae.current===e&&(M(Ae),yn._currentValue=j)}var ba,Yl;function Pa(e){if(ba===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);ba=a&&a[1]||"",Yl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ba+e+Yl}var Pe=!1;function Xt(e,a){if(!e||Pe)return"";Pe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(I){var N=I}Reflect.construct(e,[],D)}else{try{D.call()}catch(I){N=I}e.call(D.prototype)}}else{try{throw Error()}catch(I){N=I}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(I){if(I&&N&&typeof I.stack=="string")return[I.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var E=o.split(`
`),d=r.split(`
`);for(n=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(l===E.length||n===d.length)for(l=E.length-1,n=d.length-1;1<=l&&0<=n&&E[l]!==d[n];)n--;for(;1<=l&&0<=n;l--,n--)if(E[l]!==d[n]){if(l!==1||n!==1)do if(l--,n--,0>n||E[l]!==d[n]){var h=`
`+E[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=n);break}}}finally{Pe=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Pa(t):""}function SS(e,a){switch(e.tag){case 26:case 27:case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return e.child!==a&&a!==null?Pa("Suspense Fallback"):Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 15:return Xt(e.type,!1);case 11:return Xt(e.type.render,!1);case 1:return Xt(e.type,!0);case 31:return Pa("Activity");default:return""}}function Bs(e){try{var a="",t=null;do a+=SS(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var eo=Object.prototype.hasOwnProperty,ao=s.unstable_scheduleCallback,to=s.unstable_cancelCallback,RS=s.unstable_shouldYield,OS=s.unstable_requestPaint,ua=s.unstable_now,TS=s.unstable_getCurrentPriorityLevel,Us=s.unstable_ImmediatePriority,bs=s.unstable_UserBlockingPriority,Pn=s.unstable_NormalPriority,dS=s.unstable_LowPriority,Ps=s.unstable_IdlePriority,fS=s.log,NS=s.unstable_setDisableYieldValue,Kl=null,ca=null;function nt(e){if(typeof fS=="function"&&NS(e),ca&&typeof ca.setStrictMode=="function")try{ca.setStrictMode(Kl,e)}catch{}}var Ea=Math.clz32?Math.clz32:LS,CS=Math.log,IS=Math.LN2;function LS(e){return e>>>=0,e===0?32:31-(CS(e)/IS|0)|0}var vn=256,Gn=262144,Fn=4194304;function Ht(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yn(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=Ht(l):(o&=r,o!==0?n=Ht(o):t||(t=r&~e,t!==0&&(n=Ht(t))))):(r=l&~i,r!==0?n=Ht(r):o!==0?n=Ht(o):t||(t=l&~e,t!==0&&(n=Ht(t)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:n}function wl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function hS(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vs(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function lo(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function kl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mS(e,a,t,l,n,i){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var r=e.entanglements,E=e.expirationTimes,d=e.hiddenUpdates;for(t=o&~t;0<t;){var h=31-Ea(t),D=1<<h;r[h]=0,E[h]=-1;var N=d[h];if(N!==null)for(d[h]=null,h=0;h<N.length;h++){var I=N[h];I!==null&&(I.lane&=-536870913)}t&=~D}l!==0&&Gs(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~a))}function Gs(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Ea(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Fs(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-Ea(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function Ys(e,a){var t=a&-a;return t=(t&42)!==0?1:no(t),(t&(e.suspendedLanes|a))!==0?0:t}function no(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function io(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ks(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:mA(e.type))}function ws(e,a){var t=Y.p;try{return Y.p=e,a()}finally{Y.p=t}}var it=Math.random().toString(36).slice(2),je="__reactFiber$"+it,ta="__reactProps$"+it,Qt="__reactContainer$"+it,oo="__reactEvents$"+it,gS="__reactListeners$"+it,MS="__reactHandles$"+it,ks="__reactResources$"+it,Vl="__reactMarker$"+it;function ro(e){delete e[je],delete e[ta],delete e[oo],delete e[gS],delete e[MS]}function qt(e){var a=e[je];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Qt]||t[je]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=sA(e);e!==null;){if(t=e[je])return t;e=sA(e)}return a}e=t,t=e.parentNode}return null}function $t(e){if(e=e[je]||e[Qt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function zl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function el(e){var a=e[ks];return a||(a=e[ks]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function xe(e){e[Vl]=!0}var Vs=new Set,zs={};function Bt(e,a){al(e,a),al(e+"Capture",a)}function al(e,a){for(zs[e]=a,e=0;e<a.length;e++)Vs.add(a[e])}var DS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ws={},xs={};function yS(e){return eo.call(xs,e)?!0:eo.call(Ws,e)?!1:DS.test(e)?xs[e]=!0:(Ws[e]=!0,!1)}function Kn(e,a,t){if(yS(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function wn(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function wa(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function Na(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function pS(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(o){t=""+o,i.call(this,o)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function so(e){if(!e._valueTracker){var a=_s(e)?"checked":"value";e._valueTracker=pS(e,a,""+e[a])}}function js(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=_s(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var HS=/[\n"\\]/g;function Ca(e){return e.replace(HS,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function uo(e,a,t,l,n,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),a!=null?o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Na(a)):e.value!==""+Na(a)&&(e.value=""+Na(a)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),a!=null?co(e,o,Na(a)):t!=null?co(e,o,Na(t)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Na(r):e.removeAttribute("name")}function Js(e,a,t,l,n,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){so(e);return}t=t!=null?""+Na(t):"",a=a!=null?""+Na(a):t,r||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),so(e)}function co(e,a,t){a==="number"&&kn(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function tl(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Na(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Zs(e,a,t){if(a!=null&&(a=""+Na(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Na(t):""}function Xs(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(u(92));if(Ve(l)){if(1<l.length)throw Error(u(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=Na(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),so(e)}function ll(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var BS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qs(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||BS.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function qs(e,a,t){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Qs(e,n,l)}else for(var i in a)a.hasOwnProperty(i)&&Qs(e,i,a[i])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var US=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(e){return bS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ka(){}var Ao=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,il=null;function $s(e){var a=$t(e);if(a&&(e=a.stateNode)){var t=e[ta]||null;e:switch(e=a.stateNode,a.type){case"input":if(uo(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ca(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[ta]||null;if(!n)throw Error(u(90));uo(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&js(l)}break e;case"textarea":Zs(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&tl(e,!!t.multiple,a,!1)}}}var Ro=!1;function eu(e,a,t){if(Ro)return e(a,t);Ro=!0;try{var l=e(a);return l}finally{if(Ro=!1,(nl!==null||il!==null)&&(pi(),nl&&(a=nl,e=il,il=nl=null,$s(a),e)))for(a=0;a<e.length;a++)$s(e[a])}}function Wl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[ta]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,a,typeof t));return t}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=!1;if(Va)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Oo=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Oo=!1}var ot=null,To=null,zn=null;function au(){if(zn)return zn;var e,a=To,t=a.length,l,n="value"in ot?ot.value:ot.textContent,i=n.length;for(e=0;e<t&&a[e]===n[e];e++);var o=t-e;for(l=1;l<=o&&a[t-l]===n[i-l];l++);return zn=n.slice(e,1<l?1-l:void 0)}function Wn(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function xn(){return!0}function tu(){return!1}function la(e){function a(t,l,n,i,o){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],this[r]=t?t(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xn:tu,this.isPropagationStopped=tu,this}return H(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xn)},persist:function(){},isPersistent:xn}),a}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=la(Ut),_l=H({},Ut,{view:0,detail:0}),PS=la(_l),fo,No,jl,jn=H({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(fo=e.screenX-jl.screenX,No=e.screenY-jl.screenY):No=fo=0,jl=e),fo)},movementY:function(e){return"movementY"in e?e.movementY:No}}),lu=la(jn),vS=H({},jn,{dataTransfer:0}),GS=la(vS),FS=H({},_l,{relatedTarget:0}),Co=la(FS),YS=H({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=la(YS),wS=H({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kS=la(wS),VS=H({},Ut,{data:0}),nu=la(VS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=xS[e])?!!a[e]:!1}function Io(){return _S}var jS=H({},_l,{key:function(e){if(e.key){var a=zS[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),JS=la(jS),ZS=H({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=la(ZS),XS=H({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),QS=la(XS),qS=H({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=la(qS),eR=H({},jn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aR=la(eR),tR=H({},Ut,{newState:0,oldState:0}),lR=la(tR),nR=[9,13,27,32],Lo=Va&&"CompositionEvent"in window,Jl=null;Va&&"documentMode"in document&&(Jl=document.documentMode);var iR=Va&&"TextEvent"in window&&!Jl,ou=Va&&(!Lo||Jl&&8<Jl&&11>=Jl),ru=" ",su=!1;function uu(e,a){switch(e){case"keyup":return nR.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function oR(e,a){switch(e){case"compositionend":return cu(a);case"keypress":return a.which!==32?null:(su=!0,ru);case"textInput":return e=a.data,e===ru&&su?null:e;default:return null}}function rR(e,a){if(ol)return e==="compositionend"||!Lo&&uu(e,a)?(e=au(),zn=To=ot=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ou&&a.locale!=="ko"?null:a.data;default:return null}}var sR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!sR[e.type]:a==="textarea"}function Au(e,a,t,l){nl?il?il.push(l):il=[l]:nl=l,a=Gi(a,"onChange"),0<a.length&&(t=new _n("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Zl=null,Xl=null;function uR(e){JE(e,0)}function Jn(e){var a=zl(e);if(js(a))return e}function Su(e,a){if(e==="change")return a}var Ru=!1;if(Va){var ho;if(Va){var mo="oninput"in document;if(!mo){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),mo=typeof Ou.oninput=="function"}ho=mo}else ho=!1;Ru=ho&&(!document.documentMode||9<document.documentMode)}function Tu(){Zl&&(Zl.detachEvent("onpropertychange",du),Xl=Zl=null)}function du(e){if(e.propertyName==="value"&&Jn(Xl)){var a=[];Au(a,Xl,e,So(e)),eu(uR,a)}}function cR(e,a,t){e==="focusin"?(Tu(),Zl=a,Xl=t,Zl.attachEvent("onpropertychange",du)):e==="focusout"&&Tu()}function ER(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jn(Xl)}function AR(e,a){if(e==="click")return Jn(a)}function SR(e,a){if(e==="input"||e==="change")return Jn(a)}function RR(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Aa=typeof Object.is=="function"?Object.is:RR;function Ql(e,a){if(Aa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!eo.call(a,n)||!Aa(e[n],a[n]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,a){var t=fu(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fu(t)}}function Cu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Cu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Iu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=kn(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=kn(e.document)}return a}function go(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var OR=Va&&"documentMode"in document&&11>=document.documentMode,rl=null,Mo=null,ql=null,Do=!1;function Lu(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Do||rl==null||rl!==kn(l)||(l=rl,"selectionStart"in l&&go(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ql&&Ql(ql,l)||(ql=l,l=Gi(Mo,"onSelect"),0<l.length&&(a=new _n("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=rl)))}function bt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var sl={animationend:bt("Animation","AnimationEnd"),animationiteration:bt("Animation","AnimationIteration"),animationstart:bt("Animation","AnimationStart"),transitionrun:bt("Transition","TransitionRun"),transitionstart:bt("Transition","TransitionStart"),transitioncancel:bt("Transition","TransitionCancel"),transitionend:bt("Transition","TransitionEnd")},yo={},hu={};Va&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function Pt(e){if(yo[e])return yo[e];if(!sl[e])return e;var a=sl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in hu)return yo[e]=a[t];return e}var mu=Pt("animationend"),gu=Pt("animationiteration"),Mu=Pt("animationstart"),TR=Pt("transitionrun"),dR=Pt("transitionstart"),fR=Pt("transitioncancel"),Du=Pt("transitionend"),yu=new Map,po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");po.push("scrollEnd");function pa(e,a){yu.set(e,a),Bt(a,[e])}var Zn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ia=[],ul=0,Ho=0;function Xn(){for(var e=ul,a=Ho=ul=0;a<e;){var t=Ia[a];Ia[a++]=null;var l=Ia[a];Ia[a++]=null;var n=Ia[a];Ia[a++]=null;var i=Ia[a];if(Ia[a++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&pu(t,n,i)}}function Qn(e,a,t,l){Ia[ul++]=e,Ia[ul++]=a,Ia[ul++]=t,Ia[ul++]=l,Ho|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Bo(e,a,t,l){return Qn(e,a,t,l),qn(e)}function vt(e,a){return Qn(e,null,null,a),qn(e)}function pu(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&a!==null&&(n=31-Ea(t),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),i):null}function qn(e){if(50<In)throw In=0,wr=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var cl={};function NR(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sa(e,a,t,l){return new NR(e,a,t,l)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function za(e,a){var t=e.alternate;return t===null?(t=Sa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Hu(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function $n(e,a,t,l,n,i){var o=0;if(l=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=mO(e,t,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Le:return e=Sa(31,t,a,n),e.elementType=Le,e.lanes=i,e;case J:return Gt(t.children,n,i,a);case F:o=8,n|=24;break;case b:return e=Sa(12,t,a,n|2),e.elementType=b,e.lanes=i,e;case ea:return e=Sa(13,t,a,n),e.elementType=ea,e.lanes=i,e;case Be:return e=Sa(19,t,a,n),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:o=10;break e;case Z:o=9;break e;case ne:o=11;break e;case ee:o=14;break e;case Ee:o=16,l=null;break e}o=29,t=Error(u(130,e===null?"null":typeof e,"")),l=null}return a=Sa(o,t,a,n),a.elementType=e,a.type=l,a.lanes=i,a}function Gt(e,a,t,l){return e=Sa(7,e,l,a),e.lanes=t,e}function bo(e,a,t){return e=Sa(6,e,null,a),e.lanes=t,e}function Bu(e){var a=Sa(18,null,null,0);return a.stateNode=e,a}function Po(e,a,t){return a=Sa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Uu=new WeakMap;function La(e,a){if(typeof e=="object"&&e!==null){var t=Uu.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Bs(a)},Uu.set(e,a),a)}return{value:e,source:a,stack:Bs(a)}}var El=[],Al=0,ei=null,$l=0,ha=[],ma=0,rt=null,va=1,Ga="";function Wa(e,a){El[Al++]=$l,El[Al++]=ei,ei=e,$l=a}function bu(e,a,t){ha[ma++]=va,ha[ma++]=Ga,ha[ma++]=rt,rt=e;var l=va;e=Ga;var n=32-Ea(l)-1;l&=~(1<<n),t+=1;var i=32-Ea(a)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,va=1<<32-Ea(a)+n|t<<n|l,Ga=i+e}else va=1<<i|t<<n|l,Ga=e}function vo(e){e.return!==null&&(Wa(e,1),bu(e,1,0))}function Go(e){for(;e===ei;)ei=El[--Al],El[Al]=null,$l=El[--Al],El[Al]=null;for(;e===rt;)rt=ha[--ma],ha[ma]=null,Ga=ha[--ma],ha[ma]=null,va=ha[--ma],ha[ma]=null}function Pu(e,a){ha[ma++]=va,ha[ma++]=Ga,ha[ma++]=rt,va=a.id,Ga=a.overflow,rt=e}var Je=null,ge=null,ce=!1,st=null,ga=!1,Fo=Error(u(519));function ut(e){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw en(La(a,e)),Fo}function vu(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[je]=e,a[ta]=l,t){case"dialog":oe("cancel",a),oe("close",a);break;case"iframe":case"object":case"embed":oe("load",a);break;case"video":case"audio":for(t=0;t<hn.length;t++)oe(hn[t],a);break;case"source":oe("error",a);break;case"img":case"image":case"link":oe("error",a),oe("load",a);break;case"details":oe("toggle",a);break;case"input":oe("invalid",a),Js(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":oe("invalid",a);break;case"textarea":oe("invalid",a),Xs(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||qE(a.textContent,t)?(l.popover!=null&&(oe("beforetoggle",a),oe("toggle",a)),l.onScroll!=null&&oe("scroll",a),l.onScrollEnd!=null&&oe("scrollend",a),l.onClick!=null&&(a.onclick=ka),a=!0):a=!1,a||ut(e,!0)}function Gu(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:Je=Je.return}}function Sl(e){if(e!==Je)return!1;if(!ce)return Gu(e),ce=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||as(e.type,e.memoizedProps)),t=!t),t&&ge&&ut(e),Gu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ge=rA(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ge=rA(e)}else a===27?(a=ge,ht(e.type)?(e=os,os=null,ge=e):ge=a):ge=Je?Da(e.stateNode.nextSibling):null;return!0}function Ft(){ge=Je=null,ce=!1}function Yo(){var e=st;return e!==null&&(ra===null?ra=e:ra.push.apply(ra,e),st=null),e}function en(e){st===null?st=[e]:st.push(e)}var Ko=S(null),Yt=null,xa=null;function ct(e,a,t){K(Ko,a._currentValue),a._currentValue=t}function _a(e){e._currentValue=Ko.current,M(Ko)}function wo(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function ko(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var E=0;E<a.length;E++)if(r.context===a[E]){i.lanes|=t,r=i.alternate,r!==null&&(r.lanes|=t),wo(i.return,t,e),l||(o=null);break e}i=r.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(u(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),wo(o,t,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Rl(e,a,t,l){e=null;for(var n=a,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var r=n.type;Aa(n.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(n===Ae.current){if(o=n.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&ko(a,e,t,l),a.flags|=262144}function ai(e){for(e=e.firstContext;e!==null;){if(!Aa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kt(e){Yt=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Fu(Yt,e)}function ti(e,a){return Yt===null&&Kt(e),Fu(e,a)}function Fu(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},xa===null){if(e===null)throw Error(u(308));xa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else xa=xa.next=a;return t}var CR=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},IR=s.unstable_scheduleCallback,LR=s.unstable_NormalPriority,Fe={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new CR,data:new Map,refCount:0}}function an(e){e.refCount--,e.refCount===0&&IR(LR,function(){e.controller.abort()})}var tn=null,zo=0,Ol=0,Tl=null;function hR(e,a){if(tn===null){var t=tn=[];zo=0,Ol=_r(),Tl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return zo++,a.then(Yu,Yu),a}function Yu(){if(--zo===0&&tn!==null){Tl!==null&&(Tl.status="fulfilled");var e=tn;tn=null,Ol=0,Tl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function mR(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var Ku=m.S;m.S=function(e,a){LE=ua(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&hR(e,a),Ku!==null&&Ku(e,a)};var wt=S(null);function Wo(){var e=wt.current;return e!==null?e:he.pooledCache}function li(e,a){a===null?K(wt,wt.current):K(wt,a.pool)}function wu(){var e=Wo();return e===null?null:{parent:Fe._currentValue,pool:e}}var dl=Error(u(460)),xo=Error(u(474)),ni=Error(u(542)),ii={then:function(){}};function ku(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(ka,ka),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Wu(e),e;default:if(typeof a.status=="string")a.then(ka,ka);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Wu(e),e}throw Vt=a,dl}}function kt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Vt=t,dl):t}}var Vt=null;function zu(){if(Vt===null)throw Error(u(459));var e=Vt;return Vt=null,e}function Wu(e){if(e===dl||e===ni)throw Error(u(483))}var fl=null,ln=0;function oi(e){var a=ln;return ln+=1,fl===null&&(fl=[]),Vu(fl,e,a)}function nn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function ri(e,a){throw a.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function xu(e){function a(R,A){if(e){var T=R.deletions;T===null?(R.deletions=[A],R.flags|=16):T.push(A)}}function t(R,A){if(!e)return null;for(;A!==null;)a(R,A),A=A.sibling;return null}function l(R){for(var A=new Map;R!==null;)R.key!==null?A.set(R.key,R):A.set(R.index,R),R=R.sibling;return A}function n(R,A){return R=za(R,A),R.index=0,R.sibling=null,R}function i(R,A,T){return R.index=T,e?(T=R.alternate,T!==null?(T=T.index,T<A?(R.flags|=67108866,A):T):(R.flags|=67108866,A)):(R.flags|=1048576,A)}function o(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function r(R,A,T,g){return A===null||A.tag!==6?(A=bo(T,R.mode,g),A.return=R,A):(A=n(A,T),A.return=R,A)}function E(R,A,T,g){var x=T.type;return x===J?h(R,A,T.props.children,g,T.key):A!==null&&(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ee&&kt(x)===A.type)?(A=n(A,T.props),nn(A,T),A.return=R,A):(A=$n(T.type,T.key,T.props,null,R.mode,g),nn(A,T),A.return=R,A)}function d(R,A,T,g){return A===null||A.tag!==4||A.stateNode.containerInfo!==T.containerInfo||A.stateNode.implementation!==T.implementation?(A=Po(T,R.mode,g),A.return=R,A):(A=n(A,T.children||[]),A.return=R,A)}function h(R,A,T,g,x){return A===null||A.tag!==7?(A=Gt(T,R.mode,g,x),A.return=R,A):(A=n(A,T),A.return=R,A)}function D(R,A,T){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=bo(""+A,R.mode,T),A.return=R,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case W:return T=$n(A.type,A.key,A.props,null,R.mode,T),nn(T,A),T.return=R,T;case q:return A=Po(A,R.mode,T),A.return=R,A;case Ee:return A=kt(A),D(R,A,T)}if(Ve(A)||me(A))return A=Gt(A,R.mode,T,null),A.return=R,A;if(typeof A.then=="function")return D(R,oi(A),T);if(A.$$typeof===te)return D(R,ti(R,A),T);ri(R,A)}return null}function N(R,A,T,g){var x=A!==null?A.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return x!==null?null:r(R,A,""+T,g);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case W:return T.key===x?E(R,A,T,g):null;case q:return T.key===x?d(R,A,T,g):null;case Ee:return T=kt(T),N(R,A,T,g)}if(Ve(T)||me(T))return x!==null?null:h(R,A,T,g,null);if(typeof T.then=="function")return N(R,A,oi(T),g);if(T.$$typeof===te)return N(R,A,ti(R,T),g);ri(R,T)}return null}function I(R,A,T,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return R=R.get(T)||null,r(A,R,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case W:return R=R.get(g.key===null?T:g.key)||null,E(A,R,g,x);case q:return R=R.get(g.key===null?T:g.key)||null,d(A,R,g,x);case Ee:return g=kt(g),I(R,A,T,g,x)}if(Ve(g)||me(g))return R=R.get(T)||null,h(A,R,g,x,null);if(typeof g.then=="function")return I(R,A,T,oi(g),x);if(g.$$typeof===te)return I(R,A,T,ti(A,g),x);ri(A,g)}return null}function k(R,A,T,g){for(var x=null,Se=null,V=A,ae=A=0,se=null;V!==null&&ae<T.length;ae++){V.index>ae?(se=V,V=null):se=V.sibling;var Re=N(R,V,T[ae],g);if(Re===null){V===null&&(V=se);break}e&&V&&Re.alternate===null&&a(R,V),A=i(Re,A,ae),Se===null?x=Re:Se.sibling=Re,Se=Re,V=se}if(ae===T.length)return t(R,V),ce&&Wa(R,ae),x;if(V===null){for(;ae<T.length;ae++)V=D(R,T[ae],g),V!==null&&(A=i(V,A,ae),Se===null?x=V:Se.sibling=V,Se=V);return ce&&Wa(R,ae),x}for(V=l(V);ae<T.length;ae++)se=I(V,R,ae,T[ae],g),se!==null&&(e&&se.alternate!==null&&V.delete(se.key===null?ae:se.key),A=i(se,A,ae),Se===null?x=se:Se.sibling=se,Se=se);return e&&V.forEach(function(yt){return a(R,yt)}),ce&&Wa(R,ae),x}function _(R,A,T,g){if(T==null)throw Error(u(151));for(var x=null,Se=null,V=A,ae=A=0,se=null,Re=T.next();V!==null&&!Re.done;ae++,Re=T.next()){V.index>ae?(se=V,V=null):se=V.sibling;var yt=N(R,V,Re.value,g);if(yt===null){V===null&&(V=se);break}e&&V&&yt.alternate===null&&a(R,V),A=i(yt,A,ae),Se===null?x=yt:Se.sibling=yt,Se=yt,V=se}if(Re.done)return t(R,V),ce&&Wa(R,ae),x;if(V===null){for(;!Re.done;ae++,Re=T.next())Re=D(R,Re.value,g),Re!==null&&(A=i(Re,A,ae),Se===null?x=Re:Se.sibling=Re,Se=Re);return ce&&Wa(R,ae),x}for(V=l(V);!Re.done;ae++,Re=T.next())Re=I(V,R,ae,Re.value,g),Re!==null&&(e&&Re.alternate!==null&&V.delete(Re.key===null?ae:Re.key),A=i(Re,A,ae),Se===null?x=Re:Se.sibling=Re,Se=Re);return e&&V.forEach(function(vO){return a(R,vO)}),ce&&Wa(R,ae),x}function Ie(R,A,T,g){if(typeof T=="object"&&T!==null&&T.type===J&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case W:e:{for(var x=T.key;A!==null;){if(A.key===x){if(x=T.type,x===J){if(A.tag===7){t(R,A.sibling),g=n(A,T.props.children),g.return=R,R=g;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ee&&kt(x)===A.type){t(R,A.sibling),g=n(A,T.props),nn(g,T),g.return=R,R=g;break e}t(R,A);break}else a(R,A);A=A.sibling}T.type===J?(g=Gt(T.props.children,R.mode,g,T.key),g.return=R,R=g):(g=$n(T.type,T.key,T.props,null,R.mode,g),nn(g,T),g.return=R,R=g)}return o(R);case q:e:{for(x=T.key;A!==null;){if(A.key===x)if(A.tag===4&&A.stateNode.containerInfo===T.containerInfo&&A.stateNode.implementation===T.implementation){t(R,A.sibling),g=n(A,T.children||[]),g.return=R,R=g;break e}else{t(R,A);break}else a(R,A);A=A.sibling}g=Po(T,R.mode,g),g.return=R,R=g}return o(R);case Ee:return T=kt(T),Ie(R,A,T,g)}if(Ve(T))return k(R,A,T,g);if(me(T)){if(x=me(T),typeof x!="function")throw Error(u(150));return T=x.call(T),_(R,A,T,g)}if(typeof T.then=="function")return Ie(R,A,oi(T),g);if(T.$$typeof===te)return Ie(R,A,ti(R,T),g);ri(R,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,A!==null&&A.tag===6?(t(R,A.sibling),g=n(A,T),g.return=R,R=g):(t(R,A),g=bo(T,R.mode,g),g.return=R,R=g),o(R)):t(R,A)}return function(R,A,T,g){try{ln=0;var x=Ie(R,A,T,g);return fl=null,x}catch(V){if(V===dl||V===ni)throw V;var Se=Sa(29,V,null,R.mode);return Se.lanes=g,Se.return=R,Se}finally{}}}var zt=xu(!0),_u=xu(!1),Et=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jo(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function At(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function St(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=qn(e),pu(e,null,t),a}return Qn(e,l,a,t),qn(e)}function on(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Fs(e,t)}}function Jo(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?n=i=a:i=i.next=a}else n=i=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Zo=!1;function rn(){if(Zo){var e=Tl;if(e!==null)throw e}}function sn(e,a,t,l){Zo=!1;var n=e.updateQueue;Et=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var E=r,d=E.next;E.next=null,o===null?i=d:o.next=d,o=E;var h=e.alternate;h!==null&&(h=h.updateQueue,r=h.lastBaseUpdate,r!==o&&(r===null?h.firstBaseUpdate=d:r.next=d,h.lastBaseUpdate=E))}if(i!==null){var D=n.baseState;o=0,h=d=E=null,r=i;do{var N=r.lane&-536870913,I=N!==r.lane;if(I?(re&N)===N:(l&N)===N){N!==0&&N===Ol&&(Zo=!0),h!==null&&(h=h.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var k=e,_=r;N=a;var Ie=t;switch(_.tag){case 1:if(k=_.payload,typeof k=="function"){D=k.call(Ie,D,N);break e}D=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=_.payload,N=typeof k=="function"?k.call(Ie,D,N):k,N==null)break e;D=H({},D,N);break e;case 2:Et=!0}}N=r.callback,N!==null&&(e.flags|=64,I&&(e.flags|=8192),I=n.callbacks,I===null?n.callbacks=[N]:I.push(N))}else I={lane:N,tag:r.tag,payload:r.payload,callback:r.callback,next:null},h===null?(d=h=I,E=D):h=h.next=I,o|=N;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;I=r,r=I.next,I.next=null,n.lastBaseUpdate=I,n.shared.pending=null}}while(!0);h===null&&(E=D),n.baseState=E,n.firstBaseUpdate=d,n.lastBaseUpdate=h,i===null&&(n.shared.lanes=0),ft|=o,e.lanes=o,e.memoizedState=D}}function ju(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function Ju(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)ju(t[e],a)}var Nl=S(null),si=S(0);function Zu(e,a){e=at,K(si,e),K(Nl,a),at=e|a.baseLanes}function Xo(){K(si,at),K(Nl,Nl.current)}function Qo(){at=si.current,M(Nl),M(si)}var Ra=S(null),Ma=null;function Rt(e){var a=e.alternate;K(ve,ve.current&1),K(Ra,e),Ma===null&&(a===null||Nl.current!==null||a.memoizedState!==null)&&(Ma=e)}function qo(e){K(ve,ve.current),K(Ra,e),Ma===null&&(Ma=e)}function Xu(e){e.tag===22?(K(ve,ve.current),K(Ra,e),Ma===null&&(Ma=e)):Ot()}function Ot(){K(ve,ve.current),K(Ra,Ra.current)}function Oa(e){M(Ra),Ma===e&&(Ma=null),M(ve)}var ve=S(0);function ui(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||ns(t)||is(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ja=0,$=null,Ne=null,Ye=null,ci=!1,Cl=!1,Wt=!1,Ei=0,un=0,Il=null,gR=0;function pe(){throw Error(u(321))}function $o(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Aa(e[t],a[t]))return!1;return!0}function er(e,a,t,l,n,i){return ja=i,$=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,m.H=e===null||e.memoizedState===null?bc:Or,Wt=!1,i=t(l,n),Wt=!1,Cl&&(i=qu(a,t,l,n)),Qu(e),i}function Qu(e){m.H=An;var a=Ne!==null&&Ne.next!==null;if(ja=0,Ye=Ne=$=null,ci=!1,un=0,Il=null,a)throw Error(u(300));e===null||Ke||(e=e.dependencies,e!==null&&ai(e)&&(Ke=!0))}function qu(e,a,t,l){$=e;var n=0;do{if(Cl&&(Il=null),un=0,Cl=!1,25<=n)throw Error(u(301));if(n+=1,Ye=Ne=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}m.H=Pc,i=a(t,l)}while(Cl);return i}function MR(){var e=m.H,a=e.useState()[0];return a=typeof a.then=="function"?cn(a):a,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&($.flags|=1024),a}function ar(){var e=Ei!==0;return Ei=0,e}function tr(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function lr(e){if(ci){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ci=!1}ja=0,Ye=Ne=$=null,Cl=!1,un=Ei=0,Il=null}function aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?$.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(Ne===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var a=Ye===null?$.memoizedState:Ye.next;if(a!==null)Ye=a,Ne=e;else{if(e===null)throw $.alternate===null?Error(u(467)):Error(u(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?$.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(e){var a=un;return un+=1,Il===null&&(Il=[]),e=Vu(Il,e,a),a=$,(Ye===null?a.memoizedState:Ye.next)===null&&(a=a.alternate,m.H=a===null||a.memoizedState===null?bc:Or),e}function Si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cn(e);if(e.$$typeof===te)return Ze(e)}throw Error(u(438,String(e)))}function nr(e){var a=null,t=$.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Ai(),$.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=ke;return a.index++,t}function Ja(e,a){return typeof a=="function"?a(e):a}function Ri(e){var a=Ge();return ir(a,Ne,e)}function ir(e,a,t){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=t;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}a.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{a=n.next;var r=o=null,E=null,d=a,h=!1;do{var D=d.lane&-536870913;if(D!==d.lane?(re&D)===D:(ja&D)===D){var N=d.revertLane;if(N===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),D===Ol&&(h=!0);else if((ja&N)===N){d=d.next,N===Ol&&(h=!0);continue}else D={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},E===null?(r=E=D,o=i):E=E.next=D,$.lanes|=N,ft|=N;D=d.action,Wt&&t(i,D),i=d.hasEagerState?d.eagerState:t(i,D)}else N={lane:D,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},E===null?(r=E=N,o=i):E=E.next=N,$.lanes|=D,ft|=D;d=d.next}while(d!==null&&d!==a);if(E===null?o=i:E.next=r,!Aa(i,e.memoizedState)&&(Ke=!0,h&&(t=Tl,t!==null)))throw t;e.memoizedState=i,e.baseState=o,e.baseQueue=E,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function or(e){var a=Ge(),t=a.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,i=a.memoizedState;if(n!==null){t.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);Aa(i,a.memoizedState)||(Ke=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,l]}function $u(e,a,t){var l=$,n=Ge(),i=ce;if(i){if(t===void 0)throw Error(u(407));t=t()}else t=a();var o=!Aa((Ne||n).memoizedState,t);if(o&&(n.memoizedState=t,Ke=!0),n=n.queue,ur(tc.bind(null,l,n,e),[e]),n.getSnapshot!==a||o||Ye!==null&&Ye.memoizedState.tag&1){if(l.flags|=2048,Ll(9,{destroy:void 0},ac.bind(null,l,n,t,a),null),he===null)throw Error(u(349));i||(ja&127)!==0||ec(l,a,t)}return t}function ec(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=$.updateQueue,a===null?(a=Ai(),$.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function ac(e,a,t,l){a.value=t,a.getSnapshot=l,lc(a)&&nc(e)}function tc(e,a,t){return t(function(){lc(a)&&nc(e)})}function lc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Aa(e,t)}catch{return!0}}function nc(e){var a=vt(e,2);a!==null&&sa(a,e,2)}function rr(e){var a=aa();if(typeof e=="function"){var t=e;if(e=t(),Wt){nt(!0);try{t()}finally{nt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},a}function ic(e,a,t,l){return e.baseState=t,ir(e,Ne,typeof l=="function"?l:Ja)}function DR(e,a,t,l,n){if(di(e))throw Error(u(485));if(e=a.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};m.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,oc(a,i)):(i.next=t.next,a.pending=t.next=i)}}function oc(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var i=m.T,o={};m.T=o;try{var r=t(n,l),E=m.S;E!==null&&E(o,r),rc(e,a,r)}catch(d){sr(e,a,d)}finally{i!==null&&o.types!==null&&(i.types=o.types),m.T=i}}else try{i=t(n,l),rc(e,a,i)}catch(d){sr(e,a,d)}}function rc(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){sc(e,a,l)},function(l){return sr(e,a,l)}):sc(e,a,t)}function sc(e,a,t){a.status="fulfilled",a.value=t,uc(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,oc(e,t)))}function sr(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,uc(a),a=a.next;while(a!==l)}e.action=null}function uc(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function cc(e,a){return a}function Ec(e,a){if(ce){var t=he.formState;if(t!==null){e:{var l=$;if(ce){if(ge){a:{for(var n=ge,i=ga;n.nodeType!==8;){if(!i){n=null;break a}if(n=Da(n.nextSibling),n===null){n=null;break a}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ge=Da(n.nextSibling),l=n.data==="F!";break e}}ut(l)}l=!1}l&&(a=t[0])}}return t=aa(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cc,lastRenderedState:a},t.queue=l,t=Hc.bind(null,$,l),l.dispatch=t,l=rr(!1),i=Rr.bind(null,$,!1,l.queue),l=aa(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=DR.bind(null,$,n,i,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function Ac(e){var a=Ge();return Sc(a,Ne,e)}function Sc(e,a,t){if(a=ir(e,a,cc)[0],e=Ri(Ja)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=cn(a)}catch(o){throw o===dl?ni:o}else l=a;a=Ge();var n=a.queue,i=n.dispatch;return t!==a.memoizedState&&($.flags|=2048,Ll(9,{destroy:void 0},yR.bind(null,n,t),null)),[l,i,e]}function yR(e,a){e.action=a}function Rc(e){var a=Ge(),t=Ne;if(t!==null)return Sc(a,t,e);Ge(),a=a.memoizedState,t=Ge();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function Ll(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=$.updateQueue,a===null&&(a=Ai(),$.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function Oc(){return Ge().memoizedState}function Oi(e,a,t,l){var n=aa();$.flags|=e,n.memoizedState=Ll(1|a,{destroy:void 0},t,l===void 0?null:l)}function Ti(e,a,t,l){var n=Ge();l=l===void 0?null:l;var i=n.memoizedState.inst;Ne!==null&&l!==null&&$o(l,Ne.memoizedState.deps)?n.memoizedState=Ll(a,i,t,l):($.flags|=e,n.memoizedState=Ll(1|a,i,t,l))}function Tc(e,a){Oi(8390656,8,e,a)}function ur(e,a){Ti(2048,8,e,a)}function pR(e){$.flags|=4;var a=$.updateQueue;if(a===null)a=Ai(),$.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function dc(e){var a=Ge().memoizedState;return pR({ref:a,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function fc(e,a){return Ti(4,2,e,a)}function Nc(e,a){return Ti(4,4,e,a)}function Cc(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Ic(e,a,t){t=t!=null?t.concat([e]):null,Ti(4,4,Cc.bind(null,a,e),t)}function cr(){}function Lc(e,a){var t=Ge();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&$o(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function hc(e,a){var t=Ge();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&$o(a,l[1]))return l[0];if(l=e(),Wt){nt(!0);try{e()}finally{nt(!1)}}return t.memoizedState=[l,a],l}function Er(e,a,t){return t===void 0||(ja&1073741824)!==0&&(re&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=mE(),$.lanes|=e,ft|=e,t)}function mc(e,a,t,l){return Aa(t,a)?t:Nl.current!==null?(e=Er(e,t,l),Aa(e,a)||(Ke=!0),e):(ja&42)===0||(ja&1073741824)!==0&&(re&261930)===0?(Ke=!0,e.memoizedState=t):(e=mE(),$.lanes|=e,ft|=e,a)}function gc(e,a,t,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var o=m.T,r={};m.T=r,Rr(e,!1,a,t);try{var E=n(),d=m.S;if(d!==null&&d(r,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var h=mR(E,l);En(e,a,h,fa(e))}else En(e,a,l,fa(e))}catch(D){En(e,a,{then:function(){},status:"rejected",reason:D},fa())}finally{Y.p=i,o!==null&&r.types!==null&&(o.types=r.types),m.T=o}}function HR(){}function Ar(e,a,t,l){if(e.tag!==5)throw Error(u(476));var n=Mc(e).queue;gc(e,n,a,j,t===null?HR:function(){return Dc(e),t(l)})}function Mc(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:j},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Dc(e){var a=Mc(e);a.next===null&&(a=e.alternate.memoizedState),En(e,a.next.queue,{},fa())}function Sr(){return Ze(yn)}function yc(){return Ge().memoizedState}function pc(){return Ge().memoizedState}function BR(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=fa();e=At(t);var l=St(a,e,t);l!==null&&(sa(l,a,t),on(l,a,t)),a={cache:Vo()},e.payload=a;return}a=a.return}}function UR(e,a,t){var l=fa();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},di(e)?Bc(a,t):(t=Bo(e,a,t,l),t!==null&&(sa(t,e,l),Uc(t,a,l)))}function Hc(e,a,t){var l=fa();En(e,a,t,l)}function En(e,a,t,l){var n={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(di(e))Bc(a,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var o=a.lastRenderedState,r=i(o,t);if(n.hasEagerState=!0,n.eagerState=r,Aa(r,o))return Qn(e,a,n,0),he===null&&Xn(),!1}catch{}finally{}if(t=Bo(e,a,n,l),t!==null)return sa(t,e,l),Uc(t,a,l),!0}return!1}function Rr(e,a,t,l){if(l={lane:2,revertLane:_r(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},di(e)){if(a)throw Error(u(479))}else a=Bo(e,t,l,2),a!==null&&sa(a,e,2)}function di(e){var a=e.alternate;return e===$||a!==null&&a===$}function Bc(e,a){Cl=ci=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Uc(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,Fs(e,t)}}var An={readContext:Ze,use:Si,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useLayoutEffect:pe,useInsertionEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useSyncExternalStore:pe,useId:pe,useHostTransitionStatus:pe,useFormState:pe,useActionState:pe,useOptimistic:pe,useMemoCache:pe,useCacheRefresh:pe};An.useEffectEvent=pe;var bc={readContext:Ze,use:Si,useCallback:function(e,a){return aa().memoizedState=[e,a===void 0?null:a],e},useContext:Ze,useEffect:Tc,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Oi(4194308,4,Cc.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Oi(4194308,4,e,a)},useInsertionEffect:function(e,a){Oi(4,2,e,a)},useMemo:function(e,a){var t=aa();a=a===void 0?null:a;var l=e();if(Wt){nt(!0);try{e()}finally{nt(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=aa();if(t!==void 0){var n=t(a);if(Wt){nt(!0);try{t(a)}finally{nt(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=UR.bind(null,$,e),[l.memoizedState,e]},useRef:function(e){var a=aa();return e={current:e},a.memoizedState=e},useState:function(e){e=rr(e);var a=e.queue,t=Hc.bind(null,$,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:cr,useDeferredValue:function(e,a){var t=aa();return Er(t,e,a)},useTransition:function(){var e=rr(!1);return e=gc.bind(null,$,e.queue,!0,!1),aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=$,n=aa();if(ce){if(t===void 0)throw Error(u(407));t=t()}else{if(t=a(),he===null)throw Error(u(349));(re&127)!==0||ec(l,a,t)}n.memoizedState=t;var i={value:t,getSnapshot:a};return n.queue=i,Tc(tc.bind(null,l,i,e),[e]),l.flags|=2048,Ll(9,{destroy:void 0},ac.bind(null,l,i,t,a),null),t},useId:function(){var e=aa(),a=he.identifierPrefix;if(ce){var t=Ga,l=va;t=(l&~(1<<32-Ea(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Ei++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=gR++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Sr,useFormState:Ec,useActionState:Ec,useOptimistic:function(e){var a=aa();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Rr.bind(null,$,!0,t),t.dispatch=a,[e,a]},useMemoCache:nr,useCacheRefresh:function(){return aa().memoizedState=BR.bind(null,$)},useEffectEvent:function(e){var a=aa(),t={impl:e};return a.memoizedState=t,function(){if((Oe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Or={readContext:Ze,use:Si,useCallback:Lc,useContext:Ze,useEffect:ur,useImperativeHandle:Ic,useInsertionEffect:fc,useLayoutEffect:Nc,useMemo:hc,useReducer:Ri,useRef:Oc,useState:function(){return Ri(Ja)},useDebugValue:cr,useDeferredValue:function(e,a){var t=Ge();return mc(t,Ne.memoizedState,e,a)},useTransition:function(){var e=Ri(Ja)[0],a=Ge().memoizedState;return[typeof e=="boolean"?e:cn(e),a]},useSyncExternalStore:$u,useId:yc,useHostTransitionStatus:Sr,useFormState:Ac,useActionState:Ac,useOptimistic:function(e,a){var t=Ge();return ic(t,Ne,e,a)},useMemoCache:nr,useCacheRefresh:pc};Or.useEffectEvent=dc;var Pc={readContext:Ze,use:Si,useCallback:Lc,useContext:Ze,useEffect:ur,useImperativeHandle:Ic,useInsertionEffect:fc,useLayoutEffect:Nc,useMemo:hc,useReducer:or,useRef:Oc,useState:function(){return or(Ja)},useDebugValue:cr,useDeferredValue:function(e,a){var t=Ge();return Ne===null?Er(t,e,a):mc(t,Ne.memoizedState,e,a)},useTransition:function(){var e=or(Ja)[0],a=Ge().memoizedState;return[typeof e=="boolean"?e:cn(e),a]},useSyncExternalStore:$u,useId:yc,useHostTransitionStatus:Sr,useFormState:Rc,useActionState:Rc,useOptimistic:function(e,a){var t=Ge();return Ne!==null?ic(t,Ne,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:nr,useCacheRefresh:pc};Pc.useEffectEvent=dc;function Tr(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:H({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dr={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=fa(),n=At(l);n.payload=a,t!=null&&(n.callback=t),a=St(e,n,l),a!==null&&(sa(a,e,l),on(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=fa(),n=At(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=St(e,n,l),a!==null&&(sa(a,e,l),on(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=fa(),l=At(t);l.tag=2,a!=null&&(l.callback=a),a=St(e,l,t),a!==null&&(sa(a,e,t),on(a,e,t))}};function vc(e,a,t,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):a.prototype&&a.prototype.isPureReactComponent?!Ql(t,l)||!Ql(n,i):!0}function Gc(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&dr.enqueueReplaceState(a,a.state,null)}function xt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=H({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}function Fc(e){Zn(e)}function Yc(e){console.error(e)}function Kc(e){Zn(e)}function fi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function wc(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fr(e,a,t){return t=At(t),t.tag=3,t.payload={element:null},t.callback=function(){fi(e,a)},t}function kc(e){return e=At(e),e.tag=3,e}function Vc(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){wc(a,t,l)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){wc(a,t,l),typeof n!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function bR(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&Rl(a,t,n,!0),t=Ra.current,t!==null){switch(t.tag){case 31:case 13:return Ma===null?Hi():t.alternate===null&&He===0&&(He=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===ii?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),zr(e,l,n)),!1;case 22:return t.flags|=65536,l===ii?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),zr(e,l,n)),!1}throw Error(u(435,t.tag))}return zr(e,l,n),Hi(),!1}if(ce)return a=Ra.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==Fo&&(e=Error(u(422),{cause:l}),en(La(e,t)))):(l!==Fo&&(a=Error(u(423),{cause:l}),en(La(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=La(l,t),n=fr(e.stateNode,l,n),Jo(e,n),He!==4&&(He=2)),!1;var i=Error(u(520),{cause:l});if(i=La(i,t),Cn===null?Cn=[i]:Cn.push(i),He!==4&&(He=2),a===null)return!0;l=La(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=fr(t.stateNode,l,e),Jo(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Nt===null||!Nt.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=kc(n),Vc(n,e,t,l),Jo(t,n),!1}t=t.return}while(t!==null);return!1}var Nr=Error(u(461)),Ke=!1;function Xe(e,a,t,l){a.child=e===null?_u(a,null,t,l):zt(a,e.child,t,l)}function zc(e,a,t,l,n){t=t.render;var i=a.ref;if("ref"in l){var o={};for(var r in l)r!=="ref"&&(o[r]=l[r])}else o=l;return Kt(a),l=er(e,a,t,o,i,n),r=ar(),e!==null&&!Ke?(tr(e,a,n),Za(e,a,n)):(ce&&r&&vo(a),a.flags|=1,Xe(e,a,l,n),a.child)}function Wc(e,a,t,l,n){if(e===null){var i=t.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,xc(e,a,i,l,n)):(e=$n(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Dr(e,n)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ql,t(o,l)&&e.ref===a.ref)return Za(e,a,n)}return a.flags|=1,e=za(i,l),e.ref=a.ref,e.return=a,a.child=e}function xc(e,a,t,l,n){if(e!==null){var i=e.memoizedProps;if(Ql(i,l)&&e.ref===a.ref)if(Ke=!1,a.pendingProps=l=i,Dr(e,n))(e.flags&131072)!==0&&(Ke=!0);else return a.lanes=e.lanes,Za(e,a,n)}return Cr(e,a,t,l,n)}function _c(e,a,t,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,a.child=null;return jc(e,a,i,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&li(a,i!==null?i.cachePool:null),i!==null?Zu(a,i):Xo(),Xu(a);else return l=a.lanes=536870912,jc(e,a,i!==null?i.baseLanes|t:t,t,l)}else i!==null?(li(a,i.cachePool),Zu(a,i),Ot(),a.memoizedState=null):(e!==null&&li(a,null),Xo(),Ot());return Xe(e,a,n,t),a.child}function Sn(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function jc(e,a,t,l,n){var i=Wo();return i=i===null?null:{parent:Fe._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&li(a,null),Xo(),Xu(a),e!==null&&Rl(e,a,l,!0),a.childLanes=n,null}function Ni(e,a){return a=Ii({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Jc(e,a,t){return zt(a,e.child,null,t),e=Ni(a,a.pendingProps),e.flags|=2,Oa(a),a.memoizedState=null,e}function PR(e,a,t){var l=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ce){if(l.mode==="hidden")return e=Ni(a,l),a.lanes=536870912,Sn(null,e);if(qo(a),(e=ge)?(e=oA(e,ga),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:rt!==null?{id:va,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},t=Bu(e),t.return=a,a.child=t,Je=a,ge=null)):e=null,e===null)throw ut(a);return a.lanes=536870912,null}return Ni(a,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(qo(a),n)if(a.flags&256)a.flags&=-257,a=Jc(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(u(558));else if(Ke||Rl(e,a,t,!1),n=(t&e.childLanes)!==0,Ke||n){if(l=he,l!==null&&(o=Ys(l,t),o!==0&&o!==i.retryLane))throw i.retryLane=o,vt(e,o),sa(l,e,o),Nr;Hi(),a=Jc(e,a,t)}else e=i.treeContext,ge=Da(o.nextSibling),Je=a,ce=!0,st=null,ga=!1,e!==null&&Pu(a,e),a=Ni(a,l),a.flags|=4096;return a}return e=za(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ci(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Cr(e,a,t,l,n){return Kt(a),t=er(e,a,t,l,void 0,n),l=ar(),e!==null&&!Ke?(tr(e,a,n),Za(e,a,n)):(ce&&l&&vo(a),a.flags|=1,Xe(e,a,t,n),a.child)}function Zc(e,a,t,l,n,i){return Kt(a),a.updateQueue=null,t=qu(a,l,t,n),Qu(e),l=ar(),e!==null&&!Ke?(tr(e,a,i),Za(e,a,i)):(ce&&l&&vo(a),a.flags|=1,Xe(e,a,t,i),a.child)}function Xc(e,a,t,l,n){if(Kt(a),a.stateNode===null){var i=cl,o=t.contextType;typeof o=="object"&&o!==null&&(i=Ze(o)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=dr,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},_o(a),o=t.contextType,i.context=typeof o=="object"&&o!==null?Ze(o):cl,i.state=a.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Tr(a,t,o,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&dr.enqueueReplaceState(i,i.state,null),sn(a,l,i,n),rn(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){i=a.stateNode;var r=a.memoizedProps,E=xt(t,r);i.props=E;var d=i.context,h=t.contextType;o=cl,typeof h=="object"&&h!==null&&(o=Ze(h));var D=t.getDerivedStateFromProps;h=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||d!==o)&&Gc(a,i,l,o),Et=!1;var N=a.memoizedState;i.state=N,sn(a,l,i,n),rn(),d=a.memoizedState,r||N!==d||Et?(typeof D=="function"&&(Tr(a,t,D,l),d=a.memoizedState),(E=Et||vc(a,t,E,l,N,d,o))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=d),i.props=l,i.state=d,i.context=o,l=E):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{i=a.stateNode,jo(e,a),o=a.memoizedProps,h=xt(t,o),i.props=h,D=a.pendingProps,N=i.context,d=t.contextType,E=cl,typeof d=="object"&&d!==null&&(E=Ze(d)),r=t.getDerivedStateFromProps,(d=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==D||N!==E)&&Gc(a,i,l,E),Et=!1,N=a.memoizedState,i.state=N,sn(a,l,i,n),rn();var I=a.memoizedState;o!==D||N!==I||Et||e!==null&&e.dependencies!==null&&ai(e.dependencies)?(typeof r=="function"&&(Tr(a,t,r,l),I=a.memoizedState),(h=Et||vc(a,t,h,l,N,I,E)||e!==null&&e.dependencies!==null&&ai(e.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,I,E),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,I,E)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=I),i.props=l,i.state=I,i.context=E,l=h):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),l=!1)}return i=l,Ci(e,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&l?(a.child=zt(a,e.child,null,n),a.child=zt(a,null,t,n)):Xe(e,a,t,n),a.memoizedState=i.state,e=a.child):e=Za(e,a,n),e}function Qc(e,a,t,l){return Ft(),a.flags|=256,Xe(e,a,t,l),a.child}var Ir={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lr(e){return{baseLanes:e,cachePool:wu()}}function hr(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=da),e}function qc(e,a,t){var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),o&&(n=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,e===null){if(ce){if(n?Rt(a):Ot(),(e=ge)?(e=oA(e,ga),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:rt!==null?{id:va,overflow:Ga}:null,retryLane:536870912,hydrationErrors:null},t=Bu(e),t.return=a,a.child=t,Je=a,ge=null)):e=null,e===null)throw ut(a);return is(e)?a.lanes=32:a.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(Ot(),n=a.mode,r=Ii({mode:"hidden",children:r},n),l=Gt(l,n,t,null),r.return=a,l.return=a,r.sibling=l,a.child=r,l=a.child,l.memoizedState=Lr(t),l.childLanes=hr(e,o,t),a.memoizedState=Ir,Sn(null,l)):(Rt(a),mr(a,r))}var E=e.memoizedState;if(E!==null&&(r=E.dehydrated,r!==null)){if(i)a.flags&256?(Rt(a),a.flags&=-257,a=gr(e,a,t)):a.memoizedState!==null?(Ot(),a.child=e.child,a.flags|=128,a=null):(Ot(),r=l.fallback,n=a.mode,l=Ii({mode:"visible",children:l.children},n),r=Gt(r,n,t,null),r.flags|=2,l.return=a,r.return=a,l.sibling=r,a.child=l,zt(a,e.child,null,t),l=a.child,l.memoizedState=Lr(t),l.childLanes=hr(e,o,t),a.memoizedState=Ir,a=Sn(null,l));else if(Rt(a),is(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var d=o.dgst;o=d,l=Error(u(419)),l.stack="",l.digest=o,en({value:l,source:null,stack:null}),a=gr(e,a,t)}else if(Ke||Rl(e,a,t,!1),o=(t&e.childLanes)!==0,Ke||o){if(o=he,o!==null&&(l=Ys(o,t),l!==0&&l!==E.retryLane))throw E.retryLane=l,vt(e,l),sa(o,e,l),Nr;ns(r)||Hi(),a=gr(e,a,t)}else ns(r)?(a.flags|=192,a.child=e.child,a=null):(e=E.treeContext,ge=Da(r.nextSibling),Je=a,ce=!0,st=null,ga=!1,e!==null&&Pu(a,e),a=mr(a,l.children),a.flags|=4096);return a}return n?(Ot(),r=l.fallback,n=a.mode,E=e.child,d=E.sibling,l=za(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,d!==null?r=za(d,r):(r=Gt(r,n,t,null),r.flags|=2),r.return=a,l.return=a,l.sibling=r,a.child=l,Sn(null,l),l=a.child,r=e.child.memoizedState,r===null?r=Lr(t):(n=r.cachePool,n!==null?(E=Fe._currentValue,n=n.parent!==E?{parent:E,pool:E}:n):n=wu(),r={baseLanes:r.baseLanes|t,cachePool:n}),l.memoizedState=r,l.childLanes=hr(e,o,t),a.memoizedState=Ir,Sn(e.child,l)):(Rt(a),t=e.child,e=t.sibling,t=za(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t)}function mr(e,a){return a=Ii({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ii(e,a){return e=Sa(22,e,null,a),e.lanes=0,e}function gr(e,a,t){return zt(a,e.child,null,t),e=mr(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function $c(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),wo(e.return,a,t)}function Mr(e,a,t,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=t,o.tailMode=n,o.treeForkCount=i)}function eE(e,a,t){var l=a.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=ve.current,r=(o&2)!==0;if(r?(o=o&1|2,a.flags|=128):o&=1,K(ve,o),Xe(e,a,l,t),l=ce?$l:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,t,a);else if(e.tag===19)$c(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&ui(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),Mr(a,!1,n,t,i,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&ui(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}Mr(a,!0,t,null,i,l);break;case"together":Mr(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Za(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),ft|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Rl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,t=za(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=za(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Dr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&ai(e)))}function vR(e,a,t){switch(a.tag){case 3:We(a,a.stateNode.containerInfo),ct(a,Fe,e.memoizedState.cache),Ft();break;case 27:case 5:Zt(a);break;case 4:We(a,a.stateNode.containerInfo);break;case 10:ct(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,qo(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Rt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?qc(e,a,t):(Rt(a),e=Za(e,a,t),e!==null?e.sibling:null);Rt(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(Rl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return eE(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K(ve,ve.current),l)break;return null;case 22:return a.lanes=0,_c(e,a,t,a.pendingProps);case 24:ct(a,Fe,e.memoizedState.cache)}return Za(e,a,t)}function aE(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ke=!0;else{if(!Dr(e,t)&&(a.flags&128)===0)return Ke=!1,vR(e,a,t);Ke=(e.flags&131072)!==0}else Ke=!1,ce&&(a.flags&1048576)!==0&&bu(a,$l,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=kt(a.elementType),a.type=e,typeof e=="function")Uo(e)?(l=xt(e,l),a.tag=1,a=Xc(null,a,e,l,t)):(a.tag=0,a=Cr(null,a,e,l,t));else{if(e!=null){var n=e.$$typeof;if(n===ne){a.tag=11,a=zc(null,a,e,l,t);break e}else if(n===ee){a.tag=14,a=Wc(null,a,e,l,t);break e}}throw a=qe(e)||e,Error(u(306,a,""))}}return a;case 0:return Cr(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=xt(l,a.pendingProps),Xc(e,a,l,n,t);case 3:e:{if(We(a,a.stateNode.containerInfo),e===null)throw Error(u(387));l=a.pendingProps;var i=a.memoizedState;n=i.element,jo(e,a),sn(a,l,null,t);var o=a.memoizedState;if(l=o.cache,ct(a,Fe,l),l!==i.cache&&ko(a,[Fe],t,!0),rn(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Qc(e,a,l,t);break e}else if(l!==n){n=La(Error(u(424)),a),en(n),a=Qc(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ge=Da(e.firstChild),Je=a,ce=!0,st=null,ga=!0,t=_u(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ft(),l===n){a=Za(e,a,t);break e}Xe(e,a,l,t)}a=a.child}return a;case 26:return Ci(e,a),e===null?(t=AA(a.type,null,a.pendingProps,null))?a.memoizedState=t:ce||(t=a.type,e=a.pendingProps,l=Fi(X.current).createElement(t),l[je]=a,l[ta]=e,Qe(l,t,e),xe(l),a.stateNode=l):a.memoizedState=AA(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Zt(a),e===null&&ce&&(l=a.stateNode=uA(a.type,a.pendingProps,X.current),Je=a,ga=!0,n=ge,ht(a.type)?(os=n,ge=Da(l.firstChild)):ge=n),Xe(e,a,a.pendingProps.children,t),Ci(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ce&&((n=l=ge)&&(l=EO(l,a.type,a.pendingProps,ga),l!==null?(a.stateNode=l,Je=a,ge=Da(l.firstChild),ga=!1,n=!0):n=!1),n||ut(a)),Zt(a),n=a.type,i=a.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,as(n,i)?l=null:o!==null&&as(n,o)&&(a.flags|=32),a.memoizedState!==null&&(n=er(e,a,MR,null,null,t),yn._currentValue=n),Ci(e,a),Xe(e,a,l,t),a.child;case 6:return e===null&&ce&&((e=t=ge)&&(t=AO(t,a.pendingProps,ga),t!==null?(a.stateNode=t,Je=a,ge=null,e=!0):e=!1),e||ut(a)),null;case 13:return qc(e,a,t);case 4:return We(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=zt(a,null,l,t):Xe(e,a,l,t),a.child;case 11:return zc(e,a,a.type,a.pendingProps,t);case 7:return Xe(e,a,a.pendingProps,t),a.child;case 8:return Xe(e,a,a.pendingProps.children,t),a.child;case 12:return Xe(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,ct(a,a.type,l.value),Xe(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,Kt(a),n=Ze(n),l=l(n),a.flags|=1,Xe(e,a,l,t),a.child;case 14:return Wc(e,a,a.type,a.pendingProps,t);case 15:return xc(e,a,a.type,a.pendingProps,t);case 19:return eE(e,a,t);case 31:return PR(e,a,t);case 22:return _c(e,a,t,a.pendingProps);case 24:return Kt(a),l=Ze(Fe),e===null?(n=Wo(),n===null&&(n=he,i=Vo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),a.memoizedState={parent:l,cache:n},_o(a),ct(a,Fe,n)):((e.lanes&t)!==0&&(jo(e,a),sn(a,null,null,t),rn()),n=e.memoizedState,i=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),ct(a,Fe,l)):(l=i.cache,ct(a,Fe,l),l!==n.cache&&ko(a,[Fe],t,!0))),Xe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function Xa(e){e.flags|=4}function yr(e,a,t,l,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(yE())e.flags|=8192;else throw Vt=ii,xo}else e.flags&=-16777217}function tE(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dA(a))if(yE())e.flags|=8192;else throw Vt=ii,xo}function Li(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?vs():536870912,e.lanes|=a,Ml|=a)}function Rn(e,a){if(!ce)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function GR(e,a,t){var l=a.pendingProps;switch(Go(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(a),null;case 1:return Me(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),_a(Fe),ye(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Sl(a)?Xa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Yo())),Me(a),null;case 26:var n=a.type,i=a.memoizedState;return e===null?(Xa(a),i!==null?(Me(a),tE(a,i)):(Me(a),yr(a,n,null,l,t))):i?i!==e.memoizedState?(Xa(a),Me(a),tE(a,i)):(Me(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xa(a),Me(a),yr(a,n,e,l,t)),null;case 27:if(pt(a),t=X.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Xa(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return Me(a),null}e=G.current,Sl(a)?vu(a):(e=uA(n,l,t),a.stateNode=e,Xa(a))}return Me(a),null;case 5:if(pt(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Xa(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return Me(a),null}if(i=G.current,Sl(a))vu(a);else{var o=Fi(X.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[je]=a,i[ta]=l;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=i;e:switch(Qe(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xa(a)}}return Me(a),yr(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Xa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(u(166));if(e=X.current,Sl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[je]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||qE(e.nodeValue,t)),e||ut(a,!0)}else e=Fi(e).createTextNode(l),e[je]=a,a.stateNode=e}return Me(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=Sl(a),t!==null){if(e===null){if(!l)throw Error(u(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[je]=a}else Ft(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Me(a),e=!1}else t=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Oa(a),a):(Oa(a),null);if((a.flags&128)!==0)throw Error(u(558))}return Me(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Sl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[je]=a}else Ft(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Me(a),n=!1}else n=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(Oa(a),a):(Oa(a),null)}return Oa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Li(a,a.updateQueue),Me(a),null);case 4:return ye(),e===null&&Xr(a.stateNode.containerInfo),Me(a),null;case 10:return _a(a.type),Me(a),null;case 19:if(M(ve),l=a.memoizedState,l===null)return Me(a),null;if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)Rn(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=ui(e),i!==null){for(a.flags|=128,Rn(l,!1),e=i.updateQueue,a.updateQueue=e,Li(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Hu(t,e),t=t.sibling;return K(ve,ve.current&1|2),ce&&Wa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&ua()>Di&&(a.flags|=128,n=!0,Rn(l,!1),a.lanes=4194304)}else{if(!n)if(e=ui(i),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,Li(a,e),Rn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ce)return Me(a),null}else 2*ua()-l.renderingStartTime>Di&&t!==536870912&&(a.flags|=128,n=!0,Rn(l,!1),a.lanes=4194304);l.isBackwards?(i.sibling=a.child,a.child=i):(e=l.last,e!==null?e.sibling=i:a.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ua(),e.sibling=null,t=ve.current,K(ve,n?t&1|2:t&1),ce&&Wa(a,l.treeForkCount),e):(Me(a),null);case 22:case 23:return Oa(a),Qo(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(Me(a),a.subtreeFlags&6&&(a.flags|=8192)):Me(a),t=a.updateQueue,t!==null&&Li(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&M(wt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),_a(Fe),Me(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function FR(e,a){switch(Go(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return _a(Fe),ye(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return pt(a),null;case 31:if(a.memoizedState!==null){if(Oa(a),a.alternate===null)throw Error(u(340));Ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Oa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));Ft()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return M(ve),null;case 4:return ye(),null;case 10:return _a(a.type),null;case 22:case 23:return Oa(a),Qo(),e!==null&&M(wt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return _a(Fe),null;case 25:return null;default:return null}}function lE(e,a){switch(Go(a),a.tag){case 3:_a(Fe),ye();break;case 26:case 27:case 5:pt(a);break;case 4:ye();break;case 31:a.memoizedState!==null&&Oa(a);break;case 13:Oa(a);break;case 19:M(ve);break;case 10:_a(a.type);break;case 22:case 23:Oa(a),Qo(),e!==null&&M(wt);break;case 24:_a(Fe)}}function On(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var i=t.create,o=t.inst;l=i(),o.destroy=l}t=t.next}while(t!==n)}}catch(r){fe(a,a.return,r)}}function Tt(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,n=a;var E=t,d=r;try{d()}catch(h){fe(n,E,h)}}}l=l.next}while(l!==i)}}catch(h){fe(a,a.return,h)}}function nE(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Ju(a,t)}catch(l){fe(e,e.return,l)}}}function iE(e,a,t){t.props=xt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){fe(e,a,l)}}function Tn(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){fe(e,a,n)}}function Fa(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){fe(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){fe(e,a,n)}else t.current=null}function oE(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){fe(e,e.return,n)}}function pr(e,a,t){try{var l=e.stateNode;iO(l,e.type,t,a),l[ta]=a}catch(n){fe(e,e.return,n)}}function rE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ht(e.type)||e.tag===4}function Hr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Br(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=ka));else if(l!==4&&(l===27&&ht(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(Br(e,a,t),e=e.sibling;e!==null;)Br(e,a,t),e=e.sibling}function hi(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(hi(e,a,t),e=e.sibling;e!==null;)hi(e,a,t),e=e.sibling}function sE(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Qe(a,l,t),a[je]=e,a[ta]=t}catch(i){fe(e,e.return,i)}}var Qa=!1,we=!1,Ur=!1,uE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function YR(e,a){if(e=e.containerInfo,$r=Wi,e=Iu(e),go(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,r=-1,E=-1,d=0,h=0,D=e,N=null;a:for(;;){for(var I;D!==t||n!==0&&D.nodeType!==3||(r=o+n),D!==i||l!==0&&D.nodeType!==3||(E=o+l),D.nodeType===3&&(o+=D.nodeValue.length),(I=D.firstChild)!==null;)N=D,D=I;for(;;){if(D===e)break a;if(N===t&&++d===n&&(r=o),N===i&&++h===l&&(E=o),(I=D.nextSibling)!==null)break;D=N,N=D.parentNode}D=I}t=r===-1||E===-1?null:{start:r,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(es={focusedElem:e,selectionRange:t},Wi=!1,_e=a;_e!==null;)if(a=_e,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,_e=e;else for(;_e!==null;){switch(a=_e,i=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)n=e[t],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=a,n=i.memoizedProps,i=i.memoizedState,l=t.stateNode;try{var k=xt(t.type,n);e=l.getSnapshotBeforeUpdate(k,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(_){fe(t,t.return,_)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)ls(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ls(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=a.sibling,e!==null){e.return=a.return,_e=e;break}_e=a.return}}function cE(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:$a(e,t),l&4&&On(5,t);break;case 1:if($a(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(o){fe(t,t.return,o)}else{var n=xt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(o){fe(t,t.return,o)}}l&64&&nE(t),l&512&&Tn(t,t.return);break;case 3:if($a(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Ju(e,a)}catch(o){fe(t,t.return,o)}}break;case 27:a===null&&l&4&&sE(t);case 26:case 5:$a(e,t),a===null&&l&4&&oE(t),l&512&&Tn(t,t.return);break;case 12:$a(e,t);break;case 31:$a(e,t),l&4&&SE(e,t);break;case 13:$a(e,t),l&4&&RE(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=jR.bind(null,t),SO(e,t))));break;case 22:if(l=t.memoizedState!==null||Qa,!l){a=a!==null&&a.memoizedState!==null||we,n=Qa;var i=we;Qa=l,(we=a)&&!i?et(e,t,(t.subtreeFlags&8772)!==0):$a(e,t),Qa=n,we=i}break;case 30:break;default:$a(e,t)}}function EE(e){var a=e.alternate;a!==null&&(e.alternate=null,EE(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ro(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,na=!1;function qa(e,a,t){for(t=t.child;t!==null;)AE(e,a,t),t=t.sibling}function AE(e,a,t){if(ca&&typeof ca.onCommitFiberUnmount=="function")try{ca.onCommitFiberUnmount(Kl,t)}catch{}switch(t.tag){case 26:we||Fa(t,a),qa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:we||Fa(t,a);var l=De,n=na;ht(t.type)&&(De=t.stateNode,na=!1),qa(e,a,t),gn(t.stateNode),De=l,na=n;break;case 5:we||Fa(t,a);case 6:if(l=De,n=na,De=null,qa(e,a,t),De=l,na=n,De!==null)if(na)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(t.stateNode)}catch(i){fe(t,a,i)}else try{De.removeChild(t.stateNode)}catch(i){fe(t,a,i)}break;case 18:De!==null&&(na?(e=De,nA(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Pl(e)):nA(De,t.stateNode));break;case 4:l=De,n=na,De=t.stateNode.containerInfo,na=!0,qa(e,a,t),De=l,na=n;break;case 0:case 11:case 14:case 15:Tt(2,t,a),we||Tt(4,t,a),qa(e,a,t);break;case 1:we||(Fa(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&iE(t,a,l)),qa(e,a,t);break;case 21:qa(e,a,t);break;case 22:we=(l=we)||t.memoizedState!==null,qa(e,a,t),we=l;break;default:qa(e,a,t)}}function SE(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pl(e)}catch(t){fe(a,a.return,t)}}}function RE(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pl(e)}catch(t){fe(a,a.return,t)}}function KR(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new uE),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new uE),a;default:throw Error(u(435,e.tag))}}function mi(e,a){var t=KR(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var n=JR.bind(null,e,l);l.then(n,n)}})}function ia(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],i=e,o=a,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(ht(r.type)){De=r.stateNode,na=!1;break e}break;case 5:De=r.stateNode,na=!1;break e;case 3:case 4:De=r.stateNode.containerInfo,na=!0;break e}r=r.return}if(De===null)throw Error(u(160));AE(i,o,n),De=null,na=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)OE(a,e),a=a.sibling}var Ha=null;function OE(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ia(a,e),oa(e),l&4&&(Tt(3,e,e.return),On(3,e),Tt(5,e,e.return));break;case 1:ia(a,e),oa(e),l&512&&(we||t===null||Fa(t,t.return)),l&64&&Qa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=Ha;if(ia(a,e),oa(e),l&512&&(we||t===null||Fa(t,t.return)),l&4){var i=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Vl]||i[je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Qe(i,l,t),i[je]=e,xe(i),l=i;break e;case"link":var o=OA("link","href",n).get(l+(t.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(r,1);break a}}i=n.createElement(l),Qe(i,l,t),n.head.appendChild(i);break;case"meta":if(o=OA("meta","content",n).get(l+(t.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(r,1);break a}}i=n.createElement(l),Qe(i,l,t),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[je]=e,xe(i),l=i}e.stateNode=l}else TA(n,e.type,e.stateNode);else e.stateNode=RA(n,l,e.memoizedProps);else i!==l?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,l===null?TA(n,e.type,e.stateNode):RA(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&pr(e,e.memoizedProps,t.memoizedProps)}break;case 27:ia(a,e),oa(e),l&512&&(we||t===null||Fa(t,t.return)),t!==null&&l&4&&pr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ia(a,e),oa(e),l&512&&(we||t===null||Fa(t,t.return)),e.flags&32){n=e.stateNode;try{ll(n,"")}catch(k){fe(e,e.return,k)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,pr(e,n,t!==null?t.memoizedProps:n)),l&1024&&(Ur=!0);break;case 6:if(ia(a,e),oa(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(k){fe(e,e.return,k)}}break;case 3:if(wi=null,n=Ha,Ha=Yi(a.containerInfo),ia(a,e),Ha=n,oa(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Pl(a.containerInfo)}catch(k){fe(e,e.return,k)}Ur&&(Ur=!1,TE(e));break;case 4:l=Ha,Ha=Yi(e.stateNode.containerInfo),ia(a,e),oa(e),Ha=l;break;case 12:ia(a,e),oa(e);break;case 31:ia(a,e),oa(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 13:ia(a,e),oa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Mi=ua()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 22:n=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,d=Qa,h=we;if(Qa=d||n,we=h||E,ia(a,e),we=h,Qa=d,oa(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||E||Qa||we||_t(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){E=t=a;try{if(i=E.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=E.stateNode;var D=E.memoizedProps.style,N=D!=null&&D.hasOwnProperty("display")?D.display:null;r.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(k){fe(E,E.return,k)}}}else if(a.tag===6){if(t===null){E=a;try{E.stateNode.nodeValue=n?"":E.memoizedProps}catch(k){fe(E,E.return,k)}}}else if(a.tag===18){if(t===null){E=a;try{var I=E.stateNode;n?iA(I,!0):iA(E.stateNode,!1)}catch(k){fe(E,E.return,k)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,mi(e,t))));break;case 19:ia(a,e),oa(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,mi(e,l)));break;case 30:break;case 21:break;default:ia(a,e),oa(e)}}function oa(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(rE(l)){t=l;break}l=l.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var n=t.stateNode,i=Hr(e);hi(e,i,n);break;case 5:var o=t.stateNode;t.flags&32&&(ll(o,""),t.flags&=-33);var r=Hr(e);hi(e,r,o);break;case 3:case 4:var E=t.stateNode.containerInfo,d=Hr(e);Br(e,d,E);break;default:throw Error(u(161))}}catch(h){fe(e,e.return,h)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function TE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;TE(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function $a(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)cE(e,a.alternate,a),a=a.sibling}function _t(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Tt(4,a,a.return),_t(a);break;case 1:Fa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&iE(a,a.return,t),_t(a);break;case 27:gn(a.stateNode);case 26:case 5:Fa(a,a.return),_t(a);break;case 22:a.memoizedState===null&&_t(a);break;case 30:_t(a);break;default:_t(a)}e=e.sibling}}function et(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,i=a,o=i.flags;switch(i.tag){case 0:case 11:case 15:et(n,i,t),On(4,i);break;case 1:if(et(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){fe(l,l.return,d)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var E=n.shared.hiddenCallbacks;if(E!==null)for(n.shared.hiddenCallbacks=null,n=0;n<E.length;n++)ju(E[n],r)}catch(d){fe(l,l.return,d)}}t&&o&64&&nE(i),Tn(i,i.return);break;case 27:sE(i);case 26:case 5:et(n,i,t),t&&l===null&&o&4&&oE(i),Tn(i,i.return);break;case 12:et(n,i,t);break;case 31:et(n,i,t),t&&o&4&&SE(n,i);break;case 13:et(n,i,t),t&&o&4&&RE(n,i);break;case 22:i.memoizedState===null&&et(n,i,t),Tn(i,i.return);break;case 30:break;default:et(n,i,t)}a=a.sibling}}function br(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&an(t))}function Pr(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&an(e))}function Ba(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)dE(e,a,t,l),a=a.sibling}function dE(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a,t,l),n&2048&&On(9,a);break;case 1:Ba(e,a,t,l);break;case 3:Ba(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&an(e)));break;case 12:if(n&2048){Ba(e,a,t,l),e=a.stateNode;try{var i=a.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){fe(a,a.return,E)}}else Ba(e,a,t,l);break;case 31:Ba(e,a,t,l);break;case 13:Ba(e,a,t,l);break;case 23:break;case 22:i=a.stateNode,o=a.alternate,a.memoizedState!==null?i._visibility&2?Ba(e,a,t,l):dn(e,a):i._visibility&2?Ba(e,a,t,l):(i._visibility|=2,hl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),n&2048&&br(o,a);break;case 24:Ba(e,a,t,l),n&2048&&Pr(a.alternate,a);break;default:Ba(e,a,t,l)}}function hl(e,a,t,l,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,o=a,r=t,E=l,d=o.flags;switch(o.tag){case 0:case 11:case 15:hl(i,o,r,E,n),On(8,o);break;case 23:break;case 22:var h=o.stateNode;o.memoizedState!==null?h._visibility&2?hl(i,o,r,E,n):dn(i,o):(h._visibility|=2,hl(i,o,r,E,n)),n&&d&2048&&br(o.alternate,o);break;case 24:hl(i,o,r,E,n),n&&d&2048&&Pr(o.alternate,o);break;default:hl(i,o,r,E,n)}a=a.sibling}}function dn(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:dn(t,l),n&2048&&br(l.alternate,l);break;case 24:dn(t,l),n&2048&&Pr(l.alternate,l);break;default:dn(t,l)}a=a.sibling}}var fn=8192;function ml(e,a,t){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)fE(e,a,t),e=e.sibling}function fE(e,a,t){switch(e.tag){case 26:ml(e,a,t),e.flags&fn&&e.memoizedState!==null&&gO(t,Ha,e.memoizedState,e.memoizedProps);break;case 5:ml(e,a,t);break;case 3:case 4:var l=Ha;Ha=Yi(e.stateNode.containerInfo),ml(e,a,t),Ha=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=fn,fn=16777216,ml(e,a,t),fn=l):ml(e,a,t));break;default:ml(e,a,t)}}function NE(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Nn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];_e=l,IE(l,e)}NE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)CE(e),e=e.sibling}function CE(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&Tt(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,gi(e)):Nn(e);break;default:Nn(e)}}function gi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];_e=l,IE(l,e)}NE(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Tt(8,a,a.return),gi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,gi(a));break;default:gi(a)}e=e.sibling}}function IE(e,a){for(;_e!==null;){var t=_e;switch(t.tag){case 0:case 11:case 15:Tt(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:an(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,_e=l;else e:for(t=e;_e!==null;){l=_e;var n=l.sibling,i=l.return;if(EE(l),l===t){_e=null;break e}if(n!==null){n.return=i,_e=n;break e}_e=i}}}var wR={getCacheForType:function(e){var a=Ze(Fe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Ze(Fe).controller.signal}},kR=typeof WeakMap=="function"?WeakMap:Map,Oe=0,he=null,ie=null,re=0,de=0,Ta=null,dt=!1,gl=!1,vr=!1,at=0,He=0,ft=0,jt=0,Gr=0,da=0,Ml=0,Cn=null,ra=null,Fr=!1,Mi=0,LE=0,Di=1/0,yi=null,Nt=null,ze=0,Ct=null,Dl=null,tt=0,Yr=0,Kr=null,hE=null,In=0,wr=null;function fa(){return(Oe&2)!==0&&re!==0?re&-re:m.T!==null?_r():Ks()}function mE(){if(da===0)if((re&536870912)===0||ce){var e=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),da=e}else da=536870912;return e=Ra.current,e!==null&&(e.flags|=32),da}function sa(e,a,t){(e===he&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(yl(e,0),It(e,re,da,!1)),kl(e,t),((Oe&2)===0||e!==he)&&(e===he&&((Oe&2)===0&&(jt|=t),He===4&&It(e,re,da,!1)),Ya(e))}function gE(e,a,t){if((Oe&6)!==0)throw Error(u(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||wl(e,a),n=l?WR(e,a):Vr(e,a,!0),i=l;do{if(n===0){gl&&!l&&It(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!VR(t)){n=Vr(e,a,!1),i=!1;continue}if(n===2){if(i=a,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;e:{var r=e;n=Cn;var E=r.current.memoizedState.isDehydrated;if(E&&(yl(r,o).flags|=256),o=Vr(r,o,!1),o!==2){if(vr&&!E){r.errorRecoveryDisabledLanes|=i,jt|=i,n=4;break e}i=ra,ra=n,i!==null&&(ra===null?ra=i:ra.push.apply(ra,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){yl(e,0),It(e,a,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:It(l,a,da,!dt);break e;case 2:ra=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(n=Mi+300-ua(),10<n)){if(It(l,a,da,!dt),Yn(l,0,!0)!==0)break e;tt=a,l.timeoutHandle=tA(ME.bind(null,l,t,ra,yi,Fr,a,da,jt,Ml,dt,i,"Throttled",-0,0),n);break e}ME(l,t,ra,yi,Fr,a,da,jt,Ml,dt,i,null,-0,0)}}break}while(!0);Ya(e)}function ME(e,a,t,l,n,i,o,r,E,d,h,D,N,I){if(e.timeoutHandle=-1,D=a.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ka},fE(a,i,D);var k=(i&62914560)===i?Mi-ua():(i&4194048)===i?LE-ua():0;if(k=MO(D,k),k!==null){tt=i,e.cancelPendingCommit=k(PE.bind(null,e,a,i,t,l,n,o,r,E,h,D,null,N,I)),It(e,i,o,!d);return}}PE(e,a,i,t,l,n,o,r,E)}function VR(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],i=n.getSnapshot;n=n.value;try{if(!Aa(i(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function It(e,a,t,l){a&=~Gr,a&=~jt,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var i=31-Ea(n),o=1<<i;l[i]=-1,n&=~o}t!==0&&Gs(e,t,a)}function pi(){return(Oe&6)===0?(Ln(0),!1):!0}function kr(){if(ie!==null){if(de===0)var e=ie.return;else e=ie,xa=Yt=null,lr(e),fl=null,ln=0,e=ie;for(;e!==null;)lE(e.alternate,e),e=e.return;ie=null}}function yl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,sO(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),tt=0,kr(),he=e,ie=t=za(e.current,null),re=a,de=0,Ta=null,dt=!1,gl=wl(e,a),vr=!1,Ml=da=Gr=jt=ft=He=0,ra=Cn=null,Fr=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-Ea(l),i=1<<n;a|=e[n],l&=~i}return at=a,Xn(),t}function DE(e,a){$=null,m.H=An,a===dl||a===ni?(a=zu(),de=3):a===xo?(a=zu(),de=4):de=a===Nr?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ta=a,ie===null&&(He=1,fi(e,La(a,e.current)))}function yE(){var e=Ra.current;return e===null?!0:(re&4194048)===re?Ma===null:(re&62914560)===re||(re&536870912)!==0?e===Ma:!1}function pE(){var e=m.H;return m.H=An,e===null?An:e}function HE(){var e=m.A;return m.A=wR,e}function Hi(){He=4,dt||(re&4194048)!==re&&Ra.current!==null||(gl=!0),(ft&134217727)===0&&(jt&134217727)===0||he===null||It(he,re,da,!1)}function Vr(e,a,t){var l=Oe;Oe|=2;var n=pE(),i=HE();(he!==e||re!==a)&&(yi=null,yl(e,a)),a=!1;var o=He;e:do try{if(de!==0&&ie!==null){var r=ie,E=Ta;switch(de){case 8:kr(),o=6;break e;case 3:case 2:case 9:case 6:Ra.current===null&&(a=!0);var d=de;if(de=0,Ta=null,pl(e,r,E,d),t&&gl){o=0;break e}break;default:d=de,de=0,Ta=null,pl(e,r,E,d)}}zR(),o=He;break}catch(h){DE(e,h)}while(!0);return a&&e.shellSuspendCounter++,xa=Yt=null,Oe=l,m.H=n,m.A=i,ie===null&&(he=null,re=0,Xn()),o}function zR(){for(;ie!==null;)BE(ie)}function WR(e,a){var t=Oe;Oe|=2;var l=pE(),n=HE();he!==e||re!==a?(yi=null,Di=ua()+500,yl(e,a)):gl=wl(e,a);e:do try{if(de!==0&&ie!==null){a=ie;var i=Ta;a:switch(de){case 1:de=0,Ta=null,pl(e,a,i,1);break;case 2:case 9:if(ku(i)){de=0,Ta=null,UE(a);break}a=function(){de!==2&&de!==9||he!==e||(de=7),Ya(e)},i.then(a,a);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:ku(i)?(de=0,Ta=null,UE(a)):(de=0,Ta=null,pl(e,a,i,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var r=ie;if(o?dA(o):r.stateNode.complete){de=0,Ta=null;var E=r.sibling;if(E!==null)ie=E;else{var d=r.return;d!==null?(ie=d,Bi(d)):ie=null}break a}}de=0,Ta=null,pl(e,a,i,5);break;case 6:de=0,Ta=null,pl(e,a,i,6);break;case 8:kr(),He=6;break e;default:throw Error(u(462))}}xR();break}catch(h){DE(e,h)}while(!0);return xa=Yt=null,m.H=l,m.A=n,Oe=t,ie!==null?0:(he=null,re=0,Xn(),He)}function xR(){for(;ie!==null&&!RS();)BE(ie)}function BE(e){var a=aE(e.alternate,e,at);e.memoizedProps=e.pendingProps,a===null?Bi(e):ie=a}function UE(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Zc(t,a,a.pendingProps,a.type,void 0,re);break;case 11:a=Zc(t,a,a.pendingProps,a.type.render,a.ref,re);break;case 5:lr(a);default:lE(t,a),a=ie=Hu(a,at),a=aE(t,a,at)}e.memoizedProps=e.pendingProps,a===null?Bi(e):ie=a}function pl(e,a,t,l){xa=Yt=null,lr(a),fl=null,ln=0;var n=a.return;try{if(bR(e,n,a,t,re)){He=1,fi(e,La(t,e.current)),ie=null;return}}catch(i){if(n!==null)throw ie=n,i;He=1,fi(e,La(t,e.current)),ie=null;return}a.flags&32768?(ce||l===1?e=!0:gl||(re&536870912)!==0?e=!1:(dt=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ra.current,l!==null&&l.tag===13&&(l.flags|=16384))),bE(a,e)):Bi(a)}function Bi(e){var a=e;do{if((a.flags&32768)!==0){bE(a,dt);return}e=a.return;var t=GR(a.alternate,a,at);if(t!==null){ie=t;return}if(a=a.sibling,a!==null){ie=a;return}ie=a=e}while(a!==null);He===0&&(He=5)}function bE(e,a){do{var t=FR(e.alternate,e);if(t!==null){t.flags&=32767,ie=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ie=e;return}ie=e=t}while(e!==null);He=6,ie=null}function PE(e,a,t,l,n,i,o,r,E){e.cancelPendingCommit=null;do Ui();while(ze!==0);if((Oe&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));if(i=a.lanes|a.childLanes,i|=Ho,mS(e,t,i,o,r,E),e===he&&(ie=he=null,re=0),Dl=a,Ct=e,tt=t,Yr=i,Kr=n,hE=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ZR(Pn,function(){return KE(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=m.T,m.T=null,n=Y.p,Y.p=2,o=Oe,Oe|=4;try{YR(e,a,t)}finally{Oe=o,Y.p=n,m.T=l}}ze=1,vE(),GE(),FE()}}function vE(){if(ze===1){ze=0;var e=Ct,a=Dl,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=m.T,m.T=null;var l=Y.p;Y.p=2;var n=Oe;Oe|=4;try{OE(a,e);var i=es,o=Iu(e.containerInfo),r=i.focusedElem,E=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&Cu(r.ownerDocument.documentElement,r)){if(E!==null&&go(r)){var d=E.start,h=E.end;if(h===void 0&&(h=d),"selectionStart"in r)r.selectionStart=d,r.selectionEnd=Math.min(h,r.value.length);else{var D=r.ownerDocument||document,N=D&&D.defaultView||window;if(N.getSelection){var I=N.getSelection(),k=r.textContent.length,_=Math.min(E.start,k),Ie=E.end===void 0?_:Math.min(E.end,k);!I.extend&&_>Ie&&(o=Ie,Ie=_,_=o);var R=Nu(r,_),A=Nu(r,Ie);if(R&&A&&(I.rangeCount!==1||I.anchorNode!==R.node||I.anchorOffset!==R.offset||I.focusNode!==A.node||I.focusOffset!==A.offset)){var T=D.createRange();T.setStart(R.node,R.offset),I.removeAllRanges(),_>Ie?(I.addRange(T),I.extend(A.node,A.offset)):(T.setEnd(A.node,A.offset),I.addRange(T))}}}}for(D=[],I=r;I=I.parentNode;)I.nodeType===1&&D.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<D.length;r++){var g=D[r];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Wi=!!$r,es=$r=null}finally{Oe=n,Y.p=l,m.T=t}}e.current=a,ze=2}}function GE(){if(ze===2){ze=0;var e=Ct,a=Dl,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=m.T,m.T=null;var l=Y.p;Y.p=2;var n=Oe;Oe|=4;try{cE(e,a.alternate,a)}finally{Oe=n,Y.p=l,m.T=t}}ze=3}}function FE(){if(ze===4||ze===3){ze=0,OS();var e=Ct,a=Dl,t=tt,l=hE;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ze=5:(ze=0,Dl=Ct=null,YE(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Nt=null),io(t),a=a.stateNode,ca&&typeof ca.onCommitFiberRoot=="function")try{ca.onCommitFiberRoot(Kl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=m.T,n=Y.p,Y.p=2,m.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var r=l[o];i(r.value,{componentStack:r.stack})}}finally{m.T=a,Y.p=n}}(tt&3)!==0&&Ui(),Ya(e),n=e.pendingLanes,(t&261930)!==0&&(n&42)!==0?e===wr?In++:(In=0,wr=e):In=0,Ln(0)}}function YE(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,an(a)))}function Ui(){return vE(),GE(),FE(),KE()}function KE(){if(ze!==5)return!1;var e=Ct,a=Yr;Yr=0;var t=io(tt),l=m.T,n=Y.p;try{Y.p=32>t?32:t,m.T=null,t=Kr,Kr=null;var i=Ct,o=tt;if(ze=0,Dl=Ct=null,tt=0,(Oe&6)!==0)throw Error(u(331));var r=Oe;if(Oe|=4,CE(i.current),dE(i,i.current,o,t),Oe=r,Ln(0,!1),ca&&typeof ca.onPostCommitFiberRoot=="function")try{ca.onPostCommitFiberRoot(Kl,i)}catch{}return!0}finally{Y.p=n,m.T=l,YE(e,a)}}function wE(e,a,t){a=La(t,a),a=fr(e.stateNode,a,2),e=St(e,a,2),e!==null&&(kl(e,2),Ya(e))}function fe(e,a,t){if(e.tag===3)wE(e,e,t);else for(;a!==null;){if(a.tag===3){wE(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nt===null||!Nt.has(l))){e=La(t,e),t=kc(2),l=St(a,t,2),l!==null&&(Vc(t,l,a,e),kl(l,2),Ya(l));break}}a=a.return}}function zr(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new kR;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(vr=!0,n.add(t),e=_R.bind(null,e,a,t),a.then(e,e))}function _R(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,he===e&&(re&t)===t&&(He===4||He===3&&(re&62914560)===re&&300>ua()-Mi?(Oe&2)===0&&yl(e,0):Gr|=t,Ml===re&&(Ml=0)),Ya(e)}function kE(e,a){a===0&&(a=vs()),e=vt(e,a),e!==null&&(kl(e,a),Ya(e))}function jR(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),kE(e,t)}function JR(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(a),kE(e,t)}function ZR(e,a){return ao(e,a)}var bi=null,Hl=null,Wr=!1,Pi=!1,xr=!1,Lt=0;function Ya(e){e!==Hl&&e.next===null&&(Hl===null?bi=Hl=e:Hl=Hl.next=e),Pi=!0,Wr||(Wr=!0,QR())}function Ln(e,a){if(!xr&&Pi){xr=!0;do for(var t=!1,l=bi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-Ea(42|e)+1)-1,i&=n&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,xE(l,i))}else i=re,i=Yn(l,l===he?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||wl(l,i)||(t=!0,xE(l,i));l=l.next}while(t);xr=!1}}function XR(){VE()}function VE(){Pi=Wr=!1;var e=0;Lt!==0&&rO()&&(e=Lt);for(var a=ua(),t=null,l=bi;l!==null;){var n=l.next,i=zE(l,a);i===0?(l.next=null,t===null?bi=n:t.next=n,n===null&&(Hl=t)):(t=l,(e!==0||(i&3)!==0)&&(Pi=!0)),l=n}ze!==0&&ze!==5||Ln(e),Lt!==0&&(Lt=0)}function zE(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-Ea(i),r=1<<o,E=n[o];E===-1?((r&t)===0||(r&l)!==0)&&(n[o]=hS(r,a)):E<=a&&(e.expiredLanes|=r),i&=~r}if(a=he,t=re,t=Yn(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&to(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||wl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&to(l),io(t)){case 2:case 8:t=bs;break;case 32:t=Pn;break;case 268435456:t=Ps;break;default:t=Pn}return l=WE.bind(null,e),t=ao(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&to(l),e.callbackPriority=2,e.callbackNode=null,2}function WE(e,a){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ui()&&e.callbackNode!==t)return null;var l=re;return l=Yn(e,e===he?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(gE(e,l,a),zE(e,ua()),e.callbackNode!=null&&e.callbackNode===t?WE.bind(null,e):null)}function xE(e,a){if(Ui())return null;gE(e,a,!0)}function QR(){uO(function(){(Oe&6)!==0?ao(Us,XR):VE()})}function _r(){if(Lt===0){var e=Ol;e===0&&(e=vn,vn<<=1,(vn&261888)===0&&(vn=256)),Lt=e}return Lt}function _E(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vn(""+e)}function jE(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function qR(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var i=_E((n[ta]||null).action),o=l.submitter;o&&(a=(a=o[ta]||null)?_E(a.formAction):o.getAttribute("formAction"),a!==null&&(i=a,o=null));var r=new _n("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Lt!==0){var E=o?jE(n,o):new FormData(n);Ar(t,{pending:!0,data:E,method:n.method,action:i},null,E)}}else typeof i=="function"&&(r.preventDefault(),E=o?jE(n,o):new FormData(n),Ar(t,{pending:!0,data:E,method:n.method,action:i},i,E))},currentTarget:n}]})}}for(var jr=0;jr<po.length;jr++){var Jr=po[jr],$R=Jr.toLowerCase(),eO=Jr[0].toUpperCase()+Jr.slice(1);pa($R,"on"+eO)}pa(mu,"onAnimationEnd"),pa(gu,"onAnimationIteration"),pa(Mu,"onAnimationStart"),pa("dblclick","onDoubleClick"),pa("focusin","onFocus"),pa("focusout","onBlur"),pa(TR,"onTransitionRun"),pa(dR,"onTransitionStart"),pa(fR,"onTransitionCancel"),pa(Du,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function JE(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var i=void 0;if(a)for(var o=l.length-1;0<=o;o--){var r=l[o],E=r.instance,d=r.currentTarget;if(r=r.listener,E!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=d;try{i(n)}catch(h){Zn(h)}n.currentTarget=null,i=E}else for(o=0;o<l.length;o++){if(r=l[o],E=r.instance,d=r.currentTarget,r=r.listener,E!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=d;try{i(n)}catch(h){Zn(h)}n.currentTarget=null,i=E}}}}function oe(e,a){var t=a[oo];t===void 0&&(t=a[oo]=new Set);var l=e+"__bubble";t.has(l)||(ZE(a,e,2,!1),t.add(l))}function Zr(e,a,t){var l=0;a&&(l|=4),ZE(t,e,l,a)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[vi]){e[vi]=!0,Vs.forEach(function(t){t!=="selectionchange"&&(aO.has(t)||Zr(t,!1,e),Zr(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[vi]||(a[vi]=!0,Zr("selectionchange",!1,a))}}function ZE(e,a,t,l){switch(mA(a)){case 2:var n=pO;break;case 8:n=HO;break;default:n=Es}t=n.bind(null,a,t,e),n=void 0,!Oo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Qr(e,a,t,l,n){var i=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var r=l.stateNode.containerInfo;if(r===n)break;if(o===4)for(o=l.return;o!==null;){var E=o.tag;if((E===3||E===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;r!==null;){if(o=qt(r),o===null)return;if(E=o.tag,E===5||E===6||E===26||E===27){l=i=o;continue e}r=r.parentNode}}l=l.return}eu(function(){var d=i,h=So(t),D=[];e:{var N=yu.get(e);if(N!==void 0){var I=_n,k=e;switch(e){case"keypress":if(Wn(t)===0)break e;case"keydown":case"keyup":I=JS;break;case"focusin":k="focus",I=Co;break;case"focusout":k="blur",I=Co;break;case"beforeblur":case"afterblur":I=Co;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=QS;break;case mu:case gu:case Mu:I=KS;break;case Du:I=$S;break;case"scroll":case"scrollend":I=PS;break;case"wheel":I=aR;break;case"copy":case"cut":case"paste":I=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=iu;break;case"toggle":case"beforetoggle":I=lR}var _=(a&4)!==0,Ie=!_&&(e==="scroll"||e==="scrollend"),R=_?N!==null?N+"Capture":null:N;_=[];for(var A=d,T;A!==null;){var g=A;if(T=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||T===null||R===null||(g=Wl(A,R),g!=null&&_.push(mn(A,g,T))),Ie)break;A=A.return}0<_.length&&(N=new I(N,k,null,t,h),D.push({event:N,listeners:_}))}}if((a&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",N&&t!==Ao&&(k=t.relatedTarget||t.fromElement)&&(qt(k)||k[Qt]))break e;if((I||N)&&(N=h.window===h?h:(N=h.ownerDocument)?N.defaultView||N.parentWindow:window,I?(k=t.relatedTarget||t.toElement,I=d,k=k?qt(k):null,k!==null&&(Ie=p(k),_=k.tag,k!==Ie||_!==5&&_!==27&&_!==6)&&(k=null)):(I=null,k=d),I!==k)){if(_=lu,g="onMouseLeave",R="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(_=iu,g="onPointerLeave",R="onPointerEnter",A="pointer"),Ie=I==null?N:zl(I),T=k==null?N:zl(k),N=new _(g,A+"leave",I,t,h),N.target=Ie,N.relatedTarget=T,g=null,qt(h)===d&&(_=new _(R,A+"enter",k,t,h),_.target=T,_.relatedTarget=Ie,g=_),Ie=g,I&&k)a:{for(_=tO,R=I,A=k,T=0,g=R;g;g=_(g))T++;g=0;for(var x=A;x;x=_(x))g++;for(;0<T-g;)R=_(R),T--;for(;0<g-T;)A=_(A),g--;for(;T--;){if(R===A||A!==null&&R===A.alternate){_=R;break a}R=_(R),A=_(A)}_=null}else _=null;I!==null&&XE(D,N,I,_,!1),k!==null&&Ie!==null&&XE(D,Ie,k,_,!0)}}e:{if(N=d?zl(d):window,I=N.nodeName&&N.nodeName.toLowerCase(),I==="select"||I==="input"&&N.type==="file")var Se=Su;else if(Eu(N))if(Ru)Se=SR;else{Se=ER;var V=cR}else I=N.nodeName,!I||I.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?d&&Eo(d.elementType)&&(Se=Su):Se=AR;if(Se&&(Se=Se(e,d))){Au(D,Se,t,h);break e}V&&V(e,N,d),e==="focusout"&&d&&N.type==="number"&&d.memoizedProps.value!=null&&co(N,"number",N.value)}switch(V=d?zl(d):window,e){case"focusin":(Eu(V)||V.contentEditable==="true")&&(rl=V,Mo=d,ql=null);break;case"focusout":ql=Mo=rl=null;break;case"mousedown":Do=!0;break;case"contextmenu":case"mouseup":case"dragend":Do=!1,Lu(D,t,h);break;case"selectionchange":if(OR)break;case"keydown":case"keyup":Lu(D,t,h)}var ae;if(Lo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else ol?uu(e,t)&&(se="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(se="onCompositionStart");se&&(ou&&t.locale!=="ko"&&(ol||se!=="onCompositionStart"?se==="onCompositionEnd"&&ol&&(ae=au()):(ot=h,To="value"in ot?ot.value:ot.textContent,ol=!0)),V=Gi(d,se),0<V.length&&(se=new nu(se,e,null,t,h),D.push({event:se,listeners:V}),ae?se.data=ae:(ae=cu(t),ae!==null&&(se.data=ae)))),(ae=iR?oR(e,t):rR(e,t))&&(se=Gi(d,"onBeforeInput"),0<se.length&&(V=new nu("onBeforeInput","beforeinput",null,t,h),D.push({event:V,listeners:se}),V.data=ae)),qR(D,e,d,t,h)}JE(D,a)})}function mn(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Gi(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Wl(e,t),n!=null&&l.unshift(mn(e,n,i)),n=Wl(e,a),n!=null&&l.push(mn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function tO(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function XE(e,a,t,l,n){for(var i=a._reactName,o=[];t!==null&&t!==l;){var r=t,E=r.alternate,d=r.stateNode;if(r=r.tag,E!==null&&E===l)break;r!==5&&r!==26&&r!==27||d===null||(E=d,n?(d=Wl(t,i),d!=null&&o.unshift(mn(t,d,E))):n||(d=Wl(t,i),d!=null&&o.push(mn(t,d,E)))),t=t.return}o.length!==0&&e.push({event:a,listeners:o})}var lO=/\r\n?/g,nO=/\u0000|\uFFFD/g;function QE(e){return(typeof e=="string"?e:""+e).replace(lO,`
`).replace(nO,"")}function qE(e,a){return a=QE(a),QE(e)===a}function Ce(e,a,t,l,n,i){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||ll(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&ll(e,""+l);break;case"className":wn(e,"class",l);break;case"tabIndex":wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,t,l);break;case"style":qs(e,l,i);break;case"data":if(a!=="object"){wn(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Vn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&Ce(e,a,"name",n.name,n,null),Ce(e,a,"formEncType",n.formEncType,n,null),Ce(e,a,"formMethod",n.formMethod,n,null),Ce(e,a,"formTarget",n.formTarget,n,null)):(Ce(e,a,"encType",n.encType,n,null),Ce(e,a,"method",n.method,n,null),Ce(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Vn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=ka);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Vn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Kn(e,"popover",l);break;case"xlinkActuate":wa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=US.get(t)||t,Kn(e,t,l))}}function qr(e,a,t,l,n,i){switch(t){case"style":qs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof l=="string"?ll(e,l):(typeof l=="number"||typeof l=="bigint")&&ll(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ka);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zs.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),i=e[ta]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Kn(e,t,l)}}}function Qe(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,n=!1,i;for(i in t)if(t.hasOwnProperty(i)){var o=t[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Ce(e,a,i,o,t,null)}}n&&Ce(e,a,"srcSet",t.srcSet,t,null),l&&Ce(e,a,"src",t.src,t,null);return;case"input":oe("invalid",e);var r=i=o=n=null,E=null,d=null;for(l in t)if(t.hasOwnProperty(l)){var h=t[l];if(h!=null)switch(l){case"name":n=h;break;case"type":o=h;break;case"checked":E=h;break;case"defaultChecked":d=h;break;case"value":i=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(137,a));break;default:Ce(e,a,l,h,t,null)}}Js(e,i,r,E,d,o,n,!1);return;case"select":oe("invalid",e),l=o=i=null;for(n in t)if(t.hasOwnProperty(n)&&(r=t[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":l=r;default:Ce(e,a,n,r,t,null)}a=i,t=o,e.multiple=!!l,a!=null?tl(e,!!l,a,!1):t!=null&&tl(e,!!l,t,!0);return;case"textarea":oe("invalid",e),i=n=l=null;for(o in t)if(t.hasOwnProperty(o)&&(r=t[o],r!=null))switch(o){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:Ce(e,a,o,r,t,null)}Xs(e,l,n,i);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(l=t[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ce(e,a,E,l,t,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<hn.length;l++)oe(hn[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in t)if(t.hasOwnProperty(d)&&(l=t[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Ce(e,a,d,l,t,null)}return;default:if(Eo(a)){for(h in t)t.hasOwnProperty(h)&&(l=t[h],l!==void 0&&qr(e,a,h,l,t,void 0));return}}for(r in t)t.hasOwnProperty(r)&&(l=t[r],l!=null&&Ce(e,a,r,l,t,null))}function iO(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,r=null,E=null,d=null,h=null;for(I in t){var D=t[I];if(t.hasOwnProperty(I)&&D!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":E=D;default:l.hasOwnProperty(I)||Ce(e,a,I,null,l,D)}}for(var N in l){var I=l[N];if(D=t[N],l.hasOwnProperty(N)&&(I!=null||D!=null))switch(N){case"type":i=I;break;case"name":n=I;break;case"checked":d=I;break;case"defaultChecked":h=I;break;case"value":o=I;break;case"defaultValue":r=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,a));break;default:I!==D&&Ce(e,a,N,I,l,D)}}uo(e,o,r,E,d,h,i,n);return;case"select":I=o=r=N=null;for(i in t)if(E=t[i],t.hasOwnProperty(i)&&E!=null)switch(i){case"value":break;case"multiple":I=E;default:l.hasOwnProperty(i)||Ce(e,a,i,null,l,E)}for(n in l)if(i=l[n],E=t[n],l.hasOwnProperty(n)&&(i!=null||E!=null))switch(n){case"value":N=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==E&&Ce(e,a,n,i,l,E)}a=r,t=o,l=I,N!=null?tl(e,!!t,N,!1):!!l!=!!t&&(a!=null?tl(e,!!t,a,!0):tl(e,!!t,t?[]:"",!1));return;case"textarea":I=N=null;for(r in t)if(n=t[r],t.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Ce(e,a,r,null,l,n)}for(o in l)if(n=l[o],i=t[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":N=n;break;case"defaultValue":I=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&Ce(e,a,o,n,l,i)}Zs(e,N,I);return;case"option":for(var k in t)if(N=t[k],t.hasOwnProperty(k)&&N!=null&&!l.hasOwnProperty(k))switch(k){case"selected":e.selected=!1;break;default:Ce(e,a,k,null,l,N)}for(E in l)if(N=l[E],I=t[E],l.hasOwnProperty(E)&&N!==I&&(N!=null||I!=null))switch(E){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ce(e,a,E,N,l,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in t)N=t[_],t.hasOwnProperty(_)&&N!=null&&!l.hasOwnProperty(_)&&Ce(e,a,_,null,l,N);for(d in l)if(N=l[d],I=t[d],l.hasOwnProperty(d)&&N!==I&&(N!=null||I!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,a));break;default:Ce(e,a,d,N,l,I)}return;default:if(Eo(a)){for(var Ie in t)N=t[Ie],t.hasOwnProperty(Ie)&&N!==void 0&&!l.hasOwnProperty(Ie)&&qr(e,a,Ie,void 0,l,N);for(h in l)N=l[h],I=t[h],!l.hasOwnProperty(h)||N===I||N===void 0&&I===void 0||qr(e,a,h,N,l,I);return}}for(var R in t)N=t[R],t.hasOwnProperty(R)&&N!=null&&!l.hasOwnProperty(R)&&Ce(e,a,R,null,l,N);for(D in l)N=l[D],I=t[D],!l.hasOwnProperty(D)||N===I||N==null&&I==null||Ce(e,a,D,N,l,I)}function $E(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oO(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var n=t[l],i=n.transferSize,o=n.initiatorType,r=n.duration;if(i&&r&&$E(o)){for(o=0,r=n.responseEnd,l+=1;l<t.length;l++){var E=t[l],d=E.startTime;if(d>r)break;var h=E.transferSize,D=E.initiatorType;h&&$E(D)&&(E=E.responseEnd,o+=h*(E<r?1:(r-d)/(E-d)))}if(--l,a+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $r=null,es=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function eA(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function aA(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function as(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ts=null;function rO(){var e=window.event;return e&&e.type==="popstate"?e===ts?!1:(ts=e,!0):(ts=null,!1)}var tA=typeof setTimeout=="function"?setTimeout:void 0,sO=typeof clearTimeout=="function"?clearTimeout:void 0,lA=typeof Promise=="function"?Promise:void 0,uO=typeof queueMicrotask=="function"?queueMicrotask:typeof lA<"u"?function(e){return lA.resolve(null).then(e).catch(cO)}:tA;function cO(e){setTimeout(function(){throw e})}function ht(e){return e==="head"}function nA(e,a){var t=a,l=0;do{var n=t.nextSibling;if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(n),Pl(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")gn(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,gn(t);for(var i=t.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[Vl]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=o}}else t==="body"&&gn(e.ownerDocument.body);t=n}while(t);Pl(a)}function iA(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function ls(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ls(t),ro(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function EO(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Da(e.nextSibling),e===null)break}return null}function AO(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Da(e.nextSibling),e===null))return null;return e}function oA(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Da(e.nextSibling),e===null))return null;return e}function ns(e){return e.data==="$?"||e.data==="$~"}function is(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function SO(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Da(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var os=null;function rA(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Da(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function sA(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function uA(e,a,t){switch(a=Fi(t),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function gn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ro(e)}var ya=new Map,cA=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var lt=Y.d;Y.d={f:RO,r:OO,D:TO,C:dO,L:fO,m:NO,X:IO,S:CO,M:LO};function RO(){var e=lt.f(),a=pi();return e||a}function OO(e){var a=$t(e);a!==null&&a.tag===5&&a.type==="form"?Dc(a):lt.r(e)}var Bl=typeof document>"u"?null:document;function EA(e,a,t){var l=Bl;if(l&&typeof a=="string"&&a){var n=Ca(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),cA.has(n)||(cA.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),Qe(a,"link",e),xe(a),l.head.appendChild(a)))}}function TO(e){lt.D(e),EA("dns-prefetch",e,null)}function dO(e,a){lt.C(e,a),EA("preconnect",e,a)}function fO(e,a,t){lt.L(e,a,t);var l=Bl;if(l&&e&&a){var n='link[rel="preload"][as="'+Ca(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Ca(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Ca(t.imageSizes)+'"]')):n+='[href="'+Ca(e)+'"]';var i=n;switch(a){case"style":i=Ul(e);break;case"script":i=bl(e)}ya.has(i)||(e=H({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),ya.set(i,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(Mn(i))||a==="script"&&l.querySelector(Dn(i))||(a=l.createElement("link"),Qe(a,"link",e),xe(a),l.head.appendChild(a)))}}function NO(e,a){lt.m(e,a);var t=Bl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Ca(l)+'"][href="'+Ca(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=bl(e)}if(!ya.has(i)&&(e=H({rel:"modulepreload",href:e},a),ya.set(i,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Dn(i)))return}l=t.createElement("link"),Qe(l,"link",e),xe(l),t.head.appendChild(l)}}}function CO(e,a,t){lt.S(e,a,t);var l=Bl;if(l&&e){var n=el(l).hoistableStyles,i=Ul(e);a=a||"default";var o=n.get(i);if(!o){var r={loading:0,preload:null};if(o=l.querySelector(Mn(i)))r.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":a},t),(t=ya.get(i))&&rs(e,t);var E=o=l.createElement("link");xe(E),Qe(E,"link",e),E._p=new Promise(function(d,h){E.onload=d,E.onerror=h}),E.addEventListener("load",function(){r.loading|=1}),E.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ki(o,a,l)}o={type:"stylesheet",instance:o,count:1,state:r},n.set(i,o)}}}function IO(e,a){lt.X(e,a);var t=Bl;if(t&&e){var l=el(t).hoistableScripts,n=bl(e),i=l.get(n);i||(i=t.querySelector(Dn(n)),i||(e=H({src:e,async:!0},a),(a=ya.get(n))&&ss(e,a),i=t.createElement("script"),xe(i),Qe(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function LO(e,a){lt.M(e,a);var t=Bl;if(t&&e){var l=el(t).hoistableScripts,n=bl(e),i=l.get(n);i||(i=t.querySelector(Dn(n)),i||(e=H({src:e,async:!0,type:"module"},a),(a=ya.get(n))&&ss(e,a),i=t.createElement("script"),xe(i),Qe(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function AA(e,a,t,l){var n=(n=X.current)?Yi(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Ul(t.href),t=el(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ul(t.href);var i=el(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(Mn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),ya.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ya.set(e,t),i||hO(n,e,t,o.state))),a&&l===null)throw Error(u(528,""));return o}if(a&&l!==null)throw Error(u(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=bl(t),t=el(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ul(e){return'href="'+Ca(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function SA(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function hO(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Qe(a,"link",t),xe(a),e.head.appendChild(a))}function bl(e){return'[src="'+Ca(e)+'"]'}function Dn(e){return"script[async]"+e}function RA(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+Ca(t.href)+'"]');if(l)return a.instance=l,xe(l),l;var n=H({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xe(l),Qe(l,"style",n),Ki(l,t.precedence,e),a.instance=l;case"stylesheet":n=Ul(t.href);var i=e.querySelector(Mn(n));if(i)return a.state.loading|=4,a.instance=i,xe(i),i;l=SA(t),(n=ya.get(n))&&rs(l,n),i=(e.ownerDocument||e).createElement("link"),xe(i);var o=i;return o._p=new Promise(function(r,E){o.onload=r,o.onerror=E}),Qe(i,"link",l),a.state.loading|=4,Ki(i,t.precedence,e),a.instance=i;case"script":return i=bl(t.src),(n=e.querySelector(Dn(i)))?(a.instance=n,xe(n),n):(l=t,(n=ya.get(i))&&(l=H({},t),ss(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),xe(n),Qe(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Ki(l,t.precedence,e));return a.instance}function Ki(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var r=l[o];if(r.dataset.precedence===a)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function rs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ss(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var wi=null;function OA(e,a,t){if(wi===null){var l=new Map,n=wi=new Map;n.set(t,l)}else n=wi,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var i=t[n];if(!(i[Vl]||i[je]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(a)||"";o=e+o;var r=l.get(o);r?r.push(i):l.set(o,[i])}}return l}function TA(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function mO(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function dA(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gO(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Ul(l.href),i=a.querySelector(Mn(n));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ki.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,xe(i);return}i=a.ownerDocument||a,l=SA(l),(n=ya.get(n))&&rs(l,n),i=i.createElement("link"),xe(i);var o=i;o._p=new Promise(function(r,E){o.onload=r,o.onerror=E}),Qe(i,"link",l),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ki.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var us=0;function MO(e,a){return e.stylesheets&&e.count===0&&zi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&zi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&us===0&&(us=62500*oO());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>us?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vi=null;function zi(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vi=new Map,a.forEach(DO,e),Vi=null,ki.call(e))}function DO(e,a){if(!(a.state.loading&4)){var t=Vi.get(e);if(t)var l=t.get(null);else{t=new Map,Vi.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),l=o)}l&&t.set(null,l)}n=a.instance,o=n.getAttribute("data-precedence"),i=t.get(o)||l,i===l&&t.set(null,n),t.set(o,n),this.count++,l=ki.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var yn={$$typeof:te,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function yO(e,a,t,l,n,i,o,r,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function fA(e,a,t,l,n,i,o,r,E,d,h,D){return e=new yO(e,a,t,o,E,d,h,D,r),a=1,i===!0&&(a|=24),i=Sa(3,null,null,a),e.current=i,i.stateNode=e,a=Vo(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:l,isDehydrated:t,cache:a},_o(i),e}function NA(e){return e?(e=cl,e):cl}function CA(e,a,t,l,n,i){n=NA(n),l.context===null?l.context=n:l.pendingContext=n,l=At(a),l.payload={element:t},i=i===void 0?null:i,i!==null&&(l.callback=i),t=St(e,l,a),t!==null&&(sa(t,e,a),on(t,e,a))}function IA(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function cs(e,a){IA(e,a),(e=e.alternate)&&IA(e,a)}function LA(e){if(e.tag===13||e.tag===31){var a=vt(e,67108864);a!==null&&sa(a,e,67108864),cs(e,67108864)}}function hA(e){if(e.tag===13||e.tag===31){var a=fa();a=no(a);var t=vt(e,a);t!==null&&sa(t,e,a),cs(e,a)}}var Wi=!0;function pO(e,a,t,l){var n=m.T;m.T=null;var i=Y.p;try{Y.p=2,Es(e,a,t,l)}finally{Y.p=i,m.T=n}}function HO(e,a,t,l){var n=m.T;m.T=null;var i=Y.p;try{Y.p=8,Es(e,a,t,l)}finally{Y.p=i,m.T=n}}function Es(e,a,t,l){if(Wi){var n=As(l);if(n===null)Qr(e,a,l,xi,t),gA(e,l);else if(UO(n,e,a,t,l))l.stopPropagation();else if(gA(e,l),a&4&&-1<BO.indexOf(e)){for(;n!==null;){var i=$t(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ht(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var E=1<<31-Ea(o);r.entanglements[1]|=E,o&=~E}Ya(i),(Oe&6)===0&&(Di=ua()+500,Ln(0))}}break;case 31:case 13:r=vt(i,2),r!==null&&sa(r,i,2),pi(),cs(i,2)}if(i=As(l),i===null&&Qr(e,a,l,xi,t),i===n)break;n=i}n!==null&&l.stopPropagation()}else Qr(e,a,l,null,t)}}function As(e){return e=So(e),Ss(e)}var xi=null;function Ss(e){if(xi=null,e=qt(e),e!==null){var a=p(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=B(a),e!==null)return e;e=null}else if(t===31){if(e=P(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return xi=e,null}function mA(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(TS()){case Us:return 2;case bs:return 8;case Pn:case dS:return 32;case Ps:return 268435456;default:return 32}default:return 32}}var Rs=!1,mt=null,gt=null,Mt=null,pn=new Map,Hn=new Map,Dt=[],BO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gA(e,a){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":pn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(a.pointerId)}}function Bn(e,a,t,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},a!==null&&(a=$t(a),a!==null&&LA(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function UO(e,a,t,l,n){switch(a){case"focusin":return mt=Bn(mt,e,a,t,l,n),!0;case"dragenter":return gt=Bn(gt,e,a,t,l,n),!0;case"mouseover":return Mt=Bn(Mt,e,a,t,l,n),!0;case"pointerover":var i=n.pointerId;return pn.set(i,Bn(pn.get(i)||null,e,a,t,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Hn.set(i,Bn(Hn.get(i)||null,e,a,t,l,n)),!0}return!1}function MA(e){var a=qt(e.target);if(a!==null){var t=p(a);if(t!==null){if(a=t.tag,a===13){if(a=B(t),a!==null){e.blockedOn=a,ws(e.priority,function(){hA(t)});return}}else if(a===31){if(a=P(t),a!==null){e.blockedOn=a,ws(e.priority,function(){hA(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=As(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ao=l,t.target.dispatchEvent(l),Ao=null}else return a=$t(t),a!==null&&LA(a),e.blockedOn=t,!1;a.shift()}return!0}function DA(e,a,t){_i(e)&&t.delete(a)}function bO(){Rs=!1,mt!==null&&_i(mt)&&(mt=null),gt!==null&&_i(gt)&&(gt=null),Mt!==null&&_i(Mt)&&(Mt=null),pn.forEach(DA),Hn.forEach(DA)}function ji(e,a){e.blockedOn===a&&(e.blockedOn=null,Rs||(Rs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,bO)))}var Ji=null;function yA(e){Ji!==e&&(Ji=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(Ss(l||t)===null)continue;break}var i=$t(t);i!==null&&(e.splice(a,3),a-=3,Ar(i,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function Pl(e){function a(E){return ji(E,e)}mt!==null&&ji(mt,e),gt!==null&&ji(gt,e),Mt!==null&&ji(Mt,e),pn.forEach(a),Hn.forEach(a);for(var t=0;t<Dt.length;t++){var l=Dt[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Dt.length&&(t=Dt[0],t.blockedOn===null);)MA(t),t.blockedOn===null&&Dt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],i=t[l+1],o=n[ta]||null;if(typeof i=="function")o||yA(t);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[ta]||null)r=o.formAction;else if(Ss(n)!==null)continue}else r=o.action;typeof r=="function"?t[l+1]=r:(t.splice(l,3),l-=3),yA(t)}}}function pA(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function Os(e){this._internalRoot=e}Zi.prototype.render=Os.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var t=a.current,l=fa();CA(t,l,e,a,null,null)},Zi.prototype.unmount=Os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;CA(e.current,2,null,e,null,null),pi(),a[Qt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ks();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Dt.length&&a!==0&&a<Dt[t].priority;t++);Dt.splice(t,0,e),t===0&&MA(e)}};var HA=c.version;if(HA!=="19.2.3")throw Error(u(527,HA,"19.2.3"));Y.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=C(a),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var PO={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:m,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Kl=Xi.inject(PO),ca=Xi}catch{}}return bn.createRoot=function(e,a){if(!L(e))throw Error(u(299));var t=!1,l="",n=Fc,i=Yc,o=Kc;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=fA(e,1,!1,null,null,t,l,null,n,i,o,pA),e[Qt]=a.current,Xr(e),new Os(a)},bn.hydrateRoot=function(e,a,t){if(!L(e))throw Error(u(299));var l=!1,n="",i=Fc,o=Yc,r=Kc,E=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),a=fA(e,1,!0,a,t??null,l,n,E,i,o,r,pA),a.context=NA(null),t=a.current,l=fa(),l=no(l),n=At(l),n.callback=null,St(t,n,l),t=l,a.current.lanes=t,kl(a,t),Ya(a),e[Qt]=a.current,Xr(e),new Zi(a)},bn.version="19.2.3",bn}var wA;function WO(){if(wA)return fs.exports;wA=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),fs.exports=zO(),fs.exports}var xO=WO();const _O=tS(xO),jO="modulepreload",JO=function(s){return"/"+s},kA={},Jt=function(c,O,u){let L=Promise.resolve();if(O&&O.length>0){let B=function(C){return Promise.all(C.map(v=>Promise.resolve(v).then(H=>({status:"fulfilled",value:H}),H=>({status:"rejected",reason:H}))))};document.getElementsByTagName("link");const P=document.querySelector("meta[property=csp-nonce]"),y=(P==null?void 0:P.nonce)||(P==null?void 0:P.getAttribute("nonce"));L=B(O.map(C=>{if(C=JO(C),C in kA)return;kA[C]=!0;const v=C.endsWith(".css"),H=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${H}`))return;const U=document.createElement("link");if(U.rel=v?"stylesheet":jO,v||(U.as="script"),U.crossOrigin="",U.href=C,y&&U.setAttribute("nonce",y),document.head.appendChild(U),v)return new Promise((W,q)=>{U.addEventListener("load",W),U.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${C}`)))})}))}function p(B){const P=new Event("vite:preloadError",{cancelable:!0});if(P.payload=B,window.dispatchEvent(P),!P.defaultPrevented)throw B}return L.then(B=>{for(const P of B||[])P.status==="rejected"&&p(P.reason);return c().catch(p)})};var w=(s=>(s.MENU="MENU",s.CLASSIC="CLASSIC",s.LEVEL_2_FILTER="LEVEL_2_FILTER",s.LEVEL_3_INFINITE="LEVEL_3_INFINITE",s.LEVEL_4_THEMED="LEVEL_4_THEMED",s.LEVEL_EMOJI="LEVEL_EMOJI",s.LEVEL_5_GROUP="LEVEL_5_GROUP",s.LEVEL_SYNONYMS="LEVEL_SYNONYMS",s.LEVEL_RHYMES="LEVEL_RHYMES",s.SPEED_ROUND="SPEED_ROUND",s.LEVEL_TRANSLATION="LEVEL_TRANSLATION",s))(w||{});const PT=["animate-fade-out","animate-scale-out-subtle","animate-zoom-out"],VA={"bg-neon-red":"#FF073A","bg-neon-orange":"#FF6A00","bg-neon-hot-orange":"#FF2A00","bg-neon-gold":"#FFD400","bg-neon-yellow":"#F9FF00","bg-neon-lime":"#39FF14","bg-neon-green":"#00FF66","bg-neon-mint":"#7CFFDA","bg-neon-teal":"#00FFC3","bg-neon-aqua":"#00FFF6","bg-neon-sky-blue":"#33FFFF","bg-neon-blue":"#00E5FF","bg-neon-violet":"#9B00FF","bg-neon-purple":"#D400FF","bg-neon-lavender":"#C87CFF","bg-neon-magenta":"#FF00FF","bg-neon-pink":"#FF1FBF","bg-neon-rose":"#FF4DA6","bg-zinc-800":"#27272a","bg-black":"#000000"},vT=s=>{if(!s)return"#ffffff";const c=s.split(" ");for(const O of c)if(VA[O])return VA[O];return"#ffffff"},GT=[{name:"Spectrum",gradient:"bg-black",solvedColors:["bg-neon-red border-white","bg-neon-hot-orange border-white","bg-neon-orange border-white","bg-neon-gold border-white","bg-neon-yellow border-white","bg-neon-lime border-white","bg-neon-green border-white","bg-neon-teal border-white","bg-neon-aqua border-white","bg-neon-sky-blue border-white","bg-neon-blue border-white","bg-neon-violet border-white","bg-neon-purple border-white","bg-neon-magenta border-white","bg-neon-pink border-white","bg-neon-rose border-white"]},{name:"Cool Breeze",gradient:"bg-zinc-900",solvedColors:["bg-neon-lime border-white","bg-neon-green border-white","bg-neon-mint border-white","bg-neon-teal border-white","bg-neon-aqua border-white","bg-neon-sky-blue border-white","bg-neon-blue border-white","bg-neon-violet border-white","bg-neon-purple border-white"]},{name:"Warm Sunset",gradient:"bg-zinc-900",solvedColors:["bg-neon-magenta border-white","bg-neon-pink border-white","bg-neon-rose border-white","bg-neon-red border-white","bg-neon-hot-orange border-white","bg-neon-orange border-white","bg-neon-gold border-white","bg-neon-yellow border-white"]},{name:"Synthwave",gradient:"bg-black",solvedColors:["bg-neon-aqua border-white","bg-neon-sky-blue border-white","bg-neon-blue border-white","bg-neon-violet border-white","bg-neon-purple border-white","bg-neon-magenta border-white","bg-neon-pink border-white","bg-neon-rose border-white"]}],ZO=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
1,Amphibians,bullfrog,newt,glass frog,salamander,spadefoot,toad
2,Animals,antelope,badger,bear,beaver,bison,boar,cheetah,chimpanzee,cougar,deer,fox,gorilla,jaguar,leopard,lion,moose,otter,raccoon,tiger,weasel
3,Astronomy,asteroid,black hole,comet,eclipse,equinox,galaxy,meteor,nebula,orbit,planet,pulsar,quasar,satellite,solstice,star,supernova
4,Bears,andean bear,asian black bear,black bear,brown bear,grizzly,kodiak,malayan sun bear,panda,polar bear,sloth bear,spectacled bear,sun bear
5,Big Cats,caracal,cheetah,cougar,jaguar,leopard,lion,lynx,puma,snow leopard,tiger
6,Breads,bagel,baguette,brioche,chapati,ciabatta,focaccia,injera,lavash,naan,panettone,pita,pretzel,sourdough,tortilla,arepa,paratha,piadina,roti,cornbread,damper,rye
7,Canines,akita,basenji,beagle,boxer,bulldog,chihuahua,collie,corgi,coyote,dachshund,dingo,fox,german shepherd,great dane,greyhound,jackal,malamute,maned wolf,pembroke,pomeranian,poodle,pug,retriever,shiba inu
8,Cheeses Hard,asiago,cheddar,comte,edam,emmental,gouda,gruyere,manchego,parmesan,pecorino,provolone,taleggio
9,Cheeses Soft,camembert,gorgonzola,reblochon,ricotta,roquefort,stilton
10,Cities,bogota,chicago,lima,los angeles,new york,rio,santiago,sao paulo,toronto,bangkok,beijing,delhi,hanoi,jakarta,karachi,kuala lumpur,manila,seoul,singapore,taipei,tokyo,amsterdam,berlin,brussels,copenhagen,helsinki,london,madrid,paris,prague,rome,vienna
11,Clothing,bell bottoms,bra,coat,dress,gloves,hat,hoodie,jacket,jeans,leggings,pantyhose,scarf,shirt,skirt,socks,tank top,underwear,vest
12,Cold Desserts,banana split,fruit salad,fudge,jelly,popsicle,sundae
13,COMMON PETS,cat,dog,fish,hamster,parrot,rabbit
14,Computer File Formats,gif,json,png,pptx,xlsx,xml
15,Deer Family,caribou,chital,elk,fallow,moose,mule deer,muntjac,red deer,reindeer,roe deer,sika,white-tailed deer
16,Drinks Cold,cola,frappe,ginger ale,iced coffee,iced tea,lemonade,milkshake,seltzer,smoothie,soda,tonic,agua fresca
17,Elements Halogens,fluorine,chlorine,bromine,iodine,astatine,tennessine
18,Elements Noble Gases,helium,neon,argon,krypton,xenon,radon,oganesson
19,Finance,bond,cpi,debt,deflation,derivative,dividend,equity,future,gdp,inflation,interest,option,ppi,recession,stock,swap
20,Fish,anchovy,bass,carp,cod,halibut,herring,mackerel,perch,pike,salmon,sardine,sole,sturgeon,swordfish,tilapia,trout,tuna
21,Flightless Birds,cassowary,emu,great auk,kakapo,kiwi,moorhen,ostrich,penguin,rail,rhea,takahe,weka
22,Freshwater Fish,bass,bream,carp,catfish,perch,pike,roach,salmon,sturgeon,tench,tilapia,trout
23,Geography Deserts,arabian,atacama,chihuahuan,gobi,mojave,patagonian
24,Geography Islands,borneo,hispaniola,kyushu,madagascar,newfoundland,sumatra
25,Geography Oceans,arctic,atlantic,bay,channel,gulf,indian,pacific,ridge,sea,southern,strait,trench
26,Geography Rivers,amazon,danube,euphrates,ganges,indus,mekong,nile,rhine,thames,volga
27,Geology,agate,basalt,diamond,emerald,granite,jade,limestone,marble,obsidian,opal,quartz,ruby,sandstone,sapphire,shale,slate
28,Herbs Fresh,bay,catnip,chervil,chives,cilantro,curry leaf,hyssop,lemon balm,lemongrass,lovage,mint,sorrel,verbena,basil,chive,dill,fennel,marjoram,oregano,parsley,rosemary,sage,savory,tarragon,thyme
29,Hot Drinks,americano,cappuccino,chai,cocoa,latte,matcha,mocha,oolong,tea
30,Butterflies,admiral,blue,comma,fritillary,hairstreak,monarch,morpho,painted lady,ringlet,sulphur,swallowtail
31,Kitchen Tools,cleaver,colander,fork,grater,knife,peeler,spatula,spoon,tongs
32,Legal,affidavit,appeal,contract,counsel,deposition,hearing,injunction,judge,jury,precedent,statute,subpoena,verdict
33,Math,algebra,calculus,trigonometry,geometry,graph theory,logic,number theory,probability,set theory,statistics,topology
34,Medical,allergy,antibiotic,bacteria,diagnosis,fracture,imaging,prognosis,surgery,symptom,therapy,tumor,vaccine,virus
35,MOBILE GAMES,among us,angry birds,candy crush,clash of clans,fortnite,pokemon go
36,MOVIE VILLAINS,agent smith,darth vader,hannibal lecter,joker,thanos,voldemort
37,Olympic,archery,athletics,diving,fencing,gymnastics,judo,rowing,sailing,shooting,swimming,taekwondo,wrestling
38,Raptors,buzzard,eagle,harrier,hawk,kite,merlin
39,Reptiles,alligator,anole,boa,chameleon,cobra,crocodile,gecko,iguana,lizard,python,skink,snake,terrapin,tortoise,turtle,viper,basilisk,gila monster,monitor,whiptail
40,Seabirds,albatross,auk,booby,cormorant,frigatebird,gannet,gull,pelican,petrel,puffin,shearwater,tern
41,Shapes Polygons,dodecagon,heptagon,hexagon,nonagon,octagon,triangle,rhombus,trapezoid
42,Sharks,basking shark,blue shark,bull shark,goblin shark,great white,hammerhead,lemon shark,mako,nurse shark,reef shark,tiger shark,whale shark
43,SOCIAL MEDIA INFLUENCERS,addison rae,charli d'amelio,david dobrik,mrbeast,pewdiepie,zach king
44,Spices Savory,anise,caraway,coriander,cumin,dill seed,fenugreek,mustard,paprika,peppercorn,saffron,sumac,turmeric
45,Spices Warm,allspice,cardamom,cinnamon,clove,galangal,ginger,grains of paradise,long pepper,mace,star anise
46,Time & Date,april,calendar,clock,december,dst,july,june,march,may,minute,monday,november,october,pst,saturday,second,september,solstice,thursday,tuesday,utc
47,TV SHOWS OF THE 2000S,breaking bad,game of thrones,lost,mad men,the office,the sopranos
48,TV SHOWS OF THE 90S,buffy,frasier,friends,seinfeld,the simpsons,the x-files
49,Vegetables Leafy,arugula,bok choy,cabbage,chard,collards,endive,kale,lettuce,mizuna,mustard greens,romaine
50,Vegetables Roots,carrot,cassava,ginger,parsnip,radish,rutabaga,salsify,taro,turmeric,turnip,yam
51,Watercraft,barge,boat,canoe,catamaran,dinghy,ferry,gondola,kayak,sailboat,ship,submarine,yacht
52,Art Styles,abstract,baroque,cubism,dadaism,expression,futurism,impression,minimalism,neoclassic,pop art,realism,renaissance,rococo,surrealism,symbolism
53,Writing Genres,adventure,biography,comedy,crime,dystopian,essay,fantasy,fiction,folklore,historical,horror,memoir,mystery,non fiction,poetry,romance,satire,sci-fi,thriller,tragedy
54,Units of Time,century,day,decade,fortnight,hour,microsecond,millennium,millisecond,minute,month,nanosecond,second,week,year
55,Units of Measurement,acre,ampere,candela,centimeter,cup,foot,gallon,gram,hertz,inch,joule,kelvin,kilogram,liter,lumen,meter,mile,mole,newton,ohm,ounce,pascal,pint,pound,quart,tablespoon,teaspoon,ton,volt,watt,yard
56,Musical Scales,acoustic,blues,chromatic,diatonic,double harmonic,enigmatic,harmonic minor,major,melodic minor,minor,pentatonic,whole tone
57,Feelings and Emotions,admiration,adoration,affection,agony,alarm,amazement,amusement,anger,annoyance,anxiety,apathy,apprehension,astonishment,attraction,awe,bitterness,bliss,boredom,calmness,compassion,confidence,confusion,contempt,contentment,courage,curiosity,cynicism,delight,depression,desire,despair,determination,disappointment,disgust,dread,ecstasy,elation,embarrassment,empathy,enthusiasm,envy,euphoria,excitement,fear,frustration,gratitude,grief,guilt,happiness,hatred,hope,horror,hostility,humiliation,hurt,hysteria,indifference,interest,irritation,isolation,jealousy,joy,loneliness,love,lust,melancholy,misery,nervousness,nostalgia,optimism,panic,paranoia,passion,pessimism,pity,pleasure,pride,rage,regret,rejection,relief,remorse,resentment,sadness,satisfaction,scorn,security,self-confidence,shame,shock,shyness,skepticism,sociability,sorrow,spite,stress,surprise,sympathy,tenderness,terror,trust,uneasiness,unhappiness,vanity,wariness,wonder,worry,zeal
58,Habitats,arctic,badlands,boreal forest,canyon,cave,chaparral,cloud forest,coast,coniferous forest,coral reef,deciduous forest,delta,desert,dune,estuary,everglades,fen,field,forest,freshwater,glacier,grassland,heath,high altitude,hydrothermal vent,ice shelf,intertidal,island,jungle,kelp forest,lagoon,lake,mangrove,marine,marsh,meadow,montane,moor,mudflat,ocean,pampas,peat bog,plain,polar,pond,prairie,rainforest,river,salt marsh,sand dune,savanna,scrubland,sea,seafloor,shore,steppe,swamp,taiga,temperate forest,tidal pool,tropical,tundra,urban,valley,volcano,wetland,woodland
59,Household Rooms,kitchen,living room,bedroom,bathroom,garage,attic,basement,dining room,office,laundry room
60,Popular Sports,baseball,basketball,football,soccer,tennis,golf,hockey,boxing,swimming,running
61,Vehicles,car,truck,bicycle,airplane,boat,bus,train
62,Mammals,dog,cat,horse,elephant,lion,tiger,bear
63,Kitchen,knife,fork,spoon,plate,cup,pot,pan
64,Occupations,teacher,doctor,engineer,artist,chef,nurse,driver
65,Wildlife,bird,fish,frog,turtle,snake,deer,rabbit
66,Plants,tree,flower,grass,bush,fern,moss,cactus
67,Foods,bread,cheese,milk,butter,rice,chicken,apple
68,Body,head,arm,leg,ear,eye,hand,foot
69,Historical Eras,neolithic,medieval,renaissance,victorian,modern,ancient,industrial
70,Achievements,invention,discovery,exploration,writing,building,art,science
71,Daily Activities,eating,sleeping,dressing,walking,talking,reading,working
72,Anatomy,accountable,heart,lungs,stomach,liver,muscle,bone
73,Social Media,Facebook,Instagram,Twitter,LinkedIn,TikTok,Snapchat,Pinterest
74,Tennis Surfaces,clay,grass,hard court,carpet,indoor,outdoor,green clay,red clay,artificial turf
75,Basketball Strategies,zone defense,pick and roll,isolation,fast break,box out,double team,full court press,backdoor cut,screen
76,Soccer Leagues,premier league,la liga,serie a,bundesliga,ligue 1,mls,eredivisie,champions league,fa cup
77,NFL Terms,hail mary,blitz,field goal,safety,interception,touchback,end zone,offside,fumble
78,Olympic Athletes,usain bolt,michael phelps,simone biles,serena williams,muhammad ali,mark spitz,carl lewis,allyson felix,kristi yamaguchi
79,Basketball Players,lebron james,stephen curry,kevin durant,kawhi leonard,anthony davis,james harden,russell westbrook,derrick rose,dwyane wade
80,Football Coaches,bill belichick,andy reid,sean payton,nick saban,pete carroll,bruce arians,tom landry,vince lombardi,bill walsh
81,Tennis Players,roger federer,rafael nadal,serena williams,venus williams,novak djokovic,pete sampras,chris evert,andre agassi,martina navratilova
82,Hockey Players,wayne gretzky,mario lemieux,bobby orr,mark messier,patrick roy,jaromir jagr,steve yzerman,martin brodeur
83,Baseball Teams,yankees,red sox,dodgers,cubs,mets,giants,cardinals,blue jays,phillies
84,Soccer World Cup,brazil,germany,argentina,france,italy,spain,england,uruguay,netherlands
85,NFL Events,super bowl,conference championship,divisional playoff,wild card,pro bowl,regular season,preseason,draft,training camp
86,Olympic Venues,stadium,arena,pool,track field,gymnasium,velodrome,ice rink,marathon course,boxing ring
87,Building Toys,lego,blocks,bricks,duplo,magnet blocks,keva planks,kinetics
88,Action Figures,barbie,gi joe,transformers,ninja turtles,power rangers,action man,mega bloks
89,Classic Toys,yo-yo,marbles,top,jack in the box,hula hoop,spinning top,slinky
90,Outdoor Toys,kite,scooter,frisbee,bike,ball,jump rope,hula hoop
91,Dolls,barbie,american girl,baby doll,bratz,monster high,cabbage patch,dollhouse
92,Electronic Toys,tamagotchi,furby,robot,game boy,walkie talkie,rc car,scratch cat
93,Creative Toys,play doh,coloring book,crayons,model clay,puzzle paints,sticker book,chalk
94,Puzzles,jigsaw,puzzle,rubik,crossword,sudoku,logic puzzle,tangram,word search
95,Building Sets,lego,meccano,k'nex,erector set,lincoln logs,tinker toy,magformers
96,Plush Toys,teddy bear,stuffed rabbit,bean bag plush,plush dog,plush cat,plush dinosaur,plush elephant
97,Educational Toys,abacus,globe,math blocks,alphabet blocks,science kit,magnifying glass,microscope toy
98,Water Toys,water gun,water balloon,pool float,snorkel,goggles,swim ring,beach ball
99,Outdoor Games,soccer ball,baseball,basketball,horse shoes,tag,jump rope,relay baton
100,Stuffed Animals,teddy bear,plush dog,stuffed cat,plush elephant,stuffed lion,stuffed monkey,stuffed rabbit
101,Creative Kits,paint set,sticker book,crafting kit,coloring book,model kit,finger paints,origami set
102,Electronic Games,game boy,tamagotchi,handheld electronic,portable console,furby,rc car,electronic pet
103,Classic Games,chess,checkers,backgammon,scrabble,dominoes,parcheesi,go
104,Action Toys,gunny,action figure,transformer,robot,power ranger,hero figure,ninja doll
105,Constructive Toys,meccano,lincoln logs,k'nex,erector set,magnetic tiles,tinker toy,building blocks
106,Playsets,dollhouse,garage,treehouse,kitchen set,farm set,train set,castle
107,Outdoor Play,scooter,tricycle,kite,frisbee,ball,jump rope,hula hoop
108,Toy Vehicles,hot wheels,matchbox,die cast car,rc car,toy train,toy plane,toy boat
109,Building Kits,lego,magnet blocks,tinker toy,meccano,erector set,k'nex,duplo
110,Soft Toys,teddy bear,stuffed bunny,plush dog,bean bag plush,stuffed cat,plush elephant,stuffed lion
111,Classics,yo-yo,marbles,jack in the box,hula hoop,spinning top,slinky,tiddlywinks
112,Games,monopoly,clue,risk,scrabble,chess,checkers,sorry
113,Sports Toys,soccer ball,basketball,baseball,football,tennis ball,frisbee,jump rope
114,Fast Food Pizzerias,Domino's,Pizza Hut,Little Caesars,California Pizza Kitchen,Papa John's,Marco's Pizza,Round Table
115,Fruit Juice Brands,Tropicana,Minute Maid,Ocean Spray,V8,Mott's,Welch's,Clamato
116,Sauces and Condiments,Heinz,Kraft,Bull's Eye,Tony Chachere's,Duke's,French's,Tabasco
117,Breakfast Cereals,Cheerios,Raisin Bran,Frosted Flakes,Kellogg's,Oats,Quaker,Rice Krispies
118,Chocolate Brands,Hershey's,Mars,Lindt,Ghirardelli,Nestle,Godiva,Thorntons
119,Dairy Product Brands,Dean's,Dannon,Blue Bell,Land O'Lakes,Yoplait,Chobani,Breakstone's
120,Ice Cream Brands,Breyers,Ben & Jerry's,Haagen Dazs,Cold Stone,Talenti,Dreyer's,Blue Bell
121,Candy Brands,M&M's,Skittles,Reese's,Snickers,Kit Kat,Twix,Milky Way
122,Soft Drink Companies,Mountain Dew,Coca Cola,Fanta,Pepsi,Snapple,7 Up,Dr Pepper
123,Sears Brands,Kenmore,Craftsman,DieHard,Silvertone,Coldspot,Homart,Allstate
124,Bankrupt Tech,Compaq,Netscape,Sun Microsystems,Nortel,Polaroid,Blockbuster,BeBox
125,Old Soft Drinks,Tab,Crystal Pepsi,Santas Own,Orbitz,OK Soda,Pepsi Blue,Fresca
126,Defunct Toy Lines,Micronauts,SilverHawks,He-Man,Tiger Electronics,G.I. Joe,Zoids,Shogun Warriors
127,Faded Tech Companies,Nortel,Sun Microsystems,Compaq,Netscape,BeBox,Blackberry,WebTV
128,Magic,Spell,Wand,Potion,Charm,Enchantment,Wizard,Sorcerer
129,Knights,Sword,Shield,Armor,Horse,Castle,Quest,Joust
130,Fairies,Wings,Dust,Forest,Tiny,Magic,Flutter,Enchanted
131,Elves,Forest,Bow,Agile,Pointed Ears,Archery,Grace,Immortal
132,Dark Lords,Power,Shadow,Evil,Minions,Dungeon,Curse,Throne
133,Wizardry,Staff,Spellbook,Robe,Incantation,Mystic,Alchemist,Talisman
134,Quests,Journey,Treasure,Map,Battle,Companion,Victory,Challenge
135,Fantasy Races,Elf,Dwarf,Orc,Troll,Hobbit,Giant,Gnome
136,Magical Items,Amulet,Crystal,Scroll,Ring,Pendant,Cloak,Orb
137,Beasts,Lion,Dragon,Wolf,Horse,Bear,Falcon,Serpent
138,Castles,Tower,Moat,Kingdom,Drawbridge,Dungeon,Throne Room,Keep
139,Spells,Fireball,Frost,Healing,Shield,Summon,Invisibility,Teleport
140,Potions,Healing,Mana,Invisibility,Strength,Speed,Poison,Elixir
141,Mermaids,Sea,Ocean,Scale,Tail,Siren,Coral,Trident
142,Magic Creatures,Phoenix,Unicorn,Sprite,Griffin,Troll,Cyclops,Wisp
143,Enchanted Forest,Tree,Fairy,Mushroom,Stream,Elf,Magic,Shadow
144,Sorcery,Spell,Wand,Book,Altar,Rune,Curse,Hex
145,Medieval Weapons,Sword,Bow,Axe,Spear,Dagger,Crossbow,Mace
146,Fantasy Lands,Kingdom,Castle,Village,Mountain,Forest,Swamp,Desert
147,Wizards,Gandalf,Merlin,Mage,Sorcerer,Wizard,Spellcaster,Alchemist
148,Artifacts,Amulet,Chalice,Ring,Crown,Scepter,Scroll,Talisman
149,Creatures,Ogre,Troll,Giant,Dragon,Werewolf,Vampire,Zombie
150,Adventure,Journey,Quest,Map,Companion,Challenge,Treasure
151,Fables,Myth,Moral,Legend,Fairy Tale,Hero,Narrative,Mythology
152,Dark Magic,Curse,Necromancer,Shadow,Vampire,Demon,Hex,Sorcery
153,Magical Schools,Hogwarts,Academy,Class,Magic,Spell,Teacher,Student
154,Fantasy Weapons,Sword,Staff,Bow,Arrow,Axe,Dagger,Mace
155,Elven Kingdoms,Elf,Forest,Archery,Lore,Magic,Agility,Clan
156,Dwarves,Mining,Mountain,Beard,Axe,Forge,Stout,Helmet
157,Goblins,Cave,Trick,Hide,Greedy,Small,Dark,Mischief
158,Dragons,Scale,Fire,Talon,Wing,Legend,Ancient,Fierce
159,Heroes,Brave,Strong,Leader,Quest,Victory,Honor,Courage
160,Magical Creatures,Unicorn,Phoenix,Griffin,Mermaid,Centaur,Hydra,Sprite
161,Dark Forces,Witch,Warlock,Demon,Curse,Shadow,Vampire,Necromancer
162,Star Trek,Enterprise,Klingon,Spock,Vulcan,Phaser,Transporter,Federation,Warp,Captain
163,Doctor Who,Time Lord,TARDIS,Dalek,Sonic Screwdriver,Rose,Companion,Gallifrey,Cyberman,Regeneration
164,Blade Runner,Replicant,Deckard,Rain,Los Angeles,Flying Car,Voight Kampff,Tyrell Corporation,Android
165,Marvel Universe,Spider Man,Iron Man,Thor,Hulk,Avengers,Shield,Wakanda,Asgard,Vibranium
166,Futurama,Planet Express,Fry,Leela,Bender,Zapp Brannigan,Robot,Headplanet,New New York,Professor Farnsworth
167,Alien Franchise,Xenomorph,Ellen Ripley,Nostromo,Facehugger,Chestburster,Alien Queen,Weyland,Yutani,LV-426
168,Cyberpunk,Neon,Matrix,Hacker,Dystopia,Cyberspace,Augmentation,Android,Corporate Control,Virtual Reality
169,Starship Types,Cruiser,Fighter,Battleship,Destroyer,Freighter,Carrier,Explorer,Scout,Corvette
170,Time Travel,Paradox,Timeline,Alternate Reality,Past,Future,Present,Chrononaut,Time Machine,Butterfly Effect
171,Robots,Android,Droid,Cyborg,AI,Automation,Sentient,Processor,Humanoid,Machine
172,Star Wars Characters,Luke Skywalker,Princess Leia,Han Solo,Darth Vader,Yoda,Chewbacca,Emperor Palpatine,C-3PO,R2-D2
173,Famous Sci Fi Authors,Asimov,Clarke,Heinlein,Herbert,Gibson,Bradbury,Simmons,Le Guin,Orwell
174,Alien Species,Klingon,Romulan,Vulcan,Wookiee,Twi'lek,Orc,Cylon,Asari,Predator
175,Post Apocalypse,Radiation,Survivor,Zombie,Mad Max,Ruin,Wasteland,Bunker,Scavenger,Mutant
176,Spacecraft Terms,Hyperdrive,Warp Drive,Impulse Engine,Shuttle,Hangar,Cockpit,Hull,Thruster,Navigation
177,Dystopian Societies,Totalitarian,Censorship,Surveillance,Propaganda,Rebellion,Oppression,Control,Resistance,Regime
178,Sci Fi Weapons,Phaser,Blaster,Laser Rifle,Plasma Gun,Grenade,Sonic Weapon,Bowcaster,Energy Sword,Disruptor
179,Star Wars Factions,Rebellion,Empire,Jedi Order,Sith Order,Clone Army,New Republic,First Order,Resistance,Bounty Hunters
180,Post Human Concepts,Cyborg,Transhuman,AI,Genetic Engineering,Cloning,Mind Upload,Enhancement,Biotech,Nanotech
181,Classic Sci Fi Films,Metropolis,2001 A Space Odyssey,Invasion of The Body Snatchers,Forbidden Planet,Planet of The Apes,The Fly,Logan's Run,The Day The Earth Stood Still,Blade Runner
182,Spaceships War Roles,Fighter,Bomber,Interceptor,Command Ship,Support Vessel,Scout Ship,Transport,Carrier,Corvette
183,Alien Contact,First Contact,Communicate,Probe,Signal,Abduction,Invasion,Diplomacy,Encounter,Species
184,Star Wars Vehicles,X Wing,TIE Fighter,Millennium Falcon,Speeder Bike,Star Destroyer,AT AT Walker,Podracer,Battle Droid,Death Star
185,Sci Fi TV Shows,The Expanse,Black Mirror,Stranger Things,Firefly,Battlestar Galactica,Lost In Space,Westworld,Orphan Black,The 100
186,Famous Robots,Wall-E,R2 D2,C3PO,Hal 9000,Data,Johnny 5,Bender,Optimus Prime,T800
187,Spacesuits,Helmet,Oxygen,Systems,Gloves,Jetpack,Insulation,Visor,Pressure Suit,Glasses
188,Sci Fi Planets,Mars,Venus,Tatooine,Krypton,Arrakis,Trantor,Endor,Naboo,Coruscant
189,Teleportation Terms,Beam Up,Quantum,Phasing,Transporter,Instant,Portal,Matter Stream,Displacement,Dematerial
190,Galactic Empires,Imperium,Federation,Confederacy,Syndicate,Dominion,Alliance,Coalition,Republic,Consortium
191,Alien Invasion,Invasion,Probe,Attack,Occupation,Resistance,Hybrid,Scout Ship,Abduction,Extra Terrestrial
192,Time Travel Paradoxes,Grandfather Paradox,Bootstrap Paradox,Predestined,Alternate Timeline,Time Loop,Chronology,Temporal Anomaly,Causality,Time Slip
193,Sci Fi Energy Sources,Plasma,Fusion,Fission,Dark Matter,Antimatter,Tesla Coil,Zap Energy,Zero Point,Quantum
194,Space Exploration Missions,Apollo,Ares,Mercury,Discovery,Voyager,Hubble,Galileo,Cassini,Curiosity
195,Alien Languages,Klingon,Elvish,Vulcanese,Rodian,Na'vi,Huttese,Minbari,Protoss,Dothraki
196,Computer AI,Sentience,Algorithm,Neural Network,Machine Learning,Data Mining,Logic Circuit,Chatbot,Automation,Deep Learning
197,Space Colonization,Mars Base,Lunar Outpost,Terraforming,Habitat,Supply Ship,Space Elevator,Oxygen Farm,Energy Dome,Hydroponics
198,Virtual Reality,SIM,Avatar,Immersion,Haptic Feedback,Headset,Environment,Data Glove,Sensory,Bio Interface
199,Star Wars Creatures,Wampa,Sarlacc,Rancor,Twi'lek,Nerf Herder,Hutt,Gungan,Ronto,Tauntaun
200,Rock and Roll,Elvis,Chuck Berry,Little Richard,Bill Haley,Johnny Cash,Fats Domino,Buddy Holly,Bo Diddley,Ray Charles
201,Television Shows,I Love Lucy,The Twilight Zone,Gunsmoke,Leave It To Beaver,The Andy Griffith Show,The Honeymooners,The Ed Sullivan Show,Bonanza,The Fugitive
202,Cars,Ford Mustang,Chevrolet Bel Air,Cadillac Eldorado,Plymouth Fury,Volkswagen Beetle,Buick Roadmaster,Dodge Coronet,Chrysler New Yorker,Cadillac Coupe
203,Fashion,Poodle Skirt,Letterman Jacket,Bobby Socks,Cat Eye Glasses,High Waist Pants,Leather Jacket,Silk Scarf,Penny Loafers,Cardigan Sweater
204,Music Icons,Frank Sinatra,Aretha Franklin,Bob Dylan,Miles Davis,Ray Charles,Marvin Gaye,The Supremes,James Brown,Sam Cooke
205,Household Appliances,Microwave,Rice Cooker,Vacuum Cleaner,Washing Machine,Electric Iron,Toaster,Refrigerator,Blender,Coffee Maker
206,Sports,Babe Ruth,Jackie Robinson,Muhammad Ali,Duke Snider,Willie Mays,Mickey Mantle,Lou Gehrig,Ernie Banks,Stan Musial
207,Political Leaders,John F Kennedy,Dwight D Eisenhower,Richard Nixon,Lyndon B Johnson,Nikita Khrushchev,Winston Churchill,Charles de Gaulle,Harold Macmillan,Jawaharlal Nehru
208,Popular Drinks,Coca Cola,Pepsi Cola,Root Beer,Milkshake,Whiskey,Margarita,Moonshine,Bourbon,Bloody Mary
209,Technology,Transistor,Vacuum Tube,Mainframe Computer,Walkie Talkie,Polaroid Camera,Vacuum Tube Radio,Slide Rule,Record Player,Carbon Microphone
210,TV Cartoons,The Flintstones,The Jetsons,Tom and Jerry,Rocky and Bullwinkle,Hanna Barbera,Dexter's Laboratory,Speed Racer,The Smurfs,Popeye
211,Classic Musicals,Gigot,The Sound of Music,Oklahoma!,West Side Story,My Fair Lady,Camelot,An American in Paris,Guys and Dolls,South Pacific
212,1950s Toys,Barbie,Dymaxion Car,Slinky,Mr Potato Head,Hula Hoop,YoYo,Play Dough,View Master,Silly Putty
213,Cold War Symbols,Iron Curtain,Check Point Charlie,Berlin Wall,Red Scare,McCarthyism,Mutually Assured Destruction,Space Race,U2 Spy Plane,Cuban Missile Crisis
214,Classic Cars,Chevrolet Camaro,Ford Thunderbird,Pontiac GTO,Dodge Charger,Cadillac Coupe Deville,Buick Skylark,Oldsmobile Cutlass,Chrysler Imperial,Ford Falcon
215,World Leaders,John F Kennedy,Charles de Gaulle,Winston Churchill,Fidel Castro,Nikita Khrushchev,Jawaharlal Nehru,Konrad Adenauer,Harold Macmillan,Lyndon B Johnson
216,TV Families,The Brady Bunch,The Partridge Family,The Munsters,The Addams Family,Leave It To Beaver,The Flintstones,The Jetsons,The Waltons,My Three Sons
217,Fashion Styles,Mod Style,Rockabilly,Bebop,Rock and Roll,Hippie Style,Greaser Style,Pin Up,French New Wave,Poodle Skirt
218,Inventions,Color TV,Polio Vaccine,Microwave Oven,Transistor Radio,Jet Engine,Synthetic Fibers,Laser,Integrated Circuit,Velcro
219,Popular Dances,The Twist,Rock and Roll,The Jitterbug,Swing,Hip Hop,Charleston,Bop,The Stroll,The Madison
220,Science Fiction,Doctor Who,Star Trek,The Twilight Zone,Forbidden Planet,Flash Gordon,The Day the Earth Stood Still,Metropolis,Invasion of the Body Snatchers,2001 A Space Odyssey
221,Motown Artists,The Supremes,Stevie Wonder,Marvin Gaye,The Temptations,Martha and the Vandellas,Gladys Knight,Smokey Robinson,The Four Tops,Diana Ross
222,Cold War Technology,ICBM,Spy Satellite,Nuclear Submarine,Atomic Bomb,Hydrogen Bomb,Radioactive Fallout,Secret Bunker,ECM Radar,Nuclear Missile
223,Summer Movies,Rebel Without a Cause,The Great Escape,North by Northwest,To Kill a Mockingbird,The Birds,Goldfinger,Lawrence of Arabia,Doctor Zhivago,West Side Story
224,Cold War Espionage,CIA,KGB,MI6,Spy,Double Agent,Defector,Secret Code,Mole,Black Ops
225,Classic Broadway,The Pajama Game,West Side Story,My Fair Lady,Guys and Dolls,The Sound of Music,Oklahoma!,South Pacific,Cabaret,Carousel
226,Space Race Countries,Soviet Union,United States,China,Bulgaria,Romania,East Germany,Hungary,Poland,Ukraine
227,Popular TV Westerns,Gunsmoke,Bonanza,The Rifleman,Have Gun Will Travel,Wagon Train,Rawhide,The Lone Ranger,Cheyenne,Death Valley Days
228,Film Directors,Alfred Hitchcock,Stanley Kubrick,John Ford,Orson Welles,François Truffaut,Federico Fellini,Sidney Lumet,Billy Wilder,Budd Boetticher
229,Iconic 1960s Albums,Sgt Pepper's Lonely Hearts Club Band,Pet Sounds,Highway 61 Revisited,Blonde on Blonde,Are You Experienced,The Velvet Underground,Let It Bleed,The Doors,Abbey Road
230,Typewriters,Remington,Smith Corona,Royal,Underwood,Olivetti,Erasable Ribbon,Carbon Paper,Manual Typewriter,Electric Typewriter
231,Classic Novels,On the Road,To Kill a Mockingbird,Fahrenheit 451,The Catcher in the Rye,One Flew Over the Cuckoo's Nest,Lolita,Invisible Man,Stranger in a Strange Land,Doctor Zhivago
232,Famous 1960s Photographers,Robert Frank,Diane Arbus,Henri Cartier Bresson,Ansel Adams,Lee Friedlander,William Klein,Richard Avedon,Elliott Erwitt,Garrett Bradley
233,Iconic Cars,Volkswagen Beetle,Ford Mustang,Cadillac Eldorado,Dodge Charger,Chevrolet Camaro,Chevrolet Corvette,Pontiac GTO,Ford Thunderbird,Buick Riviera
234,Fast Food Mascots,Ronald McDonald,Colonel Sanders,The Burger King,Tony The Tiger,Chester Cheetah,Jack Box,Pizza Hut Hut,Hooters Owl
235,Corporate Mascots,Geico Gecko,Energizer Bunny,Michelin Man,Smokey Bear,Pillsbury Doughboy,Aflac Duck,Mr. Clean,Mr. Peanut,The Noid,Keebler Elf,Jolly Green Giant
236,Corporate Slogans,Think Different,Impossible Is Nothing,Open Happiness,Have It Your Way,King Of Beers,Just Do It,I'm Lovin' It,Zoom Zoom,Moving Forward
237,American Gangsters,Al Capone,Bugsy Siegel,John Dillinger,Meyer Lansky,Lucky Luciano,Whitey Bulger,Billy The Kid,Bonnie Parker
238,Serial Killers,Ted Bundy,Jeffrey Dahmer,John Wayne Gacy,Richard Ramirez,Edmund Kemper,Aileen Wuornos,Son of Sam,David Berkowitz
239,Notorious Bank Robbers,John Dillinger,Bonnie Parker,Clyde Barrow,Frank Abagnale,George Baby Face Nelson,Herman Lamm
240,Infamous Pirates,Blackbeard,Calico Jack,Anne Bonny,Bartholomew Roberts,Henry Morgan,William Kidd,Edward Teach,Stede Bonnet,Charles Vane
241,Female Criminals,Bonnie Parker,Aileen Wuornos,Brenda Ann Spencer,Myra Hindley,Griselda Blanco,Marilyn Lemak,Ilse Koch,Mary Ann Cotton,Juana Barraza,Elizabeth Bathory
242,Mafia Bosses,Al Capone,Don Vito Genovese,Carlo Gambino,Joseph Bonanno,Tommy Lucchese,Salvatore Maranzano,John Gotti,Charles Luciano,Paul Castellano
243,Historic Outlaws,Jesse James,Billy The Kid,Butch Cassidy,Sundance Kid,Robert Ford,Calamity Jane,Doc Holliday,Wild Bill Hickok,Pat Garrett
244,Espionage Spies,Anna Chapman,Aldrich Ames,Julius Rosenberg,Ethel Rosenberg,Robert Hanssen,Kim Philby,Klaus Fuchs
245,White Collar Criminals,Frank Abagnale,Bernie Madoff,Jordan Belfort,Elizabeth Holmes,Nicholas Leeson,Charles Ponzi,Allen Stanford,Martin Shkreli,Richard Fuld
246,Warfare War Criminals,Adolf Eichmann,Heinrich Himmler,Hermann Göring,Joseph Mengele,Rudolf Hess,Benito Mussolini,Hideki Tojo,Slobodan Milošević,Radovan Karadžić
247,Jack The Ripper Suspects,Montague John Druitt,Michael Ostrog,Aaron Kosminski,John Pizer,Alexander Pedachenko,George Chapman,Francis Tumblety,James Maybrick
248,Notorious Kidnappers,Patty Hearst,Charles Lindbergh,Elizabeth Smart,Jaycee Dugard,Shawn Hornbeck,Mary McElroy,Frank Sinatra Jr.,Barney Clark,Barbara Mackle
249,Famous Fraudsters,Frank Abagnale,Bernie Madoff,Elizabeth Holmes,Charles Ponzi,Allen Stanford,Anna Sorokin,Barry Minkow,Socorro Herrera,Richard Fuld
250,Infamous Arsonists,John Leonard Orr,John Duffey,Edward Leonski,Hanna Greathouse,Jean Harris,Harry Powers,Felix Hall,Charles Starkweather,Albert DeSalvo
251,Assassins,John Wilkes Booth,Lee Harvey Oswald,Gavrilo Princip,James Earl Ray,Mark David Chapman,Charles Guiteau,Sirhan Sirhan
252,Famous Heist Criminals,Bonnie Parker,John Dillinger,D. B. Cooper,Geraldine Hamilton,Albert Spaggiari,Stanley Gibbons,Charles Ponzi,Anna Sorokin
253,Notorious Cybercriminals,Albert Gonzalez,Kevin Mitnick,Adrian Lamo,Kevin Poulsen,Roman Seleznev,Jeanson James Ancheta,Julian Assange
254,Con Men and Scammers,Frank Abagnale,Charles Ponzi,Elizabeth Holmes,Anna Sorokin,Victor Lustig,Gregor MacGregor,Stanford White,Dorothy Parker,Martha Stewart
255,Famous Cult Leaders,Charles Manson,Jim Jones,David Koresh,Marshall Applewhite,Shoko Asahara,Keith Raniere,Wayne Bent
256,Russian Criminals,Sergey Mavrodi,Boris Berezovsky,Grigori Rasputin,Andrei Chikatilo,Alexander Solonik,Igor Girkin,Semion Mogilevich,Oleg Deripaska,Anatoly Onoprienko
257,Irish Criminals,Martin Cahill,John Gilligan,Michael Mick McGurk,Raymond The Texan Elder,James Whitey Bulger,Patrick Meehan,Brendan McFarlane,Christy Kinahan
258,Wild West Outlaws,Jesse James,Billy The Kid,Butch Cassidy,Sundance Kid,Wild Bill Hickok,Doc Holliday,Calamity Jane,Cole Younger,Frank James
259,Infamous Poisons,Arsenic,Cyanide,Strychnine,Thallium,Digitalis,Ricin,Polonium,Mercury,Sarin
260,Mob Hitmen,Richard Kuklinski,Salvatore Gravano,Tommy DeSimone,Albert Anastasia,Frank Nitti,Phil Leonetti,John Gotti,Joseph Massino,Vincent Gigante
261,Women in Crime,Bonnie Parker,Aileen Wuornos,Griselda Blanco,Myra Hindley,Ilse Koch,Martha Beck,Rose West,Brenda Spencer,Elizabeth Báthory
262,International Con Artists,Anna Sorokin,Frank Abagnale,Victor Lustig,Fawziyah Javed,Gregor MacGregor,Eva C.,Fiona Simpson,Anna Chapman,Ewa Paradies
263,Infamous Kidnappings,Lindbergh Baby,Patty Hearst,Elizabeth Smart,Jaycee Dugard,Shawn Hornbeck,Mary McElroy,Frank Sinatra Jr.,Barbara Mackle,Barney Clark
264,Anarchists and Terrorists,Ted Kaczynski,Timothy McVeigh,Josef Klemperer,Brigitte Mohnhaupt,David Koresh,Anders Behring Breivik,Richard Reid,Eric Rudolph
265,Hackers and Crackers,Kevin Mitnick,Adrian Lamo,Albert Gonzalez,Kevin Poulsen,Jonathan James,Julian Assange,Guy Fawkes
266,Political Assassins,Gavrilo Princip,John Wilkes Booth,Lee Harvey Oswald,Mark David Chapman,James Earl Ray,Charles Guiteau,Sirhan Sirhan,Anwar al-Awlaki,Patrice Lumumba
267,Drug Traffickers,Pablo Escobar,El Chapo,Griselda Blanco,Felix Gallardo,José Gonzalo Rodríguez,Gustavo Gaviria,Manuel Noriega,Ismael Zambada
268,Children's Crime Cases,Brenda Ann Spencer,Mary Bell,Linda Carty,Jon Venables,Robert Thompson,Karla Homolka,James Bulger
269,White Collar Fraudsters,Bernie Madoff,Elizabeth Holmes,Frank Abagnale,Charles Ponzi,Allen Stanford,Anna Sorokin,Barry Minkow,Rick Singer,Richard Fuld
270,Crime Families,Genovese Family,Gambino Family,Bonanno Family,Lucchese Family,Colombo Family,Chicago Outfit,Yamaguchi-gumi,The Kray Twins
271,Infiltrators and Double Agents,Klaus Fuchs,Kim Philby,Aldrich Ames,Robert Hanssen,Richard Sorge,Julius Rosenberg,Ethel Rosenberg,Anna Chapman
272,Infamous Female Killers,Aileen Wuornos,Myra Hindley,Ilse Koch,Elizabeth Bathory,Juana Barraza,Brenda Ann Spencer,Martha Beck,Rose West,Belle Gunness
273,Mafia Hitmen,Richard Kuklinski,Salvatore Gravano,Tommy DeSimone,Albert Anastasia,Frank Nitti,Phil Leonetti,John Gotti,Joseph Massino,Vincent Gigante
274,Drug Lords,Pablo Escobar,El Chapo,Griselda Blanco,Felix Gallardo,José Gonzalo Rodríguez,Gustavo Gaviria,Manuel Noriega,Ismael Zambada
276,National Parks,Yosemite,Yellowstone,Grand Canyon,Zion,Glacier,Acadia,Everglades,Rocky Mountain,Sequoia
277,Famous Cities,New York,Chicago,San Francisco,Los Angeles,Miami,Boston,Washington DC,New Orleans,Seattle
278,Iconic Landmarks,Statue of Liberty,Golden Gate Bridge,Mount Rushmore,Space Needle,Ft Sumter,Times Square,Alcatraz Island,Hollywood Sign,Gateway Arch
279,Historic Sites,Independence Hall,Alamo,Gettysburg,Jamestown,Monticello,Colonial Williamsburg,Fort McHenry,Harper's Ferry,Mount Vernon
280,Beach Destinations,Myrtle Beach,Huntington Beach,South Beach,Waikiki,Virginia Beach,Cape Cod,Clearwater Beach,Galveston,Rehoboth Beach
281,Rivers and Lakes,Mississippi River,Colorado River,Lake Tahoe,Great Salt Lake,Lake Michigan,Columbia River,Lake Superior,Lake Erie,Missouri River
282,Museums,Smithsonian,Museum of Modern Art,The Met,Guggenheim,Field Museum,American Museum of Natural History,Smithsonian Air and Space,Getty Center
283,Road Trip Routes,Route 66,Pacific Coast Highway,Blue Ridge Parkway,Garden Route,Great River Road,Overseas Highway,Lincoln Highway,Historic Columbia River Highway
284,Mountain Ranges,Appalachians,Rocky Mountains,Black Hills,Sierra Nevada,Cascade Range,Wasatch Range,Adirondacks,Sandia Mountains,White Mountains
285,Desert Spots,Mojave,Sonoran,Great Basin,Chihuahuan,Death Valley,Gila,Joshua Tree,White Sands,Nevada Desert
286,Culinary Cities,New Orleans,Portland,San Francisco,New York City,Nashville,Chicago,Charleston,Philadelphia,Austin
287,Southern Cities,Atlanta,New Orleans,Charleston,Nashville,Memphis,Miami,Savannah,Little Rock,Baton Rouge
288,Cultural Festivals,Mardi Gras,Burning Man,Sundance Film Festival,Jazz Festival,Carnival,State Fair,Coachella,Outside Lands,Labor Day Parade
289,Famous Museums,Smithsonian,MoMA,The Met,Guggenheim,Walker Art Center,Field Museum,National Gallery,Art Institute of Chicago,Brooklyn Museum
290,Island Destinations,Hawaii,Mackinac Island,Long Island,Key West,Block Island,San Juan Islands,Catalina Island,Martha's Vineyard,Fire Island
291,Winter Attractions,Ski Resorts,Snowboarding,Ice Fishing,Hot Springs,Winter Carnivals,Dog Sledding,Snowmobiling,Ice Climbing,Holiday Markets
292,American Icons,Baseball,Apple Pie,Fourth of July,American Flag,Liberty Bell,Bald Eagle,Mount Rushmore,Hollywood,Thanksgiving
293,Lake Destinations,Lake Tahoe,Lake George,Lake Superior,Lake Michigan,Lake Champlain,Crater Lake,Lake Powell,Lake Okeechobee,Lake Erie
294,Historic Trails,Oregon Trail,Appalachian Trail,Cumberland Road,Mormon Trail,Mesa Verde Trail,Trail of Tears,California Trail,Chisholm Trail,Overland Trail
295,Famous Theaters,Broadway,Hollywood Pantages,Strand Theatre,Radio City Music Hall,Lyric Theatre,Arena Stage,The Fox Theatre,The Wiltern,The Orpheum
296,American Presidents,George Washington,Abraham Lincoln,Franklin Roosevelt,Theodore Roosevelt,John F Kennedy,Thomas Jefferson,Andrew Jackson,Ulysses Grant,James Madison
297,Music Cities,Nashville,Memphis,Austin,New Orleans,Detroit,Seattle,Chicago,New York,Los Angeles
298,Amusement Parks,Disney World,Universal Orlando,Busch Gardens,Six Flags Magic Mountain,Knotts Berry Farm,Dollywood,Cedar Point,Hershey Park,Legoland California
299,Urban Parks,Central Park,Golden Gate Park,Millennium Park,Grant Park,Forest Park,Zilker Park,Lincoln Park,Prospect Park,Piedmont Park
300,Space and Science NASA,Space Center Houston,Kennedy Space Center,Jet Propulsion Laboratory,Smithsonian Air and Space,Pegasus,Explorer,Discovery,Columbia
301,US Capitals,Washington DC,Atlanta,Denver,Austin,Boston,Salem,Sacramento,Olympia,Albany
302,American Writers,Mark Twain,Ernest Hemingway,F Scott Fitzgerald,Harper Lee,Toni Morrison,Maya Angelou,Edgar Allan Poe,Emily Dickinson,John Steinbeck
303,Iconic Foods,Burger,Corn Dog,Apple Pie,Barbecue,Fried Chicken,Clam Chowder,Philly Cheesesteak,Gumbo,Lobster Roll
304,Great Lakes,Lake Superior,Lake Michigan,Lake Huron,Lake Erie,Lake Ontario,Saint Marys River,Buffalo River,Duluth Harbor,Sault Ste Marie
305,Famous Bridges,Golden Gate,Brooklyn,George Washington,Mackinac,Verrazano-Narrows,Seven Mile,Chesapeake Bay
306,Lighthouses,Portland Head,Cape Hatteras,Big Sable Point,Presque Isle,West Quoddy Head,Split Rock Point,Barnegat Light,Point Reyes,Montauk Point
307,American Sports Teams,Yankees,Cowboys,Lakers,Bulls,Patriots,Red Sox,Giants,Warriors,Packers
308,Famous Universities,Harvard,Yale,Stanford,MIT,Princeton,UCLA,Columbia,University of Chicago,Caltech
309,Pioneer Towns,Deadwood,Virginia City,Leadville,Dodge City,Tombstone,Bisbee,Custer,Sundance
310,Hollywood Films,Forrest Gump,The Godfather,Jurassic Park,Star Wars,Rocky,Back to the Future,Titanic,Casablanca
311,Festivals and Events,Comic Con,SXSW,Coachella,Burning Man,Mardi Gras,Sundance Film Festival,Lollapalooza,Labor Day Parade,New Orleans Jazz Festival
312,Internet Technologies,World Wide Web,Hypertext,HTTP,Browser,HTML,Cookies,URL,ISP,Cyberspace
313,Mobile Innovations,Smartphone,Touchscreen,GPS,App,Wi Fi,Bluetooth,4G,5G,MMS
314,Computer Hardware,CPU,RAM,Hard Drive,Graphics Card,Motherboard,Power Supply,Fan,SSD,USB
315,Software Breakthroughs,Operating System,Algorithm,Compiler,Open Source,Cloud Computing,Virtual Machine,Encryption,Patch,API
316,Artificial Intelligence,Neural Network,Machine Learning,Deep Learning,Natural Language Processing,Automation,Data Mining,Chatbot,Algorithm,Bot
317,Renewable Energy,Photovoltaic,Solar Panel,Wind Turbine,Geothermal,Hydropower,Biomass,Fuel Cell,Tidal Energy,Energy Storage
318,Transportation Advances,Electric Vehicle,Autonomous Car,Hyperloop,High Speed Rail,Drone,Navigation System,Fuel Efficiency,Traffic Management,Regenerative Braking
319,Medical Technologies,MRI,CT Scan,Ultrasound,Robotic Surgery,prosthetics,Genetic Engineering,Telemedicine,Biometrics,Artificial Organ
320,Communication Devices,Telephone,Radio,Television,Satellite,Modem,Router,Fax Machine,Walkie Talkie,Pager
321,Data Storage Technologies,Magnetic Tape,Hard Disk Drive,Flash Drive,Optical Disc,Cloud Storage,SD Card,RAM,ROM,Database
322,Semiconductor Developments,Transistor,Integrated Circuit,Microchip,Nanotech,Doping,Silicon Wafer,Lithography,Moores Law,CMOS
323,Computing Paradigms,Mainframe,Personal Computer,Laptop,Tablet,Server,Data Center,Quantum Computer,Distributed Computing,Parallel Processing
324,Space Exploration,Satellite,Rocket,Space Shuttle,Probe,Astronaut,Launch Pad,Space Station,Orbiter,Telemetry
325,Internet Security,Firewall,Antivirus,Malware,Phishing,Encryption,VPN,Biometric,2FA,Ransomware
326,Digital Media,Streaming,Podcasting,Video On Demand,Blog,Online Gaming,Virtual Reality,Augmented Reality,MP3,Cloud Gaming
327,Wearable Technology,Smartwatch,Fitness Tracker,Virtual Glasses,Smart Clothes,Health Monitor,Heart Rate Sensor,Step Counter,Bluetooth Earbuds,Smart Ring
328,Robotics,Automation,Servo Motor,Sensor,Artificial Intelligence,Actuator,Drone,Manipulator,Humanoid Robot,Machine Vision
329,Blockchain,Distributed Ledger,Crypto,Smart Contract,Mining,Hashing,Satoshi,Token,Node,Consensus
330,Wireless Communication,Bluetooth,Wi Fi,NFC,Radio Frequency,Cell Tower,Signal Strength,5G,Satellites,Infrared
331,Display Technologies,LED,OLED,LCD,Plasma,Refresh Rate,Pixel,Resolution,Touchscreen,Backlight
332,Emerging Tech,Holography,Quantum Computing,Brain Computer Interface,Nanobots,3D Holograms,Cryptography,Edge Computing,Smart Dust,Digital Twins
333,Computer Networking,IP Address,Router,Switch,Firewall,Subnet,VPN,MAC Address,Network Protocol,TCP IP
334,E-commerce,Online Shopping,Digital Wallet,Payment Gateway,Shopping Cart,Customer Review,Order Fulfillment,Dropshipping,Subscription Model,Flash Sale
335,Virtual and Augmented Reality,Headset,Motion Tracking,Haptic Feedback,Mixed Reality,3D Modeling,Immersive,Simulated Environment,Field of View,Latency
336,Energy Storage,Battery,Lithium Ion,Capacitor,Fuel Cell,Power Bank,Charge Cycle,Energy Density,Rechargeable,Grid Storage
337,Artificial Intelligence Applications,Chatbot,LLM,Image Recognition,Speech Recognition,Autonomous Vehicle,Facial Recognition,Predictive Analytics,Machine Vision,Expert System
338,Mobile Computing,Laptop,Tablet,Smartphone,Hotspot,Mobile OS,App Store,Bluetooth,Wi Fi,Data Sync
339,Internet of Things,Smart Home,Wearables,Sensors,Connectivity,Automation,Cloud Integration,Network,Data Analytics,Edge Devices
340,Big Data,Data Mining,Analytics,Hadoop,Data Warehouse,Machine Learning,Data Set,Data Lake,Cluster Computing,Streaming Data
341,Digital Photography,DSLR,ISO,Aperture,Shutter Speed,Lens,Pixel,Image Sensor,RAW Format,Editing Software
342,Thermal Technologies,Heat Sink,Thermal Paste,Cooling Fan,Liquid Cooling,Peltier Cooler,Heat Pipe,High Temps,Temperature Sensor,Phase Change Material
343,Software Development,IDE,Debugging,Version Control,Repository,Sprint,Agile,Testing,Deployment,Prototype
344,Electric Power Generation,Turbine,Generator,Transformer,Grid,Alternator,Circuit Breaker,Power Plant,Voltage,Current
345,Automotive Technologies,Internal Combustion Engine,Electric Motor,Catalytic Converter,Autopilot,Hybrid Car,Fuel Injection,ABS,Nitrogen Oxides,Turbocharger
346,Telecommunications,Fiber Optics,Satellite Dish,Microwave Transmission,Cellular Network,Base Station,Router,Modulation,Multiplexing,Signal Booster
347,Human Computer Interaction,Graphical User Interface,Touchscreen,Voice Command,Gesture Recognition,Haptic Feedback,Eye Tracking,Virtual Keyboard,User Experience,Accessible
348,Satellite Systems,GPS,Geostation,Low Earth Orbit,Telemetry,Antenna,Payload,Spacecraft,Ground Station,Orbital Mechanics
349,Cereal Crops,Wheat,Rice,Barley,Oats,Corn,Rye,Sorghum,Millet,Sesame
350,Farming Equipment,Tractor,Plow,Harvester,Seeder,Tiller,Combine,Rake,Fertilizer Spreader,Irrigation System
351,Crop Pests,Aphid,Caterpillar,Weevil,Locust,Mite,Beetle,Nematode,Armyworm,Grasshopper
352,Soil Types,Clay,Sand,Loam,Silt,Peat,Chalky,Gravelly,Saline,Alluvial
353,Fertilizers,Nitrogen,Phosphorus,Potassium,Compost,Manure,Urea,Ammonium,Nitrate,Miracle Gro
354,Plant Diseases,Blight,Mildew,Rust,Root Rot,Wilt,Leaf Spot,Downy Mildew,Canker,Fusarium
355,Orchard Fruits,Apple,Pear,Cherry,Peach,Plum,Apricot,Nectarine,Pomegranate,Mulberry
356,Grasses,Switchgrass,Bermudagrass,Fescue,Ryegrass,Bluegrass,Zoysia,Buffalograss,Timothy,Crabgrass
357,Irrigation Methods,Drip,Flood,Sprinkler,Centrifugal,Surface,Subsurface,Furrow,Basin,Manual
358,Harvesting Tools,Sickle,Scythe,Combine Harvester,Pruning Shears,Reaper,Threshing Machine,Fruit Picker,Lopper,Shears
359,Legumes,Pea,Bean,Lentil,Chickpea,Soybean,Peanut,Alfalfa,Clovers,Black-eyed Pea
360,Farming Techniques,Plowing,Weeding,Sowing,Fertilizing,Harvesting,Irrigating,Pruning,Transplant,Grafting
361,Farm Buildings,Barn,Silo,Greenhouse,Granary,Outhouse,Fence,Stable,Tool Shed,Chicken Coop
362,Organic Farming,Compost,Crop Rotation,Biocontrol,Green Manure,Permaculture,Mulching,No-till,Fallow,Cover Crop
363,Rice Varieties,Basmati,Jasmine,Sushi,Arborio,Black Rice,Red Rice,Wild Rice,Sweet Rice,Parboiled
364,Grain Storage,Bin,Silo,Bag,Pit,Warehouse,Tarp,Cold Storage,Shed,Container
365,Pest Control,Biocontrol,Insecticide,Herbicide,Fungicide,Trap Crop,Predator Release,Repellent,Bait,Trap
366,Farming Weather,Rain,Drought,Frost,Humidity,Temperature,Winds,Sunlight,Storm,Cloud Cover
367,Farm Chemicals,Insecticide,Herbicide,Fungicide,Pesticide,Fertilizer,Detergent,Adjuvant,Soil Amendment,Growth Regulator
368,Horticultural Plants,Rose,Shrub,Orchid,Lilac,Azalea,Bonsai,Marigold,Jasmine,Tulip
369,Animal Byproducts,Leather,Wool,Milk,Manure,Fat,Horn,Feather,Gelatin,Silk
370,Seasonal Crops,Tomato,Corn,Squash,Pumpkin,Cucumber,Watermelon,Melon,Peppers,Beans
371,Wheat Products,Bread,Pasta,Flour,Couscous,Bulgur,Bran,Germ,Cracker,Semolina
372,Farming Roles,Farmer,Harvester,Planter,Technician,Inspector,Surveyor,Manager,Labourer,Consultant
373,Seed Types,Hybrid,Heirloom,Certified,Organic,Open Pollinated,Treated,Untreated,Pelleted,Coated
374,Agri Technology,Drones,Soil Sensor,Automation,AI Monitoring,Genetic Engineering,Remote Sensing,Hydroponics,Vertical Farming,Precision Agriculture
375,Animal Feeds,Hay,Silage,Grain,Bran,Root Crops,Pasture,Supplements,Forage
376,Legume Types,Alfalfa,Bean,Pea,Lentil,Chickpea,Soybean,Clover,Asparagus Pea,Carob
377,Soil Fertility,Nutrient Cycling,Organic Matter,Crop Rotation,Cation Exchange,Soil pH,Nitrogen Fixation,Soil Structure,Humus Formation,Composting
378,Farm Produce Markets,Wholesale,Retail,Farmers Market,Cooperative,Export,Import,Auction
379,Crop Rotation,Cereal,Legume,Root Crop,Fallow,Green Manure,Vegetable,Grassland,Cover Crop,Pulse Crop
380,Farming Tools,Hoe,Fork,Rake,Spade,Secateurs,Wheelbarrow,Shovel,Pruner,Mattock
381,Poultry Types,Broiler,Layer,Duck,Turkey,Quail,Goose,Guinea Fowl,Peacock,Pheasant
382,Cereal Pests,Armyworm,Aphid,Weevil,Locust,Thrips,Wireworm,Corn Borer,Grasshopper,Leafhopper
383,Agricultural Festivals,Harvest Festival,Ploughing Day,Farmers Day,Rain Dance,Mabon,Lughnasadh,Thanksgiving,Eid al Adha
384,Greenhouse Plants,Tomato,Lettuce,Cucumber,Peppers,Orchid,Strawberry,Basil,Spinach,Chili
385,Farming Challenges,Drought,Flood,Soil Erosion,Pest Infestation,Market Fluctuations,Labour Shortage,Climate Change,Weed Growth,Disease Outbreak
386,Church Architecture,Sanctuary,Altar,Nave,Choir,Transept,Apse,Aisle,Vault,Buttress
387,Religious Figures,Priest,Deacon,Bishop,Cardinal,Monk,Nun,Pope,Pastor,Minister
388,Church Services,Mass,Vespers,Communion,Baptism,Confession,Worship,Homily,Prayer,Procession
389,Religious Symbols,Cross,Dove,Chalice,Bible,Candle,Crucifix,Ichthys,Altar Cloth,Stained Glass
390,Church Music,Organ,Chant,Hymn,Psalm,Choir,Bell,Anthem,Liturgy,Carol
391,Church Items,Tabernacle,Pew,Lectern,Pulpit,Candlestick,Ciborium,Missal,Altar Rail,Sanctuary Lamp
392,Christian Holidays,Easter,Christmas,Advent,Lent,Pentecost,Epiphany,Trinity Sunday,Good Friday,Ascension
393,Church Roles,Usher,Sexton,Altar Server,Choirmaster,Cantor,Cleric,Chaplain,Elder,Deaconess
394,Church Buildings,Cathedral,Chapel,Basilica,Abbey,Monastery,Parish,Rectory,Minster,Cloister
395,Sacred Texts,Bible,Gospel,Epistle,Psalter,Vulgate,New Testament,Old Testament,Apocrypha,Lectionary
396,Religious Rituals,Confirming,Anointing,Consecration,Ordination,Exorcism,Procession,Benediction,Veneration,Penance
397,Church Furnishings,Pulpit,Altar Cloth,Chalice,Ciborium,Paten,Thurible,Altar Rail,Ambry,Credence Table
398,Church Festivals,All Saints,Corpus Christi,Transfigured,Ascension Day,Feast Day,Reformation Day,Michaelmas,Candlemas,Lammas
399,Church Actions,Preach,Pray,Baptize,Confess,Offer,Chant,Sing,Fast,Read Scripture
400,Church Attire,Alb,Stole,Cassock,Chasuble,Surplice,Cope,Mitre,Veil,Scapular
401,Church Music Instruments,Organ,Harp,Flute,Lute,Horn,Bell,Trumpet,Violin,Drum
402,Christian Celebrations,Mass,Service,Ceremony,Sacrament,Communion,Baptism,Wedding,Funeral,Confession
403,Spiritual Concepts,Grace,Faith,Salvation,Redemption,Hope,Charity,Sin,Forgiveness
404,Religious Buildings Interiors,Narthex,Sanctuary,Nave,Chancel,Transept,Choir Loft,Font,Pulpit,Ambulatory
405,Church Services Types,Mass,Liturgy,Vespers,Matins,Compline,Worship,Benediction,Procession,Litany
406,Key Church Objects,Altar,Chalice,Paten,Ciborium,Crucifix,Candle Holder,Tabernacle,Bell,Missal
407,Clerical Titles,Deacon,Priest,Bishop,Cardinal,Pope,Monk,Nun,Pastor,Chaplain
408,Sacraments,Baptism,Communion,Confirmation,Marriage,Ordination,Confession,Anointing the Sick,Eucharist,Wafer
409,Church Architecture Elements,Aisle,Nave,Apse,Vault,Transept,Choir,Clerestory,Narthex,Buttress
410,Religious Texts,Scripture,Bible,Gospel,Epistle,Psalter,Lectionary,Testament,Vulgate,Commentary
411,Church Roles and Titles,Priest,Bishop,Deacon,Cardinal,Pope,Monk,Nun,Pastor,Minister
412,Church Ritual Objects,Censer,Chalice,Ciborium,Paten,Thurible,Candle,Cross,Altar Cloth,Processional Cross
413,Church Music Terms,Hymn,Anthem,Psalm,Chant,Organ,Liturgy,Choir,Caroling,Motet
414,Worship Actions,Pray,Sing,Preach,Benedict,Confess,Baptize,Read Scripture,Fast,Offer
415,Church Festivals and Seasons,Advent,Lent,Easter,Christmas,Pentecost,Epiphany,Good Friday,Ascension Day,All Saints Day
416,Religious Attire,Alb,Cassock,Chasuble,Stole,Surplice,Cope,Mitre,Vestments,Veil
417,Church Interior Features,Sanctuary,Nave,Chancel,Choir Loft,Pulpit,Ambry,Font,Narthex,Transept
418,Christian Denominations,Orthodox,Catholic,Protestant,Lutheran,Methodist,Baptist,Anglican,Presbyterian,Evangelical
419,Spiritual Values,Faith,Hope,Charity,Grace,Love,Salvation,Redemption,Forgiveness,Repentance
420,Church Bells and Instruments,Bell,Organ,Drum,Horn,Trumpet,Harp,Flute,Lute,Violin
421,Religious Texts and Books,Bible,Gospel,Epistle,Old Testament,New Testament,Psalter,Vulgate,Lectionary,Apocrypha
422,Church Building Types,Cathedral,Basilica,Chapel,Abbey,Monastery,Parish,Rectory,Minster,Cloister
423,Christian Celebrations and Observances,Mass,Communion,Baptism,Confession,Worship,Fast,Liturgy,Procession,Benediction
424,Classic Cartoon Characters,Mickey Mouse,Donald Duck,Bugs Bunny,Daffy Duck,Popeye,Scooby Doo,Tom,Jerry,Felix
425,90s Kids Shows,Power Rangers,Kenan and Kel,Hey Arnold,Doug,Rugrats,Clarissa Explains It All,Fresh Prince,Goosebumps,The Wild Thornberrys
426,Puppet Shows,Fraggle Rock,The Muppet Show,The Magic Garden,Pinwheel,Mr Rogers Neighborhood,Salty's Lighthouse,Bear in the Big Blue House,Reading Rainbow
427,Educational Kids Series,Reading Rainbow,Schoolhouse Rock,Cyberchase,Blues Clues,Mister Rogers Neighborhood,Magic School Bus,Arthur,Wild Kratts
428,Nickelodeon Favorites,Spongebob Squarepants,Dora the Explorer,Blues Clues,Fairly OddParents,Rugrats,Hey Arnold,Paw Patrol,Avatar Last Airbender,Loud House
429,Animated Disney Shows,Kim Possible,Darkwing Duck,Recess,Lilo and Stitch,Proud Family,Gargoyles,TaleSpin,Gummi Bears,House of Mouse
430,Children’s Sitcoms,Full House,Even Stevens,Drake and Josh,Hannah Montana,Suite Life of Zack and Cody,Amanda Show,Lizzie McGuire
431,Classic Kids Game Shows,Double Dare,Legends of the Hidden Temple,Nick Arcade,Figure It Out,Where in the World Carmen Sandiego,BrainSurge,Fun House,Wild and Crazy Kids
432,Animal Characters,Arthur,Garfield,Snoopy,Pocoyo,Paddington,Bluey,Clifford,Curious George,Peppa Pig
433,Fantasy Children’s Series,Puff the Magic Dragon,Care Bears,Smurfs,My Little Pony,Banana Splits,Fraggle Rock,Captain Planet,He-Man,Thundercats
434,Children’s Science Shows,Beakman's World,Mystery Science Theater,Magic School Bus,Sid the Science Kid,Brain Games,Odd Squad,Peep and the Big Wide World
435,Storybook Inspired,Peter Rabbit,Fairy Tale Theatre,Margaret Wise Brown,Charlottes Web,Curious George,Paddington Bear,Anne of Green Gables,Corduroy,Little Bear
436,Classic Animated Films,Fantasia,Bambi,Cinderella,Peter Pan,Pinocchio,Jungle Book,Alice in Wonderland,Lion King,Lady and the Tramp
437,PBS Kids Shows,Dragonfly TV,Cyberchase,Kratts Creatures,Martha Speaks,Wild Kratts,WordGirl,Arthur,Clifford the Big Red Dog
438,Children’s Holiday Specials,Grinch Stole Christmas,Rudolph the Red Nosed Reindeer,Frosty the Snowman,Charlie Brown Christmas,Snowman,Santa Claus Comin Town,Olive the Other Reindeer,Polar Express
439,Classic Educational Cartoon Series,Schoolhouse Rock,Counting on Frank,Letter People,McGee and Me,Animated Hero Classics,Reading Rainbow,American Tail,Libertys Kids,Magic School Bus
440,Superhero Kids Shows,Teen Titans,Static Shock,Kid Justice,Spectacular Spider-Man,Kim Possible,Generator Rex,Big Hero 6,Pokemon,Power Rangers
441,Adventure Kids Shows,Kid vs Kat,Avatar Last Airbender,Wild Thornberrys,Secret Saturdays,Recess,Gravity Falls,Pirate Islands,American Dragon Jake Long
442,Classic Children’s Book Adaptations,Berenstain Bears,Clifford the Big Red Dog,Franklin,Little Princess,Paddington Bear,Bear Big Blue House,Corduroy,Pippi Longstocking,Magic Tree House
443,Humorous Kids Shows,Courage the Cowardly Dog,Animaniacs,Rocko's Modern Life,Fairly OddParents,Rugrats,Ed Edd n Eddy,Pinky and the Brain,Shaun the Sheep
444,Science Fiction Kids Shows,Jetsons,Futurama,Code Lyoko,Teenage Robot,ReBoot,Inspector Gadget,Ben 10,Galaxy Rangers,Powerpuff Girls
445,Mystery and Detective Shows,Hardy Boys,Nancy Drew,Enid Blyton,Detective Conan,Scooby Doo,Mystery Files Shelby Woo,Famous Five,Paw Patrol
446,Popular Preschool Series,Teletubbies,Baby Einstein,Barney Dinosaur,Dora Explorer,Blues Clues,Peppa Pig,Mickey Mouse Clubhouse,Shimmer and Shine,Paw Patrol
447,Musical Kids Shows,Wiggles,Mister Rogers Neighborhood,Barney and Friends,LazyTown,Hi-5,Kuu Kuu Harajuku,Big Block Singsong
448,Classic British Children's TV,Thomas Tank Engine,Basil Brush,Bagpuss,Danger Mouse,Clangers,Teletubbies,Postman Pat,Fireman Sam,Gordon Gopher
449,Animated Series from the 80s,He-Man,Transformers,Thundercats,GI Joe,Silverhawks,Voltron,Inspector Gadget,Real Ghostbusters,DuckTales
450,Animal Led Shows,Franklin Turtle,Wild Kratts,Bear Big Blue House,Bluey,Postman Pat,Peppa Pig,Curious George,Babar Elephant,Garfield
451,Seasonal and Nature Shows,Jack Frost,Snowman,Animal Mechanicals,Magic School Bus,Wilderness Explorers,Nature Cat,Wabbit Wampage,Martha Speaks,Rescue Bots
452,Fantasy Adventure Series,Smurfs,Magic School Bus,Fraggle Rock,Care Bears,My Little Pony,Dragon Tales,Arthur,Littlest Pet Shop
453,Classic Animated TV Girls,Buffy Vampire Slayer,Jem and the Holograms,X-Men Evolution,Totally Spies,Daria,Proud Family,Kim Possible,Carmen Sandiego,She-Ra
454,Animal Sidekick Characters,Scooby Doo,Blue,Clifford,Garfield,Porky Pig,Fievel,Mushu,Ren,Stimpy
455,Kids Nature and Science,Wild Kratts,Magic School Bus,Octonauts,Mystery Science Theater,Beakman's World,Reading Rainbow,Peep Big Wide World,National Geographic Kids,Dinosaur Train
456,Classic Animated Musical Series,Little Mermaid,Gargoyles,Tinker Bell,Aladdin,Beauty and the Beast,Jungle Cubs,Pocahontas,Lion Guard,Tangled
457,Board and Card Game Adaptations,Clue Animated Series,Monopoly Animated Series,Game of Life,Uno,Twister,Dice World,Minecraft Kid Version,Pokemon Card Game
458,TV Shows with Time Travel,Magic School Bus,Peabody and Sherman,Bill and Teds Excellent Adventures,Doctor Who Kids,Dora Explorer,Back to the Future Animated Series,Peg Cat,Time Warp Trio,Life with Louie
459,Kids Supernatural Series,Courage Cowardly Dog,Goosebumps,Are You Afraid Dark,Danny Phantom,Ghost and Molly McGee,Fairly OddParents,Haunted Hathaways
460,Animated Science Fiction Series,Voltron,Galaxy Rangers,Reboot,Ulysses 31,Futurama,Kid Cosmic,Rush Force,Lilo and Stitch,Jetsons
461,Popular Educational Shows,Reading Rainbow,Blues Clues,Mister Rogers Neighborhood,Magic School Bus,Arthur,Between Lions,Cyberchase,Sesame Street
462,Friends and Families,Loud House,Rugrats,Fairly OddParents,Hey Arnold,Jetsons,Suite Life Zack Cody,Full House,Big Nate
463,Classic Animated Comedies,Animaniacs,Pinky Brain,Ren and Stimpy,Rockos Modern Life,Simpsons,Futurama,Family Guy,Looney Tunes Show,Tiny Toon Adventures
464,Baking Supplies,FLOUR,SUGAR,YEAST,EGGS,BUTTER,BAKING SODA
465,Cooking Utensils,SPATULA,WHISK,LADLE,TONGS,GRATER,SIEVE
466,Beverages,WATER,JUICE,MILK,SODA,TEA,COFFEE
467,Branches of Biology,ZOOLOGY,BOTANY,GENETICS,ECOLOGY,MICROBIOLOGY,ANATOMY
468,The Solar System,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN
469,Famous Scientists,EINSTEIN,NEWTON,CURIE,GALILEO,DARWIN,TESLA
470,States of Matter,SOLID,LIQUID,GAS,PLASMA,BOSE-EINSTEIN,CONDENSATE
471,Chemical Elements,HYDROGEN,OXYGEN,CARBON,IRON,GOLD,SILVER
472,Famous Composers,BACH,BEETHOVEN,MOZART,CHOPIN,VIVALDI,TCHAIKOVSKY
473,Music Terms,TEMPO,MELODY,HARMONY,RHYTHM,CHORD,VERSE
474,Record Labels,MOTOWN,DEF JAM,ATLANTIC,INTERSCOPE,COLUMBIA,CAPITOL
475,Countries in Asia,CHINA,INDIA,JAPAN,RUSSIA,INDONESIA,THAILAND
476,Famous Rivers,NILE,AMAZON,YANGTZE,MISSISSIPPI,DANUBE,MEKONG
477,Ancient Civilizations,EGYPT,GREECE,ROME,MESOPOTAMIA,INDUS VALLEY,MAYA
478,World Wars,TRENCH WARFARE,BLITZKRIEG,D-DAY,PEARL HARBOR,HOLOCAUST,ATOM BOMB
479,Famous Rulers,CLEOPATRA,JULIUS CAESAR,ALEXANDER,GENGHIS KHAN,ELIZABETH I,NAPOLEON
480,Painters,DA VINCI,VAN GOGH,PICASSO,REMBRANDT,MONET,DALI
481,Whales,blue whale,humpback,orca,sperm whale,beluga,narwhal,gray whale
482,Shells,conch,scallop,oyster,clam,nautilus,cowrie,abalone
483,Coral Reef,clownfish,anemone,coral,sponge,starfish,sea urchin,crab
484,Deep Sea,anglerfish,viperfish,blobfish,gulper eel,isopod,vampire squid,chimera
485,Boats,submarine,yacht,trawler,kayak,canoe,ferry,tugboat
486,Burgers,big mac,whopper,baconator,quarter pounder,slider,cheeseburger,double stack
487,Pizza Chains,dominos,pizza hut,papa johns,little caesars,sbarro,godfathers,unos
488,Fried Chicken,kfc,popeyes,chick-fil-a,churchs,zaxbys,bojangles,raising canes
489,Taco Joints,taco bell,del taco,chipotle,qdoba,moes,baja fresh,taco johns
490,Fast Food Sides,fries,onion rings,nuggets,coleslaw,biscuits,hash browns,apple pie
491,Drinks,coke,pepsi,sprite,fanta,dr pepper,mountain dew,root beer
492,Sci-Fi,star trek,doctor who,x-files,stranger things,mandalorian,firefly,battlestar
493,Streaming Services,netflix,hulu,hbo max,disney+,prime video,peacock,apple tv
494,Olympic Events,sprint,swim,gymnastics,judo,archery,fencing,rowing
495,School Furniture,desk,chair,whiteboard,locker,bookshelf,podium,table,chalkboard
496,School Rooms,cafeteria,library,gymnasium,principal,nurse,lab,classroom,auditorium
497,Art Colors,red,blue,yellow,green,purple,orange,cyan,magenta
498,Sculpture,clay,marble,bronze,chisel,kiln,pottery,statue,carving
499,Digital Art,pixel,vector,layer,hex,rgb,tablet,stylus,cmyk
500,Web Browsers,chrome,firefox,safari,edge,opera,brave,explorer,netscape
501,Domains,.com,.org,.net,.edu,.gov,.io,.co,.uk
502,Internet Terms,wifi,modem,router,server,cloud,link,bandwidth,cache
503,Email,inbox,spam,draft,sent,reply,attach,forward,subject
504,Internet Actions,download,upload,stream,browse,chat,post,click,scroll
505,Shoe Brands,nike,adidas,puma,reebok,vans,converse,jordan,crocs
506,Shoe Types,sneaker,boot,sandal,loafer,heel,flat,slipper,clog
507,Shoe Parts,sole,lace,tongue,heel,toe,eyelet,insole,upper
508,Boots,combat,cowboy,rain,snow,hiking,chelsea,ankle,wellington
509,Heels,stiletto,wedge,kitten,pump,platform,block,cone,spool
510,Shoe Materials,leather,suede,canvas,rubber,mesh,velvet,satin,patent
511,Construction Terms,foundation,insulation,drywall,joist,rafter,cornice,facade,lintel,stucco,mortar
512,Construction Tools,level,trowel,hammer,drill,saw,wrench,pliers,tape measure,screwdriver,chisel
513,Famous Buildings,eiffel tower,colosseum,taj mahal,empire state,burj khalifa,pantheon,parthenon,louvre
514,Forensic Terms,autopsy,ballistics,fingerprint,toxicology,dna,rigor mortis,lividity,luminol
515,Felonies,murder,arson,burglary,robbery,kidnapping,treason,espionage,perjury
516,Civil Penalties,fine,restitution,injunction,damages,seizure,garnishment,eviction,citation
517,Government Structure,legislative,executive,judicial,congress,senate,parliament,cabinet,ministry
518,Leonardo DiCaprio,titanic,inception,revenant,aviator,departed,romeo juliet,wolf wall street,gatsby
519,Tom Cruise,top gun,mission impossible,jerry maguire,rain man,minority report,oblivion,mummy,jack reacher
520,NASCAR,daytona,talladega,pit stop,drafting,checkered flag,pace car,stock car,burnout
521,Famous Pirates,blackbeard,kidd,morgan,drake,bonny,rackham,roberts,bellamy
522,Declaration of Independence,liberty,pursuit,happiness,colonies,king george,jefferson,hancock,adams,revolution
523,Ben Franklin,kite,key,bifocals,almanac,diplomat,printer,lightning rod,stove
524,Mark Twain,huck finn,tom sawyer,mississippi,hannibal,steamboat,connecticut yankee,prince pauper,frog
525,Nicola Tesla,coil,ac current,radio,induction,wardenclyffe,turbine,x-ray,oscillator
526,Nuclear Weapons,fat man,little boy,tsar bomba,trinity,castle bravo,ivy mike,gadget,demon core
527,Doomsday,apocalypse,armageddon,rapture,fallout,extinction,cataclysm,judgment day,end times
528,Batman,joker,robin,alfred,batmobile,gotham,penguin,riddler,two-face
529,Superman,krypton,lois lane,lex luthor,smallville,daily planet,zod,doomsday,clark kent
530,California,los angeles,san francisco,san diego,sacramento,hollywood,yosemite,malibu,napa
531,Japan,tokyo,kyoto,osaka,mt fuji,sushi,anime,samurai,kimono
532,Airports,heathrow,jfk,lax,ohare,dubai,haneda,charles de gaulle,changi
533,Airplanes,boeing 747,airbus a380,cessna,concorde,spitfire,dreamliner,blackbird,spirit
534,Donuts,glazed,jelly,boston cream,sprinkles,old fashioned,cruller,bear claw,long john
535,Pastries,croissant,danish,eclair,tart,turnover,strudel,cannoli,baklava
536,Cookies,chocolate chip,oatmeal,peanut butter,oreo,macaroon,biscotti,shortbread,ginger snap
537,Power Tools,drill,saw,sander,grinder,router,nail gun,jigsaw,lathe,impact driver
538,Fasteners,screw,nail,bolt,nut,washer,anchor,rivet,staple,hinge
539,Plumbing,pipe,wrench,plunger,faucet,drain,washer,valve,snake,trap
540,Hospital Staff,doctor,nurse,surgeon,orderly,medic,receptionist,pharmacist,radiologist
541,Hospital Rooms,emergency,icu,maternity,waiting,surgery,recovery,pharmacy,cafeteria
542,Hospital Equipment,wheelchair,stretcher,iv drip,scalpel,stethoscope,syringe,monitor,ventilator
543,Symptoms,fever,cough,pain,rash,swelling,nausea,dizziness,chills
544,Casino Table Games,poker,blackjack,roulette,craps,baccarat,pai gow,war,bridge
545,Slots,reel,jackpot,payline,bonus,scatter,wild,progressive,coin,lever
546,Casino Slang,whale,pit boss,high roller,comp,dealer,croupier,shill,marker,ante
547,Casino Destinations,vegas,atlantic city,reno,macau,monte carlo,biloxi,tunica,singapore
548,Dairy,milk,cheese,butter,yogurt,cream,eggs,cottage cheese,sour cream
549,Produce,apple,banana,lettuce,carrot,potato,tomato,onion,pepper
550,Bakery,bread,cake,muffin,bag bagel,donut,pie,cookie,croissant
551,Grocery Aisles,frozen,canned,cereal,baking,spices,pet,cleaning,paper
552,Sesame Street,elmo,big bird,cookie monster,oscar,grover,bert,ernie,count,abby,zoe
553,The Beatles,john,paul,george,ringo,let it be,hey jude,yesterday,help
554,Queen,freddie,brian,roger,john,bohemian rhapsody,radio ga ga,under pressure,we will rock you
555,David Bowie,ziggy stardust,heroes,starman,lets dance,space oddity,rebel rebel,changes,fame
556,Michael Jackson,thriller,bad,beat it,billie jean,smooth criminal,black or white,man in the mirror,heal the world
557,The Beach Boys,good vibrations,surfin usa,god only knows,kokomo,i get around,california girls,barbara ann,help me rhonda
558,CCR,proud mary,bad moon rising,fortunate son,have you ever seen the rain,born on the Bayou,down on the corner,green river,travelin band
559,South Park,cartman,kenny,kyle,stan,butters,randy,chef,garrison,mackey,timmy
560,Oscar Winners,titanic,gladiator,crash,parasite,moonlight,chicago,rocky,patton,amadeus,godfather
561,Kubrick,shining,spartacus,lolita,eyes wide shut,full metal jacket,dr strangelove,barry lyndon,the killing
562,Fincher,fight club,seven,zodiac,gone girl,social network,panic room,mank,the game
563,Nolan,inception,tenet,memento,insomnia,prestige,interstellar,dunkirk,oppenheimer,batman begins
564,Nicktoons,rugrats,doug,ren stimpy,spongebob,catdog,hey arnold,rockos modern life,invader zim,danny phantom
565,Candy,snickers,skittles,twix,kitkat,reeses,starburst,milky way,nerds,smarties,hersheys
566,Obsolete Tech,pager,fax machine,floppy disk,vhs,walkman,typewriter,telegram,cassette,rotary phone,beeper
567,Ancient Tech,wheel,plow,loom,sundial,compass,aqueduct,abacus,gunpowder,papyrus,chariot
568,Doctors,surgeon,pediatrist,dentist,cardiologist,neurologist,ER,oncologist,psychiatrist
569,Teachers,professor,tutor,instructor,lecturer,educator,mentor,coach,principal,dean
570,Judge,gavel,robe,bench,verdict,ruling,sentence,bailiff,chambers,order
571,Lawyer,attorney,counsel,defense,prosecutor,paralegal,brief,objection,motion,appeal
572,Olde Timey Slang,balderdash,poppycock,flummox,kerfuffle,shenanigans,bamboozle,codswallop,malarkey,skedaddle
573,Philosophy,ethics,logic,stoicism,metaphysics,plato,socrates,nietzsche,kant,dualism
574,Physics,gravity,inertia,velocity,momentum,relativity,photon,friction,optics,magnetism
575,Quantum Mechanics,quark,photon,entanglement,double slit,boson,neutrino,antimatter,planck,heisenberg
576,Biology,mitosis,genetics,evolution,osmosis,dna,metabolism,ecosystem,parasite,anatomy
577,Chemistry,molecule,isotope,catalyst,polymer,oxidation,titration,electron,proton,covalent
578,Geography,equator,latitude,longitude,hemisphere,archipelago,isthmus,peninsula,plateau,tundra
579,PE Class,dodgeball,kickball,calisthenics,gymnasium,whistle,laps,pushups,rope climb,scrimmage
580,Robin Williams Movies,Aladdin,Jumanji,Flubber,Hook,Popeye,Robots,Patch Adams,Mrs Doubtfire,Good Will Hunting,Dead Poets Society
581,Mel Brooks Movies,Blazing Saddles,Spaceballs,Young Frankenstein,The Producers,Men in Tights,Silent Movie,High Anxiety,History of the World
582,Jim Henson,Kermit,Labyrinth,Dark Crystal,Fraggle Rock,Sesame Street,Muppet Show,Creature Shop,The Storyteller,Puppeteer
583,The Muppets,Kermit,Miss Piggy,Fozzie Bear,Gonzo,Animal,Swedish Chef,Beaker,Dr Bunsen,Statler,Waldorf
584,Alice in Wonderland,Alice,White Rabbit,Cheshire Cat,Mad Hatter,Queen of Hearts,Caterpillar,Dormouse,March Hare,Tweedledee,Tweedledum
585,Types of Makeup,Lipstick,Mascara,Foundation,Eyeliner,Blush,Concealer,Primer,Bronzer,Highlighter,Eyeshadow
586,Cleaning Supplies,Bleach,Ammonia,Windex,Lysol,Detergent,Vinegar,Comet,Degreaser,Soap,Polish
587,Pots and Pans,Skillet,Wok,Saucepan,Dutch Oven,Stockpot,Griddle,Roaster,Frying Pan,Saute Pan,Crepe Pan
588,Hot Sauces,Tabasco,Sriracha,Cholula,Franks,Tapatio,Texas Pete,Valentina,Crystal,Truff,Sambar
589,Periodic Table,Hydrogen,Helium,Oxygen,Carbon,Nitrogen,Gold,Silver,Iron,Copper,Neon
590,Mary Poppins,Mary,Bert,Umbrella,Carpet Bag,Spoonful of Sugar,Chimney Sweep,Penguins,Kite,Mr Banks,Tuppence
591,Greasy Foods,Pizza,Cheeseburger,French Fries,Fried Chicken,Bacon,Onion Rings,Mozzarella Sticks,Corn Dog,Chimichanga,Poutine
592,Daredevils,Evel Knievel,Houdini,David Blaine,Travis Pastrana,Robbie Knievel,Philippe Petit,Nik Wallenda,Felix Baumgartner,Knoxville,Criss Angel
593,Fraudsters,Bernie Madoff,Charles Ponzi,Frank Abagnale,Jordan Belfort,Elizabeth Holmes,Anna Delvey,Billy McFarland,Simon Leviev,Enron,Wirecard
594,1960s TV,Star Trek,Batman,Bewitched,Addams Family,The Munsters,Twilight Zone,The Flintstones,The Jetsons,Gunsmoke,Gilligans Island
595,Billionaires,Elon Musk,Jeff Bezos,Bill Gates,Warren Buffett,Mark Zuckerberg,Larry Ellison,Michael Bloomberg,Oprah Winfrey,Walton,Arnault
596,Hitchcock Films,Psycho,The Birds,Vertigo,Rear Window,North by Northwest,Rope,Rebecca,Dial M for Murder,Notorious,Spellbound
597,Types of Coffee,Espresso,Latte,Cappuccino,Macchiato,Americano,Mocha,Flat White,Cold Brew,Cortado,Affogato
598,Antiquated Transport,Penny Farthing,Steam Engine,Horse Buggy,Chariot,Zeppelin,Stagecoach,Litter,Rickshaw,Steamship,Carriage
599,Hand Wear,Glove,Mitten,Ring,Bracelet,Watch,Knuckle Duster,Puppet,Henna,Fingerprint,Manicure
600,Cigarette Brands,Marlboro,Camel,Newport,Winston,Lucky Strike,Pall Mall,Kool,Benson Hedges,Dunhill,Parliament
601,Will Smith Movies,Men in Black,Independence Day,Fresh Prince,Aladdin,Happyness,I Am Legend,Bad Boys,Hitch,Ali,King Richard
602,Jim Carrey Movies,Ace Ventura,The Mask,Dumb and Dumber,Truman Show,Liar Liar,Grinch,Bruce Almighty,Eternal Sunshine,Sonic,Riddler
603,Simpsons Characters,Homer,Marge,Bart,Lisa,Maggie,Moe,Burns,Flanders,Skinner,Krusty
604,Playboy Centerfolds,Pamela Anderson,Marilyn Monroe,Jenny McCarthy,Anna Nicole Smith,Carmen Electra,Shannon Tweed,Hefner,Bunny,Mansion,Magazine
605,Famous Recluses,Howard Hughes,JD Salinger,Emily Dickinson,Harper Lee,Greta Garbo,Bobby Fischer,Syd Barrett,Pynchon
606,College Football Champs,Alabama,Georgia,LSU,Clemson,Ohio State,Florida State,Auburn,Michigan,Texas,USC
607,NCAA BB Champs,Duke,UNC,Kansas,Kentucky,UConn,Villanova,Baylor,Virginia,Louisville,UCLA
608,Microsoft,Windows,Office,Xbox,Excel,Word,PowerPoint,Bill Gates,Surface,Outlook,Azure
609,Apple,iPhone,iPad,Mac,Steve Jobs,Siri,Watch,AirPods,iTunes,iOS,MacBook
610,IBM,Watson,Mainframe,ThinkPad,Deep Blue,Selectric,Punch Card,Armonk,Big Blue,Typewriter,Server
611,NATO Members,USA,UK,France,Germany,Canada,Italy,Turkey,Spain,Poland,Norway
612,Joseph Stalin,Dictator,Soviet,Communism,Gulag,Five Year Plan,Man of Steel,Georgia,World War II
613,USSR,Soviet Union,Communism,Cold War,Kremlin,Red Army,Sputnik,Cosmonaut,Sickle,Hammer
614,KGB,Spy,Intelligence,Secret Police,Cold War,Putin,Espionage,Surveillance,Lubyanka
615,Famous Explorers,Columbus,Magellan,Marco Polo,Lewis,Clark,Cook,Shackleton,Armstrong,Vespucci,Hudson
616,COLORS,RED,BLUE,GREEN,YELLOW,ORANGE,PURPLE,PINK,BLACK,WHITE,BROWN,GRAY,GOLD,SILVER,BRONZE,COPPER,TEAL,NAVY,LIME,MAROON,CYAN,RUST,JADE,PLUM,VIOLET,INDIGO
617,BUGS,ANT,BEE,FLY,SPIDER,WORM,LADYBUG,BUTTERFLY,MOSQUITO,BEETLE,MOTH,GNAT,FLEA,TICK,WASP,SLUG,MITE,CATERPILLAR,CENTIPEDE,SNAIL,CRICKET
618,CLOTHES,SHIRT,PANTS,SHOE,HAT,SOCK,DRESS,COAT,JACKET,SCARF,GLOVE,VEST,BELT,BOOT,CAP,HOOD,SHORTS,TSHIRT,SANDALS,SWIMSUIT,SUNGLASSES,SWEATER,MITTENS,SKIRT,JEANS,LEGGINGS,SWEATS,ONESIE,BIB,TANK,BLOUSE
619,KITCHEN ITEMS,FORK,SPOON,KNIFE,PLATE,BOWL,CUP,GLASS,PAN,POT,NAPKIN,DISH,MUG,TRAY,STOVE,SINK,FRIDGE,OVEN,WHISK,LADLE,SPATULA,TOASTER,BLENDER,MIXER
620,SCHOOL ITEMS,PENCIL,PEN,PAPER,BOOK,GLUE,RULER,DESK,CHAIR,TEACHER,MAP,QUIZ,TEST,PASS,MARKER,CRAYON,SCISSORS,CHALK,NOTEBOOK,HIGHLIGHTER,BOARD,BACKPACK,LUNCH,BUS,BELL
621,TOYS,BALL,DOLL,BLOCK,CAR,PUZZLE,KITE,YO-YO,ROBOT,TEDDY BEAR,TOP,BIKE,DRUM,GAME,LEGO,LOGS,TILES,BRICKS,SLINKY,ACTION FIGURE,TRAIN
622,SNACKS,CHIPS,COOKIE,CANDY,POPCORN,CAKE,DONUT,ICECREAM,PRETZEL,NUTS,DIP,BAR,PIE,CRACKER,YOGURT
623,FOOD,EGG,TOAST,CEREAL,PANCAKE,WAFFLE,BACON,SAUSAGE,OATMEAL,SANDWICH,SOUP,SALAD,PIZZA,BURGER,HOTDOG,TACO,FRIES,STEAK,PASTA,RICE,MEATLOAF,MEAT,BUN,JAM,HAM
624,NATURE,TREE,FLOWER,GRASS,LEAF,DIRT,ROCK,SAND,WATER,SKY,SUN,MOON,MUD,DUST,STONE,CLAY,BUSH,PATH,MOSS,FERN,RIVER,LAKE,POND,STREAM
625,SPACE,ROCKET,ASTRONAUT,ALIEN,PLANET,STAR,MOON,SUN,DARK,COLD,VOID,MARS,ORBIT,COMET,METEOR,GALAXY
626,PIRATES,SHIP,MAP,GOLD,PARROT,EYEPATCH,HOOK,SWORD,FLAG,SEA,X
627,MUSIC,SONG,DRUM,GUITAR,PIANO,FLUTE,HORN,BELL,SINGER,GONG,BASS,HARP,LUTE,NOTE,TUNE
628,ART,PAINT,DRAW,COLOR,MARKER,CRAYON,PAPER,CLAY,GLUE,INK,WAX,OIL,DYE,TAPE,CANVAS,SKETCH,BRUSH,EASEL,PENCIL
629,SIZES,BIG,SMALL,TALL,SHORT,LONG,WIDE,THIN,FAT,HUGE,TINY,GIANT,LARGE,LITTLE,MINI,MICRO
630,SPEEDS,FAST,SLOW,QUICK,RAPID,SWIFT,TURTLE,SNAIL,CHEETAH,STOP,GO,RACE,DASH,ZOOM,CRAWL,PLOD,DELAY,LAG
631,CAMPING,TENT,FIRE,WOOD,SLEEPING BAG,FLASHLIGHT,S MORES,HIKE,LANTERN,COMPASS,CANTEEN,BACKPACK,BOOTS
632,BEACH,SAND,OCEAN,SHELL,WAVE,TOWEL,UMBRELLA,BUCKET,SPADE,CRAB,GULL,DUNE,KELP,RAFT,FLOAT,SWIM,SUN
633,PARTY,CAKE,BALLOON,GIFT,CANDLE,GAME,FRIENDS,MUSIC,DANCE,CARD,HAT,STREAMER,CONFETTI
634,HALLOWEEN,GHOST,WITCH,PUMPKIN,CANDY,COSTUME,BAT,SPIDER,SKELETON,MONSTER,DARK,SCARE,TRICK
635,PLAYGROUND,SLIDE,SWING,SANDBOX,SEESAW,LADDER,BENCH,BARS,RING,FORT,MERRY GO ROUND,TUNNEL,CLIMB,TAG,SKIP,HIDE,SEEK
636,CIRCUS,CLOWN,LION,TENT,ACROBAT,POPCORN,TICKET,MAGIC,SHOW,RING
637,BIRTHDAY,CAKE,CANDLE,CARD,PARTY,GIFT,AGE,YEAR,BALLOONS,GAMES,FRIENDS,SONG
638,MONEY,COIN,DOLLAR,BANK,PENNY,QUARTER,DIME,CASH
639,MAIL,LETTER,STAMP,BOX,CARD,PACKAGE,MAILMAN,TRUCK
640,LIBRARY,BOOK,READ,QUIET,SHELF,CARD,DESK,STORY,COMPUTER
641,MOVIES,POPCORN,SEAT,SCREEN,TICKET,CANDY,FILM,SHOW,SNACKS,SODA,NACHOS,PRETZEL,SLUSHIE
642,DOCTOR,SHOT,MEDICINE,NURSE,SICK,HEALTH,CHECKUP,BANDAGE,PILL,CHECK,WAIT
643,DENTIST,TEETH,BRUSH,FLOSS,CHAIR,SMILE,CLEAN,OPEN
644,FIRE STATION,TRUCK,HOSE,LADDER,WATER,ALARM,POLE,HELMET
645,POLICE,CAR,BADGE,UNIFORM,HELP,SAFETY,SIREN,LIGHTS
646,PICNIC,BASKET,BLANKET,SANDCH,ANT,PARK,SUN,FOOD,APPLE,GRAPE,JUICE,COOKIE
647,BAKING,FLOUR,SUGAR,EGG,MILK,MIX,BOWL,OVEN,YEAST,BUTTER,SODA
648,READING,BOOK,PAGE,WORD,PICTURE,STORY,LIBRARY,LOOK
649,DIRECTIONS,UP,DOWN,LEFT,RIGHT,IN,OUT,OVER,UNDER,EAST,WEST,BACK,NEAR
650,PLACES,HOME,SCHOOL,STORE,PARK,ZOO,BEACH,FARM,TOWN,CITY,SHOP
651,FLYING THINGS,BIRD,PLANE,KITE,BEE,BUTTERFLY,BAT,BALLOON,FLY,WASP,OWL,DUCK,CLOUD
652,SWIMMERS,FISH,WHALE,DUCK,FROG,TURTLE,DOG,SHARK,SEAL,CRAB
653,WHEELED ITEMS,CAR,BIKE,BUS,TRUCK,SKATE,WAGON,SCOOTER,VAN,CART,TRAIN
654,GROWING THINGS,BABY,PUPPY,KITTEN,FLOWER,TREE,PLANT,HAIR,GRASS,NAIL,SEED
655,SKY OBJECTS,SUN,MOON,STAR,CLOUD,BIRD,PLANE,KITE,RAIN,PLANET,COMET,DARK,SPACE,RAINBOW
656,HOUSE ITEMS,DOOR,WINDOW,WALL,FLOOR,ROOF,LIGHT,ROOM
657,BABY ANIMALS,PUPPY,KITTEN,CHICK,CALF,FOAL,LAMB,CUB,DUCKLING
658,SOFT THINGS,PILLOW,COTTON,FEATHER,CLOUD,FUR,VELVET,SILK,BLANKET,BUNNY,MOSS
659,LOUD THINGS,SIREN,DRUM,THUNDER,SCREAM,TRUMPET,FIREWORK,ALARM,HORN,YELL,BANG,CRASH,BARK
660,STICKY THINGS,GLUE,TAPE,HONEY,SYRUP,GUM,STICKER,JAM,PASTE,SAP
661,HAPPY THINGS,SMILE,LAUGH,HUG,GIFT,FRIEND,PLAY,WIN
662,SAD THINGS,CRY,TEAR,FROWN,HURT,LOSE,SICK,MISS
663,SCARY THINGS,GHOST,MONSTER,DARK,SPIDER,SNAKE,STORM,NIGHTMARE
664,FUNNY THINGS,JOKE,CLOWN,TICKLE,SILLY,GIGGLE,PRANK,LAUGH
665,FRIENDS,PAL,BUDDY,MATE,BESTIE,PEER,CLASSMATE,NEIGHBOR
666,BUILDINGS,HOUSE,APARTMENT,BARN,CASTLE,TOWER,SHED,CABIN,HUT,COOP
667,CAR PARTS,WHEEL,DOOR,SEAT,HORN,LIGHT,TIRE,WINDOW,TRUNK,KEY,HOOD
668,COMPUTER,SCREEN,MOUSE,KEY,PAD,CORD,GAME,WEB,CLICK
669,PHONE,APP,CALL,TEXT,GAME,PIC,CAM,RING,TOUCH
670,ICECREAM FLAVORS,VANILLA,CHOCO,STRAWBERRY,MINT,CHIP,COOKIE,BERRY,OREO,NUTS,FUDGE,FRUIT,SPRINKLES,COFFEE
671,SANDWICH PARTS,BREAD,MEAT,CHEESE,LETTUCE,TOMATO,MAYO,PICKLE
672,SHINY THINGS,SUN,STAR,LAMP,GOLD,GEM,LIGHT,MOON,FIRE,SILVER,MIRROR,GLASS,WATER,EYE,COIN
673,BOUNCY THINGS,BALL,KANGAROO,BUNNY,POGO,RUBBER,EGG,FROG,SPRING,JUMP,HOP
674,MELTING THINGS,ICE,SNOW,CANDLE,BUTTER,CHEESE,WAX,CANDY,CHOCO,FROST
675,MYTHICAL PLACES,AGARTHA,ARCADIA,ASGARD,ATLANTIS,AVALON,AXIS MUNDI,CAMELOT,CIBOLA,COCKAIGNE,DORADO,EDEN,EL DORADO,HELL,HEAVEN,HEL,HYPERBOREA,JOTUNHEIM,LEMURIA,LOTHLORIEN,MEROPIS,MOUNT OLYMPUS,MUSPELHEIM,NIFLHEIM,OLYMPUS,PANDEMONIUM,PURGATORY,SHAMBHALA,SHANGRI LA,SVARTALFHEIM,TARTARUS,TROY,UNDERWORLD,UTOPIA,VALHALLA,VANAHEIM,XANADU,YGGDRASIL,ZION
676,FAST FOOD CHAINS,BURGER KING,WENDY’S,MCDONALD'S,TACO BELL,SUBWAY,KFC,PIZZA HUT,DOMINO'S,CHIPOTLE,ARBYS,DUNKIN,SONIC
677,SEASONS,SPRING,SUMMER,FALL,WINTER,AUTUMN
678,RIGHTS,FREEDOM,JUSTICE,EQUALITY,DIGNITY,PEACE,LAW,CITIZENSHIP
679,EVOLUTION,HOMO,HABILIS,ERECTUS,NEANDERTHAL,SAPIENS,FLORESIENSIS,RUDOLFENSIS,SELECTION,DRIFT,SPECIATION,ADAPTATION,PHYLOGENY,CLADISTICS,HOMOLOGY
680,CULTURAL EXPRESSIONS,MUSIC,DANCE,THEATER,STORY,PAINTING,POETRY,FESTIVAL
681,LIFE STAGES,INFANT,CHILD,TEEN,ADULT,SENIOR,ELDERLY,YOUTH
682,SOCIAL STRUCTURES,FAMILY,COMMUNITY,TRIBE,NATION,STATE,CLUB,UNION
683,EMOTIONS,JOY,GRIEF,ENVY,PRIDE,GUILT,LOVE,SURPRISE
684,HOMINIDS,AUSTRALOPITHECUS,HOMO,HABILIS,ERECTUS,SAPIENS,NEANDERTHAL,DENISOVAN
685,NEEDS,FOOD,WATER,SHELTER,CLOTHING,SLEEP,HEALTH,LOVE
686,BODY SYSTEMS,CIRCULATORY,RESPIRATORY,NERVOUS,DIGESTIVE,MUSCULAR,SKELETAL,ENDOCRINE
687,CULTURES,WESTERN,EASTERN,INDIGENOUS,MEDITERRANEAN,NOMADIC,URBAN,RURAL
688,SOCIAL ROLES,LEADER,FOLLOWER,GUARDIAN,HEALER,TEACHER,WORKER,ARTIST
689,VALUES,HONESTY,RESPECT,RESPONSIBILITY,KINDNESS,PATIENCE,COURAGE,HARMONY
690,COMMUNICATION,LANGUAGE,GESTURE,WRITING,ART,MUSIC,SPEECH,TECHNOLOGY
691,ORIGINS,AFRICA,EVOLUTION,HOMINID,FOSSIL,DNA,ANCESTOR,MIGRATION
692,ACTIVITIES,RUNNING,JUMPING,SWIMMING,CLIMBING,FISHING,HUNTING,GATHERING
693,SOCIETY,FAMILIES,FRIENDSHIP,RELIGION,WORK,LAW,POLITICS,EDUCATION
694,KNOWLEDGE,SCIENCE,HISTORY,PHILOSOPHY,MATHEMATICS,LITERATURE,ART,RELIGION
695,HEALTH,DISEASE,TREATMENT,VACCINATIONS,EXERCISE,DIET,MEDICINE,REST
696,JOURNEY,MIGRATION,SETTLEMENT,EXPLORATION,TRADE,WAR,PEACE,INNOVATION
697,ETHICS,JUSTICE,TRUTH,FREEDOM,EQUALITY,RESPONSIBILITY,COMPASSION,INTEGRITY
698,CREATIVITY,ART,MUSIC,LITERATURE,DANCE,THEATER,DESIGN,ARCHITECTURE
699,CONFLICT,WAR,PEACE,TREATY,DISPUTE,NEGOTIATION,ALLIANCE,MEDIATION
700,TRADITIONAL CLOTHING,KIMONO,SARI,KILT,DUPATTA,CAFTAN,BOUBOU,DIRNDL
701,FOLKTALES,MERMAID,DRAGON,OGRE,FAIRY,TROLL,ELF,GIANT
702,ART TECHNIQUES,OIL,WATERCOLOR,FRESCO,ACRYLIC,ETCHING,PASTEL,MOSAIC
703,DANCES,TANGO,SALSA,BALLET,FLAMENCO,HIP HOP,CHA CHA,FOXTROT
704,MYTHOLOGY,ZEUS,THOR,ANUBIS,HERA,SHIVA,ODIN,ATHENA
705,POTTERY,CLAY,GLAZE,KILN,JARS,VASES,BOWLS,PITCHER
706,WRITING SYSTEMS,LATIN,CYRILLIC,HANZI,DEVANAGARI,ARABIC,RUNES,HEBREW
707,CUISINES,ITALIAN,THAI,MEXICAN,FRENCH,JAPANESE,GREEK,ETHIOPIAN
708,PHILOSOPHIES,STOICISM,EXISTENTIALISM,BUDDHISM,CONFUCIANISM,TAOISM,NIHILISM,UTILITARIANISM
709,THEATRE TYPES,TRAGEDY,COMEDY,OPERA,MUSICAL,PANTOMIME,IMPROV,BALLET
710,TRADITIONAL GAMES,CHESS,GO,CHECKERS,BACKGAMMON,DOMINOES,MAHJONG,BRIDGE
711,POETS,SHAKESPEARE,MAYA ANGELOU,EMILY DICKINSON,ROBERT FROST,RUMI,WHITMAN,SHELLEY
712,PAINTINGS,GUERNICA,STARRY NIGHT,THE SCREAM,MONA LISA,THE NIGHT WATCH,THE KISS,THE PERSISTENCE OF MEMORY
713,PHILANTHROPISTS,GATES,CARNEGIE,ANGELOU,ROCKEFELLER,CHAVEZ,KING,OBAMA
714,SCULPTORS,MICHELANGELO,DONATELLO,BERNINI,RODIN,BRANCUSI,MOORE,CANOVA
715,CEREMONIES,WEDDING,FUNERAL,GRADUATION,BAPTISM,BAR MITZVAH,CORONATION,ANNIVERSARY
716,HAIRSTYLES,BRAIDS,DREADLOCKS,BUN,PIXIE,PONYTAIL,PERM,AFRO
717,COMIC GENRES,MANGA,SUPERHERO,GRAPHIC NOVEL,WEBCOMIC,FANTASY,SCI FI,MYSTERY
718,ARCHITECTURAL LANDMARKS,EIFFEL TOWER,COLOSSEUM,PYRAMIDS,GREAT WALL,TAJ MAHAL,STONEHENGE,SAGRADA FAMILIA
719,CALLIGRAPHY STYLES,ITALIC,GOTHIC,COPPERPLATE,CURSIVE,SUMI,UNCIAL,SPENCERIAN
720,CULTURAL FOODS,BAGUETTE,TAMALE,DOSA,DUMPLING,PAELLA,CURRY,FUFU
721,POETIC FORMS,SONNET,HAIKU,LIMERICK,FREE VERSE,ODE,BALLAD,ACROSTIC
722,FASHION BRANDS,NIKE,ADIDAS,PUMA,REEBOK,UNDER ARMOUR,NEW BALANCE,ASICS
723,FOOD CHAINS,MCDONALD'S,KFC,SUBWAY,BURGER KING,WENDY'S,DUNKIN',TACO BELL
724,BEVERAGE BRANDS,COCA COLA,PEPSI,RED BULL,SPRITE,FANTA,DR PEPPER,MOUNTAIN DEW
725,SMARTPHONES,IPHONE,GALAXY,PIXEL,NOKIA,ONEPLUS,HUAWEI,MOTOROLA
726,SPORTS CARS,FERRARI,LAMBORGHINI,MCLAREN,PORSCHE,ASTON MARTIN,JAGUAR,BUGATTI
727,COSMETICS,L’ORÉAL,MAYBELLINE,ESTEE LAUDER,REVLON,CLINIQUE,COVERGIRL,SEPHORA
728,LUXURY BRANDS,GUCCI,PRADA,CHANEL,CARTIER,VERSACE,BURBERRY,DIOR
729,STREAMING PLATFORMS,NETFLIX,AMAZON PRIME,HULU,DISNEY PLUS,HBO MAX,APPLE TV,PEACOCK
730,HOME APPLIANCES,WHIRLPOOL,GE,KITCHENAID,BOSCH,LG,ELECTROLUX,SAMSUNG
731,OUTDOOR EQUIPMENT,THE NORTH FACE,COLUMBIA,MARMOT,PATAGONIA,REI,ARC'TERYX,EDDIE BAUER
732,AIRLINES,DELTA,EMIRATES,LUFTHANSA,QATAR AIRWAYS,BRITISH AIRWAYS,UNITED AIRLINES,AMERICAN AIRLINES
733,ONLINE SHOPPING,AMAZON,EBAY,ETSY,WALMART,ALIEXPRESS,BEST BUY,TARGET
734,PET FOOD,PEDIGREE,WHISKAS,BLUE BUFFALO,SCIENCE DIET,ROYAL CANIN,IAMS,NUTRO
735,INSURANCE,GEICO,PROGRESSIVE,STATE FARM,ALLSTATE,LIBERTY MUTUAL,METLIFE,AFLAC
736,TECH GADGETS,FITBIT,GOPRO,KINDLE,APPLE WATCH,SONY PLAYSTATION,NINTENDO SWITCH,XIAOMI
737,COFFEE BRANDS,STARBUCKS,DUNKIN',PEET’S COFFEE,CARIBOU,TIM HORTONS,COSTA COFFEE,LAVAZZA
738,BEAUTY PRODUCTS,NEUTROGENA,OLAY,NIVEA,DOVE,CETAPHIL,LAKMÉ,THE BODY SHOP
739,TECH ACCESSORIES,LOGITECH,SONY,ANKER,BEATS,SKULLCANDY,JBL,BOSE
740,HOUSEHOLD CLEANERS,LYSOL,CLOROX,PINE SOL,CASCADE,AJAX,MR. CLEAN,DAWN
741,SNACK BRANDS,LAYS,PRINGLES,CHEETOS,DORITOS,RUFFLES,GOLDFISH,CAMEL
742,TRAVEL GEAR,SAMSONITE,TUMI,AMERICAN TOURISTER,RICARDO,BRIGGS & RILEY,TRAVELPRO,DELSEY
743,HEALTH FOODS,KIND BAR,KASHI,BOB’S RED MILL,CLIF BAR,ORGAIN,BLUE DIAMOND,FAGE
744,AUTOMOTIVE PARTS,BOSCH,BRIDGESTONE,MOBIL 1,CASTROL,GOODYEAR,MICHELIN,PIRELLI
745,DAIRY BRANDS,CHOBANI,YOPLAIT,DANNON,FAGE,MILKLAND,STONYFIELD,HORIZON
746,CHILDREN’S TOYS,LEGO,HASBRO,MATTEL,FISHER PRICE,PLAYMOBIL,NERF,BARBIE
747,STREAMING DEVICES,ROKU,CHROMECAST,FIRE TV,APPLE TV,NVIDIA SHIELD,XIAOMI MI BOX,TIVO
748,FINANCIAL SERVICES,VISA,MASTERCARD,PAYPAL,AMERICAN EXPRESS,DISCOVER,CHASE,CITI
749,KITCHENWARE,PAMPERED CHEF,CUISINART,KEURIG,INSTANT POT,VITAMIX,LODGE,CALPHALON
750,PERFUME,CHANEL,DIOR,TOM FORD,CALVIN KLEIN,GUCCI,YVES SAINT LAURENT,JO MALONE
751,BICYCLE BRANDS,TREK,SPECIALIZED,GIANT,CANNONDALE,BMC,RALEIGH,SCOTT
752,MEN’S GROOMING,OLD SPICE,GILLETTE,NIVEA,BEARDBRAND,SUAVE,AMERICAN CREW,HARRY’S
753,FAST CASUAL,CHIPOTLE,PANDA EXPRESS,SHAKE SHACK,PANERA BREAD,MOE’S,FIVE GUYS,BLAZE
754,HERBIVORES,TRICERATOPS,STEGOSAURUS,ANKYLOSAURUS,BRACHIOSAURUS,EDMONTOSAURUS,PARASAUROLOPHUS,IGUANODON
755,FOSSIL TYPES,BONE,TOOTH,CLAW,TRACK,FEATHER IMPRESSION,SKULL,SHELL
756,PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,PERMIAN,CARBONIFEROUS,DEVONIAN,SILURIAN
757,EXTINCTION CAUSES,ASTEROID,VOLCANOES,CLIMATE CHANGE,SEA LEVEL,PREDATION,DISEASE,COMPETITION
758,BIOME TYPES,JUNGLE,LAKE,DESERT,COAST,TUNDRA,FOREST,SWAMP
759,CLASSIC BANDS,BEATLES,ROLLING STONES,LED ZEPPELIN,QUEEN,PINK FLOYD,THE WHO,AC DC
760,ROCK INSTRUMENTS,GUITAR,DRUMS,BASS,KEYBOARD,MICROPHONE,AMPLIFIER,PEDAL,DRUMSTICKS
761,ROCK GENRES,PUNK,HARD ROCK,GRUNGE,METAL,PROGRESSIVE,ALTERNATIVE,INDIE
762,ROCK LEGENDS,MICK JAGGER,FREDDIE MERCURY,DAVID BOWIE,JIMI HENDRIX,KURT COBAIN,JANIS JOPLIN,BRUCE SPRINGSTEEN,ELVIS
763,ICONIC ALBUMS,SGT PEPPER,DARK SIDE,ABBEY ROAD,BACK IN BLACK,THRILLER,NEVERMIND,RUMOURS,HOTEL CALIFORNIA
764,ROCK VENUES,WEMBLEY,FILLMORE,CBGB,RED ROCKS,MARQUEE,WHISKY A GO GO,ROYAL ALBERT HALL
765,ROCK FESTIVALS,WOODSTOCK,GLASTONBURY,ISLE OF WIGHT,MONTEREY,COACHELLA,LOLLAPALOOZA,BURNING MAN
766,FAMOUS ROCK SONGS,STAIRWAY TO HEAVEN,BOHEMIAN RHAPSODY,SMOKE ON WATER,HOTEL CALIFORNIA,IMAGINE,HIGHWAY TO HELL,LIKE A ROLLING STONE
767,ROCK APPAREL,LEATHER JACKET,DENIM JEANS,BAND T SHIRT,BANDANA,STUDDED BELT,COMBAT BOOTS,SUNGLASSES
768,ROCK BEHAVIORS,HEADBANG,GUITAR SOLO,MOSHING,SCREAMING,STAGE DIVE,ENCORE,JAM SESSION
769,RECORD TYPES,VINYL,LP,EP,SINGLE,COMPILATION,BOX SET,REISSUE
770,ROCK PRODUCERS,GEORGE MARTIN,RICK RUBIN,BRIAN ENO,MICKIE MOST,QUINCY JONES,BOB EZRIN,RICK PARASHAR
771,ROCK MEDIA,MTV,ROLLING STONE,NME,PITCHFORK,GARAGE BAND,SOUNDCLOUD,BILLBOARD
772,ROCK MARKERS,FESTIVAL,TOUR,ALBUM,SINGLE,SETLIST,ENCORE,HEADLINER
773,ROCK TV SHOWS,TOP OF THE POPS,SESSIONS AT WEST 54TH,FAB FOUR ELEVEN,LATER WITH JOOLS,THE OLD GREY WHISTLE TEST,SOUNDSTAGE,BEHIND THE MUSIC
774,ROCK GUITAR TYPES,STRATOCASTER,LES PAUL,TELECASTER,RICKENBACKER,FENDER,JAZZMASTER,SG
775,LEGENDARY CONCERTS,LIVE AID,MONTEREY POP,ISLE OF WIGHT,ALTAMONT,WOODSTOCK,READING FESTIVAL,GLASTONBURY
776,ROCK TECHNIQUES,BENDING,SLIDING,PALM MUTE,VIBRATO,PICKING,STRUMMING,HAMMER ON
777,VOCAL STYLES,SCREAMING,CROONING,RASPING,WHISPERING,SHOUTING,SINGING,GROWLING
778,GUITAR BRANDS,FENDER,GIBSON,IBANEZ,EPIPHONE,PRS,GRETSCH,JACKSON
779,ROCK DRUMMERS,BONHAM,PEART,KEEF,RICHARDS,GROHL,STARR,MOORE,MOON,BAKER,BARKER
780,ROCK BASSISTS,FLEA,ENTWISTLE,PAUL MCCARTNEY,GEDDY LEE,JOHN PAUL JONES,CLIFF BURTON,LEMMY
781,ROCK KEYBOARDISTS,RAY MANZAREK,JON LORD,RICK WAKEMAN,ELTON JOHN,GREGG ALLMAN,KEITH EMERSON,TONY BANKS
782,MUSIC STYLES,BLUES ROCK,PSYCHEDELIC,GARAGE ROCK,FOLK ROCK,SOUTHERN ROCK,GLAM ROCK,HARDCORE,POP,JAZZ,RAP,COUNTRY,BLUES,CLASSICAL,REGGAE,METAL,TECHNO
783,ROCK BAND ROLES,VOCALIST,GUITARIST,BASSIST,DRUMMER,KEYBOARDIST,BACKING VOCALS,PRODUCER
784,ROCK PIONEERS,CHUCK BERRY,ELVIS PRESLEY,BUDDY HOLLY,JERRY LEE LEWIS,LITTLE RICHARD,BO DIDDLEY,BB KING
785,ROCK TERMS,RIFF,BRIDGE,CHORUS,VERSE,HOOK,TEMPO,OUTRO
786,FAMOUS ROCK CITIES,SEATTLE,LONDON,NEW YORK,LOS ANGELES,NASHVILLE,DETROIT,MEMPHIS
787,ROCK REFERENCES,MIC STAND,STAGE LIGHTS,GUITAR PICK,SET LIST,FAN CLUB,BACKSTAGE,SOUNDCHECK
788,POPULAR ROCK DUOS,WHITE STRIPES,THE BLACK KEYS,STEVIE NICKS,JIMMY PAGE,HALL & OATES,SIMON & GARFUNKEL,ROXETTE
789,ROCK ICONS,ELVIS,FREDDIE,COBAIN,MORRISON,JAGGER,YOUNG,PLANT
790,ROCK LYRICS THEMES,LOVE,REBELLION,FREEDOM,HEARTBREAK,WAR,PEACE,PARTYING
791,ROCK STYLES,NEW WAVE,POST PUNK,SYNTH ROCK,GARAGE PUNK,MATH ROCK,SURF ROCK,ROCKABILLY
792,ROCK DRUMMING,BASS drum,SNARE,HI HAT,CYMBALS,TOMS,DOUBLE KICK,BRUSHES
793,ROCK TOURS,BUS,VAN,PLANE,CREW,MERCH,MEET AND GREAT,SOUNDCHECK
794,ROCK MEMORABILIA,POSTERS,RECORDS,GUITAR PICK,SETLIST,BACKSTAGE PASS,AUTOGRAPH,TICKET STUB
795,ROCK RADIO STATIONS,KROQ,BBC RADIO 1,ABSOLUTE CLASSIC,PLANET ROCK,XFM,SIRIUS XM,TRIPLE J
796,ROCK DOCUMENTARIES,SOME KIND OF MONSTER,THE LAST WALTZ,SHINE A LIGHT,GIMME SHELTER,ANVIL,IT MIGHT GET LOUD,MUSCLE SHOALS
797,ROCK BATTLES,GUITAR DUEL,SINGING CONTEST,DANCE OFF,BAND FACE OFF,DRUM BATTLE,SOLO SHOWDOWN,JAM BATTLE
798,FOOTBALL TERMS,QUARTERBACK,TACKLE,TOUCHDOWN,FIELD GOAL,HELMET,END ZONE,INTERCEPTION,OFFSIDE,BLITZ
799,BASKETBALL TERMS,DRIBBLE,FREE THROW,REBOUND,THREE POINTER,TIMEOUT,BLOCK,ALLEY OOP,ASSIST,FOUL
800,BASEBALL TERMS,PITCHER,HOME RUN,STRIKE,BASEBALL GLOVE,INNING,BATTER,DOUBLE PLAY,CURVEBALL,OUTFIELD
801,SOCCER ACTIONS,GOAL,CORNER KICK,PASS,DRIBBLE,HEADER,FOUL,KICKOFF,OFFSIDE,PENALTY KICK
802,NFL TEAMS,PATRIOTS,COWBOYS,PACKERS,GIANTS,SEAHAWKS,STEELERS,BRONCOS,DOLPHINS,BUCCANEERS
803,BASEBALL EQUIPMENT,BAT,GLOVE,BALL,HELMET,UNIFORM,BASE,CATCHER MASK,CLEATS,PLATE
804,SPORTS OFFICIALS,REFEREE,UMPIRE,LINESMAN,JUDGE,FLAGGER,OFFICIAL,STARTER,SCORER,TIMEKEEPER
805,NFL POSITIONS,WIDE RECEIVER,RUNNING BACK,LINEBACKER,TIGHT END,CORNERBACK,FULLBACK,KICKER,PUNTER,SAFETY
806,BASEBALL PLAYS,DOUBLE PLAY,HOME RUN,FOUL BALL,STEAL,STRIKEOUT,DUGOUT,BUNT,WALK,TAG OUT
807,HOCKEY TERMS,PUCK,STICK,GOAL,PENALTY BOX,FACEOFF,SUDDEN DEATH,POWER PLAY,OVERTIME,SLAPSHOT
808,OLYMPICS MEDALS,GOLD,SILVER,BRONZE,PODIUM,VICTORY,CEREMONY,AWARD,CHAMPION,RECORD
809,FOOTBALL PLAYS,HUDDLE,SNAP,BLITZ,SCREEN PASS,TRAP,ZONE,SPIKE,MISDIRECTION,FLEA FLICKER
810,BASKETBALL FOULS,PERSONAL,FOUL,TECHNICAL,FLAGRANT,CHARGE,DOUBLE DRIBBLE,TRAVELING,GOALTENDING,BLOCK
811,CYCLING EVENTS,TOUR DE FRANCE,TIME TRIAL,PELOTON,SPRINT,CLIMB,STAGE,BREAKAWAY,DOMESTIQUE,SLIPSTREAM
812,GYMNASTICS EVENTS,FLOOR,VAULT,UNEVEN BARS,BALANCE BEAM,RINGS,PARALLEL BARS,POMMEL HORSE,DISMOUNT,MOUNT
813,SOCCER TACTICS,OFFSIDE TRAP,PRESSING,COUNTERATTACK,MAN MARKING,ZONAL MARKING,PARKING THE BUS,THROUGH BALL,CROSS,SET PIECE
814,HOCKEY EQUIPMENT,PUCK,STICK,HELMET,SKATES,SHOULDER PADS,MOUTHGUARD,GLOVES,GOAL CAGE,NECK GUARD
815,FOOTBALL OFFENSES,SPREAD,OPTION,WEST COAST,RUN AND SHOOT,NO HUDDLE,WILDCAT,PLAY ACTION,SCREEN PASS,BOOTLEG
816,NFL CHAMPIONSHIPS,SUPER BOWL,CONFERENCE CHAMPIONSHIP,DIVISIONAL PLAYOFF,WILD CARD,PRO BOWL,REGULAR SEASON,PRESEASON,DRAFT,TRAINING CAMP
817,CLASSIC VIDEO GAMES,SEGA SATURN,ATARI JAGUAR,NEO GEO,COLECOVISION,INTELLIVISION,VECTREX,BANDAI
818,DEFUNCT CAR BRANDS,HUMMER,PLYMOUTH,OLDSMOBILE,SATURN,DAEWOO,LEYLAND,TALBOT
819,DISCONTINUED FAST FOOD,CHI CHI'S,BURGER CHEF,FOSTER'S FREEZE,RED BARN,HOWARD JOHNSON'S,SNOW WHITE,PEDLEY
820,OBSOLETE CAMERAS,POLAROID,ARGUS,MINOLTA,OLYMPUS,AGFA,KONICA,SANKYO
821,PAST PHONE BRANDS,NOKIA SIEMENS,BLACKBERRY,PALM,MOTOROLA RAZR,KYOCERA,SANYO,ALCATEL
822,DEAD RETAILERS,BLOCKBUSTER,TOYS R US,BORDERS,RADIO SHACK,FANNY FARMER,LINENS N THINGS,CIRCUIT CITY
823,CLASSIC TOY LINES,MICRONAUTS,SILVERHAWKS,HE-MAN,TIGER ELECTRONICS,G.I. JOE,ZOIDS,SHOGUN WARRIORS
824,OLD BEVERAGE BRANDS,BEVERLY,ORBITZ,CRYSTAL PEPSI,TAB,SANTAS OWN,OK SODA,SQUIRT
825,RETRO COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH
826,DISCONTINUED SNACK FOODS,PLANTERS CHEEZ BALLS,BUGLES,ORBIT,PB MAX,TANG,QUISP,CRISPIX
827,NO MORE AIRLINES,PIEDMONT,CONTINENTAL AIRLINES,OZARK,MORRIS AIR,WESTERN AIRLINES,NWA,MIDWAY
828,FORGOTTEN FAST FOOD CHAINS,SBARRO,CHI CHI'S,RED ROBIN,HOT SHOPPES,Dog n suds,Pumpkin Patch,HOWARD JOHNSON'S
829,OBSOLETE TECH DEVICES,BETAMAX,VHS,MINIDISC,ZUNE,NEWTON,WEBTV,WALKMAN
830,DEFUNCT FURNITURE RETAILERS,CIRCUIT CITY,LINENS N THINGS,FURNITURE ROW,DOREL,VALUE CITY,LEVITZ,FASHION BUG
831,DISCONTINUED CAR MODELS,PLYMOUTH VOYAGER,HUMMER H2,SATURN VUE,OLDSMOBILE ALERO,TALBOT TAGORA,DAEWOO LANOS,LEYLAND TERRIER
832,PAST SODA BRANDS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY
833,DEAD VIDEO GAME CONSOLES,INTELLIVISION,ATARI JAGUAR,COLECOVISION,VECTREX,SEGA SATURN,NEO GEO,3DO
834,DEFUNCT AIRLINES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,HAWKER SIDDELEY,ZOOM AIR
835,CLASSIC ELECTRONICS,BEBOX,POLAROID,ARGUS,MINOLTA,KONICA,AGFA,SANKYO
836,DEFUNCT CAR COMPANIES,OLDSMOBILE,PLYMOUTH,SATURN,LEYLAND,TALBOT,DAEWOO,HUMMER
837,TECH BRANDS NO MORE,NORTEL,SUN MICROSYSTEMS,COMPAQ,NETSCAPE,BEBOX,BLACKBERRY,PALM
838,DISCONTINUED TOY LINES,TIGER ELECTRONICS,MICRONAUTS,SILVERHAWKS,G.I. JOE,HE-MAN,ZOIDS,SHOGUN WARRIORS
839,DEAD RETAIL CHAINS,TOYS R US,BORDERS,RADIO SHACK,LINENS N THINGS,CIRCUIT CITY,FANNY FARMER,VALUE CITY
840,CLASSIC CAMERAS,POLAROID,MINOLTA,ARGUS,OLYMPUS,KONICA,AGFA,SANKYO
841,DISCONTINUED AIRLINES,WESTERN AIRLINES,NWA,PIEDMONT,OZARK,CONTINENTAL AIRLINES,MORRIS AIR,MIDWAY
842,OBSOLETE SOFT DRINKS,SANTAS OWN,OK SODA,CRYSTAL PEPSI,TAB,PEPSI BLUE,FRESCA,BEVERLY
843,FADED VIDEO CONSOLES,SEGA SATURN,3DO,NEO GEO,COLECOVISION,INTELLIVISION,ATARI JAGUAR,VECTREX
844,OLD AIRLINE NAMES,TWA,PAN AM,EASTERN,BRANIFF,PEOPLE EXPRESS,HAWKER SIDDELEY,ZOOM AIR
845,PAST COMPUTER BRANDS,COMPAQ,AMIGA,PACKARD BELL,TANDY,OSBORNE,ZENITH,DICK SMITH
846,NO LONGER SOLD SODAS,TAB,ORBITZ,OK SODA,SANTAS OWN,CRYSTAL PEPSI,FRESCA,PEPSI BLUE
847,OLD FAST FOOD CHAINS,CHI CHI'S,BURGER CHEF,FOSTER'S FREEZE,RED BARN,HOWARD JOHNSON'S,SNOW WHITE,PEDLEY
848,DISCONTINUED BEVERAGES,ORBITZ,TAB,CRYSTAL PEPSI,SANTAS OWN,OK SODA,BEVERLY,FRESCA
849,NOBLE GASES,HELIUM,NEON,ARGON,KRYPTON,XENON,RADON,OGANESSON
850,HALOGENS,FLUORINE,CHLORINE,BROMINE,IODINE,ASTATINE,TENNESSINE
851,ALKALI METALS,LITHIUM,SODIUM,POTASSIUM,RUBIDIUM,CESIUM,FRANCIUM
852,ARM BONES,HUMERUS,RADIUS,ULNA,CLAVICLE,SCAPULA,CARPALS,METACARPALS,PHALANGE
853,LEG BONES,FEMUR,TIBIA,FIBULA,PATELLA,TARSAL,METATARSAL,PHALANGE
854,CRANIAL NERVES,OLFACTORY,OPTIC,VAGUS,FACIAL,TRIGEMINAL,TROCHLEAR,ABDUCENS,VESTIBULOCOCHLEAR,GLOSSOPHARYNGEAL,OCULOMOTOR
855,BRAIN LOBES,FRONTAL,PARIETAL,TEMPORAL,OCCIPITAL,INSULA,LIMBIC
856,CLOUD TYPES,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO,CIRROSTRATUS,STRATOCUMULUS,ALTOCUMULUS,ALTOSTRATUS,NIMBOSTRATUS,CIRROCUMULUS
857,GEOLOGICAL ERAS,PALEOZOIC,MESOZOIC,CENOZOIC,PRECAMBRIAN,JURASSIC,TRIASSIC,CRETACEOUS,CAMBRIAN,DEVONIAN,PERMIAN,PALEOCENE,EOCENE,OLIGOCENE,MIOCENE,PLIOCENE,PLEISTOCENE,HOLOCENE
858,WIND TYPES,CHINOOK,MISTRAL,SIROCCO,ZEPHYR,TRADE,MONSOON,GALE,HABOOB,SANTA ANA
859,TAXONOMY RANKS,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES,DOMAIN
860,PARTICLES,PROTON,NEUTRON,ELECTRON,QUARK,PHOTON,GLUON,BOSON,MUON,TAU,NEUTRINO,FERMION,LEPTON,PHONON,ANYON,GRAVITON
861,MATH CONSTANTS,PI,EULER,GOLDEN RATIO,INFINITY,IMAGINARY,PRIME,AVOGADRO,PLANCK
862,FALLACIES,STRAWMAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,FALSE DICHOTOMY,SUNK COST
863,PHILOSOPHERS,PLATO,KANT,NIETZSCHE,SARTRE,HUME,LOCKE,DESCARTES,HEGEL,ZENO,CRITO,PHAEDO,TIMAEUS,SOCRATES,ARISTOTLE,ROUSSEAU,VOLTAIRE,SPINOZA,CAMUS
864,SHAKESPEARE,HAMLET,MACBETH,OTHELLO,TEMPEST,LEAR,ROMEO,JULIET,CORIOLANUS,TITUS ANDRONICUS,DREAM,MUCH ADO,TWELFTH NIGHT,AS YOU LIKE IT,ERRORS,HENRY V,RICHARD III,KING JOHN
865,AUSTEN NOVELS,EMMA,PERSUASION,MANSFIELD,NORTHANGER,PRIDE AND PREJUDICE,SENSE AND SENSIBILITY
866,POETIC METERS,IAMBIC,TROCHAIC,ANAPESTIC,DACTYLIC,SPONDAIC,PYRRHIC
867,LITERARY DEVICES,IRONY,METAPHOR,SIMILE,SATIRE,ALLEGORY,HYPERBOLE,ALLITERATION,PERSONIFICATION,ONOMATOPOEIA,SYMBOLISM,IMAGERY
868,OPERA VOICES,SOPRANO,ALTO,TENOR,BASS,BARITONE,MEZZO,CONTRALTO,COUNTERTENOR
869,TEMPO MARKINGS,LARGO,ADAGIO,ANDANTE,ALLEGRO,PRESTO,VIVACE,MODERATO
870,CHESS OPENINGS,SICILIAN,GAMBIT,RUI LOPEZ,CARO KANN,FRENCH,ENGLISH,SCANDINAVIAN,KINGS INDIAN
871,POKER HANDS,ROYAL FLUSH,FULL HOUSE,STRAIGHT,PAIRS,KICKER,ANTE,FLUSH,THREE OF A KIND
872,TAROT CARDS,FOOL,MAGICIAN,EMPRESS,LOVERS,CHARIOT,HERMIT,TOWER,PRIESTESS,EMPEROR,HIEROPHANT
873,ZODIAC CHINESE,RAT,OX,TIGER,RABBIT,DRAGON,SNAKE,HORSE,GOAT,MONKEY,ROOSTER,DOG,PIG
874,GREEK MUSES,CLIO,THALIA,ERATO,URANIA,CALLIOPE,TERPSICHORE,POLYHYMNIA,MELPOMENE,EUTERPE
875,NORSE WORLDS,ASGARD,MIDGARD,JOTUNHEIM,HELHEIM,VANAHEIM,ALFHEIM,NIFLHEIM,MUSPELHEIM
876,ROMAN GODS,JUPITER,JUNO,MARS,VENUS,MERCURY,NEPTUNE,PLUTO,MINERVA,VULCAN
877,US WARS,REVOLUTION,CIVIL,VIETNAM,KOREA,GULF,IRAQ,AFGHAN,1812
878,BRITISH MONARCHS,HENRY,ELIZABETH,VICTORIA,GEORGE,WILLIAM,CHARLES,ANNE,EDWARD,RICHARD
879,EXPLORERS,COLUMBUS,MAGELLAN,COOK,DRAKE,HUDSON,CARTIER,VESPUCCI,LEWIS,CLARK
880,INVENTORS,TESLA,EDISON,BELL,WRIGHT,FORD,MORSE,WHITNEY,GUTENBERG,DA VINCI
881,NOBEL PRIZES,PEACE,PHYSICS,CHEMISTRY,MEDICINE,LITERATURE,ECONOMICS
882,IVY LEAGUE,HARVARD,YALE,PRINCETON,COLUMBIA,BROWN,DARTMOUTH,CORNELL,PENN
883,SEVEN WONDERS,PYRAMID,GARDENS,ZEUS,TEMPLE,MAUSOLEUM,COLOSSUS,LIGHTHOUSE
884,JUPITER MOONS,IO,EUROPA,GANYMEDE,CALLISTO,AMALTHEA,HIMALIA,ELARA
885,SATURN MOONS,TITAN,ENCELADUS,MIMAS,RHEA,DIONE,IAPETUS,TETHYS
886,DWARF PLANETS,PLUTO,ERIS,HAUMEA,MAKEMAKE,CERES,SEDNA,ORCUS,QUAOAR,GONGGONG,SALACIA
887,PROGRAMMING LANGUAGES,PYTHON,JAVA,RUST,RUBY,COBOL,FORTRAN,LISP,SWIFT,C PLUS PLUS,GO,HASKELL,JAVASCRIPT,CSHARP,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA
888,OPERATING SYSTEMS,LINUX,WINDOWS,MACOS,UNIX,DOS,ANDROID,IOS,BSD,SOLARIS,UBUNTU,FEDORA
889,FILE FORMATS,JPEG,PNG,GIF,PDF,MP3,MP4,ZIP,EXE,HTML,JSON,XML,CSV
890,CRYPTOCURRENCIES,BITCOIN,ETHER,RIPPLE,LITECOIN,DOGE,CARDANO,SOLANA,POLKADOT
891,STOCK MARKET,BULL,BEAR,DIVIDEND,EQUITY,OPTION,SHORT,MARGIN,IPO,NASDAQ,DOW JONES,FTSE,NIKKEI,DAX
892,CORPORATE ROLES,CEO,CFO,CTO,COO,CMO,VP,DIRECTOR,MANAGER,CHAIRMAN
893,LEGAL TERMS,PLAINTIFF,DEFENDANT,TORT,HABEAS,SUBPOENA,PERJURY,LIEN,AFFIDAVIT
894,CRIMES,FELONY,TREASON,ARSON,LARCENY,FRAUD,EMBEZZLE,PERJURY,MURDER,ASSAULT
895,PHOBIAS,ACRO,AGORA,CLAUSTRO,Arachno,HYDRO,PYRO,XENO,TRYPO,AERO
896,DOCTOR SPECIALTY,ONCOLOGY,PODIATRY,UROLOGY,NEUROLOGY,CARDIOLOGY,DERMATOLOGY,PEDIATRICS,SURGERY
897,MEDICAL SCANS,MRI,CT,XRAY,ULTRASOUND,PET,EEG,EKG,BIOPSY
898,VITAMINS,RETINOL,THIAMINE,NIACIN,FOLATE,ASCORBIC,CALCIUM,IRON,BIOTIN,RIBOFLAVIN
899,GEM CUTS,PRINCESS,EMERALD,OVAL,PEAR,RADIANT,CUSHION,MARQUISE,BRILLIANT,ASSCHER
900,FABRIC WEAVES,SATIN,TWILL,PLAIN,BASKET,JACQUARD,VELVET,DENIM,POPLIN
901,KNOTS,BOWLINE,HITCH,SQUARE,SHEET,FIGURE,CLOVE,REEF,WINDSOR,SHEEPSHANK
902,BOAT PARTS,HULL,BOW,STERN,PORT,STARBOARD,KEEL,DECK,MAST,RUDDER
903,AIRCRAFT PARTS,FUSELAGE,WING,RUDDER,AILERON,FLAP,COCKPIT,GEAR,ENGINE
904,CAMERA PARTS,LENS,SENSOR,SHUTTER,APERTURE,ISO,FLASH,FOCUS,VIEWFINDER
905,FONTS,SERIF,SANS,ARIAL,TIMES,HELVETICA,COURIER,VERDANA,COMIC SANS
906,COLOR MODELS,RGB,CMYK,HSV,HEX,PANTONE,HSL,LAB
907,SAUCES,HOLLANDAISE,BECHAMEL,VELOUTE,TOMATO,ESPAGNOLE,PESTO,MARINARA,ALFREDO
908,PASTRY DOUGHS,PHYLLO,PUFF,SHORTCRUST,CHOUX,BRIOCHE,SOURDOUGH,DANISH
909,SUSHI FISH,MAGURO,SAKE,HAMACHI,UNAGI,EBI,TAKO,IKURA,UNI
910,CHEESE TYPES,BLUE,BRIE,GOUDA,CHEDDAR,SWISS,FETA,GOAT,HAVARTI,MOZZARELLA
911,WINE TYPES,MERLOT,CABERNET,PINOT,CHARDONNAY,RIESLING,ROSE,SYRAH,SAUVIGNON
912,BEER TYPES,LAGER,ALE,STOUT,PORTER,PILSNER,IPA,WHEAT,SOUR,BOCK
913,COFFEE BEANS,ARABICA,ROBUSTA,LIBERICA,EXCELSA,KONA,JAVA,COLOMBIAN
914,FLOWER PARTS,PETAL,STAMEN,PISTIL,SEPAL,POLLEN,STEM,ROOT,ANTHER
915,BIOMES,TUNDRA,TAIGA,DESERT,SAVANNA,RAINFOREST,GRASSLAND,CHAPARRAL,STEPPE
916,ROCK TYPES,IGNEOUS,SEDIMENTARY,METAMORPHIC,BASALT,GRANITE,LIMESTONE,SANDSTONE
917,MINERALS,QUARTZ,FELDSPAR,MICA,TALC,GYPSUM,CALCITE,PYRITE,DIAMOND
918,FOSSILS,AMMONITE,TRILOBITE,FERN,AMBER,BONE,TOOTH,TRACK,COPROLITE
919,DINOSAUR PERIODS,TRIASSIC,JURASSIC,CRETACEOUS,MESOZOIC,PALEOGENE
920,DINOSAURS,REX,RAPTOR,TRICERATOPS,STEGO,BRONTO,PTERO,ANKYLO,SPINO
921,DOG GROUPS,HERDING,HOUND,TERRIER,SPORTING,WORKING,TOY,NON-SPORTING
922,HORSE BREEDS,ARABIAN,MUSTANG,CLYDESDALE,THOROUGHBRED,APPALOOSA,QUARTER,FRIESIAN
923,CAT FAMILY,LION,TIGER,LEOPARD,JAGUAR,COUGAR,CHEETAH,LYNX,BOBCAT
924,BEAR SPECIES,POLAR,GRIZZLY,PANDA,BLACK,SUN,SLOTH,SPECTACLED,KODIAK
925,WHALE TYPES,BLUE,HUMPBACK,ORCA,SPERM,BELUGA,NARWHAL,GRAY,RIGHT
926,SHARK TYPES,GREAT WHITE,HAMMERHEAD,TIGER,BULL,MAKO,NURSE,WHALE SHARK
927,SNAKE TYPES,COBRA,PYTHON,BOA,VIPER,ANACONDA,MAMBA,CORAL,RATTLESNAKE
928,MARSUPIALS,KANGAROO,KOALA,WOMBAT,POSSUM,TASMANIAN,WALLABY,SUGAR GLIDER
929,PRIMATES,APE,MONKEY,LEMUR,GORILLA,CHIMP,ORANGUTAN,BABOON,GIBBON
930,RODENTS,MOUSE,RAT,SQUIRREL,BEAVER,HAMSTER,GUINEA,CAPYBARA,PORCUPINE
931,RARE EARTHS,SCANDIUM,YTTRIUM,LANTHANUM,CERIUM,YTTERBIUM,NEODYMIUM,THULIUM,PRASEODYMIUM,PROMETHIUM,SAMARIUM,EUROPIUM,GADOLINIUM,TERBIUM,DYSPROSIUM,HOLMIUM,ERBIUM
932,ACTINIDES,THORIUM,URANIUM,PLUTONIUM,AMERICIUM,CURIUM,BERKELIUM,CALIFORNIUM,NEPTUNIUM
933,METALLOIDS,BORON,SILICON,GERMANIUM,ARSENIC,ANTIMONY,TELLURIUM,POLONIUM
934,NONMETALS,HYDROGEN,CARBON,NITROGEN,OXYGEN,PHOSPHORUS,SULFUR,SELENIUM
935,ISOTOPES,PROTIUM,DEUTERIUM,TRITIUM,CARBON-14,URANIUM-235,LEAD-206,IODINE-131
936,PARTICLES SUBATOMIC,QUARK,LEPTON,BOSON,FERMION,HADRON,BARYON,MESON,GLUON,PHOTON
937,LOGIC GATES,AND,OR,NOT,NAND,NOR,XOR,XNOR,BUFFER
938,NETWORK PROTOCOLS,TCP,UDP,IP,HTTP,FTP,SMTP,DNS,DHCP,SSH
939,ANCIENT CITIES,BABYLON,UR,URUK,THEBES,MEMPHIS,NINEVEH,TYRE,CARTHAGE,TROY
940,ROMAN LEGION,CENTURION,LEGATE,TRIBUNE,COHORT,MANIPLE,EAGLE,SCUTUM,GLADIUS
941,GREEK PHILOSOPHY,STOIC,EPICUREAN,CYNIC,SKEPTIC,PLATONIC,SOPHIT,PERIPATETIC
942,FEUDAL JAPAN,SAMURAI,SHOGUN,DAIMYO,RONIN,NINJA,KATANA,BUSHIDO,SEPPUKU
943,MEDIEVAL GUILDS,MASON,SMITH,WEAVER,BAKER,MERCHANT,APPRENTICE,JOURNEYMAN,MASTER
944,VIKING CULTURE,LONGBOAT,RUNE,SAGA,THANE,JARL,VALHALLA,RAID,SHIELD
945,RENAISSANCE ART,PERSPECTIVE,FRESCO,OIL,CHIAROSCURO,SFUMATO,PORTRAIT,LANDSCAPE
946,ENLIGHTENMENT,REASON,SCIENCE,LIBERTY,PROGRESS,TOLERATION,FRATERNITY,CONSTITUTION
947,INDUSTRIAL REV,STEAM,COAL,FACTORY,RAILROAD,TELEGRAPH,TEXTILE,STEEL,UNION
948,COLD WAR,SPUTNIK,WALL,CRISIS,DETENTE,PROXY,NUCLEAR,IRON CURTAIN,NATO
949,INTERNET HISTORY,ARPANET,EMAIL,WWW,BROWSER,DOTCOM,MODEM,DIALUP,SERVER
950,CODING CONCEPTS,LOOP,VAR,FUNCTION,CLASS,OBJECT,ARRAY,STRING,BOOLEAN
951,CYBERSECURITY,FIREWALL,VPN,ENCRYPTION,PHISHING,MALWARE,VIRUS,HACK,TOKEN
952,AI CONCEPTS,NEURAL,LEARNING,DATA,MODEL,ALGORITHM,BOT,TURNING,GPT
953,CRYPTO TERMS,BLOCKCHAIN,WALLET,MINING,GAS,TOKEN,NFT,DEFI,HODL
954,GAMING GENRES,RPG,FPS,RTS,MOBA,MMO,PLATFORMER,ROGUELIKE,SIM
955,ESPORTS GAMES,LEAGUE,DOTA,CSGO,VALORANT,OVERWATCH,FORTNITE,ROCKET LEAGUE,APEX
956,STREAMING TERMS,SUB,DONO,RAID,CHAT,EMOTE,BITRATE,VOD,OBS
957,ANIME GENRES,SHONEN,SHOJO,ISEKAI,MECHA,SLICE,HORROR,SPORTS,MAGIC
958,MANGA TERMS,PANEL,BUBBLE,TANKOBON,DOUJINSHI,SCANLATION,WEEKLY,SERIES
959,KPOP TERMS,IDOL,BIAS,COMEBACK,DEBUT,FANDOM,LIGHTSTICK,TRAINEE,VISUAL
960,MEME FORMATS,CAT,DOGE,PEPE,WOJAK,DRAKE,DISTRACTED,TWO BUTTONS,CHAD
961,SLANG 2020S,RIZZ,CAP,BET,SUS,CRINGE,BASED,GOAT,SIMP
962,COFFEE WAVE,POUROVER,SINGLE,ORIGIN,ROAST,NOTES,ACIDITY,BODY,AEROPRESS
963,CRAFT BEER,IPA,STOUT,SOUR,PORTER,SAISON,PILSNER,LAGER,HOPPY
964,WINE REGIONS,NAPA,BORDEAUX,TUSCANY,RIOJA,CHAMPAGNE,SONOMA,MENDOZA,RHONE
965,CHEESE REGIONS,PARMA,ROQUEFORT,GOUDA,CHEDDAR,MANCHEGO,GRUYERE,BRIE,CAMEMBERT
966,SPICE BLENDS,CURRY,GARAM,CAJUN,TACO,PUMPKIN,ZAATAR,RAS EL HANOUT,FIVE SPICE
967,TEA CEREMONY,MATCHA,BOWL,WHISK,SCOOP,KETTLE,TATAMI,GUEST,SWEET
968,YOGA LIMBS,YAMA,NIYAMA,ASANA,PRANAYAMA,PRATYAHARA,DHARANA,DHYANA,SAMADHI
969,CHAKRAS,ROOT,SACRAL,SOLAR,HEART,THROAT,THIRD EYE,CROWN
970,TAROT SUITS,CUPS,WANDS,SWORDS,PENTACLES
971,POKER VARIANTS,TEXAS,OMAHA,STUD,DRAW,HORSE,RAZZ,BADUGI
972,BACKGAMMON,PIP,POINT,BAR,BEAR,DOUBLE,CUBE,GAMMON,BACK
973,BILLIARDS,CUE,BALL,POCKET,RACK,BREAK,SPIN,CHALK,TABLE
974,BASEBALL STATS,RBI,ERA,AVG,OPS,HR,WHIP,WAR,OBP
975,BASKETBALL STATS,PPG,RPG,APG,SPG,BPG,PER,FG,FT
976,FOOTBALL POS,QB,RB,WR,TE,OL,DL,LB,CB,S
977,SOCCER POS,GK,CB,FB,CDM,CAM,WINGER,STRIKER,CF
978,HOCKEY POS,CENTER,WING,DEFENSE,GOALIE,ENFORCER,GRINDER,SNIPER
979,OLYMPIC RINGS,BLUE,YELLOW,BLACK,GREEN,RED
980,NOBEL FIELDS,PHYSICS,CHEM,MEDICINE,LIT,PEACE,ECON
981,IVY LEAGUES,BROWN,COLUMBIA,CORNELL,DARTMOUTH,HARVARD,PENN,PRINCETON,YALE
982,SEVEN SEAS,ARCTIC,ATLANTIC,INDIAN,PACIFIC,MEDITERRANEAN,CARIBBEAN,GULF
983,SEVEN SINS,LUST,GLUTTONY,GREED,SLOTH,WRATH,ENVY,PRIDE
984,PLATONIC SOLIDS,TETRAHEDRON,CUBE,OCTAHEDRON,DODECAHEDRON,ICOSAHEDRON
985,TAXONOMY,KINGDOM,PHYLUM,CLASS,ORDER,FAMILY,GENUS,SPECIES
986,ATMOSPHERE,TROPO,STRATO,MESO,THERMO,EXO
987,EARTH LAYERS,CRUST,MANTLE,OUTER CORE,INNER CORE
988,ROCK CYCLE,IGNEOUS,SEDIMENTARY,METAMORPHIC,MAGMA,SEDIMENT
989,WATER CYCLE,EVAPORATION,CONDENSATION,PRECIPITATION,COLLECTION,TRANSPIRATION
990,CELL PHASES,INTERPHASE,PROPHASE,METAPHASE,ANAPHASE,TELOPHASE,CYTOKINESIS
991,DNA BASES,ADENINE,THYMINE,CYTOSINE,GUANINE
992,RNA BASES,ADENINE,URACIL,CYTOSINE,GUANINE
993,BLOOD TYPES,A,B,AB,O,POSITIVE,NEGATIVE
994,TEETH TYPES,INCISOR,CANINE,PREMOLAR,MOLAR
995,TASTE BUDS,SWEET,SOUR,SALTY,BITTER,UMAMI
996,NEWTON LAWS,INERTIA,FORCE,ACTION,REACTION
997,THERMODYNAMICS,ENERGY,ENTROPY,ZERO,THIRD
998,STATES MATTER,SOLID,LIQUID,GAS,PLASMA,CONDENSATE
999,WAVE TYPES,RADIO,MICRO,INFRA,VISIBLE,UV,XRAY,GAMMA
1000,QUARKS,UP,DOWN,CHARM,STRANGE,TOP,BOTTOM
1001,LEPTONS,ELECTRON,MUON,TAU,NEUTRINO
1002,BOSONS,GLUON,PHOTON,HIGGS,Z,W
1003,CONSTANTS,C,G,H,E,PI,PHI
1004,UNITS SI,METER,SECOND,KILO,AMPERE,KELVIN,MOLE,CANDELA
1005,PREFIXES SI,MEGA,GIGA,TERA,MICRO,NANO,PICO,FEMTO
1006,GEOMETRY,POINT,LINE,PLANE,ANGLE,SHAPE,SOLID
1007,TRIANGLES,ACUTE,OBTUSE,RIGHT,EQUILATERAL,ISOSCELES,SCALENE
1008,QUADRILATERALS,SQUARE,RECTANGLE,RHOMBUS,TRAPEZOID,KITE,PARALLELOGRAM
1009,POLYGONS,PENTAGON,HEXAGON,HEPTAGON,OCTAGON,NONAGON,DECAGON
1010,CONIC SECTIONS,CIRCLE,ELLIPSE,PARABOLA,HYPERBOLA
1011,CALCULUS,LIMIT,DERIVATIVE,INTEGRAL,SERIES
1012,STATISTICS,MEAN,MEDIAN,MODE,RANGE,VARIANCE,DEVIATION
1013,PROBABILITY,CHANCE,ODDS,EVENT,OUTCOME,SPACE
1014,LOGIC,TRUE,FALSE,AND,OR,NOT,IF,THEN
1015,SETS,UNION,INTERSECT,SUBSET,EMPTY,NULL
1016,FUNCTIONS,DOMAIN,RANGE,INPUT,OUTPUT,GRAPH
1017,ALGEBRA,VARIABLE,CONSTANT,TERM,FACTOR,ROOT
1018,ARITHMETIC,ADD,SUB,MUL,DIV,MOD
1019,NUMBERS,NATURAL,INTEGER,RATIONAL,REAL,COMPLEX
1020,PRIMES,TWO,THREE,FIVE,SEVEN,ELEVEN,THIRTEEN
1021,FIBONACCI,ONE,TWO,THREE,FIVE,EIGHT,THIRTEEN,TWENTYONE
1022,PI DIGITS,THREE,ONE,FOUR,FIVE,NINE,TWO
1023,E DIGITS,TWO,SEVEN,ONE,EIGHT,TWO,EIGHT
1024,ROMAN NUMERALS,I,V,X,L,C,D,M
1025,GREEK LETTERS,ALPHA,BETA,GAMMA,DELTA,OMEGA,PI,SIGMA
1026,HEBREW LETTERS,ALEPH,BET,GIMEL,DALET,HE,VAV
1027,PHONETIC ALPHABET,ALPHA,BRAVO,CHARLIE,DELTA,ECHO,FOXTROT
1028,MORSE CODE,DOT,DASH,SPACE,SIGNAL
1029,BRAILLE,DOT,CELL,RAISED,TOUCH
1030,SIGN LANGUAGE,HAND,FINGER,FACE,GESTURE
1031,PROGRAMMING,CODE,BUG,LOOP,VAR,API,GIT
1032,DATABASES,SQL,TABLE,ROW,COLUMN,KEY,INDEX
1033,HARDWARE,CPU,RAM,DISK,SCREEN,BOARD,CHIP
1034,SOFTWARE,APP,OS,DRIVER,TOOL,GAME,WEB
1035,FILE TYPES,TXT,DOC,PDF,JPG,MP3,ZIP
1036,WEB DEV,HTML,CSS,JS,REACT,NODE,API
1037,MOBILE,IOS,ANDROID,APP,STORE,TOUCH,GPS
1038,CLOUD,AWS,AZURE,GCP,S3,LAMBDA,EC2
1039,AI,ML,DL,NN,NLP,CV,RL
1040,CRYPTO,BTC,ETH,NFT,DAO,WEB3,WALLET
1041,PRIVACY,DATA,COOKIE,TRACK,VPN,TOR,LOG
1042,TECH LAW,GDPR,CCPA,DMCA,PATENT,COPYRIGHT
1043,STARTUP,SEED,ANGEL,VC,IPO,EXIT,UNICORN
1044,AGILE,SCRUM,SPRINT,KANBAN,EPIC,STORY,STANDUP
1045,DEVOPS,CI,CD,DOCKER,K8S,GIT,PIPELINE
1046,TESTING,UNIT,INTEGRATION,E2E,MOCK,STUB,SPY
1047,ARCTIC PEOPLES,INUIT,YUPIK,SAMI,ALEUT,NENETS,CHUKCHI
1048,GLACIAL FEATURES,MORAINE,ESKER,DRUMLIN,KAME,KETTLE,CIRQUE,ARETE,HORN,FJORD,TARN,CREVASSE,SERAC,OUTWASH
1049,SOIL HORIZONS,O HORIZON,A HORIZON,E HORIZON,B HORIZON,C HORIZON,R HORIZON,TOPSOIL,SUBSOIL,BEDROCK,PARENT MATERIAL,HUMUS,ELUVIATION
1050,ATMOSPHERE LAYERS,TROPOSPHERE,STRATOSPHERE,MESOSPHERE,THERMOSPHERE,EXOSPHERE,IONOSPHERE,MAGNETOSPHERE,OZONE LAYER,KARMAN LINE
1051,OCEAN CURRENTS,GULF STREAM,HUMBOLDT,KUROSHIO,LABRADOR,CANARY,BENGUELA,AGULHAS,CALIFORNIA,OYASHIO,EAST AUSTRALIAN,NORTH ATLANTIC,ANTARCTIC CIRCUMPOLAR
1052,STAR TYPES,RED DWARF,WHITE DWARF,NEUTRON STAR,RED GIANT,SUPERGIANT,PULSAR,QUASAR,BROWN DWARF,MAIN SEQUENCE,PROTOSTAR,BINARY,VARIABLE
1053,GALACTIC SHAPES,SPIRAL,ELLIPTICAL,IRREGULAR,BARRED SPIRAL,LENTICULAR,PECULIAR,RING,DWARF SPHEROIDAL,PROLATE
1054,NEBULAE,ORION,EAGLE,CRAB,RING,HELIX,CAT'S EYE,HORSEHEAD,CARINA,LAGOON,TARANTULA,TRIFID,DUMBBELL,VEIL
1055,QUANTUM PHYSICS,ENTANGLEMENT,SUPERPOSITION,TUNNELING,WAVE FUNCTION,UNCERTAINTY,SPIN,QUBIT,COHERENCE,DECOHERENCE,INTERFERENCE,TELEPORTATION
1056,RELATIVITY,TIME DILATION,GRAVITY,SPACETIME,LIGHT SPEED,EVENT HORIZON,SINGULARITY,FRAME DRAGGING,REDSHIFT,LENSING,EQUIVALENCE
1057,LOGICAL FALLACIES,STRAW MAN,AD HOMINEM,SLIPPERY SLOPE,RED HERRING,CIRCULAR,FALSE DICHOTOMY,SUNK COST,EQUIVOCATION,BANDWAGON,APPEAL TO AUTHORITY,TU QUOQUE,POST HOC
1058,COGNITIVE BIASES,CONFIRMATION,ANCHORING,HALO EFFECT,HINDSIGHT,AVAILABILITY,FRAMING,SUNK COST,DUNNING KRUGER,SELF SERVING,NEGATIVITY,OPTIMISM
1059,SORTING ALGORITHMS,BUBBLE,QUICK,MERGE,HEAP,INSERTION,SELECTION,RADIX,SHELL,BOGO,COCKTAIL,TIMSORT,BUCKET
1060,DESIGN PATTERNS,SINGLETON,FACTORY,OBSERVER,STRATEGY,DECORATOR,ADAPTER,FACADE,PROXY,COMMAND,ITERATOR,BUILDER,PROTOTYPE
1061,HTTP METHODS,GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS,CONNECT,TRACE
1062,SQL COMMANDS,SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER,JOIN,UNION,GRANT,REVOKE,TRUNCATE,INDEX
1063,NOSQL DATABASES,MONGODB,REDIS,CASSANDRA,COUCHDB,DYNAMODB,HBASE,NEO4J,COSMOS,ELASTICSEARCH,FIREBASE,RAVENDB
1064,CLOUD PROVIDERS,AWS,AZURE,GOOGLE CLOUD,ALIBABA,IBM,ORACLE,DIGITAL OCEAN,HEROKU,VULTR,LINODE,HETZNER,RACKSPACE
1065,CYBER ATTACKS,PHISHING,DDOS,MAN IN MIDDLE,SQL INJECTION,XSS,RANSOMWARE,SPOOFING,BRUTE FORCE,ZERO DAY,ROOTKIT,TROJAN,WORM
1066,CRYPTOGRAPHY,AES,RSA,SHA,MD5,PUBLIC KEY,PRIVATE KEY,HASH,SALT,NONCE,CIPHER,ENCRYPTION,DECRYPTION,BLOCKCHAIN
1067,PROGRAMMING LANGS,PYTHON,JAVASCRIPT,JAVA,C++,RUBY,GO,RUST,SWIFT,KOTLIN,TYPESCRIPT,PHP,PERL,SCALA,HASKELL,LUA
1068,WEB TECHNOLOGIES,HTML,CSS,REACT,ANGULAR,VUE,NODE,DJANGO,FLASK,ASP.NET,LARAVEL,SVELTE,BOOTSTRAP,TAILWIND,WEBPACK
1069,MOBILE OS,ANDROID,IOS,WINDOWS PHONE,BLACKBERRY,SYMBIAN,WEBOS,TIZEN,KAIOS,FIRE OS,HARMONY OS
1070,VERSION CONTROL,GIT,SVN,MERCURIAL,CVS,PERFORCE,BAZAAR,TFS,BITKEEPER,FOSSIL,ARCH
1071,AGILE TERMS,SCRUM,KANBAN,SPRINT,BACKLOG,STANDUP,USER STORY,EPIC,VELOCITY,RETROSPECTIVE,BURNDOWN,SCRUM MASTER
1072,TESTING TYPES,UNIT,INTEGRATION,E2E,REGRESSION,PERFORMANCE,LOAD,STRESS,SECURITY,USABILITY,ACCEPTANCE,SMOKE,SANITY
1073,HARDWARE INTERFACES,USB,HDMI,VGA,DVI,DISPLAYPORT,THUNDERBOLT,ETHERNET,SATA,PCIE,SCSI,SERIAL,PARALLEL
1074,FILE SYSTEMS,NTFS,FAT32,EXT4,APFS,HFS+,EXFAT,ZFS,BTRFS,XFS,REISERFS
1075,IMAGE FORMATS,JPEG,PNG,GIF,SVG,WEBP,TIFF,BMP,RAW,HEIF,ICO,PSD,AI
1076,AUDIO FORMATS,MP3,WAV,AAC,FLAC,OGG,WMA,AIFF,ALAC,MIDI,M4A,OPUS
1077,VIDEO FORMATS,MP4,AVI,MKV,MOV,WMV,FLV,WEBM,MPEG,3GP,TS,M4V
1078,FONT STYLES,SERIF,SANS SERIF,MONOSPACE,CURSIVE,FANTASY,SCRIPT,DISPLAY,HANDWRITING,BLACKLETTER,SLAB SERIF
1079,COLOR SPACES,RGB,CMYK,HSL,HSV,HEX,LAB,YUV,PANTONE,GRAYSCALE,SRGB,ADOBE RGB
1080,COUNTRIES,FRANCE,GERMANY,ITALY,SPAIN,UK,POLAND,GREECE,SWEDEN,NORWAY,IRELAND,BELGIUM,CHINA,JAPAN,INDIA,KOREA,VIETNAM,THAILAND,IRAN,IRAQ,ISRAEL,RUSSIA,PERU,CUBA,MALI,CHAD,FIJI,LAOS,OMAN,EGYPT,NIGERIA,KENYA,SOUTH AFRICA,MOROCCO,ETHIOPIA,GHANA,TANZANIA,BRAZIL,ARGENTINA,CHILE,COLOMBIA,VENEZUELA,ECUADOR,BOLIVIA,NETHERLANDS,AUSTRIA,DENMARK,TURKEY,PORTUGAL,HUNGARY,ROMANIA,ICELAND
1081,PLANETS,MERCURY,VENUS,EARTH,MARS,JUPITER,SATURN,URANUS,NEPTUNE,PLUTO
1082,OCEANS,ATLANTIC,PACIFIC,INDIAN,ARCTIC,SOUTHERN
1083,CAR BRANDS,FORD,TOYOTA,HONDA,CHEVY,BMW,AUDI,TESLA,JEEP,DODGE,NISSAN,KIA,MAZDA,SUBARU,MITSUBISHI,SUZUKI,LEXUS,ACURA,INFINITI,MERCEDES,PORSCHE,VOLKSWAGEN,OPEL,MINI,SMART,CADILLAC,BUICK,LINCOLN,JAGUAR,LAND ROVER,BENTLEY,ROLLS ROYCE,ASTON MARTIN,LOTUS,MCLAREN,FERRARI,LAMBORGHINI,MASERATI,FIAT,ALFA ROMEO,PAGANI,LANCIA,ABARTH
1084,DOG BREEDS,BEAGLE,BULLDOG,POODLE,LABRADOR,PUG,BOXER,HUSKY,COLLIE,CORGI,TERRIER,YORKIE,CHIHUAHUA,SHIH TZU,DACHSHUND,DANE,SHEPHERD,RETRIEVER,MASTIFF,ROTTWEILER,SPORTING,HOUND,WORKING,TOY,HERDING
1085,CAT BREEDS,PERSIAN,SIAMESE,BENGAL,RAGDOLL,SPHYNX,MAINE COON,TABBY,BOMBAY,MANX,BIRMAN,SCOTTISH FOLD,BRITISH SHORTHAIR,ABYSSINIAN,BURMESE
1086,BIRD TYPES,EAGLE,HAWK,OWL,PENGUIN,PARROT,FLAMINGO,SWAN,DUCK,ROBIN,SPARROW,CROW,DOVE,JAY,LARK,WREN,TERN,FINCH,CANARY,FALCON
1087,FISH TYPES,SALMON,TUNA,TROUT,BASS,SHARK,GOLDFISH,CLOWNFISH,CATFISH,COD,PIKE,CARP,SOLE,EEL,SHAD,GUPPY,TETRA,MOLLY,BETTA,ANGEL,DISCUS
1088,GEMSTONES,DIAMOND,RUBY,SAPPHIRE,EMERALD,OPAL,TOPAZ,PEARL,GARNET,JADE,ONYX,AGATE,BERYL,AMBER,CORAL
1089,METALS,GOLD,SILVER,COPPER,IRON,STEEL,LEAD,ZINC,TIN,BRONZE,BRASS,PLATINUM
1090,ELEMENTS,OXYGEN,CARBON,HELIUM,NITROGEN,HYDROGEN,NEON,IRON,GOLD,SILVER,ARGON,XENON,RADON,BORON,IODINE
1091,GRAMMAR,NOUN,VERB,ADJECTIVE,ADVERB,PRONOUN,COMMA,PERIOD,COLON,SUBJECT,PREP,CONJ,PART
1092,MOVIE GENRES,ACTION,COMEDY,DRAMA,HORROR,SCI-FI,ROMANCE,THRILLER,WESTERN,FANTASY
1093,INSTRUMENTS,GUITAR,PIANO,DRUM,VIOLIN,FLUTE,TRUMPET,SAXOPHONE,CELLO,BASS,HARP
1094,SPORTS EQUIPMENT,BAT,BALL,GLOVE,HELMET,NET,CLEATS,RACKET,PUCK,STICK,HOOP
1095,OLYMPIC SPORTS,SWIMMING,RUNNING,GYMNASTICS,SKIING,BOXING,JUDO,FENCING,DIVING,ROWING,SPRINT,ARCHERY
1096,TEAM SPORTS,SOCCER,BASEBALL,FOOTBALL,HOCKEY,RUGBY,CRICKET,VOLLEYBALL,BASKETBALL
1097,FAST FOOD,MCDONALDS,BURGER KING,WENDYS,TACO BELL,KFC,SUBWAY,PIZZA HUT,DOMINOS,FIVE GUYS,SHAKE SHACK,IN N OUT,SONIC,CARLS JR,POPEYES,CHICK FIL A,CHURCHS,ZAXBYS,BOJANGLES,RAISING CANES,DEL TACO,CHIPOTLE,QDOBA,MOES,BAJA FRESH,TACO JOHNS
1098,ICE CREAM,VANILLA,CHOCOLATE,STRAWBERRY,MINT,COFFEE,COOKIE DOUGH,ROCKY ROAD,PISTACHIO
1099,BREAKFAST FOODS,EGGS,BACON,TOAST,PANCAKES,WAFFLES,CEREAL,OATMEAL,BAGEL,DONUT
1100,SOUPS,TOMATO,CHICKEN NOODLE,VEGETABLE,CLAM CHOWDER,MISO,MINESTRONE,PEA
1101,SANDWICHES,BLT,CLUB,RUBEN,GRILLED CHEESE,PBJ,SUB,WRAP,BURGER,PANINI
1102,CHEESES,CHEDDAR,SWISS,MOZZARELLA,BRIE,GOUDA,FETA,PARMESAN,BLUE,AMERICAN,CAMEMBERT,PROVOLONE,RICOTTA,HAVARTI
1103,CANDY BARS,SNICKERS,TWIX,KIT KAT,MILKY WAY,HERSHEYS,REESES,CRUNCH,BUTTERFINGER,ALMOND JOY
1104,JEWELRY,RING,NECKLACE,EARRING,BRACELET,WATCH,BROOCH,PENDANT,ANKLET,CHAIN
1105,FOOTWEAR,SNEAKERS,BOOTS,SANDALS,HEELS,FLATS,SLIPPERS,LOAFERS,CLEATS,CLOGS
1106,HATS,CAP,BEANIE,FEDORA,COWBOY,BERET,VISOR,HELMET,TOP HAT,SOMBRERO
1107,FURNITURE,SOFA,TABLE,CHAIR,BED,DRESSER,DESK,BOOKSHELF,CABINET,STOOL,BENCH,SHELF,CHEST,DRAWER
1108,APPLIANCES,OVEN,FRIDGE,DISHWASHER,MICROWAVE,TOASTER,WASHER,DRYER,BLENDER
1109,TOOLS,HAMMER,SCREWDRIVER,WRENCH,SAW,DRILL,PLIERS,LEVEL,TAPE,NAIL
1110,GARDEN TOOLS,SHOVEL,RAKE,HOE,HOSE,MOWER,PRUNER,TROWEL,GLOVES,POT
1111,OFFICE SUPPLIES,PAPER,PEN,STAPLER,TAPE,CLIP,FOLDER,NOTEBOOK,ENVELOPE,PRINTER
1112,COMPUTERS,KEYBOARD,MOUSE,SCREEN,LAPTOP,MONITOR,WIFI,PRINTER,TABLET,DATA,MIC,WEBCAM,SCANNER
1113,STREAMING APPS,NETFLIX,HULU,DISNEY,AMAZON,HBO,SPOTIFY,APPLE,YOUTUBE,PRIME,PEACOCK,PARAMOUNT
1114,VIDEO GAMES,MARIO,ZELDA,SONIC,MINECRAFT,FORTNITE,TETRIS,PACMAN,CALL OF DUTY,HALO,DOOM,OVERWATCH,VALORANT,DESTINY,BATTLEFIELD,FINAL FANTASY,POKEMON,SKYRIM,WITCHER,FALLOUT,PERSONA,ELDEN RING,MASS EFFECT,FIFA,MADDEN,NBA 2K,WWE,UFC
1115,BOARD GAMES,MONOPOLY,CLUE,RISK,SCRABBLE,CHESS,CHECKERS,LIFE,SORRY,UNO,CATAN,TICKET TO RIDE,PANDEMIC,CARCASSONNE,AZUL,WINGSPAN,CODENAMES,SCYTHE
1116,CARD SUITS,HEARTS,DIAMONDS,CLUBS,SPADES
1117,CHESS PIECES,KING,QUEEN,ROOK,BISHOP,KNIGHT,PAWN
1118,RANKS,GENERAL,COLONEL,MAJOR,CAPTAIN,LIEUTENANT,SERGEANT,CORPORAL,PRIVATE
1119,ROYALTY,KING,QUEEN,PRINCE,PRINCESS,DUKE,DUCHESS,BARON,KNIGHT,EMPEROR
1120,MYTHICAL CREATURES,DRAGON,UNICORN,MERMAID,GRIFFIN,PHOENIX,GIANT,ELF,DWARF
1121,SUPERHEROES,BATMAN,SUPERMAN,SPIDERMAN,IRONMAN,HULK,THOR,WONDER WOMAN,FLASH,CAPTAIN AMERICA,BLACK WIDOW,HAWKEYE,PANTHER,AQUAMAN,CYBORG
1122,VILLAINS,JOKER,THANOS,VOLDEMORT,DARTH VADER,LEX LUTHOR,MAGNETO,BOWSER,PENGUIN,RIDDLER,BANE,CATWOMAN,FREEZE,VENOM,GOBLIN,OCTOPUS,SANDMAN,ELECTRO,MYSTERIO
1123,DISNEY PRINCESSES,CINDERELLA,ARIEL,BELLE,JASMINE,MULAN,TIANA,RAPUNZEL,SNOW WHITE
1124,STAR WARS,JEDI,SITH,YODA,LUKE,LEIA,HAN SOLO,CHEWBACCA,DROID,FORCE,OBIWAN,ANAKIN,WINDU,REY,AHSOKA,VADER,MAUL,SIDIOUS,DOOKU,KYLO REN,SNOKE
1125,BEATLES MEMBERS,JOHN,PAUL,GEORGE,RINGO
1126,US PRESIDENTS,WASHINGTON,LINCOLN,KENNEDY,OBAMA,BUSH,CLINTON,TRUMP,BIDEN,NIXON,ROOSEVELT,JEFFERSON,MADISON,MONROE,JACKSON,GRANT,CLEVELAND,WILSON,COOLIDGE,REAGAN
1127,CURRENCIES,DOLLAR,EURO,POUND,YEN,PESO,RUBLE,RUPEE,YUAN,FRANC
1128,CAPITALS,LONDON,PARIS,BERLIN,ROME,MADRID,MOSCOW,ATHENS,DUBLIN,TOKYO,OSLO,LIMA,DOHA,SUVA,KIEV,BEIJING,SEOUL,BANGKOK,HANOI,JAKARTA,MANILA,DELHI,CAIRO,LAGOS,NAIROBI,CAPE TOWN,JOHANNESBURG,CASABLANCA,ACCRA,DAKAR,TORONTO,VANCOUVER,MONTREAL,CALGARY,OTTAWA,EDMONTON,WINNIPEG,QUEBEC,SYDNEY,MELBOURNE,BRISBANE,PERTH,ADELAIDE,CANBERRA,HOBART,DARWIN
1129,US CITIES,NEW YORK,LOS ANGELES,CHICAGO,HOUSTON,PHOENIX,MIAMI,SEATTLE,BOSTON,PHILADELPHIA,ATLANTA,WASHINGTON,CHARLOTTE,ORLANDO,SAN FRANCISCO,LAS VEGAS,DENVER,PORTLAND,SAN DIEGO
1130,RIVERS,NILE,AMAZON,MISSISSIPPI,YANGTZE,DANUBE,THAMES,RHINE,SEINE,ELBE,URAL,PO,DON,LOIRE
1131,MOUNTAINS,EVEREST,K2,FUJI,DENALI,KILIMANJARO,MATTERHORN,RAINIER,ETNA,HOOD,COOK,ROSA,LOGAN,BLANC
1132,DESERTS,SAHARA,GOBI,MOJAVE,ARABIAN,KALAHARI,ATACAMA,ANTARCTIC,KAROO,THAR,NAMIB,NEGEV,SIMPSON,GIBSON
1133,ISLANDS,HAWAII,ICELAND,IRELAND,CUBA,JAMAICA,FIJI,BALI,TAHITI,JAVA,MAUI,OAHU,GUAM,KAUAI,CEBU
1134,LANGUAGES,ENGLISH,SPANISH,FRENCH,GERMAN,CHINESE,JAPANESE,ARABIC,RUSSIAN
1135,RELIGIONS,CHRISTIANITY,ISLAM,JUDAISM,BUDDHISM,HINDUISM,SIKHISM,TAOISM
1136,HOLIDAYS,CHRISTMAS,HALLOWEEN,EASTER,THANKSGIVING,NEW YEARS,VALENTINES,JULY 4TH,LABOR DAY
1137,ZODIAC SIGNS,ARIES,TAURUS,GEMINI,CANCER,LEO,VIRGO,LIBRA,SCORPIO
1138,TIME UNITS,SECOND,MINUTE,HOUR,DAY,WEEK,MONTH,YEAR,DECADE,CENTURY
1139,MEASUREMENTS,INCH,FOOT,YARD,MILE,METER,LITER,GRAM,POUND,OUNCE
1140,MATH SHAPES,CIRCLE,SQUARE,TRIANGLE,RECTANGLE,OVAL,HEXAGON,OCTAGON,CUBE
1141,SCIENCES,BIOLOGY,CHEMISTRY,PHYSICS,GEOLOGY,ASTRONOMY,BOTANY,ZOOLOGY,SOCIO,PSYCH
1142,ORGANS,HEART,BRAIN,LUNG,LIVER,STOMACH,KIDNEY,SKIN,EYE
1143,SENSES,SIGHT,HEARING,TASTE,SMELL,TOUCH
1144,WEATHER,SUNNY,CLOUDY,RAINY,SNOWY,WINDY,STORMY,FOGGY,HAIL,MIST,SMOG,WIND
1145,DISASTERS,QUAKE,FLOOD,TORNADO,HURRICANE,FIRE,DROUGHT,TSUNAMI
1146,TRANSPORTATION,CAR,BUS,TRAIN,PLANE,BOAT,BIKE,SHIP,SUBWAY,TAXI
1147,AIRPORT ITEMS,PASSPORT,TICKET,LUGGAGE,GATE,PLANE,SECURITY,PILOT
1148,HOTEL ITEMS,BED,KEY,ROOM,LOBBY,POOL,MAID,TOWEL,SOAP
1149,BANK ITEMS,MONEY,VAULT,TELLER,CHECK,ATM,LOAN,SAVINGS,CARD
1150,POST OFFICE,STAMP,MAIL,LETTER,BOX,PACKAGE,ENVELOPE,ZIP CODE
1151,LIBRARY ITEMS,BOOK,SHELF,CARD,QUIET,READ,DESK,COMPUTER
1152,MOVIE THEATER,SCREEN,SEAT,POPCORN,SODA,CANDY,TICKET,FILM,AISLE
1153,RESTAURANT,MENU,WAITER,TABLE,CHEF,ORDER,TIP,BILL,FOOD
1154,GROCERY STORE,CART,AISLE,FOOD,CASHIER,BAG,PRODUCE,DELI,DAIRY
1155,CONSTRUCTION,CRANE,DUMP TRUCK,HARD HAT,CONE,DIGGER,CEMENT,BUILD
1156,FARMING,TRACTOR,BARN,FIELD,CROP,COW,PLOW,HAY,SILO
1157,FISHING,ROD,REEL,BAIT,HOOK,BOAT,NET,LAKE,CATCH
1158,CAMPING GEAR,TENT,BAG,FIRE,FLASHLIGHT,COMPASS,KNIFE,PACK,BOOTS
1159,BEACH ITEMS,SAND,SURF,TOWEL,SUNSCREEN,UMBRELLA,BUCKET,BALL
1160,GARDENING,FLOWER,HOE,SEED,SOIL,WATER,RAKE,WEED,GROW
1161,PAINTING,BRUSH,CANVAS,EASEL,PAINT,COLOR,PALETTE,ARTIST
1162,SEWING,NEEDLE,THREAD,CLOTH,BUTTON,PIN,SCISSORS,STITCH
1163,COOKING,PAN,POT,STOVE,OVEN,MIX,BAKE,FRY,BOIL,CHOP
1164,CLEANING,BROOM,MOP,DUST,VACUUM,SOAP,SPONGE,WIPE,WASH
1165,FEELINGS,HAPPY,SAD,ANGRY,AFRAID,TIRED,EXCITED,BORED,CALM
1166,VIRTUES,KIND,HONEST,BRAVE,LOYAL,FAIR,WISE,PATIENT,STRONG
1167,LAKES,CASPIAN,SUPERIOR,VICTORIA,HURON,MICHIGAN,TANGANYIKA,BAIKAL,BEAR,ERIE,MEAD,CHAD,TAHOE,COMO
1168,SEAS,MEDITERRANEAN,CARIBBEAN,SOUTH CHINA,BERING,MEXICO,OKHOTSK,EAST CHINA,JAPAN,BALTIC,CORAL,BLACK,RED,JAVA,ROSS
1169,STARS,SIRIUS,VEGA,RIGEL,BETELGEUSE,ALTAIR,POLARIS,ANTARES,DENEB,MIRA,POLLUX,CASTOR
1170,MOONS,LUNA,TITAN,EUROPA,IO,PHOBOS,DEIMOS,CHARON,GANYMEDE,CALLISTO,ENCELADUS
1171,TREES,ASH,BEECH,BIRCH,CEDAR,CHERRY,CYPRESS,ELM,FIR,MAPLE,PINE,POPLAR,REDWOOD,SPRUCE,WALNUT,WILLOW,OAK,YEW,GUM
1172,FLOWERS,CAMELLIA,DAISY,IRIS,LAVENDER,LILY,ORCHID,ROSE,SUNFLOWER,TULIP,VIOLET,PANSY,POPPY,ASTER,PEONY
1173,INSECTS,ANT,BEE,BEETLE,BUTTERFLY,FLY,GNAT,MOSQUITO,MOTH,WASP,FLEA,LOUSE,TICK,MITE
1174,FAMOUS PAINTERS,PICASSO,VAN GOGH,MONET,DALI,REMBRANDT,WARHOL,MATISSE,POLLOCK
1175,COMPOSERS,BACH,MOZART,BEETHOVEN,CHOPIN,TCHAIKOVSKY,VIVALDI,HANDEL
1176,LITERARY GENRES,FICTION,MYSTERY,SCI-FI,FANTASY,HORROR,ROMANCE,THRILLER
1177,POETRY TERMS,STANZA,RHYME,METER,VERSE,HAIKU,SONNET,LYRIC,EPIC,ODE
1178,THEATER TERMS,STAGE,CURTAIN,PROP,SCRIPT,CAST,PLAY,ACT,CUE,ROLE
1179,DANCE STYLES,BALLET,TAP,JAZZ,SALSA,TANGO,WALTZ,HULA,POLKA
1180,MUSIC TEMPOS,ALLEGRO,ADAGIO,PRESTO,LARGO,ANDANTE
1181,ARCHITECTURE,ARCH,DOME,SPIRE,COLUMN,VAULT
1182,BRIDGE TYPES,SUSPENSION,ARCH,BEAM,TRUSS,DRAWBRIDGE
1183,ROAD TYPES,HIGHWAY,STREET,AVENUE,LANE,BOULEVARD
1184,KITCHEN HERBS,BASIL,THYME,MINT,DILL,ROSEMARY,CHIVE,CRESS,SORREL,RUE,BALM
1185,BAKING SPICES,CINNAMON,NUTMEG,CLOVE,GINGER,ALLSPICE,SALT,SAGE,CUMIN
1186,CITRUS FRUITS,LEMON,LIME,ORANGE,GRAPEFRUIT,CITRON,POMELO,MANDARIN
1187,BERRIES,STRAWBERRY,BLUEBERRY,RASPBERRY,BLACKBERRY,CRANBERRY,GOOSEBERRY
1188,STONE FRUITS,PEACH,PLUM,APRICOT,CHERRY,NECTARINE,MANGO
1189,TROPICAL FRUITS,MANGO,PINEAPPLE,PAPAYA,KIWI,BANANA
1190,ROOT VEGETABLES,CARROT,POTATO,BEET,TURNIP,RADISH,PARSNIP
1191,LEAFY GREENS,SPINACH,KALE,LETTUCE,ARUGULA,CHARD,COLLARD
1192,CRUSTACEANS,CRAB,LOBSTER,SHRIMP,PRAWN,BARNACLE
1193,MOLLUSKS,SNAIL,CLAM,SQUID,OCTOPUS,OYSTER
1194,ARACHNIDS,SPIDER,SCORPION,TICK,MITE
1195,CONIFERS,PINE,FIR,SPRUCE,CEDAR,REDWOOD
1196,DECIDUOUS TREES,OAK,MAPLE,ELM,BIRCH,ASH
1197,CLOUDS,CIRRUS,STRATUS,CUMULUS,NIMBUS,ALTO
1198,WIND NAMES,ZEPHYR,GALE,MISTRAL,CHINOOK,MONSOON,GUST,DRAFT,BREEZE,SQUALL,TRADE
1199,PRECIPITATION,RAIN,SNOW,SLEET,HAIL,FOG
1200,TECTONIC PLATES,PACIFIC,EURASIAN,AFRICAN,ANTARCTIC
1201,VOLCANO PARTS,CRATER,VENT,MAGMA,LAVA,ASH
1202,OCEAN ZONES,COASTAL,PELAGIC,BENTHIC,ABYSSAL
1203,FOSSIL FUELS,COAL,OIL,GAS,PEAT
1204,ALLOYS,BRONZE,BRASS,STEEL,PEWTER,SOLDER
1205,PATTERNS,PLAID,STRIPE,CHECK,DOT,GRID,TOILE,PAISLEY
1206,TEXTURES,SILK,WOOL,FELT,LINEN,HEMP,JUTE,FUR
1207,SHAPES 3D,CONE,CUBE,PRISM,TORUS,SPHERE,HELIX,SPIRAL
1208,COLORS EXOTIC,CYAN,TEAL,NAVY,AQUA,AZURE,INDIGO,COBALT
1209,TIME PERIODS,SEC,MIN,HOUR,WEEK,YEAR,AGE,ERA
1210,VOLUMES,PINT,QUART,LITER,DRAM,GILL,PECK,BUSHEL
1211,WEIGHTS,GRAM,KILO,TON,POUND,OUNCE,STONE,GRAIN
1212,UNITS,INCH,FOOT,YARD,MILE,ACRE,ROD,FURLONG
1213,SYMBOLS,DASH,DOT,STAR,HASH,PLUS,TILDE,CARET
1214,WRITING,DRAFT,EDIT,COPY,TYPE,PLOT,PRINT,FILE
1215,NUTS,PECAN,ALMOND,CASHEW,WALNUT,HAZEL,PINE,BRAZIL,PISTACHIO
1216,DISNEY PARKS,MAGIC KINGDOM,EPCOT,ANIMAL KINGDOM,HOLLYWOOD STUDIOS,DISNEYLAND,CALIFORNIA ADVENTURE
1217,PIXAR MOVIES,TOY STORY,CARS,UP,SOUL,COCO,WALL-E,INSIDE OUT,RATATOUILLE
1218,THEME PARKS,DISNEY,UNIVERSAL,SIX FLAGS,SEAWORLD,LEGOLAND,BUSCH GARDENS,DOLLYWOOD
1219,ROLLER COASTERS,WOODEN,STEEL,INVERTED,LOOP,DIVE,LAUNCH,SPINNING,HYBRID
1220,ANDROID VERSIONS,CUPCAKE,DONUT,ECLAIR,FROYO,GINGERBREAD,HONEYCOMB,JELLY BEAN,KITKAT
1221,APPLE PRODUCTS,IPHONE,IPAD,MACBOOK,WATCH,AIRPODS,IMAC,APPLE TV,VISION PRO
1222,MESSAGING APPS,WHATSAPP,MESSENGER,TELEGRAM,SIGNAL,WECHAT,LINE,DISCORD,SLACK
1223,TV CHANNELS,NBC,ABC,CBS,FOX,CNN,ESPN,HBO,DISNEY,MTV
1224,GYM EXERCISES,SQUAT,BENCH PRESS,DEADLIFT,LUNGE,CURL,PLANK,PUSHUP,PULLUP
1225,CARDIO MACHINES,TREADMILL,ELLIPTICAL,BIKE,ROWER,STAIRMASTER,CLIMBER,SKI ERG
1226,PASTA SAUCES,MARINARA,ALFREDO,PESTO,VODKA,BOLOGNESE,CARBONARA,PUTTANESCA
1227,FRENCH CHEESES,BRIE,CAMEMBERT,ROQUEFORT,COMTE,GRUYERE,MUNSTER,CHEVRE
1228,BOX OFFICE,AVATAR,TITANIC,AVENGERS,STAR WARS,JURASSIC WORLD,LION KING,SPIDERMAN
1229,DIRECTORS,SPIELBERG,NOLAN,SCORSESE,TARANTINO,CAMERON,HITCHCOCK,KUBRICK,COPPOLA
1230,HARRY POTTER,HARRY,RON,HERMIONE,DRACO,SNAPE,DUMBLEDORE,HAGRID,SIRIUS,MCGONAGALL,FLITWICK,SPROUT
1231,LOTR RACES,HOBBIT,ELF,DWARF,ORC,MAN,WIZARD,ENT,TROLL
1232,STAR WARS DROIDS,R2D2,C3PO,BB8,K2SO,IG88,CHOPPER,BATTLE DROID,PROBE
1233,TENNIS MAJORS,WIMBLEDON,US OPEN,FRENCH OPEN,AUSTRALIAN OPEN
1234,GOLF MAJORS,MASTERS,US OPEN,PGA,THE OPEN
1235,CAR SAFETY,AIRBAG,SEATBELT,ABS,CAMERA,SENSOR,BRAKES,LANE ASSIST
1236,LUXURY CARS,FERRARI,PORSCHE,LAMBORGHINI,BUGATTI,MCLAREN,ASTON MARTIN,ROLLS ROYCE,GUCCI,PRADA,CHANEL,DIOR,VUITTON,HERMES,ROLEX,CARTIER
1237,ELECTRIC CARS,TESLA,RIVIAN,LUCID,POLESTAR,LEAF,BOLT,IONIQ,TAYCAN
1238,COFFEE CHAINS,STARBUCKS,DUNKIN,TIM HORTONS,PEETS,COSTA,CARIBOU,DUTCH BROS,BLUE BOTTLE
1239,DONUT SHOPS,KRISPY KREME,DUNKIN,TIM HORTONS,VOODOO,SHIPLEY,RANDYS
1240,JEANS BRANDS,LEVI,WRANGLER,LEE,DIESEL,GAP,CALVIN KLEIN,GUESS
1241,MAKEUP BRANDS,MAC,SEPHORA,ULTA,FENTY,NYX,MORPHE,CLINIQUE,NARS
1242,ENERGY DRINKS,RED BULL,MONSTER,ROCKSTAR,BANG,CELSIUS,NOS,REIGN
1243,MONOPOLY PIECES,TOP HAT,THIMBLE,BOOT,CAR,DOG,IRON,SHIP,WHEELBARROW
1244,CARD GAMES,POKER,BLACKJACK,WAR,GO FISH,BRIDGE,RUMMY,SOLITAIRE,HEARTS,CANASTA,EUCHRE,CRIBBAGE,PINOCHLE
1245,CASINO GAMES,SLOTS,CRAPS,ROULETTE,BACCARAT,POKER,KENO,BINGO,PAI GOW,FARO
1246,DISNEY PRINCES,CHARMING,ERIC,ALADDIN,PHILLIP,ADAM,NAVEEN,FLYNN
1247,LAS VEGAS HOTELS,BELLAGIO,LUXOR,VENETIAN,WYNN,ARIA,MANDALAY,MIRAGE,EXCALIBUR
1248,CIRQUE SHOWS,O,KA,MYSTERE,LOVE,ALEGRIA,KOOZA,ZUMANITY,BEATLES
1249,NETFLIX ORIGINALS,STRANGER THINGS,CROWN,OZARK,WITCHER,BRIDGERTON,SQUID GAME,NARCOS,DARK
1250,GYM EQUIPMENT,DUMBBELL,BARBELL,KETTLEBELL,TREADMILL,ELLIPTICAL,ROWER,BENCH,BIKE
1251,YOGA STYLES,HATHA,VINYASA,BIKRAM,ASHTANGA,YIN,KUNDALINI,RESTORATIVE
1252,CROSSFIT TERMS,WOD,AMRAP,BOX JUMP,BURPEE,THRUSTER,SNATCH,CLEAN,JERK
1253,GOLD RUSH STATES,CALIFORNIA,ALASKA,NEVADA,COLORADO,DAKOTA,IDAHO,MONTANA
1254,DESERT PLANTS,CACTUS,AGAVE,YUCCA,SAGEBRUSH,JOSHUA TREE,ALOE,MESQUITE,PRICKLY PEAR
1255,RAINFOREST LAYERS,EMERGENT,CANOPY,UNDERSTORY,FLOOR,SOIL,SHRUB
1256,ARCTIC NATIONS,CANADA,RUSSIA,USA,NORWAY,DENMARK,ICELAND,SWEDEN,FINLAND
1257,SPACE SHUTTLES,ATLANTIS,CHALLENGER,COLUMBIA,DISCOVERY,ENDEAVOUR,ENTERPRISE
1258,NASA CENTERS,KENNEDY,JOHNSON,GODDARD,JET PROPULSION,MARSHALL,LANGLEY,AMES,GLENN
1259,ROCKET PARTS,NOSE CONE,FIN,ENGINE,FUSELAGE,PAYLOAD,THRUSTER,TANK,STAGE
1260,US MONUMENTS,LINCOLN,WASHINGTON,JEFFERSON,RUSHMORE,LIBERTY,ARCH,ALAMO,BUNKER HILL
1261,MOUNT RUSHMORE,WASHINGTON,JEFFERSON,LINCOLN,ROOSEVELT
1262,ROOSEVELT FAMILY,TEDDY,FRANKLIN,ELEANOR,ALICE,KERMIT,THEODORE,ELLIOTT
1263,NEW DEAL,WPA,CCC,TVA,SSA,FDIC,SEC,NRA,AAA
1264,GREAT DEPRESSION,CRASH,DUST BOWL,HOOVERVILLE,POVERTY,JOBS,BANK,STOCKS
1265,1930S DECADE,DEPRESSION,SWING,RADIO,TALKIES,PROHIBITION,GANGSTERS,JAZZ
1266,GANGSTER ERA,CAPONE,DILLINGER,NELSON,BONNIE,CLYDE,LUCIANO,BUGSY,GOTTI
1267,PROHIBITION DRINKS,GIN RICKEY,SIDECAR,HIGHBALL,MARY PICKFORD,BEES KNEES,MOONSHINE,SPEAKEASY
1268,SITCOMS,FRIENDS,SEINFELD,OFFICE,PARKS REC,BIG BANG,CHEERS,MASH
1269,DRAMAS,BREAKING BAD,SOPRANOS,WIRE,MAD MEN,SUCCESSION,LOST,THRONES
1270,CARTOONS,SPONGEBOB,SIMPSONS,FAMILY GUY,SOUTH PARK,FUTURAMA,SCOOBY DOO
1271,REALITY TV,SURVIVOR,BIG BROTHER,BACHELOR,VOICE,IDOL,AMAZING RACE
1272,SCI FI SHOWS,TREK,DOCTOR WHO,X FILES,STRANGER THINGS,MANDALORIAN,FIREFLY
1273,TALK SHOWS,TONIGHT,DAILY,ELLEN,OPRAH,LETTERMAN,CONAN,KIMMEL
1274,REVOLUTIONS,FRENCH,AMERICAN,INDUSTRIAL,RUSSIAN,DIGITAL,SCIENTIFIC
1275,EMPIRES,ROMAN,OTTOMAN,BRITISH,MONGOL,AZTEC,MAYAN,PERSIAN
1276,CONSTELLATIONS,ORION,URSA MAJOR,CASSIOPEIA,SCORPIO,LEO,DRACO,PEGASUS
1277,SPACE MISSIONS,APOLLO,GEMINI,VOYAGER,ARTEMIS,SPUTNIK,CURIOSITY
1278,ASTRONAUTS,ARMSTRONG,ALDRIN,GAGARIN,GLENN,RIDE,HADFIELD,KELLY
1279,GALAXIES,MILKY WAY,ANDROMEDA,TRIANGULUM,WHIRLPOOL,SOMBRERO,PINWHEEL
1280,SOCCER TEAMS,REAL MADRID,BARCELONA,MAN UTD,LIVERPOOL,JUVENTUS,BAYERN
1281,NBA TEAMS,LAKERS,BULLS,WARRIORS,CELTICS,HEAT,KNICKS,SPURS
1282,TROPHIES,STANLEY CUP,LOMBARDI,WORLD CUP,GOLD MEDAL,HEISMAN,WIMBLEDON
1283,SPORTS LEGENDS,JORDAN,PELE,BRADY,RUTH,GRETZKY,ALI,PHELPS,WOODS
1284,PERSONNEL,TEACHER,STUDENT,PRINCIPAL,JANITOR,COACH,NURSE,COUNSELOR
1285,ACADEMICS,HOMEWORK,QUIZ,TEST,ESSAY,PROJECT,REPORT,GRADE
1286,RECESS,SWING,SLIDE,TAG,BALL,SANDBOX,JUMP ROPE,HOPSCOTCH
1287,HP SPELLS,LUMOS,NOX,ACCIO,ALOHOMORA,EXPELLIARMUS,STUPEFY,PROTEGO
1288,PIXAR CARS,LIGHTNING,MATER,SALLY,DOC,LUIGI,GUIDO,MACK
1289,TOY STORY TOYS,WOODY,BUZZ,REX,HAMM,SLINKY,JESSIE,BULLSEYE
1290,SPONGEBOB CAST,SPONGEBOB,PATRICK,SQUIDWARD,SANDY,KRABS,PLANKTON
1291,SIMPSONS FAMILY,HOMER,MARGE,BART,Lisa,MAGGIE,GRAMPA
1292,FAMILY GUY,PETER,LOIS,STEWIE,BRIAN,CHRIS,MEG
1293,FRIENDS CAST,ROSS,RACHEL,MONICA,CHANDLER,JOEY,PHOEBE
1294,THE OFFICE CAST,MICHAEL,DWIGHT,JIM,PAM,RYAN,ANDY
1295,GOT HOUSES,STARK,LANNISTER,TARGARYEN,BARATHEON,GREYJOY,TYRELL
1296,HUNGER GAMES,MINING,LUXURY,FISHING,POWER,AGRICULTURE,TRANSPORT
1297,TWILIGHT SAGA,BELLA,EDWARD,JACOB,ALICE,CARLISLE,EMMETT
1298,VAMPIRE DIARIES,ELENA,STEFAN,DAMON,BONNIE,CAROLINE,ALARIC
1299,STRANGER THINGS,MIKE,ELEVEN,DUSTIN,LUCAS,WILL,MAX
1300,BREAKING BAD,WALTER,JESSE,SKYLER,HANK,SAUL,GUS
1301,WALKING DEAD,RICK,DARYL,MICHONNE,CAROL,NEGAN,MAGGIE
1302,GREYS ANATOMY,MEREDITH,DEREK,CRISTINA,ALEX,BAILEY,WEBBER
1303,BIG BANG THEORY,SHELDON,LEONARD,PENNY,RAJ,HOWARD,BERNADETTE
1304,HIMYM,TED,MARSHALL,LILY,BARNEY,ROBIN
1305,MODERN FAMILY,PHIL,CLAIRE,GLORIA,JAY,MITCH,CAM
1306,PARKS AND REC,LESLIE,RON,TOM,APRIL,ANDY,BEN
1307,BROOKLYN 99,JAKE,AMY,TERRY,ROSA,BOYLE,HOLT
1308,SEINFELD,JERRY,GEORGE,ELAINE,KRAMER
1309,GOLDEN GIRLS,DOROTHY,ROSE,BLANCHE,SOPHIA
1310,SEX AND THE CITY,CARRIE,SAMANTHA,CHARLOTTE,MIRANDA
1311,TECH GIANTS,APPLE,GOOGLE,META,AMAZON,MICROSOFT,TESLA,NVIDIA,ORACLE
1312,HOTEL CHAINS,HILTON,MARRIOTT,HYATT,SHERATON,HOLIDAY INN,BEST WESTERN,RADISSON,WYNDHAM
1313,RETAIL STORES,WALMART,TARGET,COSTCO,BEST BUY,IKEA,HOME DEPOT,LOWES,MACS
1314,CHIPS BRANDS,LAYS,DORITOS,PRINGLES,CHEETOS,RUFFLES,FRITOS,TAKIS,SUNCHIPS
1315,CEREAL BRANDS,CHEERIOS,FROSTED FLAKES,FROOT LOOPS,RICE KRISPIES,LUCKY CHARMS,CINNAMON TOAST,CAPN CRUNCH,RAISIN BRAN
1316,BIRD PETS,PARROT,FINCH,CANARY,BUDGIE,COCKATIEL,LOVEBIRD,DOVE,MACAW
1317,FISH PETS,GOLDFISH,BETTA,TETRA,GUPPY,MOLLY,ANGELFISH,CLOWNFISH,OSCAR
1318,RODENT PETS,HAMSTER,GERBIL,MOUSE,RAT,GUINEA PIG,CHINCHILLA,FERRET,HEDGEHOG
1319,REPTILE PETS,SNAKE,LIZARD,TURTLE,GECKO,IGUANA,CHAMELEON,DRAGON,PYTHON
1320,FARM ANIMALS,COW,PIG,SHEEP,GOAT,HORSE,CHICKEN,DUCK,DONKEY
1321,JUNGLE ANIMALS,TIGER,MONKEY,SNAKE,FROG,PARROT,SLOTH,GORILLA,JAGUAR
1322,ARCTIC ANIMALS,BEAR,SEAL,WALRUS,FOX,PENGUIN,WHALE,OWL,HARE
1323,DESERT ANIMALS,CAMEL,SNAKE,LIZARD,SCORPION,FOX,VULTURE,COYOTE,SPIDER
1324,OCEAN ANIMALS,WHALE,SHARK,DOLPHIN,CRAB,SEAL,OCTOPUS,JELLYFISH,TURTLE
1325,RIVER ANIMALS,OTTER,BEAVER,DUCK,FISH,FROG,TURTLE,CRANE,SWAN
1326,FOREST ANIMALS,DEER,BEAR,FOX,SQUIRREL,RABBIT,OWL,MOOSE,RACCOON
1327,MUSIC AWARDS,GRAMMY,MTV VMA,BRIT,BILLBOARD,AMA,CMA,BET,JUNO
1328,FILM AWARDS,OSCAR,GOLDEN GLOBE,BAFTA,SAG,CANNES,SUNDANCE,EMMY,TONY
1329,FASHION DESIGNERS,GUCCI,PRADA,VERSACE,CHANEL,DIOR,ARMANI,LAUREN,HILFIGER
1330,AIRLINES ASIA,SINGAPORE,ANA,JAL,CATHAY,KOREAN,EVA,THAI,QATAR
1331,AIRLINES EUROPE,LUFTHANSA,AIR FRANCE,KLM,BRITISH,RYANAIR,EASYJET,TURKISH,SWISS
1332,TECH HARDWARE,INTEL,AMD,NVIDIA,SAMSUNG,TSMC,QUALCOMM,ASUS,MSI
1333,TECH SOFTWARE,MICROSOFT,ORACLE,ADOBE,SALESFORCE,SAP,INTUIT,VMWARE,AUTODESK
1334,SOCIAL APPS,TIKTOK,INSTAGRAM,SNAPCHAT,FACEBOOK,TWITTER,REDDIT,DISCORD,BE REAL
1335,DATING APPS,TINDER,BUMBLE,HINGE,GRINDR,OKCUPID,MATCH,PLENTY FISH,COFFEE BAGEL
1336,RIDE APPS,UBER,LYFT,GRAB,BOLT,DIDI,GOCURRY,CABIFY,VIA
1337,FOOD APPS,UBER EATS,DOORDASH,GRUBHUB,POSTMATES,DELIVEROO,JUST EAT,ZOMATO,SWIGGY
1338,TV SERIES THRILLER,BREAKING BAD,DEXTER,YOU,MINDHUNTER,HANNIBAL,FARGO,OZARK,HOMELAND
1339,TV SERIES COMEDY,OFFICE,PARKS REC,BROOKLYN 99,SEINFELD,FRIENDS,SCRUBS,COMMUNITY,30 ROCK
1340,VIDEO GAME HEROES,MARIO,LINK,SONIC,MASTER CHIEF,KRATOS,SNAKE,SAMUS,LARA CROFT
1341,PASTA DISHES,LASAGNA,SPAGHETTI,MACARONI CHEESE,FETTUCCINE ALFREDO,CARBONARA,ZITI,RAVIOLI,MANICOTTI,PENNE VODKA
1342,RICE DISHES,FRIED RICE,RISOTTO,PAELLA,JAMBALAYA,BIRYANI,PILAF,SUSHI,RICE PUDDING
1343,EGG DISHES,OMELET,SCRAMBLED,FRIED,POACHED,BENEDICT,DEVILED,QUICHE,FRITTATA
1344,CHICKEN DISHES,NUGGETS,WINGS,PARMESAN,ALFREDO,CURRY,SOUP,SALAD,ROAST,FRIED
1345,BEEF DISHES,STEAK,BURGER,MEATLOAF,ROAST,STEW,TACO,CHILI,WELLINGTON
1346,PORK DISHES,CHOPS,LOIN,RIBS,BACON,HAM,SAUSAGE,PULLED PORK,ROAST
1347,SEAFOOD DISHES,SUSHI,FISH CHIPS,SHRIMP SCAMPI,LOBSTER BISQUE,CRAB CAKES,CLAM CHOWDER,GRILLED SALMON
1348,TOFU DISHES,MAPO TOFU,STIR FRY,MISO SOUP,AGEDASHI,TOFU SCRAMBLE,CURRY
1349,VEGETABLE DISHES,SALAD,STIR FRY,ROASTED VEGGIES,SOUP,STEW,CASSEROLE,GRATIN
1350,SALAD TYPES,CAESAR,GARDEN,GREEK,COBB,CHEF,FRUIT,POTATO,PASTA,TUNA,EGG
1351,CAR RENTALS,ENTERPRISE,HERTZ,AVIS,BUDGET,ALAMO,NATIONAL,DOLLAR,THRIFTY
1352,CRUISE LINES,CARNIVAL,ROYAL CARIBBEAN,DISNEY,NORWEGIAN,PRINCESS,HOLLAND AMERICA,CELEBRITY
1353,DEPARTMENT STORES,MUCYS,KOHLS,JCPENNEY,NORDSTROM,DILLARDS,BLOOMINGDALES,SAKS,SEARS
1354,SUPERMARKETS,KROGER,PUBLIX,SAFEWAY,WHOLE FOODS,ALDI,TRADER JOES,WALMART,COSTCO
1355,PHARMACY CHAINS,CVS,WALGREENS,RITE AID,WALMART,COSTCO,KROGER
1356,BOOKSTORES,BARNES NOBLE,BOOKS A MILLION,POWELLS,STRAND,HALF PRICE BOOKS
1357,PET STORES,PETSMART,PETCO,PET SUPPLIES PLUS,PET SUPERMARKET
1358,TOY STORES,TOYS R US,LEGO STORE,BUILD A BEAR,GAMESTOP,DISNEY STORE
1359,SHOE STORES,FOOT LOCKER,DSW,FAMOUS FOOTWEAR,PAYLESS,VANS,JOURNEYS
1360,JEWELRY STORES,KAY,ZALES,JARED,TIFFANY,PANDORA,CARTIER
1361,ELECTRONICS STORES,BEST BUY,APPLE STORE,MICRO CENTER,GAMESTOP,TARGET,WALMART
1362,HARDWARE STORES,HOME DEPOT,LOWES,ACE,TRUE VALUE,MENARDS,HARBOR FREIGHT
1363,SPORTING GOODS STORES,DICKS,ACADEMY,BASS PRO,CABELAS,REI,BIG 5
1364,FURNITURE STORES,IKEA,ASHLEY,ROOMS TO GO,WAYFAIR,WEST ELM,POTTERY BARN,CRATE BARREL
1365,YOGA POSES,DOWNWARD DOG,CHILD POSE,TREE POSE,WARRIOR,COBRA,LOTUS,PLANK
1366,DANCE MOVES,FLOSS,DAB,MOONWALK,TWIST,MACARENA,ROBOT,WALTZ,TANGO
1367,MUSIC FESTIVALS,COACHELLA,LOLLAPALOOZA,BONNAROO,GLASTONBURY,TOMORROWLAND,AUSTIN CITY LIMITS
1368,MAGAZINE GENRES,FASHION,SPORTS,NEWS,SCIENCE,TECH,COOKING,TRAVEL,HEALTH
1369,NEWSPAPER SECTIONS,HEADLINES,SPORTS,BUSINESS,OPINION,COMICS,CLASSIFIEDS,WEATHER
1370,LIBRARY SECTIONS,FICTION,NONFICTION,REFERENCE,PERIODICALS,CHILDREN,YOUNG ADULT,MEDIA
1371,AIRPORT ZONES,CHECK IN,SECURITY,GATE,BAGGAGE CLAIM,CUSTOMS,DUTY FREE,LOUNGE
1372,THEATER SECTIONS,ORCHESTRA,MEZZANINE,BALCONY,BOX,LOGE,STAGE,PIT
1373,STADIUM ZONES,FIELD,STANDS,DUGOUT,LOCKER ROOM,PRESS BOX,CONCESSION,SUITE
1374,REALITY HOSTS,PROBST,SEACREST,CHEN,HARRISON,BANKS,KLUM,COWELL
1375,LATE NIGHT HOSTS,FALLON,KIMMEL,COLBERT,MYERS,LENO,LETTERMAN,CONAN
1376,TALK SHOW HOSTS,OPRAH,ELLEN,DR PHIL,KELLY,DREW,WENDY,VIEW
1377,GAME SHOW HOSTS,TREBEK,SAJAK,HARVEY,CAREY,BARKER,RAYBURN
1378,FAMOUS CHRISES,EVANS,HEMSWORTH,PRATT,PINE,ROCK,TUCKER
1379,FAMOUS JENNIFERS,ANISTON,LOPEZ,LAWRENCE,GARNER,HUDSON,CONNELLY
1380,FAMOUS TOMS,CRUISE,HANKS,HARDY,HOLLAND,HIDDLESTON,SELLECK
1381,POP DIVAS,MADONNA,BEYONCE,GAGA,TAYLOR,ARIANA,RIHANNA,BRITNEY
1382,RAP LEGENDS,TUPAC,BIGGIE,EMINEM,JAY Z,SNOOP,DRE,NAS
1383,COUNTRY QUEENS,DOLLY,REBA,SHANIA,CARRIE,MIRANDA,TAYLOR,LORETTA
1384,COUNTRY KINGS,WILLIE,GARTH,GEORGE,BLAKE,LUKE,JOHNNY,KENNY
1385,BOY BANDS,NSYNC,BACKSTREET,ONE DIRECTION,BTS,JONAS,BOYZ II MEN
1386,GIRL GROUPS,SPICE GIRLS,DESTINYS CHILD,TLC,BLACKPINK,FIFTH HARMONY
1387,JAMES BOND ACTORS,CONNERY,LAZENBY,MOORE,DALTON,BROSNAN,CRAIG
1388,BATMAN ACTORS,WEST,KEATON,KILMER,CLOONEY,BALE,AFFLECK,PATTINSON
1389,SPIDERMAN ACTORS,MAGUIRE,GARFIELD,HOLLAND,JOHNSON,MOORE
1390,JOKER ACTORS,ROMERO,NICHOLSON,LEDGER,LETO,PHOENIX,HAMILL
1391,SUPERMAN ACTORS,REEVE,CAVILL,ROUTH,HOECHLIN,WELLING
1392,STAR WARS HEROES,LUKE,LEIA,HAN,CHEWIE,REY,FINN,POE
1393,STAR WARS VILLAINS,VADER,SIDIOUS,MAUL,KYLO,GREVIOUS,DOOKU
1394,HARRY POTTER TEACHERS,DUMBLEDORE,MCGONAGALL,SNAPE,HAGRID,FLITWICK,SPROUT
1395,HUNGER GAMES CHARACTERS,KATNISS,PEETA,GALE,HAYMITCH,EFFIE,PRIM
1396,TWILIGHT CHARACTERS,BELLA,EDWARD,JACOB,ALICE,CARLISLE,CHARLIE
1397,LORD RINGS FELLOWSHIP,FRODO,SAM,GANDALF,ARAGORN,LEGOLAS,GIMLI,BOROMIR
1398,AVENGERS ORIGINAL,IRON MAN,CAPTAIN AMERICA,THOR,HULK,WIDOW,HAWKEYE
1399,JUSTICE LEAGUE CORE,BATMAN,SUPERMAN,WONDER WOMAN,FLASH,AQUAMAN,CYBORG
1400,X MEN CORE,WOLVERINE,CYCLOPS,STORM,JEAN GREY,BEAST,ROGUE
1401,STRANGER THINGS KIDS,MIKE,ELEVEN,DUSTIN,LUCAS,WILL,MAX
1402,FRIENDS CHARACTERS,ROSS,RACHEL,MONICA,CHANDLER,JOEY,PHOEBE
1403,OFFICE CHARACTERS,MICHAEL,DWIGHT,JIM,PAM,RYAN,ANDY,KEVIN
1404,PARKS REC CHARACTERS,LESLIE,RON,TOM,APRIL,ANDY,BEN,CHRIS
1405,BROOKLYN 99 CHARACTERS,JAKE,AMY,ROSA,TERRY,CHARLES,HOLT
1406,SEINFELD QUARTET,JERRY,GEORGE,ELAINE,KRAMER
1407,BREAD TYPES,SOURDOUGH,RYE,WHEAT,PUMPERNICKEL,WHITE,BAGUETTE
1408,COFFEE ROASTS,LIGHT,MEDIUM,DARK,ESPRESSO,FRENCH,BLONDE
1409,TEA TYPES,GREEN,BLACK,OOLONG,WHITE,HERBAL,CHAI
1410,WINE RED,MERLOT,CABERNET,PINOT,MALBEC,SYRAH,SHIRAZ
1411,WINE WHITE,CHARDONNAY,RIESLING,MOSCATO,PINOT,SAUVIGNON,BLANC
1412,BEER STYLES,IPA,STOUT,LAGER,PILSNER,PORTER,ALE
1413,SPIRITS,VODKA,GIN,RUM,TEQUILA,WHISKEY,BRANDY
1414,MEAT CUTS BEEF,RIBEYE,SIRLOIN,TBONE,FILET,BRISKET,FLANK
1415,MEAT CUTS PORK,CHOP,LOIN,RIBS,BACON,HAM,SHOULDER
1416,POULTRY,CHICKEN,TURKEY,DUCK,GOOSE,QUAIL,PHEASANT
1417,SHELLFISH,SHRIMP,CRAB,LOBSTER,CLAM,OYSTER,MUSSEL
1418,FISH WHITE,COD,HADDOCK,HALIBUT,TILAPIA,SOLE,FLOUNDER
1419,FISH OILY,SALMON,TUNA,MACKEREL,SARDINE,TROUT,HERRING
1420,HERBS,BASIL,MINT,THYME,PARSLEY,OREGANO,ROSEMARY
1421,SPICES,CUMIN,PAPRIKA,NUTMEG,CINNAMON,TURMERIC,GINGER
1422,BAKING INGREDIENTS,FLOUR,SUGAR,YEAST,SODA,POWDER,VANILLA
1423,PATRIOTIC SONGS,AMERICA THE BEAUTIFUL,GOD BLESS AMERICA,THIS LAND IS YOUR LAND,YANKEE DOODLE,STAR SPANGLED BANNER
1424,SOUP BASES,BROTH,STOCK,CREAM,TOMATO,MISOU,CHOWDER
1425,HBO COMEDIES,CURB,VEEP,SILICON VALLEY,BARRY,INSECURE,ENTOURAGE,GIRLS
1426,HBO DRAMAS,WIRE,SOPRANOS,SUCCESSION,DEADWOOD,EUPHORIA,WATCHMEN,OZ
1427,STAND UP COMEDIANS,CK,CHAPPELLE,BURR,MULANEY,GAFFIGAN,SEGURA,KREISCHER
1428,SNL ALUMNI,FARLEY,SPADE,SANDLER,FERRELL,FEY,POEHLER,HADER,WIIG
1429,NEWS OUTLETS,CNN,FOX,MSNBC,BBC,NPR,REUTERS,AP,AL JAZEERA,AFP,UPI,BLOOMBERG
1430,MAJOR NEWSPAPERS,TIMES,POST,JOURNAL,GUARDIAN,SUN,MIRROR,GLOBE,NY TIMES,WSJ,USA TODAY,LA TIMES,CHICAGO TRIBUNE,DAILY MAIL
1431,COFFEE BREWING,DRIP,POUROVER,PRESS,ESPRESSO,COLD BREW,SIPHON,AEROPRESS
1432,HERDING DOGS,COLLIE,CORGI,SHEPHERD,HEELER,SHEEPDOG,MALINOIS
1433,LONGHAIR CATS,PERSIAN,MAINE COON,RAGDOLL,BIRMAN,HIMALAYAN,SIBERIAN
1434,ASTROLOGY SIGNS,ARIES,TAURUS,GEMINI,CANCER,LEO,VIRGO,LIBRA,SCORPIO
1435,ASTROLOGY PLANETS,MERCURY,VENUS,MARS,JUPITER,SATURN,URANUS,NEPTUNE
1436,PAINKILLERS,ASPIRIN,TYLENOL,ADVIL,MOTRIN,ALEVE,IBUPROFEN
1437,SCI FI TROPES,ALIENS,ROBOTS,LASERS,CLONES,TIME TRAVEL,CYBORGS
1438,PKD ADAPTATIONS,BLADE RUNNER,TOTAL RECALL,MINORITY REPORT,PAYCHECK,SCREAMERS
1439,WESTERN OUTLAWS,BILLY THE KID,JESSE JAMES,BUTCH CASSIDY,SUNDANCE KID,DOC HOLLIDAY
1440,DEADWOOD CHARACTERS,SWEARENGEN,BULLOCK,STAR,TRIXIE,ALMA,JANE,UTTER
1441,EARLY COMPUTERS,COMMODORE,ATARI,APPLE II,AMIGA,TRS 80,ZX SPECTRUM
1442,LINUX DISTROS,UBUNTU,DEBIAN,FEDORA,MINT,ARCH,CENTOS,KALI
1443,ADAM SANDLER FILMS,HAPPY GILMORE,BILLY MADISON,WATERBOY,BIG DADDY,CLICK
1444,HARRISON FORD FILMS,STAR WARS,INDIANA JONES,BLADE RUNNER,FUGITIVE,WITNESS
1445,TINY DOGS,CHIHUAHUA,YORKIE,POMERANIAN,MALTESE,SHIH TZU,PUG
1446,EXOTIC CATS,BENGAL,SAVANNAH,SPHYNX,SCOTTISH FOLD,MUNCHKIN
1447,ASTROLOGY ELEMENTS,FIRE,EARTH,AIR,WATER
1448,COFFEE ROASTS TYPES,BLONDE,MEDIUM,DARK,FRENCH,ITALIAN,ESPRESSO
1449,COMEDIANS,SEINFELD,ROCK,ELLEN,CAREY,SANDER,ROSANNE
1450,MARVEL TEAMS,AVENGERS,X MEN,FANTASTIC FOUR,GUARDIANS,DEFENDERS
1451,DC TEAMS,JUSTICE LEAGUE,TEEN TITANS,SUICIDE SQUAD,WATCHMEN,DOOM PATROL
1452,WINDOWS VERSIONS,XP,VISTA,SEVEN,EIGHT,TEN,ELEVEN,95,98
1453,MACOS VERSIONS,VENTURA,SONOMA,MONTEREY,BIG SUR,CATALINA,MOJAVE
1454,NEWS ANCHORS,COOPER,BLITZER,HOLT,MUIR,MADDOW,HANNITY
1455,COMPLEX EMOTIONS,NOSTALGIA,ENNUI,ANGST,EUPHORIA,SCHADENFREUDE
1456,OTC MEDS,TYLENOL,ADVIL,ASPIRIN,BENADRYL,SUDAFED,MUCINEX
1457,NATIONAL ANTHEMS,STAR SPANGLED BANNER,GOD SAVE KING,MARSEILLAISE,O CANADA
1458,RETRO COMPUTING,PUNCH CARD,FLOPPY DISK,TAPE DRIVE,CRT MONITOR,MODEM
1459,SCI FI SETTINGS,SPACE STATION,STARSHIP,COLONY,DYSTOPIA,CYBERSPACE
1460,PRESTIGE TV,SOPRANOS,WIRE,BREAKING BAD,MAD MEN,CROWN
1461,CULT GROUPS,MANSON FAMILY,HEAVENS GATE,JONESTOWN,NXIVM,SCIENTOLOGY
1462,OUTLAW GANGS,JAMES YOUNGER,WILD BUNCH,DALTONS,RENO GANG
1463,RARE DOGS,AZAWAKH,PULI,KOMONDOR,XOLO,MUDI
1464,RARE CATS,SOKOKE,LAPERM,KORAT,BURMILLA,TOYGER
1465,ASTROLOGY HOUSES,FIRST,FOURTH,SEVENTH,TENTH,TWELFTH
1466,ASTROLOGY ASPECTS,CONJUNCTION,SQUARE,TRINE,OPPOSITION,SEXTILE
1467,COFFEE ORIGINS,ETHIOPIA,COLOMBIA,SUMATRA,JAVA,BRAZIL,KENYA
1468,MARVEL METALS,ADAMANTIUM,VIBRANIUM,URU,CARBONADIUM
1469,DC METALS,NTH METAL,PROMETHIUM,KRYPTONIUM,AMAZONIUM
1470,MICROSOFT CEOS,GATES,BALLMER,NADELLA
1471,APPLE CEOS,JOBS,COOK,SCULLEY,AMELIO,SPINDLER
1472,LINUX KERNELS,MONOLITHIC,MICROKERNEL,HYBRID,EXOKERNEL
1473,PLUTCHIK EMOTIONS,ECSTASY,ADMIRATION,TERROR,AMAZEMENT,GRIEF
1474,MED CLASSES,STATIN,BETA BLOCKER,ACE INHIBITOR,DIURETIC,OPIOID
1475,ANTHEM COMPOSERS,KEY,ROUGET DE LISLE,HAYDN,ALEXANDROV
1476,EARLY TECH,VACUUM TUBE,TRANSISTOR,RELAY,SWITCH,CABLE
1477,SCI FI AUTHORS,DICK,ASIMOV,CLARKE,HEINLEIN,GIBSON
1478,WIRE CHARACTERS,MCNULTY,BUNK,OMAR,STRINGER,AVON,BUBBLES
1479,CULT LEADERS,MANSON,JONES,KORESH,APPLEWHITE,RANIERE
1480,WILD BUNCH,BUTCH,SUNDANCE,KID CURRY,NEWS CARVER
1481,DEADWOOD ACTORS,OLYPHANT,MCSHANE,GUNN,PARKER,HAWKES
1482,PKD NOVELS,UBIK,VALIS,SCANNER DARKLY,MAN IN HIGH CASTLE
1483,SANDLER FRIENDS,ANISTON,BARRYMORE,JAMES,BUSCEMI
1484,FORD CO STARS,HAMILL,FISHER,CONNERY,ALLEN,PFEIFFER
1485,BATMAN ALLIES,ROBIN,NIGHTWING,GORDON,ALFRED,CATWOMAN
1486,SUPERMAN ALLIES,LOIS,JIMMY,PERRY,KARA,KRYPTO
1487,SPIDEY VILLAINS,VULTURE,MYSTERIO,KRAVEN,SCORPION,SHOCKER
1488,IRON MAN SUITS,MARK 1,HULKBUSTER,SILVER CENTURION,STEALTH
1489,DOG GROUPS AKC,SPORTING,HOUND,WORKING,TERRIER,TOY,HERDING
1490,CAT COLORS,CALICO,TORTOISESHELL,TABBY,TUXEDO,SOLID
1491,ZODIAC QUALITIES,CARDINAL,FIXED,MUTABLE
1492,COFFEE PROCESS,WASHED,NATURAL,HONEY,WET HULLED
1493,SATIRE NEWS,ONION,BABYLON BEE,DAILY SHOW,COLBERT
1494,BRITISH COMICS,GERVAIS,BRAND,COOGAN,IDLE,CLEESE
1495,TENNIS LEGENDS,FEDERER,NADAL,DJOKOVIC,SAMPRAS,AGASSI
1496,MARVEL LOCATIONS,WAKANDA,ASGARD,LATVERIA,GENOSHA
1497,DC LOCATIONS,GOTHAM,METROPOLIS,THEMYSCIRA,ATLANTIS
1498,WINDOWS APPS,NOTEPAD,CALCULATOR,PAINT,SNIPPING TOOL
1499,MAC APPS,SAFARI,PAGES,NUMBERS,KEYNOTE,GARAGEBAND
1500,LINUX DESKTOPS,GNOME,KDE,XFCE,MATE,CINNAMON
1501,CABLE NEWS,CNN,MSNBC,FOX NEWS,HLN,CNBC
1502,BASIC EMOTIONS,JOY,SADNESS,ANGER,FEAR,DISGUST
1503,ANTIBIOTICS,PENICILLIN,AMOXICILLIN,CIPRO,DOXYCYCLINE
1504,COMPUTER INPUTS,MOUSE,KEYBOARD,MIC,WEBCAM,SCANNER
1505,50S FASHION,SADDLE SHOES,POODLE SKIRTS,CARDIGAN SWEATERS,CAT EYE GLASSES,SCARF ON HAIR,BOBBY SOCKS,LEATHER JACKET,ROLLED JEANS
1760,BICYCLE PARTS,WHEEL,TIRE,PEDAL,CHAIN,HANDLEBAR,SEAT,BRAKE,GEAR
1761,TRAFFIC SIGNS,STOP,YIELD,SPEED LIMIT,ONE WAY,DO NOT ENTER,NO PARKING,MERGE,CROSSWALK
1762,Air Fryer Staples,Fries,Wings,Broccoli,Salmon,Tofu,Ravioli
2000,Retro Tech,Walkman,Diskette,Pager,Rotary Phone,Betamax,LaserDisc
2001,Arcade Classics,Pac-Man,Galaga,Donkey Kong,Space Invaders,Dig Dug,Asteroids
2002,Vintage Toys,Yo-yo,Slinky,Etch A Sketch,View-Master,Rubik's Cube,Silly Putty
2003,80s Movies,Back to the Future,Ghostbusters,The Breakfast Club,E.T.,The Goonies,Top Gun
2004,Muscle Cars,Mustang,Corvette,Beetle,Charger,Thunderbird,GTO,Camaro,Chevelle
2005,Legendary Rock,Led Zeppelin,Pink Floyd,The Who,Queen,Fleetwood Mac,AC/DC,Deep Purple
2006,90s Cartoons,Rugrats,Doug,Animaniacs,Ren and Stimpy,Tiny Toon Adventures,Hey Arnold
2007,Classic Board Games,Monopoly,Clue,Risk,Scrabble,Stratego,Battleship,Chess
2008,Breakfast Mascots,Tony the Tiger,Toucan Sam,Lucky the Leprechaun,Captain Crunch,Count Chocula
2009,Classic Sitcoms,Seinfeld,Cheers,MASH,I Love Lucy,Friends,The Jeffersons
2010,Early Web,AOL,Netscape,GeoCities,Napster,ICQ,Ask Jeeves,AltaVista
2011,8-Bit Era,NES,Atari 2600,Sega Master System,Intellivision,ColecoVision,Commodore 64
2012,Classic Sodas,Tab,Jolt,Fresca,RC Cola,Moxie,Surge,Crystal Pepsi
2013,Universal Monsters,Dracula,Frankenstein,Wolfman,Mummy,Gill-man,Invisible Man
2014,Wild West Legends,Wyatt Earp,Doc Holliday,Jesse James,Billy the Kid,Wild Bill Hickok,Butch Cassidy
2015,Classic Detectives,Sherlock Holmes,Hercule Poirot,Miss Marple,Sam Spade,Philip Marlowe,Dick Tracy
2016,Vinyl Culture,LP,Turntable,Groove,Stylus,Sleeve,RPM,Crackle
2017,Sci-Fi Novels,Dune,Foundation,1984,Brave New World,Starship Troopers,Fahrenheit 451
2018,Classic Comic Strips,Snoopy,Garfield,Dilbert,Calvin,Hobbes,Popeye,Heathcliff
2019,Golden Age Stars,Humphrey Bogart,Cary Grant,James Stewart,Gregory Peck,Clark Gable,Bette Davis
2020,Old School Candy,Bazooka,Necco Wafers,Charleston Chew,Abba-Zaba,Bit-O-Honey,Candy Cigarettes
2021,Historic Stadiums,Wrigley Field,Fenway Park,Madison Square Garden,Lambeau Field,Old Yankee Stadium
2022,Classic TV Westerns,Gunsmoke,Bonanza,Rawhide,Wagon Train,The Virginian,High Chaparral
2023,Early Portables,Osborne 1,TRS-80 Model 100,PowerBook 100,Newton MessagePad,Game Boy
2024,Horror Villains,Michael Myers,Freddy Krueger,Jason Voorhees,Leatherface,Pinhead,Chucky
2025,Vintage Kitchen,Hand Mixer,Percolator,Pressure Cooker,Seltzer Siphon,Egg Beater,Toaster Oven
2026,Classic Accessories,Pocket Watch,Fedora,Brooch,Cufflinks,Tie Clip,Parasol
2027,Cocktail Classics,Old Fashioned,Martini,Manhattan,Negroni,Sidecar,Gimlet,Daiquiri
2028,Golden Age Animation,Warner Bros,Fleischer,Disney,MGM,UPA,Hanna-Barbera
2029,Superhero Identities,Bruce Wayne,Clark Kent,Peter Parker,Diana Prince,Tony Stark,Steve Rogers
2030,Famous Instruments,Stradivarius,Hammond Organ,Fender Stratocaster,Steinway,Gibson Les Paul
2031,Historic Travel,Ocean Liner,Steam Train,Zeppelin,Stagecoach,Caravan,Rickshaw
2032,Renaissance Masters,Leonardo,Michelangelo,Raphael,Donatello,Titian,Botticelli
2033,Ancient Philosophy,Stoicism,Epicureanism,Platonism,Cynicism,Skepticism
2034,Fairy Tale Magic,Magic Mirror,Glass Slipper,Spinning Wheel,Poison Apple,Golden Goose,Magic Carpet
2035,Opera Greats,Verdi,Wagner,Puccini,Mozart,Rossini,Bizet,Handel
2036,Classic Dance,Charleston,Swing,Waltz,Foxtrot,Tango,Lindy Hop
2037,NASA Milestones,Vostok,Mercury,Gemini,Apollo,Voyager,Skylab,Sputnik
2038,Architectural Gems,Romanesque,Gothic,Baroque,Neoclassical,Art Deco,Bauhaus
2039,Classic Ships,Galleon,Frigate,Clipper,Ironclad,Dreadnought,U-Boat
2040,Timeless Poets,Frost,Keats,Byron,Shelley,Whitman,Dickinson,Poe
2041,Martial Arts,Karate,Kung Fu,Judo,Taekwondo,Aikido,Hapkido,Capoeira
2042,Chess Openings,Sicilian Defense,Ruy Lopez,Queen's Gambit,French Defense,Caro-Kann
2043,Tarot Suits,Wands,Cups,Swords,Pentacles,Major Arcana
2044,Alchemical Terms,Quicksilver,Brimstone,Vitriol,Saltpeter,Philosopher's Stone,Elixir
2045,Natural Wonders,Grand Canyon,Victoria Falls,Mount Everest,Great Barrier Reef,Niagara Falls
2046,Mythology Realms,Olympus,Hades,Asgard,Valhalla,Midgard,Niflheim
2047,Night Sky,Orion,Ursa Major,Cassiopeia,Pleiades,Pegasus,Draco
2048,Stationery Supplies,Fountain Pen,Wax Seal,Parchment,Blotter,Quiver,Inkwell
2049,Retro Gaming Logos,Sega,Nintendo,Atari,Capcom,Konami,Namco,Taito
2171,Cooking Techniques,Sous Vide,Braise,Poach,Saute,Blanch,Sear,Braising,Poaching,Searing,Blanching,Roasting,Grilling
2172,Chef Ranks Kitchen,Executive,Sous,Station,Commis,Pastry,Saucier
2173,Kitchen Safety,Knife,Fire,Sanitize,Cross-con,Temperature,Storage,Sharp Knives,Dry Hands,Fire Extinguisher,Cross-contamination,Internal Temp,Ventilation
2299,Famous Directors,Spielberg,Nolan,Scorsese,Tarantino,Kubrick,Hitchcock
2500,Starts with Z,Zebra,Zoo,Zero,Zone,Zest,Zipper
`;let Qi=null;const lS=s=>{const c=s.trim().split(`
`),O=[];for(let L=1;L<c.length;L++){const p=c[L].trim();if(!p)continue;const B=[];let P="",y=!1;for(let U=0;U<p.length;U++){const W=p[U];W==='"'?y&&p[U+1]==='"'?(P+='"',U++):y=!y:W===","&&!y?(B.push(P),P=""):P+=W}if(B.push(P),B.length<3)continue;const C=B[0].trim(),v=B[1].trim(),H=B.slice(2).map(U=>U.trim()).filter(U=>U.length>0);H.length>=1&&O.push({id:C,name:v,words:H})}const u=new Map;for(const L of O){const p=L.name.toUpperCase();if(u.has(p)){const B=u.get(p),P=Array.from(new Set([...B.words,...L.words]));B.words=P}else u.set(p,{...L})}return Array.from(u.values()).filter(L=>L.words.length>=4)},$i=()=>Qi||(Qi=lS(ZO),Qi),FT=(s,c)=>{const O=c||$i();return O.length===0?[]:[...O].sort(()=>.5-Math.random()).slice(0,s)},YT=(s,c)=>({name:"VARIETY PACK",categories:[...c||$i()].sort(()=>.5-Math.random()).slice(0,s)}),KT=(s,c)=>[...s.words].sort(()=>.5-Math.random()).slice(0,c),nS=s=>lS(s),XO=`
Brighten,Lighten,Clarify,Polish,Refine,Enhance,Sharpen,Embellish,Highlight,Improve,Intensify
Darken,Dim,Obscure,Shadow,Depress,Weaken,Fade,Cloud,Subdue,Lower,Dull
Agreeable,Pleasant,Kind,Polite,Gracious,Charming,Delightful,Genial,Friendly,Affable,Companionable
Disagreeable,Unpleasant,Harsh,Rude,Offensive,Crude,Unkind,Inhospitable,Unfriendly,Hostile,Repellent
Advance,Progress,Proceed,Move-forward,Develop,Promote,Elevate,Enhance,Boost,Upgrade,Improve
Retreat,Withdraw,Recede,Backtrack,Return,Step-back,Decline,Revert,Pull-back,Regression,Exit
Alive,Living,Breathing,Animated,Conscious,Awake,Existing,Thriving,Vital,Active,Dynamic
Dead,Deceased,Departed,Expired,Lifeless,Defunct,Extinct,Gone,Perished,Demised,Inanimate
Ancient,Old,Antiquated,Historic,Archaic,Primitive,Timeworn,Venerable,Classic,Traditional,Legendary
Modern,Contemporary,Current,Recent,Up-to-date,New,Present-day,Innovative,Advanced,Progressive,Fresh
Answer,Reply,Response,Retort,Solution,Explanation,Clarification,Reaction,Resolution,Account,Feedback
Question,Inquiry,Query,Interrogation,Examination,Probe,Investigation,Request,Challenge,Issue,Prompt
Arrive,Reach,Land,Enter,Appear,Show-up,Check-in,Approach,Access,Get-to,Turn-up
Depart,Leave,Exit,Go,Withdraw,Retreat,Take-off,Abscond,Disappear,Evacuate,Abandon
Artistic,Creative,Imaginative,Inventive,Expressive,Inspired,Visionary,Innovative,Stylish,Original,Poetic
Unimaginative,Dull,Plain,Ordinary,Conventional,Uncreative,Pedestrian,Prosaic,Uninspired,Commonplace,Derivative
Ask,Request,Inquire,Query,Question,Seek,Petition,Appeal,Probe,Consult,Interrogate
Answer,Respond,Reply,Retort,React,Clarify,Resolve,Explain,Account,Feedback,Counter
Awake,Alert,Conscious,Vigilant,Watchful,Attentive,Responsive,Observant,Perceptive,Reactive,Aware
Asleep,Sleeping,Slumbering,Dozing,Napping,Resting,Snoozing,Unconscious,Inactive,Reposing,Hibernating
Beautiful,Attractive,Lovely,Charming,Stunning,Graceful,Exquisite,Alluring,Striking,Appealing,Delightful
Hideous,Ugly,Repulsive,Grotesque,Unsightly,Distasteful,Awkward,Plain,Unpleasant,Uncomely,Unappealing
Beginner,Novice,Neophyte,Apprentice,Newcomer,Initiate,Tyro,Greenhorn,Freshman,Starter,Probationer
Expert,Specialist,Professional,Authority,Master,Connoisseur,Scholar,Advisor,Consultant,Experienced,Skilled
Belief,Faith,Conviction,Trust,Confidence,Opinion,View,Acceptance,Assurance,Doctrine,Principle
Doubt,Skepticism,Uncertainty,Question,Disbelief,Hesitation,Reservation,Confusion,Apprehension,Incredulity
Big-hearted,Generous,Kind,Benevolent,Charitable,Selfless,Altruistic,Compassionate,Philanthropic,Openhanded,Considerate
Small-minded,Petty,Narrow,Mean,Selfish,Intolerant,Close-minded,Limited,Restricted,Insignificant,Trivial
Bold,Daring,Adventurous,Brave,Courageous,Intrepid,Valiant,Heroic,Audacious,Fearless,Unflinching
Timid,Shy,Fearful,Apprehensive,Meek,Reserved,Quiet,Reticent,Insecure,Diffident,Hesitant
Busybody,Intruder,Meddler,Interferer,Nuisance,Nosy,Inquisitive,Prattler,Interloper,Peeker,Buttinsky
Silent,Quiet,Still,Muted,Hushed,Wordless,Speechless,Calm,Reserved,Reticent,Unspoken,Tranquil
Careful,Cautious,Prudent,Attentive,Watchful,Meticulous,Thorough,Deliberate,Guarded,Conscientious,Vigilant
Careless,Negligent,Reckless,Thoughtless,Inattentive,Sloppy,Irresponsible,Hasty,Imprudent,Unmindful,Unconcerned
Certain,Sure,Confident,Positive,Assured,Definite,Determined,Convinced,Guaranteed,Secure,Unquestionable
Uncertain,Doubtful,Hesitant,Unsure,Indecisive,Ambiguous,Questionable,Unclear,Confused,Insecure,Unsettled
Cheerful,Joyful,Happy,Sunny,Optimistic,Playful,Lighthearted,Upbeat,Glad,Content,Delighted
Miserable,Sad,Unhappy,Depressed,Melancholy,Woeful,Dejected,Downcast,Heartbroken,Despondent,Blue
Clear,Transparent,Lucid,Obvious,Evident,Apparent,Plain,Distinct,Unambiguous,Manifest,Understandable
Confusing,Puzzling,Perplexing,Baffling,Complicated,Complex,Obscure,Ambiguous,Unclear,Intricate,Mystifying
Close,Near,Adjacent,Proximate,Handy,Accessible,Neighboring,Immediate,Contiguous,Approaching,Nearby
Distant,Far,Remote,Isolated,Removed,Outlying,Secluded,Inaccessible,Faraway,Detached,Obscure
Comfortable,Cozy,Snug,Relaxed,Content,Secure,Safe,Restful,Pleasant,Easy,Convenient
Uncomfortable,Awkward,Uneasy,Distressed,Inconvenient,Unpleasant,Agitated,Restless,Anxious,Embarrassed,Unsettled
Common,Usual,Ordinary,Frequent,Regular,Normal,Typical,Standard,Conventional,Everyday,Customary
Rare,Unusual,Exceptional,Extraordinary,Unique,Infrequent,Scarce,Uncommon,Remarkable,Special,Occasional
Complete,Whole,Entire,Total,Full,Finished,Perfect,Absolute,Comprehensive,Exhaustive,Unbroken
Incomplete,Partial,Fragmentary,Unfinished,Deficient,Imperfect,Limited,Inadequate,Unfulfilled,Unready,Unaccomplished
Complex,Complicated,Intricate,Detailed,Elaborate,Advanced,Multifaceted,Convoluted,Composite,Involved,Sophisticated
Simple,Easy,Plain,Uncomplicated,Clear,Elementary,Basic,Straightforward,Undemanding,Accessible,Modest
Brighten,Illuminate,Lighten,Clarify,Highlight,Polish,Refine,Enhance,Sharpen,Embellish,Improve
Dim,Fade,Dull,Obscure,Shadow,Darken,Weaken,Blur,Cloud,Subdue,Depress
Quick,Prompt,Instant,Immediate,Speedy,Swift,Brisk,Expeditious,Nimble,On-the-spot,Direct
Slow,Leisurely,Gradual,Sluggish,Lagging,Delayed,Unhurried,Measured,Plodding,Drawn-out,Tardy
Carefree,Easygoing,Untroubled,Optimistic,Cheerful,Playful,Lighthearted,Sunny,Joyous,Blithe,Relaxed
Moody,Temperamental,Changeable,Erratic,Unpredictable,Volatile,Whimsical,Impulsive,Capricious,Emotional,Fickle
Generous,Charitable,Kind,Openhanded,Benevolent,Philanthropic,Selfless,Altruistic,Big-hearted,Unselfish,Considerate
Greedy,Avaricious,Grasping,Selfish,Materialistic,Covetous,Possessive,Voracious,Insatiable,Acquisitive,Gluttonous
Polite,Courteous,Respectful,Well-mannered,Civil,Gracious,Considerate,Tactful,Obliging,Well-spoken,Well-bred
Rude,Impolite,Disrespectful,Offensive,Harsh,Uncivil,Insolent,Crude,Brash,Unkind,Discourteous
Lucky,Fortunate,Blessed,Prosperous,Advantaged,Privileged,Successful,Serendipitous,Opportune,Favored,Charmed
Unlucky,Unfortunate,Cursed,Doomed,Ill-fated,Star-crossed,Disadvantaged,Unsuccessful,Unprosperous,Unblessed,Hexed
Busy,Occupied,Engaged,Involved,Overloaded,Overwhelmed,Preoccupied,Swamped,Active,Industrious,Hardworking
Idle,Inactive,Unoccupied,Lethargic,Lazy,Sluggish,Resting,Unproductive,Still,Motionless,Vacant
Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving
Full,Satisfied,Content,Stuffed,Replete,Well-fed,Overfilled,Plentiful,Abundant,Overflowing,Complete,Fulfilled
Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome
Sick,Ill,Unwell,Infirm,Diseased,Weak,Feeble,Unhealthy,Debilitated,Fragile,Infected
Colorful,Vivid,Brilliant,Intense,Deep,Striking,Flamboyant,Eye-catching,Glowing,Resplendent,Richly-colored
Pale,Faded,Washed-out,Colorless,Anemic,Weak,Light,Dim,Drained,Bleached,Pastel
Sharp,Pointed,Acute,Keen,Incisive,Penetrating,Edged,Precise,Exact,Alert,Attentive
Blunt,Dull,Unsharpened,Flat,Plain,Direct,Frank,Unrefined,Coarse,Insensitive,Unpolished,Unpointed
Tall,Lofty,Elevated,High,Soaring,Grand,Imposing,Majestic,Stately,Towering,Statuesque
Short,Small,Petite,Compact,Miniature,Little,Brief,Limited,Restricted,Concise,Stubby
Wide,Broad,Expansive,Extensive,Spacious,Roomy,Open,Vast,Comprehensive,Generous,Ample
Narrow,Thin,Slender,Slim,Confined,Restricted,Limited,Tight,Compressed,Pinched,Constricted
Deep,Profound,Intense,Meaningful,Thoughtful,Serious,Abysmal,Bottomless,Immense,Insightful,Penetrating
Shallow,Superficial,Surface-level,Trivial,Light,Empty,Frivolous,Insignificant,Petty,Minor,Thin
Fiery,Impulsive,Quick-tempered,Volatile,Explosive,Passionate,Intense,Wrathful,Incendiary,Temperamental,Hot-headed
Cool,Chilly,Calm,Collected,Relaxed,Unruffled,Composed,Easygoing,Detached,Unemotional,Neutral,Moderate
Sweet,Sugary,Delicious,Tasty,Pleasant,Agreeable,Kind,Endearing,Adorable,Charming,Appealing
Bitter,Harsh,Acrid,Sharp,Unpleasant,Resentful,Severe,Sour,Hostile,Angry,Disagreeable
Soft,Gentle,Tender,Mild,Delicate,Supple,Flexible,Kind,Quiet,Light,Velvety
Rigid,Harsh,Severe,Unyielding,Strict,Strong,Stiff,Inflexible,Unbending,Uncompromising,Hard-edged
Smooth,Even,Flat,Level,Polished,Glossy,Slick,Fluid,Seamless,Refined,Consistent
Rough,Coarse,Uneven,Jagged,Harsh,Raw,Grainy,Unfinished,Crude,Unrefined,Unpolished
Darling,Beloved,Dear,Precious,Treasure,Angel,Love,Paramour,Companion,Partner,Sweetheart
Villain,Scoundrel,Rogue,Criminal,Outlaw,Delinquent,Wrongdoer,Evildoer,Antagonist,Fiend,Malefactor
Hero,Champion,Savior,Protector,Defender,Guardian,Rescuer,Victor,Conqueror,Paladin,Warrior,Idol
Coward,Weakling,Chicken,Spineless,Timid,Fearful,Apprehensive,Craven,Yellow-belly,Quitter,Shy
Guide,Director,Commander,Chief,Manager,Supervisor,Head,Principal,Foreman,Captain,Leader
Supporter,Adherent,Devotee,Disciple,Assistant,Helper,Sidekick,Subordinate,Underling,Minion,Follower
Worker,Laborer,Employee,Staffer,Servant,Hand,Operator,Technician,Clerk,Assistant,Contributor
Boss,Employer,Manager,Overseer,Supervisor,Chief,Director,Head,Leader,Foreman,Controller
Rich-food,Luxurious,Decadent,Sumptuous,Opulent,Extravagant,Indulgent,Plentiful,Abundant,Hearty,Delicious
Plain-food,Simple,Modest,Basic,Unadorned,Ordinary,Common,Everyday,Uncomplicated,Homely,Unseasoned,Unfancy
Agree,Consent,Concur,Assent,Accept,Approve,Endorse,Support,Comply,Accede,Adopt
Disagree,Dissent,Object,Oppose,Contradict,Challenge,Resist,Refute,Reject,Contest,Dispute
Build,Construct,Assemble,Erect,Fabricate,Forge,Establish,Develop,Create,Form,Raise
Destroy,Demolish,Annihilate,Obliterate,Eradicate,Devastate,Exterminate,Shatter,Crush,Smash,Ruin
Help,Assist,Aid,Support,Facilitate,Encourage,Guide,Serve,Rescue,Relieve,Boost
Hinder,Obstruct,Impede,Block,Prevent,Delay,Restrict,Inhibit,Interfere,Thwart,Derail
Rise,Ascend,Climb,Mount,Soar,Escalate,Elevate,Boost,Increase,Advance,Surge
Decline,Decrease,Diminish,Reduce,Drop,Wane,Fade,Subside,Contract,Recede,Plummet
Accept,Receive,Welcome,Adopt,Embrace,Take,Endorse,Approve,Consent,Agree,Accede
Refuse,Deny,Reject,Decline,Oppose,Disallow,Prohibit,Withhold,Spurn,Disapprove,Repudiate
Open-minded,Receptive,Flexible,Adaptable,Tolerant,Accepting,Approachable,Unbiased,Curious,Progressive,Permissive
Closed-minded,Narrow,Dogmatic,Rigid,Intolerant,Inflexible,Unyielding,Prejudiced,Conservative,Restrictive,Limited
Polished,Refined,Sophisticated,Graceful,Stylish,Elegant,Cultured,Suave,Classy,Immaculate,Well-groomed
Rough-hewn,Crude,Unfinished,Raw,Jagged,Coarse,Primitive,Unrefined,Harsh,Blunt,Grainy
Generosity,Benevolence,Charity,Kindness,Philanthropy,Selflessness,Altruism,Big-heartedness,Openhandedness,Compassion,Largesse
Stinginess,Miserliness,Greed,Avarice,Selfishness,Meanness,Parsimoniousness,Closefistedness,Frugality,Inflexibility,Penuriousness
Joy,Delight,Gladness,Ecstasy,Bliss,Cheerfulness,Contentment,Happiness,Exhilaration,Elation,Exuberance
Sorrow,Grief,Melancholy,Despair,Anguish,Heartache,Regret,Unhappiness,Despondency,Misery,Lamentation
Truthful,Honest,Sincere,Authentic,Genuine,Trustworthy,Faithful,Accurate,Dependable,Frank,Real
Deceptive,Misleading,Dishonest,Fraudulent,False,Tricky,Untruthful,Insincere,Illusory,Sham,Deceitful
Courage,Bravery,Valor,Fearlessness,Heroism,Fortitude,Determination,Resolve,Tenacity,Audacity,Pluck
Cowardice,Fear,Timidness,Spinelessness,Weakness,Apprehension,Cravenness,Reticence,Shyness,Meekness,Insecurity
Knowledge,Wisdom,Understanding,Insight,Learning,Education,Awareness,Expertise,Intelligence,Comprehension,Scholarship
Ignorance,Unawareness,Unfamiliarity,Oblivion,Naivety,Illiteracy,Uninformedness,Stupidity,Blindness,Unconsciousness,Neglect
Victory,Triumph,Success,Achievement,Conquest,Domination,Prevailing,Winning,Overcoming,Attainment,Glory
Defeat,Loss,Failure,Collapse,Downfall,Setback,Beating,Overthrow,Discomfiture,Reverse,Drubbing
Calmness,Serenity,Tranquility,Peacefulness,Composure,Relaxation,Stillness,Equanimity,Quietude,Placidness,Leisureliness
Chaos,Disorder,Confusion,Turmoil,Anarchy,Havoc,Mayhem,Pandemonium,Disarray,Commotion,Mess
Order,Structure,System,Arrangement,Organization,Method,Pattern,Sequence,Regulation,Discipline,Framework
Mess,Clutter,Disarray,Untidiness,Disorganization,Shambles,Chaos,Confusion,Derangement,Disorder,Muddle
Beauty,Attractiveness,Charm,Grace,Elegance,Appeal,Delight,Exquisiteness,Stunningness,Allurement,Prettiness
Ugliness,Hideousness,Repulsiveness,Grotesqueness,Unsightliness,Plainness,Awkwardness,Distastefulness,Unpleasantness,Homeliness,Uncomeliness
Strength,Power,Might,Force,Robustness,Vigor,Durability,Resilience,Tenacity,Potency,Sturdiness
Weakness,Frailty,Fragility,Feebleness,Delicacy,Brittleness,Infirmity,Shakiness,Instability,Impotence,Languor
Freedom,Liberty,Independence,Autonomy,Sovereignty,Self-determination,Choice,Privilege,License,Emancipation,Freewill
Captivity,Imprisonment,Confinement,Detention,Restraint,Enslavement,Incarceration,Oppression,Restriction,Constraint,Bondage
Success,Achievement,Accomplishment,Victory,Triumph,Prosperity,Progress,Advancement,Attainment,Realization,Win
Failure,Defeat,Loss,Collapse,Downfall,Setback,Disappointment,Frustration,Flop,Misstep,Shortcoming
Affection,Adoration,Devotion,Passion,Attachment,Fondness,Infatuation,Romance,Tenderness,Endearment,Love
Hatred,Loathing,Detestation,Abhorrence,Animosity,Hostility,Antipathy,Aversion,Spite,Malice,Ill-will
Friendship,Companionship,Comradeship,Alliance,Partnership,Kinship,Connection,Amity,Association,Affinity,Closeness
Enmity,Hostility,Antagonism,Rivalry,Opposition,Bitterness,Conflict,Discord,Hatred,Ill-feeling,Animus
Hope,Optimism,Expectation,Faith,Confidence,Anticipation,Promise,Prospect,Aspiration,Wish,Belief
Despair,Hopelessness,Anguish,Despondency,Melancholy,Grief,Dejection,Discouragement,Downheartedness,Loss,Depression
Peace,Harmony,Accord,Concord,Friendship,Amity,Reconciliation,Stillness,Tranquility,Serenity,Calm
War,Conflict,Battle,Fight,Combat,Hostility,Struggle,Clash,Skirmish,Campaign,Confrontation
Create,Invent,Design,Develop,Build,Fabricate,Generate,Compose,Formulate,Establish,Originate
Erase,Delete,Remove,Expunge,Eliminate,Cancel,Obliterate,Clear,Discard,Annul,Nullify
Expand,Increase,Enlarge,Extend,Stretch,Augment,Amplify,Broaden,Widen,Escalate,Prolong
Contract,Shrink,Reduce,Condense,Compress,Shorten,Minimize,Decline,Constrict,Recede,Retract
Gain,Acquire,Obtain,Win,Secure,Collect,Procure,Attain,Amass,Accumulate,Reap
Lose,Miss,Fail,Drop,Decline,Forfeit,Surrender,Succumb,Collapse,Defeat,Beaten
Invent,Devise,Conceive,Imagine,Originate,Formulate,Design,Create,Discover,Establish,Generate
Forget,Neglect,Overlook,Miss,Ignore,Disregard,Skip,Abandon,Discard,Drop,Erase
Bright,Shiny,Luminous,Radiant,Glowing,Brilliant,Resplendent,Beaming,Effulgent,Incandescent,Flashing
Gloomy,Somber,Melancholy,Dreary,Murky,Shadowy,Dim,Tenebrous,Obscure,Dull,Darkened
Generous-hearted,Benevolent,Charitable,Kind,Selfless,Altruistic,Philanthropic,Compassionate,Openhanded,Considerate,Big-hearted
Selfish,Egotistical,Greedy,Avaricious,Self-centered,Possessive,Materialistic,Grasping,Self-serving,Self-focused,Self-absorbed
Polite,Courteous,Respectful,Well-mannered,Civil,Gracious,Considerate,Tactful,Obliging,Well-spoken,Well-bred
Impolite,Rude,Disrespectful,Offensive,Harsh,Uncivil,Insolent,Crude,Brash,Unkind,Discourteous
Lucky,Fortunate,Blessed,Prosperous,Privileged,Successful,Serendipitous,Opportune,Favored,Charmed,Advantaged
Unlucky,Cursed,Doomed,Ill-fated,Star-crossed,Disadvantaged,Unsuccessful,Unprosperous,Unblessed,Hexed,Unfortunate
Busy,Occupied,Engaged,Involved,Overloaded,Overwhelmed,Preoccupied,Swamped,Active,Industrious,Hardworking
Idle,Inactive,Unoccupied,Lethargic,Lazy,Sluggish,Resting,Unproductive,Still,Motionless,Vacant
Hungry,Starving,Famished,Ravenous,Peckish,Empty,Voracious,Insatiable,Hollow,Greedy,Craving
Satisfied,Content,Stuffed,Replete,Well-fed,Overfilled,Plentiful,Abundant,Overflowing,Complete,Fulfilled
Healthy,Fit,Strong,Robust,Vigorous,Well,Nourished,Thriving,Resilient,Active,Wholesome
Ill,Unwell,Infirm,Diseased,Weak,Feeble,Unhealthy,Debilitated,Fragile,Infected,Sickly
Colorful,Vivid,Brilliant,Intense,Deep,Striking,Flamboyant,Eye-catching,Glowing,Resplendent,Richly-colored
Colorless,Pale,Faded,Washed-out,Anemic,Weak,Light,Dim,Drained,Bleached,Pastel
Sharp,Pointed,Acute,Keen,Incisive,Penetrating,Edged,Precise,Exact,Alert,Attentive
Blunt,Dull,Flat,Plain,Direct,Frank,Unrefined,Coarse,Insensitive,Unpolished,Unpointed
Tall,Lofty,Elevated,High,Soaring,Grand,Imposing,Majestic,Stately,Towering,Statuesque
Short,Small,Petite,Compact,Miniature,Little,Brief,Limited,Restricted,Concise,Stubby
Wide,Broad,Expansive,Extensive,Spacious,Roomy,Open,Vast,Comprehensive,Generous,Ample
Narrow,Thin,Slender,Slim,Confined,Restricted,Limited,Tight,Compressed,Pinched,Constricted
Deep,Profound,Intense,Meaningful,Thoughtful,Serious,Abysmal,Bottomless,Immense,Insightful,Penetrating
Shallow,Superficial,Surface-level,Trivial,Light,Empty,Frivolous,Insignificant,Petty,Minor,Thin
Fiery,Impulsive,Quick-tempered,Volatile,Explosive,Passionate,Wrathful,Incendiary,Temperamental,Hot-headed,Intense
Cool,Chilly,Calm,Collected,Relaxed,Unruffled,Composed,Easygoing,Detached,Unemotional,Neutral,Moderate
Sweet,Sugary,Delicious,Tasty,Pleasant,Agreeable,Kind,Endearing,Adorable,Charming,Appealing
Bitter,Harsh,Acrid,Sharp,Unpleasant,Resentful,Severe,Sour,Hostile,Angry,Disagreeable
Soft,Gentle,Tender,Mild,Delicate,Supple,Flexible,Kind,Quiet,Light,Velvety
Rigid,Harsh,Severe,Unyielding,Strict,Strong,Stiff,Inflexible,Unbending,Uncompromising,Hard-edged
Smooth,Even,Flat,Level,Polished,Glossy,Slick,Fluid,Seamless,Refined,Consistent
Rough,Coarse,Uneven,Jagged,Harsh,Raw,Grainy,Unfinished,Crude,Unrefined,Unpolished
Darling,Beloved,Dear,Precious,Treasure,Angel,Love,Paramour,Companion,Partner,Sweetheart
Villain,Scoundrel,Rogue,Criminal,Outlaw,Delinquent,Wrongdoer,Evildoer,Antagonist,Fiend,Malefactor
Hero,Champion,Savior,Protector,Defender,Guardian,Rescuer,Victor,Conqueror,Paladin,Warrior,Idol
Coward,Weakling,Chicken,Spineless,Timid,Fearful,Apprehensive,Craven,Yellow-belly,Quitter,Shy
Guide,Director,Commander,Chief,Manager,Supervisor,Head,Principal,Foreman,Captain,Leader
Supporter,Adherent,Devotee,Disciple,Assistant,Helper,Sidekick,Subordinate,Underling,Minion,Follower
Worker,Laborer,Employee,Staffer,Servant,Hand,Operator,Technician,Clerk,Assistant,Contributor
Boss,Employer,Manager,Overseer,Supervisor,Chief,Director,Head,Leader,Foreman,Controller
Generosity,Benevolence,Charity,Kindness,Philanthropy,Selflessness,Altruism,Big-heartedness,Openhandedness,Compassion,Largesse
Stinginess,Miserliness,Greed,Avarice,Selfishness,Meanness,Parsimoniousness,Closefistedness,Frugality,Penuriousness,Hardheartedness
Joyful,Cheerful,Glad,Delighted,Ecstatic,Elated,Overjoyed,Blissful,Sunny,Upbeat,Playful
Mournful,Sorrowful,Melancholy,Woeful,Heartbroken,Despondent,Downcast,Blue,Grief-stricken,Unhappy,Dejected
Energetic,Active,Vigorous,Lively,Dynamic,Animated,Spirited,Robust,Thriving,Exuberant,Peppy
Lazy,Sluggish,Lethargic,Inactive,Indolent,Unmotivated,Idle,Slow,Unproductive,Weary,Complacent
Optimistic,Hopeful,Positive,Confident,Upbeat,Encouraging,Sunny,Cheerful,Expectant,Assured,Forward-looking
Pessimistic,Negative,Doubtful,Hopeless,Discouraged,Downbeat,Unconfident,Gloomy,Defeatist,Unhopeful,Despairing
Generous-spirited,Kindhearted,Compassionate,Altruistic,Philanthropic,Selfless,Charitable,Openhanded,Benevolent,Big-hearted,Considerate
Mean-spirited,Spiteful,Malicious,Hostile,Cruel,Unkind,Harsh,Vindictive,Unpleasant,Ill-natured,Unfriendly
Confident,Assured,Secure,Positive,Determined,Certain,Self-reliant,Strong,Composed,Poised,Self-assured
Insecure,Unsure,Doubtful,Hesitant,Unconfident,Self-conscious,Uncertain,Shaky,Timid,Apprehensive,Unsteady
Creative,Inventive,Imaginative,Innovative,Visionary,Artistic,Original,Inspired,Expressive,Resourceful,Productive
Uncreative,Dull,Plain,Ordinary,Conventional,Pedestrian,Prosaic,Uninspired,Commonplace,Derivative,Unimaginative,Unoriginal
Friendly,Kind,Amiable,Affable,Genial,Companionable,Approachable,Welcoming,Neighborly,Good-natured,Cheerful
Hostile,Unfriendly,Aggressive,Antagonistic,Confrontational,Opposing,Adversarial,Unkind,Harsh,Unpleasant,Combative
Generous-minded,Openhanded,Charitable,Benevolent,Selfless,Altruistic,Philanthropic,Compassionate,Kindhearted,Big-hearted,Considerate
Self-centered,Egotistical,Selfish,Narcissistic,Greedy,Possessive,Self-serving,Self-focused,Self-absorbed,Materialistic,Self-indulgent
Peaceful,Calm,Tranquil,Serene,Relaxed,Composed,Quiet,Still,Leisurely,Unruffled,Placid
Violent,Aggressive,Brutal,Ferocious,Savage,Hostile,Destructive,Wild,Harsh,Uncontrolled,Deadly
Bright-minded,Intelligent,Smart,Clever,Astute,Shrewd,Knowledgeable,Perceptive,Wise,Brainy,Quick-witted
Dull-minded,Slow,Unintelligent,Ignorant,Unaware,Uninformed,Stupid,Clueless,Oblivious,Vacant,Empty-headed
Generous-heartedness,Kindness,Benevolence,Charity,Philanthropy,Selflessness,Altruism,Compassion,Largesse,Openhandedness,Big-heartedness
Selfishness,Egotism,Greed,Avarice,Self-centeredness,Possessiveness,Self-serving,Self-focus,Self-absorption,Materialism,Self-indulgence
Joyous,Cheerful,Glad,Delighted,Ecstatic,Elated,Overjoyed,Blissful,Sunny,Upbeat,Playful
Sorrowful,Melancholy,Woeful,Heartbroken,Despondent,Downcast,Blue,Grief-stricken,Unhappy,Dejected,Mournful
Energeticness,Vigor,Liveliness,Dynamism,Animation,Spirit,Robustness,Thriving,Exuberance,Peppiness,Activity
Laziness,Sluggishness,Lethargy,Inactivity,Indolence,Unmotivation,Idleness,Slowness,Unproductiveness,Weariness,Complacency
Optimism,Hope,Positivity,Confidence,Encouragement,Cheerfulness,Expectation,Assurance,Faith,Forward-looking,Sunny-outlook
Pessimism,Negativity,Doubt,Hopelessness,Discouragement,Downbeat,Unconfidence,Gloom,Defeatism,Despair,Unhopefulness
Compassion,Altruism,Philanthropy,Selflessness,Charity,Openhandedness,Benevolence,Big-heartedness,Consideration,Generosity-of-spirit,Kindheartedness
Cruelty,Unkindness,Harshness,Vindictiveness,Unpleasantness,Ill-nature,Unfriendliness,Meanness,Spite,Malice,Hostility
Assurance,Security,Positivity,Determination,Certainty,Self-reliance,Strength,Composure,Poise,Self-assurance,Confidence
Unsureness,Hesitation,Unconfidence,Self-consciousness,Shakiness,Timidity,Apprehension,Unsteadiness,Insecurity,Doubt,Uncertainty
Originality,Inspiration,Expression,Resourcefulness,Productivity,Creativity,Invention,Imagination,Innovation,Vision,Artistry
Ordinariness,Conventionality,Pedestrianism,Prosaicness,Uninspiration,Commonplaceness,Derivativeness,Uncreativity,Dullness,Plainness,Unoriginality
Amiability,Affability,Geniality,Companionability,Approachability,Welcomingness,Neighborliness,Good-nature,Cheerfulness,Friendliness,Kindness
Combativeness,Opposition,Adversarialness,Unkindness,Harshness,Unpleasantness,Hostility,Unfriendliness,Aggressiveness,Antagonism,Confrontation
Relaxation,Composure,Quietness,Stillness,Leisureliness,Unruffledness,Placidity,Peace,Calmness,Tranquility,Serenity
Destructiveness,Wildness,Harshness,Uncontrol,Deadliness,Violence,Aggression,Brutality,Ferocity,Savagery,Hostility
`;let Ls=null;const iS=()=>{if(Ls)return Ls;const s=XO.trim().split(`
`),c=[];let O=5e4;return s.forEach(u=>{if(!u.includes(","))return;const L=u.split(",").map(P=>P.trim().toLowerCase()).filter(P=>P.length>0&&P.length<=14);if(L.length<5)return;const p=L[0],B=L.slice(1);B.length>=4&&c.push({id:(O++).toString(),name:`SYNONYMS: ${p.toUpperCase()}`,words:B})}),Ls=c,c},QO=`
RHYME: -AT,Cat,Bat,Hat,Mat,Rat,Sat,Flat,Splat,Brat,Vat
RHYME: -IGHT,Light,Bright,Night,Sight,Fight,Might,Tight,Flight,Height,Right
RHYME: -AKE,Cake,Lake,Make,Take,Bake,Rake,Snake,Fake,Shake,Wake
RHYME: -OON,Moon,Spoon,Noon,Soon,Balloon,Cartoon,Tycoon,Lagoon,Cocoon,Baboon
RHYME: -AR,Car,Star,Far,Jar,Bar,Scar,Tar,Par,Guitar,Avatar
RHYME: -ICE,Ice,Mice,Rice,Dice,Price,Slice,Twice,Spice,Nice,Vice
RHYME: -AIL,Tail,Snail,Pail,Nail,Mail,Sail,Rail,Trail,Fail,Hail
RHYME: -EE,Tree,Bee,Knee,See,Free,Glee,Three,Agree,Flee,Spree
RHYME: -OCK,Sock,Rock,Lock,Clock,Block,Dock,Mock,Stock,Shock,Flock
RHYME: -UG,Bug,Rug,Mug,Hug,Tug,Plug,Slug,Drug,Jug,Shrug
RHYME: -AN,Pan,Fan,Man,Can,Van,Ran,Plan,Scan,Span,Tan
RHYME: -IP,Lip,Sip,Dip,Hip,Tip,Rip,Flip,Slip,Trip,Grip
RHYME: -ELL,Bell,Shell,Well,Tell,Sell,Fell,Smell,Spell,Swell,Yell
RHYME: -OP,Top,Hop,Pop,Mop,Stop,Shop,Drop,Cop,Crop,Prop
RHYME: -UNK,Junk,Trunk,Bunk,Sunk,Chunk,Skunk,Punk,Drunk,Shrunk,Funk
RHYME: -ASH,Cash,Dash,Bash,Mash,Rash,Flash,Splash,Crash,Trash,Sash
RHYME: -INE,Line,Mine,Fine,Dine,Nine,Pine,Shine,Vine,Wine,Spine
RHYME: -OLD,Cold,Gold,Hold,Told,Sold,Bold,Fold,Mold,Scold,Wold
RHYME: -ING,King,Ring,Sing,Wing,Swing,Bring,Spring,String,Thing,Cling
RHYME: -EET,Feet,Sweet,Meet,Street,Sheet,Greet,Tweet,Fleet,Beet,Sleet
RHYME: -ACK,Back,Sack,Pack,Rack,Black,Track,Stack,Snack,Crack,Quack
RHYME: -AME,Name,Game,Same,Tame,Fame,Lame,Frame,Flame,Blame,Shame
RHYME: -EST,Best,Nest,Rest,Test,West,Chest,Guest,Quest,Pest,Vest
RHYME: -ICK,Kick,Pick,Sick,Tick,Lick,Brick,Stick,Quick,Click,Trick
RHYME: -OT,Hot,Pot,Cot,Dot,Lot,Not,Rot,Slot,Spot,Plot
RHYME: -UMP,Jump,Bump,Lump,Pump,Dump,Hump,Stump,Thump,Grump,Clump
RHYME: -IDE,Ride,Hide,Side,Wide,Tide,Slide,Glide,Bride,Pride,Guide
RHYME: -ORE,More,Store,Core,Bore,Sore,Score,Shore,Snore,Floor,Door
RHYME: -OUT,Out,Shout,Scout,Spout,Trout,Snout,Stout,Doubt,Sprout,Gout
RHYME: -UN,Sun,Run,Fun,Bun,Gun,Nun,Pun,Stun,Spin,Ton
RHYME: -ED,Red,Bed,Fed,Led,Shed,Sled,Wed,Bred,Fled,Pled
RHYME: -OLOGY,Biology,Geology,Zoology,Psychology,Theology,Mythology,Ecology,Anthology
RHYME: -UTION,Solution,Pollution,Evolution,Revolution,Constitution,Execution,Distribution
RHYME: -ENTAL,Mental,Dental,Rental,Fundamental,Parental,Accidental,Continental,Instrumental
RHYME: -ITY,City,Pity,Witty,Gritty,Ability,Stability,Fragility,Hostility,Utility
RHYME: -ATE,Create,Debate,Estate,Inflate,Relate,Translate,Mandate,Vibrate
RHYME: -IOUS,Curious,Furious,Glorious,Serious,Various,Mysterious,Delirious,Hilarious
RHYME: -ACTION,Action,Fraction,Traction,Reaction,Attraction,Distraction,Transaction
RHYME: -ERSE,Verse,Reverse,Diverse,Converse,Universe,Traverse,Adverse,Disperse
RHYME: -ENCE,Defense,Expense,Immense,Pretense,Suspense,Intense,Offense,Incense
RHYME: -CTURE,Picture,Structure,Fracture,Lecture,Puncture,Stricture,Texture,Mixture
RHYME: -IZE,Realize,Organize,Recognize,Analyze,Criticize,Memorize,Visualize,Apologize
RHYME: -SION,Vision,Division,Collision,Revision,Decision,Precision,Invasion,Persuasion
RHYME: -ATOR,Creator,Debator,Elevator,Operator,Generator,Decorator,Calculator,Simulator
RHYME: -ISTIC,Artistic,Realistic,Optimistic,Pessimistic,Statistic,Logistic,Ballistic,Mystic
`;let hs=null;const oS=()=>{if(hs)return hs;const s=QO.trim().split(`
`),c=[];let O=6e4;return s.forEach(u=>{if(!u.includes(","))return;const L=u.split(",").map(P=>P.trim().toLowerCase()).filter(P=>P.length>0&&P.length<=14);if(L.length<5)return;const p=L[0].toUpperCase(),B=L.slice(1);B.length>=4&&c.push({id:(O++).toString(),name:p,words:B})}),hs=c,c},rS=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
2501,Butterfly,Mariposa,Papillon,Schmetterling,Farfalla,Borboleta,Vlinder
2502,Bread,Pan,Pain,Brot,Pane,Chleb,Brood
2503,Water,Agua,Eau,Wasser,Acqua,Voda,Mizu
2504,Friend,Amigo,Ami,Freund,Amico,Przyjaciel,Vriend
2505,House,Casa,Maison,Haus,Dom,Huis
2506,Sun,Sol,Soleil,Sonne,Sole,Słońce,Zon
2507,Moon,Luna,Lune,Mond,Luna,Księżyc,Maan
2508,Star,Estrella,Étoile,Stern,Stella,Gwiazda,Ster
2509,Book,Libro,Livre,Buch,Książka,Boek
2510,Cat,Gato,Chat,Katze,Kot,Kat
2511,Dog,Perro,Chien,Hund,Cane,Pies,Hond
2512,Flower,Flor,Fleur,Blume,Fiore,Kwiat,Bloem
2513,Tree,Árbol,Arbre,Baum,Albero,Drzewo,Boom
2514,Mountain,Montaña,Montagne,Berg,Montagna,Góra,Berg
2515,River,Río,Rivière,Fluss,Fiume,Rzeka,Rivier
2516,Sea,Mar,Mer,Meer,Mare,Morze,Zee
2517,Heart,Corazón,Cœur,Herz,Cuore,Serce,Hart
2518,Apple,Manzana,Pomme,Apfel,Mela,Jabłko,Appel
2519,Earth,Tierra,Terre,Erde,Terra,Ziemia,Aarde
2520,Fire,Fuego,Feu,Feuer,Fuoco,Ogień,Vuur
2521,Wind,Viento,Vent,Wind,Vento,Wiatr,Wind
2522,Bird,Pájaro,Oiseau,Vogel,Uccello,Ptak,Vogel
2523,Fish,Pez,Poisson,Fisch,Pesce,Ryba,Vis
2524,Head,Cabeza,Tête,Kopf,Testa,Głowa,Hoofd
2525,Hand,Mano,Main,Hand,Mano,Ręka,Hand
2526,Eye,Ojo,Œil,Auge,Occhio,Oko,Oog
2527,Coffee,Café,Kaffee,Caffè,Kawa,Koffie
2528,Milk,Leche,Lait,Milch,Latte,Mleko,Melk
2529,Night,Noche,Nuit,Nacht,Notte,Noc,Nacht
2530,Day,Día,Jour,Tag,Giorno,Dzień,Dag
2531,Rain,Lluvia,Pluie,Regen,Pioggia,Deszcz,Regen
2532,Snow,Nieve,Neige,Schnee,Neve,Śnieg,Sneeuw
2533,City,Ciudad,Ville,Stadt,Città,Miasto,Stad
2534,School,Escuela,École,Schule,Scuola,Szkoła,School
2535,Teacher,Maestro,Professeur,Lehrer,Nauczyciel,Leraar
2536,Red,Rojo,Rouge,Rot,Rosso,Czerwony,Rood
2537,Blue,Azul,Bleu,Blau,Blu,Niebieski,Blauw
2538,Green,Verde,Vert,Grün,Zielony,Groen
2539,Yellow,Amarillo,Jaune,Gelb,Giallo,Żółty,Geel
2540,Black,Negro,Noir,Schwarz,Nero,Czarny,Zwart
2541,White,Blanco,Blanc,Weiß,Bianco,Biały,Wit
2542,Love,Amor,Amour,Liebe,Amore,Miłość,Liefde
2543,Life,Vida,Vie,Leben,Vita,Życie,Leven
2544,Time,Tiempo,Temps,Zeit,Tempo,Czas,Tijd
2545,Music,Música,Musique,Musik,Musica,Muzyka,Muziek
2546,Name,Nombre,Nom,Name,Nome,Imię,Naam
2547,Window,Ventana,Fenêtre,Fenster,Finestra,Okno,Raam
2548,Table,Mesa,Table,Tisch,Tavolo,Stół,Tafel
2549,Chair,Silla,Chaise,Stuhl,Sedia,Krzesło,Stoel
2550,Door,Puerta,Porte,Tür,Porta,Drzwi,Deur
2551,Boy,Niño,Garçon,Junge,Ragazzo,Chłopiec,Jongen
2552,Girl,Niña,Fille,Mädchen,Ragazza,Dziewczynka,Meisje
2553,Father,Padre,Père,Vater,Padre,Ojciec,Vader
2554,Mother,Madre,Mère,Mutter,Madre,Matka,Moeder
2555,Son,Hijo,Fils,Sohn,Figlio,Syn,Zoon
2556,Daughter,Hija,Fille,Tochter,Figlia,Córka,Dochter
2557,Brother,Hermano,Frère,Bruder,Fratello,Brat,Broer
2558,Sister,Hermana,Sœur,Schwester,Sorella,Siostra,Zus
2559,Grandfather,Abuelo,Grand-père,Großvater,Nonno,Dziadek,Grootvader
2560,Grandmother,Abuela,Grand-mère,Großmutter,Nonna,Babcia,Grootmoeder
2561,Uncle,Tío,Oncle,Onkel,Zio,Wujek,Oom
2562,Aunt,Tía,Tante,Tante,Zia,Ciocia,Tante
2563,Cousin,Primo,Cousin,Cousin,Cugino,Kuzyn,Neef
2564,Nephew,Sobrino,Neveu,Neffe,Nipote,Siostrzeniec,Neef
2565,Niece,Sobrina,Nièce,Nichte,Nipote,Siostrzenica,Nicht
2566,Baby,Bebé,Bébé,Baby,Neonato,Dziecko,Baby
2567,Mouth,Boca,Bouche,Mund,Bocca,Usta,Mond
2568,Nose,Nariz,Nez,Nase,Naso,Nos,Neus
2569,Ear,Oreja,Oreille,Ohr,Orecchio,Ucho,Oor
2570,Hair,Pelo,Cheveu,Haar,Capelli,Włosy,Haar
2571,Face,Cara,Visage,Gesicht,Viso,Twarz,Gezicht
2572,Shoulder,Hombro,Épaule,Schulter,Spalla,Ramię,Schouder
2573,Arm,Brazo,Bras,Arm,Braccio,Ramię,Arm
2574,Finger,Dedo,Doigt,Finger,Dito,Palec,Vinger
2575,Leg,Pierna,Jambe,Bein,Gamba,Noga,Been
2576,Foot,Pie,Pied,Fuß,Piede,Stopa,Voet
2577,Back,Espalda,Dos,Rücken,Schiena,Plecy,Rug
2578,Skin,Piel,Peau,Haut,Pelle,Skóra,Huid
2579,Blood,Sangre,Sang,Blut,Sangue,Krew,Bloed
2580,Bone,Hueso,Os,Knochen,Osso,Kość,Bot
2581,Stomach,Estómago,Estomac,Magen,Stomaco,Żołądek,Maag
2582,Brain,Cerebro,Cerveau,Gehirn,Cervello,Mózg,Brein
2583,Bread,Pan,Pain,Brot,Pane,Chleb,Brood
2584,Rice,Arroz,Riz,Reis,Riso,Ryż,Rijst
2585,Meat,Carne,Viande,Fleisch,Carne,Mięso,Vlees
2586,Chicken,Pollo,Poulet,Hähnchen,Pollo,Kurczak,Kip
2587,Egg,Huevo,Œuf,Ei,Uovo,Jajko,Ei
2588,Cheese,Queso,Fromage,Käse,Formaggio,Ser,Kaas
2589,Butter,Mantequilla,Beurre,Butter,Burro,Masło,Boter
2590,Fruit,Fruta,Fruit,Frucht,Frutta,Owoc,Vrucht
2591,Banana,Plátano,Banane,Banane,Banana,Banan,Banaan
2592,Orange,Naranja,Orange,Orange,Arancia,Pomarańcza,Sinaasappel
2593,Potato,Patata,Pomme de terre,Kartoffel,Patata,Ziemniak,Aardappel
2594,Tomato,Tomate,Tomate,Tomate,Pomodoro,Pomidor,Tomaat
2595,Onion,Cebolla,Oignon,Zwiebel,Cipolla,Cebula,Ui
2596,Garlic,Ajo,Ail,Knoblauch,Aglio,Czosnek,Knoflook
2597,Salt,Sal,Sel,Salz,Sale,Sól,Zout
2598,Sugar,Azúcar,Sucre,Zucker,Zucchero,Cukier,Suiker
2599,Tea,Té,Thé,Tee,Tè,Herbata,Thee
2600,Wine,Vino,Vin,Wein,Vino,Wino,Wijn
2601,Beer,Cerveza,Bière,Bier,Birra,Piwo,Bier
2602,Juice,Zumo,Jus,Saft,Succo,Sok,Sap
2603,Plate,Plato,Assiette,Teller,Piatto,Talerz,Bord
2604,Cup,Taza,Tasse,Tasse,Tazza,Filiżanka,Kop
2605,Spoon,Cuchara,Cuillère,Löffel,Cucchiaio,Łyżka,Lepel
2606,Knife,Cuchillo,Couteau,Messer,Coltello,Nóż,Mes
2607,Fork,Tenedor,Fourchette,Gabel,Forchetta,Widelec,Vork
2608,Shirt,Camisa,Chemise,Hemd,Camicia,Koszula,Overhemd
2609,Pants,Pantalones,Pantalon,Hose,Pantaloni,Spodnie,Broek
2610,Dress,Vestido,Robe,Kleid,Vestito,Sukienka,Jurk
2611,Skirt,Falda,Jupe,Rock,Gonna,Spódnica,Rok
2612,Coat,Abrigo,Manteau,Mantel,Cappotto,Płaszcz,Jas
2613,Hat,Sombrero,Chapeau,Hut,Cappello,Kapelusz,Hoed
2614,Shoe,Zapato,Chaussure,Schuh,Scarpa,But,Schoen
2615,Sock,Calcetín,Chaussette,Socke,Calza,Skarpetka,Sok
2616,Watch,Reloj,Montre,Uhr,Orologio,Zegarek,Horloge
2617,Bag,Bolsa,Sac,Tasche,Borsa,Torba,Tas
2618,Glasses,Gafas,Lunettes,Brille,Occhiali,Okulary,Bril
2619,Bed,Cama,Lit,Bett,Letto,Łóżko,Bed
2620,Sleep,Sueño,Sommeil,Schlaf,Sonno,Sen,Slaap
2621,Kitchen,Cocina,Cuisine,Küche,Cucina,Kuchnia,Keuken
2622,Bathroom,Baño,Salle de bain,Badzimmer,Bagno,Łazienka,Badkamer
2623,Garden,Jardín,Jardin,Garten,Giardino,Ogród,Tuin
2624,Floor,Suelo,Sol,Boden,Pavimento,Podłoga,Vloer
2625,Wall,Pared,Mur,Wand,Parete,Ściana,Muur
2626,Roof,Techo,Toit,Dach,Tetto,Dach,Dak
2627,Stairs,Escaleras,Escaliers,Treppe,Scale,Schody,Trap
2628,Key,Llave,Clé,Schlüssel,Chiave,Klucz,Sleutel
2629,Mirror,Espejo,Miroir,Spiegel,Specchio,Lustro,Spiegel
2630,Soap,Jabón,Savon,Seife,Sapone,Mydło,Zeep
2631,Towel,Toalla,Serviette,Handtuch,Asciugamano,Ręcznik,Handdoek
2632,Computer,Ordenador,Ordinateur,Computer,Computer,Komputer,Computer
2633,Phone,Teléfono,Téléphone,Telefon,Telefono,Telefon,Telefoon
2634,Camera,Cámara,Appareil,Kamera,Macchina,Aparat,Camera
2635,Pen,Bolígrafo,Stylo,Stift,Penna,Długopis,Pen
2636,Paper,Papel,Papier,Papier,Carta,Papier,Papier
2637,Letter,Carta,Lettre,Brief,Lettera,List,Brief
2638,Street,Calle,Rue,Straße,Strada,Ulica,Straat
2639,Road,Camino,Chemin,Weg,Strada,Droga,Weg
2640,Bridge,Puente,Pont,Brücke,Ponte,Most,Brug
2641,Store,Tienda,Magasin,Laden,Negozio,Sklep,Winkel
2642,Park,Parque,Parc,Park,Parco,Park,Park
2643,Hospital,Hospital,Hôpital,Krankenhaus,Ospedale,Szpital,Ziekenhuis
2644,Police,Policía,Police,Polizei,Polizia,Policja,Politie
2645,Doctor,Médico,Médecin,Arzt,Dottore,Lekarz,Dokter
2646,Student,Estudiante,Étudiant,Student,Studente,Student,Student
2647,Office,Oficina,Bureau,Büro,Ufficio,Biuro,Kantoor
2648,Work,Trabajo,Travail,Arbeit,Lavoro,Praca,Werk
2649,Money,Dinero,Argent,Geld,Denaro,Pieniądze,Geld
2650,Price,Precio,Prix,Preis,Prezzo,Cena,Prijs
2651,Bill,Factura,Facture,Rechnung,Conto,Rachunek,Rekening
2652,Ticket,Entrada,Billet,Karte,Biglietto,Bilet,Kaartje
2653,Map,Mapa,Carte,Karte,Mappa,Mapa,Kaart
2654,Hotel,Hotel,Hôtel,Hotel,Hotel,Hotel,Hotel
2655,Beach,Playa,Plage,Strand,Spiaggia,Plaża,Strand
2656,Forest,Bosque,Forêt,Wald,Foresta,Las,Bos
2657,Desert,Desierto,Désert,Wüste,Deserto,Pustynia,Woestijn
2658,Lake,Lago,Lac,See,Lago,Jezioro,Meer
2659,Island,Isla,Île,Insel,Isola,Wyspa,Eiland
2660,Cloud,Nube,Nuage,Wolke,Nuvola,Chmura,Wolk
2661,Thunder,Trueno,Tonnerre,Donner,Tuono,Grzmot,Donder
2662,Storm,Tormenta,Tempête,Sturm,Tempesta,Burza,Storm
2663,Sky,Cielo,Ciel,Himmel,Cielo,Niebo,Hemel
2664,Bird,Pájaro,Oiseau,Vogel,Uccello,Ptak,Vogel
2665,Horse,Caballo,Cheval,Pferd,Cavallo,Koń,Paard
2666,Cow,Vaca,Vache,Kuh,Mucca,Krowa,Koe
2667,Pig,Cerdo,Cochon,Schwein,Maiale,Świnia,Varken
2668,Sheep,Oveja,Mouton,Schaf,Pecora,Owca,Schaap
2669,Goat,Cabra,Chèvre,Ziege,Capra,Koza,Geit
2670,Lion,León,Lion,Löwe,Leone,Lew,Leeuw
2671,Tiger,Tigre,Tigre,Tiger,Tigre,Tygrys,Tijger
2672,Bear,Oso,Ours,Bär,Orso,Niedźwiedź,Beer
2673,Elephant,Elefante,Éléphant,Elefant,Elefante,Słoń,Olifant
2674,Monkey,Mono,Singe,Affe,Scimmia,Małpa,Aap
2675,Rabbit,Conejo,Lapin,Hase,Coniglio,Królik,Konijn
2676,Snake,Serpiente,Serpent,Schlange,Serpente,Wąż,Slang
2677,Frog,Rana,Grenouille,Frosch,Rana,Żaba,Kikker
2678,Mouse,Ratón,Souris,Maus,Topo,Mysz,Muis
2679,Fly,Mosca,Mouche,Fliege,Mosca,Mucha,Vlieg
2680,Bee,Abeja,Abeille,Biene,Ape,Pszczoła,Bij
2681,Spider,Araña,Araignée,Spinne,Ragno,Pająk,Spin
2682,Ant,Hormiga,Fourmi,Ameise,Formica,Mrówka,Mier
2683,Worm,Gusano,Ver,Wurm,Verme,Robak,Worm
2684,Purple,Morado,Violet,Lila,Viola,Fioletowy,Paars
2685,Pink,Rosa,Rose,Rosa,Rosa,Różowy,Roze
2686,Orange,Naranja,Orange,Orange,Arancione,Pomarańczowy,Oranje
2687,Brown,Marrón,Brun,Braun,Marrone,Brązowy,Bruin
2688,Grey,Gris,Gris,Grau,Grigio,Szary,Grijs
2689,Light,Luz,Lumière,Licht,Luce,Światło,Licht
2690,Heavy,Pesado,Lourd,Schwer,Pesante,Ciężki,Zwaar
2691,Big,Grande,Grand,Groß,Grande,Duży,Groot
2692,Small,Pequeño,Petit,Klein,Piccolo,Mały,Klein
2693,Fast,Rápido,Rapide,Schnell,Veloce,Szybki,Snel
2694,Slow,Lento,Lent,Langsam,Lento,Wolny,Langzaam
2695,Hot,Caliente,Chaud,Heiß,Caldo,Gorący,Heet
2696,Cold,Frío,Froid,Kalt,Freddo,Zimny,Koud
2697,New,Nuevo,Nouveau,Neu,Nuovo,Nowy,Nieuw
2698,Old,Viejo,Vieux,Alt,Vecchio,Stary,Oud
2699,Good,Bueno,Bon,Gut,Buono,Dobry,Goed
2700,Bad,Malo,Mauvais,Schlecht,Cattivo,Zły,Slecht
2701,Happy,Feliz,Heureux,Glücklich,Felice,Szczęśliwy,Gelukkig
2702,Sad,Triste,Triste,Traurig,Triste,Smutny,Triest
2703,Angry,Enfadado,Fâché,Böse,Arrabbiato,Zły,Boos
2704,Sick,Enfermo,Malade,Krank,Malato,Chory,Ziek
2705,Rich,Rico,Riche,Reich,Ricco,Bogaty,Rijk
2706,Poor,Pobre,Pauvre,Arm,Povero,Biedny,Arm
2707,Young,Joven,Jeune,Jung,Giovane,Młody,Jong
2708,Hard,Duro,Dur,Hart,Duro,Twardy,Hard
2709,Soft,Blando,Mou,Weich,Morbido,Miękki,Zacht
2710,Near,Cerca,Près,Nah,Vicino,Blisko,Dichtbij
2711,Far,Lejos,Loin,Fern,Lontano,Daleko,Ver
2712,Right,Derecha,Droite,Rechts,Destra,Prawo,Rechts
2713,Left,Izquierda,Gauche,Links,Sinistra,Lewo,Links
2714,True,Verdadero,Vrai,Wahr,Vero,Prawda,Waar
2715,False,Falso,Faux,Falsch,Falso,Fałsz,Vals
2716,Beautiful,Hermoso,Beau,Schön,Bello,Piękny,Mooi
2717,Ugly,Feo,Laid,Hässlich,Brutto,Brzydki,Lelijk
2718,Clean,Limpio,Propre,Sauber,Pulito,Czysty,Schoon
2719,Dirty,Sucio,Sale,Schmutzig,Sporco,Brudny,Vuil
2720,Full,Lleno,Plein,Voll,Pieno,Pełny,Vol
2721,Empty,Vacío,Vide,Leer,Vuoto,Pusty,Leeg
2722,Easy,Fácil,Facile,Einfach,Facile,Łatwy,Gemakkelijk
2723,Difficult,Difícil,Difficile,Schwer,Difficile,Trudny,Moeilijk
2724,Early,Temprano,Tôt,Früh,Presto,Wcześnie,Vroeg
2725,Late,Tarde,Tard,Spät,Tardi,Późno,Laat
2726,First,Primero,Premier,Erster,Primo,Pierwszy,Eerste
2727,Last,Último,Dernier,Letzter,Ultimo,Ostatni,Laatste
2728,More,Más,Plus,Mehr,Più,Więcej,Meer
2729,Less,Menos,Moins,Weniger,Meno,Mniej,Minder
2730,Open,Abierto,Ouvert,Offen,Aperto,Otwarty,Open
2731,Closed,Cerrado,Fermé,Geschlossen,Chiuso,Zamknięty,Gesloten
2732,Strong,Fuerte,Fort,Stark,Forte,Silny,Sterk
2733,Weak,Débil,Faible,Schwach,Debole,Słaby,Zwak
2734,Short,Corto,Court,Kurz,Corto,Krótki,Kort
2735,Long,Largo,Long,Lang,Lungo,Długi,Lang
2736,Wide,Ancho,Large,Breit,Largo,Szeroki,Breed
2737,Narrow,Estrecho,Étroit,Eng,Stretto,Wąski,Smal
2738,Dry,Seco,Sec,Trocken,Secco,Suchy,Droog
2739,Wet,Mojado,Mouillé,Nass,Bagnato,Mokry,Nat
2740,Cheap,Barato,Bon marché,Billig,Economico,Tani,Goedkoop
2741,Expensive,Caro,Cher,Teuer,Caro,Drogi,Duur
2742,Quiet,Silencioso,Calme,Ruhig,Silenzioso,Cichy,Stil
2743,Noisy,Ruidoso,Bruyant,Laut,Rumoroso,Głośny,Luidruchtig
2744,Safe,Seguro,Sûr,Sicher,Sicuro,Bezpieczny,Veilig
2745,Dangerous,Peligroso,Dangereux,Gefährlich,Pericoloso,Niebezpieczny,Gevaarlijk
2746,Sweet,Dulce,Sucré,Süß,Dolce,Słodki,Zoet
2747,Sour,Agrio,Acide,Sauer,Acido,Kwaśny,Zuur
2748,Bitter,Amargo,Amer,Bitter,Amaro,Gorzki,Bitter
2749,Salty,Salado,Salé,Salzig,Salato,Słony,Zout
2750,Kitchen,Cocina,Cuisine,Küche,Cucina,Kuchnia,Keuken
2751,Fridge,Nevera,Frigo,Kühlschrank,Frigo,Lodówka,Koelkast
2752,Oven,Horno,Four,Ofen,Forno,Piekarnik,Oven
2753,Sink,Fregadero,Évier,Spülbecken,Lavandino,Zlew,Gootsteen
2754,Shelf,Estante,Étagère,Regal,Scaffale,Półka,Plank
2755,Drawer,Cajón,Tiroir,Schublade,Cassetto,Szuflada,Lade
2756,Stove,Estufa,Poêle,Herd,Stufa,Piec,Fornuis
2757,Pan,Sartén,Poêle,Pfanne,Padella,Patelnia,Pan
2758,Pot,Olla,Marmite,Topf,Pentola,Garnek,Pan
2759,Mug,Taza,Chope,Becher,Tazza,Kubek,Mok
2760,Glass,Vaso,Verre,Glas,Bicchiere,Szklanka,Glas
2761,Napkin,Servilleta,Serviette,Serviette,Tovagliolo,Serwetka,Servet
2762,Bag,Bolsa,Sac,Tasche,Borsa,Torba,Tas
2763,Wallet,Cartera,Portefeuille,Brieftasche,Portafoglio,Portfel,Portemonnee
2764,Umbrella,Paraguas,Parapluie,Regenschirm,Ombrello,Parasol,Paraplu
2765,Tool,Herramienta,Outil,Werkzeug,Strumento,Narzędzie,Gereedschap
2766,Hammer,Martillo,Marteau,Hammer,Martello,Młotek,Hamer
2767,Nail,Clavo,Clou,Nagel,Chiodo,Gwóźdź,Nagel
2768,Screw,Tornillo,Vis,Schraube,Vite,Śruba,Schroef
2769,Wrench,Llave,Clé,Schlüssel,Chiave,Klucz,Sleutel
2770,Saw,Sierra,Scie,Säge,Sega,Piła,Zaag
2771,Paint,Pintura,Peinture,Farbe,Vernice,Farba,Verf
2772,Glue,Pegamento,Colle,Kleber,Colla,Klej,Lijm
2773,Tape,Cinta,Ruban,Band,Nastro,Taśma,Tape
2774,Scissors,Tijeras,Ciseaux,Schere,Forbici,Nożyczki,Schaar
2775,Ladder,Escalera,Échelle,Leiter,Scala,Drabina,Ladder
2776,Wheel,Rueda,Roue,Rad,Ruota,Koło,Wiel
2777,Engine,Motor,Moteur,Motor,Motore,Silnik,Motor
2778,Tire,Neumático,Pneu,Reifen,Gomma,Opona,Band
2779,Brake,Freno,Frein,Bremse,Freno,Hamulec,Rem
2780,Gas,Gas,Gaz,Gas,Gas,Gaz,Gas
2781,Seat,Asiento,Siège,Sitz,Sedile,Siedzenie,Stoel
2782,Truck,Camión,Camion,LKW,Camion,Ciężarówka,Vrachtwagen
2783,Bus,Autobús,Bus,Bus,Autobus,Autobus,Bus
2784,Train,Tren,Train,Zug,Treno,Pociąg,Trein
2785,Plane,Avión,Avion,Flugzeug,Aereo,Samolot,Vliegtuig
2786,Boat,Barco,Bateau,Boot,Barca,Łódź,Boot
2787,Bicycle,Bicicleta,Vélo,Fahrrad,Bicicletta,Rower,Fiets
2788,Subway,Metro,Métro,U-Bahn,Metro,Metro,Metro
2789,Ticket,Billete,Billet,Ticket,Biglietto,Bilet,Ticket
2790,Passport,Pasaporte,Passeport,Reisepass,Passaporto,Paszport,Paspoort
2791,Suitcase,Maleta,Valise,Koffer,Valigia,Walizka,Koffer
2792,Map,Mapa,Carte,Karte,Mappa,Mapa,Kaart
2793,Language,Lengua,Langue,Sprache,Lingua,Język,Taal
2794,Word,Palabra,Mot,Wort,Parola,Słowo,Woord
2795,Sentence,Frase,Phrase,Satz,Frase,Zdanie,Zin
2796,Question,Pregunta,Question,Frage,Domanda,Pytanie,Vraag
2797,Answer,Respuesta,Réponse,Antwort,Risposta,Odpowiedź,Antwoord
2798,Story,Historia,Histoire,Geschichte,Storia,Opowieść,Verhaal
2799,Poem,Poema,Poème,Gedicht,Poesia,Wiersz,Gedicht
2800,Pen,Bolígrafo,Stylo,Kuli,Penna,Długopis,Pen
2801,Pencil,Lápiz,Crayon,Bleistift,Matita,Ołówek,Potlood
2802,Eraser,Goma,Gomme,Radiergummi,Gomma,Gumka,Gom
2803,Notebook,Cuaderno,Cahier,Notizbuch,Quaderno,Zeszyt,Notitieboek
2804,Library,Biblioteca,Bibliothèque,Bibliothek,Biblioteca,Biblioteka,Bibliotheek
2805,Page,Página,Page,Seite,Pagina,Strona,Pagina
2806,Zero,Cero,Zéro,Null,Zero,Zero,Nul
2807,One,Uno,Un,Eins,Uno,Jeden,Een
2808,Two,Dos,Deux,Zwei,Due,Dwa,Twee
2809,Three,Tres,Trois,Drei,Tre,Trzy,Drie
2810,Four,Cuatro,Quatre,Vier,Quattro,Cztery,Vier
2811,Five,Cinco,Cinq,Fünf,Cinque,Pięć,Vijf
2812,Six,Seis,Six,Sechs,Sei,Sześć,Zes
2813,Seven,Siete,Sept,Sieben,Sette,Siedem,Zeven
2814,Eight,Ocho,Huit,Acht,Otto,Osiem,Acht
2815,Nine,Nueve,Neuf,Neun,Nove,Dziewięć,Negen
2816,Ten,Diez,Dix,Zehn,Dieci,Dziesięć,Tien
2817,Hundred,Cien,Cent,Hundert,Cento,Sto,Honderd
2818,Thousand,Mil,Mille,Tausend,Mille,Tysiąc,Duizend
`,Fl={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history"},qO=()=>{try{const s=localStorage.getItem(Fl.LEVEL);if(!s)return 1;const c=parseInt(s,10);return isNaN(c)?1:c}catch{return 1}},$O=s=>{localStorage.setItem(Fl.LEVEL,s.toString())},eT=()=>!!localStorage.getItem(Fl.TUTORIAL_SEEN),aT=()=>{localStorage.setItem(Fl.TUTORIAL_SEEN,"true")},ms={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[]},sS=()=>{try{const s=localStorage.getItem(Fl.GAME_STATS);return s?{...ms,...JSON.parse(s)}:ms}catch{return ms}},wT=s=>{try{const c=sS();let O=c.solvedCategoryIds;if(s.solvedCategoryIds){const L=new Set([...c.solvedCategoryIds,...s.solvedCategoryIds]);O=Array.from(L)}const u={rowsSolved:c.rowsSolved+(s.rowsSolved||0),levelsCompleted:c.levelsCompleted+(s.levelsCompleted||0),totalTimeMs:c.totalTimeMs+(s.totalTimeMs||0),hintsUsed:c.hintsUsed+(s.hintsUsed||0),hintsRefused:c.hintsRefused+(s.hintsRefused||0),totalMoves:c.totalMoves+(s.totalMoves||0),solvedCategoryIds:O};localStorage.setItem(Fl.GAME_STATS,JSON.stringify(u))}catch(c){console.error("Failed to update stats",c)}};class tT{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const c=window.AudioContext||window.webkitAudioContext;if(c)this.ctx=new c;else return null}catch(c){return console.error("Audio init error",c),null}return this.ctx}resume(){const c=this.getContext();c&&c.state==="suspended"&&c.resume().catch(O=>console.warn(O))}playTone(c,O,u,L=0,p=.1){if(this.isMuted)return;const B=this.getContext();if(B){B.state==="suspended"&&B.resume().catch(()=>{});try{const P=B.createOscillator(),y=B.createGain();P.type=O,P.frequency.setValueAtTime(c,B.currentTime+L),y.gain.setValueAtTime(p,B.currentTime+L),y.gain.linearRampToValueAtTime(.001,B.currentTime+L+u),P.connect(y),y.connect(B.destination),P.start(B.currentTime+L),P.stop(B.currentTime+L+u+.05),P.onended=()=>{P.disconnect(),y.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(c=>{try{c.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(600,"sine",.08,0,.1)}playSwap(){if(this.isMuted)return;const c=this.getContext();if(c){c.state==="suspended"&&c.resume().catch(()=>{});try{const O=c.createOscillator(),u=c.createGain();O.frequency.setValueAtTime(300,c.currentTime),O.frequency.linearRampToValueAtTime(600,c.currentTime+.1),u.gain.setValueAtTime(.05,c.currentTime),u.gain.linearRampToValueAtTime(.001,c.currentTime+.1),O.connect(u),u.connect(c.destination),O.start(),O.stop(c.currentTime+.15),O.onended=()=>{O.disconnect(),u.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const c=this.getContext();if(c){c.state==="suspended"&&c.resume().catch(()=>{});try{const O=c.currentTime,u=c.createOscillator(),L=c.createGain();u.type="sawtooth",u.frequency.setValueAtTime(120,O),u.frequency.exponentialRampToValueAtTime(60,O+.3),L.gain.setValueAtTime(.15,O),L.gain.linearRampToValueAtTime(.001,O+.3),u.connect(L),L.connect(c.destination),u.start(O),u.stop(O+.35),u.onended=()=>{u.disconnect(),L.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const Ua=new tT,lT=({onStart:s,onSettings:c,onStats:O,lastLevel:u})=>{const L=u||1,p=L>1?`CONTINUE LEVEL ${L}`:"START GAME";return f.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative",children:[f.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[f.jsxs("div",{className:"mb-8 flex justify-center w-full relative",children:[f.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/30 rounded-full blur-[60px] pointer-events-none animate-brain-glow"}),f.jsx("img",{src:"https://lh3.googleusercontent.com/d/1GWUN6DaooRsnsj4ZaNPqbfvSJ8o7ILtw",alt:"Word Pairing Machine",className:"w-80 md:w-[500px] lg:w-[600px] h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] relative z-10"})]}),f.jsx("div",{className:"w-24 h-1 bg-neon-white mb-12 animate-fade-in opacity-80 shadow-[0_0_15px_white]",style:{animationDelay:"0.3s"}}),f.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center",style:{animationDelay:"0.4s"},children:f.jsxs("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95",children:[f.jsx("div",{className:"absolute inset-0 bg-neon-gold/20 rounded-[22px] blur-xl group-hover:bg-neon-gold/40 transition-all duration-300"}),f.jsxs("div",{className:"relative rounded-[22px] overflow-hidden p-[4px] bg-zinc-800 shadow-lg",children:[f.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]",style:{background:"conic-gradient(transparent 180deg, white 360deg)",animation:"spin 4s linear infinite"}}),f.jsx("button",{onClick:s,className:`
                            relative w-full h-full bg-zinc-900 rounded-[18px] px-8 py-4
                            text-white text-4xl font-bold tracking-widest uppercase font-oswald
                            flex items-center justify-center
                            border-t-[3px] border-l-[3px] border-zinc-600
                            border-b-[4px] border-r-[4px] border-black
                            shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]
                            active:border-t-black active:border-l-black active:border-b-zinc-700 active:border-r-zinc-700
                            active:translate-y-[2px]
                            transition-all duration-75 z-10
                        `,children:p})]})]})})]}),f.jsxs("div",{className:"w-full flex justify-center gap-4 pb-4 mt-auto animate-fade-in",style:{animationDelay:"0.5s"},children:[f.jsx("button",{onClick:O,className:`
            group relative px-6 py-3 rounded-medium min-w-[120px]
            bg-zinc-900 text-zinc-500 hover:text-neon-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
            border border-zinc-800 hover:border-zinc-500
          `,children:"STATS"}),f.jsx("button",{onClick:c,className:`
            group relative px-6 py-3 rounded-medium min-w-[120px]
            bg-zinc-900 text-zinc-500 hover:text-neon-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
            border border-zinc-800 hover:border-zinc-500
          `,children:"SETTINGS"})]})]})},zA={[w.CLASSIC]:"Classic",[w.LEVEL_3_INFINITE]:"Hidden",[w.LEVEL_4_THEMED]:"Themed",[w.LEVEL_5_GROUP]:"Mind",[w.LEVEL_SYNONYMS]:"Synonyms",[w.LEVEL_EMOJI]:"Emoji",[w.LEVEL_TRANSLATION]:"Translation"},nT=({isOpen:s,onClose:c,onMainMenu:O,isMusicOn:u,toggleMusic:L,enabledModes:p,toggleMode:B,hintsEnabled:P,setHintsEnabled:y,onShowTutorial:C,onResetProgress:v,debugMode:H,setDebugMode:U,categories:W=[]})=>{if(!s)return null;const q=W&&W.length>0;return f.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in",children:f.jsxs("div",{className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-4 shadow-2xl flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[f.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[f.jsx("h2",{className:"text-xl font-black font-righteous text-deco-gold uppercase tracking-widest",children:"CONTROL CENTER"}),f.jsx("button",{onClick:c,className:"text-zinc-400 hover:text-white transition-colors p-1",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[f.jsxs("button",{onClick:O,className:"col-span-2 py-2 bg-red-600 border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all flex items-center justify-center gap-2",children:[f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:f.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),"EXIT TO MAIN MENU"]}),f.jsxs("button",{onClick:L,className:`flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${u?"bg-zinc-800 border-neon-green text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${u?"bg-neon-green shadow-[0_0_8px_#00FF66]":"bg-zinc-700"}`}),"SOUND"]}),f.jsxs("button",{onClick:()=>y(!P),className:`flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${P?"bg-zinc-800 border-neon-blue text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${P?"bg-neon-blue shadow-[0_0_8px_#00E5FF]":"bg-zinc-700"}`}),"HINTS"]}),f.jsxs("button",{onClick:()=>U(!H),className:`col-span-2 flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${H?"bg-zinc-800 border-neon-gold text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${H?"bg-neon-gold shadow-[0_0_8px_#FFD400]":"bg-zinc-700"}`}),"ADMIN TOOLS"]})]}),q&&f.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[f.jsx("h3",{className:"text-deco-gold font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5",children:"CURRENT GOALS"}),f.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:W.map(J=>f.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter leading-none transition-all ${J.isSolved?"bg-zinc-800/50 border-neon-green text-neon-green":"bg-black border-zinc-700 text-zinc-300"}`,children:[f.jsx("span",{className:"truncate mr-1",children:J.name}),J.isSolved&&f.jsx("span",{className:"text-xs",children:"✓"})]},J.name))})]}),f.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[f.jsx("h3",{className:"text-cyan-400 font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5",children:"GAME MODES"}),f.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(zA).map(J=>{const F=p.includes(J);return f.jsxs("button",{onClick:()=>B(J),className:`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${F?"bg-zinc-800 border-cyan-500 text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[f.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5",children:zA[J]}),f.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${F?"bg-cyan-500 shadow-[0_0_5px_cyan]":"bg-zinc-800"}`})]},J)})})]}),f.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{onClick:C,className:"flex-1 py-2 bg-zinc-800 border border-zinc-700 rounded-medium font-bold text-white text-[10px] font-oswald uppercase hover:bg-zinc-700 transition-colors",children:"HOW TO PLAY"}),f.jsx("button",{onClick:v,className:"flex-1 py-2 bg-zinc-900 border border-red-900 text-red-500 font-bold text-[10px] font-oswald uppercase hover:bg-red-950 transition-colors",children:"RESET ALL"})]}),f.jsx("button",{onClick:c,className:"w-full py-3 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium hover:scale-[1.02] active:scale-95 transition-all shadow-xl",children:"RESUME PLAY"})]})]})})},iT=`
Faces Happy,😀😃😄😁😆😅🤣😂🙂🙃
Faces Sad,☹️🙁😕😟😔😞😒😏😣😖
Faces Love,🥰😍😘😗😙😚
Faces Sick,🤢🤮🤧😷🤒🤕
Faces Cool,😎🤠🤓
Hand Gestures,👍👎👊✊🤛🤜🤞✌️🤟🤘
Hearts,❤️🧡💛💚💙💜🖤🤍🤎💔
Animals Farm,🐮🐷🐑🐴🐐🐔🐓🐣🦆
Animals Wild,🐒🦍🦧🐺🦊🦝🦁🐯
Animals Sea,🐋🐬🦭🐟🐠🐡🦈🐙🐚
Animals Bugs,🐌🦋🐛🐜🐝🪲🐞🦗🕷️🦂
Plants,💐🌸💮🏵️🌹🌺🌻🌼🌷🌱
Trees,🌲🌳🌴🌵🌾🌿☘️🍀🍁🍂
Fruit,🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🥝
Veggie,🥑🍆🥔🥕🌽🌶️🥒🥬🥦🧄🧅🍄
Food Prep,🍞🥐🥖🥨🥞🧀🍖🍗🥓🍔🍟🍕🌭🥪🌮
Food Asian,🍱🍲🍛🍜🍝🍠🍢🍣🍤🍥🥮
Sweets,🍦🍧🍨🍩🍪🎂🍰🧁🍫🍬🍭
Drink,🥛☕🍵🍶🍺🍻🥂🍷🥃🍸🍹🧃
Activity,⚽🏀🏈⚾🎾🏐🏉⛳⛸️🎿🛷🥌
Travel Land,🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🚚🚛🚜
Travel Air,✈️🛩️🛫🛬🚀🛸🚁
Travel Water,⚓⛵🛶🚤🛳️⛴️🛥️🚢
Sky,☀️🌝🌚🌑🌒🌓🌔🌕🌖
Weather,☁️⛅⛈️🌤️🌥️🌦️🌧️🌨️🌩️
Object,⌚📱📲💻⌨️🖥️🖨️🖱️🖲️🕹️
Book,📔📕📖📗📘📙📚📓📒📃
Money,💰💴💵💶💷💸💳🧾
Office,✉️📧📨📩📤📥📦
Tool,🔨🪓⛏️⚒️🛠️🗡️⚔️🔧
Science,⚗️🔭🔬🧬🧪🧫💊🩺
Clothing Tops,👕👚👔🧥🥋🎽
Clothing Bottoms,👖👙👘👗🧦
Shoes,👞👟🥾👡👠🥿
Flags Red,🇦🇱🇧🇭🇨🇳🇩🇰🇭🇰🇮🇲
Flags Blue,🇦🇷🇦🇺🇧🇼🇫🇮🇬🇷🇭🇳🇮🇱
Flags Stripes,🇦🇹🇧🇪🇧🇬🇨🇮🇪🇪🇫🇷🇩🇪
Cards,♠️♣️♥️♦️
Music,🎼🎵🎶🎹🎻🎺
Stationery,✏️✒️🖋️🖊️🖌️🖍️
Kitchen,🍳🥘🥣🥗🍲🍛
Medical,💉💊🩹🩺🏥
Halloween,🎃👻🕷️🕸️🦇💀
Christmas,🎄🎅🎁❄️⛄🦌
Easter,🐰🥚🐣🌷
Love,💍💒💌💑
Time,⏳⌛⏰⌚🕰️
Audio,🔇🔈🔉🔊
Weather Cold,❄️🌨️☃️⛄
Weather Hot,☀️😎🏖️🏜️
Insects,🐝🐞🦋🦗🕷️
Dinosaurs,🦖🦕🐊🐍
Warning Signs,⚠️🚸⛔🚫
Constellations,♈♉♊♋♌♍♎♏
Shapes Blue,🟦🔷🔹🔵
Shapes Red,🟥🔴🔻🛑
Shapes Yellow,🟨🟡🔶🔸
Shapes Green,🟩🟢📗
Purple Things,🍇🍆👾👿🟣
Orange Things,🍊🥕🦊🏀
Black Things,🖤🎱🎓🕶️
White Things,🤍🦢🏐🦴
Gray Things,🐘🌪️💿🐭
`;let gs=null;const oT=()=>{if(gs)return gs;const s=iT.trim().split(`
`),c=[];let O=9e4;const u=typeof Intl<"u"&&"Segmenter"in Intl;return s.forEach(L=>{if(!L.includes(","))return;const p=L.indexOf(","),B=L.substring(0,p).trim(),P=L.substring(p+1).trim();let y=[];if(u){const v=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(P);for(const{segment:H}of v){const U=H.trim();U.length>0&&y.push(U)}}else y=Array.from(P).filter(C=>C.trim().length>0);y=Array.from(new Set(y)),y.length>=3&&c.push({id:(O++).toString(),name:B,words:y})}),gs=c,c},rT=({onClose:s})=>{const[c,O]=le.useState(null),[u,L]=le.useState(0);if(le.useEffect(()=>{O(sS());const C=$i().length,v=oT().length,H=iS().length,U=oS().length,q=nS(rS).length;L(C+v+H+U+q)},[]),!c)return null;const p=c.levelsCompleted>0?Math.round(c.totalTimeMs/1e3/c.levelsCompleted):0,B=c.levelsCompleted>0?(c.totalMoves/c.levelsCompleted).toFixed(1):"0.0",P=C=>{const v=Math.floor(C/60),H=C%60;return`${v}m ${H}s`},y=({title:C,value:v,subtext:H})=>f.jsxs("div",{className:"bg-zinc-800 border border-zinc-600 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg font-oswald",children:[f.jsx("div",{className:"text-zinc-400 uppercase text-xs tracking-widest mb-1",children:C}),f.jsx("div",{className:"text-white text-3xl text-deco-gold font-bold",children:v}),H&&f.jsx("div",{className:"text-zinc-500 text-[10px] mt-1 uppercase tracking-tighter",children:H})]});return f.jsx("div",{className:"absolute inset-0 z-[150] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in font-oswald",children:f.jsxs("div",{className:"w-full max-w-lg bg-zinc-900 border-2 border-white rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto",children:[f.jsx("button",{onClick:s,className:"absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),f.jsx("h2",{className:"text-4xl font-black text-deco-gold uppercase text-center mb-8 tracking-widest",children:"Player Stats"}),f.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[f.jsx(y,{title:"Levels Complete",value:c.levelsCompleted}),f.jsx(y,{title:"Avg Time / Level",value:P(p)}),f.jsx(y,{title:"Avg Moves / Level",value:B}),f.jsx(y,{title:"Rows Solved",value:c.rowsSolved}),f.jsx(y,{title:"Categories Found",value:`${c.solvedCategoryIds.length} / ${u}`,subtext:`${Math.round(c.solvedCategoryIds.length/(u||1)*100)}% Discovered`})]}),f.jsxs("div",{className:"bg-zinc-800 rounded-xl p-4 border border-zinc-700 mb-6",children:[f.jsx("h3",{className:"text-white uppercase tracking-wider text-center mb-4 border-b border-zinc-600 pb-2 font-bold",children:"Hint Usage"}),f.jsxs("div",{className:"flex justify-around",children:[f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"text-green-400 font-black text-3xl",children:c.hintsUsed}),f.jsx("div",{className:"text-zinc-400 text-xs uppercase tracking-widest",children:"Used"})]}),f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"text-red-400 font-black text-3xl",children:c.hintsRefused}),f.jsx("div",{className:"text-zinc-400 text-xs uppercase tracking-widest",children:"Refused"})]})]})]}),f.jsx("button",{onClick:s,className:"w-full py-4 bg-white text-black font-black text-2xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg tracking-widest",children:"Close"})]})})},sT={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased",transform:"translateZ(0)"},uS=Ka.forwardRef(({data:s,onClick:c,disabled:O,gradientClass:u,exitAnimation:L,...p},B)=>{const P=s.word?s.word.length:0;let y="text-sm sm:text-base leading-tight font-bold tracking-wide";s.isEmoji?y="text-4xl sm:text-5xl md:text-6xl":P>12?y="text-[11px] sm:text-xs leading-none font-bold tracking-normal":P>8&&(y="text-xs sm:text-sm leading-tight font-bold");const C=`relative w-full h-full rounded-medium flex items-center justify-center ${y} cursor-pointer select-none shadow-sm p-1 text-center whitespace-normal break-words border-4 transition-all duration-200 uppercase antialiased`;let v="",H=s.word||"",U=!1;const W="text-white",q="drop-shadow-[0_2px_2px_rgba(0,0,0,1)] drop-shadow-[0_0_1px_rgba(0,0,0,1)]";switch(s.status){case"neutral":v=`${u||"bg-zinc-800"} border-white/40 ${W} hover:border-theme-primary hover:bg-zinc-700`;break;case"selected":v=`bg-theme-primary border-theme-outline ${W} animate-selected-pulse z-20 ring-2 ring-white`;break;case"solved":v=`${s.color||"bg-zinc-800"} border-white/50 ${W} animate-solve-impact z-10`;break;case"wrong":v="bg-neon-red border-white text-white animate-shake z-10";break;case"correct-preview":v=`${s.color||"bg-zinc-900"} border-white/50 ${W} scale-95 z-10 shadow-md`;break;case"placeholder":v="opacity-0 pointer-events-none cursor-default border-none";break;case"placeholder-colored":v=`${s.color||"bg-zinc-800"} z-0`,H="";break;case"hint":v="bg-black/80 border-neon-yellow text-white animate-pulse z-20 scale-105";break;case"locked":v="bg-zinc-800/80 border-neon-yellow text-white z-10 shadow-[inset_0_0_10px_rgba(255,212,0,0.3)]",U=!0;break;case"exiting":const Z=L||"animate-scale-out";v=`${s.color||u||"bg-zinc-800"} ${W} border-transparent ${Z} pointer-events-none z-50`;break;case"flipping-out":v=`${s.color||"bg-zinc-800"} ${W} animate-flip-out-x z-20 pointer-events-none`;break;case"flipping-in":v=`${u||"bg-zinc-800"} ${W} animate-flip-in-x z-20`;break}const J=le.useRef(null),F=()=>{O||["solved","placeholder","exiting","placeholder-colored","flipping-out","locked"].includes(s.status)||c(s.id)};return f.jsxs("div",{ref:b=>{typeof B=="function"?B(b):B&&(B.current=b),J.current=b},onClick:F,className:`${C} ${v}`,style:sT,...p,children:[f.jsx("span",{className:`z-10 px-0.5 inline-block ${q} pointer-events-none`,children:H}),U&&f.jsx("div",{className:"absolute top-1 right-1 w-3 h-3 text-neon-yellow opacity-80",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-full h-full",children:f.jsx("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",clipRule:"evenodd"})})})]})});uS.displayName="Tile";const uT=Ka.memo(uS),cS=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],cT=()=>{const s=JSON.parse(JSON.stringify(cS)),c=s[10];s[10]=s[13],s[13]=c;const O=s[11];return s[11]=s[12],s[12]=O,s},ET=s=>s===w.CLASSIC?"CLASSIC GRID":s===w.LEVEL_EMOJI?"EMOJI MATCH":s===w.LEVEL_SYNONYMS?"SYNONYMS":s===w.LEVEL_4_THEMED?"THEMED":s===w.LEVEL_2_FILTER?"TARGET FILTER":"",AT=({mode:s,onComplete:c})=>{const O=s===w.CLASSIC||s===w.LEVEL_EMOJI||s===w.LEVEL_4_THEMED||s===w.LEVEL_SYNONYMS,[u,L]=le.useState(1),[p,B]=le.useState(O?cT():cS),P=le.useRef(new Map),y=async(v,H)=>{const U=P.current.get(v),W=P.current.get(H);if(Ua.playSwap(),U&&W){const q=U.getBoundingClientRect(),J=W.getBoundingClientRect(),F=J.left-q.left,b=J.top-q.top;U.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",U.style.transform=`translate(${F}px, ${b}px) scale(1.1)`,U.style.zIndex="50",U.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",W.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",W.style.transform=`translate(${-F}px, ${-b}px) scale(0.9)`,W.style.zIndex="40",await new Promise(Z=>setTimeout(Z,400)),U.style.transition="",U.style.transform="",U.style.zIndex="",U.style.boxShadow="",W.style.transition="",W.style.transform="",W.style.zIndex=""}};le.useEffect(()=>{if(!O)return;let v=!0;return(async()=>{if(await new Promise(F=>setTimeout(F,600)),!v)return;const U="t13",W="t10";if(await new Promise(F=>setTimeout(F,300)),!v||(B(F=>F.map(b=>b.id===U?{...b,status:"selected"}:b)),Ua.playSelect(),await new Promise(F=>setTimeout(F,400)),!v)||(await new Promise(F=>setTimeout(F,300)),!v)||(B(F=>F.map(b=>b.id===W?{...b,status:"selected"}:b)),Ua.playSelect(),await new Promise(F=>setTimeout(F,200)),!v)||(await y(U,W),B(F=>{const b=[...F],Z=b.findIndex(ne=>ne.id===U),te=b.findIndex(ne=>ne.id===W);return[b[Z],b[te]]=[b[te],b[Z]],b[Z]={...b[Z],status:"neutral"},b[te]={...b[te],status:"neutral"},b}),await new Promise(F=>setTimeout(F,400)),!v))return;const q="t12",J="t11";await new Promise(F=>setTimeout(F,300)),v&&(B(F=>F.map(b=>b.id===q?{...b,status:"selected"}:b)),Ua.playSelect(),await new Promise(F=>setTimeout(F,400)),v&&(await new Promise(F=>setTimeout(F,300)),v&&(B(F=>F.map(b=>b.id===J?{...b,status:"selected"}:b)),Ua.playSelect(),await new Promise(F=>setTimeout(F,200)),v&&(await y(q,J),B(F=>{const b=[...F],Z=b.findIndex(ne=>ne.id===q),te=b.findIndex(ne=>ne.id===J);return[b[Z],b[te]]=[b[te],b[Z]],b[Z]={...b[Z],status:"neutral"},b[te]={...b[te],status:"neutral"},b}),await new Promise(F=>setTimeout(F,400)),v&&(Ua.playRowSolved(),B(F=>F.map((b,Z)=>Z>=8&&Z<12?{...b,status:"solved",color:"bg-neon-green border-white"}:Z>=12?{...b,status:"solved",color:"bg-neon-yellow border-white"}:b)),L(4),await new Promise(F=>setTimeout(F,600)),v&&(Ua.playSelect(),B(F=>F.map(b=>b.id==="t3"?{...b,status:"selected"}:b)),L(5),await new Promise(F=>setTimeout(F,800)),v&&(Ua.playSelect(),await y("t3","t7"),B(F=>{const b=[...F],Z=b.findIndex(ne=>ne.id==="t3"),te=b.findIndex(ne=>ne.id==="t7");return[b[Z],b[te]]=[b[te],b[Z]],b[Z]={...b[Z],status:"neutral"},b[te]={...b[te],status:"neutral"},b}),await new Promise(F=>setTimeout(F,300)),v&&(Ua.playRowSolved(),Ua.playWin(),B(F=>F.map((b,Z)=>Z<4?{...b,status:"solved",color:"bg-neon-blue border-white"}:Z>=4&&Z<8?{...b,status:"solved",color:"bg-neon-pink border-white"}:Z>=8&&Z<12?{...b,status:"solved",color:"bg-neon-green border-white"}:Z>=12?{...b,status:"solved",color:"bg-neon-yellow border-white"}:b)),await new Promise(F=>setTimeout(F,800)),v&&L(6)))))))))})(),()=>{v=!1}},[O]),le.useEffect(()=>{if(!O){const v=setTimeout(()=>{c()},3e3);return()=>clearTimeout(v)}},[O,c]);const C=()=>{var H;const v=[];for(let U=0;U<4;U++){const W=p.slice(U*4,U*4+4),q=W.every(b=>b.status==="solved"),J=(H=W[0])==null?void 0:H.categoryName;v.push(f.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1",children:f.jsxs("div",{className:"relative w-full h-full p-1",children:[q&&f.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),q&&f.jsx("div",{className:"absolute top-0 left-8 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:f.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:J})}),f.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${q?"drop-shadow-xl p-3":""}`,children:W.map(b=>f.jsx("div",{className:"relative w-full h-full",children:f.jsx(uT,{data:b,"data-tile-id":b.id,onClick:()=>{},disabled:!0,ref:Z=>{Z?P.current.set(b.id,Z):P.current.delete(b.id)}})},b.id))})]})},U))}return v};return f.jsxs("div",{className:"absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 overflow-hidden",children:[f.jsxs("div",{className:`flex flex-col items-center justify-center w-full h-full transition-all duration-500 ${u===6?"blur-sm opacity-40 scale-95":""}`,children:[f.jsxs("div",{className:"mb-4 text-center shrink-0",children:[f.jsx("h2",{className:"text-3xl font-black font-righteous text-deco-gold uppercase tracking-widest mb-1",children:"HOW TO PLAY"}),f.jsx("div",{className:"text-xl font-oswald text-white tracking-wider",children:ET(s)})]}),f.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0",children:f.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:C()})}),f.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[u===1&&f.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:f.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(u===2||u===3)&&f.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:f.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),f.jsx("button",{onClick:c,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${u===6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]}),u===6&&f.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:f.jsx("button",{onClick:c,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},ST=[{title:"Movement",items:[{name:"Slide Left",class:"animate-slide-in-left",icon:"⬅️"},{name:"Slide Right",class:"animate-slide-in-right",icon:"➡️"},{name:"Slide Down",class:"animate-slide-in-down",icon:"⬇️"},{name:"Slide Up",class:"animate-slide-in-up",icon:"⬆️"},{name:"Drift",class:"animate-drift-in",icon:"🍃"},{name:"Pop",class:"animate-pop-in",icon:"💥"},{name:"Throw",class:"animate-throw-in",icon:"🥎"},{name:"Orbit",class:"animate-orbit-in",icon:"🪐"}]},{title:"Scale & Size",items:[{name:"Zoom In",class:"animate-zoom-in",icon:"🔍"},{name:"Zoom Out",class:"animate-zoom-out-enter",icon:"🔭"},{name:"Pulse",class:"animate-pulse-once",icon:"💓"},{name:"Inflate",class:"animate-inflate",icon:"🎈"}]},{title:"Opacity & Light",items:[{name:"Crossfade",class:"animate-crossfade",icon:"🌗"},{name:"Flash",class:"animate-flash-in",icon:"📸"},{name:"Glow",class:"animate-glow-reveal",icon:"✨"},{name:"Flicker",class:"animate-flicker-in",icon:"🕯️"}]},{title:"Rotation",items:[{name:"Spin",class:"animate-spin-in",icon:"🔄"},{name:"Flip X",class:"animate-flip-in-x",icon:"💳"},{name:"Settle",class:"animate-rotate-settle",icon:"🏷️"},{name:"Vert 360",class:"animate-rotate-vert-center",icon:"😵‍💫"}]},{title:"Distortion",items:[{name:"Typewriter",class:"animate-typewriter overflow-hidden whitespace-nowrap",text:"HELLO WORLD"},{name:"Blur",class:"animate-blur-in",icon:"🌫️"},{name:"Chromatic",class:"animate-chromatic-flash",icon:"👓"},{name:"Pixelate",class:"animate-pixelate-in",icon:"👾"},{name:"Melt",class:"animate-melt-in",icon:"🫠"},{name:"Smoke",class:"animate-smoke-in",icon:"🚬"},{name:"Shadow Pop",class:"animate-text-shadow-pop-tr",icon:"⛱️"}]},{title:"Physics",items:[{name:"Bounce",class:"animate-bounce-in",icon:"🏀"},{name:"Drop",class:"animate-drop-in",icon:"📦"}]},{title:"Specialty",items:[{name:"Glitch",class:"animate-glitch-in",icon:"📺"},{name:"Terminal",class:"animate-terminal overflow-hidden whitespace-nowrap border-r-2 border-green-500 pr-1",text:"> SYSTEM READY"},{name:"Hero",class:"animate-hero-overshoot",icon:"🦸"}]},{title:"Exit Animations",items:[{name:"Spin Out",class:"animate-spin-out-page",icon:"🌀"},{name:"Orbit Blur",class:"animate-orbit-blur-out",icon:"💫"},{name:"Spin Flip",class:"animate-spin-flip-out",icon:"🔄"},{name:"Pop Slide Up",class:"animate-pop-slide-up-out",icon:"⬆️"},{name:"Pop Slide Down",class:"animate-pop-slide-down-out",icon:"⬇️"},{name:"Pop Up Spin",class:"animate-pop-slide-up-spin",icon:"🌀⬆️"},{name:"Pop Down Spin",class:"animate-pop-slide-down-spin",icon:"🌀⬇️"},{name:"Roll Out Left",class:"animate-roll-out-left",icon:"🥎⬅️"},{name:"Rotate Vert",class:"animate-rotate-vert-center-exit",icon:"😵‍💫"},{name:"Fade Out",class:"animate-fade-out",icon:"🌫️"},{name:"Swing Out Btm",class:"animate-swing-out-bottom-fwd",icon:"👋"},{name:"Slide Out Back",class:"animate-slide-out-bck-center",icon:"🔙"},{name:"Rotate Out",class:"animate-rotate-out-center",icon:"😵"},{name:"Swing Out Top",class:"animate-swing-out-top-bck",icon:"🔝"},{name:"Flip Out Top",class:"animate-flip-out-hor-top",icon:"🙃"},{name:"Slide Fwd",class:"animate-slide-out-fwd-center",icon:"⏩"}]}],RT=({onExit:s})=>{const[c,O]=le.useState(0),u=()=>{O(L=>L+1)};return f.jsxs("div",{className:"w-full h-full flex flex-col bg-zinc-950 overflow-hidden relative",children:[f.jsxs("div",{className:"p-4 flex justify-between items-center border-b border-zinc-800 bg-black z-20 shadow-md",children:[f.jsx("h2",{className:"text-2xl font-black font-righteous text-deco-gold tracking-widest uppercase text-sm md:text-2xl",children:"Animation Lab"}),f.jsxs("div",{className:"flex gap-4",children:[f.jsx("button",{onClick:u,className:"px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded font-oswald uppercase text-sm",children:"Replay All"}),f.jsx("button",{onClick:s,className:"px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded font-oswald uppercase text-sm",children:"Exit Lab"})]})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-4 pb-24",children:f.jsx("div",{className:"max-w-6xl mx-auto space-y-8",children:ST.map((L,p)=>f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-cyan-400 font-oswald text-xl uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4",children:L.title}),f.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",children:L.items.map((B,P)=>f.jsx(OT,{item:B},`${p}-${P}-${c}`))})]},p))})})]})},OT=({item:s})=>{const[c,O]=le.useState(0);return f.jsxs("div",{className:"group bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-white transition-colors cursor-pointer min-h-[120px] overflow-hidden",onMouseEnter:()=>O(u=>u+1),onClick:()=>O(u=>u+1),children:[f.jsx("div",{className:`text-4xl ${s.class} ${s.text?"text-lg font-mono text-green-400":""}`,children:s.text?s.text:s.icon},c),f.jsx("div",{className:"text-zinc-400 font-oswald text-sm uppercase tracking-wider text-center group-hover:text-white transition-colors",children:s.name})]})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var Gl;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(Gl||(Gl={}));class Ms extends Error{constructor(c,O,u){super(c),this.message=c,this.code=O,this.data=u}}const TT=s=>{var c,O;return s!=null&&s.androidBridge?"android":!((O=(c=s==null?void 0:s.webkit)===null||c===void 0?void 0:c.messageHandlers)===null||O===void 0)&&O.bridge?"ios":"web"},dT=s=>{const c=s.CapacitorCustomPlatform||null,O=s.Capacitor||{},u=O.Plugins=O.Plugins||{},L=()=>c!==null?c.name:TT(s),p=()=>L()!=="web",B=H=>{const U=C.get(H);return!!(U!=null&&U.platforms.has(L())||P(H))},P=H=>{var U;return(U=O.PluginHeaders)===null||U===void 0?void 0:U.find(W=>W.name===H)},y=H=>s.console.error(H),C=new Map,v=(H,U={})=>{const W=C.get(H);if(W)return console.warn(`Capacitor plugin "${H}" already registered. Cannot register plugins twice.`),W.proxy;const q=L(),J=P(H);let F;const b=async()=>(!F&&q in U?F=typeof U[q]=="function"?F=await U[q]():F=U[q]:c!==null&&!F&&"web"in U&&(F=typeof U.web=="function"?F=await U.web():F=U.web),F),Z=(Ee,Le)=>{var ke,Ue;if(J){const me=J==null?void 0:J.methods.find(be=>Le===be.name);if(me)return me.rtype==="promise"?be=>O.nativePromise(H,Le.toString(),be):(be,qe)=>O.nativeCallback(H,Le.toString(),be,qe);if(Ee)return(ke=Ee[Le])===null||ke===void 0?void 0:ke.bind(Ee)}else{if(Ee)return(Ue=Ee[Le])===null||Ue===void 0?void 0:Ue.bind(Ee);throw new Ms(`"${H}" plugin is not implemented on ${q}`,Gl.Unimplemented)}},te=Ee=>{let Le;const ke=(...Ue)=>{const me=b().then(be=>{const qe=Z(be,Ee);if(qe){const Ve=qe(...Ue);return Le=Ve==null?void 0:Ve.remove,Ve}else throw new Ms(`"${H}.${Ee}()" is not implemented on ${q}`,Gl.Unimplemented)});return Ee==="addListener"&&(me.remove=async()=>Le()),me};return ke.toString=()=>`${Ee.toString()}() { [capacitor code] }`,Object.defineProperty(ke,"name",{value:Ee,writable:!1,configurable:!1}),ke},ne=te("addListener"),ea=te("removeListener"),Be=(Ee,Le)=>{const ke=ne({eventName:Ee},Le),Ue=async()=>{const be=await ke;ea({eventName:Ee,callbackId:be},Le)},me=new Promise(be=>ke.then(()=>be({remove:Ue})));return me.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Ue()},me},ee=new Proxy({},{get(Ee,Le){switch(Le){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return J?Be:ne;case"removeListener":return ea;default:return te(Le)}}});return u[H]=ee,C.set(H,{name:H,proxy:ee,platforms:new Set([...Object.keys(U),...J?[q]:[]])}),ee};return O.convertFileSrc||(O.convertFileSrc=H=>H),O.getPlatform=L,O.handleError=y,O.isNativePlatform=p,O.isPluginAvailable=B,O.registerPlugin=v,O.Exception=Ms,O.DEBUG=!!O.DEBUG,O.isLoggingEnabled=!!O.isLoggingEnabled,O},fT=s=>s.Capacitor=dT(s),ys=fT(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Hs=ys.registerPlugin;class ES{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(c,O){let u=!1;this.listeners[c]||(this.listeners[c]=[],u=!0),this.listeners[c].push(O);const p=this.windowListeners[c];p&&!p.registered&&this.addWindowListener(p),u&&this.sendRetainedArgumentsForEvent(c);const B=async()=>this.removeListener(c,O);return Promise.resolve({remove:B})}async removeAllListeners(){this.listeners={};for(const c in this.windowListeners)this.removeWindowListener(this.windowListeners[c]);this.windowListeners={}}notifyListeners(c,O,u){const L=this.listeners[c];if(!L){if(u){let p=this.retainedEventArguments[c];p||(p=[]),p.push(O),this.retainedEventArguments[c]=p}return}L.forEach(p=>p(O))}hasListeners(c){var O;return!!(!((O=this.listeners[c])===null||O===void 0)&&O.length)}registerWindowListener(c,O){this.windowListeners[O]={registered:!1,windowEventName:c,pluginEventName:O,handler:u=>{this.notifyListeners(O,u)}}}unimplemented(c="not implemented"){return new ys.Exception(c,Gl.Unimplemented)}unavailable(c="not available"){return new ys.Exception(c,Gl.Unavailable)}async removeListener(c,O){const u=this.listeners[c];if(!u)return;const L=u.indexOf(O);this.listeners[c].splice(L,1),this.listeners[c].length||this.removeWindowListener(this.windowListeners[c])}addWindowListener(c){window.addEventListener(c.windowEventName,c.handler),c.registered=!0}removeWindowListener(c){c&&(window.removeEventListener(c.windowEventName,c.handler),c.registered=!1)}sendRetainedArgumentsForEvent(c){const O=this.retainedEventArguments[c];O&&(delete this.retainedEventArguments[c],O.forEach(u=>{this.notifyListeners(c,u)}))}}const WA=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),xA=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class NT extends ES{async getCookies(){const c=document.cookie,O={};return c.split(";").forEach(u=>{if(u.length<=0)return;let[L,p]=u.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");L=xA(L).trim(),p=xA(p).trim(),O[L]=p}),O}async setCookie(c){try{const O=WA(c.key),u=WA(c.value),L=`; expires=${(c.expires||"").replace("expires=","")}`,p=(c.path||"/").replace("path=",""),B=c.url!=null&&c.url.length>0?`domain=${c.url}`:"";document.cookie=`${O}=${u||""}${L}; path=${p}; ${B};`}catch(O){return Promise.reject(O)}}async deleteCookie(c){try{document.cookie=`${c.key}=; Max-Age=0`}catch(O){return Promise.reject(O)}}async clearCookies(){try{const c=document.cookie.split(";")||[];for(const O of c)document.cookie=O.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(c){return Promise.reject(c)}}async clearAllCookies(){try{await this.clearCookies()}catch(c){return Promise.reject(c)}}}Hs("CapacitorCookies",{web:()=>new NT});const CT=async s=>new Promise((c,O)=>{const u=new FileReader;u.onload=()=>{const L=u.result;c(L.indexOf(",")>=0?L.split(",")[1]:L)},u.onerror=L=>O(L),u.readAsDataURL(s)}),IT=(s={})=>{const c=Object.keys(s);return Object.keys(s).map(L=>L.toLocaleLowerCase()).reduce((L,p,B)=>(L[p]=s[c[B]],L),{})},LT=(s,c=!0)=>s?Object.entries(s).reduce((u,L)=>{const[p,B]=L;let P,y;return Array.isArray(B)?(y="",B.forEach(C=>{P=c?encodeURIComponent(C):C,y+=`${p}=${P}&`}),y.slice(0,-1)):(P=c?encodeURIComponent(B):B,y=`${p}=${P}`),`${u}&${y}`},"").substr(1):null,hT=(s,c={})=>{const O=Object.assign({method:s.method||"GET",headers:s.headers},c),L=IT(s.headers)["content-type"]||"";if(typeof s.data=="string")O.body=s.data;else if(L.includes("application/x-www-form-urlencoded")){const p=new URLSearchParams;for(const[B,P]of Object.entries(s.data||{}))p.set(B,P);O.body=p.toString()}else if(L.includes("multipart/form-data")||s.data instanceof FormData){const p=new FormData;if(s.data instanceof FormData)s.data.forEach((P,y)=>{p.append(y,P)});else for(const P of Object.keys(s.data))p.append(P,s.data[P]);O.body=p;const B=new Headers(O.headers);B.delete("content-type"),O.headers=B}else(L.includes("application/json")||typeof s.data=="object")&&(O.body=JSON.stringify(s.data));return O};class mT extends ES{async request(c){const O=hT(c,c.webFetchExtra),u=LT(c.params,c.shouldEncodeUrlParams),L=u?`${c.url}?${u}`:c.url,p=await fetch(L,O),B=p.headers.get("content-type")||"";let{responseType:P="text"}=p.ok?c:{};B.includes("application/json")&&(P="json");let y,C;switch(P){case"arraybuffer":case"blob":C=await p.blob(),y=await CT(C);break;case"json":y=await p.json();break;case"document":case"text":default:y=await p.text()}const v={};return p.headers.forEach((H,U)=>{v[U]=H}),{data:y,headers:v,status:p.status,url:p.url}}async get(c){return this.request(Object.assign(Object.assign({},c),{method:"GET"}))}async post(c){return this.request(Object.assign(Object.assign({},c),{method:"POST"}))}async put(c){return this.request(Object.assign(Object.assign({},c),{method:"PUT"}))}async patch(c){return this.request(Object.assign(Object.assign({},c),{method:"PATCH"}))}async delete(c){return this.request(Object.assign(Object.assign({},c),{method:"DELETE"}))}}Hs("CapacitorHttp",{web:()=>new mT});var _A;(function(s){s.General="General",s.ParentalGuidance="ParentalGuidance",s.Teen="Teen",s.MatureAudience="MatureAudience"})(_A||(_A={}));var jA;(function(s){s.SizeChanged="bannerAdSizeChanged",s.Loaded="bannerAdLoaded",s.FailedToLoad="bannerAdFailedToLoad",s.Opened="bannerAdOpened",s.Closed="bannerAdClosed",s.AdImpression="bannerAdImpression"})(jA||(jA={}));var JA;(function(s){s.TOP_CENTER="TOP_CENTER",s.CENTER="CENTER",s.BOTTOM_CENTER="BOTTOM_CENTER"})(JA||(JA={}));var ZA;(function(s){s.BANNER="BANNER",s.FULL_BANNER="FULL_BANNER",s.LARGE_BANNER="LARGE_BANNER",s.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",s.LEADERBOARD="LEADERBOARD",s.ADAPTIVE_BANNER="ADAPTIVE_BANNER",s.SMART_BANNER="SMART_BANNER"})(ZA||(ZA={}));var XA;(function(s){s.Loaded="interstitialAdLoaded",s.FailedToLoad="interstitialAdFailedToLoad",s.Showed="interstitialAdShowed",s.FailedToShow="interstitialAdFailedToShow",s.Dismissed="interstitialAdDismissed"})(XA||(XA={}));var QA;(function(s){s.Loaded="onRewardedInterstitialAdLoaded",s.FailedToLoad="onRewardedInterstitialAdFailedToLoad",s.Showed="onRewardedInterstitialAdShowed",s.FailedToShow="onRewardedInterstitialAdFailedToShow",s.Dismissed="onRewardedInterstitialAdDismissed",s.Rewarded="onRewardedInterstitialAdReward"})(QA||(QA={}));var qA;(function(s){s.Loaded="onRewardedVideoAdLoaded",s.FailedToLoad="onRewardedVideoAdFailedToLoad",s.Showed="onRewardedVideoAdShowed",s.FailedToShow="onRewardedVideoAdFailedToShow",s.Dismissed="onRewardedVideoAdDismissed",s.Rewarded="onRewardedVideoAdReward"})(qA||(qA={}));var $A;(function(s){s.NOT_REQUIRED="NOT_REQUIRED",s.OBTAINED="OBTAINED",s.REQUIRED="REQUIRED",s.UNKNOWN="UNKNOWN"})($A||($A={}));var eS;(function(s){s[s.DISABLED=0]="DISABLED",s[s.EEA=1]="EEA",s[s.NOT_EEA=2]="NOT_EEA",s[s.US=3]="US",s[s.OTHER=4]="OTHER"})(eS||(eS={}));const qi=Hs("AdMob",{web:()=>Jt(()=>import("./web-88WXAl_i.js"),[]).then(s=>new s.AdMobWeb)}),gT=Ka.lazy(()=>Jt(()=>import("./Level1_Standard-DrD-yWzs.js"),__vite__mapDeps([0,1]))),MT=Ka.lazy(()=>Jt(()=>import("./Level2_Filter-1DcF9k5W.js"),__vite__mapDeps([2,1]))),DT=Ka.lazy(()=>Jt(()=>import("./Level1_Emoji-S3fC_r9E.js"),__vite__mapDeps([3,1]))),yT=Ka.lazy(()=>Jt(()=>import("./Level3_Cascading-CUXvw6pA.js"),__vite__mapDeps([4,1]))),pT=Ka.lazy(()=>Jt(()=>import("./Level4_Translations-BdZBo0Eg.js"),__vite__mapDeps([5,1]))),HT=Ka.lazy(()=>Jt(()=>import("./Level5_Group-DqOCLQ0k.js"),__vite__mapDeps([6,1]))),aS={APP_ID:"ca-app-pub-4096368901415767~5414939789",BANNER_ID:"ca-app-pub-4096368901415767/2019330695",INTERSTITIAL_ID:"ca-app-pub-4096368901415767/1153913539"};class BT extends Ka.Component{constructor(c){super(c),this.state={hasError:!1},this.props=c}static getDerivedStateFromError(c){return{hasError:!0}}componentDidCatch(c,O){console.error("Game crashed:",c,O)}render(){return this.state.hasError?f.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center relative z-50",children:[f.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"Something went wrong."}),f.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform uppercase",children:"Reload Game"})]}):this.props.children}}const vl=()=>f.jsx("div",{className:"flex items-center justify-center h-full w-full",children:f.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"})}),Ds={[w.CLASSIC]:30,[w.LEVEL_3_INFINITE]:15,[w.LEVEL_5_GROUP]:15,[w.LEVEL_SYNONYMS]:10,[w.LEVEL_TRANSLATION]:10,[w.LEVEL_EMOJI]:10,[w.LEVEL_4_THEMED]:5,[w.LEVEL_2_FILTER]:5},UT=()=>{const[s,c]=le.useState(w.MENU),[O,u]=le.useState(1),[L,p]=le.useState([]),[B,P]=le.useState(!1),[y,C]=le.useState(!1),[v,H]=le.useState(!1),[U,W]=le.useState(!0),[q,J]=le.useState(!1),[F,b]=le.useState(!1),[Z,te]=le.useState([]),[ne,ea]=le.useState(()=>{try{return localStorage.getItem("wpm_debug_mode")==="true"}catch{return!1}}),[Be,ee]=le.useState(()=>{try{const G=localStorage.getItem("wpm_mode_history");return G?JSON.parse(G):[]}catch{return[]}}),[Ee,Le]=le.useState([w.CLASSIC,w.LEVEL_3_INFINITE,w.LEVEL_4_THEMED,w.LEVEL_5_GROUP,w.LEVEL_EMOJI,w.LEVEL_SYNONYMS,w.LEVEL_TRANSLATION,w.LEVEL_2_FILTER]),ke=le.useMemo(()=>iS(),[]),Ue=le.useMemo(()=>oS(),[]),me=le.useMemo(()=>nS(rS),[]);async function be(){try{await qi.initialize({})}catch(G){console.error("AdMob initialize failed",G)}}async function qe(){const G={adId:aS.BANNER_ID,adSize:"BANNER",position:"BOTTOM_CENTER",margin:0};try{await qi.showBanner(G),console.log("Banner ad is showing")}catch(z){console.error("Error showing banner ad:",z)}}le.useEffect(()=>{async function G(){await be(),await qe()}G()},[]),le.useEffect(()=>{p($i()),u(qO())},[]),le.useEffect(()=>{localStorage.setItem("wpm_debug_mode",ne.toString())},[ne]),le.useEffect(()=>{localStorage.setItem("wpm_mode_history",JSON.stringify(Be))},[Be]);const Ve=G=>{if(G.length<2)return w.CLASSIC;const z=Ee.filter(Pe=>Ds[Pe]!==void 0);if(z.length===0)return w.CLASSIC;const X=Pe=>Pe===w.CLASSIC||Pe===w.LEVEL_4_THEMED||Pe===w.LEVEL_SYNONYMS||Pe===w.LEVEL_TRANSLATION,Ae=Pe=>[w.LEVEL_3_INFINITE,w.LEVEL_5_GROUP,w.LEVEL_EMOJI,w.LEVEL_2_FILTER].includes(Pe),We=G[G.length-1],pt=G.slice(-2).filter(Pe=>X(Pe)).length>=2;if(We&&Ae(We)&&!pt)return w.CLASSIC;let ba=z;pt&&(ba=z.filter(Pe=>!X(Pe))),ba.length===0&&(ba=z);let Yl=0;ba.forEach(Pe=>Yl+=Ds[Pe]||0);let Pa=Math.random()*Yl;for(const Pe of ba){const Xt=Ds[Pe]||0;if(Pa<Xt)return Pe;Pa-=Xt}return ba[0]},m=G=>!eT(),Y=()=>{J(!1),aT()},j=async()=>{try{await qi.prepareInterstitial({adId:aS.INTERSTITIAL_ID,isTesting:!0}),await qi.showInterstitial()}catch(G){console.error("Interstitial Ad Error",G)}},ue=G=>{const z=O+1;u(z),$O(z);const X=Ve([...Be,s]);ee(Ae=>[...Ae,s]),c(X),z%3===0&&j()},Te=()=>{const G=Ua.toggleMusic();P(G)},S=()=>{window.confirm("ARE YOU SURE? THIS WILL RESET ALL PROGRESS AND STATS.")&&(localStorage.clear(),window.location.reload())},M=G=>{te(G),C(!0)},K=()=>{if(F)return f.jsx(RT,{onExit:()=>b(!1)});switch(s){case w.MENU:return f.jsx(lT,{onStart:()=>{const G=Ve(Be);c(G),m()&&J(!0)},onSettings:()=>C(!0),onStats:()=>H(!0),lastLevel:O});case w.CLASSIC:case w.LEVEL_4_THEMED:case w.LEVEL_SYNONYMS:case w.LEVEL_RHYMES:case w.SPEED_ROUND:return f.jsx(le.Suspense,{fallback:f.jsx(vl,{}),children:f.jsx(gT,{csvData:s===w.LEVEL_SYNONYMS?ke:s===w.LEVEL_RHYMES?Ue:L,mode:s,levelIndex:O,onComplete:ue,onExit:()=>c(w.MENU),hintsEnabled:U,onOpenSettings:M,debugMode:ne})});case w.LEVEL_TRANSLATION:return f.jsx(le.Suspense,{fallback:f.jsx(vl,{}),children:f.jsx(pT,{csvData:me,levelIndex:O,onComplete:ue,onExit:()=>c(w.MENU),hintsEnabled:U,onOpenSettings:M,debugMode:ne})});case w.LEVEL_2_FILTER:return f.jsx(le.Suspense,{fallback:f.jsx(vl,{}),children:f.jsx(MT,{csvData:L,levelIndex:O,onComplete:ue,onGameOver:()=>c(w.MENU),onExit:()=>c(w.MENU),hintsEnabled:U,debugMode:ne,onOpenSettings:M})});case w.LEVEL_EMOJI:return f.jsx(le.Suspense,{fallback:f.jsx(vl,{}),children:f.jsx(DT,{levelIndex:O,onComplete:ue,onExit:()=>c(w.MENU),hintsEnabled:U,debugMode:ne,onOpenSettings:M})});case w.LEVEL_3_INFINITE:return f.jsx(le.Suspense,{fallback:f.jsx(vl,{}),children:f.jsx(yT,{csvData:L,levelIndex:O,onComplete:ue,onExit:()=>c(w.MENU),hintsEnabled:U,debugMode:ne,onOpenSettings:M})});case w.LEVEL_5_GROUP:return f.jsx(le.Suspense,{fallback:f.jsx(vl,{}),children:f.jsx(HT,{csvData:L,levelIndex:O,onComplete:ue,onExit:()=>c(w.MENU),hintsEnabled:U,debugMode:ne,onOpenSettings:M})});default:return null}};return f.jsx(BT,{children:f.jsxs("div",{className:"fixed inset-0 bg-black text-white font-sans overflow-hidden flex flex-col",children:[f.jsx("div",{className:"flex-1 relative overflow-hidden",children:K()}),f.jsx("footer",{className:"w-full bg-black shrink-0 border-t border-zinc-900 h-[60px] flex items-center justify-center relative z-50",children:f.jsx("div",{className:"text-[8px] text-zinc-800 font-oswald tracking-[0.3em] uppercase opacity-20",children:"Sponsored Content"})}),y&&f.jsx(nT,{isOpen:y,onClose:()=>{C(!1),te([])},onMainMenu:()=>{C(!1),c(w.MENU)},isMusicOn:B,toggleMusic:Te,enabledModes:Ee,toggleMode:G=>{Le(z=>z.includes(G)?z.filter(X=>X!==G):[...z,G])},hintsEnabled:U,setHintsEnabled:W,onShowTutorial:()=>{C(!1),J(!0)},onResetProgress:S,debugMode:ne,setDebugMode:ea,categories:Z}),v&&f.jsx(rT,{onClose:()=>H(!1)}),q&&f.jsx(AT,{mode:s,onComplete:Y})]})})},AS=document.getElementById("root");if(!AS)throw new Error("Could not find root element to mount to");const bT=_O.createRoot(AS);bT.render(f.jsx(Ka.StrictMode,{children:f.jsx(UT,{})}));export{$A as A,PT as E,w as G,GT as T,ES as W,FT as a,Ua as b,vT as c,uT as d,KT as e,oT as f,YT as g,f as j,le as r,wT as u};
