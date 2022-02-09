import{_ as u,a as x,l as m,P as D,C as g}from"./index.e5dbef19.js";import{P as C,S as B}from"./Sandbox.eb4f66cf.js";import{K as P}from"./Knobs.f49c0270.js";import{b as l,o as c,e as v,w as a,k as n,l as i,j as K,d as w,c as E,n as S}from"./vendor.5a863b1c.js";const L={name:"DatepickerExample",components:{Preview:C,Sandbox:B,Knobs:P,KnobBoolean:x,VDatepicker:m},data(){return{date:null,disableBefore:new Date,round:!0,rounded:!1,roundedLg:!1}}};function U(d,o,_,f,e,b){const s=l("VDatepicker"),p=l("Preview"),t=l("KnobBoolean"),V=l("Knobs"),k=l("Sandbox");return c(),v(k,{id:"example",title:"Example"},{controls:a(()=>[n(V,null,{default:a(()=>[n(t,{modelValue:e.rounded,"onUpdate:modelValue":o[1]||(o[1]=r=>e.rounded=r),label:"Rounded"},null,8,["modelValue"]),n(t,{modelValue:e.roundedLg,"onUpdate:modelValue":o[2]||(o[2]=r=>e.roundedLg=r),label:"Rounded large"},null,8,["modelValue"]),n(t,{modelValue:e.round,"onUpdate:modelValue":o[3]||(o[3]=r=>e.round=r),label:"Round"},null,8,["modelValue"])]),_:1})]),default:a(()=>[n(p,null,{default:a(()=>[n(s,{modelValue:e.date,"onUpdate:modelValue":o[0]||(o[0]=r=>e.date=r),"disable-before":e.disableBefore,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg},null,8,["modelValue","disable-before","round","rounded","rounded-lg"]),i(" "+K(e.date),1)]),_:1})]),_:1})}var A=u(L,[["render",U]]);const H=w({name:"DocsComponentsDatepicker",components:{PageHeader:D,ComponentApi:g,DatepickerExample:A},data(){return{component:m}}}),R=i(" Datepicker ");function N(d,o,_,f,e,b){const s=l("PageHeader"),p=l("DatepickerExample"),t=l("ComponentApi");return c(),E("div",{class:S(d.$bem({}))},[n(s,null,{default:a(()=>[R]),_:1}),n(p),n(t,{component:d.component},null,8,["component"])],2)}var q=u(H,[["render",N]]);export{q as default};