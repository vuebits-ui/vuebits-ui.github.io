import{_ as m,an as x,r as n,o as r,e as u,a as e,m as C,j as L,c as v,w as s,b as P,f,d as h,P as E,n as S}from"./index.d767eba6.js";import{_ as V,S as K,a as U}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as w}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as N}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";function k(o,d,c,p,a,_){const t=n("UiSpinner");return o.loading?(r(),u("div",C({key:0,class:o.$bem({})},o.$ui.testElName("loading-blend")),[e(t)],16)):L("",!0)}const g=m(x,[["render",k]]),A={name:"LoadingBlendExample",components:{Preview:V,Sandbox:K,Knobs:N,KnobBoolean:w,UiLoadingBlend:g},data(){return{loading:!0}},mounted(){setTimeout(()=>{this.loading=!1},2e3)}},H={class:"is-bordered has-padding-md is-rounded",style:{position:"relative",height:"40rem"}};function y(o,d,c,p,a,_){const t=n("UiLoadingBlend"),l=n("Preview"),i=n("KnobBoolean"),$=n("Knobs"),b=n("Sandbox");return r(),v(b,{id:"example",title:"Example"},{controls:s(()=>[e($,null,{default:s(()=>[e(i,{modelValue:a.loading,"onUpdate:modelValue":d[0]||(d[0]=B=>a.loading=B),label:"Loading"},null,8,["modelValue"])]),_:1})]),default:s(()=>[e(l,null,{default:s(()=>[P("div",H,[f(" Some content "),e(t,{loading:a.loading},null,8,["loading"])])]),_:1})]),_:1})}const T=m(A,[["render",y]]),j=h({name:"DocsComponentsLoadingBlend",components:{PageHeader:E,ComponentApi:U,LoadingBlendExample:T},data(){return{component:g}}});function z(o,d,c,p,a,_){const t=n("PageHeader"),l=n("LoadingBlendExample"),i=n("ComponentApi");return r(),u("div",{class:S(o.$bem({}))},[e(t,null,{default:s(()=>[f(" Loading blend ")]),_:1}),e(l),e(i,{component:o.component},null,8,["component"])],2)}const I=m(j,[["render",z]]);export{I as default};
