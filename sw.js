if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const o=e=>i(e,t),u={module:{uri:t},exports:r,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(l(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/HomeView-c3d761e0.js",revision:null},{url:"assets/index-9389998b.css",revision:null},{url:"assets/index-e9726f84.js",revision:null},{url:"assets/list-fae95ba3.js",revision:null},{url:"assets/ListView-1228bac9.js",revision:null},{url:"assets/ListView-1cfd68d9.css",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-c6271624.js",revision:null},{url:"assets/SettingsView-4791ee6a.css",revision:null},{url:"assets/SettingsView-bec13589.js",revision:null},{url:"assets/tomato-fe6b03eb.png",revision:null},{url:"assets/VInput-41c625f1.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-3c3657ed.js",revision:null},{url:"favicon.ico",revision:"25e23892d1b98272cdeb2d655319c3eb"},{url:"index.html",revision:"fb44696b8348153ed7a9c4be57387599"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"20d3fedf5d424126bcf77a45e95cf2a8"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
