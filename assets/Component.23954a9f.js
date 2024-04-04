import{_ as c,ao as k,o as _,e as S,i as z,m as P,l as h,r as s,c as x,w as t,a as n,f as i,W as H,d as L,P as F,n as N}from"./index.d767eba6.js";import{_ as O,U,a as M,b as B}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";import{_ as I,S as W,a as A}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as R}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as T}from"./KnobListItem.vue_vue_type_script_setup_true_lang.47d5f286.js";import{_ as D}from"./KnobNumber.vue_vue_type_script_setup_true_lang.704d7593.js";import{s as j,t as q}from"./story-params.bce1115e.js";function G(d,o,b,V,e,u){return _(),S("div",P({class:d.classes},d.$ui.testElName("modal-footer")),[z(d.$slots,"default")],16)}const v=c(k,[["render",G]]),J={name:"ModalExample",components:{Preview:I,Sandbox:W,Knobs:O,KnobListItem:T,KnobBoolean:R,KnobNumber:D,UiButton:h,UiModal:U,UiModalHeader:M,UiModalBody:B,UiModalFooter:v},data(){return{isModalShown:!1,areSlotsShown:!1,sizes:j,positions:["middle","top","left","bottom","right","fullscreen"],transitions:q,persistent:!1,bordered:!1,elevated:!1,rounded:!1,roundedLg:!1,size:"md",width:null,position:"middle",transition:"slide-top",closeOnEsc:!1}},computed:{computedWidth(){return this.width?Math.max(this.width,300):this.width}}};function Q(d,o,b,V,e,u){const a=s("UiButton"),p=s("UiModalHeader"),m=s("UiModalBody"),r=s("KnobBoolean"),f=s("KnobListItem"),g=s("KnobNumber"),C=s("Knobs"),w=s("UiModalFooter"),y=s("UiModal"),E=s("Preview"),K=s("Sandbox");return _(),x(K,{id:"example",title:"Example"},{default:t(()=>[n(E,null,{default:t(()=>[n(a,{color:"primary",dark:"",onClick:o[0]||(o[0]=l=>e.isModalShown=!0)},{default:t(()=>[i(" Open modal ")]),_:1}),n(y,{modelValue:e.isModalShown,"onUpdate:modelValue":o[13]||(o[13]=l=>e.isModalShown=l),bordered:e.bordered,elevated:e.elevated,rounded:e.rounded,"rounded-lg":e.roundedLg,size:e.size,persistent:e.persistent,width:u.computedWidth,position:e.position,transition:e.transition,"close-on-esc":e.closeOnEsc},H({default:t(()=>[n(p,null,{default:t(()=>[i("Header")]),_:1}),n(m,null,{default:t(()=>[i(" Body ")]),_:1}),n(m,null,{default:t(()=>[n(C,{style:{width:"100%"}},{default:t(()=>[n(r,{modelValue:e.areSlotsShown,"onUpdate:modelValue":o[1]||(o[1]=l=>e.areSlotsShown=l),label:"Show slots"},null,8,["modelValue"]),n(f,{modelValue:e.position,"onUpdate:modelValue":o[2]||(o[2]=l=>e.position=l),items:e.positions,label:"Position"},null,8,["modelValue","items"]),n(f,{modelValue:e.size,"onUpdate:modelValue":o[3]||(o[3]=l=>e.size=l),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(r,{modelValue:e.persistent,"onUpdate:modelValue":o[4]||(o[4]=l=>e.persistent=l),label:"Persistent"},null,8,["modelValue"]),n(r,{modelValue:e.closeOnEsc,"onUpdate:modelValue":o[5]||(o[5]=l=>e.closeOnEsc=l),label:"Close on ESC"},null,8,["modelValue"]),n(r,{modelValue:e.bordered,"onUpdate:modelValue":o[6]||(o[6]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(r,{modelValue:e.elevated,"onUpdate:modelValue":o[7]||(o[7]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),n(r,{modelValue:e.rounded,"onUpdate:modelValue":o[8]||(o[8]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(r,{modelValue:e.roundedLg,"onUpdate:modelValue":o[9]||(o[9]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),n(f,{modelValue:e.transition,"onUpdate:modelValue":o[10]||(o[10]=l=>e.transition=l),items:e.transitions,label:"Transition"},null,8,["modelValue","items"]),n(g,{modelValue:e.width,"onUpdate:modelValue":o[11]||(o[11]=l=>e.width=l),min:300,label:"Width (min width is 300)"},null,8,["modelValue"])]),_:1})]),_:1}),n(w,null,{default:t(()=>[i("Footer")]),_:1}),n(w,null,{default:t(()=>[n(a,{dark:"",color:"primary",onClick:o[12]||(o[12]=l=>e.isModalShown=!1)},{default:t(()=>[i(" Close modal ")]),_:1})]),_:1})]),_:2},[e.areSlotsShown?{name:"top",fn:t(()=>[i(" top ")]),key:"0"}:void 0,e.areSlotsShown?{name:"right",fn:t(()=>[i(" right ")]),key:"1"}:void 0,e.areSlotsShown?{name:"bottom",fn:t(()=>[i(" bottom ")]),key:"2"}:void 0,e.areSlotsShown?{name:"left",fn:t(()=>[i(" left ")]),key:"3"}:void 0]),1032,["modelValue","bordered","elevated","rounded","rounded-lg","size","persistent","width","position","transition","close-on-esc"])]),_:1})]),_:1})}const X=c(J,[["render",Q]]),Y=L({name:"DocsComponentsIconButton",components:{PageHeader:F,ComponentApi:A,ModalExample:X},data(){return{component:U,componentHeader:M,componentBody:B,componentFooter:v}}});function Z(d,o,b,V,e,u){const a=s("PageHeader"),p=s("ModalExample"),m=s("ComponentApi");return _(),S("div",{class:N(d.$bem({}))},[n(a,null,{default:t(()=>[i(" Modal ")]),_:1}),n(p),n(m,{component:d.component},null,8,["component"]),n(m,{component:d.componentHeader},null,8,["component"]),n(m,{component:d.componentBody},null,8,["component"]),n(m,{component:d.componentFooter},null,8,["component"])],2)}const de=c(Y,[["render",Z]]);export{de as default};