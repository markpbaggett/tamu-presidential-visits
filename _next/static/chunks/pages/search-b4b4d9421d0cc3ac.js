(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603,789],{3235:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var i=r(7178),a=r(3245),n=r(9499),o=r(2854),s=(0,o.zo)("div",{padding:"$gr3 0 0"}),c=(0,o.zo)("div",{backgroundColor:"var(--gray-3)",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),l=(0,o.zo)("div",{display:"flex",width:"100%",position:"relative",flexGrow:1,flexShrink:0,maxWidth:"275px",img:{width:"100%",height:"100%",objectFit:"cover"},a:(0,n.Z)({display:"flex",flexDirection:"column",width:"100%",color:"var(--gray-12)",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,n.Z)({color:"var(--accent-11)"},"".concat(c),{transform:"scale3d(1.03, 1.03, 1.03)"}))}),d=r(3093),u=r(8522),f=r(6225),h=r(3817),p=(0,o.zo)("img",(0,n.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,color:"transparent"},"&.loaded",{opacity:1})),g=(0,o.zo)("figure",{backgroundColor:"var(--gray-3)",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",transition:"$canopyAll"}),v=r(7294),m=r(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(r,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(r,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(r,"/").concat(t,"/0/default.jpg")},b=r(5893),Figure_Figure=function(e){var t=e.alt,r=e.resource,i=e.region,a=void 0===i?"full":i,n=e.size,o=void 0===n?"400,":n,s=e.isCover,c=(0,v.useState)(),l=c[0],d=c[1],u=(0,v.useState)(!1),f=u[0],h=u[1],x=(0,v.useRef)(null);return(0,v.useEffect)(function(){var e;d(getResourceImage(r,o,a)),null!=x&&x.current&&null!=x&&null!==(e=x.current)&&void 0!==e&&e.complete&&h(!0)},[]),(0,b.jsx)(g,{children:(0,b.jsx)(p,{alt:t,src:l,ref:x,style:void 0!==s&&s?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return h(!0)},className:(0,m.Z)("source",f&&"loaded")})})},x=r(1830),y=r(9769),j=r(8956),w=r(2708),S=v.memo(function(e){var t=e.resource,r=1,n=t.label,o=t.homepage,p=t.thumbnail,g=(0,j.J)(p),v=g.width,m=g.height;v&&m&&(r=v/m);var S=(0,w.YD)(),O=S.ref,P=S.inView,$=(0,y.i)(n);return(0,b.jsx)(l,{as:a.Box,ref:O,children:(0,b.jsx)(a.Card,{size:"2",style:{width:"100%"},variant:"classic",asChild:!0,children:(0,b.jsxs)(a.Link,{href:o&&o[0].id?o[0].id:"",children:[(0,b.jsx)(a.Inset,{clip:"padding-box",side:"top",children:(0,b.jsx)(i.f,{ratio:r,children:(0,b.jsx)(c,{children:(0,b.jsx)(d.A,{transition:{duration:1},children:P&&t&&(0,b.jsx)(u.X,{features:f.H,children:(0,b.jsx)(h.m.div,{style:{height:"100%"},initial:{opacity:0},animate:{opacity:1},children:(0,b.jsx)(Figure_Figure,{resource:p,alt:$})})})})})})}),(0,b.jsx)(a.Text,{size:"2",asChild:!0,children:(0,b.jsx)(s,{children:(0,b.jsx)(x.Label,{label:n})})})]})})})})},2929:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(9499),a=r(3235),n=r(827),o=r(2854),s=(0,o.zo)("div",{paddingBottom:"$gr4",zIndex:"1","@xxs":{paddingBottom:"$gr2"},"@xs":{paddingBottom:"$gr2"},"@sm":{paddingBottom:"$gr3"},"@md":{paddingBottom:"$gr3"}}),c=(0,o.zo)(n.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr4","@xxs":{marginLeft:"$gr2"},"@xs":{marginLeft:"$gr2"},"@sm":{marginLeft:"$gr3"},"@md":{marginLeft:"$gr3"},"&:first-child":{marginLeft:"0"}}});r(7294);var l=r(5893),d=r(7668),Grid=function(e){var t,r=e.children,a=(t={default:6},(0,i.Z)(t,d.b.xl,5),(0,i.Z)(t,d.b.lg,4),(0,i.Z)(t,d.b.md,4),(0,i.Z)(t,d.b.sm,3),(0,i.Z)(t,d.b.xs,2),t);return(0,l.jsx)(c,{breakpointCols:a,className:"canopy-grid",columnClassName:"canopy-grid-column",children:r})};Grid.Item=function(e){var t=e.item;return t?(0,l.jsx)(s,{children:(0,l.jsx)(a.Z,{resource:t},t.id)}):(0,l.jsx)(l.Fragment,{})};var u=Grid},7570:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return G},default:function(){return search}});var i=r(7294),a=r(6873),n=r(9499),o=r(5893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var s={facetsActive:[]},c=(0,i.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,r=e.children,a=(0,i.useReducer)(facetsReducer,void 0===t?s:t),n=a[0],l=a[1];return(0,o.jsx)(c.Provider,{value:{facetsDispatch:l,facetsState:n},children:r})}function useFacetsState(){var e=(0,i.useContext)(c);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var l=r(3245),d=r(6835),u=r(2854),f=(0,u.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"var(--accent-1)",backgroundColor:"var(--accent-12)",borderRadius:"50%"}),h=(0,u.zo)(l.Dialog.Trigger,{position:"relative",right:"0",boxShadow:"none",transition:"$canopySlideIn"}),p=(0,u.zo)("div",{display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%",variants:{isScrolling:{true:(0,n.Z)({},"".concat(h),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"var(--shadow-5)"})}}}),g=r(5407),v=r(5014),m=r(2469),b=r(5049),hooks_useElementPosition=function(e){var t=(0,i.useState)(0),r=t[0],a=t[1];return(0,i.useEffect)(function(){var updatePosition=function(){a(window.pageYOffset),e.current&&a(window.pageYOffset-(null==e?void 0:e.current.offsetTop))};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),r},Activate=function(){var e=i.useState(!1),t=(0,d.Z)(e,2),r=t[0],n=t[1],s=i.useRef(null),c=hooks_useElementPosition(s),u=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,i.useEffect)(function(){return n(c>b.J9-100)},[c,b.J9]),(0,o.jsx)(p,{isScrolling:r,ref:s,children:(0,o.jsx)(a.Z,{containerType:"wide",children:(0,o.jsx)(l.Flex,{justify:"end",children:(0,o.jsx)(h,{children:(0,o.jsxs)(g.O,{size:"3",children:[(0,v.EK)("searchFilter")," ",(0,o.jsx)(m.hsZ,{}),u>0&&(0,o.jsx)(f,{children:u})]})})})})})},x=r(9802),y=(0,u.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),j=r(7058),w=(0,u.zo)(x.xz,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",cursor:"pointer",borderTop:"1px solid var(--gray-4)",fontSize:"$gr3","> span":{display:"flex",alignItems:"center",gap:"$gr1"},"&:hover, &:focus":{color:"var(--accent-11)"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"var(--gray-10)"},"&[aria-expanded='true']":{color:"var(--gray-12) !important",fontWeight:"800",svg:{color:"var(--gray-12) !important",transform:"rotate(0deg)"}}}),S=(0,u.zo)(x.VY,{padding:"$gr1 0 $gr4"}),O=(0,u.zo)(x.h4,{}),P=(0,u.zo)(x.ck,{"&:first-child":(0,n.Z)({},"".concat(w),{border:"none"})}),$=r(6069),A=(0,u.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"var(--gray-12) !important",fontWeight:"700"}}},"&:hover, &:focus":{color:"var(--accent-11)"},span:{color:"var(--gray-10) !important",fontSize:"$gr1"}}),R=(0,u.zo)($.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"var(--gray-3)",boxShadow:"inset var(--shadow-2)",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, var(--accent-11), var(--accent-8))",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{"&::before":{opacity:"1"}}}),z=(0,u.zo)($.z$,{position:"absolute",zIndex:"1",color:"var(--accent-1)",textShadow:"1px 1px 2px var(--accent-a12)"}),F=(0,u.zo)("span",{display:"flex",margin:"0 0 $gr1",color:"var(--gray-11)",fontSize:"$gr2","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,r=e.facet,i=e.identifier,a=e.option,n=useFacetsState(),s=n.facetsDispatch,c=n.facetsState.facetsActive;return(0,o.jsxs)(F,{children:[(0,o.jsx)(R,{value:a.value,id:i,checked:t,onCheckedChange:function(e){c.delete(r),e&&c.append(r,a.slug),s({type:"updateFacetsActive",facetsActive:c})},children:(0,o.jsx)(z,{asChild:!0,children:(0,o.jsx)(m.nQG,{})})}),(0,o.jsxs)(A,{htmlFor:i,isChecked:t,children:[a.value," ",(0,o.jsxs)("span",{children:["(",a.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,r=e.slug,a=e.values,n=useFacetsState().facetsState.facetsActive,s=null==n?void 0:n.toString(),c={slug:"",value:(0,v.EK)("searchFilterAny")},l=(0,i.useState)({slug:"",value:(0,v.EK)("searchFilterAny")}),d=l[0],u=l[1];return(0,i.useEffect)(function(){var e,t=null==n?void 0:n.get(r);u(t?{slug:t,value:null===(e=a.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:c)},[n,s,r,a]),(0,o.jsxs)(P,{value:r,children:[(0,o.jsx)(O,{asChild:!0,children:(0,o.jsxs)(w,{children:[(0,o.jsxs)("span",{children:[t," ",(0,o.jsx)(m.v4q,{})]}),(0,o.jsx)("span",{children:d.value})]})}),(0,o.jsx)(S,{children:a.map(function(e,t){var i="".concat(r,"-").concat(e.slug,"-").concat(t);return(0,o.jsx)(Option,{active:d.slug===e.slug,facet:r,identifier:i,option:e},i)})})]})},_=r(1163);function Modal_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Modal_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Modal=function(){var e=useFacetsState(),t=e.facetsState,r=e.facetsDispatch,a=t.facetsActive,n=(0,_.useRouter)(),handleViewResults=function(){n.push({pathname:"/search",query:a.toString()})};return(0,o.jsx)(l.Dialog.Content,{children:(0,o.jsxs)(y,{children:[(0,o.jsx)(l.Flex,{mb:"3",align:"center",justify:"between",asChild:!0,children:(0,o.jsxs)("header",{children:[(0,o.jsx)(l.Dialog.Title,{as:"h3",mb:"0",size:"4",children:(0,o.jsx)("span",{children:(0,v.EK)("searchFilter")})}),(0,o.jsx)(l.Dialog.Close,{"aria-label":(0,v.EK)("searchFilterClose"),children:(0,o.jsx)(l.IconButton,{variant:"soft",size:"2",style:{cursor:"pointer"},children:(0,o.jsx)(m.Pxu,{})})})]})}),(0,o.jsx)("div",{children:(0,o.jsx)(x.fC,{type:"single",collapsible:!0,children:j.map(function(e){return(0,i.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,o.jsx)(l.Flex,{mt:"5",style:{justifyContent:"space-between"},asChild:!0,children:(0,o.jsxs)("footer",{children:[(0,o.jsx)(l.Dialog.Close,{children:(0,o.jsx)(g.O,{variant:"soft",onClick:function(){j.forEach(function(e){return a.delete(e.slug)}),r({type:"updateFacetsActive",facetsActive:a}),handleViewResults()},children:(0,v.EK)("searchFilterClear")})}),(0,o.jsx)(l.Dialog.Close,{children:(0,o.jsx)(g.O,{onClick:handleViewResults,children:(0,v.EK)("searchFilterSubmit")})})]})})]})})},C=r(7642),Facets=function(){var e=useFacetsState().facetsDispatch,t=(0,C.MQ)().canopyState.searchParams;return(0,i.useEffect)(function(){e({type:"updateFacetsActive",facetsActive:t})},[t,e]),(0,o.jsxs)(l.Dialog.Root,{children:[(0,o.jsx)(Activate,{}),(0,o.jsx)(Modal,{})]})},Facets_Facets=function(){return(0,o.jsx)(FacetsProvider,{children:(0,o.jsx)(Facets,{})})},k=r(2947),E=(0,u.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr2","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{position:"relative",display:"block",fontSize:"$gr3",color:"var(--gray-11)",fontWeight:"500",padding:"$gr2 0","@sm":{fontSize:"$gr3"}}}),Z=r(2929),D=r(7812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},V=r(3981),I=r(633),M=r(6486),K=r.n(M),B=r(4921),getDocuments=function(e,t){var r=new B.Z.Document(t);V.forEach(function(e){return r.add(e)});var i=r.search(e).reduce(function(e,t){return(0,D.Z)(new Set([].concat((0,D.Z)(e),(0,D.Z)(t.result))))},[]);return i.length>0?i:[]},getResults=function(e,t,r,i){var a,n=t?getDocuments(t,i):V.map(function(e){return e.id}),o=0===r.length?I:(a=r.map(function(e){var t=j.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),I.filter(function(e){return K().intersection.apply(K(),(0,D.Z)(a)).includes(e.index)}));return n.filter(function(e){return o.some(function(t){return t.index===e})}).map(function(t){var r;return{id:(r=o.find(function(e){return e.index===t})).id,type:"Manifest",label:r.label,thumbnail:r.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(r.slug),type:"Text",label:r.label}]}})};function request_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):request_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var searchRequest=function(e){var t,r=e.params,i=e.baseUrl,a=e.flexSearch,n=j.map(function(e){return e.slug}).filter(function(e){return r.has(e)}).map(function(e){var t=r.get(e);return{label:e,value:t}}),o=null==r?void 0:r.get("q"),s=null==r?void 0:r.get("page"),c=new URL("".concat(i,"/search"));c.search=null==r?void 0:r.toString();var l=getResults(i,o,n,a),d=Array.from(Array(Math.ceil(l.length/10)).keys()).map(function(e){var t=l.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),u=s?(t=parseInt(s),d.find(function(e){return e.page===t}).items.map(function(e){return l.find(function(t){return t.id===e})})):d.map(function(e){var t=new URL(c);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:c.toString(),type:"Collection",label:{none:[o||"All Results"]},items:u},s?{summary:{none:["".concat(l.length,"}")]}}:{summary:{none:["".concat(l.length)]}}),s&&{partOf:getPartOf(c)})},hooks_usePageResults=function(e,t,r){var a=(0,i.useState)([]),n=a[0],o=a[1],s=(0,i.useState)(!1),c=s[0],l=s[1],d=(0,i.useState)(!0),u=d[0],f=d[1],h=(0,i.useState)(!1),p=h[0],g=h[1],v=(0,C.MQ)().canopyState.config,reset=function(){o([]),l(!1),f(!0),g(!1)};return(0,i.useEffect)(function(){return reset()},[r]),(0,i.useEffect)(function(){if(f(!0),l(!1),(null==e?void 0:e.length)>0&&e[t]){var r,i=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==v?void 0:v.baseUrl,flexSearch:null==v?void 0:null===(r=v.search)||void 0===r?void 0:r.flexSearch}).items;o(function(e){return[].concat((0,D.Z)(e),(0,D.Z)(i))}),g(e.length>t),f(!1)}},[v,e,t]),{data:n,error:c,loading:u,more:p}},Results=function(e){var t=e.pages,r=e.query,a=(0,i.useState)(0),n=a[0],s=a[1],c=hooks_usePageResults(t,n,r),l=c.data,d=c.loading,u=c.more;(0,i.useEffect)(function(){return s(0)},[r]);var f=(0,i.useRef)(),h=(0,i.useCallback)(function(e){!d&&(f.current&&f.current.disconnect(),f.current=new IntersectionObserver(function(e){e[0].isIntersecting&&u&&s(function(e){return e+1})}),e&&f.current.observe(e))},[d,u]);return(0,o.jsx)(Z.Z,{children:l.map(function(e,t){return l.length===t+1?(0,o.jsx)("span",{ref:l.length===t+1?h:void 0,children:(0,o.jsx)(Z.Z.Item,{item:e})},e.id):(0,o.jsx)("span",{children:(0,o.jsx)(Z.Z.Item,{item:e})},e.id)})})},L=r(1830),q=r(9332),G=!0,search=function(){var e=(0,q.useSearchParams)(),t=(0,i.useState)([]),r=t[0],n=t[1],s=(0,i.useState)(),c=s[0],d=s[1],u=i.useRef(null),f=(0,C.MQ)(),h=f.canopyDispatch,p=f.canopyState,g=p.config,m=p.searchSummary;return(0,i.useEffect)(function(){n([]),d(new URLSearchParams(e.toString()))},[e]),(0,i.useEffect)(function(){if(void 0!==c){h({searchParams:c,type:"updateSearchParams"});var e,t=null==g?void 0:null===(e=g.search)||void 0===e?void 0:e.flexSearch,r=searchRequest({params:c,baseUrl:null==g?void 0:g.baseUrl,flexSearch:t}),i=r.items,a=r.summary;n(i.map(function(e){return e.id})),a&&h({type:"updateSearchSummary",searchSummary:a})}},[c,g]),(0,o.jsxs)(k.Z,{children:[(0,o.jsxs)(E,{ref:u,children:[(0,o.jsx)(Facets_Facets,{}),(0,o.jsx)(a.Z,{containerType:"wide",children:m&&(0,o.jsxs)(l.Text,{id:"canopy-search-summary",children:[(0,o.jsx)(L.Summary,{summary:m})," ",(0,v.EK)("searchResults")]})})]}),(0,o.jsx)(a.Z,{containerType:"wide",children:(0,o.jsx)(Results,{pages:r,query:c})})]})}},8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(7570)}])},5789:function(){},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"issued","slug":"issued","values":[{"value":"2006","slug":"2006","doc_count":13,"docs":[9,10,11,12,13,14,15,16,17,18,19,20,21]},{"value":"2011-08-17","slug":"2011-08-17","doc_count":10,"docs":[22,23,24,25,26,27,28,29,30,31]},{"value":"2003","slug":"2003","doc_count":9,"docs":[0,1,2,3,4,5,6,7,8]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"George H.W. Bush visit - 3","metadata":"2003"},{"id":1,"label":"George H.W. Bush visit - 7","metadata":"2003"},{"id":2,"label":"George H.W. Bush visit - 2","metadata":"2003"},{"id":3,"label":"George H.W. Bush visit - 5","metadata":"2003"},{"id":4,"label":"George H.W. Bush visit - 8","metadata":"2003"},{"id":5,"label":"George H.W. Bush visit - 6","metadata":"2003"},{"id":6,"label":"George H.W. Bush visit - 1","metadata":"2003"},{"id":7,"label":"George H.W. Bush visit - 9","metadata":"2003"},{"id":8,"label":"George H.W. Bush visit - 4","metadata":"2003"},{"id":9,"label":"Presidential Visits - 3","metadata":"2006"},{"id":10,"label":"Presidential Visits - 5","metadata":"2006"},{"id":11,"label":"Presidential Visits - 7","metadata":"2006"},{"id":12,"label":"Presidential Visits - 12","metadata":"2006"},{"id":13,"label":"Presidential Visits - 11","metadata":"2006"},{"id":14,"label":"Presidential Visits - 13","metadata":"2006"},{"id":15,"label":"Presidential Visits - 9","metadata":"2006"},{"id":16,"label":"Presidential Visits - 10","metadata":"2006"},{"id":17,"label":"Presidential Visits - 12","metadata":"2006"},{"id":18,"label":"Presidential Visits - 11","metadata":"2006"},{"id":19,"label":"Presidential Visits - 2","metadata":"2006"},{"id":20,"label":"Presidential Visits - 8","metadata":"2006"},{"id":21,"label":"Presidential Visits - 1","metadata":"2006"},{"id":22,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":23,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":24,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":25,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":26,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":27,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":28,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":29,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":30,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"},{"id":31,"label":"Roosevelt Visit to A&M","metadata":"2011-08-17"}]')}},function(e){e.O(0,[412,409,662,971,339,119,281,257,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);