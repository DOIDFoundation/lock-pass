System.register(["./vendor-legacy.225313ec.js","./index-legacy.af773b11.js"],(function(e,t){"use strict";var s,i,o,a,n,r,d;return{setters:[e=>{s=e.x},e=>{i=e.W,o=e.d,a=e.h,n=e.i,r=e.j,d=e.k}],execute:function(){const t="INSTALLED",h="NOT_INSTALLED",c="REGISTERED",g="REGISTERING",l="RELOADING",w={CHROME:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",FIREFOX:"https://addons.mozilla.org/firefox/addon/ether-metamask/",EDGE:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",DEFAULT:"https://metamask.io"},u="REGISTRATION_IN_PROGRESS",m="FORWARDER_ID",E=class{constructor({forwarderOrigin:e="https://fwd.metamask.io",forwarderMode:s=E.FORWARDER_MODE.INJECT}={}){this.forwarderOrigin=e,this.forwarderMode=s,this.state=E.isMetaMaskInstalled()?t:h;const i=E._detectBrowser();this.downloadUrl=i?w[i]:w.DEFAULT,this._onMessage=this._onMessage.bind(this),this._onMessageFromForwarder=this._onMessageFromForwarder.bind(this),this._openForwarder=this._openForwarder.bind(this),this._openDownloadPage=this._openDownloadPage.bind(this),this.startOnboarding=this.startOnboarding.bind(this),this.stopOnboarding=this.stopOnboarding.bind(this),window.addEventListener("message",this._onMessage),s===E.FORWARDER_MODE.INJECT&&"true"===sessionStorage.getItem(u)&&E._injectForwarder(this.forwarderOrigin)}_onMessage(e){if(e.origin===this.forwarderOrigin)return"metamask:reload"===e.data.type?this._onMessageFromForwarder(e):void console.debug(`Unknown message from '${e.origin}' with data ${JSON.stringify(e.data)}`)}_onMessageUnknownStateError(e){throw new Error(`Unknown state: '${e}'`)}async _onMessageFromForwarder(e){switch(this.state){case l:console.debug("Ignoring message while reloading");break;case h:console.debug("Reloading now to register with MetaMask"),this.state=l,location.reload();break;case t:console.debug("Registering with MetaMask"),this.state=g,await E._register(),this.state=c,e.source.postMessage({type:"metamask:registrationCompleted"},e.origin),this.stopOnboarding();break;case g:console.debug("Already registering - ignoring reload message");break;case c:console.debug("Already registered - ignoring reload message");break;default:this._onMessageUnknownStateError(this.state)}}startOnboarding(){sessionStorage.setItem(u,"true"),this._openDownloadPage(),this._openForwarder()}stopOnboarding(){"true"===sessionStorage.getItem(u)&&(this.forwarderMode===E.FORWARDER_MODE.INJECT&&(console.debug("Removing forwarder"),E._removeForwarder()),sessionStorage.setItem(u,"false"))}_openForwarder(){this.forwarderMode===E.FORWARDER_MODE.OPEN_TAB?window.open(this.forwarderOrigin,"_blank","noopener"):E._injectForwarder(this.forwarderOrigin)}_openDownloadPage(){window.open(this.downloadUrl,"_blank","noopener")}static isMetaMaskInstalled(){const{ethereum:e}=window;return Boolean(e&&e.isMetaMask)}static _register(){return window.ethereum.request({method:"wallet_registerOnboarding"})}static _injectForwarder(e){const t=document.body,s=document.createElement("iframe");s.setAttribute("height","0"),s.setAttribute("width","0"),s.setAttribute("style","display: none;"),s.setAttribute("src",e),s.setAttribute("id",m),t.insertBefore(s,t.children[0])}static _removeForwarder(){document.getElementById(m)?.remove()}static _detectBrowser(){const{userAgent:e}=window.navigator;return/Firefox\/\d+/.test(e)?"FIREFOX":/Edg\/\d+/.test(e)?"EDGE":/(Chrome|Chromium)\/\d+/.test(e)?"CHROME":null}};let p=E;p.FORWARDER_MODE={INJECT:"INJECT",OPEN_TAB:"OPEN_TAB"};const b={isMobi:(O=1024,window.matchMedia(`(max-width: ${O}px)`).matches),ratio:window.devicePixelRatio??2};var O;window.addEventListener("resize",(()=>b.ratio=window.devicePixelRatio),{passive:!0}),e("default",class{constructor(e){this.onboarding=new p,this.provider=e,this.accounts=[],this.inited=!1,this.state=this.updateState(),this.listeners=new Map}updateState(){return this.state=i[p.isMetaMaskInstalled()?"INSTALLED":this.inited?"NOT_INSTALLED":"CONNECTING"]}get account(){const[e=""]=this.accounts;return e}updateAccounts(e=[]){this.accounts.length=0,this.accounts.push(...e.map((e=>s(e)))),o()}updateProvider(e){this.provider.update(e),o()}unlisten(){const{ethereum:e}=window;e&&this.listeners.forEach(((t,s)=>e.removeAllListeners(s,t)))}onMessage(e){console.info(e,"MetaMask onMessage")}async listen(){const{ethereum:e}=window;if(!e)return;this.unlisten(),this.listeners.set("accountsChanged",this.updateAccounts.bind(this)),this.listeners.set("connect",this.updateAccounts.bind(this)),this.listeners.set("disconnect",this.updateAccounts.bind(this)),this.listeners.set("chainChanged",this.updateProvider.bind(this)),this.listeners.set("message",this.onMessage.bind(this)),this.listeners.forEach(((t,s)=>e.addListener(s,t)));const[t,s]=await Promise.all([a(e),n(e)])||[];t&&this.updateProvider(t),s&&this.updateAccounts(s)}disconnect(){this.unlisten(),this.onboarding.stopOnboarding(),[i.CONNECTING,i.INSTALLING].includes(this.state)&&this.updateState()}get installText(){return(b.isMobi?"Open in":"Install")+" MetaMask"}async install(){b.isMobi?location.href="https://metamask.app.link/dapp/lockpass.doid.tech":(this.state=i.INSTALLING,this.onboarding.stopOnboarding(),this.onboarding.startOnboarding())}async connect(){this.inited=!0;const e=await r();switch(e||this.updateState(),this.state){case i.CONNECTING:case i.INSTALLING:case i.NOT_INSTALLED:return}if(this.disconnect(),e){this.updateProvider(await a(e)),this.state=i.CONNECTING;try{const t=await e.request({method:"eth_requestAccounts"});this.updateAccounts(t),this.listen(),this.state=i.CONNECTED}catch(t){throw d(t),this.state=i.DISCONNECTED,t}}}})}}}));
