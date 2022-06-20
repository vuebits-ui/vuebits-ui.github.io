import{_ as b,K,a as I,b as k,a8 as V,r as d,o as f,c as S,w as u,d as n,f as y,P as z,C,g as L,n as E,h as P}from"./index.2e9bb75e.js";import{P as v,S as B}from"./Sandbox.5616347c.js";import{K as T}from"./Knobs.12997fb5.js";import{a as _,s as w}from"./story-params.3e80c8a4.js";const D={name:"TextareaExample",components:{Preview:v,Sandbox:B,Knobs:T,KnobListItem:K,KnobBoolean:I,KnobString:k,VTextarea:V},data(){return{icons:_,text:"some text...",bordered:!1,round:!0,rounded:!1,roundedLg:!1,dark:!1,light:!0,disabled:!1,leftIcon:"none",rightIcon:"none",label:"Some label",error:!1,placeholder:"",depressed:!0,readonly:!1,sizes:w,size:"md"}},mounted(){this.$refs.textarea.focus()},methods:{submit(s){s.preventDefault(),console.log("submit")}}};function R(s,l,g,x,e,p){const t=d("VTextarea"),m=d("Preview"),r=d("KnobBoolean"),i=d("KnobListItem"),a=d("KnobString"),c=d("Knobs"),U=d("Sandbox");return f(),S(U,{id:"example",title:"Example"},{controls:u(()=>[n(c,null,{default:u(()=>[n(r,{modelValue:e.dark,"onUpdate:modelValue":l[1]||(l[1]=o=>e.dark=o),label:"Dark"},null,8,["modelValue"]),n(r,{modelValue:e.light,"onUpdate:modelValue":l[2]||(l[2]=o=>e.light=o),label:"Light"},null,8,["modelValue"]),n(r,{modelValue:e.bordered,"onUpdate:modelValue":l[3]||(l[3]=o=>e.bordered=o),label:"Bordered"},null,8,["modelValue"]),n(r,{modelValue:e.depressed,"onUpdate:modelValue":l[4]||(l[4]=o=>e.depressed=o),label:"Depressed"},null,8,["modelValue"]),n(r,{modelValue:e.rounded,"onUpdate:modelValue":l[5]||(l[5]=o=>e.rounded=o),label:"Rounded"},null,8,["modelValue"]),n(r,{modelValue:e.roundedLg,"onUpdate:modelValue":l[6]||(l[6]=o=>e.roundedLg=o),label:"Rounded large"},null,8,["modelValue"]),n(r,{modelValue:e.round,"onUpdate:modelValue":l[7]||(l[7]=o=>e.round=o),label:"Round"},null,8,["modelValue"]),n(r,{modelValue:e.disabled,"onUpdate:modelValue":l[8]||(l[8]=o=>e.disabled=o),label:"Disabled"},null,8,["modelValue"]),n(i,{modelValue:e.size,"onUpdate:modelValue":l[9]||(l[9]=o=>e.size=o),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(i,{modelValue:e.leftIcon,"onUpdate:modelValue":l[10]||(l[10]=o=>e.leftIcon=o),items:e.icons,label:"Left icon"},null,8,["modelValue","items"]),n(i,{modelValue:e.rightIcon,"onUpdate:modelValue":l[11]||(l[11]=o=>e.rightIcon=o),items:e.icons,label:"Right icon"},null,8,["modelValue","items"]),n(r,{modelValue:e.error,"onUpdate:modelValue":l[12]||(l[12]=o=>e.error=o),label:"Error"},null,8,["modelValue"]),n(r,{modelValue:e.readonly,"onUpdate:modelValue":l[13]||(l[13]=o=>e.readonly=o),label:"Readonly"},null,8,["modelValue"]),n(a,{modelValue:e.label,"onUpdate:modelValue":l[14]||(l[14]=o=>e.label=o),label:"Label"},null,8,["modelValue"]),n(a,{modelValue:e.placeholder,"onUpdate:modelValue":l[15]||(l[15]=o=>e.placeholder=o),label:"Placeholder"},null,8,["modelValue"])]),_:1})]),default:u(()=>[n(m,null,{default:u(()=>[n(t,{ref:"textarea",modelValue:e.text,"onUpdate:modelValue":l[0]||(l[0]=o=>e.text=o),bordered:e.bordered,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,size:e.size,dark:e.dark,light:e.light,disabled:e.disabled,"left-icon":e.leftIcon!=="none"?e.leftIcon:null,"right-icon":e.rightIcon!=="none"?e.rightIcon:null,"right-icon-clickable":"",error:e.error,type:s.type,readonly:e.readonly,depressed:e.depressed,label:e.label,placeholder:e.placeholder,onEnterNoShift:p.submit},null,8,["modelValue","bordered","round","rounded","rounded-lg","size","dark","light","disabled","left-icon","right-icon","error","type","readonly","depressed","label","placeholder","onEnterNoShift"])]),_:1})]),_:1})}var N=b(D,[["render",R]]);const A=y({name:"DocsComponentsTextarea",components:{PageHeader:z,ComponentApi:C,Example:N},data(){return{component:V}}}),H=P(" Textarea ");function h(s,l,g,x,e,p){const t=d("PageHeader"),m=d("Example"),r=d("ComponentApi");return f(),L("div",{class:E(s.$bem({}))},[n(t,null,{default:u(()=>[H]),_:1}),n(m),n(r,{component:s.component},null,8,["component"])],2)}var J=b(A,[["render",h]]);export{J as default};