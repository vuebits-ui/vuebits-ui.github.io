import{_ as u,r,o as p,c as x,w as m,a as n,d as C,P as g,e as U,f as K,n as B}from"./index.d767eba6.js";import{_ as E,a as i}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as P,S,a as v}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as w}from"./KnobString.vue_vue_type_script_setup_true_lang.62422955.js";import{_ as h}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";const A={name:"CheckboxExample",components:{Preview:P,Sandbox:S,Knobs:h,KnobBoolean:E,KnobString:w,UiCheckbox:i},data(){return{isChecked:!0,bordered:!0,rounded:!0,dark:!1,light:!0,disabled:!1,error:!1,label:"some label..."}}};function D(s,o,b,c,e,_){const a=r("UiCheckbox"),t=r("Preview"),d=r("KnobBoolean"),f=r("KnobString"),V=r("Knobs"),k=r("Sandbox");return p(),x(k,{id:"example",title:"Example"},{controls:m(()=>[n(V,null,{default:m(()=>[n(d,{modelValue:e.dark,"onUpdate:modelValue":o[1]||(o[1]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(d,{modelValue:e.light,"onUpdate:modelValue":o[2]||(o[2]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(d,{modelValue:e.bordered,"onUpdate:modelValue":o[3]||(o[3]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(d,{modelValue:e.rounded,"onUpdate:modelValue":o[4]||(o[4]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(d,{modelValue:e.disabled,"onUpdate:modelValue":o[5]||(o[5]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"]),n(f,{modelValue:e.label,"onUpdate:modelValue":o[6]||(o[6]=l=>e.label=l),label:"Label"},null,8,["modelValue"]),n(d,{modelValue:e.error,"onUpdate:modelValue":o[7]||(o[7]=l=>e.error=l),label:"Error"},null,8,["modelValue"])]),_:1})]),default:m(()=>[n(t,null,{default:m(()=>[n(a,{id:"checkbox-demo",modelValue:e.isChecked,"onUpdate:modelValue":o[0]||(o[0]=l=>e.isChecked=l),bordered:e.bordered,rounded:e.rounded,dark:e.dark,light:e.light,disabled:e.disabled,error:e.error,label:e.label},null,8,["modelValue","bordered","rounded","dark","light","disabled","error","label"])]),_:1})]),_:1})}const H=u(A,[["render",D]]),L=C({name:"DocsComponentsCheckbox",components:{PageHeader:g,ComponentApi:v,Example:H},data(){return{component:i}}});function N(s,o,b,c,e,_){const a=r("PageHeader"),t=r("Example"),d=r("ComponentApi");return p(),U("div",{class:B(s.$bem({}))},[n(a,null,{default:m(()=>[K(" Checkbox ")]),_:1}),n(t),n(d,{component:s.component},null,8,["component"])],2)}const y=u(L,[["render",N]]);export{y as default};