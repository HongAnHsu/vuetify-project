import{aB as b,Y as h,Z as x,a8 as S,x as w,as as q,a1 as B,a2 as k,c as t,a4 as s,aC as C,a7 as F,ab as u,ag as n,V as M,a6 as l,az as N,aA as P,K as d,ad as m}from"./index-d70bc98e.js";import{c as $,e as A,u as E,d as R,V as T}from"./index.esm-8a9b7a5a.js";import{V as U}from"./VContainer-e94c980a.js";import{V as j,a as i}from"./VRow-fa889f26.js";import"./_commonjsHelpers-39b5b250.js";const z=u("h1",{class:"text-red"},"已下架",-1),G={__name:"ProductView",setup(D){const p=b(),c=h(),v=x(),f=$({quantity:A().typeError("缺少數量").required("缺少數量").min(1,"最少為 1")}),{isSubmitting:_,handleSubmit:g}=E({validationSchema:f,initialValues:{quantity:0}}),o=R("quantity"),V=g(async a=>{try{const{data:r}=await S.post("/users/cart",{product:e.value._id,quantity:a.quantity});v.cart=r.result}catch(r){c({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),e=w({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""});return(async()=>{try{const{data:a}=await q.get("/products/"+p.params.id);e.value._id=a.result._id,e.value.name=a.result.name,e.value.price=a.result.price,e.value.description=a.result.description,e.value.image=a.result.image,e.value.sell=a.result.sell,e.value.category=a.result.category,document.title="購物網 | "+e.value.name}catch(a){c({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,r)=>(B(),k(F,null,[t(U,null,{default:s(()=>[t(j,null,{default:s(()=>[t(i,{cols:"12"},{default:s(()=>[u("h1",null,n(e.value.name),1)]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t(M,{src:e.value.image},null,8,["src"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[u("p",null,"$"+n(e.value.price*l(o).value.value),1),u("pre",null,n(e.value.name),1),t(T,{disabled:l(_),onSubmit:N(l(V),["prevent"])},{default:s(()=>[t(P,{modelValue:l(o).value.value,"onUpdate:modelValue":r[0]||(r[0]=y=>l(o).value.value=y),modelModifiers:{number:!0},type:"number",label:"數量",min:"0","error-messages":l(o).errorMessage.value},null,8,["modelValue","error-messages"]),t(d,{type:"submit",color:"green"},{default:s(()=>[m("加入購物車")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),t(C,{"model-value":!e.value.sell,persistent:"",class:"align-center text-center justify-center"},{default:s(()=>[z,t(d,{to:"/"},{default:s(()=>[m("回上頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{G as default};
