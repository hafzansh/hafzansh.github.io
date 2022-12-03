import{S as ot,i as st,s as it,a as lt,e as F,c as ct,b as M,g as he,t as V,d as pe,f as B,h as J,j as ft,o as $e,k as ut,l as dt,m as ht,n as Ee,p as D,q as pt,r as mt,u as gt,v as H,w as W,x as Ue,y as Y,z as X,A as le}from"./chunks/index-8f0aa09d.js";import{S as nt,I as q,g as He,f as We,a as ke,b as ce,s as K,i as Ye,c as de,P as Xe,d as _t,e as wt,h as yt}from"./chunks/singletons-aa4b358b.js";function bt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function vt(n){return n.split("%25").map(decodeURI).join("%25")}function Et(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const kt=["href","pathname","search","searchParams","toString","toJSON"];function St(n,e){const t=new URL(n);for(const i of kt){let s=t[i];Object.defineProperty(t,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Rt(t),t}function Rt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ot="/__data.json";function It(n){return n.replace(/\/$/,"")+Ot}function Lt(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=t.length;for(;i;)e=e*33^t[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;te.delete(i)}return me(n,e)};const te=new Map;function $t(n,e){const t=rt(n,e),i=document.querySelector(t);if(i!=null&&i.textContent){const{body:s,...f}=JSON.parse(i.textContent),r=i.getAttribute("data-ttl");return r&&te.set(t,{body:s,init:f,ttl:1e3*Number(r)}),Promise.resolve(new Response(s,f))}return me(n,e)}function Pt(n,e,t){if(te.size>0){const i=rt(n,t),s=te.get(i);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);te.delete(i)}}return me(e,t)}function rt(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const jt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Nt(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const r=i.split(/\[(.+?)\](?!\])/);return"/"+r.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return Se(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Se(String.fromCharCode(...g.slice(2).split("-").map(C=>parseInt(C,16))));const _=jt.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,S,N,P]=_;return e.push({name:N,matcher:P,optional:!!b,rest:!!S,chained:S?m===1&&r[0]==="":!1}),S?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Se(g)}).join("")}).join("")}/?$`),params:e}}function Ut(n){return!/^\([^)]+\)$/.test(n)}function Nt(n){return n.slice(1).split("/").filter(Ut)}function Tt(n,e,t){const i={},s=n.slice(1);let f="";for(let r=0;r<e.length;r+=1){const u=e[r];let g=s[r];if(u.chained&&u.rest&&f&&(g=g?f+"/"+g:f),f="",g===void 0)u.rest&&(i[u.name]="");else{if(u.matcher&&!t[u.matcher](g)){if(u.optional&&u.chained){let m=s.indexOf(void 0,r);if(m===-1){const _=e[r+1];if((_==null?void 0:_.rest)&&_.chained)f=g;else return}for(;m>=r;)s[m]=s[m-1],m-=1;continue}return}i[u.name]=g}}if(!f)return i}function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(n,e,t,i){const s=new Set(e);return Object.entries(t).map(([u,[g,m,_]])=>{const{pattern:b,params:S}=At(u),N={id:u,exec:P=>{const C=b.exec(P);if(C)return Tt(C,S,i)},errors:[1,..._||[]].map(P=>n[P]),layouts:[0,...m||[]].map(r),leaf:f(g)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function f(u){const g=u<0;return g&&(u=~u),[g,n[u]]}function r(u){return u===void 0?u:[s.has(u),n[u]]}}function qt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=H(s,f(n))),{c(){e&&W(e.$$.fragment),t=F()},l(r){e&&Ue(e.$$.fragment,r),t=F()},m(r,u){e&&Y(e,r,u),M(r,t,u),i=!0},p(r,u){const g={};if(u&4&&(g.data=r[2]),u&2&&(g.form=r[1]),s!==(s=r[0][0])){if(e){he();const m=e;V(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}s?(e=H(s,f(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(g)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&V(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Ct(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],$$slots:{default:[Ft]},$$scope:{ctx:r}}}}return s&&(e=H(s,f(n))),{c(){e&&W(e.$$.fragment),t=F()},l(r){e&&Ue(e.$$.fragment,r),t=F()},m(r,u){e&&Y(e,r,u),M(r,t,u),i=!0},p(r,u){const g={};if(u&4&&(g.data=r[2]),u&523&&(g.$$scope={dirty:u,ctx:r}),s!==(s=r[0][0])){if(e){he();const m=e;V(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}s?(e=H(s,f(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(g)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&V(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Ft(n){let e,t,i;var s=n[0][1];function f(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=H(s,f(n))),{c(){e&&W(e.$$.fragment),t=F()},l(r){e&&Ue(e.$$.fragment,r),t=F()},m(r,u){e&&Y(e,r,u),M(r,t,u),i=!0},p(r,u){const g={};if(u&8&&(g.data=r[3]),u&2&&(g.form=r[1]),s!==(s=r[0][1])){if(e){he();const m=e;V(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}s?(e=H(s,f(r)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(g)},i(r){i||(e&&B(e.$$.fragment,r),i=!0)},o(r){e&&V(e.$$.fragment,r),i=!1},d(r){r&&J(t),e&&X(e,r)}}}function Ze(n){let e,t=n[5]&&Qe(n);return{c(){e=ut("div"),t&&t.c(),this.h()},l(i){e=dt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ht(e);t&&t.l(s),s.forEach(J),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(i,s){M(i,e,s),t&&t.m(e,null)},p(i,s){i[5]?t?t.p(i,s):(t=Qe(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&J(e),t&&t.d()}}}function Qe(n){let e;return{c(){e=pt(n[6])},l(t){e=mt(t,n[6])},m(t,i){M(t,e,i)},p(t,i){i&64&&gt(e,t[6])},d(t){t&&J(e)}}}function Vt(n){let e,t,i,s,f;const r=[Ct,qt],u=[];function g(_,b){return _[0][1]?0:1}e=g(n),t=u[e]=r[e](n);let m=n[4]&&Ze(n);return{c(){t.c(),i=lt(),m&&m.c(),s=F()},l(_){t.l(_),i=ct(_),m&&m.l(_),s=F()},m(_,b){u[e].m(_,b),M(_,i,b),m&&m.m(_,b),M(_,s,b),f=!0},p(_,[b]){let S=e;e=g(_),e===S?u[e].p(_,b):(he(),V(u[S],1,1,()=>{u[S]=null}),pe(),t=u[e],t?t.p(_,b):(t=u[e]=r[e](_),t.c()),B(t,1),t.m(i.parentNode,i)),_[4]?m?m.p(_,b):(m=Ze(_),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i(_){f||(B(t),f=!0)},o(_){V(t),f=!1},d(_){u[e].d(_),_&&J(i),m&&m.d(_),_&&J(s)}}}function Bt(n,e,t){let{stores:i}=e,{page:s}=e,{components:f}=e,{form:r}=e,{data_0:u=null}=e,{data_1:g=null}=e;ft(i.page.notify);let m=!1,_=!1,b=null;return $e(()=>{const S=i.page.subscribe(()=>{m&&(t(5,_=!0),t(6,b=document.title||"untitled page"))});return t(4,m=!0),S}),n.$$set=S=>{"stores"in S&&t(7,i=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,f=S.components),"form"in S&&t(1,r=S.form),"data_0"in S&&t(2,u=S.data_0),"data_1"in S&&t(3,g=S.data_1)},n.$$.update=()=>{n.$$.dirty&384&&i.page.set(s)},[f,r,u,g,m,_,b,i,s]}class Jt extends ot{constructor(e){super(),st(this,e,Bt,Vt,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Kt=function(n,e){return new URL(n,e).href},xe={},Re=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(f=>{if(f=Kt(f,i),f in xe)return;xe[f]=!0;const r=f.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!i)for(let _=s.length-1;_>=0;_--){const b=s[_];if(b.href===f&&(!r||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const m=document.createElement("link");if(m.rel=r?"stylesheet":Gt,r||(m.as="script",m.crossOrigin=""),m.href=f,document.head.appendChild(m),r)return new Promise((_,b)=>{m.addEventListener("load",_),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Mt={},ge=[()=>Re(()=>import("./chunks/0-f376fce6.js"),["./chunks/0-f376fce6.js","./chunks/_layout-1daba58d.js","./components/layout.svelte-57e34698.js","./chunks/index-8f0aa09d.js"],import.meta.url),()=>Re(()=>import("./chunks/1-b11782c4.js"),["./chunks/1-b11782c4.js","./components/error.svelte-11a31a1a.js","./chunks/index-8f0aa09d.js","./chunks/singletons-aa4b358b.js"],import.meta.url),()=>Re(()=>import("./chunks/2-091380b5.js"),["./chunks/2-091380b5.js","./components/pages/_page.svelte-fa1c36fc.js","./chunks/index-8f0aa09d.js"],import.meta.url)],zt=[],Ht={"/":[2]},Wt={handleError:({error:n})=>{console.error(n)}};class Pe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,t){this.status=e,this.location=t}}async function Yt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,Qt=-3,xt=-4,en=-5,tn=-6;function nn(n){if(typeof n=="number")return i(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function i(s,f=!1){if(s===Xt)return;if(s===Qt)return NaN;if(s===xt)return 1/0;if(s===en)return-1/0;if(s===tn)return-0;if(f)throw new Error("Invalid input");if(s in t)return t[s];const r=e[s];if(!r||typeof r!="object")t[s]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[s]=new Date(r[1]);break;case"Set":const g=new Set;t[s]=g;for(let b=1;b<r.length;b+=1)g.add(i(r[b]));break;case"Map":const m=new Map;t[s]=m;for(let b=1;b<r.length;b+=2)m.set(i(r[b]),i(r[b+1]));break;case"RegExp":t[s]=new RegExp(r[1],r[2]);break;case"Object":t[s]=Object(r[1]);break;case"BigInt":t[s]=BigInt(r[1]);break;case"null":const _=Object.create(null);t[s]=_;for(let b=1;b<r.length;b+=2)_[r[b]]=i(r[b+1]);break}else{const u=new Array(r.length);t[s]=u;for(let g=0;g<r.length;g+=1){const m=r[g];m!==Zt&&(u[g]=i(m))}}else{const u={};t[s]=u;for(const g in r){const m=r[g];u[g]=i(m)}}return t[s]}return i(0)}const Oe=Dt(ge,zt,Ht,Mt),je=ge[0],Ae=ge[1];je();Ae();let ne={};try{ne=JSON.parse(sessionStorage[nt])}catch{}function Ie(n){ne[n]=de()}function rn({target:n,base:e}){var Ke;const t=[];let i=null;const s={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},r=!1,u=!1,g=!0,m=!1,_=!1,b=!1,S=!1,N,P=(Ke=history.state)==null?void 0:Ke[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const C=ne[P];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let G,Ne,re;async function Te(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=be(a,!0);i=null,await qe(o,a,[])}async function _e(a,{noScroll:o=!1,replaceState:l=!1,keepFocus:c=!1,state:p={},invalidateAll:h=!1},d,k){return typeof a=="string"&&(a=new URL(a,He(document))),se({url:a,scroll:o?de():null,keepfocus:c,redirect_chain:d,details:{state:p,replaceState:l},nav_token:k,accepted:()=>{h&&(S=!0)},blocked:()=>{},type:"goto"})}async function De(a){const o=be(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:Ve(o).then(l=>(l.type==="loaded"&&l.state.error&&(i=null),l))},i.promise}async function ae(...a){const l=Oe.filter(c=>a.some(p=>c.exec(p))).map(c=>Promise.all([...c.layouts,c.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(l)}async function qe(a,o,l,c,p={},h){var k,v;Ne=p;let d=a&&await Ve(a);if(d||(d=await Ge(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ne!==p)return!1;if(d.type==="redirect")if(l.length>10||l.includes(o.pathname))d=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return _e(new URL(d.location,o).href,{},[...l,o.pathname],p),!1;else((v=(k=d.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await ie(o);if(t.length=0,S=!1,m=!0,c&&c.details){const{details:y}=c,E=y.replaceState?0:1;y.state[q]=P+=E,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,u){f=d.state,d.props.page&&(d.props.page.url=o);const y=ue();N.$set(d.props),y()}else Ce(d);if(c){const{scroll:y,keepfocus:E}=c;if(E||Le(),await le(),g){const O=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await le();g=!0,d.props.page&&(G=d.props.page),h&&h(),m=!1}function Ce(a){var p,h;f=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=a.props.page;const l=ue();N=new Jt({target:n,props:{...a.props,stores:K},hydrate:!0}),l();const c={from:null,to:fe("to",{params:f.params,route:{id:(h=(p=f.route)==null?void 0:p.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(d=>d(c)),u=!0}async function Z({url:a,params:o,branch:l,status:c,error:p,route:h,form:d}){var A;const k=l.filter(Boolean);let v="never";for(const I of l)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=bt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:l,error:p,route:h},props:{components:k.map(I=>I.node.component)}};d!==void 0&&(y.props.form=d);let E={},O=!G;for(let I=0;I<k.length;I+=1){const j=k[I];E={...E,...j.data},(O||!f.branch.some(T=>T===j))&&(y.props[`data_${I}`]=E,O=O||Object.keys((A=j.data)!=null?A:{}).length>0)}if(O||(O=Object.keys(G.data).length!==Object.keys(E).length),!f.url||a.href!==f.url.href||f.error!==p||d!==void 0||O){y.props.page={error:p,params:o,route:h,status:c,url:new URL(a),form:d,data:O?E:G.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(j,T)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function we({loader:a,parent:o,url:l,params:c,route:p,server_data_node:h}){var y,E,O,U,A,I,j;let d=null;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((y=v.shared)!=null&&y.load){let T=function(...w){for(const R of w){const{href:L}=new URL(R,l);k.dependencies.add(L)}};const Q={route:{get id(){return k.route=!0,p.id}},params:new Proxy(c,{get:(w,R)=>(k.params.add(R),w[R])}),data:(E=h==null?void 0:h.data)!=null?E:null,url:St(l,()=>{k.url=!0}),async fetch(w,R){let L;w instanceof Request?(L=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):L=w;const $=new URL(L,l).href;return T($),u?Pt(L,$,R):$t(L,R)},setHeaders:()=>{},depends:T,parent(){return k.parent=!0,o()}};Object.defineProperties(Q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),d=(O=await v.shared.load.call(null,Q))!=null?O:null,d=d?await Yt(d):null}return{node:v,loader:a,server:h,shared:(U=v.shared)!=null&&U.load?{type:"data",data:d,uses:k}:null,data:(A=d!=null?d:h==null?void 0:h.data)!=null?A:null,slash:(j=(I=v.shared)==null?void 0:I.trailingSlash)!=null?j:h==null?void 0:h.slash}}function Fe(a,o,l,c,p){if(S)return!0;if(!c)return!1;if(c.parent&&a||c.route&&o||c.url&&l)return!0;for(const h of c.params)if(p[h]!==f.params[h])return!0;for(const h of c.dependencies)if(t.some(d=>d(new URL(h))))return!0;return!1}function ye(a,o){var l,c;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((c=a.uses.params)!=null?c:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&o!=null?o:null}async function Ve({id:a,invalidating:o,url:l,params:c,route:p}){var Q;if((i==null?void 0:i.id)===a)return i.promise;const{errors:h,layouts:d,leaf:k}=p,v=[...d,k];h.forEach(w=>w==null?void 0:w().catch(()=>{})),v.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const E=f.url?a!==f.url.pathname+f.url.search:!1,O=f.route?a!==f.route.id:!1,U=v.reduce((w,R,L)=>{var x;const $=f.branch[L],z=!!(R!=null&&R[0])&&(($==null?void 0:$.loader)!==R[1]||Fe(w.some(Boolean),O,E,(x=$.server)==null?void 0:x.uses,c));return w.push(z),w},[]);if(U.some(Boolean)){try{y=await tt(l,U)}catch(w){return oe({status:500,error:await ee(w,{url:l,params:c,route:{id:p.id}}),url:l,route:p})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let I=!1;const j=v.map(async(w,R)=>{var x;if(!w)return;const L=f.branch[R],$=A==null?void 0:A[R];if((!$||$.type==="skip")&&w[1]===(L==null?void 0:L.loader)&&!Fe(I,O,E,(x=L.shared)==null?void 0:x.uses,c))return L;if(I=!0,($==null?void 0:$.type)==="error")throw $;return we({loader:w[1],url:l,params:c,route:p,parent:async()=>{var ze;const Me={};for(let ve=0;ve<R;ve+=1)Object.assign(Me,(ze=await j[ve])==null?void 0:ze.data);return Me},server_data_node:ye($===void 0&&w[0]?{type:"skip"}:$!=null?$:null,L==null?void 0:L.server)})});for(const w of j)w.catch(()=>{});const T=[];for(let w=0;w<v.length;w+=1)if(v[w])try{T.push(await j[w])}catch(R){if(R instanceof et)return{type:"redirect",location:R.location};let L=500,$;A!=null&&A.includes(R)?(L=(Q=R.status)!=null?Q:L,$=R.error):R instanceof Pe?(L=R.status,$=R.body):$=await ee(R,{params:c,url:l,route:{id:p.id}});const z=await Be(w,T,h);return z?await Z({url:l,params:c,branch:T.slice(0,z.idx).concat(z.node),status:L,error:$,route:p}):await Ge(l,{id:p.id},$,L)}else T.push(void 0);return await Z({url:l,params:c,branch:T,status:200,error:null,route:p,form:o?void 0:null})}async function Be(a,o,l){for(;a--;)if(l[a]){let c=a;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:o,url:l,route:c}){var y;const p={},h=await je();let d=null;if(h.server)try{const E=await tt(l,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;d=(y=E.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||r)&&await ie(l)}const k=await we({loader:je,url:l,params:p,route:c,parent:()=>Promise.resolve({}),server_data_node:ye(d)}),v={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await Z({url:l,params:p,branch:[k,v],status:a,error:o,route:null})}function be(a,o){if(Ye(a,e))return;const l=vt(a.pathname.slice(e.length)||"/");for(const c of Oe){const p=c.exec(l);if(p)return{id:a.pathname+a.search,invalidating:o,route:c,params:Et(p),url:a}}}function Je({url:a,type:o,intent:l,delta:c}){var k,v,y,E,O;let p=!1;const h={from:fe("from",{params:f.params,route:{id:(v=(k=f.route)==null?void 0:k.id)!=null?v:null},url:f.url}),to:fe("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(O=(E=l==null?void 0:l.route)==null?void 0:E.id)!=null?O:null},url:a}),willUnload:!l,type:o};c!==void 0&&(h.delta=c);const d={...h,cancel:()=>{p=!0}};return _||s.before_navigate.forEach(U=>U(d)),p?null:h}async function se({url:a,scroll:o,keepfocus:l,redirect_chain:c,details:p,type:h,delta:d,nav_token:k,accepted:v,blocked:y}){const E=be(a,!1),O=Je({url:a,type:h,delta:d,intent:E});if(!O){y();return}Ie(P),v(),_=!0,u&&K.navigating.set(O),await qe(E,a,c,{scroll:o,keepfocus:l,details:p},k,()=>{_=!1,s.after_navigate.forEach(U=>U(O)),K.navigating.set(null)})}async function Ge(a,o,l,c){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await oe({status:c,error:l,url:a,route:o}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}function at(){let a;n.addEventListener("mousemove",h=>{const d=h.target;clearTimeout(a),a=setTimeout(()=>{c(d,2)},20)});function o(h){c(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const l=new IntersectionObserver(h=>{for(const d of h)d.isIntersecting&&(ae(new URL(d.target.href).pathname),l.unobserve(d.target))},{threshold:0});function c(h,d){const k=We(h,n);if(!k)return;const{url:v,external:y}=ke(k,e);if(y)return;const E=ce(k);E.reload||(d<=E.preload_data?De(v):d<=E.preload_code&&ae(v.pathname))}function p(){l.disconnect();for(const h of n.querySelectorAll("a")){const{url:d,external:k}=ke(h,e);if(k)continue;const v=ce(h);v.reload||(v.preload_code===Xe.viewport&&l.observe(h),v.preload_code===Xe.eager&&ae(d.pathname))}}s.after_navigate.push(p),p()}return{after_navigate:a=>{$e(()=>(s.after_navigate.push(a),()=>{const o=s.after_navigate.indexOf(a);s.after_navigate.splice(o,1)}))},before_navigate:a=>{$e(()=>(s.before_navigate.push(a),()=>{const o=s.before_navigate.indexOf(a);s.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(m||!u)&&(g=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return _e(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:o}=new URL(a,location.href);t.push(l=>l.href===o)}return Te()},invalidateAll:()=>(S=!0,Te()),preload_data:async a=>{const o=new URL(a,He(document));await De(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:l,route:c}=f;if(!c)return;const p=await Be(f.branch.length,l,c.errors);if(p){const h=await Z({url:o,params:f.params,branch:l.slice(0,p.idx).concat(p.node),status:500,error:a.error,route:c});f=h.state;const d=ue();N.$set(h.props),d(),le().then(Le)}}else if(a.type==="redirect")_e(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...G,form:a.data,status:a.status}},l=ue();N.$set(o),l(),a.type==="success"&&le().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c,p;let l=!1;if(!_){const h={from:fe("from",{params:f.params,route:{id:(p=(c=f.route)==null?void 0:c.id)!=null?p:null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};s.before_navigate.forEach(d=>d(h))}l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(P);try{sessionStorage[nt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||at(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const l=We(o.composedPath()[0],n);if(!l)return;const{url:c,external:p,has:h}=ke(l,e),d=ce(l);if(!c||!(l instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||h.download)return;if(p||d.reload){Je({url:c,type:"link"})||o.preventDefault(),_=!0;return}const[v,y]=c.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){b=!0,Ie(P),f.url=c,K.page.set({...G,url:c}),K.page.notify();return}se({url:c,scroll:d.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var v;if(o.defaultPrevented)return;const l=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||l.method)!=="get")return;const h=new URL(((v=o.submitter)==null?void 0:v.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||l.action);if(Ye(h,e))return;const{noscroll:d,reload:k}=ce(o.target);k||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:h,scroll:d?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var l;if((l=o.state)!=null&&l[q]){if(o.state[q]===P)return;const c=o.state[q]-P;se({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:o,node_ids:l,params:c,route:p,data:h,form:d})=>{var y;r=!0;const k=new URL(location.href);let v;try{const E=l.map(async(O,U)=>{const A=h[U];return we({loader:ge[O],url:k,params:c,route:p,parent:async()=>{const I={};for(let j=0;j<U;j+=1)Object.assign(I,(await E[j]).data);return I},server_data_node:ye(A)})});v=await Z({url:k,params:c,branch:await Promise.all(E),status:a,error:o,form:d,route:(y=Oe.find(({id:O})=>O===p.id))!=null?y:null})}catch(E){if(E instanceof et){await ie(new URL(E.location,location.href));return}v=await oe({status:E instanceof Pe?E.status:500,error:await ee(E,{url:k,params:c,route:p}),url:k,route:p})}Ce(v)}}}async function tt(n,e){var f;const t=new URL(n);t.pathname=It(n.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const i=await me(t.href),s=await i.json();if(!i.ok)throw new Error(s);return(f=s.nodes)==null||f.forEach(r=>{var u,g;(r==null?void 0:r.type)==="data"&&(r.data=nn(r.data),r.uses={dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((g=r.uses.params)!=null?g:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),s}function ee(n,e){var t;return n instanceof Pe?n.body:(t=Wt.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const an=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(n,e){for(const t of an)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function ln({env:n,hydrate:e,paths:t,target:i,version:s}){_t(t),yt(s);const f=rn({target:i,base:t.base});wt({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{ln as start};
