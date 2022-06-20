import{_ as i,C as p,r,o as b,c as v,w as s,a as n,f as V,d as x,P as C,e as k,n as z}from"./index.c99ef684.js";import{P as U,S as K,_ as L}from"./ComponentApi.cab76a41.js";import{_ as P}from"./KnobBoolean.cea721d9.js";import{_ as E}from"./KnobListItem.370dc906.js";import{_ as w}from"./Knobs.20694b9d.js";import{c as S,s as A}from"./story-params.3e80c8a4.js";const D={name:"BadgeExample",components:{Preview:U,Sandbox:K,Knobs:w,KnobListItem:E,KnobBoolean:P,VBadge:p},data(){return{colors:S,sizes:A,bordered:!1,elevated:!1,round:!0,rounded:!1,roundedLg:!1,dark:!0,light:!1,color:"primary",size:"sm",disabled:!1}}},H=V(" Configure me ");function I(m,o,f,_,e,g){const u=r("VBadge"),t=r("Preview"),d=r("KnobBoolean"),a=r("KnobListItem"),c=r("Knobs"),B=r("Sandbox");return b(),v(B,{id:"example",title:"Example"},{controls:s(()=>[n(c,null,{default:s(()=>[n(d,{modelValue:e.dark,"onUpdate:modelValue":o[0]||(o[0]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(d,{modelValue:e.light,"onUpdate:modelValue":o[1]||(o[1]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(a,{modelValue:e.color,"onUpdate:modelValue":o[2]||(o[2]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"]),n(a,{modelValue:e.size,"onUpdate:modelValue":o[3]||(o[3]=l=>e.size=l),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(d,{modelValue:e.bordered,"onUpdate:modelValue":o[4]||(o[4]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(d,{modelValue:e.elevated,"onUpdate:modelValue":o[5]||(o[5]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),n(d,{modelValue:e.rounded,"onUpdate:modelValue":o[6]||(o[6]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(d,{modelValue:e.roundedLg,"onUpdate:modelValue":o[7]||(o[7]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),n(d,{modelValue:e.round,"onUpdate:modelValue":o[8]||(o[8]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),n(d,{modelValue:e.disabled,"onUpdate:modelValue":o[9]||(o[9]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"])]),_:1})]),default:s(()=>[n(t,null,{default:s(()=>[n(u,{bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,size:e.size,disabled:e.disabled},{default:s(()=>[H]),_:1},8,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","size","disabled"])]),_:1})]),_:1})}var R=i(D,[["render",I]]);const N=x({name:"DocsComponentsBadge",components:{PageHeader:C,ComponentApi:L,BadgeExample:R},data(){return{component:p}}}),y=V(" Badge ");function T(m,o,f,_,e,g){const u=r("PageHeader"),t=r("BadgeExample"),d=r("ComponentApi");return b(),k("div",{class:z(m.$bem({}))},[n(u,null,{default:s(()=>[y]),_:1}),n(t),n(d,{component:m.component},null,8,["component"])],2)}var O=i(N,[["render",T]]);export{O as default};