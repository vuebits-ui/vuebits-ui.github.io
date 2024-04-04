import{_ as k,aN as w,l as T,ai as L,aO as K,r as d,o as m,c as P,w as r,a as n,b as i,e as V,s as U,F as v,m as S,J as E,f,t as b,x as H,d as I,P as A,n as D}from"./index.d767eba6.js";import{_ as M,S as N,a as R}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as W}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as z}from"./KnobListItem.vue_vue_type_script_setup_true_lang.47d5f286.js";import{_ as F}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";import{c as J}from"./story-params.bce1115e.js";const O={name:"TooltipExample",components:{Preview:M,Sandbox:N,Knobs:F,KnobListItem:z,KnobBoolean:W,UiTooltip:w,UiButton:T},setup(){const s=L({padding:"15px",width:"200px",height:"200px"}),o=setInterval(()=>{s.height=`${200+Math.round(Math.random()*200)}px`,s.width=`${200+Math.round(Math.random()*200)}px`},5e3);return K(()=>{clearInterval(o)}),{tooltipStyle:s}},data(){return{bordered:!1,elevated:!1,round:!1,rounded:!1,roundedLg:!1,dark:!0,light:!1,color:"",colors:J,disabled:!1,clickable:!1,top:!1,right:!1,bottom:!0,left:!1,noWrap:!1,showBlend:!1,position:null,positions:["bottom","right","top","left"]}}},q={style:{height:"1000px"}},G=i("h1",null,"Hello!",-1);function Q(s,o,x,g,e,B){const u=d("UiButton"),p=d("UiTooltip"),a=d("Preview"),t=d("KnobBoolean"),c=d("KnobListItem"),C=d("Knobs"),h=d("Sandbox");return m(),P(h,{id:"example",title:"Example"},{default:r(()=>[n(a,{style:{height:"300px",overflow:"auto"}},{default:r(()=>[i("div",q,[(m(),V(v,null,U(2,l=>i("div",{key:l},[(m(),V(v,null,U(2,_=>n(p,{key:_,style:{width:"50%"},bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,disabled:e.disabled,clickable:e.clickable,top:e.top,right:e.right,bottom:e.bottom,left:e.left,"no-wrap":e.noWrap,"show-blend":e.showBlend,position:e.position},{activator:r(({on:y})=>[n(u,S({block:"",hoverable:"",bordered:""},E(y)),{default:r(()=>[f(b(e.clickable?"Click":"Hover")+" me to show tooltip ",1)]),_:2},1040)]),default:r(()=>[i("div",{style:H(g.tooltipStyle)},[G,f(" Tooltip: row "+b(l)+", column "+b(_),1)],4)]),_:2},1032,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","disabled","clickable","top","right","bottom","left","no-wrap","show-blend","position"])),64))])),64))])]),_:1}),n(C,null,{default:r(()=>[n(t,{modelValue:e.bordered,"onUpdate:modelValue":o[0]||(o[0]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(t,{modelValue:e.elevated,"onUpdate:modelValue":o[1]||(o[1]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),n(t,{modelValue:e.rounded,"onUpdate:modelValue":o[2]||(o[2]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(t,{modelValue:e.roundedLg,"onUpdate:modelValue":o[3]||(o[3]=l=>e.roundedLg=l),label:"Rounded lg"},null,8,["modelValue"]),n(t,{modelValue:e.round,"onUpdate:modelValue":o[4]||(o[4]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),n(t,{modelValue:e.dark,"onUpdate:modelValue":o[5]||(o[5]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),n(t,{modelValue:e.light,"onUpdate:modelValue":o[6]||(o[6]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),n(c,{modelValue:e.color,"onUpdate:modelValue":o[7]||(o[7]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"]),n(t,{modelValue:e.disabled,"onUpdate:modelValue":o[8]||(o[8]=l=>e.disabled=l),label:"Disabled"},null,8,["modelValue"]),n(t,{modelValue:e.clickable,"onUpdate:modelValue":o[9]||(o[9]=l=>e.clickable=l),label:"Clickable"},null,8,["modelValue"]),n(c,{modelValue:e.position,"onUpdate:modelValue":o[10]||(o[10]=l=>e.position=l),items:e.positions,label:"Position"},null,8,["modelValue","items"]),n(t,{modelValue:e.top,"onUpdate:modelValue":o[11]||(o[11]=l=>e.top=l),label:"Top (obsolete)"},null,8,["modelValue"]),n(t,{modelValue:e.right,"onUpdate:modelValue":o[12]||(o[12]=l=>e.right=l),label:"Right (obsolete)"},null,8,["modelValue"]),n(t,{modelValue:e.bottom,"onUpdate:modelValue":o[13]||(o[13]=l=>e.bottom=l),label:"Bottom (obsolete)"},null,8,["modelValue"]),n(t,{modelValue:e.left,"onUpdate:modelValue":o[14]||(o[14]=l=>e.left=l),label:"Left (obsolete)"},null,8,["modelValue"]),n(t,{modelValue:e.noWrap,"onUpdate:modelValue":o[15]||(o[15]=l=>e.noWrap=l),label:"no wrap"},null,8,["modelValue"]),n(t,{modelValue:e.showBlend,"onUpdate:modelValue":o[16]||(o[16]=l=>e.showBlend=l),label:"Show blend"},null,8,["modelValue"])]),_:1})]),_:1})}const X=k(O,[["render",Q]]),Y=I({name:"DocsComponentsAsyncContent",components:{PageHeader:A,ComponentApi:R,TooltipExample:X},data(){return{component:w}}});function Z(s,o,x,g,e,B){const u=d("PageHeader"),p=d("TooltipExample"),a=d("ComponentApi");return m(),V("div",{class:D(s.$bem({}))},[n(u,null,{default:r(()=>[f(" Tooltip ")]),_:1}),n(p),n(a,{component:s.component},null,8,["component"])],2)}const te=k(Y,[["render",Z]]);export{te as default};
