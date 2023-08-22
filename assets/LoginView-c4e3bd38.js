import{O as S,P as B,Q as C,al as F,W as M,Y as N,Z as o,c as a,a3 as m,a0 as s,ag as P,ah as p,a8 as t,K as g,a1 as h}from"./index-a2b36077.js";import{c as R,a as _,u as U,d as b}from"./index.esm-88c77da7.js";import{V as q}from"./VContainer-fdeae167.js";import{V as c,a as f}from"./VRow-8f9f3a0e.js";import{V as T}from"./VForm-046a936b.js";import"./_commonjsHelpers-39b5b250.js";const $=t("h1",null," ",-1),D=t("h1",{style:{color:"white"}},"登入",-1),K={class:"text-center"},L=t("h1",null,null,-1),A={__name:"LoginView",setup(O){const i=S(),d=B(),V=C(),w=()=>{d.push("/register")},k=R({account:_().required("帳號必填").min(4,"帳號最少 4 個字").max(20,"帳號最多 20 個字"),password:_().required("密碼必填").min(4,"密碼最少 4 個字").max(20,"密碼最多 20 個字")}),{handleSubmit:v,isSubmitting:x}=U({validationSchema:k}),r=b("account"),l=b("password"),y=v(async n=>{try{const{data:e}=await F.post("/users/login",{account:n.account,password:n.password});V.login({token:e.result.token,account:e.result.account,email:e.result.email,cart:e.result.cart,role:e.result.role}),i({text:"成功登入",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),d.push("/")}catch(e){i({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(n,e)=>(M(),N(q,null,{default:o(()=>[a(f,null,{default:o(()=>[a(c,{cols:"12"},{default:o(()=>[$,D]),_:1}),a(m,{thickness:3,class:"border-opacity-100",color:"warning"}),a(c,{cols:"12"},{default:o(()=>[a(T,{disabled:s(x),onSubmit:P(s(y),["prevent"])},{default:o(()=>[a(p,{modelValue:s(r).value.value,"onUpdate:modelValue":e[0]||(e[0]=u=>s(r).value.value=u),"error-messages":s(r).errorMessage.value,label:"帳號",counter:"",maxlength:"20",color:"orange",style:{background:"white"}},null,8,["modelValue","error-messages"]),a(p,{modelValue:s(l).value.value,"onUpdate:modelValue":e[1]||(e[1]=u=>s(l).value.value=u),"error-messages":s(l).errorMessage.value,label:"密碼",counter:"",maxlength:"20",type:"password",color:"orange",style:{background:"white"}},null,8,["modelValue","error-messages"]),t("div",K,[a(f,null,{default:o(()=>[a(c,{cols:"12"},{default:o(()=>[a(g,{type:"submit",color:"orange",style:{margin:"1%"}},{default:o(()=>[h("登入")]),_:1}),L,a(g,{color:"white",onClick:w},{default:o(()=>[h("前往註冊")]),_:1})]),_:1})]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1}),a(m,{thickness:3,class:"border-opacity-100",color:"warning",style:{margin:""}})]),_:1})]),_:1}))}};export{A as default};