import{d as u,k as c,o as r,c as d,u as o,q as m}from"./index.8ac12abf.js";const i=u({__name:"KnobListItem",props:{modelValue:null,label:null,items:null},emits:["select","change","update:model-value"],setup(l,{emit:t}){const a=l,n=c(()=>a.items.map(e=>typeof e=="object"?e:{key:e,text:e.toString()})),s=e=>{t("update:model-value",e.key),t("select",e),e.key!==a.modelValue&&t("change",e)};return(e,p)=>(r(),d(o(m),{"model-value":l.modelValue,items:o(n),label:l.label,light:"","no-hint":"",round:"",bordered:"",class:"knob-list-item",onChange:s},null,8,["model-value","items","label"]))}});export{i as _};
