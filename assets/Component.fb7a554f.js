import{_ as a,g as p,r as d,o as V,c as U,w as t,a as n,d as B,P as x,e as I,n as K,f as k}from"./index.8ac12abf.js";import{P as z,S as C,_ as L}from"./ComponentApi.7d28bd0a.js";import{_ as P}from"./KnobBoolean.15683d8f.js";import{_ as S}from"./KnobListItem.cb70c22e.js";import{_ as E}from"./KnobString.4056e65b.js";import{_ as w}from"./Knobs.c7c7df55.js";import{c as y,s as H,a as A,g as D}from"./story-params.3e80c8a4.js";const R={name:"IconButtonExample",components:{Preview:z,Sandbox:C,Knobs:w,KnobListItem:S,KnobBoolean:P,KnobString:E,VIconButton:p},data(){return{colors:y,sizes:H,icons:A,icon:"check",bordered:!1,elevated:!1,round:!0,rounded:!1,roundedLg:!1,dark:!0,light:!0,color:"primary",size:"md",disabled:!1,loading:!1,title:"some title...",plain:!1,hoverable:!1,gradient:"primary",gradients:D,themes:["primary","secondary"],theme:null}}};function T(u,l,b,g,e,f){const s=d("VIconButton"),i=d("Preview"),r=d("KnobListItem"),m=d("KnobBoolean"),v=d("KnobString"),_=d("Knobs"),c=d("Sandbox");return V(),U(c,{id:"example",title:"Example"},{controls:t(()=>[n(_,null,{default:t(()=>[n(r,{modelValue:e.icon,"onUpdate:modelValue":l[0]||(l[0]=o=>e.icon=o),items:e.icons,label:"Icon"},null,8,["modelValue","items"]),n(m,{modelValue:e.dark,"onUpdate:modelValue":l[1]||(l[1]=o=>e.dark=o),label:"Dark"},null,8,["modelValue"]),n(m,{modelValue:e.light,"onUpdate:modelValue":l[2]||(l[2]=o=>e.light=o),label:"Light"},null,8,["modelValue"]),n(r,{modelValue:e.theme,"onUpdate:modelValue":l[3]||(l[3]=o=>e.theme=o),items:e.themes,label:"Theme"},null,8,["modelValue","items"]),n(r,{modelValue:e.color,"onUpdate:modelValue":l[4]||(l[4]=o=>e.color=o),items:e.colors,label:"Color"},null,8,["modelValue","items"]),n(r,{modelValue:e.gradient,"onUpdate:modelValue":l[5]||(l[5]=o=>e.gradient=o),items:e.gradients,label:"Gradient"},null,8,["modelValue","items"]),n(m,{modelValue:e.plain,"onUpdate:modelValue":l[6]||(l[6]=o=>e.plain=o),label:"Plain"},null,8,["modelValue"]),n(m,{modelValue:e.hoverable,"onUpdate:modelValue":l[7]||(l[7]=o=>e.hoverable=o),label:"Hoverable"},null,8,["modelValue"]),n(r,{modelValue:e.size,"onUpdate:modelValue":l[8]||(l[8]=o=>e.size=o),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(m,{modelValue:e.bordered,"onUpdate:modelValue":l[9]||(l[9]=o=>e.bordered=o),label:"Bordered"},null,8,["modelValue"]),n(m,{modelValue:e.elevated,"onUpdate:modelValue":l[10]||(l[10]=o=>e.elevated=o),label:"Elevated"},null,8,["modelValue"]),n(m,{modelValue:e.rounded,"onUpdate:modelValue":l[11]||(l[11]=o=>e.rounded=o),label:"Rounded"},null,8,["modelValue"]),n(m,{modelValue:e.roundedLg,"onUpdate:modelValue":l[12]||(l[12]=o=>e.roundedLg=o),label:"Rounded large"},null,8,["modelValue"]),n(m,{modelValue:e.round,"onUpdate:modelValue":l[13]||(l[13]=o=>e.round=o),label:"Round"},null,8,["modelValue"]),n(m,{modelValue:e.disabled,"onUpdate:modelValue":l[14]||(l[14]=o=>e.disabled=o),label:"Disabled"},null,8,["modelValue"]),n(m,{modelValue:e.loading,"onUpdate:modelValue":l[15]||(l[15]=o=>e.loading=o),label:"Loading"},null,8,["modelValue"]),n(v,{modelValue:e.title,"onUpdate:modelValue":l[16]||(l[16]=o=>e.title=o),label:"Title"},null,8,["modelValue"])]),_:1})]),default:t(()=>[n(i,null,{default:t(()=>[n(s,{icon:e.icon,bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,theme:e.theme,size:e.size,disabled:e.disabled,loading:e.loading,title:e.title,plain:e.plain,hoverable:e.hoverable,gradient:e.gradient},null,8,["icon","bordered","elevated","round","rounded","rounded-lg","dark","light","color","theme","size","disabled","loading","title","plain","hoverable","gradient"])]),_:1})]),_:1})}var N=a(R,[["render",T]]);const G=B({name:"DocsComponentsIconButton",components:{PageHeader:x,ComponentApi:L,IconButtonExample:N},data(){return{component:p}}}),j=k(" Icon button ");function q(u,l,b,g,e,f){const s=d("PageHeader"),i=d("IconButtonExample"),r=d("ComponentApi");return V(),I("div",{class:K(u.$bem({}))},[n(s,null,{default:t(()=>[j]),_:1}),n(i),n(r,{component:u.component},null,8,["component"])],2)}var Y=a(G,[["render",q]]);export{Y as default};
