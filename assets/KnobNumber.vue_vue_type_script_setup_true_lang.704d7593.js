import{d as m,o as n,c as u,h as t,M as p}from"./index.d767eba6.js";const i=m({__name:"KnobNumber",props:{modelValue:{},label:{},min:{default:0},max:{default:void 0},step:{default:1}},emits:["update:model-value"],setup(s,{emit:a}){const l=a,o=e=>{l("update:model-value",Number(e))};return(e,r)=>(n(),u(t(p),{"model-value":e.modelValue,placeholder:"Type some number...",label:e.label,round:"",bordered:"",light:"","no-hint":"",min:e.min,max:e.max,step:e.step,type:"number",class:"knob-number",onInput:o},null,8,["model-value","label","min","max","step"]))}});export{i as _};