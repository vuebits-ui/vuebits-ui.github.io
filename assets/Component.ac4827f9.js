import{_,k as u,r as o,o as i,c as w,w as m,a as n,e as p,F as U,s as $,b,t as V,f as v,d as T,P as N,a3 as h,n as C}from"./index.d767eba6.js";import{_ as F,S as B,a as R}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as E}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as H}from"./KnobListItem.vue_vue_type_script_setup_true_lang.47d5f286.js";import{_ as L}from"./KnobString.vue_vue_type_script_setup_true_lang.62422955.js";import{_ as A}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";import{a as z}from"./story-params.bce1115e.js";const D={name:"TileExample",components:{Preview:F,Sandbox:B,Knobs:A,KnobListItem:H,KnobBoolean:E,KnobString:L,UiIcon:u},data(){return{icons:z,sizes:["-","lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"],rotations:["-","90","180","270"],flips:["-","horizontal","vertical","both"],name:"check",prefix:"fa-",type:"fa",size:"-",rotate:"-",flip:"-",pulse:!1,spin:!1}}};function j(a,t,f,d,e,I){const l=o("UiIcon"),s=o("Preview"),x=o("KnobListItem"),y=o("KnobString"),r=o("KnobBoolean"),S=o("Knobs"),g=o("Sandbox");return i(),w(g,{id:"example",title:"Example"},{controls:m(()=>[n(S,null,{default:m(()=>[n(x,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=c=>e.name=c),items:e.icons,label:"Name"},null,8,["modelValue","items"]),n(y,{modelValue:e.prefix,"onUpdate:modelValue":t[1]||(t[1]=c=>e.prefix=c),label:"Prefix"},null,8,["modelValue"]),n(y,{modelValue:e.type,"onUpdate:modelValue":t[2]||(t[2]=c=>e.type=c),label:"Type"},null,8,["modelValue"]),n(x,{modelValue:e.size,"onUpdate:modelValue":t[3]||(t[3]=c=>e.size=c),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(x,{modelValue:e.rotate,"onUpdate:modelValue":t[4]||(t[4]=c=>e.rotate=c),items:e.rotations,label:"Rotate"},null,8,["modelValue","items"]),n(x,{modelValue:e.flip,"onUpdate:modelValue":t[5]||(t[5]=c=>e.flip=c),items:e.flips,label:"Flip"},null,8,["modelValue","items"]),n(r,{modelValue:e.pulse,"onUpdate:modelValue":t[6]||(t[6]=c=>e.pulse=c),label:"Pulse"},null,8,["modelValue"]),n(r,{modelValue:e.spin,"onUpdate:modelValue":t[7]||(t[7]=c=>e.spin=c),label:"Spin"},null,8,["modelValue"])]),_:1})]),default:m(()=>[n(s,null,{default:m(()=>[n(l,{name:e.name,prefix:e.prefix,type:e.type,size:e.size,rotate:e.rotate,flip:e.flip,pulse:e.pulse,spin:e.spin},null,8,["name","prefix","type","size","rotate","flip","pulse","spin"])]),_:1})]),_:1})}const q=_(D,[["render",j]]),G={name:"IconName",components:{UiIcon:u},data(){return{icons:z}}},J={style:{display:"flex","flex-flow":"row wrap"}};function M(a,t,f,d,e,I){const l=o("UiIcon");return i(),p("div",J,[(i(!0),p(U,null,$(e.icons,s=>(i(),p("div",{key:s,style:{margin:"1rem",padding:"1rem","text-align":"center"}},[n(l,{name:s},null,8,["name"]),b("div",null,V(s),1)]))),128))])}const O=_(G,[["render",M]]),Q={name:"IconType",components:{UiIcon:u},data(){return{icons:z}}};function W(a,t,f,d,e,I){const l=o("UiIcon");return i(),w(l,{name:"github",type:"fab"})}const X=_(Q,[["render",W]]),Y={name:"IconSize",components:{UiIcon:u},data(){return{sizes:["-","lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]}}},Z={style:{display:"flex","flex-flow":"row wrap"}};function ee(a,t,f,d,e,I){const l=o("UiIcon");return i(),p("div",Z,[(i(!0),p(U,null,$(e.sizes,s=>(i(),p("div",{key:s,style:{margin:"1rem","text-align":"center"}},[n(l,{name:"check",size:s},null,8,["size"]),b("div",null,V(s),1)]))),128))])}const ne=_(Y,[["render",ee]]),oe={name:"IconRotate",components:{UiIcon:u},data(){return{rotations:["-","90","180","270"]}}},te={style:{display:"flex","flex-flow":"row wrap"}};function le(a,t,f,d,e,I){const l=o("UiIcon");return i(),p("div",te,[(i(!0),p(U,null,$(e.rotations,s=>(i(),p("div",{key:s,style:{margin:"1rem","text-align":"center"}},[n(l,{name:"check",rotate:s},null,8,["rotate"]),b("div",null,V(s),1)]))),128))])}const se=_(oe,[["render",le]]),ce={name:"IconFlip",components:{UiIcon:u},data(){return{flips:["-","horizontal","vertical","both"]}}},ie={style:{display:"flex","flex-flow":"row wrap"}};function pe(a,t,f,d,e,I){const l=o("UiIcon");return i(),p("div",ie,[(i(!0),p(U,null,$(e.flips,s=>(i(),p("div",{key:s,style:{margin:"1rem","text-align":"center"}},[n(l,{name:"check",flip:s},null,8,["flip"]),b("div",null,V(s),1)]))),128))])}const me=_(ce,[["render",pe]]),ae={name:"IconPulse",components:{UiIcon:u}};function re(a,t,f,d,e,I){const l=o("UiIcon");return i(),p("div",null,[n(l,{name:"check",pulse:""}),n(l,{name:"spinner",pulse:""}),n(l,{name:"cog",pulse:""}),n(l,{pulse:""},{default:m(()=>[v(" Hello! ")]),_:1})])}const _e=_(ae,[["render",re]]),ue={name:"IconSpin",components:{UiIcon:u}};function fe(a,t,f,d,e,I){const l=o("UiIcon");return i(),p("div",null,[n(l,{name:"check",spin:""}),n(l,{name:"spinner",spin:""}),n(l,{name:"cog",spin:""}),n(l,{spin:""},{default:m(()=>[v(" Hello! ")]),_:1})])}const de=_(ue,[["render",fe]]),Ie=T({name:"DocsComponentsIcon",components:{PageHeader:N,ComponentApi:R,TileExample:q,Story:h,IconName:O,IconType:X,IconSize:ne,IconRotate:se,IconFlip:me,IconPulse:_e,IconSpin:de},data(){return{component:u}}});function xe(a,t,f,d,e,I){const l=o("PageHeader"),s=o("TileExample"),x=o("ComponentApi"),y=o("IconName"),r=o("Story"),S=o("IconType"),g=o("IconSize"),c=o("IconRotate"),P=o("IconFlip"),k=o("IconPulse"),K=o("IconSpin");return i(),p("div",{class:C(a.$bem({}))},[n(l,null,{default:m(()=>[v(" Icon ")]),_:1}),n(s),n(x,{component:a.component},null,8,["component"]),n(r,{"file-name":"Name","component-name":"Icon",title:"Name"},{default:m(()=>[n(y)]),_:1}),n(r,{"file-name":"Type","component-name":"Icon",title:"Type"},{default:m(()=>[n(S)]),_:1}),n(r,{"file-name":"Size","component-name":"Icon",title:"Size"},{default:m(()=>[n(g)]),_:1}),n(r,{"file-name":"Rotate","component-name":"Icon",title:"Rotate"},{default:m(()=>[n(c)]),_:1}),n(r,{"file-name":"Flip","component-name":"Icon",title:"Flip"},{default:m(()=>[n(P)]),_:1}),n(r,{"file-name":"Pulse","component-name":"Icon",title:"Pulse"},{default:m(()=>[n(k)]),_:1}),n(r,{"file-name":"Spin","component-name":"Icon",title:"Spin"},{default:m(()=>[n(K)]),_:1})],2)}const ve=_(Ie,[["render",xe]]);export{ve as default};