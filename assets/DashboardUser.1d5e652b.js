import{Q as ae,a as k,b as T,c as se,d as ie}from"./QPage.fab2bf9f.js";import{_ as le,Q as X,w as ue,x as ce,y as F,C as de}from"./plugin-vue_export-helper.8dd1e2cb.js";import{d as Y,Q as he,R as fe}from"./QBtn.5244719c.js";import{a2 as V,h as y,r as H,a3 as J,o as ve,I as me,J as O,P as q,N as h,M as _,L as C,a4 as I,R as Z,K as U,Q as ge,z as W,O as pe}from"./index.be21021c.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var Q=function(){return Q=Object.assign||function(d){for(var u,i=1,c=arguments.length;i<c;i++){u=arguments[i];for(var v in u)Object.prototype.hasOwnProperty.call(u,v)&&(d[v]=u[v])}return d},Q.apply(this,arguments)};var N;(function(l){var d=function(){function o(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],s=0;s<this.size;s++)a.push(!1);for(var s=0;s<this.size;s++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var f=this.addEccAndInterleave(r);if(this.drawCodewords(f),n==-1)for(var m=1e9,s=0;s<8;s++){this.applyMask(s),this.drawFormatBits(s);var w=this.getPenaltyScore();w<m&&(n=s,m=w),this.applyMask(s)}c(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return o.encodeText=function(e,t){var r=l.QrSegment.makeSegments(e);return o.encodeSegments(r,t)},o.encodeBinary=function(e,t){var r=l.QrSegment.makeBytes(e);return o.encodeSegments([r],t)},o.encodeSegments=function(e,t,r,n,a,s){if(r===void 0&&(r=1),n===void 0&&(n=40),a===void 0&&(a=-1),s===void 0&&(s=!0),!(o.MIN_VERSION<=r&&r<=n&&n<=o.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var f,m;for(f=r;;f++){var w=o.getNumDataCodewords(f,t)*8,E=v.getTotalBits(e,f);if(E<=w){m=E;break}if(f>=n)throw new RangeError("Data too long")}for(var p=0,M=[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH];p<M.length;p++){var R=M[p];s&&m<=o.getNumDataCodewords(f,R)*8&&(t=R)}for(var g=[],A=0,P=e;A<P.length;A++){var b=P[A];u(b.mode.modeBits,4,g),u(b.numChars,b.mode.numCharCountBits(f),g);for(var z=0,D=b.getData();z<D.length;z++){var oe=D[z];g.push(oe)}}c(g.length==m);var L=o.getNumDataCodewords(f,t)*8;c(g.length<=L),u(0,Math.min(4,L-g.length),g),u(0,(8-g.length%8)%8,g),c(g.length%8==0);for(var x=236;g.length<L;x^=253)u(x,8,g);for(var B=[];B.length*8<g.length;)B.push(0);return g.forEach(function(ne,K){return B[K>>>3]|=ne<<7-(K&7)}),new o(f,t,B,a)},o.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},o.prototype.getModules=function(){return this.modules},o.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var n=0;n<r;n++)e==0&&n==0||e==0&&n==r-1||e==r-1&&n==0||this.drawAlignmentPattern(t[e],t[n]);this.drawFormatBits(0),this.drawVersion()},o.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var a=(t<<10|r)^21522;c(a>>>15==0);for(var n=0;n<=5;n++)this.setFunctionModule(8,n,i(a,n));this.setFunctionModule(8,7,i(a,6)),this.setFunctionModule(8,8,i(a,7)),this.setFunctionModule(7,8,i(a,8));for(var n=9;n<15;n++)this.setFunctionModule(14-n,8,i(a,n));for(var n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,i(a,n));for(var n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,i(a,n));this.setFunctionModule(8,this.size-8,!0)},o.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;c(r>>>18==0);for(var t=0;t<18;t++){var n=i(r,t),a=this.size-11+t%3,s=Math.floor(t/3);this.setFunctionModule(a,s,n),this.setFunctionModule(s,a,n)}}},o.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var a=Math.max(Math.abs(n),Math.abs(r)),s=e+n,f=t+r;0<=s&&s<this.size&&0<=f&&f<this.size&&this.setFunctionModule(s,f,a!=2&&a!=4)}},o.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)},o.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},o.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],s=Math.floor(o.getNumRawDataModules(t)/8),f=n-s%n,m=Math.floor(s/n),w=[],E=o.reedSolomonComputeDivisor(a),p=0,M=0;p<n;p++){var R=e.slice(M,M+m-a+(p<f?0:1));M+=R.length;var g=o.reedSolomonComputeRemainder(R,E);p<f&&R.push(0),w.push(R.concat(g))}for(var A=[],P=function(b){w.forEach(function(z,D){(b!=m-a||D>=f)&&A.push(z[b])})},p=0;p<w[0].length;p++)P(p);return c(A.length==s),A},o.prototype.drawCodewords=function(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var a=0;a<2;a++){var s=r-a,f=(r+1&2)==0,m=f?this.size-1-n:n;!this.isFunction[m][s]&&t<e.length*8&&(this.modules[m][s]=i(e[t>>>3],7-(t&7)),t++)}}c(t==e.length*8)},o.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}},o.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,a=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[t][s]==r?(n++,n==5?e+=o.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,a),r||(e+=this.finderPenaltyCountPatterns(a)*o.PENALTY_N3),r=this.modules[t][s],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,a)*o.PENALTY_N3}for(var s=0;s<this.size;s++){for(var r=!1,f=0,a=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][s]==r?(f++,f==5?e+=o.PENALTY_N1:f>5&&e++):(this.finderPenaltyAddHistory(f,a),r||(e+=this.finderPenaltyCountPatterns(a)*o.PENALTY_N3),r=this.modules[t][s],f=1);e+=this.finderPenaltyTerminateAndCount(r,f,a)*o.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var s=0;s<this.size-1;s++){var m=this.modules[t][s];m==this.modules[t][s+1]&&m==this.modules[t+1][s]&&m==this.modules[t+1][s+1]&&(e+=o.PENALTY_N2)}for(var w=0,E=0,p=this.modules;E<p.length;E++){var M=p[E];w=M.reduce(function(A,P){return A+(P?1:0)},w)}var R=this.size*this.size,g=Math.ceil(Math.abs(w*20-R*10)/R)-1;return c(0<=g&&g<=9),e+=g*o.PENALTY_N4,c(0<=e&&e<=2568888),e},o.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r},o.getNumRawDataModules=function(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return c(208<=t&&t<=29648),t},o.getNumDataCodewords=function(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},o.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,r=0;r<e;r++){for(var a=0;a<t.length;a++)t[a]=o.reedSolomonMultiply(t[a],n),a+1<t.length&&(t[a]^=t[a+1]);n=o.reedSolomonMultiply(n,2)}return t},o.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(m){return 0}),n=function(m){var w=m^r.shift();r.push(0),t.forEach(function(E,p){return r[p]^=o.reedSolomonMultiply(E,w)})},a=0,s=e;a<s.length;a++){var f=s[a];n(f)}return r},o.reedSolomonMultiply=function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return c(r>>>8==0),r},o.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];c(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},o.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},o.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},o.MIN_VERSION=1,o.MAX_VERSION=40,o.PENALTY_N1=3,o.PENALTY_N2=3,o.PENALTY_N3=40,o.PENALTY_N4=10,o.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],o.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o}();l.QrCode=d;function u(o,e,t){if(e<0||e>31||o>>>e!=0)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(o>>>r&1)}function i(o,e){return(o>>>e&1)!=0}function c(o){if(!o)throw new Error("Assertion error")}var v=function(){function o(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return o.makeBytes=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var a=n[r];u(a,8,t)}return new o(o.Mode.BYTE,e.length,t)},o.makeNumeric=function(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);u(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new o(o.Mode.NUMERIC,e.length,t)},o.makeAlphanumeric=function(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),u(n,11,t)}return r<e.length&&u(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new o(o.Mode.ALPHANUMERIC,e.length,t)},o.makeSegments=function(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]},o.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<1<<7)u(e,8,t);else if(e<1<<14)u(2,2,t),u(e,14,t);else if(e<1e6)u(6,3,t),u(e,21,t);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,t)},o.isNumeric=function(e){return o.NUMERIC_REGEX.test(e)},o.isAlphanumeric=function(e){return o.ALPHANUMERIC_REGEX.test(e)},o.prototype.getData=function(){return this.bitData.slice()},o.getTotalBits=function(e,t){for(var r=0,n=0,a=e;n<a.length;n++){var s=a[n],f=s.mode.numCharCountBits(t);if(s.numChars>=1<<f)return 1/0;r+=4+f+s.bitData.length}return r},o.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",o}();l.QrSegment=v})(N||(N={}));(function(l){(function(d){var u=function(){function i(c,v){this.ordinal=c,this.formatBits=v}return i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),i}();d.Ecc=u})(l.QrCode||(l.QrCode={}))})(N||(N={}));(function(l){(function(d){var u=function(){function i(c,v){this.modeBits=c,this.numBitsCharCount=v}return i.prototype.numCharCountBits=function(c){return this.numBitsCharCount[Math.floor((c+7)/17)]},i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),i}();d.Mode=u})(l.QrSegment||(l.QrSegment={}))})(N||(N={}));var S=N,j="H",$={L:S.QrCode.Ecc.LOW,M:S.QrCode.Ecc.MEDIUM,Q:S.QrCode.Ecc.QUARTILE,H:S.QrCode.Ecc.HIGH},_e=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ee(l){return l in $}function te(l,d){d===void 0&&(d=0);var u=[];return l.forEach(function(i,c){var v=null;i.forEach(function(o,e){if(!o&&v!==null){u.push("M".concat(v+d," ").concat(c+d,"h").concat(e-v,"v1H").concat(v+d,"z")),v=null;return}if(e===i.length-1){if(!o)return;v===null?u.push("M".concat(e+d,",").concat(c+d," h1v1H").concat(e+d,"z")):u.push("M".concat(v+d,",").concat(c+d," h").concat(e+1-v,"v1H").concat(v+d,"z"));return}o&&v===null&&(v=e)})}),u.join("")}var G={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:j,validator:function(l){return ee(l)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},Ce=Q(Q({},G),{renderAs:{type:String,required:!1,default:"canvas",validator:function(l){return["canvas","svg"].indexOf(l)>-1}}}),we=V({name:"QRCodeSvg",props:G,setup:function(l){var d=H(0),u=H(""),i=function(){var c=l.value,v=l.level,o=l.margin,e=S.QrCode.encodeText(c,$[v]).getModules();d.value=e.length+o*2,u.value=te(e,o)};return i(),J(i),function(){return y("svg",{width:l.size,height:l.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d.value," ").concat(d.value)},[y("path",{fill:l.background,d:"M0,0 h".concat(d.value,"v").concat(d.value,"H0z")}),y("path",{fill:l.foreground,d:u.value})])}}}),Ee=V({name:"QRCodeCanvas",props:G,setup:function(l){var d=H(null),u=function(){var i=l.value,c=l.level,v=l.size,o=l.margin,e=l.background,t=l.foreground,r=d.value;if(!!r){var n=r.getContext("2d");if(!!n){var a=S.QrCode.encodeText(i,$[c]).getModules(),s=a.length+o*2,f=window.devicePixelRatio||1,m=v/s*f;r.height=r.width=v*f,n.scale(m,m),n.fillStyle=e,n.fillRect(0,0,s,s),n.fillStyle=t,_e?n.fill(new Path2D(te(a,o))):a.forEach(function(w,E){w.forEach(function(p,M){p&&n.fillRect(M+o,E+o,1,1)})})}}};return ve(u),J(u),function(){return y("canvas",{ref:d,style:{width:"".concat(l.size,"px"),height:"".concat(l.size,"px")}})}}}),Me=V({name:"Qrcode",render:function(){var l=this.$props,d=l.renderAs,u=l.value,i=l.size,c=l.margin,v=l.level,o=l.background,e=l.foreground,t=i>>>0,r=c>>>0,n=ee(v)?v:j;return y(d==="svg"?we:Ee,{value:u,size:t,margin:r,level:n,background:o,foreground:e})},props:Ce});const Re={components:{QrcodeVue:Me},props:["selectedConsumptionCardId"],data(){return{name:"Apples",message:"I like apples",consumptionCard:"",size:150}},mounted(){this.consumptionCard=this.selectedConsumptionCardId}},Ae={class:"row"},be={class:"col"},Ne=["src"],Pe={class:"col"},Ie={class:"row"},Se={class:"col",align:"right"},ze={class:"text-h6"},Oe={class:"row"},ye={class:"col",align:"right"},De={class:"text-weight-regular text-secondary"},Be={class:"row"},Qe={class:"col",align:"right"},Le={class:"text-weight-regular text-secondary"},ke={class:"row"},Te={class:"col",align:"center"},Fe={class:"row"},Ue={class:"col",align:"right"},He={class:"text-h6"},Ve=h("div",{class:"text-weight-bold text-primary"},"Offenes Guthaben",-1);function $e(l,d,u,i,c,v){const o=me("qrcode-vue");return O(),q(Z,null,[h("div",Ae,[h("div",be,[_(X,null,{default:C(()=>[h("img",{src:c.consumptionCard.clubIcon,alt:"",srcset:""},null,8,Ne)]),_:1})]),h("div",Pe,[h("div",Ie,[h("div",Se,[h("div",ze,I(c.consumptionCard.club),1)])]),h("div",Oe,[h("div",ye,[h("div",De," ID: "+I(c.consumptionCard.id),1)])]),h("div",Be,[h("div",Qe,[h("div",Le,I(c.consumptionCard.createdAt),1)])])])]),h("div",ke,[h("div",Te,[_(o,{value:c.consumptionCard.id,size:c.size,level:"M"},null,8,["value","size"])])]),h("div",Fe,[h("div",Ue,[h("div",He,I(c.consumptionCard.value)+" \u20AC",1),Ve])])],64)}var re=le(Re,[["render",$e]]);const Ge={class:"q-pa-md row-column-width"},xe={class:"row"},Ke={class:"col"},Ye=h("div",{class:"text-h6"},"55,00 \u20AC",-1),We=h("div",{class:"text-h6 text-primary"},"Offenes Guthaben",-1),Xe=h("div",{class:"row"},[h("div",{class:"col"},[h("div",{class:"text-body1"},"Meine Verzehrkarten"),h("div",{class:"text-weight-regular text-secondary"}," 5 offene Verzehrkarten / 5 Vereine ")])],-1),Je={class:"row"},qe={class:"col"},Ze=h("div",{class:"row"},[h("div",{class:"col"},[h("div",{class:"text-weight-regular text-secondary",style:{"margin-bottom":"10px"}}," Verzehrkarten ")]),h("div",{class:"col",align:"right"},[h("div",{class:"text-weight-regular text-accent",style:{"margin-bottom":"10px"}}," Verwalten ")])],-1),je=["src"],et={class:"text-body1"},tt={class:"text-weight-regular text-secondary"},rt={components:{ConsumptionCard:re},data(){return{showConsumptionCard:!1,selectedCard:null,cards:[{id:"23FI9ASDU9098772",clubIcon:"/development/club_images/weitmar_45.jpg",club:"SC Weitmar 45",value:"18,00",createdAt:"12.3.2023"},{id:"ODO0123OASD23123",clubIcon:"/development/club_images/weitmar_09.png",club:"SV Blauwei\xDF Weitmar 09",value:"12,00",createdAt:"01.2.2023"},{id:"OOTASD00123ASD",clubIcon:"/development/club_images/steinkuhl.png",club:"SV Bochum-Steinkuhl",value:"7,50",createdAt:"01.2.2022"},{id:"O0123123IWD90",clubIcon:"/development/club_images/vfl_bochum.jpg",club:"VfL Bochum",value:"10,00",createdAt:"09.3.2023"},{id:"GK12315ASD98932",clubIcon:"/development/club_images/bvb.png",club:"Dortmund BVB",value:"14,00",createdAt:"01.10.2023"}]}},methods:{onTabClick(l){this.currentTab=l},openConsumptionCard(l){this.selectedCard=l,this.showConsumptionCard=!0}}},it=Object.assign(rt,{name:"DashboardUser"},{__name:"DashboardUser",setup(l){return(d,u)=>(O(),U(ae,{style:{"overflow-y":"scroll"}},{default:C(()=>[h("div",Ge,[h("div",xe,[h("div",Ke,[_(T,{flat:"",style:{"border-radius":"10px"}},{default:C(()=>[_(k,null,{default:C(()=>[Ye,We]),_:1})]),_:1})])]),Xe,h("div",Je,[h("div",qe,[_(T,{flat:"",style:{"border-radius":"10px"}},{default:C(()=>[_(k,null,{default:C(()=>[Ze,_(ue,null,{default:C(()=>[(O(!0),q(Z,null,ge(d.cards,i=>W((O(),U(ce,{clickable:"",key:i.id,onClick:c=>d.openConsumptionCard(i)},{default:C(()=>[_(F,{side:"",left:"",avatar:""},{default:C(()=>[_(X,null,{default:C(()=>[h("img",{src:i.clubIcon},null,8,je)]),_:2},1024)]),_:2},1024),_(F,null,{default:C(()=>[h("div",et,I(i.value)+" \u20AC",1),h("div",tt,I(i.club),1)]),_:2},1024),_(F,{side:"",right:""},{default:C(()=>[_(he,{name:"keyboard_arrow_right",class:"text-secondary",style:{"font-size":"3rem"}})]),_:1})]),_:2},1032,["onClick"])),[[fe]])),128))]),_:1})]),_:1})]),_:1})])])]),_(ie,{modelValue:d.showConsumptionCard,"onUpdate:modelValue":u[0]||(u[0]=i=>d.showConsumptionCard=i)},{default:C(()=>[_(T,{style:{width:"95vw","border-radius":"10px"}},{default:C(()=>[_(k,null,{default:C(()=>[_(re,{selectedConsumptionCardId:d.selectedCard},null,8,["selectedConsumptionCardId"])]),_:1}),_(se,{align:"around"},{default:C(()=>[W((O(),U(Y,{color:"secondary",flat:""},{default:C(()=>[pe("Schlie\xDFen")]),_:1})),[[de]]),_(Y,{color:"primary",size:"small",icon:"trending_up",rounded:"",label:"Guthaben aufladen"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{it as default};
