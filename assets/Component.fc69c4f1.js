import{_ as p,a4 as f,r as I,o as a,e as n,i as s,m as r,a as u,j as i,b as m,n as b,t as $,Q as g}from"./index.d767eba6.js";const k=["readonly","autofocus","rows","required","value","placeholder","maxlength","disabled"];function C(e,o,h,y,v,N){var t;const d=I("UiIcon");return a(),n("span",r({class:e.classes,style:e.styles},e.$ui.testElName("textarea")),[s(e.$slots,"before"),e.leftIcon?(a(),n("div",r({key:0,class:["is-hoverable",[...e.$bem({e:"icon",m:{clickable:e.leftIconClickable,round:e.round}}),e.roundedClass]]},e.$ui.testElName("textarea-icon-left"),{onClick:o[0]||(o[0]=(...l)=>e.onLeftIconClick&&e.onLeftIconClick(...l))}),[u(d,{name:e.leftIcon,color:e.leftIconColor},null,8,["name","color"])],16)):i("",!0),m("span",{class:b(e.$bem({e:"content",m:{disabled:e.disabled,["left-padding"]:!e.leftIcon,["right-padding"]:!e.rightIcon}}))},[e.label&&(e.modelValue||e.placeholder)?(a(),n("span",{key:0,class:b(e.$bem({e:"label"}))},$(e.label),3)):i("",!0),s(e.$slots,"before-text"),m("textarea",r({ref:"textarea",readonly:e.readonly,autofocus:e.autofocus,rows:e.rows,required:e.required,value:e.modelValue||void 0,placeholder:e.placeholder||e.label||void 0,maxlength:(t=e.maxlength)!=null?t:void 0,class:e.$bem({e:"textarea",m:{"with-label":!!e.label&&(!!e.modelValue||!!e.placeholder)}}),"data-test":"field",disabled:e.disabled},e.$ui.testElName("textarea-field"),{onInput:o[1]||(o[1]=(...l)=>e.input&&e.input(...l)),onFocus:o[2]||(o[2]=(...l)=>e.onFocus&&e.onFocus(...l)),onBlur:o[3]||(o[3]=(...l)=>e.onBlur&&e.onBlur(...l)),onKeydown:o[4]||(o[4]=g((...l)=>e.enter&&e.enter(...l),["enter"]))}),null,16,k),s(e.$slots,"after-text")],2),e.rightIcon?(a(),n("div",r({key:1,class:["is-hoverable",[...e.$bem({e:"icon",m:{clickable:e.rightIconClickable,round:e.round}}),e.roundedClass]]},e.$ui.testElName("textarea-icon-right"),{onClick:o[5]||(o[5]=(...l)=>e.onRightIconClick&&e.onRightIconClick(...l))}),[u(d,{name:e.rightIcon,color:e.rightIconColor},null,8,["name","color"])],16)):i("",!0),s(e.$slots,"after")],16)}const B=p(f,[["render",C]]);export{B as U};