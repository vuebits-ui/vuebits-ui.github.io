import{_ as u,p,r,o as i,c as x,w as m,a as n,d as C,P as g,e as K,n as P,f as U}from"./index.8ac12abf.js";import{P as v,S as B,_ as E}from"./ComponentApi.7d28bd0a.js";import{_ as S}from"./KnobBoolean.15683d8f.js";import{_ as h}from"./KnobString.4056e65b.js";import{_ as w}from"./Knobs.c7c7df55.js";const A={name:"CheckboxExample",components:{Preview:v,Sandbox:B,Knobs:w,KnobBoolean:S,KnobString:h,VCheckbox:p},data(){return{isChecked:!0,bordered:!0,rounded:!0,dark:!1,light:!0,disabled:!1,error:!1,label:"some label..."}}};function D(s,o,b,_,e,c){const a=r("VCheckbox"),t=r("Preview"),d=r("KnobBoolean"),V=r("KnobString"),f=r("Knobs"),k=r("Sandbox");return i(),x(k,{id:"example",title:"Example"},{controls:m(()=>[n(f,null,{default:m(()=>[n(d,{modelValue:e.dark,"onUpdate:modelValue":o[1]||(o[1]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(d,{modelValue:e.light,"onUpdate:modelValue":o[2]||(o[2]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(d,{modelValue:e.bordered,"onUpdate:modelValue":o[3]||(o[3]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(d,{modelValue:e.rounded,"onUpdate:modelValue":o[4]||(o[4]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(d,{modelValue:e.disabled,"onUpdate:modelValue":o[5]||(o[5]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"]),n(V,{modelValue:e.label,"onUpdate:modelValue":o[6]||(o[6]=l=>e.label=l),label:"Label"},null,8,["modelValue"]),n(d,{modelValue:e.error,"onUpdate:modelValue":o[7]||(o[7]=l=>e.error=l),label:"Error"},null,8,["modelValue"])]),_:1})]),default:m(()=>[n(t,null,{default:m(()=>[n(a,{id:"checkbox-demo",modelValue:e.isChecked,"onUpdate:modelValue":o[0]||(o[0]=l=>e.isChecked=l),bordered:e.bordered,rounded:e.rounded,dark:e.dark,light:e.light,disabled:e.disabled,error:e.error,label:e.label},null,8,["modelValue","bordered","rounded","dark","light","disabled","error","label"])]),_:1})]),_:1})}var H=u(A,[["render",D]]);const L=C({name:"DocsComponentsCheckbox",components:{PageHeader:g,ComponentApi:E,Example:H},data(){return{component:p}}}),N=U(" Checkbox ");function z(s,o,b,_,e,c){const a=r("PageHeader"),t=r("Example"),d=r("ComponentApi");return i(),K("div",{class:P(s.$bem({}))},[n(a,null,{default:m(()=>[N]),_:1}),n(t),n(d,{component:s.component},null,8,["component"])],2)}var F=u(L,[["render",z]]);export{F as default};
