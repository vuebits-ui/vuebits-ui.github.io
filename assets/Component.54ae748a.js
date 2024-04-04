import{_ as i,$ as p,r,o as b,c as x,w as s,a as n,f,d as U,P as v,e as C,n as k}from"./index.d767eba6.js";import{_ as z,S as K,a as L}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as E}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as P}from"./KnobListItem.vue_vue_type_script_setup_true_lang.47d5f286.js";import{_ as w}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";import{c as S,s as A}from"./story-params.bce1115e.js";const D={name:"BadgeExample",components:{Preview:z,Sandbox:K,Knobs:w,KnobListItem:P,KnobBoolean:E,UiBadge:p},data(){return{colors:S,sizes:A,bordered:!1,elevated:!1,round:!0,rounded:!1,roundedLg:!1,dark:!0,light:!1,color:"primary",size:"sm",disabled:!1}}};function H(m,o,V,_,e,g){const u=r("UiBadge"),a=r("Preview"),d=r("KnobBoolean"),t=r("KnobListItem"),c=r("Knobs"),B=r("Sandbox");return b(),x(B,{id:"example",title:"Example"},{controls:s(()=>[n(c,null,{default:s(()=>[n(d,{modelValue:e.dark,"onUpdate:modelValue":o[0]||(o[0]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(d,{modelValue:e.light,"onUpdate:modelValue":o[1]||(o[1]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(t,{modelValue:e.color,"onUpdate:modelValue":o[2]||(o[2]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"]),n(t,{modelValue:e.size,"onUpdate:modelValue":o[3]||(o[3]=l=>e.size=l),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(d,{modelValue:e.bordered,"onUpdate:modelValue":o[4]||(o[4]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(d,{modelValue:e.elevated,"onUpdate:modelValue":o[5]||(o[5]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),n(d,{modelValue:e.rounded,"onUpdate:modelValue":o[6]||(o[6]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(d,{modelValue:e.roundedLg,"onUpdate:modelValue":o[7]||(o[7]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),n(d,{modelValue:e.round,"onUpdate:modelValue":o[8]||(o[8]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),n(d,{modelValue:e.disabled,"onUpdate:modelValue":o[9]||(o[9]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"])]),_:1})]),default:s(()=>[n(a,null,{default:s(()=>[n(u,{bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,size:e.size,disabled:e.disabled},{default:s(()=>[f(" Configure me ")]),_:1},8,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","size","disabled"])]),_:1})]),_:1})}const I=i(D,[["render",H]]),R=U({name:"DocsComponentsBadge",components:{PageHeader:v,ComponentApi:L,BadgeExample:I},data(){return{component:p}}});function N(m,o,V,_,e,g){const u=r("PageHeader"),a=r("BadgeExample"),d=r("ComponentApi");return b(),C("div",{class:k(m.$bem({}))},[n(u,null,{default:s(()=>[f(" Badge ")]),_:1}),n(a),n(d,{component:m.component},null,8,["component"])],2)}const J=i(R,[["render",N]]);export{J as default};