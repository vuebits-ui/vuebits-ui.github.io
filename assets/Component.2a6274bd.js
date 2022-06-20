import{_,Q as u,r as o,o as i,c as P,w as a,a as n,e as p,F as y,D as $,b,t as v,f as z,d as T,P as N,S as C,n as F}from"./index.8ac12abf.js";import{P as U,S as B,_ as R}from"./ComponentApi.7d28bd0a.js";import{_ as E}from"./KnobBoolean.15683d8f.js";import{_ as H}from"./KnobListItem.cb70c22e.js";import{_ as L}from"./KnobString.4056e65b.js";import{_ as A}from"./Knobs.c7c7df55.js";import{a as w}from"./story-params.3e80c8a4.js";const D={name:"TileExample",components:{Preview:U,Sandbox:B,Knobs:A,KnobListItem:H,KnobBoolean:E,KnobString:L,VIcon:u},data(){return{icons:w,sizes:["-","lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"],rotations:["-","90","180","270"],flips:["-","horizontal","vertical","both"],name:"check",prefix:"fa-",type:"fa",size:"-",rotate:"-",flip:"-",pulse:!1,spin:!1}}};function Q(r,t,f,d,e,x){const l=o("VIcon"),s=o("Preview"),I=o("KnobListItem"),V=o("KnobString"),m=o("KnobBoolean"),S=o("Knobs"),g=o("Sandbox");return i(),P(g,{id:"example",title:"Example"},{controls:a(()=>[n(S,null,{default:a(()=>[n(I,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=c=>e.name=c),items:e.icons,label:"Name"},null,8,["modelValue","items"]),n(V,{modelValue:e.prefix,"onUpdate:modelValue":t[1]||(t[1]=c=>e.prefix=c),label:"Prefix"},null,8,["modelValue"]),n(V,{modelValue:e.type,"onUpdate:modelValue":t[2]||(t[2]=c=>e.type=c),label:"Type"},null,8,["modelValue"]),n(I,{modelValue:e.size,"onUpdate:modelValue":t[3]||(t[3]=c=>e.size=c),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),n(I,{modelValue:e.rotate,"onUpdate:modelValue":t[4]||(t[4]=c=>e.rotate=c),items:e.rotations,label:"Rotate"},null,8,["modelValue","items"]),n(I,{modelValue:e.flip,"onUpdate:modelValue":t[5]||(t[5]=c=>e.flip=c),items:e.flips,label:"Flip"},null,8,["modelValue","items"]),n(m,{modelValue:e.pulse,"onUpdate:modelValue":t[6]||(t[6]=c=>e.pulse=c),label:"Pulse"},null,8,["modelValue"]),n(m,{modelValue:e.spin,"onUpdate:modelValue":t[7]||(t[7]=c=>e.spin=c),label:"Spin"},null,8,["modelValue"])]),_:1})]),default:a(()=>[n(s,null,{default:a(()=>[n(l,{name:e.name,prefix:e.prefix,type:e.type,size:e.size,rotate:e.rotate,flip:e.flip,pulse:e.pulse,spin:e.spin},null,8,["name","prefix","type","size","rotate","flip","pulse","spin"])]),_:1})]),_:1})}var j=_(D,[["render",Q]]);const q={name:"IconName",components:{VIcon:u},data(){return{icons:w}}},G={style:{display:"flex","flex-direction":"row","flex-wrap":"wrap"}};function J(r,t,f,d,e,x){const l=o("VIcon");return i(),p("div",G,[(i(!0),p(y,null,$(e.icons,s=>(i(),p("div",{key:s,style:{margin:"1rem",padding:"1rem","text-align":"center"}},[n(l,{name:s},null,8,["name"]),b("div",null,v(s),1)]))),128))])}var M=_(q,[["render",J]]);const O={name:"IconType",components:{VIcon:u},data(){return{icons:w}}};function W(r,t,f,d,e,x){const l=o("VIcon");return i(),P(l,{name:"github",type:"fab"})}var X=_(O,[["render",W]]);const Y={name:"IconSize",components:{VIcon:u},data(){return{sizes:["-","lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]}}},Z={style:{display:"flex","flex-direction":"row","flex-wrap":"wrap"}};function ee(r,t,f,d,e,x){const l=o("VIcon");return i(),p("div",Z,[(i(!0),p(y,null,$(e.sizes,s=>(i(),p("div",{key:s,style:{margin:"1rem","text-align":"center"}},[n(l,{name:"check",size:s},null,8,["size"]),b("div",null,v(s),1)]))),128))])}var ne=_(Y,[["render",ee]]);const oe={name:"IconRotate",components:{VIcon:u},data(){return{rotations:["-","90","180","270"]}}},te={style:{display:"flex","flex-direction":"row","flex-wrap":"wrap"}};function le(r,t,f,d,e,x){const l=o("VIcon");return i(),p("div",te,[(i(!0),p(y,null,$(e.rotations,s=>(i(),p("div",{key:s,style:{margin:"1rem","text-align":"center"}},[n(l,{name:"check",rotate:s},null,8,["rotate"]),b("div",null,v(s),1)]))),128))])}var se=_(oe,[["render",le]]);const ce={name:"IconFlip",components:{VIcon:u},data(){return{flips:["-","horizontal","vertical","both"]}}},ie={style:{display:"flex","flex-direction":"row","flex-wrap":"wrap"}};function pe(r,t,f,d,e,x){const l=o("VIcon");return i(),p("div",ie,[(i(!0),p(y,null,$(e.flips,s=>(i(),p("div",{key:s,style:{margin:"1rem","text-align":"center"}},[n(l,{name:"check",flip:s},null,8,["flip"]),b("div",null,v(s),1)]))),128))])}var ae=_(ce,[["render",pe]]);const re={name:"IconPulse",components:{VIcon:u}},me=z(" Hello! ");function _e(r,t,f,d,e,x){const l=o("VIcon");return i(),p("div",null,[n(l,{name:"check",pulse:""}),n(l,{name:"spinner",pulse:""}),n(l,{name:"cog",pulse:""}),n(l,{pulse:""},{default:a(()=>[me]),_:1})])}var ue=_(re,[["render",_e]]);const fe={name:"IconSpin",components:{VIcon:u}},de=z(" Hello! ");function xe(r,t,f,d,e,x){const l=o("VIcon");return i(),p("div",null,[n(l,{name:"check",spin:""}),n(l,{name:"spinner",spin:""}),n(l,{name:"cog",spin:""}),n(l,{spin:""},{default:a(()=>[de]),_:1})])}var Ie=_(fe,[["render",xe]]);const Ve=T({name:"DocsComponentsIcon",components:{PageHeader:N,ComponentApi:R,TileExample:j,Story:C,IconName:M,IconType:X,IconSize:ne,IconRotate:se,IconFlip:ae,IconPulse:ue,IconSpin:Ie},data(){return{component:u}}}),ye=z(" Icon ");function $e(r,t,f,d,e,x){const l=o("PageHeader"),s=o("TileExample"),I=o("ComponentApi"),V=o("IconName"),m=o("Story"),S=o("IconType"),g=o("IconSize"),c=o("IconRotate"),k=o("IconFlip"),h=o("IconPulse"),K=o("IconSpin");return i(),p("div",{class:F(r.$bem({}))},[n(l,null,{default:a(()=>[ye]),_:1}),n(s),n(I,{component:r.component},null,8,["component"]),n(m,{"file-name":"Name","component-name":"Icon",title:"Name"},{default:a(()=>[n(V)]),_:1}),n(m,{"file-name":"Type","component-name":"Icon",title:"Type"},{default:a(()=>[n(S)]),_:1}),n(m,{"file-name":"Size","component-name":"Icon",title:"Size"},{default:a(()=>[n(g)]),_:1}),n(m,{"file-name":"Rotate","component-name":"Icon",title:"Rotate"},{default:a(()=>[n(c)]),_:1}),n(m,{"file-name":"Flip","component-name":"Icon",title:"Flip"},{default:a(()=>[n(k)]),_:1}),n(m,{"file-name":"Pulse","component-name":"Icon",title:"Pulse"},{default:a(()=>[n(h)]),_:1}),n(m,{"file-name":"Spin","component-name":"Icon",title:"Spin"},{default:a(()=>[n(K)]),_:1})],2)}var ke=_(Ve,[["render",$e]]);export{ke as default};
