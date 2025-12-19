const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Level1_Standard-DrD-yWzs-CBEkd90D.js","assets/DebugMenu-BlYmMh_k-BePBMNzk.js","assets/Level2_Filter-1DcF9k5W-BOM_0fRl.js","assets/Level1_Emoji-S3fC_r9E-Dbkx9PHy.js","assets/Level3_Cascading-CUXvw6pA-ChNrJM5V.js","assets/Level4_Translations-BdZBo0Eg-DdYbhYBU.js","assets/Level5_Group-DqOCLQ0k-CXJ7rF8D.js"])))=>i.map(i=>d[i]);
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const D of b.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&u(D)}).observe(document,{childList:!0,subtree:!0});function A(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(p){if(p.ep)return;p.ep=!0;const b=A(p);fetch(p.href,b)}})();const FR="modulepreload",KR=function(s){return"/"+s},bd={},Zt=function(c,A,u){let p=Promise.resolve();if(A&&A.length>0){let D=function(h){return Promise.all(h.map(B=>Promise.resolve(B).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const U=document.querySelector("meta[property=csp-nonce]"),P=(U==null?void 0:U.nonce)||(U==null?void 0:U.getAttribute("nonce"));p=D(A.map(h=>{if(h=KR(h),h in bd)return;bd[h]=!0;const B=h.endsWith(".css"),y=B?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const H=document.createElement("link");if(H.rel=B?"stylesheet":FR,B||(H.as="script"),H.crossOrigin="",H.href=h,P&&H.setAttribute("nonce",P),document.head.appendChild(H),B)return new Promise((W,$)=>{H.addEventListener("load",W),H.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${h}`)))})}))}function b(D){const U=new Event("vite:preloadError",{cancelable:!0});if(U.payload=D,window.dispatchEvent(U),!U.defaultPrevented)throw D}return p.then(D=>{for(const U of D||[])U.status==="rejected"&&b(U.reason);return c().catch(b)})},Qt=(s,c=Qt,A=c.f||(c.f=["assets/Level1_Standard-DrD-yWzs.js","assets/DebugMenu-BlYmMh_k.js","assets/Level2_Filter-1DcF9k5W.js","assets/Level1_Emoji-S3fC_r9E.js","assets/Level3_Cascading-CUXvw6pA.js","assets/Level4_Translations-BdZBo0Eg.js","assets/Level5_Group-DqOCLQ0k.js"]))=>s.map(u=>A[u]);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))A(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&A(b)}).observe(document,{childList:!0,subtree:!0});function c(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function A(u){if(u.ep)return;u.ep=!0;const p=c(u);fetch(u.href,p)}})();function oS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Md={exports:{}},va={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Dd;function YR(){if(Dd)return va;Dd=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function A(u,p,b){var D=null;if(b!==void 0&&(D=""+b),p.key!==void 0&&(D=""+p.key),"key"in p){b={};for(var U in p)U!=="key"&&(b[U]=p[U])}else b=p;return p=b.ref,{$$typeof:s,type:u,key:D,ref:p!==void 0?p:null,props:b}}return va.Fragment=c,va.jsx=A,va.jsxs=A,va}var vd;function xR(){return vd||(vd=1,Md.exports=YR()),Md.exports}var T=xR(),Bd={exports:{}},Q={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Hd;function WR(){if(Hd)return Q;Hd=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),H=Symbol.iterator;function W(S){return S===null||typeof S!="object"?null:(S=H&&S[H]||S["@@iterator"],typeof S=="function"?S:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,v={};function z(S,g,F){this.props=S,this.context=g,this.refs=v,this.updater=F||$}z.prototype.isReactComponent={},z.prototype.setState=function(S,g){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,g,"setState")},z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Ae(){}Ae.prototype=z.prototype;function ie(S,g,F){this.props=S,this.context=g,this.refs=v,this.updater=F||$}var Ne=ie.prototype=new Ae;Ne.constructor=ie,k(Ne,z.prototype),Ne.isPureReactComponent=!0;var en=Array.isArray;function De(){}var q={H:null,A:null,T:null,S:null},ue=Object.prototype.hasOwnProperty;function he(S,g,F){var G=F.ref;return{$$typeof:s,type:S,key:g,ref:G!==void 0?G:null,props:F}}function Ye(S,g){return he(S.type,g,S.props)}function ve(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function Ce(S){var g={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(F){return g[F]})}var Be=/\/+/g;function $e(S,g){return typeof S=="object"&&S!==null&&S.key!=null?Ce(""+S.key):g.toString(36)}function We(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(De,De):(S.status="pending",S.then(function(g){S.status==="pending"&&(S.status="fulfilled",S.value=g)},function(g){S.status==="pending"&&(S.status="rejected",S.reason=g)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function C(S,g,F,G,V){var Z=typeof S;(Z==="undefined"||Z==="boolean")&&(S=null);var ce=!1;if(S===null)ce=!0;else switch(Z){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(S.$$typeof){case s:case c:ce=!0;break;case B:return ce=S._init,C(ce(S._payload),g,F,G,V)}}if(ce)return V=V(S),ce=G===""?"."+$e(S,0):G,en(V)?(F="",ce!=null&&(F=ce.replace(Be,"$&/")+"/"),C(V,g,F,"",function(In){return In})):V!=null&&(ve(V)&&(V=Ye(V,F+(V.key==null||S&&S.key===V.key?"":(""+V.key).replace(Be,"$&/")+"/")+ce)),g.push(V)),1;ce=0;var Ve=G===""?".":G+":";if(en(S))for(var ye=0;ye<S.length;ye++)G=S[ye],Z=Ve+$e(G,ye),ce+=C(G,g,F,Z,V);else if(ye=W(S),typeof ye=="function")for(S=ye.call(S),ye=0;!(G=S.next()).done;)G=G.value,Z=Ve+$e(G,ye++),ce+=C(G,g,F,Z,V);else if(Z==="object"){if(typeof S.then=="function")return C(We(S),g,F,G,V);throw g=String(S),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}return ce}function w(S,g,F){if(S==null)return S;var G=[],V=0;return C(S,G,"","",function(Z){return g.call(F,Z,V++)}),G}function j(S){if(S._status===-1){var g=S._result;g=g(),g.then(function(F){(S._status===0||S._status===-1)&&(S._status=1,S._result=F)},function(F){(S._status===0||S._status===-1)&&(S._status=2,S._result=F)}),S._status===-1&&(S._status=0,S._result=g)}if(S._status===1)return S._result.default;throw S._result}var le=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(g))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Re={map:w,forEach:function(S,g,F){w(S,function(){g.apply(this,arguments)},F)},count:function(S){var g=0;return w(S,function(){g++}),g},toArray:function(S){return w(S,function(g){return g})||[]},only:function(S){if(!ve(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return Q.Activity=y,Q.Children=Re,Q.Component=z,Q.Fragment=A,Q.Profiler=p,Q.PureComponent=ie,Q.StrictMode=u,Q.Suspense=P,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Q.__COMPILER_RUNTIME={__proto__:null,c:function(S){return q.H.useMemoCache(S)}},Q.cache=function(S){return function(){return S.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(S,g,F){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var G=k({},S.props),V=S.key;if(g!=null)for(Z in g.key!==void 0&&(V=""+g.key),g)!ue.call(g,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&g.ref===void 0||(G[Z]=g[Z]);var Z=arguments.length-2;if(Z===1)G.children=F;else if(1<Z){for(var ce=Array(Z),Ve=0;Ve<Z;Ve++)ce[Ve]=arguments[Ve+2];G.children=ce}return he(S.type,V,G)},Q.createContext=function(S){return S={$$typeof:D,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:b,_context:S},S},Q.createElement=function(S,g,F){var G,V={},Z=null;if(g!=null)for(G in g.key!==void 0&&(Z=""+g.key),g)ue.call(g,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(V[G]=g[G]);var ce=arguments.length-2;if(ce===1)V.children=F;else if(1<ce){for(var Ve=Array(ce),ye=0;ye<ce;ye++)Ve[ye]=arguments[ye+2];V.children=Ve}if(S&&S.defaultProps)for(G in ce=S.defaultProps,ce)V[G]===void 0&&(V[G]=ce[G]);return he(S,Z,V)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(S){return{$$typeof:U,render:S}},Q.isValidElement=ve,Q.lazy=function(S){return{$$typeof:B,_payload:{_status:-1,_result:S},_init:j}},Q.memo=function(S,g){return{$$typeof:h,type:S,compare:g===void 0?null:g}},Q.startTransition=function(S){var g=q.T,F={};q.T=F;try{var G=S(),V=q.S;V!==null&&V(F,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(De,le)}catch(Z){le(Z)}finally{g!==null&&F.types!==null&&(g.types=F.types),q.T=g}},Q.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Q.use=function(S){return q.H.use(S)},Q.useActionState=function(S,g,F){return q.H.useActionState(S,g,F)},Q.useCallback=function(S,g){return q.H.useCallback(S,g)},Q.useContext=function(S){return q.H.useContext(S)},Q.useDebugValue=function(){},Q.useDeferredValue=function(S,g){return q.H.useDeferredValue(S,g)},Q.useEffect=function(S,g){return q.H.useEffect(S,g)},Q.useEffectEvent=function(S){return q.H.useEffectEvent(S)},Q.useId=function(){return q.H.useId()},Q.useImperativeHandle=function(S,g,F){return q.H.useImperativeHandle(S,g,F)},Q.useInsertionEffect=function(S,g){return q.H.useInsertionEffect(S,g)},Q.useLayoutEffect=function(S,g){return q.H.useLayoutEffect(S,g)},Q.useMemo=function(S,g){return q.H.useMemo(S,g)},Q.useOptimistic=function(S,g){return q.H.useOptimistic(S,g)},Q.useReducer=function(S,g,F){return q.H.useReducer(S,g,F)},Q.useRef=function(S){return q.H.useRef(S)},Q.useState=function(S){return q.H.useState(S)},Q.useSyncExternalStore=function(S,g,F){return q.H.useSyncExternalStore(S,g,F)},Q.useTransition=function(){return q.H.useTransition()},Q.version="19.2.3",Q}var Ud;function ys(){return Ud||(Ud=1,Bd.exports=WR()),Bd.exports}var ne=ys();const Kn=oS(ne);var Os={exports:{}},Ba={},kd={exports:{}},Gd={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var wd;function VR(){return wd||(wd=1,(function(s){function c(C,w){var j=C.length;C.push(w);e:for(;0<j;){var le=j-1>>>1,Re=C[le];if(0<p(Re,w))C[le]=w,C[j]=Re,j=le;else break e}}function A(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var w=C[0],j=C.pop();if(j!==w){C[0]=j;e:for(var le=0,Re=C.length,S=Re>>>1;le<S;){var g=2*(le+1)-1,F=C[g],G=g+1,V=C[G];if(0>p(F,j))G<Re&&0>p(V,F)?(C[le]=V,C[G]=j,le=G):(C[le]=F,C[g]=j,le=g);else if(G<Re&&0>p(V,j))C[le]=V,C[G]=j,le=G;else break e}}return w}function p(C,w){var j=C.sortIndex-w.sortIndex;return j!==0?j:C.id-w.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;s.unstable_now=function(){return b.now()}}else{var D=Date,U=D.now();s.unstable_now=function(){return D.now()-U}}var P=[],h=[],B=1,y=null,H=3,W=!1,$=!1,k=!1,v=!1,z=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function Ne(C){for(var w=A(h);w!==null;){if(w.callback===null)u(h);else if(w.startTime<=C)u(h),w.sortIndex=w.expirationTime,c(P,w);else break;w=A(h)}}function en(C){if(k=!1,Ne(C),!$)if(A(P)!==null)$=!0,De||(De=!0,Ce());else{var w=A(h);w!==null&&We(en,w.startTime-C)}}var De=!1,q=-1,ue=5,he=-1;function Ye(){return v?!0:!(s.unstable_now()-he<ue)}function ve(){if(v=!1,De){var C=s.unstable_now();he=C;var w=!0;try{e:{$=!1,k&&(k=!1,Ae(q),q=-1),W=!0;var j=H;try{n:{for(Ne(C),y=A(P);y!==null&&!(y.expirationTime>C&&Ye());){var le=y.callback;if(typeof le=="function"){y.callback=null,H=y.priorityLevel;var Re=le(y.expirationTime<=C);if(C=s.unstable_now(),typeof Re=="function"){y.callback=Re,Ne(C),w=!0;break n}y===A(P)&&u(P),Ne(C)}else u(P);y=A(P)}if(y!==null)w=!0;else{var S=A(h);S!==null&&We(en,S.startTime-C),w=!1}}break e}finally{y=null,H=j,W=!1}w=void 0}}finally{w?Ce():De=!1}}}var Ce;if(typeof ie=="function")Ce=function(){ie(ve)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,$e=Be.port2;Be.port1.onmessage=ve,Ce=function(){$e.postMessage(null)}}else Ce=function(){z(ve,0)};function We(C,w){q=z(function(){C(s.unstable_now())},w)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return H},s.unstable_next=function(C){switch(H){case 1:case 2:case 3:var w=3;break;default:w=H}var j=H;H=w;try{return C()}finally{H=j}},s.unstable_requestPaint=function(){v=!0},s.unstable_runWithPriority=function(C,w){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=H;H=C;try{return w()}finally{H=j}},s.unstable_scheduleCallback=function(C,w,j){var le=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?le+j:le):j=le,C){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=j+Re,C={id:B++,callback:w,priorityLevel:C,startTime:j,expirationTime:Re,sortIndex:-1},j>le?(C.sortIndex=j,c(h,C),A(P)===null&&C===A(h)&&(k?(Ae(q),q=-1):k=!0,We(en,j-le))):(C.sortIndex=Re,c(P,C),$||W||($=!0,De||(De=!0,Ce()))),C},s.unstable_shouldYield=Ye,s.unstable_wrapCallback=function(C){var w=H;return function(){var j=H;H=w;try{return C.apply(this,arguments)}finally{H=j}}}})(Gd)),Gd}var Fd;function zR(){return Fd||(Fd=1,kd.exports=VR()),kd.exports}var ps={exports:{}},qe={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Kd;function _R(){if(Kd)return qe;Kd=1;var s=ys();function c(P){var h="https://react.dev/errors/"+P;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)h+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+P+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var u={d:{f:A,r:function(){throw Error(c(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},p=Symbol.for("react.portal");function b(P,h,B){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:y==null?null:""+y,children:P,containerInfo:h,implementation:B}}var D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function U(P,h){if(P==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,qe.createPortal=function(P,h){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return b(P,h,null,B)},qe.flushSync=function(P){var h=D.T,B=u.p;try{if(D.T=null,u.p=2,P)return P()}finally{D.T=h,u.p=B,u.d.f()}},qe.preconnect=function(P,h){typeof P=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(P,h))},qe.prefetchDNS=function(P){typeof P=="string"&&u.d.D(P)},qe.preinit=function(P,h){if(typeof P=="string"&&h&&typeof h.as=="string"){var B=h.as,y=U(B,h.crossOrigin),H=typeof h.integrity=="string"?h.integrity:void 0,W=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;B==="style"?u.d.S(P,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:H,fetchPriority:W}):B==="script"&&u.d.X(P,{crossOrigin:y,integrity:H,fetchPriority:W,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},qe.preinitModule=function(P,h){if(typeof P=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var B=U(h.as,h.crossOrigin);u.d.M(P,{crossOrigin:B,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(P)},qe.preload=function(P,h){if(typeof P=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var B=h.as,y=U(B,h.crossOrigin);u.d.L(P,B,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},qe.preloadModule=function(P,h){if(typeof P=="string")if(h){var B=U(h.as,h.crossOrigin);u.d.m(P,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:B,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(P)},qe.requestFormReset=function(P){u.d.r(P)},qe.unstable_batchedUpdates=function(P,h){return P(h)},qe.useFormState=function(P,h,B){return D.H.useFormState(P,h,B)},qe.useFormStatus=function(){return D.H.useHostTransitionStatus()},qe.version="19.2.3",qe}var Yd;function jR(){if(Yd)return ps.exports;Yd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),ps.exports=_R(),ps.exports}/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var xd;function JR(){if(xd)return Ba;xd=1;var s=zR(),c=ys(),A=jR();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function D(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function P(e){if(b(e)!==e)throw Error(u(188))}function h(e){var n=e.alternate;if(!n){if(n=b(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return P(a),e;if(o===r)return P(a),n;o=o.sibling}throw Error(u(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,l=a.child;l;){if(l===t){i=!0,t=a,r=o;break}if(l===r){i=!0,r=a,t=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===t){i=!0,t=o,r=a;break}if(l===r){i=!0,r=o,t=a;break}l=l.sibling}if(!i)throw Error(u(189))}}if(t.alternate!==r)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function B(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=B(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,H=Symbol.for("react.element"),W=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),Ae=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),en=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Symbol.for("react.client.reference");function $e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case z:return"Profiler";case v:return"StrictMode";case en:return"Suspense";case De:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case ie:return e.displayName||"Context";case Ae:return(e._context.displayName||"Context")+".Consumer";case Ne:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return n=e.displayName||null,n!==null?n:$e(e.type)||"Memo";case ue:n=e._payload,e=e._init;try{return $e(e(n))}catch{}}return null}var We=Array.isArray,C=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},le=[],Re=-1;function S(e){return{current:e}}function g(e){0>Re||(e.current=le[Re],le[Re]=null,Re--)}function F(e,n){Re++,le[Re]=e.current,e.current=n}var G=S(null),V=S(null),Z=S(null),ce=S(null);function Ve(e,n){switch(F(Z,n),F(V,e),F(G,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?$E(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=$E(n),e=qE(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}g(G),F(G,e)}function ye(){g(G),g(V),g(Z)}function In(e){e.memoizedState!==null&&F(ce,e);var n=G.current,t=qE(n,e.type);n!==t&&(F(V,e),F(G,t))}function Mt(e){V.current===e&&(g(G),g(V)),ce.current===e&&(g(ce),Pa._currentValue=j)}var $t,ke;function Un(e){if($t===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ke=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ke}var ei=!1;function ni(e,n){if(!e||ei)return"";ei=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(m){var I=m}Reflect.construct(e,[],M)}else{try{M.call()}catch(m){I=m}e.call(M.prototype)}}else{try{throw Error()}catch(m){I=m}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(m){if(m&&I&&typeof m.stack=="string")return[m.stack,I.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var E=i.split(`
`),O=l.split(`
`);for(a=r=0;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;for(;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;if(r===E.length||a===O.length)for(r=E.length-1,a=O.length-1;1<=r&&0<=a&&E[r]!==O[a];)a--;for(;1<=r&&0<=a;r--,a--)if(E[r]!==O[a]){if(r!==1||a!==1)do if(r--,a--,0>a||E[r]!==O[a]){var N=`
`+E[r].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=r&&0<=a);break}}}finally{ei=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Un(t):""}function fS(e,n){switch(e.tag){case 26:case 27:case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return e.child!==n&&n!==null?Un("Suspense Fallback"):Un("Suspense");case 19:return Un("SuspenseList");case 0:case 15:return ni(e.type,!1);case 11:return ni(e.type.render,!1);case 1:return ni(e.type,!0);case 31:return Un("Activity");default:return""}}function bs(e){try{var n="",t=null;do n+=fS(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ti=Object.prototype.hasOwnProperty,ri=s.unstable_scheduleCallback,ai=s.unstable_cancelCallback,OS=s.unstable_shouldYield,pS=s.unstable_requestPaint,cn=s.unstable_now,TS=s.unstable_getCurrentPriorityLevel,Ms=s.unstable_ImmediatePriority,Ds=s.unstable_UserBlockingPriority,Ha=s.unstable_NormalPriority,IS=s.unstable_LowPriority,vs=s.unstable_IdlePriority,hS=s.log,mS=s.unstable_setDisableYieldValue,Kr=null,En=null;function ot(e){if(typeof hS=="function"&&mS(e),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(Kr,e)}catch{}}var dn=Math.clz32?Math.clz32:LS,NS=Math.log,CS=Math.LN2;function LS(e){return e>>>=0,e===0?32:31-(NS(e)/CS|0)|0}var Ua=256,ka=262144,Ga=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wa(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=r&134217727;return l!==0?(r=l&~o,r!==0?a=Dt(r):(i&=l,i!==0?a=Dt(i):t||(t=l&~e,t!==0&&(a=Dt(t))))):(l=r&~o,l!==0?a=Dt(l):i!==0?a=Dt(i):t||(t=r&~e,t!==0&&(a=Dt(t)))),a===0?0:n!==0&&n!==a&&(n&o)===0&&(o=a&-a,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:a}function Yr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function gS(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=Ga;return Ga<<=1,(Ga&62914560)===0&&(Ga=4194304),e}function oi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function xr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yS(e,n,t,r,a,o){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var l=e.entanglements,E=e.expirationTimes,O=e.hiddenUpdates;for(t=i&~t;0<t;){var N=31-dn(t),M=1<<N;l[N]=0,E[N]=-1;var I=O[N];if(I!==null)for(O[N]=null,N=0;N<I.length;N++){var m=I[N];m!==null&&(m.lane&=-536870913)}t&=~M}r!==0&&Hs(e,r,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(i&~n))}function Hs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-dn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function Us(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}function ks(e,n){var t=n&-n;return t=(t&42)!==0?1:ii(t),(t&(e.suspendedLanes|n))!==0?0:t}function ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function li(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=w.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function ws(e,n){var t=w.p;try{return w.p=e,n()}finally{w.p=t}}var it=Math.random().toString(36).slice(2),je="__reactFiber$"+it,tn="__reactProps$"+it,qt="__reactContainer$"+it,si="__reactEvents$"+it,PS="__reactListeners$"+it,bS="__reactHandles$"+it,Fs="__reactResources$"+it,Wr="__reactMarker$"+it;function ui(e){delete e[je],delete e[tn],delete e[si],delete e[PS],delete e[bS]}function er(e){var n=e[je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[qt]||t[je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=id(e);e!==null;){if(t=e[je])return t;e=id(e)}return n}e=t,t=e.parentNode}return null}function nr(e){if(e=e[je]||e[qt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Vr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function tr(e){var n=e[Fs];return n||(n=e[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ze(e){e[Wr]=!0}var Ks=new Set,Ys={};function vt(e,n){rr(e,n),rr(e+"Capture",n)}function rr(e,n){for(Ys[e]=n,e=0;e<n.length;e++)Ks.add(n[e])}var MS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xs={},Ws={};function DS(e){return ti.call(Ws,e)?!0:ti.call(xs,e)?!1:MS.test(e)?Ws[e]=!0:(xs[e]=!0,!1)}function Fa(e,n,t){if(DS(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Ka(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Yn(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vS(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ci(e){if(!e._valueTracker){var n=Vs(e)?"checked":"value";e._valueTracker=vS(e,n,""+e[n])}}function zs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var BS=/[\n"\\]/g;function bn(e){return e.replace(BS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ei(e,n,t,r,a,o,i,l){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),n!=null?i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+hn(n)):e.value!==""+hn(n)&&(e.value=""+hn(n)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),n!=null?di(e,i,hn(n)):t!=null?di(e,i,hn(t)):r!=null&&e.removeAttribute("value"),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+hn(l):e.removeAttribute("name")}function _s(e,n,t,r,a,o,i,l){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){ci(e);return}t=t!=null?""+hn(t):"",n=n!=null?""+hn(n):t,l||n===e.value||(e.value=n),e.defaultValue=n}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ci(e)}function di(e,n,t){n==="number"&&Ya(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ar(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+hn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function js(e,n,t){if(n!=null&&(n=""+hn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+hn(t):""}function Js(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(u(92));if(We(r)){if(1<r.length)throw Error(u(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=hn(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),ci(e)}function or(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var HS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zs(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||HS.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Qs(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in n)r=n[a],n.hasOwnProperty(a)&&t[a]!==r&&Zs(e,a,r)}else for(var o in n)n.hasOwnProperty(o)&&Zs(e,o,n[o])}function Si(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var US=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xa(e){return kS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xn(){}var Ai=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ir=null,lr=null;function Xs(e){var n=nr(e);if(n&&(e=n.stateNode)){var t=e[tn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ei(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+bn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=r[tn]||null;if(!a)throw Error(u(90));Ei(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&zs(r)}break e;case"textarea":js(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ar(e,!!t.multiple,n,!1)}}}var fi=!1;function $s(e,n,t){if(fi)return e(n,t);fi=!0;try{var r=e(n);return r}finally{if(fi=!1,(ir!==null||lr!==null)&&(Mo(),ir&&(n=ir,e=lr,lr=ir=null,Xs(n),e)))for(n=0;n<e.length;n++)Xs(e[n])}}function zr(e,n){var t=e.stateNode;if(t===null)return null;var r=t[tn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=!1;if(Wn)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Oi=!1}var lt=null,pi=null,Wa=null;function qs(){if(Wa)return Wa;var e,n=pi,t=n.length,r,a="value"in lt?lt.value:lt.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return Wa=a.slice(e,1<r?1-r:void 0)}function Va(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function za(){return!0}function eu(){return!1}function rn(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?za:eu,this.isPropagationStopped=eu,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),n}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=rn(Bt),jr=y({},Bt,{view:0,detail:0}),GS=rn(jr),Ti,Ii,Jr,ja=y({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ti=e.screenX-Jr.screenX,Ii=e.screenY-Jr.screenY):Ii=Ti=0,Jr=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),nu=rn(ja),wS=y({},ja,{dataTransfer:0}),FS=rn(wS),KS=y({},jr,{relatedTarget:0}),hi=rn(KS),YS=y({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=rn(YS),WS=y({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),VS=rn(WS),zS=y({},Bt,{data:0}),tu=rn(zS),_S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=JS[e])?!!n[e]:!1}function mi(){return ZS}var QS=y({},jr,{key:function(e){if(e.key){var n=_S[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),XS=rn(QS),$S=y({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=rn($S),qS=y({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),eA=rn(qS),nA=y({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),tA=rn(nA),rA=y({},ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=rn(rA),oA=y({},Bt,{newState:0,oldState:0}),iA=rn(oA),lA=[9,13,27,32],Ni=Wn&&"CompositionEvent"in window,Zr=null;Wn&&"documentMode"in document&&(Zr=document.documentMode);var sA=Wn&&"TextEvent"in window&&!Zr,au=Wn&&(!Ni||Zr&&8<Zr&&11>=Zr),ou=" ",iu=!1;function lu(e,n){switch(e){case"keyup":return lA.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function uA(e,n){switch(e){case"compositionend":return su(n);case"keypress":return n.which!==32?null:(iu=!0,ou);case"textInput":return e=n.data,e===ou&&iu?null:e;default:return null}}function cA(e,n){if(sr)return e==="compositionend"||!Ni&&lu(e,n)?(e=qs(),Wa=pi=lt=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return au&&n.locale!=="ko"?null:n.data;default:return null}}var EA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!EA[e.type]:n==="textarea"}function cu(e,n,t,r){ir?lr?lr.push(r):lr=[r]:ir=r,n=Go(n,"onChange"),0<n.length&&(t=new _a("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Qr=null,Xr=null;function dA(e){_E(e,0)}function Ja(e){var n=Vr(e);if(zs(n))return e}function Eu(e,n){if(e==="change")return n}var du=!1;if(Wn){var Ci;if(Wn){var Li="oninput"in document;if(!Li){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),Li=typeof Su.oninput=="function"}Ci=Li}else Ci=!1;du=Ci&&(!document.documentMode||9<document.documentMode)}function Au(){Qr&&(Qr.detachEvent("onpropertychange",Ru),Xr=Qr=null)}function Ru(e){if(e.propertyName==="value"&&Ja(Xr)){var n=[];cu(n,Xr,e,Ri(e)),$s(dA,n)}}function SA(e,n,t){e==="focusin"?(Au(),Qr=n,Xr=t,Qr.attachEvent("onpropertychange",Ru)):e==="focusout"&&Au()}function AA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(Xr)}function RA(e,n){if(e==="click")return Ja(n)}function fA(e,n){if(e==="input"||e==="change")return Ja(n)}function OA(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:OA;function $r(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!ti.call(n,a)||!Sn(e[a],n[a]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,n){var t=fu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fu(t)}}function pu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ya(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ya(e.document)}return n}function gi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var pA=Wn&&"documentMode"in document&&11>=document.documentMode,ur=null,yi=null,qr=null,Pi=!1;function Iu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pi||ur==null||ur!==Ya(r)||(r=ur,"selectionStart"in r&&gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&$r(qr,r)||(qr=r,r=Go(yi,"onSelect"),0<r.length&&(n=new _a("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ur)))}function Ht(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var cr={animationend:Ht("Animation","AnimationEnd"),animationiteration:Ht("Animation","AnimationIteration"),animationstart:Ht("Animation","AnimationStart"),transitionrun:Ht("Transition","TransitionRun"),transitionstart:Ht("Transition","TransitionStart"),transitioncancel:Ht("Transition","TransitionCancel"),transitionend:Ht("Transition","TransitionEnd")},bi={},hu={};Wn&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ut(e){if(bi[e])return bi[e];if(!cr[e])return e;var n=cr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in hu)return bi[e]=n[t];return e}var mu=Ut("animationend"),Nu=Ut("animationiteration"),Cu=Ut("animationstart"),TA=Ut("transitionrun"),IA=Ut("transitionstart"),hA=Ut("transitioncancel"),Lu=Ut("transitionend"),gu=new Map,Mi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mi.push("scrollEnd");function Mn(e,n){gu.set(e,n),vt(n,[e])}var Za=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mn=[],Er=0,Di=0;function Qa(){for(var e=Er,n=Di=Er=0;n<e;){var t=mn[n];mn[n++]=null;var r=mn[n];mn[n++]=null;var a=mn[n];mn[n++]=null;var o=mn[n];if(mn[n++]=null,r!==null&&a!==null){var i=r.pending;i===null?a.next=a:(a.next=i.next,i.next=a),r.pending=a}o!==0&&yu(t,a,o)}}function Xa(e,n,t,r){mn[Er++]=e,mn[Er++]=n,mn[Er++]=t,mn[Er++]=r,Di|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vi(e,n,t,r){return Xa(e,n,t,r),$a(e)}function kt(e,n){return Xa(e,null,null,n),$a(e)}function yu(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var a=!1,o=e.return;o!==null;)o.childLanes|=t,r=o.alternate,r!==null&&(r.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&n!==null&&(a=31-dn(t),e=o.hiddenUpdates,r=e[a],r===null?e[a]=[n]:r.push(n),n.lane=t|536870912),o):null}function $a(e){if(50<ha)throw ha=0,Yl=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var dr={};function mA(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,n,t,r){return new mA(e,n,t,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vn(e,n){var t=e.alternate;return t===null?(t=An(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Pu(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function qa(e,n,t,r,a,o){var i=0;if(r=e,typeof e=="function")Bi(e)&&(i=1);else if(typeof e=="string")i=yR(e,t,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=An(31,t,n,a),e.elementType=he,e.lanes=o,e;case k:return Gt(t.children,a,o,n);case v:i=8,a|=24;break;case z:return e=An(12,t,n,a|2),e.elementType=z,e.lanes=o,e;case en:return e=An(13,t,n,a),e.elementType=en,e.lanes=o,e;case De:return e=An(19,t,n,a),e.elementType=De,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:i=10;break e;case Ae:i=9;break e;case Ne:i=11;break e;case q:i=14;break e;case ue:i=16,r=null;break e}i=29,t=Error(u(130,e===null?"null":typeof e,"")),r=null}return n=An(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function Gt(e,n,t,r){return e=An(7,e,r,n),e.lanes=t,e}function Hi(e,n,t){return e=An(6,e,null,n),e.lanes=t,e}function bu(e){var n=An(18,null,null,0);return n.stateNode=e,n}function Ui(e,n,t){return n=An(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Mu=new WeakMap;function Nn(e,n){if(typeof e=="object"&&e!==null){var t=Mu.get(e);return t!==void 0?t:(n={value:e,source:n,stack:bs(n)},Mu.set(e,n),n)}return{value:e,source:n,stack:bs(n)}}var Sr=[],Ar=0,eo=null,ea=0,Cn=[],Ln=0,st=null,kn=1,Gn="";function zn(e,n){Sr[Ar++]=ea,Sr[Ar++]=eo,eo=e,ea=n}function Du(e,n,t){Cn[Ln++]=kn,Cn[Ln++]=Gn,Cn[Ln++]=st,st=e;var r=kn;e=Gn;var a=32-dn(r)-1;r&=~(1<<a),t+=1;var o=32-dn(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,kn=1<<32-dn(n)+a|t<<a|r,Gn=o+e}else kn=1<<o|t<<a|r,Gn=e}function ki(e){e.return!==null&&(zn(e,1),Du(e,1,0))}function Gi(e){for(;e===eo;)eo=Sr[--Ar],Sr[Ar]=null,ea=Sr[--Ar],Sr[Ar]=null;for(;e===st;)st=Cn[--Ln],Cn[Ln]=null,Gn=Cn[--Ln],Cn[Ln]=null,kn=Cn[--Ln],Cn[Ln]=null}function vu(e,n){Cn[Ln++]=kn,Cn[Ln++]=Gn,Cn[Ln++]=st,kn=n.id,Gn=n.overflow,st=e}var Je=null,Le=null,se=!1,ut=null,gn=!1,wi=Error(u(519));function ct(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw na(Nn(n,e)),wi}function Bu(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[je]=e,n[tn]=r,t){case"dialog":re("cancel",n),re("close",n);break;case"iframe":case"object":case"embed":re("load",n);break;case"video":case"audio":for(t=0;t<Na.length;t++)re(Na[t],n);break;case"source":re("error",n);break;case"img":case"image":case"link":re("error",n),re("load",n);break;case"details":re("toggle",n);break;case"input":re("invalid",n),_s(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":re("invalid",n);break;case"textarea":re("invalid",n),Js(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||QE(n.textContent,t)?(r.popover!=null&&(re("beforetoggle",n),re("toggle",n)),r.onScroll!=null&&re("scroll",n),r.onScrollEnd!=null&&re("scrollend",n),r.onClick!=null&&(n.onclick=xn),n=!0):n=!1,n||ct(e,!0)}function Hu(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:Je=Je.return}}function Rr(e){if(e!==Je)return!1;if(!se)return Hu(e),se=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||ts(e.type,e.memoizedProps)),t=!t),t&&Le&&ct(e),Hu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Le=od(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Le=od(e)}else n===27?(n=Le,Ct(e.type)?(e=ls,ls=null,Le=e):Le=n):Le=Je?yn(e.stateNode.nextSibling):null;return!0}function wt(){Le=Je=null,se=!1}function Fi(){var e=ut;return e!==null&&(sn===null?sn=e:sn.push.apply(sn,e),ut=null),e}function na(e){ut===null?ut=[e]:ut.push(e)}var Ki=S(null),Ft=null,_n=null;function Et(e,n,t){F(Ki,n._currentValue),n._currentValue=t}function jn(e){e._currentValue=Ki.current,g(Ki)}function Yi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function xi(e,n,t,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var i=a.child;o=o.firstContext;e:for(;o!==null;){var l=o;o=a;for(var E=0;E<n.length;E++)if(l.context===n[E]){o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Yi(o.return,t,e),r||(i=null);break e}o=l.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(u(341));i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),Yi(i,t,e),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===e){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function fr(e,n,t,r){e=null;for(var a=n,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(u(387));if(i=i.memoizedProps,i!==null){var l=a.type;Sn(a.pendingProps.value,i.value)||(e!==null?e.push(l):e=[l])}}else if(a===ce.current){if(i=a.alternate,i===null)throw Error(u(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Pa):e=[Pa])}a=a.return}e!==null&&xi(n,e,t,r),n.flags|=262144}function no(e){for(e=e.firstContext;e!==null;){if(!Sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kt(e){Ft=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Uu(Ft,e)}function to(e,n){return Ft===null&&Kt(e),Uu(e,n)}function Uu(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},_n===null){if(e===null)throw Error(u(308));_n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _n=_n.next=n;return t}var NA=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},CA=s.unstable_scheduleCallback,LA=s.unstable_NormalPriority,Ge={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wi(){return{controller:new NA,data:new Map,refCount:0}}function ta(e){e.refCount--,e.refCount===0&&CA(LA,function(){e.controller.abort()})}var ra=null,Vi=0,Or=0,pr=null;function gA(e,n){if(ra===null){var t=ra=[];Vi=0,Or=jl(),pr={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Vi++,n.then(ku,ku),n}function ku(){if(--Vi===0&&ra!==null){pr!==null&&(pr.status="fulfilled");var e=ra;ra=null,Or=0,pr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yA(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var a=0;a<t.length;a++)(0,t[a])(n)},function(a){for(r.status="rejected",r.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),r}var Gu=C.S;C.S=function(e,n){IE=cn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gA(e,n),Gu!==null&&Gu(e,n)};var Yt=S(null);function zi(){var e=Yt.current;return e!==null?e:me.pooledCache}function ro(e,n){n===null?F(Yt,Yt.current):F(Yt,n.pool)}function wu(){var e=zi();return e===null?null:{parent:Ge._currentValue,pool:e}}var Tr=Error(u(460)),_i=Error(u(474)),ao=Error(u(542)),oo={then:function(){}};function Fu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ku(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(xn,xn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xu(e),e;default:if(typeof n.status=="string")n.then(xn,xn);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=r}},function(r){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xu(e),e}throw Wt=n,Tr}}function xt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Wt=t,Tr):t}}var Wt=null;function Yu(){if(Wt===null)throw Error(u(459));var e=Wt;return Wt=null,e}function xu(e){if(e===Tr||e===ao)throw Error(u(483))}var Ir=null,aa=0;function io(e){var n=aa;return aa+=1,Ir===null&&(Ir=[]),Ku(Ir,e,n)}function oa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lo(e,n){throw n.$$typeof===H?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wu(e){function n(R,d){if(e){var f=R.deletions;f===null?(R.deletions=[d],R.flags|=16):f.push(d)}}function t(R,d){if(!e)return null;for(;d!==null;)n(R,d),d=d.sibling;return null}function r(R){for(var d=new Map;R!==null;)R.key!==null?d.set(R.key,R):d.set(R.index,R),R=R.sibling;return d}function a(R,d){return R=Vn(R,d),R.index=0,R.sibling=null,R}function o(R,d,f){return R.index=f,e?(f=R.alternate,f!==null?(f=f.index,f<d?(R.flags|=67108866,d):f):(R.flags|=67108866,d)):(R.flags|=1048576,d)}function i(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function l(R,d,f,L){return d===null||d.tag!==6?(d=Hi(f,R.mode,L),d.return=R,d):(d=a(d,f),d.return=R,d)}function E(R,d,f,L){var _=f.type;return _===k?N(R,d,f.props.children,L,f.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ue&&xt(_)===d.type)?(d=a(d,f.props),oa(d,f),d.return=R,d):(d=qa(f.type,f.key,f.props,null,R.mode,L),oa(d,f),d.return=R,d)}function O(R,d,f,L){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Ui(f,R.mode,L),d.return=R,d):(d=a(d,f.children||[]),d.return=R,d)}function N(R,d,f,L,_){return d===null||d.tag!==7?(d=Gt(f,R.mode,L,_),d.return=R,d):(d=a(d,f),d.return=R,d)}function M(R,d,f){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Hi(""+d,R.mode,f),d.return=R,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case W:return f=qa(d.type,d.key,d.props,null,R.mode,f),oa(f,d),f.return=R,f;case $:return d=Ui(d,R.mode,f),d.return=R,d;case ue:return d=xt(d),M(R,d,f)}if(We(d)||Ce(d))return d=Gt(d,R.mode,f,null),d.return=R,d;if(typeof d.then=="function")return M(R,io(d),f);if(d.$$typeof===ie)return M(R,to(R,d),f);lo(R,d)}return null}function I(R,d,f,L){var _=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return _!==null?null:l(R,d,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case W:return f.key===_?E(R,d,f,L):null;case $:return f.key===_?O(R,d,f,L):null;case ue:return f=xt(f),I(R,d,f,L)}if(We(f)||Ce(f))return _!==null?null:N(R,d,f,L,null);if(typeof f.then=="function")return I(R,d,io(f),L);if(f.$$typeof===ie)return I(R,d,to(R,f),L);lo(R,f)}return null}function m(R,d,f,L,_){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return R=R.get(f)||null,l(d,R,""+L,_);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case W:return R=R.get(L.key===null?f:L.key)||null,E(d,R,L,_);case $:return R=R.get(L.key===null?f:L.key)||null,O(d,R,L,_);case ue:return L=xt(L),m(R,d,f,L,_)}if(We(L)||Ce(L))return R=R.get(f)||null,N(d,R,L,_,null);if(typeof L.then=="function")return m(R,d,f,io(L),_);if(L.$$typeof===ie)return m(R,d,f,to(d,L),_);lo(d,L)}return null}function Y(R,d,f,L){for(var _=null,Ee=null,x=d,ee=d=0,oe=null;x!==null&&ee<f.length;ee++){x.index>ee?(oe=x,x=null):oe=x.sibling;var de=I(R,x,f[ee],L);if(de===null){x===null&&(x=oe);break}e&&x&&de.alternate===null&&n(R,x),d=o(de,d,ee),Ee===null?_=de:Ee.sibling=de,Ee=de,x=oe}if(ee===f.length)return t(R,x),se&&zn(R,ee),_;if(x===null){for(;ee<f.length;ee++)x=M(R,f[ee],L),x!==null&&(d=o(x,d,ee),Ee===null?_=x:Ee.sibling=x,Ee=x);return se&&zn(R,ee),_}for(x=r(x);ee<f.length;ee++)oe=m(x,R,ee,f[ee],L),oe!==null&&(e&&oe.alternate!==null&&x.delete(oe.key===null?ee:oe.key),d=o(oe,d,ee),Ee===null?_=oe:Ee.sibling=oe,Ee=oe);return e&&x.forEach(function(bt){return n(R,bt)}),se&&zn(R,ee),_}function J(R,d,f,L){if(f==null)throw Error(u(151));for(var _=null,Ee=null,x=d,ee=d=0,oe=null,de=f.next();x!==null&&!de.done;ee++,de=f.next()){x.index>ee?(oe=x,x=null):oe=x.sibling;var bt=I(R,x,de.value,L);if(bt===null){x===null&&(x=oe);break}e&&x&&bt.alternate===null&&n(R,x),d=o(bt,d,ee),Ee===null?_=bt:Ee.sibling=bt,Ee=bt,x=oe}if(de.done)return t(R,x),se&&zn(R,ee),_;if(x===null){for(;!de.done;ee++,de=f.next())de=M(R,de.value,L),de!==null&&(d=o(de,d,ee),Ee===null?_=de:Ee.sibling=de,Ee=de);return se&&zn(R,ee),_}for(x=r(x);!de.done;ee++,de=f.next())de=m(x,R,ee,de.value,L),de!==null&&(e&&de.alternate!==null&&x.delete(de.key===null?ee:de.key),d=o(de,d,ee),Ee===null?_=de:Ee.sibling=de,Ee=de);return e&&x.forEach(function(wR){return n(R,wR)}),se&&zn(R,ee),_}function Ie(R,d,f,L){if(typeof f=="object"&&f!==null&&f.type===k&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case W:e:{for(var _=f.key;d!==null;){if(d.key===_){if(_=f.type,_===k){if(d.tag===7){t(R,d.sibling),L=a(d,f.props.children),L.return=R,R=L;break e}}else if(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ue&&xt(_)===d.type){t(R,d.sibling),L=a(d,f.props),oa(L,f),L.return=R,R=L;break e}t(R,d);break}else n(R,d);d=d.sibling}f.type===k?(L=Gt(f.props.children,R.mode,L,f.key),L.return=R,R=L):(L=qa(f.type,f.key,f.props,null,R.mode,L),oa(L,f),L.return=R,R=L)}return i(R);case $:e:{for(_=f.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){t(R,d.sibling),L=a(d,f.children||[]),L.return=R,R=L;break e}else{t(R,d);break}else n(R,d);d=d.sibling}L=Ui(f,R.mode,L),L.return=R,R=L}return i(R);case ue:return f=xt(f),Ie(R,d,f,L)}if(We(f))return Y(R,d,f,L);if(Ce(f)){if(_=Ce(f),typeof _!="function")throw Error(u(150));return f=_.call(f),J(R,d,f,L)}if(typeof f.then=="function")return Ie(R,d,io(f),L);if(f.$$typeof===ie)return Ie(R,d,to(R,f),L);lo(R,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,d!==null&&d.tag===6?(t(R,d.sibling),L=a(d,f),L.return=R,R=L):(t(R,d),L=Hi(f,R.mode,L),L.return=R,R=L),i(R)):t(R,d)}return function(R,d,f,L){try{aa=0;var _=Ie(R,d,f,L);return Ir=null,_}catch(x){if(x===Tr||x===ao)throw x;var Ee=An(29,x,null,R.mode);return Ee.lanes=L,Ee.return=R,Ee}finally{}}}var Vt=Wu(!0),Vu=Wu(!1),dt=!1;function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ji(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function St(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function At(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Se&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,n=$a(e),yu(e,null,t),n}return Xa(e,r,n,t),$a(e)}function ia(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Us(e,t)}}function Zi(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Qi=!1;function la(){if(Qi){var e=pr;if(e!==null)throw e}}function sa(e,n,t,r){Qi=!1;var a=e.updateQueue;dt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var E=l,O=E.next;E.next=null,i===null?o=O:i.next=O,i=E;var N=e.alternate;N!==null&&(N=N.updateQueue,l=N.lastBaseUpdate,l!==i&&(l===null?N.firstBaseUpdate=O:l.next=O,N.lastBaseUpdate=E))}if(o!==null){var M=a.baseState;i=0,N=O=E=null,l=o;do{var I=l.lane&-536870913,m=I!==l.lane;if(m?(ae&I)===I:(r&I)===I){I!==0&&I===Or&&(Qi=!0),N!==null&&(N=N.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var Y=e,J=l;I=n;var Ie=t;switch(J.tag){case 1:if(Y=J.payload,typeof Y=="function"){M=Y.call(Ie,M,I);break e}M=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=J.payload,I=typeof Y=="function"?Y.call(Ie,M,I):Y,I==null)break e;M=y({},M,I);break e;case 2:dt=!0}}I=l.callback,I!==null&&(e.flags|=64,m&&(e.flags|=8192),m=a.callbacks,m===null?a.callbacks=[I]:m.push(I))}else m={lane:I,tag:l.tag,payload:l.payload,callback:l.callback,next:null},N===null?(O=N=m,E=M):N=N.next=m,i|=I;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);N===null&&(E=M),a.baseState=E,a.firstBaseUpdate=O,a.lastBaseUpdate=N,o===null&&(a.shared.lanes=0),Tt|=i,e.lanes=i,e.memoizedState=M}}function zu(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function _u(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)zu(t[e],n)}var hr=S(null),so=S(0);function ju(e,n){e=tt,F(so,e),F(hr,n),tt=e|n.baseLanes}function Xi(){F(so,tt),F(hr,hr.current)}function $i(){tt=so.current,g(hr),g(so)}var Rn=S(null),Dn=null;function Rt(e){var n=e.alternate;F(He,He.current&1),F(Rn,e),Dn===null&&(n===null||hr.current!==null||n.memoizedState!==null)&&(Dn=e)}function qi(e){F(He,He.current),F(Rn,e),Dn===null&&(Dn=e)}function Ju(e){e.tag===22?(F(He,He.current),F(Rn,e),Dn===null&&(Dn=e)):ft()}function ft(){F(He,He.current),F(Rn,Rn.current)}function fn(e){g(Rn),Dn===e&&(Dn=null),g(He)}var He=S(0);function uo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||os(t)||is(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jn=0,X=null,pe=null,we=null,co=!1,mr=!1,zt=!1,Eo=0,ua=0,Nr=null,PA=0;function be(){throw Error(u(321))}function el(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function nl(e,n,t,r,a,o){return Jn=o,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Dc:fl,zt=!1,o=t(r,a),zt=!1,mr&&(o=Qu(n,t,r,a)),Zu(e),o}function Zu(e){C.H=da;var n=pe!==null&&pe.next!==null;if(Jn=0,we=pe=X=null,co=!1,ua=0,Nr=null,n)throw Error(u(300));e===null||Fe||(e=e.dependencies,e!==null&&no(e)&&(Fe=!0))}function Qu(e,n,t,r){X=e;var a=0;do{if(mr&&(Nr=null),ua=0,mr=!1,25<=a)throw Error(u(301));if(a+=1,we=pe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=vc,o=n(t,r)}while(mr);return o}function bA(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?ca(n):n,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(X.flags|=1024),n}function tl(){var e=Eo!==0;return Eo=0,e}function rl(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function al(e){if(co){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}co=!1}Jn=0,we=pe=X=null,mr=!1,ua=Eo=0,Nr=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?X.memoizedState=we=e:we=we.next=e,we}function Ue(){if(pe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=we===null?X.memoizedState:we.next;if(n!==null)we=n,pe=e;else{if(e===null)throw X.alternate===null?Error(u(467)):Error(u(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?X.memoizedState=we=e:we=we.next=e}return we}function So(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ca(e){var n=ua;return ua+=1,Nr===null&&(Nr=[]),e=Ku(Nr,e,n),n=X,(we===null?n.memoizedState:we.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Dc:fl),e}function Ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ca(e);if(e.$$typeof===ie)return Ze(e)}throw Error(u(438,String(e)))}function ol(e){var n=null,t=X.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=So(),X.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=Ye;return n.index++,t}function Zn(e,n){return typeof n=="function"?n(e):n}function Ro(e){var n=Ue();return il(n,pe,e)}function il(e,n,t){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=t;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{n=a.next;var l=i=null,E=null,O=n,N=!1;do{var M=O.lane&-536870913;if(M!==O.lane?(ae&M)===M:(Jn&M)===M){var I=O.revertLane;if(I===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),M===Or&&(N=!0);else if((Jn&I)===I){O=O.next,I===Or&&(N=!0);continue}else M={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(l=E=M,i=o):E=E.next=M,X.lanes|=I,Tt|=I;M=O.action,zt&&t(o,M),o=O.hasEagerState?O.eagerState:t(o,M)}else I={lane:M,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},E===null?(l=E=I,i=o):E=E.next=I,X.lanes|=M,Tt|=M;O=O.next}while(O!==null&&O!==n);if(E===null?i=o:E.next=l,!Sn(o,e.memoizedState)&&(Fe=!0,N&&(t=pr,t!==null)))throw t;e.memoizedState=o,e.baseState=i,e.baseQueue=E,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ll(e){var n=Ue(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Sn(o,n.memoizedState)||(Fe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Xu(e,n,t){var r=X,a=Ue(),o=se;if(o){if(t===void 0)throw Error(u(407));t=t()}else t=n();var i=!Sn((pe||a).memoizedState,t);if(i&&(a.memoizedState=t,Fe=!0),a=a.queue,cl(ec.bind(null,r,a,e),[e]),a.getSnapshot!==n||i||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,Cr(9,{destroy:void 0},qu.bind(null,r,a,t,n),null),me===null)throw Error(u(349));o||(Jn&127)!==0||$u(r,n,t)}return t}function $u(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n=So(),X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function qu(e,n,t,r){n.value=t,n.getSnapshot=r,nc(n)&&tc(e)}function ec(e,n,t){return t(function(){nc(n)&&tc(e)})}function nc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function tc(e){var n=kt(e,2);n!==null&&un(n,e,2)}function sl(e){var n=nn();if(typeof e=="function"){var t=e;if(e=t(),zt){ot(!0);try{t()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},n}function rc(e,n,t,r){return e.baseState=t,il(e,pe,typeof r=="function"?r:Zn)}function MA(e,n,t,r,a){if(po(e))throw Error(u(485));if(e=n.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){o.listeners.push(i)}};C.T!==null?t(!0):o.isTransition=!1,r(o),t=n.pending,t===null?(o.next=n.pending=o,ac(n,o)):(o.next=t.next,n.pending=t.next=o)}}function ac(e,n){var t=n.action,r=n.payload,a=e.state;if(n.isTransition){var o=C.T,i={};C.T=i;try{var l=t(a,r),E=C.S;E!==null&&E(i,l),oc(e,n,l)}catch(O){ul(e,n,O)}finally{o!==null&&i.types!==null&&(o.types=i.types),C.T=o}}else try{o=t(a,r),oc(e,n,o)}catch(O){ul(e,n,O)}}function oc(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){ic(e,n,r)},function(r){return ul(e,n,r)}):ic(e,n,t)}function ic(e,n,t){n.status="fulfilled",n.value=t,lc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,ac(e,t)))}function ul(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,lc(n),n=n.next;while(n!==r)}e.action=null}function lc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function sc(e,n){return n}function uc(e,n){if(se){var t=me.formState;if(t!==null){e:{var r=X;if(se){if(Le){n:{for(var a=Le,o=gn;a.nodeType!==8;){if(!o){a=null;break n}if(a=yn(a.nextSibling),a===null){a=null;break n}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){Le=yn(a.nextSibling),r=a.data==="F!";break e}}ct(r)}r=!1}r&&(n=t[0])}}return t=nn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sc,lastRenderedState:n},t.queue=r,t=Pc.bind(null,X,r),r.dispatch=t,r=sl(!1),o=Rl.bind(null,X,!1,r.queue),r=nn(),a={state:n,dispatch:null,action:e,pending:null},r.queue=a,t=MA.bind(null,X,a,o,t),a.dispatch=t,r.memoizedState=e,[n,t,!1]}function cc(e){var n=Ue();return Ec(n,pe,e)}function Ec(e,n,t){if(n=il(e,n,sc)[0],e=Ro(Zn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ca(n)}catch(i){throw i===Tr?ao:i}else r=n;n=Ue();var a=n.queue,o=a.dispatch;return t!==n.memoizedState&&(X.flags|=2048,Cr(9,{destroy:void 0},DA.bind(null,a,t),null)),[r,o,e]}function DA(e,n){e.action=n}function dc(e){var n=Ue(),t=pe;if(t!==null)return Ec(n,t,e);Ue(),n=n.memoizedState,t=Ue();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Cr(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=X.updateQueue,n===null&&(n=So(),X.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Sc(){return Ue().memoizedState}function fo(e,n,t,r){var a=nn();X.flags|=e,a.memoizedState=Cr(1|n,{destroy:void 0},t,r===void 0?null:r)}function Oo(e,n,t,r){var a=Ue();r=r===void 0?null:r;var o=a.memoizedState.inst;pe!==null&&r!==null&&el(r,pe.memoizedState.deps)?a.memoizedState=Cr(n,o,t,r):(X.flags|=e,a.memoizedState=Cr(1|n,o,t,r))}function Ac(e,n){fo(8390656,8,e,n)}function cl(e,n){Oo(2048,8,e,n)}function vA(e){X.flags|=4;var n=X.updateQueue;if(n===null)n=So(),X.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Rc(e){var n=Ue().memoizedState;return vA({ref:n,nextImpl:e}),function(){if((Se&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function fc(e,n){return Oo(4,2,e,n)}function Oc(e,n){return Oo(4,4,e,n)}function pc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tc(e,n,t){t=t!=null?t.concat([e]):null,Oo(4,4,pc.bind(null,n,e),t)}function El(){}function Ic(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&el(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function hc(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&el(n,r[1]))return r[0];if(r=e(),zt){ot(!0);try{e()}finally{ot(!1)}}return t.memoizedState=[r,n],r}function dl(e,n,t){return t===void 0||(Jn&1073741824)!==0&&(ae&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=mE(),X.lanes|=e,Tt|=e,t)}function mc(e,n,t,r){return Sn(t,n)?t:hr.current!==null?(e=dl(e,t,r),Sn(e,n)||(Fe=!0),e):(Jn&42)===0||(Jn&1073741824)!==0&&(ae&261930)===0?(Fe=!0,e.memoizedState=t):(e=mE(),X.lanes|=e,Tt|=e,n)}function Nc(e,n,t,r,a){var o=w.p;w.p=o!==0&&8>o?o:8;var i=C.T,l={};C.T=l,Rl(e,!1,n,t);try{var E=a(),O=C.S;if(O!==null&&O(l,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=yA(E,r);Ea(e,n,N,Tn(e))}else Ea(e,n,r,Tn(e))}catch(M){Ea(e,n,{then:function(){},status:"rejected",reason:M},Tn())}finally{w.p=o,i!==null&&l.types!==null&&(i.types=l.types),C.T=i}}function BA(){}function Sl(e,n,t,r){if(e.tag!==5)throw Error(u(476));var a=Cc(e).queue;Nc(e,a,n,j,t===null?BA:function(){return Lc(e),t(r)})}function Cc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:j},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lc(e){var n=Cc(e);n.next===null&&(n=e.alternate.memoizedState),Ea(e,n.next.queue,{},Tn())}function Al(){return Ze(Pa)}function gc(){return Ue().memoizedState}function yc(){return Ue().memoizedState}function HA(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Tn();e=St(t);var r=At(n,e,t);r!==null&&(un(r,n,t),ia(r,n,t)),n={cache:Wi()},e.payload=n;return}n=n.return}}function UA(e,n,t){var r=Tn();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},po(e)?bc(n,t):(t=vi(e,n,t,r),t!==null&&(un(t,e,r),Mc(t,n,r)))}function Pc(e,n,t){var r=Tn();Ea(e,n,t,r)}function Ea(e,n,t,r){var a={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(po(e))bc(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,l=o(i,t);if(a.hasEagerState=!0,a.eagerState=l,Sn(l,i))return Xa(e,n,a,0),me===null&&Qa(),!1}catch{}finally{}if(t=vi(e,n,a,r),t!==null)return un(t,e,r),Mc(t,n,r),!0}return!1}function Rl(e,n,t,r){if(r={lane:2,revertLane:jl(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},po(e)){if(n)throw Error(u(479))}else n=vi(e,t,r,2),n!==null&&un(n,e,2)}function po(e){var n=e.alternate;return e===X||n!==null&&n===X}function bc(e,n){mr=co=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Mc(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Us(e,t)}}var da={readContext:Ze,use:Ao,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};da.useEffectEvent=be;var Dc={readContext:Ze,use:Ao,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:Ac,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,fo(4194308,4,pc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fo(4194308,4,e,n)},useInsertionEffect:function(e,n){fo(4,2,e,n)},useMemo:function(e,n){var t=nn();n=n===void 0?null:n;var r=e();if(zt){ot(!0);try{e()}finally{ot(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=nn();if(t!==void 0){var a=t(n);if(zt){ot(!0);try{t(n)}finally{ot(!1)}}}else a=n;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=UA.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:function(e){e=sl(e);var n=e.queue,t=Pc.bind(null,X,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:El,useDeferredValue:function(e,n){var t=nn();return dl(t,e,n)},useTransition:function(){var e=sl(!1);return e=Nc.bind(null,X,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=X,a=nn();if(se){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),me===null)throw Error(u(349));(ae&127)!==0||$u(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,Ac(ec.bind(null,r,o,e),[e]),r.flags|=2048,Cr(9,{destroy:void 0},qu.bind(null,r,o,t,n),null),t},useId:function(){var e=nn(),n=me.identifierPrefix;if(se){var t=Gn,r=kn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Eo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=PA++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Al,useFormState:uc,useActionState:uc,useOptimistic:function(e){var n=nn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Rl.bind(null,X,!0,t),t.dispatch=n,[e,n]},useMemoCache:ol,useCacheRefresh:function(){return nn().memoizedState=HA.bind(null,X)},useEffectEvent:function(e){var n=nn(),t={impl:e};return n.memoizedState=t,function(){if((Se&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},fl={readContext:Ze,use:Ao,useCallback:Ic,useContext:Ze,useEffect:cl,useImperativeHandle:Tc,useInsertionEffect:fc,useLayoutEffect:Oc,useMemo:hc,useReducer:Ro,useRef:Sc,useState:function(){return Ro(Zn)},useDebugValue:El,useDeferredValue:function(e,n){var t=Ue();return mc(t,pe.memoizedState,e,n)},useTransition:function(){var e=Ro(Zn)[0],n=Ue().memoizedState;return[typeof e=="boolean"?e:ca(e),n]},useSyncExternalStore:Xu,useId:gc,useHostTransitionStatus:Al,useFormState:cc,useActionState:cc,useOptimistic:function(e,n){var t=Ue();return rc(t,pe,e,n)},useMemoCache:ol,useCacheRefresh:yc};fl.useEffectEvent=Rc;var vc={readContext:Ze,use:Ao,useCallback:Ic,useContext:Ze,useEffect:cl,useImperativeHandle:Tc,useInsertionEffect:fc,useLayoutEffect:Oc,useMemo:hc,useReducer:ll,useRef:Sc,useState:function(){return ll(Zn)},useDebugValue:El,useDeferredValue:function(e,n){var t=Ue();return pe===null?dl(t,e,n):mc(t,pe.memoizedState,e,n)},useTransition:function(){var e=ll(Zn)[0],n=Ue().memoizedState;return[typeof e=="boolean"?e:ca(e),n]},useSyncExternalStore:Xu,useId:gc,useHostTransitionStatus:Al,useFormState:dc,useActionState:dc,useOptimistic:function(e,n){var t=Ue();return pe!==null?rc(t,pe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:ol,useCacheRefresh:yc};vc.useEffectEvent=Rc;function Ol(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:y({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var pl={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Tn(),a=St(r);a.payload=n,t!=null&&(a.callback=t),n=At(e,a,r),n!==null&&(un(n,e,r),ia(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Tn(),a=St(r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=At(e,a,r),n!==null&&(un(n,e,r),ia(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Tn(),r=St(t);r.tag=2,n!=null&&(r.callback=n),n=At(e,r,t),n!==null&&(un(n,e,t),ia(n,e,t))}};function Bc(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!$r(t,r)||!$r(a,o):!0}function Hc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&pl.enqueueReplaceState(n,n.state,null)}function _t(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=y({},t));for(var a in e)t[a]===void 0&&(t[a]=e[a])}return t}function Uc(e){Za(e)}function kc(e){console.error(e)}function Gc(e){Za(e)}function To(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function wc(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Tl(e,n,t){return t=St(t),t.tag=3,t.payload={element:null},t.callback=function(){To(e,n)},t}function Fc(e){return e=St(e),e.tag=3,e}function Kc(e,n,t,r){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){wc(n,t,r)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){wc(n,t,r),typeof a!="function"&&(It===null?It=new Set([this]):It.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})})}function kA(e,n,t,r,a){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&fr(n,t,a,!0),t=Rn.current,t!==null){switch(t.tag){case 31:case 13:return Dn===null?Do():t.alternate===null&&Me===0&&(Me=3),t.flags&=-257,t.flags|=65536,t.lanes=a,r===oo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Vl(e,r,a)),!1;case 22:return t.flags|=65536,r===oo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Vl(e,r,a)),!1}throw Error(u(435,t.tag))}return Vl(e,r,a),Do(),!1}if(se)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,r!==wi&&(e=Error(u(422),{cause:r}),na(Nn(e,t)))):(r!==wi&&(n=Error(u(423),{cause:r}),na(Nn(n,t))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Nn(r,t),a=Tl(e.stateNode,r,a),Zi(e,a),Me!==4&&(Me=2)),!1;var o=Error(u(520),{cause:r});if(o=Nn(o,t),Ia===null?Ia=[o]:Ia.push(o),Me!==4&&(Me=2),n===null)return!0;r=Nn(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=a&-a,t.lanes|=e,e=Tl(t.stateNode,r,e),Zi(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(It===null||!It.has(o))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Fc(a),Kc(a,e,t,r),Zi(t,a),!1}t=t.return}while(t!==null);return!1}var Il=Error(u(461)),Fe=!1;function Qe(e,n,t,r){n.child=e===null?Vu(n,null,t,r):Vt(n,e.child,t,r)}function Yc(e,n,t,r,a){t=t.render;var o=n.ref;if("ref"in r){var i={};for(var l in r)l!=="ref"&&(i[l]=r[l])}else i=r;return Kt(n),r=nl(e,n,t,i,o,a),l=tl(),e!==null&&!Fe?(rl(e,n,a),Qn(e,n,a)):(se&&l&&ki(n),n.flags|=1,Qe(e,n,r,a),n.child)}function xc(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!Bi(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,Wc(e,n,o,r,a)):(e=qa(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Pl(e,a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:$r,t(i,r)&&e.ref===n.ref)return Qn(e,n,a)}return n.flags|=1,e=Vn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Wc(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=r=o,Pl(e,a))(e.flags&131072)!==0&&(Fe=!0);else return n.lanes=e.lanes,Qn(e,n,a)}return hl(e,n,t,r,a)}function Vc(e,n,t,r){var a=r.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(r=n.child=e.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,n.child=null;return zc(e,n,o,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ro(n,o!==null?o.cachePool:null),o!==null?ju(n,o):Xi(),Ju(n);else return r=n.lanes=536870912,zc(e,n,o!==null?o.baseLanes|t:t,t,r)}else o!==null?(ro(n,o.cachePool),ju(n,o),ft(),n.memoizedState=null):(e!==null&&ro(n,null),Xi(),ft());return Qe(e,n,a,t),n.child}function Sa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zc(e,n,t,r,a){var o=zi();return o=o===null?null:{parent:Ge._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&ro(n,null),Xi(),Ju(n),e!==null&&fr(e,n,r,!0),n.childLanes=a,null}function Io(e,n){return n=mo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _c(e,n,t){return Vt(n,e.child,null,t),e=Io(n,n.pendingProps),e.flags|=2,fn(n),n.memoizedState=null,e}function GA(e,n,t){var r=n.pendingProps,a=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(se){if(r.mode==="hidden")return e=Io(n,r),n.lanes=536870912,Sa(null,e);if(qi(n),(e=Le)?(e=ad(e,gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:st!==null?{id:kn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},t=bu(e),t.return=n,n.child=t,Je=n,Le=null)):e=null,e===null)throw ct(n);return n.lanes=536870912,null}return Io(n,r)}var o=e.memoizedState;if(o!==null){var i=o.dehydrated;if(qi(n),a)if(n.flags&256)n.flags&=-257,n=_c(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(Fe||fr(e,n,t,!1),a=(t&e.childLanes)!==0,Fe||a){if(r=me,r!==null&&(i=ks(r,t),i!==0&&i!==o.retryLane))throw o.retryLane=i,kt(e,i),un(r,e,i),Il;Do(),n=_c(e,n,t)}else e=o.treeContext,Le=yn(i.nextSibling),Je=n,se=!0,ut=null,gn=!1,e!==null&&vu(n,e),n=Io(n,r),n.flags|=4096;return n}return e=Vn(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ho(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function hl(e,n,t,r,a){return Kt(n),t=nl(e,n,t,r,void 0,a),r=tl(),e!==null&&!Fe?(rl(e,n,a),Qn(e,n,a)):(se&&r&&ki(n),n.flags|=1,Qe(e,n,t,a),n.child)}function jc(e,n,t,r,a,o){return Kt(n),n.updateQueue=null,t=Qu(n,r,t,a),Zu(e),r=tl(),e!==null&&!Fe?(rl(e,n,o),Qn(e,n,o)):(se&&r&&ki(n),n.flags|=1,Qe(e,n,t,o),n.child)}function Jc(e,n,t,r,a){if(Kt(n),n.stateNode===null){var o=dr,i=t.contextType;typeof i=="object"&&i!==null&&(o=Ze(i)),o=new t(r,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=pl,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=r,o.state=n.memoizedState,o.refs={},ji(n),i=t.contextType,o.context=typeof i=="object"&&i!==null?Ze(i):dr,o.state=n.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ol(n,t,i,r),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(i=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),i!==o.state&&pl.enqueueReplaceState(o,o.state,null),sa(n,r,o,a),la(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){o=n.stateNode;var l=n.memoizedProps,E=_t(t,l);o.props=E;var O=o.context,N=t.contextType;i=dr,typeof N=="object"&&N!==null&&(i=Ze(N));var M=t.getDerivedStateFromProps;N=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function",l=n.pendingProps!==l,N||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l||O!==i)&&Hc(n,o,r,i),dt=!1;var I=n.memoizedState;o.state=I,sa(n,r,o,a),la(),O=n.memoizedState,l||I!==O||dt?(typeof M=="function"&&(Ol(n,t,M,r),O=n.memoizedState),(E=dt||Bc(n,t,E,r,I,O,i))?(N||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=O),o.props=r,o.state=O,o.context=i,r=E):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Ji(e,n),i=n.memoizedProps,N=_t(t,i),o.props=N,M=n.pendingProps,I=o.context,O=t.contextType,E=dr,typeof O=="object"&&O!==null&&(E=Ze(O)),l=t.getDerivedStateFromProps,(O=typeof l=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==M||I!==E)&&Hc(n,o,r,E),dt=!1,I=n.memoizedState,o.state=I,sa(n,r,o,a),la();var m=n.memoizedState;i!==M||I!==m||dt||e!==null&&e.dependencies!==null&&no(e.dependencies)?(typeof l=="function"&&(Ol(n,t,l,r),m=n.memoizedState),(N=dt||Bc(n,t,N,r,I,m,E)||e!==null&&e.dependencies!==null&&no(e.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,E),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,E)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=E,r=N):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),r=!1)}return o=r,ho(e,n),r=(n.flags&128)!==0,o||r?(o=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&r?(n.child=Vt(n,e.child,null,a),n.child=Vt(n,null,t,a)):Qe(e,n,t,a),n.memoizedState=o.state,e=n.child):e=Qn(e,n,a),e}function Zc(e,n,t,r){return wt(),n.flags|=256,Qe(e,n,t,r),n.child}var ml={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nl(e){return{baseLanes:e,cachePool:wu()}}function Cl(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=pn),e}function Qc(e,n,t){var r=n.pendingProps,a=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),i&&(a=!0,n.flags&=-129),i=(n.flags&32)!==0,n.flags&=-33,e===null){if(se){if(a?Rt(n):ft(),(e=Le)?(e=ad(e,gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:st!==null?{id:kn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},t=bu(e),t.return=n,n.child=t,Je=n,Le=null)):e=null,e===null)throw ct(n);return is(e)?n.lanes=32:n.lanes=536870912,null}var l=r.children;return r=r.fallback,a?(ft(),a=n.mode,l=mo({mode:"hidden",children:l},a),r=Gt(r,a,t,null),l.return=n,r.return=n,l.sibling=r,n.child=l,r=n.child,r.memoizedState=Nl(t),r.childLanes=Cl(e,i,t),n.memoizedState=ml,Sa(null,r)):(Rt(n),Ll(n,l))}var E=e.memoizedState;if(E!==null&&(l=E.dehydrated,l!==null)){if(o)n.flags&256?(Rt(n),n.flags&=-257,n=gl(e,n,t)):n.memoizedState!==null?(ft(),n.child=e.child,n.flags|=128,n=null):(ft(),l=r.fallback,a=n.mode,r=mo({mode:"visible",children:r.children},a),l=Gt(l,a,t,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,Vt(n,e.child,null,t),r=n.child,r.memoizedState=Nl(t),r.childLanes=Cl(e,i,t),n.memoizedState=ml,n=Sa(null,r));else if(Rt(n),is(l)){if(i=l.nextSibling&&l.nextSibling.dataset,i)var O=i.dgst;i=O,r=Error(u(419)),r.stack="",r.digest=i,na({value:r,source:null,stack:null}),n=gl(e,n,t)}else if(Fe||fr(e,n,t,!1),i=(t&e.childLanes)!==0,Fe||i){if(i=me,i!==null&&(r=ks(i,t),r!==0&&r!==E.retryLane))throw E.retryLane=r,kt(e,r),un(i,e,r),Il;os(l)||Do(),n=gl(e,n,t)}else os(l)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Le=yn(l.nextSibling),Je=n,se=!0,ut=null,gn=!1,e!==null&&vu(n,e),n=Ll(n,r.children),n.flags|=4096);return n}return a?(ft(),l=r.fallback,a=n.mode,E=e.child,O=E.sibling,r=Vn(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&65011712,O!==null?l=Vn(O,l):(l=Gt(l,a,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Sa(null,r),r=n.child,l=e.child.memoizedState,l===null?l=Nl(t):(a=l.cachePool,a!==null?(E=Ge._currentValue,a=a.parent!==E?{parent:E,pool:E}:a):a=wu(),l={baseLanes:l.baseLanes|t,cachePool:a}),r.memoizedState=l,r.childLanes=Cl(e,i,t),n.memoizedState=ml,Sa(e.child,r)):(Rt(n),t=e.child,e=t.sibling,t=Vn(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=t,n.memoizedState=null,t)}function Ll(e,n){return n=mo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function mo(e,n){return e=An(22,e,null,n),e.lanes=0,e}function gl(e,n,t){return Vt(n,e.child,null,t),e=Ll(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Yi(e.return,n,t)}function yl(e,n,t,r,a,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a,treeForkCount:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a,i.treeForkCount=o)}function $c(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var i=He.current,l=(i&2)!==0;if(l?(i=i&1|2,n.flags|=128):i&=1,F(He,i),Qe(e,n,r,t),r=se?ea:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,t,n);else if(e.tag===19)Xc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&uo(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),yl(n,!1,a,t,o,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&uo(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}yl(n,!0,t,null,o,r);break;case"together":yl(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Qn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Tt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(fr(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Pl(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&no(e)))}function wA(e,n,t){switch(n.tag){case 3:Ve(n,n.stateNode.containerInfo),Et(n,Ge,e.memoizedState.cache),wt();break;case 27:case 5:In(n);break;case 4:Ve(n,n.stateNode.containerInfo);break;case 10:Et(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qi(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Rt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Qc(e,n,t):(Rt(n),e=Qn(e,n,t),e!==null?e.sibling:null);Rt(n);break;case 19:var a=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(fr(e,n,t,!1),r=(t&n.childLanes)!==0),a){if(r)return $c(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),F(He,He.current),r)break;return null;case 22:return n.lanes=0,Vc(e,n,t,n.pendingProps);case 24:Et(n,Ge,e.memoizedState.cache)}return Qn(e,n,t)}function qc(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Fe=!0;else{if(!Pl(e,t)&&(n.flags&128)===0)return Fe=!1,wA(e,n,t);Fe=(e.flags&131072)!==0}else Fe=!1,se&&(n.flags&1048576)!==0&&Du(n,ea,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=xt(n.elementType),n.type=e,typeof e=="function")Bi(e)?(r=_t(e,r),n.tag=1,n=Jc(null,n,e,r,t)):(n.tag=0,n=hl(null,n,e,r,t));else{if(e!=null){var a=e.$$typeof;if(a===Ne){n.tag=11,n=Yc(null,n,e,r,t);break e}else if(a===q){n.tag=14,n=xc(null,n,e,r,t);break e}}throw n=$e(e)||e,Error(u(306,n,""))}}return n;case 0:return hl(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,a=_t(r,n.pendingProps),Jc(e,n,r,a,t);case 3:e:{if(Ve(n,n.stateNode.containerInfo),e===null)throw Error(u(387));r=n.pendingProps;var o=n.memoizedState;a=o.element,Ji(e,n),sa(n,r,null,t);var i=n.memoizedState;if(r=i.cache,Et(n,Ge,r),r!==o.cache&&xi(n,[Ge],t,!0),la(),r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Zc(e,n,r,t);break e}else if(r!==a){a=Nn(Error(u(424)),n),na(a),n=Zc(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=yn(e.firstChild),Je=n,se=!0,ut=null,gn=!0,t=Vu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(wt(),r===a){n=Qn(e,n,t);break e}Qe(e,n,r,t)}n=n.child}return n;case 26:return ho(e,n),e===null?(t=cd(n.type,null,n.pendingProps,null))?n.memoizedState=t:se||(t=n.type,e=n.pendingProps,r=wo(Z.current).createElement(t),r[je]=n,r[tn]=e,Xe(r,t,e),ze(r),n.stateNode=r):n.memoizedState=cd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return In(n),e===null&&se&&(r=n.stateNode=ld(n.type,n.pendingProps,Z.current),Je=n,gn=!0,a=Le,Ct(n.type)?(ls=a,Le=yn(r.firstChild)):Le=a),Qe(e,n,n.pendingProps.children,t),ho(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&se&&((a=r=Le)&&(r=AR(r,n.type,n.pendingProps,gn),r!==null?(n.stateNode=r,Je=n,Le=yn(r.firstChild),gn=!1,a=!0):a=!1),a||ct(n)),In(n),a=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,r=o.children,ts(a,o)?r=null:i!==null&&ts(a,i)&&(n.flags|=32),n.memoizedState!==null&&(a=nl(e,n,bA,null,null,t),Pa._currentValue=a),ho(e,n),Qe(e,n,r,t),n.child;case 6:return e===null&&se&&((e=t=Le)&&(t=RR(t,n.pendingProps,gn),t!==null?(n.stateNode=t,Je=n,Le=null,e=!0):e=!1),e||ct(n)),null;case 13:return Qc(e,n,t);case 4:return Ve(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Vt(n,null,r,t):Qe(e,n,r,t),n.child;case 11:return Yc(e,n,n.type,n.pendingProps,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,Et(n,n.type,r.value),Qe(e,n,r.children,t),n.child;case 9:return a=n.type._context,r=n.pendingProps.children,Kt(n),a=Ze(a),r=r(a),n.flags|=1,Qe(e,n,r,t),n.child;case 14:return xc(e,n,n.type,n.pendingProps,t);case 15:return Wc(e,n,n.type,n.pendingProps,t);case 19:return $c(e,n,t);case 31:return GA(e,n,t);case 22:return Vc(e,n,t,n.pendingProps);case 24:return Kt(n),r=Ze(Ge),e===null?(a=zi(),a===null&&(a=me,o=Wi(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=t),a=o),n.memoizedState={parent:r,cache:a},ji(n),Et(n,Ge,a)):((e.lanes&t)!==0&&(Ji(e,n),sa(n,null,null,t),la()),a=e.memoizedState,o=n.memoizedState,a.parent!==r?(a={parent:r,cache:r},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),Et(n,Ge,r)):(r=o.cache,Et(n,Ge,r),r!==a.cache&&xi(n,[Ge],t,!0))),Qe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Xn(e){e.flags|=4}function bl(e,n,t,r,a){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(gE())e.flags|=8192;else throw Wt=oo,_i}else e.flags&=-16777217}function eE(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rd(n))if(gE())e.flags|=8192;else throw Wt=oo,_i}function No(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bs():536870912,e.lanes|=n,Pr|=n)}function Aa(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function FA(e,n,t){var r=n.pendingProps;switch(Gi(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return ge(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),jn(Ge),ye(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?Xn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fi())),ge(n),null;case 26:var a=n.type,o=n.memoizedState;return e===null?(Xn(n),o!==null?(ge(n),eE(n,o)):(ge(n),bl(n,a,null,r,t))):o?o!==e.memoizedState?(Xn(n),ge(n),eE(n,o)):(ge(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Xn(n),ge(n),bl(n,a,e,r,t)),null;case 27:if(Mt(n),t=Z.current,a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xn(n);else{if(!r){if(n.stateNode===null)throw Error(u(166));return ge(n),null}e=G.current,Rr(n)?Bu(n):(e=ld(a,r,t),n.stateNode=e,Xn(n))}return ge(n),null;case 5:if(Mt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xn(n);else{if(!r){if(n.stateNode===null)throw Error(u(166));return ge(n),null}if(o=G.current,Rr(n))Bu(n);else{var i=wo(Z.current);switch(o){case 1:o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":o=i.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof r.is=="string"?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is=="string"?i.createElement(a,{is:r.is}):i.createElement(a)}}o[je]=n,o[tn]=r;e:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)o.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=o;e:switch(Xe(o,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Xn(n)}}return ge(n),bl(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Xn(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(u(166));if(e=Z.current,Rr(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,a=Je,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[je]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||QE(e.nodeValue,t)),e||ct(n,!0)}else e=wo(e).createTextNode(r),e[je]=n,n.stateNode=e}return ge(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=Rr(n),t!==null){if(e===null){if(!r)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[je]=n}else wt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ge(n),e=!1}else t=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(fn(n),n):(fn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return ge(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[je]=n}else wt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ge(n),a=!1}else a=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(fn(n),n):(fn(n),null)}return fn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),No(n,n.updateQueue),ge(n),null);case 4:return ye(),e===null&&Xl(n.stateNode.containerInfo),ge(n),null;case 10:return jn(n.type),ge(n),null;case 19:if(g(He),r=n.memoizedState,r===null)return ge(n),null;if(a=(n.flags&128)!==0,o=r.rendering,o===null)if(a)Aa(r,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=uo(e),o!==null){for(n.flags|=128,Aa(r,!1),e=o.updateQueue,n.updateQueue=e,No(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Pu(t,e),t=t.sibling;return F(He,He.current&1|2),se&&zn(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&cn()>Po&&(n.flags|=128,a=!0,Aa(r,!1),n.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,No(n,e),Aa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!se)return ge(n),null}else 2*cn()-r.renderingStartTime>Po&&t!==536870912&&(n.flags|=128,a=!0,Aa(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(e=r.last,e!==null?e.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=cn(),e.sibling=null,t=He.current,F(He,a?t&1|2:t&1),se&&zn(n,r.treeForkCount),e):(ge(n),null);case 22:case 23:return fn(n),$i(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),t=n.updateQueue,t!==null&&No(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&g(Yt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),jn(Ge),ge(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function KA(e,n){switch(Gi(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jn(Ge),ye(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Mt(n),null;case 31:if(n.memoizedState!==null){if(fn(n),n.alternate===null)throw Error(u(340));wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));wt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return g(He),null;case 4:return ye(),null;case 10:return jn(n.type),null;case 22:case 23:return fn(n),$i(),e!==null&&g(Yt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return jn(Ge),null;case 25:return null;default:return null}}function nE(e,n){switch(Gi(n),n.tag){case 3:jn(Ge),ye();break;case 26:case 27:case 5:Mt(n);break;case 4:ye();break;case 31:n.memoizedState!==null&&fn(n);break;case 13:fn(n);break;case 19:g(He);break;case 10:jn(n.type);break;case 22:case 23:fn(n),$i(),e!==null&&g(Yt);break;case 24:jn(Ge)}}function Ra(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var a=r.next;t=a;do{if((t.tag&e)===e){r=void 0;var o=t.create,i=t.inst;r=o(),i.destroy=r}t=t.next}while(t!==a)}}catch(l){Oe(n,n.return,l)}}function Ot(e,n,t){try{var r=n.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(l!==void 0){i.destroy=void 0,a=n;var E=t,O=l;try{O()}catch(N){Oe(a,E,N)}}}r=r.next}while(r!==o)}}catch(N){Oe(n,n.return,N)}}function tE(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{_u(n,t)}catch(r){Oe(e,e.return,r)}}}function rE(e,n,t){t.props=_t(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Oe(e,n,r)}}function fa(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(a){Oe(e,n,a)}}function wn(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(a){Oe(e,n,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){Oe(e,n,a)}else t.current=null}function aE(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(a){Oe(e,e.return,a)}}function Ml(e,n,t){try{var r=e.stateNode;sR(r,e.type,t,n),r[tn]=n}catch(a){Oe(e,e.return,a)}}function oE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ct(e.type)||e.tag===4}function Dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ct(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=xn));else if(r!==4&&(r===27&&Ct(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function Co(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&Ct(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Co(e,n,t),e=e.sibling;e!==null;)Co(e,n,t),e=e.sibling}function iE(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Xe(n,r,t),n[je]=e,n[tn]=t}catch(o){Oe(e,e.return,o)}}var $n=!1,Ke=!1,Bl=!1,lE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function YA(e,n){if(e=e.containerInfo,es=zo,e=Tu(e),gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,l=-1,E=-1,O=0,N=0,M=e,I=null;n:for(;;){for(var m;M!==t||a!==0&&M.nodeType!==3||(l=i+a),M!==o||r!==0&&M.nodeType!==3||(E=i+r),M.nodeType===3&&(i+=M.nodeValue.length),(m=M.firstChild)!==null;)I=M,M=m;for(;;){if(M===e)break n;if(I===t&&++O===a&&(l=i),I===o&&++N===r&&(E=i),(m=M.nextSibling)!==null)break;M=I,I=M.parentNode}M=m}t=l===-1||E===-1?null:{start:l,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(ns={focusedElem:e,selectionRange:t},zo=!1,_e=n;_e!==null;)if(n=_e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_e=e;else for(;_e!==null;){switch(n=_e,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)a=e[t],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,a=o.memoizedProps,o=o.memoizedState,r=t.stateNode;try{var Y=_t(t.type,a);e=r.getSnapshotBeforeUpdate(Y,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(J){Oe(t,t.return,J)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)as(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":as(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,_e=e;break}_e=n.return}}function sE(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:et(e,t),r&4&&Ra(5,t);break;case 1:if(et(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(i){Oe(t,t.return,i)}else{var a=_t(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(a,n,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Oe(t,t.return,i)}}r&64&&tE(t),r&512&&fa(t,t.return);break;case 3:if(et(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{_u(e,n)}catch(i){Oe(t,t.return,i)}}break;case 27:n===null&&r&4&&iE(t);case 26:case 5:et(e,t),n===null&&r&4&&aE(t),r&512&&fa(t,t.return);break;case 12:et(e,t);break;case 31:et(e,t),r&4&&EE(e,t);break;case 13:et(e,t),r&4&&dE(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=QA.bind(null,t),fR(e,t))));break;case 22:if(r=t.memoizedState!==null||$n,!r){n=n!==null&&n.memoizedState!==null||Ke,a=$n;var o=Ke;$n=r,(Ke=n)&&!o?nt(e,t,(t.subtreeFlags&8772)!==0):et(e,t),$n=a,Ke=o}break;case 30:break;default:et(e,t)}}function uE(e){var n=e.alternate;n!==null&&(e.alternate=null,uE(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ui(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,an=!1;function qn(e,n,t){for(t=t.child;t!==null;)cE(e,n,t),t=t.sibling}function cE(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Kr,t)}catch{}switch(t.tag){case 26:Ke||wn(t,n),qn(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ke||wn(t,n);var r=Pe,a=an;Ct(t.type)&&(Pe=t.stateNode,an=!1),qn(e,n,t),La(t.stateNode),Pe=r,an=a;break;case 5:Ke||wn(t,n);case 6:if(r=Pe,a=an,Pe=null,qn(e,n,t),Pe=r,an=a,Pe!==null)if(an)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(t.stateNode)}catch(o){Oe(t,n,o)}else try{Pe.removeChild(t.stateNode)}catch(o){Oe(t,n,o)}break;case 18:Pe!==null&&(an?(e=Pe,td(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),kr(e)):td(Pe,t.stateNode));break;case 4:r=Pe,a=an,Pe=t.stateNode.containerInfo,an=!0,qn(e,n,t),Pe=r,an=a;break;case 0:case 11:case 14:case 15:Ot(2,t,n),Ke||Ot(4,t,n),qn(e,n,t);break;case 1:Ke||(wn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&rE(t,n,r)),qn(e,n,t);break;case 21:qn(e,n,t);break;case 22:Ke=(r=Ke)||t.memoizedState!==null,qn(e,n,t),Ke=r;break;default:qn(e,n,t)}}function EE(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(t){Oe(n,n.return,t)}}}function dE(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(t){Oe(n,n.return,t)}}function xA(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new lE),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new lE),n;default:throw Error(u(435,e.tag))}}function Lo(e,n){var t=xA(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var a=XA.bind(null,e,r);r.then(a,a)}})}function on(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r],o=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(Ct(l.type)){Pe=l.stateNode,an=!1;break e}break;case 5:Pe=l.stateNode,an=!1;break e;case 3:case 4:Pe=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(Pe===null)throw Error(u(160));cE(o,i,a),Pe=null,an=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)SE(n,e),n=n.sibling}var vn=null;function SE(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:on(n,e),ln(e),r&4&&(Ot(3,e,e.return),Ra(3,e),Ot(5,e,e.return));break;case 1:on(n,e),ln(e),r&512&&(Ke||t===null||wn(t,t.return)),r&64&&$n&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var a=vn;if(on(n,e),ln(e),r&512&&(Ke||t===null||wn(t,t.return)),r&4){var o=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,a=a.ownerDocument||a;n:switch(r){case"title":o=a.getElementsByTagName("title")[0],(!o||o[Wr]||o[je]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),Xe(o,r,t),o[je]=e,ze(o),r=o;break e;case"link":var i=Sd("link","href",a).get(r+(t.href||""));if(i){for(var l=0;l<i.length;l++)if(o=i[l],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(l,1);break n}}o=a.createElement(r),Xe(o,r,t),a.head.appendChild(o);break;case"meta":if(i=Sd("meta","content",a).get(r+(t.content||""))){for(l=0;l<i.length;l++)if(o=i[l],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(l,1);break n}}o=a.createElement(r),Xe(o,r,t),a.head.appendChild(o);break;default:throw Error(u(468,r))}o[je]=e,ze(o),r=o}e.stateNode=r}else Ad(a,e.type,e.stateNode);else e.stateNode=dd(a,r,e.memoizedProps);else o!==r?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,r===null?Ad(a,e.type,e.stateNode):dd(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ml(e,e.memoizedProps,t.memoizedProps)}break;case 27:on(n,e),ln(e),r&512&&(Ke||t===null||wn(t,t.return)),t!==null&&r&4&&Ml(e,e.memoizedProps,t.memoizedProps);break;case 5:if(on(n,e),ln(e),r&512&&(Ke||t===null||wn(t,t.return)),e.flags&32){a=e.stateNode;try{or(a,"")}catch(Y){Oe(e,e.return,Y)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Ml(e,a,t!==null?t.memoizedProps:a)),r&1024&&(Bl=!0);break;case 6:if(on(n,e),ln(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(Y){Oe(e,e.return,Y)}}break;case 3:if(Yo=null,a=vn,vn=Fo(n.containerInfo),on(n,e),vn=a,ln(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{kr(n.containerInfo)}catch(Y){Oe(e,e.return,Y)}Bl&&(Bl=!1,AE(e));break;case 4:r=vn,vn=Fo(e.stateNode.containerInfo),on(n,e),ln(e),vn=r;break;case 12:on(n,e),ln(e);break;case 31:on(n,e),ln(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lo(e,r)));break;case 13:on(n,e),ln(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(yo=cn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lo(e,r)));break;case 22:a=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,O=$n,N=Ke;if($n=O||a,Ke=N||E,on(n,e),Ke=N,$n=O,ln(e),r&8192)e:for(n=e.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(t===null||E||$n||Ke||jt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){E=t=n;try{if(o=E.stateNode,a)i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{l=E.stateNode;var M=E.memoizedProps.style,I=M!=null&&M.hasOwnProperty("display")?M.display:null;l.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(Y){Oe(E,E.return,Y)}}}else if(n.tag===6){if(t===null){E=n;try{E.stateNode.nodeValue=a?"":E.memoizedProps}catch(Y){Oe(E,E.return,Y)}}}else if(n.tag===18){if(t===null){E=n;try{var m=E.stateNode;a?rd(m,!0):rd(E.stateNode,!1)}catch(Y){Oe(E,E.return,Y)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,Lo(e,t))));break;case 19:on(n,e),ln(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lo(e,r)));break;case 30:break;case 21:break;default:on(n,e),ln(e)}}function ln(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(oE(r)){t=r;break}r=r.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var a=t.stateNode,o=Dl(e);Co(e,o,a);break;case 5:var i=t.stateNode;t.flags&32&&(or(i,""),t.flags&=-33);var l=Dl(e);Co(e,l,i);break;case 3:case 4:var E=t.stateNode.containerInfo,O=Dl(e);vl(e,O,E);break;default:throw Error(u(161))}}catch(N){Oe(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function AE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;AE(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function et(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sE(e,n.alternate,n),n=n.sibling}function jt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ot(4,n,n.return),jt(n);break;case 1:wn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&rE(n,n.return,t),jt(n);break;case 27:La(n.stateNode);case 26:case 5:wn(n,n.return),jt(n);break;case 22:n.memoizedState===null&&jt(n);break;case 30:jt(n);break;default:jt(n)}e=e.sibling}}function nt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,a=e,o=n,i=o.flags;switch(o.tag){case 0:case 11:case 15:nt(a,o,t),Ra(4,o);break;case 1:if(nt(a,o,t),r=o,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(O){Oe(r,r.return,O)}if(r=o,a=r.updateQueue,a!==null){var l=r.stateNode;try{var E=a.shared.hiddenCallbacks;if(E!==null)for(a.shared.hiddenCallbacks=null,a=0;a<E.length;a++)zu(E[a],l)}catch(O){Oe(r,r.return,O)}}t&&i&64&&tE(o),fa(o,o.return);break;case 27:iE(o);case 26:case 5:nt(a,o,t),t&&r===null&&i&4&&aE(o),fa(o,o.return);break;case 12:nt(a,o,t);break;case 31:nt(a,o,t),t&&i&4&&EE(a,o);break;case 13:nt(a,o,t),t&&i&4&&dE(a,o);break;case 22:o.memoizedState===null&&nt(a,o,t),fa(o,o.return);break;case 30:break;default:nt(a,o,t)}n=n.sibling}}function Hl(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ta(t))}function Ul(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ta(e))}function Bn(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)RE(e,n,t,r),n=n.sibling}function RE(e,n,t,r){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n,t,r),a&2048&&Ra(9,n);break;case 1:Bn(e,n,t,r);break;case 3:Bn(e,n,t,r),a&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ta(e)));break;case 12:if(a&2048){Bn(e,n,t,r),e=n.stateNode;try{var o=n.memoizedProps,i=o.id,l=o.onPostCommit;typeof l=="function"&&l(i,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Oe(n,n.return,E)}}else Bn(e,n,t,r);break;case 31:Bn(e,n,t,r);break;case 13:Bn(e,n,t,r);break;case 23:break;case 22:o=n.stateNode,i=n.alternate,n.memoizedState!==null?o._visibility&2?Bn(e,n,t,r):Oa(e,n):o._visibility&2?Bn(e,n,t,r):(o._visibility|=2,Lr(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),a&2048&&Hl(i,n);break;case 24:Bn(e,n,t,r),a&2048&&Ul(n.alternate,n);break;default:Bn(e,n,t,r)}}function Lr(e,n,t,r,a){for(a=a&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,i=n,l=t,E=r,O=i.flags;switch(i.tag){case 0:case 11:case 15:Lr(o,i,l,E,a),Ra(8,i);break;case 23:break;case 22:var N=i.stateNode;i.memoizedState!==null?N._visibility&2?Lr(o,i,l,E,a):Oa(o,i):(N._visibility|=2,Lr(o,i,l,E,a)),a&&O&2048&&Hl(i.alternate,i);break;case 24:Lr(o,i,l,E,a),a&&O&2048&&Ul(i.alternate,i);break;default:Lr(o,i,l,E,a)}n=n.sibling}}function Oa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,a=r.flags;switch(r.tag){case 22:Oa(t,r),a&2048&&Hl(r.alternate,r);break;case 24:Oa(t,r),a&2048&&Ul(r.alternate,r);break;default:Oa(t,r)}n=n.sibling}}var pa=8192;function gr(e,n,t){if(e.subtreeFlags&pa)for(e=e.child;e!==null;)fE(e,n,t),e=e.sibling}function fE(e,n,t){switch(e.tag){case 26:gr(e,n,t),e.flags&pa&&e.memoizedState!==null&&PR(t,vn,e.memoizedState,e.memoizedProps);break;case 5:gr(e,n,t);break;case 3:case 4:var r=vn;vn=Fo(e.stateNode.containerInfo),gr(e,n,t),vn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=pa,pa=16777216,gr(e,n,t),pa=r):gr(e,n,t));break;default:gr(e,n,t)}}function OE(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ta(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];_e=r,TE(r,e)}OE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pE(e),e=e.sibling}function pE(e){switch(e.tag){case 0:case 11:case 15:Ta(e),e.flags&2048&&Ot(9,e,e.return);break;case 3:Ta(e);break;case 12:Ta(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,go(e)):Ta(e);break;default:Ta(e)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];_e=r,TE(r,e)}OE(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ot(8,n,n.return),go(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,go(n));break;default:go(n)}e=e.sibling}}function TE(e,n){for(;_e!==null;){var t=_e;switch(t.tag){case 0:case 11:case 15:Ot(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ta(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,_e=r;else e:for(t=e;_e!==null;){r=_e;var a=r.sibling,o=r.return;if(uE(r),r===t){_e=null;break e}if(a!==null){a.return=o,_e=a;break e}_e=o}}}var WA={getCacheForType:function(e){var n=Ze(Ge),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Ze(Ge).controller.signal}},VA=typeof WeakMap=="function"?WeakMap:Map,Se=0,me=null,te=null,ae=0,fe=0,On=null,pt=!1,yr=!1,kl=!1,tt=0,Me=0,Tt=0,Jt=0,Gl=0,pn=0,Pr=0,Ia=null,sn=null,wl=!1,yo=0,IE=0,Po=1/0,bo=null,It=null,xe=0,ht=null,br=null,rt=0,Fl=0,Kl=null,hE=null,ha=0,Yl=null;function Tn(){return(Se&2)!==0&&ae!==0?ae&-ae:C.T!==null?jl():Gs()}function mE(){if(pn===0)if((ae&536870912)===0||se){var e=ka;ka<<=1,(ka&3932160)===0&&(ka=262144),pn=e}else pn=536870912;return e=Rn.current,e!==null&&(e.flags|=32),pn}function un(e,n,t){(e===me&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),mt(e,ae,pn,!1)),xr(e,t),((Se&2)===0||e!==me)&&(e===me&&((Se&2)===0&&(Jt|=t),Me===4&&mt(e,ae,pn,!1)),Fn(e))}function NE(e,n,t){if((Se&6)!==0)throw Error(u(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Yr(e,n),a=r?jA(e,n):Wl(e,n,!0),o=r;do{if(a===0){yr&&!r&&mt(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!zA(t)){a=Wl(e,n,!1),o=!1;continue}if(a===2){if(o=n,e.errorRecoveryDisabledLanes&o)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){n=i;e:{var l=e;a=Ia;var E=l.current.memoizedState.isDehydrated;if(E&&(Mr(l,i).flags|=256),i=Wl(l,i,!1),i!==2){if(kl&&!E){l.errorRecoveryDisabledLanes|=o,Jt|=o,a=4;break e}o=sn,sn=a,o!==null&&(sn===null?sn=o:sn.push.apply(sn,o))}a=i}if(o=!1,a!==2)continue}}if(a===1){Mr(e,0),mt(e,n,0,!0);break}e:{switch(r=e,o=a,o){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:mt(r,n,pn,!pt);break e;case 2:sn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(a=yo+300-cn(),10<a)){if(mt(r,n,pn,!pt),wa(r,0,!0)!==0)break e;rt=n,r.timeoutHandle=ed(CE.bind(null,r,t,sn,bo,wl,n,pn,Jt,Pr,pt,o,"Throttled",-0,0),a);break e}CE(r,t,sn,bo,wl,n,pn,Jt,Pr,pt,o,null,-0,0)}}break}while(!0);Fn(e)}function CE(e,n,t,r,a,o,i,l,E,O,N,M,I,m){if(e.timeoutHandle=-1,M=n.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xn},fE(n,o,M);var Y=(o&62914560)===o?yo-cn():(o&4194048)===o?IE-cn():0;if(Y=bR(M,Y),Y!==null){rt=o,e.cancelPendingCommit=Y(vE.bind(null,e,n,o,t,r,a,i,l,E,N,M,null,I,m)),mt(e,o,i,!O);return}}vE(e,n,o,t,r,a,i,l,E)}function zA(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!Sn(o(),a))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mt(e,n,t,r){n&=~Gl,n&=~Jt,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var a=n;0<a;){var o=31-dn(a),i=1<<o;r[o]=-1,a&=~i}t!==0&&Hs(e,t,n)}function Mo(){return(Se&6)===0?(ma(0),!1):!0}function xl(){if(te!==null){if(fe===0)var e=te.return;else e=te,_n=Ft=null,al(e),Ir=null,aa=0,e=te;for(;e!==null;)nE(e.alternate,e),e=e.return;te=null}}function Mr(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,ER(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rt=0,xl(),me=e,te=t=Vn(e.current,null),ae=n,fe=0,On=null,pt=!1,yr=Yr(e,n),kl=!1,Pr=pn=Gl=Jt=Tt=Me=0,sn=Ia=null,wl=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var a=31-dn(r),o=1<<a;n|=e[a],r&=~o}return tt=n,Qa(),t}function LE(e,n){X=null,C.H=da,n===Tr||n===ao?(n=Yu(),fe=3):n===_i?(n=Yu(),fe=4):fe=n===Il?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,On=n,te===null&&(Me=1,To(e,Nn(n,e.current)))}function gE(){var e=Rn.current;return e===null?!0:(ae&4194048)===ae?Dn===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Dn:!1}function yE(){var e=C.H;return C.H=da,e===null?da:e}function PE(){var e=C.A;return C.A=WA,e}function Do(){Me=4,pt||(ae&4194048)!==ae&&Rn.current!==null||(yr=!0),(Tt&134217727)===0&&(Jt&134217727)===0||me===null||mt(me,ae,pn,!1)}function Wl(e,n,t){var r=Se;Se|=2;var a=yE(),o=PE();(me!==e||ae!==n)&&(bo=null,Mr(e,n)),n=!1;var i=Me;e:do try{if(fe!==0&&te!==null){var l=te,E=On;switch(fe){case 8:xl(),i=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var O=fe;if(fe=0,On=null,Dr(e,l,E,O),t&&yr){i=0;break e}break;default:O=fe,fe=0,On=null,Dr(e,l,E,O)}}_A(),i=Me;break}catch(N){LE(e,N)}while(!0);return n&&e.shellSuspendCounter++,_n=Ft=null,Se=r,C.H=a,C.A=o,te===null&&(me=null,ae=0,Qa()),i}function _A(){for(;te!==null;)bE(te)}function jA(e,n){var t=Se;Se|=2;var r=yE(),a=PE();me!==e||ae!==n?(bo=null,Po=cn()+500,Mr(e,n)):yr=Yr(e,n);e:do try{if(fe!==0&&te!==null){n=te;var o=On;n:switch(fe){case 1:fe=0,On=null,Dr(e,n,o,1);break;case 2:case 9:if(Fu(o)){fe=0,On=null,ME(n);break}n=function(){fe!==2&&fe!==9||me!==e||(fe=7),Fn(e)},o.then(n,n);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Fu(o)?(fe=0,On=null,ME(n)):(fe=0,On=null,Dr(e,n,o,7));break;case 5:var i=null;switch(te.tag){case 26:i=te.memoizedState;case 5:case 27:var l=te;if(i?Rd(i):l.stateNode.complete){fe=0,On=null;var E=l.sibling;if(E!==null)te=E;else{var O=l.return;O!==null?(te=O,vo(O)):te=null}break n}}fe=0,On=null,Dr(e,n,o,5);break;case 6:fe=0,On=null,Dr(e,n,o,6);break;case 8:xl(),Me=6;break e;default:throw Error(u(462))}}JA();break}catch(N){LE(e,N)}while(!0);return _n=Ft=null,C.H=r,C.A=a,Se=t,te!==null?0:(me=null,ae=0,Qa(),Me)}function JA(){for(;te!==null&&!OS();)bE(te)}function bE(e){var n=qc(e.alternate,e,tt);e.memoizedProps=e.pendingProps,n===null?vo(e):te=n}function ME(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=jc(t,n,n.pendingProps,n.type,void 0,ae);break;case 11:n=jc(t,n,n.pendingProps,n.type.render,n.ref,ae);break;case 5:al(n);default:nE(t,n),n=te=Pu(n,tt),n=qc(t,n,tt)}e.memoizedProps=e.pendingProps,n===null?vo(e):te=n}function Dr(e,n,t,r){_n=Ft=null,al(n),Ir=null,aa=0;var a=n.return;try{if(kA(e,a,n,t,ae)){Me=1,To(e,Nn(t,e.current)),te=null;return}}catch(o){if(a!==null)throw te=a,o;Me=1,To(e,Nn(t,e.current)),te=null;return}n.flags&32768?(se||r===1?e=!0:yr||(ae&536870912)!==0?e=!1:(pt=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),DE(n,e)):vo(n)}function vo(e){var n=e;do{if((n.flags&32768)!==0){DE(n,pt);return}e=n.return;var t=FA(n.alternate,n,tt);if(t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);Me===0&&(Me=5)}function DE(e,n){do{var t=KA(e.alternate,e);if(t!==null){t.flags&=32767,te=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){te=e;return}te=e=t}while(e!==null);Me=6,te=null}function vE(e,n,t,r,a,o,i,l,E){e.cancelPendingCommit=null;do Bo();while(xe!==0);if((Se&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(o=n.lanes|n.childLanes,o|=Di,yS(e,t,o,i,l,E),e===me&&(te=me=null,ae=0),br=n,ht=e,rt=t,Fl=o,Kl=a,hE=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$A(Ha,function(){return GE(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=C.T,C.T=null,a=w.p,w.p=2,i=Se,Se|=4;try{YA(e,n,t)}finally{Se=i,w.p=a,C.T=r}}xe=1,BE(),HE(),UE()}}function BE(){if(xe===1){xe=0;var e=ht,n=br,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=C.T,C.T=null;var r=w.p;w.p=2;var a=Se;Se|=4;try{SE(n,e);var o=ns,i=Tu(e.containerInfo),l=o.focusedElem,E=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&pu(l.ownerDocument.documentElement,l)){if(E!==null&&gi(l)){var O=E.start,N=E.end;if(N===void 0&&(N=O),"selectionStart"in l)l.selectionStart=O,l.selectionEnd=Math.min(N,l.value.length);else{var M=l.ownerDocument||document,I=M&&M.defaultView||window;if(I.getSelection){var m=I.getSelection(),Y=l.textContent.length,J=Math.min(E.start,Y),Ie=E.end===void 0?J:Math.min(E.end,Y);!m.extend&&J>Ie&&(i=Ie,Ie=J,J=i);var R=Ou(l,J),d=Ou(l,Ie);if(R&&d&&(m.rangeCount!==1||m.anchorNode!==R.node||m.anchorOffset!==R.offset||m.focusNode!==d.node||m.focusOffset!==d.offset)){var f=M.createRange();f.setStart(R.node,R.offset),m.removeAllRanges(),J>Ie?(m.addRange(f),m.extend(d.node,d.offset)):(f.setEnd(d.node,d.offset),m.addRange(f))}}}}for(M=[],m=l;m=m.parentNode;)m.nodeType===1&&M.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<M.length;l++){var L=M[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}zo=!!es,ns=es=null}finally{Se=a,w.p=r,C.T=t}}e.current=n,xe=2}}function HE(){if(xe===2){xe=0;var e=ht,n=br,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=C.T,C.T=null;var r=w.p;w.p=2;var a=Se;Se|=4;try{sE(e,n.alternate,n)}finally{Se=a,w.p=r,C.T=t}}xe=3}}function UE(){if(xe===4||xe===3){xe=0,pS();var e=ht,n=br,t=rt,r=hE;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xe=5:(xe=0,br=ht=null,kE(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(It=null),li(t),n=n.stateNode,En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Kr,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=C.T,a=w.p,w.p=2,C.T=null;try{for(var o=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];o(l.value,{componentStack:l.stack})}}finally{C.T=n,w.p=a}}(rt&3)!==0&&Bo(),Fn(e),a=e.pendingLanes,(t&261930)!==0&&(a&42)!==0?e===Yl?ha++:(ha=0,Yl=e):ha=0,ma(0)}}function kE(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ta(n)))}function Bo(){return BE(),HE(),UE(),GE()}function GE(){if(xe!==5)return!1;var e=ht,n=Fl;Fl=0;var t=li(rt),r=C.T,a=w.p;try{w.p=32>t?32:t,C.T=null,t=Kl,Kl=null;var o=ht,i=rt;if(xe=0,br=ht=null,rt=0,(Se&6)!==0)throw Error(u(331));var l=Se;if(Se|=4,pE(o.current),RE(o,o.current,i,t),Se=l,ma(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Kr,o)}catch{}return!0}finally{w.p=a,C.T=r,kE(e,n)}}function wE(e,n,t){n=Nn(t,n),n=Tl(e.stateNode,n,2),e=At(e,n,2),e!==null&&(xr(e,2),Fn(e))}function Oe(e,n,t){if(e.tag===3)wE(e,e,t);else for(;n!==null;){if(n.tag===3){wE(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Nn(t,e),t=Fc(2),r=At(n,t,2),r!==null&&(Kc(t,r,n,e),xr(r,2),Fn(r));break}}n=n.return}}function Vl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new VA;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(kl=!0,a.add(t),e=ZA.bind(null,e,n,t),n.then(e,e))}function ZA(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,me===e&&(ae&t)===t&&(Me===4||Me===3&&(ae&62914560)===ae&&300>cn()-yo?(Se&2)===0&&Mr(e,0):Gl|=t,Pr===ae&&(Pr=0)),Fn(e)}function FE(e,n){n===0&&(n=Bs()),e=kt(e,n),e!==null&&(xr(e,n),Fn(e))}function QA(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),FE(e,t)}function XA(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(n),FE(e,t)}function $A(e,n){return ri(e,n)}var Ho=null,vr=null,zl=!1,Uo=!1,_l=!1,Nt=0;function Fn(e){e!==vr&&e.next===null&&(vr===null?Ho=vr=e:vr=vr.next=e),Uo=!0,zl||(zl=!0,eR())}function ma(e,n){if(!_l&&Uo){_l=!0;do for(var t=!1,r=Ho;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-dn(42|e)+1)-1,o&=a&~(i&~l),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,WE(r,o))}else o=ae,o=wa(r,r===me?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||Yr(r,o)||(t=!0,WE(r,o));r=r.next}while(t);_l=!1}}function qA(){KE()}function KE(){Uo=zl=!1;var e=0;Nt!==0&&cR()&&(e=Nt);for(var n=cn(),t=null,r=Ho;r!==null;){var a=r.next,o=YE(r,n);o===0?(r.next=null,t===null?Ho=a:t.next=a,a===null&&(vr=t)):(t=r,(e!==0||(o&3)!==0)&&(Uo=!0)),r=a}xe!==0&&xe!==5||ma(e),Nt!==0&&(Nt=0)}function YE(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var i=31-dn(o),l=1<<i,E=a[i];E===-1?((l&t)===0||(l&r)!==0)&&(a[i]=gS(l,n)):E<=n&&(e.expiredLanes|=l),o&=~l}if(n=me,t=ae,t=wa(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ai(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Yr(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&ai(r),li(t)){case 2:case 8:t=Ds;break;case 32:t=Ha;break;case 268435456:t=vs;break;default:t=Ha}return r=xE.bind(null,e),t=ri(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&ai(r),e.callbackPriority=2,e.callbackNode=null,2}function xE(e,n){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Bo()&&e.callbackNode!==t)return null;var r=ae;return r=wa(e,e===me?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(NE(e,r,n),YE(e,cn()),e.callbackNode!=null&&e.callbackNode===t?xE.bind(null,e):null)}function WE(e,n){if(Bo())return null;NE(e,n,!0)}function eR(){dR(function(){(Se&6)!==0?ri(Ms,qA):KE()})}function jl(){if(Nt===0){var e=Or;e===0&&(e=Ua,Ua<<=1,(Ua&261888)===0&&(Ua=256)),Nt=e}return Nt}function VE(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xa(""+e)}function zE(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function nR(e,n,t,r,a){if(n==="submit"&&t&&t.stateNode===a){var o=VE((a[tn]||null).action),i=r.submitter;i&&(n=(n=i[tn]||null)?VE(n.formAction):i.getAttribute("formAction"),n!==null&&(o=n,i=null));var l=new _a("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Nt!==0){var E=i?zE(a,i):new FormData(a);Sl(t,{pending:!0,data:E,method:a.method,action:o},null,E)}}else typeof o=="function"&&(l.preventDefault(),E=i?zE(a,i):new FormData(a),Sl(t,{pending:!0,data:E,method:a.method,action:o},o,E))},currentTarget:a}]})}}for(var Jl=0;Jl<Mi.length;Jl++){var Zl=Mi[Jl],tR=Zl.toLowerCase(),rR=Zl[0].toUpperCase()+Zl.slice(1);Mn(tR,"on"+rR)}Mn(mu,"onAnimationEnd"),Mn(Nu,"onAnimationIteration"),Mn(Cu,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(TA,"onTransitionRun"),Mn(IA,"onTransitionStart"),Mn(hA,"onTransitionCancel"),Mn(Lu,"onTransitionEnd"),rr("onMouseEnter",["mouseout","mouseover"]),rr("onMouseLeave",["mouseout","mouseover"]),rr("onPointerEnter",["pointerout","pointerover"]),rr("onPointerLeave",["pointerout","pointerover"]),vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Na));function _E(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],E=l.instance,O=l.currentTarget;if(l=l.listener,E!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=O;try{o(a)}catch(N){Za(N)}a.currentTarget=null,o=E}else for(i=0;i<r.length;i++){if(l=r[i],E=l.instance,O=l.currentTarget,l=l.listener,E!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=O;try{o(a)}catch(N){Za(N)}a.currentTarget=null,o=E}}}}function re(e,n){var t=n[si];t===void 0&&(t=n[si]=new Set);var r=e+"__bubble";t.has(r)||(jE(n,e,2,!1),t.add(r))}function Ql(e,n,t){var r=0;n&&(r|=4),jE(t,e,r,n)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Xl(e){if(!e[ko]){e[ko]=!0,Ks.forEach(function(t){t!=="selectionchange"&&(aR.has(t)||Ql(t,!1,e),Ql(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ko]||(n[ko]=!0,Ql("selectionchange",!1,n))}}function jE(e,n,t,r){switch(md(n)){case 2:var a=vR;break;case 8:a=BR;break;default:a=ds}t=a.bind(null,n,t,e),a=void 0,!Oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function $l(e,n,t,r,a){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a)break;if(i===4)for(i=r.return;i!==null;){var E=i.tag;if((E===3||E===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;l!==null;){if(i=er(l),i===null)return;if(E=i.tag,E===5||E===6||E===26||E===27){r=o=i;continue e}l=l.parentNode}}r=r.return}$s(function(){var O=o,N=Ri(t),M=[];e:{var I=gu.get(e);if(I!==void 0){var m=_a,Y=e;switch(e){case"keypress":if(Va(t)===0)break e;case"keydown":case"keyup":m=XS;break;case"focusin":Y="focus",m=hi;break;case"focusout":Y="blur",m=hi;break;case"beforeblur":case"afterblur":m=hi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=eA;break;case mu:case Nu:case Cu:m=xS;break;case Lu:m=tA;break;case"scroll":case"scrollend":m=GS;break;case"wheel":m=aA;break;case"copy":case"cut":case"paste":m=VS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ru;break;case"toggle":case"beforetoggle":m=iA}var J=(n&4)!==0,Ie=!J&&(e==="scroll"||e==="scrollend"),R=J?I!==null?I+"Capture":null:I;J=[];for(var d=O,f;d!==null;){var L=d;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||R===null||(L=zr(d,R),L!=null&&J.push(Ca(d,L,f))),Ie)break;d=d.return}0<J.length&&(I=new m(I,Y,null,t,N),M.push({event:I,listeners:J}))}}if((n&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",I&&t!==Ai&&(Y=t.relatedTarget||t.fromElement)&&(er(Y)||Y[qt]))break e;if((m||I)&&(I=N.window===N?N:(I=N.ownerDocument)?I.defaultView||I.parentWindow:window,m?(Y=t.relatedTarget||t.toElement,m=O,Y=Y?er(Y):null,Y!==null&&(Ie=b(Y),J=Y.tag,Y!==Ie||J!==5&&J!==27&&J!==6)&&(Y=null)):(m=null,Y=O),m!==Y)){if(J=nu,L="onMouseLeave",R="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(J=ru,L="onPointerLeave",R="onPointerEnter",d="pointer"),Ie=m==null?I:Vr(m),f=Y==null?I:Vr(Y),I=new J(L,d+"leave",m,t,N),I.target=Ie,I.relatedTarget=f,L=null,er(N)===O&&(J=new J(R,d+"enter",Y,t,N),J.target=f,J.relatedTarget=Ie,L=J),Ie=L,m&&Y)n:{for(J=oR,R=m,d=Y,f=0,L=R;L;L=J(L))f++;L=0;for(var _=d;_;_=J(_))L++;for(;0<f-L;)R=J(R),f--;for(;0<L-f;)d=J(d),L--;for(;f--;){if(R===d||d!==null&&R===d.alternate){J=R;break n}R=J(R),d=J(d)}J=null}else J=null;m!==null&&JE(M,I,m,J,!1),Y!==null&&Ie!==null&&JE(M,Ie,Y,J,!0)}}e:{if(I=O?Vr(O):window,m=I.nodeName&&I.nodeName.toLowerCase(),m==="select"||m==="input"&&I.type==="file")var Ee=Eu;else if(uu(I))if(du)Ee=fA;else{Ee=AA;var x=SA}else m=I.nodeName,!m||m.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?O&&Si(O.elementType)&&(Ee=Eu):Ee=RA;if(Ee&&(Ee=Ee(e,O))){cu(M,Ee,t,N);break e}x&&x(e,I,O),e==="focusout"&&O&&I.type==="number"&&O.memoizedProps.value!=null&&di(I,"number",I.value)}switch(x=O?Vr(O):window,e){case"focusin":(uu(x)||x.contentEditable==="true")&&(ur=x,yi=O,qr=null);break;case"focusout":qr=yi=ur=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,Iu(M,t,N);break;case"selectionchange":if(pA)break;case"keydown":case"keyup":Iu(M,t,N)}var ee;if(Ni)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else sr?lu(e,t)&&(oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(oe="onCompositionStart");oe&&(au&&t.locale!=="ko"&&(sr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&sr&&(ee=qs()):(lt=N,pi="value"in lt?lt.value:lt.textContent,sr=!0)),x=Go(O,oe),0<x.length&&(oe=new tu(oe,e,null,t,N),M.push({event:oe,listeners:x}),ee?oe.data=ee:(ee=su(t),ee!==null&&(oe.data=ee)))),(ee=sA?uA(e,t):cA(e,t))&&(oe=Go(O,"onBeforeInput"),0<oe.length&&(x=new tu("onBeforeInput","beforeinput",null,t,N),M.push({event:x,listeners:oe}),x.data=ee)),nR(M,e,O,t,N)}_E(M,n)})}function Ca(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Go(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=zr(e,t),a!=null&&r.unshift(Ca(e,a,o)),a=zr(e,n),a!=null&&r.push(Ca(e,a,o))),e.tag===3)return r;e=e.return}return[]}function oR(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function JE(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var l=t,E=l.alternate,O=l.stateNode;if(l=l.tag,E!==null&&E===r)break;l!==5&&l!==26&&l!==27||O===null||(E=O,a?(O=zr(t,o),O!=null&&i.unshift(Ca(t,O,E))):a||(O=zr(t,o),O!=null&&i.push(Ca(t,O,E)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var iR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function ZE(e){return(typeof e=="string"?e:""+e).replace(iR,`
`).replace(lR,"")}function QE(e,n){return n=ZE(n),ZE(e)===n}function Te(e,n,t,r,a,o){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||or(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&or(e,""+r);break;case"className":Ka(e,"class",r);break;case"tabIndex":Ka(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ka(e,t,r);break;case"style":Qs(e,r,o);break;case"data":if(n!=="object"){Ka(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=xa(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Te(e,n,"name",a.name,a,null),Te(e,n,"formEncType",a.formEncType,a,null),Te(e,n,"formMethod",a.formMethod,a,null),Te(e,n,"formTarget",a.formTarget,a,null)):(Te(e,n,"encType",a.encType,a,null),Te(e,n,"method",a.method,a,null),Te(e,n,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=xa(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=xn);break;case"onScroll":r!=null&&re("scroll",e);break;case"onScrollEnd":r!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=xa(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":re("beforetoggle",e),re("toggle",e),Fa(e,"popover",r);break;case"xlinkActuate":Yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Fa(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=US.get(t)||t,Fa(e,t,r))}}function ql(e,n,t,r,a,o){switch(t){case"style":Qs(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof r=="string"?or(e,r):(typeof r=="number"||typeof r=="bigint")&&or(e,""+r);break;case"onScroll":r!=null&&re("scroll",e);break;case"onScrollEnd":r!=null&&re("scrollend",e);break;case"onClick":r!=null&&(e.onclick=xn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ys.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),n=t.slice(2,a?t.length-7:void 0),o=e[tn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,a),typeof r=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,a);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):Fa(e,t,r)}}}function Xe(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var r=!1,a=!1,o;for(o in t)if(t.hasOwnProperty(o)){var i=t[o];if(i!=null)switch(o){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:Te(e,n,o,i,t,null)}}a&&Te(e,n,"srcSet",t.srcSet,t,null),r&&Te(e,n,"src",t.src,t,null);return;case"input":re("invalid",e);var l=o=i=a=null,E=null,O=null;for(r in t)if(t.hasOwnProperty(r)){var N=t[r];if(N!=null)switch(r){case"name":a=N;break;case"type":i=N;break;case"checked":E=N;break;case"defaultChecked":O=N;break;case"value":o=N;break;case"defaultValue":l=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,n));break;default:Te(e,n,r,N,t,null)}}_s(e,o,l,E,O,i,a,!1);return;case"select":re("invalid",e),r=i=o=null;for(a in t)if(t.hasOwnProperty(a)&&(l=t[a],l!=null))switch(a){case"value":o=l;break;case"defaultValue":i=l;break;case"multiple":r=l;default:Te(e,n,a,l,t,null)}n=o,t=i,e.multiple=!!r,n!=null?ar(e,!!r,n,!1):t!=null&&ar(e,!!r,t,!0);return;case"textarea":re("invalid",e),o=a=r=null;for(i in t)if(t.hasOwnProperty(i)&&(l=t[i],l!=null))switch(i){case"value":r=l;break;case"defaultValue":a=l;break;case"children":o=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:Te(e,n,i,l,t,null)}Js(e,r,a,o);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(r=t[E],r!=null))switch(E){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Te(e,n,E,r,t,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(r=0;r<Na.length;r++)re(Na[r],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in t)if(t.hasOwnProperty(O)&&(r=t[O],r!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:Te(e,n,O,r,t,null)}return;default:if(Si(n)){for(N in t)t.hasOwnProperty(N)&&(r=t[N],r!==void 0&&ql(e,n,N,r,t,void 0));return}}for(l in t)t.hasOwnProperty(l)&&(r=t[l],r!=null&&Te(e,n,l,r,t,null))}function sR(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,i=null,l=null,E=null,O=null,N=null;for(m in t){var M=t[m];if(t.hasOwnProperty(m)&&M!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":E=M;default:r.hasOwnProperty(m)||Te(e,n,m,null,r,M)}}for(var I in r){var m=r[I];if(M=t[I],r.hasOwnProperty(I)&&(m!=null||M!=null))switch(I){case"type":o=m;break;case"name":a=m;break;case"checked":O=m;break;case"defaultChecked":N=m;break;case"value":i=m;break;case"defaultValue":l=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(137,n));break;default:m!==M&&Te(e,n,I,m,r,M)}}Ei(e,i,l,E,O,N,o,a);return;case"select":m=i=l=I=null;for(o in t)if(E=t[o],t.hasOwnProperty(o)&&E!=null)switch(o){case"value":break;case"multiple":m=E;default:r.hasOwnProperty(o)||Te(e,n,o,null,r,E)}for(a in r)if(o=r[a],E=t[a],r.hasOwnProperty(a)&&(o!=null||E!=null))switch(a){case"value":I=o;break;case"defaultValue":l=o;break;case"multiple":i=o;default:o!==E&&Te(e,n,a,o,r,E)}n=l,t=i,r=m,I!=null?ar(e,!!t,I,!1):!!r!=!!t&&(n!=null?ar(e,!!t,n,!0):ar(e,!!t,t?[]:"",!1));return;case"textarea":m=I=null;for(l in t)if(a=t[l],t.hasOwnProperty(l)&&a!=null&&!r.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:Te(e,n,l,null,r,a)}for(i in r)if(a=r[i],o=t[i],r.hasOwnProperty(i)&&(a!=null||o!=null))switch(i){case"value":I=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==o&&Te(e,n,i,a,r,o)}js(e,I,m);return;case"option":for(var Y in t)if(I=t[Y],t.hasOwnProperty(Y)&&I!=null&&!r.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:Te(e,n,Y,null,r,I)}for(E in r)if(I=r[E],m=t[E],r.hasOwnProperty(E)&&I!==m&&(I!=null||m!=null))switch(E){case"selected":e.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Te(e,n,E,I,r,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in t)I=t[J],t.hasOwnProperty(J)&&I!=null&&!r.hasOwnProperty(J)&&Te(e,n,J,null,r,I);for(O in r)if(I=r[O],m=t[O],r.hasOwnProperty(O)&&I!==m&&(I!=null||m!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,n));break;default:Te(e,n,O,I,r,m)}return;default:if(Si(n)){for(var Ie in t)I=t[Ie],t.hasOwnProperty(Ie)&&I!==void 0&&!r.hasOwnProperty(Ie)&&ql(e,n,Ie,void 0,r,I);for(N in r)I=r[N],m=t[N],!r.hasOwnProperty(N)||I===m||I===void 0&&m===void 0||ql(e,n,N,I,r,m);return}}for(var R in t)I=t[R],t.hasOwnProperty(R)&&I!=null&&!r.hasOwnProperty(R)&&Te(e,n,R,null,r,I);for(M in r)I=r[M],m=t[M],!r.hasOwnProperty(M)||I===m||I==null&&m==null||Te(e,n,M,I,r,m)}function XE(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var a=t[r],o=a.transferSize,i=a.initiatorType,l=a.duration;if(o&&l&&XE(i)){for(i=0,l=a.responseEnd,r+=1;r<t.length;r++){var E=t[r],O=E.startTime;if(O>l)break;var N=E.transferSize,M=E.initiatorType;N&&XE(M)&&(E=E.responseEnd,i+=N*(E<l?1:(l-O)/(E-O)))}if(--r,n+=8*(o+i)/(a.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var es=null,ns=null;function wo(e){return e.nodeType===9?e:e.ownerDocument}function $E(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qE(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ts(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rs=null;function cR(){var e=window.event;return e&&e.type==="popstate"?e===rs?!1:(rs=e,!0):(rs=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,ER=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,dR=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(SR)}:ed;function SR(e){setTimeout(function(){throw e})}function Ct(e){return e==="head"}function td(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(a),kr(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")La(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,La(t);for(var o=t.firstChild;o;){var i=o.nextSibling,l=o.nodeName;o[Wr]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=i}}else t==="body"&&La(e.ownerDocument.body);t=a}while(t);kr(n)}function rd(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function as(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":as(t),ui(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function AR(e,n,t,r){for(;e.nodeType===1;){var a=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Wr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence")||o!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=yn(e.nextSibling),e===null)break}return null}function RR(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=yn(e.nextSibling),e===null))return null;return e}function ad(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yn(e.nextSibling),e===null))return null;return e}function os(e){return e.data==="$?"||e.data==="$~"}function is(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fR(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ls=null;function od(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return yn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function id(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function ld(e,n,t){switch(n=wo(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function La(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ui(e)}var Pn=new Map,sd=new Set;function Fo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var at=w.d;w.d={f:OR,r:pR,D:TR,C:IR,L:hR,m:mR,X:CR,S:NR,M:LR};function OR(){var e=at.f(),n=Mo();return e||n}function pR(e){var n=nr(e);n!==null&&n.tag===5&&n.type==="form"?Lc(n):at.r(e)}var Br=typeof document>"u"?null:document;function ud(e,n,t){var r=Br;if(r&&typeof n=="string"&&n){var a=bn(n);a='link[rel="'+e+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),sd.has(a)||(sd.add(a),e={rel:e,crossOrigin:t,href:n},r.querySelector(a)===null&&(n=r.createElement("link"),Xe(n,"link",e),ze(n),r.head.appendChild(n)))}}function TR(e){at.D(e),ud("dns-prefetch",e,null)}function IR(e,n){at.C(e,n),ud("preconnect",e,n)}function hR(e,n,t){at.L(e,n,t);var r=Br;if(r&&e&&n){var a='link[rel="preload"][as="'+bn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+bn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+bn(t.imageSizes)+'"]')):a+='[href="'+bn(e)+'"]';var o=a;switch(n){case"style":o=Hr(e);break;case"script":o=Ur(e)}Pn.has(o)||(e=y({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Pn.set(o,e),r.querySelector(a)!==null||n==="style"&&r.querySelector(ga(o))||n==="script"&&r.querySelector(ya(o))||(n=r.createElement("link"),Xe(n,"link",e),ze(n),r.head.appendChild(n)))}}function mR(e,n){at.m(e,n);var t=Br;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+bn(r)+'"][href="'+bn(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ur(e)}if(!Pn.has(o)&&(e=y({rel:"modulepreload",href:e},n),Pn.set(o,e),t.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ya(o)))return}r=t.createElement("link"),Xe(r,"link",e),ze(r),t.head.appendChild(r)}}}function NR(e,n,t){at.S(e,n,t);var r=Br;if(r&&e){var a=tr(r).hoistableStyles,o=Hr(e);n=n||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(ga(o)))l.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Pn.get(o))&&ss(e,t);var E=i=r.createElement("link");ze(E),Xe(E,"link",e),E._p=new Promise(function(O,N){E.onload=O,E.onerror=N}),E.addEventListener("load",function(){l.loading|=1}),E.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ko(i,n,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}}function CR(e,n){at.X(e,n);var t=Br;if(t&&e){var r=tr(t).hoistableScripts,a=Ur(e),o=r.get(a);o||(o=t.querySelector(ya(a)),o||(e=y({src:e,async:!0},n),(n=Pn.get(a))&&us(e,n),o=t.createElement("script"),ze(o),Xe(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}function LR(e,n){at.M(e,n);var t=Br;if(t&&e){var r=tr(t).hoistableScripts,a=Ur(e),o=r.get(a);o||(o=t.querySelector(ya(a)),o||(e=y({src:e,async:!0,type:"module"},n),(n=Pn.get(a))&&us(e,n),o=t.createElement("script"),ze(o),Xe(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}function cd(e,n,t,r){var a=(a=Z.current)?Fo(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Hr(t.href),t=tr(a).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Hr(t.href);var o=tr(a).hoistableStyles,i=o.get(e);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,i),(o=a.querySelector(ga(e)))&&!o._p&&(i.instance=o,i.state.loading=5),Pn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Pn.set(e,t),o||gR(a,e,t,i.state))),n&&r===null)throw Error(u(528,""));return i}if(n&&r!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ur(t),t=tr(a).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Hr(e){return'href="'+bn(e)+'"'}function ga(e){return'link[rel="stylesheet"]['+e+"]"}function Ed(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function gR(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Xe(n,"link",t),ze(n),e.head.appendChild(n))}function Ur(e){return'[src="'+bn(e)+'"]'}function ya(e){return"script[async]"+e}function dd(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+bn(t.href)+'"]');if(r)return n.instance=r,ze(r),r;var a=y({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ze(r),Xe(r,"style",a),Ko(r,t.precedence,e),n.instance=r;case"stylesheet":a=Hr(t.href);var o=e.querySelector(ga(a));if(o)return n.state.loading|=4,n.instance=o,ze(o),o;r=Ed(t),(a=Pn.get(a))&&ss(r,a),o=(e.ownerDocument||e).createElement("link"),ze(o);var i=o;return i._p=new Promise(function(l,E){i.onload=l,i.onerror=E}),Xe(o,"link",r),n.state.loading|=4,Ko(o,t.precedence,e),n.instance=o;case"script":return o=Ur(t.src),(a=e.querySelector(ya(o)))?(n.instance=a,ze(a),a):(r=t,(a=Pn.get(o))&&(r=y({},t),us(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),ze(a),Xe(a,"link",r),e.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ko(r,t.precedence,e));return n.instance}function Ko(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===n)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ss(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function us(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yo=null;function Sd(e,n,t){if(Yo===null){var r=new Map,a=Yo=new Map;a.set(t,r)}else a=Yo,r=a.get(t),r||(r=new Map,a.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),a=0;a<t.length;a++){var o=t[a];if(!(o[Wr]||o[je]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var i=o.getAttribute(n)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function Ad(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function yR(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PR(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=Hr(r.href),o=n.querySelector(ga(a));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,ze(o);return}o=n.ownerDocument||n,r=Ed(r),(a=Pn.get(a))&&ss(r,a),o=o.createElement("link"),ze(o);var i=o;i._p=new Promise(function(l,E){i.onload=l,i.onerror=E}),Xe(o,"link",r),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=xo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var cs=0;function bR(e,n){return e.stylesheets&&e.count===0&&Vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&Vo(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&cs===0&&(cs=62500*uR());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vo(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>cs?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}function xo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wo=null;function Vo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wo=new Map,n.forEach(MR,e),Wo=null,xo.call(e))}function MR(e,n){if(!(n.state.loading&4)){var t=Wo.get(e);if(t)var r=t.get(null);else{t=new Map,Wo.set(e,t);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),r=i)}r&&t.set(null,r)}a=n.instance,i=a.getAttribute("data-precedence"),o=t.get(i)||r,o===r&&t.set(null,a),t.set(i,a),this.count++,r=xo.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),n.state.loading|=4}}var Pa={$$typeof:ie,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function DR(e,n,t,r,a,o,i,l,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.hiddenUpdates=oi(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function fd(e,n,t,r,a,o,i,l,E,O,N,M){return e=new DR(e,n,t,i,E,O,N,M,l),n=1,o===!0&&(n|=24),o=An(3,null,null,n),e.current=o,o.stateNode=e,n=Wi(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:r,isDehydrated:t,cache:n},ji(o),e}function Od(e){return e?(e=dr,e):dr}function pd(e,n,t,r,a,o){a=Od(a),r.context===null?r.context=a:r.pendingContext=a,r=St(n),r.payload={element:t},o=o===void 0?null:o,o!==null&&(r.callback=o),t=At(e,r,n),t!==null&&(un(t,e,n),ia(t,e,n))}function Td(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Es(e,n){Td(e,n),(e=e.alternate)&&Td(e,n)}function Id(e){if(e.tag===13||e.tag===31){var n=kt(e,67108864);n!==null&&un(n,e,67108864),Es(e,67108864)}}function hd(e){if(e.tag===13||e.tag===31){var n=Tn();n=ii(n);var t=kt(e,n);t!==null&&un(t,e,n),Es(e,n)}}var zo=!0;function vR(e,n,t,r){var a=C.T;C.T=null;var o=w.p;try{w.p=2,ds(e,n,t,r)}finally{w.p=o,C.T=a}}function BR(e,n,t,r){var a=C.T;C.T=null;var o=w.p;try{w.p=8,ds(e,n,t,r)}finally{w.p=o,C.T=a}}function ds(e,n,t,r){if(zo){var a=Ss(r);if(a===null)$l(e,n,r,_o,t),Nd(e,r);else if(UR(a,e,n,t,r))r.stopPropagation();else if(Nd(e,r),n&4&&-1<HR.indexOf(e)){for(;a!==null;){var o=nr(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var i=Dt(o.pendingLanes);if(i!==0){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var E=1<<31-dn(i);l.entanglements[1]|=E,i&=~E}Fn(o),(Se&6)===0&&(Po=cn()+500,ma(0))}}break;case 31:case 13:l=kt(o,2),l!==null&&un(l,o,2),Mo(),Es(o,2)}if(o=Ss(r),o===null&&$l(e,n,r,_o,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else $l(e,n,r,null,t)}}function Ss(e){return e=Ri(e),As(e)}var _o=null;function As(e){if(_o=null,e=er(e),e!==null){var n=b(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=D(n),e!==null)return e;e=null}else if(t===31){if(e=U(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _o=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(TS()){case Ms:return 2;case Ds:return 8;case Ha:case IS:return 32;case vs:return 268435456;default:return 32}default:return 32}}var Rs=!1,Lt=null,gt=null,yt=null,ba=new Map,Ma=new Map,Pt=[],HR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(e,n){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":ba.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(n.pointerId)}}function Da(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=nr(n),n!==null&&Id(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function UR(e,n,t,r,a){switch(n){case"focusin":return Lt=Da(Lt,e,n,t,r,a),!0;case"dragenter":return gt=Da(gt,e,n,t,r,a),!0;case"mouseover":return yt=Da(yt,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return ba.set(o,Da(ba.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ma.set(o,Da(Ma.get(o)||null,e,n,t,r,a)),!0}return!1}function Cd(e){var n=er(e.target);if(n!==null){var t=b(n);if(t!==null){if(n=t.tag,n===13){if(n=D(t),n!==null){e.blockedOn=n,ws(e.priority,function(){hd(t)});return}}else if(n===31){if(n=U(t),n!==null){e.blockedOn=n,ws(e.priority,function(){hd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ss(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ai=r,t.target.dispatchEvent(r),Ai=null}else return n=nr(t),n!==null&&Id(n),e.blockedOn=t,!1;n.shift()}return!0}function Ld(e,n,t){jo(e)&&t.delete(n)}function kR(){Rs=!1,Lt!==null&&jo(Lt)&&(Lt=null),gt!==null&&jo(gt)&&(gt=null),yt!==null&&jo(yt)&&(yt=null),ba.forEach(Ld),Ma.forEach(Ld)}function Jo(e,n){e.blockedOn===n&&(e.blockedOn=null,Rs||(Rs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kR)))}var Zo=null;function gd(e){Zo!==e&&(Zo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Zo===e&&(Zo=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],a=e[n+2];if(typeof r!="function"){if(As(r||t)===null)continue;break}var o=nr(t);o!==null&&(e.splice(n,3),n-=3,Sl(o,{pending:!0,data:a,method:t.method,action:r},r,a))}}))}function kr(e){function n(E){return Jo(E,e)}Lt!==null&&Jo(Lt,e),gt!==null&&Jo(gt,e),yt!==null&&Jo(yt,e),ba.forEach(n),Ma.forEach(n);for(var t=0;t<Pt.length;t++){var r=Pt[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Pt.length&&(t=Pt[0],t.blockedOn===null);)Cd(t),t.blockedOn===null&&Pt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var a=t[r],o=t[r+1],i=a[tn]||null;if(typeof o=="function")i||gd(t);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[tn]||null)l=i.formAction;else if(As(a)!==null)continue}else l=i.action;typeof l=="function"?t[r+1]=l:(t.splice(r,3),r-=3),gd(t)}}}function yd(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function n(){a!==null&&(a(),a=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),a!==null&&(a(),a=null)}}}function fs(e){this._internalRoot=e}Qo.prototype.render=fs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,r=Tn();pd(t,r,e,n,null,null)},Qo.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pd(e.current,2,null,e,null,null),Mo(),n[qt]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pt.length&&n!==0&&n<Pt[t].priority;t++);Pt.splice(t,0,e),t===0&&Cd(e)}};var Pd=c.version;if(Pd!=="19.2.3")throw Error(u(527,Pd,"19.2.3"));w.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(n),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var GR={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Kr=Xo.inject(GR),En=Xo}catch{}}return Ba.createRoot=function(e,n){if(!p(e))throw Error(u(299));var t=!1,r="",a=Uc,o=kc,i=Gc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=fd(e,1,!1,null,null,t,r,null,a,o,i,yd),e[qt]=n.current,Xl(e),new fs(n)},Ba.hydrateRoot=function(e,n,t){if(!p(e))throw Error(u(299));var r=!1,a="",o=Uc,i=kc,l=Gc,E=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),n=fd(e,1,!0,n,t??null,r,a,E,o,i,l,yd),n.context=Od(null),t=n.current,r=Tn(),r=ii(r),a=St(r),a.callback=null,At(t,a,r),t=r,n.current.lanes=t,xr(n,t),Fn(n),e[qt]=n.current,Xl(e),new Qo(n)},Ba.version="19.2.3",Ba}var Wd;function ZR(){if(Wd)return Os.exports;Wd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Os.exports=JR(),Os.exports}var QR=ZR();const XR=oS(QR),$R="modulepreload",qR=function(s){return"/"+s},Vd={},Xt=function(s,c,A){let u=Promise.resolve();if(c&&c.length>0){let b=function(P){return Promise.all(P.map(h=>Promise.resolve(h).then(B=>({status:"fulfilled",value:B}),B=>({status:"rejected",reason:B}))))};document.getElementsByTagName("link");const D=document.querySelector("meta[property=csp-nonce]"),U=(D==null?void 0:D.nonce)||(D==null?void 0:D.getAttribute("nonce"));u=b(c.map(P=>{if(P=qR(P),P in Vd)return;Vd[P]=!0;const h=P.endsWith(".css"),B=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${P}"]${B}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":$R,h||(y.as="script"),y.crossOrigin="",y.href=P,U&&y.setAttribute("nonce",U),document.head.appendChild(y),h)return new Promise((H,W)=>{y.addEventListener("load",H),y.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${P}`)))})}))}function p(b){const D=new Event("vite:preloadError",{cancelable:!0});if(D.payload=b,window.dispatchEvent(D),!D.defaultPrevented)throw b}return u.then(b=>{for(const D of b||[])D.status==="rejected"&&p(D.reason);return s().catch(p)})};var K=(s=>(s.MENU="MENU",s.CLASSIC="CLASSIC",s.LEVEL_2_FILTER="LEVEL_2_FILTER",s.LEVEL_3_INFINITE="LEVEL_3_INFINITE",s.LEVEL_4_THEMED="LEVEL_4_THEMED",s.LEVEL_EMOJI="LEVEL_EMOJI",s.LEVEL_5_GROUP="LEVEL_5_GROUP",s.LEVEL_SYNONYMS="LEVEL_SYNONYMS",s.LEVEL_RHYMES="LEVEL_RHYMES",s.SPEED_ROUND="SPEED_ROUND",s.LEVEL_TRANSLATION="LEVEL_TRANSLATION",s))(K||{});const Kf=["animate-fade-out","animate-scale-out-subtle","animate-zoom-out"],zd={"bg-neon-red":"#FF073A","bg-neon-orange":"#FF6A00","bg-neon-hot-orange":"#FF2A00","bg-neon-gold":"#FFD400","bg-neon-yellow":"#F9FF00","bg-neon-lime":"#39FF14","bg-neon-green":"#00FF66","bg-neon-mint":"#7CFFDA","bg-neon-teal":"#00FFC3","bg-neon-aqua":"#00FFF6","bg-neon-sky-blue":"#33FFFF","bg-neon-blue":"#00E5FF","bg-neon-violet":"#9B00FF","bg-neon-purple":"#D400FF","bg-neon-lavender":"#C87CFF","bg-neon-magenta":"#FF00FF","bg-neon-pink":"#FF1FBF","bg-neon-rose":"#FF4DA6","bg-zinc-800":"#27272a","bg-black":"#000000"},Yf=s=>{if(!s)return"#ffffff";const c=s.split(" ");for(const A of c)if(zd[A])return zd[A];return"#ffffff"},xf=[{name:"Spectrum",gradient:"bg-black",solvedColors:["bg-neon-red border-white","bg-neon-hot-orange border-white","bg-neon-orange border-white","bg-neon-gold border-white","bg-neon-yellow border-white","bg-neon-lime border-white","bg-neon-green border-white","bg-neon-teal border-white","bg-neon-aqua border-white","bg-neon-sky-blue border-white","bg-neon-blue border-white","bg-neon-violet border-white","bg-neon-purple border-white","bg-neon-magenta border-white","bg-neon-pink border-white","bg-neon-rose border-white"]},{name:"Cool Breeze",gradient:"bg-zinc-900",solvedColors:["bg-neon-lime border-white","bg-neon-green border-white","bg-neon-mint border-white","bg-neon-teal border-white","bg-neon-aqua border-white","bg-neon-sky-blue border-white","bg-neon-blue border-white","bg-neon-violet border-white","bg-neon-purple border-white"]},{name:"Warm Sunset",gradient:"bg-zinc-900",solvedColors:["bg-neon-magenta border-white","bg-neon-pink border-white","bg-neon-rose border-white","bg-neon-red border-white","bg-neon-hot-orange border-white","bg-neon-orange border-white","bg-neon-gold border-white","bg-neon-yellow border-white"]},{name:"Synthwave",gradient:"bg-black",solvedColors:["bg-neon-aqua border-white","bg-neon-sky-blue border-white","bg-neon-blue border-white","bg-neon-violet border-white","bg-neon-purple border-white","bg-neon-magenta border-white","bg-neon-pink border-white","bg-neon-rose border-white"]}],ef=`id,category,word1,word2,word3,word4,word5,word6,word7,word8,word9,word10
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
`;let Ts=null;const iS=s=>{const c=s.trim().split(`
`),A=[];for(let p=1;p<c.length;p++){const b=c[p].trim();if(!b)continue;const D=[];let U="",P=!1;for(let H=0;H<b.length;H++){const W=b[H];W==='"'?P&&b[H+1]==='"'?(U+='"',H++):P=!P:W===","&&!P?(D.push(U),U=""):U+=W}if(D.push(U),D.length<3)continue;const h=D[0].trim(),B=D[1].trim(),y=D.slice(2).map(H=>H.trim()).filter(H=>H.length>0);y.length>=1&&A.push({id:h,name:B,words:y})}const u=new Map;for(const p of A){const b=p.name.toUpperCase();if(u.has(b)){const D=u.get(b),U=Array.from(new Set([...D.words,...p.words]));D.words=U}else u.set(b,{...p})}return Array.from(u.values()).filter(p=>p.words.length>=4)},qo=()=>Ts||(Ts=iS(ef),Ts),Wf=(s,c)=>{const A=c||qo();return A.length===0?[]:[...A].sort(()=>.5-Math.random()).slice(0,s)},Vf=(s,c)=>({name:"VARIETY PACK",categories:[...c||qo()].sort(()=>.5-Math.random()).slice(0,s)}),zf=(s,c)=>[...s.words].sort(()=>.5-Math.random()).slice(0,c),lS=s=>iS(s),nf=`
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
`;let Is=null;const sS=()=>{if(Is)return Is;const s=nf.trim().split(`
`),c=[];let A=5e4;return s.forEach(u=>{if(!u.includes(","))return;const p=u.split(",").map(U=>U.trim().toLowerCase()).filter(U=>U.length>0&&U.length<=14);if(p.length<5)return;const b=p[0],D=p.slice(1);D.length>=4&&c.push({id:(A++).toString(),name:`SYNONYMS: ${b.toUpperCase()}`,words:D})}),Is=c,c},tf=`
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
`;let hs=null;const uS=()=>{if(hs)return hs;const s=tf.trim().split(`
`),c=[];let A=6e4;return s.forEach(u=>{if(!u.includes(","))return;const p=u.split(",").map(U=>U.trim().toLowerCase()).filter(U=>U.length>0&&U.length<=14);if(p.length<5)return;const b=p[0].toUpperCase(),D=p.slice(1);D.length>=4&&c.push({id:(A++).toString(),name:b,words:D})}),hs=c,c},cS=`id,category,word1,word2,word3,word4,word5,word6,word7,word8
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
`,Fr={LEVEL:"wpm_level",TUTORIAL_SEEN:"wpm_tutorial_seen_v2",TUTORIAL_SEEN_L2:"wpm_tutorial_seen_l2",TUTORIAL_SEEN_L5:"wpm_tutorial_seen_l5",GAME_STATS:"wpm_game_stats",DAILY_HISTORY:"wpm_daily_history"},rf=()=>{try{const s=localStorage.getItem(Fr.LEVEL);if(!s)return 1;const c=parseInt(s,10);return isNaN(c)?1:c}catch{return 1}},af=s=>{localStorage.setItem(Fr.LEVEL,s.toString())},of=()=>!!localStorage.getItem(Fr.TUTORIAL_SEEN),lf=()=>{localStorage.setItem(Fr.TUTORIAL_SEEN,"true")},ms={rowsSolved:0,levelsCompleted:0,totalTimeMs:0,hintsUsed:0,hintsRefused:0,totalMoves:0,solvedCategoryIds:[]},ES=()=>{try{const s=localStorage.getItem(Fr.GAME_STATS);return s?{...ms,...JSON.parse(s)}:ms}catch{return ms}},_f=s=>{try{const c=ES();let A=c.solvedCategoryIds;if(s.solvedCategoryIds){const p=new Set([...c.solvedCategoryIds,...s.solvedCategoryIds]);A=Array.from(p)}const u={rowsSolved:c.rowsSolved+(s.rowsSolved||0),levelsCompleted:c.levelsCompleted+(s.levelsCompleted||0),totalTimeMs:c.totalTimeMs+(s.totalTimeMs||0),hintsUsed:c.hintsUsed+(s.hintsUsed||0),hintsRefused:c.hintsRefused+(s.hintsRefused||0),totalMoves:c.totalMoves+(s.totalMoves||0),solvedCategoryIds:A};localStorage.setItem(Fr.GAME_STATS,JSON.stringify(u))}catch(c){console.error("Failed to update stats",c)}};class sf{constructor(){this.ctx=null,this.isMuted=!1,this.isMusicPlaying=!1,this.musicNodes=[],this.musicInterval=null}getContext(){if(!this.ctx)try{const c=window.AudioContext||window.webkitAudioContext;if(c)this.ctx=new c;else return null}catch(c){return console.error("Audio init error",c),null}return this.ctx}resume(){const c=this.getContext();c&&c.state==="suspended"&&c.resume().catch(A=>console.warn(A))}playTone(c,A,u,p=0,b=.1){if(this.isMuted)return;const D=this.getContext();if(D){D.state==="suspended"&&D.resume().catch(()=>{});try{const U=D.createOscillator(),P=D.createGain();U.type=A,U.frequency.setValueAtTime(c,D.currentTime+p),P.gain.setValueAtTime(b,D.currentTime+p),P.gain.linearRampToValueAtTime(.001,D.currentTime+p+u),U.connect(P),P.connect(D.destination),U.start(D.currentTime+p),U.stop(D.currentTime+p+u+.05),U.onended=()=>{U.disconnect(),P.disconnect()}}catch{}}}startMusic(){this.isMusicPlaying||(this.isMusicPlaying=!0)}stopMusic(){this.isMusicPlaying=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null),this.stopNodes()}toggleMusic(){return this.isMusicPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}stopNodes(){this.musicNodes.forEach(c=>{try{c.disconnect()}catch{}}),this.musicNodes=[]}playTick(){this.playTone(800,"square",.03,0,.05)}playSelect(){this.playTone(600,"sine",.08,0,.1)}playSwap(){if(this.isMuted)return;const c=this.getContext();if(c){c.state==="suspended"&&c.resume().catch(()=>{});try{const A=c.createOscillator(),u=c.createGain();A.frequency.setValueAtTime(300,c.currentTime),A.frequency.linearRampToValueAtTime(600,c.currentTime+.1),u.gain.setValueAtTime(.05,c.currentTime),u.gain.linearRampToValueAtTime(.001,c.currentTime+.1),A.connect(u),u.connect(c.destination),A.start(),A.stop(c.currentTime+.15),A.onended=()=>{A.disconnect(),u.disconnect()}}catch{}}}playCorrect(){this.playTone(660,"sine",.1,0,.15),this.playTone(880,"sine",.2,.08,.15)}playRowSolved(){this.playTone(440,"sine",.4,0,.1),this.playTone(554.37,"sine",.4,.05,.1),this.playTone(659.25,"sine",.4,.1,.1)}playError(){if(this.isMuted)return;const c=this.getContext();if(c){c.state==="suspended"&&c.resume().catch(()=>{});try{const A=c.currentTime,u=c.createOscillator(),p=c.createGain();u.type="sawtooth",u.frequency.setValueAtTime(120,A),u.frequency.exponentialRampToValueAtTime(60,A+.3),p.gain.setValueAtTime(.15,A),p.gain.linearRampToValueAtTime(.001,A+.3),u.connect(p),p.connect(c.destination),u.start(A),u.stop(A+.35),u.onended=()=>{u.disconnect(),p.disconnect()}}catch{}}}playWin(){this.playTone(523.25,"triangle",.1,0,.2),this.playTone(659.25,"triangle",.1,0+.1,.2),this.playTone(783.99,"triangle",.1,0+.2,.2),this.playTone(1046.5,"square",.6,0+.3,.2),this.playTone(523.25,"sine",.4,0+.3,.2)}toggleMute(){this.isMuted=!this.isMuted,this.isMuted&&this.stopNodes()}}const Hn=new sf,uf=({onStart:s,onSettings:c,onStats:A,lastLevel:u})=>{const p=u||1,b=p>1?`CONTINUE LEVEL ${p}`:"START GAME";return T.jsxs("div",{className:"flex flex-col items-center h-full w-full max-w-2xl mx-auto px-4 relative",children:[T.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[T.jsxs("div",{className:"mb-8 flex justify-center w-full relative",children:[T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/30 rounded-full blur-[60px] pointer-events-none animate-brain-glow"}),T.jsx("img",{src:"https://lh3.googleusercontent.com/d/1GWUN6DaooRsnsj4ZaNPqbfvSJ8o7ILtw",alt:"Word Pairing Machine",className:"w-80 md:w-[500px] lg:w-[600px] h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] relative z-10"})]}),T.jsx("div",{className:"w-24 h-1 bg-neon-white mb-12 animate-fade-in opacity-80 shadow-[0_0_15px_white]",style:{animationDelay:"0.3s"}}),T.jsx("div",{className:"flex flex-col gap-4 w-full max-w-xs animate-fade-in items-center",style:{animationDelay:"0.4s"},children:T.jsxs("div",{className:"relative w-full group hover:scale-105 transition-transform duration-300 active:scale-95",children:[T.jsx("div",{className:"absolute inset-0 bg-neon-gold/20 rounded-[22px] blur-xl group-hover:bg-neon-gold/40 transition-all duration-300"}),T.jsxs("div",{className:"relative rounded-[22px] overflow-hidden p-[4px] bg-zinc-800 shadow-lg",children:[T.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]",style:{background:"conic-gradient(transparent 180deg, white 360deg)",animation:"spin 4s linear infinite"}}),T.jsx("button",{onClick:s,className:`
                            relative w-full h-full bg-zinc-900 rounded-[18px] px-8 py-4
                            text-white text-4xl font-bold tracking-widest uppercase font-oswald
                            flex items-center justify-center
                            border-t-[3px] border-l-[3px] border-zinc-600
                            border-b-[4px] border-r-[4px] border-black
                            shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]
                            active:border-t-black active:border-l-black active:border-b-zinc-700 active:border-r-zinc-700
                            active:translate-y-[2px]
                            transition-all duration-75 z-10
                        `,children:b})]})]})})]}),T.jsxs("div",{className:"w-full flex justify-center gap-4 pb-4 mt-auto animate-fade-in",style:{animationDelay:"0.5s"},children:[T.jsx("button",{onClick:A,className:`
            group relative px-6 py-3 rounded-medium min-w-[120px]
            bg-zinc-900 text-zinc-500 hover:text-neon-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
            border border-zinc-800 hover:border-zinc-500
          `,children:"STATS"}),T.jsx("button",{onClick:c,className:`
            group relative px-6 py-3 rounded-medium min-w-[120px]
            bg-zinc-900 text-zinc-500 hover:text-neon-white hover:scale-105 transition-all duration-300
            text-sm font-bold tracking-widest uppercase font-oswald
            border border-zinc-800 hover:border-zinc-500
          `,children:"SETTINGS"})]})]})},_d={[K.CLASSIC]:"Classic",[K.LEVEL_3_INFINITE]:"Hidden",[K.LEVEL_4_THEMED]:"Themed",[K.LEVEL_5_GROUP]:"Mind",[K.LEVEL_SYNONYMS]:"Synonyms",[K.LEVEL_EMOJI]:"Emoji",[K.LEVEL_TRANSLATION]:"Translation"},cf=({isOpen:s,onClose:c,onMainMenu:A,isMusicOn:u,toggleMusic:p,enabledModes:b,toggleMode:D,hintsEnabled:U,setHintsEnabled:P,onShowTutorial:h,onResetProgress:B,debugMode:y,setDebugMode:H,categories:W=[]})=>{if(!s)return null;const $=W&&W.length>0;return T.jsx("div",{className:"absolute inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 animate-fade-in",children:T.jsxs("div",{className:"w-full max-w-sm bg-zinc-900 border-4 border-white rounded-large p-4 shadow-2xl flex flex-col gap-3 overflow-hidden max-h-[95vh]",children:[T.jsxs("div",{className:"flex justify-between items-center border-b-2 border-zinc-800 pb-2 shrink-0",children:[T.jsx("h2",{className:"text-xl font-black font-righteous text-deco-gold uppercase tracking-widest",children:"CONTROL CENTER"}),T.jsx("button",{onClick:c,className:"text-zinc-400 hover:text-white transition-colors p-1",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M6 18L18 6M6 6l12 12"})})})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-2 shrink-0",children:[T.jsxs("button",{onClick:A,className:"col-span-2 py-2 bg-red-600 border-2 border-white text-white font-black font-oswald text-lg uppercase rounded-medium hover:bg-red-500 transition-all flex items-center justify-center gap-2",children:[T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:T.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),"EXIT TO MAIN MENU"]}),T.jsxs("button",{onClick:p,className:`flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${u?"bg-zinc-800 border-neon-green text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[T.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${u?"bg-neon-green shadow-[0_0_8px_#00FF66]":"bg-zinc-700"}`}),"SOUND"]}),T.jsxs("button",{onClick:()=>P(!U),className:`flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${U?"bg-zinc-800 border-neon-blue text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[T.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${U?"bg-neon-blue shadow-[0_0_8px_#00E5FF]":"bg-zinc-700"}`}),"HINTS"]}),T.jsxs("button",{onClick:()=>H(!y),className:`col-span-2 flex items-center justify-center gap-2 p-2 rounded-medium border-2 transition-all font-bold font-oswald text-xs uppercase ${y?"bg-zinc-800 border-neon-gold text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[T.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${y?"bg-neon-gold shadow-[0_0_8px_#FFD400]":"bg-zinc-700"}`}),"ADMIN TOOLS"]})]}),$&&T.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[T.jsx("h3",{className:"text-deco-gold font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5",children:"CURRENT GOALS"}),T.jsx("div",{className:"grid grid-cols-2 gap-1.5 py-1",children:W.map(k=>T.jsxs("div",{className:`px-2 py-1.5 rounded-small border flex items-center justify-between text-[10px] font-bold uppercase font-oswald tracking-tighter leading-none transition-all ${k.isSolved?"bg-zinc-800/50 border-neon-green text-neon-green":"bg-black border-zinc-700 text-zinc-300"}`,children:[T.jsx("span",{className:"truncate mr-1",children:k.name}),k.isSolved&&T.jsx("span",{className:"text-xs",children:"✓"})]},k.name))})]}),T.jsxs("div",{className:"flex flex-col gap-1 shrink-0",children:[T.jsx("h3",{className:"text-cyan-400 font-oswald text-[10px] uppercase tracking-[0.2em] font-black border-b border-zinc-800 pb-0.5",children:"GAME MODES"}),T.jsx("div",{className:"grid grid-cols-3 gap-1.5 pt-1",children:Object.keys(_d).map(k=>{const v=b.includes(k);return T.jsxs("button",{onClick:()=>D(k),className:`flex flex-col items-center justify-center p-1 rounded-medium border transition-all h-10 ${v?"bg-zinc-800 border-cyan-500 text-white":"bg-black border-zinc-800 text-zinc-600"}`,children:[T.jsx("span",{className:"font-bold font-oswald text-[9px] uppercase leading-none mb-0.5",children:_d[k]}),T.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${v?"bg-cyan-500 shadow-[0_0_5px_cyan]":"bg-zinc-800"}`})]},k)})})]}),T.jsxs("div",{className:"mt-auto flex flex-col gap-2 pt-2 border-t border-zinc-800 shrink-0",children:[T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{onClick:h,className:"flex-1 py-2 bg-zinc-800 border border-zinc-700 rounded-medium font-bold text-white text-[10px] font-oswald uppercase hover:bg-zinc-700 transition-colors",children:"HOW TO PLAY"}),T.jsx("button",{onClick:B,className:"flex-1 py-2 bg-zinc-900 border border-red-900 text-red-500 font-bold text-[10px] font-oswald uppercase hover:bg-red-950 transition-colors",children:"RESET ALL"})]}),T.jsx("button",{onClick:c,className:"w-full py-3 bg-white text-black font-black font-oswald text-xl uppercase rounded-medium hover:scale-[1.02] active:scale-95 transition-all shadow-xl",children:"RESUME PLAY"})]})]})})},Ef=`
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
`;let Ns=null;const df=()=>{if(Ns)return Ns;const s=Ef.trim().split(`
`),c=[];let A=9e4;const u=typeof Intl<"u"&&"Segmenter"in Intl;return s.forEach(p=>{if(!p.includes(","))return;const b=p.indexOf(","),D=p.substring(0,b).trim(),U=p.substring(b+1).trim();let P=[];if(u){const h=new Intl.Segmenter("en",{granularity:"grapheme"}).segment(U);for(const{segment:B}of h){const y=B.trim();y.length>0&&P.push(y)}}else P=Array.from(U).filter(h=>h.trim().length>0);P=Array.from(new Set(P)),P.length>=3&&c.push({id:(A++).toString(),name:D,words:P})}),Ns=c,c},Sf=({onClose:s})=>{const[c,A]=ne.useState(null),[u,p]=ne.useState(0);if(ne.useEffect(()=>{A(ES());const h=qo().length,B=df().length,y=sS().length,H=uS().length,W=lS(cS).length;p(h+B+y+H+W)},[]),!c)return null;const b=c.levelsCompleted>0?Math.round(c.totalTimeMs/1e3/c.levelsCompleted):0,D=c.levelsCompleted>0?(c.totalMoves/c.levelsCompleted).toFixed(1):"0.0",U=h=>{const B=Math.floor(h/60),y=h%60;return`${B}m ${y}s`},P=({title:h,value:B,subtext:y})=>T.jsxs("div",{className:"bg-zinc-800 border border-zinc-600 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg font-oswald",children:[T.jsx("div",{className:"text-zinc-400 uppercase text-xs tracking-widest mb-1",children:h}),T.jsx("div",{className:"text-white text-3xl text-deco-gold font-bold",children:B}),y&&T.jsx("div",{className:"text-zinc-500 text-[10px] mt-1 uppercase tracking-tighter",children:y})]});return T.jsx("div",{className:"absolute inset-0 z-[150] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in font-oswald",children:T.jsxs("div",{className:"w-full max-w-lg bg-zinc-900 border-2 border-white rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto",children:[T.jsx("button",{onClick:s,className:"absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),T.jsx("h2",{className:"text-4xl font-black text-deco-gold uppercase text-center mb-8 tracking-widest",children:"Player Stats"}),T.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[T.jsx(P,{title:"Levels Complete",value:c.levelsCompleted}),T.jsx(P,{title:"Avg Time / Level",value:U(b)}),T.jsx(P,{title:"Avg Moves / Level",value:D}),T.jsx(P,{title:"Rows Solved",value:c.rowsSolved}),T.jsx(P,{title:"Categories Found",value:`${c.solvedCategoryIds.length} / ${u}`,subtext:`${Math.round(c.solvedCategoryIds.length/(u||1)*100)}% Discovered`})]}),T.jsxs("div",{className:"bg-zinc-800 rounded-xl p-4 border border-zinc-700 mb-6",children:[T.jsx("h3",{className:"text-white uppercase tracking-wider text-center mb-4 border-b border-zinc-600 pb-2 font-bold",children:"Hint Usage"}),T.jsxs("div",{className:"flex justify-around",children:[T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-green-400 font-black text-3xl",children:c.hintsUsed}),T.jsx("div",{className:"text-zinc-400 text-xs uppercase tracking-widest",children:"Used"})]}),T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"text-red-400 font-black text-3xl",children:c.hintsRefused}),T.jsx("div",{className:"text-zinc-400 text-xs uppercase tracking-widest",children:"Refused"})]})]})]}),T.jsx("button",{onClick:s,className:"w-full py-4 bg-white text-black font-black text-2xl uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg tracking-widest",children:"Close"})]})})},Af={fontFamily:'"Oswald", sans-serif',backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased",transform:"translateZ(0)"},dS=Kn.forwardRef(({data:s,onClick:c,disabled:A,gradientClass:u,exitAnimation:p,...b},D)=>{const U=s.word?s.word.length:0;let P="text-sm sm:text-base leading-tight font-bold tracking-wide";s.isEmoji?P="text-4xl sm:text-5xl md:text-6xl":U>12?P="text-[11px] sm:text-xs leading-none font-bold tracking-normal":U>8&&(P="text-xs sm:text-sm leading-tight font-bold");const h=`relative w-full h-full rounded-medium flex items-center justify-center ${P} cursor-pointer select-none shadow-sm p-1 text-center whitespace-normal break-words border-4 transition-all duration-200 uppercase antialiased`;let B="",y=s.word||"",H=!1;const W="text-white",$="drop-shadow-[0_2px_2px_rgba(0,0,0,1)] drop-shadow-[0_0_1px_rgba(0,0,0,1)]";switch(s.status){case"neutral":B=`${u||"bg-zinc-800"} border-white/40 ${W} hover:border-theme-primary hover:bg-zinc-700`;break;case"selected":B=`bg-theme-primary border-theme-outline ${W} animate-selected-pulse z-20 ring-2 ring-white`;break;case"solved":B=`${s.color||"bg-zinc-800"} border-white/50 ${W} animate-solve-impact z-10`;break;case"wrong":B="bg-neon-red border-white text-white animate-shake z-10";break;case"correct-preview":B=`${s.color||"bg-zinc-900"} border-white/50 ${W} scale-95 z-10 shadow-md`;break;case"placeholder":B="opacity-0 pointer-events-none cursor-default border-none";break;case"placeholder-colored":B=`${s.color||"bg-zinc-800"} z-0`,y="";break;case"hint":B="bg-black/80 border-neon-yellow text-white animate-pulse z-20 scale-105";break;case"locked":B="bg-zinc-800/80 border-neon-yellow text-white z-10 shadow-[inset_0_0_10px_rgba(255,212,0,0.3)]",H=!0;break;case"exiting":const z=p||"animate-scale-out";B=`${s.color||u||"bg-zinc-800"} ${W} border-transparent ${z} pointer-events-none z-50`;break;case"flipping-out":B=`${s.color||"bg-zinc-800"} ${W} animate-flip-out-x z-20 pointer-events-none`;break;case"flipping-in":B=`${u||"bg-zinc-800"} ${W} animate-flip-in-x z-20`;break}const k=ne.useRef(null),v=()=>{A||["solved","placeholder","exiting","placeholder-colored","flipping-out","locked"].includes(s.status)||c(s.id)};return T.jsxs("div",{ref:z=>{typeof D=="function"?D(z):D&&(D.current=z),k.current=z},onClick:v,className:`${h} ${B}`,style:Af,...b,children:[T.jsx("span",{className:`z-10 px-0.5 inline-block ${$} pointer-events-none`,children:y}),H&&T.jsx("div",{className:"absolute top-1 right-1 w-3 h-3 text-neon-yellow opacity-80",children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-full h-full",children:T.jsx("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",clipRule:"evenodd"})})})]})});dS.displayName="Tile";const Rf=Kn.memo(dS),SS=[{id:"t0",word:"APPLE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t1",word:"BANANA",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t2",word:"GRAPE",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t3",word:"DOG",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t4",word:"CAT",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t5",word:"LION",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t6",word:"TIGER",categoryId:"animal",categoryName:"ANIMAL",status:"neutral"},{id:"t7",word:"PEAR",categoryId:"fruit",categoryName:"FRUIT",status:"neutral"},{id:"t8",word:"RED",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t9",word:"BLUE",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t10",word:"GREEN",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t11",word:"YELLOW",categoryId:"color",categoryName:"COLOR",status:"neutral"},{id:"t12",word:"HAMMER",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t13",word:"DRILL",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t14",word:"SAW",categoryId:"tool",categoryName:"TOOL",status:"neutral"},{id:"t15",word:"WRENCH",categoryId:"tool",categoryName:"TOOL",status:"neutral"}],ff=()=>{const s=JSON.parse(JSON.stringify(SS)),c=s[10];s[10]=s[13],s[13]=c;const A=s[11];return s[11]=s[12],s[12]=A,s},Of=s=>s===K.CLASSIC?"CLASSIC GRID":s===K.LEVEL_EMOJI?"EMOJI MATCH":s===K.LEVEL_SYNONYMS?"SYNONYMS":s===K.LEVEL_4_THEMED?"THEMED":s===K.LEVEL_2_FILTER?"TARGET FILTER":"",pf=({mode:s,onComplete:c})=>{const A=s===K.CLASSIC||s===K.LEVEL_EMOJI||s===K.LEVEL_4_THEMED||s===K.LEVEL_SYNONYMS,[u,p]=ne.useState(1),[b,D]=ne.useState(A?ff():SS),U=ne.useRef(new Map),P=async(B,y)=>{const H=U.current.get(B),W=U.current.get(y);if(Hn.playSwap(),H&&W){const $=H.getBoundingClientRect(),k=W.getBoundingClientRect(),v=k.left-$.left,z=k.top-$.top;H.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",H.style.transform=`translate(${v}px, ${z}px) scale(1.1)`,H.style.zIndex="50",H.style.boxShadow="0 10px 20px rgba(0,0,0,0.5)",W.style.transition="transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s",W.style.transform=`translate(${-v}px, ${-z}px) scale(0.9)`,W.style.zIndex="40",await new Promise(Ae=>setTimeout(Ae,400)),H.style.transition="",H.style.transform="",H.style.zIndex="",H.style.boxShadow="",W.style.transition="",W.style.transform="",W.style.zIndex=""}};ne.useEffect(()=>{if(!A)return;let B=!0;return(async()=>{if(await new Promise(k=>setTimeout(k,600)),!B)return;const y="t13",H="t10";if(await new Promise(k=>setTimeout(k,300)),!B||(D(k=>k.map(v=>v.id===y?{...v,status:"selected"}:v)),Hn.playSelect(),await new Promise(k=>setTimeout(k,400)),!B)||(await new Promise(k=>setTimeout(k,300)),!B)||(D(k=>k.map(v=>v.id===H?{...v,status:"selected"}:v)),Hn.playSelect(),await new Promise(k=>setTimeout(k,200)),!B)||(await P(y,H),D(k=>{const v=[...k],z=v.findIndex(ie=>ie.id===y),Ae=v.findIndex(ie=>ie.id===H);return[v[z],v[Ae]]=[v[Ae],v[z]],v[z]={...v[z],status:"neutral"},v[Ae]={...v[Ae],status:"neutral"},v}),await new Promise(k=>setTimeout(k,400)),!B))return;const W="t12",$="t11";await new Promise(k=>setTimeout(k,300)),B&&(D(k=>k.map(v=>v.id===W?{...v,status:"selected"}:v)),Hn.playSelect(),await new Promise(k=>setTimeout(k,400)),B&&(await new Promise(k=>setTimeout(k,300)),B&&(D(k=>k.map(v=>v.id===$?{...v,status:"selected"}:v)),Hn.playSelect(),await new Promise(k=>setTimeout(k,200)),B&&(await P(W,$),D(k=>{const v=[...k],z=v.findIndex(ie=>ie.id===W),Ae=v.findIndex(ie=>ie.id===$);return[v[z],v[Ae]]=[v[Ae],v[z]],v[z]={...v[z],status:"neutral"},v[Ae]={...v[Ae],status:"neutral"},v}),await new Promise(k=>setTimeout(k,400)),B&&(Hn.playRowSolved(),D(k=>k.map((v,z)=>z>=8&&z<12?{...v,status:"solved",color:"bg-neon-green border-white"}:z>=12?{...v,status:"solved",color:"bg-neon-yellow border-white"}:v)),p(4),await new Promise(k=>setTimeout(k,600)),B&&(Hn.playSelect(),D(k=>k.map(v=>v.id==="t3"?{...v,status:"selected"}:v)),p(5),await new Promise(k=>setTimeout(k,800)),B&&(Hn.playSelect(),await P("t3","t7"),D(k=>{const v=[...k],z=v.findIndex(ie=>ie.id==="t3"),Ae=v.findIndex(ie=>ie.id==="t7");return[v[z],v[Ae]]=[v[Ae],v[z]],v[z]={...v[z],status:"neutral"},v[Ae]={...v[Ae],status:"neutral"},v}),await new Promise(k=>setTimeout(k,300)),B&&(Hn.playRowSolved(),Hn.playWin(),D(k=>k.map((v,z)=>z<4?{...v,status:"solved",color:"bg-neon-blue border-white"}:z>=4&&z<8?{...v,status:"solved",color:"bg-neon-pink border-white"}:z>=8&&z<12?{...v,status:"solved",color:"bg-neon-green border-white"}:z>=12?{...v,status:"solved",color:"bg-neon-yellow border-white"}:v)),await new Promise(k=>setTimeout(k,800)),B&&p(6)))))))))})(),()=>{B=!1}},[A]),ne.useEffect(()=>{if(!A){const B=setTimeout(()=>{c()},3e3);return()=>clearTimeout(B)}},[A,c]);const h=()=>{var B;const y=[];for(let H=0;H<4;H++){const W=b.slice(H*4,H*4+4),$=W.every(v=>v.status==="solved"),k=(B=W[0])==null?void 0:B.categoryName;y.push(T.jsx("div",{className:"relative w-full z-10 flex flex-col justify-center min-h-0 flex-1",children:T.jsxs("div",{className:"relative w-full h-full p-1",children:[$&&T.jsx("div",{className:"absolute inset-0 z-0 animate-fade-in bg-black border-4 border-white rounded-medium"}),$&&T.jsx("div",{className:"absolute top-0 left-8 z-[100] transform",style:{transform:"translateY(calc(-100% + 4px))"},children:T.jsx("div",{className:"animate-pop bg-black text-white px-3 py-1 rounded-t-lg text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight border-x-4 border-t-4 border-b-0 border-white shadow-[0_-4px_12px_rgba(0,0,0,0.8)] font-oswald",children:k})}),T.jsx("div",{className:`grid grid-cols-4 gap-2 w-full h-full relative z-10 transition-all duration-300 ${$?"drop-shadow-xl p-3":""}`,children:W.map(v=>T.jsx("div",{className:"relative w-full h-full",children:T.jsx(Rf,{data:v,"data-tile-id":v.id,onClick:()=>{},disabled:!0,ref:z=>{z?U.current.set(v.id,z):U.current.delete(v.id)}})},v.id))})]})},H))}return y};return T.jsxs("div",{className:"absolute inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 overflow-hidden",children:[T.jsxs("div",{className:`flex flex-col items-center justify-center w-full h-full transition-all duration-500 ${u===6?"blur-sm opacity-40 scale-95":""}`,children:[T.jsxs("div",{className:"mb-4 text-center shrink-0",children:[T.jsx("h2",{className:"text-3xl font-black font-righteous text-deco-gold uppercase tracking-widest mb-1",children:"HOW TO PLAY"}),T.jsx("div",{className:"text-xl font-oswald text-white tracking-wider",children:Of(s)})]}),T.jsx("div",{className:"w-full max-w-sm aspect-square max-h-[55vh] bg-zinc-900/50 rounded-xl p-2 mb-4 border-2 border-zinc-700 relative flex flex-col shrink-0",children:T.jsx("div",{className:"w-full h-full flex flex-col gap-1",children:h()})}),T.jsxs("div",{className:"h-16 flex items-center justify-center mb-4 shrink-0 w-full px-4",children:[u===1&&T.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-white/20 animate-pop shadow-lg text-center",children:T.jsx("p",{className:"text-white font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"FIND 4 TILES THAT BELONG TOGETHER"})}),(u===2||u===3)&&T.jsx("div",{className:"bg-zinc-800 px-6 py-3 rounded-full border border-neon-blue animate-fade-in shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center",children:T.jsx("p",{className:"text-neon-blue font-oswald text-lg md:text-xl font-bold tracking-wide uppercase",children:"SWAP TO MAKE A MATCH"})})]}),T.jsx("button",{onClick:c,className:`text-zinc-500 font-oswald text-sm uppercase tracking-widest hover:text-white transition-colors mt-auto pb-4 ${u===6?"opacity-0 pointer-events-none":""}`,children:"SKIP TUTORIAL"})]}),u===6&&T.jsx("div",{className:"absolute inset-0 z-[210] flex items-center justify-center",children:T.jsx("button",{onClick:c,className:"px-10 py-4 bg-black text-white border-2 border-white font-bold font-oswald text-3xl rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-[0_0_60px_rgba(255,255,255,0.6)] animate-pop",children:"START"})})]})},Tf=[{title:"Movement",items:[{name:"Slide Left",class:"animate-slide-in-left",icon:"⬅️"},{name:"Slide Right",class:"animate-slide-in-right",icon:"➡️"},{name:"Slide Down",class:"animate-slide-in-down",icon:"⬇️"},{name:"Slide Up",class:"animate-slide-in-up",icon:"⬆️"},{name:"Drift",class:"animate-drift-in",icon:"🍃"},{name:"Pop",class:"animate-pop-in",icon:"💥"},{name:"Throw",class:"animate-throw-in",icon:"🥎"},{name:"Orbit",class:"animate-orbit-in",icon:"🪐"}]},{title:"Scale & Size",items:[{name:"Zoom In",class:"animate-zoom-in",icon:"🔍"},{name:"Zoom Out",class:"animate-zoom-out-enter",icon:"🔭"},{name:"Pulse",class:"animate-pulse-once",icon:"💓"},{name:"Inflate",class:"animate-inflate",icon:"🎈"}]},{title:"Opacity & Light",items:[{name:"Crossfade",class:"animate-crossfade",icon:"🌗"},{name:"Flash",class:"animate-flash-in",icon:"📸"},{name:"Glow",class:"animate-glow-reveal",icon:"✨"},{name:"Flicker",class:"animate-flicker-in",icon:"🕯️"}]},{title:"Rotation",items:[{name:"Spin",class:"animate-spin-in",icon:"🔄"},{name:"Flip X",class:"animate-flip-in-x",icon:"💳"},{name:"Settle",class:"animate-rotate-settle",icon:"🏷️"},{name:"Vert 360",class:"animate-rotate-vert-center",icon:"😵‍💫"}]},{title:"Distortion",items:[{name:"Typewriter",class:"animate-typewriter overflow-hidden whitespace-nowrap",text:"HELLO WORLD"},{name:"Blur",class:"animate-blur-in",icon:"🌫️"},{name:"Chromatic",class:"animate-chromatic-flash",icon:"👓"},{name:"Pixelate",class:"animate-pixelate-in",icon:"👾"},{name:"Melt",class:"animate-melt-in",icon:"🫠"},{name:"Smoke",class:"animate-smoke-in",icon:"🚬"},{name:"Shadow Pop",class:"animate-text-shadow-pop-tr",icon:"⛱️"}]},{title:"Physics",items:[{name:"Bounce",class:"animate-bounce-in",icon:"🏀"},{name:"Drop",class:"animate-drop-in",icon:"📦"}]},{title:"Specialty",items:[{name:"Glitch",class:"animate-glitch-in",icon:"📺"},{name:"Terminal",class:"animate-terminal overflow-hidden whitespace-nowrap border-r-2 border-green-500 pr-1",text:"> SYSTEM READY"},{name:"Hero",class:"animate-hero-overshoot",icon:"🦸"}]},{title:"Exit Animations",items:[{name:"Spin Out",class:"animate-spin-out-page",icon:"🌀"},{name:"Orbit Blur",class:"animate-orbit-blur-out",icon:"💫"},{name:"Spin Flip",class:"animate-spin-flip-out",icon:"🔄"},{name:"Pop Slide Up",class:"animate-pop-slide-up-out",icon:"⬆️"},{name:"Pop Slide Down",class:"animate-pop-slide-down-out",icon:"⬇️"},{name:"Pop Up Spin",class:"animate-pop-slide-up-spin",icon:"🌀⬆️"},{name:"Pop Down Spin",class:"animate-pop-slide-down-spin",icon:"🌀⬇️"},{name:"Roll Out Left",class:"animate-roll-out-left",icon:"🥎⬅️"},{name:"Rotate Vert",class:"animate-rotate-vert-center-exit",icon:"😵‍💫"},{name:"Fade Out",class:"animate-fade-out",icon:"🌫️"},{name:"Swing Out Btm",class:"animate-swing-out-bottom-fwd",icon:"👋"},{name:"Slide Out Back",class:"animate-slide-out-bck-center",icon:"🔙"},{name:"Rotate Out",class:"animate-rotate-out-center",icon:"😵"},{name:"Swing Out Top",class:"animate-swing-out-top-bck",icon:"🔝"},{name:"Flip Out Top",class:"animate-flip-out-hor-top",icon:"🙃"},{name:"Slide Fwd",class:"animate-slide-out-fwd-center",icon:"⏩"}]}],If=({onExit:s})=>{const[c,A]=ne.useState(0),u=()=>{A(p=>p+1)};return T.jsxs("div",{className:"w-full h-full flex flex-col bg-zinc-950 overflow-hidden relative",children:[T.jsxs("div",{className:"p-4 flex justify-between items-center border-b border-zinc-800 bg-black z-20 shadow-md",children:[T.jsx("h2",{className:"text-2xl font-black font-righteous text-deco-gold tracking-widest uppercase text-sm md:text-2xl",children:"Animation Lab"}),T.jsxs("div",{className:"flex gap-4",children:[T.jsx("button",{onClick:u,className:"px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded font-oswald uppercase text-sm",children:"Replay All"}),T.jsx("button",{onClick:s,className:"px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded font-oswald uppercase text-sm",children:"Exit Lab"})]})]}),T.jsx("div",{className:"flex-1 overflow-y-auto p-4 pb-24",children:T.jsx("div",{className:"max-w-6xl mx-auto space-y-8",children:Tf.map((p,b)=>T.jsxs("div",{className:"space-y-4",children:[T.jsx("h3",{className:"text-cyan-400 font-oswald text-xl uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4",children:p.title}),T.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",children:p.items.map((D,U)=>T.jsx(hf,{item:D},`${b}-${U}-${c}`))})]},b))})})]})},hf=({item:s})=>{const[c,A]=ne.useState(0);return T.jsxs("div",{className:"group bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-white transition-colors cursor-pointer min-h-[120px] overflow-hidden",onMouseEnter:()=>A(u=>u+1),onClick:()=>A(u=>u+1),children:[T.jsx("div",{className:`text-4xl ${s.class} ${s.text?"text-lg font-mono text-green-400":""}`,children:s.text?s.text:s.icon},c),T.jsx("div",{className:"text-zinc-400 font-oswald text-sm uppercase tracking-wider text-center group-hover:text-white transition-colors",children:s.name})]})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var wr;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(wr||(wr={}));class Cs extends Error{constructor(c,A,u){super(c),this.message=c,this.code=A,this.data=u}}const mf=s=>{var c,A;return s!=null&&s.androidBridge?"android":!((A=(c=s==null?void 0:s.webkit)===null||c===void 0?void 0:c.messageHandlers)===null||A===void 0)&&A.bridge?"ios":"web"},Nf=s=>{const c=s.CapacitorCustomPlatform||null,A=s.Capacitor||{},u=A.Plugins=A.Plugins||{},p=()=>c!==null?c.name:mf(s),b=()=>p()!=="web",D=y=>{const H=h.get(y);return!!(H!=null&&H.platforms.has(p())||U(y))},U=y=>{var H;return(H=A.PluginHeaders)===null||H===void 0?void 0:H.find(W=>W.name===y)},P=y=>s.console.error(y),h=new Map,B=(y,H={})=>{const W=h.get(y);if(W)return console.warn(`Capacitor plugin "${y}" already registered. Cannot register plugins twice.`),W.proxy;const $=p(),k=U(y);let v;const z=async()=>(!v&&$ in H?v=typeof H[$]=="function"?v=await H[$]():v=H[$]:c!==null&&!v&&"web"in H&&(v=typeof H.web=="function"?v=await H.web():v=H.web),v),Ae=(ue,he)=>{var Ye,ve;if(k){const Ce=k==null?void 0:k.methods.find(Be=>he===Be.name);if(Ce)return Ce.rtype==="promise"?Be=>A.nativePromise(y,he.toString(),Be):(Be,$e)=>A.nativeCallback(y,he.toString(),Be,$e);if(ue)return(Ye=ue[he])===null||Ye===void 0?void 0:Ye.bind(ue)}else{if(ue)return(ve=ue[he])===null||ve===void 0?void 0:ve.bind(ue);throw new Cs(`"${y}" plugin is not implemented on ${$}`,wr.Unimplemented)}},ie=ue=>{let he;const Ye=(...ve)=>{const Ce=z().then(Be=>{const $e=Ae(Be,ue);if($e){const We=$e(...ve);return he=We==null?void 0:We.remove,We}else throw new Cs(`"${y}.${ue}()" is not implemented on ${$}`,wr.Unimplemented)});return ue==="addListener"&&(Ce.remove=async()=>he()),Ce};return Ye.toString=()=>`${ue.toString()}() { [capacitor code] }`,Object.defineProperty(Ye,"name",{value:ue,writable:!1,configurable:!1}),Ye},Ne=ie("addListener"),en=ie("removeListener"),De=(ue,he)=>{const Ye=Ne({eventName:ue},he),ve=async()=>{const Be=await Ye;en({eventName:ue,callbackId:Be},he)},Ce=new Promise(Be=>Ye.then(()=>Be({remove:ve})));return Ce.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await ve()},Ce},q=new Proxy({},{get(ue,he){switch(he){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?De:Ne;case"removeListener":return en;default:return ie(he)}}});return u[y]=q,h.set(y,{name:y,proxy:q,platforms:new Set([...Object.keys(H),...k?[$]:[]])}),q};return A.convertFileSrc||(A.convertFileSrc=y=>y),A.getPlatform=p,A.handleError=P,A.isNativePlatform=b,A.isPluginAvailable=D,A.registerPlugin=B,A.Exception=Cs,A.DEBUG=!!A.DEBUG,A.isLoggingEnabled=!!A.isLoggingEnabled,A},Cf=s=>s.Capacitor=Nf(s),gs=Cf(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ps=gs.registerPlugin;class AS{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(c,A){let u=!1;this.listeners[c]||(this.listeners[c]=[],u=!0),this.listeners[c].push(A);const p=this.windowListeners[c];p&&!p.registered&&this.addWindowListener(p),u&&this.sendRetainedArgumentsForEvent(c);const b=async()=>this.removeListener(c,A);return Promise.resolve({remove:b})}async removeAllListeners(){this.listeners={};for(const c in this.windowListeners)this.removeWindowListener(this.windowListeners[c]);this.windowListeners={}}notifyListeners(c,A,u){const p=this.listeners[c];if(!p){if(u){let b=this.retainedEventArguments[c];b||(b=[]),b.push(A),this.retainedEventArguments[c]=b}return}p.forEach(b=>b(A))}hasListeners(c){var A;return!!(!((A=this.listeners[c])===null||A===void 0)&&A.length)}registerWindowListener(c,A){this.windowListeners[A]={registered:!1,windowEventName:c,pluginEventName:A,handler:u=>{this.notifyListeners(A,u)}}}unimplemented(c="not implemented"){return new gs.Exception(c,wr.Unimplemented)}unavailable(c="not available"){return new gs.Exception(c,wr.Unavailable)}async removeListener(c,A){const u=this.listeners[c];if(!u)return;const p=u.indexOf(A);this.listeners[c].splice(p,1),this.listeners[c].length||this.removeWindowListener(this.windowListeners[c])}addWindowListener(c){window.addEventListener(c.windowEventName,c.handler),c.registered=!0}removeWindowListener(c){c&&(window.removeEventListener(c.windowEventName,c.handler),c.registered=!1)}sendRetainedArgumentsForEvent(c){const A=this.retainedEventArguments[c];A&&(delete this.retainedEventArguments[c],A.forEach(u=>{this.notifyListeners(c,u)}))}}const jd=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Jd=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Lf extends AS{async getCookies(){const c=document.cookie,A={};return c.split(";").forEach(u=>{if(u.length<=0)return;let[p,b]=u.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");p=Jd(p).trim(),b=Jd(b).trim(),A[p]=b}),A}async setCookie(c){try{const A=jd(c.key),u=jd(c.value),p=`; expires=${(c.expires||"").replace("expires=","")}`,b=(c.path||"/").replace("path=",""),D=c.url!=null&&c.url.length>0?`domain=${c.url}`:"";document.cookie=`${A}=${u||""}${p}; path=${b}; ${D};`}catch(A){return Promise.reject(A)}}async deleteCookie(c){try{document.cookie=`${c.key}=; Max-Age=0`}catch(A){return Promise.reject(A)}}async clearCookies(){try{const c=document.cookie.split(";")||[];for(const A of c)document.cookie=A.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(c){return Promise.reject(c)}}async clearAllCookies(){try{await this.clearCookies()}catch(c){return Promise.reject(c)}}}Ps("CapacitorCookies",{web:()=>new Lf});const gf=async s=>new Promise((c,A)=>{const u=new FileReader;u.onload=()=>{const p=u.result;c(p.indexOf(",")>=0?p.split(",")[1]:p)},u.onerror=p=>A(p),u.readAsDataURL(s)}),yf=(s={})=>{const c=Object.keys(s);return Object.keys(s).map(A=>A.toLocaleLowerCase()).reduce((A,u,p)=>(A[u]=s[c[p]],A),{})},Pf=(s,c=!0)=>s?Object.entries(s).reduce((A,u)=>{const[p,b]=u;let D,U;return Array.isArray(b)?(U="",b.forEach(P=>{D=c?encodeURIComponent(P):P,U+=`${p}=${D}&`}),U.slice(0,-1)):(D=c?encodeURIComponent(b):b,U=`${p}=${D}`),`${A}&${U}`},"").substr(1):null,bf=(s,c={})=>{const A=Object.assign({method:s.method||"GET",headers:s.headers},c),u=yf(s.headers)["content-type"]||"";if(typeof s.data=="string")A.body=s.data;else if(u.includes("application/x-www-form-urlencoded")){const p=new URLSearchParams;for(const[b,D]of Object.entries(s.data||{}))p.set(b,D);A.body=p.toString()}else if(u.includes("multipart/form-data")||s.data instanceof FormData){const p=new FormData;if(s.data instanceof FormData)s.data.forEach((D,U)=>{p.append(U,D)});else for(const D of Object.keys(s.data))p.append(D,s.data[D]);A.body=p;const b=new Headers(A.headers);b.delete("content-type"),A.headers=b}else(u.includes("application/json")||typeof s.data=="object")&&(A.body=JSON.stringify(s.data));return A};class Mf extends AS{async request(c){const A=bf(c,c.webFetchExtra),u=Pf(c.params,c.shouldEncodeUrlParams),p=u?`${c.url}?${u}`:c.url,b=await fetch(p,A),D=b.headers.get("content-type")||"";let{responseType:U="text"}=b.ok?c:{};D.includes("application/json")&&(U="json");let P,h;switch(U){case"arraybuffer":case"blob":h=await b.blob(),P=await gf(h);break;case"json":P=await b.json();break;case"document":case"text":default:P=await b.text()}const B={};return b.headers.forEach((y,H)=>{B[H]=y}),{data:P,headers:B,status:b.status,url:b.url}}async get(c){return this.request(Object.assign(Object.assign({},c),{method:"GET"}))}async post(c){return this.request(Object.assign(Object.assign({},c),{method:"POST"}))}async put(c){return this.request(Object.assign(Object.assign({},c),{method:"PUT"}))}async patch(c){return this.request(Object.assign(Object.assign({},c),{method:"PATCH"}))}async delete(c){return this.request(Object.assign(Object.assign({},c),{method:"DELETE"}))}}Ps("CapacitorHttp",{web:()=>new Mf});var Zd;(function(s){s.General="General",s.ParentalGuidance="ParentalGuidance",s.Teen="Teen",s.MatureAudience="MatureAudience"})(Zd||(Zd={}));var Qd;(function(s){s.SizeChanged="bannerAdSizeChanged",s.Loaded="bannerAdLoaded",s.FailedToLoad="bannerAdFailedToLoad",s.Opened="bannerAdOpened",s.Closed="bannerAdClosed",s.AdImpression="bannerAdImpression"})(Qd||(Qd={}));var Xd;(function(s){s.TOP_CENTER="TOP_CENTER",s.CENTER="CENTER",s.BOTTOM_CENTER="BOTTOM_CENTER"})(Xd||(Xd={}));var $d;(function(s){s.BANNER="BANNER",s.FULL_BANNER="FULL_BANNER",s.LARGE_BANNER="LARGE_BANNER",s.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",s.LEADERBOARD="LEADERBOARD",s.ADAPTIVE_BANNER="ADAPTIVE_BANNER",s.SMART_BANNER="SMART_BANNER"})($d||($d={}));var qd;(function(s){s.Loaded="interstitialAdLoaded",s.FailedToLoad="interstitialAdFailedToLoad",s.Showed="interstitialAdShowed",s.FailedToShow="interstitialAdFailedToShow",s.Dismissed="interstitialAdDismissed"})(qd||(qd={}));var eS;(function(s){s.Loaded="onRewardedInterstitialAdLoaded",s.FailedToLoad="onRewardedInterstitialAdFailedToLoad",s.Showed="onRewardedInterstitialAdShowed",s.FailedToShow="onRewardedInterstitialAdFailedToShow",s.Dismissed="onRewardedInterstitialAdDismissed",s.Rewarded="onRewardedInterstitialAdReward"})(eS||(eS={}));var nS;(function(s){s.Loaded="onRewardedVideoAdLoaded",s.FailedToLoad="onRewardedVideoAdFailedToLoad",s.Showed="onRewardedVideoAdShowed",s.FailedToShow="onRewardedVideoAdFailedToShow",s.Dismissed="onRewardedVideoAdDismissed",s.Rewarded="onRewardedVideoAdReward"})(nS||(nS={}));var tS;(function(s){s.NOT_REQUIRED="NOT_REQUIRED",s.OBTAINED="OBTAINED",s.REQUIRED="REQUIRED",s.UNKNOWN="UNKNOWN"})(tS||(tS={}));var rS;(function(s){s[s.DISABLED=0]="DISABLED",s[s.EEA=1]="EEA",s[s.NOT_EEA=2]="NOT_EEA",s[s.US=3]="US",s[s.OTHER=4]="OTHER"})(rS||(rS={}));const $o=Ps("AdMob",{web:()=>Xt(()=>Zt(()=>import("./web-88WXAl_i-CRAq9Br1.js"),[]),[]).then(s=>new s.AdMobWeb)}),Df=Kn.lazy(()=>Xt(()=>Zt(()=>import("./Level1_Standard-DrD-yWzs-CBEkd90D.js"),__vite__mapDeps([0,1])),Qt([0,1]))),vf=Kn.lazy(()=>Xt(()=>Zt(()=>import("./Level2_Filter-1DcF9k5W-BOM_0fRl.js"),__vite__mapDeps([2,1])),Qt([2,1]))),Bf=Kn.lazy(()=>Xt(()=>Zt(()=>import("./Level1_Emoji-S3fC_r9E-Dbkx9PHy.js"),__vite__mapDeps([3,1])),Qt([3,1]))),Hf=Kn.lazy(()=>Xt(()=>Zt(()=>import("./Level3_Cascading-CUXvw6pA-ChNrJM5V.js"),__vite__mapDeps([4,1])),Qt([4,1]))),Uf=Kn.lazy(()=>Xt(()=>Zt(()=>import("./Level4_Translations-BdZBo0Eg-DdYbhYBU.js"),__vite__mapDeps([5,1])),Qt([5,1]))),kf=Kn.lazy(()=>Xt(()=>Zt(()=>import("./Level5_Group-DqOCLQ0k-CXJ7rF8D.js"),__vite__mapDeps([6,1])),Qt([6,1]))),aS={APP_ID:"ca-app-pub-4096368901415767~5414939789",BANNER_ID:"ca-app-pub-4096368901415767/2019330695",INTERSTITIAL_ID:"ca-app-pub-4096368901415767/1153913539"};class Gf extends Kn.Component{constructor(c){super(c),this.state={hasError:!1},this.props=c}static getDerivedStateFromError(c){return{hasError:!0}}componentDidCatch(c,A){console.error("Game crashed:",c,A)}render(){return this.state.hasError?T.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-4 text-center relative z-50",children:[T.jsx("h1",{className:"text-3xl font-bold mb-4 font-oswald text-red-500 uppercase",children:"Something went wrong."}),T.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform uppercase",children:"Reload Game"})]}):this.props.children}}const Gr=()=>T.jsx("div",{className:"flex items-center justify-center h-full w-full",children:T.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"})}),Ls={[K.CLASSIC]:30,[K.LEVEL_3_INFINITE]:15,[K.LEVEL_5_GROUP]:15,[K.LEVEL_SYNONYMS]:10,[K.LEVEL_TRANSLATION]:10,[K.LEVEL_EMOJI]:10,[K.LEVEL_4_THEMED]:5,[K.LEVEL_2_FILTER]:5},wf=()=>{const[s,c]=ne.useState(K.MENU),[A,u]=ne.useState(1),[p,b]=ne.useState([]),[D,U]=ne.useState(!1),[P,h]=ne.useState(!1),[B,y]=ne.useState(!1),[H,W]=ne.useState(!0),[$,k]=ne.useState(!1),[v,z]=ne.useState(!1),[Ae,ie]=ne.useState([]),[Ne,en]=ne.useState(()=>{try{return localStorage.getItem("wpm_debug_mode")==="true"}catch{return!1}}),[De,q]=ne.useState(()=>{try{const G=localStorage.getItem("wpm_mode_history");return G?JSON.parse(G):[]}catch{return[]}}),[ue,he]=ne.useState([K.CLASSIC,K.LEVEL_3_INFINITE,K.LEVEL_4_THEMED,K.LEVEL_5_GROUP,K.LEVEL_EMOJI,K.LEVEL_SYNONYMS,K.LEVEL_TRANSLATION,K.LEVEL_2_FILTER]),Ye=ne.useMemo(()=>sS(),[]),ve=ne.useMemo(()=>uS(),[]),Ce=ne.useMemo(()=>lS(cS),[]);async function Be(){try{await $o.initialize({})}catch(G){console.error("AdMob initialize failed",G)}}async function $e(){const G={adId:aS.BANNER_ID,adSize:"BANNER",position:"BOTTOM_CENTER",margin:0};try{await $o.showBanner(G),console.log("Banner ad is showing")}catch(V){console.error("Error showing banner ad:",V)}}ne.useEffect(()=>{async function G(){await Be(),await $e()}G()},[]),ne.useEffect(()=>{b(qo()),u(rf())},[]),ne.useEffect(()=>{localStorage.setItem("wpm_debug_mode",Ne.toString())},[Ne]),ne.useEffect(()=>{localStorage.setItem("wpm_mode_history",JSON.stringify(De))},[De]);const We=G=>{if(G.length<2)return K.CLASSIC;const V=ue.filter(ke=>Ls[ke]!==void 0);if(V.length===0)return K.CLASSIC;const Z=ke=>ke===K.CLASSIC||ke===K.LEVEL_4_THEMED||ke===K.LEVEL_SYNONYMS||ke===K.LEVEL_TRANSLATION,ce=ke=>[K.LEVEL_3_INFINITE,K.LEVEL_5_GROUP,K.LEVEL_EMOJI,K.LEVEL_2_FILTER].includes(ke),Ve=G[G.length-1],ye=G.slice(-2).filter(ke=>Z(ke)).length>=2;if(Ve&&ce(Ve)&&!ye)return K.CLASSIC;let In=V;ye&&(In=V.filter(ke=>!Z(ke))),In.length===0&&(In=V);let Mt=0;In.forEach(ke=>Mt+=Ls[ke]||0);let $t=Math.random()*Mt;for(const ke of In){const Un=Ls[ke]||0;if($t<Un)return ke;$t-=Un}return In[0]},C=G=>!of(),w=()=>{k(!1),lf()},j=async()=>{try{await $o.prepareInterstitial({adId:aS.INTERSTITIAL_ID,isTesting:!0}),await $o.showInterstitial()}catch(G){console.error("Interstitial Ad Error",G)}},le=G=>{const V=A+1;u(V),af(V);const Z=We([...De,s]);q(ce=>[...ce,s]),c(Z),V%3===0&&j()},Re=()=>{const G=Hn.toggleMusic();U(G)},S=()=>{window.confirm("ARE YOU SURE? THIS WILL RESET ALL PROGRESS AND STATS.")&&(localStorage.clear(),window.location.reload())},g=G=>{ie(G),h(!0)},F=()=>{if(v)return T.jsx(If,{onExit:()=>z(!1)});switch(s){case K.MENU:return T.jsx(uf,{onStart:()=>{const G=We(De);c(G),C()&&k(!0)},onSettings:()=>h(!0),onStats:()=>y(!0),lastLevel:A});case K.CLASSIC:case K.LEVEL_4_THEMED:case K.LEVEL_SYNONYMS:case K.LEVEL_RHYMES:case K.SPEED_ROUND:return T.jsx(ne.Suspense,{fallback:T.jsx(Gr,{}),children:T.jsx(Df,{csvData:s===K.LEVEL_SYNONYMS?Ye:s===K.LEVEL_RHYMES?ve:p,mode:s,levelIndex:A,onComplete:le,onExit:()=>c(K.MENU),hintsEnabled:H,onOpenSettings:g,debugMode:Ne})});case K.LEVEL_TRANSLATION:return T.jsx(ne.Suspense,{fallback:T.jsx(Gr,{}),children:T.jsx(Uf,{csvData:Ce,levelIndex:A,onComplete:le,onExit:()=>c(K.MENU),hintsEnabled:H,onOpenSettings:g,debugMode:Ne})});case K.LEVEL_2_FILTER:return T.jsx(ne.Suspense,{fallback:T.jsx(Gr,{}),children:T.jsx(vf,{csvData:p,levelIndex:A,onComplete:le,onGameOver:()=>c(K.MENU),onExit:()=>c(K.MENU),hintsEnabled:H,debugMode:Ne,onOpenSettings:g})});case K.LEVEL_EMOJI:return T.jsx(ne.Suspense,{fallback:T.jsx(Gr,{}),children:T.jsx(Bf,{levelIndex:A,onComplete:le,onExit:()=>c(K.MENU),hintsEnabled:H,debugMode:Ne,onOpenSettings:g})});case K.LEVEL_3_INFINITE:return T.jsx(ne.Suspense,{fallback:T.jsx(Gr,{}),children:T.jsx(Hf,{csvData:p,levelIndex:A,onComplete:le,onExit:()=>c(K.MENU),hintsEnabled:H,debugMode:Ne,onOpenSettings:g})});case K.LEVEL_5_GROUP:return T.jsx(ne.Suspense,{fallback:T.jsx(Gr,{}),children:T.jsx(kf,{csvData:p,levelIndex:A,onComplete:le,onExit:()=>c(K.MENU),hintsEnabled:H,debugMode:Ne,onOpenSettings:g})});default:return null}};return T.jsx(Gf,{children:T.jsxs("div",{className:"fixed inset-0 bg-black text-white font-sans overflow-hidden flex flex-col",children:[T.jsx("div",{className:"flex-1 relative overflow-hidden",children:F()}),T.jsx("footer",{className:"w-full bg-black shrink-0 border-t border-zinc-900 h-[60px] flex items-center justify-center relative z-50",children:T.jsx("div",{className:"text-[8px] text-zinc-800 font-oswald tracking-[0.3em] uppercase opacity-20",children:"Sponsored Content"})}),P&&T.jsx(cf,{isOpen:P,onClose:()=>{h(!1),ie([])},onMainMenu:()=>{h(!1),c(K.MENU)},isMusicOn:D,toggleMusic:Re,enabledModes:ue,toggleMode:G=>{he(V=>V.includes(G)?V.filter(Z=>Z!==G):[...V,G])},hintsEnabled:H,setHintsEnabled:W,onShowTutorial:()=>{h(!1),k(!0)},onResetProgress:S,debugMode:Ne,setDebugMode:en,categories:Ae}),B&&T.jsx(Sf,{onClose:()=>y(!1)}),$&&T.jsx(pf,{mode:s,onComplete:w})]})})},RS=document.getElementById("root");if(!RS)throw new Error("Could not find root element to mount to");const Ff=XR.createRoot(RS);Ff.render(T.jsx(Kn.StrictMode,{children:T.jsx(wf,{})}));export{tS as $,AS as E,Wf as F,xf as G,zf as K,Kf as P,Hn as U,Vf as Y,_f as a,T as f,ne as l,df as o,Rf as u,Yf as v,K as w};
