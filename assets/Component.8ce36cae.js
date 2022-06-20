import{_ as V,K as _,a as A,b as S,s as x,r as n,o as f,c as y,w as u,d as t,g as I,f as h,P as U,C as v,S as K,n as E,h as C}from"./index.2e9bb75e.js";import{P as L,S as z}from"./Sandbox.5616347c.js";import{K as P}from"./Knobs.12997fb5.js";import{a as w,s as B}from"./story-params.3e80c8a4.js";const M={name:"AutocompleteExample",components:{Preview:L,Sandbox:z,Knobs:P,KnobListItem:_,KnobBoolean:A,KnobString:S,VAutocomplete:x},data(){return{items:[{header:"Header 1"},{key:1,text:"Item 1"},{key:2,text:"Item 2"},{header:"Header 2"},{key:3,text:"Item 3"}],value:null,icons:w,text:"some text...",bordered:!1,round:!0,rounded:!1,roundedLg:!1,dark:!1,light:!0,disabled:!1,leftIcon:"none",rightIcon:"none",error:!1,textarea:!1,multiple:!1,depressed:!0,placeholder:"Search",sizes:B,size:"md"}}};function D(m,l,i,b,e,a){const s=n("VAutocomplete"),d=n("Preview"),r=n("KnobBoolean"),p=n("KnobListItem"),c=n("KnobString"),g=n("Knobs"),k=n("Sandbox");return f(),y(k,{id:"example",title:"Example"},{controls:u(()=>[t(g,null,{default:u(()=>[t(r,{modelValue:e.dark,"onUpdate:modelValue":l[1]||(l[1]=o=>e.dark=o),label:"Dark"},null,8,["modelValue"]),t(r,{modelValue:e.light,"onUpdate:modelValue":l[2]||(l[2]=o=>e.light=o),label:"Light"},null,8,["modelValue"]),t(r,{modelValue:e.bordered,"onUpdate:modelValue":l[3]||(l[3]=o=>e.bordered=o),label:"Bordered"},null,8,["modelValue"]),t(r,{modelValue:e.depressed,"onUpdate:modelValue":l[4]||(l[4]=o=>e.depressed=o),label:"Depressed"},null,8,["modelValue"]),t(r,{modelValue:e.rounded,"onUpdate:modelValue":l[5]||(l[5]=o=>e.rounded=o),label:"Rounded"},null,8,["modelValue"]),t(r,{modelValue:e.roundedLg,"onUpdate:modelValue":l[6]||(l[6]=o=>e.roundedLg=o),label:"Rounded large"},null,8,["modelValue"]),t(r,{modelValue:e.round,"onUpdate:modelValue":l[7]||(l[7]=o=>e.round=o),label:"Round"},null,8,["modelValue"]),t(r,{modelValue:e.disabled,"onUpdate:modelValue":l[8]||(l[8]=o=>e.disabled=o),label:"Disabled"},null,8,["modelValue"]),t(p,{modelValue:e.leftIcon,"onUpdate:modelValue":l[9]||(l[9]=o=>e.leftIcon=o),items:e.icons,label:"Left icon"},null,8,["modelValue","items"]),t(p,{modelValue:e.rightIcon,"onUpdate:modelValue":l[10]||(l[10]=o=>e.rightIcon=o),items:e.icons,label:"Right icon"},null,8,["modelValue","items"]),t(p,{modelValue:e.size,"onUpdate:modelValue":l[11]||(l[11]=o=>e.size=o),items:e.sizes,label:"Size"},null,8,["modelValue","items"]),t(r,{modelValue:e.error,"onUpdate:modelValue":l[12]||(l[12]=o=>e.error=o),label:"Error"},null,8,["modelValue"]),t(r,{modelValue:e.textarea,"onUpdate:modelValue":l[13]||(l[13]=o=>e.textarea=o),label:"Textarea"},null,8,["modelValue"]),t(r,{modelValue:e.multiple,"onUpdate:modelValue":l[14]||(l[14]=o=>e.multiple=o),label:"Multiple"},null,8,["modelValue"]),t(c,{modelValue:e.placeholder,"onUpdate:modelValue":l[15]||(l[15]=o=>e.placeholder=o),label:"Placeholder"},null,8,["modelValue"])]),_:1})]),default:u(()=>[t(d,{height:"200px"},{default:u(()=>[t(s,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),items:e.items,bordered:e.bordered,round:e.round,rounded:e.rounded,"rounded-lg":e.roundedLg,dark:e.dark,light:e.light,disabled:e.disabled,"left-icon":e.leftIcon!=="none"?e.leftIcon:null,"right-icon":e.rightIcon!=="none"?e.rightIcon:null,error:e.error,textarea:e.textarea,multiple:e.multiple,depressed:e.depressed,placeholder:e.placeholder,size:e.size},null,8,["modelValue","items","bordered","round","rounded","rounded-lg","dark","light","disabled","left-icon","right-icon","error","textarea","multiple","depressed","placeholder","size"])]),_:1})]),_:1})}var H=V(M,[["render",D]]);const R={name:"AutocompleteMultiple",components:{VAutocomplete:x},data(){return{selected:[],items:[{key:1,text:"Item 1"},{key:2,text:"Item 2"},{key:3,text:"Item 3"},{key:4,text:"Item 4"},{key:5,text:"Item 5"},{key:6,text:"Item 6"},{key:7,text:"Item 7"},{key:8,text:"Item 8"},{key:9,text:"Item 9"},{key:10,text:"Item 10"},{key:11,text:"Item 11"},{key:12,text:"Item 12"}]}}};function J(m,l,i,b,e,a){const s=n("VAutocomplete");return f(),I("div",null,[t(s,{modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=d=>e.selected=d),items:e.items,bordered:"",multiple:"",placeholder:"Add some items",label:"Selected items"},null,8,["modelValue","items"])])}var T=V(R,[["render",J]]);const N={name:"AutocompleteExternalSearch",components:{VAutocomplete:x},data(){return{selected:null,loading:!1,items:[{key:1,text:"John Doe"},{key:2,text:"Adam Smith"},{key:3,text:"John Smith"},{key:4,text:"Adam Doe"},{key:5,text:"Jane Smith"}],filteredItems:[]}},methods:{search(m){this.loading=!0,setTimeout(()=>{this.filteredItems=this.items.filter(l=>{var i;return!m||((i=l.text)==null?void 0:i.toLowerCase().includes(m.toLowerCase()||""))}),this.loading=!1},500)}}};function j(m,l,i,b,e,a){const s=n("VAutocomplete");return f(),I("div",null,[t(s,{modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=d=>e.selected=d),items:e.filteredItems,bordered:"",external:"","items-loading":e.loading,"search-delay":200,placeholder:"Search",label:"Selected item",onSearch:a.search},null,8,["modelValue","items","items-loading","onSearch"])])}var q=V(N,[["render",j]]);const F=h({name:"DocsComponentsAutocomplete",components:{PageHeader:U,ComponentApi:v,Example:H,Story:K,AutocompleteMultiple:T,AutocompleteExternalSearch:q},data(){return{component:x}}}),G=C(" Autocomplete ");function O(m,l,i,b,e,a){const s=n("PageHeader"),d=n("Example"),r=n("ComponentApi"),p=n("AutocompleteMultiple"),c=n("Story"),g=n("AutocompleteExternalSearch");return f(),I("div",{class:E(m.$bem({}))},[t(s,null,{default:u(()=>[G]),_:1}),t(d),t(r,{component:m.component},null,8,["component"]),t(c,{"file-name":"Multiple","component-name":"Autocomplete",title:"Multiple"},{default:u(()=>[t(p)]),_:1}),t(c,{"file-name":"ExternalSearch","component-name":"Autocomplete",title:"External search"},{default:u(()=>[t(g)]),_:1})],2)}var Z=V(F,[["render",O]]);export{Z as default};