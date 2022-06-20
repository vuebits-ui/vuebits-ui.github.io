import{_ as d,i as $,r as b,o as c,g as u,e as s,j as i,n as t,d as l,k as m,t as v}from"./index.2e9bb75e.js";const g={name:"Preview",components:{VIconButton:$},props:{height:{type:[Number,String],default:"auto"}},data(){return{isDark:!1}}};function k(e,n,o,f,r,p){const a=b("VIconButton");return c(),u("div",{style:m({height:o.height}),class:t([...e.$bem({}),"is-bordered",{"is-dark":r.isDark}])},[s("div",{class:t(e.$bem({e:"content"}))},[i(e.$slots,"default")],2),s("div",{class:t(e.$bem({e:"controls"}))},[l(a,{color:"white",light:"",icon:"sun","icon-type":"fa","icon-prefix":"fa-",onClick:n[0]||(n[0]=h=>r.isDark=!1)}),l(a,{color:"dark",icon:"moon","icon-type":"fa","icon-prefix":"fa-",dark:"",onClick:n[1]||(n[1]=h=>r.isDark=!0)})],2)],6)}var _=d(g,[["render",k]]);const y={name:"Sandbox",props:{id:{type:String,required:!0},title:{type:String,required:!0},height:{type:[Number,String],default:"auto"}}},S=["id"],B=["href"];function D(e,n,o,f,r,p){return c(),u("div",{class:t(e.$bem({}))},[s("span",{id:o.id,class:t(e.$bem({e:"anchor"}))},null,10,S),s("h3",{class:t(e.$bem({e:"title"}))},[s("a",{href:`#${o.id}`},v(o.title),9,B)],2),s("div",{class:t(e.$bem({e:"wrapper"}))},[s("div",{class:t(e.$bem({e:"content"})),style:m({height:o.height})},[i(e.$slots,"default")],6),s("div",{class:t(e.$bem({e:"controls"}))},[i(e.$slots,"controls")],2)],2)],2)}var w=d(y,[["render",D]]);export{_ as P,w as S};
