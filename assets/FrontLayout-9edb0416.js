import{p as L,m as be,a as xe,g as W,u as J,c as v,b as Qe,d as We,e as Je,f as Ye,h as qe,t as X,i as Ke,j as Ge,k as _e,l as $e,n as xt,s as M,o as S,q as wt,V as et,r as le,v as z,w as St,x as ne,y as kt,z as q,A as At,B as It,C as tt,D as Tt,E as Ct,F as Vt,G as nt,H as ot,I as Mt,J as Ft,K as _,L as Pt,M as jt,N as Ce,O as Bt,P as Nt,Q as Ot,R as Et,S as Lt,T as Ve,U as Rt,W as k,X as C,Y as j,Z as I,_ as T,$ as O,a0 as V,a1 as B,a2 as H,a3 as Ht,a4 as ce,a5 as Me,a6 as Ut,a7 as zt,a8 as E,a9 as Dt}from"./index-b9ee6205.js";import{V as Xt,a as Zt}from"./VNavigationDrawer-9dbc95a9.js";import{V as Qt}from"./VContainer-daa13d0a.js";const Wt=L({text:String,...be(),...xe()},"VToolbarTitle"),Jt=W()({name:"VToolbarTitle",props:Wt(),setup(e,n){let{slots:t}=n;return J(()=>{const r=!!(t.default||t.text||e.text);return v(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[r&&v("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Yt=[null,"prominent","default","comfortable","compact"],rt=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Yt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Qe(),...be(),...We(),...Je(),...xe({tag:"header"}),...Ye()},"VToolbar"),Fe=W()({name:"VToolbar",props:rt(),setup(e,n){var p;let{slots:t}=n;const{backgroundColorClasses:r,backgroundColorStyles:o}=qe(X(e,"color")),{borderClasses:s}=Ke(e),{elevationClasses:i}=Ge(e),{roundedClasses:a}=_e(e),{themeClasses:l}=$e(e),{rtlClasses:c}=xt(),u=M(!!(e.extended||(p=t.extension)!=null&&p.call(t))),d=S(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=S(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return wt({VBtn:{variant:"text"}}),J(()=>{var f;const y=!!(e.title||t.title),g=!!(t.image||e.image),m=(f=t.extension)==null?void 0:f.call(t);return u.value=!!(e.extended||m),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,s.value,i.value,a.value,l.value,c.value,e.class],style:[o.value,e.style]},{default:()=>[g&&v("div",{key:"image",class:"v-toolbar__image"},[t.image?v(le,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):v(et,{key:"image-img",cover:!0,src:e.image},null)]),v(le,{defaults:{VTabs:{height:z(d.value)}}},{default:()=>{var x,w,F;return[v("div",{class:"v-toolbar__content",style:{height:z(d.value)}},[t.prepend&&v("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),y&&v(Jt,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&v("div",{class:"v-toolbar__append"},[(F=t.append)==null?void 0:F.call(t)])])]}}),v(le,{defaults:{VTabs:{height:z(h.value)}}},{default:()=>[v(St,null,{default:()=>[u.value&&v("div",{class:"v-toolbar__extension",style:{height:z(h.value)}},[m])]})]})]})}),{contentHeight:d,extensionHeight:h}}}),qt=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Kt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=n;let r=0;const o=ne(null),s=M(0),i=M(0),a=M(0),l=M(!1),c=M(!1),u=S(()=>Number(e.scrollThreshold)),d=S(()=>kt((u.value-s.value)/u.value||0)),h=()=>{const p=o.value;!p||t&&!t.value||(r=s.value,s.value="window"in p?p.pageYOffset:p.scrollTop,c.value=s.value<r,a.value=Math.abs(s.value-u.value))};return q(c,()=>{i.value=i.value||s.value}),q(l,()=>{i.value=0}),At(()=>{q(()=>e.scrollTarget,p=>{var g;const y=p?document.querySelector(p):window;y&&y!==o.value&&((g=o.value)==null||g.removeEventListener("scroll",h),o.value=y,o.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),It(()=>{var p;(p=o.value)==null||p.removeEventListener("scroll",h)}),t&&q(t,h,{immediate:!0}),{scrollThreshold:u,currentScroll:s,currentThreshold:a,isScrollActive:l,scrollRatio:d,isScrollingUp:c,savedScroll:i}}const Gt=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...rt(),...tt(),...qt(),height:{type:[Number,String],default:64}},"VAppBar"),_t=W()({name:"VAppBar",props:Gt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const r=ne(),o=Tt(e,"modelValue"),s=S(()=>{var x;const f=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:f.has("hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),i=S(()=>{const f=s.value;return f.hide||f.inverted||f.collapse||f.elevate||f.fadeImage||!o.value}),{currentScroll:a,scrollThreshold:l,isScrollingUp:c,scrollRatio:u}=Kt(e,{canScroll:i}),d=S(()=>e.collapse||s.value.collapse&&(s.value.inverted?u.value>0:u.value===0)),h=S(()=>e.flat||s.value.elevate&&(s.value.inverted?a.value>0:a.value===0)),p=S(()=>s.value.fadeImage?s.value.inverted?1-u.value:u.value:void 0),y=S(()=>{var w,F;if(s.value.hide&&s.value.inverted)return 0;const f=((w=r.value)==null?void 0:w.contentHeight)??0,x=((F=r.value)==null?void 0:F.extensionHeight)??0;return f+x});Ct(S(()=>!!e.scrollBehavior),()=>{Mt(()=>{s.value.hide?s.value.inverted?o.value=a.value>l.value:o.value=c.value||a.value<l.value:o.value=!0})});const{ssrBootStyles:g}=Vt(),{layoutItemStyles:m}=nt({id:e.name,order:S(()=>parseInt(e.order,10)),position:X(e,"location"),layoutSize:y,elementSize:M(void 0),active:o,absolute:X(e,"absolute")});return J(()=>{const[f]=Fe.filterProps(e);return v(Fe,ot({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...m.value,"--v-toolbar-image-opacity":p.value,height:void 0,...g.value},e.style]},f,{collapse:d.value,flat:h.value}),t)}),{}}}),$t=L({...Ft({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),en=W()({name:"VAppBarNavIcon",props:$t(),setup(e,n){let{slots:t}=n;return J(()=>v(_,ot(e,{class:["v-app-bar-nav-icon"]}),t)),{}}});const tn=L({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Qe(),...be(),...We(),...tt(),...Je(),...xe({tag:"footer"}),...Ye()},"VFooter"),nn=W()({name:"VFooter",props:tn(),setup(e,n){let{slots:t}=n;const{themeClasses:r}=$e(e),{backgroundColorClasses:o,backgroundColorStyles:s}=qe(X(e,"color")),{borderClasses:i}=Ke(e),{elevationClasses:a}=Ge(e),{roundedClasses:l}=_e(e),c=M(32),{resizeRef:u}=Pt(p=>{p.length&&(c.value=p[0].target.clientHeight)}),d=S(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:h}=nt({id:e.name,order:S(()=>parseInt(e.order,10)),position:S(()=>"bottom"),layoutSize:d,elementSize:S(()=>e.height==="auto"?void 0:d.value),active:S(()=>e.app),absolute:X(e,"absolute")});return J(()=>v(e.tag,{ref:u,class:["v-footer",r.value,o.value,i.value,a.value,l.value,e.class],style:[s.value,e.app?h.value:{height:z(e.height)},e.style]},t)),{}}}),on="data:image/png;base64,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",D=/^[a-z0-9]+(-[a-z0-9]+)*$/,re=(e,n,t,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),c={provider:o.length>0?o[0]:r,prefix:l,name:a};return n&&!$(c)?null:c}const s=o[0],i=s.split("-");if(i.length>1){const a={provider:r,prefix:i.shift(),name:i.join("-")};return n&&!$(a)?null:a}if(t&&r===""){const a={provider:r,prefix:"",name:s};return n&&!$(a,t)?null:a}return null},$=(e,n)=>e?!!((e.provider===""||e.provider.match(D))&&(n&&e.prefix===""||e.prefix.match(D))&&e.name.match(D)):!1,st=Object.freeze({left:0,top:0,width:16,height:16}),oe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),se=Object.freeze({...st,...oe}),de=Object.freeze({...se,body:"",hidden:!1});function rn(e,n){const t={};!e.hFlip!=!n.hFlip&&(t.hFlip=!0),!e.vFlip!=!n.vFlip&&(t.vFlip=!0);const r=((e.rotate||0)+(n.rotate||0))%4;return r&&(t.rotate=r),t}function Pe(e,n){const t=rn(e,n);for(const r in de)r in oe?r in e&&!(r in t)&&(t[r]=oe[r]):r in n?t[r]=n[r]:r in e&&(t[r]=e[r]);return t}function sn(e,n){const t=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(t[i])return o[i]=[];if(!(i in o)){o[i]=null;const a=r[i]&&r[i].parent,l=a&&s(a);l&&(o[i]=[a].concat(l))}return o[i]}return(n||Object.keys(t).concat(Object.keys(r))).forEach(s),o}function an(e,n,t){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(a){s=Pe(r[a]||o[a],s)}return i(n),t.forEach(i),Pe(e,s)}function it(e,n){const t=[];if(typeof e!="object"||typeof e.icons!="object")return t;e.not_found instanceof Array&&e.not_found.forEach(o=>{n(o,null),t.push(o)});const r=sn(e);for(const o in r){const s=r[o];s&&(n(o,an(e,o,s)),t.push(o))}return t}const ln={provider:"",aliases:{},not_found:{},...st};function ue(e,n){for(const t in n)if(t in e&&typeof e[t]!=typeof n[t])return!1;return!0}function at(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!ue(e,ln))return null;const t=n.icons;for(const o in t){const s=t[o];if(!o.match(D)||typeof s.body!="string"||!ue(s,de))return null}const r=n.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(D)||typeof i!="string"||!t[i]&&!r[i]||!ue(s,de))return null}return n}const je=Object.create(null);function cn(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function N(e,n){const t=je[e]||(je[e]=Object.create(null));return t[n]||(t[n]=cn(e,n))}function we(e,n){return at(n)?it(n,(t,r)=>{r?e.icons[t]=r:e.missing.add(t)}):[]}function un(e,n,t){try{if(typeof t.body=="string")return e.icons[n]={...t},!0}catch{}return!1}let Z=!1;function lt(e){return typeof e=="boolean"&&(Z=e),Z}function fn(e){const n=typeof e=="string"?re(e,!0,Z):e;if(n){const t=N(n.provider,n.prefix),r=n.name;return t.icons[r]||(t.missing.has(r)?null:void 0)}}function dn(e,n){const t=re(e,!0,Z);if(!t)return!1;const r=N(t.provider,t.prefix);return un(r,t.name,n)}function hn(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),Z&&!n&&!e.prefix){let o=!1;return at(e)&&(e.prefix="",it(e,(s,i)=>{i&&dn(s,i)&&(o=!0)})),o}const t=e.prefix;if(!$({provider:n,prefix:t,name:"a"}))return!1;const r=N(n,t);return!!we(r,e)}const ct=Object.freeze({width:null,height:null}),ut=Object.freeze({...ct,...oe}),gn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Be(e,n,t){if(n===1)return e;if(t=t||100,typeof e=="number")return Math.ceil(e*n*t)/t;if(typeof e!="string")return e;const r=e.split(gn);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=pn.test(s);for(;;){if(i){const a=parseFloat(s);isNaN(a)?o.push(s):o.push(Math.ceil(a*n*t)/t)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const mn=e=>e==="unset"||e==="undefined"||e==="none";function vn(e,n){const t={...se,...e},r={...ut,...n},o={left:t.left,top:t.top,width:t.width,height:t.height};let s=t.body;[t,r].forEach(y=>{const g=[],m=y.hFlip,f=y.vFlip;let x=y.rotate;m?f?x+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):f&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let w;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:w=o.height/2+o.top,g.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,g.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}x%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),g.length&&(s='<g transform="'+g.join(" ")+'">'+s+"</g>")});const i=r.width,a=r.height,l=o.width,c=o.height;let u,d;i===null?(d=a===null?"1em":a==="auto"?c:a,u=Be(d,l/c)):(u=i==="auto"?l:i,d=a===null?Be(u,c/l):a==="auto"?c:a);const h={},p=(y,g)=>{mn(g)||(h[y]=g.toString())};return p("width",u),p("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:h,body:s}}const yn=/\sid="(\S+)"/g,bn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let xn=0;function wn(e,n=bn){const t=[];let r;for(;r=yn.exec(e);)t.push(r[1]);if(!t.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(s=>{const i=typeof n=="function"?n(s):n+(xn++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const he=Object.create(null);function Sn(e,n){he[e]=n}function ge(e){return he[e]||he[""]}function Se(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ke=Object.create(null),U=["https://api.simplesvg.com","https://api.unisvg.com"],ee=[];for(;U.length>0;)U.length===1||Math.random()>.5?ee.push(U.shift()):ee.push(U.pop());ke[""]=Se({resources:["https://api.iconify.design"].concat(ee)});function kn(e,n){const t=Se(n);return t===null?!1:(ke[e]=t,!0)}function Ae(e){return ke[e]}const An=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ne=An();function In(e,n){const t=Ae(e);if(!t)return 0;let r;if(!t.maxURL)r=0;else{let o=0;t.resources.forEach(i=>{o=Math.max(o,i.length)});const s=n+".json?icons=";r=t.maxURL-o-t.path.length-s.length}return r}function Tn(e){return e===404}const Cn=(e,n,t)=>{const r=[],o=In(e,n),s="icons";let i={type:s,provider:e,prefix:n,icons:[]},a=0;return t.forEach((l,c)=>{a+=l.length+1,a>=o&&c>0&&(r.push(i),i={type:s,provider:e,prefix:n,icons:[]},a=l.length),i.icons.push(l)}),r.push(i),r};function Vn(e){if(typeof e=="string"){const n=Ae(e);if(n)return n.path}return"/"}const Mn=(e,n,t)=>{if(!Ne){t("abort",424);return}let r=Vn(n.provider);switch(n.type){case"icons":{const s=n.prefix,a=n.icons.join(","),l=new URLSearchParams({icons:a});r+=s+".json?"+l.toString();break}case"custom":{const s=n.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:t("abort",400);return}let o=503;Ne(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{t(Tn(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?t("abort",s):t("next",o)});return}setTimeout(()=>{t("success",s)})}).catch(()=>{t("next",o)})},Fn={prepare:Cn,send:Mn};function Pn(e){const n={loaded:[],missing:[],pending:[]},t=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,a=o.name,l=t[s]||(t[s]=Object.create(null)),c=l[i]||(l[i]=N(s,i));let u;a in c.icons?u=n.loaded:i===""||c.missing.has(a)?u=n.missing:u=n.pending;const d={provider:s,prefix:i,name:a};u.push(d)}),n}function ft(e,n){e.forEach(t=>{const r=t.loaderCallbacks;r&&(t.loaderCallbacks=r.filter(o=>o.id!==n))})}function jn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let t=!1;const r=e.provider,o=e.prefix;n.forEach(s=>{const i=s.icons,a=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const c=l.name;if(e.icons[c])i.loaded.push({provider:r,prefix:o,name:c});else if(e.missing.has(c))i.missing.push({provider:r,prefix:o,name:c});else return t=!0,!0;return!1}),i.pending.length!==a&&(t||ft([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Bn=0;function Nn(e,n,t){const r=Bn++,o=ft.bind(null,t,r);if(!n.pending.length)return o;const s={id:r,icons:n,callback:e,abort:o};return t.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function On(e,n=!0,t=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?re(o,n,t):o;s&&r.push(s)}),r}var En={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ln(e,n,t,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let b=e.resources.slice(0);for(i=[];b.length>1;){const A=Math.floor(Math.random()*b.length);i.push(b[A]),b=b.slice(0,A).concat(b.slice(A+1))}i=i.concat(b)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",c=0,u,d=null,h=[],p=[];typeof r=="function"&&p.push(r);function y(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),y(),h.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),h=[]}function m(b,A){A&&(p=[]),typeof b=="function"&&p.push(b)}function f(){return{startTime:a,payload:n,status:l,queriesSent:c,queriesPending:h.length,subscribe:m,abort:g}}function x(){l="failed",p.forEach(b=>{b(void 0,u)})}function w(){h.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),h=[]}function F(b,A,R){const Y=A!=="success";switch(h=h.filter(P=>P!==b),l){case"pending":break;case"failed":if(Y||!e.dataAfterTimeout)return;break;default:return}if(A==="abort"){u=R,x();return}if(Y){u=R,h.length||(i.length?ae():x());return}if(y(),w(),!e.random){const P=e.resources.indexOf(b.resource);P!==-1&&P!==e.index&&(e.index=P)}l="completed",p.forEach(P=>{P(R)})}function ae(){if(l!=="pending")return;y();const b=i.shift();if(b===void 0){if(h.length){d=setTimeout(()=>{y(),l==="pending"&&(w(),x())},e.timeout);return}x();return}const A={status:"pending",resource:b,callback:(R,Y)=>{F(A,R,Y)}};h.push(A),c++,d=setTimeout(ae,e.rotate),t(b,n,A.callback)}return setTimeout(ae),f}function dt(e){const n={...En,...e};let t=[];function r(){t=t.filter(a=>a().status==="pending")}function o(a,l,c){const u=Ln(n,a,l,(d,h)=>{r(),c&&c(d,h)});return t.push(u),u}function s(a){return t.find(l=>a(l))||null}return{query:o,find:s,setIndex:a=>{n.index=a},getIndex:()=>n.index,cleanup:r}}function Oe(){}const fe=Object.create(null);function Rn(e){if(!fe[e]){const n=Ae(e);if(!n)return;const t=dt(n),r={config:n,redundancy:t};fe[e]=r}return fe[e]}function Hn(e,n,t){let r,o;if(typeof e=="string"){const s=ge(e);if(!s)return t(void 0,424),Oe;o=s.send;const i=Rn(e);i&&(r=i.redundancy)}else{const s=Se(e);if(s){r=dt(s);const i=e.resources?e.resources[0]:"",a=ge(i);a&&(o=a.send)}}return!r||!o?(t(void 0,424),Oe):r.query(n,o,t)().abort}const Ee="iconify2",Q="iconify",ht=Q+"-count",Le=Q+"-version",gt=36e5,Un=168;function pe(e,n){try{return e.getItem(n)}catch{}}function Ie(e,n,t){try{return e.setItem(n,t),!0}catch{}}function Re(e,n){try{e.removeItem(n)}catch{}}function me(e,n){return Ie(e,ht,n.toString())}function ve(e){return parseInt(pe(e,ht))||0}const ie={local:!0,session:!0},pt={local:new Set,session:new Set};let Te=!1;function zn(e){Te=e}let K=typeof window>"u"?{}:window;function mt(e){const n=e+"Storage";try{if(K&&K[n]&&typeof K[n].length=="number")return K[n]}catch{}ie[e]=!1}function vt(e,n){const t=mt(e);if(!t)return;const r=pe(t,Le);if(r!==Ee){if(r){const a=ve(t);for(let l=0;l<a;l++)Re(t,Q+l.toString())}Ie(t,Le,Ee),me(t,0);return}const o=Math.floor(Date.now()/gt)-Un,s=a=>{const l=Q+a.toString(),c=pe(t,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&n(u,a))return!0}catch{}Re(t,l)}};let i=ve(t);for(let a=i-1;a>=0;a--)s(a)||(a===i-1?(i--,me(t,i)):pt[e].add(a))}function yt(){if(!Te){zn(!0);for(const e in ie)vt(e,n=>{const t=n.data,r=n.provider,o=t.prefix,s=N(r,o);if(!we(s,t).length)return!1;const i=t.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Dn(e,n){const t=e.lastModifiedCached;if(t&&t>=n)return t===n;if(e.lastModifiedCached=n,t)for(const r in ie)vt(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===n});return!0}function Xn(e,n){Te||yt();function t(r){let o;if(!ie[r]||!(o=mt(r)))return;const s=pt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=ve(o),!me(o,i+1))return;const a={cached:Math.floor(Date.now()/gt),provider:e.provider,data:n};return Ie(o,Q+i.toString(),JSON.stringify(a))}n.lastModified&&!Dn(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),t("local")||t("session"))}function He(){}function Zn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,jn(e)}))}function Qn(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=ge(t)))return;s.prepare(t,r,o).forEach(a=>{Hn(t,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{e.missing.add(c)});else try{const c=we(e,l);if(!c.length)return;const u=e.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),Xn(e,l)}catch(c){console.error(c)}Zn(e)})})}))}const Wn=(e,n)=>{const t=On(e,!0,lt()),r=Pn(t);if(!r.pending.length){let l=!0;return n&&setTimeout(()=>{l&&n(r.loaded,r.missing,r.pending,He)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,a;return r.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===i)return;i=c,a=u,s.push(N(c,u));const d=o[c]||(o[c]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,h=N(c,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(d)||(p.add(d),o[c][u].push(d))}),s.forEach(l=>{const{provider:c,prefix:u}=l;o[c][u].length&&Qn(l,o[c][u])}),n?Nn(n,r,s):He};function Jn(e,n){const t={...e};for(const r in n){const o=n[r],s=typeof o;r in ct?(o===null||o&&(s==="string"||s==="number"))&&(t[r]=o):s===typeof t[r]&&(t[r]=r==="rotate"?o%4:o)}return t}const Yn=/[\s,]+/;function qn(e,n){n.split(Yn).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Kn(e,n=0){const t=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(t===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(t!==e){let o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-t.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return n}function Gn(e,n){let t=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in n)t+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}function _n(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function $n(e){return"data:image/svg+xml,"+_n(e)}function eo(e){return'url("'+$n(e)+'")'}const Ue={...ut,inline:!1},to={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},no={display:"inline-block"},ye={backgroundColor:"currentColor"},bt={backgroundColor:"transparent"},ze={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},De={webkitMask:ye,mask:ye,background:bt};for(const e in De){const n=De[e];for(const t in ze)n[e+t]=ze[t]}const te={};["horizontal","vertical"].forEach(e=>{const n=e.slice(0,1)+"Flip";te[e+"-flip"]=n,te[e.slice(0,1)+"-flip"]=n,te[e+"Flip"]=n});function Xe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Ze=(e,n)=>{const t=Jn(Ue,n),r={...to},o=n.mode||"svg",s={},i=n.style,a=typeof i=="object"&&!(i instanceof Array)?i:{};for(let g in n){const m=n[g];if(m!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":t[g]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&qn(t,m);break;case"color":s.color=m;break;case"rotate":typeof m=="string"?t[g]=Kn(m):typeof m=="number"&&(t[g]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete r["aria-hidden"];break;default:{const f=te[g];f?(m===!0||m==="true"||m===1)&&(t[f]=!0):Ue[g]===void 0&&(r[g]=m)}}}const l=vn(e,t),c=l.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...a},Object.assign(r,c);let g=0,m=n.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),r.innerHTML=wn(l.body,m?()=>m+"ID"+g++:"iconifyVue"),Ce("svg",r)}const{body:u,width:d,height:h}=e,p=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),y=Gn(u,{...c,width:d+"",height:h+""});return r.style={...s,"--svg":eo(y),width:Xe(c.width),height:Xe(c.height),...no,...p?ye:bt,...a},Ce("span",r)};lt(!0);Sn("",Fn);if(typeof document<"u"&&typeof window<"u"){yt();const e=window;if(e.IconifyPreload!==void 0){const n=e.IconifyPreload,t="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!hn(r))&&console.error(t)}catch{console.error(t)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let t in n){const r="IconifyProviders["+t+"] is invalid.";try{const o=n[t];if(typeof o!="object"||!o||o.resources===void 0)continue;kn(t,o)||console.error(r)}catch{console.error(r)}}}}const oo={...se,body:""},G=jt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,n){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let t;if(typeof e!="string"||(t=re(e,!1,!0))===null)return this.abortLoading(),null;const r=fn(t);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:e,abort:Wn([t],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,n&&n(e));const o=["iconify"];return t.prefix!==""&&o.push("iconify--"+t.prefix),t.provider!==""&&o.push("iconify--"+t.provider),{data:r,classes:o}}},render(){this.counter;const e=this.$attrs,n=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!n)return Ze(oo,e);let t=e;return n.classes&&(t={...e,class:(typeof e.class=="string"?e.class+" ":"")+n.classes.join(" ")}),Ze({...se,...n.data},t)}});const ro={key:0,style:{margin:"20px",color:"orange",cursor:"default"}},so=E("h1",{style:{"text-shadow":"0.1em 0.1em 0.2em rgb(23, 22, 22)",cursor:"default"},class:"title-name"},"找。漢堡 ",-1),io={key:2,style:{cursor:"default"}},ao=E("div",{style:{"font-family":"'Courier New', Courier, monospace","font-size":"24px","font-weight":"1000"}}," Follow us ",-1),lo={class:"pt-0"},co=E("strong",null,"©製作人:許宏安",-1),go={__name:"FrontLayout",setup(e){const n=Bt(),t=Nt(),r=Ot(),{isLogin:o,isAdmin:s}=Et(r),{mobile:i}=Lt(),a=S(()=>i.value),l=ne(!1),c=ne([]);(async()=>{try{const{data:y}=await Ve.get("/users/me");c.value=y.result}catch(y){n({text:y.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"red",location:"bottom"}})}})();const u=S(()=>[{to:"/local",text:"店面資訊",icon:"mdi-map",show:!0},{to:"/login",text:"登入/註冊",icon:"mdi-login",show:!o.value},{to:"/cart",text:"購物車",icon:"mdi-cart",show:o.value},{to:"/orders",text:"訂單紀錄",icon:"mdi-format-list-numbered",show:o.value},{to:"/admin",text:"管理",icon:"mdi-cog",show:o.value&&s.value}]),d=()=>{t.push("/")},h=async()=>{try{await Ve.delete("/users/logout"),r.logout(),n({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(y){n({text:y.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},p=[{icon:"mdi-facebook",href:"https://www.facebook.com/foundburger/photos?locale=zh_TW",color:"blue"},{icon:"mdi-instagram",href:"https://www.instagram.com/foundburger/",color:"black"},{icon:"fa6-brands:line",href:"https://liff.line.me/1645278921-kWRPP32q/?accountId=064thabc",color:"green"}];return(y,g)=>{const m=Rt("RouterView");return k(),C(O,null,[a.value?(k(),j(Xt,{key:0,modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=f=>l.value=f),location:"right",temporary:"temporary"},{default:I(()=>[V(o)?(k(),C("div",ro,[v(V(G),{variant:"text",icon:"mdi-account"}),B(" 您好，"+H(c.value.firstname+c.value.lastname),1)])):T("",!0),v(Ht,{thickness:3,class:"border-opacity-50",color:"warning"}),v(zt,{nav:"nav",style:{margin:"20px"}},{default:I(()=>[(k(!0),C(O,null,ce(u.value,f=>(k(),C(O,{key:f.to},[f.show?(k(),j(Me,{key:0,to:f.to},{default:I(()=>[v(V(G),{icon:f.icon},null,8,["icon"]),B(" "+H(f.text)+" ",1)]),_:2},1032,["to"])):T("",!0)],64))),128)),V(o)?(k(),j(Me,{key:0,onClick:h},{default:I(()=>[v(Ut,{icon:"mdi-logout"}),B("登出 ")]),_:1})):T("",!0)]),_:1})]),_:1},8,["modelValue"])):T("",!0),v(_t,{color:"#f90",style:{"box-shadow":"2px 2px 2px 1px rgba(0, 0, 0, 0.4)"}},{default:I(()=>[v(Qt,{class:"d-flex align-center"},{default:I(()=>[E("div",{class:"d-flex align-center",onClick:d},[v(et,{src:on,"aspect-ratio":"1",cover:"","min-width":"64px"}),so]),v(Dt),a.value?(k(),j(en,{key:0,onClick:g[1]||(g[1]=f=>l.value=!0),color:"white"})):T("",!0),a.value?T("",!0):(k(!0),C(O,{key:1},ce(u.value,f=>(k(),C(O,{key:f.to},[f.show?(k(),j(_,{key:0,variant:"text","prepend-icon":f.icon,to:f.to,color:"white",style:{"box-shadow":"2px 2px 2px 1px rgba(0, 0, 0, 0.4)",left:"-2%"}},{default:I(()=>[B(H(f.text),1)]),_:2},1032,["prepend-icon","to"])):T("",!0)],64))),128)),V(o)&&!a.value?(k(),C("div",io,[v(V(G),{variant:"text",icon:"mdi-account",style:{"font-size":"25px",margin:"-6px"}}),B("   您好，"+H(c.value.firstname+c.value.lastname),1)])):T("",!0)]),_:1}),!a.value&&V(o)?(k(),j(_,{key:0,variant:"text","prepend-icon":"mdi-logout",onClick:h},{default:I(()=>[B("登出")]),_:1})):T("",!0)]),_:1}),v(Zt,{style:{background:"black"}},{default:I(()=>[(k(),j(m,{key:y.$route.path}))]),_:1}),v(nn,{class:"text-center d-flex flex-column",style:{flex:"0 1 auto"}},{default:I(()=>[ao,E("div",null,[(k(),C(O,null,ce(p,f=>v(_,{key:f.icon,class:"mx-4",icon:f.icon,variant:"text",href:f.href,target:"_blank"},{default:I(()=>[v(V(G),{variant:"text",icon:f.icon,color:f.color},null,8,["icon","color"])]),_:2},1032,["icon","href"])),64))]),E("div",lo,[B(H(new Date().getFullYear())+" — ",1),co])]),_:1})],64)}}};export{go as default};