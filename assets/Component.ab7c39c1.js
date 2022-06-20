import{f as p,a as P,K as k,a6 as u,_ as b,r as n,o as f,c as C,w as r,d as l,e as E,t as v,g as w,F as H,h as c,P as R,C as y,S,n as U}from"./index.2e9bb75e.js";import{P as D,S as I}from"./Sandbox.5616347c.js";import{K}from"./Knobs.12997fb5.js";import{b as L}from"./story-params.3e80c8a4.js";const A=p({name:"TableExample",components:{Preview:D,Sandbox:I,Knobs:K,KnobBoolean:P,KnobListItem:k,VTable:u},data(){return{headers:[{for:"id",label:"Id"},{for:"name",label:"Name"},{for:"age",label:"Age"}],items:[{id:"1",name:"John Doe",age:35},{id:"2",name:"Martin Doyle",age:48},{id:"3",name:"Adam Smith",age:23},{id:"4",name:"John Doe",age:35},{id:"5",name:"Martin Doyle",age:48},{id:"6",name:"Adam Smith",age:23},{id:"7",name:"John Doe",age:35},{id:"8",name:"Martin Doyle",age:48},{id:"9",name:"Adam Smith",age:23},{id:"10",name:"John Doe",age:35},{id:"11",name:"Martin Doyle",age:48},{id:"12",name:"Adam Smith",age:23}],spacings:L,bordered:!1,elevated:!1,rounded:!1,roundedLg:!1,dark:!1,light:!1,fixedHeader:!1,expandable:!1,multipleExpand:!1,hideParentRowOnExpand:!1,expandOnRowClick:!1,padding:"xs",loading:!1}}}),B={style:{width:"100%"},class:"has-padding-lg"};function O(e,o,t,g,V,h){const s=n("VTable"),m=n("Preview"),d=n("KnobBoolean"),$=n("KnobListItem"),i=n("Knobs"),T=n("Sandbox");return f(),C(T,{id:"example",title:"Example"},{controls:r(()=>[l(i,null,{default:r(()=>[l(d,{modelValue:e.dark,"onUpdate:modelValue":o[0]||(o[0]=a=>e.dark=a),label:"Dark"},null,8,["modelValue"]),l(d,{modelValue:e.light,"onUpdate:modelValue":o[1]||(o[1]=a=>e.light=a),label:"Light"},null,8,["modelValue"]),l(d,{modelValue:e.bordered,"onUpdate:modelValue":o[2]||(o[2]=a=>e.bordered=a),label:"Bordered"},null,8,["modelValue"]),l(d,{modelValue:e.elevated,"onUpdate:modelValue":o[3]||(o[3]=a=>e.elevated=a),label:"Elevated"},null,8,["modelValue"]),l(d,{modelValue:e.rounded,"onUpdate:modelValue":o[4]||(o[4]=a=>e.rounded=a),label:"Rounded"},null,8,["modelValue"]),l(d,{modelValue:e.roundedLg,"onUpdate:modelValue":o[5]||(o[5]=a=>e.roundedLg=a),label:"Rounded large"},null,8,["modelValue"]),l(d,{modelValue:e.fixedHeader,"onUpdate:modelValue":o[6]||(o[6]=a=>e.fixedHeader=a),label:"Fixed header"},null,8,["modelValue"]),l(d,{modelValue:e.expandable,"onUpdate:modelValue":o[7]||(o[7]=a=>e.expandable=a),label:"Expandable"},null,8,["modelValue"]),l(d,{modelValue:e.multipleExpand,"onUpdate:modelValue":o[8]||(o[8]=a=>e.multipleExpand=a),label:"Multiple expand"},null,8,["modelValue"]),l(d,{modelValue:e.hideParentRowOnExpand,"onUpdate:modelValue":o[9]||(o[9]=a=>e.hideParentRowOnExpand=a),label:"Hide parent row on expand"},null,8,["modelValue"]),l(d,{modelValue:e.expandOnRowClick,"onUpdate:modelValue":o[10]||(o[10]=a=>e.expandOnRowClick=a),label:"Expand on row click"},null,8,["modelValue"]),l($,{modelValue:e.padding,"onUpdate:modelValue":o[11]||(o[11]=a=>e.padding=a),label:"Padding",items:e.spacings},null,8,["modelValue","items"]),l(d,{modelValue:e.loading,"onUpdate:modelValue":o[12]||(o[12]=a=>e.loading=a),label:"Loading"},null,8,["modelValue"])]),_:1})]),default:r(()=>[l(m,null,{default:r(()=>[l(s,{headers:e.headers,items:e.items,bordered:e.bordered,elevated:e.elevated,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,"fixed-header":e.fixedHeader,expandable:e.expandable,"multiple-expand":e.multipleExpand,padding:e.padding,"hide-parent-row-on-expand":e.hideParentRowOnExpand,"expand-on-row-click":e.expandOnRowClick,style:{height:"30rem"},loading:e.loading},{"expanded-item":r(({item:a})=>[E("div",B,v(a.name),1)]),_:1},8,["headers","items","bordered","elevated","rounded","rounded-lg","dark","light","fixed-header","expandable","multiple-expand","padding","hide-parent-row-on-expand","expand-on-row-click","loading"])]),_:1})]),_:1})}var x=b(A,[["render",O]]);const _=p({name:"TableColumns",components:{VTable:u},data(){return{headers:[{for:"col1",label:"Col 1"},{for:"col2",label:"Col 2"},{for:"col3",label:"Col 3"}],columns:[{width:"50%",style:{border:"1px solid red"}},{},{width:300,style:{background:"red"}}]}},computed:{items(){return[{col1:this.columns[0],col2:this.columns[1],col3:this.columns[2]}]}}});function M(e,o,t,g,V,h){const s=n("VTable");return f(),C(s,{headers:e.headers,items:e.items,columns:e.columns},null,8,["headers","items","columns"])}var J=b(_,[["render",M]]);const N=p({name:"TableItemsPlaceholder",components:{VTable:u},data(){return{headers:[{for:"col1",label:"Col 1"},{for:"col2",label:"Col 2"},{for:"col3",label:"Col 3"}]}}}),F=c(" Loading... "),z=c(" Table is empty ");function q(e,o,t,g,V,h){const s=n("VTable");return f(),w(H,null,[l(s,{headers:e.headers,items:[],loading:"",padding:"sm"},{loading:r(()=>[F]),_:1},8,["headers"]),l(s,{headers:e.headers,items:[],padding:"sm"},{"no-items":r(()=>[z]),_:1},8,["headers"])],64)}var G=b(N,[["render",q]]);const Q=p({name:"TableHoveredRow",components:{VTable:u},data(){return{headers:[{for:"col1",label:"Col 1"},{for:"col2",label:"Col 2"},{for:"isHovered",label:"Is hovered"}]}},computed:{items(){return new Array(10).fill(0).map((o,t)=>({col1:`Col 1 - ${t+1}`,col2:`Col 2 - ${t+1}`}))}}});function W(e,o,t,g,V,h){const s=n("VTable");return f(),C(s,{headers:e.headers,items:e.items,padding:"sm"},{isHovered:r(({isRowHovered:m})=>[c(v(m?"hovered":"not-hovered"),1)]),_:1},8,["headers","items"])}var X=b(Q,[["render",W]]);const Y=p({name:"DocsComponentsTable",components:{PageHeader:R,ComponentApi:y,TableExample:x,Story:S,TableColumns:J,TableItemsPlaceholder:G,TableHoveredRow:X},data(){return{component:u}}}),Z=c(" Table ");function j(e,o,t,g,V,h){const s=n("PageHeader"),m=n("TableExample"),d=n("ComponentApi"),$=n("TableColumns"),i=n("Story"),T=n("TableItemsPlaceholder"),a=n("TableHoveredRow");return f(),w("div",{class:U(e.$bem({}))},[l(s,null,{default:r(()=>[Z]),_:1}),l(m),l(d,{component:e.component},null,8,["component"]),l(i,{"file-name":"Columns","component-name":"Table",title:"Columns"},{default:r(()=>[l($)]),_:1}),l(i,{"file-name":"ItemsPlaceholder","component-name":"Table",title:"Items Placeholder"},{default:r(()=>[l(T)]),_:1}),l(i,{"file-name":"HoveredRow","component-name":"Table",title:"Hovered Row"},{default:r(()=>[l(a)]),_:1})],2)}var ne=b(Y,[["render",j]]);export{ne as default};
