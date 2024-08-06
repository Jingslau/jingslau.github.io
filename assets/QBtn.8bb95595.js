import{c,h as v,A as re,a as Q,g as F,a0 as ve,$ as ge,i as I,b as me,e as he,a1 as ae,j as be,r as U,s as P,p as ye,d as ke,T as pe,l as xe}from"./index.022381e8.js";const V={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function ue(e,t=V){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function qe(e,t){return e!==void 0&&e()||t}function Ze(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}function et(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function tt(e,t,n,r,l,d){t.key=r+l;const o=v(e,t,n);return l===!0?re(o,d()):o}const H="0 0 24 24",W=e=>e,D=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(le).join("|")+")"),Ee=new RegExp("^("+Object.keys(oe).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Re=/^svguse:/,Le=/^ion-/,Be=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=Q({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=F(),r=ue(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=c(()=>{let o,i=e.name;if(i==="none"||!i)return{none:!0};if(n.iconMapFn!==null){const s=n.iconMapFn(i);if(s!==void 0)if(s.icon!==void 0){if(i=s.icon,i==="none"||!i)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Se.test(i)===!0){const[s,y=H]=i.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(we.test(i)===!0)return{img:!0,src:i.substring(4)};if(Re.test(i)===!0){const[s,y=H]=i.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=i.match($e);if(b!==null)o=le[b[1]](i);else if(Be.test(i)===!0)o=i;else if(Le.test(i)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(X.test(i)===!0){o="notranslate material-symbols";const s=i.match(X);s!==null&&(i=i.substring(6),o+=se[s[1]]),q=i}else{o="notranslate material-icons";const s=i.match(Ee);s!==null&&(i=i.substring(2),o+=oe[s[1]]),q=i}return{cls:o,content:q}});return()=>{const o={class:l.value,style:r.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,o,qe(t.default)):d.value.img===!0?v(e.tag,o,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(o.class+=" "+d.value.cls),v(e.tag,o,z(t.default,[d.value.content])))}}});function nt(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function ce(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{ce(e,n)}):e.add(t)}function rt(e){const t=new Set;return e.forEach(n=>{ce(t,n)}),Array.from(t)}function Ce(e){return e.appContext.config.globalProperties.$router!==void 0}function at(e){return e.isUnmounted===!0||e.isDeactivated===!0}function G(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function J(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _e(e,t){for(const n in t){const r=t[n],l=e[n];if(typeof r=="string"){if(r!==l)return!1}else if(Array.isArray(l)===!1||l.length!==r.length||r.some((d,o)=>d!==l[o]))return!1}return!0}function Z(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Pe(e,t){return Array.isArray(e)===!0?Z(e,t):Array.isArray(t)===!0?Z(t,e):e===t}function Te(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Pe(e[n],t[n])===!1)return!1;return!0}const de={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},it={...de,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ae({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=F(),{props:r,proxy:l,emit:d}=n,o=Ce(n),i=c(()=>r.disable!==!0&&r.href!==void 0),q=t===!0?c(()=>o===!0&&r.disable!==!0&&i.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):c(()=>o===!0&&i.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),b=c(()=>q.value===!0?_(r.to):null),s=c(()=>b.value!==null),y=c(()=>i.value===!0||s.value===!0),u=c(()=>r.type==="a"||y.value===!0?"a":r.tag||e||"div"),k=c(()=>i.value===!0?{href:r.href,target:r.target}:s.value===!0?{href:b.value.href,target:r.target}:{}),h=c(()=>{if(s.value===!1)return-1;const{matched:g}=b.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=l.$route.matched;if(R.length===0)return-1;const L=R.findIndex(J.bind(null,S));if(L!==-1)return L;const N=G(g[$-2]);return $>1&&G(S)===N&&R[R.length-1].path!==N?R.findIndex(J.bind(null,g[$-2])):L}),p=c(()=>s.value===!0&&h.value!==-1&&_e(l.$route.params,b.value.params)),f=c(()=>p.value===!0&&h.value===l.$route.matched.length-1&&Te(l.$route.params,b.value.params)),x=c(()=>s.value===!0?f.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":p.value===!0?` ${r.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function B(g,{returnRouterError:$,to:S=r.to,replace:R=r.replace}={}){if(r.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||r.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=l.$router[R===!0?"replace":"push"](S);return $===!0?L:L.then(()=>{}).catch(()=>{})}function C(g){if(s.value===!0){const $=S=>B(g,S);d("click",g,$),g.defaultPrevented!==!0&&$()}else d("click",g)}return{hasRouterLink:s,hasHrefLink:i,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const Oe={size:{type:[String,Number],default:"1em"},color:String};function je(e){return{cSize:c(()=>e.size in V?`${V[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Me=Q({name:"QSpinner",props:{...Oe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=je(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ze(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function ut(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ve(e);if(t)return t.$el||t}function lt(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Ne(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function ee(e,t,n,r){n.modifiers.stop===!0&&ae(e);const l=n.modifiers.color;let d=n.modifiers.center;d=d===!0||r===!0;const o=document.createElement("span"),i=document.createElement("span"),q=be(e),{left:b,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-s-h}px`;i.className="q-ripple__inner",ze(i,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(i),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(C)};n.abort.push(B);let C=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,i.style.opacity=.2,C=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,C=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(B),1)},275)},250)},50)}function te(e,{modifiers:t,value:n,arg:r}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||r,keyCodes:[].concat(l.keyCodes||13)}}var Ke=ge({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){r.enabled===!0&&l.qSkipRipple!==!0&&l.type===(r.modifiers.early===!0?"pointerdown":"click")&&ee(l,e,r,l.qKeyEvent===!0)},keystart:Ne(l=>{r.enabled===!0&&l.qSkipRipple!==!0&&I(l,r.modifiers.keyCodes)===!0&&l.type===`key${r.modifiers.early===!0?"down":"up"}`&&ee(l,e,r,!0)},300)};te(r,t),e.__qripple=r,me(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&te(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),he(t,"main"),delete e._qripple)}});const fe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},De=Object.keys(fe),Ie={align:{type:String,validator:e=>De.includes(e)}};function Ve(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${fe[t]}`})}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Qe={xs:8,sm:10,md:14,lg:20,xl:24},Fe=["button","submit","reset"],Ue=/[^\s]\/[^\s]/,He=["flat","outline","push","unelevated"];function We(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Xe={...ie,...de,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...He.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ie.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Ye={...Xe,round:Boolean};function Ge(e){const t=ue(e,Qe),n=Ve(e),{hasRouterLink:r,hasLink:l,linkTag:d,linkAttrs:o,navigateOnClick:i}=Ae({fallbackTag:"button"}),q=c(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),b=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>s.value===!0?e.tabindex||0:-1),u=c(()=>We(e,"standard")),k=c(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,o.value):Fe.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),r.value!==!0&&Ue.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),h=c(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:i,isActionable:s}}const{passiveCapture:E}=xe;let T=null,A=null,O=null;var ot=Q({name:"QBtn",props:{...Ye,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:r}=F(),{classes:l,style:d,innerClasses:o,attributes:i,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Ge(e),u=U(null),k=U(null);let h=null,p,f=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=c(()=>({center:e.round})),C=c(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),g=c(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const a={onClick:S,onKeydown:R,onMousedown:N};if(r.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${m}`]=L}return a}return{onClick:P}}),$=c(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...i.value,...g.value}));function S(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,E),u.value!==null&&u.value.removeEventListener("blur",K,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,E),u.value.addEventListener("blur",K,E)}}s(a)}}function R(a){u.value!==null&&(n("keydown",a),I(a,[13,32])===!0&&A!==u.value&&(A!==null&&j(),a.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,E)),P(a)))}function L(a){u.value!==null&&(n("touchstart",a),a.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&j(),T=u.value,h=a.target,h.addEventListener("touchcancel",w,E),h.addEventListener("touchend",w,E)),p=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p=!1},200)))}function N(a){u.value!==null&&(a.qSkipRipple=p===!0,n("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&j(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(A===u.value&&I(a,[13,32])===!0){const m=new MouseEvent("click",a);m.qKeyEvent=!0,a.defaultPrevented===!0&&ye(m),a.cancelBubble===!0&&ae(m),u.value.dispatchEvent(m),P(a),a.qKeyEvent=!0}n("keyup",a)}j()}}function j(a){const m=k.value;a!==!0&&(T===u.value||O===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===u.value&&(h!==null&&(h.removeEventListener("touchcancel",w,E),h.removeEventListener("touchend",w,E)),T=h=null),O===u.value&&(document.removeEventListener("mouseup",w,E),O=null),A===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,E),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function M(a){P(a),a.qSkipRipple=!0}return ke(()=>{j(!0)}),Object.assign(r,{click:a=>{y.value===!0&&S(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&a.push(v("span",{class:"block"},[e.label])),a=z(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},a)),e.loading!==null&&m.push(v(pe,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Me)])]:null)),re(v(b.value,$.value,m),[[Ke,_.value,void 0,B.value]])}}});export{Y as Q,Ke as R,qe as a,ie as b,lt as c,Ze as d,ot as e,et as f,it as g,z as h,Ae as i,nt as j,at as k,ut as l,ze as m,Ie as n,Ve as o,tt as p,rt as q,Me as r,ue as u,Ce as v};