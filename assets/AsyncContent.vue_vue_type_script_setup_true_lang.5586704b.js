import{d as v,u as z,g as u,o as t,e as n,n as o,h as e,i as p,b as m,t as l,a as d,c as N,w as f,f as _,m as y,j as i,T as b,U as S,k as h,l as w,p as E}from"./index.d767eba6.js";const V={key:0},j=v({__name:"AsyncContent",props:{loading:{type:Boolean},spinnerSize:{default:"2x"},loadingText:{default:""},error:{type:Boolean,default:!1},errorText:{default:""},reloadable:{type:Boolean,default:!1},reloadText:{default:""}},emits:["reload"],setup(T,{emit:g}){const c=T,k=g,r=z(),s=E("ui-async-content"),x=u(()=>c.errorText||r.t().asyncContent.errorText),B=u(()=>c.reloadText||r.t().asyncContent.reloadText),C=()=>{k("reload")};return(a,$)=>(t(),n("div",y({class:e(s)({})},e(r).testElName("async-content")),[a.loading?(t(),n("div",{key:0,class:o(e(s)({e:"loading-wrapper"}))},[p(a.$slots,"loader",{},()=>[d(e(S),{class:o(e(s)({e:"loader"})),size:a.spinnerSize},null,8,["class","size"])]),m("p",{class:o(e(s)({e:"loading-text"}))},l(a.loadingText),3)],2)):a.error?(t(),n("div",{key:1,class:o(e(s)({e:"error-wrapper"}))},[d(e(h),{class:o(e(s)({e:"error-icon"})),size:"3x",name:e(r).icons.values.error},null,8,["class","name"]),m("p",{class:o(e(s)({e:"error-text"}))},l(x.value),3),a.reloadable?(t(),N(e(w),y({key:0,color:"primary",rounded:"",dark:"",class:e(s)({e:"reload-button"})},e(r).testElName("async-content-reload"),{onClick:C}),{default:f(()=>[_(l(B.value),1)]),_:1},16,["class"])):i("",!0)],2)):i("",!0),d(b,{name:"slide"},{default:f(()=>[!a.loading&&!a.error?(t(),n("div",V,[p(a.$slots,"default")])):i("",!0)]),_:3})],16))}});export{j as _};
