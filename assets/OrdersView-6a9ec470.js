import{O as x,x as b,T as f,W as l,Y as g,Z as s,c as u,as as y,a8 as t,X as c,a4 as p,$ as h,a2 as o}from"./index-46bf2304.js";import{V as w}from"./VContainer-f80d1fb1.js";import{V as _,a as k}from"./VRow-88e86a4d.js";const V=t("h1",{style:{color:"white","text-shadow":"1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}},"訂單歷史",-1),B=t("thead",{style:{background:"orange","font-size":"24px","text-shadow":"0.1em 0.1em 0.2em rgb(100, 100, 100)"}},[t("tr",null,[t("th",{style:{"text-align":"center"}},"訂單編號"),t("th",null,"下單日期時間"),t("th",null,"總金額"),t("th",null,"購買商品"),t("th",null,"備註")])],-1),C={style:{"text-align":"center"}},L={__name:"OrdersView",setup(S){const m=x(),i=b([]);return(async()=>{try{const{data:a}=await f.get("/orders");console.log(a),i.value.push(...a.result.map(n=>(n.total=n.cart.reduce((e,r)=>e+r.product.price*r.quantity,0),n)))}catch(a){m({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,n)=>(l(),g(w,null,{default:s(()=>[u(k,null,{default:s(()=>[u(_,{cols:"12"},{default:s(()=>[V]),_:1}),u(_,{cols:"12",style:{"box-shadow":"2px 2px 2px 4px rgba(255, 255, 255, 0.5)",background:"white"}},{default:s(()=>[u(y,null,{default:s(()=>[B,t("tbody",null,[(l(!0),c(h,null,p(i.value,(e,r)=>(l(),c("tr",{key:e._id},[t("td",C,o(r+1),1),t("td",null,o(new Date(e.date).toLocaleString()),1),t("td",null,o(e.total)+"元",1),t("td",null,[t("ul",null,[(l(!0),c(h,null,p(e.cart,d=>(l(),c("li",{key:d._id},o(d.product.name)+" * "+o(d.quantity),1))),128))])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{L as default};