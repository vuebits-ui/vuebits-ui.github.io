import{_ as u,a as x,b as C,y as p,r,o as b,c as g,w as s,d as n,f as K,P,C as U,g as v,n as B,h as E}from"./index.2e9bb75e.js";import{P as S,S as h}from"./Sandbox.5616347c.js";import{K as w}from"./Knobs.12997fb5.js";const A={name:"CheckboxExample",components:{Preview:S,Sandbox:h,Knobs:w,KnobBoolean:x,KnobString:C,VCheckbox:p},data(){return{isChecked:!0,bordered:!0,rounded:!0,dark:!1,light:!0,disabled:!1,error:!1,label:"some label..."}}};function D(t,o,i,V,e,c){const a=r("VCheckbox"),m=r("Preview"),d=r("KnobBoolean"),_=r("KnobString"),f=r("Knobs"),k=r("Sandbox");return b(),g(k,{id:"example",title:"Example"},{controls:s(()=>[n(f,null,{default:s(()=>[n(d,{modelValue:e.dark,"onUpdate:modelValue":o[1]||(o[1]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(d,{modelValue:e.light,"onUpdate:modelValue":o[2]||(o[2]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(d,{modelValue:e.bordered,"onUpdate:modelValue":o[3]||(o[3]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(d,{modelValue:e.rounded,"onUpdate:modelValue":o[4]||(o[4]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(d,{modelValue:e.disabled,"onUpdate:modelValue":o[5]||(o[5]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"]),n(_,{modelValue:e.label,"onUpdate:modelValue":o[6]||(o[6]=l=>e.label=l),label:"Label"},null,8,["modelValue"]),n(d,{modelValue:e.error,"onUpdate:modelValue":o[7]||(o[7]=l=>e.error=l),label:"Error"},null,8,["modelValue"])]),_:1})]),default:s(()=>[n(m,null,{default:s(()=>[n(a,{id:"checkbox-demo",modelValue:e.isChecked,"onUpdate:modelValue":o[0]||(o[0]=l=>e.isChecked=l),bordered:e.bordered,rounded:e.rounded,dark:e.dark,light:e.light,disabled:e.disabled,error:e.error,label:e.label},null,8,["modelValue","bordered","rounded","dark","light","disabled","error","label"])]),_:1})]),_:1})}var H=u(A,[["render",D]]);const L=K({name:"DocsComponentsCheckbox",components:{PageHeader:P,ComponentApi:U,Example:H},data(){return{component:p}}}),N=E(" Checkbox ");function y(t,o,i,V,e,c){const a=r("PageHeader"),m=r("Example"),d=r("ComponentApi");return b(),v("div",{class:B(t.$bem({}))},[n(a,null,{default:s(()=>[N]),_:1}),n(m),n(d,{component:t.component},null,8,["component"])],2)}var j=u(L,[["render",y]]);export{j as default};