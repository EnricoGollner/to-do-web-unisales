if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};s[r]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-4e01a4be"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/About-38296d73.css",revision:null},{url:"assets/About-5631e5a9.js",revision:null},{url:"assets/index-1e8da44d.css",revision:null},{url:"assets/index-344a88d6.js",revision:null},{url:"assets/PageNotFound-f560a870.js",revision:null},{url:"assets/Todo-ba40a73e.css",revision:null},{url:"assets/Todo-ce6fc9ba.js",revision:null},{url:"assets/Welcome-1bb4dd24.css",revision:null},{url:"assets/Welcome-94ad7b2a.js",revision:null},{url:"index.html",revision:"002d5f4825556fa5f51c9fcbba3a7df1"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"5472be8f893c2b1f49f7788ddd35054f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
