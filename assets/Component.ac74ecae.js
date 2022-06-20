import{_ as k,am as v,x as T,r as d,o as m,c as P,w as r,a as n,e as b,D as _,b as V,F as c,K as E,L as y,f,t as i,d as H,P as S,n as D}from"./index.8ac12abf.js";import{P as A,S as W,_ as I}from"./ComponentApi.7d28bd0a.js";import{_ as N}from"./KnobBoolean.15683d8f.js";import{_ as R}from"./KnobListItem.cb70c22e.js";import{_ as F}from"./Knobs.c7c7df55.js";import{c as z}from"./story-params.3e80c8a4.js";const h={name:"TooltipExample",components:{Preview:A,Sandbox:W,Knobs:F,KnobListItem:R,KnobBoolean:N,VTooltip:v,VButton:T},data(){return{bordered:!1,elevated:!1,round:!1,rounded:!1,roundedLg:!1,dark:!0,light:!1,color:"",colors:z,disabled:!1,clickable:!1,top:!1,right:!1,bottom:!1,left:!1,noWrap:!1,showBlend:!1}}},q={style:{width:"20rem"}},G=V("h1",null,"Hello!",-1);function J(s,l,w,U,e,B){const u=d("VButton"),p=d("VTooltip"),a=d("Preview"),t=d("KnobBoolean"),x=d("KnobListItem"),C=d("Knobs"),K=d("Sandbox");return m(),P(K,{id:"example",title:"Example"},{default:r(()=>[n(a,null,{default:r(()=>[(m(),b(c,null,_(5,o=>V("div",{key:o},[(m(),b(c,null,_(5,g=>n(p,{key:g,style:{width:"20%"},bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,disabled:e.disabled,clickable:e.clickable,top:e.top,right:e.right,bottom:e.bottom,left:e.left,"no-wrap":e.noWrap,"show-blend":e.showBlend},{activator:r(({on:L})=>[n(u,E({block:"",hoverable:"",bordered:""},y(L)),{default:r(()=>[f(i(e.clickable?"Click":"Hover")+" me to show tooltip ",1)]),_:2},1040)]),default:r(()=>[V("div",q,[G,f(" Tooltip: row "+i(o)+", column "+i(g),1)])]),_:2},1032,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","disabled","clickable","top","right","bottom","left","no-wrap","show-blend"])),64))])),64))]),_:1}),n(C,null,{default:r(()=>[n(t,{modelValue:e.bordered,"onUpdate:modelValue":l[0]||(l[0]=o=>e.bordered=o),label:"Bordered"},null,8,["modelValue"]),n(t,{modelValue:e.elevated,"onUpdate:modelValue":l[1]||(l[1]=o=>e.elevated=o),label:"Elevated"},null,8,["modelValue"]),n(t,{modelValue:e.rounded,"onUpdate:modelValue":l[2]||(l[2]=o=>e.rounded=o),label:"Rounded"},null,8,["modelValue"]),n(t,{modelValue:e.roundedLg,"onUpdate:modelValue":l[3]||(l[3]=o=>e.roundedLg=o),label:"Rounded lg"},null,8,["modelValue"]),n(t,{modelValue:e.round,"onUpdate:modelValue":l[4]||(l[4]=o=>e.round=o),label:"Round"},null,8,["modelValue"]),n(t,{modelValue:e.dark,"onUpdate:modelValue":l[5]||(l[5]=o=>e.dark=o),label:"Dark"},null,8,["modelValue"]),n(t,{modelValue:e.light,"onUpdate:modelValue":l[6]||(l[6]=o=>e.light=o),label:"Light"},null,8,["modelValue"]),n(x,{modelValue:e.color,"onUpdate:modelValue":l[7]||(l[7]=o=>e.color=o),items:e.colors,label:"Color"},null,8,["modelValue","items"]),n(t,{modelValue:e.disabled,"onUpdate:modelValue":l[8]||(l[8]=o=>e.disabled=o),label:"Disabled"},null,8,["modelValue"]),n(t,{modelValue:e.clickable,"onUpdate:modelValue":l[9]||(l[9]=o=>e.clickable=o),label:"Clickable"},null,8,["modelValue"]),n(t,{modelValue:e.top,"onUpdate:modelValue":l[10]||(l[10]=o=>e.top=o),label:"top"},null,8,["modelValue"]),n(t,{modelValue:e.right,"onUpdate:modelValue":l[11]||(l[11]=o=>e.right=o),label:"right"},null,8,["modelValue"]),n(t,{modelValue:e.bottom,"onUpdate:modelValue":l[12]||(l[12]=o=>e.bottom=o),label:"bottom"},null,8,["modelValue"]),n(t,{modelValue:e.left,"onUpdate:modelValue":l[13]||(l[13]=o=>e.left=o),label:"left"},null,8,["modelValue"]),n(t,{modelValue:e.noWrap,"onUpdate:modelValue":l[14]||(l[14]=o=>e.noWrap=o),label:"no wrap"},null,8,["modelValue"]),n(t,{modelValue:e.showBlend,"onUpdate:modelValue":l[15]||(l[15]=o=>e.showBlend=o),label:"Show blend"},null,8,["modelValue"])]),_:1})]),_:1})}var M=k(h,[["render",J]]);const O=H({name:"DocsComponentsAsyncContent",components:{PageHeader:S,ComponentApi:I,TooltipExample:M},data(){return{component:v}}}),Q=f(" Tooltip ");function X(s,l,w,U,e,B){const u=d("PageHeader"),p=d("TooltipExample"),a=d("ComponentApi");return m(),b("div",{class:D(s.$bem({}))},[n(u,null,{default:r(()=>[Q]),_:1}),n(p),n(a,{component:s.component},null,8,["component"])],2)}var le=k(O,[["render",X]]);export{le as default};
