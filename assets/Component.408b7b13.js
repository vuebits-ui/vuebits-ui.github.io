import{_ as c,K as V,a as C,b as S,V as p,r as i,o as b,c as A,w as l,d as o,e as a,f as h,P,C as K,g as T,n as y,h as E}from"./index.2e9bb75e.js";import{P as z,S as N}from"./Sandbox.5616347c.js";import{K as B}from"./Knobs.12997fb5.js";import{i as U}from"./story-params.3e80c8a4.js";const L={name:"AsyncContentExample",components:{Preview:z,Sandbox:N,Knobs:B,KnobListItem:V,KnobBoolean:C,KnobString:S,VAsyncContent:p},data(){return{iconSizes:U,loading:!0,error:!1,reloadable:!1,spinnerSize:"2x",loadingText:"loading text",errorText:"error text",reloadText:"reload text"}},mounted(){setTimeout(()=>{this.loading=!1},2e3)}},w=a("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, tellus rutrum commodo vestibulum, metus quam elementum turpis, nec imperdiet justo quam ut augue. Curabitur semper risus sit amet elit commodo tempor. Sed ac enim quis nisi elementum rhoncus. Quisque tristique, diam ac pulvinar ultrices, nisi enim sodales diam, eu ornare eros quam eu mauris. Fusce fringilla, erat ac ornare lacinia, libero sapien pharetra sem, sed pulvinar sapien urna eget arcu. Vestibulum ut quam venenatis, venenatis diam quis, pellentesque orci. Aliquam erat volutpat. Suspendisse sit amet imperdiet orci. Pellentesque bibendum quam fringilla imperdiet consectetur. Phasellus sollicitudin a nisl sit amet blandit. ",-1),I=a("p",null," Etiam fringilla est cursus ante viverra, non iaculis nibh lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse maximus massa auctor tellus convallis, quis faucibus dui luctus. Mauris in ullamcorper nibh. Cras ac luctus leo, id sagittis mauris. Nam suscipit sed quam ullamcorper elementum. Morbi vehicula sapien ante, ut sagittis mi lobortis ut. Maecenas ullamcorper felis nec maximus pellentesque. Nulla vel laoreet tellus. ",-1),M=a("p",null," Phasellus vel sodales nibh. Etiam vel tortor sit amet nisi hendrerit luctus. Vivamus non vehicula neque. Donec sed euismod quam. Sed nec diam sit amet libero porttitor molestie id quis velit. Phasellus vehicula feugiat mollis. Donec ut magna non lacus sodales rutrum sit amet aliquam elit. Aenean semper erat at mauris suscipit fringilla a sed justo. Etiam nec nisi quis metus faucibus rhoncus sed id lorem. Cras ut nisl in odio imperdiet facilisis. Sed accumsan tortor ac rutrum tempor. Mauris congue odio tincidunt augue porttitor finibus vitae et odio. Fusce ac lorem non erat ultrices pellentesque vel eget eros. Aenean fermentum a enim id venenatis. ",-1),D=a("p",null," Quisque nec commodo est. Maecenas pulvinar pellentesque tempus. Cras imperdiet tincidunt erat id feugiat. Quisque purus felis, viverra at dapibus sit amet, efficitur rhoncus purus. Nullam et tempus tortor. Duis commodo libero at pellentesque aliquam. Curabitur in semper augue. Vivamus pellentesque justo at arcu pulvinar, quis rutrum magna viverra. Suspendisse potenti. Fusce velit orci, sollicitudin ut quam et, malesuada malesuada tortor. ",-1),F=a("p",null," Phasellus et dui metus. Pellentesque malesuada ligula ac ipsum commodo, in interdum magna varius. Aenean quis scelerisque lacus. Cras ultrices ipsum non ante fermentum ultrices. Fusce ullamcorper dolor venenatis, faucibus urna sed, porttitor ex. Integer et eros id arcu lacinia consequat pharetra id neque. Nullam nec pretium velit. Praesent lacinia tellus sed tincidunt aliquam. In semper nulla at ultricies elementum. Vivamus tellus sem, congue sit amet vehicula a, vestibulum in sapien. Vivamus viverra faucibus libero, ac egestas mauris pretium iaculis. Suspendisse a est ex. Nunc at diam a libero fringilla gravida vulputate vel erat. ",-1);function j(u,t,v,g,e,f){const r=i("VAsyncContent"),m=i("Preview"),s=i("KnobBoolean"),d=i("KnobString"),x=i("KnobListItem"),_=i("Knobs"),q=i("Sandbox");return b(),A(q,{id:"example",title:"Example"},{controls:l(()=>[o(_,null,{default:l(()=>[o(s,{modelValue:e.loading,"onUpdate:modelValue":t[0]||(t[0]=n=>e.loading=n),label:"Loading"},null,8,["modelValue"]),o(d,{modelValue:e.loadingText,"onUpdate:modelValue":t[1]||(t[1]=n=>e.loadingText=n),label:"Loading text"},null,8,["modelValue"]),o(x,{modelValue:e.spinnerSize,"onUpdate:modelValue":t[2]||(t[2]=n=>e.spinnerSize=n),items:e.iconSizes,label:"Spinner size"},null,8,["modelValue","items"]),o(s,{modelValue:e.error,"onUpdate:modelValue":t[3]||(t[3]=n=>e.error=n),label:"Error"},null,8,["modelValue"]),o(d,{modelValue:e.errorText,"onUpdate:modelValue":t[4]||(t[4]=n=>e.errorText=n),label:"Error text"},null,8,["modelValue"]),o(s,{modelValue:e.reloadable,"onUpdate:modelValue":t[5]||(t[5]=n=>e.reloadable=n),label:"Reloadabilty"},null,8,["modelValue"]),o(d,{modelValue:e.reloadText,"onUpdate:modelValue":t[6]||(t[6]=n=>e.reloadText=n),label:"Reload button text"},null,8,["modelValue"])]),_:1})]),default:l(()=>[o(m,null,{default:l(()=>[o(r,{loading:e.loading,error:e.error,reloadable:e.reloadable,"spinner-size":e.spinnerSize,"loading-text":e.loadingText,"error-text":e.errorText,"reload-text":e.reloadText},{default:l(()=>[w,I,M,D,F]),_:1},8,["loading","error","reloadable","spinner-size","loading-text","error-text","reload-text"])]),_:1})]),_:1})}var k=c(L,[["render",j]]);const H=h({name:"DocsComponentsAsyncContent",components:{PageHeader:P,ComponentApi:K,AsyncContentExample:k},data(){return{component:p}}}),Q=E(" Async Content ");function R(u,t,v,g,e,f){const r=i("PageHeader"),m=i("AsyncContentExample"),s=i("ComponentApi");return b(),T("div",{class:y(u.$bem({}))},[o(r,null,{default:l(()=>[Q]),_:1}),o(m),o(s,{component:u.component},null,8,["component"])],2)}var X=c(H,[["render",R]]);export{X as default};
