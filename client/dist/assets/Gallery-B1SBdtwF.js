import{r as m,u as t,j as r,c as d,b,d as f,a as H,R as M,C as T,M as N}from"./index-C8r9-WmN.js";const y=m.forwardRef(({className:g,bsPrefix:a,as:e="div",...i},s)=>(a=t(a,"card-body"),r.jsx(e,{ref:s,className:d(g,a),...i})));y.displayName="CardBody";const u=m.forwardRef(({className:g,bsPrefix:a,as:e="div",...i},s)=>(a=t(a,"card-footer"),r.jsx(e,{ref:s,className:d(g,a),...i})));u.displayName="CardFooter";const x=m.forwardRef(({bsPrefix:g,className:a,as:e="div",...i},s)=>{const l=t(g,"card-header"),o=m.useMemo(()=>({cardHeaderBsPrefix:l}),[l]);return r.jsx(b.Provider,{value:o,children:r.jsx(e,{ref:s,...i,className:d(a,l)})})});x.displayName="CardHeader";const h=m.forwardRef(({bsPrefix:g,className:a,variant:e,as:i="img",...s},l)=>{const o=t(g,"card-img");return r.jsx(i,{ref:l,className:d(e?`${o}-${e}`:o,a),...s})});h.displayName="CardImg";const w=m.forwardRef(({className:g,bsPrefix:a,as:e="div",...i},s)=>(a=t(a,"card-img-overlay"),r.jsx(e,{ref:s,className:d(g,a),...i})));w.displayName="CardImgOverlay";const v=m.forwardRef(({className:g,bsPrefix:a,as:e="a",...i},s)=>(a=t(a,"card-link"),r.jsx(e,{ref:s,className:d(g,a),...i})));v.displayName="CardLink";const k=f("h6"),R=m.forwardRef(({className:g,bsPrefix:a,as:e=k,...i},s)=>(a=t(a,"card-subtitle"),r.jsx(e,{ref:s,className:d(g,a),...i})));R.displayName="CardSubtitle";const I=m.forwardRef(({className:g,bsPrefix:a,as:e="p",...i},s)=>(a=t(a,"card-text"),r.jsx(e,{ref:s,className:d(g,a),...i})));I.displayName="CardText";const B=f("h5"),S=m.forwardRef(({className:g,bsPrefix:a,as:e=B,...i},s)=>(a=t(a,"card-title"),r.jsx(e,{ref:s,className:d(g,a),...i})));S.displayName="CardTitle";const $=m.forwardRef(({bsPrefix:g,className:a,bg:e,text:i,border:s,body:l=!1,children:o,as:c="div",...j},n)=>{const p=t(g,"card");return r.jsx(c,{ref:n,...j,className:d(a,p,e&&`bg-${e}`,i&&`text-${i}`,s&&`border-${s}`),children:l?r.jsx(y,{children:o}):o})});$.displayName="Card";const C=Object.assign($,{Img:h,Title:S,Subtitle:R,Body:y,Link:v,Text:I,Header:x,Footer:u,ImgOverlay:w}),E=()=>{const g=[{title:"Memories",images:["/images/0ldimg1.jpg","/images/oldimg3.jpg","/images/oldimg4.jpg","/images/oldimg5.jpg","/images/oldimg6.jpg","/images/oldimg9.jpg","/images/oldimg42.jpg","/images/oldimg43.jpg","/images/oldimg4.jpg","/images/oldimg5.jpg"]},{title:"Celebration",images:["/images/aimg17.jpg","/images/aimg18.jpg","/images/img15.jpg","/images/img15.jpg"]},{title:"Random trip pics",images:["/images/timg1.jpg","/images/timg11.jpg","/images/timg12.jpg","/images/timg13.jpg","/images/timg14.jpg","/images/timg20.jpg","/images/timg21.jpg","/images/trimg24.jpg"]},,{title:"Then and Now",images:["/images/img26.jpg","/images/nbimg25.jpg","/images/nbimg27.jpg","/images/nbimg30.jpg","/images/nbimg31.jpg","/images/nbimg32.jpg","/images/nbimg33.jpg","/images/nbimg34.jpg","/images/nbimg40.jpg","/images/nbimg41.jpg","/images/nbimg34.jpg"]}],[a,e]=m.useState(!1),[i,s]=m.useState(""),l=c=>{s(c),e(!0)},o=()=>{e(!1),s("")};return r.jsxs(H,{className:"gallery py-5",children:[g.map((c,j)=>r.jsxs("div",{className:"gallery-section mb-5",children:[r.jsx("h2",{className:"mb-4 text-center",children:c.title}),r.jsx(M,{children:c.images.map((n,p)=>r.jsx(T,{xs:12,sm:6,md:4,lg:3,className:"mb-4",children:r.jsx(C,{className:"gallery-card",onClick:()=>l(n),style:{cursor:"pointer"},children:r.jsx(C.Img,{variant:"top",src:n,alt:`${c.title} ${p+1}`,className:"fixed-gallery-img"})})},p))})]},j)),r.jsx(N,{show:a,onHide:o,centered:!0,size:"lg",children:r.jsx(N.Body,{className:"p-0",children:r.jsx("img",{src:i,alt:"Enlarged",style:{width:"100%",height:"auto"}})})})]})};export{E as default};
