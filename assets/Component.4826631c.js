import{_ as $,aw as B,r as c,o as s,e as u,n,F as S,s as V,b as i,i as b,c as q,f as g,t as f,j as m,a as p,w as r,T as L,l as T,d as _,P as D}from"./index.d767eba6.js";import{_ as I,S as w,a as E}from"./ComponentApi.vue_vue_type_script_setup_true_lang.3f016e89.js";import{_ as K}from"./KnobBoolean.vue_vue_type_script_setup_true_lang.f57d079d.js";import{_ as j}from"./Knobs.vue_vue_type_script_setup_true_lang.14474ee8.js";function F(e,v,k,C,l,h){const d=c("UiIcon");return s(),u("div",{class:n(e.$bem({}))},[!e.vertical&&e.steps.length>1?(s(),u("ul",{key:0,class:n(e.$bem({e:"steps-axis"}))},[(s(!0),u(S,null,V(e.steps,(t,a)=>(s(),u("li",{key:a,class:n(e.$bem({e:"steps-axis-step"}))},[i("div",{class:n(e.$bem({e:"step-icon",m:{active:e.isStepActive(a),complete:t.complete,horizontal:!0}}))},[b(e.$slots,"icon",{icon:t.icon,complete:t.complete,data:t,position:a+1},()=>[t.complete?(s(),q(d,{key:0,name:e.$ui.icons.values.check},null,8,["name"])):t.icon?(s(),q(d,{key:1,name:t.icon},null,8,["name"])):e.numbered?(s(),u(S,{key:2},[g(f(a+1),1)],64)):m("",!0)])],2),i("div",{class:n(e.$bem({e:"step-axis-step-line"}))},null,2)],2))),128))],2)):m("",!0),i("ul",{class:n(e.$bem({e:"steps"}))},[(s(!0),u(S,null,V(e.steps,(t,a)=>(s(),u(S,{key:a},[e.vertical||e.isStepActive(a)?(s(),u("li",{key:0,class:n(e.$bem({e:"step"}))},[e.vertical&&e.steps.length>1?(s(),u("div",{key:0,class:n(e.$bem({e:"step-side"}))},[i("div",{class:n(e.$bem({e:"step-icon",m:{active:e.isStepActive(a),complete:t.complete}}))},[b(e.$slots,"icon",{icon:t.icon,complete:t.complete,data:t,position:a+1},()=>[t.complete?(s(),q(d,{key:0,name:e.$ui.icons.values.check},null,8,["name"])):t.icon?(s(),q(d,{key:1,name:t.icon},null,8,["name"])):e.numbered?(s(),u(S,{key:2},[g(f(a+1),1)],64)):m("",!0)])],2),i("div",{class:n(e.$bem({e:"step-line"}))},null,2)],2)):m("",!0),i("div",{class:n(e.$bem({e:"step-main"}))},[i("div",{class:n(e.$bem({e:"step-header"}))},[i("div",{class:n(e.$bem({e:"step-titles"}))},[b(e.$slots,"step-title",{text:t.title,data:t,position:a+1},()=>[t.title?(s(),u("h2",{key:0,class:n(e.$bem({e:"step-title"}))},f(t.title),3)):m("",!0)]),b(e.$slots,"step-header",{text:t.subtitle,data:t,position:a+1},()=>[t.subtitle?(s(),u("h3",{key:0,class:n(e.$bem({e:"step-subtitle"}))},f(t.subtitle),3)):m("",!0)])],2),e.isStepActive(a)?b(e.$slots,"step-header-right",{key:0,data:t,position:a+1,index:a,goTo:e.goTo,isLast:a+1===e.steps.length}):m("",!0)],2),p(L,{name:e.transition,mode:"out-in",onAfterLeave:e.showNextStep},{default:r(()=>[e.isStepActive(a)&&!e.nextStep?(s(),u("div",{key:0,class:n(e.$bem({e:"step-content"}))},[b(e.$slots,`step-content-${a+1}`,{content:t.content,data:t,position:a+1,index:a,goTo:e.goTo,isLast:a+1===e.steps.length},()=>[b(e.$slots,"step-content",{content:t.content,data:t,position:a+1,index:a,goTo:e.goTo,isLast:a+1===e.steps.length},()=>[g(f(t.content),1)])])],2)):m("",!0)]),_:2},1032,["name","onAfterLeave"])],2)],2)):m("",!0)],64))),128))],2)],2)}const y=$(B,[["render",F]]),H={name:"StepperExample",components:{Preview:I,Sandbox:w,Knobs:j,KnobBoolean:K,UiStepper:y,UiButton:T},data(){return{numbered:!0,vertical:!1,currentStep:1,steps:[{title:"Step 1",subtitle:"I am step 1",complete:!1,content:"Content of step 1"},{icon:"calendar",title:"Step 2",subtitle:"I am step 2",complete:!1,content:"Content of step 2",skippable:!0},{title:"Step 3",subtitle:"I am step 3",complete:!1,content:"Content of step 3",skippable:!0}]}},methods:{completeStep(e){this.steps[e.index].complete=!0,e.goTo(e.isLast?1:e.position+1)}}},z=i("div",null,[i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu ut velit semper condimentum eu vitae nisl. Aenean et ex at mauris condimentum vulputate. Phasellus non leo sit amet erat tristique ultricies at at metus. Fusce dapibus purus eu ex hendrerit, at pellentesque mi aliquet. Vivamus urna metus, malesuada nec eros at, rutrum lacinia leo. Curabitur gravida pulvinar malesuada. Nullam sodales lacus aliquet massa pellentesque mattis. Donec rutrum iaculis dui at finibus. Suspendisse imperdiet sagittis augue, nec semper sapien. In id orci placerat, facilisis massa laoreet, consequat libero. "),i("p",null," Suspendisse erat lectus, vehicula scelerisque libero at, aliquam hendrerit enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id eros ut ex aliquet scelerisque et et quam. Nam quis ligula purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum consectetur tincidunt leo, nec dictum erat cursus sed. Nam fringilla risus non justo blandit, eu semper nisl aliquet. Sed in justo mattis, placerat turpis faucibus, mollis leo. "),i("p",null," Donec posuere id velit vitae rutrum. Aliquam vitae venenatis arcu. Pellentesque lobortis felis sed lacinia ornare. Sed finibus diam a elit consequat, ac iaculis ante gravida. Nullam ac ornare nulla. Aenean dictum nulla erat. Nam quis ipsum vel diam malesuada mattis eget aliquam leo. Curabitur nec posuere purus. Nam erat lectus, consequat a pretium laoreet, porttitor eget tortor. "),i("p",null," Nam sed vehicula elit, ut varius dui. Integer est diam, tempor sed iaculis vel, pulvinar eget libero. Nam pharetra eleifend nisi, id tincidunt dui dapibus sed. Donec lacinia tortor non elit bibendum, imperdiet ornare nunc vestibulum. Ut at enim quis elit volutpat placerat. Phasellus vitae tempor lacus, id pulvinar nibh. Duis molestie magna consectetur, egestas neque ut, pretium magna. Fusce pretium neque sit amet augue vehicula tristique. Etiam rutrum ipsum est, non laoreet mauris consectetur eget. Aenean pharetra est vitae ante faucibus vulputate. "),i("p",null," Vivamus odio lectus, fringilla nec arcu at, accumsan malesuada elit. Vivamus lectus felis, dictum sit amet velit hendrerit, vulputate varius dolor. Vivamus ante purus, pretium vel dignissim eu, rhoncus eu eros. Morbi turpis mauris, accumsan in tortor sit amet, volutpat euismod dui. Nulla aliquam tincidunt accumsan. Sed non eros nisl. Aliquam ante urna, auctor vel lorem eu, tincidunt tempus erat. Nunc massa lacus, consequat quis dapibus a, vulputate ut mi. Nullam faucibus libero non arcu cursus, quis hendrerit odio maximus. Suspendisse viverra leo quam, vitae accumsan magna dictum vitae. Praesent vel feugiat diam. Nulla metus augue, pellentesque ut ligula sagittis, dignissim tristique erat. Mauris sagittis vehicula enim vel eleifend. ")],-1),M=i("div",null,[i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu ut velit semper condimentum eu vitae nisl. Aenean et ex at mauris condimentum vulputate. Phasellus non leo sit amet erat tristique ultricies at at metus. Fusce dapibus purus eu ex hendrerit, at pellentesque mi aliquet. Vivamus urna metus, malesuada nec eros at, rutrum lacinia leo. Curabitur gravida pulvinar malesuada. Nullam sodales lacus aliquet massa pellentesque mattis. Donec rutrum iaculis dui at finibus. Suspendisse imperdiet sagittis augue, nec semper sapien. In id orci placerat, facilisis massa laoreet, consequat libero. "),i("p",null," Suspendisse erat lectus, vehicula scelerisque libero at, aliquam hendrerit enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id eros ut ex aliquet scelerisque et et quam. Nam quis ligula purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum consectetur tincidunt leo, nec dictum erat cursus sed. Nam fringilla risus non justo blandit, eu semper nisl aliquet. Sed in justo mattis, placerat turpis faucibus, mollis leo. "),i("p",null," Donec posuere id velit vitae rutrum. Aliquam vitae venenatis arcu. Pellentesque lobortis felis sed lacinia ornare. Sed finibus diam a elit consequat, ac iaculis ante gravida. Nullam ac ornare nulla. Aenean dictum nulla erat. Nam quis ipsum vel diam malesuada mattis eget aliquam leo. Curabitur nec posuere purus. Nam erat lectus, consequat a pretium laoreet, porttitor eget tortor. ")],-1);function O(e,v,k,C,l,h){const d=c("UiButton"),t=c("UiStepper"),a=c("Preview"),N=c("KnobBoolean"),A=c("Knobs"),P=c("Sandbox");return s(),q(P,{id:"example",title:"Example"},{controls:r(()=>[p(A,null,{default:r(()=>[p(N,{modelValue:l.numbered,"onUpdate:modelValue":v[1]||(v[1]=o=>l.numbered=o),label:"Numbered"},null,8,["modelValue"]),p(N,{modelValue:l.vertical,"onUpdate:modelValue":v[2]||(v[2]=o=>l.vertical=o),label:"Vertical"},null,8,["modelValue"])]),_:1})]),default:r(()=>[p(a,{style:{height:"300px"}},{default:r(()=>[p(t,{modelValue:l.currentStep,"onUpdate:modelValue":v[0]||(v[0]=o=>l.currentStep=o),steps:l.steps,numbered:l.numbered,vertical:l.vertical},{"step-content-1":r(o=>[z,p(d,{color:"primary",dark:"",rounded:"",onClick:U=>h.completeStep(o)},{default:r(()=>[g(" Submit ")]),_:2},1032,["onClick"])]),"step-content-2":r(()=>[M]),"step-header-right":r(o=>[o.data.skippable?(s(),q(d,{key:0,color:"primary",dark:"",rounded:"",onClick:U=>h.completeStep(o)},{default:r(()=>[g(f(o.isLast?"Go to first step":"Continue"),1)]),_:2},1032,["onClick"])):m("",!0)]),_:1},8,["modelValue","steps","numbered","vertical"])]),_:1})]),_:1})}const G=$(H,[["render",O]]),J=_({name:"DocsComponentsStepper",components:{PageHeader:D,ComponentApi:E,StepperExample:G},data(){return{component:y}}});function Q(e,v,k,C,l,h){const d=c("PageHeader"),t=c("StepperExample"),a=c("ComponentApi");return s(),u("div",{class:n(e.$bem({}))},[p(d,null,{default:r(()=>[g(" Stepper ")]),_:1}),p(t),p(a,{component:e.component},null,8,["component"])],2)}const Z=$(J,[["render",Q]]);export{Z as default};