import{_ as g,a as h,b as m,c as t,d as o,f as e,t as r,F as u,g as d,e as M,w as v,i as y}from"./index-a1e44d66.js";const b={name:"ProductMenu",props:{categories:{type:Array,required:!0}},setup(){const{t:n,locale:i}=h();return{t:n,locale:i}}},k={class:"col-12 col-lg-2 category"},x={class:"btn btn-primary",id:"productMenuBtn","data-bs-toggle":"collapse",href:"#productMenu",role:"button","aria-expanded":"false","aria-controls":"productMenu"},B={class:"collapse col-12 category",id:"productMenu"},P={class:"title"},N={class:"list-group list-group-flush"},T=["href","aria-controls"],V=["id"];function $(n,i,_,s,w,z){const p=m("router-link");return t(),o("div",k,[e("a",x,r(s.t("common.openMenu")),1),e("div",B,[e("div",null,[e("div",P,r(s.t("product.title")),1),e("ul",N,[(t(!0),o(u,null,d(_.categories,(l,a)=>(t(),o("li",{class:"list-group-item",key:a},[e("a",{"data-bs-toggle":"collapse",href:`#secondMenu_${a}`,role:"button","aria-expanded":"true","aria-controls":`secondMenu_${a}`},r(l.title[s.locale]||l.title.zh_TW),9,T),e("ul",{class:"list-group list-group-flush",id:`secondMenu_${a}`},[(t(!0),o(u,null,d(l.products,(c,f)=>(t(),o("li",{class:"list-group-item",key:f},[M(p,{to:{path:`/product/${c.id}`}},{default:v(()=>[y(r(c.title[s.locale]||c.title.zh_TW),1)]),_:2},1032,["to"])]))),128))],8,V)]))),128))])])])])}const F=g(b,[["render",$],["__scopeId","data-v-ef16a68f"]]);export{F as P};
