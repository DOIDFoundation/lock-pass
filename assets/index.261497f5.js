import{W as a,q as I,v as c,w as g,z as N,A as O,B as p}from"./index.487639ee.js";const o={INSTALLED:"INSTALLED",NOT_INSTALLED:"NOT_INSTALLED",REGISTERED:"REGISTERED",REGISTERING:"REGISTERING",RELOADING:"RELOADING"},l={CHROME:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",FIREFOX:"https://addons.mozilla.org/firefox/addon/ether-metamask/",EDGE:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",DEFAULT:"https://metamask.io"},r="REGISTRATION_IN_PROGRESS",E="FORWARDER_ID",i=class{constructor({forwarderOrigin:e="https://fwd.metamask.io",forwarderMode:t=i.FORWARDER_MODE.INJECT}={}){this.forwarderOrigin=e,this.forwarderMode=t,this.state=i.isMetaMaskInstalled()?o.INSTALLED:o.NOT_INSTALLED;const s=i._detectBrowser();s?this.downloadUrl=l[s]:this.downloadUrl=l.DEFAULT,this._onMessage=this._onMessage.bind(this),this._onMessageFromForwarder=this._onMessageFromForwarder.bind(this),this._openForwarder=this._openForwarder.bind(this),this._openDownloadPage=this._openDownloadPage.bind(this),this.startOnboarding=this.startOnboarding.bind(this),this.stopOnboarding=this.stopOnboarding.bind(this),window.addEventListener("message",this._onMessage),t===i.FORWARDER_MODE.INJECT&&sessionStorage.getItem(r)==="true"&&i._injectForwarder(this.forwarderOrigin)}_onMessage(e){if(e.origin===this.forwarderOrigin){if(e.data.type==="metamask:reload")return this._onMessageFromForwarder(e);console.debug(`Unknown message from '${e.origin}' with data ${JSON.stringify(e.data)}`)}}_onMessageUnknownStateError(e){throw new Error(`Unknown state: '${e}'`)}async _onMessageFromForwarder(e){switch(this.state){case o.RELOADING:console.debug("Ignoring message while reloading");break;case o.NOT_INSTALLED:console.debug("Reloading now to register with MetaMask"),this.state=o.RELOADING,location.reload();break;case o.INSTALLED:console.debug("Registering with MetaMask"),this.state=o.REGISTERING,await i._register(),this.state=o.REGISTERED,e.source.postMessage({type:"metamask:registrationCompleted"},e.origin),this.stopOnboarding();break;case o.REGISTERING:console.debug("Already registering - ignoring reload message");break;case o.REGISTERED:console.debug("Already registered - ignoring reload message");break;default:this._onMessageUnknownStateError(this.state)}}startOnboarding(){sessionStorage.setItem(r,"true"),this._openDownloadPage(),this._openForwarder()}stopOnboarding(){sessionStorage.getItem(r)==="true"&&(this.forwarderMode===i.FORWARDER_MODE.INJECT&&(console.debug("Removing forwarder"),i._removeForwarder()),sessionStorage.setItem(r,"false"))}_openForwarder(){this.forwarderMode===i.FORWARDER_MODE.OPEN_TAB?window.open(this.forwarderOrigin,"_blank","noopener"):i._injectForwarder(this.forwarderOrigin)}_openDownloadPage(){window.open(this.downloadUrl,"_blank","noopener")}static isMetaMaskInstalled(){const{ethereum:e}=window;return Boolean(e&&e.isMetaMask)}static _register(){return window.ethereum.request({method:"wallet_registerOnboarding"})}static _injectForwarder(e){const t=document.body,s=document.createElement("iframe");s.setAttribute("height","0"),s.setAttribute("width","0"),s.setAttribute("style","display: none;"),s.setAttribute("src",e),s.setAttribute("id",E),t.insertBefore(s,t.children[0])}static _removeForwarder(){var e;(e=document.getElementById(E))==null||e.remove()}static _detectBrowser(){const{userAgent:e}=window.navigator;return/Firefox\/\d+/.test(e)?"FIREFOX":/Edg\/\d+/.test(e)?"EDGE":/(Chrome|Chromium)\/\d+/.test(e)?"CHROME":null}};let d=i;d.FORWARDER_MODE={INJECT:"INJECT",OPEN_TAB:"OPEN_TAB"};const R={sm:640,md:768,lg:1024,xl:1280,"2xl":1536},b=e=>window.matchMedia(`(max-width: ${e}px)`).matches;var u;const h={isMobi:b(R.lg),ratio:(u=window.devicePixelRatio)!=null?u:2};window.addEventListener("resize",()=>h.ratio=window.devicePixelRatio,{passive:!0});class A{constructor(t){this.onboarding=new d,this.provider=t,this.accounts=[],this.inited=!1,this.state=this.updateState(),this.listeners=new Map}updateState(){return this.state=a[d.isMetaMaskInstalled()?"INSTALLED":this.inited?"NOT_INSTALLED":"CONNECTING"]}get account(){const[t=""]=this.accounts;return t}updateAccounts(t=[]){this.accounts.length=0,this.accounts.push(...t.map(s=>I(s))),c()}updateProvider(t){this.provider.update(t),c()}unlisten(){const{ethereum:t}=window;!t||this.listeners.forEach((s,n)=>t.removeAllListeners(n,s))}onMessage(t){console.info(t,"MetaMask onMessage")}async listen(){const{ethereum:t}=window;if(!t)return;this.unlisten(),this.listeners.set("accountsChanged",this.updateAccounts.bind(this)),this.listeners.set("connect",this.updateAccounts.bind(this)),this.listeners.set("disconnect",this.updateAccounts.bind(this)),this.listeners.set("chainChanged",this.updateProvider.bind(this)),this.listeners.set("message",this.onMessage.bind(this)),this.listeners.forEach((w,m)=>t.addListener(m,w));const[s,n]=await Promise.all([g(t),N(t)])||[];s&&this.updateProvider(s),n&&this.updateAccounts(n)}disconnect(){this.unlisten(),this.onboarding.stopOnboarding(),[a.CONNECTING,a.INSTALLING].includes(this.state)&&this.updateState()}get installText(){return`${h.isMobi?"Open in":"Install"} MetaMask`}async install(){h.isMobi?location.href="https://metamask.app.link/dapp/lockpass.doid.tech":(this.state=a.INSTALLING,this.onboarding.stopOnboarding(),this.onboarding.startOnboarding())}async connect(){this.inited=!0;const t=await O();switch(t||this.updateState(),this.state){case a.CONNECTING:case a.INSTALLING:case a.NOT_INSTALLED:return}if(this.disconnect(),!!t){this.updateProvider(await g(t)),this.state=a.CONNECTING;try{const s=await t.request({method:"eth_requestAccounts"});this.updateAccounts(s),this.listen(),this.state=a.CONNECTED}catch(s){throw p(s),this.state=a.DISCONNECTED,s}}}}export{A as default};
