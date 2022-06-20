import{_ as r,d as c,P as p,r as t,o as l,e as d,a as e,w as m,n as u,f as o,b as n}from"./index.c99ef684.js";import{_ as g}from"./CodeBlock.d654471d.js";const f=c({name:"DocsGettingStartedConfiguration",components:{PageHeader:p,CodeBlock:g}}),_=o(" Configuration "),$=n("p",{class:"docs--p"}," If you want to customize your library you can pass config along with ui. For example: ",-1),y=n("p",{class:"docs--p"}," You can also overwrite scss variables used in library. For this purpose import scss styles in your app instead of css: ",-1),b=n("p",{class:"docs--p"},[o(" And configure your "),n("code",null,"vue.config.json"),o(" file in the following way: ")],-1),h=n("p",{class:"docs--p"},[o(" and import library config in "),n("code",null,"/src/assets/styles/config.scss"),o(" file: ")],-1),w=n("p",{class:"docs--p"}," Now you can set your own scss variables that will overwrite variables used in library, for example: ",-1);function v(a,x,C,z,B,F){const i=t("PageHeader"),s=t("CodeBlock");return l(),d("div",{class:u(a.$bem({}))},[e(i,null,{default:m(()=>[_]),_:1}),$,e(s,{language:"js",code:`
import Vue from 'vue';
import App from './App.vue';
import Ui from '@vuebits/ui';

const uiOptions = {
  bem: {
    hyphenate: true
  }
};

Vue.use(Ui, uiOptions);

new Vue({
  render: h => h(App)
}).$mount('#app');
      `}),y,e(s,{language:"scss",code:"@import '~@vuebits/ui/styles';"}),b,e(s,{language:"js",code:`
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: \`
          @import '~@/assets/styles/config.scss';
        \`
      }
    }
  }
};
      `}),h,e(s,{language:"scss",code:"@import '~@vuebits/ui/styles/config';"}),w,e(s,{language:"scss",code:`
// margins, paddings etc.
$sp: 7px;

// borders
$border-radius-main: $sp;
$border-radius-large: 3 * $sp;
$border-width: 3px;

// z-index
$layer-modal: 100000;
$layer-dropdown: 2;
$layer-toolbar: 10;
$layer-notifications: 10000000;

// button sizes
$button-size-sm: 2rem;
$button-size-md: 6rem;
$button-size-lg: 8rem;

$color-white: #FFF;
$color-green-peppermint: #EFF8EB;

$colors: (
  'white': $color-white,
  'primary': $color-green-peppermint,
);

// animation times
$animation-time-short: 100ms;
$animation-time: 300ms;
$animation-time-long: 600ms;
      `})],2)}var A=r(f,[["render",v]]);export{A as default};
