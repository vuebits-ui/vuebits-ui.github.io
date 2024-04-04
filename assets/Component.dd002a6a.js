import{d as r,P as c,_ as i,r as t,o as p,e as l,a as e,w as d,f as m,n as u,b as o}from"./index.d767eba6.js";import{_}from"./CodeBlock.vue_vue_type_script_setup_true_lang.b59501de.js";const f=r({name:"DocsGettingStartedQuickStart",components:{PageHeader:c,CodeBlock:_}}),g=o("p",{class:"docs--p"},"Add library to your Vue 2 app in entry file (eg. main.js):",-1),B=o("p",{class:"docs--p"},"Import stylesheet file:",-1);function C(a,h,k,b,v,V){const s=t("PageHeader"),n=t("CodeBlock");return p(),l("div",{class:u(a.$bem({}))},[e(s,null,{default:d(()=>[m(" Quick start ")]),_:1}),g,e(n,{language:"js",code:`
import Vue from 'vue';
import App from './App.vue';
import Ui from '@vuebits/ui';

Vue.use(Ui);

new Vue({
  render: h => h(App)
}).$mount('#app');
      `}),B,e(n,{language:"scss",code:"@import '~@vuebits/ui/dist/lib;"}),e(n,{language:"html",code:`
<template>
  <UiButton
    bordered
    rounded
    elevated
    @click='alert'
  >
    Click me!
  </UiButton>
</template>

<script>
import {
  UiButton
} from '@vuebits/ui';

export default {
  name: 'ExampleComponent',
  components: {
    UiButton
  },
  methods: {
    alert () {
      alert('Hello world!');
    }
  }
};
<\/script>
      `})],2)}const U=i(f,[["render",C]]);export{U as default};
