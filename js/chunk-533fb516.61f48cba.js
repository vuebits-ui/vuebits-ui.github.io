(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-533fb516"],{"4e45":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return u}));var o=["none","home","brain","bug","calendar","edit","gamepad"],l=["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"],d=["-","sm","md","lg"],i=["default","primary","secondary","success","info","warning","error","disabled","black","white"],r=["xs","sm","md","lg","xl"],u=["none","fade","expand","slide-top","slide-bottom","slide-right","slide-left"]},9810:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),l=Object(o["h"])(" Modal ");function d(e,t,n,d,i,r){var u=Object(o["x"])("PageHeader"),a=Object(o["x"])("ModalExample"),c=Object(o["x"])("ComponentApi");return Object(o["r"])(),Object(o["e"])("div",{class:e.$bem({})},[Object(o["i"])(u,null,{default:Object(o["H"])((function(){return[l]})),_:1}),Object(o["i"])(a),Object(o["i"])(c,{component:e.component},null,8,["component"]),Object(o["i"])(c,{component:e.componentHeader},null,8,["component"]),Object(o["i"])(c,{component:e.componentBody},null,8,["component"]),Object(o["i"])(c,{component:e.componentFooter},null,8,["component"])],2)}var i=n("3617"),r=Object(o["h"])(" Open modal "),u=Object(o["h"])(" top "),a=Object(o["h"])(" right "),c=Object(o["h"])(" bottom "),s=Object(o["h"])(" left "),b=Object(o["h"])("Header"),m=Object(o["h"])(" Body "),O=Object(o["h"])("Footer"),j=Object(o["h"])(" Close modal ");function p(e,t,n,l,d,i){var p=Object(o["x"])("VButton"),f=Object(o["x"])("VModalHeader"),h=Object(o["x"])("VModalBody"),V=Object(o["x"])("KnobBoolean"),x=Object(o["x"])("KnobListItem"),w=Object(o["x"])("KnobNumber"),S=Object(o["x"])("Knobs"),H=Object(o["x"])("VModalFooter"),g=Object(o["x"])("VModal"),v=Object(o["x"])("Preview"),M=Object(o["x"])("Sandbox");return Object(o["r"])(),Object(o["e"])(M,{id:"example",title:"Example"},{default:Object(o["H"])((function(){return[Object(o["i"])(v,null,{default:Object(o["H"])((function(){return[Object(o["i"])(p,{color:"primary",dark:"",onClick:t[1]||(t[1]=function(e){return d.isModalShown=!0})},{default:Object(o["H"])((function(){return[r]})),_:1}),Object(o["i"])(g,{modelValue:d.isModalShown,"onUpdate:modelValue":t[14]||(t[14]=function(e){return d.isModalShown=e}),bordered:d.bordered,elevated:d.elevated,rounded:d.rounded,"rounded-lg":d.roundedLg,size:d.size,persistent:d.persistent,width:i.computedWidth,position:d.position,transition:d.transition,"close-on-esc":d.closeOnEsc},Object(o["g"])({default:Object(o["H"])((function(){return[Object(o["i"])(f,null,{default:Object(o["H"])((function(){return[b]})),_:1}),Object(o["i"])(h,null,{default:Object(o["H"])((function(){return[m]})),_:1}),Object(o["i"])(h,null,{default:Object(o["H"])((function(){return[Object(o["i"])(S,{style:{width:"100%"}},{default:Object(o["H"])((function(){return[Object(o["i"])(V,{modelValue:d.areSlotsShown,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.areSlotsShown=e}),label:"Show slots"},null,8,["modelValue"]),Object(o["i"])(x,{modelValue:d.position,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.position=e}),items:d.positions,label:"Position"},null,8,["modelValue","items"]),Object(o["i"])(x,{modelValue:d.size,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.size=e}),items:d.sizes,label:"Size"},null,8,["modelValue","items"]),Object(o["i"])(V,{modelValue:d.persistent,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.persistent=e}),label:"Persistent"},null,8,["modelValue"]),Object(o["i"])(V,{modelValue:d.closeOnEsc,"onUpdate:modelValue":t[6]||(t[6]=function(e){return d.closeOnEsc=e}),label:"Close on ESC"},null,8,["modelValue"]),Object(o["i"])(V,{modelValue:d.bordered,"onUpdate:modelValue":t[7]||(t[7]=function(e){return d.bordered=e}),label:"Bordered"},null,8,["modelValue"]),Object(o["i"])(V,{modelValue:d.elevated,"onUpdate:modelValue":t[8]||(t[8]=function(e){return d.elevated=e}),label:"Elevated"},null,8,["modelValue"]),Object(o["i"])(V,{modelValue:d.rounded,"onUpdate:modelValue":t[9]||(t[9]=function(e){return d.rounded=e}),label:"Rounded"},null,8,["modelValue"]),Object(o["i"])(V,{modelValue:d.roundedLg,"onUpdate:modelValue":t[10]||(t[10]=function(e){return d.roundedLg=e}),label:"Rounded large"},null,8,["modelValue"]),Object(o["i"])(x,{modelValue:d.transition,"onUpdate:modelValue":t[11]||(t[11]=function(e){return d.transition=e}),items:d.transitions,label:"Transition"},null,8,["modelValue","items"]),Object(o["i"])(w,{modelValue:d.width,"onUpdate:modelValue":t[12]||(t[12]=function(e){return d.width=e}),min:300,label:"Width (min width is 300)"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o["i"])(H,null,{default:Object(o["H"])((function(){return[O]})),_:1}),Object(o["i"])(H,null,{default:Object(o["H"])((function(){return[Object(o["i"])(p,{dark:"",color:"primary",onClick:t[13]||(t[13]=function(e){return d.isModalShown=!1})},{default:Object(o["H"])((function(){return[j]})),_:1})]})),_:1})]})),_:2},[d.areSlotsShown?{name:"top",fn:Object(o["H"])((function(){return[u]}))}:void 0,d.areSlotsShown?{name:"right",fn:Object(o["H"])((function(){return[a]}))}:void 0,d.areSlotsShown?{name:"bottom",fn:Object(o["H"])((function(){return[c]}))}:void 0,d.areSlotsShown?{name:"left",fn:Object(o["H"])((function(){return[s]}))}:void 0]),1032,["modelValue","bordered","elevated","rounded","rounded-lg","size","persistent","width","position","transition","close-on-esc"])]})),_:1})]})),_:1})}var f=n("c3c3"),h=n("4e45"),V={name:"ModalExample",components:{Preview:f["i"],Sandbox:f["j"],Knobs:f["g"],KnobListItem:f["d"],KnobBoolean:f["c"],KnobNumber:f["e"],VButton:i["c"],VModal:i["l"],VModalHeader:i["o"],VModalBody:i["m"],VModalFooter:i["n"]},data:function(){return{isModalShown:!1,areSlotsShown:!1,sizes:h["d"],positions:["middle","top","left","bottom","right","fullscreen"],transitions:h["f"],persistent:!1,bordered:!1,elevated:!1,rounded:!1,roundedLg:!1,size:"-",width:null,position:"middle",transition:"none",closeOnEsc:!1}},computed:{computedWidth:function(){return this.width?Math.max(this.width,300):this.width}}};V.render=p;var x=V,w=Object(o["j"])({name:"DocsComponentsIconButton",components:{PageHeader:f["h"],ComponentApi:f["b"],ModalExample:x},data:function(){return{component:i["l"],componentHeader:i["o"],componentBody:i["m"],componentFooter:i["n"]}}});w.render=d;t["default"]=w}}]);
//# sourceMappingURL=chunk-533fb516.61f48cba.js.map