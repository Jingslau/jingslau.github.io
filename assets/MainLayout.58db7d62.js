import{Q as Oe}from"./QImg.a103b69d.js";import{b as p,d as s,h as y,i as re,e as H,l as qe,s as x,j as $,m as Z,g as ee,Y as Ce,k as xe,y as je,H as _e,C as pe,P as Ne,Z as We,p as Ke,J as Ue,O as Ge,t as Xe,_ as Je,r as Ye,o as we,c as Ze,w as z,a as R,R as et,$ as tt,a0 as at,a1 as nt,a2 as ot}from"./index.a75b80da.js";import{h as ie,a as ue,d as lt}from"./dom.cf414058.js";import{R as rt,Q as Y,a as J}from"./QBtn.80f5b651.js";import{b as se,Q as it,a as ut}from"./QLayout.208803a4.js";import{u as le,Q as st}from"./QDialog.5c6aa348.js";import{c as ct,u as Te}from"./QInput.71eaa411.js";import{u as dt}from"./use-quasar.7e9b9321.js";import{C as ke}from"./CreateNewGroup.f97b04b4.js";import{_ as vt}from"./plugin-vue_export-helper.21dcd24c.js";import"./scroll.addc96bd.js";import"./portal.5c7a12bb.js";import"./private.use-form.6740ecb2.js";import"./ClosePopup.a186b67c.js";import"./QStepper.a0aa332b.js";import"./use-checkbox.b263cf30.js";var ft=p({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:g}){const f=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:f.value},ie(g.default))}});const ht=["top","middle","bottom"];var mt=p({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ht.includes(e)}},setup(e,{slots:g}){const f=s(()=>e.align!==void 0?{verticalAlign:e.align}:null),u=s(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>y("div",{class:u.value,style:f.value,role:"status","aria-label":e.label},ue(g.default,e.label!==void 0?[e.label]:[]))}}),bt=p({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:g}){const f=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:f.value,role:"toolbar"},ie(g.default))}}),gt=p({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:g,emit:f}){const{proxy:{$q:u}}=ee(),t=re(qe,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const k=x(parseInt(e.heightHint,10)),b=x(!0),C=s(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||u.platform.is.ios&&t.isContainer.value===!0),_=s(()=>{if(e.modelValue!==!0)return 0;if(C.value===!0)return b.value===!0?k.value:0;const r=k.value-t.scroll.value.position;return r>0?r:0}),V=s(()=>e.modelValue!==!0||C.value===!0&&b.value!==!0),h=s(()=>e.modelValue===!0&&V.value===!0&&e.reveal===!0),D=s(()=>"q-header q-layout__section--marginal "+(C.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(V.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),I=s(()=>{const r=t.rows.value.top,o={};return r[0]==="l"&&t.left.space===!0&&(o[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),r[2]==="r"&&t.right.space===!0&&(o[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function m(r,o){t.update("header",r,o)}function L(r,o){r.value!==o&&(r.value=o)}function q({height:r}){L(k,r),m("size",r)}function P(r){h.value===!0&&L(b,!0),f("focusin",r)}$(()=>e.modelValue,r=>{m("space",r),L(b,!0),t.animate()}),$(_,r=>{m("offset",r)}),$(()=>e.reveal,r=>{r===!1&&L(b,e.modelValue)}),$(b,r=>{t.animate(),f("reveal",r)}),$(t.scroll,r=>{e.reveal===!0&&L(b,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const Q={};return t.instances.header=Q,e.modelValue===!0&&m("size",k.value),m("space",e.modelValue),m("offset",_.value),Z(()=>{t.instances.header===Q&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const r=lt(g.default,[]);return e.elevated===!0&&r.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(y(se,{debounce:0,onResize:q})),y("header",{class:D.value,style:I.value,onFocusin:P},r)}}});let yt=0;const _t=["click","keydown"],wt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${yt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Tt(e,g,f,u){const t=re(Ce,H);if(t===H)return console.error("QTab/QRouteTab component needs to be child of QTabs"),H;const{proxy:k}=ee(),b=x(null),C=x(null),_=x(null),V=s(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),h=s(()=>t.currentModel.value===e.name),D=s(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(h.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),I=s(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=s(()=>e.disable===!0||t.hasFocus.value===!0||h.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function L(o,B){if(B!==!0&&b.value!==null&&b.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&_e(o);return}if(u===void 0){t.updateModel({name:e.name}),f("click",o);return}if(u.hasRouterLink.value===!0){const l=(d={})=>{let A;const M=d.to===void 0||We(d.to,e.to)===!0?t.avoidRouteWatcher=ct():null;return u.navigateToRouterLink(o,{...d,returnRouterError:!0}).catch(E=>{A=E}).then(E=>{if(M===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,A===void 0&&(E===void 0||E.message!==void 0&&E.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),d.returnRouterError===!0)return A!==void 0?Promise.reject(A):E})};f("click",o,l),o.defaultPrevented!==!0&&l();return}f("click",o)}function q(o){pe(o,[13,32])?L(o,!0):Ne(o)!==!0&&o.keyCode>=35&&o.keyCode<=40&&o.altKey!==!0&&o.metaKey!==!0&&t.onKbdNavigate(o.keyCode,k.$el)===!0&&_e(o),f("keydown",o)}function P(){const o=t.tabProps.value.narrowIndicator,B=[],l=y("div",{ref:_,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&B.push(y(Y,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&B.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&B.push(e.alertIcon!==void 0?y(Y,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),o===!0&&B.push(l);const d=[y("div",{class:"q-focus-helper",tabindex:-1,ref:b}),y("div",{class:I.value},ue(g.default,B))];return o===!1&&d.push(l),d}const Q={name:s(()=>e.name),rootRef:C,tabIndicatorRef:_,routeData:u};Z(()=>{t.unregisterTab(Q)}),xe(()=>{t.registerTab(Q)});function r(o,B){const l={ref:C,class:D.value,tabindex:m.value,role:"tab","aria-selected":h.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:L,onKeydown:q,...B};return je(y(o,l,P()),[[rt,V.value]])}return{renderTab:r,$tabs:t}}var qt=p({name:"QTab",props:wt,emits:_t,setup(e,{slots:g,emit:f}){const{renderTab:u}=Tt(e,g,f);return()=>u("div")}});let Le=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const g=document.createElement("div");Object.assign(g.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(g),e.scrollLeft=-1e3,Le=e.scrollLeft>=0,e.remove()}function Ct(e,g,f){const u=f===!0?["left","right"]:["top","bottom"];return`absolute-${g===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const xt=["left","center","right","justify"];var kt=p({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>xt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:g,emit:f}){const{proxy:u}=ee(),{$q:t}=u,{registerTick:k}=le(),{registerTick:b}=le(),{registerTick:C}=le(),{registerTimeout:_,removeTimeout:V}=Te(),{registerTimeout:h,removeTimeout:D}=Te(),I=x(null),m=x(null),L=x(e.modelValue),q=x(!1),P=x(!0),Q=x(!1),r=x(!1),o=[],B=x(0),l=x(!1);let d=null,A=null,M;const E=s(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ct(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Be=s(()=>{const a=B.value,n=L.value;for(let i=0;i<a;i++)if(o[i].name.value===n)return!0;return!1}),Re=s(()=>`q-tabs__content--align-${q.value===!0?"left":r.value===!0?"justify":e.align}`),Se=s(()=>`q-tabs row no-wrap items-center q-tabs--${q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),$e=s(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Re.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),K=s(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),U=s(()=>e.vertical!==!0&&t.lang.rtl===!0),te=s(()=>Le===!1&&U.value===!0);$(U,W),$(()=>e.modelValue,a=>{ae({name:a,setCurrent:!0,skipEmit:!0})}),$(()=>e.outsideArrows,G);function ae({name:a,setCurrent:n,skipEmit:i}){L.value!==a&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&f("update:modelValue",a),(n===!0||e["onUpdate:modelValue"]===void 0)&&(Pe(L.value,a),L.value=a))}function G(){k(()=>{ce({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ce(a){if(K.value===void 0||m.value===null)return;const n=a[K.value.container],i=Math.min(m.value[K.value.scroll],Array.prototype.reduce.call(m.value.children,(T,v)=>T+(v[K.value.content]||0),0)),w=n>0&&i>n;q.value=w,w===!0&&b(W),r.value=n<parseInt(e.breakpoint,10)}function Pe(a,n){const i=a!=null&&a!==""?o.find(T=>T.name.value===a):null,w=n!=null&&n!==""?o.find(T=>T.name.value===n):null;if(i&&w){const T=i.tabIndicatorRef.value,v=w.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),T.style.transition="none",T.style.transform="none",v.style.transition="none",v.style.transform="none";const c=T.getBoundingClientRect(),S=v.getBoundingClientRect();v.style.transform=e.vertical===!0?`translate3d(0,${c.top-S.top}px,0) scale3d(1,${S.height?c.height/S.height:1},1)`:`translate3d(${c.left-S.left}px,0,0) scale3d(${S.width?c.width/S.width:1},1,1)`,C(()=>{d=setTimeout(()=>{d=null,v.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",v.style.transform="none"},70)})}w&&q.value===!0&&N(w.rootRef.value)}function N(a){const{left:n,width:i,top:w,height:T}=m.value.getBoundingClientRect(),v=a.getBoundingClientRect();let c=e.vertical===!0?v.top-w:v.left-n;if(c<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(c),W();return}c+=e.vertical===!0?v.height-T:v.width-i,c>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(c),W())}function W(){const a=m.value;if(a===null)return;const n=a.getBoundingClientRect(),i=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);U.value===!0?(P.value=Math.ceil(i+n.width)<a.scrollWidth-1,Q.value=i>0):(P.value=i>0,Q.value=e.vertical===!0?Math.ceil(i+n.height)<a.scrollHeight:Math.ceil(i+n.width)<a.scrollWidth)}function de(a){A!==null&&clearInterval(A),A=setInterval(()=>{Ie(a)===!0&&O()},5)}function ve(){de(te.value===!0?Number.MAX_SAFE_INTEGER:0)}function fe(){de(te.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){A!==null&&(clearInterval(A),A=null)}function Ae(a,n){const i=Array.prototype.filter.call(m.value.children,S=>S===n||S.matches&&S.matches(".q-tab.q-focusable")===!0),w=i.length;if(w===0)return;if(a===36)return N(i[0]),i[0].focus(),!0;if(a===35)return N(i[w-1]),i[w-1].focus(),!0;const T=a===(e.vertical===!0?38:37),v=a===(e.vertical===!0?40:39),c=T===!0?-1:v===!0?1:void 0;if(c!==void 0){const S=U.value===!0?-1:1,F=i.indexOf(n)+c*S;return F>=0&&F<w&&(N(i[F]),i[F].focus({preventScroll:!0})),!0}}const Ve=s(()=>te.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,n)=>{a.scrollLeft=-n}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,n)=>{a.scrollTop=n}}:{get:a=>a.scrollLeft,set:(a,n)=>{a.scrollLeft=n}});function Ie(a){const n=m.value,{get:i,set:w}=Ve.value;let T=!1,v=i(n);const c=a<v?-1:1;return v+=c*5,v<0?(T=!0,v=0):(c===-1&&v<=a||c===1&&v>=a)&&(T=!0,v=a),w(n,v),W(),T}function he(a,n){for(const i in a)if(a[i]!==n[i])return!1;return!0}function Qe(){let a=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const i=o.filter(c=>c.routeData!==void 0&&c.routeData.hasRouterLink.value===!0),{hash:w,query:T}=u.$route,v=Object.keys(T).length;for(const c of i){const S=c.routeData.exact.value===!0;if(c.routeData[S===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:ne,matched:He,href:Ee}=c.routeData.resolvedLink.value,oe=Object.keys(ne).length;if(S===!0){if(F!==w||oe!==v||he(T,ne)===!1)continue;a=c.name.value;break}if(F!==""&&F!==w||oe!==0&&he(ne,T)===!1)continue;const j={matchedLen:He.length,queryDiff:v-oe,hrefLen:Ee.length-F.length};if(j.matchedLen>n.matchedLen){a=c.name.value,n=j;continue}else if(j.matchedLen!==n.matchedLen)continue;if(j.queryDiff<n.queryDiff)a=c.name.value,n=j;else if(j.queryDiff!==n.queryDiff)continue;j.hrefLen>n.hrefLen&&(a=c.name.value,n=j)}a===null&&o.some(c=>c.routeData===void 0&&c.name.value===L.value)===!0||ae({name:a,setCurrent:!0})}function Me(a){if(V(),l.value!==!0&&I.value!==null&&a.target&&typeof a.target.closest=="function"){const n=a.target.closest(".q-tab");n&&I.value.contains(n)===!0&&(l.value=!0,q.value===!0&&N(n))}}function ze(){_(()=>{l.value=!1},30)}function X(){be.avoidRouteWatcher===!1?h(Qe):D()}function me(){if(M===void 0){const a=$(()=>u.$route.fullPath,X);M=()=>{a(),M=void 0}}}function De(a){o.push(a),B.value++,G(),a.routeData===void 0||u.$route===void 0?h(()=>{if(q.value===!0){const n=L.value,i=n!=null&&n!==""?o.find(w=>w.name.value===n):null;i&&N(i.rootRef.value)}}):(me(),a.routeData.hasRouterLink.value===!0&&X())}function Fe(a){o.splice(o.indexOf(a),1),B.value--,G(),M!==void 0&&a.routeData!==void 0&&(o.every(n=>n.routeData===void 0)===!0&&M(),X())}const be={currentModel:L,tabProps:E,hasFocus:l,hasActiveTab:Be,registerTab:De,unregisterTab:Fe,verifyRouteModel:X,updateModel:ae,onKbdNavigate:Ae,avoidRouteWatcher:!1};Ke(Ce,be);function ge(){d!==null&&clearTimeout(d),O(),M!==void 0&&M()}let ye;return Z(ge),Ue(()=>{ye=M!==void 0,ge()}),Ge(()=>{ye===!0&&me(),G()}),()=>y("div",{ref:I,class:Se.value,role:"tablist",onFocusin:Me,onFocusout:ze},[y(se,{onResize:ce}),y("div",{ref:m,class:$e.value,onScroll:W},ie(g.default)),y(Y,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(P.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ve,onTouchstartPassive:ve,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),y(Y,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:fe,onTouchstartPassive:fe,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}}),Lt=p({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:g,emit:f}){const{proxy:{$q:u}}=ee(),t=re(qe,H);if(t===H)return console.error("QFooter needs to be child of QLayout"),H;const k=x(parseInt(e.heightHint,10)),b=x(!0),C=x(Xe.value===!0||t.isContainer.value===!0?0:window.innerHeight),_=s(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||u.platform.is.ios&&t.isContainer.value===!0),V=s(()=>t.isContainer.value===!0?t.containerHeight.value:C.value),h=s(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return b.value===!0?k.value:0;const l=t.scroll.value.position+V.value+k.value-t.height.value;return l>0?l:0}),D=s(()=>e.modelValue!==!0||_.value===!0&&b.value!==!0),I=s(()=>e.modelValue===!0&&D.value===!0&&e.reveal===!0),m=s(()=>"q-footer q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(D.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(_.value!==!0?" hidden":""):"")),L=s(()=>{const l=t.rows.value.bottom,d={};return l[0]==="l"&&t.left.space===!0&&(d[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(d[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),d});function q(l,d){t.update("footer",l,d)}function P(l,d){l.value!==d&&(l.value=d)}function Q({height:l}){P(k,l),q("size",l)}function r(){if(e.reveal!==!0)return;const{direction:l,position:d,inflectionPoint:A}=t.scroll.value;P(b,l==="up"||d-A<100||t.height.value-V.value-d-k.value<300)}function o(l){I.value===!0&&P(b,!0),f("focusin",l)}$(()=>e.modelValue,l=>{q("space",l),P(b,!0),t.animate()}),$(h,l=>{q("offset",l)}),$(()=>e.reveal,l=>{l===!1&&P(b,e.modelValue)}),$(b,l=>{t.animate(),f("reveal",l)}),$([k,t.scroll,t.height],r),$(()=>u.screen.height,l=>{t.isContainer.value!==!0&&P(C,l)});const B={};return t.instances.footer=B,e.modelValue===!0&&q("size",k.value),q("space",e.modelValue),q("offset",h.value),Z(()=>{t.instances.footer===B&&(t.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const l=ue(g.default,[y(se,{debounce:0,onResize:Q})]);return e.elevated===!0&&l.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y("footer",{class:m.value,style:L.value,onFocusin:o},l)}}});const Bt={components:{CreateNewGroup:ke},data(){return{showActionDialog:!1,actionDialogType:0}}},Rt=Object.assign(Bt,{name:"MainLayout"},{__name:"MainLayout",setup(e){const g=Je(),f=[{name:"home",icon:"home",to:"/"},{name:"Vereine",icon:"payments",to:"/scanner"},{name:"Events",icon:"groups",to:"/scanner"},{name:"qr",icon:"qr_code_scanner",to:"/scanner"},{name:"settings",icon:"settings",to:"/settings"}],u=x("home"),t=C=>{u.value=C,g.push(f.find(_=>_.name===C).to)},k=dt(),b=x(k.dark.isActive);return xe(()=>{b.value=k.dark.isActive}),(C,_)=>{const V=Ye("router-view");return we(),Ze(it,{view:"hHh lpR fFf"},{default:z(()=>[R(gt,null,{default:z(()=>[R(bt,{class:"top_nav"},{default:z(()=>[R(ft,null,{default:z(()=>[R(Oe,{src:"src/assets/icons/App Logo/logo_badge_blue.svg",width:"30px",style:{margin:"10px"}})]),_:1}),R(J,{flat:"",round:"",dense:"",icon:"group_add",onClick:_[0]||(_[0]=h=>{C.actionDialogType=1,C.showActionDialog=!0}),style:{"margin-left":"10px"}}),R(J,{flat:"",round:"",dense:"",icon:"qr_code_scanner",style:{"margin-left":"10px"}}),R(J,{flat:"",round:"",dense:"",icon:"notifications_none",style:{"margin-left":"10px"}},{default:z(()=>[R(mt,{floating:"",style:{"background-color":"#ff5863"},rounded:""},{default:z(()=>[et(" 1")]),_:1})]),_:1}),R(J,{flat:"",round:"",dense:"",icon:"help_outline",style:{"margin-left":"10px"}})]),_:1})]),_:1}),R(st,{"transition-show":"slide-up","transition-hide":"slide-down",modelValue:C.showActionDialog,"onUpdate:modelValue":_[1]||(_[1]=h=>C.showActionDialog=h)},{default:z(()=>[R(ke)]),_:1},8,["modelValue"]),R(ut,null,{default:z(()=>[R(V)]),_:1}),R(Lt,{class:"top_nav custom-footer-shadow"},{default:z(()=>[R(kt,{modelValue:u.value,"onUpdate:modelValue":_[2]||(_[2]=h=>u.value=h),align:"justify",class:"q-pa-none","active-color":"accent","indicator-color":"primary",color:"grey-8",shrink:""},{default:z(()=>[(we(),tt(nt,null,at(f,h=>R(qt,{key:h.name,name:h.name,icon:h.icon,label:h.label,onClick:D=>t(h.name),to:h.to,exact:"",class:ot({"unselected-tab":u.value!==h.name,"custom-tab-label":!0})},null,8,["name","icon","label","onClick","to","class"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});var Nt=vt(Rt,[["__scopeId","data-v-2c42ed6c"]]);export{Nt as default};