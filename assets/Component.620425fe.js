import{_ as c,K as U,a as x,n as z,d as P,e as _,f as b,g as w,w as S,P as y,C as H}from"./index.d85ea893.js";import{P as k,S as L}from"./Sandbox.1953b8f3.js";import{K as F}from"./Knobs.1a062258.js";import{s as N,t as O}from"./story-params.e6a8e965.js";import{b as s,o as M,e as I,w as t,k as n,u as A,l as d,d as W,c as R,n as T}from"./vendor.5cc0b48b.js";const D={name:"ModalExample",components:{Preview:k,Sandbox:L,Knobs:F,KnobListItem:U,KnobBoolean:x,KnobNumber:z,VButton:P,VModal:_,VModalHeader:b,VModalBody:w,VModalFooter:S},data(){return{isModalShown:!1,areSlotsShown:!1,sizes:N,positions:["middle","top","left","bottom","right","fullscreen"],transitions:O,persistent:!1,bordered:!1,elevated:!1,rounded:!1,roundedLg:!1,size:"md",width:null,position:"middle",transition:"slide-top",closeOnEsc:!1}},computed:{computedWidth(){return this.width?Math.max(this.width,300):this.width}}},j=d(" Open modal "),q=d(" top "),G=d(" right "),J=d(" bottom "),Q=d(" left "),X=d("Header"),Y=d(" Body "),Z=d("Footer"),$=d(" Close modal ");function ee(r,o,h,B,e,V){const u=s("VButton"),a=s("VModalHeader"),i=s("VModalBody"),m=s("KnobBoolean"),p=s("KnobListItem"),v=s("KnobNumber"),C=s("Knobs"),f=s("VModalFooter"),g=s("VModal"),K=s("Preview"),E=s("Sandbox");return M(),I(E,{id:"example",title:"Example"},{default:t(()=>[n(K,null,{default:t(()=>[n(u,{color:"primary",dark:"",onClick:o[0]||(o[0]=l=>e.isModalShown=!0)},{default:t(()=>[j]),_:1}),n(g,{modelValue:e.isModalShown,"onUpdate:modelValue":o[13]||(o[13]=l=>e.isModalShown=l),bordered:e.bordered,elevated:e.elevated,rounded:e.rounded,"rounded-lg":e.roundedLg,size:e.size,persistent:e.persistent,width:V.computedWidth,position:e.position,transition:e.transition,"close-on-esc":e.closeOnEsc},A({default:t(()=>[n(a,null,{default:t(()=>[X]),_:1}),n(i,null,{default:t(()=>[Y]),_:1}),n(i,null,{default:t(()=>[n(C,{style:{width:"100%"}},{default:t(()=>[n(m,{modelValue:e.areSlotsShown,"onUpdate:modelValue":o[1]||(o[1]=l=>e.areSlotsShown=l),label:"Show slots"},null,8,["modelValue"]),n(p,{modelValue:e.position,"onUpdate:modelValue":o[2]||(o[2]=l=>e.position=l),items:e.positions,label:"Position"},null,8,["modelValue","items"]),n(p,{modelValue:e.size,"onUpdate:modelValue":o[3]||(o[3]=l=>e.size=l),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(m,{modelValue:e.persistent,"onUpdate:modelValue":o[4]||(o[4]=l=>e.persistent=l),label:"Persistent"},null,8,["modelValue"]),n(m,{modelValue:e.closeOnEsc,"onUpdate:modelValue":o[5]||(o[5]=l=>e.closeOnEsc=l),label:"Close on ESC"},null,8,["modelValue"]),n(m,{modelValue:e.bordered,"onUpdate:modelValue":o[6]||(o[6]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),n(m,{modelValue:e.elevated,"onUpdate:modelValue":o[7]||(o[7]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),n(m,{modelValue:e.rounded,"onUpdate:modelValue":o[8]||(o[8]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),n(m,{modelValue:e.roundedLg,"onUpdate:modelValue":o[9]||(o[9]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),n(p,{modelValue:e.transition,"onUpdate:modelValue":o[10]||(o[10]=l=>e.transition=l),items:e.transitions,label:"Transition"},null,8,["modelValue","items"]),n(v,{modelValue:e.width,"onUpdate:modelValue":o[11]||(o[11]=l=>e.width=l),min:300,label:"Width (min width is 300)"},null,8,["modelValue"])]),_:1})]),_:1}),n(f,null,{default:t(()=>[Z]),_:1}),n(f,null,{default:t(()=>[n(u,{dark:"",color:"primary",onClick:o[12]||(o[12]=l=>e.isModalShown=!1)},{default:t(()=>[$]),_:1})]),_:1})]),_:2},[e.areSlotsShown?{name:"top",fn:t(()=>[q])}:void 0,e.areSlotsShown?{name:"right",fn:t(()=>[G])}:void 0,e.areSlotsShown?{name:"bottom",fn:t(()=>[J])}:void 0,e.areSlotsShown?{name:"left",fn:t(()=>[Q])}:void 0]),1032,["modelValue","bordered","elevated","rounded","rounded-lg","size","persistent","width","position","transition","close-on-esc"])]),_:1})]),_:1})}var oe=c(D,[["render",ee]]);const ne=W({name:"DocsComponentsIconButton",components:{PageHeader:y,ComponentApi:H,ModalExample:oe},data(){return{component:_,componentHeader:b,componentBody:w,componentFooter:S}}}),le=d(" Modal ");function te(r,o,h,B,e,V){const u=s("PageHeader"),a=s("ModalExample"),i=s("ComponentApi");return M(),R("div",{class:T(r.$bem({}))},[n(u,null,{default:t(()=>[le]),_:1}),n(a),n(i,{component:r.component},null,8,["component"]),n(i,{component:r.componentHeader},null,8,["component"]),n(i,{component:r.componentBody},null,8,["component"]),n(i,{component:r.componentFooter},null,8,["component"])],2)}var ue=c(ne,[["render",te]]);export{ue as default};