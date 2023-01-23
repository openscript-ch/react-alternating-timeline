import{M as T}from"./chunk-MA2MUXQN-dde84af1.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{a as n,j as s,F as x}from"./jsx-runtime-670450c2.js";import{r as p}from"./index-f1f749bf.js";import{u as w}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c4f0a43b.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-XHUUYXNA-c892a862.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-3fe263e1.js";import"./index-15cef032.js";const y=p.forwardRef(({className:f,title:l,date:k,children:j},d)=>n("div",{ref:d,className:["timeline-item",f].join(" "),children:[s("div",{className:"timeline-item__marker"}),n("div",{className:"timeline-card",children:[s("p",{className:"timeline-card__date",children:k.toISOString()}),s("p",{children:l}),j]})]}));try{y.displayName="TimelineItem",y.__docgenInfo={description:"",displayName:"TimelineItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const E=f=>typeof f=="number"?{right:f,left:0}:{right:f.right??0,left:f.left??0},g=50,D=(f,l)=>{const k=Math.abs(f-l);return k<g?g-k:0},v={gap:50,offset:50};function i(f){const{items:l,gap:k,offset:j}={...v,...f},d=p.useRef(null),o=p.useRef();function u(){return o.current||(o.current=new Map),o.current}return p.useEffect(()=>{const r=Array.from(u().values()),{left:c,right:m}=E(j??0);let e=c,a=m;r.forEach(M=>{const t=M;e>a?(e+=D(e,a),t.style.top=`${a}px`,t.classList.add("timeline-item--right"),a+=t.offsetHeight+(k??0)):(a+=D(e,a),t.style.top=`${e}px`,t.classList.add("timeline-item--left"),e+=t.offsetHeight+(k??0))});const F=d.current;F&&(F.style.height=`${Math.max(e,a)}px`)},[o]),n("div",{className:"timeline",ref:d,children:[s("div",{className:"timeline__line"}),l.map(r=>s(y,{...r,ref:c=>{const m=u();c?m.set(r.date,c):m.delete(r.date)}}))]})}try{i.displayName="Timeline",i.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"PropsWithKey<TimelineItemProps>[]"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"OffsetConfig"}}}}}catch{}function N(f={}){const{wrapper:l}=Object.assign({},w(),f.components);return l?s(l,{...f,children:s(k,{})}):k();function k(){const j=Object.assign({img:"img"},w(),f.components),{Story:d}=j;return d||b("Story",!0),n(x,{children:[s(T,{title:"Timeline",component:i}),`
`,s(d,{name:"Basic",children:s(i,{items:[{key:1,title:"1",date:new Date,children:"alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj  alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj  "},{key:2,title:"2",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:3,title:"3",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:4,title:"4",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:5,title:"5",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:6,title:"6",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:7,title:"7",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfk f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks fl f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks fl f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks fls flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:8,title:"8",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:9,title:"9",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:10,title:"10",date:new Date,children:n(x,{children:["aslfjasdlfjsdaflkj",s(j.img,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png"})]})},{key:11,title:"11",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:12,title:"12",date:new Date},{key:13,title:"13",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:14,title:"14",date:new Date}]})})]})}}function b(f,l){throw new Error("Expected "+(l?"component":"object")+" `"+f+"` to be defined: you likely forgot to import, pass, or provide it.")}const _=()=>s(i,{items:[{key:1,title:"1",date:new Date,children:"alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj  alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfsöfj fsdjf lskdfj alsfj fljsdflö dsakfjd slkfj  "},{key:2,title:"2",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:3,title:"3",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:4,title:"4",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:5,title:"5",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:6,title:"6",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:7,title:"7",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfk f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks fl f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks fl f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks fls flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:8,title:"8",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:9,title:"9",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:10,title:"10",date:new Date,children:n(x,{children:["aslfjasdlfjsdaflkj",s("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png"})]})},{key:11,title:"11",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:12,title:"12",date:new Date},{key:13,title:"13",date:new Date,children:"askflkfjds flksjfdsölfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"},{key:14,title:"14",date:new Date}]});_.storyName="Basic";_.parameters={storySource:{source:`<Timeline items={[{
  key: 1,
  title: "1",
  date: new Date(),
  children: "alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfs\\xF6fj fsdjf lskdfj alsfj fljsdfl\\xF6 dsakfjd slkfj alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfs\\xF6fj fsdjf lskdfj alsfj fljsdfl\\xF6 dsakfjd slkfj  alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfs\\xF6fj fsdjf lskdfj alsfj fljsdfl\\xF6 dsakfjd slkfj alsjflskdfjsdklfjsdlkjdslkjdsalfjadslkajdfs\\xF6fj fsdjf lskdfj alsfj fljsdfl\\xF6 dsakfjd slkfj  "
}, {
  key: 2,
  title: "2",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 3,
  title: "3",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 4,
  title: "4",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 5,
  title: "5",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 6,
  title: "6",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 7,
  title: "7",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfk f askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfks fl f askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfks fl f askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfks fls flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 8,
  title: "8",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 9,
  title: "9",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 10,
  title: "10",
  date: new Date(),
  children: <>
          aslfjasdlfjsdaflkj
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png" />
        </>
}, {
  key: 11,
  title: "11",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 12,
  title: "12",
  date: new Date()
}, {
  key: 13,
  title: "13",
  date: new Date(),
  children: "askflkfjds flksjfds\\xF6lfks flkalkja sflkjdsf lsdkf sdflkajlkfs f"
}, {
  key: 14,
  title: "14",
  date: new Date()
}]} />`}};const h={title:"Timeline",component:i,tags:["stories-mdx"],includeStories:["basic"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:N};const G=["basic"];export{G as __namedExportsOrder,_ as basic,h as default};
//# sourceMappingURL=Timeline.stories-91700b6d.js.map
