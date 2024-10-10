import{_ as f,a as $,r as u,l as k,y as I,o as S,b as y,c as m,d as p,f as s,e as r,w as d,k as c,t as a,F as x,g as w,n as C,p as N,m as L}from"./index-0bde4cc7.js";const O=t=>{let o=JSON.parse(localStorage.getItem("cart"))||[];o.findIndex(e=>e.product.id===t.product.id)===-1&&o.push(t),localStorage.setItem("cart",JSON.stringify(o))},H=()=>JSON.parse(localStorage.getItem("cart"))||[],J=t=>(JSON.parse(localStorage.getItem("cart"))||[]).findIndex(e=>e.product.id==t)!==-1,E=t=>{let o=JSON.parse(localStorage.getItem("cart"))||[],n=o.findIndex(e=>e.product.id==t);n!==-1&&o.splice(n,1),localStorage.setItem("cart",JSON.stringify(o))},F={addCart:O,getCart:H,removeCart:E,checkItemExist:J},b="/assets/img/logo.png";const B={name:"Header",setup(){const{t,locale:o}=$(),n=u([]),e=k(),g=u([{lang:"eng",name:"English"},{lang:"zh_TW",name:"繁體中文"},{lang:"jp",name:"日本語"}]),v=I(()=>e.name==="home"),l=h=>{o.value=h,localStorage.setItem("locale",h)},_=()=>{n.value=F.getCart()};return S(()=>{setInterval(()=>{_()},500)}),{t,locale:o,setLocale:l,localeOptions:g,cartItem:n,isHome:v}}},i=t=>(N("data-v-e25c0e90"),t=t(),L(),t),T={class:"container"},V=i(()=>s("a",{class:"navbar-brand",href:"/"},[s("img",{src:b,alt:""})],-1)),q=i(()=>s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1)),z={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav ml-auto"},A={class:"nav-item"},D={class:"nav-item"},M={class:"nav-link",href:"#"},R={class:"nav-item"},W={class:"nav-item"},Y={class:"nav-item"},G={class:"nav-item"},K={class:"nav-item"},P={class:"nav-link",href:"#"},Q={class:"nav-item"},U={class:"nav-link",href:"#"},X={class:"nav-item ask_price"},Z={class:"nav-link",href:"#"},ss=i(()=>s("span",{class:"material-icons"},"",-1)),ts=i(()=>s("span",null,"詢價",-1)),es={class:"bg-danger header-notify"},as={class:"nav-item language_switch dropdown"},os=i(()=>s("div",{class:"dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[s("span",{class:"material-icons"},""),s("span",{class:"lang_switch_text"},"Language")],-1)),ns={class:"dropdown-menu"},cs=i(()=>s("li",null,[s("a",{class:"dropdown-item",href:"#"},[s("span",{class:"material-icons"},""),s("span",null,"Language")])],-1)),ls=["onClick"];function is(t,o,n,e,g,v){const l=y("router-link");return m(),p("header",{class:C(["navbar navbar-expand-lg",{home:e.isHome}])},[s("div",T,[V,q,s("div",z,[s("ul",j,[s("li",A,[r(l,{class:"nav-link",to:{name:"company"}},{default:d(()=>[c(a(e.t("header.companyIntro")),1)]),_:1})]),s("li",D,[s("a",M,a(e.t("header.product")),1)]),s("li",R,[r(l,{class:"nav-link",to:{name:"spec"}},{default:d(()=>[c(a(e.t("header.productSpec")),1)]),_:1})]),s("li",W,[r(l,{class:"nav-link",to:{name:"equip"}},{default:d(()=>[c(a(e.t("header.techEquipment")),1)]),_:1})]),s("li",Y,[r(l,{class:"nav-link",to:{name:"article"}},{default:d(()=>[c(a(e.t("header.sustainability")),1)]),_:1})]),s("li",G,[r(l,{class:"nav-link",to:{name:"contact"}},{default:d(()=>[c(a(e.t("header.contact")),1)]),_:1})]),s("li",K,[s("a",P,a(e.t("header.recruitment")),1)]),s("li",Q,[s("a",U,a(e.t("header.tradeService")),1)]),s("li",X,[s("a",Z,[ss,ts,s("div",es,a(e.cartItem.length),1)])]),s("li",as,[os,s("ul",ns,[cs,(m(!0),p(x,null,w(e.localeOptions,(_,h)=>(m(),p("li",{key:h},[s("a",{class:"dropdown-item",role:"button",onClick:Ls=>e.setLocale(_.lang)},a(_.name),9,ls)]))),128))])])])])])],2)}const Hs=f(B,[["render",is],["__scopeId","data-v-e25c0e90"]]),rs="/assets/img/fe_logo.png",ds="/assets/img/ac_logo.png",_s={name:"Footer",setup(){}},hs={class:"footer"},ms={class:"container"},ps={class:"row"},gs=s("div",{class:"col-lg-2 d-lg-block d-none"},[s("img",{src:b,class:"mt-4 logo"})],-1),vs={class:"col-lg-3 col-md-6 company_info col-12"},us={class:"h5"},fs={class:"h6"},bs={class:"col-lg-3"},$s={class:"address"},ks=["href"],Is=s("span",{class:"material-icons"},"",-1),Ss=s("span",{class:"material-icons"},"",-1),ys=s("span",{class:"material-icons"},"",-1),xs=s("div",{class:"col-lg-12 group_logo"},[s("img",{src:rs,class:"mt-4"}),s("img",{src:ds,class:"mt-4"})],-1),ws=s("div",{id:"footer_right_shape"},null,-1),Cs=s("div",{class:"copyright text-light"},[s("div",{class:"container"},"Copyright © Li Yun Enterprise Co., Ltd All rights reserved.")],-1);function Ns(t,o,n,e,g,v){return m(),p("footer",hs,[s("div",ms,[s("div",ps,[gs,s("div",vs,[s("p",us,a(t.$t("footer.company")),1),s("p",fs,a(t.$t("footer.intro")),1)]),s("div",bs,[s("div",$s,[s("p",null,a(t.$t("footer.address")),1),s("p",null,[s("a",{href:`mailto:${t.$t("footer.email")}`},[Is,c(a(t.$t("footer.email")),1)],8,ks)]),s("p",null,[Ss,c(a(t.$t("footer.phone")),1)]),s("p",null,[ys,c(a(t.$t("footer.fax")),1)])])]),xs]),ws]),Cs])}const Js=f(_s,[["render",Ns]]);export{Js as F,Hs as H,F as c};
