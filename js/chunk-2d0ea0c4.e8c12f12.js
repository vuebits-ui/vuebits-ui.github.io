(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ea0c4"],{"8faa":function(e,n,t){"use strict";t.r(n);var o=t("7a23"),c=Object(o["h"])(" Quick start "),a=Object(o["i"])("p",{class:"docs--p"}," Add library to your Vue 3 app in entry file (eg. main.js): ",-1),s=Object(o["i"])("p",{class:"docs--p"}," Import stylesheet file: ",-1),r=Object(o["i"])("p",{class:"docs--p"}," Install fontawesome icons in your project: ",-1),i=Object(o["i"])("p",{class:"docs--p"}," and import icons in your styles: ",-1),p=Object(o["i"])("p",{class:"docs--p"}," Now you can use components from library in your .vue files: ",-1);function u(e,n,t,u,l,d){var m=Object(o["x"])("PageHeader"),b=Object(o["x"])("CodeBlock");return Object(o["r"])(),Object(o["e"])("div",{class:e.$bem({})},[Object(o["i"])(m,null,{default:Object(o["H"])((function(){return[c]})),_:1}),a,Object(o["i"])(b,{language:"js",code:"\nimport { createApp } from 'vue';\nimport App from './App.vue';\nimport { createUI } from '@vuebits/ui';\n\n(async () => {\n  const app = createApp(App);\n  app\n    .use(createUI({}))\n    .mount('#app');\n})();\n      "}),s,Object(o["i"])(b,{language:"scss",code:"@import '~@vuebits/ui/dist/vuebits-ui;"}),r,Object(o["i"])(b,{language:"bash",code:"npm i @fortawesome/fontawesome-free"}),i,Object(o["i"])(b,{language:"scss",code:"@import '~@fortawesome/fontawesome-free/css/all.css';"}),p,Object(o["i"])(b,{language:"html",code:"\n<template>\n  <VButton\n    bordered\n    rounded\n    elevated\n    @click='alert'\n  >\n    Click me!\n  </VButton>\n</template>\n\n<script>\nimport {\n  VButton\n} from '@vuebits/ui';\n\nexport default {\n  name: 'ExampleComponent',\n  components: {\n    VButton\n  },\n  methods: {\n    alert () {\n      alert('Hello world!');\n    }\n  }\n};\n<\/script>\n      "})],2)}var l=t("c3c3"),d=Object(o["j"])({name:"DocsGettingStartedQuickStart",components:{PageHeader:l["h"],CodeBlock:l["a"]}});d.render=u;n["default"]=d}}]);
//# sourceMappingURL=chunk-2d0ea0c4.e8c12f12.js.map