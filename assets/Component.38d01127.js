import{_ as c,K as S,a1 as i,r as e,o as l,c as z,w as t,d as n,f as C,P as K,C as P,g as V,n as v,h as $}from"./index.2e9bb75e.js";import{P as E,S as g}from"./Sandbox.5616347c.js";import{K as w}from"./Knobs.12997fb5.js";const h={name:"SpinnerExample",components:{Preview:E,Sandbox:g,Knobs:w,KnobListItem:S,VSpinner:i},data(){return{sizes:["-","lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"],size:"3x"}}};function k(s,a,_,d,o,x){const p=e("VSpinner"),m=e("Preview"),r=e("KnobListItem"),u=e("Knobs"),f=e("Sandbox");return l(),z(f,{id:"example",title:"Example"},{controls:t(()=>[n(u,null,{default:t(()=>[n(r,{modelValue:o.size,"onUpdate:modelValue":a[0]||(a[0]=b=>o.size=b),items:o.sizes,label:"Size"},null,8,["modelValue","items"])]),_:1})]),default:t(()=>[n(m,null,{default:t(()=>[n(p,{size:o.size},null,8,["size"])]),_:1})]),_:1})}var A=c(h,[["render",k]]);const B=C({name:"DocsComponentsSpinner",components:{PageHeader:K,ComponentApi:P,Example:A},data(){return{component:i}}}),H=$(" Spinner ");function I(s,a,_,d,o,x){const p=e("PageHeader"),m=e("Example"),r=e("ComponentApi");return l(),V("div",{class:v(s.$bem({}))},[n(p,null,{default:t(()=>[H]),_:1}),n(m),n(r,{component:s.component},null,8,["component"])],2)}var T=c(B,[["render",I]]);export{T as default};
