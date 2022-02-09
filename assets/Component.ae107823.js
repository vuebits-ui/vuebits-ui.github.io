import{_,K as I,a as K,b as E,O as f,P as S,C as y,S as H}from"./index.e5dbef19.js";import{P as D,S as L}from"./Sandbox.eb4f66cf.js";import{K as R}from"./Knobs.f49c0270.js";import{c as b}from"./story-params.e6a8e965.js";import{b as t,o as s,e as P,w as r,k as o,l as a,c as u,F as C,v as x,j as h,d as A,n as F}from"./vendor.5a863b1c.js";const N={name:"TileExample",components:{Preview:D,Sandbox:L,Knobs:R,KnobListItem:I,KnobBoolean:K,KnobString:E,VTile:f},data(){return{colors:b,bordered:!1,borderedFat:!1,elevated:!1,round:!1,rounded:!1,roundedLg:!1,roundedSmall:!1,outlined:!1,dark:!0,light:!0,color:"primary",width:"auto",height:"auto",image:"",hoverBgColor:"secondary",underlineColor:null,centerContent:!1}}},$=a(" Configure me ");function j(c,n,g,V,e,v){const i=t("VTile"),d=t("Preview"),m=t("KnobBoolean"),T=t("KnobListItem"),p=t("KnobString"),U=t("Knobs"),k=t("Sandbox");return s(),P(k,{id:"example",title:"Example"},{controls:r(()=>[o(U,null,{default:r(()=>[o(m,{modelValue:e.dark,"onUpdate:modelValue":n[0]||(n[0]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),o(m,{modelValue:e.light,"onUpdate:modelValue":n[1]||(n[1]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),o(T,{modelValue:e.color,"onUpdate:modelValue":n[2]||(n[2]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"]),o(T,{modelValue:e.hoverBgColor,"onUpdate:modelValue":n[3]||(n[3]=l=>e.hoverBgColor=l),items:e.colors,label:"Hover color"},null,8,["modelValue","items"]),o(T,{modelValue:e.underlineColor,"onUpdate:modelValue":n[4]||(n[4]=l=>e.underlineColor=l),items:e.colors,label:"Underline color"},null,8,["modelValue","items"]),o(m,{modelValue:e.bordered,"onUpdate:modelValue":n[5]||(n[5]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),o(m,{modelValue:e.elevated,"onUpdate:modelValue":n[6]||(n[6]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),o(m,{modelValue:e.rounded,"onUpdate:modelValue":n[7]||(n[7]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),o(m,{modelValue:e.roundedLg,"onUpdate:modelValue":n[8]||(n[8]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),o(m,{modelValue:e.round,"onUpdate:modelValue":n[9]||(n[9]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),o(m,{modelValue:e.centerContent,"onUpdate:modelValue":n[10]||(n[10]=l=>e.centerContent=l),label:"Center content"},null,8,["modelValue"]),o(p,{modelValue:e.width,"onUpdate:modelValue":n[11]||(n[11]=l=>e.width=l),label:"Width"},null,8,["modelValue"]),o(p,{modelValue:e.height,"onUpdate:modelValue":n[12]||(n[12]=l=>e.height=l),label:"Height"},null,8,["modelValue"]),o(p,{modelValue:e.image,"onUpdate:modelValue":n[13]||(n[13]=l=>e.image=l),label:"Image url"},null,8,["modelValue"])]),_:1})]),default:r(()=>[o(d,null,{default:r(()=>[o(i,{bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,width:e.width,height:e.height,image:e.image,"hover-bg-color":e.hoverBgColor,"underline-color":e.underlineColor,"center-content":e.centerContent},{default:r(()=>[$]),_:1},8,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","width","height","image","hover-bg-color","underline-color","center-content"])]),_:1})]),_:1})}var z=_(N,[["render",j]]);const O={name:"TileColors",components:{VTile:f},data(){return{colors:b}}};function W(c,n,g,V,e,v){const i=t("VTile");return s(),u("div",null,[(s(!0),u(C,null,x(e.colors,d=>(s(),u("span",{key:d},[o(i,{color:d,dark:""},{default:r(()=>[a(" I am "+h(d),1)]),_:2},1032,["color"])]))),128))])}var q=_(O,[["render",W]]);const G={name:"TileHoverBgColors",components:{VTile:f},data(){return{colors:b}}};function J(c,n,g,V,e,v){const i=t("VTile");return s(),u("div",null,[(s(!0),u(C,null,x(e.colors,d=>(s(),u("span",{key:d},[o(i,{"hover-bg-color":d,dark:""},{default:r(()=>[a(" I am "+h(d),1)]),_:2},1032,["hover-bg-color"])]))),128))])}var M=_(G,[["render",J]]);const Q={name:"TileUnderlineColors",components:{VTile:f},data(){return{colors:b}}};function X(c,n,g,V,e,v){const i=t("VTile");return s(),u("div",null,[(s(!0),u(C,null,x(e.colors,d=>(s(),u("span",{key:d},[o(i,{"underline-color":d,dark:""},{default:r(()=>[a(" I am "+h(d),1)]),_:2},1032,["underline-color"])]))),128))])}var Y=_(Q,[["render",X]]);const Z={name:"TileRoundings",components:{VTile:f}},ee=a(" I am not rounded "),oe=a(" I am rounded "),ne=a(" I am rounded large "),le=a(" I am round ");function te(c,n,g,V,e,v){const i=t("VTile");return s(),u("div",null,[o(i,{bordered:""},{default:r(()=>[ee]),_:1}),o(i,{bordered:"",rounded:""},{default:r(()=>[oe]),_:1}),o(i,{bordered:"","rounded-lg":""},{default:r(()=>[ne]),_:1}),o(i,{bordered:"",round:""},{default:r(()=>[le]),_:1})])}var re=_(Z,[["render",te]]);const de={name:"TileTileDimensions",components:{VTile:f},data(){return{dimensions:[{width:"200px",height:"auto"},{width:"400px",height:"200px"},{width:"50%",height:"10vh"}]}}};function ie(c,n,g,V,e,v){const i=t("VTile");return s(),u("div",null,[(s(!0),u(C,null,x(e.dimensions,(d,m)=>(s(),u("span",{key:m},[o(i,{width:d.width,height:d.height,dark:""},{default:r(()=>[a(" I am "+h(d.width)+" wide and "+h(d.height)+" high ",1)]),_:2},1032,["width","height"])]))),128))])}var se=_(de,[["render",ie]]);const ue={name:"TileElevation",components:{VTile:f}},me=a(" I am normal "),ae=a(" I am elavated ");function pe(c,n,g,V,e,v){const i=t("VTile");return s(),u("div",null,[o(i,null,{default:r(()=>[me]),_:1}),o(i,{elevated:""},{default:r(()=>[ae]),_:1})])}var ce=_(ue,[["render",pe]]);const _e=A({name:"DocsComponentsTile",components:{PageHeader:S,ComponentApi:y,TileExample:z,Story:H,TileColors:q,TileHoverBgColors:M,TileUnderlineColors:Y,TileRoundings:re,TileElevation:ce,TileDimensions:se},data(){return{component:f}}}),fe=a(" Tile ");function ge(c,n,g,V,e,v){const i=t("PageHeader"),d=t("TileExample"),m=t("ComponentApi"),T=t("TileColors"),p=t("Story"),U=t("TileHoverBgColors"),k=t("TileUnderlineColors"),l=t("TileRoundings"),w=t("TileElevation"),B=t("TileDimensions");return s(),u("div",{class:F(c.$bem({}))},[o(i,null,{default:r(()=>[fe]),_:1}),o(d),o(m,{component:c.component},null,8,["component"]),o(p,{"file-name":"Colors","component-name":"Tile",title:"Colors"},{default:r(()=>[o(T)]),_:1}),o(p,{"file-name":"HoverBgColors","component-name":"Tile",title:"Background colors on hover"},{default:r(()=>[o(U)]),_:1}),o(p,{"file-name":"UnderlineColors","component-name":"Tile",title:"Underline colors"},{default:r(()=>[o(k)]),_:1}),o(p,{"file-name":"Roundings","component-name":"Tile",title:"Roundings"},{default:r(()=>[o(l)]),_:1}),o(p,{"file-name":"Elevation","component-name":"Tile",title:"Elevation"},{default:r(()=>[o(w)]),_:1}),o(p,{"file-name":"Dimensions","component-name":"Tile",title:"Dimensions"},{default:r(()=>[o(B)]),_:1})],2)}var Ce=_(_e,[["render",ge]]);export{Ce as default};