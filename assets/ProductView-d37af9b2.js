import{aq as b,O as h,Q as x,T as S,x as q,al as w,W as k,X as B,c as t,Z as s,ar as C,$ as F,a8 as u,a2 as n,V as $,a0 as l,ag as M,ah as N,K as m,a1 as d}from"./index-c0c4ce88.js";import{c as P,e as T,u as E,d as O}from"./index.esm-9e6cef5d.js";import{V as R}from"./VContainer-a94b9390.js";import{a as U,V as i}from"./VRow-a89e93f3.js";import{V as j}from"./VForm-0b0e80e9.js";import"./_commonjsHelpers-39b5b250.js";const A=u("h1",{class:"text-red"},"已下架",-1),z={__name:"ProductView",setup(D){const p=b(),c=h(),v=x(),f=P({quantity:T().typeError("缺少數量").required("缺少數量").min(1,"最少為 1")}),{isSubmitting:_,handleSubmit:g}=E({validationSchema:f,initialValues:{quantity:0}}),o=O("quantity"),V=g(async a=>{try{const{data:r}=await S.post("/users/cart",{product:e.value._id,quantity:a.quantity});v.cart=r.result}catch(r){c({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),e=q({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""});return(async()=>{try{const{data:a}=await w.get("/products/"+p.params.id);e.value._id=a.result._id,e.value.name=a.result.name,e.value.price=a.result.price,e.value.description=a.result.description,e.value.image=a.result.image,e.value.sell=a.result.sell,e.value.category=a.result.category,document.title="購物網 | "+e.value.name}catch(a){c({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,r)=>(k(),B(F,null,[t(R,null,{default:s(()=>[t(U,null,{default:s(()=>[t(i,{cols:"12"},{default:s(()=>[u("h1",null,n(e.value.name),1)]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[t($,{src:e.value.image},null,8,["src"])]),_:1}),t(i,{cols:"12",md:"6"},{default:s(()=>[u("p",null,"$"+n(e.value.price*l(o).value.value),1),u("pre",null,n(e.value.name),1),t(j,{disabled:l(_),onSubmit:M(l(V),["prevent"])},{default:s(()=>[t(N,{modelValue:l(o).value.value,"onUpdate:modelValue":r[0]||(r[0]=y=>l(o).value.value=y),modelModifiers:{number:!0},type:"number",label:"數量",min:"0","error-messages":l(o).errorMessage.value},null,8,["modelValue","error-messages"]),t(m,{type:"submit",color:"green"},{default:s(()=>[d("加入購物車")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),t(C,{"model-value":!e.value.sell,persistent:"",class:"align-center text-center justify-center"},{default:s(()=>[A,t(m,{to:"/"},{default:s(()=>[d("回上頁")]),_:1})]),_:1},8,["model-value"])],64))}};export{z as default};
