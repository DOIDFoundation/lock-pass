System.register(["./index-legacy.2a96b0b5.js","./vendor-legacy.fd995045.js","./index-legacy.cbdbb146.js"],(function(t,e){"use strict";var s,i,a,o,n,r,c,d,l,h,p,m,u,g,y,b,v,x,w,k,$,f;return{setters:[t=>{s=t.T,i=t.b,a=t.c,o=t.f,n=t.d,r=t.h},t=>{c=t.b,d=t.y,l=t.f,h=t.h,p=t.e,m=t.n,u=t.d,g=t.E,y=t.k},t=>{b=t.a,v=t.d,x=t.t,w=t.e,k=t.f,$=t.h,f=t.i}],execute:function(){var e=Object.defineProperty,C=Object.getOwnPropertyDescriptor,P=(t,s,i,a)=>{for(var o,n=a>1?void 0:a?C(s,i):s,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(a?o(s,i,n):o(n))||n);return a&&n&&e(s,i,n),n};let O=class extends(s("")){constructor(){super(...arguments),this.bindBridge=new c(this,i),this.name="",this.limit="0",this.inviteCode="",this.genInviteCode=async()=>{try{let t=await b();t&&(this.inviteCode=t)}catch(h){}}}get bridge(){return i.bridge}get inviteLink(){return`https://lockpass.doid.tech/?ic=${this.inviteCode}`}async connectedCallback(){super.connectedCallback(),this.limit=await v()}get shareText(){return`DOID lock name event is live. Mint your lock pass NFT for free and reserve your desired name now. Get invitation here: ${this.inviteLink}`}render(){return d`<p class="text-sm text-gray-500">You have <b>${this.limit}</b> invitations in total. Copy the invitation code or share the link.</p><div class="py-2">${this.inviteCode?d`<textarea class="block w-full h-24 my-3 border border-solid border-gray-200 py-2 px-2 text-gray-400" readonly="readonly">
${this.shareText}</textarea><dui-copy value="${this.shareText}" sm class="outlined"><span slot="copied">Copy<i class="ml-1 mdi mdi-check text-green-600"></i></span><span slot="copy">Copy<i class="ml-1 mdi mdi-content-copy"></i></span></dui-copy>`:+this.limit>0?d`<dui-button sm @click="${this.genInviteCode}">Share</dui-button>`:d``}</div>`}};P([h()],O.prototype,"name",2),P([l()],O.prototype,"limit",2),P([l()],O.prototype,"inviteCode",2),O=P([p("pass-share")],O);var L=Object.defineProperty,j=Object.getOwnPropertyDescriptor,D=(t,e,s,i)=>{for(var a,o=i>1?void 0:i?j(e,s):e,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(i?a(e,s,o):a(o))||o);return i&&o&&L(e,s,o),o};let I=class extends(s("")){constructor(){super(...arguments),this.bindBridge=new c(this,i),this.sm=!1,this.tx=null,this.success=!1,this.dialog=!1,this.claim=async()=>{try{this.tx=await(async t=>{const e=await a("Locker",{account:(await o()).bridge.account}),[s,i,r]=["claimDoid",{},[+t]];await n(i,e,s,r);const c=e[s](...r);return new x(c,{errorCodes:"Locker",seq:{type:"claim-name",title:"Claim Name",ts:(new Date).getTime(),overrides:i}})})(+this.passId),this.success=await this.tx.wait()}catch(t){if(4001===t.code)return this.close()}}}get name(){return this.nameInfo?.name}get passId(){return this.nameInfo?.id||0}get txPending(){return this.tx&&!this.tx?.ignored}close(t=!1){this.dialog=!1,this.tx=void 0,t&&this.emit("success"),this.emit("show",!1)}open(){this.dialog=!0,this.emit("show",!0)}render(){return d`<dui-button ?disabled="${this.dialog}" ?pending="${this.dialog}" class="success" @click="${this.open}" ?sm="${this.sm}"><slot>Claim</slot></dui-button>${m(this.dialog,(()=>d`<dui-dialog @close="${()=>this.close()}"><div slot="header">Claim DOID name</div><div class="min-h-10">${m(!this.tx?.success,(()=>d`<div class="text-center">You are claiming for:<p class="text-black my-4 text-lg"><b class="text-blue-600">${this.name}</b>.doid</p><p>${d`(Note: This pass <b class="text-base text-orange-500">#${this.passId}</b> will be burned after claiming.)`}</p></div>`))} ${m(this.txPending,(()=>d`<tx-state .tx="${this.tx}" .opts="${{state:{success:`Success. You are the registrant of ${this.name} now`}}}"><dui-button slot="view" @click="${()=>this.close(!0)}">Close</dui-button></tx-state>`),(()=>d`<p class="mt-8 text-center"><dui-button class="success" @click="${this.claim}">Continue</dui-button></p>`))}</div></dui-dialog>`))}`}};D([h({type:Object})],I.prototype,"nameInfo",2),D([h({type:Boolean})],I.prototype,"sm",2),D([l()],I.prototype,"tx",2),D([l()],I.prototype,"success",2),D([l()],I.prototype,"dialog",2),I=D([p("doid-claim-name")],I);var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,N=(t,e,s,i)=>{for(var a,o=i>1?void 0:i?T(e,s):e,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(i?a(e,s,o):a(o))||o);return i&&o&&S(e,s,o),o};let B=class extends(s(":host{--posterSize: 90px}.pass{position:relative;display:flex;height:100%;gap:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:1rem;min-height:8.5rem}.pass .poster{margin-bottom:1rem;width:var(--posterSize);height:var(--posterSize)}.pass .poster:not(.minted){--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.pass .name.locked{font-size:1rem;line-height:1.5rem}.pass .status.locked{--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}.pass .status.unlock{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}.pass .status.minted{--tw-text-opacity: 1;color:rgba(96,165,250,var(--tw-text-opacity))}\n")){constructor(){super(...arguments),this.bindBridge=new c(this,i),this.item={},this.tx=null,this.success=!1,this.dialog=!1}get bridge(){return i.bridge}get scan(){return this.bridge.network.current.scan}get tokenLink(){return`${this.scan}/token/${r("Locker")}?a=${this.item.id}`}onSuccess(){this.emit("change")}render(){let t="",e="";return this.item.name?(t="locked",e="Locked"):(t="unlock",e="No name locked yet"),d`<div class="pass ${u({})}"><div class="poster ${u({minted:this.item.meta.image,"opacity-40":this.dialog,grayscale:this.dialog})}"><img src="${this.item.meta.image}" class="object-contain"></div><div class="flex flex-col grow text-xs ${u({"opacity-40":this.dialog,grayscale:this.dialog})}"><div><span class="text-base">#${this.item.id}</span><p class="mb-4"><dui-link class="text-black uri" href="${this.tokenLink}" target="_blank">View on etherscan</dui-link></p></div><div><div class="status ${t}">${e}</div>${m(this.item.name,(()=>d`<div class="name ${t}"><b class="text-blue-600">${this.item.name}</b>.doid</div>`))}<div class="actions mt-2">${m(this.item.name,(()=>d`<doid-claim-name @success="${this.onSuccess}" sm .nameInfo="${this.item}"></doid-claim-name>`),(()=>d`<dui-button href="/?pid=${this.item.id}" sm>Lock a name</dui-button>`))}</div></div></div></div>`}};N([h({type:Object})],B.prototype,"item",2),N([l()],B.prototype,"tx",2),N([l()],B.prototype,"success",2),N([l()],B.prototype,"dialog",2),B=N([p("pass-item")],B);var Y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,z=(t,e,s,i)=>{for(var a,o=i>1?void 0:i?_(e,s):e,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(i?a(e,s,o):a(o))||o);return i&&o&&Y(e,s,o),o};let U=t("ViewPasses",class extends(s(".passes{min-height:300px;height:100%;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}\n")){constructor(){super(...arguments),this.bindBridge=new c(this,i),this.name="",this.passes=[],this.pending=!1,this.ts=0}get bridge(){return i.bridge}async getUserPassList(){if(i.notReady)return;this.pending=!0;const{account:t}=i.bridge,e=await w();try{const s=await k(t,!0),i=await $();let a=await Promise.all(s.map((async t=>{const[s,a,o]=t,n=g(s,0),r=i[a]??[],c={id:n,cate:r[0],hash:o,meta:{}},d=await Promise.all([f(o),e.tokenURI(n)]);c.name=d[0],c.len=`${r[1]}`;try{c.meta=await(await fetch(d[1])).json()}catch(h){}return c})));this.passes=a.sort(((t,e)=>t.id-e.id)).sort(((t,e)=>t.name?e.name?t.id-e.id:-1:1))}catch(s){console.log(s,"get passess failed"),this.passes=[]}finally{this.ts++,this.pending=!1}}get empty(){return this.ts&&!this.passes.length}connectedCallback(){super.connectedCallback(),this.getUserPassList()}render(){return d`<div class="passes py-4"><div class="lg_w-3/5 my-8 mx-3 lg_mx-auto"><section><p class="text-base mb-2">Note</p><ul class="note list-disc mx-4"><li>You can only mint one Lock Pass for one wallet address.</li><li>Once you successfully locked your name. Your name will be reserved for 7 days after the official launch(22nd Dec,2022). Those locked but unminted names will be released to the public pool afterwards.</li></ul><dui-link href="${"https://twitter.com/DoidFoundation"}" target="_blank" rel="noopener" class="inline-flex my-1 text-base">Follow DOID Twitter and stay connected</dui-link></section>${m(i.noAccount,(()=>d`<div class="my-8 text-center"><connect-wallet-btn></connect-wallet-btn></div>`),(()=>d`<section class="mt-6"><h2 class="my-4 text-xl">My Lock Pass</h2><div class="py-4">${m(this.empty,(()=>d`No passes yet.`),(()=>d`${m(this.pending,(()=>d`<i class="mdi mdi-loading mr-1"></i>Loading...`),(()=>d`<div class="pass-list grid md_grid-cols-2 gap-4">${y(this.passes,(t=>d`<pass-item @change="${this.getUserPassList}" key="${t.id}" .item="${t}"></pass-item>`))}</div>`))}`))}</div></section><section class="mt-6"><h2 class="text-xl mb-2">Share Lock Pass Invitations</h2>${this.passes.length?d`<pass-share></pass-share>`:d``}</section>`))}</div></div>`}});z([h()],U.prototype,"name",2),z([l()],U.prototype,"passes",2),z([l()],U.prototype,"pending",2),z([l()],U.prototype,"ts",2),t("ViewPasses",U=z([p("view-passes")],U))}}}));
