import{_ as c,K as S,E as i,P as z,C}from"./index.e5dbef19.js";import{P as K,S as P}from"./Sandbox.eb4f66cf.js";import{K as V}from"./Knobs.f49c0270.js";import{b as e,o as l,e as v,w as t,k as n,d as E,c as $,n as w,l as g}from"./vendor.5a863b1c.js";const k={name:"SpinnerExample",components:{Preview:K,Sandbox:P,Knobs:V,KnobListItem:S,VSpinner:i},data(){return{sizes:["-","lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"],size:"3x"}}};function A(s,a,_,d,o,x){const p=e("VSpinner"),m=e("Preview"),r=e("KnobListItem"),u=e("Knobs"),f=e("Sandbox");return l(),v(f,{id:"example",title:"Example"},{controls:t(()=>[n(u,null,{default:t(()=>[n(r,{modelValue:o.size,"onUpdate:modelValue":a[0]||(a[0]=b=>o.size=b),items:o.sizes,label:"Size"},null,8,["modelValue","items"])]),_:1})]),default:t(()=>[n(m,null,{default:t(()=>[n(p,{size:o.size},null,8,["size"])]),_:1})]),_:1})}var B=c(k,[["render",A]]);const H=E({name:"DocsComponentsSpinner",components:{PageHeader:z,ComponentApi:C,Example:B},data(){return{component:i}}}),I=g(" Spinner ");function L(s,a,_,d,o,x){const p=e("PageHeader"),m=e("Example"),r=e("ComponentApi");return l(),$("div",{class:w(s.$bem({}))},[n(p,null,{default:t(()=>[I]),_:1}),n(m),n(r,{component:s.component},null,8,["component"])],2)}var U=c(H,[["render",L]]);export{U as default};