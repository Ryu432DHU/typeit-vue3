import{r as h,o as u,c as _,a as e,b as l,w as c,d as a,F as g,e as b,f as y,t as f,u as v,n as $,g as m,h as w,i as N,j as D}from"./vendor.9781131f.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};S();var k=(i,n)=>{const t=i.__vccOpts||i;for(const[r,o]of n)t[r]=o;return t};const H={},A={class:"bg-neutral-900 py-2"},B={class:"container mx-auto flex justify-between"},F={class:"text-2xl text-white font-light"},G=a("TypeIt"),L={class:"flex"},O={class:"text-white px-4 py-2"},V=a("Home"),C={class:"text-white px-4 py-2"},M=a("Rankings"),T={class:"text-white px-4 py-2"},E=a("Edit"),P=e("li",{class:"text-white px-4 py-2"},[e("a",{href:"https://github.com/Ryu432DHU/typeit-vue3"},"GitHub")],-1);function R(i,n){const t=h("router-link");return u(),_("nav",A,[e("div",B,[e("h1",F,[l(t,{to:"/"},{default:c(()=>[G]),_:1})]),e("ul",L,[e("li",O,[l(t,{to:"/"},{default:c(()=>[V]),_:1})]),e("li",C,[l(t,{to:"/rankings"},{default:c(()=>[M]),_:1})]),e("li",T,[l(t,{to:"/edit"},{default:c(()=>[E]),_:1})]),P])])])}var j=k(H,[["render",R]]);const I={setup(i){return console.log("production"),(n,t)=>{const r=h("router-view");return u(),_(g,null,[l(j),l(r)],64)}}};const q=a("Fallback content"),z={props:{alcoholicDrinkName:String},setup(i){const n=b(20),t=y(()=>n.value>=20),r=y(()=>`You ${t.value?"can":"can not"} get alcoholic drink`),o=y(()=>({color:t.value?"green":"red"})),s=()=>{n.value++},d=()=>{n.value--};return(p,_e)=>(u(),_(g,null,[e("p",null,"Drink name:"+f(i.alcoholicDrinkName),1),e("p",{style:$(v(o))},"age: "+f(n.value)+" / "+f(v(r)),5),e("p",null,f(v(t)),1),e("div",null,[e("button",{class:"border-2 border-gray-500 mr-4 px-4 py-2 rounded-md",onClick:s},"+1 age"),e("button",{class:"border-2 border-gray-500 px-4 py-2 rounded-md",onClick:d},"-1 age")]),m(p.$slots,"header"),m(p.$slots,"default"),m(p.$slots,"default",{},()=>[q]),m(p.$slots,"footer")],64))}},K={class:"container mx-auto"},U=e("p",null,"Here might be a page title",-1),W=e("p",null,"Here's some contact info",-1),Y=e("h1",null,"Default slot",-1),J=a("Go to the Sub.vue"),Q=a("Go to a not not-existing-page"),X={setup(i){return(n,t)=>{const r=h("router-link");return u(),_("div",K,[l(z,{alcoholicDrinkName:"\u30B3\u30FC\u30E9"},{header:c(()=>[U]),footer:c(()=>[W]),default:c(()=>[Y]),_:1}),e("p",null,[l(r,{to:"/sub",class:"underline"},{default:c(()=>[J]),_:1})]),e("p",null,[l(r,{to:"/not-existing-page",class:"underline"},{default:c(()=>[Q]),_:1})])])}}},Z={},ee=e("h1",null,"This is Sub.vue",-1),te=a("Go to the top page");function oe(i,n){const t=h("router-link");return u(),_(g,null,[ee,l(t,{to:"/",class:"underline"},{default:c(()=>[te]),_:1})],64)}var ne=k(Z,[["render",oe]]);const se={},re=e("h1",null,"404 Page not found",-1),ce=a("Back to the top page");function le(i,n){const t=h("router-link");return u(),_(g,null,[re,e("p",null,[l(t,{to:"/",class:"underline"},{default:c(()=>[ce]),_:1})])],64)}var ie=k(se,[["render",le]]);const ae=[{path:"/",component:X},{path:"/sub",component:ne},{path:"/:pathMatch(.*)*",component:ie}],ue=w({history:N(),routes:ae}),x=D(I);x.use(ue);x.mount("#app");