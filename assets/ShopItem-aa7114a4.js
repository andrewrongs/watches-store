import{m as I,a as w,_ as V,P as _,o as m,c as p,e as t,f as e,g as o,t as a,d as s,F as h,h as x,W as S,$ as g,w as y,Q as T}from"./index-d4e5e210.js";import{V as B}from"./VRow-83e5ca0e.js";import{V as b}from"./VCol-7450f7fe.js";import{a as M,V as i}from"./VImg-15c5136b.js";import{a as N}from"./VCard-ce7cd111.js";import{V as C}from"./VBtn-2a791b84.js";import{V as A}from"./VSnackbar-1b4b3f85.js";import{V as D}from"./VContainer-c87c2840.js";/* empty css              */import"./VOverlay-ebe00293.js";import"./forwardRefs-98816ae5.js";import"./layout-e87d60d6.js";const F={name:"Info",data(){return{count:1,snackbar:!1,snackbarText:"",product:{id:999,title:"【藍水晶】Zxc 水行俠獨裁者",description:"Perpetual1908現提供950鉑金款式，配備冰藍色錶面。冰藍色是我們專為950鉑金腕錶設計的色彩。錶面飾有穀粒紋，立體圖案流轉靈動光澤，舉手投足間光芒四射。新款1908別具匠心，個性鮮明，可謂賞心悅目的傑作。",descriptionItem:[{name:"3285型機芯 一枚機芯，兩個時區"},{name:"銀色鋁合金外殼"},{name:"950鉑金腕錶 冰藍色錶面"}],notice:["此商品為近期熱門因此每隻帳號限購五隻","商品訂購後, 開始製作, 需等待30天工作日"],img:"https://img.pchome.com.tw/cs/items/DIACOKA900FH3WQ/000001_1682995490.jpg?width=480",prices:"16300"}}},methods:{increaseCount(){this.count++},decreaseCount(){this.count>0&&this.count--},showSnackbar(l){this.snackbarText=l,this.snackbar=!0},addToCart(){const l={...this.product,count:this.count};this.addItem(l),this.showSnackbar(`${this.product.title} 已成功加入購物車`)},...I("cart",["addItem"])},computed:{...w("cart",["itemList","cartItem"])}},j=s("br",null,null,-1),L={class:"mt-6 d-flex align-center",style:{color:"#fdd835"}},P={class:"mt-6"},Q={class:"mt-6"},W=s("br",null,null,-1),z=s("br",null,null,-1),E=s("br",null,null,-1),H=s("br",null,null,-1),K={class:"mt-12"},O={class:"mt-6 itemCount text-h6"},R={class:"mt-6 fz-12",style:{color:"#c62828"}},U={class:"mt-6 d-flex justify-space-between"},Z={class:"text-center"},$={class:"mt-12 text-center mb-12",style:{color:"#0d47a1"}};function q(l,r,v,k,n,d){const u=_("v-title"),f=_("v-text");return m(),p(h,null,[j,t(D,null,{default:e(()=>[t(B,{class:"box-container mb-5"},{default:e(()=>[t(b,{cols:"12",md:"6",class:""},{default:e(()=>[t(M,{src:n.product.img},null,8,["src"])]),_:1}),t(b,{cols:"12",md:"6",class:"mt-6"},{default:e(()=>[t(u,{class:"text-h4 word"},{default:e(()=>[o(a(n.product.title),1)]),_:1}),s("div",L,[t(i,null,{default:e(()=>[o("mdi-star")]),_:1}),t(i,null,{default:e(()=>[o("mdi-star")]),_:1}),t(i,null,{default:e(()=>[o("mdi-star")]),_:1}),t(i,null,{default:e(()=>[o("mdi-star")]),_:1}),t(i,null,{default:e(()=>[o("mdi-star")]),_:1}),t(f,{class:"ml-2",style:{color:"black"}},{default:e(()=>[o("5.0 (30 評價)")]),_:1})]),s("div",P,a(n.product.price),1),s("div",Q,a(n.product.notice[1]),1),t(N,{class:"mt-12 pt-6 pl-6 pr-6 pb-6"},{default:e(()=>[t(u,{class:"text-h6"},{default:e(()=>[o(a(l.$t("Introduce")),1)]),_:1}),W,z,t(f,{class:"mb"},{default:e(()=>[o(a(n.product.description),1)]),_:1}),E,H,(m(!0),p(h,null,x(n.product.descriptionItem,c=>(m(),p("ul",{class:"pb-2",key:c.id},[s("li",null,a(c.name),1)]))),128))]),_:1}),s("div",K,a(l.$t("Count")),1),s("div",O,[s("span",{class:"decrease",onClick:r[0]||(r[0]=(...c)=>d.decreaseCount&&d.decreaseCount(...c))},"-"),o(" "+a(n.count)+" ",1),s("span",{class:"increase",onClick:r[1]||(r[1]=(...c)=>d.increaseCount&&d.increaseCount(...c))},"+")]),S(s("div",R,[t(i,null,{default:e(()=>[o("mdi-alert")]),_:1}),o(" "+a(n.product.notice[0]),1)],512),[[g,n.count>5]]),s("div",U,[t(C,{color:"error",width:"48%",variant:"flat",onClick:r[2]||(r[2]=y(c=>d.addToCart(l.item),["stop"]))},{default:e(()=>[o("加入"+a(l.$t("Cart")),1)]),_:1}),t(C,{color:"success",width:"48%",variant:"outlined"},{default:e(()=>[o(a(l.$t("Buy")),1)]),_:1}),t(A,{modelValue:n.snackbar,"onUpdate:modelValue":r[3]||(r[3]=c=>n.snackbar=c),timeout:1500,color:"success"},{default:e(()=>[s("div",Z,a(n.snackbarText),1)]),_:1},8,["modelValue"])]),s("div",$,[t(i,null,{default:e(()=>[o("mdi-car")]),_:1}),o(" "+a(l.$t("Notice")),1)])]),_:1})]),_:1})]),_:1})],64)}const G=V(F,[["render",q]]),J={name:"ShopItem",components:{ShopItemMain:G}};function X(l,r,v,k,n,d){const u=_("ShopItem-Main");return m(),T(u)}const ut=V(J,[["render",X]]);export{ut as default};
