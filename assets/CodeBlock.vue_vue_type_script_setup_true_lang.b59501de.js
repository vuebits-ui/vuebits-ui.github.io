import{d as k,aP as o,aQ as B,aR as T,aS as L,aT as S,z as j,v as d,g as p,o as z,e as N,a as m,w as g,b as c,i as R,n as t,h as a,f,t as v,a1 as V,a9 as $,l as w,p as D}from"./index.d767eba6.js";const M=k({__name:"CodeBlock",props:{language:{default:""},code:{default:""}},setup(x){o.registerLanguage("xml",B),o.registerLanguage("javascript",T),o.registerLanguage("css",L),o.registerLanguage("bash",S);const C=x,{language:_,code:h}=j(C),n=d("Copy"),u=d(null),r=d(null),s=D("CodeBlock"),E=p(()=>[...s({e:"code"}),`language-${_.value}`,"hljs"]),i=p(()=>h.value.trim()),b=async()=>{V(()=>{!r.value||o.highlightBlock(r.value)})},y=()=>{n.value="Copied!";const e=document.createElement("textarea");e.innerHTML=i.value;const l=u.value;!l||(l.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),l.removeChild(e),setTimeout(()=>{n.value="Copy"},2e3))};return b(),(e,l)=>(z(),N("div",{class:t(a(s)({}))},[m(a($),{class:t(a(s)({e:"code-box"})),rounded:""},{default:g(()=>[c("pre",{ref_key:"codeEl",ref:r,class:t(E.value)},[c("code",null,[R(e.$slots,"default",{},()=>[f(v(i.value),1)])])],2)]),_:3},8,["class"]),c("div",{class:t(a(s)({e:"bottom"}))},[m(a(w),{elevated:"",size:"sm",class:t(a(s)({e:"copy"})),onClick:y},{default:g(()=>[f(v(n.value),1)]),_:1},8,["class"])],2),c("div",{ref_key:"clipboardEl",ref:u},null,512)],2))}});export{M as _};
