import{_ as f,a as k,u as y,k as D,r as x,o as N,b as v,c as p,d as w,e as b,f as e,h as B,t as c,g as F,F as H,s as T,x as I}from"./index-99b1d56f.js";import{H as L,F as S,a as C}from"./Footer-4b2801d2.js";const V={components:{Header:L,Footer:S},setup(){const{t:s,locale:o}=k(),_=y(),t=D(),d=x({id:"",get_content_attribute:[],get_title_attribute:[]}),l=async()=>{try{const a=await C.getArticleContent({id:t.params.id,type:"news"});d.value=a}catch(a){console.error("Error fetching news detail:",a)}},r=()=>{_.push(`/${o.value}/news`)};return N(()=>{l()}),{t:s,locale:o,newsDetail:d,goBackToList:r}}},i=s=>(T("data-v-ac37ad69"),s=s(),I(),s),M={id:"article"},E=i(()=>e("div",{class:"banner",style:{"background-image":"url('/assets/img/news_banner.webp')"}},null,-1)),R={class:"container"},j={class:"row"},A={class:"col-12 list",id:"article_content"},q={class:"row"},z={class:"col-12 route"},G=i(()=>e("span",{class:"material-icons"},"",-1)),J={key:0,class:"col-12"},K={class:"news-detail"},O={class:"d-flex justify-content-between align-items-center mb-4"},P={class:"mb-0"},Q={class:"news-date"},U=["innerHTML"],W=i(()=>e("div",{id:"mid_right_shape"},null,-1)),X=i(()=>e("div",{id:"bottom_left_shape"},null,-1));function Y(s,o,_,t,d,l){var u,m,h,g;const r=v("Header"),a=v("Footer");return p(),w(H,null,[b(r),e("main",M,[E,e("div",R,[e("div",j,[e("div",A,[e("div",q,[e("div",z,[G,B(" "+c(t.t("header.index"))+" / "+c(t.t("header.news")),1)]),t.newsDetail?(p(),w("div",J,[e("div",K,[e("div",O,[e("h4",P," ▎"+c(((m=(u=t.newsDetail.get_title_attribute)==null?void 0:u.find(n=>n.language===t.locale))==null?void 0:m.meta_value)||""),1),e("div",Q,c(t.newsDetail.created_ts),1)]),e("div",{class:"news-content mb-4",innerHTML:((g=(h=t.newsDetail.get_content_attribute)==null?void 0:h.find(n=>n.language===t.locale))==null?void 0:g.meta_value)||""},null,8,U),e("button",{class:"btn btn-secondary",onClick:o[0]||(o[0]=(...n)=>t.goBackToList&&t.goBackToList(...n))},c(t.t("common.back")),1)])])):F("",!0)])])])]),W,X]),b(a)],64)}const ee=f(V,[["render",Y],["__scopeId","data-v-ac37ad69"]]);export{ee as default};
