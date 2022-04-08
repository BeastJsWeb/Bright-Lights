"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[383],{6383:function(t,o,r){r.r(o),r.d(o,{default:function(){return p}});var i=r(5671),a=r(3144),n=r(136),e=r(8347),s=r(2791),c=r(6647),h=r(890),u=r(2169),l=r(184),p=function(t){(0,n.Z)(r,t);var o=(0,e.Z)(r);function r(){return(0,i.Z)(this,r),o.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var t=this.props,o=t.image,r=t.jpg,i=t.title,a=t.title2,n=t.minWidth,e=t.maxHeight,s=t.maxWidth,p=t.minHeight,g=void 0===p?"100%":p,d=t.backgroundColor,m=void 0===d?"rgba(28, 27, 33, 0)":d,f=t.justifyContent,v=void 0===f?"center":f,b=t.color,y=void 0===b?"rgba(122, 102, 204, 0)":b,Z=t.fontSize;return(0,l.jsxs)(c.Z,{sx:{minWidth:{minWidth:n},"& > *":{borderTopLeftRadius:"15%",borderBottomRightRadius:"15%",transition:{md:"all 0.2s ease 0.05s",xs:"none"}},"&:hover > *":{color:"rgba(122, 102, 204, 1)",backgroundColor:"rgba(28, 27, 33, 0.7)",minHeight:{md:"100%",xs:"none"},fontWeight:700,borderTopLeftRadius:"15%",borderBottomRightRadius:"15%"}},children:[(0,l.jsxs)(h.Z,{color:y,fontWeight:500,fontFamily:"Poppins",display:"flex",alignItems:"center",justifyContent:v,width:"100%",boxSizing:"border-box",pl:2,pr:2,sx:{position:"absolute",bottom:"0",minHeight:{minHeight:g},backgroundColor:{backgroundColor:m},borderTopLeftRadius:"0em",borderBottomRightRadius:"calc(3.2em)",fontSize:{fontSize:Z},zIndex:1,"&:hover":{fontSize:{md:"calc(1em + 0.4vw)",xs:"none"},borderTopLeftRadius:"14%",borderBottomRightRadius:"14%"}},children:[i,(0,l.jsx)("br",{}),a]}),(0,l.jsx)(u.Z,{component:"img",loading:"lazy",width:350,height:300,alt:i,image:o,srcSet:" \n          ".concat(o," 320w, \n          ").concat(o," 2560w, \n          ").concat(r,"\n        "),sx:{height:"auto",maxHeight:{maxHeight:e},maxWidth:{maxWidth:s},"&:hover":{borderTopLeftRadius:"16%",borderBottomRightRadius:"16%"}}})]})}}]),r}(s.Component)},6647:function(t,o,r){r.d(o,{Z:function(){return y}});var i=r(4942),a=r(7462),n=r(3366),e=r(2791),s=r(8182),c=r(767),h=r(1402),u=r(6934),l=r(5159);function p(t){return(0,l.Z)("MuiCardActionArea",t)}var g=(0,r(208).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),d=r(3701),m=r(184),f=["children","className","focusVisibleClassName"],v=(0,u.ZP)(d.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,o){return o.root}})((function(t){var o,r=t.theme;return o={display:"block",textAlign:"inherit",width:"100%"},(0,i.Z)(o,"&:hover .".concat(g.focusHighlight),{opacity:r.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,i.Z)(o,"&.".concat(g.focusVisible," .").concat(g.focusHighlight),{opacity:r.palette.action.focusOpacity}),o})),b=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,o){return o.focusHighlight}})((function(t){var o=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})}})),y=e.forwardRef((function(t,o){var r=(0,h.Z)({props:t,name:"MuiCardActionArea"}),i=r.children,e=r.className,u=r.focusVisibleClassName,l=(0,n.Z)(r,f),g=r,d=function(t){var o=t.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},p,o)}(g);return(0,m.jsxs)(v,(0,a.Z)({className:(0,s.Z)(d.root,e),focusVisibleClassName:(0,s.Z)(u,d.focusVisible),ref:o,ownerState:g},l,{children:[i,(0,m.jsx)(b,{className:d.focusHighlight,ownerState:g})]}))}))},890:function(t,o,r){r.d(o,{Z:function(){return y}});var i=r(3366),a=r(7462),n=r(2791),e=r(8182),s=r(8519),c=r(767),h=r(6934),u=r(1402),l=r(4036),p=r(5159);function g(t){return(0,p.Z)("MuiTypography",t)}(0,r(208).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var d=r(184),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,o){var r=t.ownerState;return[o.root,r.variant&&o[r.variant],"inherit"!==r.align&&o["align".concat((0,l.Z)(r.align))],r.noWrap&&o.noWrap,r.gutterBottom&&o.gutterBottom,r.paragraph&&o.paragraph]}})((function(t){var o=t.theme,r=t.ownerState;return(0,a.Z)({margin:0},r.variant&&o.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=n.forwardRef((function(t,o){var r=(0,u.Z)({props:t,name:"MuiTypography"}),n=function(t){return b[t]||t}(r.color),h=(0,s.Z)((0,a.Z)({},r,{color:n})),p=h.align,y=void 0===p?"inherit":p,Z=h.className,x=h.component,R=h.gutterBottom,w=void 0!==R&&R,C=h.noWrap,W=void 0!==C&&C,B=h.paragraph,H=void 0!==B&&B,S=h.variant,A=void 0===S?"body1":S,M=h.variantMapping,k=void 0===M?v:M,N=(0,i.Z)(h,m),j=(0,a.Z)({},h,{align:y,color:n,className:Z,component:x,gutterBottom:w,noWrap:W,paragraph:H,variant:A,variantMapping:k}),T=x||(H?"p":k[A]||v[A])||"span",z=function(t){var o=t.align,r=t.gutterBottom,i=t.noWrap,a=t.paragraph,n=t.variant,e=t.classes,s={root:["root",n,"inherit"!==t.align&&"align".concat((0,l.Z)(o)),r&&"gutterBottom",i&&"noWrap",a&&"paragraph"]};return(0,c.Z)(s,g,e)}(j);return(0,d.jsx)(f,(0,a.Z)({as:T,ref:o,ownerState:j,className:(0,e.Z)(z.root,Z)},N))}))}}]);
//# sourceMappingURL=383.de8a1649.chunk.js.map