import{_ as m,U as c,r as n,o as r,c as x,w as e,a as o,b as $,f as p,d as L,P as v,e as C,n as V}from"./index.c99ef684.js";import{P as h,S as P,_ as E}from"./ComponentApi.cab76a41.js";import{_ as K}from"./KnobBoolean.cea721d9.js";import{_ as w}from"./Knobs.20694b9d.js";const S={name:"LoadingBlendExample",components:{Preview:h,Sandbox:P,Knobs:w,KnobBoolean:K,VLoadingBlend:c},data(){return{loading:!0}},mounted(){setTimeout(()=>{this.loading=!1},2e3)}},k={class:"is-bordered has-padding-md is-rounded",style:{position:"relative",height:"40rem"}},A=p(" Some content ");function H(t,s,_,u,a,f){const d=n("VLoadingBlend"),l=n("Preview"),i=n("KnobBoolean"),g=n("Knobs"),B=n("Sandbox");return r(),x(B,{id:"example",title:"Example"},{controls:e(()=>[o(g,null,{default:e(()=>[o(i,{modelValue:a.loading,"onUpdate:modelValue":s[0]||(s[0]=b=>a.loading=b),label:"Loading"},null,8,["modelValue"])]),_:1})]),default:e(()=>[o(l,null,{default:e(()=>[$("div",k,[A,o(d,{loading:a.loading},null,8,["loading"])])]),_:1})]),_:1})}var N=m(S,[["render",H]]);const T=L({name:"DocsComponentsLoadingBlend",components:{PageHeader:v,ComponentApi:E,LoadingBlendExample:N},data(){return{component:c}}}),U=p(" Loading blend ");function y(t,s,_,u,a,f){const d=n("PageHeader"),l=n("LoadingBlendExample"),i=n("ComponentApi");return r(),C("div",{class:V(t.$bem({}))},[o(d,null,{default:e(()=>[U]),_:1}),o(l),o(i,{component:t.component},null,8,["component"])],2)}var F=m(T,[["render",y]]);export{F as default};