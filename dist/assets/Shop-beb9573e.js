import{b as X,m as Z,o as ee,c as te,d as ae,p as ie,a as le,q as ne,u as se,_ as j,V as re}from"./VAvatar-6a2b059e.js";import{V as M}from"./VRow-eb052509.js";import{V as N}from"./VCol-0789d14f.js";import{V as oe}from"./VTextField-d992a3b0.js";import{V as E}from"./VContainer-3bdba5f4.js";import{r as ue,V as ce,p as de,P as V,m as ge,g as pe,i as me,L as fe,u as ve,a as he,W as be,s as _e,d as q,b,t as h,c as i,k as S,X as C,Y as z,S as D,E as G,x as L,G as F,z as g,H as ye,I as xe,B as P,y as J,A as $,D as R}from"./index-c2b80dfa.js";import{u as we}from"./group-b9b90c12.js";import{V as _}from"./VBtn-c49c062c.js";import{V as ke,c as Se,d as Ve}from"./VCard-c3805857.js";/* empty css              */import"./index-36ffb4e1.js";import"./forwardRefs-e658ad70.js";function Ce(){const e=ue([]);ce(()=>e.value=[]);function s(r,y){e.value[y]=r}return{refs:e,updateRef:s}}const Le=de({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:V,default:"$first"},prevIcon:{type:V,default:"$prev"},nextIcon:{type:V,default:"$next"},lastIcon:{type:V,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...X(),...Z(),...ee(),...te(),...ae(),...ie(),...le({tag:"nav"}),...ge(),...ne({variant:"text"})},"VPagination"),Pe=pe()({name:"VPagination",props:Le(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,s){let{slots:r,emit:y}=s;const a=me(e,"modelValue"),{t:p,n:x}=fe(),{isRtl:o}=ve(),{themeClasses:T}=he(e),{width:W}=be(),A=_e(-1);q(void 0,{scoped:!0});const{resizeRef:Y}=we(t=>{if(!t.length)return;const{target:l,contentRect:n}=t[0],d=l.querySelector(".v-pagination__list > *");if(!d)return;const m=n.width,k=d.offsetWidth+parseFloat(getComputedStyle(d).marginRight)*2;A.value=I(m,k)}),u=b(()=>parseInt(e.length,10)),c=b(()=>parseInt(e.start,10)),f=b(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):A.value>=0?A.value:I(W.value,58));function I(t,l){const n=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((t-l*n)/l).toFixed(2)))}const K=b(()=>{if(u.value<=0||isNaN(u.value)||u.value>Number.MAX_SAFE_INTEGER)return[];if(f.value<=0)return[];if(f.value===1)return[a.value];if(u.value<=f.value)return C(u.value,c.value);const t=f.value%2===0,l=t?f.value/2:Math.floor(f.value/2),n=t?l:l+1,d=u.value-l;if(n-a.value>=0)return[...C(Math.max(1,f.value-1),c.value),e.ellipsis,u.value];if(a.value-d>=(t?1:0)){const m=f.value-1,k=u.value-m+c.value;return[c.value,e.ellipsis,...C(m,k)]}else{const m=Math.max(1,f.value-3),k=m===1?a.value:a.value-Math.ceil(m/2)+c.value;return[c.value,e.ellipsis,...C(m,k),e.ellipsis,u.value]}});function w(t,l,n){t.preventDefault(),a.value=l,n&&y(n,l)}const{refs:U,updateRef:O}=Ce();q({VPaginationBtn:{color:h(e,"color"),border:h(e,"border"),density:h(e,"density"),size:h(e,"size"),variant:h(e,"variant"),rounded:h(e,"rounded"),elevation:h(e,"elevation")}});const H=b(()=>K.value.map((t,l)=>{const n=d=>O(d,l);if(typeof t=="string")return{isActive:!1,key:`ellipsis-${l}`,page:t,props:{ref:n,ellipsis:!0,icon:!0,disabled:!0}};{const d=t===a.value;return{isActive:d,key:t,page:x(t),props:{ref:n,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:d?e.activeColor:e.color,"aria-current":d,"aria-label":p(d?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:m=>w(m,t)}}}})),v=b(()=>{const t=!!e.disabled||a.value<=c.value,l=!!e.disabled||a.value>=c.value+u.value-1;return{first:e.showFirstLastPage?{icon:o.value?e.lastIcon:e.firstIcon,onClick:n=>w(n,c.value,"first"),disabled:t,"aria-label":p(e.firstAriaLabel),"aria-disabled":t}:void 0,prev:{icon:o.value?e.nextIcon:e.prevIcon,onClick:n=>w(n,a.value-1,"prev"),disabled:t,"aria-label":p(e.previousAriaLabel),"aria-disabled":t},next:{icon:o.value?e.prevIcon:e.nextIcon,onClick:n=>w(n,a.value+1,"next"),disabled:l,"aria-label":p(e.nextAriaLabel),"aria-disabled":l},last:e.showFirstLastPage?{icon:o.value?e.firstIcon:e.lastIcon,onClick:n=>w(n,c.value+u.value-1,"last"),disabled:l,"aria-label":p(e.lastAriaLabel),"aria-disabled":l}:void 0}});function B(){var l;const t=a.value-c.value;(l=U.value[t])==null||l.$el.focus()}function Q(t){t.key===z.left&&!e.disabled&&a.value>+e.start?(a.value=a.value-1,D(B)):t.key===z.right&&!e.disabled&&a.value<c.value+u.value-1&&(a.value=a.value+1,D(B))}return se(()=>i(e.tag,{ref:Y,class:["v-pagination",T.value,e.class],style:e.style,role:"navigation","aria-label":p(e.ariaLabel),onKeydown:Q,"data-test":"v-pagination-root"},{default:()=>[i("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&i("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[r.first?r.first(v.value.first):i(_,S({_as:"VPaginationBtn"},v.value.first),null)]),i("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[r.prev?r.prev(v.value.prev):i(_,S({_as:"VPaginationBtn"},v.value.prev),null)]),H.value.map((t,l)=>i("li",{key:t.key,class:["v-pagination__item",{"v-pagination__item--is-active":t.isActive}],"data-test":"v-pagination-item"},[r.item?r.item(t):i(_,S({_as:"VPaginationBtn"},t.props),{default:()=>[t.page]})])),i("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[r.next?r.next(v.value.next):i(_,S({_as:"VPaginationBtn"},v.value.next),null)]),e.showFirstLastPage&&i("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[r.last?r.last(v.value.last):i(_,S({_as:"VPaginationBtn"},v.value.last),null)])])]})),{}}}),Ae={data(){return{search:"",items:[{id:1,title:"Ga1",img:"https://watchesbysjx.com/wp-content/uploads/2023/06/Seiko-King-Seiko-SJE091-black-dial-lifestyle.jpg",prices:"$8800"},{id:2,title:"Ga2",img:"https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-pocket-watch-on-the-book-image_864572.jpg",prices:"$7800"},{id:3,title:"Gte3",img:"https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-pocket-watch-on-the-book-image_864572.jpg",prices:"$7500"},{id:4,title:"Ga3",img:"https://watchesbysjx.com/wp-content/uploads/2023/06/Seiko-King-Seiko-SJE091-black-dial-lifestyle.jpg",prices:"$6800"},{id:5,title:"SUR461",img:"https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",prices:"$12800"},{id:6,title:"Ga5",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",prices:"$5600"},{id:7,title:"Ga6",img:"https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",prices:"$4999"},{id:8,title:"Az1",img:"https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-pocket-watch-on-the-book-image_864572.jpg",prices:"$7999"},{id:9,title:"Az3",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",prices:"$12000"},{id:10,title:"SPB329",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",prices:"$14999"},{id:11,title:"Az7",img:"https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",prices:"$8990"},{id:12,title:"SPB381",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",prices:22},{id:13,title:"SPB417",img:"https://img.pchome.com.tw/cs/items/DIACOKA900FH3WQ/000001_1682995490.jpg?width=480",prices:"$16300"},{id:14,title:"SSJ013",img:"https://img.pchome.com.tw/cs/items/DIACOKA900FH3WQ/000001_1682995490.jpg?width=480",prices:19},{id:15,title:"SJE089",img:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/31/realtime/26713691.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=800",prices:"$8999"},{id:16,title:"SSB401",img:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/10/31/realtime/26713691.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=800",prices:"$19000"},{id:17,title:"SSA426",img:"https://up.bizhitupian.com/pic_360/f5/2d/05/f52d05e98ed28d8e526269f7e3245460.jpg",prices:"$9000"},{id:18,title:"SUR472",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLwD92x9hC1mMir98_N1wK4D31vqJYx1r2l9CPcCwFz_sECiD89J-NMBcC6LfpuxM6gE&usqp=CAU",prices:"$8800"},{id:15,title:"SJE089",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",prices:"$8999"},{id:16,title:"SSB401",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqq2x-yl531gz1Hm5cYO5E5tcE_0IBTY6k472dwz0mA&s",prices:"$19000"}],page:1,maxitem:8}},computed:{totalItem(){return this.searching.length},displayItem(){const e=(this.page-1)*this.maxitem,s=e+this.maxitem;return this.searching.slice(e,s)},searching(){if(!this.search)return this.items;const e=this.search.toLowerCase();return this.items.filter(s=>s.title.toLowerCase().indexOf(e)>-1)}},watch:{page(e,s){e!==s&&window.scrollTo(0,0)}}},$e=P("br",null,null,-1),Ie=P("h3",{class:"left"},"首頁 / 全部商品",-1),Be=P("br",null,null,-1),Me=P("br",null,null,-1);function Ne(e,s,r,y,a,p){const x=G("router-link");return L(),F("div",null,[$e,Ie,Be,i(E,null,{default:g(()=>[i(M,null,{default:g(()=>[i(N,null,{default:g(()=>[i(oe,{"prepend-inner-icon":"mdi-magnify","single-line":"",clearable:"","hide-details":"",label:"Search Products...",modelValue:a.search,"onUpdate:modelValue":s[0]||(s[0]=o=>a.search=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),i(E,null,{default:g(()=>[i(M,null,{default:g(()=>[(L(!0),F(ye,null,xe(p.displayItem,o=>(L(),J(N,{key:o.id,cols:"12",sm:"6",md:"3",class:"mx-auto text-center"},{default:g(()=>[i(ke,{height:"100%",class:"pic",link:""},{default:g(()=>[i(x,{to:{name:"ShopItem",params:{id:o.id}}},{default:g(()=>[i(re,{src:o.img},null,8,["src"]),i(Se,{class:"mt-3"},{default:g(()=>[$(R(o.title),1)]),_:2},1024),i(Ve,null,{default:g(()=>[$("價格 ： "+R(o.prices),1)]),_:2},1024)]),_:2},1032,["to"]),i(_,{class:"mt-5 mb-7"},{default:g(()=>[$("+ 加入")]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1}),Me,i(Pe,{modelValue:a.page,"onUpdate:modelValue":s[1]||(s[1]=o=>a.page=o),length:Math.ceil(p.totalItem/a.maxitem),class:"pb-10"},null,8,["modelValue","length"])]),_:1})])}const Ee=j(Ae,[["render",Ne]]),qe={components:{ShopMain:Ee}};function ze(e,s,r,y,a,p){const x=G("Shop-Main");return L(),J(x)}const He=j(qe,[["render",ze]]);export{He as default};
