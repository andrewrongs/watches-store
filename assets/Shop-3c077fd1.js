import{x as Z,a4 as ee,p as ae,Y as w,j as te,i as le,C as ne,U as ie,u as se,l as re,K as oe,s as ue,q as F,n as x,k as b,e as t,E as P,a5 as $,a6 as T,L as N,m as ce,a as de,_ as K,P as q,o as A,c as D,f as u,F as ve,h as fe,d as V,Q as O,g as I,t as S,w as me}from"./index-d4e5e210.js";import{V as E}from"./VRow-83e5ca0e.js";import{V as z}from"./VCol-7450f7fe.js";import{V as ge}from"./VTextField-a0885eec.js";import{V as U}from"./VContainer-c87c2840.js";import{c as pe,m as be,v as he,d as _e,e as xe,x as ye,b as Ve,y as ke,l as Le,u as Pe,a as Ie,V as Se}from"./VImg-15c5136b.js";import{V as y}from"./VBtn-2a791b84.js";import{a as Ce,d as we,e as j}from"./VCard-ce7cd111.js";import{V as $e}from"./VSnackbar-1b4b3f85.js";/* empty css              */import"./index-11bf6bac.js";import"./forwardRefs-98816ae5.js";import"./VOverlay-ebe00293.js";import"./layout-e87d60d6.js";function Ae(){const e=Z([]);ee(()=>e.value=[]);function s(o,h){e.value[h]=o}return{refs:e,updateRef:s}}const Be=ae({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:w,default:"$first"},prevIcon:{type:w,default:"$prev"},nextIcon:{type:w,default:"$next"},lastIcon:{type:w,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...pe(),...be(),...he(),..._e(),...xe(),...ye(),...Ve({tag:"nav"}),...te(),...ke({variant:"text"})},"VPagination"),Re=le()({name:"VPagination",props:Be(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,s){let{slots:o,emit:h}=s;const l=ne(e,"modelValue"),{t:f,n:_}=ie(),{isRtl:r}=se(),{themeClasses:C}=re(e),{width:W}=oe(),B=ue(-1);F(void 0,{scoped:!0});const{resizeRef:G}=Le(a=>{if(!a.length)return;const{target:n,contentRect:i}=a[0],v=n.querySelector(".v-pagination__list > *");if(!v)return;const m=i.width,L=v.offsetWidth+parseFloat(getComputedStyle(v).marginRight)*2;B.value=R(m,L)}),c=x(()=>parseInt(e.length,10)),d=x(()=>parseInt(e.start,10)),g=x(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):B.value>=0?B.value:R(W.value,58));function R(a,n){const i=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-n*i)/n).toFixed(2)))}const H=x(()=>{if(c.value<=0||isNaN(c.value)||c.value>Number.MAX_SAFE_INTEGER)return[];if(g.value<=0)return[];if(g.value===1)return[l.value];if(c.value<=g.value)return $(c.value,d.value);const a=g.value%2===0,n=a?g.value/2:Math.floor(g.value/2),i=a?n:n+1,v=c.value-n;if(i-l.value>=0)return[...$(Math.max(1,g.value-1),d.value),e.ellipsis,c.value];if(l.value-v>=(a?1:0)){const m=g.value-1,L=c.value-m+d.value;return[d.value,e.ellipsis,...$(m,L)]}else{const m=Math.max(1,g.value-3),L=m===1?l.value:l.value-Math.ceil(m/2)+d.value;return[d.value,e.ellipsis,...$(m,L),e.ellipsis,c.value]}});function k(a,n,i){a.preventDefault(),l.value=n,i&&h(i,n)}const{refs:Q,updateRef:X}=Ae();F({VPaginationBtn:{color:b(e,"color"),border:b(e,"border"),density:b(e,"density"),size:b(e,"size"),variant:b(e,"variant"),rounded:b(e,"rounded"),elevation:b(e,"elevation")}});const Y=x(()=>H.value.map((a,n)=>{const i=v=>X(v,n);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${n}`,page:a,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const v=a===l.value;return{isActive:v,key:a,page:_(a),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:v?e.activeColor:e.color,"aria-current":v,"aria-label":f(v?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:m=>k(m,a)}}}})),p=x(()=>{const a=!!e.disabled||l.value<=d.value,n=!!e.disabled||l.value>=d.value+c.value-1;return{first:e.showFirstLastPage?{icon:r.value?e.lastIcon:e.firstIcon,onClick:i=>k(i,d.value,"first"),disabled:a,"aria-label":f(e.firstAriaLabel),"aria-disabled":a}:void 0,prev:{icon:r.value?e.nextIcon:e.prevIcon,onClick:i=>k(i,l.value-1,"prev"),disabled:a,"aria-label":f(e.previousAriaLabel),"aria-disabled":a},next:{icon:r.value?e.prevIcon:e.nextIcon,onClick:i=>k(i,l.value+1,"next"),disabled:n,"aria-label":f(e.nextAriaLabel),"aria-disabled":n},last:e.showFirstLastPage?{icon:r.value?e.firstIcon:e.lastIcon,onClick:i=>k(i,d.value+c.value-1,"last"),disabled:n,"aria-label":f(e.lastAriaLabel),"aria-disabled":n}:void 0}});function M(){var n;const a=l.value-d.value;(n=Q.value[a])==null||n.$el.focus()}function J(a){a.key===T.left&&!e.disabled&&l.value>+e.start?(l.value=l.value-1,N(M)):a.key===T.right&&!e.disabled&&l.value<d.value+c.value-1&&(l.value=l.value+1,N(M))}return Pe(()=>t(e.tag,{ref:G,class:["v-pagination",C.value,e.class],style:e.style,role:"navigation","aria-label":f(e.ariaLabel),onKeydown:J,"data-test":"v-pagination-root"},{default:()=>[t("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[o.first?o.first(p.value.first):t(y,P({_as:"VPaginationBtn"},p.value.first),null)]),t("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[o.prev?o.prev(p.value.prev):t(y,P({_as:"VPaginationBtn"},p.value.prev),null)]),Y.value.map((a,n)=>t("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[o.item?o.item(a):t(y,P({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),t("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[o.next?o.next(p.value.next):t(y,P({_as:"VPaginationBtn"},p.value.next),null)]),e.showFirstLastPage&&t("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[o.last?o.last(p.value.last):t(y,P({_as:"VPaginationBtn"},p.value.last),null)])])]})),{}}}),Me={data(){return{search:"",page:1,maxitem:12,snackbar:!1,snackbarText:"",items:[{title:this.$t("Home"),disabled:!1,href:""},{title:this.$t("Item"),disabled:!0,href:""}]}},methods:{addToCart(e){this.addItem(e),this.showSnackbar(`${e.title} 已成功加入購物車`)},showSnackbar(e){this.snackbarText=e,this.snackbar=!0},...ce("cart",["addItem"])},computed:{totalItem(){return this.searching.length},displayItem(){const e=(this.page-1)*this.maxitem,s=e+this.maxitem;return this.searching.slice(e,s)},searching(){const e=this.totalItems;if(!this.search)return e;const s=this.search.toLowerCase();return e.filter(o=>o.title.toLowerCase().indexOf(s)>-1)},totalItems(){return this.itemList},...de("cart",["itemList","cartItem"])},watch:{page(e,s){e!==s&&window.scrollTo(0,0)}}},Fe=V("br",null,null,-1),Te={class:"d-flex justify-space-between align-items-center"},Ne={class:"d-flex flex-column justify-end pr-4"},De={class:"text-center"},Ee=V("br",null,null,-1);function ze(e,s,o,h,l,f){const _=q("router-link");return A(),D("div",null,[Fe,t(U,null,{default:u(()=>[t(E,null,{default:u(()=>[t(z,{cols:"12",sm:"8",md:"6",class:"mx-auto"},{default:u(()=>[t(ge,{"prepend-inner-icon":"mdi-magnify","single-line":"",clearable:"","hide-details":"",label:"搜尋商品...",modelValue:l.search,"onUpdate:modelValue":s[0]||(s[0]=r=>l.search=r),variant:"outlined",class:"rounded-lg"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(U,null,{default:u(()=>[t(E,null,{default:u(()=>[(A(!0),D(ve,null,fe(f.displayItem,r=>(A(),O(z,{key:r.id,cols:"12",sm:"8",md:"4",class:"mx-auto text-center"},{default:u(()=>[t(Ce,{height:"100%",class:"itemData",link:""},{default:u(()=>[t(_,{to:{name:"ShopItem",params:{id:r.id}}},{default:u(()=>[t(Ie,{src:r.img},null,8,["src"])]),_:2},1032,["to"]),V("div",Te,[V("div",null,[t(_,{to:{name:"ShopItem",params:{id:r.id}},class:"d-flex flex-column"},{default:u(()=>[t(we,{class:"mt-3 pl-6 text-l",style:{color:"#000"}},{default:u(()=>[I(S(r.title),1)]),_:2},1024),t(j,{class:"mt-3 pl-6 text-l",style:{color:"#000"}},{default:u(()=>[I(S(r.description),1)]),_:2},1024),t(j,{class:"pb-7 mt-3 pl-6 text-l",style:{color:"#000"}},{default:u(()=>[I(S(`${e.$t("Price")} $${r.prices}`),1)]),_:2},1024)]),_:2},1032,["to"])]),V("div",Ne,[t(y,{class:"mb-7 textAdd",onClick:me(C=>f.addToCart(r),["prevent"])},{default:u(()=>[I("+"+S(e.$t("Add")),1),t(Se,null,{default:u(()=>[I("mdi-shopping-outline")]),_:1})]),_:2},1032,["onClick"])]),t($e,{modelValue:l.snackbar,"onUpdate:modelValue":s[1]||(s[1]=C=>l.snackbar=C),timeout:1500,color:"success"},{default:u(()=>[V("div",De,S(l.snackbarText),1)]),_:1},8,["modelValue"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),Ee,t(Re,{modelValue:l.page,"onUpdate:modelValue":s[2]||(s[2]=r=>l.page=r),length:Math.ceil(f.totalItem/l.maxitem),class:"pb-10"},null,8,["modelValue","length"])]),_:1})])}const Ue=K(Me,[["render",ze]]),je={components:{ShopMain:Ue}};function Ke(e,s,o,h,l,f){const _=q("Shop-Main");return A(),O(_)}const na=K(je,[["render",Ke]]);export{na as default};