(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dab63"],{"6d87":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["h"])(" Toolbar ");function i(e,t,o,i,r,l){var d=Object(n["x"])("PageHeader"),u=Object(n["x"])("ToolbarExample"),a=Object(n["x"])("ComponentApi");return Object(n["r"])(),Object(n["e"])("div",{class:e.$bem({})},[Object(n["i"])(d,null,{default:Object(n["H"])((function(){return[c]})),_:1}),Object(n["i"])(u),Object(n["i"])(a,{component:e.component},null,8,["component"]),Object(n["i"])(a,{component:e.componentLogo},null,8,["component"]),Object(n["i"])(a,{component:e.componentHamburger},null,8,["component"]),Object(n["i"])(a,{component:e.componentMenu},null,8,["component"]),Object(n["i"])(a,{component:e.componentMenuItem},null,8,["component"]),Object(n["i"])(a,{component:e.componentMenuDropdown},null,8,["component"])],2)}var r=o("3617"),l=(o("c7cd"),Object(n["h"])(" top-left ")),d=Object(n["h"])(" top-center "),u=Object(n["h"])(" top-right "),a=Object(n["h"])(" Left side "),b=Object(n["h"])(" Center side "),p=Object(n["h"])(" Link "),O=Object(n["h"])(" Dropdown 1 "),s=Object(n["i"])("div",{style:{width:"300px",border:"1px solid black","background-color":"white",padding:"10px"}}," To left ",-1),j=Object(n["h"])(" Dropdown 2 "),m=Object(n["i"])("div",{style:{width:"400px",border:"1px solid black","background-color":"white",padding:"10px"}}," To right ",-1),f=Object(n["h"])(" Dropdown 3 "),h=Object(n["i"])("div",{style:{border:"1px solid black","background-color":"white",padding:"10px"}}," Full size ",-1),x=Object(n["h"])(" Right side "),w=Object(n["i"])("div",{style:{height:"200px",width:"100%","background-color":"grey","z-index":"2",display:"flex","justify-content":"center","align-items":"center"}}," Content with absolute position and z-index 2 ",-1);function v(e,t,o,c,i,r){var v=Object(n["x"])("VToolbarHamburger"),g=Object(n["x"])("VToolbarLogo"),D=Object(n["x"])("VToolbarMenuItem"),H=Object(n["x"])("VToolbarMenuDropdown"),A=Object(n["x"])("VToolbarMenu"),V=Object(n["x"])("VToolbar"),M=Object(n["x"])("Preview"),k=Object(n["x"])("Sandbox");return Object(n["r"])(),Object(n["e"])(k,{id:"example",title:"Example"},{default:Object(n["H"])((function(){return[Object(n["i"])(M,null,{default:Object(n["H"])((function(){return[Object(n["i"])("div",null,[Object(n["i"])(V,{dark:i.dark,light:i.light,absolute:i.absolute,fixed:i.fixed,style:{height:"100px"}},{"top-left":Object(n["H"])((function(){return[l]})),"top-center":Object(n["H"])((function(){return[d]})),"top-right":Object(n["H"])((function(){return[u]})),left:Object(n["H"])((function(){return[Object(n["i"])(v,{modelValue:i.isMenuExpandedOnMobile,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.isMenuExpandedOnMobile=e}),style:{padding:"10px","font-size":"30px"}},null,8,["modelValue"]),Object(n["i"])(g,{href:"/",src:"https://via.placeholder.com/350x60?text=logo",alt:"Home page"}),a]})),center:Object(n["H"])((function(){return[b]})),right:Object(n["H"])((function(){return[Object(n["i"])(A,{dark:i.dark,light:i.light,"is-expanded-on-mobile":i.isMenuExpandedOnMobile,onOutside:r.closeAll},{default:Object(n["H"])((function(){return[Object(n["i"])(D,{href:"/"},{default:Object(n["H"])((function(){return[p]})),_:1}),Object(n["i"])(H,{modelValue:i.isActiveDropdown1,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.isActiveDropdown1=e}),"active-color":"primary","active-text-color":"white"},{dropdown:Object(n["H"])((function(){return[s]})),default:Object(n["H"])((function(){return[O]})),_:1},8,["modelValue"]),Object(n["i"])(H,{modelValue:i.isActiveDropdown2,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.isActiveDropdown2=e}),position:"right","active-color":"secondary","active-text-color":"white"},{dropdown:Object(n["H"])((function(){return[m]})),default:Object(n["H"])((function(){return[j]})),_:1},8,["modelValue"]),Object(n["i"])(H,{"model-value":i.isActiveDropdown3,"active-color":"white","active-text-color":"primary",position:"fullsize",onOpen:t[4]||(t[4]=function(e){i.isActiveDropdown3=!0,i.isActiveDropdown1=!1,i.isActiveDropdown2=!1}),onClose:t[5]||(t[5]=function(e){return i.isActiveDropdown3=!1})},{dropdown:Object(n["H"])((function(){return[h]})),default:Object(n["H"])((function(){return[f]})),_:1},8,["model-value"])]})),_:1},8,["dark","light","is-expanded-on-mobile","onOutside"]),x]})),_:1},8,["dark","light","absolute","fixed"]),w])]})),_:1})]})),_:1})}var g=o("c3c3"),D={name:"ToolbarExample",components:{Preview:g["i"],Sandbox:g["j"],VToolbar:r["A"],VToolbarLogo:r["C"],VToolbarMenu:r["D"],VToolbarMenuItem:r["F"],VToolbarMenuDropdown:r["E"],VToolbarHamburger:r["B"]},data:function(){return{dark:!0,light:!1,absolute:!1,fixed:!1,isActiveDropdown1:!1,isActiveDropdown2:!0,isActiveDropdown3:!1,isMenuExpandedOnMobile:!1}},methods:{closeAll:function(){this.isActiveDropdown1=!1,this.isActiveDropdown2=!1,this.isActiveDropdown3=!1}}};D.render=v;var H=D,A=Object(n["j"])({name:"DocsComponentsAsyncContent",components:{PageHeader:g["h"],ComponentApi:g["b"],ToolbarExample:H},data:function(){return{component:r["A"],componentLogo:r["C"],componentHamburger:r["B"],componentMenu:r["D"],componentMenuItem:r["F"],componentMenuDropdown:r["E"]}}});A.render=i;t["default"]=A}}]);
//# sourceMappingURL=chunk-2d0dab63.0bc32ea4.js.map