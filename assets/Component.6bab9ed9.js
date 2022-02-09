import{_ as w,K as L,a as P,Z as c,d as E,P as y,C as H}from"./index.e5dbef19.js";import{P as S,S as A}from"./Sandbox.eb4f66cf.js";import{K as D}from"./Knobs.f49c0270.js";import{c as N}from"./story-params.e6a8e965.js";import{b as d,o as u,e as W,w as r,k as n,c as b,v as k,i as V,F as v,m as I,N as R,l as f,j as i,d as F,n as z}from"./vendor.5a863b1c.js";const Z={name:"TooltipExample",components:{Preview:S,Sandbox:A,Knobs:D,KnobListItem:L,KnobBoolean:P,VTooltip:c,VButton:E},data(){return{bordered:!1,elevated:!1,round:!1,rounded:!1,roundedLg:!1,dark:!0,light:!1,color:"",colors:N,disabled:!1,clickable:!1,top:!1,right:!1,bottom:!1,left:!1,noWrap:!1,showBlend:!1}}},h={style:{width:"20rem"}},j=V("h1",null,"Hello!",-1);function q(m,o,U,B,e,C){const s=d("VButton"),p=d("VTooltip"),a=d("Preview"),t=d("KnobBoolean"),x=d("KnobListItem"),_=d("Knobs"),K=d("Sandbox");return u(),W(K,{id:"example",title:"Example"},{default:r(()=>[n(a,null,{default:r(()=>[(u(),b(v,null,k(5,l=>V("div",{key:l},[(u(),b(v,null,k(5,g=>n(p,{key:g,style:{width:"20%"},bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,disabled:e.disabled,clickable:e.clickable,top:e.top,right:e.right,bottom:e.bottom,left:e.left,"no-wrap":e.noWrap,"show-blend":e.showBlend},{activator:r(({on:T})=>[n(s,I({block:"",hoverable:"",bordered:""},R(T)),{default:r(()=>[f(i(e.clickable?"Click":"Hover")+" me to show tooltip ",1)]),_:2},1040)]),default:r(()=>[V("div",h,[j,f(" Tooltip: row "+i(l)+", column "+i(g),1)])]),_:2},1032,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","disabled","clickable","top","right","bottom","left","no-wrap","show-blend"])),64))])),64))]),_:1}),n(_,null,{default:r(()=>[n(t,{modelValue:e.bordered,"onUpdate:modelValue":o[0]||(o[0]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(t,{modelValue:e.elevated,"onUpdate:modelValue":o[1]||(o[1]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),n(t,{modelValue:e.rounded,"onUpdate:modelValue":o[2]||(o[2]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(t,{modelValue:e.roundedLg,"onUpdate:modelValue":o[3]||(o[3]=l=>e.roundedLg=l),label:"Rounded lg"},null,8,["modelValue"]),n(t,{modelValue:e.round,"onUpdate:modelValue":o[4]||(o[4]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),n(t,{modelValue:e.dark,"onUpdate:modelValue":o[5]||(o[5]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(t,{modelValue:e.light,"onUpdate:modelValue":o[6]||(o[6]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(x,{modelValue:e.color,"onUpdate:modelValue":o[7]||(o[7]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"]),n(t,{modelValue:e.disabled,"onUpdate:modelValue":o[8]||(o[8]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"]),n(t,{modelValue:e.clickable,"onUpdate:modelValue":o[9]||(o[9]=l=>e.clickable=l),label:"Clickable"},null,8,["modelValue"]),n(t,{modelValue:e.top,"onUpdate:modelValue":o[10]||(o[10]=l=>e.top=l),label:"top"},null,8,["modelValue"]),n(t,{modelValue:e.right,"onUpdate:modelValue":o[11]||(o[11]=l=>e.right=l),label:"right"},null,8,["modelValue"]),n(t,{modelValue:e.bottom,"onUpdate:modelValue":o[12]||(o[12]=l=>e.bottom=l),label:"bottom"},null,8,["modelValue"]),n(t,{modelValue:e.left,"onUpdate:modelValue":o[13]||(o[13]=l=>e.left=l),label:"left"},null,8,["modelValue"]),n(t,{modelValue:e.noWrap,"onUpdate:modelValue":o[14]||(o[14]=l=>e.noWrap=l),label:"no wrap"},null,8,["modelValue"]),n(t,{modelValue:e.showBlend,"onUpdate:modelValue":o[15]||(o[15]=l=>e.showBlend=l),label:"Show blend"},null,8,["modelValue"])]),_:1})]),_:1})}var G=w(Z,[["render",q]]);const J=F({name:"DocsComponentsAsyncContent",components:{PageHeader:y,ComponentApi:H,TooltipExample:G},data(){return{component:c}}}),M=f(" Tooltip ");function O(m,o,U,B,e,C){const s=d("PageHeader"),p=d("TooltipExample"),a=d("ComponentApi");return u(),b("div",{class:z(m.$bem({}))},[n(s,null,{default:r(()=>[M]),_:1}),n(p),n(a,{component:m.component},null,8,["component"])],2)}var le=w(J,[["render",O]]);export{le as default};