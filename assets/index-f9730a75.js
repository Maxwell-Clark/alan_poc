(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const n of C)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&g(t)}).observe(document,{childList:!0,subtree:!0});function Q(C){const n={};return C.integrity&&(n.integrity=C.integrity),C.referrerpolicy&&(n.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?n.credentials="include":C.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function g(C){if(C.ep)return;C.ep=!0;const n=Q(C);fetch(C.href,n)}})();function $e(A,B){const Q=Object.create(null),g=A.split(",");for(let C=0;C<g.length;C++)Q[g[C]]=!0;return B?C=>!!Q[C.toLowerCase()]:C=>!!Q[C]}function AF(A){if(RA(A)){const B={};for(let Q=0;Q<A.length;Q++){const g=A[Q],C=oB(g)?IU(g):AF(g);if(C)for(const n in C)B[n]=C[n]}return B}else{if(oB(A))return A;if(AB(A))return A}}const gU=/;(?![^(]*\))/g,EU=/:([^]+)/,CU=/\/\*.*?\*\//gs;function IU(A){const B={};return A.replace(CU,"").split(gU).forEach(Q=>{if(Q){const g=Q.split(EU);g.length>1&&(B[g[0].trim()]=g[1].trim())}}),B}function FC(A){let B="";if(oB(A))B=A;else if(RA(A))for(let Q=0;Q<A.length;Q++){const g=FC(A[Q]);g&&(B+=g+" ")}else if(AB(A))for(const Q in A)A[Q]&&(B+=Q+" ");return B.trim()}const wU="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nU=$e(wU);function Oc(A){return!!A||A===""}const Vg=A=>oB(A)?A:A==null?"":RA(A)||AB(A)&&(A.toString===zc||!NA(A.toString))?JSON.stringify(A,Tc,2):String(A),Tc=(A,B)=>B&&B.__v_isRef?Tc(A,B.value):aE(B)?{[`Map(${B.size})`]:[...B.entries()].reduce((Q,[g,C])=>(Q[`${g} =>`]=C,Q),{})}:xc(B)?{[`Set(${B.size})`]:[...B.values()]}:AB(B)&&!RA(B)&&!Kc(B)?String(B):B,KA={},sE=[],aQ=()=>{},tU=()=>!1,eU=/^on[^a-z]/,rI=A=>eU.test(A),BF=A=>A.startsWith("onUpdate:"),SB=Object.assign,QF=(A,B)=>{const Q=A.indexOf(B);Q>-1&&A.splice(Q,1)},FU=Object.prototype.hasOwnProperty,pA=(A,B)=>FU.call(A,B),RA=Array.isArray,aE=A=>dI(A)==="[object Map]",xc=A=>dI(A)==="[object Set]",NA=A=>typeof A=="function",oB=A=>typeof A=="string",gF=A=>typeof A=="symbol",AB=A=>A!==null&&typeof A=="object",vc=A=>AB(A)&&NA(A.then)&&NA(A.catch),zc=Object.prototype.toString,dI=A=>zc.call(A),DU=A=>dI(A).slice(8,-1),Kc=A=>dI(A)==="[object Object]",EF=A=>oB(A)&&A!=="NaN"&&A[0]!=="-"&&""+parseInt(A,10)===A,CI=$e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fI=A=>{const B=Object.create(null);return Q=>B[Q]||(B[Q]=A(Q))},iU=/-(\w)/g,lE=fI(A=>A.replace(iU,(B,Q)=>Q?Q.toUpperCase():"")),cU=/\B([A-Z])/g,Kg=fI(A=>A.replace(cU,"-$1").toLowerCase()),jc=fI(A=>A.charAt(0).toUpperCase()+A.slice(1)),Ce=fI(A=>A?`on${jc(A)}`:""),DC=(A,B)=>!Object.is(A,B),II=(A,B)=>{for(let Q=0;Q<A.length;Q++)A[Q](B)},iI=(A,B,Q)=>{Object.defineProperty(A,B,{configurable:!0,enumerable:!1,value:Q})},be=A=>{const B=parseFloat(A);return isNaN(B)?A:B};let Ri;const sU=()=>Ri||(Ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $B;class Pc{constructor(B=!1){this.detached=B,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$B,!B&&$B&&(this.index=($B.scopes||($B.scopes=[])).push(this)-1)}get active(){return this._active}run(B){if(this._active){const Q=$B;try{return $B=this,B()}finally{$B=Q}}}on(){$B=this}off(){$B=this.parent}stop(B){if(this._active){let Q,g;for(Q=0,g=this.effects.length;Q<g;Q++)this.effects[Q].stop();for(Q=0,g=this.cleanups.length;Q<g;Q++)this.cleanups[Q]();if(this.scopes)for(Q=0,g=this.scopes.length;Q<g;Q++)this.scopes[Q].stop(!0);if(!this.detached&&this.parent&&!B){const C=this.parent.scopes.pop();C&&C!==this&&(this.parent.scopes[this.index]=C,C.index=this.index)}this.parent=void 0,this._active=!1}}}function qc(A){return new Pc(A)}function aU(A,B=$B){B&&B.active&&B.effects.push(A)}function _c(){return $B}function oU(A){$B&&$B.cleanups.push(A)}const CF=A=>{const B=new Set(A);return B.w=0,B.n=0,B},$c=A=>(A.w&Mg)>0,As=A=>(A.n&Mg)>0,UU=({deps:A})=>{if(A.length)for(let B=0;B<A.length;B++)A[B].w|=Mg},lU=A=>{const{deps:B}=A;if(B.length){let Q=0;for(let g=0;g<B.length;g++){const C=B[g];$c(C)&&!As(C)?C.delete(A):B[Q++]=C,C.w&=~Mg,C.n&=~Mg}B.length=Q}},cI=new WeakMap;let CC=0,Mg=1;const ke=30;let cQ;const Tg=Symbol(""),Ze=Symbol("");class IF{constructor(B,Q=null,g){this.fn=B,this.scheduler=Q,this.active=!0,this.deps=[],this.parent=void 0,aU(this,g)}run(){if(!this.active)return this.fn();let B=cQ,Q=og;for(;B;){if(B===this)return;B=B.parent}try{return this.parent=cQ,cQ=this,og=!0,Mg=1<<++CC,CC<=ke?UU(this):Yi(this),this.fn()}finally{CC<=ke&&lU(this),Mg=1<<--CC,cQ=this.parent,og=Q,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cQ===this?this.deferStop=!0:this.active&&(Yi(this),this.onStop&&this.onStop(),this.active=!1)}}function Yi(A){const{deps:B}=A;if(B.length){for(let Q=0;Q<B.length;Q++)B[Q].delete(A);B.length=0}}let og=!0;const Bs=[];function YE(){Bs.push(og),og=!1}function hE(){const A=Bs.pop();og=A===void 0?!0:A}function xB(A,B,Q){if(og&&cQ){let g=cI.get(A);g||cI.set(A,g=new Map);let C=g.get(Q);C||g.set(Q,C=CF()),Qs(C)}}function Qs(A,B){let Q=!1;CC<=ke?As(A)||(A.n|=Mg,Q=!$c(A)):Q=!A.has(cQ),Q&&(A.add(cQ),cQ.deps.push(A))}function PQ(A,B,Q,g,C,n){const t=cI.get(A);if(!t)return;let w=[];if(B==="clear")w=[...t.values()];else if(Q==="length"&&RA(A)){const I=Number(g);t.forEach((D,F)=>{(F==="length"||F>=I)&&w.push(D)})}else switch(Q!==void 0&&w.push(t.get(Q)),B){case"add":RA(A)?EF(Q)&&w.push(t.get("length")):(w.push(t.get(Tg)),aE(A)&&w.push(t.get(Ze)));break;case"delete":RA(A)||(w.push(t.get(Tg)),aE(A)&&w.push(t.get(Ze)));break;case"set":aE(A)&&w.push(t.get(Tg));break}if(w.length===1)w[0]&&me(w[0]);else{const I=[];for(const D of w)D&&I.push(...D);me(CF(I))}}function me(A,B){const Q=RA(A)?A:[...A];for(const g of Q)g.computed&&hi(g);for(const g of Q)g.computed||hi(g)}function hi(A,B){(A!==cQ||A.allowRecurse)&&(A.scheduler?A.scheduler():A.run())}function MU(A,B){var Q;return(Q=cI.get(A))===null||Q===void 0?void 0:Q.get(B)}const GU=$e("__proto__,__v_isRef,__isVue"),gs=new Set(Object.getOwnPropertyNames(Symbol).filter(A=>A!=="arguments"&&A!=="caller").map(A=>Symbol[A]).filter(gF)),rU=wF(),dU=wF(!1,!0),fU=wF(!0),Ni=RU();function RU(){const A={};return["includes","indexOf","lastIndexOf"].forEach(B=>{A[B]=function(...Q){const g=HA(this);for(let n=0,t=this.length;n<t;n++)xB(g,"get",n+"");const C=g[B](...Q);return C===-1||C===!1?g[B](...Q.map(HA)):C}}),["push","pop","shift","unshift","splice"].forEach(B=>{A[B]=function(...Q){YE();const g=HA(this)[B].apply(this,Q);return hE(),g}}),A}function YU(A){const B=HA(this);return xB(B,"has",A),B.hasOwnProperty(A)}function wF(A=!1,B=!1){return function(g,C,n){if(C==="__v_isReactive")return!A;if(C==="__v_isReadonly")return A;if(C==="__v_isShallow")return B;if(C==="__v_raw"&&n===(A?B?VU:ns:B?ws:Is).get(g))return g;const t=RA(g);if(!A){if(t&&pA(Ni,C))return Reflect.get(Ni,C,n);if(C==="hasOwnProperty")return YU}const w=Reflect.get(g,C,n);return(gF(C)?gs.has(C):GU(C))||(A||xB(g,"get",C),B)?w:tB(w)?t&&EF(C)?w:w.value:AB(w)?A?ts(w):NE(w):w}}const hU=Es(),NU=Es(!0);function Es(A=!1){return function(Q,g,C,n){let t=Q[g];if(ME(t)&&tB(t)&&!tB(C))return!1;if(!A&&(!sI(C)&&!ME(C)&&(t=HA(t),C=HA(C)),!RA(Q)&&tB(t)&&!tB(C)))return t.value=C,!0;const w=RA(Q)&&EF(g)?Number(g)<Q.length:pA(Q,g),I=Reflect.set(Q,g,C,n);return Q===HA(n)&&(w?DC(C,t)&&PQ(Q,"set",g,C):PQ(Q,"add",g,C)),I}}function uU(A,B){const Q=pA(A,B);A[B];const g=Reflect.deleteProperty(A,B);return g&&Q&&PQ(A,"delete",B,void 0),g}function JU(A,B){const Q=Reflect.has(A,B);return(!gF(B)||!gs.has(B))&&xB(A,"has",B),Q}function bU(A){return xB(A,"iterate",RA(A)?"length":Tg),Reflect.ownKeys(A)}const Cs={get:rU,set:hU,deleteProperty:uU,has:JU,ownKeys:bU},kU={get:fU,set(A,B){return!0},deleteProperty(A,B){return!0}},ZU=SB({},Cs,{get:dU,set:NU}),nF=A=>A,RI=A=>Reflect.getPrototypeOf(A);function $C(A,B,Q=!1,g=!1){A=A.__v_raw;const C=HA(A),n=HA(B);Q||(B!==n&&xB(C,"get",B),xB(C,"get",n));const{has:t}=RI(C),w=g?nF:Q?FF:iC;if(t.call(C,B))return w(A.get(B));if(t.call(C,n))return w(A.get(n));A!==C&&A.get(B)}function AI(A,B=!1){const Q=this.__v_raw,g=HA(Q),C=HA(A);return B||(A!==C&&xB(g,"has",A),xB(g,"has",C)),A===C?Q.has(A):Q.has(A)||Q.has(C)}function BI(A,B=!1){return A=A.__v_raw,!B&&xB(HA(A),"iterate",Tg),Reflect.get(A,"size",A)}function ui(A){A=HA(A);const B=HA(this);return RI(B).has.call(B,A)||(B.add(A),PQ(B,"add",A,A)),this}function Ji(A,B){B=HA(B);const Q=HA(this),{has:g,get:C}=RI(Q);let n=g.call(Q,A);n||(A=HA(A),n=g.call(Q,A));const t=C.call(Q,A);return Q.set(A,B),n?DC(B,t)&&PQ(Q,"set",A,B):PQ(Q,"add",A,B),this}function bi(A){const B=HA(this),{has:Q,get:g}=RI(B);let C=Q.call(B,A);C||(A=HA(A),C=Q.call(B,A)),g&&g.call(B,A);const n=B.delete(A);return C&&PQ(B,"delete",A,void 0),n}function ki(){const A=HA(this),B=A.size!==0,Q=A.clear();return B&&PQ(A,"clear",void 0,void 0),Q}function QI(A,B){return function(g,C){const n=this,t=n.__v_raw,w=HA(t),I=B?nF:A?FF:iC;return!A&&xB(w,"iterate",Tg),t.forEach((D,F)=>g.call(C,I(D),I(F),n))}}function gI(A,B,Q){return function(...g){const C=this.__v_raw,n=HA(C),t=aE(n),w=A==="entries"||A===Symbol.iterator&&t,I=A==="keys"&&t,D=C[A](...g),F=Q?nF:B?FF:iC;return!B&&xB(n,"iterate",I?Ze:Tg),{next(){const{value:e,done:a}=D.next();return a?{value:e,done:a}:{value:w?[F(e[0]),F(e[1])]:F(e),done:a}},[Symbol.iterator](){return this}}}}function Dg(A){return function(...B){return A==="delete"?!1:this}}function mU(){const A={get(n){return $C(this,n)},get size(){return BI(this)},has:AI,add:ui,set:Ji,delete:bi,clear:ki,forEach:QI(!1,!1)},B={get(n){return $C(this,n,!1,!0)},get size(){return BI(this)},has:AI,add:ui,set:Ji,delete:bi,clear:ki,forEach:QI(!1,!0)},Q={get(n){return $C(this,n,!0)},get size(){return BI(this,!0)},has(n){return AI.call(this,n,!0)},add:Dg("add"),set:Dg("set"),delete:Dg("delete"),clear:Dg("clear"),forEach:QI(!0,!1)},g={get(n){return $C(this,n,!0,!0)},get size(){return BI(this,!0)},has(n){return AI.call(this,n,!0)},add:Dg("add"),set:Dg("set"),delete:Dg("delete"),clear:Dg("clear"),forEach:QI(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{A[n]=gI(n,!1,!1),Q[n]=gI(n,!0,!1),B[n]=gI(n,!1,!0),g[n]=gI(n,!0,!0)}),[A,Q,B,g]}const[XU,LU,yU,pU]=mU();function tF(A,B){const Q=B?A?pU:yU:A?LU:XU;return(g,C,n)=>C==="__v_isReactive"?!A:C==="__v_isReadonly"?A:C==="__v_raw"?g:Reflect.get(pA(Q,C)&&C in g?Q:g,C,n)}const HU={get:tF(!1,!1)},SU={get:tF(!1,!0)},WU={get:tF(!0,!1)},Is=new WeakMap,ws=new WeakMap,ns=new WeakMap,VU=new WeakMap;function OU(A){switch(A){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TU(A){return A.__v_skip||!Object.isExtensible(A)?0:OU(DU(A))}function NE(A){return ME(A)?A:eF(A,!1,Cs,HU,Is)}function xU(A){return eF(A,!1,ZU,SU,ws)}function ts(A){return eF(A,!0,kU,WU,ns)}function eF(A,B,Q,g,C){if(!AB(A)||A.__v_raw&&!(B&&A.__v_isReactive))return A;const n=C.get(A);if(n)return n;const t=TU(A);if(t===0)return A;const w=new Proxy(A,t===2?g:Q);return C.set(A,w),w}function Ug(A){return ME(A)?Ug(A.__v_raw):!!(A&&A.__v_isReactive)}function ME(A){return!!(A&&A.__v_isReadonly)}function sI(A){return!!(A&&A.__v_isShallow)}function es(A){return Ug(A)||ME(A)}function HA(A){const B=A&&A.__v_raw;return B?HA(B):A}function GE(A){return iI(A,"__v_skip",!0),A}const iC=A=>AB(A)?NE(A):A,FF=A=>AB(A)?ts(A):A;function Fs(A){og&&cQ&&(A=HA(A),Qs(A.dep||(A.dep=CF())))}function Ds(A,B){A=HA(A);const Q=A.dep;Q&&me(Q)}function tB(A){return!!(A&&A.__v_isRef===!0)}function RB(A){return is(A,!1)}function vU(A){return is(A,!0)}function is(A,B){return tB(A)?A:new zU(A,B)}class zU{constructor(B,Q){this.__v_isShallow=Q,this.dep=void 0,this.__v_isRef=!0,this._rawValue=Q?B:HA(B),this._value=Q?B:iC(B)}get value(){return Fs(this),this._value}set value(B){const Q=this.__v_isShallow||sI(B)||ME(B);B=Q?B:HA(B),DC(B,this._rawValue)&&(this._rawValue=B,this._value=Q?B:iC(B),Ds(this))}}function nQ(A){return tB(A)?A.value:A}const KU={get:(A,B,Q)=>nQ(Reflect.get(A,B,Q)),set:(A,B,Q,g)=>{const C=A[B];return tB(C)&&!tB(Q)?(C.value=Q,!0):Reflect.set(A,B,Q,g)}};function cs(A){return Ug(A)?A:new Proxy(A,KU)}function jU(A){const B=RA(A)?new Array(A.length):{};for(const Q in A)B[Q]=qU(A,Q);return B}class PU{constructor(B,Q,g){this._object=B,this._key=Q,this._defaultValue=g,this.__v_isRef=!0}get value(){const B=this._object[this._key];return B===void 0?this._defaultValue:B}set value(B){this._object[this._key]=B}get dep(){return MU(HA(this._object),this._key)}}function qU(A,B,Q){const g=A[B];return tB(g)?g:new PU(A,B,Q)}var ss;class _U{constructor(B,Q,g,C){this._setter=Q,this.dep=void 0,this.__v_isRef=!0,this[ss]=!1,this._dirty=!0,this.effect=new IF(B,()=>{this._dirty||(this._dirty=!0,Ds(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!C,this.__v_isReadonly=g}get value(){const B=HA(this);return Fs(B),(B._dirty||!B._cacheable)&&(B._dirty=!1,B._value=B.effect.run()),B._value}set value(B){this._setter(B)}}ss="__v_isReadonly";function $U(A,B,Q=!1){let g,C;const n=NA(A);return n?(g=A,C=aQ):(g=A.get,C=A.set),new _U(g,C,n||!C,Q)}function lg(A,B,Q,g){let C;try{C=g?A(...g):A()}catch(n){YI(n,B,Q)}return C}function oQ(A,B,Q,g){if(NA(A)){const n=lg(A,B,Q,g);return n&&vc(n)&&n.catch(t=>{YI(t,B,Q)}),n}const C=[];for(let n=0;n<A.length;n++)C.push(oQ(A[n],B,Q,g));return C}function YI(A,B,Q,g=!0){const C=B?B.vnode:null;if(B){let n=B.parent;const t=B.proxy,w=Q;for(;n;){const D=n.ec;if(D){for(let F=0;F<D.length;F++)if(D[F](A,t,w)===!1)return}n=n.parent}const I=B.appContext.config.errorHandler;if(I){lg(I,null,10,[A,t,w]);return}}Al(A,Q,C,g)}function Al(A,B,Q,g=!0){console.error(A)}let cC=!1,Xe=!1;const bB=[];let kQ=0;const oE=[];let KQ=null,Sg=0;const as=Promise.resolve();let DF=null;function hI(A){const B=DF||as;return A?B.then(this?A.bind(this):A):B}function Bl(A){let B=kQ+1,Q=bB.length;for(;B<Q;){const g=B+Q>>>1;sC(bB[g])<A?B=g+1:Q=g}return B}function iF(A){(!bB.length||!bB.includes(A,cC&&A.allowRecurse?kQ+1:kQ))&&(A.id==null?bB.push(A):bB.splice(Bl(A.id),0,A),os())}function os(){!cC&&!Xe&&(Xe=!0,DF=as.then(ls))}function Ql(A){const B=bB.indexOf(A);B>kQ&&bB.splice(B,1)}function gl(A){RA(A)?oE.push(...A):(!KQ||!KQ.includes(A,A.allowRecurse?Sg+1:Sg))&&oE.push(A),os()}function Zi(A,B=cC?kQ+1:0){for(;B<bB.length;B++){const Q=bB[B];Q&&Q.pre&&(bB.splice(B,1),B--,Q())}}function Us(A){if(oE.length){const B=[...new Set(oE)];if(oE.length=0,KQ){KQ.push(...B);return}for(KQ=B,KQ.sort((Q,g)=>sC(Q)-sC(g)),Sg=0;Sg<KQ.length;Sg++)KQ[Sg]();KQ=null,Sg=0}}const sC=A=>A.id==null?1/0:A.id,El=(A,B)=>{const Q=sC(A)-sC(B);if(Q===0){if(A.pre&&!B.pre)return-1;if(B.pre&&!A.pre)return 1}return Q};function ls(A){Xe=!1,cC=!0,bB.sort(El);const B=aQ;try{for(kQ=0;kQ<bB.length;kQ++){const Q=bB[kQ];Q&&Q.active!==!1&&lg(Q,null,14)}}finally{kQ=0,bB.length=0,Us(),cC=!1,DF=null,(bB.length||oE.length)&&ls()}}function Cl(A,B,...Q){if(A.isUnmounted)return;const g=A.vnode.props||KA;let C=Q;const n=B.startsWith("update:"),t=n&&B.slice(7);if(t&&t in g){const F=`${t==="modelValue"?"model":t}Modifiers`,{number:e,trim:a}=g[F]||KA;a&&(C=Q.map(M=>oB(M)?M.trim():M)),e&&(C=Q.map(be))}let w,I=g[w=Ce(B)]||g[w=Ce(lE(B))];!I&&n&&(I=g[w=Ce(Kg(B))]),I&&oQ(I,A,6,C);const D=g[w+"Once"];if(D){if(!A.emitted)A.emitted={};else if(A.emitted[w])return;A.emitted[w]=!0,oQ(D,A,6,C)}}function Ms(A,B,Q=!1){const g=B.emitsCache,C=g.get(A);if(C!==void 0)return C;const n=A.emits;let t={},w=!1;if(!NA(A)){const I=D=>{const F=Ms(D,B,!0);F&&(w=!0,SB(t,F))};!Q&&B.mixins.length&&B.mixins.forEach(I),A.extends&&I(A.extends),A.mixins&&A.mixins.forEach(I)}return!n&&!w?(AB(A)&&g.set(A,null),null):(RA(n)?n.forEach(I=>t[I]=null):SB(t,n),AB(A)&&g.set(A,t),t)}function NI(A,B){return!A||!rI(B)?!1:(B=B.slice(2).replace(/Once$/,""),pA(A,B[0].toLowerCase()+B.slice(1))||pA(A,Kg(B))||pA(A,B))}let tQ=null,uI=null;function aI(A){const B=tQ;return tQ=A,uI=A&&A.type.__scopeId||null,B}function Il(A){uI=A}function wl(){uI=null}function nl(A,B=tQ,Q){if(!B||A._n)return A;const g=(...C)=>{g._d&&Wi(-1);const n=aI(B);let t;try{t=A(...C)}finally{aI(n),g._d&&Wi(1)}return t};return g._n=!0,g._c=!0,g._d=!0,g}function Ie(A){const{type:B,vnode:Q,proxy:g,withProxy:C,props:n,propsOptions:[t],slots:w,attrs:I,emit:D,render:F,renderCache:e,data:a,setupState:M,ctx:N,inheritAttrs:f}=A;let h,m;const q=aI(A);try{if(Q.shapeFlag&4){const x=C||g;h=bQ(F.call(x,x,e,n,M,a,N)),m=I}else{const x=B;h=bQ(x.length>1?x(n,{attrs:I,slots:w,emit:D}):x(n,null)),m=B.props?I:tl(I)}}catch(x){wC.length=0,YI(x,A,1),h=HB(zg)}let gA=h;if(m&&f!==!1){const x=Object.keys(m),{shapeFlag:CA}=gA;x.length&&CA&7&&(t&&x.some(BF)&&(m=el(m,t)),gA=rE(gA,m))}return Q.dirs&&(gA=rE(gA),gA.dirs=gA.dirs?gA.dirs.concat(Q.dirs):Q.dirs),Q.transition&&(gA.transition=Q.transition),h=gA,aI(q),h}const tl=A=>{let B;for(const Q in A)(Q==="class"||Q==="style"||rI(Q))&&((B||(B={}))[Q]=A[Q]);return B},el=(A,B)=>{const Q={};for(const g in A)(!BF(g)||!(g.slice(9)in B))&&(Q[g]=A[g]);return Q};function Fl(A,B,Q){const{props:g,children:C,component:n}=A,{props:t,children:w,patchFlag:I}=B,D=n.emitsOptions;if(B.dirs||B.transition)return!0;if(Q&&I>=0){if(I&1024)return!0;if(I&16)return g?mi(g,t,D):!!t;if(I&8){const F=B.dynamicProps;for(let e=0;e<F.length;e++){const a=F[e];if(t[a]!==g[a]&&!NI(D,a))return!0}}}else return(C||w)&&(!w||!w.$stable)?!0:g===t?!1:g?t?mi(g,t,D):!0:!!t;return!1}function mi(A,B,Q){const g=Object.keys(B);if(g.length!==Object.keys(A).length)return!0;for(let C=0;C<g.length;C++){const n=g[C];if(B[n]!==A[n]&&!NI(Q,n))return!0}return!1}function Dl({vnode:A,parent:B},Q){for(;B&&B.subTree===A;)(A=B.vnode).el=Q,B=B.parent}const il=A=>A.__isSuspense;function cl(A,B){B&&B.pendingBranch?RA(A)?B.effects.push(...A):B.effects.push(A):gl(A)}function wI(A,B){if(FB){let Q=FB.provides;const g=FB.parent&&FB.parent.provides;g===Q&&(Q=FB.provides=Object.create(g)),Q[A]=B}}function ZQ(A,B,Q=!1){const g=FB||tQ;if(g){const C=g.parent==null?g.vnode.appContext&&g.vnode.appContext.provides:g.parent.provides;if(C&&A in C)return C[A];if(arguments.length>1)return Q&&NA(B)?B.call(g.proxy):B}}const EI={};function xg(A,B,Q){return Gs(A,B,Q)}function Gs(A,B,{immediate:Q,deep:g,flush:C,onTrack:n,onTrigger:t}=KA){const w=_c()===(FB==null?void 0:FB.scope)?FB:null;let I,D=!1,F=!1;if(tB(A)?(I=()=>A.value,D=sI(A)):Ug(A)?(I=()=>A,g=!0):RA(A)?(F=!0,D=A.some(gA=>Ug(gA)||sI(gA)),I=()=>A.map(gA=>{if(tB(gA))return gA.value;if(Ug(gA))return Og(gA);if(NA(gA))return lg(gA,w,2)})):NA(A)?B?I=()=>lg(A,w,2):I=()=>{if(!(w&&w.isUnmounted))return e&&e(),oQ(A,w,3,[a])}:I=aQ,B&&g){const gA=I;I=()=>Og(gA())}let e,a=gA=>{e=m.onStop=()=>{lg(gA,w,4)}},M;if(oC)if(a=aQ,B?Q&&oQ(B,w,3,[I(),F?[]:void 0,a]):I(),C==="sync"){const gA=I0();M=gA.__watcherHandles||(gA.__watcherHandles=[])}else return aQ;let N=F?new Array(A.length).fill(EI):EI;const f=()=>{if(m.active)if(B){const gA=m.run();(g||D||(F?gA.some((x,CA)=>DC(x,N[CA])):DC(gA,N)))&&(e&&e(),oQ(B,w,3,[gA,N===EI?void 0:F&&N[0]===EI?[]:N,a]),N=gA)}else m.run()};f.allowRecurse=!!B;let h;C==="sync"?h=f:C==="post"?h=()=>OB(f,w&&w.suspense):(f.pre=!0,w&&(f.id=w.uid),h=()=>iF(f));const m=new IF(I,h);B?Q?f():N=m.run():C==="post"?OB(m.run.bind(m),w&&w.suspense):m.run();const q=()=>{m.stop(),w&&w.scope&&QF(w.scope.effects,m)};return M&&M.push(q),q}function sl(A,B,Q){const g=this.proxy,C=oB(A)?A.includes(".")?rs(g,A):()=>g[A]:A.bind(g,g);let n;NA(B)?n=B:(n=B.handler,Q=B);const t=FB;dE(this);const w=Gs(C,n.bind(g),Q);return t?dE(t):vg(),w}function rs(A,B){const Q=B.split(".");return()=>{let g=A;for(let C=0;C<Q.length&&g;C++)g=g[Q[C]];return g}}function Og(A,B){if(!AB(A)||A.__v_skip||(B=B||new Set,B.has(A)))return A;if(B.add(A),tB(A))Og(A.value,B);else if(RA(A))for(let Q=0;Q<A.length;Q++)Og(A[Q],B);else if(xc(A)||aE(A))A.forEach(Q=>{Og(Q,B)});else if(Kc(A))for(const Q in A)Og(A[Q],B);return A}function ds(A){return NA(A)?{setup:A,name:A.name}:A}const nI=A=>!!A.type.__asyncLoader,fs=A=>A.type.__isKeepAlive;function al(A,B){Rs(A,"a",B)}function ol(A,B){Rs(A,"da",B)}function Rs(A,B,Q=FB){const g=A.__wdc||(A.__wdc=()=>{let C=Q;for(;C;){if(C.isDeactivated)return;C=C.parent}return A()});if(JI(B,g,Q),Q){let C=Q.parent;for(;C&&C.parent;)fs(C.parent.vnode)&&Ul(g,B,Q,C),C=C.parent}}function Ul(A,B,Q,g){const C=JI(B,A,g,!0);Ys(()=>{QF(g[B],C)},Q)}function JI(A,B,Q=FB,g=!1){if(Q){const C=Q[A]||(Q[A]=[]),n=B.__weh||(B.__weh=(...t)=>{if(Q.isUnmounted)return;YE(),dE(Q);const w=oQ(B,Q,A,t);return vg(),hE(),w});return g?C.unshift(n):C.push(n),n}}const qQ=A=>(B,Q=FB)=>(!oC||A==="sp")&&JI(A,(...g)=>B(...g),Q),ll=qQ("bm"),cF=qQ("m"),Ml=qQ("bu"),Gl=qQ("u"),rl=qQ("bum"),Ys=qQ("um"),dl=qQ("sp"),fl=qQ("rtg"),Rl=qQ("rtc");function Yl(A,B=FB){JI("ec",A,B)}function hl(A,B){const Q=tQ;if(Q===null)return A;const g=ZI(Q)||Q.proxy,C=A.dirs||(A.dirs=[]);for(let n=0;n<B.length;n++){let[t,w,I,D=KA]=B[n];t&&(NA(t)&&(t={mounted:t,updated:t}),t.deep&&Og(w),C.push({dir:t,instance:g,value:w,oldValue:void 0,arg:I,modifiers:D}))}return A}function yg(A,B,Q,g){const C=A.dirs,n=B&&B.dirs;for(let t=0;t<C.length;t++){const w=C[t];n&&(w.oldValue=n[t].value);let I=w.dir[g];I&&(YE(),oQ(I,Q,8,[A.el,w,A,B]),hE())}}const Nl=Symbol();function sF(A,B,Q,g){let C;const n=Q&&Q[g];if(RA(A)||oB(A)){C=new Array(A.length);for(let t=0,w=A.length;t<w;t++)C[t]=B(A[t],t,void 0,n&&n[t])}else if(typeof A=="number"){C=new Array(A);for(let t=0;t<A;t++)C[t]=B(t+1,t,void 0,n&&n[t])}else if(AB(A))if(A[Symbol.iterator])C=Array.from(A,(t,w)=>B(t,w,void 0,n&&n[w]));else{const t=Object.keys(A);C=new Array(t.length);for(let w=0,I=t.length;w<I;w++){const D=t[w];C[w]=B(A[D],D,w,n&&n[w])}}else C=[];return Q&&(Q[g]=C),C}const Le=A=>A?ps(A)?ZI(A)||A.proxy:Le(A.parent):null,IC=SB(Object.create(null),{$:A=>A,$el:A=>A.vnode.el,$data:A=>A.data,$props:A=>A.props,$attrs:A=>A.attrs,$slots:A=>A.slots,$refs:A=>A.refs,$parent:A=>Le(A.parent),$root:A=>Le(A.root),$emit:A=>A.emit,$options:A=>aF(A),$forceUpdate:A=>A.f||(A.f=()=>iF(A.update)),$nextTick:A=>A.n||(A.n=hI.bind(A.proxy)),$watch:A=>sl.bind(A)}),we=(A,B)=>A!==KA&&!A.__isScriptSetup&&pA(A,B),ul={get({_:A},B){const{ctx:Q,setupState:g,data:C,props:n,accessCache:t,type:w,appContext:I}=A;let D;if(B[0]!=="$"){const M=t[B];if(M!==void 0)switch(M){case 1:return g[B];case 2:return C[B];case 4:return Q[B];case 3:return n[B]}else{if(we(g,B))return t[B]=1,g[B];if(C!==KA&&pA(C,B))return t[B]=2,C[B];if((D=A.propsOptions[0])&&pA(D,B))return t[B]=3,n[B];if(Q!==KA&&pA(Q,B))return t[B]=4,Q[B];ye&&(t[B]=0)}}const F=IC[B];let e,a;if(F)return B==="$attrs"&&xB(A,"get",B),F(A);if((e=w.__cssModules)&&(e=e[B]))return e;if(Q!==KA&&pA(Q,B))return t[B]=4,Q[B];if(a=I.config.globalProperties,pA(a,B))return a[B]},set({_:A},B,Q){const{data:g,setupState:C,ctx:n}=A;return we(C,B)?(C[B]=Q,!0):g!==KA&&pA(g,B)?(g[B]=Q,!0):pA(A.props,B)||B[0]==="$"&&B.slice(1)in A?!1:(n[B]=Q,!0)},has({_:{data:A,setupState:B,accessCache:Q,ctx:g,appContext:C,propsOptions:n}},t){let w;return!!Q[t]||A!==KA&&pA(A,t)||we(B,t)||(w=n[0])&&pA(w,t)||pA(g,t)||pA(IC,t)||pA(C.config.globalProperties,t)},defineProperty(A,B,Q){return Q.get!=null?A._.accessCache[B]=0:pA(Q,"value")&&this.set(A,B,Q.value,null),Reflect.defineProperty(A,B,Q)}};let ye=!0;function Jl(A){const B=aF(A),Q=A.proxy,g=A.ctx;ye=!1,B.beforeCreate&&Xi(B.beforeCreate,A,"bc");const{data:C,computed:n,methods:t,watch:w,provide:I,inject:D,created:F,beforeMount:e,mounted:a,beforeUpdate:M,updated:N,activated:f,deactivated:h,beforeDestroy:m,beforeUnmount:q,destroyed:gA,unmounted:x,render:CA,renderTracked:bA,renderTriggered:oA,errorCaptured:IA,serverPrefetch:wA,expose:UA,inheritAttrs:uA,components:rA,directives:UB,filters:xA}=B;if(D&&bl(D,g,null,A.appContext.config.unwrapInjectedRef),t)for(const WA in t){const XA=t[WA];NA(XA)&&(g[WA]=XA.bind(Q))}if(C){const WA=C.call(Q,Q);AB(WA)&&(A.data=NE(WA))}if(ye=!0,n)for(const WA in n){const XA=n[WA],DB=NA(XA)?XA.bind(Q,Q):NA(XA.get)?XA.get.bind(Q,Q):aQ,iB=!NA(XA)&&NA(XA.set)?XA.set.bind(Q):aQ,EB=TB({get:DB,set:iB});Object.defineProperty(g,WA,{enumerable:!0,configurable:!0,get:()=>EB.value,set:IB=>EB.value=IB})}if(w)for(const WA in w)hs(w[WA],g,Q,WA);if(I){const WA=NA(I)?I.call(Q):I;Reflect.ownKeys(WA).forEach(XA=>{wI(XA,WA[XA])})}F&&Xi(F,A,"c");function jA(WA,XA){RA(XA)?XA.forEach(DB=>WA(DB.bind(Q))):XA&&WA(XA.bind(Q))}if(jA(ll,e),jA(cF,a),jA(Ml,M),jA(Gl,N),jA(al,f),jA(ol,h),jA(Yl,IA),jA(Rl,bA),jA(fl,oA),jA(rl,q),jA(Ys,x),jA(dl,wA),RA(UA))if(UA.length){const WA=A.exposed||(A.exposed={});UA.forEach(XA=>{Object.defineProperty(WA,XA,{get:()=>Q[XA],set:DB=>Q[XA]=DB})})}else A.exposed||(A.exposed={});CA&&A.render===aQ&&(A.render=CA),uA!=null&&(A.inheritAttrs=uA),rA&&(A.components=rA),UB&&(A.directives=UB)}function bl(A,B,Q=aQ,g=!1){RA(A)&&(A=pe(A));for(const C in A){const n=A[C];let t;AB(n)?"default"in n?t=ZQ(n.from||C,n.default,!0):t=ZQ(n.from||C):t=ZQ(n),tB(t)&&g?Object.defineProperty(B,C,{enumerable:!0,configurable:!0,get:()=>t.value,set:w=>t.value=w}):B[C]=t}}function Xi(A,B,Q){oQ(RA(A)?A.map(g=>g.bind(B.proxy)):A.bind(B.proxy),B,Q)}function hs(A,B,Q,g){const C=g.includes(".")?rs(Q,g):()=>Q[g];if(oB(A)){const n=B[A];NA(n)&&xg(C,n)}else if(NA(A))xg(C,A.bind(Q));else if(AB(A))if(RA(A))A.forEach(n=>hs(n,B,Q,g));else{const n=NA(A.handler)?A.handler.bind(Q):B[A.handler];NA(n)&&xg(C,n,A)}}function aF(A){const B=A.type,{mixins:Q,extends:g}=B,{mixins:C,optionsCache:n,config:{optionMergeStrategies:t}}=A.appContext,w=n.get(B);let I;return w?I=w:!C.length&&!Q&&!g?I=B:(I={},C.length&&C.forEach(D=>oI(I,D,t,!0)),oI(I,B,t)),AB(B)&&n.set(B,I),I}function oI(A,B,Q,g=!1){const{mixins:C,extends:n}=B;n&&oI(A,n,Q,!0),C&&C.forEach(t=>oI(A,t,Q,!0));for(const t in B)if(!(g&&t==="expose")){const w=kl[t]||Q&&Q[t];A[t]=w?w(A[t],B[t]):B[t]}return A}const kl={data:Li,props:Hg,emits:Hg,methods:Hg,computed:Hg,beforeCreate:pB,created:pB,beforeMount:pB,mounted:pB,beforeUpdate:pB,updated:pB,beforeDestroy:pB,beforeUnmount:pB,destroyed:pB,unmounted:pB,activated:pB,deactivated:pB,errorCaptured:pB,serverPrefetch:pB,components:Hg,directives:Hg,watch:ml,provide:Li,inject:Zl};function Li(A,B){return B?A?function(){return SB(NA(A)?A.call(this,this):A,NA(B)?B.call(this,this):B)}:B:A}function Zl(A,B){return Hg(pe(A),pe(B))}function pe(A){if(RA(A)){const B={};for(let Q=0;Q<A.length;Q++)B[A[Q]]=A[Q];return B}return A}function pB(A,B){return A?[...new Set([].concat(A,B))]:B}function Hg(A,B){return A?SB(SB(Object.create(null),A),B):B}function ml(A,B){if(!A)return B;if(!B)return A;const Q=SB(Object.create(null),A);for(const g in B)Q[g]=pB(A[g],B[g]);return Q}function Xl(A,B,Q,g=!1){const C={},n={};iI(n,kI,1),A.propsDefaults=Object.create(null),Ns(A,B,C,n);for(const t in A.propsOptions[0])t in C||(C[t]=void 0);Q?A.props=g?C:xU(C):A.type.props?A.props=C:A.props=n,A.attrs=n}function Ll(A,B,Q,g){const{props:C,attrs:n,vnode:{patchFlag:t}}=A,w=HA(C),[I]=A.propsOptions;let D=!1;if((g||t>0)&&!(t&16)){if(t&8){const F=A.vnode.dynamicProps;for(let e=0;e<F.length;e++){let a=F[e];if(NI(A.emitsOptions,a))continue;const M=B[a];if(I)if(pA(n,a))M!==n[a]&&(n[a]=M,D=!0);else{const N=lE(a);C[N]=He(I,w,N,M,A,!1)}else M!==n[a]&&(n[a]=M,D=!0)}}}else{Ns(A,B,C,n)&&(D=!0);let F;for(const e in w)(!B||!pA(B,e)&&((F=Kg(e))===e||!pA(B,F)))&&(I?Q&&(Q[e]!==void 0||Q[F]!==void 0)&&(C[e]=He(I,w,e,void 0,A,!0)):delete C[e]);if(n!==w)for(const e in n)(!B||!pA(B,e))&&(delete n[e],D=!0)}D&&PQ(A,"set","$attrs")}function Ns(A,B,Q,g){const[C,n]=A.propsOptions;let t=!1,w;if(B)for(let I in B){if(CI(I))continue;const D=B[I];let F;C&&pA(C,F=lE(I))?!n||!n.includes(F)?Q[F]=D:(w||(w={}))[F]=D:NI(A.emitsOptions,I)||(!(I in g)||D!==g[I])&&(g[I]=D,t=!0)}if(n){const I=HA(Q),D=w||KA;for(let F=0;F<n.length;F++){const e=n[F];Q[e]=He(C,I,e,D[e],A,!pA(D,e))}}return t}function He(A,B,Q,g,C,n){const t=A[Q];if(t!=null){const w=pA(t,"default");if(w&&g===void 0){const I=t.default;if(t.type!==Function&&NA(I)){const{propsDefaults:D}=C;Q in D?g=D[Q]:(dE(C),g=D[Q]=I.call(null,B),vg())}else g=I}t[0]&&(n&&!w?g=!1:t[1]&&(g===""||g===Kg(Q))&&(g=!0))}return g}function us(A,B,Q=!1){const g=B.propsCache,C=g.get(A);if(C)return C;const n=A.props,t={},w=[];let I=!1;if(!NA(A)){const F=e=>{I=!0;const[a,M]=us(e,B,!0);SB(t,a),M&&w.push(...M)};!Q&&B.mixins.length&&B.mixins.forEach(F),A.extends&&F(A.extends),A.mixins&&A.mixins.forEach(F)}if(!n&&!I)return AB(A)&&g.set(A,sE),sE;if(RA(n))for(let F=0;F<n.length;F++){const e=lE(n[F]);yi(e)&&(t[e]=KA)}else if(n)for(const F in n){const e=lE(F);if(yi(e)){const a=n[F],M=t[e]=RA(a)||NA(a)?{type:a}:Object.assign({},a);if(M){const N=Si(Boolean,M.type),f=Si(String,M.type);M[0]=N>-1,M[1]=f<0||N<f,(N>-1||pA(M,"default"))&&w.push(e)}}}const D=[t,w];return AB(A)&&g.set(A,D),D}function yi(A){return A[0]!=="$"}function pi(A){const B=A&&A.toString().match(/^\s*(function|class) (\w+)/);return B?B[2]:A===null?"null":""}function Hi(A,B){return pi(A)===pi(B)}function Si(A,B){return RA(B)?B.findIndex(Q=>Hi(Q,A)):NA(B)&&Hi(B,A)?0:-1}const Js=A=>A[0]==="_"||A==="$stable",oF=A=>RA(A)?A.map(bQ):[bQ(A)],yl=(A,B,Q)=>{if(B._n)return B;const g=nl((...C)=>oF(B(...C)),Q);return g._c=!1,g},bs=(A,B,Q)=>{const g=A._ctx;for(const C in A){if(Js(C))continue;const n=A[C];if(NA(n))B[C]=yl(C,n,g);else if(n!=null){const t=oF(n);B[C]=()=>t}}},ks=(A,B)=>{const Q=oF(B);A.slots.default=()=>Q},pl=(A,B)=>{if(A.vnode.shapeFlag&32){const Q=B._;Q?(A.slots=HA(B),iI(B,"_",Q)):bs(B,A.slots={})}else A.slots={},B&&ks(A,B);iI(A.slots,kI,1)},Hl=(A,B,Q)=>{const{vnode:g,slots:C}=A;let n=!0,t=KA;if(g.shapeFlag&32){const w=B._;w?Q&&w===1?n=!1:(SB(C,B),!Q&&w===1&&delete C._):(n=!B.$stable,bs(B,C)),t=B}else B&&(ks(A,B),t={default:1});if(n)for(const w in C)!Js(w)&&!(w in t)&&delete C[w]};function Zs(){return{app:null,config:{isNativeTag:tU,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sl=0;function Wl(A,B){return function(g,C=null){NA(g)||(g=Object.assign({},g)),C!=null&&!AB(C)&&(C=null);const n=Zs(),t=new Set;let w=!1;const I=n.app={_uid:Sl++,_component:g,_props:C,_container:null,_context:n,_instance:null,version:w0,get config(){return n.config},set config(D){},use(D,...F){return t.has(D)||(D&&NA(D.install)?(t.add(D),D.install(I,...F)):NA(D)&&(t.add(D),D(I,...F))),I},mixin(D){return n.mixins.includes(D)||n.mixins.push(D),I},component(D,F){return F?(n.components[D]=F,I):n.components[D]},directive(D,F){return F?(n.directives[D]=F,I):n.directives[D]},mount(D,F,e){if(!w){const a=HB(g,C);return a.appContext=n,F&&B?B(a,D):A(a,D,e),w=!0,I._container=D,D.__vue_app__=I,ZI(a.component)||a.component.proxy}},unmount(){w&&(A(null,I._container),delete I._container.__vue_app__)},provide(D,F){return n.provides[D]=F,I}};return I}}function Se(A,B,Q,g,C=!1){if(RA(A)){A.forEach((a,M)=>Se(a,B&&(RA(B)?B[M]:B),Q,g,C));return}if(nI(g)&&!C)return;const n=g.shapeFlag&4?ZI(g.component)||g.component.proxy:g.el,t=C?null:n,{i:w,r:I}=A,D=B&&B.r,F=w.refs===KA?w.refs={}:w.refs,e=w.setupState;if(D!=null&&D!==I&&(oB(D)?(F[D]=null,pA(e,D)&&(e[D]=null)):tB(D)&&(D.value=null)),NA(I))lg(I,w,12,[t,F]);else{const a=oB(I),M=tB(I);if(a||M){const N=()=>{if(A.f){const f=a?pA(e,I)?e[I]:F[I]:I.value;C?RA(f)&&QF(f,n):RA(f)?f.includes(n)||f.push(n):a?(F[I]=[n],pA(e,I)&&(e[I]=F[I])):(I.value=[n],A.k&&(F[A.k]=I.value))}else a?(F[I]=t,pA(e,I)&&(e[I]=t)):M&&(I.value=t,A.k&&(F[A.k]=t))};t?(N.id=-1,OB(N,Q)):N()}}}const OB=cl;function Vl(A){return Ol(A)}function Ol(A,B){const Q=sU();Q.__VUE__=!0;const{insert:g,remove:C,patchProp:n,createElement:t,createText:w,createComment:I,setText:D,setElementText:F,parentNode:e,nextSibling:a,setScopeId:M=aQ,insertStaticContent:N}=A,f=(G,Y,L,y=null,O=null,v=null,H=!1,P=null,BA=!!Y.dynamicChildren)=>{if(G===Y)return;G&&!gC(G,Y)&&(y=X(G),IB(G,O,v,!0),G=null),Y.patchFlag===-2&&(BA=!1,Y.dynamicChildren=null);const{type:k,ref:_,shapeFlag:QA}=Y;switch(k){case bI:h(G,Y,L,y);break;case zg:m(G,Y,L,y);break;case tI:G==null&&q(Y,L,y,H);break;case wQ:rA(G,Y,L,y,O,v,H,P,BA);break;default:QA&1?CA(G,Y,L,y,O,v,H,P,BA):QA&6?UB(G,Y,L,y,O,v,H,P,BA):(QA&64||QA&128)&&k.process(G,Y,L,y,O,v,H,P,BA,JA)}_!=null&&O&&Se(_,G&&G.ref,v,Y||G,!Y)},h=(G,Y,L,y)=>{if(G==null)g(Y.el=w(Y.children),L,y);else{const O=Y.el=G.el;Y.children!==G.children&&D(O,Y.children)}},m=(G,Y,L,y)=>{G==null?g(Y.el=I(Y.children||""),L,y):Y.el=G.el},q=(G,Y,L,y)=>{[G.el,G.anchor]=N(G.children,Y,L,y,G.el,G.anchor)},gA=({el:G,anchor:Y},L,y)=>{let O;for(;G&&G!==Y;)O=a(G),g(G,L,y),G=O;g(Y,L,y)},x=({el:G,anchor:Y})=>{let L;for(;G&&G!==Y;)L=a(G),C(G),G=L;C(Y)},CA=(G,Y,L,y,O,v,H,P,BA)=>{H=H||Y.type==="svg",G==null?bA(Y,L,y,O,v,H,P,BA):wA(G,Y,O,v,H,P,BA)},bA=(G,Y,L,y,O,v,H,P)=>{let BA,k;const{type:_,props:QA,shapeFlag:EA,transition:FA,dirs:kA}=G;if(BA=G.el=t(G.type,v,QA&&QA.is,QA),EA&8?F(BA,G.children):EA&16&&IA(G.children,BA,null,y,O,v&&_!=="foreignObject",H,P),kA&&yg(G,null,y,"created"),oA(BA,G,G.scopeId,H,y),QA){for(const r in QA)r!=="value"&&!CI(r)&&n(BA,r,null,QA[r],v,G.children,y,O,p);"value"in QA&&n(BA,"value",null,QA.value),(k=QA.onVnodeBeforeMount)&&JQ(k,y,G)}kA&&yg(G,null,y,"beforeMount");const TA=(!O||O&&!O.pendingBranch)&&FA&&!FA.persisted;TA&&FA.beforeEnter(BA),g(BA,Y,L),((k=QA&&QA.onVnodeMounted)||TA||kA)&&OB(()=>{k&&JQ(k,y,G),TA&&FA.enter(BA),kA&&yg(G,null,y,"mounted")},O)},oA=(G,Y,L,y,O)=>{if(L&&M(G,L),y)for(let v=0;v<y.length;v++)M(G,y[v]);if(O){let v=O.subTree;if(Y===v){const H=O.vnode;oA(G,H,H.scopeId,H.slotScopeIds,O.parent)}}},IA=(G,Y,L,y,O,v,H,P,BA=0)=>{for(let k=BA;k<G.length;k++){const _=G[k]=P?cg(G[k]):bQ(G[k]);f(null,_,Y,L,y,O,v,H,P)}},wA=(G,Y,L,y,O,v,H)=>{const P=Y.el=G.el;let{patchFlag:BA,dynamicChildren:k,dirs:_}=Y;BA|=G.patchFlag&16;const QA=G.props||KA,EA=Y.props||KA;let FA;L&&pg(L,!1),(FA=EA.onVnodeBeforeUpdate)&&JQ(FA,L,Y,G),_&&yg(Y,G,L,"beforeUpdate"),L&&pg(L,!0);const kA=O&&Y.type!=="foreignObject";if(k?UA(G.dynamicChildren,k,P,L,y,kA,v):H||XA(G,Y,P,null,L,y,kA,v,!1),BA>0){if(BA&16)uA(P,Y,QA,EA,L,y,O);else if(BA&2&&QA.class!==EA.class&&n(P,"class",null,EA.class,O),BA&4&&n(P,"style",QA.style,EA.style,O),BA&8){const TA=Y.dynamicProps;for(let r=0;r<TA.length;r++){const c=TA[r],s=QA[c],o=EA[c];(o!==s||c==="value")&&n(P,c,s,o,O,G.children,L,y,p)}}BA&1&&G.children!==Y.children&&F(P,Y.children)}else!H&&k==null&&uA(P,Y,QA,EA,L,y,O);((FA=EA.onVnodeUpdated)||_)&&OB(()=>{FA&&JQ(FA,L,Y,G),_&&yg(Y,G,L,"updated")},y)},UA=(G,Y,L,y,O,v,H)=>{for(let P=0;P<Y.length;P++){const BA=G[P],k=Y[P],_=BA.el&&(BA.type===wQ||!gC(BA,k)||BA.shapeFlag&70)?e(BA.el):L;f(BA,k,_,null,y,O,v,H,!0)}},uA=(G,Y,L,y,O,v,H)=>{if(L!==y){if(L!==KA)for(const P in L)!CI(P)&&!(P in y)&&n(G,P,L[P],null,H,Y.children,O,v,p);for(const P in y){if(CI(P))continue;const BA=y[P],k=L[P];BA!==k&&P!=="value"&&n(G,P,k,BA,H,Y.children,O,v,p)}"value"in y&&n(G,"value",L.value,y.value)}},rA=(G,Y,L,y,O,v,H,P,BA)=>{const k=Y.el=G?G.el:w(""),_=Y.anchor=G?G.anchor:w("");let{patchFlag:QA,dynamicChildren:EA,slotScopeIds:FA}=Y;FA&&(P=P?P.concat(FA):FA),G==null?(g(k,L,y),g(_,L,y),IA(Y.children,L,_,O,v,H,P,BA)):QA>0&&QA&64&&EA&&G.dynamicChildren?(UA(G.dynamicChildren,EA,L,O,v,H,P),(Y.key!=null||O&&Y===O.subTree)&&ms(G,Y,!0)):XA(G,Y,L,_,O,v,H,P,BA)},UB=(G,Y,L,y,O,v,H,P,BA)=>{Y.slotScopeIds=P,G==null?Y.shapeFlag&512?O.ctx.activate(Y,L,y,H,BA):xA(Y,L,y,O,v,H,BA):BB(G,Y,BA)},xA=(G,Y,L,y,O,v,H)=>{const P=G.component=$l(G,y,O);if(fs(G)&&(P.ctx.renderer=JA),A0(P),P.asyncDep){if(O&&O.registerDep(P,jA),!G.el){const BA=P.subTree=HB(zg);m(null,BA,Y,L)}return}jA(P,G,Y,L,O,v,H)},BB=(G,Y,L)=>{const y=Y.component=G.component;if(Fl(G,Y,L))if(y.asyncDep&&!y.asyncResolved){WA(y,Y,L);return}else y.next=Y,Ql(y.update),y.update();else Y.el=G.el,y.vnode=Y},jA=(G,Y,L,y,O,v,H)=>{const P=()=>{if(G.isMounted){let{next:_,bu:QA,u:EA,parent:FA,vnode:kA}=G,TA=_,r;pg(G,!1),_?(_.el=kA.el,WA(G,_,H)):_=kA,QA&&II(QA),(r=_.props&&_.props.onVnodeBeforeUpdate)&&JQ(r,FA,_,kA),pg(G,!0);const c=Ie(G),s=G.subTree;G.subTree=c,f(s,c,e(s.el),X(s),G,O,v),_.el=c.el,TA===null&&Dl(G,c.el),EA&&OB(EA,O),(r=_.props&&_.props.onVnodeUpdated)&&OB(()=>JQ(r,FA,_,kA),O)}else{let _;const{el:QA,props:EA}=Y,{bm:FA,m:kA,parent:TA}=G,r=nI(Y);if(pg(G,!1),FA&&II(FA),!r&&(_=EA&&EA.onVnodeBeforeMount)&&JQ(_,TA,Y),pg(G,!0),QA&&fA){const c=()=>{G.subTree=Ie(G),fA(QA,G.subTree,G,O,null)};r?Y.type.__asyncLoader().then(()=>!G.isUnmounted&&c()):c()}else{const c=G.subTree=Ie(G);f(null,c,L,y,G,O,v),Y.el=c.el}if(kA&&OB(kA,O),!r&&(_=EA&&EA.onVnodeMounted)){const c=Y;OB(()=>JQ(_,TA,c),O)}(Y.shapeFlag&256||TA&&nI(TA.vnode)&&TA.vnode.shapeFlag&256)&&G.a&&OB(G.a,O),G.isMounted=!0,Y=L=y=null}},BA=G.effect=new IF(P,()=>iF(k),G.scope),k=G.update=()=>BA.run();k.id=G.uid,pg(G,!0),k()},WA=(G,Y,L)=>{Y.component=G;const y=G.vnode.props;G.vnode=Y,G.next=null,Ll(G,Y.props,y,L),Hl(G,Y.children,L),YE(),Zi(),hE()},XA=(G,Y,L,y,O,v,H,P,BA=!1)=>{const k=G&&G.children,_=G?G.shapeFlag:0,QA=Y.children,{patchFlag:EA,shapeFlag:FA}=Y;if(EA>0){if(EA&128){iB(k,QA,L,y,O,v,H,P,BA);return}else if(EA&256){DB(k,QA,L,y,O,v,H,P,BA);return}}FA&8?(_&16&&p(k,O,v),QA!==k&&F(L,QA)):_&16?FA&16?iB(k,QA,L,y,O,v,H,P,BA):p(k,O,v,!0):(_&8&&F(L,""),FA&16&&IA(QA,L,y,O,v,H,P,BA))},DB=(G,Y,L,y,O,v,H,P,BA)=>{G=G||sE,Y=Y||sE;const k=G.length,_=Y.length,QA=Math.min(k,_);let EA;for(EA=0;EA<QA;EA++){const FA=Y[EA]=BA?cg(Y[EA]):bQ(Y[EA]);f(G[EA],FA,L,null,O,v,H,P,BA)}k>_?p(G,O,v,!0,!1,QA):IA(Y,L,y,O,v,H,P,BA,QA)},iB=(G,Y,L,y,O,v,H,P,BA)=>{let k=0;const _=Y.length;let QA=G.length-1,EA=_-1;for(;k<=QA&&k<=EA;){const FA=G[k],kA=Y[k]=BA?cg(Y[k]):bQ(Y[k]);if(gC(FA,kA))f(FA,kA,L,null,O,v,H,P,BA);else break;k++}for(;k<=QA&&k<=EA;){const FA=G[QA],kA=Y[EA]=BA?cg(Y[EA]):bQ(Y[EA]);if(gC(FA,kA))f(FA,kA,L,null,O,v,H,P,BA);else break;QA--,EA--}if(k>QA){if(k<=EA){const FA=EA+1,kA=FA<_?Y[FA].el:y;for(;k<=EA;)f(null,Y[k]=BA?cg(Y[k]):bQ(Y[k]),L,kA,O,v,H,P,BA),k++}}else if(k>EA)for(;k<=QA;)IB(G[k],O,v,!0),k++;else{const FA=k,kA=k,TA=new Map;for(k=kA;k<=EA;k++){const S=Y[k]=BA?cg(Y[k]):bQ(Y[k]);S.key!=null&&TA.set(S.key,k)}let r,c=0;const s=EA-kA+1;let o=!1,U=0;const J=new Array(s);for(k=0;k<s;k++)J[k]=0;for(k=FA;k<=QA;k++){const S=G[k];if(c>=s){IB(S,O,v,!0);continue}let K;if(S.key!=null)K=TA.get(S.key);else for(r=kA;r<=EA;r++)if(J[r-kA]===0&&gC(S,Y[r])){K=r;break}K===void 0?IB(S,O,v,!0):(J[K-kA]=k+1,K>=U?U=K:o=!0,f(S,Y[K],L,null,O,v,H,P,BA),c++)}const z=o?Tl(J):sE;for(r=z.length-1,k=s-1;k>=0;k--){const S=kA+k,K=Y[S],j=S+1<_?Y[S+1].el:y;J[k]===0?f(null,K,L,j,O,v,H,P,BA):o&&(r<0||k!==z[r]?EB(K,L,j,2):r--)}}},EB=(G,Y,L,y,O=null)=>{const{el:v,type:H,transition:P,children:BA,shapeFlag:k}=G;if(k&6){EB(G.component.subTree,Y,L,y);return}if(k&128){G.suspense.move(Y,L,y);return}if(k&64){H.move(G,Y,L,JA);return}if(H===wQ){g(v,Y,L);for(let QA=0;QA<BA.length;QA++)EB(BA[QA],Y,L,y);g(G.anchor,Y,L);return}if(H===tI){gA(G,Y,L);return}if(y!==2&&k&1&&P)if(y===0)P.beforeEnter(v),g(v,Y,L),OB(()=>P.enter(v),O);else{const{leave:QA,delayLeave:EA,afterLeave:FA}=P,kA=()=>g(v,Y,L),TA=()=>{QA(v,()=>{kA(),FA&&FA()})};EA?EA(v,kA,TA):TA()}else g(v,Y,L)},IB=(G,Y,L,y=!1,O=!1)=>{const{type:v,props:H,ref:P,children:BA,dynamicChildren:k,shapeFlag:_,patchFlag:QA,dirs:EA}=G;if(P!=null&&Se(P,null,L,G,!0),_&256){Y.ctx.deactivate(G);return}const FA=_&1&&EA,kA=!nI(G);let TA;if(kA&&(TA=H&&H.onVnodeBeforeUnmount)&&JQ(TA,Y,G),_&6)W(G.component,L,y);else{if(_&128){G.suspense.unmount(L,y);return}FA&&yg(G,null,Y,"beforeUnmount"),_&64?G.type.remove(G,Y,L,O,JA,y):k&&(v!==wQ||QA>0&&QA&64)?p(k,Y,L,!1,!0):(v===wQ&&QA&384||!O&&_&16)&&p(BA,Y,L),y&&zB(G)}(kA&&(TA=H&&H.onVnodeUnmounted)||FA)&&OB(()=>{TA&&JQ(TA,Y,G),FA&&yg(G,null,Y,"unmounted")},L)},zB=G=>{const{type:Y,el:L,anchor:y,transition:O}=G;if(Y===wQ){YB(L,y);return}if(Y===tI){x(G);return}const v=()=>{C(L),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(G.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:P}=O,BA=()=>H(L,v);P?P(G.el,v,BA):BA()}else v()},YB=(G,Y)=>{let L;for(;G!==Y;)L=a(G),C(G),G=L;C(Y)},W=(G,Y,L)=>{const{bum:y,scope:O,update:v,subTree:H,um:P}=G;y&&II(y),O.stop(),v&&(v.active=!1,IB(H,G,Y,L)),P&&OB(P,Y),OB(()=>{G.isUnmounted=!0},Y),Y&&Y.pendingBranch&&!Y.isUnmounted&&G.asyncDep&&!G.asyncResolved&&G.suspenseId===Y.pendingId&&(Y.deps--,Y.deps===0&&Y.resolve())},p=(G,Y,L,y=!1,O=!1,v=0)=>{for(let H=v;H<G.length;H++)IB(G[H],Y,L,y,O)},X=G=>G.shapeFlag&6?X(G.component.subTree):G.shapeFlag&128?G.suspense.next():a(G.anchor||G.el),nA=(G,Y,L)=>{G==null?Y._vnode&&IB(Y._vnode,null,null,!0):f(Y._vnode||null,G,Y,null,null,null,L),Zi(),Us(),Y._vnode=G},JA={p:f,um:IB,m:EB,r:zB,mt:xA,mc:IA,pc:XA,pbc:UA,n:X,o:A};let mA,fA;return B&&([mA,fA]=B(JA)),{render:nA,hydrate:mA,createApp:Wl(nA,mA)}}function pg({effect:A,update:B},Q){A.allowRecurse=B.allowRecurse=Q}function ms(A,B,Q=!1){const g=A.children,C=B.children;if(RA(g)&&RA(C))for(let n=0;n<g.length;n++){const t=g[n];let w=C[n];w.shapeFlag&1&&!w.dynamicChildren&&((w.patchFlag<=0||w.patchFlag===32)&&(w=C[n]=cg(C[n]),w.el=t.el),Q||ms(t,w)),w.type===bI&&(w.el=t.el)}}function Tl(A){const B=A.slice(),Q=[0];let g,C,n,t,w;const I=A.length;for(g=0;g<I;g++){const D=A[g];if(D!==0){if(C=Q[Q.length-1],A[C]<D){B[g]=C,Q.push(g);continue}for(n=0,t=Q.length-1;n<t;)w=n+t>>1,A[Q[w]]<D?n=w+1:t=w;D<A[Q[n]]&&(n>0&&(B[g]=Q[n-1]),Q[n]=g)}}for(n=Q.length,t=Q[n-1];n-- >0;)Q[n]=t,t=B[t];return Q}const xl=A=>A.__isTeleport,wQ=Symbol(void 0),bI=Symbol(void 0),zg=Symbol(void 0),tI=Symbol(void 0),wC=[];let sQ=null;function $A(A=!1){wC.push(sQ=A?null:[])}function vl(){wC.pop(),sQ=wC[wC.length-1]||null}let aC=1;function Wi(A){aC+=A}function Xs(A){return A.dynamicChildren=aC>0?sQ||sE:null,vl(),aC>0&&sQ&&sQ.push(A),A}function nB(A,B,Q,g,C,n){return Xs(eA(A,B,Q,g,C,n,!0))}function We(A,B,Q,g,C){return Xs(HB(A,B,Q,g,C,!0))}function Ve(A){return A?A.__v_isVNode===!0:!1}function gC(A,B){return A.type===B.type&&A.key===B.key}const kI="__vInternal",Ls=({key:A})=>A??null,eI=({ref:A,ref_key:B,ref_for:Q})=>A!=null?oB(A)||tB(A)||NA(A)?{i:tQ,r:A,k:B,f:!!Q}:A:null;function eA(A,B=null,Q=null,g=0,C=null,n=A===wQ?0:1,t=!1,w=!1){const I={__v_isVNode:!0,__v_skip:!0,type:A,props:B,key:B&&Ls(B),ref:B&&eI(B),scopeId:uI,slotScopeIds:null,children:Q,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:g,dynamicProps:C,dynamicChildren:null,appContext:null,ctx:tQ};return w?(UF(I,Q),n&128&&A.normalize(I)):Q&&(I.shapeFlag|=oB(Q)?8:16),aC>0&&!t&&sQ&&(I.patchFlag>0||n&6)&&I.patchFlag!==32&&sQ.push(I),I}const HB=zl;function zl(A,B=null,Q=null,g=0,C=null,n=!1){if((!A||A===Nl)&&(A=zg),Ve(A)){const w=rE(A,B,!0);return Q&&UF(w,Q),aC>0&&!n&&sQ&&(w.shapeFlag&6?sQ[sQ.indexOf(A)]=w:sQ.push(w)),w.patchFlag|=-2,w}if(E0(A)&&(A=A.__vccOpts),B){B=Kl(B);let{class:w,style:I}=B;w&&!oB(w)&&(B.class=FC(w)),AB(I)&&(es(I)&&!RA(I)&&(I=SB({},I)),B.style=AF(I))}const t=oB(A)?1:il(A)?128:xl(A)?64:AB(A)?4:NA(A)?2:0;return eA(A,B,Q,g,C,t,n,!0)}function Kl(A){return A?es(A)||kI in A?SB({},A):A:null}function rE(A,B,Q=!1){const{props:g,ref:C,patchFlag:n,children:t}=A,w=B?Pl(g||{},B):g;return{__v_isVNode:!0,__v_skip:!0,type:A.type,props:w,key:w&&Ls(w),ref:B&&B.ref?Q&&C?RA(C)?C.concat(eI(B)):[C,eI(B)]:eI(B):C,scopeId:A.scopeId,slotScopeIds:A.slotScopeIds,children:t,target:A.target,targetAnchor:A.targetAnchor,staticCount:A.staticCount,shapeFlag:A.shapeFlag,patchFlag:B&&A.type!==wQ?n===-1?16:n|16:n,dynamicProps:A.dynamicProps,dynamicChildren:A.dynamicChildren,appContext:A.appContext,dirs:A.dirs,transition:A.transition,component:A.component,suspense:A.suspense,ssContent:A.ssContent&&rE(A.ssContent),ssFallback:A.ssFallback&&rE(A.ssFallback),el:A.el,anchor:A.anchor,ctx:A.ctx,ce:A.ce}}function UE(A=" ",B=0){return HB(bI,null,A,B)}function lC(A,B){const Q=HB(tI,null,A);return Q.staticCount=B,Q}function jl(A="",B=!1){return B?($A(),We(zg,null,A)):HB(zg,null,A)}function bQ(A){return A==null||typeof A=="boolean"?HB(zg):RA(A)?HB(wQ,null,A.slice()):typeof A=="object"?cg(A):HB(bI,null,String(A))}function cg(A){return A.el===null&&A.patchFlag!==-1||A.memo?A:rE(A)}function UF(A,B){let Q=0;const{shapeFlag:g}=A;if(B==null)B=null;else if(RA(B))Q=16;else if(typeof B=="object")if(g&65){const C=B.default;C&&(C._c&&(C._d=!1),UF(A,C()),C._c&&(C._d=!0));return}else{Q=32;const C=B._;!C&&!(kI in B)?B._ctx=tQ:C===3&&tQ&&(tQ.slots._===1?B._=1:(B._=2,A.patchFlag|=1024))}else NA(B)?(B={default:B,_ctx:tQ},Q=32):(B=String(B),g&64?(Q=16,B=[UE(B)]):Q=8);A.children=B,A.shapeFlag|=Q}function Pl(...A){const B={};for(let Q=0;Q<A.length;Q++){const g=A[Q];for(const C in g)if(C==="class")B.class!==g.class&&(B.class=FC([B.class,g.class]));else if(C==="style")B.style=AF([B.style,g.style]);else if(rI(C)){const n=B[C],t=g[C];t&&n!==t&&!(RA(n)&&n.includes(t))&&(B[C]=n?[].concat(n,t):t)}else C!==""&&(B[C]=g[C])}return B}function JQ(A,B,Q,g=null){oQ(A,B,7,[Q,g])}const ql=Zs();let _l=0;function $l(A,B,Q){const g=A.type,C=(B?B.appContext:A.appContext)||ql,n={uid:_l++,vnode:A,type:g,parent:B,appContext:C,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:B?B.provides:Object.create(C.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:us(g,C),emitsOptions:Ms(g,C),emit:null,emitted:null,propsDefaults:KA,inheritAttrs:g.inheritAttrs,ctx:KA,data:KA,props:KA,attrs:KA,slots:KA,refs:KA,setupState:KA,setupContext:null,suspense:Q,suspenseId:Q?Q.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=B?B.root:n,n.emit=Cl.bind(null,n),A.ce&&A.ce(n),n}let FB=null;const ys=()=>FB||tQ,dE=A=>{FB=A,A.scope.on()},vg=()=>{FB&&FB.scope.off(),FB=null};function ps(A){return A.vnode.shapeFlag&4}let oC=!1;function A0(A,B=!1){oC=B;const{props:Q,children:g}=A.vnode,C=ps(A);Xl(A,Q,C,B),pl(A,g);const n=C?B0(A,B):void 0;return oC=!1,n}function B0(A,B){const Q=A.type;A.accessCache=Object.create(null),A.proxy=GE(new Proxy(A.ctx,ul));const{setup:g}=Q;if(g){const C=A.setupContext=g.length>1?g0(A):null;dE(A),YE();const n=lg(g,A,0,[A.props,C]);if(hE(),vg(),vc(n)){if(n.then(vg,vg),B)return n.then(t=>{Vi(A,t,B)}).catch(t=>{YI(t,A,0)});A.asyncDep=n}else Vi(A,n,B)}else Hs(A,B)}function Vi(A,B,Q){NA(B)?A.type.__ssrInlineRender?A.ssrRender=B:A.render=B:AB(B)&&(A.setupState=cs(B)),Hs(A,Q)}let Oi;function Hs(A,B,Q){const g=A.type;if(!A.render){if(!B&&Oi&&!g.render){const C=g.template||aF(A).template;if(C){const{isCustomElement:n,compilerOptions:t}=A.appContext.config,{delimiters:w,compilerOptions:I}=g,D=SB(SB({isCustomElement:n,delimiters:w},t),I);g.render=Oi(C,D)}}A.render=g.render||aQ}dE(A),YE(),Jl(A),hE(),vg()}function Q0(A){return new Proxy(A.attrs,{get(B,Q){return xB(A,"get","$attrs"),B[Q]}})}function g0(A){const B=g=>{A.exposed=g||{}};let Q;return{get attrs(){return Q||(Q=Q0(A))},slots:A.slots,emit:A.emit,expose:B}}function ZI(A){if(A.exposed)return A.exposeProxy||(A.exposeProxy=new Proxy(cs(GE(A.exposed)),{get(B,Q){if(Q in B)return B[Q];if(Q in IC)return IC[Q](A)},has(B,Q){return Q in B||Q in IC}}))}function E0(A){return NA(A)&&"__vccOpts"in A}const TB=(A,B)=>$U(A,B,oC);function Ss(A,B,Q){const g=arguments.length;return g===2?AB(B)&&!RA(B)?Ve(B)?HB(A,null,[B]):HB(A,B):HB(A,null,B):(g>3?Q=Array.prototype.slice.call(arguments,2):g===3&&Ve(Q)&&(Q=[Q]),HB(A,B,Q))}const C0=Symbol(""),I0=()=>ZQ(C0),w0="3.2.47",n0="http://www.w3.org/2000/svg",Wg=typeof document<"u"?document:null,Ti=Wg&&Wg.createElement("template"),t0={insert:(A,B,Q)=>{B.insertBefore(A,Q||null)},remove:A=>{const B=A.parentNode;B&&B.removeChild(A)},createElement:(A,B,Q,g)=>{const C=B?Wg.createElementNS(n0,A):Wg.createElement(A,Q?{is:Q}:void 0);return A==="select"&&g&&g.multiple!=null&&C.setAttribute("multiple",g.multiple),C},createText:A=>Wg.createTextNode(A),createComment:A=>Wg.createComment(A),setText:(A,B)=>{A.nodeValue=B},setElementText:(A,B)=>{A.textContent=B},parentNode:A=>A.parentNode,nextSibling:A=>A.nextSibling,querySelector:A=>Wg.querySelector(A),setScopeId(A,B){A.setAttribute(B,"")},insertStaticContent(A,B,Q,g,C,n){const t=Q?Q.previousSibling:B.lastChild;if(C&&(C===n||C.nextSibling))for(;B.insertBefore(C.cloneNode(!0),Q),!(C===n||!(C=C.nextSibling)););else{Ti.innerHTML=g?`<svg>${A}</svg>`:A;const w=Ti.content;if(g){const I=w.firstChild;for(;I.firstChild;)w.appendChild(I.firstChild);w.removeChild(I)}B.insertBefore(w,Q)}return[t?t.nextSibling:B.firstChild,Q?Q.previousSibling:B.lastChild]}};function e0(A,B,Q){const g=A._vtc;g&&(B=(B?[B,...g]:[...g]).join(" ")),B==null?A.removeAttribute("class"):Q?A.setAttribute("class",B):A.className=B}function F0(A,B,Q){const g=A.style,C=oB(Q);if(Q&&!C){if(B&&!oB(B))for(const n in B)Q[n]==null&&Oe(g,n,"");for(const n in Q)Oe(g,n,Q[n])}else{const n=g.display;C?B!==Q&&(g.cssText=Q):B&&A.removeAttribute("style"),"_vod"in A&&(g.display=n)}}const xi=/\s*!important$/;function Oe(A,B,Q){if(RA(Q))Q.forEach(g=>Oe(A,B,g));else if(Q==null&&(Q=""),B.startsWith("--"))A.setProperty(B,Q);else{const g=D0(A,B);xi.test(Q)?A.setProperty(Kg(g),Q.replace(xi,""),"important"):A[g]=Q}}const vi=["Webkit","Moz","ms"],ne={};function D0(A,B){const Q=ne[B];if(Q)return Q;let g=lE(B);if(g!=="filter"&&g in A)return ne[B]=g;g=jc(g);for(let C=0;C<vi.length;C++){const n=vi[C]+g;if(n in A)return ne[B]=n}return B}const zi="http://www.w3.org/1999/xlink";function i0(A,B,Q,g,C){if(g&&B.startsWith("xlink:"))Q==null?A.removeAttributeNS(zi,B.slice(6,B.length)):A.setAttributeNS(zi,B,Q);else{const n=nU(B);Q==null||n&&!Oc(Q)?A.removeAttribute(B):A.setAttribute(B,n?"":Q)}}function c0(A,B,Q,g,C,n,t){if(B==="innerHTML"||B==="textContent"){g&&t(g,C,n),A[B]=Q??"";return}if(B==="value"&&A.tagName!=="PROGRESS"&&!A.tagName.includes("-")){A._value=Q;const I=Q??"";(A.value!==I||A.tagName==="OPTION")&&(A.value=I),Q==null&&A.removeAttribute(B);return}let w=!1;if(Q===""||Q==null){const I=typeof A[B];I==="boolean"?Q=Oc(Q):Q==null&&I==="string"?(Q="",w=!0):I==="number"&&(Q=0,w=!0)}try{A[B]=Q}catch{}w&&A.removeAttribute(B)}function iE(A,B,Q,g){A.addEventListener(B,Q,g)}function s0(A,B,Q,g){A.removeEventListener(B,Q,g)}function a0(A,B,Q,g,C=null){const n=A._vei||(A._vei={}),t=n[B];if(g&&t)t.value=g;else{const[w,I]=o0(B);if(g){const D=n[B]=M0(g,C);iE(A,w,D,I)}else t&&(s0(A,w,t,I),n[B]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function o0(A){let B;if(Ki.test(A)){B={};let g;for(;g=A.match(Ki);)A=A.slice(0,A.length-g[0].length),B[g[0].toLowerCase()]=!0}return[A[2]===":"?A.slice(3):Kg(A.slice(2)),B]}let te=0;const U0=Promise.resolve(),l0=()=>te||(U0.then(()=>te=0),te=Date.now());function M0(A,B){const Q=g=>{if(!g._vts)g._vts=Date.now();else if(g._vts<=Q.attached)return;oQ(G0(g,Q.value),B,5,[g])};return Q.value=A,Q.attached=l0(),Q}function G0(A,B){if(RA(B)){const Q=A.stopImmediatePropagation;return A.stopImmediatePropagation=()=>{Q.call(A),A._stopped=!0},B.map(g=>C=>!C._stopped&&g&&g(C))}else return B}const ji=/^on[a-z]/,r0=(A,B,Q,g,C=!1,n,t,w,I)=>{B==="class"?e0(A,g,C):B==="style"?F0(A,Q,g):rI(B)?BF(B)||a0(A,B,Q,g,t):(B[0]==="."?(B=B.slice(1),!0):B[0]==="^"?(B=B.slice(1),!1):d0(A,B,g,C))?c0(A,B,g,n,t,w,I):(B==="true-value"?A._trueValue=g:B==="false-value"&&(A._falseValue=g),i0(A,B,g,C))};function d0(A,B,Q,g){return g?!!(B==="innerHTML"||B==="textContent"||B in A&&ji.test(B)&&NA(Q)):B==="spellcheck"||B==="draggable"||B==="translate"||B==="form"||B==="list"&&A.tagName==="INPUT"||B==="type"&&A.tagName==="TEXTAREA"||ji.test(B)&&oB(Q)?!1:B in A}const Pi=A=>{const B=A.props["onUpdate:modelValue"]||!1;return RA(B)?Q=>II(B,Q):B};function f0(A){A.target.composing=!0}function qi(A){const B=A.target;B.composing&&(B.composing=!1,B.dispatchEvent(new Event("input")))}const R0={created(A,{modifiers:{lazy:B,trim:Q,number:g}},C){A._assign=Pi(C);const n=g||C.props&&C.props.type==="number";iE(A,B?"change":"input",t=>{if(t.target.composing)return;let w=A.value;Q&&(w=w.trim()),n&&(w=be(w)),A._assign(w)}),Q&&iE(A,"change",()=>{A.value=A.value.trim()}),B||(iE(A,"compositionstart",f0),iE(A,"compositionend",qi),iE(A,"change",qi))},mounted(A,{value:B}){A.value=B??""},beforeUpdate(A,{value:B,modifiers:{lazy:Q,trim:g,number:C}},n){if(A._assign=Pi(n),A.composing||document.activeElement===A&&A.type!=="range"&&(Q||g&&A.value.trim()===B||(C||A.type==="number")&&be(A.value)===B))return;const t=B??"";A.value!==t&&(A.value=t)}},Y0=["ctrl","shift","alt","meta"],h0={stop:A=>A.stopPropagation(),prevent:A=>A.preventDefault(),self:A=>A.target!==A.currentTarget,ctrl:A=>!A.ctrlKey,shift:A=>!A.shiftKey,alt:A=>!A.altKey,meta:A=>!A.metaKey,left:A=>"button"in A&&A.button!==0,middle:A=>"button"in A&&A.button!==1,right:A=>"button"in A&&A.button!==2,exact:(A,B)=>Y0.some(Q=>A[`${Q}Key`]&&!B.includes(Q))},N0=(A,B)=>(Q,...g)=>{for(let C=0;C<B.length;C++){const n=h0[B[C]];if(n&&n(Q,B))return}return A(Q,...g)},u0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},J0=(A,B)=>Q=>{if(!("key"in Q))return;const g=Kg(Q.key);if(B.some(C=>C===g||u0[C]===g))return A(Q)},b0=SB({patchProp:r0},t0);let _i;function k0(){return _i||(_i=Vl(b0))}const Z0=(...A)=>{const B=k0().createApp(...A),{mount:Q}=B;return B.mount=g=>{const C=m0(g);if(!C)return;const n=B._component;!NA(n)&&!n.render&&!n.template&&(n.template=C.innerHTML),C.innerHTML="";const t=Q(C,!1,C instanceof SVGElement);return C instanceof Element&&(C.removeAttribute("v-cloak"),C.setAttribute("data-v-app","")),t},B};function m0(A){return oB(A)?document.querySelector(A):A}var X0=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ws;const mI=A=>Ws=A,Vs=Symbol();function Te(A){return A&&typeof A=="object"&&Object.prototype.toString.call(A)==="[object Object]"&&typeof A.toJSON!="function"}var nC;(function(A){A.direct="direct",A.patchObject="patch object",A.patchFunction="patch function"})(nC||(nC={}));function L0(){const A=qc(!0),B=A.run(()=>RB({}));let Q=[],g=[];const C=GE({install(n){mI(C),C._a=n,n.provide(Vs,C),n.config.globalProperties.$pinia=C,g.forEach(t=>Q.push(t)),g=[]},use(n){return!this._a&&!X0?g.push(n):Q.push(n),this},_p:Q,_a:null,_e:A,_s:new Map,state:B});return C}const Os=()=>{};function $i(A,B,Q,g=Os){A.push(B);const C=()=>{const n=A.indexOf(B);n>-1&&(A.splice(n,1),g())};return!Q&&_c()&&oU(C),C}function tE(A,...B){A.slice().forEach(Q=>{Q(...B)})}function xe(A,B){A instanceof Map&&B instanceof Map&&B.forEach((Q,g)=>A.set(g,Q)),A instanceof Set&&B instanceof Set&&B.forEach(A.add,A);for(const Q in B){if(!B.hasOwnProperty(Q))continue;const g=B[Q],C=A[Q];Te(C)&&Te(g)&&A.hasOwnProperty(Q)&&!tB(g)&&!Ug(g)?A[Q]=xe(C,g):A[Q]=g}return A}const y0=Symbol();function p0(A){return!Te(A)||!A.hasOwnProperty(y0)}const{assign:sg}=Object;function H0(A){return!!(tB(A)&&A.effect)}function S0(A,B,Q,g){const{state:C,actions:n,getters:t}=B,w=Q.state.value[A];let I;function D(){w||(Q.state.value[A]=C?C():{});const F=jU(Q.state.value[A]);return sg(F,n,Object.keys(t||{}).reduce((e,a)=>(e[a]=GE(TB(()=>{mI(Q);const M=Q._s.get(A);return t[a].call(M,M)})),e),{}))}return I=Ts(A,D,B,Q,g,!0),I.$reset=function(){const e=C?C():{};this.$patch(a=>{sg(a,e)})},I}function Ts(A,B,Q={},g,C,n){let t;const w=sg({actions:{}},Q),I={deep:!0};let D,F,e=GE([]),a=GE([]),M;const N=g.state.value[A];!n&&!N&&(g.state.value[A]={}),RB({});let f;function h(oA){let IA;D=F=!1,typeof oA=="function"?(oA(g.state.value[A]),IA={type:nC.patchFunction,storeId:A,events:M}):(xe(g.state.value[A],oA),IA={type:nC.patchObject,payload:oA,storeId:A,events:M});const wA=f=Symbol();hI().then(()=>{f===wA&&(D=!0)}),F=!0,tE(e,IA,g.state.value[A])}const m=Os;function q(){t.stop(),e=[],a=[],g._s.delete(A)}function gA(oA,IA){return function(){mI(g);const wA=Array.from(arguments),UA=[],uA=[];function rA(BB){UA.push(BB)}function UB(BB){uA.push(BB)}tE(a,{args:wA,name:oA,store:CA,after:rA,onError:UB});let xA;try{xA=IA.apply(this&&this.$id===A?this:CA,wA)}catch(BB){throw tE(uA,BB),BB}return xA instanceof Promise?xA.then(BB=>(tE(UA,BB),BB)).catch(BB=>(tE(uA,BB),Promise.reject(BB))):(tE(UA,xA),xA)}}const x={_p:g,$id:A,$onAction:$i.bind(null,a),$patch:h,$reset:m,$subscribe(oA,IA={}){const wA=$i(e,oA,IA.detached,()=>UA()),UA=t.run(()=>xg(()=>g.state.value[A],uA=>{(IA.flush==="sync"?F:D)&&oA({storeId:A,type:nC.direct,events:M},uA)},sg({},I,IA)));return wA},$dispose:q},CA=NE(x);g._s.set(A,CA);const bA=g._e.run(()=>(t=qc(),t.run(()=>B())));for(const oA in bA){const IA=bA[oA];if(tB(IA)&&!H0(IA)||Ug(IA))n||(N&&p0(IA)&&(tB(IA)?IA.value=N[oA]:xe(IA,N[oA])),g.state.value[A][oA]=IA);else if(typeof IA=="function"){const wA=gA(oA,IA);bA[oA]=wA,w.actions[oA]=IA}}return sg(CA,bA),sg(HA(CA),bA),Object.defineProperty(CA,"$state",{get:()=>g.state.value[A],set:oA=>{h(IA=>{sg(IA,oA)})}}),g._p.forEach(oA=>{sg(CA,t.run(()=>oA({store:CA,app:g._a,pinia:g,options:w})))}),N&&n&&Q.hydrate&&Q.hydrate(CA.$state,N),D=!0,F=!0,CA}function W0(A,B,Q){let g,C;const n=typeof B=="function";typeof A=="string"?(g=A,C=n?Q:B):(C=A,g=A.id);function t(w,I){const D=ys();return w=w||D&&ZQ(Vs,null),w&&mI(w),w=Ws,w._s.has(g)||(n?Ts(g,B,C,w):S0(g,C,w)),w._s.get(g)}return t.$id=g,t}var jQ=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},UI={},V0={get exports(){return UI},set exports(A){UI=A}};(function(A,B){(function(Q,g){A.exports=g()})(jQ,function(){(function(t){function w(){return new Promise(function(M,N){var f="wss://javascript.info/article/websocket/chat/ws";console.log("[WS]: Start testing"),console.log("[WS]: Connecting to "+f);try{var h=new WebSocket(f);h.onopen=function(m){var q="test-msg";console.log("[WS]: Connection established"),console.log("[WS]: Sending data to socket, msg: "+q),h.send(q)},h.onmessage=function(m){console.log("[WS]: Data received from server: "+m.data),console.log("[WS]: Finish testing - OK"),M()},h.onerror=function(m){console.log("[WS]: ",m.message),console.log("[WS]: Finish testing - ERROR"),N()}}catch(m){console.log("[WS]: ",m),N()}})}function I(){return new Promise(function(M,N){if(console.log("[WebWorker]: Start testing"),typeof Worker<"u"){console.log("[WebWorker]: Has Web Worker support");try{var f=new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));f.onmessage=function(h){console.log("[WebWorker]: Message received from worker: ",h.data),console.log("[WebWorker]: Finish testing - OK"),M()},f.onerror=function(h){console.error("[WebWorker]: Finish testing - ERROR"),N()},f.postMessage(["test-msg"])}catch{console.error("[WebWorker]: Finish testing - ERROR"),N()}}else console.log("[WebWorker]: No Web Worker support"),N()})}function D(){return new Promise(function(M,N){console.log("[ORIGN]: Start testing");var f=window.location.protocol,h=window.location.hostname;f==="https:"||f==="file:"||f==="http:"&&(h.indexOf("localhost")>-1||h.indexOf("127.0.0.1")>-1)?(console.log("[ORIGN]: Secure"),console.log("[ORIGN]: Finish testing - OK"),M()):(console.log("[ORIGN]: Not secure"),console.log("[ORIGN]: Finish testing - ERROR"),N())})}function F(){return new Promise(function(M,N){console.log("[AUDIO CONTEXT]: Start testing");var f=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,h=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;f&&h?(console.log("[AUDIO CONTEXT]: Audio supported"),console.log("[AUDIO CONTEXT]: Finish testing - OK"),M()):(console.log("[AUDIO CONTEXT]: Audio NOT supported"),console.log("[AUDIO CONTEXT DETAILS]:",e()),console.log("[AUDIO CONTEXT]: Finish testing - ERROR"),N())})}function e(){var M="";return M+="getUserMedia: ",M+=navigator.getUserMedia?"1":"0",M+=", ",M+="mediaDevices: ",M+=navigator.mediaDevices?"1":"0",M+=", ",M+="mediaDevices.getUserMedia: ",M+=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?"1":"0",M+=", ",M+="webkitGUM: ",M+=navigator.webkitGetUserMedia?"1":"0",M+=", ",M+="mozGUM: ",M+=navigator.mozGetUserMedia?"1":"0",M+=", ",M+="msGUM: ",M+=navigator.msGetUserMedia?"1":"0",M+=`
`,M+=`window: 
`,M+="AudioContext: ",M+=window.AudioContext?"1":"0",M+=", ",M+="webkitAC: ",M+=window.webkitAudioContext?"1":"0",M+=", ",M+="mozAC: ",M+=window.mozAudioContext?"1":"0",M+=`
`,M+="userAgent: ",M+=navigator.userAgent,M}function a(){var M=this,N=Object.keys(this);function f(h){return M[h]()}return N=N.filter(h=>h!=="run"&&h!=="getAudioDebugInfo"),N.reduce((h,m)=>h.then(()=>f(m)),Promise.resolve())}t.alanDiagnostic={testSocket:w,testWorker:I,testOrignSecure:D,testAudioContext:F,getAudioDebugInfo:e,run:a}})(window),function(t){var w="studio.alan.app",I={baseURL:"wss://"+(w.indexOf("$")===0||w===""?window.location.hostname:w),codec:"opus",version:"2.0.45",platform:"web"};function D(){var f=this;this._worker=new Worker(window.URL.createObjectURL(new Blob([`(function(ns) {
    'use strict';

    var SENT_TS    = 1;
    var REMOTE_TS  = 2;
    var TIMESTAMP  = 3;
    var AUDIO_DATA = 4;
    var JSON_DATA  = 5;

    AlanFrame.fields = [
        propUint64(SENT_TS,   'sentTs'),
        propUint64(REMOTE_TS, 'remoteTs'),
        propUint64(TIMESTAMP, 'timestamp'),
        propBytes(AUDIO_DATA, 'audioData'),
        propJson(JSON_DATA,   'jsonData'),
    ];

    function AlanFrameProp(type, name, sizeF, readF, writeF) {
        this.type   = type;
        this.name   = name;
        this.sizeF  = sizeF;
        this.writeF = writeF;
        this.readF  = readF;
    }

    function fixedSize(size) {
        return function() {
            return size;
        }
    }

    function bufferSize(buffer) {
        return 4 + byteLength(buffer);
    }

    function writeUIntN(uint8array, value, nBytes, offset) {
        for (var i = 0; i < nBytes; i++ ) {
            uint8array[offset + i] = 0xFF & value;
            value /= 256;
        }
    }

    function readUIntN(uint8array, nBytes, offset) {
        var r = 0;
        for (var i = nBytes - 1; i >= 0; i-- ) {
            r *= 256;
            r += 0xFF & uint8array[offset + i];
        }
        return r;
    }

    function writeUInt64(uint8array, value, offset) {
        writeUIntN(uint8array, value, 8, offset);
    }

    function readUInt64(uint8array, offset) {
        return readUIntN(uint8array, 8, offset);
    }

    function writeUInt32(uint8array, value, offset) {
        writeUIntN(uint8array, value, 4, offset);
    }

    function readUInt32(uint8array, offset) {
        return readUIntN(uint8array, 4, offset);
    }

    function writeBuffer(uint8array, buffer, offset) {
        buffer = toUint8(buffer);
        writeUInt32(uint8array, buffer.length, offset);
        for (var i = 0; i < buffer.length; i++ ) {
            uint8array[offset + 4 + i] = buffer[i];
        }
    }

    function readBuffer(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('buffer too big');
        }
        return uint8array.subarray(offset + 4, offset + 4 + size);
    }

    function readUTF8(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('string too big');
        }
        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));
    }

    function writeUTF8(uint8array, string, offset) {
        writeUInt32(uint8array, string.length, offset);
        for (var i = 0; i < string.length; i++ ) {
            uint8array[offset + 4 + i] = string.charCodeAt(i);
        }
    }

    function sizeUTF8(string) {
        return 4 + string.length;
    }

    function propUint32(type, name) {
        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);
    }

    function propUint64(type, name) {
        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);
    }

    function propBytes(type, name) {
        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);
    }

    function propJson(type, name) {
        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);
    }

    AlanFrame.fieldByType = function(type) {
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var frame = AlanFrame.fields[i];
            if (frame.type === type) {
                return frame;
            }
        }
        throw new Error('invalid field: ' + type);
    };

    function AlanFrame() {
        this.version = 1;
    }

    AlanFrame.prototype.write = function() {
        var result = new Uint8Array(this.writeSize());
        var offset = 1;
        result[0]  = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                result[offset++] = field.type;
                field.writeF(result, value, offset);
                offset += field.sizeF(value);
            }
        }
        return result.buffer;
    };

    /**
     * @returns UInt8Array
     */
    AlanFrame.prototype.writeSize = function() {
        var size = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                size += 1 + field.sizeF(value);
            }
        }
        return size;
    };

    AlanFrame.prototype.toString = function() {
        var first = true, str = '';
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                if (first) {
                    str += k + ' = ';
                    first = false;
                } else {
                    str += ', ' + k + ' = ';
                }
                var v = this[k];
                if (typeof(v) === 'object') {
                    str += 'bytes[' + byteLength(v) + ']';
                } else {
                    str += v;
                }
            }
        }
        return str;
    };

    function byteLength(b) {
        if (b instanceof Uint8Array) {
            return b.length;
        }
        if (b instanceof ArrayBuffer) {
            return b.byteLength;
        }
    }

    function toArrayBuffer(buffer) {
        if (buffer instanceof ArrayBuffer) {
            return buffer;
        }
        return buffer.buffer;
    }

    function toUint8(buffer) {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        throw new Error('invalid buffer type');
    }

    function parse(uint8array) {
        uint8array = toUint8(uint8array);
        var r = new AlanFrame();
        var offset = 0;
        r.version = uint8array[offset++];
        while (offset < uint8array.length) {
            var frame = AlanFrame.fieldByType(uint8array[offset++]);
            r[frame.name] = frame.readF(uint8array, offset);
            offset += frame.sizeF(r[frame.name]);
        }
        return r;
    }

    ns.create = function() {
        return new AlanFrame();
    };

    ns.parse = parse;

})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :
   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :
   exports);


'use strict';



var ALAN_OFF       = 'off';
var ALAN_SPEAKING  = 'speaking';
var ALAN_LISTENING = 'listening';

function ConnectionImpl(config, auth, mode) {
    var _this = this;
    this._config = config;
    this._auth = auth;
    this._mode = mode;
    this._projectId = config.projectId;
    this._url = config.url;
    this._connected = false;
    this._authorized = false;
    this._dialogId = null;
    this._callId = 1;
    this._callSent = {};
    this._callWait = [];
    this._failed = false;
    this._closed = false;
    this._reconnectTimeout = 100;
    this._cleanups = [];
    this._format = null;
    this._formatSent = false;
    this._frameQueue = [];
    this._remoteSentTs = 0;
    this._remoteRecvTs = 0;
    this._rtt = 25;
    this._rttAlpha = 1./16;
    this._alanState = ALAN_OFF;
    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);
    this._visualState = {};
    this._addCleanup(function() {clearInterval(_this._sendTimer);});
    this._connect();
    console.log('Alan: connection created');
}

ConnectionImpl.prototype._addCleanup = function(f) {
    this._cleanups.push(f);
};

ConnectionImpl.prototype._onConnectStatus = function(s) {
    console.log('Alan: connection status - ' + s);
    this._fire('connectStatus', s);
};

ConnectionImpl.prototype._fire = function(event, object) {
    if (event === 'options') {
        if (object.versions) {
            object.versions['alanbase:web'] = this._config.version;
        }
    }
    postMessage(['fireEvent', event, object]);
};

ConnectionImpl.prototype._connect = function() {
    var _this = this;
    if (this._socket) {
        console.error('socket is already connected');
        return;
    }
    console.log('Alan: connecting - ' + getConnectionDetails(this._url));
    this._socket = new WebSocket(this._url);
    this._socket.binaryType = 'arraybuffer';
    console.time('Alan: connection time');
    this._socket.onopen = function(e) {
        console.info('Alan: connected');
        _this._connected = true;
        _this._reconnectTimeout = 100;
        _this._fire('connection', {status: 'connected'});
        console.timeEnd('Alan: connection time');
        if (_this._auth) {
            _this._fire('connection', {status: 'authorizing'});
            _this._callAuth();
        } else {
            _this._callWait.forEach(function(c) {  _this._sendCall(c); });
            _this._callWait = [];
        }
    };
    this._socket.onmessage = function(msg) {
        if (msg.data instanceof ArrayBuffer) {
            var f = alanFrame.parse(msg.data);
            if (f.sentTs > 0) {
                _this._remoteSentTs = f.sentTs;
                _this._remoteRecvTs = Date.now();
            } else {
                _this._remoteSentTs = null;
                _this._remoteRecvTs = null;
            }
            var rtt = 0;
            if (f.remoteTs) {
                rtt = Date.now() - f.remoteTs;
            }
            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;
            var uint8 = new Uint8Array(f.audioData);
            var frame = [];
            var batch = 10000;
            for (var offset = 0; offset < uint8.byteLength; offset += batch) {
                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));
                let a = String.fromCharCode.apply(null, b);
                frame.push(a);
            }
            frame = frame.join('');
            postMessage(['alanAudio', 'playFrame', frame]);
        } else if (typeof(msg.data) === 'string') {
            msg = JSON.parse(msg.data);
            if (msg.i) {
                var c = _this._callSent[msg.i];
                delete _this._callSent[msg.i];
                if (c && c.callback) {
                    c.callback(msg.e, msg.r);
                }
            } else if (msg.e) {
                if (msg.e === 'text') {
                    postMessage(['alanAudio', 'playText', msg.p]);
                } else if (msg.e === 'afterText') {
                    postMessage(['alanAudio', 'playAfterText', msg.p]);
                } else if (msg.e === 'showPopup') {
                    postMessage(['alanAudio', 'showPopup', msg.p]);
                } else if (msg.e === 'command') {
                    postMessage(['alanAudio', 'playCommand', msg.p]);
                } else if (msg.e === 'inactivity') {
                    postMessage(['alanAudio', 'stop']);
                } else {
                    _this._fire(msg.e, msg.p);
                }
            }
        } else {
            console.error('invalid message type');
        }
    };
    this._socket.onerror = function(evt) {
        console.error('Alan: connection closed due to error: ', evt);
    };
    this._socket.onclose = function(evt) {
        console.info('Alan: connection closed');
        _this._connected = false;
        _this._authorized = false;
        _this._socket = null;
        _this._onConnectStatus('disconnected');
        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {
            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);
            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);
            if (_this._reconnectTimeout < 3000) {
                _this._reconnectTimeout *= 2;
            } else {
                _this._reconnectTimeout += 500;
            }
            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);
        }
    };
    this._addCleanup(function() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
        }
    });
};

ConnectionImpl.prototype._callAuth = function() {
    var _this = this;
    var callback = function(err, r) {
        if (!err && r.status === 'authorized') {
            _this._authorized = true;
            _this._formatSent = false;
            if (r.dialogId) {
                postMessage(['setDialogId', r.dialogId]);
                _this._dialogId = r.dialogId;
            }
            _this._onAuthorized();
            _this._onConnectStatus('authorized');
        } else if (err === 'auth-failed') {
            _this._onConnectStatus('auth-failed');
            if (_this._socket) {
                _this._socket.close();
                _this._socket = null;
                _this._failed = true;
            }
        } else {
            _this._onConnectStatus('invalid-auth-response');
            console.log('Alan: invalid auth response', err, r);
        }
    };
    var authParam = this._auth;
    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._dialogId) {
        authParam.dialogId = this._dialogId;
    }
    authParam.mode = this._mode;
    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});
    return this;
};

ConnectionImpl.prototype._sendCall = function(call) {
    this._sendFormatIfNeeded(false);
    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));
    if (call.callback) {
        this._callSent[call.cid] = call;
    }
};

ConnectionImpl.prototype._onAuthorized = function() {
    var _this = this;
    this._callWait.forEach(function(c) {
        _this._sendCall(c);
    });
    this._callWait = [];
};

ConnectionImpl.prototype.close = function() {
    for (var i = 0; i < this._cleanups.length; i++ ) {
        this._cleanups[i]();
    }
    this._cleanups = [];
    this._closed = true;
    
    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {
        this._socket.close();
        this._socket = null;
    }
    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));
    //close(); TODO: delete it!
};

ConnectionImpl.prototype.call = function(cid, method, param) {
    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {
        if (cid) {
            postMessage(['callback', cid, err, obj]);
        }
    }};
    if (this._authorized || this._connected && !this._auth) {
        this._sendCall(call);
    } else {
        this._callWait.push(call);
    }
};

ConnectionImpl.prototype.setVisual = function(state) {
    this._visualState = state;
    this.call(null, '_visual_', state);
};

ConnectionImpl.prototype._sendFrame = function(frame) {
    if (!this._socket) {
        console.error('sendFrame to closed socket');
        return;
    }
    frame.sentTs = Date.now();
    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {
        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;
    }
    this._socket.send(frame.write());
};

ConnectionImpl.prototype._listen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'listen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_LISTENING;
};

ConnectionImpl.prototype._stopListen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'stopListen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_OFF;
};

ConnectionImpl.prototype._onAudioFormat = function(format) {
    this._formatSent = false;
    this._format = format;
};

ConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {
    if (this._alanState === ALAN_SPEAKING) {
        return;
    }
    if (this._alanState === ALAN_OFF) {
        this._listen();
    }
    if (this._alanState !== ALAN_LISTENING) {
        console.error('invalid alan state: ' + this._alanState);
        return;
    }
    this._sendFormatIfNeeded(true);
    var f = alanFrame.create();
    f.audioData = frame;
    this._frameQueue.push(f);
};

ConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {
    if (!this._format || this._formatSent) {
        return;
    }
    this._formatSent = true;
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({format: this._format});
    if (inQueue) {
        this._frameQueue.push(f);
    } else {
        this._sendFrame(f);
    }
};

ConnectionImpl.prototype._flushQueue = function() {
    if (!this._socket || !this._connected) {
        var d = 0;
        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {
            this._frameQueue.shift();
            d++;
        }
        if (d > 0) {
            console.error('dropped: %s, frames', d);
        }
        return;
    }
    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {
        this._sendFrame(this._frameQueue.shift());
    }
};

function getConnectionDetails(url){
    var urlParts = url.split('/');
    var projectId = urlParts[4];
    var environment = urlParts[5];
    var host = urlParts[2];

    if (projectId && environment && host) {
        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';
    }

    return url;
}

function connectProject(config, auth, mode) {
    var c = new ConnectionImpl(config, auth, mode);
    c.onAudioEvent = function(event, arg1, arg2) {
        if (event === 'format') {
            c._onAudioFormat(arg1);
        } else if (event === 'frame') {
            c._onMicFrame(arg1, arg2);
        } else if (event === 'micStop' || event === 'playStart') {
            c._stopListen();
        } else {
            console.error('unknown audio event: ' + event, arg1, arg2);
        }
    };
    return c;
}

var factories = {
    connectProject: connectProject,
};

var currentConnect = null;

onmessage = function(e) {
    var name = e.data[0];
    try {
        if (!currentConnect) {
            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));
        } else {
            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));
        }
    } catch(e) {
        console.error('error calling: ' + name, e);
    }
};
`],{type:"text/javascript"}))),this._worker.onmessage=function(h){if(h.data[0]==="fireEvent"){f._fire(h.data[1],h.data[2]);return}if(h.data[0]==="alanAudio"){if(h.data[1]==="playText"){alanAudio.playText(h.data[2]);return}if(h.data[1]==="playAfterText"){alanAudio.playAfterText(h.data[2]);return}if(h.data[1]==="playAudio"||h.data[1]==="playFrame"){alanAudio.playAudio(h.data[2]);return}if(h.data[1]==="playEvent"||h.data[1]==="playCommand"){alanAudio.playEvent(h.data[2]);return}if(h.data[1]==="showPopup"){alanAudio.showPopup(h.data[2]);return}if(h.data[1]==="stop"){alanAudio.stop();return}}if(h.data[0]==="callback"){f._callback[h.data[1]](h.data[2],h.data[3]),delete f._callback[h.data[1]];return}if(h.data[0]==="setDialogId"){f._dialogId=h.data[1];return}console.error("invalid event",h.data)},this._worker.onerror=function(h){console.error("error in worker: "+h.filename+":"+h.lineno+" - "+h.message)},this._handlers={},this._cleanups=[],this._callback={},this._callIds=1,this._config={}}D.prototype.on=function(f,h){var m=this._handlers[f];m||(m=[],this._handlers[f]=m),m.push(h)},D.prototype.off=function(f,h){var m=this._handlers[f];if(m){var q=m.indexOf(h);q>=0&&m.splice(q,1)}},D.prototype.getSettings=function(){return{server:I.baseURL,projectId:this._config.projectId,dialogId:this._dialogId}},D.prototype.setVisual=function(f){this._worker.postMessage(["setVisual",f])},D.prototype.call=function(f,h,m){var q=null;m&&(q=this._callIds++,this._callback[q]=m),this._worker.postMessage(["call",q,f,h])},D.prototype.close=function(){console.log("closing connection to: "+this._url),this._cleanups.forEach(function(f){f()}),this._worker.postMessage(["close"]),this._worker.terminate()},D.prototype._fire=function(f,h){var m=this._handlers[f];if(m)for(var q=0;q<m.length;q++)m[q](h)},D.prototype._addCleanup=function(f){this._cleanups.push(f)};function F(f,h){var m={};for(var q in h)m[q]=h[q];for(var q in f)m[q]=f[q];return!h||h&&h.platform==null?m.platform=I.platform:m.platform=I.platform+":"+h.platform,!h||h&&h.platformVersion==null?m.platformVersion=I.version:m.platformVersion=I.version+":"+h.platformVersion,h&&h.appName&&(m.appName=h.appName),m}function e(f){return f.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi)}function a(f,h,m,q,gA){var x=new D;if(m&&(I.baseURL="wss://"+m),x._config.projectId=f,x._config.codec=I.codec,x._config.version=I.version,x._config.url=I.baseURL+"/ws_project/"+f,!e(f))throw new Error("Wrong projectId was provided: ",f);x._worker.postMessage(["connectProject",x._config,F(h,gA),q]);function CA(IA,wA){alanAudio.on(IA,wA),x._addCleanup(function(){alanAudio.off(IA,wA)})}function bA(IA){function wA(UA,uA){IA==="frame"&&alanAudio.isPlaying()||x._worker.postMessage(["onAudioEvent",IA,UA,uA])}CA(IA,wA)}function oA(IA){function wA(UA){x._fire(IA,UA)}CA(IA,wA)}return bA("frame"),bA("micStop"),bA("playStart"),oA("text"),oA("command"),x._worker.postMessage(["onAudioEvent","format",alanAudio.getFormat()]),x}function M(f,h,m,q,gA){var x=new D;if(m&&(I.baseURL="wss://"+m),x._config.projectId=f,x._config.codec=I.codec,x._config.version=I.version,x._config.url=I.baseURL+"/ws_project/"+f,!e(f))throw new Error("Wrong projectId was provided");x._worker.postMessage(["connectProject",x._config,F(h,gA),q]);function CA(IA,wA){alanAudio.on(IA,wA),x._addCleanup(function(){alanAudio.off(IA,wA)})}function bA(IA){function wA(UA,uA){IA==="frame"&&alanAudio.isPlaying()||x._worker.postMessage(["onAudioEvent",IA,UA,uA])}CA(IA,wA)}function oA(IA){function wA(UA){x._fire(IA,UA)}CA(IA,wA)}return bA("frame"),bA("micStop"),bA("playStart"),oA("text"),oA("command"),x}function N(f,h){var m=new D;return h&&(I.baseURL="wss://"+h),m._config.version=I.version,m._config.url=I.baseURL+"/ws_tutor",m._worker.postMessage(["connectProject",m._config,f]),m}t.alanSDKVersion=I.version,t.alan={sdkVersion:I.version,diagnostic:t.alanDiagnostic,projectTest:M,project:a,tutor:N}}(window),function(t){var w="playIdle",I="playActive",D="playStopped",F=!1,e="micIdle",a="micActive",M="micStopped",N="processingIdle",f="processingActive",h="audioRunning",m={bufferLength:4096,sampleRate:16e3,encoderApplication:2048,encodePCM:!1,micTimeout:4e3};const q=window.URL.createObjectURL(new Blob([`

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// \`/\` should be present at the end if \`scriptDirectory\` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js


  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // 'WebAssembly.Function' constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === 'function') {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ('\0asm')
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import 'e' 'f' (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export 'f' (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at 'e.f'), that it reroutes to an export (at 'f')
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module['preloadedImages'] = {}; // maps url to image data
Module['preloadedAudios'] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = 'file://';

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw 'sync fetching of the wasm failed: you can preload it to Module[wasmBinary] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw 'failed to load wasm binary file at ' + wasmBinaryFile;
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[wd_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9+/=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  'abort': _abort,
  'emscripten_memcpy_big': _emscripten_memcpy_big,
  'emscripten_resize_heap': _emscripten_resize_heap,
  'fd_close': _fd_close,
  'fd_seek': _fd_seek,
  'fd_write': _fd_write,
  'setTempRet0': _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module['___wasm_call_ctors'] = asm['__wasm_call_ctors']

/** @type {function(...*):?} */
var _opus_encoder_create = Module['_opus_encoder_create'] = asm['opus_encoder_create']

/** @type {function(...*):?} */
var _opus_encode_float = Module['_opus_encode_float'] = asm['opus_encode_float']

/** @type {function(...*):?} */
var _opus_encoder_ctl = Module['_opus_encoder_ctl'] = asm['opus_encoder_ctl']

/** @type {function(...*):?} */
var _opus_encoder_destroy = Module['_opus_encoder_destroy'] = asm['opus_encoder_destroy']

/** @type {function(...*):?} */
var _speex_resampler_init = Module['_speex_resampler_init'] = asm['speex_resampler_init']

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = asm['speex_resampler_destroy']

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = asm['speex_resampler_process_interleaved_float']

/** @type {function(...*):?} */
var ___errno_location = Module['___errno_location'] = asm['__errno_location']

/** @type {function(...*):?} */
var stackSave = Module['stackSave'] = asm['stackSave']

/** @type {function(...*):?} */
var stackRestore = Module['stackRestore'] = asm['stackRestore']

/** @type {function(...*):?} */
var stackAlloc = Module['stackAlloc'] = asm['stackAlloc']

/** @type {function(...*):?} */
var _malloc = Module['_malloc'] = asm['malloc']

/** @type {function(...*):?} */
var _free = Module['_free'] = asm['free']

/** @type {function(...*):?} */
var dynCall_jiji = Module['dynCall_jiji'] = asm['dynCall_jiji']





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + status + ')';
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





'use strict';

const OggOpusEncoder = function( config, Module ){
  if ( !Module ) {
    throw new Error('Module with exports required to initialize an encoder instance');
  }

  this.config = Object.assign({ 
    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)
                              // 2049 = Full Band Audio (Highest fidelity)
                              // 2051 = Restricted Low Delay (Lowest latency)
    encoderFrameSize: 20, // Specified in ms.
    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled
    maxFramesPerPage: 40, // Tradeoff latency with overhead
    numberOfChannels: 1,
    originalSampleRate: 44100,
    resampleQuality: 3,  // Value between 0 and 10 inclusive. 10 being highest quality.
    serial: Math.floor(Math.random() * 4294967296),
    encodeRaw: true,
    encodePCM: false,
  }, config );

  this._opus_encoder_create = Module._opus_encoder_create;
  this._opus_encoder_destroy = Module._opus_encoder_destroy;
  this._opus_encoder_ctl = Module._opus_encoder_ctl;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_encode_float = Module._opus_encode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.pageIndex = 0;
  this.granulePosition = 0;
  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data
  this.segmentDataIndex = 0;
  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments
  this.segmentTableIndex = 0;
  this.framesInPage = 0;

  this.initChecksumTable();
  this.initCodec();
  this.initResampler();

  //print(\`config = \${JSON.stringify(this.config)}\`);

  if ( this.config.numberOfChannels === 1 ) {
    this.interleave = function( buffers ) { return buffers[0]; };
  }
};

OggOpusEncoder.prototype.encode = function( buffers ) {
    // Determine bufferLength dynamically
    if ( !this.bufferLength ) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array( this.bufferLength * this.config.numberOfChannels );
    }

    var samples = this.interleave(buffers);
    if (this.config.encodePCM) {
        var buff = samples.subarray(0, samples.length).slice(0, samples.length).buffer
        var page = new Uint8Array(buff);
        return [{message: 'page', page: page}];
    }

    var sampleIndex = 0;
    var exportPages = [];

    while ( sampleIndex < samples.length ) {
        var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );
        this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );
        sampleIndex += lengthToCopy;
        this.resampleBufferIndex += lengthToCopy;

        if ( this.resampleBufferIndex === this.resampleBufferLength ) {
            this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );
            var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );
            if (this.config.encodeRaw) {
                this.resampleBufferIndex = 0;
                if (packetLength > 0) {
                    var page = this.encoderOutputBuffer.subarray(0, packetLength).slice(0, packetLength);
                    exportPages.push({message: 'page', page: page});
                }
            } else {
                exportPages.concat(this.segmentPacket( packetLength ));
                this.resampleBufferIndex = 0;

                this.framesInPage++;
                if ( this.framesInPage >= this.config.maxFramesPerPage ) {
                    exportPages.push( this.generatePage() );
                }
            }
        }
    }
    return exportPages;
};

OggOpusEncoder.prototype.destroy = function() {
  if ( this.encoder ) {
    this._free(this.encoderSamplesPerChannelPointer);
    delete this.encoderSamplesPerChannelPointer;
    this._free(this.encoderBufferPointer);
    delete this.encoderBufferPointer;
    this._free(this.encoderOutputPointer);
    delete this.encoderOutputPointer;
    this._free(this.resampleSamplesPerChannelPointer);
    delete this.resampleSamplesPerChannelPointer;
    this._free(this.resampleBufferPointer);
    delete this.resampleBufferPointer;
    this._speex_resampler_destroy(this.resampler);
    delete this.resampler;
    this._opus_encoder_destroy(this.encoder);
    delete this.encoder;
  }
};

OggOpusEncoder.prototype.flush = function() {
  if (this.config.encodeRaw) {
    this.resampleBufferIndex = 0;	  
    return [];
  }
  var exportPage;
  if ( this.framesInPage ) {
    exportPage = this.generatePage();
  }
  // discard any pending data in resample buffer (only a few ms worth)
  this.resampleBufferIndex = 0;
  return exportPage;
};

OggOpusEncoder.prototype.encodeFinalFrame = function() {
  const exportPages = [];

  // Encode the data remaining in the resample buffer.
  if ( this.resampleBufferIndex > 0 ) {
    const dataToFill = (this.resampleBufferLength - this.resampleBufferIndex) / this.config.numberOfChannels;
    const numBuffers = Math.ceil(dataToFill / this.bufferLength);

    for ( var i = 0; i < numBuffers; i++ ) { 
      var finalFrameBuffers = [];
      for ( var j = 0; j < this.config.numberOfChannels; j++ ) {
        finalFrameBuffers.push( new Float32Array( this.bufferLength ));
      }
      exportPages.concat(this.encode( finalFrameBuffers ));
    }
  }
  if (this.config.encodeRaw) {
	return exportPages;
  }

  this.headerType += 4;
  exportPages.push(this.generatePage());
  return exportPages;
};

OggOpusEncoder.prototype.getChecksum = function( data ){
  var checksum = 0;
  for ( var i = 0; i < data.length; i++ ) {
    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];
  }
  return checksum >>> 0;
};

OggOpusEncoder.prototype.generateCommentPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'
  segmentDataView.setUint32( 8, 10, true ); // Vendor Length
  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'
  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'
  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'
  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 26;
  this.headerType = 0;
  return this.generatePage();
};

OggOpusEncoder.prototype.generateIdPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'
  segmentDataView.setUint8( 8, 1, true ); // Version
  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count
  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)
  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate
  segmentDataView.setUint16( 16, 0, true ); // output gain
  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 19;
  this.headerType = 2;
  return this.generatePage();
};

OggOpusEncoder.prototype.generatePage = function(){
  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;
  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );
  var pageBufferView = new DataView( pageBuffer );
  var page = new Uint8Array( pageBuffer );

  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'
  pageBufferView.setUint8( 4, 0, true ); // Version
  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream

  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer
  // Javascript Number maximum value is 53 bits or 2^53 - 1 
  pageBufferView.setUint32( 6, granulePosition, true );
  if (granulePosition < 0) {
    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );
  }
  else {
    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );
  }

  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number
  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number
  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.
  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table
  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data
  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum

  var exportPage = { message: 'page', page: page, samplePosition: this.granulePosition };
  this.segmentTableIndex = 0;
  this.segmentDataIndex = 0;
  this.framesInPage = 0;
  if ( granulePosition > 0 ) {
    this.lastPositiveGranulePosition = granulePosition;
  }

  return exportPage;
};

OggOpusEncoder.prototype.initChecksumTable = function(){
  this.checksumTable = [];
  for ( var i = 0; i < 256; i++ ) {
    var r = i << 24;
    for ( var j = 0; j < 8; j++ ) {
      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);
    }
    this.checksumTable[i] = (r & 0xffffffff);
  }
};

OggOpusEncoder.prototype.setOpusControl = function( control, value ){
  var location = this._malloc( 4 );
  this.HEAP32[ location >> 2 ] = value;
  this._opus_encoder_ctl( this.encoder, control, location );
  this._free( location );
};

OggOpusEncoder.prototype.initCodec = function() {
  var errLocation = this._malloc( 4 );
  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );
  this._free( errLocation );

  if ( this.config.encoderBitRate ) {
    this.setOpusControl( 4002, this.config.encoderBitRate );
  }

  if ( this.config.encoderComplexity ) {
    this.setOpusControl( 4010, this.config.encoderComplexity );
  }

  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;
  this.encoderSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;

  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;
  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample
  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );

  this.encoderOutputMaxLength = 4000;
  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );
  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );
};

OggOpusEncoder.prototype.initResampler = function() {
  var errLocation = this._malloc( 4 );
  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );
  this._free( errLocation );

  this.resampleBufferIndex = 0;
  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
  this.resampleSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;

  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample
  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );
};

OggOpusEncoder.prototype.interleave = function( buffers ) {
  for ( var i = 0; i < this.bufferLength; i++ ) {
    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {
      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];
    }
  }

  return this.interleavedBuffers;
};

OggOpusEncoder.prototype.segmentPacket = function( packetLength ) {
  var packetIndex = 0;
  var exportPages = [];

  while ( packetLength >= 0 ) {

    if ( this.segmentTableIndex === 255 ) {
      exportPages.push( this.generatePage() );
      this.headerType = 1;
    }

    var segmentLength = Math.min( packetLength, 255 );
    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;
    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );
    this.segmentDataIndex += segmentLength;
    packetIndex += segmentLength;
    packetLength -= 255;
  }

  this.granulePosition += ( 48 * this.config.encoderFrameSize );
  if ( this.segmentTableIndex === 255 ) {
    exportPages.push( this.generatePage() );
    this.headerType = 0;
  }

  return exportPages;
};

var print = ()=> {};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

  class EncoderWorklet extends AudioWorkletProcessor {

    constructor(){
      super();
      print = (text)=> {
          this.port.postMessage( {message: 'print', text: text} );
      };
      this.continueProcess = true;
      this.port.onmessage = ({ data }) => {
        if (this.encoder) {
          switch( data['command'] ){
            case 'getHeaderPages':
			  if (!this.encoder.config.encodeRaw) {
			    this.postPage(this.encoder.generateIdPage());
	            this.postPage(this.encoder.generateCommentPage());
			  }
              break;

            case 'done':
              this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
              this.encoder.destroy();
              delete this.encoder;
              this.port.postMessage( {message: 'done'} );
              break;

            case 'flush':
              this.postPage(this.encoder.flush());
              this.port.postMessage( {message: 'flushed'} );
              break;

            default:
              // Ignore any unknown commands and continue recieving commands
          }
        }

        switch( data['command'] ){

          case 'close':
            this.continueProcess = false;
            break;

          case 'init':
            this.encoder = new OggOpusEncoder( data, Module );
            this.port.postMessage( {message: 'ready'} );
            break;

          default:
            // Ignore any unknown commands and continue recieving commands
        }
      }
    }

    process(inputs) {
      if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length){
        this.encoder.encode( inputs[0] ).forEach(pageData => this.postPage(pageData));
      }
      return this.continueProcess;
    }

    postPage(pageData) {
      if (pageData) {
        this.port.postMessage( pageData, [pageData.page.buffer] );
      }
    }
  }

  registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
  var encoder;
  var postPageGlobal = (pageData) => {
    if (pageData) {
      postMessage( pageData, [pageData.page.buffer] );
    }
  }
    print = (text)=> {
        postMessage({message: 'print', text: text} );
    };

  onmessage = ({ data }) => {
    if (encoder) {
      switch( data['command'] ){

        case 'encode':
          encoder.encode( data['buffers'] ).forEach(pageData => postPageGlobal(pageData));
          break;

        case 'getHeaderPages':
          postPageGlobal(encoder.generateIdPage());
          postPageGlobal(encoder.generateCommentPage());
          break;

        case 'done':
          encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
          encoder.destroy();
          encoder = null;
          postMessage( {message: 'done'} );
          break;

        case 'flush':
          postPageGlobal(encoder.flush());
          postMessage( {message: 'flushed'} );
          break;

        default:
          // Ignore any unknown commands and continue recieving commands
      }
    }

    switch( data['command'] ){

      case 'close':
        close();
        break;

      case 'init':
        encoder = new OggOpusEncoder( data, Module );
        postMessage( {message: 'ready'} );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  };
}


// Exports for unit testing.
var module = module || {};
module.exports = {
  Module: Module,
  OggOpusEncoder: OggOpusEncoder
};

`],{type:"text/javascript"})),gA=x(q);function x(k){const _=`importScripts( "${k}" );`;return URL.createObjectURL(new Blob([_],{type:"text/javascript"}))}var CA=new Worker(gA);URL.revokeObjectURL(gA);var bA={},oA=M,IA=D,wA=N,UA=[],uA=null,rA=null,UB=window.AudioContext||window.webkitAudioContext,xA=null,BB=!1,jA=!!document.documentMode,WA=!jA&&!!window.StyleMedia,XA=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),DB=navigator.userAgent.match(/safari/i)&&navigator.vendor.match(/apple/i)&&navigator.maxTouchPoints;WA||XA?rA=new UB({sampleRate:m.sampleRate}):rA=new UB,rA.resume().then(()=>v(h));var iB=null,EB=null,IB=rA.createGain(),zB=rA.createGain();zB.gain.value=1;var YB=null,W=rA.createScriptProcessor(m.bufferLength,1,1);W.onaudioprocess=({inputBuffer:k})=>nA(k),W.connect(rA.destination),CA.start&&CA.start();var p=({data:k})=>{switch(k.message){case"ready":console.log("Alan: audio worker initialized");break;case"page":IA!==I&&wA!==f&&v("frame",m.sampleRate,k.page);break;case"done":CA.removeEventListener("message",p);break;case"print":console.log("AUDIO-WORKER",k.text);break}};CA.addEventListener("message",p),CA.postMessage({command:"init",originalSampleRate:rA.sampleRate,encoderSampleRate:m.sampleRate,encoderApplication:m.encoderApplication,encodePCM:m.encodePCM});function X(){return EB?Promise.resolve(EB):navigator.mediaDevices.getUserMedia({audio:!0}).then(k=>{v("micAllowed"),iB=k,EB=rA.createMediaStreamSource(k),EB.connect(IB),IB.connect(W)})}function nA(k){if(!(oA!==a||IA===I||BB)){var _=[k.getChannelData(0)];CA.postMessage({command:"encode",buffers:_})}}function JA(){IA=w,y(!0)}function mA(){return uA||(uA=document.createElement("audio"),uA.addEventListener("ended",function(){JA()}),document.body.appendChild(uA),uA.setAttribute("autoplay","true"),uA)}function fA(k){for(var _=window.atob(k),QA=_.length,EA=new Uint8Array(QA),FA=0;FA<QA;FA++)EA[FA]=_.charCodeAt(FA);return EA.buffer}function G(k){if(wA=N,DB){const QA="data:audio/mpeg;base64,";k.startsWith(QA)&&(k=k.substring(QA.length));var _=fA(k);rA.decodeAudioData(_,EA=>{YB=rA.createBufferSource(),YB.addEventListener("ended",FA=>JA()),YB.connect(IB),YB.connect(zB),zB.connect(rA.destination),YB.loop=!1,YB.buffer=EA,YB.start(0)},EA=>console.error(`Error with decoding audio data: ${EA.err}`))}else mA().muted=!1,mA().setAttribute("src",k)}function Y(){DB?YB&&YB.stop():uA&&(uA.pause(),uA.currentTime=0,uA.src="")}function L(){DB||mA().setAttribute("src",""),O()}function y(k){if(rA.state!=="suspended"&&(k&&!UA.length&&L(),!(!UA.length||IA===I))){for(;UA.length&&IA!==I;){var _=UA.shift();_.event?v("command",_.event):_.text?v("text",_.text):_.afterText?v("afterText",_.afterText):_.popup?v("popup",_.popup):_.audio?(F||oA!==M)&&(IA=I,v("playStart"),G(_.audio)):console.error("invalid queue item")}k&&IA!==I&&O()}}function O(){v("playStop")}function v(k,_,QA){var EA=bA[k];if(EA)for(var FA=0;FA<EA.length;FA++)EA[FA](_,QA)}t.getFormat=function(){return{send:{codec:"opus",sampleRate:16e3},recv:{codec:"mp3;base64",sampleRate:16e3}}},t.isAudioRunning=function(){return rA&&rA.state==="running"},t.isPlaying=function(){return IA===I},t.enableVoice=function(){F=!0,mA().muted=!1},t.disableVoice=function(){F=!1,mA().muted=!0},t.setProcessingState=function(){wA=f},t.playText=function(k){k&&k.ctx&&k.ctx.opts&&k.ctx.opts.force===!0?v("text",k):rA.resume().then(()=>{UA.push({text:k}),y()})},t.playAfterText=function(k){rA.resume().then(()=>{UA.push({afterText:k}),y()})},t.playCommand=function(k){rA.resume().then(()=>{UA.push({event:k}),y()})},t.showPopup=function(k){k.popup.force?v("popup",k):rA.resume().then(()=>{UA.push({popup:k}),y()})},t.playEvent=function(k){t.playCommand(k)},t.playAudio=function(k){rA.resume().then(()=>{UA.push({audio:k}),y()})},t.on=function(k,_){var QA=bA[k];QA==null?bA[k]=[_]:QA.push(_)},t.off=function(k,_){var QA=bA[k];if(QA){var EA=QA.indexOf(_);EA>=0&&QA.splice(EA,1)}},t.resumeAudioCtx=function(){rA.resume()};var H=!1;function P(k){H=k}t.isMicAllowed=function(){return H},t.start=function(k){xA&&(clearTimeout(xA),xA=null),wA=N,mA().setAttribute("src",""),IA=w,X().then(()=>{oA=a,v("micStart")}).then(()=>{P(!0),DB||rA.resume()}).catch(_=>{v("micFail",_)}),k&&(k(),k=null)},t.stop=function(){EB&&(oA=e),xA&&(clearTimeout(xA),xA=null),xA=setTimeout(BA,m.micTimeout),v("micStop"),IA=D,UA=[],Y()},t.skipExternalSounds=function(k){BB=k};function BA(){console.log("stopping the mic."),oA=M,EB&&(EB.disconnect(),EB=null),IB.disconnect(),iB&&(iB.getTracks?iB.getTracks().forEach(k=>k.stop()):iB.stop(),iB=null)}}(typeof window<"u"?function(){return window.alanAudio={},window.alanAudio}():B);var Q=this&&this.__assign||function(){return Q=Object.assign||function(t){for(var w,I=1,D=arguments.length;I<D;I++){w=arguments[I];for(var F in w)Object.prototype.hasOwnProperty.call(w,F)&&(t[F]=w[F])}return t},Q.apply(this,arguments)},g=this&&this.__awaiter||function(t,w,I,D){function F(e){return e instanceof I?e:new I(function(a){a(e)})}return new(I||(I=Promise))(function(e,a){function M(h){try{f(D.next(h))}catch(m){a(m)}}function N(h){try{f(D.throw(h))}catch(m){a(m)}}function f(h){h.done?e(h.value):F(h.value).then(M,N)}f((D=D.apply(t,w||[])).next())})},C=this&&this.__generator||function(t,w){var I={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},D,F,e,a;return a={next:M(0),throw:M(1),return:M(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function M(f){return function(h){return N([f,h])}}function N(f){if(D)throw new TypeError("Generator is already executing.");for(;I;)try{if(D=1,F&&(e=f[0]&2?F.return:f[0]?F.throw||((e=F.return)&&e.call(F),0):F.next)&&!(e=e.call(F,f[1])).done)return e;switch(F=0,e&&(f=[f[0]&2,e.value]),f[0]){case 0:case 1:e=f;break;case 4:return I.label++,{value:f[1],done:!1};case 5:I.label++,F=f[1],f=[0];continue;case 7:f=I.ops.pop(),I.trys.pop();continue;default:if(e=I.trys,!(e=e.length>0&&e[e.length-1])&&(f[0]===6||f[0]===2)){I=0;continue}if(f[0]===3&&(!e||f[1]>e[0]&&f[1]<e[3])){I.label=f[1];break}if(f[0]===6&&I.label<e[1]){I.label=e[1],e=f;break}if(e&&I.label<e[2]){I.label=e[2],I.ops.push(f);break}e[2]&&I.ops.pop(),I.trys.pop();continue}f=w.call(t,I)}catch(h){f=[6,h],F=0}finally{D=e=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},n=this&&this.__spreadArray||function(t,w,I){if(I||arguments.length===2)for(var D=0,F=w.length,e;D<F;D++)(e||!(D in w))&&(e||(e=Array.prototype.slice.call(w,0,D)),e[D]=w[D]);return t.concat(e||Array.prototype.slice.call(w))};return function(){var t=Object.defineProperty,w=function(r,c,s){return c in r?t(r,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[c]=s},I=function(r,c,s){return w(r,typeof c!="symbol"?c+"":c,s),s};function D(){return'<div class="alan-btn__chat-incomming-msg-wrapper"> <div class="alan-btn__chat-incomming-msg msg-1">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-2">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-3">&nbsp;</div>  </div>'}function F(r){var c;return((c=r.ctx)===null||c===void 0?void 0:c.final)!==!1}function e(r){return r.initLoad||F(r)?"":'<div style="margin-top: 12px;margin-bottom: 12px;">'.concat(D(),"</div>")}function a(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var M=a();function N(r){M=r}var f=/[&<>"']/,h=new RegExp(f.source,"g"),m=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,q=new RegExp(m.source,"g"),gA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},x=function(r){return gA[r]};function CA(r,c){if(c){if(f.test(r))return r.replace(h,x)}else if(m.test(r))return r.replace(q,x);return r}var bA=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function oA(r){return r.replace(bA,function(c,s){return s=s.toLowerCase(),s==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):""})}var IA=/(^|[^\[])\^/g;function wA(r,c){r=typeof r=="string"?r:r.source,c=c||"";var s={replace:function(o,U){return U=U.source||U,U=U.replace(IA,"$1"),r=r.replace(o,U),s},getRegex:function(){return new RegExp(r,c)}};return s}var UA=/[^\w:]/g,uA=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function rA(r,c,s){if(r){var o=void 0;try{o=decodeURIComponent(oA(s)).replace(UA,"").toLowerCase()}catch{return null}if(o.indexOf("javascript:")===0||o.indexOf("vbscript:")===0||o.indexOf("data:")===0)return null}c&&!uA.test(s)&&(s=WA(c,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}var UB={},xA=/^[^:]+:\/*[^/]*$/,BB=/^([^:]+:)[\s\S]*$/,jA=/^([^:]+:\/*[^/]*)[\s\S]*$/;function WA(r,c){UB[" "+r]||(xA.test(r)?UB[" "+r]=r+"/":UB[" "+r]=iB(r,"/",!0)),r=UB[" "+r];var s=r.indexOf(":")===-1;return c.substring(0,2)==="//"?s?c:r.replace(BB,"$1")+c:c.charAt(0)==="/"?s?c:r.replace(jA,"$1")+c:r+c}var XA={exec:function(){}};function DB(r,c){var s=r.replace(/\|/g,function(J,z,S){for(var K=!1,j=z;--j>=0&&S[j]==="\\";)K=!K;return K?"|":" |"}),o=s.split(/ \|/),U=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),o.length>c)o.splice(c);else for(;o.length<c;)o.push("");for(;U<o.length;U++)o[U]=o[U].trim().replace(/\\\|/g,"|");return o}function iB(r,c,s){var o=r.length;if(o===0)return"";for(var U=0;U<o;){var J=r.charAt(o-U-1);if(J===c&&!s)U++;else if(J!==c&&s)U++;else break}return r.slice(0,o-U)}function EB(r,c){if(r.indexOf(c[1])===-1)return-1;for(var s=r.length,o=0,U=0;U<s;U++)if(r[U]==="\\")U++;else if(r[U]===c[0])o++;else if(r[U]===c[1]&&(o--,o<0))return U;return-1}function IB(r,c){!r||r.silent||(c&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(r.sanitize||r.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(r.highlight||r.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),r.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),r.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),r.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),r.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(r.headerIds||r.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function zB(r,c,s,o){var U=c.href,J=c.title?CA(c.title):null,z=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){o.state.inLink=!0;var S={type:"link",raw:s,href:U,title:J,text:z,tokens:o.inlineTokens(z)};return o.state.inLink=!1,S}return{type:"image",raw:s,href:U,title:J,text:CA(z)}}function YB(r,c){var s=r.match(/^(\s+)(?:```)/);if(s===null)return c;var o=s[1];return c.split(`
`).map(function(U){var J=U.match(/^\s+/);if(J===null)return U;var z=J[0];return z.length>=o.length?U.slice(o.length):U}).join(`
`)}var W=function(){function r(c){this.options=c||M}return r.prototype.space=function(c){var s=this.rules.block.newline.exec(c);if(s&&s[0].length>0)return{type:"space",raw:s[0]}},r.prototype.code=function(c){var s=this.rules.block.code.exec(c);if(s){var o=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?o:iB(o,`
`)}}},r.prototype.fences=function(c){var s=this.rules.block.fences.exec(c);if(s){var o=s[0],U=YB(o,s[3]||"");return{type:"code",raw:o,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:U}}},r.prototype.heading=function(c){var s=this.rules.block.heading.exec(c);if(s){var o=s[2].trim();if(/#$/.test(o)){var U=iB(o,"#");(this.options.pedantic||!U||/ $/.test(U))&&(o=U.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:o,tokens:this.lexer.inline(o)}}},r.prototype.hr=function(c){var s=this.rules.block.hr.exec(c);if(s)return{type:"hr",raw:s[0]}},r.prototype.blockquote=function(c){var s=this.rules.block.blockquote.exec(c);if(s){var o=s[0].replace(/^ *>[ \t]?/gm,""),U=this.lexer.state.top;this.lexer.state.top=!0;var J=this.lexer.blockTokens(o);return this.lexer.state.top=U,{type:"blockquote",raw:s[0],tokens:J,text:o}}},r.prototype.list=function(c){var s=this.rules.block.list.exec(c);if(s){var o=void 0,U=void 0,J=void 0,z=void 0,S=void 0,K=void 0,j=void 0,DA=void 0,lA=void 0,YA=void 0,b=void 0,sA=void 0,Z=s[1].trim(),MA=Z.length>1,aA={type:"list",raw:"",ordered:MA,start:MA?+Z.slice(0,-1):"",loose:!1,items:[]};Z=MA?"\\d{1,9}\\".concat(Z.slice(-1)):"\\".concat(Z),this.options.pedantic&&(Z=MA?Z:"[*+-]");for(var PA=new RegExp("^( {0,3}".concat(Z,")((?:[	 ][^\\n]*)?(?:\\n|$))"));c&&(sA=!1,!(!(s=PA.exec(c))||this.rules.block.hr.test(c)));){if(o=s[0],c=c.substring(o.length),DA=s[2].split(`
`,1)[0].replace(/^\t+/,function(cB){return" ".repeat(3*cB.length)}),lA=c.split(`
`,1)[0],this.options.pedantic?(z=2,b=DA.trimLeft()):(z=s[2].search(/[^ ]/),z=z>4?1:z,b=DA.slice(z),z+=s[1].length),K=!1,!DA&&/^ *$/.test(lA)&&(o+=lA+`
`,c=c.substring(lA.length+1),sA=!0),!sA)for(var KB=new RegExp("^ {0,".concat(Math.min(3,z-1),"}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))")),XQ=new RegExp("^ {0,".concat(Math.min(3,z-1),"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)")),lB=new RegExp("^ {0,".concat(Math.min(3,z-1),"}(?:```|~~~)")),lQ=new RegExp("^ {0,".concat(Math.min(3,z-1),"}#"));c&&(YA=c.split(`
`,1)[0],lA=YA,this.options.pedantic&&(lA=lA.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(lB.test(lA)||lQ.test(lA)||KB.test(lA)||XQ.test(c)));){if(lA.search(/[^ ]/)>=z||!lA.trim())b+=`
`+lA.slice(z);else{if(K||DA.search(/[^ ]/)>=4||lB.test(DA)||lQ.test(DA)||XQ.test(DA))break;b+=`
`+lA}!K&&!lA.trim()&&(K=!0),o+=YA+`
`,c=c.substring(YA.length+1),DA=lA.slice(z)}aA.loose||(j?aA.loose=!0:/\n *\n *$/.test(o)&&(j=!0)),this.options.gfm&&(U=/^\[[ xX]\] /.exec(b),U&&(J=U[0]!=="[ ] ",b=b.replace(/^\[[ xX]\] +/,""))),aA.items.push({type:"list_item",raw:o,task:!!U,checked:J,loose:!1,text:b}),aA.raw+=o}aA.items[aA.items.length-1].raw=o.trimRight(),aA.items[aA.items.length-1].text=b.trimRight(),aA.raw=aA.raw.trimRight();var MQ=aA.items.length;for(S=0;S<MQ;S++)if(this.lexer.state.top=!1,aA.items[S].tokens=this.lexer.blockTokens(aA.items[S].text,[]),!aA.loose){var _Q=aA.items[S].tokens.filter(function(cB){return cB.type==="space"}),rg=_Q.length>0&&_Q.some(function(cB){return/\n.*\n/.test(cB.raw)});aA.loose=rg}if(aA.loose)for(S=0;S<MQ;S++)aA.items[S].loose=!0;return aA}},r.prototype.html=function(c){var s=this.rules.block.html.exec(c);if(s){var o={type:"html",block:!0,raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){var U=this.options.sanitizer?this.options.sanitizer(s[0]):CA(s[0]);o.type="paragraph",o.text=U,o.tokens=this.lexer.inline(U)}return o}},r.prototype.def=function(c){var s=this.rules.block.def.exec(c);if(s){var o=s[1].toLowerCase().replace(/\s+/g," "),U=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",J=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:o,raw:s[0],href:U,title:J}}},r.prototype.table=function(c){var s=this.rules.block.table.exec(c);if(s){var o={type:"table",header:DB(s[1]).map(function(j){return{text:j}}),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(o.header.length===o.align.length){o.raw=s[0];var U=o.align.length,J=void 0,z=void 0,S=void 0,K=void 0;for(J=0;J<U;J++)/^ *-+: *$/.test(o.align[J])?o.align[J]="right":/^ *:-+: *$/.test(o.align[J])?o.align[J]="center":/^ *:-+ *$/.test(o.align[J])?o.align[J]="left":o.align[J]=null;for(U=o.rows.length,J=0;J<U;J++)o.rows[J]=DB(o.rows[J],o.header.length).map(function(j){return{text:j}});for(U=o.header.length,z=0;z<U;z++)o.header[z].tokens=this.lexer.inline(o.header[z].text);for(U=o.rows.length,z=0;z<U;z++)for(K=o.rows[z],S=0;S<K.length;S++)K[S].tokens=this.lexer.inline(K[S].text);return o}}},r.prototype.lheading=function(c){var s=this.rules.block.lheading.exec(c);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}},r.prototype.paragraph=function(c){var s=this.rules.block.paragraph.exec(c);if(s){var o=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:o,tokens:this.lexer.inline(o)}}},r.prototype.text=function(c){var s=this.rules.block.text.exec(c);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}},r.prototype.escape=function(c){var s=this.rules.inline.escape.exec(c);if(s)return{type:"escape",raw:s[0],text:CA(s[1])}},r.prototype.tag=function(c){var s=this.rules.inline.tag.exec(c);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):CA(s[0]):s[0]}},r.prototype.link=function(c){var s=this.rules.inline.link.exec(c);if(s){var o=s[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;var U=iB(o.slice(0,-1),"\\");if((o.length-U.length)%2===0)return}else{var J=EB(s[2],"()");if(J>-1){var z=s[0].indexOf("!")===0?5:4,S=z+s[1].length+J;s[2]=s[2].substring(0,J),s[0]=s[0].substring(0,S).trim(),s[3]=""}}var K=s[2],j="";if(this.options.pedantic){var DA=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(K);DA&&(K=DA[1],j=DA[3])}else j=s[3]?s[3].slice(1,-1):"";return K=K.trim(),/^</.test(K)&&(this.options.pedantic&&!/>$/.test(o)?K=K.slice(1):K=K.slice(1,-1)),zB(s,{href:K&&K.replace(this.rules.inline._escapes,"$1"),title:j&&j.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}},r.prototype.reflink=function(c,s){var o;if((o=this.rules.inline.reflink.exec(c))||(o=this.rules.inline.nolink.exec(c))){var U=(o[2]||o[1]).replace(/\s+/g," ");if(U=s[U.toLowerCase()],!U){var J=o[0].charAt(0);return{type:"text",raw:J,text:J}}return zB(o,U,o[0],this.lexer)}},r.prototype.emStrong=function(c,s,o){o===void 0&&(o="");var U=this.rules.inline.emStrong.lDelim.exec(c);if(U&&!(U[3]&&o.match(/[\p{L}\p{N}]/u))){var J=U[1]||U[2]||"";if(!J||J&&(o===""||this.rules.inline.punctuation.exec(o))){var z=U[0].length-1,S=void 0,K=void 0,j=z,DA=0,lA=U[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(lA.lastIndex=0,s=s.slice(-1*c.length+z);(U=lA.exec(s))!=null;)if(S=U[1]||U[2]||U[3]||U[4]||U[5]||U[6],!!S){if(K=S.length,U[3]||U[4]){j+=K;continue}else if((U[5]||U[6])&&z%3&&!((z+K)%3)){DA+=K;continue}if(j-=K,!(j>0)){K=Math.min(K,K+j+DA);var YA=c.slice(0,z+U.index+(U[0].length-S.length)+K);if(Math.min(z,K)%2){var b=YA.slice(1,-1);return{type:"em",raw:YA,text:b,tokens:this.lexer.inlineTokens(b)}}var sA=YA.slice(2,-2);return{type:"strong",raw:YA,text:sA,tokens:this.lexer.inlineTokens(sA)}}}}}},r.prototype.codespan=function(c){var s=this.rules.inline.code.exec(c);if(s){var o=s[2].replace(/\n/g," "),U=/[^ ]/.test(o),J=/^ /.test(o)&&/ $/.test(o);return U&&J&&(o=o.substring(1,o.length-1)),o=CA(o,!0),{type:"codespan",raw:s[0],text:o}}},r.prototype.br=function(c){var s=this.rules.inline.br.exec(c);if(s)return{type:"br",raw:s[0]}},r.prototype.del=function(c){var s=this.rules.inline.del.exec(c);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}},r.prototype.autolink=function(c,s){var o=this.rules.inline.autolink.exec(c);if(o){var U=void 0,J=void 0;return o[2]==="@"?(U=CA(this.options.mangle?s(o[1]):o[1]),J="mailto:"+U):(U=CA(o[1]),J=U),{type:"link",raw:o[0],text:U,href:J,tokens:[{type:"text",raw:U,text:U}]}}},r.prototype.url=function(c,s){var o;if(o=this.rules.inline.url.exec(c)){var U=void 0,J=void 0;if(o[2]==="@")U=CA(this.options.mangle?s(o[0]):o[0]),J="mailto:"+U;else{var z=void 0;do z=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])[0];while(z!==o[0]);U=CA(o[0]),o[1]==="www."?J="http://"+o[0]:J=o[0]}return{type:"link",raw:o[0],text:U,href:J,tokens:[{type:"text",raw:U,text:U}]}}},r.prototype.inlineText=function(c,s){var o=this.rules.inline.text.exec(c);if(o){var U=void 0;return this.lexer.state.inRawBlock?U=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):CA(o[0]):o[0]:U=CA(this.options.smartypants?s(o[0]):o[0]),{type:"text",raw:o[0],text:U}}},r}(),p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:XA,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,p.def=wA(p.def).replace("label",p._label).replace("title",p._title).getRegex(),p.bullet=/(?:[*+-]|\d{1,9}[.)])/,p.listItemStart=wA(/^( *)(bull) */).replace("bull",p.bullet).getRegex(),p.list=wA(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex(),p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,p.html=wA(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),p.lheading=wA(p.lheading).replace(/bull/g,p.bullet).getRegex(),p.paragraph=wA(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex(),p.blockquote=wA(p.blockquote).replace("paragraph",p.paragraph).getRegex(),p.normal=Q({},p),p.gfm=Q(Q({},p.normal),{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),p.gfm.table=wA(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex(),p.gfm.paragraph=wA(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex(),p.pedantic=Q(Q({},p.normal),{html:wA(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:XA,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:wA(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var X={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:XA,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:XA,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};X._uc_punctuation="\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u0AF0\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166D\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E42\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65",X._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"+X._uc_punctuation,X.punctuation=wA(X.punctuation).replace(/punctuation/g,X._punctuation).getRegex(),X.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,X.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,X._comment=wA(p._comment).replace("(?:-->|$)","-->").getRegex(),X.emStrong.lDelim=wA(X.emStrong.lDelim).replace(/punct/g,X._punctuation).getRegex(),X.emStrong.rDelimAst=wA(X.emStrong.rDelimAst,"g").replace(/punct/g,X._punctuation).getRegex(),X.emStrong.rDelimUnd=wA(X.emStrong.rDelimUnd,"g").replace(/punct/g,X._punctuation).getRegex(),X._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,X._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,X._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,X.autolink=wA(X.autolink).replace("scheme",X._scheme).replace("email",X._email).getRegex(),X._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,X.tag=wA(X.tag).replace("comment",X._comment).replace("attribute",X._attribute).getRegex(),X._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,X._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,X._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,X.link=wA(X.link).replace("label",X._label).replace("href",X._href).replace("title",X._title).getRegex(),X.reflink=wA(X.reflink).replace("label",X._label).replace("ref",p._label).getRegex(),X.nolink=wA(X.nolink).replace("ref",p._label).getRegex(),X.reflinkSearch=wA(X.reflinkSearch,"g").replace("reflink",X.reflink).replace("nolink",X.nolink).getRegex(),X.normal=Q({},X),X.pedantic=Q(Q({},X.normal),{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:wA(/^!?\[(label)\]\((.*?)\)/).replace("label",X._label).getRegex(),reflink:wA(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",X._label).getRegex()}),X.gfm=Q(Q({},X.normal),{escape:wA(X.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),X.gfm.url=wA(X.gfm.url,"i").replace("email",X.gfm._extended_email).getRegex(),X.breaks=Q(Q({},X.gfm),{br:wA(X.br).replace("{2,}","*").getRegex(),text:wA(X.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function nA(r){return r.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function JA(r){var c="",s,o,U=r.length;for(s=0;s<U;s++)o=r.charCodeAt(s),Math.random()>.5&&(o="x"+o.toString(16)),c+="&#"+o+";";return c}var mA=function(){function r(c){this.tokens=[],this.tokens.links=Object.create(null),this.options=c||M,this.options.tokenizer=this.options.tokenizer||new W,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var s={block:p.normal,inline:X.normal};this.options.pedantic?(s.block=p.pedantic,s.inline=X.pedantic):this.options.gfm&&(s.block=p.gfm,this.options.breaks?s.inline=X.breaks:s.inline=X.gfm),this.tokenizer.rules=s}return Object.defineProperty(r,"rules",{get:function(){return{block:p,inline:X}},enumerable:!1,configurable:!0}),r.lex=function(c,s){var o=new r(s);return o.lex(c)},r.lexInline=function(c,s){var o=new r(s);return o.inlineTokens(c)},r.prototype.lex=function(c){c=c.replace(/\r\n|\r/g,`
`),this.blockTokens(c,this.tokens);for(var s;s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens},r.prototype.blockTokens=function(c,s){var o=this;s===void 0&&(s=[]),this.options.pedantic?c=c.replace(/\t/g,"    ").replace(/^ +$/gm,""):c=c.replace(/^( *)(\t+)/gm,function(lA,YA,b){return YA+"    ".repeat(b.length)});for(var U,J,z,S,K=function(){if(j.options.extensions&&j.options.extensions.block&&j.options.extensions.block.some(function(Z){return(U=Z.call({lexer:o},c,s))?(c=c.substring(U.raw.length),s.push(U),!0):!1}))return"continue";if(U=j.tokenizer.space(c))return c=c.substring(U.raw.length),U.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(U),"continue";if(U=j.tokenizer.code(c))return c=c.substring(U.raw.length),J=s[s.length-1],J&&(J.type==="paragraph"||J.type==="text")?(J.raw+=`
`+U.raw,J.text+=`
`+U.text,j.inlineQueue[j.inlineQueue.length-1].src=J.text):s.push(U),"continue";if((U=j.tokenizer.fences(c))||(U=j.tokenizer.heading(c))||(U=j.tokenizer.hr(c))||(U=j.tokenizer.blockquote(c))||(U=j.tokenizer.list(c))||(U=j.tokenizer.html(c)))return c=c.substring(U.raw.length),s.push(U),"continue";if(U=j.tokenizer.def(c))return c=c.substring(U.raw.length),J=s[s.length-1],J&&(J.type==="paragraph"||J.type==="text")?(J.raw+=`
`+U.raw,J.text+=`
`+U.raw,j.inlineQueue[j.inlineQueue.length-1].src=J.text):j.tokens.links[U.tag]||(j.tokens.links[U.tag]={href:U.href,title:U.title}),"continue";if((U=j.tokenizer.table(c))||(U=j.tokenizer.lheading(c)))return c=c.substring(U.raw.length),s.push(U),"continue";if(z=c,j.options.extensions&&j.options.extensions.startBlock){var lA=1/0,YA=c.slice(1),b;j.options.extensions.startBlock.forEach(function(Z){b=Z.call({lexer:this},YA),typeof b=="number"&&b>=0&&(lA=Math.min(lA,b))}),lA<1/0&&lA>=0&&(z=c.substring(0,lA+1))}if(j.state.top&&(U=j.tokenizer.paragraph(z)))return J=s[s.length-1],S&&J.type==="paragraph"?(J.raw+=`
`+U.raw,J.text+=`
`+U.text,j.inlineQueue.pop(),j.inlineQueue[j.inlineQueue.length-1].src=J.text):s.push(U),S=z.length!==c.length,c=c.substring(U.raw.length),"continue";if(U=j.tokenizer.text(c))return c=c.substring(U.raw.length),J=s[s.length-1],J&&J.type==="text"?(J.raw+=`
`+U.raw,J.text+=`
`+U.text,j.inlineQueue.pop(),j.inlineQueue[j.inlineQueue.length-1].src=J.text):s.push(U),"continue";if(c){var sA="Infinite loop on byte: "+c.charCodeAt(0);if(j.options.silent)return console.error(sA),"break";throw new Error(sA)}},j=this;c;){var DA=K();if(DA==="break")break}return this.state.top=!0,s},r.prototype.inline=function(c,s){return s===void 0&&(s=[]),this.inlineQueue.push({src:c,tokens:s}),s},r.prototype.inlineTokens=function(c,s){var o=this;s===void 0&&(s=[]);var U,J,z,S=c,K,j,DA;if(this.tokens.links){var lA=Object.keys(this.tokens.links);if(lA.length>0)for(;(K=this.tokenizer.rules.inline.reflinkSearch.exec(S))!=null;)lA.includes(K[0].slice(K[0].lastIndexOf("[")+1,-1))&&(S=S.slice(0,K.index)+"["+"a".repeat(K[0].length-2)+"]"+S.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(K=this.tokenizer.rules.inline.blockSkip.exec(S))!=null;)S=S.slice(0,K.index)+"["+"a".repeat(K[0].length-2)+"]"+S.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(K=this.tokenizer.rules.inline.escapedEmSt.exec(S))!=null;)S=S.slice(0,K.index+K[0].length-2)+"++"+S.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(var YA=function(){if(j||(DA=""),j=!1,b.options.extensions&&b.options.extensions.inline&&b.options.extensions.inline.some(function(KB){return(U=KB.call({lexer:o},c,s))?(c=c.substring(U.raw.length),s.push(U),!0):!1}))return"continue";if(U=b.tokenizer.escape(c))return c=c.substring(U.raw.length),s.push(U),"continue";if(U=b.tokenizer.tag(c))return c=c.substring(U.raw.length),J=s[s.length-1],J&&U.type==="text"&&J.type==="text"?(J.raw+=U.raw,J.text+=U.text):s.push(U),"continue";if(U=b.tokenizer.link(c))return c=c.substring(U.raw.length),s.push(U),"continue";if(U=b.tokenizer.reflink(c,b.tokens.links))return c=c.substring(U.raw.length),J=s[s.length-1],J&&U.type==="text"&&J.type==="text"?(J.raw+=U.raw,J.text+=U.text):s.push(U),"continue";if((U=b.tokenizer.emStrong(c,S,DA))||(U=b.tokenizer.codespan(c))||(U=b.tokenizer.br(c))||(U=b.tokenizer.del(c))||(U=b.tokenizer.autolink(c,JA))||!b.state.inLink&&(U=b.tokenizer.url(c,JA)))return c=c.substring(U.raw.length),s.push(U),"continue";if(z=c,b.options.extensions&&b.options.extensions.startInline){var Z=1/0,MA=c.slice(1),aA;b.options.extensions.startInline.forEach(function(KB){aA=KB.call({lexer:this},MA),typeof aA=="number"&&aA>=0&&(Z=Math.min(Z,aA))}),Z<1/0&&Z>=0&&(z=c.substring(0,Z+1))}if(U=b.tokenizer.inlineText(z,nA))return c=c.substring(U.raw.length),U.raw.slice(-1)!=="_"&&(DA=U.raw.slice(-1)),j=!0,J=s[s.length-1],J&&J.type==="text"?(J.raw+=U.raw,J.text+=U.text):s.push(U),"continue";if(c){var PA="Infinite loop on byte: "+c.charCodeAt(0);if(b.options.silent)return console.error(PA),"break";throw new Error(PA)}},b=this;c;){var sA=YA();if(sA==="break")break}return s},r}(),fA=function(){function r(c){this.options=c||M}return r.prototype.code=function(c,s,o){var U=(s||"").match(/\S*/)[0];if(this.options.highlight){var J=this.options.highlight(c,U);J!=null&&J!==c&&(o=!0,c=J)}return c=c.replace(/\n$/,"")+`
`,U?'<pre><code class="'+this.options.langPrefix+CA(U)+'">'+(o?c:CA(c,!0))+`</code></pre>
`:"<pre><code>"+(o?c:CA(c,!0))+`</code></pre>
`},r.prototype.blockquote=function(c){return`<blockquote>
`.concat(c,`</blockquote>
`)},r.prototype.html=function(c,s){return c},r.prototype.heading=function(c,s,o,U){if(this.options.headerIds){var J=this.options.headerPrefix+U.slug(o);return"<h".concat(s,' id="').concat(J,'">').concat(c,"</h").concat(s,`>
`)}return"<h".concat(s,">").concat(c,"</h").concat(s,`>
`)},r.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},r.prototype.list=function(c,s,o){var U=s?"ol":"ul",J=s&&o!==1?' start="'+o+'"':"";return"<"+U+J+`>
`+c+"</"+U+`>
`},r.prototype.listitem=function(c){return"<li>".concat(c,`</li>
`)},r.prototype.checkbox=function(c){return"<input "+(c?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},r.prototype.paragraph=function(c){return"<p>".concat(c,`</p>
`)},r.prototype.table=function(c,s){return s&&(s="<tbody>".concat(s,"</tbody>")),`<table>
<thead>
`+c+`</thead>
`+s+`</table>
`},r.prototype.tablerow=function(c){return`<tr>
`.concat(c,`</tr>
`)},r.prototype.tablecell=function(c,s){var o=s.header?"th":"td",U=s.align?"<".concat(o,' align="').concat(s.align,'">'):"<".concat(o,">");return U+c+"</".concat(o,`>
`)},r.prototype.strong=function(c){return"<strong>".concat(c,"</strong>")},r.prototype.em=function(c){return"<em>".concat(c,"</em>")},r.prototype.codespan=function(c){return"<code>".concat(c,"</code>")},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(c){return"<del>".concat(c,"</del>")},r.prototype.link=function(c,s,o){if(c=rA(this.options.sanitize,this.options.baseUrl,c),c===null)return o;var U='<a href="'+c+'"';return s&&(U+=' title="'+s+'"'),U+=">"+o+"</a>",U},r.prototype.image=function(c,s,o){if(c=rA(this.options.sanitize,this.options.baseUrl,c),c===null)return o;var U='<img src="'.concat(c,'" alt="').concat(o,'"');return s&&(U+=' title="'.concat(s,'"')),U+=this.options.xhtml?"/>":">",U},r.prototype.text=function(c){return c},r}(),G=function(){function r(){}return r.prototype.strong=function(c){return c},r.prototype.em=function(c){return c},r.prototype.codespan=function(c){return c},r.prototype.del=function(c){return c},r.prototype.html=function(c){return c},r.prototype.text=function(c){return c},r.prototype.link=function(c,s,o){return""+o},r.prototype.image=function(c,s,o){return""+o},r.prototype.br=function(){return""},r}(),Y=function(){function r(){this.seen={}}return r.prototype.serialize=function(c){return c.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},r.prototype.getNextSafeSlug=function(c,s){var o=c,U=0;if(this.seen.hasOwnProperty(o)){U=this.seen[c];do U++,o=c+"-"+U;while(this.seen.hasOwnProperty(o))}return s||(this.seen[c]=U,this.seen[o]=0),o},r.prototype.slug=function(c,s){s===void 0&&(s={});var o=this.serialize(c);return this.getNextSafeSlug(o,s.dryrun)},r}(),L=function(){function r(c){this.options=c||M,this.options.renderer=this.options.renderer||new fA,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new G,this.slugger=new Y}return r.parse=function(c,s){var o=new r(s);return o.parse(c)},r.parseInline=function(c,s){var o=new r(s);return o.parseInline(c)},r.prototype.parse=function(c,s){s===void 0&&(s=!0);var o="",U,J,z,S,K,j,DA,lA,YA,b,sA,Z,MA,aA,PA,KB,XQ,lB,lQ,MQ=c.length;for(U=0;U<MQ;U++){if(b=c[U],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[b.type]&&(lQ=this.options.extensions.renderers[b.type].call({parser:this},b),lQ!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(b.type))){o+=lQ||"";continue}switch(b.type){case"space":continue;case"hr":{o+=this.renderer.hr();continue}case"heading":{o+=this.renderer.heading(this.parseInline(b.tokens),b.depth,oA(this.parseInline(b.tokens,this.textRenderer)),this.slugger);continue}case"code":{o+=this.renderer.code(b.text,b.lang,b.escaped);continue}case"table":{for(lA="",DA="",S=b.header.length,J=0;J<S;J++)DA+=this.renderer.tablecell(this.parseInline(b.header[J].tokens),{header:!0,align:b.align[J]});for(lA+=this.renderer.tablerow(DA),YA="",S=b.rows.length,J=0;J<S;J++){for(j=b.rows[J],DA="",K=j.length,z=0;z<K;z++)DA+=this.renderer.tablecell(this.parseInline(j[z].tokens),{header:!1,align:b.align[z]});YA+=this.renderer.tablerow(DA)}o+=this.renderer.table(lA,YA);continue}case"blockquote":{YA=this.parse(b.tokens),o+=this.renderer.blockquote(YA);continue}case"list":{for(sA=b.ordered,Z=b.start,MA=b.loose,S=b.items.length,YA="",J=0;J<S;J++)PA=b.items[J],KB=PA.checked,XQ=PA.task,aA="",PA.task&&(lB=this.renderer.checkbox(KB),MA?PA.tokens.length>0&&PA.tokens[0].type==="paragraph"?(PA.tokens[0].text=lB+" "+PA.tokens[0].text,PA.tokens[0].tokens&&PA.tokens[0].tokens.length>0&&PA.tokens[0].tokens[0].type==="text"&&(PA.tokens[0].tokens[0].text=lB+" "+PA.tokens[0].tokens[0].text)):PA.tokens.unshift({type:"text",text:lB}):aA+=lB),aA+=this.parse(PA.tokens,MA),YA+=this.renderer.listitem(aA,XQ,KB);o+=this.renderer.list(YA,sA,Z);continue}case"html":{o+=this.renderer.html(b.text,b.block);continue}case"paragraph":{o+=this.renderer.paragraph(this.parseInline(b.tokens));continue}case"text":{for(YA=b.tokens?this.parseInline(b.tokens):b.text;U+1<MQ&&c[U+1].type==="text";)b=c[++U],YA+=`
`+(b.tokens?this.parseInline(b.tokens):b.text);o+=s?this.renderer.paragraph(YA):YA;continue}default:{var _Q='Token with "'+b.type+'" type was not found.';if(this.options.silent){console.error(_Q);return}else throw new Error(_Q)}}}return o},r.prototype.parseInline=function(c,s){s=s||this.renderer;var o="",U,J,z,S=c.length;for(U=0;U<S;U++){if(J=c[U],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[J.type]&&(z=this.options.extensions.renderers[J.type].call({parser:this},J),z!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(J.type))){o+=z||"";continue}switch(J.type){case"escape":{o+=s.text(J.text);break}case"html":{o+=s.html(J.text);break}case"link":{o+=s.link(J.href,J.title,this.parseInline(J.tokens,s));break}case"image":{o+=s.image(J.href,J.title,J.text);break}case"strong":{o+=s.strong(this.parseInline(J.tokens,s));break}case"em":{o+=s.em(this.parseInline(J.tokens,s));break}case"codespan":{o+=s.codespan(J.text);break}case"br":{o+=s.br();break}case"del":{o+=s.del(this.parseInline(J.tokens,s));break}case"text":{o+=s.text(J.text);break}default:{var K='Token with "'+J.type+'" type was not found.';if(this.options.silent){console.error(K);return}else throw new Error(K)}}}return o},r}(),y=function(){function r(c){this.options=c||M}return r.prototype.preprocess=function(c){return c},r.prototype.postprocess=function(c){return c},r}();I(y,"passThroughHooks",new Set(["preprocess","postprocess"]));function O(r,c,s){return function(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,r){var U="<p>An error occurred:</p><pre>"+CA(o.message+"",!0)+"</pre>";if(c)return Promise.resolve(U);if(s){s(null,U);return}return U}if(c)return Promise.reject(o);if(s){s(o);return}throw o}}function v(r,c){return function(s,o,U){typeof o=="function"&&(U=o,o=null);var J=Q({},o);o=Q(Q({},H.defaults),J);var z=O(o.silent,o.async,U);if(typeof s>"u"||s===null)return z(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return z(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(IB(o,U),o.hooks&&(o.hooks.options=o),U){var S=o.highlight,K;try{o.hooks&&(s=o.hooks.preprocess(s)),K=r(s,o)}catch(b){return z(b)}var j=function(b){var sA;if(!b)try{o.walkTokens&&H.walkTokens(K,o.walkTokens),sA=c(K,o),o.hooks&&(sA=o.hooks.postprocess(sA))}catch(Z){b=Z}return o.highlight=S,b?z(b):U(null,sA)};if(!S||S.length<3||(delete o.highlight,!K.length))return j();var DA=0;H.walkTokens(K,function(b){b.type==="code"&&(DA++,setTimeout(function(){S(b.text,b.lang,function(sA,Z){if(sA)return j(sA);Z!=null&&Z!==b.text&&(b.text=Z,b.escaped=!0),DA--,DA===0&&j()})},0))}),DA===0&&j();return}if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(s):s).then(function(b){return r(b,o)}).then(function(b){return o.walkTokens?Promise.all(H.walkTokens(b,o.walkTokens)).then(function(){return b}):b}).then(function(b){return c(b,o)}).then(function(b){return o.hooks?o.hooks.postprocess(b):b}).catch(z);try{o.hooks&&(s=o.hooks.preprocess(s));var lA=r(s,o);o.walkTokens&&H.walkTokens(lA,o.walkTokens);var YA=c(lA,o);return o.hooks&&(YA=o.hooks.postprocess(YA)),YA}catch(b){return z(b)}}}function H(r,c,s){return v(mA.lex,L.parse)(r,c,s)}H.options=H.setOptions=function(r){return H.defaults=Q(Q({},H.defaults),r),N(H.defaults),H},H.getDefaults=a,H.defaults=M,H.use=function(){for(var r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];var s=H.defaults.extensions||{renderers:{},childTokens:{}};r.forEach(function(o){var U=Q({},o);if(U.async=H.defaults.async||U.async||!1,o.extensions&&(o.extensions.forEach(function(b){if(!b.name)throw new Error("extension name required");if(b.renderer){var sA=s.renderers[b.name];sA?s.renderers[b.name]=function(){for(var Z=[],MA=0;MA<arguments.length;MA++)Z[MA]=arguments[MA];var aA=b.renderer.apply(this,Z);return aA===!1&&(aA=sA.apply(this,Z)),aA}:s.renderers[b.name]=b.renderer}if(b.tokenizer){if(!b.level||b.level!=="block"&&b.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");s[b.level]?s[b.level].unshift(b.tokenizer):s[b.level]=[b.tokenizer],b.start&&(b.level==="block"?s.startBlock?s.startBlock.push(b.start):s.startBlock=[b.start]:b.level==="inline"&&(s.startInline?s.startInline.push(b.start):s.startInline=[b.start]))}b.childTokens&&(s.childTokens[b.name]=b.childTokens)}),U.extensions=s),o.renderer){var J=H.defaults.renderer||new fA,z=function(b){var sA=J[b];J[b]=function(){for(var Z=[],MA=0;MA<arguments.length;MA++)Z[MA]=arguments[MA];var aA=o.renderer[b].apply(J,Z);return aA===!1&&(aA=sA.apply(J,Z)),aA}};for(var S in o.renderer)z(S);U.renderer=J}if(o.tokenizer){var K=H.defaults.tokenizer||new W,j=function(b){var sA=K[b];K[b]=function(){for(var Z=[],MA=0;MA<arguments.length;MA++)Z[MA]=arguments[MA];var aA=o.tokenizer[b].apply(K,Z);return aA===!1&&(aA=sA.apply(K,Z)),aA}};for(var S in o.tokenizer)j(S);U.tokenizer=K}if(o.hooks){var DA=H.defaults.hooks||new y,lA=function(b){var sA=DA[b];y.passThroughHooks.has(b)?DA[b]=function(Z){if(H.defaults.async)return Promise.resolve(o.hooks[b].call(DA,Z)).then(function(aA){return sA.call(DA,aA)});var MA=o.hooks[b].call(DA,Z);return sA.call(DA,MA)}:DA[b]=function(){for(var Z=[],MA=0;MA<arguments.length;MA++)Z[MA]=arguments[MA];var aA=o.hooks[b].apply(DA,Z);return aA===!1&&(aA=sA.apply(DA,Z)),aA}};for(var S in o.hooks)lA(S);U.hooks=DA}if(o.walkTokens){var YA=H.defaults.walkTokens;U.walkTokens=function(b){var sA=[];return sA.push(o.walkTokens.call(this,b)),YA&&(sA=sA.concat(YA.call(this,b))),sA}}H.setOptions(U)})},H.walkTokens=function(r,c){for(var s=[],o=function(S){switch(s=s.concat(c.call(H,S)),S.type){case"table":{for(var K=0,j=S.header;K<j.length;K++){var DA=j[K];s=s.concat(H.walkTokens(DA.tokens,c))}for(var lA=0,YA=S.rows;lA<YA.length;lA++)for(var b=YA[lA],sA=0,Z=b;sA<Z.length;sA++){var DA=Z[sA];s=s.concat(H.walkTokens(DA.tokens,c))}break}case"list":{s=s.concat(H.walkTokens(S.items,c));break}default:H.defaults.extensions&&H.defaults.extensions.childTokens&&H.defaults.extensions.childTokens[S.type]?H.defaults.extensions.childTokens[S.type].forEach(function(MA){s=s.concat(H.walkTokens(S[MA],c))}):S.tokens&&(s=s.concat(H.walkTokens(S.tokens,c)))}},U=0,J=r;U<J.length;U++){var z=J[U];o(z)}return s},H.parseInline=v(mA.lexInline,L.parseInline),H.Parser=L,H.parser=L.parse,H.Renderer=fA,H.TextRenderer=G,H.Lexer=mA,H.lexer=mA.lex,H.Tokenizer=W,H.Slugger=Y,H.Hooks=y,H.parse=H,H.options,H.setOptions,H.use,H.walkTokens,H.parseInline,L.parse,mA.lex;function P(r,c){return r?Math.max(16,c):c}function BA(r,c){return{read:r.read!==void 0?r.read:!c}}function k(r,c,s){var o,U=s.images||[],J=r[c].text||"",z=s.text||"";r[c].text=J+((J&&z?" ":"")+z),r[c].images=n(n([],r[c].images||[],!0),U,!0),r[c].links=n(n([],r[c].links||[],!0),s.links||[],!0),r[c].hasLikes=r[c].hasLikes||s.hasLikes,((o=s.ctx)===null||o===void 0?void 0:o.format)==="markdown"&&(r[c].ctx?r[c].ctx.format="markdown":r[c].ctx={format:"markdown"})}function _(r,c){var s,o,U=!0,J=!1,z=null,S=!1,K=r.reqId||((s=r==null?void 0:r.ctx)===null||s===void 0?void 0:s.reqId),j=(o=r==null?void 0:r.ctx)===null||o===void 0?void 0:o.responseId;if(r.type==="response"&&r.name==="text"){var DA=c.findIndex(function(b){var sA;return b.name==="loading"&&K&&(((sA=b==null?void 0:b.ctx)===null||sA===void 0?void 0:sA.reqId)||b.reqId)===K});if(DA>-1)z=DA,c[z]=Q({},r),J=!0,U=!1;else{var lA=c.findIndex(function(b){var sA;return b.type==="response"&&j&&((sA=b==null?void 0:b.ctx)===null||sA===void 0?void 0:sA.responseId)===j}),YA=lA!==-1;YA&&(z=lA,S=!0,J=!1,U=!1,k(c,z,r))}}return U?(c.push(Q({},r)),{isNew:U,msgInd:c.length-1,replaceLoader:J,updateResponse:S}):{isNew:U,updateResponse:S,replaceLoader:J,msgInd:z}}function QA(r){return(r||[]).filter(function(c){return c&&c.src?c.src.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i):null})}function EA(r){var c=/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;return!!r.match(c)}function FA(r){return EA(r.href)?'<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z" fill="#919191"/></svg>':`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.22602 9.27842L5.17192 11.3326C5.17192 11.3326 5.17192 11.3326 5.17187 11.3326C5.17187 11.3326 5.17187 11.3327 5.17183 11.3327C4.32239 12.1821 2.94018 12.1822 2.09065 11.3327C1.67911 10.9211 1.45252 10.374 1.45252 9.79203C1.45252 9.21015 1.67911 8.66309 2.09051 8.25154C2.09056 8.25149 2.09061 8.25144 2.09065 8.25139L4.14475 6.19725C4.42833 5.91362 4.42833 5.45375 4.1447 5.17017C3.86112 4.88659 3.40126 4.88659 3.11763 5.17017L1.06353 7.22432C1.06339 7.22447 1.06324 7.22466 1.0631 7.2248C0.377557 7.91058 0 8.82233 0 9.79203C0 10.762 0.377702 11.6739 1.06358 12.3597C1.77154 13.0676 2.70139 13.4216 3.63129 13.4216C4.56119 13.4216 5.49109 13.0676 6.19895 12.3597C6.199 12.3597 6.199 12.3596 6.199 12.3596L8.25309 10.3055C8.53667 10.0219 8.53667 9.56205 8.25305 9.27842C7.96951 8.99484 7.5097 8.99484 7.22602 9.27842Z" fill="#919191"/>
    <path d="M13.4249 3.62955C13.4249 2.65961 13.0472 1.74772 12.3613 1.06184C10.9455 -0.353972 8.64171 -0.353923 7.22595 1.06184C7.2259 1.06194 7.2258 1.06199 7.22576 1.06209L5.17171 3.11609C4.88808 3.39967 4.88808 3.85958 5.17171 4.14316C5.31357 4.28502 5.49939 4.35591 5.68527 4.35591C5.87109 4.35591 6.05701 4.28497 6.19878 4.14316L8.25283 2.08916C8.25288 2.08906 8.25297 2.08901 8.25307 2.08892C9.1025 1.23949 10.4847 1.23944 11.3342 2.08892C11.7457 2.50046 11.9724 3.04762 11.9724 3.62955C11.9724 4.21143 11.7458 4.75849 11.3344 5.17004L11.3342 5.17018L9.28014 7.22433C8.99656 7.50791 8.99656 7.96778 9.28019 8.2514C9.42201 8.39322 9.60788 8.46415 9.7937 8.46415C9.97958 8.46415 10.1655 8.39322 10.3073 8.2514L12.3614 6.19726C12.3615 6.19711 12.3617 6.19692 12.3618 6.19677C13.0473 5.51099 13.4249 4.59925 13.4249 3.62955Z" fill="#919191"/>
    <path d="M4.14491 9.27836C4.28672 9.42018 4.4726 9.49111 4.65842 9.49111C4.8443 9.49111 5.03017 9.42018 5.17198 9.27836L9.28028 5.17007C9.56391 4.88649 9.56391 4.42663 9.28028 4.143C8.9967 3.85942 8.53683 3.85942 8.2532 4.143L4.14491 8.25124C3.86128 8.53492 3.86128 8.99479 4.14491 9.27836Z" fill="#919191"/>
</svg>`}function kA(r){return r.replace(/send-text/gi,"data-alan-btn-send-text").replace(/call-project-api/gi,"data-alan-btn-call-project-api").replace(/project-api-param/gi,"data-alan-btn-project-api-param")}function TA(r,c,s){var o=r.closest("[data-alan-btn-send-text]");if(o){var U=o.getAttribute("data-alan-btn-send-text");if(U){s(U);return}}var J=r.closest("[data-alan-btn-call-project-api]");if(J){var z=J.getAttribute("data-alan-btn-call-project-api"),S=null;try{S=J.getAttribute("data-alan-btn-project-api-param"),S=JSON.parse(S)}catch{console.log("Alan: unable to parse params for calling project api method")}if(z){c.callProjectApi(z,S);return}}}(function(r){var c="alan-version.1.8.53";c=c.replace("alan-version.",""),window.alanBtn&&console.warn("Alan: the Alan Button source code has already added (v."+c+")");var s="Alan voice assistant",o=null,U,J=null,z,S=!1;try{localStorage.getItem("test"),S=!0}catch{S=!1}var K=!1;try{sessionStorage.getItem("test"),K=!0}catch{K=!1}function j(Z){return Z?"1":"0"}function DA(){return`
        Debug Info:
        alanBtn: v.`.concat(c,`
        alanSDK: v.`).concat(window.alanSDKVersion,`
        projectId: `).concat(o||"unknown",`
        deviceId: `).concat(lA(),`
        navigator: 
        getUserMedia: `).concat(j(navigator.getUserMedia),`, 
        mediaDevices: `).concat(j(navigator.mediaDevices),`, 
        mediaDevices.getUserMedia: `).concat(j(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),`,
        webkitGUM: `).concat(j(navigator.webkitGetUserMedia),`,
        mozGUM: `).concat(j(navigator.mozGetUserMedia),`,
        msGUM: `).concat(j(navigator.msGetUserMedia),`,
        window:
        AudioContext: `).concat(j(window.AudioContext),`,
        webkitAC: `).concat(j(window.webkitAudioContext),`,
        mozAC: `).concat(j(window.mozAudioContext),`,
        userAgent: `).concat(navigator.userAgent,`
        `)}function lA(){if(o){var Z="alan-btn-uuid-"+o;return S&&(U=localStorage.getItem(Z)),U||(U=YA(),S&&localStorage.setItem(Z,U)),U}}function YA(){function Z(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return Z()+Z()+"-"+Z()+"-"+Z()+"-"+Z()+"-"+Z()+Z()+Z()}var b;(function(Z){Z.Request="request",Z.Response="response"})(b||(b={}));function sA(Z){Z=Z||{};var MA=!0,aA=!1,PA=!1,KB=!0,XQ=!1,lB=!1,lQ=!1,MQ=!1,_Q=!0,rg=null,cB=!0,hB=!1,uE=!0,GQ=[],NB=null,JE=null,eQ=null,LQ=[],NF=400,uF=700,JF=250,rQ=40,Ma=1.25,dg=67,VI=50,$Q=34,bF=6,bE=200,kE=25,Ga=15,fg=Gw(),jB;if(Z.mode==="tutor"?(jB="tutor",XQ=!0):Z.mode==="demo"?jB="demo":jB="component",console.log("Alan: v."+c),window.tutorProject&&!wg()&&z){if(o===Z.key)return z;throw new Error("The Alan Button instance has already been created. There cannot be two Alan Button instances created at the same time connected to the different projects.")}z={version:c,setVisualState:function(E){MA||window.tutorProject&&window.tutorProject.setVisual(E)},callProjectApi:function(E,i,l){var u="script::";if(!MA){if(!E)throw new Error("Function name for callProjectApi must be provided");window.tutorProject&&(E.indexOf(u)===0?window.tutorProject.call(E,i,l):window.tutorProject.call(u+E,i,l))}},playText:function(E){MA||window.tutorProject&&window.tutorProject.call("play",{text:E})},playCommand:function(E){MA||dA.playCommand({data:E})},activate:function(){return OE({activate:!0})},deactivate:function(){HC()},isActive:function(){return BQ},sendText:function(E){ow(E)},textChat:{setAudioOutputEnabled:function(E){E===!0?Uw(!0):xC(!0)},isAudioOutputEnabled:function(){return fg}},callClientApi:function(E,i,l){console.error(`The "callClientApi" method is deprecated. Please use the "callProjectApi: instead.

See more info here: https://alan.app/docs/client-api/methods/common-api/?highlight=callprojectapi#callprojectapi`),!MA&&window.tutorProject&&window.tutorProject.call(E,i,l)},setAuthData:function(E){console.error(`The "setAuthData" method is deprecated. Please use the "authData" property when you create the Alan Button.

See more info here:  https://alan.app/docs/server-api/sending-data/authdata/?highlight=authdata`),!MA&&window.tutorProject&&(window.tutorProject.close(),window.tutorProject=window.alan.project(Z.key,ID(E),Z.host),window.tutorProject.on("connectStatus",xE),window.tutorProject.on("options",Ng))},setOptions:function(E){Ng(E)},setPreviewState:function(E){MB(E)},remove:function(){dA.stop(),window.tutorProject.close(),window.tutorProject.off("scripts",iw),window.tutorProject.off("text",tw),window.tutorProject.off("parsed",QE),dA.off("command",Dw),dA.off("afterText",ew),$.innerHTML="",z=null,wg()||(window.tutorProject=null)},stop:function(){dA.stop()},updateButtonState:function(E){xE(E)},sendEvent:ZF},document.addEventListener("click",kF);function kF(){dA.resumeAudioCtx(),document.removeEventListener("click",kF)}function ZF(E,i){var l=i?{name:E,value:i}:{name:E};uB(l)}function uB(E){window.tutorProject?window.tutorProject.call("clientEvent",E):setTimeout(function(){return uB(E)},3e3)}Z.host&&""+Z.host,(Z.position==="absolute"||Z.pinned)&&(XQ=!0),Z.position==="absolute"&&(lB=!0);var ra={default:"ONLINE",offline:"OFFLINE",disconnected:"CONNECTING",listening:"LISTEN",understood:"PROCESS",intermediate:"PROCESS",speaking:"REPLY",permissionDenied:"NO_PERMISSION",noVoiceSupport:"NO_VOICE_SUPPORT",notSecureOrigin:"INSECURE_ORIGIN"},yQ="default",dQ="listening",pQ="speaking",Ag="intermediate",Bg="understood",HQ="disconnected",Rg="offline",mF="lowVolume",SQ="permissionDenied",Qg="noVoiceSupport",WQ="notSecureOrigin",ZE="Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone",XF="Your browser doesn’t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. "+DA(),OI='Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "'+window.location.protocol+'" protocol and "'+window.location.hostname+'" hostname',da="Low volume level",fa="You're offline",FQ=null,Ra="browser-does-not-support-voice-input",Ya="microphone-access-blocked",ha="preview-mode",Na="btn-is-disabled",ua="no-alan-audio-instance-was-provided",AQ=HQ,GC=null,rC=!1,BQ=!1,QQ=!1,gg=!1,dC=!1,TI=!0,LF=3e4,Eg,TQ=[0,0],mE=!1,xI=!1,XE=!1,Yg=null,vI=0,zI,KI=300,jI=0,PI=0,Ja=KI+"ms",fC=!0;function yF(){Eg=Cw(function(){BQ&&(rC?Eg():(dA.stop(),lQ=!0))},LF)}yF();var LE="",pF="",HF="";Bw()||(LE="alan-pulsating 2s ease-in-out infinite",pF="alan-mic-pulsating 1.4s ease-in-out infinite",HF="alan-triangle-mic-pulsating 1.2s ease-in-out infinite");var ba="alan-text-chat-pulsating 2s ease-in-out infinite",ka="alan-gradient 3s ease-in-out infinite",Za="disconnected-loader-animation 2s linear infinite",dA=window.alanAudio,$=Z.rootEl||document.createElement("div"),SF=document.getElementsByTagName("body")[0],cA=document.createElement("div"),ma=`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.90233 10.4566C7.52988 9.72656 6.63602 9.42857 5.90602 9.78613C4.95254 10.2629 4.02887 11.0525 3.32866 11.708C2.71784 12.2593 2.68803 13.2127 3.23926 13.8086C3.53722 14.1215 3.93946 14.2854 4.34171 14.2854C4.69926 14.2854 5.05681 14.1513 5.35477 13.898C5.65273 13.6298 6.54661 12.7956 7.24682 12.4529C7.97682 12.0805 8.27478 11.1866 7.91723 10.4566H7.90233Z" />
        <path d="M32.1414 11.4398C28.1636 7.92391 23.0983 5.9872 17.884 5.9872C15.4258 5.9872 13.0273 6.40437 10.733 7.22376C10.6883 7.23866 10.6436 7.28335 10.5989 7.31315L8.40888 4.97415C7.84276 4.37823 6.9042 4.33355 6.30828 4.89967C5.71236 5.4658 5.68256 6.40434 6.23379 7.00026L27.091 29.3472C27.3889 29.6601 27.7763 29.824 28.1785 29.824C28.5361 29.824 28.9085 29.6899 29.1916 29.4217C29.7875 28.8556 29.8173 27.917 29.2661 27.3211L18.2714 15.5368C21.5638 15.6411 24.6328 17.0266 26.9718 19.4848C27.2698 19.7976 27.6571 19.9466 28.0444 19.9466C28.4169 19.9466 28.7893 19.8127 29.0724 19.5296C29.6683 18.9635 29.6981 18.0248 29.132 17.4288C26.1375 14.2705 22.1299 12.5424 17.884 12.5424C17.1391 12.5424 16.3942 12.6019 15.6642 12.7062C15.6642 12.7062 15.6493 12.7062 15.6344 12.7062L12.8187 9.68189C14.4575 9.20515 16.1558 8.9519 17.884 8.9519C22.3683 8.9519 26.7334 10.6205 30.1749 13.6597C30.4579 13.913 30.8155 14.0322 31.1581 14.0322C31.5753 14.0322 31.9775 13.8682 32.2755 13.5256C32.8267 12.9148 32.7671 11.9613 32.1414 11.425V11.4398Z" />
        <path d="M12.2079 15.1643C11.7908 14.4492 10.882 14.2109 10.1669 14.628C8.94526 15.3282 7.8279 16.2072 6.82973 17.2203C6.24871 17.8013 6.26361 18.7548 6.82973 19.3209C7.12769 19.6039 7.50014 19.7529 7.87259 19.7529C8.24504 19.7529 8.64731 19.6039 8.93037 19.306C9.74976 18.4717 10.6585 17.7715 11.6418 17.1905C12.3569 16.7733 12.5953 15.8645 12.1781 15.1494L12.2079 15.1643Z" />
        <path d="M16.7666 20.3637C16.5282 19.5741 15.694 19.1421 14.9044 19.3805C13.355 19.8572 11.8354 21.2874 11.0756 22.0919C10.5094 22.6878 10.5243 23.6263 11.1352 24.1924C11.4182 24.4605 11.7907 24.6097 12.1631 24.6097C12.5505 24.6097 12.9527 24.4607 13.2358 24.1478C14.1595 23.1795 15.1576 22.4346 15.7833 22.2409C16.5729 22.0025 17.005 21.1682 16.7666 20.3786V20.3637Z" />
        <path d="M17.7499 29.7644C18.7785 29.7644 19.6122 28.9307 19.6122 27.9021C19.6122 26.8737 18.7785 26.0399 17.7499 26.0399C16.7214 26.0399 15.8877 26.8737 15.8877 27.9021C15.8877 28.9307 16.7214 29.7644 17.7499 29.7644Z"/>
        </svg>
        `,Xa=`
        <svg class="alan-btn_disconnected-chat-icon-rotate" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M24.0579 3.47502C18.5874 0.922942 12.1534 1.67973 7.4383 5.76748C2.7232 9.85523 1.24337 15.2725 2.34798 20.767C3.45259 26.2615 7.87342 31.0097 13.2994 32.4594C19.715 34.174 26.6107 31.7302 30.2577 26.2615C26.9893 30.6213 20.7089 33.242 15.1228 32.2771C9.62181 31.3275 4.71002 26.606 3.45259 21.1573C2.11284 15.3541 3.59462 10.949 8.37598 6.57398C13.1573 2.19898 22.9638 1.8344 28.2519 8.2146C29.2614 9.43264 30.6224 11.6781 30.9871 14.4125C31.1694 15.5063 31.1694 15.6886 31.3518 16.6C31.3518 16.9646 31.7165 17.3292 32.0812 17.3292C32.6282 17.3292 33.0612 16.918 32.9929 16.2354C32.4459 10.7667 29.0622 5.80967 24.0579 3.47502Z" fill="#B8B6B6"/>
        </svg>`,WF=`
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.0134 15.9238L8.98646 6.40981C7.82892 5.83162 6.75249 5.99963 6.17778 6.77248C5.89042 7.15832 5.61697 7.85122 5.94952 8.96241L8.09542 16.1092C8.39668 17.1138 8.39668 18.8797 8.09542 19.8843L5.94952 27.0311C5.61697 28.1423 5.88926 28.8363 6.17662 29.2222C6.51959 29.681 7.04564 29.9348 7.65743 29.9348C8.07109 29.9348 8.51834 29.8166 8.9853 29.5837L28.0134 20.0697C28.9635 19.5946 29.5093 18.838 29.5093 17.9968C29.5093 17.1555 28.9647 16.3989 28.0134 15.9238ZM8.27386 27.3486L10.3155 20.5494C10.4383 20.1403 10.5217 19.6606 10.575 19.1554H16.6868C17.3276 19.1554 17.8455 18.6375 17.8455 17.9968C17.8455 17.356 17.3276 16.8381 16.6868 16.8381H10.575C10.5217 16.3329 10.4395 15.8532 10.3155 15.4441L8.27386 8.64493L26.9775 17.9968L8.27386 27.3486Z" fill="#B8B6B6"/>
        </svg>`,La=`
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2623 24.0476C16.7915 24.0458 15.3814 23.4608 14.3414 22.4208C13.3014 21.3808 12.7164 19.9707 12.7147 18.5V10.7333C12.7147 9.26204 13.2992 7.85099 14.3395 6.81061C15.3799 5.77024 16.791 5.18576 18.2623 5.18576C19.7336 5.18576 21.1446 5.77024 22.185 6.81061C23.2254 7.85099 23.8099 9.26204 23.8099 10.7333V18.5C23.8081 19.9707 23.2231 21.3808 22.1831 22.4208C21.1431 23.4608 19.733 24.0458 18.2623 24.0476ZM18.2623 7.4048C17.3798 7.40576 16.5337 7.75676 15.9097 8.38078C15.2857 9.00479 14.9347 9.85086 14.9337 10.7333V18.5C14.9337 19.3828 15.2844 20.2294 15.9086 20.8536C16.5329 21.4778 17.3795 21.8285 18.2623 21.8285C19.1451 21.8285 19.9917 21.4778 20.6159 20.8536C21.2401 20.2294 21.5908 19.3828 21.5908 18.5V10.7333C21.5899 9.85086 21.2389 9.00479 20.6148 8.38078C19.9908 7.75676 19.1448 7.40576 18.2623 7.4048ZM28.2479 18.5C28.2479 18.2057 28.131 17.9235 27.923 17.7154C27.7149 17.5073 27.4327 17.3905 27.1384 17.3905C26.8441 17.3905 26.5619 17.5073 26.3539 17.7154C26.1458 17.9235 26.0289 18.2057 26.0289 18.5C26.0289 20.5598 25.2106 22.5353 23.7541 23.9918C22.2976 25.4483 20.3221 26.2666 18.2623 26.2666C16.2024 26.2666 14.227 25.4483 12.7704 23.9918C11.3139 22.5353 10.4956 20.5598 10.4956 18.5C10.4956 18.2057 10.3788 17.9235 10.1707 17.7154C9.9626 17.5073 9.68039 17.3905 9.38613 17.3905C9.09187 17.3905 8.80966 17.5073 8.60158 17.7154C8.39351 17.9235 8.27661 18.2057 8.27661 18.5C8.27661 21.1483 9.32867 23.6882 11.2013 25.5609C13.074 27.4336 15.6139 28.4856 18.2623 28.4856C20.9106 28.4856 23.4505 27.4336 25.3232 25.5609C27.1959 23.6882 28.2479 21.1483 28.2479 18.5ZM19.3718 30.7047V27.3761C19.3718 27.0818 19.2549 26.7996 19.0468 26.5916C18.8387 26.3835 18.5565 26.2666 18.2623 26.2666C17.968 26.2666 17.6858 26.3835 17.4777 26.5916C17.2696 26.7996 17.1528 27.0818 17.1528 27.3761V30.7047C17.1528 30.9989 17.2696 31.2811 17.4777 31.4892C17.6858 31.6973 17.968 31.8142 18.2623 31.8142C18.5565 31.8142 18.8387 31.6973 19.0468 31.4892C19.2549 31.2811 19.3718 30.9989 19.3718 30.7047Z" fill="#171717"/>
        </svg>
        <div class="alan-text-chat__animated-btn-bars">
            <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
            <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
        </div>`,VF=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9675 16.3602V18.6166C12.9692 20.0539 13.541 21.432 14.5574 22.4483C15.5738 23.4647 16.9518 24.0365 18.3892 24.0382C19.2643 24.0371 20.1175 23.8248 20.8804 23.4294L19.0569 21.8003C18.8389 21.846 18.6153 21.8695 18.3892 21.8695C17.5264 21.8695 16.699 21.5268 16.089 20.9168C15.4789 20.3067 15.1362 19.4793 15.1362 18.6166V18.2976L12.9675 16.3602ZM21.6421 16.7466V11.0263C21.6412 10.1638 21.2982 9.33696 20.6883 8.72712C20.0785 8.11727 19.2516 7.77424 18.3892 7.7733C17.5267 7.77424 16.6999 8.11727 16.09 8.72712C15.5048 9.31233 15.1653 10.0974 15.138 10.9219L13.2678 9.24713C13.5339 8.48102 13.9711 7.77698 14.5555 7.1926C15.5723 6.17585 16.9513 5.60464 18.3892 5.60464C19.8271 5.60464 21.2061 6.17585 22.2228 7.1926C23.2396 8.20935 23.8108 9.58837 23.8108 11.0263V18.6166C23.8108 18.6404 23.8106 18.6643 23.8102 18.6882L21.6421 16.7466ZM22.5782 24.9462C21.345 25.7623 19.89 26.2068 18.3892 26.2068C16.3761 26.2068 14.4455 25.4071 13.022 23.9837C11.5986 22.5602 10.7989 20.6296 10.7989 18.6166C10.7989 18.329 10.6847 18.0532 10.4813 17.8498C10.2779 17.6465 10.0021 17.5322 9.71457 17.5322C9.42699 17.5322 9.15118 17.6465 8.94783 17.8498C8.74448 18.0532 8.63024 18.329 8.63024 18.6166C8.63024 21.2048 9.65841 23.687 11.4886 25.5172C13.0613 27.0899 15.1156 28.0704 17.3048 28.3151V30.5441C17.3048 30.8317 17.4191 31.1075 17.6224 31.3109C17.8258 31.5142 18.1016 31.6285 18.3892 31.6285C18.6768 31.6285 18.9526 31.5142 19.1559 31.3109C19.3593 31.1075 19.4735 30.8317 19.4735 30.5441V28.3151C21.2027 28.1218 22.8477 27.4695 24.2378 26.4288L22.5782 24.9462ZM27.5342 22.0231L25.7589 20.4332C25.9042 19.8436 25.9794 19.2339 25.9794 18.6166C25.9794 18.329 26.0937 18.0532 26.297 17.8498C26.5004 17.6465 26.7762 17.5322 27.0638 17.5322C27.3514 17.5322 27.6272 17.6465 27.8305 17.8498C28.0339 18.0532 28.1481 18.329 28.1481 18.6166C28.1481 19.7909 27.9364 20.9434 27.5342 22.0231Z" fill="#B8B6B6"/>
        <path d="M8.18825 6.56812L31.2883 27.1759C31.8123 27.6433 31.8581 28.4471 31.3906 28.9711C30.9232 29.4951 30.1194 29.5409 29.5954 29.0735L6.49538 8.46573C5.97137 7.99826 5.92553 7.1945 6.39301 6.67049C6.86048 6.14648 7.66424 6.10065 8.18825 6.56812Z" fill="#B8B6B6"/>
        </svg>
        `,OF="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==",ya="data:image/png;base64,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",pa=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
`,Ha=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=
`,wB=document.createElement("div"),jg=0,iA=document.createElement("div"),Cg=document.createElement("div");Cg.id="alan-text-chat",iA.appendChild(Cg);var Pg=document.createElement("div");Pg.id="chat-notifications-bubble",Pg.classList.add("alan-btn__chat-notifications-bubble");var kB=document.createElement("img"),ZB=document.createElement("img"),rB=document.createElement("img"),mB=document.createElement("img"),yE=document.createElement("img"),RC=document.createElement("img"),YC=document.createElement("img"),hC=document.createElement("img"),NC=document.createElement("img"),uC=document.createElement("img"),JC=document.createElement("img"),bC=document.createElement("img"),kC=document.createElement("img"),ZC=document.createElement("img"),LA=document.createElement("div"),qA=document.createElement("div"),hg=document.createElement("img"),Ig=document.createElement("img"),qg=document.createElement("img"),_g=document.createElement("img"),yA=document.createElement("div"),pE=document.createElement("div"),TF=!1,xF=!1,qI=!0,Sa=new Audio("data:audio/mp4;base64,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");Sa.onerror=function(){};var _I=new Audio("data:audio/mp4;base64,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");_I.onerror=function(){TF=!0};var fQ=new Audio("data:audio/mp4;base64,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");fQ.onerror=function(){xF=!0},fQ.onended=function(){qI||setTimeout(function(){dA.skipExternalSounds(!1)},100)},fQ.onplay=function(){qI||dA.skipExternalSounds(!0)};var VQ=document.createElement("div"),RQ=document.createElement("div"),YQ=document.createElement("div"),hQ=document.createElement("div"),NQ=document.createElement("div"),XB=document.createElement("div"),LB=document.createElement("div"),eB,HE,vF,zF,KF,gQ,SE,jF,$I,Aw=!1;window.addEventListener("online",PF),window.addEventListener("offline",PF),window.addEventListener("focus",io),window.addEventListener("blur",function(){});function PF(){navigator.onLine?MB(WE()):(dA.stop(),MB(Rg))}function WE(E){return E===void 0&&(E=yQ),MA?E:Zo()?mo()?E:Qg:WQ}var $g={tutor:{btnSize:44,rightPos:0,leftPos:0,bottomPos:0,topPos:0},demo:{btnSize:Z.size||64,rightPos:20,leftPos:20,bottomPos:40,topPos:0},component:{btnSize:Z.size||64,rightPos:20,leftPos:20,bottomPos:40,topPos:0}};function wg(){return jB.indexOf("tutor")>-1}function Bw(){return jB.indexOf("preview")>-1}eB=$g[jB].btnSize;function mC(E){return/^\d+$/.test(E)?E+"px":E}function Wa(){for(var E=document.getElementsByTagName("*"),i=4,l=0;l<E.length;l++){var u=Number.parseInt(document.defaultView.getComputedStyle(E[l],null).getPropertyValue("z-index"),10);u>i&&(i=u)}return i}gQ=Z.zIndex||Wa()+1,SE=gQ-2,jF=gQ-1,$I=gQ-3,gQ&&($.style.zIndex=gQ),$.style.position=Z.position?Z.position:"fixed",Qw(),pE.classList.add("alanBtn-recognised-text-content"),yA.classList.add("alanBtn-recognised-text-holder"),XC(yA),VE(iA);function Qw(E){var i=E?Vo():null;i&&(i.orientation==="left"&&(Z.left=i.x,Z.top=i.y),i.orientation==="right"&&(Z.right=i.x,Z.top=i.y)),Z.left!==void 0&&(QQ=!0),Z.top!==void 0&&(gg=!0),QQ?HE=mC(Z.left!==void 0?Z.left:$g[jB].leftPos):(HE=mC(Z.right!==void 0?Z.right:$g[jB].rightPos),KF=parseInt(HE,10)),$.style[QQ?"left":"right"]=HE,qF()}function qF(){gg?zF=mC(Z.top!==void 0?Z.top:$g[jB].topPos):vF=mC(Z.bottom!==void 0?Z.bottom:$g[jB].bottomPos),gg?($.style.top=zF,$.style.setProperty("bottom","")):($.style.bottom=vF,$.style.setProperty("top",""))}function VE(E,i){cB||(E.style.zIndex=gQ+2,!SA()&&setTimeout(function(){var l,u,V=kE,T=E.clientHeight,AA=!1,tA=+jC("top"),GA=+jC("bottom"),hA=+jC("left"),ZA=+jC("right"),VA=+ng("height"),QB=+ng("width"),zA=!1;if((tA||GA||hA||ZA)&&((tA!==void 0&&tA+VA>window.innerHeight||GA!==void 0&&GA+VA>window.innerHeight||hA!==void 0&&hA+QB>window.innerWidth||ZA!==void 0&&ZA+QB>window.innerWidth)&&(zA=!0),zA?AA=!1:(tA!==void 0&&(E.style.bottom="",E.style.top=tA+"px"),GA!==void 0&&(E.style.top="",E.style.bottom=GA+"px"),hA!==void 0&&(E.style.right="",E.style.left=hA+"px"),ZA!==void 0&&(E.style.left="",E.style.right=ZA+"px"),AA=!0)),!AA){QQ?(E.style.right="",E.style.left=V+"px"):(E.style.left="",E.style.right=V+"px");var vA=(l=$.getBoundingClientRect())===null||l===void 0?void 0:l.top,gB=(u=$.getBoundingClientRect())===null||u===void 0?void 0:u.bottom,sB=vA<window.innerHeight/2,aB=0,dB=0;sB?(V+T>gB?aB=V:aB=gB-T+V,T>=window.innerHeight&&(aB=0)):(V+T>window.innerHeight-vA?dB=V:dB=window.innerHeight-gB-V,T>=window.innerHeight&&(dB=0)),sB?(E.style.bottom="",E.style.top=aB+"px"):(E.style.top="",E.style.bottom=dB+"px")}E.style.display="flex",setTimeout(function(){var VB=gE();VB&&AQ===yQ&&VB.focus()},0)},0))}function XC(E,i){var l=parseInt(eB,10);QQ?(E.style.textAlign="left",E.style.right="",E.style.left=(lB?0:parseInt($.style.left,10))+l+10+"px"):(E.style.textAlign="right",E.style.left="",E.style.right=(lB?0:parseInt($.style.right,10))+l+10+"px"),i||(gg?(E.style.bottom="",E.style.top=(lB?0:parseInt($.style.top,10))+l/2+"px"):(E.style.top="",E.style.bottom=(lB?0:parseInt($.style.bottom,10))+l/2+"px")),lB&&(E.style.position="absolute",E.classList.add("alan-btn-lib__absolute-positioned")),i&&(E.style.bottom="",E.style.top=(lB?0:i)+l/2+"px",E.style.setProperty("transform","translateY(-50%)","important")),E.style.zIndex=jF}function _F(){QQ?(cA.style.left="0",cA.style.right="",yA.classList.remove("alan-btn-lib__left-side"),yA.classList.add("alan-btn-lib__right-side")):(cA.style.right="0",cA.style.left="",yA.classList.remove("alan-btn-lib__right-side"),yA.classList.add("alan-btn-lib__left-side"))}function Va(E){E&&(eB=E,cA.style.width=E+"px",cA.style.minWidth=E+"px",cA.style.maxWidth=E+"px",cA.style.minHeight=E+"px",cA.style.height=E+"px",cA.style.maxHeight=E+"px",$.style.width=E+"px",$.style.minWidth=E+"px",$.style.maxWidth=E+"px",$.style.minHeight=E+"px",$.style.height=E+"px",$.style.maxHeight=E+"px")}function $F(E){Va(E),SA()&&(yA.style.maxWidth="calc(100vw - "+(parseInt(HE,10)+parseInt(eB,10)+20)+"px)"),BD([XB,LB]),XC(yA),VE(iA)}cA.style.color="#fff",cA.style.position="absolute";var PB="transform 0.4s ease-in-out, opacity 0.4s ease-in-out";$F(eB),gg?cA.style.top="0":cA.style.bottom="0",_F(),cA.style.borderRadius="50%",cA.style.textAlign="center",cA.style.transition=PB,cA.style.zIndex=gQ,Z&&Z.tabIndex&&(cA.tabIndex=Z.tabIndex),Bw()?cA.style.cursor="default":SA()||(cA.style.cursor="pointer"),wB.style.minHeight="100%",wB.style.height="100%",wB.style.maxHeight="100%",wB.style.top="0%",wB.style.left="0%",wB.style.zIndex=SE,wB.style.position="relative",wB.style.transition=PB;function Oa(E){for(var i=0;i<E.length;i++)E[i].style.minHeight="100%",E[i].style.height="100%",E[i].style.maxHeight="100%",E[i].style.minWidth="100%",E[i].style.width="100%",E[i].style.maxWidth="100%",E[i].style.top="0%",E[i].style.left="0%",E[i].style.position="absolute",E[i].style.pointerEvents="none",E[i].style.animationIterationCount="infinite",E[i].style.animationDuration="9s",E[i].style.animationTimingFunction="ease-in-out",E[i].style.opacity=0,E[i].alt=s+" logo animated part "+i,wB.appendChild(E[i])}yE.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFogTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlLTIiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",RC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LDEuODU4NDEzMzFlLTE1IDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgTDMwLjk0NDQ0NDQsMCBMMzAuODIyNzM0NywxLjgzNTczNjRlLTE1IEMzMC43OTI0NzYzLDEuODk0OTg1MzllLTE1IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgQzMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LDIuMDMyMDE2NDNlLTE1IDE3LjE3NzI2NTMsMCBMMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",YC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",hC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",NC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBMMzAuOTQ0NDQ0NCwtMS40MjEwODU0N2UtMTQgTDMwLjgyMjczNDcsLTEuMjM3NTExODNlLTE0IEMzMC43OTI0NzYzLC0xLjIzMTU4NjkzZS0xNCAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjI3MTE5MjQsMjEgTDIzLjk1NjQ1ODIsMjEgQzI0LjczMDk1NjIsMjAuOTk5ODkzOSAyNS40NDE1ODY3LDIxLjI5NTM4NDggMjUuODAxNDg0NiwyMS45ODIzNzY3IEwyOS45ODE5MDE1LDI5Ljk2MjE3NjkgQzMwLjMzODM0NCwzMC42NDI1NzMyIDMwLjA3NjY4NTIsMzEuNDgzNTk5NyAyOS4zOTc0NzAxLDMxLjg0MDY2MjEgQzI5LjE5ODM4MzgsMzEuOTQ1MzIxNSAyOC45NzY5MDkzLDMyIDI4Ljc1MjA3MzgsMzIgTDExLjIwOTMzNzgsMzIgTDEuNzA3ODY0OTUsMzIgQzAuOTQwODAyNzk2LDMyIDAuMzE4OTc2MDU5LDMxLjM3NzA5MTggMC4zMTg5NzYwNTksMzAuNjA4Njk1NyBDMC4zMTg5NzYwNTksMzAuMzg0NTk0OCAwLjM3MzAxNTYxOCwzMC4xNjM4MSAwLjQ3NjQ5NzEwNiwyOS45NjUxMjU2IEw0LjYzMDYyNzg1LDIxLjk4OTE5NDUgQzQuOTg5NjE3NzYsMjEuMjk5OTMzOSA1LjcwMTMxMTAxLDIxLjAwMDEwNjMgNi40NzczOTQ2NiwyMSBMMTguMjcxMTkyNCwyMSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",uC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBMMzAuOTQ0NDQ0NCwwIEwzMC44MjI3MzQ3LDEuODM1NzM2NGUtMTUgQzMwLjc5MjQ3NjMsMS44OTQ5ODUzOWUtMTUgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",JC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEwzMC45NDQ0NDQ0LDAgTDMwLjgyMjczNDcsMS44MzU3MzY0ZS0xNSBDMzAuNzkyNDc2MywxLjg5NDk4NTM5ZS0xNSAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEMzMC42Nzk5OTUsMS44NTg0MTMzMWUtMTUgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",bC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",kC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",ZC.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTEwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMTAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBMMS43MDc4NjQ5NSwzMiBDMC45NDA4MDI3OTYsMzIgMC4zMTg5NzYwNTksMzEuMzc3MDkxOCAwLjMxODk3NjA1OSwzMC42MDg2OTU3IEMwLjMxODk3NjA1OSwzMC4zODQ1OTQ4IDAuMzczMDE1NjE4LDMwLjE2MzgxIDAuNDc2NDk3MTA2LDI5Ljk2NTEyNTYgTDQuNjMwNjI3ODUsMjEuOTg5MTk0NSBDNC45ODk2MTc3NiwyMS4yOTk5MzM5IDUuNzAxMzExMDEsMjEuMDAwMTA2MyA2LjQ3NzM5NDY2LDIxIEwxOC4yMDEzODg5LDIxIEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUtMiIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBDMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LC0xLjIxNzg4MzgzZS0xNCAxNy4xNzcyNjUzLC0xLjQyMTA4NTQ3ZS0xNCBMMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",Oa([yE,RC,YC,hC,NC,uC,JC,bC,kC,ZC]),kB.alt=s+" button icon for idle state",ZB.alt=s+" button icon for listening state",rB.alt=s+" button icon for processing state",mB.alt=s+" button icon for reply state";var AD=[kB,ZB,rB,mB];kB.src=OF;for(var DQ=0;DQ<AD.length;DQ++){var EQ=AD[DQ];EQ.style.minHeight="100%",EQ.style.height="100%",EQ.style.maxHeight="100%",EQ.style.minWidth="100%",EQ.style.width="100%",EQ.style.maxWidth="100%",EQ.style.top="0%",EQ.style.left="0%",EQ.style.position="absolute",EQ.style.pointerEvents="none",EQ.style.borderRadius="50%",wB.appendChild(EQ)}LA.style.minHeight="100%",LA.style.height="100%",LA.style.maxHeight="100%",LA.style.minWidth="100%",LA.style.width="100%",LA.style.maxWidth="100%",LA.style.top="0%",LA.style.left="0%",LA.style.zIndex=SE,LA.style.position="absolute",LA.style.opacity="0",LA.style.transition=PB,LA.style.overflow="hidden",LA.style.borderRadius="50%",LA.style.backgroundSize="100% 100%",LA.style.backgroundPosition="center center",LA.style.backgroundRepeat="no-repeat",LA.classList.add("triangleMicIconBg"),LA.classList.add("triangleMicIconBg-default"),qA.style.minHeight="100%",qA.style.height="100%",qA.style.maxHeight="100%",qA.style.minWidth="100%",qA.style.width="100%",qA.style.maxWidth="100%",qA.style.top="0%",qA.style.left="0%",qA.style.zIndex=SE,qA.style.position="absolute",qA.style.opacity="0",qA.style.transition=PB,qA.style.overflow="hidden",qA.style.borderRadius="50%",qA.style.backgroundSize="0% 0%",qA.style.backgroundPosition="center center",qA.style.backgroundRepeat="no-repeat",qA.classList.add("circleMicIconBg");function LC(E,i){var l=i.height,u=i.top,V=i.altText,T=i.src,AA=i.animation;E.style.minHeight=l,E.style.height=l,E.style.maxHeight=l,E.style.top=u,E.style.left=u,E.style.zIndex=SE,E.style.position="absolute",E.style.transition=PB,E.style.opacity="0",E.alt=s+V,E.src=T,AA&&(E.style.animation=AA)}LC(hg,{height:"70%",top:"15%",altText:" disconnected microphone icon",animation:Za,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+CiAgICA8ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTk2IDBjNTMuMDIgMCA5NiA0Mi45OCA5NiA5NnMtNDIuOTggOTYtOTYgOTZTMCAxNDkuMDIgMCA5NiA0Mi45OCAwIDk2IDB6IiBvcGFjaXR5PSIuMDIiLz4KICAgICAgICA8cGF0aCBkPSJNMTMxLjk2NiAxOS4wOTJjLTMwLTE0LTY1LjI4NC05Ljg0OS05MS4xNDIgMTIuNTc1QzE0Ljk2NiA1NC4wOTIgNi44NSA4My44MSAxMi45MDggMTEzLjk1YzYuMDU4IDMwLjE0MiAzMC4zMDIgNTYuMTkgNjAuMDU4IDY0LjE0MiAzNS4xODMgOS40MDYgNzMtNCA5My0zNC0xNy45MjQgMjMuOTE2LTUyLjM2NiAzOC4yOTMtODMgMzMtMzAuMTY4LTUuMjEtNTcuMTA0LTMxLjExLTY0LTYxLTcuMzQ3LTMxLjgzNS43NzktNTYgMjctODBzODAtMjYgMTA5IDljNS41MzYgNi42ODEgMTMgMTkgMTUgMzQgMSA2IDEgNyAyIDEyIDAgMiAyIDQgNCA0IDMgMCA1LjM3NC0yLjI1NiA1LTYtMy0zMC0yMS41NTYtNTcuMTkzLTQ5LTcweiIgb3BhY2l0eT0iLjQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="}),LC(Ig,{height:"100%",top:"0%",altText:" low volume icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1taWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWxhbi1CdXR0b24tLy1BbmltYXRpb24tLy1idXR0b24tbm8tbWljIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTguNDczNjg0MiBDMzIsMjUuNzE5NDczNyAyNi43OCwzMS42OTI2MzE2IDIwLDMyLjY5ODQyMTEgTDIwLDQwIEMyMCw0MS4xMDQ1Njk1IDE5LjEwNDU2OTUsNDIgMTgsNDIgQzE2Ljg5NTQzMDUsNDIgMTYsNDEuMTA0NTY5NSAxNiw0MCBMMTYsMzIuNjk4NDIxMSBDOS4yMiwzMS42OTI2MzE2IDQsMjUuNzE5NDczNyA0LDE4LjQ3MzY4NDIgTDQsMTggQzQsMTYuODk1NDMwNSA0Ljg5NTQzMDUsMTYgNiwxNiBDNy4xMDQ1Njk1LDE2IDgsMTYuODk1NDMwNSA4LDE4IEw4LDE4LjQ3MzY4NDIgQzgsMjQuMTQxODY5OCAxMi40NzcxNTI1LDI4LjczNjg0MjEgMTgsMjguNzM2ODQyMSBDMjMuNTIyODQ3NSwyOC43MzY4NDIxIDI4LDI0LjE0MTg2OTggMjgsMTguNDczNjg0MiBMMjgsMTggQzI4LDE2Ljg5NTQzMDUgMjguODk1NDMwNSwxNiAzMCwxNiBDMzEuMTA0NTY5NSwxNiAzMiwxNi44OTU0MzA1IDMyLDE4IEwzMiwxOC40NzM2ODQyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LC00LjUyNzM3MjYzZS0xNCBDMjEuMzEzNzA4NSwtNC42MTg1Mjc3OGUtMTQgMjQsMi43NTY5ODMzOCAyNCw2LjE1Nzg5NDc0IEwyNCwxOC40NzM2ODQyIEMyNCwyMS44NzQ1OTU2IDIxLjMxMzcwODUsMjQuNjMxNTc4OSAxOCwyNC42MzE1Nzg5IEMxNC42ODYyOTE1LDI0LjYzMTU3ODkgMTIsMjEuODc0NTk1NiAxMiwxOC40NzM2ODQyIEwxMiw2LjE1Nzg5NDc0IEMxMiwyLjc1Njk4MzM4IDE0LjY4NjI5MTUsLTQuNTI3MzcyNjNlLTE0IDE4LC00LjYxODUyNzc4ZS0xNCBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC42Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjgxLDMuMjcgTDM0LjczLDM0LjE5IEMzNS40MzE0MDE2LDM0Ljg5MTQwMTYgMzUuNDMxNDAxNiwzNi4wMjg1OTg0IDM0LjczLDM2LjczIEMzNC4wMjg1OTg0LDM3LjQzMTQwMTYgMzIuODkxNDAxNiwzNy40MzE0MDE2IDMyLjE5LDM2LjczIEwxLjI3LDUuODEgQzAuNTY4NTk4MzY4LDUuMTA4NTk4MzcgMC41Njg1OTgzNjgsMy45NzE0MDE2MyAxLjI3LDMuMjcgQzEuOTcxNDAxNjMsMi41Njg1OTgzNyAzLjEwODU5ODM3LDIuNTY4NTk4MzcgMy44MSwzLjI3IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`}),LC(qg,{height:"100%",top:"0%",altText:" no voice support icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII="}),LC(_g,{height:"100%",top:"0%",altText:" offline icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`});var yC={idle:{background:{color:["rgb(34, 203, 255)","rgb(25, 149, 255)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]}},listen:{background:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgb(0, 70, 255)"]}},process:{background:{color:["rgba(0, 255, 205, 0.95)","rgba(0, 115, 255, 0.95)"]},hover:{color:["rgb(0, 115, 255)","rgba(0, 115, 255, 0.95)"]}},reply:{background:{color:["rgba(122, 40, 255, 0.95)","rgba(61, 122, 255, 0.95)"]},hover:{color:["rgba(122, 40, 255, 0.95)","rgb(122, 40, 255)"]}},textChat:{background:{color:["#1eb6e5","#1995ff"],angle:45},hover:{color:["#1ba3ce","#1686e5"],angle:45},shadow:{color:["#6693bc","#b3c9de"]}}};XB.style.transform="rotate(-315deg)",LB.style.transform="rotate(-45deg)",BD([XB,LB]);function BD(E){for(var i=0;i<E.length;i++){var l=E[i];l.style.height=eB/2+"px",l.style.maxHeight=eB/2+"px",l.style.minHeight=eB/2+"px",l.style.minWidth=eB+"px",l.style.width=eB+"px",l.style.maxWidth=eB+"px",l.style.top="calc(100%/2 - "+eB/2/2+"px)",l.style.filter="blur("+eB/10+"px)",l.style.left=0,l.style.zIndex=$I,l.style.position="absolute",l.style.transition=PB,l.style.opacity=".5",l.style.borderRadius="100px",l.classList.add("alanBtn-oval-bg-default")}}var QD="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzczNDUgNy4wMDAwM0wxMy44Mzk4IDAuOTMzNjA0QzE0LjA1MzQgMC43MjAwMjIgMTQuMDUzNCAwLjM3Mzc0MSAxMy44Mzk4IDAuMTYwMTg2QzEzLjYyNjMgLTAuMDUzMzY4MSAxMy4yOCAtMC4wNTMzOTU1IDEzLjA2NjQgMC4xNjAxODZMNyA2LjIyNjYxTDAuOTMzNjA0IDAuMTYwMTg2QzAuNzIwMDIyIC0wLjA1MzM5NTUgMC4zNzM3NDEgLTAuMDUzMzk1NSAwLjE2MDE4NiAwLjE2MDE4NkMtMC4wNTMzNjgxIDAuMzczNzY4IC0wLjA1MzM5NTUgMC43MjAwNDkgMC4xNjAxODYgMC45MzM2MDRMNi4yMjY1OSA3TDAuMTYwMTg2IDEzLjA2NjRDLTAuMDUzMzk1NSAxMy4yOCAtMC4wNTMzOTU1IDEzLjYyNjMgMC4xNjAxODYgMTMuODM5OEMwLjI2Njk2NCAxMy45NDY2IDAuNDA2OTM2IDE0IDAuNTQ2OTA5IDE0QzAuNjg2ODgxIDE0IDAuODI2ODI3IDEzLjk0NjYgMC45MzM2MzEgMTMuODM5OEw3IDcuNzczNDVMMTMuMDY2NCAxMy44Mzk4QzEzLjE3MzIgMTMuOTQ2NiAxMy4zMTMyIDE0IDEzLjQ1MzEgMTRDMTMuNTkzMSAxNCAxMy43MzMgMTMuOTQ2NiAxMy44Mzk4IDEzLjgzOThDMTQuMDUzNCAxMy42MjYzIDE0LjA1MzQgMTMuMjggMTMuODM5OCAxMy4wNjY0TDcuNzczNDUgNy4wMDAwM1oiIGZpbGw9IiNCQkNGRTciLz4KPC9zdmc+Cg==";VQ.classList.add("alanBtn-bg-default"),RQ.classList.add("alanBtn-bg-listening"),YQ.classList.add("alanBtn-bg-speaking"),hQ.classList.add("alanBtn-bg-intermediate"),NQ.classList.add("alanBtn-bg-understood"),jE(VQ),jE(RQ),jE(YQ),jE(hQ),jE(NQ);var AE="1",Ta="0";VQ.style.opacity=AE;var gD=[qA,LA,wB,_g,Ig,qg,yE,RC,YC,hC,NC,uC,JC,bC,kC,ZC];for(DQ=0;DQ<gD.length;DQ++)gD[DQ].setAttribute("draggable","false");EE([RQ,YQ,hQ,NQ]),cA.appendChild(XB),cA.appendChild(LB),cA.appendChild(VQ),cA.appendChild(RQ),cA.appendChild(YQ),cA.appendChild(hQ),cA.appendChild(NQ),cA.appendChild(wB),cA.appendChild(LA),cA.appendChild(qA),cA.appendChild(hg),cA.appendChild(Ig),cA.appendChild(qg),cA.appendChild(_g),cA.classList.add("alanBtn"),SA()&&$.classList.add("mobile");var gw=function(E,i,l){var u=l?2*kE:kE;i!==null&&window.innerHeight-kE<i&&Rw(window.innerHeight-u),E!==null&&window.innerWidth-kE<E&&Yw(window.innerWidth-u)};Ew();function R(E){return".alan-"+iQ()+(E?"":" ")}function Ew(E){var i,l,u,V,T,AA,tA,GA,hA,ZA,VA,QB,zA,vA,gB,sB,aB,dB,VB,tg,xQ,$E,AC,eg,vQ,GB,qB,kg,Zg,BC,QC,hw,Nw,uw,Jw,bw,kw,Zw,mw,Xw,Lw,yw,pw,Hw,Sw,Ww,Vw,Ow,Tw,xw,vw,zw,Kw,jw,Pw,qw,_w,$w,An,Bn,Qn,gn,En,Cn,In,wn,nn,tn,en,Fn,Dn,cn,sn,an,on,Un,ln,Mn,Gn,rn,dn,fn,Rn,Yn,hn,Nn,un,Jn,bn,kn,Zn,mn,Xn,Ln,yn,pn,Hn,Sn,Wn,Vn,On,Tn,xn,vn,zn,Kn,jn,Pn,qn,_n,$n,At,Bt,Qt,gt,Et,Ct,It,wt,nt,tt,et,Ft,Dt,it,ct,st,at,ot,Ut,lt,Mt,Gt,rt,dt,ft,Rt,Yt,ht,Nt,ut,Jt,bt,kt,Zt,mt,Xt,Lt,yt,pt,Ht,St,Wt,Vt,Ot,Tt,xt,vt,zt,Kt,jt,Pt,qt,_t,CE,d="",$t=iQ(),IE;Z.shadowDOM?IE=Z.shadowDOM.getElementById("alan-stylesheet-"+$t):IE=document.getElementById("alan-stylesheet-"+$t),CE=document.createElement("style"),CE.setAttribute("id","alan-stylesheet-"+$t),CE.type="text/css",d+=".alanBtn-root * {  box-sizing: border-box; font-family: ".concat(((V=(u=(l=E==null?void 0:E.chatOptions)===null||l===void 0?void 0:l.textChat)===null||u===void 0?void 0:u.popup)===null||V===void 0?void 0:V.fontFamily)||"Poppins","; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}");var uQ=SA()?":active":":hover";SA()||(d+=R()+".alanBtn{transform: scale(1); transition: "+PB+";} .alanBtn"+uQ+"{transform: scale(1.11111);transition:"+PB+";}.alanBtn:focus {transform: scale(1);"+PB+";  border: solid 3px #50e3c2;  outline: none;  }",d+=R(!0)+".alan-btn-disconnected  .alanBtn"+uQ+"{transform: scale(1);transition:"+PB+";}",d+=R(!0)+".alan-btn-offline  .alanBtn"+uQ+"{transform: scale(1);transition:"+PB+";}",d+=R(!0)+".alan-btn-no-voice-support  .alanBtn"+uQ+"{transform: scale(1);transition:"+PB+";}"),d+=R(!0)+`.alan-btn__page-scrolled .alanBtn {
                transform: scale(0.4);
                opacity: 0.5;
                pointer-events: none;
                transition: `.concat(PB,`;
            }`),d+=R()+".alanBtn-recognised-text-holder { position:fixed; transform: translateY("+(gg?"-":"")+"50%); max-width:236px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px;  min-height: 40px;  color: #000; font-weight: normal; background-color: #fff; border-radius:10px; box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.35); display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: activate;-ms-flex-pack: start;justify-content: start;}",d+=R()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__left-side { text-align: left;}",d+=R()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__right-side { text-align: right;}",d+=R()+" .alanBtn-recognised-text-holder .alanBtn-recognised-text-content:not(:empty) {padding: 10px;}",d+=R(!0)+".alanBtn-recognised-text-holder-long  { font-size: 12px!important;line-height: 1.4!important;}  ",d+=R(!0)+".alanBtn-recognised-text-holder-super-long  { font-size: 11px!important;line-height: 1.4!important;}  ",d+=R()+".alanBtn-text-appearing {  animation: text-holder-appear 800ms ease-in-out forwards;  }",d+=R()+".alanBtn-text-disappearing {  animation: text-holder-disappear 800ms ease-in-out forwards;    }",d+=R()+".alanBtn-text-disappearing-immediately {  animation: none; opactity: 0;   }",d+=R()+".alan-btn-disabled {  pointer-events: none;  opacity: .5;  transition: all .2s ease-in-out;  }",d+=R()+`.shadow-appear {  opacity: 1 !important;  }
`,d+=R()+".shadow-disappear {  opacity: 0 !important;  transition: all .1s linear !important;  }",d+=R(!0)+".alan-btn-offline .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",d+=R(!0)+".alan-btn-offline .alanBtn"+uQ+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",d+=R(!0)+".alan-btn-no-voice-support .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",d+=R(!0)+".alan-btn-no-voice-support .alanBtn"+uQ+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",d+=R(!0)+".alan-btn-permission-denied .alanBtn .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",d+=R(!0)+".alan-btn-permission-denied .alanBtn"+uQ+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",d+=R()+".triangleMicIconBg {background-image:url("+pa+"); pointer-events: none;}",d+=R()+".circleMicIconBg {background-image:url("+Ha+"); pointer-events: none;}",d+=R()+" img {pointer-events: none;}",d+=R()+""+uQ+" .triangleMicIconBg-default {opacity:0!important;}",d+=R()+".alan-overlay-for-alert {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",d+=R()+".alan-alert-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:12px;padding-right:24px;text-align: center;width: 220px;background: rgb(255 255 255);position: fixed;left: 50%;transform: translateX(-50%);top: 10%;    color: #000;font-size: 14px;line-height: 18px;}",d+=R()+'.alan-alert-popup__close-btn {background:url("'+QD+'") no-repeat center;cursor:pointer; background-size:100% 100%;position: absolute;top: 12px;right: 12px;width: 14px;height: 14px;}';var mg=ng("height"),Xg=ng("width");gw(Xg,mg,!0),mg=ng("height"),Xg=ng("width"),mg?mg="".concat(mg,"px"):mg="".concat(AU((tA=(AA=(T=E==null?void 0:E.chatOptions)===null||T===void 0?void 0:T.textChat)===null||AA===void 0?void 0:AA.popup)===null||tA===void 0?void 0:tA.height)||uF,"px");function AU(Fg){return Fg&&+Fg<=100?uF:Fg}Xg?Xg="".concat(Xg,"px"):Xg="".concat(((ZA=(hA=(GA=E==null?void 0:E.chatOptions)===null||GA===void 0?void 0:GA.textChat)===null||hA===void 0?void 0:hA.popup)===null||ZA===void 0?void 0:ZA.width)||"400","px"),d+=R()+`.alan-btn__chat-holder {
                position: fixed;
                height:  `.concat(mg,`;
                min-height: `).concat(((zA=(QB=(VA=E==null?void 0:E.chatOptions)===null||VA===void 0?void 0:VA.textChat)===null||QB===void 0?void 0:QB.popup)===null||zA===void 0?void 0:zA.minHeight)||NF,`px;
                max-height: `).concat(((sB=(gB=(vA=E==null?void 0:E.chatOptions)===null||vA===void 0?void 0:vA.textChat)===null||gB===void 0?void 0:gB.popup)===null||sB===void 0?void 0:sB.maxHeight)||"1200",`px;
                width: `).concat(Xg,`;
                min-width: `).concat(((VB=(dB=(aB=E==null?void 0:E.chatOptions)===null||aB===void 0?void 0:aB.textChat)===null||dB===void 0?void 0:dB.popup)===null||VB===void 0?void 0:VB.minWidth)||JF,`px;
                max-width: `).concat((($E=(xQ=(tg=E==null?void 0:E.chatOptions)===null||tg===void 0?void 0:tg.textChat)===null||xQ===void 0?void 0:xQ.popup)===null||$E===void 0?void 0:$E.maxWidth)||"1200",`px;
                display: none;
                transform: scale(0);
                opacity: 0;
            }`),d+=R()+`.alan-text-chat__openning {
                transform: scale(0);
                opacity: 0;
                animation: text-chat-appear-anim `.concat(bE,`ms ease-in-out forwards;
            }`),d+=R()+_A("text-chat-appear-anim",`
            0%{
                transform: scale(0);
                opacity: 0;
            }
            100%{
                transform: scale(1);
                opacity: 1;
            }
            `),d+=R()+`.alan-text-chat__closing {
                transform: scale(1);
                opacity: 1;
                animation: text-chat-disappear-anim `.concat(bE,`ms ease-in-out forwards;
            }`),d+=R()+_A("text-chat-disappear-anim",`
            0%{
                transform: scale(1);
                opacity: 1;
            }
            100%{
                transform: scale(0);
                opacity: 0;
            }
            `),d+=".mobile"+R()+`.alan-btn__chat-holder {
                position: fixed; 
                height: 100%;
                min-height: 100%;
                max-height: 100%;
                width: 100vw;
                min-width: 100vw;
                max-width: 100vw;
                display: none;
                top: 0;
                bottom:0;
                left:0;
                right:0;
                border-radius: 0px;
            }`,d+=R()+`.alan-btn__chat-holder.bottom-none {
                cursor: ns-resize;
              }`,d+=R()+`.alan-btn__chat-holder.top-none {
                cursor: ns-resize;
              }`,d+=R()+`.alan-btn__chat-holder.none-left {
                cursor: ew-resize;
              }`,d+=R()+`.alan-btn__chat-holder.none-right {
                cursor: ew-resize;
              }`,d+=R()+`.alan-btn__chat-holder.top-left {
                cursor: nwse-resize;
              }`,d+=R()+`.alan-btn__chat-holder.bottom-right {
                cursor: nwse-resize;
              }`,d+=R()+`.alan-btn__chat-holder.top-right {
                cursor: nesw-resize;
              }`,d+=R()+`.alan-btn__chat-holder.bottom-left {
                cursor: nesw-resize;
              }`;var Ui=((vQ=(eg=(AC=E==null?void 0:E.chatOptions)===null||AC===void 0?void 0:AC.textChat)===null||eg===void 0?void 0:eg.popup)===null||vQ===void 0?void 0:vQ.backgroundColor)||"rgba(218, 235, 255, 1)",li=((kg=(qB=(GB=E==null?void 0:E.chatOptions)===null||GB===void 0?void 0:GB.textChat)===null||qB===void 0?void 0:qB.popup)===null||kg===void 0?void 0:kg.backgroundColor2)||"rgba(255, 255, 255, 1)";d+=R()+`.alan-btn__chat {
                height: 100%;
                position: relative;
                overflow: hidden;
                display: flex;
                width: 100%;
                min-width: 100%;
                max-width: 100%;
                flex: 2;
                position: relative;
                flex-direction: column;
                background: linear-gradient(180deg, `.concat(li," 0%, ").concat(li," 15%, ").concat(Ui," 70%, ").concat(Ui,` 100%);
                box-shadow: 0px 5px 44px rgba(0, 0, 0, 0.15);
                border-radius: 20px;
                animation: chat-appear 300ms ease-in-out forwards;
                transform: scale(1);
                opacity: 1; 
            }`),d+=R()+_A("alan-btn__sound-bar-1",`
            0% {
                opacity: 0; 
                transform: scale(0);
            }
            100% {
                opacity: 1;  
                transform: scale(1);   
            }`),d+=".mobile"+R()+`.alan-btn__chat {
                border-radius: 0px;
            }`,d+=R()+`.alan-btn__chat-textarea-holder {
                width: 100%;
                height: `.concat(dg,`px;
                max-height: `).concat(dg,`px;
                min-height: `).concat(dg,`px;
            }`),d+=R()+`.alan-btn__chat-messages-empty-block {
                flex: 1 1 auto;
            }`,d+=R()+`.alan-btn__chat-messages-wrapper {
                width: 100%;
                height: calc(100% - `.concat(rQ+dg,`px);
                max-height: calc(100% - `).concat(rQ+dg,`px);
                min-height: calc(100% - `).concat(rQ+dg,`px);
                overflow-y: scroll;
                overflow-x: hidden;
                padding: 20px 10px;
                display: flex;
                flex-shrink: 0;
                flex-direction: column-reverse;
            }`),d+=R()+`.alan-btn__chat-messages {
                display: flex;
                flex-shrink: 0;
                flex-direction: column;
            }`;var Mi=((QC=(BC=(Zg=E==null?void 0:E.chatOptions)===null||Zg===void 0?void 0:Zg.textChat)===null||BC===void 0?void 0:BC.header)===null||QC===void 0?void 0:QC.backgroundColor)||"#FFFFFF";d+=R()+`.alan-btn__chat-header {
                width: 100%;
                height: `.concat(rQ,`px;
                max-height: `).concat(rQ,`px;
                min-height: `).concat(rQ,`px;
                color: #0f2029;
                padding: 0px 15px;
                padding-top: 12px;
                background: `).concat(Mi,`;
                color: `).concat(((uw=(Nw=(hw=E==null?void 0:E.chatOptions)===null||hw===void 0?void 0:hw.textChat)===null||Nw===void 0?void 0:Nw.header)===null||uw===void 0?void 0:uw.color)||"#000000",`;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                position:relative;
            }`);var Gi=((kw=(bw=(Jw=E==null?void 0:E.chatOptions)===null||Jw===void 0?void 0:Jw.textChat)===null||bw===void 0?void 0:bw.header)===null||kw===void 0?void 0:kw.fontSize)||16;d+=R()+`.alan-btn__chat-header-title {
                max-width: calc(100% - 112px);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                font-weight: 600;
                font-size: `.concat(Gi,`px;
                position: relative;
                top: `).concat(Gi>=20?"-2":"0",`px;
            }`),d+=R()+`.alan-btn__chat-header-gradient {
                width: 100%;
                height: 15px;
                max-height: 15px;
                min-height: 15px;
                position: absolute;
                left:0;
                width: 100%;
                top: `.concat(rQ,`px;
                background: linear-gradient(180deg, `).concat(Mi,` 30%, rgba(255, 255, 255, 0) 100%);
            }`),d+=R()+`.alan-btn__chat-header-left-resizer {
                transition: 300ms opacity ease-in-out;
                position: absolute;
                top: 3px;
                left: 5px;
                transform: rotate(180deg);
                pointer-events: none;
                display: block;
                opacity: 0;
                height: 18px;
                width: 14px;
            }`,d+=R()+`.alan-btn__chat-header-right-resizer {
                transition: 300ms opacity ease-in-out;
                position: absolute;
                top: 3px;
                right: 5px;
                transform: rotate(-90deg);
                pointer-events: none;
                display: block;
                opacity: 0;
                height: 18px;
                width: 14px;
            }`,d+=R()+`.with-hover .alan-btn__chat-header-right-resizer {
                opacity: 0.8;
                transition: 300ms opacity ease-in-out;
            }`,d+=R()+`.with-hover .alan-btn__chat-header-left-resizer {
                opacity: 0.8;
                transition: 300ms opacity ease-in-out;
            }`,d+=R()+`.with-hover .alan-btn__chat-header::after {
                opacity: 0.8;
                transition: 300ms opacity ease-in-out;
            }`,d+=R()+`.with-cursors .alan-btn__chat-messages {
                pointer-events: none;
            }`,d+=R()+`.alan-btn__chat-unmute-btn {
                position: absolute;
                right: 15px;
                top: 3px;
                display: flex;
                align-items: center;
                height: `.concat(rQ,`px;
                font-size: 14px;
                cursor: pointer;
            }`),SA()&&(d+=R()+`.alan-btn__chat-unmute-btn {
                    display: none;
                }`),d+=R()+`.alan-btn__chat-unmute-btn svg path {
                fill: `.concat(((pw=(yw=(Lw=(Xw=(mw=(Zw=E==null?void 0:E.chatOptions)===null||Zw===void 0?void 0:Zw.textChat)===null||mw===void 0?void 0:mw.popup)===null||Xw===void 0?void 0:Xw.icons)===null||Lw===void 0?void 0:Lw.mute)===null||yw===void 0?void 0:yw.default)===null||pw===void 0?void 0:pw.fill)||"rgba(8, 8, 8, 1)",`;
            }`),SA()||(d+=R()+`.alan-btn__chat-unmute-btn:hover svg path {
                    fill: `.concat(((Tw=(Ow=(Vw=(Ww=(Sw=(Hw=E==null?void 0:E.chatOptions)===null||Hw===void 0?void 0:Hw.textChat)===null||Sw===void 0?void 0:Sw.popup)===null||Ww===void 0?void 0:Ww.icons)===null||Vw===void 0?void 0:Vw.mute)===null||Ow===void 0?void 0:Ow.hover)===null||Tw===void 0?void 0:Tw.fill)||"rgba(0, 70, 255, 1)",`;
                }`)),d+=R()+`.alan-btn__chat-unmute-btn.disabled {
                pointer-events: none;
            }`,d+=R()+`.alan-btn__chat-unmute-btn.disabled {
                opacity: 0.4
            }`,d+=R()+`.alan-btn__chat-header-clear-btn {
                position: absolute;
                right: `.concat(SA()?15:50,`px;
                top: 3px;
                width: 17px;
                display: flex;
                align-items: center;
                height: `).concat(rQ,`px;
                font-size: 14px;
                cursor: pointer;
            }`),d+=R()+`.alan-btn__chat-header-clear-btn.disabled {
                pointer-events: none;
            }`,d+=R()+`.alan-btn__chat-header-clear-btn.disabled {
                opacity: 0.4
            }`,d+=R()+`.alan-btn__chat-header-clear-btn svg path {
                fill: `.concat(((Pw=(jw=(Kw=(zw=(vw=(xw=E==null?void 0:E.chatOptions)===null||xw===void 0?void 0:xw.textChat)===null||vw===void 0?void 0:vw.popup)===null||zw===void 0?void 0:zw.icons)===null||Kw===void 0?void 0:Kw.clear)===null||jw===void 0?void 0:jw.default)===null||Pw===void 0?void 0:Pw.fill)||"rgba(8, 8, 8, 1)",`;
            }`),SA()||(d+=R()+`.alan-btn__chat-header-clear-btn:hover svg path {
                    fill: `.concat(((Qn=(Bn=(An=($w=(_w=(qw=E==null?void 0:E.chatOptions)===null||qw===void 0?void 0:qw.textChat)===null||_w===void 0?void 0:_w.popup)===null||$w===void 0?void 0:$w.icons)===null||An===void 0?void 0:An.clear)===null||Bn===void 0?void 0:Bn.hover)===null||Qn===void 0?void 0:Qn.fill)||"rgba(255, 0, 92, 1)",`;
                }`)),d+=R()+`.alan-btn__close-chat-btn {
                position: absolute;
                left: 15px;
                top: 3px;
                width: 15px;
                height: `.concat(rQ,`px;
                display: flex;
                align-items: center;
                cursor: pointer;
                pointer-events: all;
            }`),d+=R()+`.alan-btn__close-chat-btn svg path {
                fill: `.concat(((nn=(wn=(In=(Cn=(En=(gn=E==null?void 0:E.chatOptions)===null||gn===void 0?void 0:gn.textChat)===null||En===void 0?void 0:En.popup)===null||Cn===void 0?void 0:Cn.icons)===null||In===void 0?void 0:In.close)===null||wn===void 0?void 0:wn.default)===null||nn===void 0?void 0:nn.fill)||"rgba(8, 8, 8, 1)",`;
            }`),SA()||(d+=R()+`.alan-btn__close-chat-btn:hover svg path {
                    fill: `.concat(((sn=(cn=(Dn=(Fn=(en=(tn=E==null?void 0:E.chatOptions)===null||tn===void 0?void 0:tn.textChat)===null||en===void 0?void 0:en.popup)===null||Fn===void 0?void 0:Fn.icons)===null||Dn===void 0?void 0:Dn.close)===null||cn===void 0?void 0:cn.hover)===null||sn===void 0?void 0:sn.fill)||"rgba(151, 152, 156, 1)",`;
                }`)),d+=R()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar {
                width: `.concat(bF,`px;
                height: `).concat(bF,`px;
            }`),d+=R()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar-thumb {
                border-radius: 3px;
                background-color: rgba(224, 224, 224, 0.795);
                transition: background-color 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar-thumb:hover {
                background-color: rgba(230, 230, 230, 0.856);
                transition: background-color 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat-messages-wrapper::-webkit-scrollbar-track {
                border-radius: 3px;
                background: transparent;
            }`,d+=R()+`.alan-btn__chat-textarea-holder-gradient {
                background: linear-gradient(0deg, `.concat(((Un=(on=(an=E==null?void 0:E.chatOptions)===null||an===void 0?void 0:an.textChat)===null||on===void 0?void 0:on.popup)===null||Un===void 0?void 0:Un.backgroundColor)||"rgba(218, 235, 255, 1)",` 30%, rgba(255, 255, 255, 0) 100%);
                height:15px;
                min-height:15px;
                width: calc(100% - 10px);
                position: absolute;
                bottom: `).concat(dg,`px;
                left:0;
            }`),d+=R()+`.show-gradient .alan-btn__chat-textarea-gradient {
                position: absolute;
                left: 26px;
                border-radius: 16px;
                bottom: 15px;
                width: 15px;
                opacity: 0;
                transition: opacity 300ms ease-in-out;
                height: `.concat(VI,`px;
                background: linear-gradient(90deg, `).concat(((Gn=(Mn=(ln=E==null?void 0:E.chatOptions)===null||ln===void 0?void 0:ln.textChat)===null||Mn===void 0?void 0:Mn.textarea)===null||Gn===void 0?void 0:Gn.backgroundColor)||"rgb(255, 255, 255)",` 60%, rgba(255, 255, 255, 0) 100%);
            }`),d+=R()+`.show-gradient .alan-btn__chat-textarea-gradient {
                opacity: 1;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat-holder.alan-text-chat__voice-enabled .show-gradient .alan-btn__chat-textarea-gradient {
                left: 50px;
            }`,d+=R()+`.alan-btn__chat-textarea {
                position: absolute;
                left: 15px;
                bottom: 15px;
                width: calc(100% - 30px);
                border-radius: 20px;
                box-shadow: 0px 1px 3px rgba(16, 39, 126, 0.2);
                background-color: `.concat(((fn=(dn=(rn=E==null?void 0:E.chatOptions)===null||rn===void 0?void 0:rn.textChat)===null||dn===void 0?void 0:dn.textarea)===null||fn===void 0?void 0:fn.backgroundColor)||"rgb(255, 255, 255)",` ;
                color: `).concat(((hn=(Yn=(Rn=E==null?void 0:E.chatOptions)===null||Rn===void 0?void 0:Rn.textChat)===null||Yn===void 0?void 0:Yn.textarea)===null||hn===void 0?void 0:hn.color)||"rgba(23, 23, 23, 1)",` ;
                overflow: hidden;
                outline: none;
                resize: none;
                border: 1px solid transparent;
                -webkit-appearance: none;
                font-size: `).concat(P(SA(),((Jn=(un=(Nn=E==null?void 0:E.chatOptions)===null||Nn===void 0?void 0:Nn.textChat)===null||un===void 0?void 0:un.textarea)===null||Jn===void 0?void 0:Jn.fontSize)||Ga),`px;
                line-height: `).concat(Ma,`;
                text-align: left;
                max-height: `).concat(VI,`px;
                height: `).concat(VI,`px;
                padding: `).concat(ED(),`px 42px 12px 12px;
                margin: 0px!important;
                -webkit-user-select: text;
                -khtml-user-select: text;
                -moz-user-select: text;
                -ms-user-select: text;
                user-select: text;
                transition: opacity 300ms ease-in-out;
            }`),d+=R()+`.alan-btn__chat-textarea::placeholder {
                color: `.concat(((Zn=(kn=(bn=E==null?void 0:E.chatOptions)===null||bn===void 0?void 0:bn.textChat)===null||kn===void 0?void 0:kn.textarea)===null||Zn===void 0?void 0:Zn.placeholderColor)||"rgba(116, 116, 116, 1)",` ;
            }`),d+=R()+`.alan-btn__chat-textarea::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }`,d+=R()+`.alan-btn__chat-textarea::-webkit-scrollbar-thumb {
                border-radius: 3px;
                background-color: rgba(224, 224, 224, 0.795);
                transition: background-color 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat-textarea::-webkit-scrollbar-thumb:hover {
                background-color: rgba(230, 230, 230, 0.856);
                transition: background-color 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat-textarea::-webkit-scrollbar-track {
                border-radius: 3px;
                background: transparent;
            }`,d+=R()+`.alan-btn__chat-holder.alan-text-chat__voice-enabled .alan-btn__chat-textarea {
                padding-left: 42px;
            }`,d+=R()+`.alan-btn__chat.alan-btn__mic-active .alan-btn__chat-textarea {
                opacity: 0.6;
                transition: opacity 300ms ease-in-out;
                pointer-events: none;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }`,d+=R()+`.alan-btn__chat.alan-btn__mic-active .alan-btn__chat-send-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__inactive .alan-btn__chat-send-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-textarea {
                opacity: 0.6;
                transition: opacity 300ms ease-in-out;
                pointer-events: none;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }`,d+=R()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-send-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-unmute-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-header-clear-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-send-btn svg path {
                opacity: 1;
            }`,d+=R()+`.alan-btn__chat.alan-btn__disconnected .alan-btn__chat-mic-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__inactive .alan-btn__chat-mic-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn_disconnected-chat-icon-rotate {
                animation: disconnected-chat-icon-rotate-animation 1500ms linear infinite;
            }`,d+=R()+_A("disconnected-chat-icon-rotate-animation","0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }"),d+=R()+`.alan-btn__disabled {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,d+=R()+`.alan-btn__chat-send-btn {
                position: absolute;
                transition: opacity 300ms ease-in-out;
                right: 20px;
                bottom: 20px;
                min-width: 40px;
                width: 40px;
                max-width: 40px;
                height: 40px;
                max-height: 40px;
                min-height: 40px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Chrome/Safari/Opera */
                -khtml-user-select: none; /* Konqueror */
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* IE/Edge */
                user-select: none;
            }`,d+=R()+`.alan-btn__chat-send-btn svg {
                position: relative;
                left: 2px;
            }`,d+=R()+`.alan-btn__chat-send-btn svg path {
                fill: `.concat(((Ln=(Xn=(mn=E==null?void 0:E.chatOptions)===null||mn===void 0?void 0:mn.textChat)===null||Xn===void 0?void 0:Xn.textarea)===null||Ln===void 0?void 0:Ln.placeholderColor)||"rgba(116, 116, 116, 1)",`;
                opacity: 0.5;
            }`),d+=R()+`.ready-to-send:not(.alan-btn__inactive) .alan-btn__chat-send-btn svg path {
                fill: `.concat(((Vn=(Wn=(Sn=(Hn=(pn=(yn=E==null?void 0:E.chatOptions)===null||yn===void 0?void 0:yn.textChat)===null||pn===void 0?void 0:pn.popup)===null||Hn===void 0?void 0:Hn.icons)===null||Sn===void 0?void 0:Sn.general)===null||Wn===void 0?void 0:Wn.default)===null||Vn===void 0?void 0:Vn.fill)||"rgba(23, 23, 23, 1)",`;
                opacity: 1;
            }`),SA()||(d+=R()+`.ready-to-send:not(.alan-btn__inactive) .alan-btn__chat-send-btn:hover {
                    cursor: pointer;
                }`,d+=R()+`.ready-to-send:not(.alan-btn__inactive) .alan-btn__chat-send-btn:hover svg path {
                    fill: `.concat(((Kn=(zn=(vn=(xn=(Tn=(On=E==null?void 0:E.chatOptions)===null||On===void 0?void 0:On.textChat)===null||Tn===void 0?void 0:Tn.popup)===null||xn===void 0?void 0:xn.icons)===null||vn===void 0?void 0:vn.general)===null||zn===void 0?void 0:zn.hover)===null||Kn===void 0?void 0:Kn.fill)||"rgba(0, 120, 255, 1)",`;
                    opacity:0.8;
                }`)),d+=R()+`.alan-btn__chat-mic-btn {
                position: absolute;
                left: 20px;
                bottom: 22px;
                min-width: `.concat($Q,`px;
                width: `).concat($Q,`px;
                max-width: `).concat($Q,`px;
                height: `).concat($Q,`px;
                max-height: `).concat($Q,`px;
                min-height: `).concat($Q,`px;
                display: flex;
                flex-direction: row;
                cursor: pointer;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
            }`),d+=R()+`.alan-btn__chat-mic-btn.active::before {
                content: '';
                position: absolute;
                z-index: -1;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                background-color:  `.concat(((At=($n=(_n=(qn=(Pn=(jn=E==null?void 0:E.chatOptions)===null||jn===void 0?void 0:jn.textChat)===null||Pn===void 0?void 0:Pn.popup)===null||qn===void 0?void 0:qn.icons)===null||_n===void 0?void 0:_n.general)===null||$n===void 0?void 0:$n.default)===null||At===void 0?void 0:At.fill)||"#C8C8CC",`;
                opacity: 0.3;
                border-radius: 50%;
            }`),d+=R()+`.alan-btn__chat-notifications-bubble {
                position: absolute;
                right: 4px;
                top: -4px;
                height: 20px;
                width: 20px;
                background-color:  `.concat(((gt=(Qt=(Bt=E==null?void 0:E.chatOptions)===null||Bt===void 0?void 0:Bt.textChat)===null||Qt===void 0?void 0:Qt.notifications)===null||gt===void 0?void 0:gt.backgroundColor)||"rgba(208, 2, 27, 1)",`;
                color:  `).concat(((It=(Ct=(Et=E==null?void 0:E.chatOptions)===null||Et===void 0?void 0:Et.textChat)===null||Ct===void 0?void 0:Ct.notifications)===null||It===void 0?void 0:It.color)||"rgba(255, 255, 255, 1)",`;
                border-radius: 50%;
                z-index: `).concat(gQ+1,`;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 10px;
            }`),d+=R()+`.alan-btn__chat-notifications-bubble:empty {
                display: none;
            }`,SA()||(d+=R()+`.alan-btn__chat-mic-btn.active:hover::before {
                opacity: 0.35;
            }`),d+=R()+`.alan-btn__chat-mic-btn svg {
            }`,d+=R()+`.alan-btn__chat-mic-btn svg path {
                fill: `.concat(((Dt=(Ft=(et=(tt=(nt=(wt=E==null?void 0:E.chatOptions)===null||wt===void 0?void 0:wt.textChat)===null||nt===void 0?void 0:nt.popup)===null||tt===void 0?void 0:tt.icons)===null||et===void 0?void 0:et.general)===null||Ft===void 0?void 0:Ft.default)===null||Dt===void 0?void 0:Dt.fill)||"rgba(23, 23, 23, 1)",`;
            }`),SA()||(d+=R()+`.alan-btn__chat-mic-btn:hover svg path {
                fill: `.concat(((Ut=(ot=(at=(st=(ct=(it=E==null?void 0:E.chatOptions)===null||it===void 0?void 0:it.textChat)===null||ct===void 0?void 0:ct.popup)===null||st===void 0?void 0:st.icons)===null||at===void 0?void 0:at.general)===null||ot===void 0?void 0:ot.hover)===null||Ut===void 0?void 0:Ut.fill)||"#007AFF",`;
            }`)),d+=R()+`.alan-text-chat__animated-btn-bars {
                height:`.concat($Q,`px;
                width:`).concat($Q,`px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                background: `).concat(((ft=(dt=(rt=(Gt=(Mt=(lt=E==null?void 0:E.chatOptions)===null||lt===void 0?void 0:lt.textChat)===null||Mt===void 0?void 0:Mt.popup)===null||Gt===void 0?void 0:Gt.icons)===null||rt===void 0?void 0:rt.general)===null||dt===void 0?void 0:dt.hover)===null||ft===void 0?void 0:ft.fill)||"#007AFF",`;
                display:none;
            }`),d+=R()+`.alan-btn__chat-mic-btn.active .alan-text-chat__animated-btn-bars  {
                display: flex;
            }`,d+=R()+`.alan-btn__chat-mic-btn.active svg  {
                display: none;
            }`,d+=R()+`.alan-text-chat__bar {
                background: #ffffff;
                bottom: 1px;
                height: 3px;
                width: 2px;
                margin: 0px 1px;
                border-radius: 5px;
            }`,d+=R()+`.alan-text-chat__bar-1 {
                animation: alan-btn__sound-bar-1 0ms -1200ms linear infinite alternate;
            }`,d+=R()+`.alan-text-chat__bar-2 {
                animation: alan-btn__sound-bar-2 0ms -1200ms linear infinite alternate;
            }`,d+=R()+`.alan-text-chat__bar-3 {
                animation: alan-btn__sound-bar-3 0ms -1200ms linear infinite alternate;
            }`,d+=R()+_A("alan-btn__sound-bar-1",`
            0% {
      
                height: 3px; 
            }
            100% {
                  
                height: 10px;        
            }`),d+=R()+_A("alan-btn__sound-bar-2",`
            0% {
      
                height: 8px; 
            }
            100% {
                  
                height: 15px;        
            }`),d+=R()+_A("alan-btn__sound-bar-3",`
            0% {
      
                height: 12px; 
            }
            100% {
                  
                height: 28px;        
            }`),d+=R()+".alan-text-chat__bar:nth-child(1)  { animation-duration: 474ms; }",d+=R()+".alan-text-chat__bar:nth-child(2)  { animation-duration: 433ms; }",d+=R()+".alan-text-chat__bar:nth-child(3)  { animation-duration: 407ms; }",d+=R()+".alan-text-chat__bar:nth-child(4)  { animation-duration: 458ms; }",d+=R()+".alan-text-chat__bar:nth-child(5)  { animation-duration: 400ms; }",d+=R()+".alan-text-chat__bar:nth-child(6)  { animation-duration: 427ms; }",d+=R()+`.alan-btn__chat-request {
                margin-bottom: 16px;
                max-width: 90%;
                min-height: 41px;
                padding: 9px 20px;
                line-height: 1.53;
                display: block;
                float: right;
                clear: both;
                border-radius: 20px;
                position: relative;
                box-shadow: 0px 1px 3px rgba(16, 39, 126, 0.2);
                background-color: `.concat(((Nt=(ht=(Yt=(Rt=E==null?void 0:E.chatOptions)===null||Rt===void 0?void 0:Rt.textChat)===null||Yt===void 0?void 0:Yt.bubbles)===null||ht===void 0?void 0:ht.request)===null||Nt===void 0?void 0:Nt.backgroundColor)||"rgba(178, 214, 255, 1)",`;
                color: `).concat(((kt=(bt=(Jt=(ut=E==null?void 0:E.chatOptions)===null||ut===void 0?void 0:ut.textChat)===null||Jt===void 0?void 0:Jt.bubbles)===null||bt===void 0?void 0:bt.request)===null||kt===void 0?void 0:kt.color)||"rgba(23, 23, 23, 1)",`;
                font-size: `).concat(((Lt=(Xt=(mt=(Zt=E==null?void 0:E.chatOptions)===null||Zt===void 0?void 0:Zt.textChat)===null||mt===void 0?void 0:mt.bubbles)===null||Xt===void 0?void 0:Xt.request)===null||Lt===void 0?void 0:Lt.fontSize)||"15",`px;
                word-break: break-word;
                text-align: left;
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`),d+=R()+`.alan-btn__chat-request * {
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`;var JB=+(((St=(Ht=(pt=(yt=E==null?void 0:E.chatOptions)===null||yt===void 0?void 0:yt.textChat)===null||pt===void 0?void 0:pt.bubbles)===null||Ht===void 0?void 0:Ht.response)===null||St===void 0?void 0:St.fontSize)||15);d+=R()+`.alan-btn__chat-response {
                margin-bottom: 16px;
                max-width: 90%;
                min-height: 41px;
                padding: 9px 20px;
                line-height: 1.53;
                display: block;
                float: left;
                clear: both;
                border-radius: 20px;
                position: relative;
                background-color: `.concat(((Tt=(Ot=(Vt=(Wt=E==null?void 0:E.chatOptions)===null||Wt===void 0?void 0:Wt.textChat)===null||Vt===void 0?void 0:Vt.bubbles)===null||Ot===void 0?void 0:Ot.response)===null||Tt===void 0?void 0:Tt.backgroundColor)||"rgba(255, 255, 255, 1)",`;
                box-shadow: 0px 1px 3px rgba(16, 39, 126, 0.2);
                color: `).concat(((Kt=(zt=(vt=(xt=E==null?void 0:E.chatOptions)===null||xt===void 0?void 0:xt.textChat)===null||vt===void 0?void 0:vt.bubbles)===null||zt===void 0?void 0:zt.response)===null||Kt===void 0?void 0:Kt.color)||"rgba(23, 23, 23, 1)",`;
                font-size: `).concat(JB,`px;
                word-break: break-word;
                text-align: left;
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`),d+=R()+`.alan-btn__chat-response.with-images {
                min-width: 90%;
            }`,d+=R()+`.alan-chat-small .alan-btn__chat-request {
                max-width: 100%;
            }`,d+=R()+`.alan-chat-small .alan-btn__chat-response {
                max-width: 100%;
            }`,d+=R()+`.alan-chat-small .alan-btn__chat-response.with-images {
                min-width: 100%;
            }`,d+=R()+`.alan-btn__chat-request.animated {
                opacity:0;
                animation: chat-bubble-appear-w-opacity 300ms ease-in-out forwards;
                animation-delay: 100ms;
            }`,d+=R()+`.alan-btn__chat-response.animated {
                opacity:0;
                animation: chat-bubble-appear-w-opacity 300ms ease-in-out forwards;
                animation-delay: 200ms;
            }`,d+=R()+_A("chat-bubble-appear-w-opacity",`
            0% { opacity:0;}
              
            100% {
                opacity:1;
            }`),d+=R()+`.alan-btn__chat-response * {
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper {
                display: flex;
                flex-wrap: wrap;
                position: relative;
                top: -9px;
                left: -20px;
                width: calc(100% + 40px);
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper-left-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 12px;
                opacity:0.85;
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper-right-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 12px;
                opacity:0.85;
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper-left-arrow:hover {
                opacity:1;
                cursor: pointer;
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper-right-arrow:hover {
                opacity:1;
                cursor: pointer;
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper-left-arrow.invisible {
                opacity:0;
                pointer-events: none;
            }`,d+=R()+`.alan-btn__chat-response-imgs-wrapper-right-arrow.invisible {
                opacity:0;
                pointer-events: none;
            }`,d+=R()+`.alan-btn__chat-response-img-block {
                overflow: hidden;
                border-radius: 20px 20px 0 0;
                width: 100%;
                display: flex;
            }`,d+=R()+`.alan-btn__chat-response-video {
                width: 100%;
                min-width: 100%;
                min-height: 220px;
                height: 220px;
                max-height: 220px;
            }`,d+=R()+`.alan-btn__chat-response-img {
                cursor: pointer;
                transition: transform 300ms ease-in-out;
                width: 100%;
                min-width: 100%;
                min-height: 220px;
                height: 220px;
                max-height: 220px;
                object-fit: contain;
                pointer-events: initial;
            }`,d+=R()+`.alan-btn__chat-response-img.img-vertical {
                object-fit: cover;
            }`,d+=R()+`.alan-btn__chat-response-img.not-found {
                opacity: 0.7;
            }`,SA()||(d+=R()+`.alan-btn__chat-response-imgs-wrapper:hover .alan-btn__chat-response-img {
                    transform: scale(1.04);
                    transition: transform 300ms ease-in-out;
                }`),d+=`.alan-btn__image-preview-overlay {
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                min-height: 100vh;
                width: 100vw;
                min-width: 100vw;
                background-color: rgba(0,0,0,0.6);
                display: flex;
                align-items: center;
                justify-content: center;
            }`,d+=`.alan-btn__image-preview-overlay img {
                max-width: calc(100% - 100px);
                max-height: calc(100% - 100px);
            }`,d+=`@media (orientation: landscape) { 
                .alan-btn__image-preview-overlay {
                    align-items: flex-start;
                    padding-top: 40px;
                }
                .alan-btn__image-preview-overlay img {
                    max-height: calc(100% - 120px);
                }
                .alan-btn__image-preview-overlay iframe {
                    max-height: calc(100% - 120px);
                }
            }`,d+=`.alan-btn__image-preview-overlay iframe {
                max-width: calc(100% - 100px);
                max-height: calc(100% - 100px);
                width: calc(100% - 100px);
                height: calc(100% - 100px);
            }`,d+=`.alan-btn__image-preview-overlay-close-icon {
                position: absolute;
                top: 16px;
                right: 16px;
                cursor: pointer;
                opacity: 0.7;
            }`,SA()||(d+=`.alan-btn__image-preview-overlay-close-icon:hover {
                    opacity: 1;
                }`),d+=`.alan-btn__image-preview-overlay-left-icon {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 16px;
                cursor: pointer;
                opacity: 0.7;
            }`,d+=`.alan-btn__image-preview-overlay-right-icon {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 16px;
                cursor: pointer;
                opacity: 0.7;
            }`,d+=`.alan-btn__image-preview-overlay-left-icon.invisible {
                opacity:0;
                pointer-events: none;
            }`,d+=`.alan-btn__image-preview-overlay-right-icon.invisible {
                opacity:0;
                pointer-events: none;
            }`,SA()||(d+=`.alan-btn__image-preview-overlay-left-icon:hover {
                    opacity: 1;
                }`,d+=`.alan-btn__image-preview-overlay-right-icon:hover {
                    opacity: 1;
                }`),d+=R()+`.alan-btn__chat-response-links-wrapper {
                display: flex;
                flex-wrap: wrap;
                border-top: 1px solid #D2DAE5;
                padding: 10px 0 0 0;
                margin-top: 10px;
                align-items: center;
            }`,d+=R()+`.alan-btn__chat-response-link {
                background: #EAF2FC;
                border-radius: 15px;
                padding: 6px 8px;
                margin-right: 10px;
                margin-top: 4px;
                margin-bottom: 4px;
                display: flex;
                align-items: center;
                max-width: 100%;
                font-size: `.concat(JB-2,`px;
            }`),d+=R()+`.alan-btn__chat-messages a.alan-btn__chat-response-link:hover  {
                text-decoration: none !important;
            }`,d+=R()+`.alan-btn__chat-response-link-title {
                overflow: hidden;
                max-width: calc(100% - 15px);
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }`,d+=R()+`.alan-btn__chat-response-link svg {
                flex-shrink: 0;
                margin-right: 6px;
            }`,SA()||(d+=R()+`a.alan-btn__chat-response-link:hover svg path  {
                    fill: #0078FF;
                }`),d+=R()+`.alan-btn__chat-response-likes-wrapper  {
                font-size: `.concat(JB+5,`px;
                margin-top: 10px;
            }`),d+=R()+`.alan-btn__chat-response-like-btn  {
                cursor: pointer;
            }`,d+=R()+`.alan-btn__chat-response-dislike-btn  {
                cursor: pointer;
            }`,SA()||(d+=R()+`.alan-btn__chat-response-like-btn  {
                    opacity: 0.7;
                    cursor: pointer;
                }`,d+=R()+`.alan-btn__chat-response-like-btn:hover  {
                    opacity: 1;
                }`,d+=R()+`.alan-btn__chat-response-dislike-btn  {
                    opacity: 0.7;
                }`,d+=R()+`.alan-btn__chat-response-dislike-btn:hover  {
                    opacity: 1;
                }`),d+=R()+`.alan-incoming-msg {
                display: flex;
                align-items: center;
                overflow: hidden;
                animation:chat-bubble-appear-w-opacity 300ms ease-in-out forwards 100ms, hide-buble 300ms forwards ease 30000ms !important;
            }`,d+=R()+_A("hide-buble",`
            0% { 
                height: 41px; 
                max-height:41px;    
                min-height: 41px;
            }
              
            100% {
                height: 0px;
                max-height: 0px;
                min-height: 0px;
                padding: 0px;
                margin-bottom:0;
            }`),d+=R()+`.alan-btn__chat-incomming-msg-wrapper {
                display: flex;
                align-items: center;
            }`,d+=R()+`.alan-btn__chat-incomming-msg {
                border-radius: 50%;
                background-color: `.concat(((_t=(qt=(Pt=(jt=E==null?void 0:E.chatOptions)===null||jt===void 0?void 0:jt.textChat)===null||Pt===void 0?void 0:Pt.bubbles)===null||qt===void 0?void 0:qt.response)===null||_t===void 0?void 0:_t.color)||"rgba(8, 8, 8, 1)",`;
                margin: 2px;
                height: 6px;
                width: 6px;
                animation: alan-dot-bounce 1.5s infinite ease;
            }`),d+=R()+`.msg-2 {
                animation-delay: .2s;
            }`,d+=R()+`.msg-3 {
                animation-delay: .3s;
            }`,d+=R()+_A("alan-dot-bounce",`
            0%, 100% { opacity:1;}
              
            60% {
                transform: translateY(3px);
                opacity:.0;
            }`);function BU(Fg){for(var wE=0;wE<Fg.length;wE++){var _C=Fg[wE];d+=R()+".alan-btn__chat-messages ".concat(_C)}}BU([`a {
                    color: #4183c4!important;
                    text-decoration: none!important;
                }`,`a:hover {
                    text-decoration: underline!important;
                }`,`p {
                    margin: 0!important;
                    font-size: `.concat(JB,`px!important;
                }`),`blockquote {
                    margin: 0!important;
                    font-size: `.concat(JB,`px!important;
                }`),`dl {
                    margin: 0!important;
                    font-size: `.concat(JB,`px!important;
                }`),`table {
                    margin: 0!important;
                    font-size: `.concat(JB,`px!important;
                    word-break: initial!important;
                }`),`ul {
                    padding-left: 30px!important; 
                    margin: 0!important; 
                    list-style-type: disc!important;
                    font-size: `.concat(JB,`px!important;
                }`),`ul li {
                   list-style-type: disc!important;
                   font-size: `.concat(JB,`px!important;
                }`),`ol {
                    padding-left: 30px!important;
                    margin: 0!important; 
                    list-style-type: decimal!important;
                    font-size: `.concat(JB,`px!important;
                }`),`ol li {
                    list-style-type: decimal!important;
                    font-size: `.concat(JB,`px!important;
                }`),"h1 { font-size: 2.13em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h2 { font-size: 1.86em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h3 { font-size: 1.6em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h4 { font-size: 1.46em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h5 { font-size: 1.33em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h6 { font-size: 1.2em!important;  line-height: 1.7!important; margin: 0 0 10px 0!important; font-weight: normal!important;  text-transform: none!important;}","h1:after { display: none!important;}","h2:after { display: none!important;}","h3:after { display: none!important;}","h4:after { display: none!important;}","h5:after { display: none!important;}","h6:after { display: none!important;}","h1:before { display: none!important;}","h2:before { display: none!important;}","h3:before { display: none!important;}","h4:before { display: none!important;}","h5:before { display: none!important;}","h6:before { display: none!important;}",`h1 + p {
                    margin-top: 10px!important;
                }`,`h2 + p {
                    margin-top: 10px!important;
                }`,`h3 + p {
                    margin-top: 10px!important;
                }`,`h4 + p {
                    margin-top: 10px!important;
                }`,`h5 + p {
                    margin-top: 10px!important;
                }`,`h6 + p {
                    margin-top: 10px!important;
                }`,`p + p {
                    margin-top: 10px!important;
                }`,`* + pre {
                    margin-top: 8px!important;
                }`,`pre + * {
                    margin-top: 16px!important;
                    font-size: `.concat(JB,`px!important;
                }`),`* + ul {
                    margin-top: 8px!important;
                }`,`ul + * {
                    margin-top: 16px!important;
                }`,`* + ol {
                    margin-top: 8px!important;
                }`,`ol + * {
                    margin-top: 16px!important;
                }`,`* + blockquote {
                    margin-top: 8px!important;
                }`,`blockquote + * {
                    margin-top: 16px!important;
                }`,`audio {
                    max-width: 100%!important;
                    max-height: 100%!important;
                }`,`video {
                    max-width: 100%!important;
                    max-height: 100%!important;
                }`,`img {
                    max-width: 100%!important;
                    pointer-events: auto!important;
                    cursor: pointer;
                    max-height: 500px;
                }`,`code {
                    background-color: #F8F8F8!important;
                    border-radius: 3px!important;
                    border: 1px solid #DDD!important;
                    font-family: Consolas, "Liberation Mono", Courier, monospace!important;
                    margin: 0 2px!important;
                    padding: 0 5px!important;
                    white-space: pre-line!important;
                    font-size: `.concat(JB,`px!important;
                }`),`pre {
                    background-color: #F8F8F8!important;
                    border-radius: 3px!important;
                    border: 1px solid #DDD!important;
                    font-family: Consolas, "Liberation Mono", Courier, monospace!important;
                    padding: 0 5px!important;
                    white-space: pre-line!important;
                    font-size: `.concat(JB,`px!important;
                }`),`pre code {
                    border: none!important;
                    margin: 0!important;
                    padding: 0!important;
                    white-space: pre-wrap!important;
                    font-size: `.concat(JB,`px!important;
                }`),`hr {
                    display: block!important;
                    unicode-bidi: isolate!important;
                    margin-block-start: 0.5em!important;
                    margin-block-end: 0.5em!important;
                    margin-inline-start: auto!important;
                    margin-inline-end: auto!important;
                    overflow: hidden!important;
                    border-style: inset!important;
                    border-width: 1px!important;
                }`,`blockquote {
                    padding: 5px 20px 0!important;
                    border-left: 5px solid #beb7b7!important;
                    font-size: `.concat(JB,`px!important;
                }`),`table > tbody > tr > td {
                    background-color: #fff!important;
                    color: #000!important;
                }`,`table > tbody > tr > th {
                    color: #000!important;
                    background-color: #fff!important;
                }`,`table > thead > tr > th {
                    padding: 4px!important;
                    border-top: 1px solid #b7b5b5!important;
                }`,`table > tbody > tr > th {
                    padding: 4px!important;
                    border-top: 1px solid #b7b5b5!important;
                }`,`table > thead > tr > td {
                    padding: 4px!important;
                    border-top: 1px solid #b7b5b5!important;
                }`,`table > tbody > tr > td {
                    padding: 4px;
                    border-top: 1px solid #b7b5b5!important;
                }`,`strong {
                    font-weight: bold!important;
                }`]),d+=R()+`.alan-btn__chat-popup {
               position: relative;
               margin-bottom: 16px;
               -webkit-touch-callout: text; /* iOS Safari */
               -webkit-user-select: text; /* Chrome/Safari/Opera */
               -khtml-user-select: text; /* Konqueror */
               -moz-user-select: text; /* Firefox */
               -ms-user-select: text; /* IE/Edge */
               user-select: text;
            }`,d+=R()+`.alan-btn__chat-popup * {
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`,d+=R(!0)+`.hide-alan-btn-when-text-chat-is-opened-immediately .alanBtn {
                transform: scale(0);
                opacity: 0;
                animation: text-chat-disappear-anim 0ms ease-in-out forwards;
            }`,d+=R(!0)+`.hide-alan-btn-when-text-chat-is-opened .alanBtn {
                transform: scale(0);
                opacity: 0;
                animation: text-chat-disappear-anim `.concat(bE,`ms ease-in-out forwards;
            }`),d+=R(!0)+`.text-chat-is-closing .alanBtn {
                transform: scale(0);
                opacity: 0;
                animation: text-chat-appear-anim `.concat(bE,`ms ease-in-out forwards;
            }`),d+=R(!0)+`.hide-alan-btn-when-text-chat-is-opened .alanBtn-recognised-text-holder {
                display: none;
            }`,d+=R()+` mjx-container svg {
                max-width: 100%;
            }`,d+=R()+".alan-overlay {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",d+=R()+".alan-overlay-popup.alan-btn-lib__default-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:6px 30px 6px 12px;text-align: left;width: 220px;background: rgb(255 255 255);}",d+=R()+".alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__right {border-top-right-radius: 0!important;}",d+=R()+".alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__left {border-top-left-radius: 0!important;}",d+=R()+".alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__left {border-bottom-left-radius: 0!important;}",d+=R()+".alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__right {border-bottom-right-radius: 0!important;}",d+=R()+".alan-overlay-popup {position: fixed;opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",d+=R()+".alan-overlay-popup__body {position:relative;color: #0D1940;font-size: 16px;line-height: 20px;}",d+=R()+'.alan-overlay-popup__ok {background:url("'+QD+'") no-repeat center; background-size:100% 100%;min-height:14px;height:14px;max-height:14px;min-width:14px;width:14px;max-width:14px;opacity:0;transition:opacity 300ms ease-in-out;position:absolute;top:8px;right:8px;cursor: pointer;pointer-events: auto!important;}',d+=R()+".alan-overlay-popup__ok:hover {opacity:0.9}",d+=R()+".alan-overlay-popup:hover .alan-overlay-popup__ok{opacity:1;transition:opacity 300ms ease-in-out;}",d+=R()+_A("alan-gradient","0%{backgroundPosition: 0 0;}50%{backgroundPosition: -100% 0;}100%{backgroundPosition: 0 0;}"),d+=R()+_A("alan-pulsating","0%{transform: scale(1.11111);}50%{transform: scale(1.0);}100%{transform: scale(1.11111);}"),d+=R()+_A("alan-text-chat-pulsating","0%{transform: scale(1.09);}50%{transform: scale(1.0);}100%{transform: scale(1.09);}"),d+=R()+_A("alan-mic-pulsating","0%{transform: scale(0.91);}50%{transform: scale(1.0);}100%{transform: scale(0.91);}"),d+=R()+_A("alan-triangle-mic-pulsating","0%{transform: scale(0.94);}50%{transform: scale(1.0);}100%{transform: scale(0.94);}"),d+=R()+_A("alan-fade-in","0%{opacity: 0;}100%{opacity:1;}"),d+=R()+_A("alan-fade-out","0%{opacity: 1;}100%{opacity:0;}"),d+=R()+_A("text-holder-appear",`0%{
                    opacity:0;
                    color:transparent;
                    background-color:rgba(245, 252, 252, 0.0);
                    border: solid 1px transparent;
                }
                100%{
                    opacity:1;
                    color:#000;
                    background-color:rgba(245, 252, 252, 0.8);
                }`),d+=R()+_A("text-holder-disappear",`0%{
                    opacity:1; 
                    color:#000;
                    background-color:rgba(245, 252, 252, 0.8);  
                }
                100%{
                    opacity:0; 
                    color:transparent;
                    background-color:rgba(245, 252, 252, 0.0);
                    border: solid 1px transparent;
                }`);function QU(Fg,wE){for(var _C=[0,10,20,30,40,50,60,70,80,90,100],fi="",nE=0;nE<_C.length;nE++){var Ee=0;wE===0?Ee=nE===0||nE===10?1:0:Ee=nE===wE?1:0,fi+="".concat(_C[nE],"% {  opacity: ").concat(Ee,";  } ")}return R()+_A(Fg,fi)}for(var qC=0;qC<10;qC++)d+=QU("logo-state-".concat(qC+1,"-animation"),qC);d+=R()+_A("disconnected-loader-animation","0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }"),d+=R()+_A("oval1-animation","0%{  transform: rotate(-315deg);  } 50%{  transform: rotate(-495deg);  } 100%{  transform: rotate(-315deg);  }"),d+=R()+_A("oval2-animation","0%{  transform: rotate(-45deg);  } 50%{  transform: rotate(-215deg);  } 100%{  transform: rotate(-45deg);  }"),d+=R()+_A("alan-text-fade-in","0%{  opacity: 0;  } 100%{   opacity: 1;  }"),d+=R()+".alanBtn-bg-default.super-hidden{opacity:0!important;display:none;}",d+=".no-scroll-for-popup { overflow:hidden!important; position:fixed; }",d+=".no-scroll-for-popup video { visibility: hidden }",d+=".no-scroll-for-popup audio { visibility: hidden }",d+=".no-scroll-for-popup .alan-btn__chat-holder video { visibility: initial }",d+=".no-scroll-for-popup .alan-btn__chat-holder audio { visibility: initial }";var Ae=yC;E!=null&&E.btnOptions&&(E!=null&&E.btnOptions.btnLayerOptions?Ae=yC:Ae=E!=null&&E.btnOptions?Q(Q({},yC),E==null?void 0:E.btnOptions):yC);var yB,Be,ri=(i={},i[hB?"textChat":"idle"]=["default"],i.listen=["listening"],i.process=["intermediate","understood"],i.reply=["speaking"],i),Qe,Lg,di=Object.keys(ri);for(DQ=0;DQ<di.length;DQ++){Be=di[DQ],Qe=ri[Be],yB=Ae[Be];for(var ge=0;ge<Qe.length;ge++)Lg=Qe[ge],yB.background&&(d+=R()+".alanBtn-bg-"+Lg+" {",d+="background-image: linear-gradient(122deg,"+yB.background.color[0]+","+yB.background.color[1]+");",d+="}",d+=R()+".alanBtn-oval-bg-"+Lg+" {",d+="background-image: linear-gradient(122deg,"+yB.background.color[0]+","+yB.background.color[1]+");",d+="}"),yB.hover&&(d+=R()+".alanBtn"+uQ+" .alanBtn-bg-"+Lg+":not(.super-hidden) {",d+="background-image: linear-gradient(122deg,"+yB.hover.color[0]+","+yB.hover.color[1]+");",d+="}",d+=R()+".alanBtn:active .alanBtn-bg-"+Lg+":not(.super-hidden) {",d+="background-image: linear-gradient(122deg,"+yB.hover.color[0]+","+yB.hover.color[1]+");",d+="}",d+=R()+".alanBtn"+uQ+" .alanBtn-oval-bg-"+Lg+":not(.super-hidden) {",d+="background-image: linear-gradient(122deg,"+yB.hover.color[0]+","+yB.hover.color[1]+");",d+="}",d+=R()+".alanBtn:active .alanBtn-oval-bg-"+Lg+":not(.super-hidden) {",d+="background-image: linear-gradient(122deg,"+yB.hover.color[0]+","+yB.hover.color[1]+");",d+="}")}CE.innerHTML=d,Z.shadowDOM?Z.shadowDOM.prepend(CE):document.getElementsByTagName("head")[0].appendChild(CE),IE&&(IE.disabled=!0,IE.parentNode.removeChild(IE))}function _A(E,i){for(var l=["@-webkit-keyframes","@keyframes"],u="",V=0;V<l.length;V++)u+=l[V]+" "+E+"{"+i+"} ";return u}function ED(){return"12"}function CD(){o=Z.key,$D(),MB(WE(HQ)),window.tutorProject=window.alan.project(Z.key,ID(Z.authData),Z.host,null,{platform:jB==="demo"?"alanplayground":null,userAgent:navigator.userAgent,appName:window.location.hostname}),console.time("Alan: receiving options time"),window.tutorProject.on("connectStatus",xE),window.tutorProject.on("options",Ng),window.tutorProject.on("scripts",iw),window.tutorProject.on("text",tw),window.tutorProject.on("parsed",QE),dA.on("command",Dw),dA.on("afterText",ew)}Z&&(Z.alanAudio&&(dA=Z.alanAudio),Z.key?CD():(wg()||console.error("The Alan Button key wasn't provided"),MB(WE())));function ID(E){var i=E||{};return i.uuid=lA(),console.info("Alan: connect to dialog: ",Z.keepDialogSession!==!1?pC():null),Q(Q({},i),{dialogId:Z.keepDialogSession!==!1?pC():null,capabilities:{textFormats:["text","html","markdown"]}})}function iQ(){var E;return Z.key?(E=Z.key,E.substr(0,E.indexOf("/"))):jB}function xa(E,i){i===void 0&&(i=100);var l=null,u;return function(){for(var V=[],T=0;T<arguments.length;T++)V[T]=arguments[T];u||(E.apply(this,V),u=!0,l===null&&(l=setTimeout(function(){l=null,u=!1},i)))}}function Cw(E,i){var l,u=i||100;return function(V){clearTimeout(l),l=setTimeout(function(){E.apply(this,V)},u)}}var va=Cw(function(){TE(!0,!0)},400),wD=window.innerHeight,nD=window.orientation;function za(){return/apple/i.test(navigator.vendor)}window.onresize=function(){if(!wg()&&!lB){var E=Math.abs(wD-window.innerHeight),i=(SA()||ko())&&za(),l=nD!==window.orientation,u=E!==0,V=i&&(E===84||E===95||E===50||E===0);if(nD=window.orientation,wD=window.innerHeight,(l||xI||V)&&u){var T=$.getBoundingClientRect(),AA;E===0?AA=T.top+84:AA=T.top,l&&window.orientation===0?qF():$.style.setProperty("top",gi(AA)+"px","important")}TE(!1),va({});var tA=iA.getBoundingClientRect();gw(tA.width,tA.height,!1)}};var tD=!1;function Ka(){if(navigator.permissions){var E="microphone";navigator.permissions.query({name:E}).then(function(i){i.state==="prompt"&&(PD()?tD||(tD=!0,SC({overlay:!0,buttonUnderOverlay:!0})):SC({overlay:!0,buttonUnderOverlay:!0}),uB({micPermissionPrompt:!0})),i.state!=="granted"&&uB({micAllowed:!1})}).catch(function(i){console.warn("Not possible to detect mic permissions, details: ",i),setTimeout(function(){return uB({micAllowed:dA.isMicAllowed()})},300)})}else setTimeout(function(){return uB({micAllowed:dA.isMicAllowed()})},300)}dA.on("popup",Bo);function eD(E){Ka(),Z.onBeforeMicStart&&Z.onBeforeMicStart(),dA.on("micStart",UD),dA.on("micStop",ww),dA.on("micAllowed",aD),dA.on("audioRunning",oD),DD(),dA.on("micFail",lD),dA.on("playStart",GD),dA.on("playStop",rD),dA.start(E),Z.onMicStarted&&Z.onMicStarted()}function ja(){J||(J=!0,uB({firstClick:!0}))}function Pa(){XE||fC&&(hB&&cB?OE():(FD(),this.blur()))}function qa(){FD({activate:!0})}function Iw(){return"alan-btn-dialogId-for-projectId-".concat(iQ())}function pC(){return S?localStorage.getItem(Iw()):null}function _a(E){S&&E&&localStorage.setItem(Iw(),E)}function $a(){S&&localStorage.removeItem(Iw())}function FD(E){if(dA)AQ==="default"?OE(E):(dA.stop(),AQ===WQ?setTimeout(function(){BE(OI)},300):AQ===SQ&&setTimeout(function(){BE(ZE)},300));else throw new Error("No alan audio instance was provided")}cA.addEventListener("click",Pa);function OE(E){WB(),ja(),AQ==="default"&&Co();var i=!0;if(hB&&(i=!1,cB&&(uB({buttonClicked:!0}),gw(ng("width"),ng("height"),!0),vD(),VE(iA)),(E==null?void 0:E.activate)===!0&&uE&&uE&&(i=!0)),!i)return new Promise(function(u){u()});if(FQ){FQ===ZE&&uB({micAllowed:!1}),BE(FQ);return}var l=new Promise(function(u,V){if(MA){V({err:Na});return}if(Bw()){V({err:ha});return}function T(AA){AA==="authorized"&&(window.tutorProject.off("connectStatus",T),eD(u))}if(dA)switch(AQ){case yQ:try{eD(u)}catch{FQ=XF,V({err:Ra})}break;case HQ:case Rg:window.tutorProject.on("connectStatus",T);break;case SQ:V({err:Ya}),uB({micAllowed:!1});break;case dQ:case pQ:case Ag:case Bg:u(),uB({micAllowed:!0});break}else V({err:ua})});return l}function HC(){MA||dA.stop()}function Ao(E){return new Promise(function(i,l){var u={text:E};u.accept={voice:fg,image:!0,text:!0,format:["markdown","text","html"]},u.ctx={url:window.location.href},window.tutorProject.call("text",u,function(V,T){V?l({error:V}):T&&T.error?l(Q({},T)):i(T)})})}function DD(){dA.isAudioRunning()&&uB({playAllowed:!0})}function Bo(E){if(WB(),!wg()){var i=E!=null&&E.popup?E.popup:E;i.type!=="chat"&&SA()||(i&&i.html&&(i.html=kA(i.html)),Z.onEvent&&Z.onEvent(Object.assign(E,{name:"popup"})),E&&SC(i))}}function iD(E,i){if(E.style){var l=document.createElement("style");l.setAttribute("id","alan-stylesheet-popup"),l.type="text/css";var u="alan-popup-"+YA();i.classList.add(u),l.innerHTML=E.style.replace(/(\.-?[_a-zA-Z]+[_a-zA-Z0-9-:]*\s*\{)/gi,".".concat(u," $&")),Z.shadowDOM?Z.shadowDOM.prepend(l):document.getElementsByTagName("head")[0].appendChild(l)}}function SC(E,i){if(!MA&&!Aw&&KB){if(E.type==="chat"){OQ(E);return}WC=E;var l=E.message,u=E.buttonMarginInPopup,V=E.overlay,T=parseInt(eB,10),AA=document.createElement("div"),tA=$.getBoundingClientRect(),GA=2147483647,hA=12;Aw=!0,AA.id="alan-overlay-popup",AA.classList.add("alan-overlay-popup"),E.buttonUnderOverlay!==!0&&(cA.style.zIndex=GA.toString()),AA.style.zIndex=(GA-2).toString(),E.preventClick&&(cA.style.pointerEvents="none"),iD(E,AA),AA.classList.add(QQ?"alan-btn-lib__left":"alan-btn-lib__right"),lB?(AA.style.position="absolute",AA.style[QQ?"left":"right"]=(-u||0)+"px",AA.style[gg?"top":"bottom"]=(u?-u:T+hA)+"px",AA.classList.add(gg?"alan-btn-lib__top":"alan-btn-lib__bottom")):(QQ?AA.style.left=tA.x+(-u||0)+"px":AA.style.right=KF+(-u||0)+"px",tA.top>80?(AA.classList.add("alan-btn-lib__bottom"),AA.style.top=tA.top+(u?T+u:-hA)+"px",AA.style.setProperty("transform","translateY(-100%)","important")):(AA.classList.add("alan-btn-lib__top"),AA.style.top=tA.top+(u?-u:T+hA)+"px")),E.html?AA.innerHTML=E.html:l&&(AA.classList.add("alan-btn-lib__default-popup"),AA.innerHTML='<div class="alan-overlay-popup__body">'+l+"</div>");var ZA=document.createElement("div");if(ZA.id="alan-overlay-ok-btn",ZA.classList.add("alan-overlay-popup__ok"),E.html&&AA.children[0]?AA.children[0].appendChild(ZA):AA.appendChild(ZA),$.appendChild(AA),V&&i!==!0){var VA=document.createElement("div");VA.id="alan-overlay",VA.classList.add("alan-overlay"),VA.style.zIndex=(GA-3).toString(),$.appendChild(VA),VA.addEventListener("click",WB)}ZA.addEventListener("click",Qo),document.addEventListener("keyup",cD);var QB="showPopup";E.name&&(QB+=":"+E.name),ZF(QB)}}function Qo(){WB(),uB({popupCloseClicked:!0})}function cD(E){E.keyCode===27&&(WB(),uB({popupCloseClicked:!0}))}function WB(E,i,l){i!==!0&&(WC=null);var u=$.querySelector("#alan-overlay"),V=$.querySelector("#alan-overlay-popup");if(V){var T=$.querySelector("#alan-overlay-ok-btn");T&&T.removeEventListener("click",WB),u&&l!==!0&&(u.remove(),u.removeEventListener("click",WB)),V&&V.remove(),document.removeEventListener("keyup",cD),cA.style.zIndex=gQ,cA.style.pointerEvents="auto",Aw=!1}}var WC;function TE(E,i){var l=$.querySelector("#alan-overlay-popup");l&&(l.style.visibility=E?"visible":"hidden",E&&(WB(null,!0,i),WC&&SC(WC,i)))}function sD(E){var i="";if(!(PA||mE||!BQ)){if(!cB){E.name==="recognized"&&Io(Object.assign(E,{type:"request"}));return}dC=!0,Z.hideRecognizedText||(yA.classList.value.indexOf("alanBtn-text-appearing")===-1&&(yA.style.opacity="1",yA.classList.add("alan-btn-lib__with-text"),yA.classList.add("alanBtn-text-appearing"),yA.classList.remove("alanBtn-text-disappearing")),E.text&&(i=E.text,i.length>200&&(i=i.substr(0,200)),pE.innerHTML=i),yA.classList.contains("alan-btn-lib__absolute-positioned")&&(i.length<33?(yA.style.whiteSpace="nowrap",yA.style.minWidth="auto"):(yA.style.minWidth="236px",yA.style.whiteSpace="normal")),i.length>60&&i.length<=80?yA.classList.add("alanBtn-recognised-text-holder-long"):i.length>80?yA.classList.add("alanBtn-recognised-text-holder-super-long"):(yA.classList.remove("alanBtn-recognised-text-holder-long"),yA.classList.remove("alanBtn-recognised-text-holder-super-long")),go(i))}}function go(E){SA()||Z.hideRecognizedText||(pE.innerText=E)}function VC(E,i){if(!Z.hideRecognizedText&&dC){if(i===!0){yA.style.opacity="0",yA.classList.remove("alanBtn-text-appearing"),dC=!1;return}else yA.classList.add("alanBtn-text-disappearing"),yA.classList.remove("alanBtn-text-appearing");dC=!1,setTimeout(function(){pE.innerHTML="",yA.classList.remove("alanBtn-recognised-text-holder-long"),yA.classList.remove("alanBtn-recognised-text-holder-super-long"),yA.classList.remove("alan-btn-lib__with-text")},E||810)}}function Ng(E){var i,l,u,V,T,AA,tA,GA,hA,ZA,VA,QB,zA,vA,gB;console.log("Alan: options received"),console.timeEnd("Alan: receiving options time"),E&&E.web?(MQ=((i=E.web.alanButtonDragAndDrop)===null||i===void 0?void 0:i.keepButtonPositionAfterDnD)||E.web.keepButtonPositionAfterDnD,MQ||Wo(),Qw(MQ)):Qw(),E&&E.web&&(_Q=(l=E.web.alanButtonDragAndDrop)===null||l===void 0?void 0:l.dragAndDropEnabled),E&&E.web&&E.web.hideS2TPanel===!0?yo():Lo(),E&&E.web&&(((u=E.web.alanButtonPopup)===null||u===void 0?void 0:u.popupEnabled)===!0||E.web.popupEnabled===!0)?KB=!0:(KB=!1,WB()),wg()||(E&&E.web&&((T=(V=E.web.chatOptions)===null||V===void 0?void 0:V.textChat)===null||T===void 0?void 0:T.enabled)===!0?(hB=!0,uE=(GA=(tA=(AA=E.web.chatOptions)===null||AA===void 0?void 0:AA.textChat)===null||tA===void 0?void 0:tA.voice)===null||GA===void 0?void 0:GA.enabled,NB=(hA=E.web.chatOptions)===null||hA===void 0?void 0:hA.textChat,Gw()===null&&(!((QB=(VA=(ZA=E.web.chatOptions)===null||ZA===void 0?void 0:ZA.textChat)===null||VA===void 0?void 0:VA.audio)===null||QB===void 0)&&QB.enabled?Uw(!1):xC(!1)),ho(),(((gB=(vA=(zA=E.web.chatOptions)===null||zA===void 0?void 0:zA.textChat)===null||vA===void 0?void 0:vA.popup)===null||gB===void 0?void 0:gB.openByDefualt)===!0||No())&&vD(!0)):(hB=!1,Mw())),E&&E.web&&E.web.timeout!==void 0&&(LF=E.web.timeout,yF()),E&&E.web&&_D(E.web),po(E),Z.mode!=="tutor"&&E&&E.web&&$F(E.web.buttonSize||$g[jB].btnSize),S&&E&&localStorage.setItem(jD(),JSON.stringify(E)),E&&E.web&&E.web.playReadyToListenSound!==void 0&&Ho(E.web.playReadyToListenSound),E&&E.web&&E.web.hidden===!0?Xo():(MA&&qD(),aA||(aA=!0,uB({buttonReady:!0})))}function xE(E){if(E==="disconnected")GC!==Rg&&MB(WE(HQ));else if(E==="authorized"){MB(GC||WE());var i=window.tutorProject.getSettings().dialogId;pC()!==i&&HD(),console.info("Alan: connected to dialog - ",i,"prev. dialog: ",pC()||"-"),rg=i,_a(i),SD(!0),LQ=oo()}Z.onConnectionStatus&&Z.onConnectionStatus(E)}function aD(){uB({micAllowed:!0})}function oD(){DD()}function UD(){if(lQ){lQ=!1,dA.start();return}WB(),MB(dQ),RD(),BQ=!0,window.tutorProject&&(window.tutorProject.off("recognized",Fw),window.tutorProject.off("parsed",QE),window.tutorProject.off("options",Ng),window.tutorProject.on("recognized",Fw),window.tutorProject.on("parsed",QE),window.tutorProject.on("options",Ng))}function ww(){Eo(),rC=!1,dA.off("micStart",UD),dA.off("micStop",ww),dA.off("micAllowed",aD),dA.off("audioRunning",oD),dA.off("micFail",lD),dA.off("playStart",GD),dA.off("playStop",rD),VC(),fo(),MB(yQ),BQ=!1,window.tutorProject&&(window.tutorProject.off("parsed",QE),window.tutorProject.off("recognized",Fw),window.tutorProject.off("connectStatus",xE),window.tutorProject.off("options",Ng)),Z.onMicStopped&&Z.onMicStopped()}function lD(E){ww(),E&&(WB(),E.name==="NotAllowedError"?(MB(SQ),setTimeout(function(){J&&BE(ZE)},300)):E.name==="SecurityError"?(MB(WQ),setTimeout(function(){BE(OI)},300)):console.error(E.name+" "+E.message))}function BE(E){var i=$.querySelector("#alan-alert-popup");if(!i){var l=document.createElement("div");i=document.createElement("div");var u=2147483647;l.id="alan-overlay-for-alert",l.classList.add("alan-overlay-for-alert"),i.id="alan-alert-popup",i.classList.add("alan-alert-popup"),cA.style.zIndex=u.toString(),l.style.zIndex=(u-3).toString(),i.style.zIndex=(u-2).toString(),i.innerHTML=E;var V=document.createElement("div");V.id="alan-alert-popup-close-btn",V.classList.add("alan-alert-popup__close-btn"),i.appendChild(V),$.appendChild(i),$.appendChild(l),V.addEventListener("click",nw),l.addEventListener("click",nw),document.addEventListener("keyup",MD)}}function MD(E){E.keyCode===27&&nw()}function nw(){var E=$.querySelector("#alan-overlay-for-alert"),i=$.querySelector("#alan-alert-popup"),l=$.querySelector("#alan-alert-popup-close-btn");l&&l.removeEventListener("click",WB),E&&(E.remove(),E.removeEventListener("click",WB)),i&&i.remove(),cA.style.zIndex=gQ,cA.style.pointerEvents="auto",document.removeEventListener("keyup",MD)}function GD(E){console.log("BTN: play start"),rC=!0,MB(pQ),Eg()}function rD(E){console.log("BTN: play stop"),rC=!1,RD(),MB(dQ),Eg()}function dD(E){var i,l=Object.assign(E,{name:"text",type:"response"});((i=l.images)===null||i===void 0?void 0:i.length)>0&&(l.images=QA(l.images)),Z.onEvent&&Z.onEvent(l),OQ(l),Eg()}function tw(E){var i,l,u,V;!BQ&&((l=(i=E.ctx)===null||i===void 0?void 0:i.opts)===null||l===void 0?void 0:l.activate)===!0?OE({activate:(V=(u=E.ctx)===null||u===void 0?void 0:u.opts)===null||V===void 0?void 0:V.activate}).then(function(){dD(E)}):dD(E)}window.sendFakeMsgs=function(E){if(E&&E.length>0)for(var i=function(u){setTimeout(function(){OQ(E[u])},1e3*(u+1))},l=0;l<E.length;l++)i(l)};function ew(E){var i,l;BQ&&((l=(i=E.ctx)===null||i===void 0?void 0:i.opts)===null||l===void 0?void 0:l.deactivate)===!0&&HC()}function QE(E){var i=Object.assign(E,{name:"parsed"});Z.onEvent&&Z.onEvent(i),Eg(),sD(i)}function Fw(E){var i=Object.assign(E,{name:"recognized"});Z.onEvent&&Z.onEvent(i),E.final===!0?MB(Bg):MB(Ag),sD(i),hB&&uE&&!cB&&(i==null?void 0:i.final)===!0&&(OQ({type:"response",name:"loading",text:"",reqId:i.reqId}),dA.setProcessingState()),Eg()}function fD(E){var i,l,u,V;(BQ||!BQ&&((l=(i=E.ctx)===null||i===void 0?void 0:i.opts)===null||l===void 0?void 0:l.force)===!0)&&Z.onCommand&&Z.onCommand(E.data),BQ&&(MB(dQ),((V=(u=E.ctx)===null||u===void 0?void 0:u.opts)===null||V===void 0?void 0:V.deactivate)===!0&&HC()),Eg()}function Dw(E){var i,l;!BQ&&((l=(i=E.ctx)===null||i===void 0?void 0:i.opts)===null||l===void 0?void 0:l.activate)===!0?OE().then(function(){fD(E)}):fD(E)}function iw(E){Z.onEvent&&Z.onEvent(Object.assign(E,{name:"scripts"}))}function Eo(){TF||(_I.currentTime=0,_I.play().catch(function(){console.log("No deactivation sound, because the user didn't interact with the button")}))}function Co(){TI&&(fQ.loop=!0,fQ.muted=!0,fQ.play().catch(function(E){console.log(E)}))}function RD(){qI=!1,TI&&(dA.skipExternalSounds(!0),xF||(fQ.currentTime=0,fQ.muted=!1,fQ.loop=!1,fQ.play().catch(function(E){console.log(E)})))}function ug(E,i){E&&E.src&&(E.style.opacity=1);for(var l=0;l<i.length;l++)i[l].style.opacity=0}function cw(E){var i=E,l={"<script>":"&lt;script&gt;","<\/script>":"&lt;/script&gt;"};for(var u in l){var V=new RegExp("".concat(u),"gi");i=String(i).replace(V,l[u])}return i}function Io(E){var i=gE();i&&(E.final===!0?(OQ(E),i.value=""):i.value=E.text)}function YD(E,i){var l=document.createElement("div");l.id="img-preview-overlay",l.classList.add("alan-btn__image-preview-overlay"),l.style.zIndex=gQ+3,i&&(l.setAttribute("data-img-index",i.getAttribute("data-img-index")),l.setAttribute("data-msg-req-id",i.getAttribute("data-msg-req-id")));var u=document.createElement("div");u.id="img-preview-overlay__close-icon",u.innerHTML=`
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.342029 15.0105C-0.113105 15.4658 -0.113035 16.2036 0.34217 16.6587C0.797374 17.1138 1.53533 17.1138 1.99046 16.6586L8.50015 10.1482L15.0104 16.658C15.4655 17.1131 16.2035 17.1131 16.6586 16.658C17.1138 16.2029 17.1138 15.4649 16.6586 15.0098L10.1483 8.49998L16.6582 1.98944C17.1132 1.53427 17.1132 0.796371 16.6579 0.341282C16.2028 -0.113819 15.4648 -0.113749 15.0097 0.341421L8.49991 6.85183L1.98966 0.341981C1.5345 -0.113143 0.796535 -0.113143 0.341377 0.341981C-0.113792 0.797116 -0.113792 1.53502 0.341377 1.99016L6.85187 8.5001L0.342029 15.0105Z" fill="#FFFFFF"/>
</svg>
`,u.classList.add("alan-btn__image-preview-overlay-close-icon"),u.addEventListener("click",hA);var V=E.cloneNode();V.className="",V.classList.add("alan-btn__chat-response-img-el"),l.appendChild(V),l.appendChild(u),l.addEventListener("click",hA);var T,AA,tA=null,GA=null;i&&(T=i.querySelector(".alan-btn__chat-response-imgs-wrapper-left-arrow"),AA=i.querySelector(".alan-btn__chat-response-imgs-wrapper-right-arrow"),T&&AA&&(tA=T.cloneNode(!0),GA=AA.cloneNode(!0),tA.classList.add("alan-btn__image-preview-overlay-left-icon"),tA.classList.remove("alan-btn__chat-response-imgs-wrapper-left-arrow"),GA.classList.add("alan-btn__image-preview-overlay-right-icon"),GA.classList.remove("alan-btn__chat-response-imgs-wrapper-right-arrow"),tA.addEventListener("click",VA),GA.addEventListener("click",QB),l.appendChild(tA),l.appendChild(GA))),document.addEventListener("keydown",ZA),SF.appendChild(l);function hA(){tA&&GA&&(tA.removeEventListener("click",VA),GA.removeEventListener("click",QB)),u.removeEventListener("click",hA),l.removeEventListener("click",hA),document.removeEventListener("keydown",ZA),l.remove()}function ZA(zA){zA.keyCode===27&&hA()}function VA(zA){var vA=zA.target.closest(".alan-btn__image-preview-overlay"),gB=zE(vA),sB=zE(i);vE(vA,gB,tA,GA,!0),vE(i,sB,T,AA,!0),zA.stopPropagation()}function QB(zA){var vA=zA.target.closest(".alan-btn__image-preview-overlay"),gB=zE(vA),sB=zE(i);vE(vA,gB,tA,GA,!1),vE(i,sB,T,AA,!1),zA.stopPropagation()}}function hD(E,i){var l=E.parentNode;EA(i)?E.tagName.toLowerCase()==="iframe"?E.src=i:(l.insertAdjacentHTML("afterbegin",JD(i)),E.remove()):E.tagName.toLowerCase()==="img"?E.src=i:(l.insertAdjacentHTML("afterbegin",uD(i)),E.remove())}function vE(E,i,l,u,V){var T=+E.getAttribute("data-img-index"),AA=E.getAttribute("data-msg-req-id"),tA=GQ.find(function(hA){var ZA;return hA.type!=="request"&&(hA.reqId===AA||((ZA=hA==null?void 0:hA.ctx)===null||ZA===void 0?void 0:ZA.reqId)===AA)});if(tA){var GA=tA.images.length;V?T>0&&(T=T-1,E.setAttribute("data-img-index",T.toString()),hD(i,tA.images[T].src),T===0&&l.classList.add("invisible"),T<GA-1&&u.classList.remove("invisible")):T<GA&&(T=T+1,E.setAttribute("data-img-index",T.toString()),hD(i,tA.images[T].src),T>0&&l.classList.remove("invisible"),T===GA-1&&u.classList.add("invisible"))}}window.addEventListener("click",function(E){var i=E.target,l=i.classList.contains("alan-btn__chat-response-img");if(i.tagName.toLowerCase()==="img"&&i.closest(".alan-btn__chat-response-text-wrapper")){YD(i,null);return}if(i.classList.contains("alan-btn__chat-response-imgs-wrapper-right-arrow")||i.classList.contains("alan-btn__chat-response-imgs-wrapper-left-arrow")||l){var u=i.closest(".alan-btn__chat-response-imgs-wrapper");if(l){YD(i,u);return}var V=zE(u),T=u.querySelectorAll(".alan-btn__chat-response-imgs-wrapper-left-arrow")[0],AA=u.querySelectorAll(".alan-btn__chat-response-imgs-wrapper-right-arrow")[0];vE(u,V,T,AA,i.classList.contains("alan-btn__chat-response-imgs-wrapper-left-arrow")),E.stopPropagation()}});function zE(E){return E.querySelectorAll(".alan-btn__chat-response-img-el")[0]||E.querySelectorAll("iframe")[0]}function ND(E){try{return E.target?E.target:window.location.host===new URL(E.href).host?"_self":"_blank"}catch{return"_blank"}}function wo(E){var i=document.createElement("div");i.innerHTML=E;for(var l=i.querySelectorAll("a"),u=0;u<l.length;u++)l[u].setAttribute("target",ND(l[u]));var V=i.innerHTML;return i.remove(),V}function uD(E){var i="data:image/png;base64,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";return'<img class="alan-btn__chat-response-img alan-btn__chat-response-img-el" src="'.concat(E,`" onerror="this.src = '`).concat(i,`'; this.classList.add('not-found');" onload = "console.info(this.naturalWidth,this.naturalHeight ); if(this.naturalWidth < this.naturalHeight){this.classList.add('img-vertical');}"/>`)}function JD(E){return'<iframe class="alan-btn__chat-response-video" width="560" height="315" src="'.concat(E,'?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')}function bD(E){var i,l,u,V,T="",AA="";if(((i=E.images)===null||i===void 0?void 0:i.length)>0){var tA=E.images[0].src;EA(tA)?AA=JD(tA):AA=uD(tA)}if(((l=E.images)===null||l===void 0?void 0:l.length)>0){var GA='<img class="alan-btn__chat-response-imgs-wrapper-left-arrow invisible" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAzMCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogICAgICAgICAgICAgICAgICAgIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMzA1XzE1MDIpIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy41MDEzNSAyNS4yMDc0TDIzLjg1MjYgNDUuNTAyNEMyNC41MTk0IDQ2LjE2NyAyNS41OTkgNDYuMTY1OSAyNi4yNjQ2IDQ1LjQ5OUMyNi45Mjk4IDQ0LjgzMjIgMjYuOTI4MSA0My43NTIxIDI2LjI2MTIgNDMuMDg3TDcuMTIxMjggMjMuOTk5OUwyNi4yNjE5IDQuOTEyOTNDMjYuOTI4NyA0LjI0Nzc4IDI2LjkzMDQgMy4xNjgzMiAyNi4yNjUzIDIuNTAxNDVDMjUuOTMxNiAyLjE2NzE1IDI1LjQ5NDUgMiAyNS4wNTczIDJDMjQuNjIxMyAyIDI0LjE4NTggMi4xNjYwMyAyMy44NTI3IDIuNDk4MDFMMy41MDEzNSAyMi43OTI1QzMuMTgwMiAyMy4xMTIgMi45OTk5OSAyMy41NDY5IDIuOTk5OTkgMjMuOTk5OUMyLjk5OTk5IDI0LjQ1MyAzLjE4MDcxIDI0Ljg4NzMgMy41MDEzNSAyNS4yMDc0WiIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+CiAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD0iZmlsdGVyMF9kXzMwNV8xNTAyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjkuNzYzMSIgaGVpZ2h0PSI1MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzMwNV8xNTAyIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzA1XzE1MDIiIHJlc3VsdD0ic2hhcGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgICAgICAgICA8L2RlZnM+CiAgICAgICAgICAgICAgICAgICAgPC9zdmc+Cg==" />',hA='<img class="alan-btn__chat-response-imgs-wrapper-right-arrow '.concat(((u=E.images)===null||u===void 0?void 0:u.length)>1?"":"invisible",'" src="data:image/svg+xml;base64,PHN2ZyAgd2lkdGg9IjMwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMzAgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KICAgICAgICAgICAgICAgICAgICA8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzMwNV8xNDk3KSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjI2MTcgMjIuNzkyNkw1LjkxMDQxIDIuNDk3NTdDNS4yNDM2MyAxLjgzMzAxIDQuMTY0MDkgMS44MzQxMyAzLjQ5ODQyIDIuNTAxQzIuODMzMjYgMy4xNjc3OSAyLjgzNDk4IDQuMjQ3OTQgMy41MDE4NSA0LjkxM0wyMi42NDE4IDI0LjAwMDFMMy41MDExNyA0My4wODcxQzIuODM0MzggNDMuNzUyMiAyLjgzMjY2IDQ0LjgzMTcgMy40OTc3MyA0NS40OTg2QzMuODMxNDIgNDUuODMyOCA0LjI2ODU5IDQ2IDQuNzA1NzUgNDZDNS4xNDE3OSA0NiA1LjU3NzI0IDQ1LjgzNCA1LjkxMDMzIDQ1LjUwMkwyNi4yNjE3IDI1LjIwNzVDMjYuNTgyOSAyNC44ODggMjYuNzYzMSAyNC40NTMxIDI2Ljc2MzEgMjQuMDAwMUMyNi43NjMxIDIzLjU0NyAyNi41ODIzIDIzLjExMjcgMjYuMjYxNyAyMi43OTI2WiIgZmlsbD0id2hpdGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+CiAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD0iZmlsdGVyMF9kXzMwNV8xNDk3IiB4PSIwIiB5PSIwIiB3aWR0aD0iMjkuNzYzMSIgaGVpZ2h0PSI1MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxIi8+CiAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzMwNV8xNDk3Ii8+CiAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzA1XzE0OTciIHJlc3VsdD0ic2hhcGUiLz4KICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgICAgICAgICAgICA8L2RlZnM+CiAgICAgICAgICAgICAgICAgICAgPC9zdmc+"/>');T='<div class="alan-btn__chat-response-imgs-wrapper" data-img-index="0" data-msg-req-id="'.concat(E.reqId||((V=E.ctx)===null||V===void 0?void 0:V.reqId),'"><div class="alan-btn__chat-response-img-block">').concat(AA,"</div>").concat(GA).concat(hA,"</div>")}return T}function kD(E){for(var i,l,u="",V="",T=0;T<((i=E.links)===null||i===void 0?void 0:i.length);T++){var AA=E.links[T],tA=ND(AA);V+='<a class="alan-btn__chat-response-link" href="'.concat(AA.href,'" target="').concat(tA,`">
                   `).concat(FA(AA),`
                    <span class="alan-btn__chat-response-link-title">`).concat(AA.title||AA.href,`</span>
                </a>`)}return!((l=E.links)===null||l===void 0)&&l.length&&(u=`<div class="alan-btn__chat-response-links-wrapper">
                <span style="margin-right: 10px;display: inline-block;">Read more: </span>
                    `.concat(V,`
            </div>`)),u}function ZD(E){var i="";return E.hasLikes&&(i=`<div class="alan-btn__chat-response-likes-wrapper">
                <span class="alan-btn__chat-response-like-btn">&#128078;</span>
                <span class="alan-btn__chat-response-dislike-btn">&#128077;</span>
            </div>`),i}function mD(E){var i,l="";return E.text?(((i=E.ctx)===null||i===void 0?void 0:i.format)==="markdown"?l=H.parse(cw(E.text),{mangle:!1,headerIds:!1}):l=cw(E.text),l?'<span class="alan-btn__chat-response-text-wrapper">'.concat(wo(l),"</span>"):""):""}function no(E){return"".concat(bD(E)).concat(mD(E)).concat(kD(E)).concat(ZD(E)).concat(e(E))}function sw(){window.hljs&&setTimeout(function(){var E=document.getElementById("chatMessages");E&&E.querySelectorAll("pre code:not(.alan-btn__hljs-processed)").forEach(function(i){window.hljs.highlightElement(i),i.classList.add("alan-btn__hljs-processed")})})}function to(){var E=document.createElement("script");E.src="https://studio.alan.app/js/hljs/highlight.min.js?v=1",E.async=!0,E.onload=function(){sw()},document.head.appendChild(E);var i=document.createElement("link");i.rel="stylesheet",i.href="https://studio.alan.app/js/hljs/github.min.css?v=1",document.getElementsByTagName("head")[0].appendChild(i)}to();function eo(){window.MathJax={startup:{pageReady:function(){return window.MathJax.startup.defaultPageReady()}},tex:{inlineMath:[["$","$"],["\\(","\\)"]],processEscapes:!0}};var E=document.createElement("script");E.src="https://studio.alan.app/js/mathjax/tex-svg.js?v=1",E.async=!0,E.setAttribute("id","MathJax-script"),E.onload=function(){Fo()},document.head.appendChild(E)}eo();function aw(E){var i=window.MathJax;i&&setTimeout(function(){var l=document.getElementById("msg-"+E).querySelectorAll(".alan-btn__chat-response-text-wrapper")[0];l&&i.texReset&&(i.texReset(),i.typesetClear(),i.typesetPromise([l]).catch(function(u){console.error(u)}))})}function Fo(){for(var E=0;E<GQ.length;E++)aw(E)}function OQ(E,i,l){var u,V,T,AA,tA,GA,hA,ZA,VA,QB,zA,vA,gB;if(hB){var sB="",aB="",dB=document.getElementById("chatMessages");E.type==="response"&&E.name==="text"&&window.fakeMsg&&(E.text=((u=window.fakeMsg)===null||u===void 0?void 0:u.text)||E.text,E.images=((V=window.fakeMsg)===null||V===void 0?void 0:V.images)||E.images,E.links=((T=window.fakeMsg)===null||T===void 0?void 0:T.links)||E.links,E.hasLikes=((AA=window.fakeMsg)===null||AA===void 0?void 0:AA.hasLikes)||E.hasLikes,!((tA=window.fakeMsg)===null||tA===void 0)&&tA.text&&(E.ctx?E.ctx.format="markdown":E.ctx={format:"markdown"}),window.fakeMsg=null),E.type==="chat"?aB='<div class="alan-btn__chat-popup">'.concat(E.html,"</div>"):((E.name==="text"||E.name==="parsed"||E.name==="recognized")&&(E.type==="request"?sB=cw(E.text):sB=no(E),aB='<div class="'.concat(E.type==="request"?"alan-btn__chat-request":"alan-btn__chat-response"," ").concat(((GA=E.images)===null||GA===void 0?void 0:GA.length)>0?"with-images":"",'">').concat(sB,"</div>")),E.name==="loading"&&(aB='<div class="alan-btn__chat-response animated alan-incoming-msg">'.concat(D(),"</div>"))),E=Q(Q({},E),BA(E,cB));var VB=_(E,GQ),tg=VB.isNew,xQ=VB.msgInd,$E=VB.replaceLoader,AC=VB.updateResponse;if(tg){var eg=document.createElement("div");eg.id="msg-"+xQ,E.type==="chat"&&iD(E,eg),eg.innerHTML=aB,dB.appendChild(eg),hB&&cB&&E.type==="response"&&E.read!==!0&&jg++,l!==!0?OC(dB,"smooth"):OC(dB),((hA=E.ctx)===null||hA===void 0?void 0:hA.final)!==!1&&(aw(xQ),sw())}else{var vQ=document.getElementById("msg-"+xQ);if(vQ)if($E){var GB=vQ.children[0];GB&&(GB.innerHTML=sB,GB.classList.remove("alan-incoming-msg"),E.type!=="chat"&&((ZA=E.images)===null||ZA===void 0?void 0:ZA.length)>0&&GB.classList.add("with-images"),OC(dB,"smooth"))}else if(AC&&E.type!=="chat"){var GB=vQ.children[0],qB=GQ[xQ],kg=GB.querySelector(".alan-btn__chat-response-imgs-wrapper");((VA=qB.images)===null||VA===void 0?void 0:VA.length)>0&&!kg&&(GB.insertAdjacentHTML("afterbegin",bD(qB)),GB=vQ.children[0]),((QB=qB.images)===null||QB===void 0?void 0:QB.length)>1&&kg&&kg.querySelector(".alan-btn__chat-response-imgs-wrapper-right-arrow").classList.remove("invisible"),qB.type!=="chat"&&((zA=qB.images)===null||zA===void 0?void 0:zA.length)>0&&GB.classList.add("with-images");for(var Zg=GB.children,BC=((vA=qB.images)===null||vA===void 0?void 0:vA.length)===0?0:1;Zg.length>BC;)Zg[Zg.length-1].remove();GB.insertAdjacentHTML("beforeend",mD(qB)),GB.insertAdjacentHTML("beforeend",kD(qB)),GB.insertAdjacentHTML("beforeend",ZD(qB)),GB.insertAdjacentHTML("beforeend",e(E)),setTimeout(function(){OC(dB,"smooth")})}else vQ.innerHTML=aB;((gB=E.ctx)===null||gB===void 0?void 0:gB.final)!==!1&&(aw(xQ),sw())}LD(),hB&&cB&&Jo(),F(E)&&E.type==="response"&&GQ.filter(function(QC){return!F(QC)}).length===0&&E.name!=="loading"&&WD()}}function OC(E,i){var l={top:E.scrollHeight+500,left:0};JE===null&&(i&&(l.behavior="smooth"),E.scroll(l))}function XD(E){var i=document.getElementById("chatMessages");i&&(i.scrollTop+i.clientHeight>=i.scrollHeight?JE=null:JE=i.scrollTop)}function LD(){S&&rg&&localStorage.setItem(yD(),JSON.stringify(GQ))}function yD(){return"alan-btn-text-chat-msgs-for-dialogId-".concat(rg)}function pD(){if(jg=0,GQ=[],hB){var E=document.getElementById("chatMessages");E&&(E.innerHTML='<div class="alan-btn__chat-messages-empty-block"></div>')}}function Do(){$a(),window.tutorProject&&(window.tutorProject.close(),window.tutorProject.off("scripts",iw),window.tutorProject.off("text",tw),window.tutorProject.off("parsed",QE),window.tutorProject.off("connectStatus",xE),window.tutorProject.off("options",Ng),dA.off("command",Dw),dA.off("afterText",ew),aA=!1,CD()),HD()}function HD(){pD(),co()}function io(){SD(!1)}function SD(E){var i;if(S&&rg){i=localStorage.getItem(yD());try{if(i===JSON.stringify(GQ))return;if(i=JSON.parse(i),pD(),Array.isArray(i))for(var l=0;l<i.length;l++)E===!0?i[l].name!=="loading"&&(i[l].initLoad=!0,OQ(i[l],!0,!0)):OQ(i[l],!0,!0)}catch{console.warn("Alan: unable to restore text chat history")}}}function co(){console.info("Alan: clear messages history",rg);for(var E=0;E<localStorage.length;E++){var i=localStorage.key(E);i.indexOf("alan-btn-text-chat-msgs-")>-1&&localStorage.removeItem(i)}}function ow(E){return g(this,void 0,void 0,function(){var i,l;return C(this,function(u){switch(u.label){case 0:return i={text:E,type:"request",name:"text"},[4,Ao(E)];case 1:return l=u.sent(),i=Q(Q({},i),{reqId:l.reqId}),Uo(E),OQ(i),OQ({type:"response",name:"loading",text:"",reqId:l.reqId}),[2]}})})}var TC=null;function WD(){var E=document.getElementById("textarea-holder");E.classList.remove("alan-btn__inactive"),clearTimeout(TC),TC=null}var VD=xa(function(){return g(this,void 0,void 0,function(){var i,l,u;return C(this,function(V){return i=gE(),l=document.getElementById("textarea-holder"),u=i.value,TC?[2]:(TC=setTimeout(function(){WD()},5e3),u.trim()===""?[2]:(i.value="",ow(u),l.classList.add("alan-btn__inactive"),JE=null,[2]))})})},1e3);function so(E){var i=E.value,l;if(E.selectionStart===E.selectionEnd){var u=i.split("");u.splice(E.selectionStart,0,`
`),l=u.join("")}else l=i+`
`;E.value=l}function ao(E){var i=document.getElementById("textarea-holder"),l=E.target;l.scrollWidth>l.clientWidth?i.classList.add("show-gradient"):i.classList.remove("show-gradient"),i&&(l.value.length>0?i.classList.add("ready-to-send"):i.classList.remove("ready-to-send"))}function OD(){var E=iQ();return"alan-btn-chat-sent-history-".concat(E)}function oo(){var E=[];if(S){var i=OD();try{E=JSON.parse(localStorage.getItem(i))||[]}catch{}}return E}function Uo(E){if(S){var i=25,l=OD();LQ.push(E),LQ.length>50&&(LQ=LQ.slice(Math.max(LQ.length-i,0))),LQ.length>0&&localStorage.setItem(l,JSON.stringify(LQ))}}function lo(E){var i=n([],LQ,!0);if(i=i.reverse(),i.length!==0){E===38&&(eQ===null||eQ+1===i.length?eQ=0:eQ=eQ+1),E===40&&(eQ===null||eQ-1===-1?eQ=i.length-1:eQ=eQ-1);var l=gE();l.value=i[eQ],Mo(l)}}function Mo(E){if(E.focus(),typeof E.selectionStart=="number")E.selectionStart=E.selectionEnd=E.value.length;else if(typeof E.createTextRange<"u"){var i=E.createTextRange();i.collapse(!1),i.select()}}function Go(E){var i=E.keyCode||E.which;if(!(i===13&&E.shiftKey)){if(i===13&&(E.ctrlKey||E.metaKey)){so(E.target);return}i===13&&(VD(),E.stopPropagation(),E.preventDefault());var l=i===38,u=i===40;if(l||u){lo(i),E.stopPropagation(),E.preventDefault();return}}}function ro(){var E=document.getElementById("chat-unmute-btn");E&&(E.classList.add("disabled"),KE(E,!0));var i=document.getElementById("clear-chat-btn");i&&i.classList.add("disabled")}function fo(){var E=document.getElementById("chat-unmute-btn");E&&(E.classList.remove("disabled"),KE(E,Gw()));var i=document.getElementById("clear-chat-btn");i&&i.classList.remove("disabled")}function Uw(E){var i=document.getElementById("chat-unmute-btn");E&&KD(!0),fg=!0,dA.enableVoice(),KE(i,!0)}function xC(E){var i=document.getElementById("chat-unmute-btn");dA.disableVoice(),fg=!1,KE(i,!1),E&&KD(!1)}function Ro(){if(SA()){var E=gE();E&&E.blur()}}function Yo(E){if(E&&E.target){var i=E.target,l=i.closest(".alan-btn__chat-send-btn")||i.closest(".alan-btn__chat-mic-btn");l||Ro()}}function TD(E){var i=E.target;TA(i,z,ow)}function gE(){return document.getElementById("chatTextarea")}function ho(){var E,i,l,u=document.getElementById("textarea-holder"),V=gE(),T=document.getElementById("chat-mic-btn"),AA=document.getElementById("chat-unmute-btn"),tA=document.getElementById("chat-send-btn"),GA=document.getElementById("chat-header"),hA=document.getElementById("chat-header-title");if(!Cg.classList.contains("alan-btn__chat")){document.addEventListener("touchstart",Yo,{passive:!1}),Cg.classList.add("alan-btn__chat");var ZA=document.createElement("div");ZA.id="chatMessages",ZA.classList.add("alan-btn__chat-messages"),ZA.removeEventListener("click",TD),ZA.addEventListener("click",TD);var VA=document.createElement("div");VA.id="chatMessagesWrapper",VA.classList.add("alan-btn__chat-messages-wrapper"),VA.appendChild(ZA),SA()?VA.addEventListener("touchmove",XD):VA.addEventListener("mousewheel",XD);var QB=document.createElement("div");QB.classList.add("alan-btn__chat-messages-empty-block"),ZA.appendChild(QB),GA=document.createElement("div"),GA.id="chat-header",GA.classList.add("alan-btn__chat-header");var zA=document.createElement("div");zA.classList.add("alan-btn__chat-header-gradient");var vA=document.createElement("div");vA.id="clear-chat-btn",vA.classList.add("alan-btn__chat-header-clear-btn"),vA.innerHTML=`<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 3.16667V2.63889C6.33333 1.93906 6.612 1.26772 7.10706 0.772667C7.60106 0.277611 8.27239 0 8.97222 0H10.0278C10.7276 0 11.399 0.277611 11.894 0.772667C12.3891 1.26772 12.6667 1.93906 12.6667 2.63889V3.16667H17.9444C18.5271 3.16667 19 3.63956 19 4.22222C19 4.80489 18.5271 5.27778 17.9444 5.27778H16.8889V16.8889C16.8889 19.2206 14.9994 21.1111 12.6667 21.1111C10.7329 21.1111 8.26817 21.1111 6.33333 21.1111C4.00161 21.1111 2.11111 19.2206 2.11111 16.8889V5.27778H1.05556C0.472889 5.27778 0 4.80489 0 4.22222C0 3.63956 0.472889 3.16667 1.05556 3.16667H6.33333ZM14.7778 5.27778H4.22222V16.8889C4.22222 18.0553 5.168 19 6.33333 19H12.6667C13.8331 19 14.7778 18.0553 14.7778 16.8889V5.27778ZM10.5556 8.44445V15.8333C10.5556 16.416 11.0284 16.8889 11.6111 16.8889C12.1938 16.8889 12.6667 16.416 12.6667 15.8333V8.44445C12.6667 7.86178 12.1938 7.38889 11.6111 7.38889C11.0284 7.38889 10.5556 7.86178 10.5556 8.44445ZM6.33333 8.44445V15.8333C6.33333 16.416 6.80622 16.8889 7.38889 16.8889C7.97156 16.8889 8.44444 16.416 8.44444 15.8333V8.44445C8.44444 7.86178 7.97156 7.38889 7.38889 7.38889C6.80622 7.38889 6.33333 7.86178 6.33333 8.44445ZM10.5556 3.16667V2.63889C10.5556 2.4985 10.5007 2.36444 10.4014 2.26522C10.3022 2.16706 10.1682 2.11111 10.0278 2.11111C9.68261 2.11111 9.31739 2.11111 8.97222 2.11111C8.83289 2.11111 8.69884 2.16706 8.59962 2.26522C8.50039 2.36444 8.44444 2.4985 8.44444 2.63889V3.16667H10.5556Z" fill="black"/>
                </svg>
                `,vA.addEventListener("click",Do);var gB=document.createElement("div");gB.classList.add("alan-btn__chat-header-left-resizer"),gB.innerHTML=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7266 0.273364C14.0911 0.63786 14.0911 1.22881 13.7266 1.59331L1.59331 13.7266C1.22881 14.0911 0.63786 14.0911 0.273364 13.7266C-0.0911215 13.3622 -0.0911215 12.7712 0.273364 12.4067L12.4067 0.273364C12.7712 -0.0911215 13.3622 -0.0911215 13.7266 0.273364ZM13.7266 6.80672C14.0911 7.17119 14.0911 7.76217 13.7266 8.12664L8.12664 13.7266C7.76217 14.0911 7.17119 14.0911 6.80672 13.7266C6.44225 13.3622 6.44225 12.7712 6.80672 12.4067L12.4067 6.80672C12.7712 6.44225 13.3622 6.44225 13.7266 6.80672Z" fill="#CCD4DD"/>
                </svg>
                `;var sB=document.createElement("div");sB.classList.add("alan-btn__chat-header-right-resizer"),sB.innerHTML=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7266 0.273364C14.0911 0.63786 14.0911 1.22881 13.7266 1.59331L1.59331 13.7266C1.22881 14.0911 0.63786 14.0911 0.273364 13.7266C-0.0911215 13.3622 -0.0911215 12.7712 0.273364 12.4067L12.4067 0.273364C12.7712 -0.0911215 13.3622 -0.0911215 13.7266 0.273364ZM13.7266 6.80672C14.0911 7.17119 14.0911 7.76217 13.7266 8.12664L8.12664 13.7266C7.76217 14.0911 7.17119 14.0911 6.80672 13.7266C6.44225 13.3622 6.44225 12.7712 6.80672 12.4067L12.4067 6.80672C12.7712 6.44225 13.3622 6.44225 13.7266 6.80672Z" fill="#CCD4DD"/>
                </svg>
                `,hA=document.createElement("span"),hA.id="chat-header-title",hA.classList.add("alan-btn__chat-header-title"),GA.appendChild(hA),GA.appendChild(gB),GA.appendChild(sB),GA.appendChild(vA);var aB=document.createElement("div");aB.innerHTML=`
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.342029 15.0105C-0.113105 15.4658 -0.113035 16.2036 0.34217 16.6587C0.797374 17.1138 1.53533 17.1138 1.99046 16.6586L8.50015 10.1482L15.0104 16.658C15.4655 17.1131 16.2035 17.1131 16.6586 16.658C17.1138 16.2029 17.1138 15.4649 16.6586 15.0098L10.1483 8.49998L16.6582 1.98944C17.1132 1.53427 17.1132 0.796371 16.6579 0.341282C16.2028 -0.113819 15.4648 -0.113749 15.0097 0.341421L8.49991 6.85183L1.98966 0.341981C1.5345 -0.113143 0.796535 -0.113143 0.341377 0.341981C-0.113792 0.797116 -0.113792 1.53502 0.341377 1.99016L6.85187 8.5001L0.342029 15.0105Z" fill="#080808"/>
</svg>
`,aB.classList.add("alan-btn__close-chat-btn"),GA.appendChild(aB),aB.addEventListener("click",uo),u=document.createElement("div"),u.id="textarea-holder",u.classList.add("alan-btn__chat-textarea-holder");var dB=document.createElement("div");dB.classList.add("alan-btn__chat-textarea-holder-gradient"),V=document.createElement("input"),V.id="chatTextarea",V.setAttribute("autocomplete","off"),V.classList.add("alan-btn__chat-textarea"),V.addEventListener("keydown",Go),V.addEventListener("keyup",ao);var VB=document.createElement("div");VB.classList.add("alan-btn__chat-textarea-gradient"),tA=document.createElement("div"),tA.id="chat-send-btn",tA.classList.add("alan-btn__chat-send-btn"),tA.addEventListener("click",VD),tA.innerHTML=WF,u.appendChild(V),u.appendChild(tA),u.appendChild(VB),u.appendChild(dB),Cg.appendChild(GA),Cg.appendChild(VA),Cg.appendChild(u),Cg.appendChild(zA),iA.classList.add("alan-btn__chat-holder")}if(hA){var tg=((E=NB==null?void 0:NB.header)===null||E===void 0?void 0:E.label)||"Alan AI Copilot";hA.innerText=tg,hA.setAttribute("title",tg)}if(AA||(AA=document.createElement("div"),AA.classList.add("alan-btn__chat-unmute-btn"),AA.id="chat-unmute-btn",AA.addEventListener("click",function(){fg?xC(!0):Uw(!0)}),SA()?xC(!0):fg&&dA.enableVoice(),KE(AA,fg),u&&u.appendChild(AA)),uE){if(V.setAttribute("placeholder","Ask me anything..."),iA.classList.add("alan-text-chat__voice-enabled"),!T){switch(T=document.createElement("div"),T.classList.add("alan-btn__chat-mic-btn"),T.id="chat-mic-btn",T.addEventListener("click",function(){V.value="",u.classList.remove("show-gradient"),BQ?JE=null:ro(),qa(),(AQ===WQ||AQ===Qg)&&T.classList.add("alan-btn__disabled")}),AQ){case SQ:case Qg:case WQ:T.innerHTML=VF,AQ===SQ&&T.classList.add("alan-btn__disabled");break;default:T.innerHTML=La;break}u&&u.appendChild(T)}}else T&&T.remove(),V.setAttribute("placeholder","Ask me anything..."),V.style.paddingTop=ED()+"px",iA.classList.remove("alan-text-chat__voice-enabled");V&&!((i=NB==null?void 0:NB.textarea)===null||i===void 0)&&i.placeholder&&V.setAttribute("placeholder",(l=NB==null?void 0:NB.textarea)===null||l===void 0?void 0:l.placeholder)}function lw(){return"alan-btn-text-chat-opened-for-projectId-".concat(iQ())}function xD(E){if(SA()){var i=document.getElementsByTagName("body")[0];if(i)if(E)i.style.top="-".concat(window.scrollY,"px"),i.classList.add("no-scroll-for-popup");else{i.classList.remove("no-scroll-for-popup");var l=i.style.top;i.style.top="",window.scrollTo(0,parseInt(l||"0")*-1)}}}function vD(E){xD(!0),bo(),WB(),iA.style.display="flex",cB=!1,E===!0?$.classList.add("hide-alan-btn-when-text-chat-is-opened-immediately"):$.classList.add("hide-alan-btn-when-text-chat-is-opened"),iA.classList.add("alan-text-chat__openning"),S&&(SA()||localStorage.setItem(lw(),"1"))}function Mw(){cB||(HC(),iA.classList.add("alan-text-chat__closing"),$.classList.add("text-chat-is-closing"),setTimeout(function(){iA.style.display="none",iA.classList.remove("alan-text-chat__closing"),$.classList.remove("hide-alan-btn-when-text-chat-is-opened"),$.classList.remove("hide-alan-btn-when-text-chat-is-opened-immediately"),$.classList.remove("text-chat-is-closing"),xD(!1)},bE),cB=!0,S&&localStorage.removeItem(lw()))}function No(){return S&&!SA()?localStorage.getItem(lw()):!1}function uo(){Mw()}function zD(){return"alan-btn-text-chat__text-to-speach-voice-enabled__for-projectId-".concat(iQ())}function Gw(){if(SA())return!1;if(S){var E=localStorage.getItem(zD());if(E==="true")return!0;if(E==="false")return!1}return null}function KD(E){S&&localStorage.setItem(zD(),E)}function Jo(){jg>0&&(Pg.innerHTML=jg>99?"99+":"".concat(jg),Pg.style.display="flex")}function KE(E,i){var l=`
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_185_822)">
                <path d="M2.96822 1.83729C2.5972 1.46626 2.04066 1.46626 1.66963 1.83729C1.2986 2.20832 1.2986 2.76486 1.66963 3.13589L16.5107 17.977C16.8818 18.348 17.4383 18.348 17.8093 17.977C18.1804 17.606 18.1804 17.0494 17.8093 16.6784L2.96822 1.83729Z" fill="#171717"/>
                <path d="M14.2846 11.9477L15.5832 13.2463C17.0673 11.2984 16.9746 8.60848 15.4905 6.66059C15.2122 6.28956 14.5629 6.1968 14.1919 6.56783C13.8208 6.93886 13.7281 7.4954 14.0991 7.86643C15.1194 8.88675 15.1194 10.5564 14.2846 11.9477Z" fill="#171717"/>
                <path d="M18.1804 9.90719C18.1804 11.3913 17.5311 12.8754 16.5107 13.9885L17.8093 15.2871C19.2007 13.803 19.9427 11.9478 20.0355 9.90719C20.0355 7.49551 18.8297 5.17659 16.8818 3.59972C16.5107 3.22869 15.7687 3.32145 15.5832 3.69248C15.3976 4.06351 15.3049 4.7128 15.6759 4.99107C17.2528 6.19691 18.1804 7.9593 18.1804 9.90719Z" fill="#171717"/>
                <path d="M11.1308 15.6581L6.40023 12.4116C6.21471 12.3189 6.0292 12.2261 5.84368 12.2261H1.85514V7.77378H4.82336L2.96822 5.91864H0.927569C0.371028 5.91864 0 6.28967 0 6.84621V13.2464C0 13.803 0.371028 14.174 0.927569 14.174H5.56541L11.5019 18.2553C11.6874 18.3481 11.8729 18.4408 12.0584 18.4408C12.6149 18.4408 12.986 18.0698 12.986 17.5133V15.9364L11.1308 14.0812V15.6581Z" fill="#171717"/>
                <path d="M11.1309 4.24897V8.7013L12.986 10.5564V2.48659C12.986 1.93005 12.615 1.55902 12.0584 1.55902C11.8729 1.55902 11.6874 1.65178 11.5019 1.74453L7.14233 4.71276L8.44093 6.01135L11.1309 4.24897Z" fill="#171717"/>
                </g>
                <defs>
                <clipPath id="clip0_185_822">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                `,u=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5556 6.64349C15.2778 6.27312 14.6296 6.18053 14.2593 6.5509C13.8889 6.92127 13.7963 7.47682 14.1667 7.84719C15.0926 9.14348 15.0926 10.9027 14.1667 12.199C13.8889 12.5694 13.8889 13.2175 14.2593 13.4953C14.4445 13.5879 14.6296 13.6805 14.8148 13.6805C15.0926 13.6805 15.3704 13.5879 15.5556 13.3101C17.037 11.3657 17.037 8.58793 15.5556 6.64349Z" fill="#171717"/>
            <path d="M16.7593 3.68063C16.3889 3.31026 15.7408 3.40285 15.463 3.77322C15.1852 4.14359 15.1852 4.79174 15.5556 5.06952C17.1297 6.27322 18.0556 8.03247 18.0556 9.97691C18.0556 11.9213 17.1297 13.6806 15.6482 14.7917C15.2778 15.1621 15.1852 15.7176 15.5556 16.088C15.7408 16.2732 16.0186 16.4584 16.2963 16.4584C16.4815 16.4584 16.7593 16.3658 16.8519 16.2732C18.7963 14.7917 19.9074 12.4769 20 9.97691C19.9074 7.56951 18.7037 5.2547 16.7593 3.68063Z" fill="#171717"/>
            <path d="M12.5 1.73615C12.2222 1.55096 11.8518 1.55096 11.574 1.73615L5.55554 5.9028H0.925923C0.370369 5.9028 0 6.27317 0 6.82872V13.2176C0 13.7731 0.370369 14.1435 0.925923 14.1435H5.55554L11.4814 18.2176C11.6666 18.3102 11.8518 18.4028 12.037 18.4028C12.5926 18.4028 12.9629 18.0324 12.9629 17.4768V2.56948C12.9629 2.19911 12.7777 1.92133 12.5 1.73615ZM11.1111 15.625L6.38887 12.3843C6.20368 12.2917 6.0185 12.1991 5.83331 12.1991H1.85185V7.75465H5.83331C6.0185 7.75465 6.20368 7.66205 6.38887 7.56946L11.1111 4.32873V15.625Z" fill="#171717"/>
            </svg>
            `;E&&(i?E.innerHTML=u:E.innerHTML=l)}function bo(){jg=0,Pg.style.display="none";for(var E=0;E<GQ.length;E++)GQ[E].read=!0;LD()}function rw(){cA.style.animation="",wB.style.animation="",LA.style.animation="",VQ.classList.remove("super-hidden"),VQ.style.opacity=AE,XB.style.animation="",LB.style.animation="",XB.style.opacity="0",LB.style.opacity="0",PE(yQ),wB.style.opacity="1",LA.style.opacity="0",hg.style.opacity="0",ug(kB,[ZB,rB,mB]),EE([RQ,YQ,hQ,NQ]),Ig.style.opacity="0",qg.style.opacity="0",$.classList.remove("alan-btn-low-volume"),$.classList.remove("alan-btn-permission-denied"),$.classList.remove("alan-btn-disconnected"),$.classList.remove("alan-btn-offline"),$.classList.remove("alan-btn-no-voice-support")}window.switchState=MB;function MB(E){Z.onButtonState&&Z.onButtonState(ra[E]);var i=[],l=0;if(FQ=null,E===yQ&&rw(),cB)if(E===dQ?(cA.style.animation=LE,wB.style.animation=pF,RQ.classList.remove("super-hidden"),RQ.style.opacity=AE,XB.style.opacity="1",LB.style.opacity="1",PE(dQ),wB.style.opacity="1",ZB.src||(LA.style.animation=HF,LA.style.opacity="1"),ug(ZB,[kB,rB,mB]),EE([YQ,hQ,NQ])):E===pQ?(VC(),cA.style.animation=LE,YQ.classList.remove("super-hidden"),YQ.style.opacity=AE,XB.style.opacity="1",LB.style.opacity="1",PE(pQ),ug(mB,[kB,ZB,rB]),EE([VQ,RQ,hQ,NQ])):E===Ag?(cA.style.animation=LE,hQ.classList.remove("super-hidden"),hQ.style.opacity=AE,XB.style.opacity="1",LB.style.opacity="1",PE(Ag),wB.style.opacity="1",rB.src||(LA.style.opacity="1"),EE([VQ,RQ,YQ,NQ]),ug(rB,[kB,ZB,mB])):E===Bg&&(cA.style.animation=LE,NQ.classList.remove("super-hidden"),NQ.style.opacity=AE,XB.style.opacity="1",LB.style.opacity="1",PE(Bg),wB.style.opacity="1",rB.src?LA.style.opacity="0":LA.style.opacity="1",ug(rB,[kB,ZB,mB]),EE([VQ,RQ,YQ,hQ])),E===pQ?(LA.style.opacity="0",LA.style.backgroundSize="0% 0%",mB.src||(qA.style.opacity="1",qA.style.backgroundSize="100% 100%")):(qA.style.opacity="0",qA.style.backgroundSize="0% 0%",LA.style.backgroundSize="100% 100%"),E===yQ?LA.classList.add("triangleMicIconBg-default"):LA.classList.remove("triangleMicIconBg-default"),i=[yE,RC,YC,hC,NC,uC,JC,bC,kC,ZC],E===dQ&&!ZB.src||E===Ag&&!rB.src||E===pQ&&!mB.src||E===Bg&&!rB.src){if(yE.style.animationName==="")for(l=0;l<i.length;l++)l===0?i[l].style.opacity=1:i[l].style.opacity=0,i[l].style.animationName="logo-state-"+(l+1)+"-animation";kB.style.opacity="0"}else for(l=0;l<i.length;l++)i[l].style.opacity=0,i[l].style.animationName="";if(E===mF||E===SQ||E===Qg||E===WQ?hB?rw():(E===mF?($.classList.add("alan-btn-low-volume"),FQ=da):E===SQ?($.classList.add("alan-btn-permission-denied"),FQ=ZE,console.warn(ZE)):(E===Qg||E===WQ)&&($.classList.add("alan-btn-no-voice-support"),E===Qg?FQ=XF:E===WQ&&(FQ=OI)),E===Qg?(qg.style.opacity="1",Ig.style.opacity="0"):(qg.style.opacity="0",Ig.style.opacity="1"),ug(null,[kB,ZB,rB,mB]),wB.style.opacity="0",LA.style.opacity="0",hg.style.opacity="0",_g.style.opacity="0",XB.style.animation="",LB.style.animation="",XB.style.opacity="0",LB.style.opacity="0"):E===HQ||E===Rg?hB?rw():(E===HQ&&$.classList.add("alan-btn-disconnected"),E===Rg&&($.classList.add("alan-btn-offline"),FQ=fa),LA.style.opacity="0",Ig.style.opacity="0",XB.style.animation="",LB.style.animation="",XB.style.opacity="0",LB.style.opacity="0",ug(null,[kB,ZB,rB,mB]),E===HQ?(wB.style.opacity="0",hg.style.opacity="1"):(wB.style.opacity="0",hg.style.opacity="0",_g.style.opacity="1")):(Ig.style.opacity="0",_g.style.opacity="0",hg.style.opacity="0",$.classList.remove("alan-btn-low-volume"),$.classList.remove("alan-btn-permission-denied"),$.classList.remove("alan-btn-disconnected"),$.classList.remove("alan-btn-offline"),$.classList.remove("alan-btn-no-voice-support")),hB){var u=document.getElementById("chat-mic-btn"),V=document.getElementById("chat-send-btn"),T=document.getElementById("alan-text-chat");if(T){switch(E){case Rg:case HQ:V.innerHTML=E===Rg?ma:Xa,T.classList.add("alan-btn__disconnected");break;case dQ:case Ag:case pQ:case Bg:T.classList.add("alan-btn__mic-active");break;default:T.classList.remove("alan-btn__mic-active"),T.classList.remove("alan-btn__disconnected"),V.innerHTML=WF;break}if(u)switch(E){case dQ:case Ag:case pQ:case Bg:u.classList.add("active"),u.style.animation=ba;break;case SQ:case Qg:case WQ:u.innerHTML=VF,AQ===SQ&&u.classList.add("alan-btn__disabled");break;default:u.classList.remove("active"),u.style.animation="";break}}}E!==HQ&&(GC=E),AQ=E}function jE(E){E.style.transition="all 0.4s linear",E.style.position="absolute",E.style.top="0px",E.style.left="0px",E.style.width="100%",E.style.height="100%",E.style.borderRadius="50%",E.style.zIndex=$I,E.style.backgroundPosition="0 0",E.style.opacity=0,E.style.opacity=0,E.style.transition="opacity 300ms ease-in-out",E.style.animation=ka,E.style.display="block"}function EE(E){for(var i=0;i<E.length;i++)E[i].style.opacity=Ta,E[i].classList.add("super-hidden")}function PE(E){for(var i=[XB,LB],l=E||yQ,u=["alanBtn-oval-bg-"+yQ,"alanBtn-oval-bg-"+dQ,"alanBtn-oval-bg-"+Ag,"alanBtn-oval-bg-"+Bg,"alanBtn-oval-bg-"+pQ],V=0;V<i.length;V++){i[V].classList.add("alanBtn-oval-bg-"+l);for(var T=0;T<u.length;T++)i[V].classList.remove(u[T])}}function jD(){var E="";return Z&&Z.key&&(E=Z.key),"alan-btn-options-"+E}function SA(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function ko(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)}function Zo(){var E=!1,i=window.location.protocol,l=window.location.hostname;return i==="https:"&&(E=!0),PD()&&(E=!0),i==="http:"&&(l.indexOf("localhost")>-1||l.indexOf("127.0.0.1")>-1)&&(E=!0),E}function PD(){var E=window.location.protocol;return E==="file:"}function mo(){var E=!1,i,l;return i=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,l=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,i&&l&&(E=!0),E}function qD(){$.innerHTML="",yA.appendChild(pE),$.appendChild(yA),$.appendChild(cA),$.appendChild(iA),cA.appendChild(Pg),MA=!1}function Xo(){wg()||(dA.stop(),$.innerHTML="",MA=!0)}function Lo(){PA=!1}function yo(){PA=!0,VC()}function _D(E){E?Ew(E):Ew()}function po(E){E&&E.web&&(E.web.logoUrl&&!E.web.logoIdle&&!E.web.logoListen&&!E.web.logoProcess&&!E.web.logoReply&&!E.web.logoTextChat?(ZB.src=E.web.logoUrl,rB.src=E.web.logoUrl,mB.src=E.web.logoUrl):hB?E.web.logoTextChat?kB.src=E.web.logoTextChat:kB.src=ya:(E.web.logoIdle?kB.src=E.web.logoIdle:kB.src=OF,E.web.logoListen?ZB.src=E.web.logoListen:(ZB.removeAttribute("src"),ZB.style.opacity="0"),E.web.logoProcess?rB.src=E.web.logoProcess:(rB.removeAttribute("src"),rB.style.opacity="0"),E.web.logoReply?mB.src=E.web.logoReply:(mB.removeAttribute("src"),mB.style.opacity="0")))}function Ho(E){TI=E}$.classList.add("alanBtn-root"),$.classList.add("alan-"+iQ());var qE=null;if(wg())qD();else if(S)try{$D()}catch{}function $D(){if(S)try{qE=JSON.parse(localStorage.getItem(jD())),qE&&qE.web&&qE.web&&_D(qE.web)}catch{}}Z.rootEl||SF.appendChild($),XQ||(cA.addEventListener("mousedown",Ai,!0),cA.addEventListener("touchstart",Ai,{passive:!1}),document.addEventListener("mouseup",Qi,!0),document.addEventListener("touchend",Qi,{passive:!1}),document.addEventListener("mousemove",Bi,!0),document.addEventListener("touchmove",Bi,{passive:!1}));function Ai(E){var i=E.touches?E.touches[0]:E,l;if(i&&!vC&&!(!fC||E.buttons!==void 0&&E.buttons!==1)&&(mE=!0,$.style.transition="0ms",l=$.getBoundingClientRect(),l)){var u=l.x;Yg||(Yg=QQ?u:window.innerWidth-u-eB-(window.innerWidth-document.documentElement.clientWidth)),vI=u,TQ=[i.clientX,i.clientY],zI=parseInt(l.top,10)}}function Bi(E){var i=E.touches?E.touches[0]:E,l,u;if(i&&_Q&&mE)return TE(!1),VC(0,!0),E.preventDefault(),XE||($.style.setProperty("left",vI+"px","important"),$.style.setProperty("right","auto","important"),$.style.setProperty("top",zI+"px","important"),$.style.setProperty("bottom","auto","important")),(Math.abs(jI)>15||Math.abs(PI)>15)&&(Mw(),XE=!0),l=vI+i.clientX-TQ[0],u=zI+i.clientY-TQ[1],jI=i.clientX-TQ[0],PI=i.clientY-TQ[1],$.style.setProperty("left",So(l)+"px","important"),$.style.setProperty("top",gi(u)+"px","important"),E.preventDefault(),!1}function Qi(E){var i,l,u;if(mE){if(u=E.changedTouches?E.changedTouches[0]:E,!u)return;if(mE=!1,$.style.transition=Ja,i=parseInt($.style.left,10),l=parseInt($.style.top,10),Math.abs(jI)<15&&Math.abs(PI)<15){setTimeout(function(){XE=!1,fC=!0},300);return}i<=window.innerWidth/2?($.style.setProperty("left",Yg+"px","important"),Ei("to-left"),QQ=!0,XC(yA,l),VE(iA),xI=!0,setTimeout(function(){TE(!0),Ci("left",Yg,l)},KI)):($.style.setProperty("left",window.innerWidth-Yg-eB-(window.innerWidth-document.documentElement.clientWidth)+"px","important"),setTimeout(function(){$.style.setProperty("right",Yg+"px","important"),Ei("to-right"),QQ=!1,XC(yA,l),VE(iA),Ci("right",Yg,l),xI=!0,fC=!0,TE(!0)},KI)),setTimeout(function(){XE=!1},300)}}function gi(E){var i=10;return E<i?i:E>window.innerHeight-eB-i?window.innerHeight-eB-i:E}function So(E){var i=10;return E<i?i:E>window.innerWidth-eB-i?window.innerWidth-eB-i:E}function Ei(E){E==="to-left"?$.style.setProperty("right","auto","important"):$.style.setProperty("left","auto","important"),_F()}function Ci(E,i,l){if(MQ&&K){var u=iQ();sessionStorage.setItem("alan-btn-saved-orientation-"+u,E),sessionStorage.setItem("alan-btn-saved-x-pos-"+u,Math.floor(i).toString()),sessionStorage.setItem("alan-btn-saved-y-pos-"+u,Math.floor(l).toString())}}function Wo(){if(K){var E=iQ();sessionStorage.removeItem("alan-btn-saved-orientation-"+E),sessionStorage.removeItem("alan-btn-saved-x-pos-"+E),sessionStorage.removeItem("alan-btn-saved-y-pos-"+E)}}function Vo(){if(K){var E=iQ(),i={orientation:sessionStorage.getItem("alan-btn-saved-orientation-"+E),x:+sessionStorage.getItem("alan-btn-saved-x-pos-"+E),y:+sessionStorage.getItem("alan-btn-saved-y-pos-"+E)};return i.orientation?i:null}return null}var vC=!1;SA()&&window.addEventListener("scroll",To);var Oo=Cw(function(){vC=!1,$.classList.remove("alan-btn__page-scrolled")},300);function To(){(!hB||hB&&cB)&&($.classList.add("alan-btn__page-scrolled"),vC||(vC=!0)),Oo({})}var _E=!1,TQ=[0,0],Jg,bg,CQ,IQ,dw,fw,Ii,wi,ni,ti,ei,Fi,Di,ii;SA()||(iA.addEventListener("mousedown",xo),iA.addEventListener("mousemove",ci),iA.addEventListener("mouseleave",ci),document.addEventListener("mouseup",vo,!0),document.addEventListener("mousemove",zo,!0));function ci(E){if(!_E){var i=E.touches?E.touches[0]:E;$o(i)?iA.classList.add("with-hover"):iA.classList.remove("with-hover"),CQ=PC(i).typeBorderHor,IQ=PC(i).typeBorderVert,iA.classList.remove("none-none"),iA.classList.remove("with-cursors"),iA.classList.remove("top-left"),iA.classList.remove("top-right"),iA.classList.remove("bottom-left"),iA.classList.remove("bottom-right"),iA.classList.remove("none-left"),iA.classList.remove("none-right"),iA.classList.remove("top-none"),iA.classList.remove("bottom-none"),iA.classList.add(CQ+"-"+IQ),(CQ!=="none"||IQ!=="none")&&iA.classList.add("with-cursors")}}function xo(E){_E=!0;var i=E.touches?E.touches[0]:E;TQ=[i.clientX,i.clientY];var l=iA.getBoundingClientRect();Jg=l.height,bg=l.width,CQ=PC(i).typeBorderHor,IQ=PC(i).typeBorderVert,dw=parseInt(iA.style.left),fw=parseInt(iA.style.right),Ii=parseInt(iA.style.top),wi=parseInt(iA.style.bottom),ni=l.top,ti=l.bottom,ei=iA.style.right,Fi=iA.style.left,Di=iA.style.top,ii=iA.style.bottom}function vo(){_E=!1}function zo(E){if(_E){var i=E.touches?E.touches[0]:E;i.clientX>=0&&i.clientY>=0&&i.clientX<=window.innerWidth&&i.clientY<=window.innerHeight?Ko(i):_E=!1}}function Ko(E){var i=E.clientX-TQ[0],l=E.clientY-TQ[1];CQ==="bottom"?si(CQ,l)&&(Rw(Jg+l),jo(l)):CQ==="top"&&si(CQ,l)&&(Rw(Jg-l),Po(l)),IQ==="right"?ai(IQ,i)&&(Yw(bg+i),qo(i)):IQ==="left"&&ai(IQ,i)&&(Yw(bg-i),_o(i))}function si(E,i){var l,u=((l=NB==null?void 0:NB.popup)===null||l===void 0?void 0:l.minHeight)||NF,V=E==="bottom"&&i>0||E==="top"&&i<0,T=E==="bottom"?Jg+i:Jg-i,AA=ti-i,tA=ni+i;return E==="bottom"&&AA<=0&&T>=Jg||E==="top"&&tA<=0&&T>=Jg?!1:V?T>=u:T>u}function ai(E,i){var l,u=((l=NB==null?void 0:NB.popup)===null||l===void 0?void 0:l.minWidth)||JF,V=E==="right"&&i>0||E==="left"&&i<0,T=E==="right"?bg+i:bg-i,AA=fw-i,tA=dw+i;return E==="right"&&AA<=0&&T>=bg||E==="left"&&tA<=0&&T>=bg?!1:V?T>=u:T>u}function Rw(E){iA.style.height=E+"px",oi("height",E)}function Yw(E){iA.style.width=E+"px",E<300?iA.classList.add("alan-chat-small"):iA.classList.remove("alan-chat-small"),oi("width",E)}function jo(E){ii&&KC("bottom",wi-E)}function Po(E){Di&&KC("top",Ii+E)}function qo(E){ei&&KC("right",fw-E)}function _o(E){Fi&&KC("left",dw+E)}function zC(E){return"alan-btn-text-chat-pos-".concat(E,"-").concat(iQ())}function KC(E,i){i<0||(iA.style[E]=i+"px",S&&localStorage.setItem(zC(E),i))}function ng(E){return S?localStorage.getItem(zC(E)):null}function oi(E,i){S&&localStorage.setItem(zC(E),i)}function jC(E){return S?localStorage.getItem(zC(E)):null}function $o(E){return iA.getBoundingClientRect().top<E.clientY&&E.clientY<iA.getBoundingClientRect().top+60&&iA.getBoundingClientRect().left<E.clientX&&E.clientX<iA.getBoundingClientRect().right}function PC(E){return Math.abs(iA.getBoundingClientRect().bottom-E.clientY)<10?CQ="bottom":Math.abs(iA.getBoundingClientRect().top-E.clientY)<10?CQ="top":CQ="none",Math.abs(iA.getBoundingClientRect().left-E.clientX)<10?IQ="left":Math.abs(iA.getBoundingClientRect().right-E.clientX)<10?IQ="right":IQ="none",{typeBorderHor:CQ,typeBorderVert:IQ}}return z}r.alanBtn=sA,r.alanBtn.getDebugInfo=DA})(window)}(),alanBtn})})(V0,UI);const xs=UI;var lF={},vs={},lI={},O0={get exports(){return lI},set exports(A){lI=A}},MI={},T0={get exports(){return MI},set exports(A){MI=A}},zs=function(B,Q){return function(){for(var C=new Array(arguments.length),n=0;n<C.length;n++)C[n]=arguments[n];return B.apply(Q,C)}},x0=zs,Gg=Object.prototype.toString;function MF(A){return Array.isArray(A)}function ve(A){return typeof A>"u"}function v0(A){return A!==null&&!ve(A)&&A.constructor!==null&&!ve(A.constructor)&&typeof A.constructor.isBuffer=="function"&&A.constructor.isBuffer(A)}function Ks(A){return Gg.call(A)==="[object ArrayBuffer]"}function z0(A){return Gg.call(A)==="[object FormData]"}function K0(A){var B;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?B=ArrayBuffer.isView(A):B=A&&A.buffer&&Ks(A.buffer),B}function j0(A){return typeof A=="string"}function P0(A){return typeof A=="number"}function js(A){return A!==null&&typeof A=="object"}function FI(A){if(Gg.call(A)!=="[object Object]")return!1;var B=Object.getPrototypeOf(A);return B===null||B===Object.prototype}function q0(A){return Gg.call(A)==="[object Date]"}function _0(A){return Gg.call(A)==="[object File]"}function $0(A){return Gg.call(A)==="[object Blob]"}function Ps(A){return Gg.call(A)==="[object Function]"}function AM(A){return js(A)&&Ps(A.pipe)}function BM(A){return Gg.call(A)==="[object URLSearchParams]"}function QM(A){return A.trim?A.trim():A.replace(/^\s+|\s+$/g,"")}function gM(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function GF(A,B){if(!(A===null||typeof A>"u"))if(typeof A!="object"&&(A=[A]),MF(A))for(var Q=0,g=A.length;Q<g;Q++)B.call(null,A[Q],Q,A);else for(var C in A)Object.prototype.hasOwnProperty.call(A,C)&&B.call(null,A[C],C,A)}function ze(){var A={};function B(C,n){FI(A[n])&&FI(C)?A[n]=ze(A[n],C):FI(C)?A[n]=ze({},C):MF(C)?A[n]=C.slice():A[n]=C}for(var Q=0,g=arguments.length;Q<g;Q++)GF(arguments[Q],B);return A}function EM(A,B,Q){return GF(B,function(C,n){Q&&typeof C=="function"?A[n]=x0(C,Q):A[n]=C}),A}function CM(A){return A.charCodeAt(0)===65279&&(A=A.slice(1)),A}var vB={isArray:MF,isArrayBuffer:Ks,isBuffer:v0,isFormData:z0,isArrayBufferView:K0,isString:j0,isNumber:P0,isObject:js,isPlainObject:FI,isUndefined:ve,isDate:q0,isFile:_0,isBlob:$0,isFunction:Ps,isStream:AM,isURLSearchParams:BM,isStandardBrowserEnv:gM,forEach:GF,merge:ze,extend:EM,trim:QM,stripBOM:CM},eE=vB;function Ac(A){return encodeURIComponent(A).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var qs=function(B,Q,g){if(!Q)return B;var C;if(g)C=g(Q);else if(eE.isURLSearchParams(Q))C=Q.toString();else{var n=[];eE.forEach(Q,function(I,D){I===null||typeof I>"u"||(eE.isArray(I)?D=D+"[]":I=[I],eE.forEach(I,function(e){eE.isDate(e)?e=e.toISOString():eE.isObject(e)&&(e=JSON.stringify(e)),n.push(Ac(D)+"="+Ac(e))}))}),C=n.join("&")}if(C){var t=B.indexOf("#");t!==-1&&(B=B.slice(0,t)),B+=(B.indexOf("?")===-1?"?":"&")+C}return B},IM=vB;function XI(){this.handlers=[]}XI.prototype.use=function(B,Q,g){return this.handlers.push({fulfilled:B,rejected:Q,synchronous:g?g.synchronous:!1,runWhen:g?g.runWhen:null}),this.handlers.length-1};XI.prototype.eject=function(B){this.handlers[B]&&(this.handlers[B]=null)};XI.prototype.forEach=function(B){IM.forEach(this.handlers,function(g){g!==null&&B(g)})};var wM=XI,nM=vB,tM=function(B,Q){nM.forEach(B,function(C,n){n!==Q&&n.toUpperCase()===Q.toUpperCase()&&(B[Q]=C,delete B[n])})},_s=function(B,Q,g,C,n){return B.config=Q,g&&(B.code=g),B.request=C,B.response=n,B.isAxiosError=!0,B.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},B},$s={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ee,Bc;function Aa(){if(Bc)return ee;Bc=1;var A=_s;return ee=function(Q,g,C,n,t){var w=new Error(Q);return A(w,g,C,n,t)},ee}var Fe,Qc;function eM(){if(Qc)return Fe;Qc=1;var A=Aa();return Fe=function(Q,g,C){var n=C.config.validateStatus;!C.status||!n||n(C.status)?Q(C):g(A("Request failed with status code "+C.status,C.config,null,C.request,C))},Fe}var De,gc;function FM(){if(gc)return De;gc=1;var A=vB;return De=A.isStandardBrowserEnv()?function(){return{write:function(g,C,n,t,w,I){var D=[];D.push(g+"="+encodeURIComponent(C)),A.isNumber(n)&&D.push("expires="+new Date(n).toGMTString()),A.isString(t)&&D.push("path="+t),A.isString(w)&&D.push("domain="+w),I===!0&&D.push("secure"),document.cookie=D.join("; ")},read:function(g){var C=document.cookie.match(new RegExp("(^|;\\s*)("+g+")=([^;]*)"));return C?decodeURIComponent(C[3]):null},remove:function(g){this.write(g,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),De}var ie,Ec;function DM(){return Ec||(Ec=1,ie=function(B){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(B)}),ie}var ce,Cc;function iM(){return Cc||(Cc=1,ce=function(B,Q){return Q?B.replace(/\/+$/,"")+"/"+Q.replace(/^\/+/,""):B}),ce}var se,Ic;function cM(){if(Ic)return se;Ic=1;var A=DM(),B=iM();return se=function(g,C){return g&&!A(C)?B(g,C):C},se}var ae,wc;function sM(){if(wc)return ae;wc=1;var A=vB,B=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ae=function(g){var C={},n,t,w;return g&&A.forEach(g.split(`
`),function(D){if(w=D.indexOf(":"),n=A.trim(D.substr(0,w)).toLowerCase(),t=A.trim(D.substr(w+1)),n){if(C[n]&&B.indexOf(n)>=0)return;n==="set-cookie"?C[n]=(C[n]?C[n]:[]).concat([t]):C[n]=C[n]?C[n]+", "+t:t}}),C},ae}var oe,nc;function aM(){if(nc)return oe;nc=1;var A=vB;return oe=A.isStandardBrowserEnv()?function(){var Q=/(msie|trident)/i.test(navigator.userAgent),g=document.createElement("a"),C;function n(t){var w=t;return Q&&(g.setAttribute("href",w),w=g.href),g.setAttribute("href",w),{href:g.href,protocol:g.protocol?g.protocol.replace(/:$/,""):"",host:g.host,search:g.search?g.search.replace(/^\?/,""):"",hash:g.hash?g.hash.replace(/^#/,""):"",hostname:g.hostname,port:g.port,pathname:g.pathname.charAt(0)==="/"?g.pathname:"/"+g.pathname}}return C=n(window.location.href),function(w){var I=A.isString(w)?n(w):w;return I.protocol===C.protocol&&I.host===C.host}}():function(){return function(){return!0}}(),oe}var Ue,tc;function LI(){if(tc)return Ue;tc=1;function A(B){this.message=B}return A.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},A.prototype.__CANCEL__=!0,Ue=A,Ue}var le,ec;function Fc(){if(ec)return le;ec=1;var A=vB,B=eM(),Q=FM(),g=qs,C=cM(),n=sM(),t=aM(),w=Aa(),I=$s,D=LI();return le=function(e){return new Promise(function(M,N){var f=e.data,h=e.headers,m=e.responseType,q;function gA(){e.cancelToken&&e.cancelToken.unsubscribe(q),e.signal&&e.signal.removeEventListener("abort",q)}A.isFormData(f)&&delete h["Content-Type"];var x=new XMLHttpRequest;if(e.auth){var CA=e.auth.username||"",bA=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(CA+":"+bA)}var oA=C(e.baseURL,e.url);x.open(e.method.toUpperCase(),g(oA,e.params,e.paramsSerializer),!0),x.timeout=e.timeout;function IA(){if(x){var UA="getAllResponseHeaders"in x?n(x.getAllResponseHeaders()):null,uA=!m||m==="text"||m==="json"?x.responseText:x.response,rA={data:uA,status:x.status,statusText:x.statusText,headers:UA,config:e,request:x};B(function(xA){M(xA),gA()},function(xA){N(xA),gA()},rA),x=null}}if("onloadend"in x?x.onloadend=IA:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(IA)},x.onabort=function(){x&&(N(w("Request aborted",e,"ECONNABORTED",x)),x=null)},x.onerror=function(){N(w("Network Error",e,null,x)),x=null},x.ontimeout=function(){var uA=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",rA=e.transitional||I;e.timeoutErrorMessage&&(uA=e.timeoutErrorMessage),N(w(uA,e,rA.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",x)),x=null},A.isStandardBrowserEnv()){var wA=(e.withCredentials||t(oA))&&e.xsrfCookieName?Q.read(e.xsrfCookieName):void 0;wA&&(h[e.xsrfHeaderName]=wA)}"setRequestHeader"in x&&A.forEach(h,function(uA,rA){typeof f>"u"&&rA.toLowerCase()==="content-type"?delete h[rA]:x.setRequestHeader(rA,uA)}),A.isUndefined(e.withCredentials)||(x.withCredentials=!!e.withCredentials),m&&m!=="json"&&(x.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&x.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(q=function(UA){x&&(N(!UA||UA&&UA.type?new D("canceled"):UA),x.abort(),x=null)},e.cancelToken&&e.cancelToken.subscribe(q),e.signal&&(e.signal.aborted?q():e.signal.addEventListener("abort",q))),f||(f=null),x.send(f)})},le}var fB=vB,Dc=tM,oM=_s,UM=$s,lM={"Content-Type":"application/x-www-form-urlencoded"};function ic(A,B){!fB.isUndefined(A)&&fB.isUndefined(A["Content-Type"])&&(A["Content-Type"]=B)}function MM(){var A;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(A=Fc()),A}function GM(A,B,Q){if(fB.isString(A))try{return(B||JSON.parse)(A),fB.trim(A)}catch(g){if(g.name!=="SyntaxError")throw g}return(Q||JSON.stringify)(A)}var yI={transitional:UM,adapter:MM(),transformRequest:[function(B,Q){return Dc(Q,"Accept"),Dc(Q,"Content-Type"),fB.isFormData(B)||fB.isArrayBuffer(B)||fB.isBuffer(B)||fB.isStream(B)||fB.isFile(B)||fB.isBlob(B)?B:fB.isArrayBufferView(B)?B.buffer:fB.isURLSearchParams(B)?(ic(Q,"application/x-www-form-urlencoded;charset=utf-8"),B.toString()):fB.isObject(B)||Q&&Q["Content-Type"]==="application/json"?(ic(Q,"application/json"),GM(B)):B}],transformResponse:[function(B){var Q=this.transitional||yI.transitional,g=Q&&Q.silentJSONParsing,C=Q&&Q.forcedJSONParsing,n=!g&&this.responseType==="json";if(n||C&&fB.isString(B)&&B.length)try{return JSON.parse(B)}catch(t){if(n)throw t.name==="SyntaxError"?oM(t,this,"E_JSON_PARSE"):t}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(B){return B>=200&&B<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};fB.forEach(["delete","get","head"],function(B){yI.headers[B]={}});fB.forEach(["post","put","patch"],function(B){yI.headers[B]=fB.merge(lM)});var rF=yI,rM=vB,dM=rF,fM=function(B,Q,g){var C=this||dM;return rM.forEach(g,function(t){B=t.call(C,B,Q)}),B},Me,cc;function Ba(){return cc||(cc=1,Me=function(B){return!!(B&&B.__CANCEL__)}),Me}var sc=vB,Ge=fM,RM=Ba(),YM=rF,hM=LI();function re(A){if(A.cancelToken&&A.cancelToken.throwIfRequested(),A.signal&&A.signal.aborted)throw new hM("canceled")}var NM=function(B){re(B),B.headers=B.headers||{},B.data=Ge.call(B,B.data,B.headers,B.transformRequest),B.headers=sc.merge(B.headers.common||{},B.headers[B.method]||{},B.headers),sc.forEach(["delete","get","head","post","put","patch","common"],function(C){delete B.headers[C]});var Q=B.adapter||YM.adapter;return Q(B).then(function(C){return re(B),C.data=Ge.call(B,C.data,C.headers,B.transformResponse),C},function(C){return RM(C)||(re(B),C&&C.response&&(C.response.data=Ge.call(B,C.response.data,C.response.headers,B.transformResponse))),Promise.reject(C)})},_B=vB,Qa=function(B,Q){Q=Q||{};var g={};function C(F,e){return _B.isPlainObject(F)&&_B.isPlainObject(e)?_B.merge(F,e):_B.isPlainObject(e)?_B.merge({},e):_B.isArray(e)?e.slice():e}function n(F){if(_B.isUndefined(Q[F])){if(!_B.isUndefined(B[F]))return C(void 0,B[F])}else return C(B[F],Q[F])}function t(F){if(!_B.isUndefined(Q[F]))return C(void 0,Q[F])}function w(F){if(_B.isUndefined(Q[F])){if(!_B.isUndefined(B[F]))return C(void 0,B[F])}else return C(void 0,Q[F])}function I(F){if(F in Q)return C(B[F],Q[F]);if(F in B)return C(void 0,B[F])}var D={url:t,method:t,data:t,baseURL:w,transformRequest:w,transformResponse:w,paramsSerializer:w,timeout:w,timeoutMessage:w,withCredentials:w,adapter:w,responseType:w,xsrfCookieName:w,xsrfHeaderName:w,onUploadProgress:w,onDownloadProgress:w,decompress:w,maxContentLength:w,maxBodyLength:w,transport:w,httpAgent:w,httpsAgent:w,cancelToken:w,socketPath:w,responseEncoding:w,validateStatus:I};return _B.forEach(Object.keys(B).concat(Object.keys(Q)),function(e){var a=D[e]||n,M=a(e);_B.isUndefined(M)&&a!==I||(g[e]=M)}),g},de,ac;function ga(){return ac||(ac=1,de={version:"0.26.1"}),de}var uM=ga().version,dF={};["object","boolean","number","function","string","symbol"].forEach(function(A,B){dF[A]=function(g){return typeof g===A||"a"+(B<1?"n ":" ")+A}});var oc={};dF.transitional=function(B,Q,g){function C(n,t){return"[Axios v"+uM+"] Transitional option '"+n+"'"+t+(g?". "+g:"")}return function(n,t,w){if(B===!1)throw new Error(C(t," has been removed"+(Q?" in "+Q:"")));return Q&&!oc[t]&&(oc[t]=!0,console.warn(C(t," has been deprecated since v"+Q+" and will be removed in the near future"))),B?B(n,t,w):!0}};function JM(A,B,Q){if(typeof A!="object")throw new TypeError("options must be an object");for(var g=Object.keys(A),C=g.length;C-- >0;){var n=g[C],t=B[n];if(t){var w=A[n],I=w===void 0||t(w,n,A);if(I!==!0)throw new TypeError("option "+n+" must be "+I);continue}if(Q!==!0)throw Error("Unknown option "+n)}}var bM={assertOptions:JM,validators:dF},Ea=vB,kM=qs,Uc=wM,lc=NM,pI=Qa,Ca=bM,FE=Ca.validators;function MC(A){this.defaults=A,this.interceptors={request:new Uc,response:new Uc}}MC.prototype.request=function(B,Q){typeof B=="string"?(Q=Q||{},Q.url=B):Q=B||{},Q=pI(this.defaults,Q),Q.method?Q.method=Q.method.toLowerCase():this.defaults.method?Q.method=this.defaults.method.toLowerCase():Q.method="get";var g=Q.transitional;g!==void 0&&Ca.assertOptions(g,{silentJSONParsing:FE.transitional(FE.boolean),forcedJSONParsing:FE.transitional(FE.boolean),clarifyTimeoutError:FE.transitional(FE.boolean)},!1);var C=[],n=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(Q)===!1||(n=n&&M.synchronous,C.unshift(M.fulfilled,M.rejected))});var t=[];this.interceptors.response.forEach(function(M){t.push(M.fulfilled,M.rejected)});var w;if(!n){var I=[lc,void 0];for(Array.prototype.unshift.apply(I,C),I=I.concat(t),w=Promise.resolve(Q);I.length;)w=w.then(I.shift(),I.shift());return w}for(var D=Q;C.length;){var F=C.shift(),e=C.shift();try{D=F(D)}catch(a){e(a);break}}try{w=lc(D)}catch(a){return Promise.reject(a)}for(;t.length;)w=w.then(t.shift(),t.shift());return w};MC.prototype.getUri=function(B){return B=pI(this.defaults,B),kM(B.url,B.params,B.paramsSerializer).replace(/^\?/,"")};Ea.forEach(["delete","get","head","options"],function(B){MC.prototype[B]=function(Q,g){return this.request(pI(g||{},{method:B,url:Q,data:(g||{}).data}))}});Ea.forEach(["post","put","patch"],function(B){MC.prototype[B]=function(Q,g,C){return this.request(pI(C||{},{method:B,url:Q,data:g}))}});var ZM=MC,fe,Mc;function mM(){if(Mc)return fe;Mc=1;var A=LI();function B(Q){if(typeof Q!="function")throw new TypeError("executor must be a function.");var g;this.promise=new Promise(function(t){g=t});var C=this;this.promise.then(function(n){if(C._listeners){var t,w=C._listeners.length;for(t=0;t<w;t++)C._listeners[t](n);C._listeners=null}}),this.promise.then=function(n){var t,w=new Promise(function(I){C.subscribe(I),t=I}).then(n);return w.cancel=function(){C.unsubscribe(t)},w},Q(function(t){C.reason||(C.reason=new A(t),g(C.reason))})}return B.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},B.prototype.subscribe=function(g){if(this.reason){g(this.reason);return}this._listeners?this._listeners.push(g):this._listeners=[g]},B.prototype.unsubscribe=function(g){if(this._listeners){var C=this._listeners.indexOf(g);C!==-1&&this._listeners.splice(C,1)}},B.source=function(){var g,C=new B(function(t){g=t});return{token:C,cancel:g}},fe=B,fe}var Re,Gc;function XM(){return Gc||(Gc=1,Re=function(B){return function(g){return B.apply(null,g)}}),Re}var Ye,rc;function LM(){if(rc)return Ye;rc=1;var A=vB;return Ye=function(Q){return A.isObject(Q)&&Q.isAxiosError===!0},Ye}var dc=vB,yM=zs,DI=ZM,pM=Qa,HM=rF;function Ia(A){var B=new DI(A),Q=yM(DI.prototype.request,B);return dc.extend(Q,DI.prototype,B),dc.extend(Q,B),Q.create=function(C){return Ia(pM(A,C))},Q}var mQ=Ia(HM);mQ.Axios=DI;mQ.Cancel=LI();mQ.CancelToken=mM();mQ.isCancel=Ba();mQ.VERSION=ga().version;mQ.all=function(B){return Promise.all(B)};mQ.spread=XM();mQ.isAxiosError=LM();T0.exports=mQ;MI.default=mQ;(function(A){A.exports=MI})(O0);var CB={},fF={};(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.RequiredError=A.BaseAPI=A.COLLECTION_FORMATS=A.BASE_PATH=void 0;const B=lI;A.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),A.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class Q{constructor(n,t=A.BASE_PATH,w=B.default){this.basePath=t,this.axios=w,n&&(this.configuration=n,this.basePath=n.basePath||this.basePath)}}A.BaseAPI=Q;class g extends Error{constructor(n,t){super(t),this.field=n,this.name="RequiredError"}}A.RequiredError=g})(fF);var RF=jQ&&jQ.__awaiter||function(A,B,Q,g){function C(n){return n instanceof Q?n:new Q(function(t){t(n)})}return new(Q||(Q=Promise))(function(n,t){function w(F){try{D(g.next(F))}catch(e){t(e)}}function I(F){try{D(g.throw(F))}catch(e){t(e)}}function D(F){F.done?n(F.value):C(F.value).then(w,I)}D((g=g.apply(A,B||[])).next())})};Object.defineProperty(CB,"__esModule",{value:!0});CB.createRequestFunction=CB.toPathString=CB.serializeDataIfNeeded=CB.setSearchParams=CB.setOAuthToObject=CB.setBearerAuthToObject=CB.setBasicAuthToObject=CB.setApiKeyToObject=CB.assertParamExists=CB.DUMMY_BASE_URL=void 0;const SM=fF;CB.DUMMY_BASE_URL="https://example.com";CB.assertParamExists=function(A,B,Q){if(Q==null)throw new SM.RequiredError(B,`Required parameter ${B} was null or undefined when calling ${A}.`)};CB.setApiKeyToObject=function(A,B,Q){return RF(this,void 0,void 0,function*(){if(Q&&Q.apiKey){const g=typeof Q.apiKey=="function"?yield Q.apiKey(B):yield Q.apiKey;A[B]=g}})};CB.setBasicAuthToObject=function(A,B){B&&(B.username||B.password)&&(A.auth={username:B.username,password:B.password})};CB.setBearerAuthToObject=function(A,B){return RF(this,void 0,void 0,function*(){if(B&&B.accessToken){const Q=typeof B.accessToken=="function"?yield B.accessToken():yield B.accessToken;A.Authorization="Bearer "+Q}})};CB.setOAuthToObject=function(A,B,Q,g){return RF(this,void 0,void 0,function*(){if(g&&g.accessToken){const C=typeof g.accessToken=="function"?yield g.accessToken(B,Q):yield g.accessToken;A.Authorization="Bearer "+C}})};function Ke(A,B,Q=""){typeof B=="object"?Array.isArray(B)?B.forEach(g=>Ke(A,g,Q)):Object.keys(B).forEach(g=>Ke(A,B[g],`${Q}${Q!==""?".":""}${g}`)):A.has(Q)?A.append(Q,B):A.set(Q,B)}CB.setSearchParams=function(A,...B){const Q=new URLSearchParams(A.search);Ke(Q,B),A.search=Q.toString()};CB.serializeDataIfNeeded=function(A,B,Q){const g=typeof A!="string";return(g&&Q&&Q.isJsonMime?Q.isJsonMime(B.headers["Content-Type"]):g)?JSON.stringify(A!==void 0?A:{}):A||""};CB.toPathString=function(A){return A.pathname+A.search+A.hash};CB.createRequestFunction=function(A,B,Q,g){return(C=B,n=Q)=>{const t=Object.assign(Object.assign({},A.options),{url:((g==null?void 0:g.basePath)||n)+A.url});return C.request(t)}};(function(A){var B=jQ&&jQ.__awaiter||function(t,w,I,D){function F(e){return e instanceof I?e:new I(function(a){a(e)})}return new(I||(I=Promise))(function(e,a){function M(h){try{f(D.next(h))}catch(m){a(m)}}function N(h){try{f(D.throw(h))}catch(m){a(m)}}function f(h){h.done?e(h.value):F(h.value).then(M,N)}f((D=D.apply(t,w||[])).next())})};Object.defineProperty(A,"__esModule",{value:!0}),A.OpenAIApi=A.OpenAIApiFactory=A.OpenAIApiFp=A.OpenAIApiAxiosParamCreator=A.CreateImageRequestResponseFormatEnum=A.CreateImageRequestSizeEnum=void 0;const Q=lI,g=CB,C=fF;A.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},A.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},A.OpenAIApiAxiosParamCreator=function(t){return{cancelFineTune:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("cancelFineTune","fineTuneId",w);const D="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),createAnswer:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createAnswer","createAnswerRequest",w);const D="/answers",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createClassification:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createClassification","createClassificationRequest",w);const D="/classifications",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createCompletion:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createCompletion","createCompletionRequest",w);const D="/completions",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createEdit:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createEdit","createEditRequest",w);const D="/edits",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createEmbedding:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createEmbedding","createEmbeddingRequest",w);const D="/embeddings",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createFile:(w,I,D={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createFile","file",w),g.assertParamExists("createFile","purpose",I);const F="/files",e=new URL(F,g.DUMMY_BASE_URL);let a;t&&(a=t.baseOptions);const M=Object.assign(Object.assign({method:"POST"},a),D),N={},f={},h=new(t&&t.formDataCtor||FormData);w!==void 0&&h.append("file",w),I!==void 0&&h.append("purpose",I),N["Content-Type"]="multipart/form-data",g.setSearchParams(e,f);let m=a&&a.headers?a.headers:{};return M.headers=Object.assign(Object.assign(Object.assign(Object.assign({},N),h.getHeaders()),m),D.headers),M.data=h,{url:g.toPathString(e),options:M}}),createFineTune:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createFineTune","createFineTuneRequest",w);const D="/fine-tunes",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createImage:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createImage","createImageRequest",w);const D="/images/generations",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createImageEdit:(w,I,D,F,e,a,M,N={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createImageEdit","image",w),g.assertParamExists("createImageEdit","mask",I),g.assertParamExists("createImageEdit","prompt",D);const f="/images/edits",h=new URL(f,g.DUMMY_BASE_URL);let m;t&&(m=t.baseOptions);const q=Object.assign(Object.assign({method:"POST"},m),N),gA={},x={},CA=new(t&&t.formDataCtor||FormData);w!==void 0&&CA.append("image",w),I!==void 0&&CA.append("mask",I),D!==void 0&&CA.append("prompt",D),F!==void 0&&CA.append("n",F),e!==void 0&&CA.append("size",e),a!==void 0&&CA.append("response_format",a),M!==void 0&&CA.append("user",M),gA["Content-Type"]="multipart/form-data",g.setSearchParams(h,x);let bA=m&&m.headers?m.headers:{};return q.headers=Object.assign(Object.assign(Object.assign(Object.assign({},gA),CA.getHeaders()),bA),N.headers),q.data=CA,{url:g.toPathString(h),options:q}}),createImageVariation:(w,I,D,F,e,a={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createImageVariation","image",w);const M="/images/variations",N=new URL(M,g.DUMMY_BASE_URL);let f;t&&(f=t.baseOptions);const h=Object.assign(Object.assign({method:"POST"},f),a),m={},q={},gA=new(t&&t.formDataCtor||FormData);w!==void 0&&gA.append("image",w),I!==void 0&&gA.append("n",I),D!==void 0&&gA.append("size",D),F!==void 0&&gA.append("response_format",F),e!==void 0&&gA.append("user",e),m["Content-Type"]="multipart/form-data",g.setSearchParams(N,q);let x=f&&f.headers?f.headers:{};return h.headers=Object.assign(Object.assign(Object.assign(Object.assign({},m),gA.getHeaders()),x),a.headers),h.data=gA,{url:g.toPathString(N),options:h}}),createModeration:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createModeration","createModerationRequest",w);const D="/moderations",F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"POST"},e),I),M={},N={};M["Content-Type"]="application/json",g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),a.data=g.serializeDataIfNeeded(w,a,t),{url:g.toPathString(F),options:a}}),createSearch:(w,I,D={})=>B(this,void 0,void 0,function*(){g.assertParamExists("createSearch","engineId",w),g.assertParamExists("createSearch","createSearchRequest",I);const F="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(w))),e=new URL(F,g.DUMMY_BASE_URL);let a;t&&(a=t.baseOptions);const M=Object.assign(Object.assign({method:"POST"},a),D),N={},f={};N["Content-Type"]="application/json",g.setSearchParams(e,f);let h=a&&a.headers?a.headers:{};return M.headers=Object.assign(Object.assign(Object.assign({},N),h),D.headers),M.data=g.serializeDataIfNeeded(I,M,t),{url:g.toPathString(e),options:M}}),deleteFile:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("deleteFile","fileId",w);const D="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"DELETE"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),deleteModel:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("deleteModel","model",w);const D="/models/{model}".replace("{model}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"DELETE"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),downloadFile:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("downloadFile","fileId",w);const D="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"GET"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),listEngines:(w={})=>B(this,void 0,void 0,function*(){const I="/engines",D=new URL(I,g.DUMMY_BASE_URL);let F;t&&(F=t.baseOptions);const e=Object.assign(Object.assign({method:"GET"},F),w),a={},M={};g.setSearchParams(D,M);let N=F&&F.headers?F.headers:{};return e.headers=Object.assign(Object.assign(Object.assign({},a),N),w.headers),{url:g.toPathString(D),options:e}}),listFiles:(w={})=>B(this,void 0,void 0,function*(){const I="/files",D=new URL(I,g.DUMMY_BASE_URL);let F;t&&(F=t.baseOptions);const e=Object.assign(Object.assign({method:"GET"},F),w),a={},M={};g.setSearchParams(D,M);let N=F&&F.headers?F.headers:{};return e.headers=Object.assign(Object.assign(Object.assign({},a),N),w.headers),{url:g.toPathString(D),options:e}}),listFineTuneEvents:(w,I,D={})=>B(this,void 0,void 0,function*(){g.assertParamExists("listFineTuneEvents","fineTuneId",w);const F="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(w))),e=new URL(F,g.DUMMY_BASE_URL);let a;t&&(a=t.baseOptions);const M=Object.assign(Object.assign({method:"GET"},a),D),N={},f={};I!==void 0&&(f.stream=I),g.setSearchParams(e,f);let h=a&&a.headers?a.headers:{};return M.headers=Object.assign(Object.assign(Object.assign({},N),h),D.headers),{url:g.toPathString(e),options:M}}),listFineTunes:(w={})=>B(this,void 0,void 0,function*(){const I="/fine-tunes",D=new URL(I,g.DUMMY_BASE_URL);let F;t&&(F=t.baseOptions);const e=Object.assign(Object.assign({method:"GET"},F),w),a={},M={};g.setSearchParams(D,M);let N=F&&F.headers?F.headers:{};return e.headers=Object.assign(Object.assign(Object.assign({},a),N),w.headers),{url:g.toPathString(D),options:e}}),listModels:(w={})=>B(this,void 0,void 0,function*(){const I="/models",D=new URL(I,g.DUMMY_BASE_URL);let F;t&&(F=t.baseOptions);const e=Object.assign(Object.assign({method:"GET"},F),w),a={},M={};g.setSearchParams(D,M);let N=F&&F.headers?F.headers:{};return e.headers=Object.assign(Object.assign(Object.assign({},a),N),w.headers),{url:g.toPathString(D),options:e}}),retrieveEngine:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("retrieveEngine","engineId",w);const D="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"GET"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),retrieveFile:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("retrieveFile","fileId",w);const D="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"GET"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),retrieveFineTune:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("retrieveFineTune","fineTuneId",w);const D="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"GET"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}}),retrieveModel:(w,I={})=>B(this,void 0,void 0,function*(){g.assertParamExists("retrieveModel","model",w);const D="/models/{model}".replace("{model}",encodeURIComponent(String(w))),F=new URL(D,g.DUMMY_BASE_URL);let e;t&&(e=t.baseOptions);const a=Object.assign(Object.assign({method:"GET"},e),I),M={},N={};g.setSearchParams(F,N);let f=e&&e.headers?e.headers:{};return a.headers=Object.assign(Object.assign(Object.assign({},M),f),I.headers),{url:g.toPathString(F),options:a}})}},A.OpenAIApiFp=function(t){const w=A.OpenAIApiAxiosParamCreator(t);return{cancelFineTune(I,D){return B(this,void 0,void 0,function*(){const F=yield w.cancelFineTune(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createAnswer(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createAnswer(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createClassification(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createClassification(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createCompletion(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createCompletion(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createEdit(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createEdit(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createEmbedding(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createEmbedding(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createFile(I,D,F){return B(this,void 0,void 0,function*(){const e=yield w.createFile(I,D,F);return g.createRequestFunction(e,Q.default,C.BASE_PATH,t)})},createFineTune(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createFineTune(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createImage(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createImage(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createImageEdit(I,D,F,e,a,M,N,f){return B(this,void 0,void 0,function*(){const h=yield w.createImageEdit(I,D,F,e,a,M,N,f);return g.createRequestFunction(h,Q.default,C.BASE_PATH,t)})},createImageVariation(I,D,F,e,a,M){return B(this,void 0,void 0,function*(){const N=yield w.createImageVariation(I,D,F,e,a,M);return g.createRequestFunction(N,Q.default,C.BASE_PATH,t)})},createModeration(I,D){return B(this,void 0,void 0,function*(){const F=yield w.createModeration(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},createSearch(I,D,F){return B(this,void 0,void 0,function*(){const e=yield w.createSearch(I,D,F);return g.createRequestFunction(e,Q.default,C.BASE_PATH,t)})},deleteFile(I,D){return B(this,void 0,void 0,function*(){const F=yield w.deleteFile(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},deleteModel(I,D){return B(this,void 0,void 0,function*(){const F=yield w.deleteModel(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},downloadFile(I,D){return B(this,void 0,void 0,function*(){const F=yield w.downloadFile(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},listEngines(I){return B(this,void 0,void 0,function*(){const D=yield w.listEngines(I);return g.createRequestFunction(D,Q.default,C.BASE_PATH,t)})},listFiles(I){return B(this,void 0,void 0,function*(){const D=yield w.listFiles(I);return g.createRequestFunction(D,Q.default,C.BASE_PATH,t)})},listFineTuneEvents(I,D,F){return B(this,void 0,void 0,function*(){const e=yield w.listFineTuneEvents(I,D,F);return g.createRequestFunction(e,Q.default,C.BASE_PATH,t)})},listFineTunes(I){return B(this,void 0,void 0,function*(){const D=yield w.listFineTunes(I);return g.createRequestFunction(D,Q.default,C.BASE_PATH,t)})},listModels(I){return B(this,void 0,void 0,function*(){const D=yield w.listModels(I);return g.createRequestFunction(D,Q.default,C.BASE_PATH,t)})},retrieveEngine(I,D){return B(this,void 0,void 0,function*(){const F=yield w.retrieveEngine(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},retrieveFile(I,D){return B(this,void 0,void 0,function*(){const F=yield w.retrieveFile(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},retrieveFineTune(I,D){return B(this,void 0,void 0,function*(){const F=yield w.retrieveFineTune(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})},retrieveModel(I,D){return B(this,void 0,void 0,function*(){const F=yield w.retrieveModel(I,D);return g.createRequestFunction(F,Q.default,C.BASE_PATH,t)})}}},A.OpenAIApiFactory=function(t,w,I){const D=A.OpenAIApiFp(t);return{cancelFineTune(F,e){return D.cancelFineTune(F,e).then(a=>a(I,w))},createAnswer(F,e){return D.createAnswer(F,e).then(a=>a(I,w))},createClassification(F,e){return D.createClassification(F,e).then(a=>a(I,w))},createCompletion(F,e){return D.createCompletion(F,e).then(a=>a(I,w))},createEdit(F,e){return D.createEdit(F,e).then(a=>a(I,w))},createEmbedding(F,e){return D.createEmbedding(F,e).then(a=>a(I,w))},createFile(F,e,a){return D.createFile(F,e,a).then(M=>M(I,w))},createFineTune(F,e){return D.createFineTune(F,e).then(a=>a(I,w))},createImage(F,e){return D.createImage(F,e).then(a=>a(I,w))},createImageEdit(F,e,a,M,N,f,h,m){return D.createImageEdit(F,e,a,M,N,f,h,m).then(q=>q(I,w))},createImageVariation(F,e,a,M,N,f){return D.createImageVariation(F,e,a,M,N,f).then(h=>h(I,w))},createModeration(F,e){return D.createModeration(F,e).then(a=>a(I,w))},createSearch(F,e,a){return D.createSearch(F,e,a).then(M=>M(I,w))},deleteFile(F,e){return D.deleteFile(F,e).then(a=>a(I,w))},deleteModel(F,e){return D.deleteModel(F,e).then(a=>a(I,w))},downloadFile(F,e){return D.downloadFile(F,e).then(a=>a(I,w))},listEngines(F){return D.listEngines(F).then(e=>e(I,w))},listFiles(F){return D.listFiles(F).then(e=>e(I,w))},listFineTuneEvents(F,e,a){return D.listFineTuneEvents(F,e,a).then(M=>M(I,w))},listFineTunes(F){return D.listFineTunes(F).then(e=>e(I,w))},listModels(F){return D.listModels(F).then(e=>e(I,w))},retrieveEngine(F,e){return D.retrieveEngine(F,e).then(a=>a(I,w))},retrieveFile(F,e){return D.retrieveFile(F,e).then(a=>a(I,w))},retrieveFineTune(F,e){return D.retrieveFineTune(F,e).then(a=>a(I,w))},retrieveModel(F,e){return D.retrieveModel(F,e).then(a=>a(I,w))}}};class n extends C.BaseAPI{cancelFineTune(w,I){return A.OpenAIApiFp(this.configuration).cancelFineTune(w,I).then(D=>D(this.axios,this.basePath))}createAnswer(w,I){return A.OpenAIApiFp(this.configuration).createAnswer(w,I).then(D=>D(this.axios,this.basePath))}createClassification(w,I){return A.OpenAIApiFp(this.configuration).createClassification(w,I).then(D=>D(this.axios,this.basePath))}createCompletion(w,I){return A.OpenAIApiFp(this.configuration).createCompletion(w,I).then(D=>D(this.axios,this.basePath))}createEdit(w,I){return A.OpenAIApiFp(this.configuration).createEdit(w,I).then(D=>D(this.axios,this.basePath))}createEmbedding(w,I){return A.OpenAIApiFp(this.configuration).createEmbedding(w,I).then(D=>D(this.axios,this.basePath))}createFile(w,I,D){return A.OpenAIApiFp(this.configuration).createFile(w,I,D).then(F=>F(this.axios,this.basePath))}createFineTune(w,I){return A.OpenAIApiFp(this.configuration).createFineTune(w,I).then(D=>D(this.axios,this.basePath))}createImage(w,I){return A.OpenAIApiFp(this.configuration).createImage(w,I).then(D=>D(this.axios,this.basePath))}createImageEdit(w,I,D,F,e,a,M,N){return A.OpenAIApiFp(this.configuration).createImageEdit(w,I,D,F,e,a,M,N).then(f=>f(this.axios,this.basePath))}createImageVariation(w,I,D,F,e,a){return A.OpenAIApiFp(this.configuration).createImageVariation(w,I,D,F,e,a).then(M=>M(this.axios,this.basePath))}createModeration(w,I){return A.OpenAIApiFp(this.configuration).createModeration(w,I).then(D=>D(this.axios,this.basePath))}createSearch(w,I,D){return A.OpenAIApiFp(this.configuration).createSearch(w,I,D).then(F=>F(this.axios,this.basePath))}deleteFile(w,I){return A.OpenAIApiFp(this.configuration).deleteFile(w,I).then(D=>D(this.axios,this.basePath))}deleteModel(w,I){return A.OpenAIApiFp(this.configuration).deleteModel(w,I).then(D=>D(this.axios,this.basePath))}downloadFile(w,I){return A.OpenAIApiFp(this.configuration).downloadFile(w,I).then(D=>D(this.axios,this.basePath))}listEngines(w){return A.OpenAIApiFp(this.configuration).listEngines(w).then(I=>I(this.axios,this.basePath))}listFiles(w){return A.OpenAIApiFp(this.configuration).listFiles(w).then(I=>I(this.axios,this.basePath))}listFineTuneEvents(w,I,D){return A.OpenAIApiFp(this.configuration).listFineTuneEvents(w,I,D).then(F=>F(this.axios,this.basePath))}listFineTunes(w){return A.OpenAIApiFp(this.configuration).listFineTunes(w).then(I=>I(this.axios,this.basePath))}listModels(w){return A.OpenAIApiFp(this.configuration).listModels(w).then(I=>I(this.axios,this.basePath))}retrieveEngine(w,I){return A.OpenAIApiFp(this.configuration).retrieveEngine(w,I).then(D=>D(this.axios,this.basePath))}retrieveFile(w,I){return A.OpenAIApiFp(this.configuration).retrieveFile(w,I).then(D=>D(this.axios,this.basePath))}retrieveFineTune(w,I){return A.OpenAIApiFp(this.configuration).retrieveFineTune(w,I).then(D=>D(this.axios,this.basePath))}retrieveModel(w,I){return A.OpenAIApiFp(this.configuration).retrieveModel(w,I).then(D=>D(this.axios,this.basePath))}}A.OpenAIApi=n})(vs);var HI={};const WM="openai",VM="3.1.0",OM="Node.js library for the OpenAI API",TM={type:"git",url:"git@github.com:openai/openai-node.git"},xM=["openai","open","ai","gpt-3","gpt3"],vM="OpenAI",zM="MIT",KM="./dist/index.js",jM="./dist/index.d.ts",PM={build:"tsc --outDir dist/"},qM={axios:"^0.26.0","form-data":"^4.0.0"},_M={"@types/node":"^12.11.5",typescript:"^3.6.4"},$M={name:WM,version:VM,description:OM,repository:TM,keywords:xM,author:vM,license:zM,main:KM,types:jM,scripts:PM,dependencies:qM,devDependencies:_M};var he,fc;function AG(){return fc||(fc=1,he=typeof self=="object"?self.FormData:window.FormData),he}Object.defineProperty(HI,"__esModule",{value:!0});HI.Configuration=void 0;const BG=$M;class QG{constructor(B={}){this.apiKey=B.apiKey,this.organization=B.organization,this.username=B.username,this.password=B.password,this.accessToken=B.accessToken,this.basePath=B.basePath,this.baseOptions=B.baseOptions,this.formDataCtor=B.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${BG.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=AG())}isJsonMime(B){const Q=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return B!==null&&(Q.test(B)||B.toLowerCase()==="application/json-patch+json")}}HI.Configuration=QG;(function(A){var B=jQ&&jQ.__createBinding||(Object.create?function(g,C,n,t){t===void 0&&(t=n),Object.defineProperty(g,t,{enumerable:!0,get:function(){return C[n]}})}:function(g,C,n,t){t===void 0&&(t=n),g[t]=C[n]}),Q=jQ&&jQ.__exportStar||function(g,C){for(var n in g)n!=="default"&&!C.hasOwnProperty(n)&&B(C,g,n)};Object.defineProperty(A,"__esModule",{value:!0}),Q(vs,A),Q(HI,A)})(lF);const gG=new lF.Configuration({organization:"ORGANIZATION_ID",apiKey:"YOUR_API_KEY"});new lF.OpenAIApi(gG);const wa=(A,B)=>{const Q=A.__vccOpts||A;for(const[g,C]of B)Q[g]=C;return Q},EG={},CG={class:"flex-1 overflow-hidden"},IG=lC('<div class="react-scroll-to-bottom--css-ryzwt-79elbk h-full dark:bg-gray-800"><div class="react-scroll-to-bottom--css-ryzwt-1n7m0yu"><div class="flex flex-col items-center text-sm dark:bg-gray-800"><div class="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"><h1 class="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"> CRM CoPilot </h1><div class="md:flex items-start text-center gap-3.5"><div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"><h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>Examples </h2><ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto"><button class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"> &quot;Explain quantum computing in simple terms&quot; → </button><button class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"> &quot;Got any creative ideas for a 10 year old’s birthday?&quot; → </button><button class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"> &quot;How do I make an HTTP request in Javascript?&quot; → </button></ul></div><div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"><h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>Capabilities </h2><ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto"><li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"> Remembers what user said earlier in the conversation </li><li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"> Allows user to provide follow-up corrections </li><li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"> Trained to decline inappropriate requests </li></ul></div><div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"><h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>Limitations </h2><ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto"><li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"> May occasionally generate incorrect information </li><li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"> May occasionally produce harmful instructions or biased content </li><li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"> Limited knowledge of world and events after 2021 </li></ul></div></div></div><div class="w-full h-32 md:h-48 flex-shrink-0"></div></div></div></div>',1),wG=[IG];function nG(A,B){return $A(),nB("div",CG,wG)}const tG=wa(EG,[["render",nG]]);const na=A=>(Il("data-v-b20db6c0"),A=A(),wl(),A),eG={key:0,class:"w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800"},FG={class:"text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"},DG=na(()=>eA("div",{class:"w-[30px] flex flex-col relative items-end"},[eA("div",{class:"relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center",style:{"background-color":"rgb(16, 163, 127)"}},[eA("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[eA("title",null,"account-badge"),eA("path",{d:"M14 19.5C14 17.5 15.1 15.7 16.7 14.8C15.4 14.3 13.8 14 12 14C7.6 14 4 15.8 4 18V20H14V19.5M19.5 16C17.6 16 16 17.6 16 19.5S17.6 23 19.5 23 23 21.4 23 19.5 21.4 16 19.5 16M16 8C16 10.2 14.2 12 12 12S8 10.2 8 8 9.8 4 12 4 16 5.8 16 8Z"})])])],-1)),iG={class:"relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"},cG={class:"flex flex-grow flex-col gap-3"},sG={class:"min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"},aG={key:0},oG={key:1},UG=lC('<div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible" data-v-b20db6c0><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible" data-v-b20db6c0><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-b20db6c0><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" data-v-b20db6c0></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" data-v-b20db6c0></path></svg></button></div><div class="flex justify-between" data-v-b20db6c0></div>',2),lG={key:1,class:"w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]"},MG={class:"text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"},GG=na(()=>eA("div",{class:"w-[30px] flex flex-col relative items-end"},[eA("div",{class:"relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center",style:{"background-color":"rgb(16, 163, 127)"}},[eA("svg",{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg","stroke-width":"1.5",class:"h-6 w-6"},[eA("path",{d:"M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z",fill:"currentColor"})])])],-1)),rG={class:"relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"},dG={class:"flex flex-grow flex-col gap-3"},fG={class:"min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"},RG={class:"markdown prose w-full break-words dark:prose-invert light"},YG=lC('<div class="flex justify-between" data-v-b20db6c0><div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible" data-v-b20db6c0><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" data-v-b20db6c0><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-b20db6c0><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" data-v-b20db6c0></path></svg></button><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400" data-v-b20db6c0><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-v-b20db6c0><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" data-v-b20db6c0></path></svg></button></div></div>',1),hG={__name:"Chat",props:{chat:{type:Object||null}},setup(A){const B=A;RB("");let Q=RB(""),g=RB(20),C=RB(null);const n=TB(()=>B.chat),t=w=>new Promise(I=>setTimeout(I,w));return cF(async()=>{await hI(),C.value.scrollIntoView({behavior:"smooth"})}),xg(n,async(w,I)=>{(async()=>{if(w.isAi)for(let F=0;F<w.value.length;F++)await t(g.value),Q.value=w.value.slice(0,F+1)})()},{immediate:!0}),(w,I)=>($A(),nB("div",{class:"chat",ref_key:"currentMsg",ref:C},[A.chat.isAi?($A(),nB("div",lG,[eA("div",MG,[GG,eA("div",rG,[eA("div",dG,[eA("div",fG,[eA("div",RG,[eA("p",null,Vg(nQ(Q)),1)])])]),YG])])])):($A(),nB("div",eG,[eA("div",FG,[DG,eA("div",iG,[eA("div",cG,[eA("div",sG,[UE(Vg(A.chat.value)+" ",1),($A(!0),nB(wQ,null,sF(w.messages,(D,F)=>($A(),nB("div",{key:F+"sdf"},[F===w.currentMessage?($A(),nB("span",aG,Vg(nQ(Q)),1)):($A(),nB("span",oG,Vg(D),1))]))),128))])]),UG])])]))],512))}},NG=wa(hG,[["__scopeId","data-v-b20db6c0"]]),uG={class:"dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col"},JG={class:"flex h-full min-h-0 flex-col"},bG={class:"scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20"},kG={class:"flex h-full flex-1 flex-col space-y-1 p-2"},ZG=eA("a",{class:"flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20"},[eA("svg",{stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[eA("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),eA("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]),UE("New chat ")],-1),mG={class:"flex-col flex-1 overflow-y-auto border-b border-white/20"},XG={class:"flex flex-col gap-2 text-gray-100 text-sm"},LG=eA("svg",{stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[eA("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})],-1),yG={class:"flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"},pG=eA("div",{class:"absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"},null,-1),HG={key:0,stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},SG=eA("polyline",{points:"20 6 9 17 4 12"},null,-1),WG=[SG],VG={key:1,stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},OG=eA("polyline",{points:"3 6 5 6 21 6"},null,-1),TG=eA("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),xG=eA("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),vG=eA("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1),zG=[OG,TG,xG,vG],KG={key:0,stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},jG=eA("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1),PG=[jG],qG={key:1,stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},_G=lC('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9),$G=[_G],Ar=lC('<a href="https://discord.gg/openai" target="_blank" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 640 512" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>OpenAI Discord</a><a href="https://help.openai.com/en/collections/3742473-chatgpt" target="_blank" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Updates &amp; FAQ</a><a class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>Log out</a>',3),Br={__name:"Sidebar",props:{questions:Array},emits:["clear","light"],setup(A,{emit:B}){let Q=RB(!1),g=RB(0),C=RB({text:"Clear conversation",isTrue:!1});const n=()=>{g.value+=1,C.value={text:"Confirm clear conversation",isTrue:!0},console.log(g.value),g.value===2&&(setTimeout(()=>{localStorage.clear(),B("clear",!0)},1e3),C.value={text:"Clear conversation",isTrue:!1},g.value=0)},t=()=>{Q.value=!Q.value,B("light",Q.value)};return(w,I)=>($A(),nB("div",uG,[eA("div",JG,[eA("div",bG,[eA("nav",kG,[ZG,eA("div",mG,[eA("div",XG,[($A(!0),nB(wQ,null,sF(A.questions,(D,F)=>($A(),nB("a",{key:F,class:"flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"},[LG,eA("div",yG,[UE(Vg(D.value)+" ",1),pG])]))),128))])]),A.questions&&A.questions.length?($A(),nB("a",{key:0,onClick:I[0]||(I[0]=D=>n()),class:"flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"},[nQ(C).isTrue?($A(),nB("svg",HG,WG)):($A(),nB("svg",VG,zG)),UE(Vg(nQ(C).text),1)])):jl("",!0),eA("a",{onClick:I[1]||(I[1]=D=>t()),class:"flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"},[nQ(Q)?($A(),nB("svg",KG,PG)):($A(),nB("svg",qG,$G)),UE(Vg(nQ(Q)?"Dark":"Light")+" mode",1)]),Ar])])])]))}},je=W0({id:"message",state:()=>({text:"Hello from main.js",question:""})}),Qr={class:"flex flex-1 flex-col md:pl-[260px] h-screen"},gr={class:"relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"},Er={key:0,class:"h-full"},Cr={class:"h-full flex-1 overflow-hidden"},Ir={class:"h-full overflow-y-auto dark:bg-gray-800"},wr={class:"flex flex-col items-center text-sm dark:bg-gray-800"},nr=eA("div",{class:"w-full h-32 md:h-48 flex-shrink-0"},null,-1),tr={class:"absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"},er=["onSubmit"],Fr={class:"flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"},Dr=["onKeyup"],ir=eA("button",{type:"submit",class:"absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"},[eA("svg",{stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",class:"h-4 w-4 mr-1",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[eA("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),eA("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})])],-1),cr={__name:"App",setup(A){const B=ys();RB([]);let Q=RB([]);const g=RB(""),C=RB([]),n=RB(!1),t=RB([]),w=RB(!1);var I=je();const D=B.appContext.config.globalProperties.$alanBtnInstance;xg(()=>I.text,(N,f)=>{console.log(`Count changed from ${f} to ${N}`),e()});const F=async()=>{await D.sendText(g.value)},e=async N=>{try{g.value==""&&(g.value=I.question),n.value=!0,C.value.push({isAi:!1,value:g.value}),C.value.push({isAi:!0,value:"|"}),console.log("got here bitches",g.value),setTimeout(function(){C.value.pop(),C.value.push({isAi:!0,value:I.text.trim()}),console.log("get answer "+I.text);let f=C.value.filter(h=>!h.isAi);localStorage.setItem("threads",JSON.stringify(f)),a()},2e3)}catch({error:f}){Q.value=f}finally{n.value=!1,g.value=""}},a=()=>{t.value=JSON.parse(localStorage.getItem("threads"))},M=()=>{t.value="",C.value=[]};return cF(()=>{a();var N=je();console.log("TEXT"+N.text)}),(N,f)=>($A(),nB("div",{class:FC(["overflow-hidden w-full h-full relative",w.value?"light":"dark"])},[eA("div",Qr,[eA("main",gr,[C.value.length?($A(),nB("div",Er,[eA("div",Cr,[eA("div",Ir,[eA("div",null,[eA("div",wr,[($A(!0),nB(wQ,null,sF(C.value,(h,m)=>($A(),nB("div",{key:m,class:FC(["w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]",{ai:h.isAi}])},[($A(),We(NG,{chat:h,key:m,class:"w-full"},null,8,["chat"]))],2))),128)),nr])])])])])):($A(),We(tG,{key:1})),eA("div",tr,[eA("form",{onSubmit:N0(F,["prevent"]),class:"stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"},[eA("div",Fr,[hl(eA("textarea",{class:"m-0 w-full h-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 focus-visible:outline-0 dark:bg-transparent md:pl-0",rows:"1",cols:"1",onKeyup:J0(F,["enter"]),placeholder:"Ask anything...","onUpdate:modelValue":f[0]||(f[0]=h=>g.value=h)},null,40,Dr),[[R0,g.value]]),ir])],40,er)])])]),HB(Br,{questions:t.value,onClear:f[1]||(f[1]=h=>M()),onLight:f[2]||(f[2]=h=>w.value=h)},null,8,["questions"])],2))}},sr="modulepreload",ar=function(A){return"/alan_poc/"+A},Rc={},or=function(B,Q,g){if(!Q||Q.length===0)return B();const C=document.getElementsByTagName("link");return Promise.all(Q.map(n=>{if(n=ar(n),n in Rc)return;Rc[n]=!0;const t=n.endsWith(".css"),w=t?'[rel="stylesheet"]':"";if(!!g)for(let F=C.length-1;F>=0;F--){const e=C[F];if(e.href===n&&(!t||e.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${w}`))return;const D=document.createElement("link");if(D.rel=t?"stylesheet":sr,t||(D.as="script",D.crossOrigin=""),D.href=n,document.head.appendChild(D),t)return new Promise((F,e)=>{D.addEventListener("load",F),D.addEventListener("error",()=>e(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>B())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const cE=typeof window<"u";function Ur(A){return A.__esModule||A[Symbol.toStringTag]==="Module"}const OA=Object.assign;function Ne(A,B){const Q={};for(const g in B){const C=B[g];Q[g]=UQ(C)?C.map(A):A(C)}return Q}const tC=()=>{},UQ=Array.isArray,lr=/\/$/,Mr=A=>A.replace(lr,"");function ue(A,B,Q="/"){let g,C={},n="",t="";const w=B.indexOf("#");let I=B.indexOf("?");return w<I&&w>=0&&(I=-1),I>-1&&(g=B.slice(0,I),n=B.slice(I+1,w>-1?w:B.length),C=A(n)),w>-1&&(g=g||B.slice(0,w),t=B.slice(w,B.length)),g=fr(g??B,Q),{fullPath:g+(n&&"?")+n+t,path:g,query:C,hash:t}}function Gr(A,B){const Q=B.query?A(B.query):"";return B.path+(Q&&"?")+Q+(B.hash||"")}function Yc(A,B){return!B||!A.toLowerCase().startsWith(B.toLowerCase())?A:A.slice(B.length)||"/"}function rr(A,B,Q){const g=B.matched.length-1,C=Q.matched.length-1;return g>-1&&g===C&&fE(B.matched[g],Q.matched[C])&&ta(B.params,Q.params)&&A(B.query)===A(Q.query)&&B.hash===Q.hash}function fE(A,B){return(A.aliasOf||A)===(B.aliasOf||B)}function ta(A,B){if(Object.keys(A).length!==Object.keys(B).length)return!1;for(const Q in A)if(!dr(A[Q],B[Q]))return!1;return!0}function dr(A,B){return UQ(A)?hc(A,B):UQ(B)?hc(B,A):A===B}function hc(A,B){return UQ(B)?A.length===B.length&&A.every((Q,g)=>Q===B[g]):A.length===1&&A[0]===B}function fr(A,B){if(A.startsWith("/"))return A;if(!A)return B;const Q=B.split("/"),g=A.split("/");let C=Q.length-1,n,t;for(n=0;n<g.length;n++)if(t=g[n],t!==".")if(t==="..")C>1&&C--;else break;return Q.slice(0,C).join("/")+"/"+g.slice(n-(n===g.length?1:0)).join("/")}var UC;(function(A){A.pop="pop",A.push="push"})(UC||(UC={}));var eC;(function(A){A.back="back",A.forward="forward",A.unknown=""})(eC||(eC={}));function Rr(A){if(!A)if(cE){const B=document.querySelector("base");A=B&&B.getAttribute("href")||"/",A=A.replace(/^\w+:\/\/[^\/]+/,"")}else A="/";return A[0]!=="/"&&A[0]!=="#"&&(A="/"+A),Mr(A)}const Yr=/^[^#]+#/;function hr(A,B){return A.replace(Yr,"#")+B}function Nr(A,B){const Q=document.documentElement.getBoundingClientRect(),g=A.getBoundingClientRect();return{behavior:B.behavior,left:g.left-Q.left-(B.left||0),top:g.top-Q.top-(B.top||0)}}const SI=()=>({left:window.pageXOffset,top:window.pageYOffset});function ur(A){let B;if("el"in A){const Q=A.el,g=typeof Q=="string"&&Q.startsWith("#"),C=typeof Q=="string"?g?document.getElementById(Q.slice(1)):document.querySelector(Q):Q;if(!C)return;B=Nr(C,A)}else B=A;"scrollBehavior"in document.documentElement.style?window.scrollTo(B):window.scrollTo(B.left!=null?B.left:window.pageXOffset,B.top!=null?B.top:window.pageYOffset)}function Nc(A,B){return(history.state?history.state.position-B:-1)+A}const Pe=new Map;function Jr(A,B){Pe.set(A,B)}function br(A){const B=Pe.get(A);return Pe.delete(A),B}let kr=()=>location.protocol+"//"+location.host;function ea(A,B){const{pathname:Q,search:g,hash:C}=B,n=A.indexOf("#");if(n>-1){let w=C.includes(A.slice(n))?A.slice(n).length:1,I=C.slice(w);return I[0]!=="/"&&(I="/"+I),Yc(I,"")}return Yc(Q,A)+g+C}function Zr(A,B,Q,g){let C=[],n=[],t=null;const w=({state:a})=>{const M=ea(A,location),N=Q.value,f=B.value;let h=0;if(a){if(Q.value=M,B.value=a,t&&t===N){t=null;return}h=f?a.position-f.position:0}else g(M);C.forEach(m=>{m(Q.value,N,{delta:h,type:UC.pop,direction:h?h>0?eC.forward:eC.back:eC.unknown})})};function I(){t=Q.value}function D(a){C.push(a);const M=()=>{const N=C.indexOf(a);N>-1&&C.splice(N,1)};return n.push(M),M}function F(){const{history:a}=window;a.state&&a.replaceState(OA({},a.state,{scroll:SI()}),"")}function e(){for(const a of n)a();n=[],window.removeEventListener("popstate",w),window.removeEventListener("beforeunload",F)}return window.addEventListener("popstate",w),window.addEventListener("beforeunload",F),{pauseListeners:I,listen:D,destroy:e}}function uc(A,B,Q,g=!1,C=!1){return{back:A,current:B,forward:Q,replaced:g,position:window.history.length,scroll:C?SI():null}}function mr(A){const{history:B,location:Q}=window,g={value:ea(A,Q)},C={value:B.state};C.value||n(g.value,{back:null,current:g.value,forward:null,position:B.length-1,replaced:!0,scroll:null},!0);function n(I,D,F){const e=A.indexOf("#"),a=e>-1?(Q.host&&document.querySelector("base")?A:A.slice(e))+I:kr()+A+I;try{B[F?"replaceState":"pushState"](D,"",a),C.value=D}catch(M){console.error(M),Q[F?"replace":"assign"](a)}}function t(I,D){const F=OA({},B.state,uc(C.value.back,I,C.value.forward,!0),D,{position:C.value.position});n(I,F,!0),g.value=I}function w(I,D){const F=OA({},C.value,B.state,{forward:I,scroll:SI()});n(F.current,F,!0);const e=OA({},uc(g.value,I,null),{position:F.position+1},D);n(I,e,!1),g.value=I}return{location:g,state:C,push:w,replace:t}}function Xr(A){A=Rr(A);const B=mr(A),Q=Zr(A,B.state,B.location,B.replace);function g(n,t=!0){t||Q.pauseListeners(),history.go(n)}const C=OA({location:"",base:A,go:g,createHref:hr.bind(null,A)},B,Q);return Object.defineProperty(C,"location",{enumerable:!0,get:()=>B.location.value}),Object.defineProperty(C,"state",{enumerable:!0,get:()=>B.state.value}),C}function Lr(A){return typeof A=="string"||A&&typeof A=="object"}function Fa(A){return typeof A=="string"||typeof A=="symbol"}const ig={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Da=Symbol("");var Jc;(function(A){A[A.aborted=4]="aborted",A[A.cancelled=8]="cancelled",A[A.duplicated=16]="duplicated"})(Jc||(Jc={}));function RE(A,B){return OA(new Error,{type:A,[Da]:!0},B)}function zQ(A,B){return A instanceof Error&&Da in A&&(B==null||!!(A.type&B))}const bc="[^/]+?",yr={sensitive:!1,strict:!1,start:!0,end:!0},pr=/[.+*?^${}()[\]/\\]/g;function Hr(A,B){const Q=OA({},yr,B),g=[];let C=Q.start?"^":"";const n=[];for(const D of A){const F=D.length?[]:[90];Q.strict&&!D.length&&(C+="/");for(let e=0;e<D.length;e++){const a=D[e];let M=40+(Q.sensitive?.25:0);if(a.type===0)e||(C+="/"),C+=a.value.replace(pr,"\\$&"),M+=40;else if(a.type===1){const{value:N,repeatable:f,optional:h,regexp:m}=a;n.push({name:N,repeatable:f,optional:h});const q=m||bc;if(q!==bc){M+=10;try{new RegExp(`(${q})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${N}" (${q}): `+x.message)}}let gA=f?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;e||(gA=h&&D.length<2?`(?:/${gA})`:"/"+gA),h&&(gA+="?"),C+=gA,M+=20,h&&(M+=-8),f&&(M+=-20),q===".*"&&(M+=-50)}F.push(M)}g.push(F)}if(Q.strict&&Q.end){const D=g.length-1;g[D][g[D].length-1]+=.7000000000000001}Q.strict||(C+="/?"),Q.end?C+="$":Q.strict&&(C+="(?:/|$)");const t=new RegExp(C,Q.sensitive?"":"i");function w(D){const F=D.match(t),e={};if(!F)return null;for(let a=1;a<F.length;a++){const M=F[a]||"",N=n[a-1];e[N.name]=M&&N.repeatable?M.split("/"):M}return e}function I(D){let F="",e=!1;for(const a of A){(!e||!F.endsWith("/"))&&(F+="/"),e=!1;for(const M of a)if(M.type===0)F+=M.value;else if(M.type===1){const{value:N,repeatable:f,optional:h}=M,m=N in D?D[N]:"";if(UQ(m)&&!f)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const q=UQ(m)?m.join("/"):m;if(!q)if(h)a.length<2&&(F.endsWith("/")?F=F.slice(0,-1):e=!0);else throw new Error(`Missing required param "${N}"`);F+=q}}return F||"/"}return{re:t,score:g,keys:n,parse:w,stringify:I}}function Sr(A,B){let Q=0;for(;Q<A.length&&Q<B.length;){const g=B[Q]-A[Q];if(g)return g;Q++}return A.length<B.length?A.length===1&&A[0]===40+40?-1:1:A.length>B.length?B.length===1&&B[0]===40+40?1:-1:0}function Wr(A,B){let Q=0;const g=A.score,C=B.score;for(;Q<g.length&&Q<C.length;){const n=Sr(g[Q],C[Q]);if(n)return n;Q++}if(Math.abs(C.length-g.length)===1){if(kc(g))return 1;if(kc(C))return-1}return C.length-g.length}function kc(A){const B=A[A.length-1];return A.length>0&&B[B.length-1]<0}const Vr={type:0,value:""},Or=/[a-zA-Z0-9_]/;function Tr(A){if(!A)return[[]];if(A==="/")return[[Vr]];if(!A.startsWith("/"))throw new Error(`Invalid path "${A}"`);function B(M){throw new Error(`ERR (${Q})/"${D}": ${M}`)}let Q=0,g=Q;const C=[];let n;function t(){n&&C.push(n),n=[]}let w=0,I,D="",F="";function e(){D&&(Q===0?n.push({type:0,value:D}):Q===1||Q===2||Q===3?(n.length>1&&(I==="*"||I==="+")&&B(`A repeatable param (${D}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:D,regexp:F,repeatable:I==="*"||I==="+",optional:I==="*"||I==="?"})):B("Invalid state to consume buffer"),D="")}function a(){D+=I}for(;w<A.length;){if(I=A[w++],I==="\\"&&Q!==2){g=Q,Q=4;continue}switch(Q){case 0:I==="/"?(D&&e(),t()):I===":"?(e(),Q=1):a();break;case 4:a(),Q=g;break;case 1:I==="("?Q=2:Or.test(I)?a():(e(),Q=0,I!=="*"&&I!=="?"&&I!=="+"&&w--);break;case 2:I===")"?F[F.length-1]=="\\"?F=F.slice(0,-1)+I:Q=3:F+=I;break;case 3:e(),Q=0,I!=="*"&&I!=="?"&&I!=="+"&&w--,F="";break;default:B("Unknown state");break}}return Q===2&&B(`Unfinished custom RegExp for param "${D}"`),e(),t(),C}function xr(A,B,Q){const g=Hr(Tr(A.path),Q),C=OA(g,{record:A,parent:B,children:[],alias:[]});return B&&!C.record.aliasOf==!B.record.aliasOf&&B.children.push(C),C}function vr(A,B){const Q=[],g=new Map;B=Xc({strict:!1,end:!0,sensitive:!1},B);function C(F){return g.get(F)}function n(F,e,a){const M=!a,N=zr(F);N.aliasOf=a&&a.record;const f=Xc(B,F),h=[N];if("alias"in F){const gA=typeof F.alias=="string"?[F.alias]:F.alias;for(const x of gA)h.push(OA({},N,{components:a?a.record.components:N.components,path:x,aliasOf:a?a.record:N}))}let m,q;for(const gA of h){const{path:x}=gA;if(e&&x[0]!=="/"){const CA=e.record.path,bA=CA[CA.length-1]==="/"?"":"/";gA.path=e.record.path+(x&&bA+x)}if(m=xr(gA,e,f),a?a.alias.push(m):(q=q||m,q!==m&&q.alias.push(m),M&&F.name&&!mc(m)&&t(F.name)),N.children){const CA=N.children;for(let bA=0;bA<CA.length;bA++)n(CA[bA],m,a&&a.children[bA])}a=a||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&I(m)}return q?()=>{t(q)}:tC}function t(F){if(Fa(F)){const e=g.get(F);e&&(g.delete(F),Q.splice(Q.indexOf(e),1),e.children.forEach(t),e.alias.forEach(t))}else{const e=Q.indexOf(F);e>-1&&(Q.splice(e,1),F.record.name&&g.delete(F.record.name),F.children.forEach(t),F.alias.forEach(t))}}function w(){return Q}function I(F){let e=0;for(;e<Q.length&&Wr(F,Q[e])>=0&&(F.record.path!==Q[e].record.path||!ia(F,Q[e]));)e++;Q.splice(e,0,F),F.record.name&&!mc(F)&&g.set(F.record.name,F)}function D(F,e){let a,M={},N,f;if("name"in F&&F.name){if(a=g.get(F.name),!a)throw RE(1,{location:F});f=a.record.name,M=OA(Zc(e.params,a.keys.filter(q=>!q.optional).map(q=>q.name)),F.params&&Zc(F.params,a.keys.map(q=>q.name))),N=a.stringify(M)}else if("path"in F)N=F.path,a=Q.find(q=>q.re.test(N)),a&&(M=a.parse(N),f=a.record.name);else{if(a=e.name?g.get(e.name):Q.find(q=>q.re.test(e.path)),!a)throw RE(1,{location:F,currentLocation:e});f=a.record.name,M=OA({},e.params,F.params),N=a.stringify(M)}const h=[];let m=a;for(;m;)h.unshift(m.record),m=m.parent;return{name:f,path:N,params:M,matched:h,meta:jr(h)}}return A.forEach(F=>n(F)),{addRoute:n,resolve:D,removeRoute:t,getRoutes:w,getRecordMatcher:C}}function Zc(A,B){const Q={};for(const g of B)g in A&&(Q[g]=A[g]);return Q}function zr(A){return{path:A.path,redirect:A.redirect,name:A.name,meta:A.meta||{},aliasOf:void 0,beforeEnter:A.beforeEnter,props:Kr(A),children:A.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in A?A.components||null:A.component&&{default:A.component}}}function Kr(A){const B={},Q=A.props||!1;if("component"in A)B.default=Q;else for(const g in A.components)B[g]=typeof Q=="boolean"?Q:Q[g];return B}function mc(A){for(;A;){if(A.record.aliasOf)return!0;A=A.parent}return!1}function jr(A){return A.reduce((B,Q)=>OA(B,Q.meta),{})}function Xc(A,B){const Q={};for(const g in A)Q[g]=g in B?B[g]:A[g];return Q}function ia(A,B){return B.children.some(Q=>Q===A||ia(A,Q))}const ca=/#/g,Pr=/&/g,qr=/\//g,_r=/=/g,$r=/\?/g,sa=/\+/g,Ad=/%5B/g,Bd=/%5D/g,aa=/%5E/g,Qd=/%60/g,oa=/%7B/g,gd=/%7C/g,Ua=/%7D/g,Ed=/%20/g;function YF(A){return encodeURI(""+A).replace(gd,"|").replace(Ad,"[").replace(Bd,"]")}function Cd(A){return YF(A).replace(oa,"{").replace(Ua,"}").replace(aa,"^")}function qe(A){return YF(A).replace(sa,"%2B").replace(Ed,"+").replace(ca,"%23").replace(Pr,"%26").replace(Qd,"`").replace(oa,"{").replace(Ua,"}").replace(aa,"^")}function Id(A){return qe(A).replace(_r,"%3D")}function wd(A){return YF(A).replace(ca,"%23").replace($r,"%3F")}function nd(A){return A==null?"":wd(A).replace(qr,"%2F")}function GI(A){try{return decodeURIComponent(""+A)}catch{}return""+A}function td(A){const B={};if(A===""||A==="?")return B;const g=(A[0]==="?"?A.slice(1):A).split("&");for(let C=0;C<g.length;++C){const n=g[C].replace(sa," "),t=n.indexOf("="),w=GI(t<0?n:n.slice(0,t)),I=t<0?null:GI(n.slice(t+1));if(w in B){let D=B[w];UQ(D)||(D=B[w]=[D]),D.push(I)}else B[w]=I}return B}function Lc(A){let B="";for(let Q in A){const g=A[Q];if(Q=Id(Q),g==null){g!==void 0&&(B+=(B.length?"&":"")+Q);continue}(UQ(g)?g.map(n=>n&&qe(n)):[g&&qe(g)]).forEach(n=>{n!==void 0&&(B+=(B.length?"&":"")+Q,n!=null&&(B+="="+n))})}return B}function ed(A){const B={};for(const Q in A){const g=A[Q];g!==void 0&&(B[Q]=UQ(g)?g.map(C=>C==null?null:""+C):g==null?g:""+g)}return B}const Fd=Symbol(""),yc=Symbol(""),hF=Symbol(""),la=Symbol(""),_e=Symbol("");function EC(){let A=[];function B(g){return A.push(g),()=>{const C=A.indexOf(g);C>-1&&A.splice(C,1)}}function Q(){A=[]}return{add:B,list:()=>A,reset:Q}}function ag(A,B,Q,g,C){const n=g&&(g.enterCallbacks[C]=g.enterCallbacks[C]||[]);return()=>new Promise((t,w)=>{const I=e=>{e===!1?w(RE(4,{from:Q,to:B})):e instanceof Error?w(e):Lr(e)?w(RE(2,{from:B,to:e})):(n&&g.enterCallbacks[C]===n&&typeof e=="function"&&n.push(e),t())},D=A.call(g&&g.instances[C],B,Q,I);let F=Promise.resolve(D);A.length<3&&(F=F.then(I)),F.catch(e=>w(e))})}function Je(A,B,Q,g){const C=[];for(const n of A)for(const t in n.components){let w=n.components[t];if(!(B!=="beforeRouteEnter"&&!n.instances[t]))if(Dd(w)){const D=(w.__vccOpts||w)[B];D&&C.push(ag(D,Q,g,n,t))}else{let I=w();C.push(()=>I.then(D=>{if(!D)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${n.path}"`));const F=Ur(D)?D.default:D;n.components[t]=F;const a=(F.__vccOpts||F)[B];return a&&ag(a,Q,g,n,t)()}))}}return C}function Dd(A){return typeof A=="object"||"displayName"in A||"props"in A||"__vccOpts"in A}function pc(A){const B=ZQ(hF),Q=ZQ(la),g=TB(()=>B.resolve(nQ(A.to))),C=TB(()=>{const{matched:I}=g.value,{length:D}=I,F=I[D-1],e=Q.matched;if(!F||!e.length)return-1;const a=e.findIndex(fE.bind(null,F));if(a>-1)return a;const M=Hc(I[D-2]);return D>1&&Hc(F)===M&&e[e.length-1].path!==M?e.findIndex(fE.bind(null,I[D-2])):a}),n=TB(()=>C.value>-1&&ad(Q.params,g.value.params)),t=TB(()=>C.value>-1&&C.value===Q.matched.length-1&&ta(Q.params,g.value.params));function w(I={}){return sd(I)?B[nQ(A.replace)?"replace":"push"](nQ(A.to)).catch(tC):Promise.resolve()}return{route:g,href:TB(()=>g.value.href),isActive:n,isExactActive:t,navigate:w}}const id=ds({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pc,setup(A,{slots:B}){const Q=NE(pc(A)),{options:g}=ZQ(hF),C=TB(()=>({[Sc(A.activeClass,g.linkActiveClass,"router-link-active")]:Q.isActive,[Sc(A.exactActiveClass,g.linkExactActiveClass,"router-link-exact-active")]:Q.isExactActive}));return()=>{const n=B.default&&B.default(Q);return A.custom?n:Ss("a",{"aria-current":Q.isExactActive?A.ariaCurrentValue:null,href:Q.href,onClick:Q.navigate,class:C.value},n)}}}),cd=id;function sd(A){if(!(A.metaKey||A.altKey||A.ctrlKey||A.shiftKey)&&!A.defaultPrevented&&!(A.button!==void 0&&A.button!==0)){if(A.currentTarget&&A.currentTarget.getAttribute){const B=A.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(B))return}return A.preventDefault&&A.preventDefault(),!0}}function ad(A,B){for(const Q in B){const g=B[Q],C=A[Q];if(typeof g=="string"){if(g!==C)return!1}else if(!UQ(C)||C.length!==g.length||g.some((n,t)=>n!==C[t]))return!1}return!0}function Hc(A){return A?A.aliasOf?A.aliasOf.path:A.path:""}const Sc=(A,B,Q)=>A??B??Q,od=ds({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(A,{attrs:B,slots:Q}){const g=ZQ(_e),C=TB(()=>A.route||g.value),n=ZQ(yc,0),t=TB(()=>{let D=nQ(n);const{matched:F}=C.value;let e;for(;(e=F[D])&&!e.components;)D++;return D}),w=TB(()=>C.value.matched[t.value]);wI(yc,TB(()=>t.value+1)),wI(Fd,w),wI(_e,C);const I=RB();return xg(()=>[I.value,w.value,A.name],([D,F,e],[a,M,N])=>{F&&(F.instances[e]=D,M&&M!==F&&D&&D===a&&(F.leaveGuards.size||(F.leaveGuards=M.leaveGuards),F.updateGuards.size||(F.updateGuards=M.updateGuards))),D&&F&&(!M||!fE(F,M)||!a)&&(F.enterCallbacks[e]||[]).forEach(f=>f(D))},{flush:"post"}),()=>{const D=C.value,F=A.name,e=w.value,a=e&&e.components[F];if(!a)return Wc(Q.default,{Component:a,route:D});const M=e.props[F],N=M?M===!0?D.params:typeof M=="function"?M(D):M:null,h=Ss(a,OA({},N,B,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(e.instances[F]=null)},ref:I}));return Wc(Q.default,{Component:h,route:D})||h}}});function Wc(A,B){if(!A)return null;const Q=A(B);return Q.length===1?Q[0]:Q}const Ud=od;function ld(A){const B=vr(A.routes,A),Q=A.parseQuery||td,g=A.stringifyQuery||Lc,C=A.history,n=EC(),t=EC(),w=EC(),I=vU(ig);let D=ig;cE&&A.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const F=Ne.bind(null,W=>""+W),e=Ne.bind(null,nd),a=Ne.bind(null,GI);function M(W,p){let X,nA;return Fa(W)?(X=B.getRecordMatcher(W),nA=p):nA=W,B.addRoute(nA,X)}function N(W){const p=B.getRecordMatcher(W);p&&B.removeRoute(p)}function f(){return B.getRoutes().map(W=>W.record)}function h(W){return!!B.getRecordMatcher(W)}function m(W,p){if(p=OA({},p||I.value),typeof W=="string"){const G=ue(Q,W,p.path),Y=B.resolve({path:G.path},p),L=C.createHref(G.fullPath);return OA(G,Y,{params:a(Y.params),hash:GI(G.hash),redirectedFrom:void 0,href:L})}let X;if("path"in W)X=OA({},W,{path:ue(Q,W.path,p.path).path});else{const G=OA({},W.params);for(const Y in G)G[Y]==null&&delete G[Y];X=OA({},W,{params:e(W.params)}),p.params=e(p.params)}const nA=B.resolve(X,p),JA=W.hash||"";nA.params=F(a(nA.params));const mA=Gr(g,OA({},W,{hash:Cd(JA),path:nA.path})),fA=C.createHref(mA);return OA({fullPath:mA,hash:JA,query:g===Lc?ed(W.query):W.query||{}},nA,{redirectedFrom:void 0,href:fA})}function q(W){return typeof W=="string"?ue(Q,W,I.value.path):OA({},W)}function gA(W,p){if(D!==W)return RE(8,{from:p,to:W})}function x(W){return oA(W)}function CA(W){return x(OA(q(W),{replace:!0}))}function bA(W){const p=W.matched[W.matched.length-1];if(p&&p.redirect){const{redirect:X}=p;let nA=typeof X=="function"?X(W):X;return typeof nA=="string"&&(nA=nA.includes("?")||nA.includes("#")?nA=q(nA):{path:nA},nA.params={}),OA({query:W.query,hash:W.hash,params:"path"in nA?{}:W.params},nA)}}function oA(W,p){const X=D=m(W),nA=I.value,JA=W.state,mA=W.force,fA=W.replace===!0,G=bA(X);if(G)return oA(OA(q(G),{state:typeof G=="object"?OA({},JA,G.state):JA,force:mA,replace:fA}),p||X);const Y=X;Y.redirectedFrom=p;let L;return!mA&&rr(g,nA,X)&&(L=RE(16,{to:Y,from:nA}),iB(nA,nA,!0,!1)),(L?Promise.resolve(L):wA(Y,nA)).catch(y=>zQ(y)?zQ(y,2)?y:DB(y):WA(y,Y,nA)).then(y=>{if(y){if(zQ(y,2))return oA(OA({replace:fA},q(y.to),{state:typeof y.to=="object"?OA({},JA,y.to.state):JA,force:mA}),p||Y)}else y=uA(Y,nA,!0,fA,JA);return UA(Y,nA,y),y})}function IA(W,p){const X=gA(W,p);return X?Promise.reject(X):Promise.resolve()}function wA(W,p){let X;const[nA,JA,mA]=Md(W,p);X=Je(nA.reverse(),"beforeRouteLeave",W,p);for(const G of nA)G.leaveGuards.forEach(Y=>{X.push(ag(Y,W,p))});const fA=IA.bind(null,W,p);return X.push(fA),DE(X).then(()=>{X=[];for(const G of n.list())X.push(ag(G,W,p));return X.push(fA),DE(X)}).then(()=>{X=Je(JA,"beforeRouteUpdate",W,p);for(const G of JA)G.updateGuards.forEach(Y=>{X.push(ag(Y,W,p))});return X.push(fA),DE(X)}).then(()=>{X=[];for(const G of W.matched)if(G.beforeEnter&&!p.matched.includes(G))if(UQ(G.beforeEnter))for(const Y of G.beforeEnter)X.push(ag(Y,W,p));else X.push(ag(G.beforeEnter,W,p));return X.push(fA),DE(X)}).then(()=>(W.matched.forEach(G=>G.enterCallbacks={}),X=Je(mA,"beforeRouteEnter",W,p),X.push(fA),DE(X))).then(()=>{X=[];for(const G of t.list())X.push(ag(G,W,p));return X.push(fA),DE(X)}).catch(G=>zQ(G,8)?G:Promise.reject(G))}function UA(W,p,X){for(const nA of w.list())nA(W,p,X)}function uA(W,p,X,nA,JA){const mA=gA(W,p);if(mA)return mA;const fA=p===ig,G=cE?history.state:{};X&&(nA||fA?C.replace(W.fullPath,OA({scroll:fA&&G&&G.scroll},JA)):C.push(W.fullPath,JA)),I.value=W,iB(W,p,X,fA),DB()}let rA;function UB(){rA||(rA=C.listen((W,p,X)=>{if(!YB.listening)return;const nA=m(W),JA=bA(nA);if(JA){oA(OA(JA,{replace:!0}),nA).catch(tC);return}D=nA;const mA=I.value;cE&&Jr(Nc(mA.fullPath,X.delta),SI()),wA(nA,mA).catch(fA=>zQ(fA,12)?fA:zQ(fA,2)?(oA(fA.to,nA).then(G=>{zQ(G,20)&&!X.delta&&X.type===UC.pop&&C.go(-1,!1)}).catch(tC),Promise.reject()):(X.delta&&C.go(-X.delta,!1),WA(fA,nA,mA))).then(fA=>{fA=fA||uA(nA,mA,!1),fA&&(X.delta&&!zQ(fA,8)?C.go(-X.delta,!1):X.type===UC.pop&&zQ(fA,20)&&C.go(-1,!1)),UA(nA,mA,fA)}).catch(tC)}))}let xA=EC(),BB=EC(),jA;function WA(W,p,X){DB(W);const nA=BB.list();return nA.length?nA.forEach(JA=>JA(W,p,X)):console.error(W),Promise.reject(W)}function XA(){return jA&&I.value!==ig?Promise.resolve():new Promise((W,p)=>{xA.add([W,p])})}function DB(W){return jA||(jA=!W,UB(),xA.list().forEach(([p,X])=>W?X(W):p()),xA.reset()),W}function iB(W,p,X,nA){const{scrollBehavior:JA}=A;if(!cE||!JA)return Promise.resolve();const mA=!X&&br(Nc(W.fullPath,0))||(nA||!X)&&history.state&&history.state.scroll||null;return hI().then(()=>JA(W,p,mA)).then(fA=>fA&&ur(fA)).catch(fA=>WA(fA,W,p))}const EB=W=>C.go(W);let IB;const zB=new Set,YB={currentRoute:I,listening:!0,addRoute:M,removeRoute:N,hasRoute:h,getRoutes:f,resolve:m,options:A,push:x,replace:CA,go:EB,back:()=>EB(-1),forward:()=>EB(1),beforeEach:n.add,beforeResolve:t.add,afterEach:w.add,onError:BB.add,isReady:XA,install(W){const p=this;W.component("RouterLink",cd),W.component("RouterView",Ud),W.config.globalProperties.$router=p,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>nQ(I)}),cE&&!IB&&I.value===ig&&(IB=!0,x(C.location).catch(JA=>{}));const X={};for(const JA in ig)X[JA]=TB(()=>I.value[JA]);W.provide(hF,p),W.provide(la,NE(X)),W.provide(_e,I);const nA=W.unmount;zB.add(W),W.unmount=function(){zB.delete(W),zB.size<1&&(D=ig,rA&&rA(),rA=null,I.value=ig,IB=!1,jA=!1),nA()}}};return YB}function DE(A){return A.reduce((B,Q)=>B.then(()=>Q()),Promise.resolve())}function Md(A,B){const Q=[],g=[],C=[],n=Math.max(B.matched.length,A.matched.length);for(let t=0;t<n;t++){const w=B.matched[t];w&&(A.matched.find(D=>fE(D,w))?g.push(w):Q.push(w));const I=A.matched[t];I&&(B.matched.find(D=>fE(D,I))||C.push(I))}return[Q,g,C]}const Gd=eA("input",{type:"text",placeholder:"Ask any question.."},null,-1),rd=[Gd],dd={__name:"HomeView",setup(A){return(B,Q)=>($A(),nB("main",null,rd))}},fd=ld({history:Xr("/alan_poc/"),routes:[{path:"/",name:"home",component:dd},{path:"/about",name:"about",component:()=>or(()=>import("./AboutView-0a552d4e.js"),["assets/AboutView-0a552d4e.js","assets/AboutView-4d995ba2.css"])}]});const WI=Z0(cr);WI.use(L0());WI.use(fd);const Vc=je();xs({key:"267de43e1e45fb3c51eb67213af582d72e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:A=>{A.command},onEvent:A=>{A.name==="parsed"?(console.log("parsed",A.text),Vc.question=A.text):A.name==="text"&&(console.log(A.text),Vc.text=A.text)}});WI.config.globalProperties.$alanBtnInstance=xs({key:"267de43e1e45fb3c51eb67213af582d72e956eca572e1d8b807a3e2338fdd0dc/stage"});WI.mount("#app");export{wa as _,eA as a,nB as c,$A as o};