import{_ as d,Q as _,j as $,P as T,C as b}from"./index.d85ea893.js";import{P as V,S as v}from"./Sandbox.1953b8f3.js";import{K as y}from"./Knobs.1a062258.js";import{b as t,o as u,e as P,w as e,k as o,i as c,j as r,C as E,l,d as k,c as w,n as B}from"./vendor.5cc0b48b.js";const K={name:"TimelineExample",components:{Preview:V,Sandbox:v,Knobs:y,VTimeline:_,VCard:$},data(){return{items:[{date:"31.01.2021",time:"09:10",type:"primary",data:{title:"Some title",content:"Some content"},highlight:!0},{date:"25.01.2021",time:"09:40",type:"error",data:{title:"Some title",content:"Some content"},highlight:!0},{date:"22.01.2021",time:"09:10",data:{title:"Some title",content:"Some content"}},{date:"21.01.2021",time:"09:10",type:"success",data:{title:"Some title",content:"Some content"}}]}}},N=l(" Load more ... "),A=l(" No items ... ");function H(a,f,h,C,p,S){const s=t("VCard"),i=t("VTimeline"),m=t("Preview"),x=t("Knobs"),g=t("Sandbox");return u(),P(g,{id:"example",title:"Example"},{controls:e(()=>[o(x)]),default:e(()=>[o(m,null,{default:e(()=>[o(i,{items:p.items},{item:e(({item:n})=>[o(s,{rounded:"",elevated:""},{default:e(()=>[c("h3",null,r(n.title),1),c("p",null,r(n.content),1)]),_:2},1024)]),date:e(({item:n})=>[c("span",{style:E({color:n.highlight?"black":"grey"})},r(n.date),5)]),more:e(()=>[N]),"no-items":e(()=>[A]),_:1},8,["items"])]),_:1})]),_:1})}var j=d(K,[["render",H]]);const z=k({name:"DocsComponentsTimeline",components:{PageHeader:T,ComponentApi:b,TimelineExample:j},data(){return{component:_}}}),D=l(" Timeline ");function L(a,f,h,C,p,S){const s=t("PageHeader"),i=t("TimelineExample"),m=t("ComponentApi");return u(),w("div",{class:B(a.$bem({}))},[o(s,null,{default:e(()=>[D]),_:1}),o(i),o(m,{component:a.component},null,8,["component"])],2)}var I=d(z,[["render",L]]);export{I as default};