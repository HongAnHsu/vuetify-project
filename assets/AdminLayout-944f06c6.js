import{a0 as _,a1 as f,a3 as V,a4 as o,a5 as r,c as t,a7 as e,a9 as n,ag as s,ac as i,ab as l,af as b,aB as h,aa as k}from"./index-f6e31abf.js";import{V as g,a as w}from"./VNavigationDrawer-dc2e0aec.js";const N={__name:"AdminLayout",setup(y){const c=_(),{avatar:d,account:u}=f(c),p=[{to:"/admin/products",title:"商品管理",icon:"mdi-shopping"},{to:"/admin/orders",title:"訂單管理",icon:"mdi-format-list-numbered"},{to:"/",title:"回首頁",icon:"mdi-home"}];return(v,x)=>{const m=V("RouterView");return o(),r(n,null,[t(g,{permanent:"",style:{background:"black"},location:"bottom","expand-on-hover":"",rail:""},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{"prepend-avatar":l(d),title:l(u),style:{color:"white"}},{default:e(()=>[b("管理員")]),_:1},8,["prepend-avatar","title"])]),_:1}),t(h),t(s,null,{default:e(()=>[(o(),r(n,null,k(p,a=>t(i,{key:a.to,to:a.to,title:a.title,"prepend-icon":a.icon,style:{color:"white"}},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(w,{style:{background:"black"}},{default:e(()=>[t(m)]),_:1})],64)}}};export{N as default};
