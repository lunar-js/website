import{c as C,d as G,t as $,_ as R,b as T,a as W}from"./See.0605363f.js";import{o as t,c as r,a as o,d as J,u as O,e as Q,f as U,h as f,r as X,t as u,p as B,b as m,x as H,s as g,q as e,F as l,n as K,m as i,V as Z,C as ee}from"./index.7fb9f371.js";import{a as se,i as te,r as ne}from"./headlessui.esm.ed246311.js";import{m as D,_ as re}from"./markdown.211497ac.js";import{u as oe}from"./ReducedMotion.bb353694.js";const ae={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},le=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1),ie=[le];function ue(c,p){return t(),r("svg",ae,ie)}var ce={name:"heroicons-outline-minus",render:ue};const de={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},me=o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1),_e=[me];function pe(c,p){return t(),r("svg",de,_e)}var he={name:"heroicons-outline-plus",render:pe};const ye={class:"flex gap-1 items-center -ml-1"},fe={class:"font-semibold"},ke=["aria-expanded"],ve={class:"sr-only"},xe=["innerHTML"],$e=J({props:["names","variable","nullable"],setup(c){var v;const p=c,k=O(),L=Q(),h=U(),s=f(()=>h.state.docs),y=X((v=s.value)==null?void 0:v.typedefs.find(n=>n.name===p.names[0][0])),b=f(()=>{var n,M;return D((M=C((n=y.value)==null?void 0:n.description,s.value,k,L))!=null?M:"")});return(n,M)=>{const A=he,w=ce;return y.value?(t(),u(e(ne),{key:0,as:"div"},{default:B(({open:_})=>[m(e(se),{as:"div",class:"focus:outline-none"},{default:B(()=>[o("div",ye,[o("span",fe,H(c.nullable?"?":"")+H(c.variable?"...":""),1),(t(!0),r(l,null,g(c.names,d=>(t(),u(G,{key:e($)(d),type:d},null,8,["type"]))),128)),o("button",{class:"leading-3 focus:outline-none","aria-expanded":_},[o("span",ve,H(_?"Shrink":"Expand"),1),m(A,{class:K(["inline-block",{hidden:_}]),"aria-hidden":"true"},null,8,["class"]),m(w,{class:K(["inline-block",{hidden:!_}]),"aria-hidden":"true"},null,8,["class"])],8,ke)])]),_:2},1024),m(e(te),null,{default:B(()=>{var d,x;return[e(b)?(t(),r("div",{key:0,innerHTML:e(b)},null,8,xe)):i("",!0),(d=y.value)!=null&&d.props?(t(),u(R,{key:1,parameters:(x=y.value)==null?void 0:x.props},null,8,["parameters"])):i("",!0)]}),_:1})]),_:1})):(t(),u(T,{key:1,names:c.names},null,8,["names"]))}}}),ge={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},be={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},Me=["id"],we=["innerHTML"],Te=o("h2",null,"Types",-1),He={id:"typedef-types"},Le=o("h2",null,"Properties",-1),Ae=o("h2",null,"Parameters",-1),Be=o("h2",null,"Returns",-1),Ce={key:0},Re={class:"mt-3"},De=["innerHTML"],Se=J({setup(c){var v;const p=O(),k=Q(),L=U(),h=f(()=>L.state.docs),s=(v=h.value)==null?void 0:v.typedefs.find(n=>n.name===k.params.typedef),y=f(()=>D(C(s==null?void 0:s.description,h.value,p,k))),b=f(()=>{var n;return D(C((n=s.returns.description)!=null?n:s.returnsDescription,h.value,p,k))});return Z({title:f(()=>{var n;return`discord.js | ${(n=s==null?void 0:s.name)!=null?n:""}`})}),ee(()=>{const n=document.getElementById("container");n&&n.scrollTop>200&&n.scrollTo({top:0,behavior:oe.value?void 0:"smooth"})}),(n,M)=>{var w,_,d,x,E,V,j,N,P,S,F,Y,q,z;const A=G;return t(),r("div",ge,[m(re,{class:"float-right mt-2",meta:(w=e(s))==null?void 0:w.meta},null,8,["meta"]),o("div",be,[o("h1",{id:`doc-for-${(_=e(s))==null?void 0:_.name}`},H((d=e(s))==null?void 0:d.name),9,Me),(x=e(s))!=null&&x.description?(t(),r("p",{key:0,innerHTML:e(y)},null,8,we)):i("",!0),(V=(E=e(s))==null?void 0:E.see)!=null&&V.length?(t(),u(W,{key:1,see:(j=e(s))==null?void 0:j.see},null,8,["see"])):i("",!0),(N=e(s))!=null&&N.type?(t(),r(l,{key:2},[Te,o("ul",He,[(t(!0),r(l,null,g((P=e(s))==null?void 0:P.type,a=>(t(),r("li",{key:e($)(a)},[m($e,{class:"!m-0",names:a},null,8,["names"])]))),128))])],64)):i("",!0),((S=e(s))==null?void 0:S.props)&&((F=e(s))==null?void 0:F.props.length)?(t(),r(l,{key:3},[Le,m(R,{parameters:e(s).props},null,8,["parameters"])],64)):i("",!0),((Y=e(s))==null?void 0:Y.params)&&((q=e(s))==null?void 0:q.params.length)?(t(),r(l,{key:4},[Ae,m(R,{parameters:e(s).params},null,8,["parameters"])],64)):i("",!0),(z=e(s))!=null&&z.returns?(t(),r(l,{key:5},[Be,e(s).returns&&Array.isArray(e(s).returns)?(t(),r("span",Ce,[e(h).meta.format>=30?(t(),r(l,{key:0},[Array.isArray(e(s).returns[0])?(t(!0),r(l,{key:0},g(e(s).returns.flat(),a=>(t(),u(T,{key:e($)(a),names:a},null,8,["names"]))),128)):(t(!0),r(l,{key:1},g(e(s).returns.flat(),a=>{var I;return t(),u(T,{key:e($)(a),names:(I=a.types)==null?void 0:I.flat(),variable:a.variable,nullable:a.nullable},null,8,["names","variable","nullable"])}),128))],64)):(t(!0),r(l,{key:1},g(e(s).returns,a=>(t(),u(T,{key:e($)(a),names:a},null,8,["names"]))),128))])):(t(),u(A,{key:1,type:["void"]})),o("div",Re,[e(s).returns&&!Array.isArray(e(s).returns)&&e(s).returns.description||e(s).returnsDescription?(t(),r("p",{key:0,class:"noprose",innerHTML:e(b)},null,8,De)):i("",!0)])],64)):i("",!0)])])}}});export{Se as default};
