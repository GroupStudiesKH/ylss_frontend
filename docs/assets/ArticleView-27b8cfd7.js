import{_ as y,a as M,k as A,r as v,o as k,c as h,d as m,f as t,t as r,F as L,j as w,b as f,e as p,h as E}from"./index-5ca54171.js";import{a as x,H as F,F as H}from"./Footer-b752182f.js";const $={name:"articleMenu",setup(){const{t:i,locale:l}=M(),a=A().query.category,e=v([]),n=async()=>{try{e.value=await x.getArticle("csr")}catch(_){console.error("Error fetching article lists:",_)}};return k(()=>{n()}),{t:i,currentCategory:a,locale:l,articleLists:e}}},B={class:"col-12 col-lg-2 category"},C={class:"btn btn-primary",id:"articleMenuBtn","data-bs-toggle":"collapse",href:"#articleMenu",role:"button","aria-expanded":"false","aria-controls":"articleMenu"},N={class:"collapse col-12 category",id:"articleMenu"},T={class:"title"},V={class:"list-group list-group-flush"},S=["href"];function q(i,l,a,e,n,_){return h(),m("div",B,[t("a",C,r(e.t("common.openMenu")),1),t("div",N,[t("div",null,[t("div",T,r(e.t("header.sustainability")),1),t("ul",V,[(h(!0),m(L,null,w(e.articleLists,(o,u)=>{var s;return h(),m("li",{class:"list-group-item",key:u},[t("a",{href:`/${e.locale}/article/${o.id}`},r(((s=o.get_title_attribute.find(c=>c.language===e.locale))==null?void 0:s.meta_value)||""),9,S)])}),128))])])])])}const D=y($,[["render",q]]),I={components:{Header:F,Footer:H,ArticleMenu:D},setup(){const{t:i,locale:l}=M(),a=v({id:"",get_content_attribute:[],get_title_attribute:[]}),e=A(),n=v(e.params.id),_=async()=>{try{const o={type:"csr"};n.value&&(o.id=n.value),a.value=await x.getArticleContent(o),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("#article_content").forEach(s=>{const c=s.getElementsByTagName("a");for(let g of c)g.setAttribute("target","_blank")})})}catch(o){console.error("Error fetching article content:",o)}};return k(()=>{_()}),{t:i,locale:l,article:a}}},j={id:"article"},O=t("div",{class:"banner",style:{"background-image":"url('/assets/img/article_banner.webp')"}},null,-1),R={class:"container"},z={class:"row"},G={class:"col-12 col-lg-10 list",id:"article_content"},J={class:"row"},K={class:"col-12 route"},P=t("span",{class:"material-icons"},"",-1),Q={class:"col-12"},U=["innerHTML"],W=t("div",{id:"mid_right_shape"},null,-1),X=t("div",{id:"bottom_left_shape"},null,-1);function Y(i,l,a,e,n,_){var c,g,b;const o=f("Header"),u=f("ArticleMenu"),s=f("Footer");return h(),m(L,null,[p(o),t("main",j,[O,t("div",R,[t("div",z,[p(u),t("div",G,[t("div",J,[t("div",K,[P,E(" "+r(e.t("header.index"))+" / "+r(((c=e.article.get_title_attribute.find(d=>d.language===e.locale))==null?void 0:c.meta_value)||""),1)]),t("div",Q,[t("h4",null,"▎"+r(((g=e.article.get_title_attribute.find(d=>d.language===e.locale))==null?void 0:g.meta_value)||""),1),t("div",{innerHTML:((b=e.article.get_content_attribute.find(d=>d.language===e.locale))==null?void 0:b.meta_value)||""},null,8,U)])])])])]),W,X]),p(s)],64)}const et=y(I,[["render",Y]]);export{et as default};
