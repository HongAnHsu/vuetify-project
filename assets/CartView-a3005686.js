import{$ as w,a0 as V,aA as B,x as q,o as f,aj as h,a4 as u,a6 as N,a7 as r,c as s,aE as S,ad as t,a5 as _,aa as $,a9 as P,a8 as z,ai as c,K as d,af as k,aF as A,V as E}from"./index-f6e31abf.js";import{V as F}from"./VContainer-ce4e7f04.js";import{V as m,a as I}from"./VRow-36f85e00.js";const R=t("h1",null,"購物車",-1),T=t("thead",{style:{background:"orange","font-size":"24px","text-shadow":"0.1em 0.1em 0.2em rgb(100, 100, 100)"}},[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",null,"價格"),t("th",null,"數量"),t("th",null,"總金額"),t("th",null,"移除"),t("th",null,"備註")])],-1),j=t("td",null,[t("p")],-1),D={key:0},K=t("td",{colspan:"6",class:"text-center"},"快來選購美食吧!",-1),L=[K],U={style:{color:"white"}},G=t("p",null," ",-1),Q={__name:"CartView",setup(H){const i=w(),x=V(),y=B(),o=q([]),p=async(a,l)=>{try{const{data:e}=await h.post("/users/cart",{product:a,quantity:l}),n=o.value.findIndex(C=>C.product._id===a);o.value[n].quantity+=l,o.value[n].quantity<=0&&o.value.splice(n,1),x.cart=e.result}catch(e){i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},b=f(()=>o.value.reduce((a,l)=>a+l.quantity*l.product.price,0)),g=f(()=>o.value.length>0&&!o.value.some(a=>!a.product.sell)),v=async(a,l)=>{try{await h.post("/orders"),x.cart=0,y.push("/orders")}catch(e){console.log(e),i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:a}=await h.get("/users/cart");o.value.push(...a.result)}catch(a){i({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,l)=>(u(),N(F,null,{default:r(()=>[s(I,null,{default:r(()=>[s(m,{cols:"12"},{default:r(()=>[R]),_:1}),s(m,{cols:"12",style:{"box-shadow":"2px 2px 2px 4px rgba(255, 255, 255, 0.7)",background:"white"}},{default:r(()=>[s(S,null,{default:r(()=>[T,t("tbody",null,[(u(!0),_(P,null,$(o.value,e=>(u(),_("tr",{key:e._id,class:A({"bg-red-lighten-5":!e.product.sell})},[t("td",null,[s(E,{src:e.product.image,cover:"",width:"200","aspect-ratio":"1"},null,8,["src"])]),t("td",null,c(e.product.name),1),t("td",null,c(e.product.price),1),t("td",null,[s(d,{color:"primary",variant:"text",icon:"mdi-minus",onClick:n=>p(e.product._id,-1)},null,8,["onClick"]),k(" "+c(e.quantity)+" ",1),s(d,{color:"primary",variant:"text",icon:"mdi-plus",onClick:n=>p(e.product._id,1)},null,8,["onClick"])]),t("td",null,c(e.quantity*e.product.price),1),t("td",null,[s(d,{color:"red",variant:"text",icon:"mdi-delete",onClick:n=>p(e.product._id,e.quantity*-1)},null,8,["onClick"])]),j],2))),128)),o.value.length===0?(u(),_("tr",D,L)):z("",!0)])]),_:1})]),_:1}),s(m,{cols:"12",class:"text-center"},{default:r(()=>[t("p",U,"總金額: "+c(b.value)+"元",1),G,s(d,{color:"orange",onClick:v,disabled:!g.value},{default:r(()=>[k("結帳")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{Q as default};