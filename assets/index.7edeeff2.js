import{T as c}from"./index.962db2cd.js";import{y as d,q as s,e as f}from"./vendor.24bec958.js";import"./doid-symbol.24b34832.js";const g=`:root{--header_height: 60px;--txt2: #c8c8c8;--txt3: #f9d3a3;--bg2: #fffbf6;--bg3: #373737;--footer_height: 60px;--logo_width: 120px;--logo_height: 36px;--btnBg: #ff920f;--btnBgHover: #ffb65f;--btnBgActive: #e08417;--radius: 1rem;--btn_radius: .25rem;--a_color: #ff920f;--a_hover_color: rgba(59, 130, 246, .88);--text-base: 14px}@media (max-width: 1024px){:root{--logo_width: 60px;--logo_height: 21px}}html,body{height:100%}body{font-size:14px;font-size:var(--text-base)}a{text-decoration:none}a:hover{text-decoration:underline}body,input,textarea,select,button{font-family:Helvetica Neue,Arial,sans-serif}i.i{display:inline-flex;width:1rem;height:1rem;background:no-repeat center;background-size:contain}.mdi{font-family:Material Design Icons;min-width:1rem;line-height:normal}.mdi-loading{display:inline-flex}.mdi-loading:before{display:block;line-height:1;transform-origin:center;animation:rotate 2s linear infinite}.mdi-discord{background-image:none}.mdi-discord:before{content:"";display:block;width:1em;height:1em;background:transparent url(/assets/discord.94381f8d.svg) no-repeat center;background-size:90% auto}@keyframes rotate{0%{transform:rotate(-360deg)}to{transform:rotate(1turn)}}.dui-button{gap:.25rem;border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));background:#ff920f;background:var(--btnBg);padding:.5rem .875rem;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.dui-button:not([disabled]):hover{background:#ffb65f;background:var(--btnBgHover);border-color:#ffb65f;border-color:var(--btnBgHover)}.dui-button:not([disabled]):active{background:#e08417;background:var(--btnBgActive);border-color:#e08417;border-color:var(--btnBgActive)}.dui-button[disabled],.dui-button:disabled,.dui-button[pending],.dui-button.pending{pointer-events:none;cursor:not-allowed;background:#aaa}.dui-button.outlined{background-color:transparent;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):hover{background:#fff;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button.outlined:not([disabled]):active{background:#f6f6f6;color:#ff920f;color:var(--btnBg);border:1px solid}.dui-button[text]{color:#ff920f;color:var(--btnBg);border-color:transparent;background-color:transparent}.dui-button[text]:hover,.dui-button[text]:active{color:#ff920f;color:var(--btnBg);background-color:transparent}.dui-button[icon]{border-radius:50%;height:2.75rem}.dui-button[sm]{font-size:.875rem;line-height:1.25rem;padding:.35rem .625rem}html{overflow-y:scroll;color:#373737}.logo{display:inline-block;width:120px;width:var(--logo_width);height:36px;height:var(--logo_height);background:url(/assets/logo.ce89f36c.svg) no-repeat center;background-size:contain}a{font-weight:500;color:#ff920f;color:var(--a_color);text-decoration:inherit}a:hover{color:rgba(59,130,246,.88);color:var(--a_hover_color)}a.uri:hover{color:currentColor;text-decoration:underline}.dui-container{margin-left:auto;margin-right:auto;min-height:100%;padding-left:.75rem;padding-right:.75rem}@media (min-width: 1024px){.dui-container{max-width:64rem;padding-left:1rem;padding-right:1rem}}@media (color-index: 70){a:hover{color:#ff920f;color:var(--a_color)}}@media (color: 70318723){a:hover{color:#ff920f;color:var(--a_color)}}@media (prefers-color-scheme: light){a:hover{color:#ff920f;color:var(--a_color)}}:host .help-links a{opacity:.75}:host .help-links a:hover{opacity:1}
`;var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(r,e,i,t)=>{for(var o=t>1?void 0:t?u(e,i):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(t?a(e,i,o):a(o))||o);return t&&o&&b(e,i,o),o};let l=class extends c(g){constructor(){super(...arguments),this.links=[{name:"Twitter",icon:"twitter",uri:"https://twitter.com/DoidFoundation"},{name:"Discord",icon:"discord",uri:"https://discord.gg/rycY4vExuN"}]}render(){return d`<div class="app-help py-4"><div class="dui-container text-center mx-auto"><doid-symbol><span slot="h1">How to get an invitation code</span></doid-symbol><ul class="text-base m-8"><li>· Get it from a friend.</li><li>· Join our give-away events.</li></ul><p class="help-links m-4 flex justify-center items-center gap-6 text-center">${s(this.links,r=>d`<a class="!text-black text-3xl" href="${r.uri}" target="_blank" rel="noopener"><i class="mdi mdi-${r.icon}"></i></a>`)}</p></div></div>`}};l=h([f("app-help")],l);export{l as PassList};
