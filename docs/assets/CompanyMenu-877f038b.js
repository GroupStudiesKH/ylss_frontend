import{_,a as i,l as p,b as u,c as d,d as m,f as e,e as s,w as a,k as c,p as y,m as g}from"./index-343d968d.js";const h={name:"companyMenu",setup(){const{t,locale:n}=i();return{currentCategory:p().query.category,locale:n}}},l=t=>(y("data-v-e3ee7730"),t=t(),g(),t),f={class:"col-12 col-lg-2 category"},v=l(()=>e("a",{class:"btn btn-primary",id:"companyMenuBtn","data-bs-toggle":"collapse",href:"#companyMenu",role:"button","aria-expanded":"false","aria-controls":"companyMenu"}," 開啟分類選單 ",-1)),x={class:"collapse col-12 category",id:"companyMenu"},C=l(()=>e("div",{class:"title"}," 公司介紹 ",-1)),M={class:"list-group list-group-flush"},b={class:"list-group-item"},k={class:"list-group-item"},I={class:"list-group-item"};function B(t,n,r,$,w,N){const o=u("router-link");return d(),m("div",f,[v,e("div",x,[e("div",null,[C,e("ul",M,[e("li",b,[s(o,{to:"company"},{default:a(()=>[c("關於遠龍")]),_:1})]),e("li",k,[s(o,{to:"quality"},{default:a(()=>[c("品質政策")]),_:1})]),e("li",I,[s(o,{to:"cert"},{default:a(()=>[c("標準認證")]),_:1})])])])])])}const V=_(h,[["render",B],["__scopeId","data-v-e3ee7730"]]);export{V as C};
