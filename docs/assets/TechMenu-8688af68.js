import{_,a as i,l as u,b as d,c as p,d as h,f as e,e as c,w as a,k as n,p as f,m as g}from"./index-343d968d.js";const m={name:"techMenu",setup(){const{t,locale:s}=i();return{currentCategory:u().query.category,locale:s}}},l=t=>(f("data-v-f62c6a05"),t=t(),g(),t),v={class:"col-12 col-lg-2 category"},y=l(()=>e("a",{class:"btn btn-primary",id:"techMenuBtn","data-bs-toggle":"collapse",href:"#techMenu",role:"button","aria-expanded":"false","aria-controls":"techMenu"}," 開啟分類選單 ",-1)),x={class:"collapse col-12 category",id:"techMenu"},M=l(()=>e("div",{class:"title"}," 技術設備 ",-1)),b={class:"list-group list-group-flush"},k={class:"list-group-item"},I={class:"list-group-item"};function B(t,s,r,C,T,$){const o=d("router-link");return p(),h("div",v,[y,e("div",x,[e("div",null,[M,e("ul",b,[e("li",k,[c(o,{to:"tech"},{default:a(()=>[n("專業技術")]),_:1})]),e("li",I,[c(o,{to:"equip"},{default:a(()=>[n("核心設備")]),_:1})])])])])])}const N=_(m,[["render",B],["__scopeId","data-v-f62c6a05"]]);export{N as T};
