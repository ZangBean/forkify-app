var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var y={},m={},_=function(e){return e&&e.Math===Math&&e};m=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof g&&g)||_("object"==typeof m&&m)||function(){return this}()||Function("return this")();var b={},w={};b=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;k=E?$.bind($):function(){return $.apply($,arguments)};var S={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;r=L&&!S.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:S;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var j={},P={},x={},M=Function.prototype,T=M.call,F=E&&M.bind.bind(T,T),I={},N=(x=E?F:function(e){return function(){return T.apply(e,arguments)}})({}.toString),A=x("".slice);I=function(e){return A(N(e),8,-1)};var q=Object,C=x("".split);P=w(function(){return!q("z").propertyIsEnumerable(0)})?function(e){return"String"===I(e)?C(e,""):q(e)}:q;var H={},D={};D=function(e){return null==e};var R=TypeError;H=function(e){if(D(e))throw new R("Can't call method on "+e);return e},j=function(e){return P(H(e))};var W={},B={},U={},z={},G="object"==typeof document&&document.all;z=void 0===G&&void 0!==G?function(e){return"function"==typeof e||e===G}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:z(e)};var Y={},J={};J=function(e,t){var r;return arguments.length<2?(r=m[e],z(r)?r:void 0):m[e]&&m[e][t]};var Q={};Q=x({}.isPrototypeOf);var V={},K={},X={},Z={},ee=m.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=m.process,en=m.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(i=(n=eo.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var ea=m.String;V=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;Y=V?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return z(t)&&Q(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var ep=TypeError;eu=function(e){if(z(e))return e;throw new ep(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return D(r)?void 0:eu(r)};var ef={},eh=TypeError;ef=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!U(n=k(r,e))||z(r=e.valueOf)&&!U(n=k(r,e))||"string"!==t&&z(r=e.toString)&&!U(n=k(r,e)))return n;throw new eh("Can't convert object to primitive value")};var eg={},ev={},ey={};ey=!1;var em={},e_=Object.defineProperty;em=function(e,t){try{e_(m,e,{value:t,configurable:!0,writable:!0})}catch(r){m[e]=t}return t};var eb="__core-js_shared__",ew=ev=m[eb]||em(eb,{});(ew.versions||(ew.versions=[])).push({version:"3.45.0",mode:ey?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.45.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ev[e]||(ev[e]=t||{})};var ek={},eE={},e$=Object;eE=function(e){return e$(H(e))};var eS=x({}.hasOwnProperty);ek=Object.hasOwn||function(e,t){return eS(eE(e),t)};var eL={},eO=0,ej=Math.random(),eP=x(1.1.toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eO+ej,36)};var ex=m.Symbol,eM=eg("wks"),eT=V?ex.for||ex:ex&&ex.withoutSetter||eL,eF=TypeError,eI=function(e){return ek(eM,e)||(eM[e]=K&&ek(ex,e)?ex[e]:eT("Symbol."+e)),eM[e]}("toPrimitive");B=function(e,t){if(!U(e)||Y(e))return e;var r,n=ec(e,eI);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!U(r)||Y(r))return r;throw new eF("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},W=function(e){var t=B(e,"string");return Y(t)?t:t+""};var eN={},eA={},eq=m.document,eC=U(eq)&&U(eq.createElement);eA=function(e){return eC?eq.createElement(e):{}},eN=!b&&!w(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eH=Object.getOwnPropertyDescriptor;t=b?eH:function(e,t){if(e=j(e),t=W(t),eN)try{return eH(e,t)}catch(e){}if(ek(e,t))return O(!k(r,e,t),e[t])};var eD={},eR={};eR=b&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eB=String,eU=TypeError;eW=function(e){if(U(e))return e;throw new eU(eB(e)+" is not an object")};var ez=TypeError,eG=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eJ="enumerable",eQ="configurable",eV="writable";o=b?eR?function(e,t,r){if(eW(e),t=W(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eV in r&&!r[eV]){var n=eY(e,t);n&&n[eV]&&(e[t]=r.value,r={configurable:eQ in r?r[eQ]:n[eQ],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return eG(e,t,r)}:eG:function(e,t,r){if(eW(e),t=W(t),eW(r),eN)try{return eG(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=b?function(e,t,r){return o(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eK={},eX={},eZ=Function.prototype,e1=b&&Object.getOwnPropertyDescriptor,e0=ek(eZ,"name"),e2=e0&&(!b||b&&e1(eZ,"name").configurable),e9={},e3=x(Function.toString);z(ev.inspectSource)||(ev.inspectSource=function(e){return e3(e)}),e9=ev.inspectSource;var e5={},e4={},e6=m.WeakMap;e4=z(e6)&&/native code/.test(String(e6));var e8={},e7=eg("keys");e8=function(e){return e7[e]||(e7[e]=eL(e))};var te={};te={};var tt="Object already initialized",tr=m.TypeError,tn=m.WeakMap;if(e4||ev.state){var ti=ev.state||(ev.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,a=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},s=function(e){return ti.get(e)||{}},c=function(e){return ti.has(e)}}else{var to=e8("state");te[to]=!0,a=function(e,t){if(ek(e,to))throw new tr(tt);return t.facade=e,eD(e,to,t),t},s=function(e){return ek(e,to)?e[to]:{}},c=function(e){return ek(e,to)}}var ta=(e5={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=s(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e5.get,tc=String,tu=Object.defineProperty,tl=x("".slice),td=x("".replace),tp=x([].join),tf=b&&!w(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tg=eX=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ek(e,"name")||e2&&e.name!==t)&&(b?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&ek(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&ek(r,"constructor")&&r.constructor?b&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return ek(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return z(this)&&ts(this).source||e9(this)},"toString"),eK=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(z(r)&&eX(r,a,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},ty={},tm={},t_={},tb={},tw={},tk=Math.ceil,tE=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},tb=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var t$=Math.max,tS=Math.min;t_=function(e,t){var r=tb(e);return r<0?t$(r+t,0):tS(r,t)};var tL={},tO={},tj=Math.min;tO=function(e){var t=tb(e);return t>0?tj(t,0x1fffffffffffff):0},tL=function(e){return tO(e.length)};var tP=function(e){return function(t,r,n){var i,o=j(t),a=tL(o);if(0===a)return!e&&-1;var s=t_(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tx={includes:tP(!0),indexOf:tP(!1)}.indexOf,tM=x([].push);tm=function(e,t){var r,n=j(e),i=0,o=[];for(r in n)!ek(te,r)&&ek(n,r)&&tM(o,r);for(;t.length>i;)ek(n,r=t[i++])&&(~tx(o,r)||tM(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return tm(e,tT)},l=Object.getOwnPropertySymbols;var tF=x([].concat);ty=J("Reflect","ownKeys")||function(e){var t=u(eW(e));return l?tF(t,l(e)):t},tv=function(e,r,n){for(var i=ty(r),a=0;a<i.length;a++){var s=i[a];ek(e,s)||n&&ek(n,s)||o(e,s,t(r,s))}};var tI={},tN=/#|\.prototype\./,tA=function(e,t){var r=tC[tq(e)];return r===tD||r!==tH&&(z(t)?w(t):!!t)},tq=tA.normalize=function(e){return String(e).replace(tN,".").toLowerCase()},tC=tA.data={},tH=tA.NATIVE="N",tD=tA.POLYFILL="P";tI=tA,y=function(e,r){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?m:l?m[c]||em(c,{}):m[c]&&m[c].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tI(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eD(a,"sham",!0),eK(n,i,a,e)}};var tR={},tW={},tB=Function.prototype,tU=tB.apply,tz=tB.call;tW="object"==typeof Reflect&&Reflect.apply||(E?tz.bind(tU):function(){return tz.apply(tU,arguments)});var tG={},tY={},tJ=(tY=function(e){if("Function"===I(e))return x(e)})(tY.bind);tG=function(e,t){return eu(e),void 0===t?e:E?tJ(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=J("document","documentElement");var tV={};tV=x([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t1={},t0={},t2=function(e){return Z.slice(0,e.length)===e};t1="NODE"===(t0=t2("Bun/")?"BUN":t2("Cloudflare-Workers")?"CLOUDFLARE":t2("Deno/")?"DENO":t2("Node.js/")?"NODE":m.Bun&&"string"==typeof Bun.version?"BUN":m.Deno&&"object"==typeof Deno.version?"DENO":"process"===I(m.process)?"NODE":m.window&&m.document?"BROWSER":"REST");var t9=m.setImmediate,t3=m.clearImmediate,t5=m.process,t4=m.Dispatch,t6=m.Function,t8=m.MessageChannel,t7=m.String,re=0,rt={},rr="onreadystatechange";w(function(){d=m.location});var rn=function(e){if(ek(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){m.postMessage(t7(e),d.protocol+"//"+d.host)};t9&&t3||(t9=function(e){tK(arguments.length,1);var t=z(e)?e:t6(e),r=tV(arguments,1);return rt[++re]=function(){tW(t,void 0,r)},p(re),re},t3=function(e){delete rt[e]},t1?p=function(e){t5.nextTick(ri(e))}:t4&&t4.now?p=function(e){t4.now(ri(e))}:t8&&!tZ?(h=(f=new t8).port2,f.port1.onmessage=ro,p=tG(h.postMessage,h)):m.addEventListener&&z(m.postMessage)&&!m.importScripts&&d&&"file:"!==d.protocol&&!w(ra)?(p=ra,m.addEventListener("message",ro,!1)):p=rr in eA("script")?function(e){tQ.appendChild(eA("script"))[rr]=function(){tQ.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tR={set:t9,clear:t3}).clear;y({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==rs},{clearImmediate:rs});var rc=tR.set,ru={},rl=m.Function,rd=/MSIE .\./.test(Z)||"BUN"===t0&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));ru=function(e,t){var r=t?2:1;return rd?function(n,i){var o=tK(arguments.length,1)>r,a=z(n)?n:rl(n),s=o?tV(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rp=m.setImmediate?ru(rc,!1):rc;y({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rp},{setImmediate:rp});var rf=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new O(o||[]),u=p,function(e,r){if(u===f)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===p)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var o=d(a,s,c);if("normal"===o.type){if(u=c.done?h:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=h,c.method="throw",c.arg=o.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==r&&n.call(w,a)&&(_=w);var k=m.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function j(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),u($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new $(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rf:Function("r","regeneratorRuntime = r")(rf)}const rh="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="beae9817-2ee0-47dd-8c35-37d815601e76",rv=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},ry={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},r_=async function(e){try{let t=await rv(`${rh}${e}?key=${rg}`);ry.recipe=rm(t),ry.bookmarks.some(t=>t.id===e)?ry.recipe.bookmarked=!0:ry.recipe.bookmarked=!1,console.log(ry.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rb=async function(e){try{ry.search.query=e;let t=await rv(`${rh}?search=${e}&key=${rg}`);console.log(t),ry.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),ry.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rw=function(e=ry.search.page){ry.search.page=e;let t=(e-1)*ry.search.resultsPerPage,r=e*ry.search.resultsPerPage;return ry.search.results.slice(t,r)},rk=function(e){ry.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/ry.recipe.servings}),ry.recipe.servings=e},rE=function(){localStorage.setItem("bookmarks",JSON.stringify(ry.bookmarks))},r$=function(e){ry.bookmarks.push(e),e.id===ry.recipe.id&&(ry.recipe.bookmarked=!0),rE()},rS=function(e){let t=ry.bookmarks.findIndex(t=>t.id===e);ry.bookmarks.splice(t,1),e===ry.recipe.id&&(ry.recipe.bookmarked=!1),rE()},rL=localStorage.getItem("bookmarks");rL&&(ry.bookmarks=JSON.parse(rL));const rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rv(`${rh}?key=${rg}`,r);ry.recipe=rm(n),r$(ry.recipe)}catch(e){throw e}};class rj{#e=document.querySelector("body");render(){let e=`
      <div class="splash-screen" id="splash-screen">
        <div class="splash-content">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fbdb89" width="100px" height="100px" viewBox="0 -3.84 122.88 122.88" version="1.1" id="Layer_1" style="enable-background:new 0 0 122.88 115.21" xml:space="preserve">
          <g>
          <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z"/>
          </g>
        </svg>
        <h1>Forkify</h1>
          <p>Loading...</p>
        </div>
      </div>
    `;this.#e.insertAdjacentHTML("afterbegin",e)}hide(){let e=document.getElementById("splash-screen");e&&(e.classList.add("hidden"),setTimeout(()=>e.remove(),500))}}var rP=new rj,rx={};rx=import.meta.resolve("eyyUD");class rM{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${v(rx)}#icon-loader"></use>
          </svg>
        </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${v(rx)}_icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${v(rx)}_icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rT={};function rF(e,t,r,n,i){var o,a,s,c;let u=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&u.push(t);let l=0,d=e,p=t;for(;l<=u.length;)d%u[l]==0&&p%u[l]==0?(u[l],d/=u[l],p/=u[l]):l++;return o=p,a=d,s=r,c=n,1===o&&1===a?(s=`${c}${(parseInt(s)+1).toString()}`,`${s}`):0===a?`${c}${s}`:"0"==s?`${c}${a}/${o}`:`${c}${s} ${a}/${o}`}rT=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var s,c,u;return s=r,c=o,u=t,rF(parseInt(s,10),Math.pow(10,s.length),c,u,!1)}{let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rF(Math.round((s*c-s)*Math.pow(10,o)),(c-1)*a,n,i,!0)}(r,n,e,o,t)}};class rI extends rM{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rx)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${v(rx)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${v(rx)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${v(rx)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${v(rx)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${v(rx)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${v(rx)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${v(rx)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${v(rx)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?v(rT)(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var rN=new rI;class rA{_parenEl=document.querySelector(".search");getQuery(){let e=this._parenEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parenEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parenEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rq=new rA,rC=new class extends rM{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${v(rx)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class rH extends rM{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :D";_message="";_generateMarkup(){return this._data.map(e=>rC.render(e,!1)).join("")}}var rD=new rH;class rR extends rM{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <div class="pagination__current">Page ${e} of ${t}</div>

        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${v(rx)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <div class="pagination__current">Page ${e} of ${t}</div>

        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v(rx)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v(rx)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>

        <div class="pagination__current">Page ${e} of ${t}</div>
        
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${v(rx)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var rW=new rR;class rB extends rM{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rC.render(e,!1)).join("")}}var rU=new rB;class rz extends rM{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rG=new rz;const rY=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rD.update(rw()),rU.update(ry.bookmarks),await r_(e),rN.render(ry.recipe)}catch(e){rN.renderError(),console.error(e)}},rJ=async function(){try{rD.renderSpinner();let e=rq.getQuery();if(!e)return void rD.renderError("Please enter the search keyword!");await rb(e),rD.render(rw()),rW.render(ry.search)}catch(e){console.log(e)}},rQ=async function(e){try{rG.renderSpinner(),await rO(e),console.log(ry.recipe),rN.render(ry.recipe),rG.renderMessage(),rU.render(ry.bookmarks),window.history.pushState(null,"",`#${ry.recipe.id}`),setTimeout(function(){rG.toggleWindow()},2e3)}catch(e){console.error("\uD83D\uDCA5",e),rG.renderError(e.message)}};rP.render(),window.addEventListener("load",function(){setTimeout(()=>rP.hide(),1800)}),rU.addHandlerRender(function(){rU.render(ry.bookmarks)}),rN.addHandlerRender(rY),rN.addHandlerUpdateServings(function(e){rk(e),rN.update(ry.recipe)}),rN.addHandlerAddBookmark(function(){ry.recipe.bookmarked?rS(ry.recipe.id):r$(ry.recipe),rN.update(ry.recipe),rU.render(ry.bookmarks)}),rq.addHandlerSearch(rJ),rW.addHandlerClick(function(e){rD.render(rw(e)),rW.render(ry.search)}),rG.addHandlerUpload(rQ);
//# sourceMappingURL=forkify-app.22ccfda7.js.map
