import{_ as c,f as r,P as p,ai as i,r as t,o as l,g as d,d as e,w as m,n as u,h as f,e as n}from"./index.2e9bb75e.js";const _=r({name:"DocsGettingStartedQuickStart",components:{PageHeader:p,CodeBlock:i}}),g=f(" Quick start "),h=n("p",{class:"docs--p"}," Add library to your Vue 3 app in entry file (eg. main.js): ",-1),v=n("p",{class:"docs--p"}," Import stylesheet file: ",-1),y=n("p",{class:"docs--p"}," Install fontawesome icons in your project: ",-1),B=n("p",{class:"docs--p"}," and import icons in your styles: ",-1),C=n("p",{class:"docs--p"}," Now you can use components from library in your .vue files: ",-1);function b(s,k,w,V,x,A){const a=t("PageHeader"),o=t("CodeBlock");return l(),d("div",{class:u(s.$bem({}))},[e(a,null,{default:m(()=>[g]),_:1}),h,e(o,{language:"js",code:`
import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@vuebits/ui';

const config = {
  // your config here
};

createApp(App)
  .use(createUI(config))
  .mount('#app');
      `}),v,e(o,{language:"scss",code:"@import '~@vuebits/ui/dist/vuebits-ui;"}),y,e(o,{language:"bash",code:"npm i @fortawesome/fontawesome-free"}),B,e(o,{language:"scss",code:"@import '~@fortawesome/fontawesome-free/css/all.css';"}),C,e(o,{language:"html",code:`
<template>
  <VButton
    bordered
    rounded
    elevated
    @click='alert'
  >
    Click me!
  </VButton>
</template>

<script>
import {
  VButton
} from '@vuebits/ui';

export default {
  name: 'ExampleComponent',
  components: {
    VButton
  },
  methods: {
    alert () {
      alert('Hello world!');
    }
  }
};
<\/script>
      `})],2)}var H=c(_,[["render",b]]);export{H as default};
