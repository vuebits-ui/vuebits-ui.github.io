import{_ as c,P as r,$ as p}from"./index.d85ea893.js";import{d as i,b as t,o as l,c as d,k as e,w as m,n as u,l as f,i as n}from"./vendor.5cc0b48b.js";const _=i({name:"DocsGettingStartedQuickStart",components:{PageHeader:r,CodeBlock:p}}),g=f(" Quick start "),h=n("p",{class:"docs--p"}," Add library to your Vue 3 app in entry file (eg. main.js): ",-1),v=n("p",{class:"docs--p"}," Import stylesheet file: ",-1),y=n("p",{class:"docs--p"}," Install fontawesome icons in your project: ",-1),b=n("p",{class:"docs--p"}," and import icons in your styles: ",-1),k=n("p",{class:"docs--p"}," Now you can use components from library in your .vue files: ",-1);function B(s,C,w,V,x,A){const a=t("PageHeader"),o=t("CodeBlock");return l(),d("div",{class:u(s.$bem({}))},[e(a,null,{default:m(()=>[g]),_:1}),h,e(o,{language:"js",code:`
import { createApp } from 'vue';
import App from './App.vue';
import { createUI } from '@vuebits/ui';

const config = {
  // your config here
};

createApp(App)
  .use(createUI(config))
  .mount('#app');
      `}),v,e(o,{language:"scss",code:"@import '~@vuebits/ui/dist/vuebits-ui;"}),y,e(o,{language:"bash",code:"npm i @fortawesome/fontawesome-free"}),b,e(o,{language:"scss",code:"@import '~@fortawesome/fontawesome-free/css/all.css';"}),k,e(o,{language:"html",code:`
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
      `})],2)}var I=c(_,[["render",B]]);export{I as default};
