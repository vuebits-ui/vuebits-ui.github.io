import{_ as c,ac as f,r as t,o as s,c as I,w as r,a as o,f as a,e as u,F as b,D as C,t as h,d as E,P as S,S as y,n as K}from"./index.c99ef684.js";import{P as D,S as H,_ as L}from"./ComponentApi.cab76a41.js";import{_ as R}from"./KnobBoolean.cea721d9.js";import{_ as P}from"./KnobListItem.370dc906.js";import{_ as $}from"./KnobString.ad314698.js";import{_ as A}from"./Knobs.20694b9d.js";import{c as x}from"./story-params.3e80c8a4.js";const F={name:"TileExample",components:{Preview:D,Sandbox:H,Knobs:A,KnobListItem:P,KnobBoolean:R,KnobString:$,VTile:f},data(){return{colors:x,bordered:!1,borderedFat:!1,elevated:!1,round:!1,rounded:!1,roundedLg:!1,roundedSmall:!1,outlined:!1,dark:!0,light:!0,color:"primary",width:"auto",height:"auto",image:"",hoverBgColor:"secondary",underlineColor:null,centerContent:!1}}},N=a(" Configure me ");function z(p,n,g,V,e,v){const d=t("VTile"),i=t("Preview"),m=t("KnobBoolean"),T=t("KnobListItem"),_=t("KnobString"),U=t("Knobs"),k=t("Sandbox");return s(),I(k,{id:"example",title:"Example"},{controls:r(()=>[o(U,null,{default:r(()=>[o(m,{modelValue:e.dark,"onUpdate:modelValue":n[0]||(n[0]=l=>e.dark=l),label:"Dark"},null,8,["modelValue"]),o(m,{modelValue:e.light,"onUpdate:modelValue":n[1]||(n[1]=l=>e.light=l),label:"Light"},null,8,["modelValue"]),o(T,{modelValue:e.color,"onUpdate:modelValue":n[2]||(n[2]=l=>e.color=l),items:e.colors,label:"Color"},null,8,["modelValue","items"]),o(T,{modelValue:e.hoverBgColor,"onUpdate:modelValue":n[3]||(n[3]=l=>e.hoverBgColor=l),items:e.colors,label:"Hover color"},null,8,["modelValue","items"]),o(T,{modelValue:e.underlineColor,"onUpdate:modelValue":n[4]||(n[4]=l=>e.underlineColor=l),items:e.colors,label:"Underline color"},null,8,["modelValue","items"]),o(m,{modelValue:e.bordered,"onUpdate:modelValue":n[5]||(n[5]=l=>e.bordered=l),label:"Bordered"},null,8,["modelValue"]),o(m,{modelValue:e.elevated,"onUpdate:modelValue":n[6]||(n[6]=l=>e.elevated=l),label:"Elevated"},null,8,["modelValue"]),o(m,{modelValue:e.rounded,"onUpdate:modelValue":n[7]||(n[7]=l=>e.rounded=l),label:"Rounded"},null,8,["modelValue"]),o(m,{modelValue:e.roundedLg,"onUpdate:modelValue":n[8]||(n[8]=l=>e.roundedLg=l),label:"Rounded large"},null,8,["modelValue"]),o(m,{modelValue:e.round,"onUpdate:modelValue":n[9]||(n[9]=l=>e.round=l),label:"Round"},null,8,["modelValue"]),o(m,{modelValue:e.centerContent,"onUpdate:modelValue":n[10]||(n[10]=l=>e.centerContent=l),label:"Center content"},null,8,["modelValue"]),o(_,{modelValue:e.width,"onUpdate:modelValue":n[11]||(n[11]=l=>e.width=l),label:"Width"},null,8,["modelValue"]),o(_,{modelValue:e.height,"onUpdate:modelValue":n[12]||(n[12]=l=>e.height=l),label:"Height"},null,8,["modelValue"]),o(_,{modelValue:e.image,"onUpdate:modelValue":n[13]||(n[13]=l=>e.image=l),label:"Image url"},null,8,["modelValue"])]),_:1})]),default:r(()=>[o(i,null,{default:r(()=>[o(d,{bordered:e.bordered,elevated:e.elevated,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,color:e.color,width:e.width,height:e.height,image:e.image,"hover-bg-color":e.hoverBgColor,"underline-color":e.underlineColor,"center-content":e.centerContent},{default:r(()=>[N]),_:1},8,["bordered","elevated","round","rounded","rounded-lg","dark","light","color","width","height","image","hover-bg-color","underline-color","center-content"])]),_:1})]),_:1})}var W=c(F,[["render",z]]);const j={name:"TileColors",components:{VTile:f},data(){return{colors:x}}};function q(p,n,g,V,e,v){const d=t("VTile");return s(),u("div",null,[(s(!0),u(b,null,C(e.colors,i=>(s(),u("span",{key:i},[o(d,{color:i,dark:""},{default:r(()=>[a(" I am "+h(i),1)]),_:2},1032,["color"])]))),128))])}var G=c(j,[["render",q]]);const J={name:"TileHoverBgColors",components:{VTile:f},data(){return{colors:x}}};function M(p,n,g,V,e,v){const d=t("VTile");return s(),u("div",null,[(s(!0),u(b,null,C(e.colors,i=>(s(),u("span",{key:i},[o(d,{"hover-bg-color":i,dark:""},{default:r(()=>[a(" I am "+h(i),1)]),_:2},1032,["hover-bg-color"])]))),128))])}var O=c(J,[["render",M]]);const Q={name:"TileUnderlineColors",components:{VTile:f},data(){return{colors:x}}};function X(p,n,g,V,e,v){const d=t("VTile");return s(),u("div",null,[(s(!0),u(b,null,C(e.colors,i=>(s(),u("span",{key:i},[o(d,{"underline-color":i,dark:""},{default:r(()=>[a(" I am "+h(i),1)]),_:2},1032,["underline-color"])]))),128))])}var Y=c(Q,[["render",X]]);const Z={name:"TileRoundings",components:{VTile:f}},ee=a(" I am not rounded "),oe=a(" I am rounded "),ne=a(" I am rounded large "),le=a(" I am round ");function te(p,n,g,V,e,v){const d=t("VTile");return s(),u("div",null,[o(d,{bordered:""},{default:r(()=>[ee]),_:1}),o(d,{bordered:"",rounded:""},{default:r(()=>[oe]),_:1}),o(d,{bordered:"","rounded-lg":""},{default:r(()=>[ne]),_:1}),o(d,{bordered:"",round:""},{default:r(()=>[le]),_:1})])}var re=c(Z,[["render",te]]);const ie={name:"TileTileDimensions",components:{VTile:f},data(){return{dimensions:[{width:"200px",height:"auto"},{width:"400px",height:"200px"},{width:"50%",height:"10vh"}]}}};function de(p,n,g,V,e,v){const d=t("VTile");return s(),u("div",null,[(s(!0),u(b,null,C(e.dimensions,(i,m)=>(s(),u("span",{key:m},[o(d,{width:i.width,height:i.height,dark:""},{default:r(()=>[a(" I am "+h(i.width)+" wide and "+h(i.height)+" high ",1)]),_:2},1032,["width","height"])]))),128))])}var se=c(ie,[["render",de]]);const ue={name:"TileElevation",components:{VTile:f}},me=a(" I am normal "),ae=a(" I am elavated ");function _e(p,n,g,V,e,v){const d=t("VTile");return s(),u("div",null,[o(d,null,{default:r(()=>[me]),_:1}),o(d,{elevated:""},{default:r(()=>[ae]),_:1})])}var pe=c(ue,[["render",_e]]);const ce=E({name:"DocsComponentsTile",components:{PageHeader:S,ComponentApi:L,TileExample:W,Story:y,TileColors:G,TileHoverBgColors:O,TileUnderlineColors:Y,TileRoundings:re,TileElevation:pe,TileDimensions:se},data(){return{component:f}}}),fe=a(" Tile ");function ge(p,n,g,V,e,v){const d=t("PageHeader"),i=t("TileExample"),m=t("ComponentApi"),T=t("TileColors"),_=t("Story"),U=t("TileHoverBgColors"),k=t("TileUnderlineColors"),l=t("TileRoundings"),w=t("TileElevation"),B=t("TileDimensions");return s(),u("div",{class:K(p.$bem({}))},[o(d,null,{default:r(()=>[fe]),_:1}),o(i),o(m,{component:p.component},null,8,["component"]),o(_,{"file-name":"Colors","component-name":"Tile",title:"Colors"},{default:r(()=>[o(T)]),_:1}),o(_,{"file-name":"HoverBgColors","component-name":"Tile",title:"Background colors on hover"},{default:r(()=>[o(U)]),_:1}),o(_,{"file-name":"UnderlineColors","component-name":"Tile",title:"Underline colors"},{default:r(()=>[o(k)]),_:1}),o(_,{"file-name":"Roundings","component-name":"Tile",title:"Roundings"},{default:r(()=>[o(l)]),_:1}),o(_,{"file-name":"Elevation","component-name":"Tile",title:"Elevation"},{default:r(()=>[o(w)]),_:1}),o(_,{"file-name":"Dimensions","component-name":"Tile",title:"Dimensions"},{default:r(()=>[o(B)]),_:1})],2)}var Ue=c(ce,[["render",ge]]);export{Ue as default};