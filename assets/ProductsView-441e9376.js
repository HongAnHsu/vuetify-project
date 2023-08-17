import{p as ne,aO as se,aP as Ve,aQ as xe,g as re,D as ue,aR as ie,aS as be,o as G,u as de,aT as ce,aU as L,aV as ee,c as t,H as O,aW as ye,aX as he,x as i,s as we,I as ke,A as Ce,z as $,B as Pe,aY as Fe,aZ as Se,a7 as K,U as ae,a_ as Be,a$ as Ie,b0 as Ue,b1 as Ae,aN as Y,b2 as Me,v as Re,y as _e,Y as De,a8 as Q,a0 as te,a1 as le,a2 as Te,a4 as u,b3 as Ne,au as ze,K as j,ad as q,aA as W,b4 as He,V as $e,a3 as Ee,a5 as Ge,a6 as s,az as Oe,am as je,ai as qe,ag as Ke,aj as Le,b5 as Xe,al as Ye,af as Qe,ab as We,X as Ze}from"./index-683e0e9e.js";import{c as Je,a as Z,e as ea,f as aa,u as ta,d as E,V as la}from"./index.esm-b1d260f9.js";import{V as oa}from"./VContainer-29d54f78.js";import{V as na,a as oe}from"./VRow-bd568dee.js";import"./_commonjsHelpers-39b5b250.js";const sa=ne({...se(),...Ve(xe(),["inline"])},"VCheckbox"),ra=re()({name:"VCheckbox",inheritAttrs:!1,props:sa(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,I){let{attrs:w,slots:b}=I;const r=ue(e,"modelValue"),{isFocused:d,focus:k,blur:U}=ie(e),R=be(),P=G(()=>e.id||`checkbox-${R}`);return de(()=>{const[_,y]=ce(w),[D,f]=L.filterProps(e),[g,A]=ee.filterProps(e);return t(L,O({class:["v-checkbox",e.class]},_,D,{modelValue:r.value,"onUpdate:modelValue":F=>r.value=F,id:P.value,focused:d.value,style:e.style}),{...b,default:F=>{let{id:S,messagesId:T,isDisabled:N,isReadonly:M}=F;return t(ee,O(g,{id:S.value,"aria-describedby":T.value,disabled:N.value,readonly:M.value},y,{modelValue:r.value,"onUpdate:modelValue":z=>r.value=z,onFocus:k,onBlur:U}),b)}})}),{}}});const ua=ne({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...se(),...ye()},"VTextarea"),ia=re()({name:"VTextarea",directives:{Intersect:he},inheritAttrs:!1,props:ua(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,I){let{attrs:w,emit:b,slots:r}=I;const d=ue(e,"modelValue"),{isFocused:k,focus:U,blur:R}=ie(e),P=G(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value||"").toString().length),_=G(()=>{if(w.maxlength)return w.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function y(o,m){var c,x;!e.autofocus||!o||(x=(c=m[0].target)==null?void 0:c.focus)==null||x.call(c)}const D=i(),f=i(),g=we(""),A=i(),F=G(()=>e.persistentPlaceholder||k.value||e.active);function S(){var o;A.value!==document.activeElement&&((o=A.value)==null||o.focus()),k.value||U()}function T(o){S(),b("click:control",o)}function N(o){b("mousedown:control",o)}function M(o){o.stopPropagation(),S(),Y(()=>{d.value="",Me(e["onClick:clear"],o)})}function z(o){var c;const m=o.target;if(d.value=m.value,(c=e.modelModifiers)!=null&&c.trim){const x=[m.selectionStart,m.selectionEnd];Y(()=>{m.selectionStart=x[0],m.selectionEnd=x[1]})}}const p=i(),C=i(+e.rows),B=G(()=>["plain","underlined"].includes(e.variant));ke(()=>{e.autoGrow||(C.value=+e.rows)});function V(){e.autoGrow&&Y(()=>{if(!p.value||!f.value)return;const o=getComputedStyle(p.value),m=getComputedStyle(f.value.$el),c=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),x=p.value.scrollHeight,n=parseFloat(o.lineHeight),a=Math.max(parseFloat(e.rows)*n+c,parseFloat(m.getPropertyValue("--v-input-control-height"))),H=parseFloat(e.maxRows)*n+c||1/0,h=_e(x??0,a,H);C.value=Math.floor((h-c)/n),g.value=Re(h)})}Ce(V),$(d,V),$(()=>e.rows,V),$(()=>e.maxRows,V),$(()=>e.density,V);let v;return $(p,o=>{o?(v=new ResizeObserver(V),v.observe(p.value)):v==null||v.disconnect()}),Pe(()=>{v==null||v.disconnect()}),de(()=>{const o=!!(r.counter||e.counter||e.counterValue),m=!!(o||r.details),[c,x]=ce(w),[{modelValue:n,...a}]=L.filterProps(e),[H]=Fe(e);return t(L,O({ref:D,modelValue:d.value,"onUpdate:modelValue":h=>d.value=h,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":B.value},e.class],style:e.style},c,a,{centerAffix:C.value===1&&!B.value,focused:k.value}),{...r,default:h=>{let{isDisabled:l,isDirty:X,isReadonly:me,isValid:ve}=h;return t(Se,O({ref:f,style:{"--v-textarea-control-height":g.value},onClick:T,onMousedown:N,"onClick:clear":M,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},H,{active:F.value||X.value,centerAffix:C.value===1&&!B.value,dirty:X.value||e.dirty,disabled:l.value,focused:k.value,error:ve.value===!1}),{...r,default:fe=>{let{props:{class:J,...ge}}=fe;return t(K,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ae(t("textarea",O({ref:A,class:J,value:d.value,onInput:z,autofocus:e.autofocus,readonly:me.value,disabled:l.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:S,onBlur:R},ge,x),null),[[Be("intersect"),{handler:y},null,{once:!0}]]),e.autoGrow&&ae(t("textarea",{class:[J,"v-textarea__sizer"],"onUpdate:modelValue":pe=>d.value=pe,ref:p,readonly:!0,"aria-hidden":"true"},null),[[Ie,d.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:m?h=>{var l;return t(K,null,[(l=r.details)==null?void 0:l.call(r,h),o&&t(K,null,[t("span",null,null),t(Ue,{active:e.persistentCounter||k.value,value:P.value,max:_.value},r.counter)])])}:void 0})}),Ae({},D,f,A)}}),da=We("h1",{class:"text-center",style:{color:"white","text-decoration":"underline","text-shadow":"0.1em 0.1em 0.2em rgb(233, 92, 92)"}},"商品管理",-1),pa={__name:"ProductsView",setup(e){const I=De(),w=i(5),b=i([{key:"name",order:"asc"}]),r=i(1),d=i([]),k=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"物品價格",align:"center",sortable:!0,key:"price"},{title:"餐點介紹",align:"center",sortable:!1,key:"description"},{title:"餐點分類",align:"center",sortable:!0,key:"category"},{title:"上架狀態",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],U=i(!1),R=i(0),P=i(""),_=()=>{r.value=1,y()},y=async()=>{U.value=!0;try{const{data:n}=await Q.get("/products/all",{params:{page:r.value,itemsPerPage:w.value,sortBy:b.value[0].key,sortOrder:b.value[0].order,search:P.value}});d.value.splice(0,d.value.length,...n.result.data),R.value=n.result.count}catch(n){I({text:n.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}U.value=!1};y();const D=n=>{g.value=n._id,p.value.value=n.name,C.value.value=n.price,B.value.value=n.description,V.value.value=n.category,v.value.value=n.sell,f.value=!0},f=i(!1),g=i(""),A=()=>{g.value="",f.value=!0},F=()=>{f.value=!1,z(),c.value.deleteFileRecord()},S=["前菜","沙拉","兒童餐","美式漢堡","美式蛋捲","三明治","墨西哥酥餅","義大利麵","燉飯","早午餐拚盤","單點小物","飲料"],T=Je({name:Z().required("缺少名稱"),price:ea().typeError("缺少價格").required("缺少價格").min(0,"價格錯誤"),description:Z().required("缺少說明"),category:Z().required("缺少分類").test("isCategory",n=>S.includes(n)),sell:aa()}),{handleSubmit:N,isSubmitting:M,resetForm:z}=ta({validationSchema:T,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),p=E("name"),C=E("price"),B=E("description"),V=E("category"),v=E("sell"),o=i([]),m=i([]),c=i(null),x=N(async n=>{if(!(g.value.length===0&&o.value.length===0))try{const a=new FormData;a.append("name",n.name),a.append("price",n.price),a.append("description",n.description),a.append("category",n.category),a.append("sell",n.sell),o.value.length>0&&a.append("image",o.value[0].file),g.value.length>0?await Q.patch("/products/"+g.value,a):await Q.post("/products",a),I({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),F(),y()}catch(a){console.log(a),I({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(n,a)=>{const H=te("VDataTableServer"),h=te("VueFileAgent");return le(),Te(K,null,[t(oa,null,{default:u(()=>[t(na,null,{default:u(()=>[t(oe,{cols:"12"},{default:u(()=>[da]),_:1}),t(ze),t(oe,{cols:"12",style:{background:"white","box-shadow":"2px 2px 2px 4px rgba(255, 255, 255, 0.7)"}},{default:u(()=>[t(j,{color:"orange",onClick:A,style:{bottom:"2%"}},{default:u(()=>[q("新增商品")]),_:1}),t(H,{"items-per-page":w.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=l=>w.value=l),y],"sort-by":b.value,"onUpdate:sortBy":[a[2]||(a[2]=l=>b.value=l),y],page:r.value,"onUpdate:page":[a[3]||(a[3]=l=>r.value=l),y],items:d.value,headers:k,loading:U.value,"items-length":R.value,search:P.value,hover:""},{top:u(()=>[t(W,{label:"搜尋","append-icon":"mdi-magnify","onClick:append":_,onKeydown:He(_,["enter"]),modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=l=>P.value=l)},null,8,["onKeydown","modelValue"])]),["item.image"]:u(({item:l})=>[t($e,{src:l.raw.image,height:"50px"},null,8,["src"])]),["item.sell"]:u(({item:l})=>[l.raw.sell?(le(),Ee(Ze,{key:0,icon:"mdi-check"})):Ge("",!0)]),["item.edit"]:u(({item:l})=>[t(j,{icon:"mdi-pencil",onClick:X=>D(l.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Ne,{persistent:"",width:"500px",modelValue:f.value,"onUpdate:modelValue":a[11]||(a[11]=l=>f.value=l)},{default:u(()=>[t(la,{disabled:s(M),onSubmit:Oe(s(x),["prevent"])},{default:u(()=>[t(je,null,{default:u(()=>[t(qe,null,{default:u(()=>[q(Ke(g.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),t(Le,null,{default:u(()=>[t(W,{label:"名稱",modelValue:s(p).value.value,"onUpdate:modelValue":a[4]||(a[4]=l=>s(p).value.value=l),"error-messages":s(p).errorMessage.value},null,8,["modelValue","error-messages"]),t(W,{label:"價格",modelValue:s(C).value.value,"onUpdate:modelValue":a[5]||(a[5]=l=>s(C).value.value=l),modelModifiers:{number:!0},"error-messages":s(C).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),t(ia,{label:"餐點介紹",modelValue:s(B).value.value,"onUpdate:modelValue":a[6]||(a[6]=l=>s(B).value.value=l),"error-messages":s(B).errorMessage.value},null,8,["modelValue","error-messages"]),t(Xe,{label:"分類",modelValue:s(V).value.value,"onUpdate:modelValue":a[7]||(a[7]=l=>s(V).value.value=l),"error-messages":s(V).errorMessage.value,items:S},null,8,["modelValue","error-messages"]),t(ra,{label:"上架",modelValue:s(v).value.value,"onUpdate:modelValue":a[8]||(a[8]=l=>s(v).value.value=l),"error-messages":s(v).errorMessage.value},null,8,["modelValue","error-messages"]),t(h,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=l=>o.value=l),"raw-model-value":m.value,"onUpdate:rawModelValue":a[10]||(a[10]=l=>m.value=l),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖放到這裡",deletable:"",ref_key:"fileAgent",ref:c},null,8,["modelValue","raw-model-value"])]),_:1}),t(Ye,null,{default:u(()=>[t(Qe),t(j,{color:"red",onClick:F,loading:s(M)},{default:u(()=>[q("取消")]),_:1},8,["loading"]),t(j,{color:"green",type:"submit",loading:s(M)},{default:u(()=>[q("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{pa as default};