import{d as h,o as _,c as u,a as i,w as l,F as f,r as y,b as n,n as P,p as v,e as m,_ as L,f as $,g as b,h as d,t as E,i as D,j as A,k as O}from"./vendor.c448481e.js";const R=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};R();var g=(t,a)=>{const o=t.__vccOpts||t;for(const[r,e]of a)o[r]=e;return o};const S=t=>(v("data-v-09f80e3a"),t=t(),m(),t),j={class:"carousel"},F=S(()=>n("div",{class:"content"},[n("div",{class:"game"}," Minecraft "),n("div",{class:"serve-name"}," Crushing\xB7RPG ")],-1)),V=h({setup(t){const a=["/Crushing-RPG/556712.jpg"];return(o,r)=>{const e=L;return _(),u("div",j,[i(e,{autoplay:"",effect:"fade"},{default:l(()=>[(_(),u(f,null,y(a,s=>n("div",{key:s,class:"carousel-item"},[n("div",{class:"carousel-item-bg",style:P({backgroundImage:`url(${s})`})},null,4)])),64))]),_:1}),F])}}});var B=g(V,[["__scopeId","data-v-09f80e3a"]]);const H={},N=t=>(v("data-v-5f978382"),t=t(),m(),t),T={class:"header"},z={class:"header-nav"},G={class:"header-nav-container"},W=N(()=>n("div",{class:"logo"}," Crushing\xB7RPG ",-1)),q={class:"header-menu"},K=d("\u9996\u9875"),M=d(" \u4ECB\u7ECD "),Q=d(" \u526F\u672C ");function U(t,a){const o=$("router-link");return _(),u("div",T,[n("div",z,[n("div",G,[W,n("div",q,[i(o,{to:"/"},{default:l(()=>[K]),_:1}),i(o,{to:"/about/about",class:b({"router-link-active":t.$route.path.startsWith("/about")})},{default:l(()=>[M]),_:1},8,["class"]),i(o,{to:"/world/f1",class:b({"router-link-active":t.$route.path.startsWith("/world")})},{default:l(()=>[Q]),_:1},8,["class"])])])])])}var J=g(H,[["render",U],["__scopeId","data-v-5f978382"]]);const X=h({setup(t){return(a,o)=>{const r=$("router-view");return _(),u(f,null,[i(J),i(B),i(r)],64)}}}),Y="modulepreload",k={},Z="/Crushing-RPG/",p=function(a,o){return!o||o.length===0?a():Promise.all(o.map(r=>{if(r=`${Z}${r}`,r in k)return;k[r]=!0;const e=r.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":Y,e||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),e)return new Promise((w,x)=>{c.addEventListener("load",w),c.addEventListener("error",x)})})).then(()=>a())};const C=t=>(v("data-v-65b5c10c"),t=t(),m(),t),ee={class:"content"},te=C(()=>n("h1",null,[n("a",{href:"https://pan.baidu.com/share/init?surl=uUmEig1pHEszaQihuh8wzg"}," \u5BA2\u6237\u7AEF\u4E91\u76D8 \u63D0\u53D6\u78012022 ")],-1)),se={class:"activity"},oe=C(()=>n("h2",null,"\u6700\u8FD1\u6D3B\u52A8",-1)),re=["onClick"],ne={class:"publish-time"},ae=h({setup(t){const a=[{title:"\u9876\u5E16",time:"2022-1-24",article:"dingtie"}];return(o,r)=>(_(),u("div",ee,[te,n("div",se,[oe,(_(),u(f,null,y(a,e=>n("p",{key:e.title,class:"activity-item",onClick:s=>o.$router.push(`/article/${e.article}`)},[d(E(e.title)+" ",1),n("span",ne," \u53D1\u5E03\u65F6\u95F4: "+E(e.time),1)],8,re)),64))])]))}});var ce=g(ae,[["__scopeId","data-v-65b5c10c"]]);const ie=[{path:"/tools",component:()=>p(()=>import("./index.95fb9ca8.js"),["assets/index.95fb9ca8.js","assets/index.ff019de5.css","assets/index.b43f9222.css","assets/vendor.c448481e.js","assets/vendor.e409b621.css"])},{path:"/",component:ce},{path:"/world/:name",component:()=>p(()=>import("./index.6fb40d00.js"),["assets/index.6fb40d00.js","assets/index.be71e034.css","assets/index.1d8f79c0.css","assets/index.b43f9222.css","assets/vendor.c448481e.js","assets/vendor.e409b621.css","assets/article.5662ff7b.js","assets/article.8bf6131f.css"])},{path:"/about/:name",component:()=>p(()=>import("./about.af78eb69.js"),["assets/about.af78eb69.js","assets/about.60398b25.css","assets/index.1d8f79c0.css","assets/index.b43f9222.css","assets/vendor.c448481e.js","assets/vendor.e409b621.css","assets/article.5662ff7b.js","assets/article.8bf6131f.css"])},{path:"/article/:name",component:()=>p(()=>import("./article.5662ff7b.js"),["assets/article.5662ff7b.js","assets/article.8bf6131f.css","assets/vendor.c448481e.js","assets/vendor.e409b621.css"])}];var _e=D({history:A(),routes:ie});let I=O(X);I.use(_e);I.mount("#app");export{g as _};
