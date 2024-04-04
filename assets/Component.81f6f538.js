import{_ as b,ar as J,r,o as p,e as f,a as l,n as m,F as z,s as I,c as _,w as t,f as P,t as c,K as w,i as K,b as j,j as k,M as N,d as S,P as $,a3 as y}from"./index.d767eba6.js";import{_ as E,S as T,a as A}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as H}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as R}from"./KnobListItem.vue_vue_type_script_setup_true_lang.47d5f286.js";import{_ as D}from"./KnobNumber.vue_vue_type_script_setup_true_lang.704d7593.js";import{_ as F}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";import{c as M,s as q}from"./story-params.bce1115e.js";function G(e,n,V,U,o,C){const d=r("UiIconButton"),i=r("UiButton"),a=r("UiInput");return e.showPagination?(p(),f("div",{key:0,class:m(e.$bem({}))},[l(d,{icon:e.$ui.icons.values.previous,class:m(e.$bem({e:"arrow"})),disabled:e.currentPage===1,rounded:e.rounded,"rounded-lg":e.roundedLg,round:e.round,onClick:e.goToPreviousPage},null,8,["icon","class","disabled","rounded","rounded-lg","round","onClick"]),(p(!0),f(z,null,I(e.pageButtons,u=>(p(),_(i,{id:u.value,key:u.value,rounded:e.rounded,"rounded-lg":e.roundedLg,round:e.round,class:m(e.$bem({e:"page",m:{current:u.value===e.currentPage}})),onClick:w(g=>e.setPage(u.value),["prevent"])},{default:t(()=>[P(c(u.label),1)]),_:2},1032,["id","rounded","rounded-lg","round","class","onClick"]))),128)),l(d,{icon:e.$ui.icons.values.next,rounded:e.rounded,"rounded-lg":e.roundedLg,round:e.round,class:m(e.$bem({e:"arrow"})),disabled:e.currentPage===e.lastPage,onClick:w(e.goToNextPage,["prevent"])},null,8,["icon","rounded","rounded-lg","round","class","disabled","onClick"]),e.showJumper?(p(),f("div",{key:0,class:m(e.$bem({e:"jumper"}))},[K(e.$slots,"jumper",{},()=>[j("span",{class:m(e.$bem({e:"jumper-item"}))},c(e.dict.page),3),K(e.$slots,"jumper-input",{},()=>[l(a,{modelValue:e.currentPage,"onUpdate:modelValue":n[0]||(n[0]=u=>e.currentPage=u),rounded:e.rounded,"rounded-lg":e.roundedLg,round:e.round,type:"number",class:m(e.$bem({e:"jumper-item"})),min:1,max:e.lastPage,"no-hint":"",bordered:""},null,8,["modelValue","rounded","rounded-lg","round","class","max"])]),j("span",{class:m(e.$bem({e:"jumper-item"}))},c(e.dict.total)+" "+c(e.lastPage),3)])],2)):k("",!0)],2)):k("",!0)}const v=b(J,[["render",G]]),O={name:"NotificatorExample",components:{Preview:E,Sandbox:T,Knobs:F,KnobBoolean:H,KnobNumber:D,KnobListItem:R,UiPagination:v},data(){return{page:1,lastPage:10,showJumper:!0,colors:M,sizes:q,round:!0,rounded:!1,roundedLg:!1,color:null,size:"md"}}};function Q(e,n,V,U,o,C){const d=r("UiPagination"),i=r("Preview"),a=r("KnobNumber"),u=r("KnobBoolean"),g=r("KnobListItem"),B=r("Knobs"),L=r("Sandbox");return p(),_(L,{id:"example",title:"Example"},{controls:t(()=>[l(B,null,{default:t(()=>[l(a,{modelValue:o.lastPage,"onUpdate:modelValue":n[1]||(n[1]=s=>o.lastPage=s),label:"Number of pages"},null,8,["modelValue"]),l(u,{modelValue:o.showJumper,"onUpdate:modelValue":n[2]||(n[2]=s=>o.showJumper=s),label:"Jumper"},null,8,["modelValue"]),l(u,{modelValue:o.rounded,"onUpdate:modelValue":n[3]||(n[3]=s=>o.rounded=s),label:"Rounded"},null,8,["modelValue"]),l(u,{modelValue:o.roundedLg,"onUpdate:modelValue":n[4]||(n[4]=s=>o.roundedLg=s),label:"Rounded large"},null,8,["modelValue"]),l(u,{modelValue:o.round,"onUpdate:modelValue":n[5]||(n[5]=s=>o.round=s),label:"Round"},null,8,["modelValue"]),l(g,{modelValue:o.size,"onUpdate:modelValue":n[6]||(n[6]=s=>o.size=s),items:o.sizes,label:"Size"},null,8,["modelValue","items"]),l(g,{modelValue:o.color,"onUpdate:modelValue":n[7]||(n[7]=s=>o.color=s),items:o.colors,label:"Color"},null,8,["modelValue","items"])]),_:1})]),default:t(()=>[l(i,null,{default:t(()=>[l(d,{modelValue:o.page,"onUpdate:modelValue":n[0]||(n[0]=s=>o.page=s),"last-page":o.lastPage,"show-jumper":o.showJumper,round:o.round,rounded:o.rounded,"rounded-lg":o.roundedLg,color:o.color,size:o.size},null,8,["modelValue","last-page","show-jumper","round","rounded","rounded-lg","color","size"])]),_:1})]),_:1})}const W=b(O,[["render",Q]]),X={name:"PaginationCustomJumper",components:{UiPagination:v,UiInput:N},data(){return{page:7,lastPage:15}}};function Y(e,n,V,U,o,C){const d=r("UiInput"),i=r("UiPagination");return p(),_(i,{modelValue:o.page,"onUpdate:modelValue":n[1]||(n[1]=a=>o.page=a),"last-page":o.lastPage,"show-jumper":""},{jumper:t(()=>[P(" This is page number: "),l(d,{modelValue:o.page,"onUpdate:modelValue":n[0]||(n[0]=a=>o.page=a),type:"number",min:1,max:o.lastPage,bordered:"",round:"","no-hint":""},null,8,["modelValue","max"]),P(" out of all of the "+c(o.lastPage)+" pages! ",1)]),_:1},8,["modelValue","last-page"])}const Z=b(X,[["render",Y]]),h=S({name:"DocsComponentPagination",components:{PageHeader:$,ComponentApi:A,Story:y,PaginationExample:W,PaginationCustomJumper:Z},data(){return{component:v}}});function x(e,n,V,U,o,C){const d=r("PageHeader"),i=r("PaginationExample"),a=r("ComponentApi"),u=r("PaginationCustomJumper"),g=r("Story");return p(),f("div",{class:m(e.$bem({}))},[l(d,null,{default:t(()=>[P(" Pagination ")]),_:1}),l(i),l(a,{component:e.component},null,8,["component"]),l(g,{"file-name":"CustomJumper","component-name":"Pagination",title:"Custom jumper"},{default:t(()=>[l(u)]),_:1})],2)}const ae=b(h,[["render",x]]);export{ae as default};
