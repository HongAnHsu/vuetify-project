import{Y as S,ay as B,Z as C,as as F,a1 as M,a3 as N,a4 as o,c as a,au as m,a6 as s,az as R,aA as p,ab as t,K as g,ad as h}from"./index-d70bc98e.js";import{c as U,a as b,u as q,d as _,V as P}from"./index.esm-8a9b7a5a.js";import{V as T}from"./VContainer-e94c980a.js";import{a as c,V}from"./VRow-fa889f26.js";import"./_commonjsHelpers-39b5b250.js";const $=t("h1",null," ",-1),z=t("h1",{style:{color:"white"}},"登入",-1),A={class:"text-center"},D=t("h1",null,null,-1),G={__name:"LoginView",setup(K){const i=S(),d=B(),f=C(),w=()=>{d.push("/register")},k=U({account:b().required("帳號必填").min(4,"帳號最少 4 個字").max(20,"帳號最多 20 個字"),password:b().required("密碼必填").min(4,"密碼最少 4 個字").max(20,"密碼最多 20 個字")}),{handleSubmit:v,isSubmitting:x}=q({validationSchema:k}),r=_("account"),l=_("password"),y=v(async n=>{try{const{data:e}=await F.post("/users/login",{account:n.account,password:n.password});f.login({token:e.result.token,account:e.result.account,email:e.result.email,cart:e.result.cart,role:e.result.role}),i({text:"成功登入",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),d.push("/")}catch(e){i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(n,e)=>(M(),N(T,null,{default:o(()=>[a(V,null,{default:o(()=>[a(c,{cols:"12"},{default:o(()=>[$,z]),_:1}),a(m,{thickness:3,class:"border-opacity-100",color:"warning"}),a(c,{cols:"12"},{default:o(()=>[a(P,{disabled:s(x),onSubmit:R(s(y),["prevent"])},{default:o(()=>[a(p,{modelValue:s(r).value.value,"onUpdate:modelValue":e[0]||(e[0]=u=>s(r).value.value=u),"error-messages":s(r).errorMessage.value,label:"帳號",counter:"",maxlength:"20",color:"orange",style:{background:"white"}},null,8,["modelValue","error-messages"]),a(p,{modelValue:s(l).value.value,"onUpdate:modelValue":e[1]||(e[1]=u=>s(l).value.value=u),"error-messages":s(l).errorMessage.value,label:"密碼",counter:"",maxlength:"20",type:"password",color:"orange",style:{background:"white"}},null,8,["modelValue","error-messages"]),t("div",A,[a(V,null,{default:o(()=>[a(c,{cols:"12"},{default:o(()=>[a(g,{type:"submit",color:"orange",style:{margin:"1%"}},{default:o(()=>[h("登入")]),_:1}),D,a(g,{color:"white",onClick:w},{default:o(()=>[h("前往註冊")]),_:1})]),_:1})]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1}),a(m,{thickness:3,class:"border-opacity-100",color:"warning",style:{margin:""}})]),_:1})]),_:1}))}};export{G as default};
