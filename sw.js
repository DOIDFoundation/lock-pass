if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),a={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"41b55dda082007e9d3e8e766a8f3024f"},{url:"assets/doid-symbol-legacy.2f467bda.js",revision:null},{url:"assets/doid-symbol.d5815146.js",revision:null},{url:"assets/Erc1155-legacy.6c99e288.js",revision:null},{url:"assets/Erc1155.a06e6baf.js",revision:null},{url:"assets/Erc721-legacy.d4c3f92e.js",revision:null},{url:"assets/Erc721.068eb702.js",revision:null},{url:"assets/index-legacy.0763a9b1.js",revision:null},{url:"assets/index-legacy.29520417.js",revision:null},{url:"assets/index-legacy.3d6a84e8.js",revision:null},{url:"assets/index-legacy.966f77b1.js",revision:null},{url:"assets/index.0697ab4d.js",revision:null},{url:"assets/index.076e9205.css",revision:null},{url:"assets/index.2545b29e.css",revision:null},{url:"assets/index.261497f5.js",revision:null},{url:"assets/index.487639ee.js",revision:null},{url:"assets/index.79a35c0c.css",revision:null},{url:"assets/index.c085ff71.js",revision:null},{url:"assets/index.c6b1863d.css",revision:null},{url:"assets/list-legacy.8e4f4428.js",revision:null},{url:"assets/list.b616ca4e.css",revision:null},{url:"assets/list.dd71253a.js",revision:null},{url:"assets/Locker-legacy.461a0836.js",revision:null},{url:"assets/locker-legacy.a64805c8.js",revision:null},{url:"assets/locker.358edda9.js",revision:null},{url:"assets/Locker.codes-legacy.0f561214.js",revision:null},{url:"assets/Locker.codes.7346ac8c.js",revision:null},{url:"assets/Locker.eeb0418d.js",revision:null},{url:"assets/polyfills-legacy.d9fc4654.js",revision:null},{url:"index.html",revision:"41b55dda082007e9d3e8e766a8f3024f"},{url:"passes/index.html",revision:"41b55dda082007e9d3e8e766a8f3024f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6021f5e33ac1290a17274255a13f8489"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
