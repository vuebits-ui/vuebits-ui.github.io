import{_,aE as P,o as m,e as i,b as w,F as T,s as k,m as u,i as C,f as c,t as S,n as v,B as g,aF as K,r as a,c as N,w as s,a as l,d as B,P as U}from"./index.d767eba6.js";import{_ as h,S as x,a as I}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as L}from"./KnobListItem.vue_vue_type_script_setup_true_lang.47d5f286.js";import{_ as A}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";const D=["onClick"];function F(e,r,d,f,n,$){return m(),i("div",u({class:e.$bem({})},e.$ui.testElName("tabs")),[w("ul",{class:v(e.$bem({e:"header"}))},[(m(!0),i(T,null,k(e.items,(o,t)=>(m(),i("li",u({key:t,class:e.tabClasses(t)},e.$ui.testElName("tabs-item"),{onClick:p=>e.selectTab(t)}),[C(e.$slots,`tab-${o.key}`,{},()=>[c(S(o.text),1)])],16,D))),128))],2),(m(!0),i(T,null,k(e.items,(o,t)=>g((m(),i("div",u({key:t},e.$ui.testElName("tabs-item-content")),[C(e.$slots,o.key)],16)),[[K,t===e.selectedIndex]])),128))],16)}const E=_(P,[["render",F]]),H={name:"TabsExample",components:{Preview:h,Sandbox:x,Knobs:A,KnobListItem:L,UiTabs:E},data(){return{tabs:[{key:1,text:"Tab 1"},{key:2,text:"Tab 2"},{key:3,text:"Tab 3"}],tab:2}}};function z(e,r,d,f,n,$){const o=a("UiTabs"),t=a("Preview"),p=a("KnobListItem"),V=a("Knobs"),y=a("Sandbox");return m(),N(y,{id:"example",title:"Example"},{controls:s(()=>[l(V,null,{default:s(()=>[l(p,{modelValue:n.tab,"onUpdate:modelValue":r[1]||(r[1]=b=>n.tab=b),items:n.tabs,label:"Tab"},null,8,["modelValue","items"])]),_:1})]),default:s(()=>[l(t,null,{default:s(()=>[l(o,{modelValue:n.tab,"onUpdate:modelValue":r[0]||(r[0]=b=>n.tab=b),items:n.tabs},{1:s(()=>[c(" Tab 1 content ")]),2:s(()=>[c(" Tab 2 content ")]),3:s(()=>[c(" Tab 3 content ")]),_:1},8,["modelValue","items"])]),_:1})]),_:1})}const j=_(H,[["render",z]]),q=B({name:"DocsComponentsTabs",components:{PageHeader:U,ComponentApi:I,Example:j},data(){return{component:E}}});function G(e,r,d,f,n,$){const o=a("PageHeader"),t=a("Example"),p=a("ComponentApi");return m(),i("div",{class:v(e.$bem({}))},[l(o,null,{default:s(()=>[c(" Tabs ")]),_:1}),l(t),l(p,{component:e.component},null,8,["component"])],2)}const R=_(q,[["render",G]]);export{R as default};