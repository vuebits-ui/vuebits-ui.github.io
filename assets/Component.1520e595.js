import{_ as p,H as d,r as l,o as _,c as C,w as r,a as o,f as c,d as H,P as K,e as P,n as v}from"./index.8ac12abf.js";import{P as h,S as E,_ as S}from"./ComponentApi.7d28bd0a.js";import{_ as g}from"./KnobBoolean.15683d8f.js";import{_ as B}from"./KnobString.4056e65b.js";import{_ as w}from"./Knobs.c7c7df55.js";const U={name:"FieldExample",components:{Preview:h,Sandbox:E,Knobs:w,KnobBoolean:g,KnobString:B,VField:d},data(){return{label:"Field name",error:"Field value is incorrect",hint:"",noHint:!1}}},$=c(" Put your field control here! ");function k(s,n,u,f,e,b){const m=l("VField"),i=l("Preview"),a=l("KnobString"),V=l("KnobBoolean"),x=l("Knobs"),F=l("Sandbox");return _(),C(F,{id:"example",title:"Example"},{controls:r(()=>[o(x,null,{default:r(()=>[o(a,{modelValue:e.label,"onUpdate:modelValue":n[0]||(n[0]=t=>e.label=t),label:"Label"},null,8,["modelValue"]),o(a,{modelValue:e.hint,"onUpdate:modelValue":n[1]||(n[1]=t=>e.hint=t),label:"Hint"},null,8,["modelValue"]),o(a,{modelValue:e.error,"onUpdate:modelValue":n[2]||(n[2]=t=>e.error=t),label:"Error"},null,8,["modelValue"]),o(V,{modelValue:e.noHint,"onUpdate:modelValue":n[3]||(n[3]=t=>e.noHint=t),label:"No hint"},null,8,["modelValue"])]),_:1})]),default:r(()=>[o(i,null,{default:r(()=>[o(m,{id:"field-example",label:e.label,error:e.error,hint:e.hint,"no-hint":e.noHint},{default:r(()=>[$]),_:1},8,["label","error","hint","no-hint"])]),_:1})]),_:1})}var A=p(U,[["render",k]]);const N=H({name:"DocsComponentsField",components:{PageHeader:K,ComponentApi:S,FieldExample:A},data(){return{component:d}}}),y=c(" Field ");function z(s,n,u,f,e,b){const m=l("PageHeader"),i=l("FieldExample"),a=l("ComponentApi");return _(),P("div",{class:v(s.$bem({}))},[o(m,null,{default:r(()=>[y]),_:1}),o(i),o(a,{component:s.component},null,8,["component"])],2)}var G=p(N,[["render",z]]);export{G as default};
