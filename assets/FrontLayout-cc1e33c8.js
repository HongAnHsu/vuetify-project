import{p as w,m as z,a as X,g as L,u as R,c as a,b as oe,d as le,e as Q,f as W,h as Z,t as A,i as ne,j as se,k as ee,l as re,n as ie,s as T,o as g,q as ue,V as te,r as M,v as I,w as ce,x as q,y as de,z as E,A as ve,B as me,C as ge,D as fe,E as be,F as he,G as ye,H as U,I as xe,J as Ve,K as H,L as Se,M as ke,N as Be,O as _e,P as Te,Q as we,R as pe,S as Ce,T as Ne,U as Pe,W as Ae,X as Y,Y as Le,Z as Re,_ as Ie,$ as Ee,a0 as $e,a1 as b,a2 as N,a3 as S,a4 as x,a5 as k,a6 as F,a7 as P,a8 as He,a9 as O,aa as j,ab as D,ac as G,ad as $,ae as De,af as Ue,ag as J}from"./index-a9ded177.js";import{V as Me,a as Fe}from"./VNavigationDrawer-3e640ade.js";import{V as Ye}from"./VContainer-a4d0d41a.js";const ze=w({text:String,...z(),...X()},"VToolbarTitle"),Xe=L()({name:"VToolbarTitle",props:ze(),setup(e,c){let{slots:t}=c;return R(()=>{const i=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[i&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),qe=[null,"prominent","default","comfortable","compact"],ae=w({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>qe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...z(),...le(),...Q(),...X({tag:"header"}),...W()},"VToolbar"),K=L()({name:"VToolbar",props:ae(),setup(e,c){var u;let{slots:t}=c;const{backgroundColorClasses:i,backgroundColorStyles:s}=Z(A(e,"color")),{borderClasses:l}=ne(e),{elevationClasses:h}=se(e),{roundedClasses:v}=ee(e),{themeClasses:f}=re(e),{rtlClasses:y}=ie(),n=T(!!(e.extended||(u=t.extension)!=null&&u.call(t))),m=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=g(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ue({VBtn:{variant:"text"}}),R(()=>{var r;const o=!!(e.title||t.title),V=!!(t.image||e.image),B=(r=t.extension)==null?void 0:r.call(t);return n.value=!!(e.extended||B),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,l.value,h.value,v.value,f.value,y.value,e.class],style:[s.value,e.style]},{default:()=>[V&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(M,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(te,{key:"image-img",cover:!0,src:e.image},null)]),a(M,{defaults:{VTabs:{height:I(m.value)}}},{default:()=>{var _,p,C;return[a("div",{class:"v-toolbar__content",style:{height:I(m.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(_=t.prepend)==null?void 0:_.call(t)]),o&&a(Xe,{key:"title",text:e.title},{text:t.title}),(p=t.default)==null?void 0:p.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(C=t.append)==null?void 0:C.call(t)])])]}}),a(M,{defaults:{VTabs:{height:I(d.value)}}},{default:()=>[a(ce,null,{default:()=>[n.value&&a("div",{class:"v-toolbar__extension",style:{height:I(d.value)}},[B])]})]})]})}),{contentHeight:m,extensionHeight:d}}}),Oe=w({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function je(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=c;let i=0;const s=q(null),l=T(0),h=T(0),v=T(0),f=T(!1),y=T(!1),n=g(()=>Number(e.scrollThreshold)),m=g(()=>de((n.value-l.value)/n.value||0)),d=()=>{const u=s.value;!u||t&&!t.value||(i=l.value,l.value="window"in u?u.pageYOffset:u.scrollTop,y.value=l.value<i,v.value=Math.abs(l.value-n.value))};return E(y,()=>{h.value=h.value||l.value}),E(f,()=>{h.value=0}),ve(()=>{E(()=>e.scrollTarget,u=>{var V;const o=u?document.querySelector(u):window;o&&o!==s.value&&((V=s.value)==null||V.removeEventListener("scroll",d),s.value=o,s.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),me(()=>{var u;(u=s.value)==null||u.removeEventListener("scroll",d)}),t&&E(t,d,{immediate:!0}),{scrollThreshold:n,currentScroll:l,currentThreshold:v,isScrollActive:f,scrollRatio:m,isScrollingUp:y,savedScroll:h}}const Ge=w({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ae(),...ge(),...Oe(),height:{type:[Number,String],default:64}},"VAppBar"),Je=L()({name:"VAppBar",props:Ge(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:t}=c;const i=q(),s=fe(e,"modelValue"),l=g(()=>{var _;const r=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:r.has("hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),h=g(()=>{const r=l.value;return r.hide||r.inverted||r.collapse||r.elevate||r.fadeImage||!s.value}),{currentScroll:v,scrollThreshold:f,isScrollingUp:y,scrollRatio:n}=je(e,{canScroll:h}),m=g(()=>e.collapse||l.value.collapse&&(l.value.inverted?n.value>0:n.value===0)),d=g(()=>e.flat||l.value.elevate&&(l.value.inverted?v.value>0:v.value===0)),u=g(()=>l.value.fadeImage?l.value.inverted?1-n.value:n.value:void 0),o=g(()=>{var p,C;if(l.value.hide&&l.value.inverted)return 0;const r=((p=i.value)==null?void 0:p.contentHeight)??0,_=((C=i.value)==null?void 0:C.extensionHeight)??0;return r+_});be(g(()=>!!e.scrollBehavior),()=>{xe(()=>{l.value.hide?l.value.inverted?s.value=v.value>f.value:s.value=y.value||v.value<f.value:s.value=!0})});const{ssrBootStyles:V}=he(),{layoutItemStyles:B}=ye({id:e.name,order:g(()=>parseInt(e.order,10)),position:A(e,"location"),layoutSize:o,elementSize:T(void 0),active:s,absolute:A(e,"absolute")});return R(()=>{const[r]=K.filterProps(e);return a(K,U({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":u.value,height:void 0,...V.value},e.style]},r,{collapse:m.value,flat:d.value}),t)}),{}}}),Ke=w({...Ve({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Qe=L()({name:"VAppBarNavIcon",props:Ke(),setup(e,c){let{slots:t}=c;return R(()=>a(H,U(e,{class:["v-app-bar-nav-icon"]}),t)),{}}});const We=w({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Se,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...z(),...ke({location:"top end"}),...Q(),...X(),...W(),...Be({transition:"scale-rotate-transition"})},"VBadge"),Ze=L()({name:"VBadge",inheritAttrs:!1,props:We(),setup(e,c){const{backgroundColorClasses:t,backgroundColorStyles:i}=Z(A(e,"color")),{roundedClasses:s}=ee(e),{t:l}=_e(),{textColorClasses:h,textColorStyles:v}=Te(A(e,"textColor")),{themeClasses:f}=we(),{locationStyles:y}=pe(e,!0,n=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(n)?+(e.offsetY??0):["left","right"].includes(n)?+(e.offsetX??0):0));return R(()=>{const n=Number(e.content),m=!e.max||isNaN(n)?e.content:n<=+e.max?n:`${e.max}+`,[d,u]=Ce(c.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,U({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},u,{style:e.style}),{default:()=>{var o,V;return[a("div",{class:"v-badge__wrapper"},[(V=(o=c.slots).default)==null?void 0:V.call(o),a(Ne,{transition:e.transition},{default:()=>{var B,r;return[Pe(a("span",U({class:["v-badge__badge",f.value,t.value,s.value,h.value],style:[i.value,v.value,e.inline?{}:y.value],"aria-atomic":"true","aria-label":l(e.label,n),"aria-live":"polite",role:"status"},d),[e.dot?void 0:c.slots.badge?(r=(B=c.slots).badge)==null?void 0:r.call(B):e.icon?a(Y,{icon:e.icon},null):m]),[[Ae,e.modelValue]])]}})])]}})}),{}}}),et=""+new URL("123-d40fd239.png",import.meta.url).href,tt={prepend:"#prepend"},at={append:"#append"},ot={prepend:"#prepend"},lt=D("h1",{style:{"text-shadow":"0.1em 0.1em 0.2em rgb(23, 22, 22)"}},"找。漢堡 FoundBurger",-1),it={__name:"FrontLayout",setup(e){const c=Le(),t=Re(),{isLogin:i,isAdmin:s,cart:l}=Ie(t),{mobile:h}=Ee(),v=g(()=>h.value),f=q(!1),y=g(()=>[{to:"/local",text:"店面資訊",icon:"mdi-map",show:!0},{to:"/login",text:"登入/註冊",icon:"mdi-login",show:!i.value},{to:"/cart",text:"購物車",icon:"mdi-cart",show:i.value},{to:"/orders",text:"訂單紀錄",icon:"mdi-format-list-numbered",show:i.value},{to:"/admin",text:"管理",icon:"mdi-cog",show:i.value&&s.value}]),n=async()=>{try{await He.delete("/users/logout"),t.logout(),c({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(m){c({text:m.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(m,d)=>{const u=$e("RouterView");return b(),N(P,null,[v.value?(b(),S(Me,{key:0,modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=o=>f.value=o),location:"right",temporary:"temporary"},{default:x(()=>[a(De,{nav:"nav"},{default:x(()=>[(b(!0),N(P,null,O(y.value,o=>(b(),N(P,{key:o.to},[o.show?(b(),S(j,{key:0,to:o.to},{default:x(()=>[D("template",tt,[a(Y,{icon:o.icon},null,8,["icon"])]),D("template",at,[o.to==="/cart"?(b(),S(Ze,{key:0,color:"success",content:F(l).toString()},null,8,["content"])):k("",!0)]),a(G,null,{default:x(()=>[$(J(o.text),1)]),_:2},1024)]),_:2},1032,["to"])):k("",!0)],64))),128)),F(i)?(b(),S(j,{key:0,onClick:n,style:{color:"white"}},{default:x(()=>[D("template",ot,[a(Y,{icon:"mdi-logout"})]),a(G,null,{default:x(()=>[$("登出")]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1},8,["modelValue"])):k("",!0),a(Je,{color:"#f90",style:{"box-shadow":"2px 2px 2px 1px rgba(0, 0, 0, 0.4)"}},{default:x(()=>[a(Ye,{class:"d-flex align-center"},{default:x(()=>[a(H,{to:"/",active:!1},{default:x(()=>[a(te,{src:et}),lt]),_:1}),a(Ue),v.value?(b(),S(Qe,{key:0,onClick:d[1]||(d[1]=o=>f.value=!0),color:"white"})):k("",!0),v.value?k("",!0):(b(!0),N(P,{key:1},O(y.value,o=>(b(),N(P,{key:o.to},[o.show?(b(),S(H,{key:0,variant:"text","prepend-icon":o.icon,to:o.to,color:"white",style:{"box-shadow":"2px 2px 2px 1px rgba(0, 0, 0, 0.4)",left:"-2%"}},{default:x(()=>[$(J(o.text),1)]),_:2},1032,["prepend-icon","to"])):k("",!0)],64))),128))]),_:1})]),_:1}),!v.value&&F(i)?(b(),S(H,{key:1,variant:"text","prepend-icon":"mdi-logout",onClick:n,color:"white"},{default:x(()=>[$("登出")]),_:1})):k("",!0),a(Fe,{style:{background:"black"}},{default:x(()=>[(b(),S(u,{key:m.$route.path}))]),_:1})],64)}}};export{it as default};