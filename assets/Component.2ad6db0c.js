import{_ as c,d as r,P as p,r as t,o as i,e as l,a as e,w as m,n as d,f as u,b as n}from"./index.c99ef684.js";import{_ as f}from"./CodeBlock.d654471d.js";const _=r({name:"DocsGettingStartedQuickStart",components:{PageHeader:p,CodeBlock:f}}),g=u(" Quick start "),h=n("p",{class:"docs--p"}," Add library to your Vue 3 app in entry file (eg. main.js): ",-1),v=n("p",{class:"docs--p"}," Import stylesheet file: ",-1),y=n("p",{class:"docs--p"}," Install fontawesome icons in your project: ",-1),b=n("p",{class:"docs--p"}," and import icons in your styles: ",-1),B=n("p",{class:"docs--p"}," Now you can use components from library in your .vue files: ",-1);function C(s,k,w,V,x,A){const a=t("PageHeader"),o=t("CodeBlock");return i(),l("div",{class:d(s.$bem({}))},[e(a,null,{default:m(()=>[g]),_:1}),h,e(o,{language:"js",code:`
import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@vuebits/ui';

const config = {
  // your config here
};

createApp(App)
  .use(createUI(config))
  .mount('#app');
      `}),v,e(o,{language:"scss",code:"@import '~@vuebits/ui/dist/vuebits-ui;"}),y,e(o,{language:"bash",code:"npm i @fortawesome/fontawesome-free"}),b,e(o,{language:"scss",code:"@import '~@fortawesome/fontawesome-free/css/all.css';"}),B,e(o,{language:"html",code:`
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
      `})],2)}var I=c(_,[["render",C]]);export{I as default};
