import{$ as f,x,aj as b,a4 as l,a6 as g,a7 as o,c as u,aE as k,ad as t,a5 as c,aa as p,a9 as _,ai as s}from"./index-f6e31abf.js";import{V as y}from"./VContainer-ce4e7f04.js";import{V as h,a as w}from"./VRow-36f85e00.js";const V=t("h1",null,"訂單",-1),B=t("thead",{style:{background:"orange","font-size":"24px","text-shadow":"0.1em 0.1em 0.2em rgb(100, 100, 100)"}},[t("tr",null,[t("th",null,"訂單編號"),t("th",null,"下單日期時間"),t("th",null,"總金額"),t("th",null,"購買商品"),t("th",null,"備註")])],-1),D={__name:"OrdersView",setup(C){const m=f(),i=x([]);return(async()=>{try{const{data:e}=await b.get("/orders");console.log(e),i.value.push(...e.result.map(n=>(n.total=n.cart.reduce((a,r)=>a+r.product.price*r.quantity,0),n)))}catch(e){m({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(e,n)=>(l(),g(y,null,{default:o(()=>[u(w,null,{default:o(()=>[u(h,{cols:"12"},{default:o(()=>[V]),_:1}),u(h,{cols:"12",style:{"box-shadow":"2px 2px 2px 4px rgba(255, 255, 255, 0.7)",background:"white"}},{default:o(()=>[u(k,null,{default:o(()=>[B,t("tbody",null,[(l(!0),c(_,null,p(i.value,(a,r)=>(l(),c("tr",{key:a._id},[t("td",null,s(r+1),1),t("td",null,s(new Date(a.date).toLocaleString()),1),t("td",null,s(a.total),1),t("td",null,[t("ul",null,[(l(!0),c(_,null,p(a.cart,d=>(l(),c("li",{key:d._id},s(d.product.name)+" * "+s(d.quantity),1))),128))])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{D as default};