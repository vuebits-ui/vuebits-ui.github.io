import{d as k,A as V,u as v,g as i,o as t,e as m,B as _,C,m as p,h as l,b,n as h,c as f,j as N,i as $,D as P,E as D,G as E,H as R,k as S,f as T,t as U,p as j}from"./index.d767eba6.js";const w=["id","disabled"],x=["for"],z=k({__name:"Checkbox",props:V({modelValue:{type:Boolean},id:{},label:{},color:{},disabled:{type:Boolean},dark:{type:Boolean},light:{type:Boolean},bordered:{type:Boolean},rounded:{type:Boolean},roundedLg:{type:Boolean},round:{type:Boolean},error:{type:Boolean}},{label:null,color:"primary",disabled:!1,...P,...D,...E,...R}),emits:["update:modelValue","change"],setup(u,{emit:n}){const a=u,s=n,o=j("ui-checkbox"),d=v(),B=e=>{s("update:modelValue",e),s("change",e)},r=i({get:()=>a.modelValue,set:e=>{B(e)}}),g=i(()=>{const e=a.modelValue?[`has-bg-color-${a.color}`]:[];return[...o({e:"checkmark",m:{rounded:a.rounded,unchecked:!a.modelValue,bordered:a.bordered,dark:a.dark,light:a.light,error:a.error}}),...e]});return(e,c)=>(t(),m("div",p({class:l(o)({m:{disabled:e.disabled}})},l(d).testElName("checkbox")),[_((t(),m("input",p({id:`check_${e.id}`,ref:"checkboxRef",key:e.id,"onUpdate:modelValue":c[0]||(c[0]=y=>r.value=y),class:l(o)({e:"input"}),type:"checkbox",disabled:e.disabled},l(d).testElName("checkbox-input")),null,16,w)),[[C,r.value]]),b("label",{class:h(l(o)({e:"label"})),for:`check_${e.id}`},[b("span",{class:h(g.value)},[r.value?(t(),f(l(S),{key:0,name:l(d).icons.values.check},null,8,["name"])):N("",!0)],2),$(e.$slots,"default",{},()=>[T(U(e.label),1)])],10,x)],16))}}),G=k({__name:"KnobBoolean",props:{modelValue:{type:Boolean},label:{}},emits:["update:model-value"],setup(u,{emit:n}){const a=n,s=o=>{a("update:model-value",o)};return(o,d)=>(t(),f(l(z),{id:o.label,"model-value":o.modelValue,label:o.label,bordered:"",rounded:"",light:"",class:"knob-boolean",onChange:s},null,8,["id","model-value","label"]))}});export{G as _,z as a};