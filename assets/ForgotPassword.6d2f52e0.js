import{Q as a}from"./QCardSection.0f69decd.js";import{Q as d}from"./QImg.a103b69d.js";import{Q as c,a as r}from"./QBtn.80f5b651.js";import{Q as p}from"./QInput.71eaa411.js";import{Q as f}from"./QForm.6d33b146.js";import{Q as m}from"./QCardActions.e49c68ab.js";import{Q as g}from"./QCard.b4881587.js";import{Q as h}from"./QDialog.5c6aa348.js";import{Q as _}from"./QPage.01c91899.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{o as w,c as Q,w as t,A as i,a as e,R as u,X as x}from"./index.a75b80da.js";import"./dom.cf414058.js";import"./private.use-form.6740ecb2.js";import"./portal.5c7a12bb.js";import"./scroll.addc96bd.js";const k={data(){return{email:"",dialogVisible:!1}},methods:{onSubmit(){this.dialogVisible=!0,setTimeout(()=>{this.closeDialog(),this.$router.push("/auth/login")},1e4)},closeDialog(){this.dialogVisible=!1,this.$router.push("/login")}}},V={class:"q-pa-lg",style:{"max-width":"400px",width:"100%"}},z=i("div",{class:"text-caption"}," Bitte gebe deine E-Mail Adresse ein, damit das Passwort zur\xFCckgesetzt wird. ",-1),y=i("div",{class:"text-h6"},"E-Mail versandt",-1),v=i("br",null,null,-1),S=i("br",null,null,-1);function B(C,s,D,E,o,n){return w(),Q(_,{class:"flex flex-center"},{default:t(()=>[i("div",V,[e(a),e(a,{class:"text-center full-width"},{default:t(()=>[e(d,{src:"/src/assets/icons/App Logo/logo_badge_blue.svg","spinner-color":"white",style:{height:"80px","max-width":"80px","margin-bottom":"20px"},class:"full-width"}),e(f,{onSubmit:n.onSubmit,class:"q-gutter-md full-width"},{default:t(()=>[z,e(p,{filled:"",label:"E-Mail",modelValue:o.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.email=l),type:"email",rules:[l=>!!l||"Bitte gebe eine E-Mail ein!",l=>/.+@.+\..+/.test(l)||"Ung\xFCltiges E-Mail-Format!"],clearable:"",class:"full-width"},{prepend:t(()=>[e(c,{name:"email"})]),_:1},8,["modelValue","rules"]),e(r,{push:"",rounded:"",label:"Passwort zur\xFCcksetzen",color:"primary",type:"submit",class:"full-width"})]),_:1},8,["onSubmit"])]),_:1}),e(m,{align:"center"},{default:t(()=>[e(r,{flat:"",style:{"font-weight":"900"},label:"Zur\xFCck zum Login",color:"primary",to:"/auth/login"})]),_:1})]),e(h,{modelValue:o.dialogVisible,"onUpdate:modelValue":s[1]||(s[1]=l=>o.dialogVisible=l)},{default:t(()=>[e(g,null,{default:t(()=>[e(a,null,{default:t(()=>[y,i("div",null,[u(" Sollte die E-mail "+x(o.email)+" mit einem Nutzerkonto verkn\xFCpft sein, dann erh\xE4ltst du einen Link zum zur\xFCcksetzen deines Passworts. ",1),v,S,u(" Du wirst in 10 Sekunden zur\xFCck zum Login weitergeleitet. ")])]),_:1}),e(m,{align:"center"},{default:t(()=>[e(r,{label:"Zur\xFCck zum Login",color:"primary",onClick:n.closeDialog},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var H=b(k,[["render",B]]);export{H as default};
