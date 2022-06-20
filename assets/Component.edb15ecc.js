import{_ as p,K as x,B as f,a as S,a2 as g,r,o as c,c as R,w as i,d as n,f as _,P as K,C as U,g as B,n as z,h as P}from"./index.2e9bb75e.js";import{P as E,S as N}from"./Sandbox.5616347c.js";import{K as W}from"./Knobs.12997fb5.js";import{c as A}from"./story-params.3e80c8a4.js";const I={name:"StarRatingExample",components:{Preview:E,Sandbox:N,Knobs:W,KnobListItem:x,KnobNumber:f,KnobBoolean:S,VStarRating:g},data(){return{colors:A,rating:4,maxRating:7,showRating:!0,roundedCorners:!1,activeColor:"primary",inactiveColor:"light",starSize:50,glow:0,borderWidth:0,borderColor:"light",glowColor:"light"}}};function k(s,e,b,V,o,C){const a=r("VStarRating"),u=r("Preview"),t=r("KnobNumber"),d=r("KnobBoolean"),m=r("KnobListItem"),w=r("Knobs"),v=r("Sandbox");return c(),R(v,{id:"example",title:"Example"},{controls:i(()=>[n(w,null,{default:i(()=>[n(t,{modelValue:o.maxRating,"onUpdate:modelValue":e[1]||(e[1]=l=>o.maxRating=l),label:"Max rating"},null,8,["modelValue"]),n(t,{modelValue:o.starSize,"onUpdate:modelValue":e[2]||(e[2]=l=>o.starSize=l),label:"Star size"},null,8,["modelValue"]),n(t,{modelValue:o.borderWidth,"onUpdate:modelValue":e[3]||(e[3]=l=>o.borderWidth=l),label:"Border Width"},null,8,["modelValue"]),n(t,{modelValue:o.glow,"onUpdate:modelValue":e[4]||(e[4]=l=>o.glow=l),label:"Glow"},null,8,["modelValue"]),n(d,{modelValue:o.showRating,"onUpdate:modelValue":e[5]||(e[5]=l=>o.showRating=l),label:"Show rating"},null,8,["modelValue"]),n(d,{modelValue:o.roundedCorners,"onUpdate:modelValue":e[6]||(e[6]=l=>o.roundedCorners=l),label:"Rounden corners"},null,8,["modelValue"]),n(m,{modelValue:o.activeColor,"onUpdate:modelValue":e[7]||(e[7]=l=>o.activeColor=l),items:o.colors,label:"Active color"},null,8,["modelValue","items"]),n(m,{modelValue:o.inactiveColor,"onUpdate:modelValue":e[8]||(e[8]=l=>o.inactiveColor=l),items:o.colors,label:"Inactive color"},null,8,["modelValue","items"]),n(m,{modelValue:o.borderColor,"onUpdate:modelValue":e[9]||(e[9]=l=>o.borderColor=l),items:o.colors,label:"Border color"},null,8,["modelValue","items"]),n(m,{modelValue:o.glowColor,"onUpdate:modelValue":e[10]||(e[10]=l=>o.glowColor=l),items:o.colors,label:"Glow color"},null,8,["modelValue","items"])]),_:1})]),default:i(()=>[n(u,null,{default:i(()=>[n(a,{modelValue:o.rating,"onUpdate:modelValue":e[0]||(e[0]=l=>o.rating=l),"max-rating":o.maxRating,"show-rating":o.showRating,"active-color":o.activeColor,"inactive-color":o.inactiveColor,"star-size":o.starSize,"rounded-corners":o.roundedCorners,glow:o.glow,"border-color":o.borderColor,"border-width":o.borderWidth,"glow-color":o.glowColor},null,8,["modelValue","max-rating","show-rating","active-color","inactive-color","star-size","rounded-corners","glow","border-color","border-width","glow-color"])]),_:1})]),_:1})}var H=p(I,[["render",k]]);const L=_({name:"DocsComponentsStarRating",components:{PageHeader:K,ComponentApi:U,StarRatingExample:H},data(){return{component:g}}}),G=P(" StarRating ");function y(s,e,b,V,o,C){const a=r("PageHeader"),u=r("StarRatingExample"),t=r("ComponentApi");return c(),B("div",{class:z(s.$bem({}))},[n(a,null,{default:i(()=>[G]),_:1}),n(u),n(t,{component:s.component},null,8,["component"])],2)}var j=p(L,[["render",y]]);export{j as default};