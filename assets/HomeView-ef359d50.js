import{$ as Z,a0 as le,x as I,a4 as S,a6 as ee,a7 as n,c as a,ak as K,V as R,al as oe,am as J,af as P,ai as k,an as ue,ao as Q,K as W,ap as de,ad as D,aq as fe,ar as pe,ah as ce,aj as me,as as O,at as te,au as ye,av as ge,a5 as B,a9 as F,ab as X,aa as Y,aw as we,ax as he,ay as ve,az as be}from"./index-f6e31abf.js";import{V as _,a as V}from"./VRow-36f85e00.js";import{V as N}from"./VContainer-ce4e7f04.js";import{V as Te}from"./VForm-a88f63cc.js";const xe={style:{margin:"0 auto","font-size":"30px"}},Ee={style:{color:"darkred"}},Se={__name:"ProductCard",props:{_id:{type:String,default:()=>""},category:{type:String,default:()=>""},description:{type:String,default:()=>""},image:{type:String,default:()=>""},name:{type:String,default:()=>""},price:{type:Number,default:()=>0},sell:{type:Boolean,default:()=>!0}},setup(c){const e=c,t=Z(),u=le(),o=I(1),d=I(!1),p=async()=>{try{const{data:s}=await me.post("/users/cart",{product:e._id,quantity:o.value});u.cart=s.result,t({text:"成功加入購物車，右上方確認",showCloseButton:!1,snackbarProps:{timeout:4e3,color:"orange",location:"bottom"}}),d.value=!1}catch(s){t({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(s,r)=>(S(),ee(V,{style:{margin:"0"}},{default:n(()=>[a(_,{cols:"12",sm:"6",md:"4"},{default:n(()=>[a(K,{height:"400",width:"300",style:{margin:"auto","box-shadow":"2px 2px 2px 4px rgba(199, 186, 186, 0.883)"}},{default:n(()=>[a(R,{src:c.image,height:"220",cover:""},null,8,["src"]),a(oe,null,{default:n(()=>[a(J,{style:{"font-size":"24px","font-weight":"bolder"}},{default:n(()=>[P(k(c.name),1)]),_:1})]),_:1}),a(ue,{style:{padding:"20px","font-size":"20px","font-family":"Georgia, 'Times New Roman', Times, serif","font-weight":"1000"}},{default:n(()=>[P(" $"+k(c.price),1)]),_:1}),a(Q,null,{default:n(()=>[a(V,{justify:"center"},{default:n(()=>[a(W,{color:"white",onClick:r[0]||(r[0]=i=>d.value=!0),style:{margin:"auto",background:"orange","font-size":"large","font-weight":"1000","box-shadow":"2px 2px 2px 1px rgba(0, 0, 0, 0.4)"}},{default:n(()=>[P(" 加入購物車 ")]),_:1})]),_:1})]),_:1})]),_:1}),a(de,{modelValue:d.value,"onUpdate:modelValue":r[2]||(r[2]=i=>d.value=i),width:"786"},{default:n(()=>[a(K,null,{default:n(()=>[a(J,null,{default:n(()=>[a(N,null,{default:n(()=>[a(V,null,{default:n(()=>[a(_,{cols:"12",sm:"6",md:"4"},{default:n(()=>[a(R,{src:c.image},null,8,["src"])]),_:1}),D("div",xe,k(c.name),1)]),_:1}),a(_,null,{default:n(()=>[a(Te,{disabled:s.isSubmitting,onSubmit:fe(p,["prevent"])},{default:n(()=>[a(pe,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=i=>o.value=i),modelModifiers:{number:!0},type:"number",label:"數量",min:"0"},null,8,["modelValue"]),D("p",Ee,"總金額:$"+k(c.price*o.value),1)]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),a(Q,{style:{margin:"auto"}},{default:n(()=>[a(ce),a(W,{variant:"text",onClick:p,color:"white",style:{margin:"auto",background:"orange","font-size":"large","font-weight":"1000","box-shadow":"2px 2px 2px 2px  rgba(0, 0, 0, 0.883)"}},{default:n(()=>[P(" 加入購物車 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};function _e(c){let{swiper:e,extendParams:t,on:u,emit:o,params:d}=c;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,s,r=d&&d.autoplay?d.autoplay.delay:3e3,i=d&&d.autoplay?d.autoplay.delay:3e3,f,m=new Date().getTime,g,b,h,$,M,v;function A(l){!e||e.destroyed||!e.wrapperEl||l.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",A),T())}const U=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?g=!0:g&&(i=f,g=!1);const l=e.autoplay.paused?f:m+i-new Date().getTime();e.autoplay.timeLeft=l,o("autoplayTimeLeft",l,l/r),s=requestAnimationFrame(()=>{U()})},ae=()=>{let l;return e.virtual&&e.params.virtual.enabled?l=e.slides.filter(y=>y.classList.contains("swiper-slide-active"))[0]:l=e.slides[e.activeIndex],l?parseInt(l.getAttribute("data-swiper-autoplay"),10):void 0},L=l=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(s),U();let w=typeof l>"u"?e.params.autoplay.delay:l;r=e.params.autoplay.delay,i=e.params.autoplay.delay;const y=ae();!Number.isNaN(y)&&y>0&&typeof l>"u"&&(w=y,r=y,i=y),f=w;const E=e.params.speed,G=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(E,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,E,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(E,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,E,!0,!0),o("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{L()})))};return w>0?(clearTimeout(p),p=setTimeout(()=>{G()},w)):requestAnimationFrame(()=>{G()}),w},q=()=>{e.autoplay.running=!0,L(),o("autoplayStart")},C=()=>{e.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(s),o("autoplayStop")},x=(l,w)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(p),l||(v=!0);const y=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",A):T()};if(e.autoplay.paused=!0,w){M&&(f=e.params.autoplay.delay),M=!1,y();return}f=(f||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&f<0&&!e.params.loop)&&(f<0&&(f=0),y())},T=()=>{e.isEnd&&f<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),v?(v=!1,L(f)):L(),e.autoplay.paused=!1,o("autoplayResume"))},z=()=>{if(e.destroyed||!e.autoplay.running)return;const l=O();l.visibilityState==="hidden"&&(v=!0,x(!0)),l.visibilityState==="visible"&&T()},j=l=>{l.pointerType==="mouse"&&(v=!0,x(!0))},H=l=>{l.pointerType==="mouse"&&e.autoplay.paused&&T()},se=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",j),e.el.addEventListener("pointerleave",H))},re=()=>{e.el.removeEventListener("pointerenter",j),e.el.removeEventListener("pointerleave",H)},ne=()=>{O().addEventListener("visibilitychange",z)},ie=()=>{O().removeEventListener("visibilitychange",z)};u("init",()=>{e.params.autoplay.enabled&&(se(),ne(),m=new Date().getTime(),q())}),u("destroy",()=>{re(),ie(),e.autoplay.running&&C()}),u("beforeTransitionStart",(l,w,y)=>{e.destroyed||!e.autoplay.running||(y||!e.params.autoplay.disableOnInteraction?x(!0,!0):C())}),u("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}b=!0,h=!1,v=!1,$=setTimeout(()=>{v=!0,h=!0,x(!0)},200)}}),u("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!b)){if(clearTimeout($),clearTimeout(p),e.params.autoplay.disableOnInteraction){h=!1,b=!1;return}h&&e.params.cssMode&&T(),h=!1,b=!1}}),u("slideChange",()=>{e.destroyed||!e.autoplay.running||(M=!0)}),Object.assign(e.autoplay,{start:q,stop:C,pause:x,resume:T})}function Ve(c){const{effect:e,swiper:t,on:u,setTranslate:o,setTransition:d,overwriteParams:p,perspective:s,recreateShadows:r,getEffectParams:i}=c;u("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),s&&s()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const m=p?p():{};Object.assign(t.params,m),Object.assign(t.originalParams,m)}),u("setTranslate",()=>{t.params.effect===e&&o()}),u("setTransition",(m,g)=>{t.params.effect===e&&d(g)}),u("transitionEnd",()=>{if(t.params.effect===e&&r){if(!i||!i().slideShadows)return;t.slides.forEach(m=>{m.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(g=>g.remove())}),r()}});let f;u("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(f=!0),requestAnimationFrame(()=>{f&&t.slides&&t.slides.length&&(o(),f=!1)}))})}function Le(c,e){const t=te(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Ce(c){let{swiper:e,duration:t,transformElements:u,allSlides:o}=c;const{activeIndex:d}=e,p=s=>s.parentElement?s.parentElement:e.slides.filter(i=>i.shadowRoot&&i.shadowRoot===s.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let s=!1,r;o?r=u:r=u.filter(i=>{const f=i.classList.contains("swiper-slide-transform")?p(i):i;return e.getSlideIndex(f)===d}),r.forEach(i=>{ye(i,()=>{if(s||!e||e.destroyed)return;s=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function Pe(c){let{swiper:e,extendParams:t,on:u}=c;t({fadeEffect:{crossFade:!1}}),Ve({effect:"fade",swiper:e,on:u,setTranslate:()=>{const{slides:p}=e,s=e.params.fadeEffect;for(let r=0;r<p.length;r+=1){const i=e.slides[r];let m=-i.swiperSlideOffset;e.params.virtualTranslate||(m-=e.translate);let g=0;e.isHorizontal()||(g=m,m=0);const b=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i.progress),0):1+Math.min(Math.max(i.progress,-1),0),h=Le(s,i);h.style.opacity=b,h.style.transform=`translate3d(${m}px, ${g}px, 0px)`}},setTransition:p=>{const s=e.slides.map(r=>te(r));s.forEach(r=>{r.style.transitionDuration=`${p}ms`}),Ce({swiper:e,duration:p,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const ke=D("div",{style:{"text-align":"center"}},[D("h1",{style:{color:"white"}},"餐點")],-1),Fe={__name:"HomeView",setup(c){const e=Z(),t=I([]);(async()=>{try{const{data:d}=await ge.get("/products");t.value.push(...d.result)}catch(d){e({text:d.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})();const u=[Pe,_e],o=[{src:new URL(""+new URL("圖1-7d7aada8.jpg",import.meta.url).href,self.location).href},{src:new URL(""+new URL("222-3a208e17.png",import.meta.url).href,self.location).href},{src:new URL(""+new URL("111-2f015f6f.png",import.meta.url).href,self.location).href}];return(d,p)=>(S(),B(F,null,[a(N,null,{default:n(()=>[a(V,null,{default:n(()=>[a(X(we),{direction:"horizontal",spaceBetween:0,effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!1},class:"mySwiper",modules:u},{default:n(()=>[(S(),B(F,null,Y(o,(s,r)=>a(X(he),{class:"swiper-custom-slide",key:r},{default:n(()=>[a(R,{src:s.src,class:"slide-content"},null,8,["src"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),a(N,null,{default:n(()=>[a(V,{style:{width:"100%",margin:"auto"}},{default:n(()=>[a(_,{cols:"12"},{default:n(()=>[ke]),_:1}),(S(!0),B(F,null,Y(t.value,s=>(S(),ee(_,{cols:"12",md:"6",lg:"4",xl:"3",sm:"",key:s._id},{default:n(()=>[a(Se,ve(be(s)),null,16)]),_:2},1024))),128))]),_:1})]),_:1})],64))}};export{Fe as default};
