System.register(["./index-legacy.36d4c6f8.js","./vendor-legacy.225313ec.js","./locker-legacy.47879097.js","./index-legacy.3b6abc2c.js"],(function(t,e){"use strict";var o,r,i,a,n,d,s,c,l,g,b,h,u,p,f,m,v,x,y=document.createElement("style");return y.textContent='.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}:root{--posterSize: 90px}.pass{position:relative;min-height:8.5rem;display:flex;gap:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:1rem}.pass .poster{margin-bottom:1rem;width:90px;width:var(--posterSize);height:90px;height:var(--posterSize)}.pass .poster:not(.minted){--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.pass .name.locked{font-size:1rem;line-height:1.5rem}.pass .status.locked{--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}.pass .status.unlock{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}.pass .status.minted{--tw-text-opacity: 1;color:rgba(96,165,250,var(--tw-text-opacity))}html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 60px;--logo_height: 21px}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:.75rem;padding-right:.75rem}@media (min-width: 1024px){.dui-container{max-width:64rem;padding-left:1rem;padding-right:1rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}.Passes{height:300px;height:100%;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.pass-list{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1rem;gap:1rem}@media (min-width: 1024px){.pass-list{grid-template-columns:repeat(2,minmax(0,1fr))}}\n',document.head.appendChild(y),{setters:[t=>{o=t.T,r=t.b,i=t.t},t=>{a=t.y,n=t.v,d=t.k,s=t.j,c=t.e,l=t.b,g=t.n,b=t.I,h=t.q},t=>{u=t.a,p=t.d,f=t.e,m=t.f,v=t.h,x=t.i},()=>{}],execute:function(){const e={readText:()=>Promise.reject(),writeText:(t="")=>new Promise(((e,o)=>{try{const r=document,i=r.createElement("textarea");i.value=t,r.body.appendChild(i),i.value=t,r.body.appendChild(i),i.select();const a=r.execCommand("copy");r.body.removeChild(i),a?e(!0):o(!1)}catch(s){o(!1)}}))};let{clipboard:y}=navigator;y||(y=e);const k=y;var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,B=(t,e,o,r)=>{for(var i,a=r>1?void 0:r?_(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&w(e,o,a),a};let z=class extends(o('i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}\n')){constructor(){super(...arguments),this.value="",this.copied=!1}firstUpdated(){}async doCopy(){const t=this.value;if(t){this.copied=!1;try{await k.writeText(t),this.copied=!0}catch(e){this.copied=!1}}}get icon(){return this.copied?"mdi-check":"mdi-content-copy"}render(){return a`<dui-button sm @click="${this.doCopy}" class="outlined ${n({copied:this.copied})}">${this.copied?a`Copied`:a`Copy`} <i part="copy-icon" class="mdi ${this.icon}"></i></dui-button>`}};B([s()],z.prototype,"value",2),B([d()],z.prototype,"copied",2),z=B([c("dui-copy")],z);var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,P=(t,e,o,r)=>{for(var i,a=r>1?void 0:r?C(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&$(e,o,a),a};let j=class extends(o('html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 60px;--logo_height: 21px}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:.75rem;padding-right:.75rem}@media (min-width: 1024px){.dui-container{max-width:64rem;padding-left:1rem;padding-right:1rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}\n')){constructor(){super(...arguments),this.bindStore=new l(this,r),this.name="",this.limit="0",this.inviteCode="",this.genInviteCode=async()=>{try{let t=await u();t&&(this.inviteCode=t)}catch(s){}}}get bridge(){return r.bridge}get inviteLink(){return`https://lockpass.doid.tech/?ic=${this.inviteCode}`}async connectedCallback(){super.connectedCallback(),this.limit=await p()}get shareText(){return`DOID lock name event is live. Mint your lock pass NFT for free and reserve your desired name now. Get invitation here: ${this.inviteLink}`}render(){return a`<p class="text-sm text-gray-500">You have <b>${this.limit}</b> invitations in total. Copy the invitation code or share the link.</p><div class="py-2">${this.inviteCode?a`<textarea class="block w-full h-24 my-3 border border-solid border-gray-200 py-2 px-2 text-gray-400" readonly="readonly">
${this.shareText}</textarea><dui-copy value="${this.shareText}"></dui-copy>`:+this.limit>0?a`<dui-button sm @click="${this.genInviteCode}">Share</dui-button>`:a``}</div>`}};P([s()],j.prototype,"name",2),P([d()],j.prototype,"limit",2),P([d()],j.prototype,"inviteCode",2),j=P([c("pass-share")],j);var A=Object.defineProperty,H=Object.getOwnPropertyDescriptor,O=(t,e,o,r)=>{for(var i,a=r>1?void 0:r?H(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&A(e,o,a),a};let D=class extends(o('html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 60px;--logo_height: 21px}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:.75rem;padding-right:.75rem}@media (min-width: 1024px){.dui-container{max-width:64rem;padding-left:1rem;padding-right:1rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}:root{--posterSize: 90px}.pass{position:relative;min-height:8.5rem;display:flex;gap:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding:1rem}.pass .poster{margin-bottom:1rem;width:90px;width:var(--posterSize);height:90px;height:var(--posterSize)}.pass .poster:not(.minted){--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.pass .name.locked{font-size:1rem;line-height:1.5rem}.pass .status.locked{--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}.pass .status.unlock{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}.pass .status.minted{--tw-text-opacity: 1;color:rgba(96,165,250,var(--tw-text-opacity))}\n')){constructor(){super(...arguments),this.bindStore=new l(this,r),this.item={},this.tx=null,this.success=!1}get bridge(){return r.bridge}get scan(){return this.bridge.network.current.scan}get tokenLink(){return`${this.scan}/token/${i("Locker")}?a=${this.item.id}`}firstUpdate(){}render(){let t="",e="";return this.item.name?(t="locked",e="Locked"):(t="unlock",e="No name locked yet"),a`<div class="pass"><div class="poster ${n({minted:this.item.meta.image})}"><img src="${this.item.meta.image}" class="object-contain"></div><div class="flex flex-col justify-between text-xs"><div><span class="text-base">#${this.item.id}</span><p><a class="text-black uri" href="${this.tokenLink}" target="_blank">View on etherscan</a></p></div><div><div class="status ${t}">${e}</div>${g(this.item.name,(()=>a`<div class="name ${t}"><b class="text-blue-600">${this.item.name}</b>.doid</div>`),(()=>a`<div class="actions mt-2"><dui-button href="/?pid=${this.item.id}" sm>Lock a name</dui-button></div>`))}</div></div></div>`}};O([s({type:Object})],D.prototype,"item",2),O([d()],D.prototype,"tx",2),O([d()],D.prototype,"success",2),D=O([c("pass-item")],D);var L=Object.defineProperty,I=Object.getOwnPropertyDescriptor,S=(t,e,o,r)=>{for(var i,a=r>1?void 0:r?I(e,o):e,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(r?i(e,o,a):i(a))||a);return r&&a&&L(e,o,a),a};let T=t("PassList",class extends(o('html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 60px;--logo_height: 21px}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:.75rem;padding-right:.75rem}@media (min-width: 1024px){.dui-container{max-width:64rem;padding-left:1rem;padding-right:1rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}.Passes{height:300px;height:100%;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.pass-list{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1rem;gap:1rem}@media (min-width: 1024px){.pass-list{grid-template-columns:repeat(2,minmax(0,1fr))}}\n')){constructor(){super(...arguments),this.bindStore=new l(this,r),this.name="",this.passes=[],this.pending=!1,this.ts=0}get bridge(){return r.bridge}async getUserPassList(){if(r.notReady)return;this.pending=!0;const{account:t}=r.bridge,e=await f();try{const o=await m(t,!0),r=await v();let i=await Promise.all(o.map((async t=>{const[o,i,a]=t,n=b(o,0),d=r[i]??[],c={id:n,cate:d[0],hash:a,meta:{}},l=await Promise.all([x(a),e.tokenURI(n)]);c.name=l[0],c.len=`${d[1]}`;try{c.meta=await(await fetch(l[1])).json()}catch(s){}return c})));this.passes=i.sort(((t,e)=>t.id-e.id)).sort(((t,e)=>t.name?e.name?t.id-e.id:-1:1))}catch(o){console.log(o,"get passess failed"),this.passes=[]}finally{this.ts++,this.pending=!1}}get empty(){return this.ts&&!this.passes.length}connectedCallback(){super.connectedCallback(),this.getUserPassList()}render(){return a`<div class="passes py-4"><div class="lg_w-3/5 my-8 mx-3 lg_mx-auto"><section><p class="text-base mb-2">Note</p><ul class="note list-disc mx-4"><li>You can only mint one Lock Pass for one wallet address.</li><li>Once you successfully locked your name. Your name will be reserved for 7 days after the official launch(22nd Dec,2022). Those locked but unminted names will be released to the public pool afterwards.</li></ul><a href="${"https://twitter.com/DoidFoundation"}" target="_blank" rel="noopener" class="uri inline-flex my-2 text-base">Follow DOID Twitter and stay connected</a></section>${g(r.noAccount,(()=>a`<div class="my-8 text-center"><connect-wallet-btn></connect-wallet-btn></div>`),(()=>a`<section class="mt-6"><h2 class="my-4 text-xl">My Lock Pass</h2><div class="py-4">${g(this.empty,(()=>a`No passes yet.`),(()=>a`${g(this.pending,(()=>a`<i class="mdi mdi-loading mr-1"></i>Loading...`),(()=>a`<div class="pass-list">${h(this.passes,(t=>a`<pass-item key="${t.id}" .item="${t}"></pass-item>`))}</div>`))}`))}</div></section><section class="mt-6"><h2 class="text-xl mb-2">Share Lock Pass Invitations</h2>${this.passes.length?a`<pass-share></pass-share>`:a``}</section>`))}</div></div>`}});S([s()],T.prototype,"name",2),S([d()],T.prototype,"passes",2),S([d()],T.prototype,"pending",2),S([d()],T.prototype,"ts",2),t("PassList",T=S([c("pass-list")],T))}}}));
