import{_ as d,a as K,B as w,K as z,Y as g,r as t,o as V,c as f,w as m,d as n,Q as J,h as c,t as S,f as U,P as v,C as B,S as L,g as N,n as j}from"./index.2e9bb75e.js";import{P as E,S as I}from"./Sandbox.5616347c.js";import{K as y}from"./Knobs.12997fb5.js";import{c as k,s as A}from"./story-params.3e80c8a4.js";const H={name:"NotificatorExample",components:{Preview:E,Sandbox:I,Knobs:y,KnobBoolean:K,KnobNumber:w,KnobListItem:z,VPagination:g},data(){return{page:1,jumperValue:5,lastPage:25,showJumper:!0,colors:k,sizes:A,round:!0,rounded:!1,roundedLg:!1,color:null,size:"md"}}};function R(p,o,_,P,e,b){const u=t("VPagination"),r=t("Preview"),s=t("KnobNumber"),a=t("KnobBoolean"),i=t("KnobListItem"),C=t("Knobs"),x=t("Sandbox");return V(),f(x,{id:"example",title:"Example"},{controls:m(()=>[n(C,null,{default:m(()=>[n(s,{modelValue:e.lastPage,"onUpdate:modelValue":o[1]||(o[1]=l=>e.lastPage=l),label:"Number of pages"},null,8,["modelValue"]),n(a,{modelValue:e.showJumper,"onUpdate:modelValue":o[2]||(o[2]=l=>e.showJumper=l),label:"Jumper"},null,8,["modelValue"]),n(a,{modelValue:e.rounded,"onUpdate:modelValue":o[3]||(o[3]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(a,{modelValue:e.roundedLg,"onUpdate:modelValue":o[4]||(o[4]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),n(a,{modelValue:e.round,"onUpdate:modelValue":o[5]||(o[5]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),n(i,{modelValue:e.size,"onUpdate:modelValue":o[6]||(o[6]=l=>e.size=l),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(i,{modelValue:e.color,"onUpdate:modelValue":o[7]||(o[7]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"])]),_:1})]),default:m(()=>[n(r,null,{default:m(()=>[n(u,{modelValue:e.page,"onUpdate:modelValue":o[0]||(o[0]=l=>e.page=l),"last-page":e.lastPage,"show-jumper":e.showJumper,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,color:e.color,size:e.size},null,8,["modelValue","last-page","show-jumper","round","rounded","rounded-lg","color","size"])]),_:1})]),_:1})}var D=d(H,[["render",R]]);const T={name:"PaginationCustomJumper",components:{VPagination:g,VInput:J},data(){return{page:7,lastPage:15}}},Q=c(" This is page number: ");function Y(p,o,_,P,e,b){const u=t("VInput"),r=t("VPagination");return V(),f(r,{modelValue:e.page,"onUpdate:modelValue":o[1]||(o[1]=s=>e.page=s),"last-page":e.lastPage,"show-jumper":""},{jumper:m(()=>[Q,n(u,{modelValue:e.page,"onUpdate:modelValue":o[0]||(o[0]=s=>e.page=s),type:"number",min:1,max:e.lastPage,bordered:"",round:"","no-hint":""},null,8,["modelValue","max"]),c(" out of all of the "+S(e.lastPage)+" pages! ",1)]),_:1},8,["modelValue","last-page"])}var q=d(T,[["render",Y]]);const F=U({name:"DocsComponentPagination",components:{PageHeader:v,ComponentApi:B,Story:L,PaginationExample:D,PaginationCustomJumper:q},data(){return{component:g}}}),G=c(" Pagination ");function M(p,o,_,P,e,b){const u=t("PageHeader"),r=t("PaginationExample"),s=t("ComponentApi"),a=t("PaginationCustomJumper"),i=t("Story");return V(),N("div",{class:j(p.$bem({}))},[n(u,null,{default:m(()=>[G]),_:1}),n(r),n(s,{component:p.component},null,8,["component"]),n(i,{"file-name":"CustomJumper","component-name":"Pagination",title:"Custom jumper"},{default:m(()=>[n(a)]),_:1})],2)}var h=d(F,[["render",M]]);export{h as default};
