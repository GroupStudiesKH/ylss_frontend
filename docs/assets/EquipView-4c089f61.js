import{_ as w,a as f,r as u,b as g,c as n,d as i,e as _,f as s,h as a,t as l,g as c,w as k,T as q,F as M,n as x,m as z}from"./index-08574818.js";import{H as y,F}from"./Footer-09dfd79b.js";import{T as C}from"./TechMenu-89bb345e.js";const T="/assets/img/zm1.webp",V="/assets/img/ba2.webp",E="/assets/img/spl.webp",H="/assets/img/tll.webp",N="/assets/img/sl.webp",B={components:{Header:y,Footer:F,TechMenu:C},setup(){const{t:p,locale:t}=f(),r=u(null),o=u(!1),d=u(!1);return{t:p,locale:t,selectedImage:r,showModal:o,isFullscreen:d,openModal:(m,h=!1)=>{r.value=m,o.value=!0,d.value=h},closeModal:()=>{o.value=!1,d.value=!1}}}},I={id:"equip"},D=s("div",{class:"banner",style:{"background-image":"url('/assets/img/tech_banner.webp')"}},null,-1),S={class:"container"},j={class:"row"},A={class:"col-12 col-lg-10 list",id:"tech_content"},G={class:"row"},J={class:"col-12 route"},K=s("span",{class:"material-icons"},"",-1),L={class:"col-12"},O={class:"row"},P={class:"col-6 col-lg-7"},Q=s("div",{class:"material-icons",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white","font-size":"48px","z-index":"2"}},"",-1),R=s("img",{class:"w-100",src:T},null,-1),U=[Q,R],W={class:"col-6 col-lg-5"},X={key:0,class:"sub-heading"},Y=s("br",null,null,-1),Z={class:"row mt-3"},$={class:"col-6 col-lg-7"},ss=s("div",{class:"material-icons",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white","font-size":"48px","z-index":"2"}},"",-1),os=s("img",{class:"w-100",src:V},null,-1),ls=[ss,os],ts={class:"col-6 col-lg-5"},es={key:0,class:"sub-heading"},ns=s("br",null,null,-1),is={class:"row mt-3"},as={class:"col-6 col-lg-7"},cs=s("div",{class:"material-icons",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white","font-size":"48px","z-index":"2"}},"",-1),ds=s("img",{class:"w-100",src:E},null,-1),_s=[cs,ds],rs={class:"col-6 col-lg-5"},ms={key:0,class:"sub-heading"},hs=s("br",null,null,-1),us={class:"row mt-3"},gs={class:"col-6 col-lg-7"},ps=s("div",{class:"material-icons",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white","font-size":"48px","z-index":"2"}},"",-1),vs=s("img",{class:"w-100",src:H},null,-1),bs=[ps,vs],ws={class:"col-6 col-lg-5"},fs={key:0,class:"sub-heading"},ks=s("br",null,null,-1),qs={class:"row mt-3"},Ms={class:"col-6 col-lg-7"},xs=s("div",{class:"material-icons",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white","font-size":"48px","z-index":"2"}},"",-1),zs=s("img",{class:"w-100",src:N},null,-1),ys=[xs,zs],Fs={class:"col-6 col-lg-5"},Cs={key:0,class:"sub-heading"},Ts=s("br",null,null,-1),Vs=s("div",{id:"mid_right_shape"},null,-1),Es=s("div",{id:"bottom_left_shape"},null,-1),Hs=["src"];function Ns(p,t,r,o,d,b){const v=g("Header"),m=g("TechMenu"),h=g("Footer");return n(),i(M,null,[_(v),s("main",I,[D,s("div",S,[s("div",j,[_(m),s("div",A,[s("div",G,[s("div",J,[K,a(" "+l(o.t("header.index"))+" / "+l(o.t("header.techEquipment"))+" / "+l(o.t("equip.title")),1)]),s("div",L,[s("div",O,[s("div",P,[s("div",{class:"clickable-image",onClick:t[0]||(t[0]=e=>o.openModal("/assets/img/zm1.webp"))},U)]),s("div",W,[s("h4",null,"▎"+l(o.t("equip.zm1.title")),1),o.locale!="eng"?(n(),i("h5",X,l(o.t("equip.zm1.phase1")),1)):c("",!0),s("p",null,[s("strong",null,l(o.t("common.mainFunc"))+":",1),Y,a(l(o.t("equip.zm1.phase2")),1)])])]),s("div",Z,[s("div",$,[s("div",{class:"clickable-image",onClick:t[1]||(t[1]=e=>o.openModal("/assets/img/ba2.webp"))},ls)]),s("div",ts,[s("h4",null,"▎"+l(o.t("equip.ba.title")),1),o.locale!="eng"?(n(),i("h5",es,l(o.t("equip.ba.phase1")),1)):c("",!0),s("p",null,[s("strong",null,l(o.t("common.mainFunc"))+":",1),ns,a(l(o.t("equip.ba.phase2")),1)])])]),s("div",is,[s("div",as,[s("div",{class:"clickable-image",onClick:t[2]||(t[2]=e=>o.openModal("/assets/img/spl.webp"))},_s)]),s("div",rs,[s("h4",null,"▎"+l(o.t("equip.spl.title")),1),o.locale!="eng"?(n(),i("h5",ms,l(o.t("equip.spl.phase1")),1)):c("",!0),s("p",null,[s("strong",null,l(o.t("common.mainFunc"))+":",1),hs,a(l(o.t("equip.spl.phase2")),1)])])]),s("div",us,[s("div",gs,[s("div",{class:"clickable-image",onClick:t[3]||(t[3]=e=>o.openModal("/assets/img/tll.webp",!0))},bs)]),s("div",ws,[s("h4",null,"▎"+l(o.t("equip.tll.title")),1),o.locale!="eng"?(n(),i("h5",fs,l(o.t("equip.tll.phase1")),1)):c("",!0),s("p",null,[s("strong",null,l(o.t("common.mainFunc"))+":",1),ks,a(l(o.t("equip.tll.phase2")),1)])])]),s("div",qs,[s("div",Ms,[s("div",{class:"clickable-image",onClick:t[4]||(t[4]=e=>o.openModal("/assets/img/sl.webp"))},ys)]),s("div",Fs,[s("h4",null,"▎"+l(o.t("equip.sl.title")),1),o.locale!="eng"?(n(),i("h5",Cs,l(o.t("equip.sl.phase1")),1)):c("",!0),s("p",null,[s("strong",null,l(o.t("common.mainFunc"))+":",1),Ts,a(l(o.t("equip.sl.phase2")),1)])])])])])])])]),Vs,Es,_(q,{name:"fade"},{default:k(()=>[o.showModal?(n(),i("div",{key:0,class:"modal-overlay",onClick:t[7]||(t[7]=(...e)=>o.closeModal&&o.closeModal(...e))},[s("div",{class:x(["modal-content",{"w-90":o.isFullscreen}]),onClick:t[6]||(t[6]=z(()=>{},["stop"]))},[s("img",{src:o.selectedImage,alt:"Enlarged image",class:"modal-image"},null,8,Hs),s("div",{class:"close-button",onClick:t[5]||(t[5]=(...e)=>o.closeModal&&o.closeModal(...e))},"×")],2)])):c("",!0)]),_:1})]),_(h)],64)}const Ss=w(B,[["render",Ns]]);export{Ss as default};