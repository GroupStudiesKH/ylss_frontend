import{p as D,r as l,o as N,c as d,d as _,_ as O,u as U,a as B,b as S,e as P,f as t,t as s,h as A,n as u,q as k,v as C,F,j as E,g as L}from"./index-620589fc.js";import{H as j,F as x,c as I,a as J}from"./Footer-f559c448.js";const X=D({__name:"vueRecaptcha",props:{sitekey:{type:String,required:!0},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"light"},hl:{type:String,required:!1},loadingTimeout:{type:Number,required:!1,default:0}},emits:{verify:n=>n!=null&&n!="",error:n=>n,expire:null,fail:null},setup(n,{expose:c,emit:m}){const e=n,y=l(null);let v=null;c({execute:function(){window.grecaptcha.execute(v)},reset:function(){window.grecaptcha.reset(v)}});function p(){v=window.grecaptcha.render(y.value,{sitekey:e.sitekey,theme:e.theme,size:e.size,callback:a=>m("verify",a),"expired-callback":()=>m("expire"),"error-callback":()=>m("fail")})}return N(()=>{window.grecaptcha==null?new Promise((a,h)=>{let o,r=!1;window.recaptchaReady=function(){r||(r=!0,clearTimeout(o),a())};const i="recaptcha-script",f=H=>()=>{var V;r||(r=!0,clearTimeout(o),(V=document.getElementById(i))==null||V.remove(),h(H))};e.loadingTimeout>0&&(o=setTimeout(f("timeout"),e.loadingTimeout));const T=window.document,g=T.createElement("script");g.id=i,g.onerror=f("error"),g.onabort=f("aborted"),g.setAttribute("src",`https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit&hl=${e.hl}&_=${+new Date}`),T.head.appendChild(g)}).then(()=>{p()}).catch(a=>{m("error",a)}):p()}),(a,h)=>(d(),_("div",{ref_key:"recaptchaDiv",ref:y},null,512))}}),W={components:{Header:j,Footer:x,vueRecaptcha:X},setup(){const n=U(),{locale:c}=B(),m=l(""),e=l(""),y=l(""),v=l(""),p=l(""),a=l([]),h=l(!1),o=l(!1),r=l(""),i=async w=>{await I.removeCart(w),a.value=I.getCart()},f=l({contact_name:!1,contact_company:!1,contact_phone:!1,contact_email:!1}),T=()=>{a.value=I.getCart()},g=w=>{r.value=w},H=async()=>{if(!r.value){console.error("Please complete the reCAPTCHA");return}h.value=!0;let w=[];for(let b in a.value){let R=a.value[b].product.product_detail.find(q=>q.language==c.value&&q.meta_key=="title").meta_value??"",z=a.value[b].category.length>0?a.value[b].category[0].get_title_attribute.find(q=>q.language==c.value).meta_value:"";w.push({title:R,category:z,id:a.value[b].product.id})}const M=await J.sendContact({contact_name:m.value,contact_company:e.value,contact_phone:y.value,contact_email:v.value,contact_content:p.value,cart:JSON.stringify(w),recaptcha_token:r.value});if(f.value={contact_name:!1,contact_company:!1,contact_phone:!1,contact_email:!1},M.hasOwnProperty("errors"))for(let b in M.errors)f.value[b]=!0;h.value=!1,M.hasOwnProperty("success")&&(o.value=!0)},V=()=>{n.push({name:"home"})};return N(()=>{T()}),{locale:c,contact_name:m,contact_company:e,contact_phone:y,contact_email:v,contact_content:p,removeCartItem:i,cartItem:a,submitContact:H,errorMsg:f,isModalOpen:o,goHome:V,isSending:h,onVerify:g}}},Y={id:"contact"},Z=t("div",{class:"banner",style:{"background-image":"url('/assets/img/contact_banner.webp')"}},null,-1),G={class:"container"},K={class:"row"},Q={class:"col-12 list",id:"contact_content"},$={class:"row"},tt={class:"col-12 route"},et=t("span",{class:"material-icons"},"",-1),ot=["href"],nt=["href"],ct={class:"col-12"},at={class:"contact-container"},st={class:"row"},lt=["innerHTML"],rt={class:"row"},it={for:"contact_name"},dt={for:"contact_company"},_t={class:"row"},mt={for:"contact_phone"},ht={for:"contact_email"},ut={class:"row"},vt={class:"col-12"},pt={for:"contact_content"},ft={class:"col-12"},gt={class:"contact-container"},yt=t("hr",null,null,-1),wt={class:"row mt-3"},bt={class:"col-12 secondHeading"},kt={key:0,class:"row mt-3"},Ct={class:"row"},Tt={class:"col-10"},Vt=["href"],qt=["href"],Ht=["onClick"],Mt=t("div",null,"X",-1),St=[Mt],Pt={key:1,class:"row mt-3"},It={class:"col-12 askPriceContent"},At=t("hr",null,null,-1),Ft={class:"row mt-3"},Nt={class:"col-12"},Rt={class:"row mt-3"},zt={class:"col-12"},Dt={key:1,class:"btn btn-secondary"},Ot=["src"],Ut=t("div",{class:"contact_bottom"},null,-1),Bt=t("div",{id:"mid_right_shape"},null,-1),Et=t("div",{id:"bottom_left_shape"},null,-1),Lt={key:0,class:"modal",style:{display:"block"}},jt={class:"modal-dialog"},xt={class:"modal-content"},Jt={class:"modal-header"},Xt={class:"modal-title"},Wt={class:"modal-body"},Yt={class:"modal-footer"};function Zt(n,c,m,e,y,v){const p=S("Header"),a=S("vue-recaptcha"),h=S("Footer");return d(),_(F,null,[P(p),t("main",Y,[Z,t("div",G,[t("div",K,[t("div",Q,[t("div",$,[t("div",tt,[et,t("a",{href:`/${e.locale}/`},s(n.$t("header.index")),9,ot),A(" / "),t("a",{href:`/${e.locale}/contact`},s(n.$t("header.contact")),9,nt)]),t("form",null,[t("div",ct,[t("div",at,[t("div",st,[t("div",{class:"col-12 heading",innerHTML:n.$t("contact.heading")},null,8,lt)]),t("div",rt,[t("div",{class:u(["col-sm-6 col-12 required",e.contact_name.length>0?"hasContent":""])},[t("label",it,s(e.contact_name.length==0?n.$t("contact.name"):""),1),k(t("input",{type:"text",id:"contact_name",name:"contact_name","onUpdate:modelValue":c[0]||(c[0]=o=>e.contact_name=o),class:u(["form-control",e.errorMsg.contact_name?"error":""])},null,2),[[C,e.contact_name]])],2),t("div",{class:u(["col-sm-6 col-12 required",e.contact_company.length>0?"hasContent":""])},[t("label",dt,s(e.contact_company.length==0?n.$t("contact.company"):""),1),k(t("input",{type:"text",class:u(["form-control",e.errorMsg.contact_company?"error":""]),id:"contact_company","onUpdate:modelValue":c[1]||(c[1]=o=>e.contact_company=o),name:"contact_company"},null,2),[[C,e.contact_company]])],2)]),t("div",_t,[t("div",{class:u(["col-sm-6 col-12 required",e.contact_phone.length>0?"hasContent":""])},[t("label",mt,s(e.contact_phone.length==0?n.$t("contact.phone"):""),1),k(t("input",{type:"text",class:u(["form-control",e.errorMsg.contact_phone?"error":""]),id:"contact_phone","onUpdate:modelValue":c[2]||(c[2]=o=>e.contact_phone=o),name:"contact_phone"},null,2),[[C,e.contact_phone]])],2),t("div",{class:u(["col-sm-6 col-12 required",e.contact_email.length>0?"hasContent":""])},[t("label",ht,s(e.contact_email.length==0?n.$t("contact.email"):""),1),k(t("input",{type:"email",class:u(["form-control",e.errorMsg.contact_email?"error":""]),id:"contact_email","onUpdate:modelValue":c[3]||(c[3]=o=>e.contact_email=o),name:"contact_email"},null,2),[[C,e.contact_email]])],2)]),t("div",ut,[t("div",vt,[t("label",pt,s(e.contact_content.length==0?n.$t("contact.content"):""),1),k(t("textarea",{class:"form-control",id:"contact_content",name:"contact_content",rows:"15","onUpdate:modelValue":c[4]||(c[4]=o=>e.contact_content=o)},null,512),[[C,e.contact_content]])])])])]),t("div",ft,[t("div",gt,[yt,t("div",wt,[t("div",bt,s(n.$t("contact.askingPrice")),1)]),e.cartItem.length?(d(),_("div",kt,[(d(!0),_(F,null,E(e.cartItem,(o,r)=>(d(),_("div",{class:"col-12 askPriceContent",key:r},[t("div",Ct,[t("div",Tt,[A(" ・"),t("a",{href:`/${e.locale}/product/${o.product.id}`,class:"category"},s(o.category.length>0?o.category[1].get_title_attribute.find(i=>i.language==e.locale).meta_value:""),9,Vt),t("a",{class:"product",href:`/${e.locale}/product/${o.product.id}`},s(o.product.product_detail.find(i=>i.language==e.locale&&i.meta_key=="title").meta_value??""),9,qt)]),t("div",{class:"col-2 remove",onClick:i=>e.removeCartItem(o.product.id)},St,8,Ht)])]))),128))])):(d(),_("div",Pt,[t("div",It,s(n.$t("contact.askingPriceEmpty")),1)])),At,t("div",Ft,[t("div",Nt,[P(a,{sitekey:"6Ldml2YqAAAAAC4kqgtZmD6cJa6tNi_m0fkovXdw",size:"normal",theme:"light",hl:"zh-TW",onVerify:e.onVerify,ref:"vueRecaptcha"},null,8,["onVerify"])])]),t("div",Rt,[t("div",zt,[e.isSending?(d(),_("div",Dt,s(n.$t("contact.isSending")),1)):(d(),_("div",{key:0,class:"btn btn-danger",onClick:c[5]||(c[5]=o=>e.submitContact())},s(n.$t("contact.submit")),1))])])])])])])])]),t("img",{id:"contact_info_pc",src:n.$t("contact.infoImg")},null,8,Ot)]),Ut,Bt,Et]),e.isModalOpen?(d(),_("div",Lt,[t("div",jt,[t("div",xt,[t("div",Jt,[t("h5",Xt,s(n.$t("contact.successTitle")),1),t("button",{type:"button",class:"btn-close",onClick:c[6]||(c[6]=o=>e.goHome())})]),t("div",Wt,[t("p",null,s(n.$t("contact.success")),1)]),t("div",Yt,[t("button",{type:"button",class:"btn btn-secondary",onClick:c[7]||(c[7]=o=>e.goHome())},s(n.$t("contact.close")),1)])])])])):L("",!0),P(h)],64)}const Qt=O(W,[["render",Zt]]);export{Qt as default};