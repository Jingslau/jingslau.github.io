import{Q as a}from"./QCardSection.c748d0e9.js";import{Q as m}from"./QImg.ded27c09.js";import{o as c,c as p,w as t,C as i,a as e,Q as f,D as r,V as u,a3 as g}from"./index.d6844866.js";import{Q as h}from"./QInput.78086282.js";import{Q as _}from"./QForm.b9c11be5.js";import{Q as d}from"./QCardActions.7a1b866d.js";import{Q as b}from"./QCard.5bfe57d0.js";import{Q as w}from"./QDialog.d05badeb.js";import{Q}from"./QPage.64de6e16.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./private.use-form.5d0f4e28.js";import"./portal.42249d71.js";import"./scroll.fab7f1fb.js";const V={data(){return{email:"",dialogVisible:!1}},methods:{onSubmit(){this.dialogVisible=!0,setTimeout(()=>{this.closeDialog(),this.$router.push("/auth/login")},1e4)},closeDialog(){this.dialogVisible=!1,this.$router.push("/login")}}},k={class:"q-pa-lg",style:{"max-width":"400px",width:"100%"}},z=i("div",{class:"text-caption"}," Bitte gebe deine E-Mail Adresse ein, damit das Passwort zur\xFCckgesetzt wird. ",-1),y=i("div",{class:"text-h6"},"E-Mail versandt",-1),v=i("br",null,null,-1),S=i("br",null,null,-1);function C(D,s,B,E,o,n){return c(),p(Q,{class:"flex flex-center"},{default:t(()=>[i("div",k,[e(a),e(a,{class:"text-center full-width"},{default:t(()=>[e(m,{src:"/icons/App Logo/logo_badge_blue.svg","spinner-color":"white",style:{"max-width":"80px","margin-bottom":"50px"},class:"full-width"}),e(_,{onSubmit:n.onSubmit,class:"q-gutter-md full-width"},{default:t(()=>[z,e(h,{filled:"",label:"E-Mail",modelValue:o.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.email=l),type:"email",rules:[l=>!!l||"Bitte gebe eine E-Mail ein!",l=>/.+@.+\..+/.test(l)||"Ung\xFCltiges E-Mail-Format!"],clearable:"",class:"full-width"},{prepend:t(()=>[e(f,{name:"email"})]),_:1},8,["modelValue","rules"]),e(r,{push:"",rounded:"",label:"Passwort zur\xFCcksetzen",color:"primary",type:"submit",class:"full-width"})]),_:1},8,["onSubmit"])]),_:1}),e(d,{align:"center"},{default:t(()=>[e(r,{flat:"",style:{"font-weight":"900"},label:"Zur\xFCck zum Login",color:"primary",to:"/auth/login"})]),_:1})]),e(w,{modelValue:o.dialogVisible,"onUpdate:modelValue":s[1]||(s[1]=l=>o.dialogVisible=l)},{default:t(()=>[e(b,null,{default:t(()=>[e(a,null,{default:t(()=>[y,i("div",null,[u(" Sollte die E-mail "+g(o.email)+" mit einem Nutzerkonto verkn\xFCpft sein, dann erh\xE4ltst du einen Link zum zur\xFCcksetzen deines Passworts. ",1),v,S,u(" Du wirst in 10 Sekunden zur\xFCck zum Login weitergeleitet. ")])]),_:1}),e(d,{align:"center"},{default:t(()=>[e(r,{label:"Zur\xFCck zum Login",color:"primary",onClick:n.closeDialog},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var H=x(V,[["render",C]]);export{H as default};