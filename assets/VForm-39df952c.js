import{m as p,u as v}from"./VImg-15c5136b.js";import{i as b,j as F}from"./VTextField-a0885eec.js";import{f as V}from"./forwardRefs-98816ae5.js";import{p as y,i as h,x as R,e as P}from"./index-d4e5e210.js";const k=y({...p(),...b()},"VForm"),g=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:n,emit:f}=i;const a=F(r),m=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),f("submit",o),o.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:m,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,m)}});export{g as V};