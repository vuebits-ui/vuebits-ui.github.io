import{_,aD as T,o as l,e as i,F as C,s as g,m as $,b as p,t as f,n as v,r as a,c as E,w as m,a as o,d as P,P as k,f as V}from"./index.d767eba6.js";import{_ as y,S as L,a as N}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as A}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";const B=["button-selector","onClick"],U=["slider-selector"];function x(e,c,d,b,n,u){return l(),i("div",$({class:e.$bem({})},e.$ui.testElName("tab-switch")),[(l(!0),i(C,null,g(e.tabs,(s,t)=>(l(),i("div",$({key:t,"button-selector":`${e.rand}-${t}`,class:["tab-item",e.$bem({e:"item",m:e.isActive(t)?"active":""})]},e.$ui.testElName("tab-switch-item"),{onClick:r=>e.selectTab(t)}),[p("p",null,f(s.label),1)],16,B))),128)),p("div",{class:v(e.$bem({e:"slider"})),"slider-selector":e.rand},null,10,U)],16)}const h=_(T,[["render",x]]);const D={name:"TabSwitchExample",components:{Preview:y,Sandbox:L,Knobs:A,UiTabSwitch:h},data(){return{selectedTab:"",tabs:[{label:"Label",value:"value1"},{label:"Slightly Longer Label",value:"value2"},{label:"Label Medium",value:"value3"}]}}},H={class:"value-preview"};function K(e,c,d,b,n,u){const s=a("UiTabSwitch"),t=a("Preview"),r=a("Knobs"),w=a("Sandbox");return l(),E(w,{id:"example",title:"Example"},{controls:m(()=>[o(r)]),default:m(()=>[o(t,null,{default:m(()=>[o(s,{modelValue:n.selectedTab,"onUpdate:modelValue":c[0]||(c[0]=S=>n.selectedTab=S),tabs:n.tabs},null,8,["modelValue","tabs"]),p("p",H,f(n.selectedTab),1)]),_:1})]),_:1})}const F=_(D,[["render",K],["__scopeId","data-v-bcc8301d"]]),z=P({name:"DocsComponentsTabSwitch",components:{PageHeader:k,ComponentApi:N,TabSwitchExample:F},data(){return{component:h}}});function I(e,c,d,b,n,u){const s=a("PageHeader"),t=a("TabSwitchExample"),r=a("ComponentApi");return l(),i("div",{class:v(e.$bem({}))},[o(s,null,{default:m(()=>[V(" TabSwitch ")]),_:1}),o(t),o(r,{component:e.component},null,8,["component"])],2)}const G=_(z,[["render",I]]);export{G as default};