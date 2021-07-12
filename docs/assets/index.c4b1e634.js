import{E as e,R as t,i as n,a as i,u as s,b as o}from"./vendor.93eb9e87.js";let r;const l={},a=e.exports.createContext(),c=e.exports.createContext();function p(){return e.exports.useContext(a)}function d(){return e.exports.useContext(c)}let u,m;function g({children:n}){const[i,s]=e.exports.useState(16),[o,r]=e.exports.useState(null),[l,p]=e.exports.useState(null),d=()=>{u=window.innerWidth,m=window.innerHeight,p(u>m),u<=1280&&u>=1024?(r(!1),s(u/1280*16)):u<1024&&(r(!0),s(u/1024*16))};return e.exports.useEffect((()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)})),[]),e.exports.useEffect((()=>{document.querySelector("html").style.fontSize=i+"px"}),[i]),t.createElement(a.Provider,{value:o},t.createElement(c.Provider,{value:l},n))}document.addEventListener("DOMContentLoaded",(function(e){u=window.innerWidth,m=window.innerHeight}));n.use(i).init({resources:{en:{translation:{page_list:[{text:"Home",url:"/"},{text:"Front End",url:"/frontend"},{text:"Back End",url:"/backend"},{text:"Others",url:"/others"}],web_title:"Cherry Resume",professional_title:"FRONT-END engineer",coding_life:"coding life",proverb001:["。。。","If you find a path with no obstacles,","it probably doesn’t lead anywhere."],experience:{title:"experience",period:{years:"years",months:"months"},company:[{name:"Design Outsourcing Company, Taipei, Taiwan",works:["front-end team leader","developed the 3D website"]},{name:"United China Air Freight Co., Ltd. Taipei, Taiwan",works:["Refactored & developed the transportation management system","Developed the OKR system (objectives and key results)"]}]},skills:{title:"Skills",types:["FRONT-END","BACK-END","OTHERS"],more:"MORE"},responsibilities:{title:"Responsibilities",list:["coding, and debugging web applications and services.","Refactored and developed common components to enhance project quality.","Team player and able to work independently","Continuously learn and improve skills."]},projects:{title:"Projects",contentList:[["REACT SPA","UI design & Animation design"],["Vue SPA","Content Management System & API","3D Websites"],["Vue SPA","Content Management System & API","3D Websites"],["landing page","SVG animation & Animation design"],["landing page","SVG animation & Animation design"]]},proverb002:["If you don’t want to wasted life in the world,","that is about to study for a lifetime."],frontend:{page_title:"FRONT-END",javascript_framework:{title:"JavaScript framework",list:[{title:"Vue.js",contents:["router","vuex","i18n","axios","Third party libraries","laravel"]},{title:"React.js",contents:["react-router-dom","hook","i18next","Third party libraries","laravel"]}]},javascript_skills:{title:"JavaScript skills",list:[{title:"VITE",contents:["Hot Module Replacement (HMR)","Super Fast Build Tool"]},{title:"Babylon.js",contents:["Web 3D rendering engines","support glTF"]},{title:"gsap",contents:["web animation","performance, compatibility"]}]},css_skills:{title:"CSS skills",list:[{title:"TailwindCss",contents:["A utility-first CSS framework","tiny in production"]},{title:"bootstrap",contents:["Quickly design","customize responsive mobile-first sites"]},{title:"Sass / Scss",contents:["the indented syntax","allows variables to be defined"]}]}},backend:{page_title:"BACK-END",main_view:{sql:["create","retrieve","update","delete"]},php_framework:{title:"PHP framework",list:[{title:"LARAVEL",contents:["Blade Templates","Model、View and Controller"]},{title:"SMARTY",contents:["PHP Template Engine","separates PHP from HTML"]}]},php_library:{title:"PHP library",list:[{title:"TCPDF",contents:["PHP class for generating PDF documents","complete support for UTF-8 Unicode"]},{title:"PHPMAILER",contents:["email creation and transfer class for PHP","HTML messages, and attachments"]}]}},others:{page_title:"OTHERS",git:{title:"GIT",list:[{title:"GIT",contents:["distributed version control system","convenient staging areas and multiple workflows"]}]},google_apps_script:{title:"Google Apps Script",list:[{title:"Google Apps Script",contents:["Use popular web languages","Scale your productivity","Built for Google"]},{title:"Data analysis",contents:["SQL","Google SHEETS","Google data studio"]}]},ui_ux:{title:"UI / UX",list:[{title:"UI / UX",contents:["User interface design","User Experience Design"]},{title:"Figma",contents:["Wireframe","Mockup","prototype"]}]}}}},tw:{translation:{page_list:[{text:"首頁",url:"/"},{text:"前端技能",url:"/frontend"},{text:"後端技能",url:"/backend"},{text:"其他技能",url:"/others"}],web_title:"郭蕙瑄履歷表",professional_title:"前端工程師",coding_life:"和程式為伍的日子 ",proverb001:["。。。","如果選擇太容易的路，","可能根本到達不了想要去的地方。"],experience:{title:"工作經歷",period:{years:"年",months:"月"},company:[{name:"設計接案公司, 台北, 台灣",works:["網頁前端組組長","3D 網站研發"]},{name:"華美航運股份有限公司. 台北, 台灣",works:["重構和開發運輸管理系統","開發 OKR 系統（目標和關鍵結果系統）"]}]},skills:{title:"技能",types:["前端","後端","其他"],more:"更多"},responsibilities:{title:"職責",list:["撰寫網頁應用程式與除錯","重構和開發共用組件以提高專案品質","團隊合作精神，並能獨立工作","不斷學習和提高技能"]},projects:{title:"Projects",contentList:[["REACT 一頁式網站","UI 設計 & 動畫設計"],["Vue 一頁式網站","網站後台管理 & API","3D 沉浸式網站"],["Vue 一頁式網站","網站後台管理 & API","3D 沉浸式網站"],["行銷登陸頁","SVG 動畫 & 動畫設計"],["行銷登陸頁","SVG 動畫 & 動畫設計"]]},proverb002:["如果不想在世界上虛度一生，那就要一輩子學習。"],frontend:{page_title:"前端技能",javascript_framework:{title:"JavaScript 框架",list:[{title:"Vue.js",contents:["router","vuex","i18n","axios","第三方函式庫","laravel"]},{title:"React.js",contents:["react-router-dom","hook","i18next","第三方函式庫","laravel"]}]},javascript_skills:{title:"JavaScript 技能",list:[{title:"VITE",contents:["熱模塊替換","超快速建構工具"]},{title:"Babylon.js",contents:["網頁 3D 渲染引擎","支援 glTF"]},{title:"gsap",contents:["網頁動畫","效能與相容性"]}]},css_skills:{title:"CSS 技能",list:[{title:"TailwindCss",contents:["一個功能優先的 CSS 框架","輕巧的生產環境"]},{title:"bootstrap",contents:["前端元件庫","建立響應式、行動優先的專案"]},{title:"Sass / Scss",contents:["縮排語法","支援定義變數"]}]}},backend:{page_title:"後端技能",main_view:{sql:["插入","查詢","更新","刪除"]},php_framework:{title:"PHP 框架",list:[{title:"LARAVEL",contents:["Blade 樣版","模型、視圖和控制器"]},{title:"SMARTY",contents:["PHP 的網頁模板引擎","將 HTML 碼與 PHP 程式碼分離"]}]},php_library:{title:"PHP 函式庫",list:[{title:"TCPDF",contents:["用於生成 PDF 文檔的 PHP class","完整支持 UTF-8"]},{title:"PHPMAILER",contents:["PHP 電子郵件創建和傳輸 class","HTML 訊息和附件"]}]}},others:{page_title:"其他技能",git:{title:"GIT",list:[{title:"GIT",contents:["分佈式版本控制系統","方便的暫存區和多個工作流等功能"]}]},google_apps_script:{title:"Google Apps Script",list:[{title:"Google Apps Script",contents:["使用常用的網頁程式語言","提高生產力","專為 Google 打造"]},{title:"數據分析",contents:["SQL","Google 試算表","Google data studio"]}]},ui_ux:{title:"UI / UX",list:[{title:"UI / UX",contents:["使用者介面設計","使用者經驗設計"]},{title:"Figma",contents:["線框圖","視覺稿","原型"]}]}}}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});const f=e.exports.createContext(),x=e.exports.createContext(),v=e.exports.createContext(),w=e.exports.createContext();function P(){return e.exports.useContext(f)}function h(){return e.exports.useContext(x)}function S(){return e.exports.useContext(v)}function y(){return e.exports.useContext(w)}const E=e=>("undefined"!=typeof window?new URLSearchParams(window.location.search):new URLSearchParams).get(e);function b({children:n}){const i=E("locale")?E("locale"):"en",[o,r]=e.exports.useState(i),{t:l,i18n:a}=s();return e.exports.useEffect((()=>{a.changeLanguage(o)}),[o]),t.createElement(f.Provider,{value:o},t.createElement(x.Provider,{value:r},t.createElement(v.Provider,{value:l},t.createElement(w.Provider,{value:a.store.data},n))))}const T=t.lazy((()=>function(e,t){if(!t)return e();if(void 0===r){const e=document.createElement("link").relList;r=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in l)return;l[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":r,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./App.6aca220a.js")),["/assets/App.6aca220a.js","/assets/vendor.93eb9e87.js"])));o.render(t.createElement(e.exports.Suspense,{fallback:t.createElement("div",{className:"w-full h-full flex-center"},"Loading ...")},t.createElement(g,null,t.createElement(b,null,t.createElement(T,null)))),document.getElementById("root"));export{S as a,d as b,P as c,h as d,y as e,p as u};
