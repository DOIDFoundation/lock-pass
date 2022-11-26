import{T as m,b as d,t as I}from"./index.94155c5d.js";import{y as s,v as D,k as c,j as v,e as x,b as _,n as f,I as j,q as A}from"./vendor.24bec958.js";import{a as H,d as T,e as S,f as N,h as M,i as U}from"./locker.2eeda1bf.js";import"./index.e700dc3d.js";const F=`:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 80px;--logo_height: 24px}}html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{overflow-y:scroll;color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:1rem;padding-right:1rem}@media (min-width: 1024px){.dui-container{max-width:64rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}
`,Y={readText:()=>Promise.reject(),writeText:(t="")=>new Promise((o,a)=>{try{const r=document,e=r.createElement("textarea");e.value=t,r.body.appendChild(e),e.value=t,r.body.appendChild(e),e.select();const i=r.execCommand("copy");r.body.removeChild(e),i?o(!0):a(!1)}catch(r){a(!1)}})};let{clipboard:k=void 0}=navigator;k||(k=Y);const E=k,R=`i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}
`;var q=Object.defineProperty,G=Object.getOwnPropertyDescriptor,$=(t,o,a,r)=>{for(var e=r>1?void 0:r?G(o,a):o,i=t.length-1,n;i>=0;i--)(n=t[i])&&(e=(r?n(o,a,e):n(e))||e);return r&&e&&q(o,a,e),e};let p=class extends m(R){constructor(){super(...arguments),this.value="",this.copied=!1}firstUpdated(){}async doCopy(){const t=this.value;if(!!t){this.copied=!1;try{await E.writeText(t),this.copied=!0}catch(o){this.copied=!1}}}get icon(){return this.copied?"mdi-check":"mdi-content-copy"}render(){return s`<dui-button sm @click="${this.doCopy}" class="outlined ${D({copied:this.copied})}">${this.copied?s`Copied`:s`Copy`} <i part="copy-icon" class="mdi ${this.icon}"></i></dui-button>`}};$([v()],p.prototype,"value",2);$([c()],p.prototype,"copied",2);p=$([x("dui-copy")],p);var V=Object.defineProperty,J=Object.getOwnPropertyDescriptor,y=(t,o,a,r)=>{for(var e=r>1?void 0:r?J(o,a):o,i=t.length-1,n;i>=0;i--)(n=t[i])&&(e=(r?n(o,a,e):n(e))||e);return r&&e&&V(o,a,e),e};let g=class extends m(F){constructor(){super(...arguments),this.bindStore=new _(this,d),this.name="",this.limit="0",this.inviteCode="",this.genInviteCode=async()=>{try{let t=await H();t&&(this.inviteCode=t)}catch(t){}}}get bridge(){return d.bridge}get inviteLink(){return`https://lockpass.doid.tech/?ic=${this.inviteCode}`}async connectedCallback(){super.connectedCallback(),this.limit=await T()}get shareText(){return`DOID lock name event is live. Mint your lock pass NFT for free and reserve your desired name now. Get invitation here: ${this.inviteLink}`}render(){return s`<p class="text-sm text-gray-500">You have <b>${this.limit}</b> invitations in total. Copy the invitation code or share the link.</p><div class="py-2">${this.inviteCode?s`<textarea class="block w-full h-24 my-3 border border-solid border-gray-200 py-2 px-2 text-gray-400" readonly="readonly">
${this.shareText}</textarea><dui-copy value="${this.shareText}"></dui-copy>`:+this.limit>0?s`<dui-button sm @click="${this.genInviteCode}">Share</dui-button>`:s``}</div>`}};y([v()],g.prototype,"name",2);y([c()],g.prototype,"limit",2);y([c()],g.prototype,"inviteCode",2);g=y([x("pass-share")],g);const K=`:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 80px;--logo_height: 24px}}html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{overflow-y:scroll;color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:1rem;padding-right:1rem}@media (min-width: 1024px){.dui-container{max-width:64rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}:root{--posterSize: 90px}.pass{position:relative;min-height:8.5rem;display:flex;gap:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:1rem}.pass .poster{margin-bottom:1rem;width:90px;width:var(--posterSize);height:90px;height:var(--posterSize)}.pass .poster:not(.minted){--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.pass .name.locked{font-size:1rem;line-height:1.5rem}.pass .status.locked{--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}.pass .status.unlock{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}.pass .status.minted{--tw-text-opacity: 1;color:rgba(96,165,250,var(--tw-text-opacity))}
`;var Q=Object.defineProperty,W=Object.getOwnPropertyDescriptor,w=(t,o,a,r)=>{for(var e=r>1?void 0:r?W(o,a):o,i=t.length-1,n;i>=0;i--)(n=t[i])&&(e=(r?n(o,a,e):n(e))||e);return r&&e&&Q(o,a,e),e};let b=class extends m(K){constructor(){super(...arguments),this.bindStore=new _(this,d),this.item={},this.tx=null,this.success=!1}get bridge(){return d.bridge}get scan(){return this.bridge.network.current.scan}get tokenLink(){return`${this.scan}/token/${I("Locker")}?a=${this.item.id}`}firstUpdate(){}render(){let t="",o="";return this.item.name?(t="locked",o="Locked"):(t="unlock",o="No name locked yet"),s`<div class="pass"><div class="poster ${D({minted:this.item.meta.image})}"><img src="${this.item.meta.image}" class="object-contain"></div><div class="flex flex-col justify-between text-xs"><div><span class="text-base">#${this.item.id}</span><p><a class="text-black uri" href="${this.tokenLink}" target="_blank">View on etherscan</a></p></div><div><div class="status ${t}">${o}</div>${f(this.item.name,()=>s`<div class="name ${t}"><b class="text-blue-600">${this.item.name}</b>.doid</div>`,()=>s`<div class="actions mt-2"><dui-button href="/?pid=${this.item.id}" sm>Lock a name</dui-button></div>`)}</div></div></div>`}};w([v({type:Object})],b.prototype,"item",2);w([c()],b.prototype,"tx",2);w([c()],b.prototype,"success",2);b=w([x("pass-item")],b);const X=`:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 80px;--logo_height: 24px}}html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{overflow-y:scroll;color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:1rem;padding-right:1rem}@media (min-width: 1024px){.dui-container{max-width:64rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}.Passes{height:300px;height:100%;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.pass-list{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1rem;gap:1rem}@media (min-width: 1024px){.pass-list{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,h=(t,o,a,r)=>{for(var e=r>1?void 0:r?ee(o,a):o,i=t.length-1,n;i>=0;i--)(n=t[i])&&(e=(r?n(o,a,e):n(e))||e);return r&&e&&Z(o,a,e),e};let l=class extends m(X){constructor(){super(...arguments),this.bindStore=new _(this,d),this.name="",this.passes=[],this.pending=!1,this.ts=0}get bridge(){return d.bridge}async getUserPassList(){if(d.notReady)return;this.pending=!0;const{account:t}=d.bridge,o=await S();try{const a=await N(t,!0),r=await M();let e=await Promise.all(a.map(async i=>{var O;const[n,L,B]=i,C=j(n,0),P=(O=r[L])!=null?O:[],u={id:C,cate:P[0],hash:B,meta:{}},z=await Promise.all([U(B),o.tokenURI(C)]);u.name=z[0],u.len=`${P[1]}`;try{u.meta=await(await fetch(z[1])).json()}catch(te){}return u}));this.passes=e.sort((i,n)=>i.id-n.id).sort((i,n)=>i.name?n.name?i.id-n.id:-1:1)}catch(a){console.log(a,"get passess failed"),this.passes=[]}finally{this.ts++,this.pending=!1}}get empty(){return this.ts&&!this.passes.length}connectedCallback(){super.connectedCallback(),this.getUserPassList()}render(){return s`<div class="passes py-4"><div class="lg_w-3/5 my-8 mx-3 lg_mx-auto"><section><p class="text-base mb-2">Note</p><ul class="note list-disc mx-4"><li>You can only mint one Lock Pass for one wallet address.</li><li>Once you successfully locked your name. Your name will be reserved for 7 days after the official launch(22nd Dec,2022). Those locked but unminted names will be released to the public pool afterwards.</li></ul><a href="${"https://twitter.com/DoidFoundation"}" target="_blank" rel="noopener" class="uri inline-flex my-2 text-base">Follow DOID Twitter and stay connected</a></section>${f(d.noAccount,()=>s`<div class="my-8 text-center"><connect-wallet-btn></connect-wallet-btn></div>`,()=>s`<section class="mt-6"><h2 class="my-4 text-xl">My Lock Pass</h2><div class="py-4">${f(this.empty,()=>s`No passes yet.`,()=>s`${f(this.pending,()=>s`<i class="mdi mdi-loading mr-1"></i>Loading...`,()=>s`<div class="pass-list">${A(this.passes,t=>s`<pass-item key="${t.id}" .item="${t}"></pass-item>`)}</div>`)}`)}</div></section><section class="mt-6"><h2 class="text-xl mb-2">Share Lock Pass Invitations</h2>${this.passes.length?s`<pass-share></pass-share>`:s``}</section>`)}</div></div>`}};h([v()],l.prototype,"name",2);h([c()],l.prototype,"passes",2);h([c()],l.prototype,"pending",2);h([c()],l.prototype,"ts",2);l=h([x("pass-list")],l);export{l as PassList};
