if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>l(s,r),o={module:{uri:r},exports:u,require:c};e[r]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(n(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"51f64098e23399f93dfcc0c87f44474c"},{url:"assets/doid-symbol-legacy.202bbb20.js",revision:null},{url:"assets/doid-symbol.d051d0ef.js",revision:null},{url:"assets/Erc1155-legacy.6c99e288.js",revision:null},{url:"assets/Erc1155.a06e6baf.js",revision:null},{url:"assets/Erc721-legacy.d4c3f92e.js",revision:null},{url:"assets/Erc721.068eb702.js",revision:null},{url:"assets/index-legacy.30c97f5b.js",revision:null},{url:"assets/index-legacy.310cb7fd.js",revision:null},{url:"assets/index-legacy.6c8d5e89.js",revision:null},{url:"assets/index-legacy.cd05854f.js",revision:null},{url:"assets/index.0659a541.js",revision:null},{url:"assets/index.340de84a.js",revision:null},{url:"assets/index.79a35c0c.css",revision:null},{url:"assets/index.89ef147f.css",revision:null},{url:"assets/index.9507378f.css",revision:null},{url:"assets/index.a08dbac4.css",revision:null},{url:"assets/index.c4eb7b9b.js",revision:null},{url:"assets/index.c98e30bb.js",revision:null},{url:"assets/list-legacy.fe2c6577.js",revision:null},{url:"assets/list.947fa098.js",revision:null},{url:"assets/list.b616ca4e.css",revision:null},{url:"assets/locker-legacy.13f87367.js",revision:null},{url:"assets/Locker-legacy.461a0836.js",revision:null},{url:"assets/locker.1b63d7c4.js",revision:null},{url:"assets/Locker.codes-legacy.0f561214.js",revision:null},{url:"assets/Locker.codes.7346ac8c.js",revision:null},{url:"assets/Locker.eeb0418d.js",revision:null},{url:"assets/polyfills-legacy.47ab4e0a.js",revision:null},{url:"index.html",revision:"51f64098e23399f93dfcc0c87f44474c"},{url:"passes/index.html",revision:"51f64098e23399f93dfcc0c87f44474c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6021f5e33ac1290a17274255a13f8489"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
