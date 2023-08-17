import{Y as w,Z as V,ay as B,x as q,o as y,a8 as h,a1 as u,a3 as N,a4 as r,c as s,aD as S,ab as t,a2 as _,a9 as P,a7 as $,a5 as z,ag as c,K as d,ad as b,aE as D,V as E}from"./index-683e0e9e.js";import{V as I}from"./VContainer-29d54f78.js";import{a as m,V as R}from"./VRow-bd568dee.js";const T=t("h1",null,"購物車",-1),A=t("thead",{style:{background:"orange","font-size":"24px","text-shadow":"0.1em 0.1em 0.2em rgb(100, 100, 100)"}},[t("tr",null,[t("th",null,"圖片"),t("th",null,"名稱"),t("th",null,"價格"),t("th",null,"數量"),t("th",null,"總金額"),t("th",null,"移除"),t("th",null,"備註")])],-1),F=t("td",null,[t("p")],-1),K={key:0},L=t("td",{colspan:"6",class:"text-center"},"快來選購美食吧!",-1),U=[L],Y={style:{color:"white"}},Z=t("p",null," ",-1),M={__name:"CartView",setup(j){const i=w(),x=V(),g=B(),o=q([]),p=async(a,l)=>{try{const{data:e}=await h.post("/users/cart",{product:a,quantity:l}),n=o.value.findIndex(C=>C.product._id===a);o.value[n].quantity+=l,o.value[n].quantity<=0&&o.value.splice(n,1),x.cart=e.result}catch(e){i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},k=y(()=>o.value.reduce((a,l)=>a+l.quantity*l.product.price,0)),f=y(()=>o.value.length>0&&!o.value.some(a=>!a.product.sell)),v=async(a,l)=>{try{await h.post("/orders"),x.cart=0,g.push("/orders")}catch(e){console.log(e),i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(async()=>{try{const{data:a}=await h.get("/users/cart");o.value.push(...a.result)}catch(a){i({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,l)=>(u(),N(I,null,{default:r(()=>[s(R,null,{default:r(()=>[s(m,{cols:"12"},{default:r(()=>[T]),_:1}),s(m,{cols:"12",style:{"box-shadow":"2px 2px 2px 4px rgba(255, 255, 255, 0.7)",background:"white"}},{default:r(()=>[s(S,null,{default:r(()=>[A,t("tbody",null,[(u(!0),_($,null,P(o.value,e=>(u(),_("tr",{key:e._id,class:D({"bg-red-lighten-5":!e.product.sell})},[t("td",null,[s(E,{src:e.product.image,cover:"",width:"200","aspect-ratio":"1"},null,8,["src"])]),t("td",null,c(e.product.name),1),t("td",null,c(e.product.price),1),t("td",null,[s(d,{color:"primary",variant:"text",icon:"mdi-minus",onClick:n=>p(e.product._id,-1)},null,8,["onClick"]),b(" "+c(e.quantity)+" ",1),s(d,{color:"primary",variant:"text",icon:"mdi-plus",onClick:n=>p(e.product._id,1)},null,8,["onClick"])]),t("td",null,c(e.quantity*e.product.price),1),t("td",null,[s(d,{color:"red",variant:"text",icon:"mdi-delete",onClick:n=>p(e.product._id,e.quantity*-1)},null,8,["onClick"])]),F],2))),128)),o.value.length===0?(u(),_("tr",K,U)):z("",!0)])]),_:1})]),_:1}),s(m,{cols:"12",class:"text-center"},{default:r(()=>[t("p",Y,"總金額: "+c(k.value)+"元",1),Z,s(d,{color:"orange",onClick:v,disabled:!f.value},{default:r(()=>[b("結帳")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{M as default};