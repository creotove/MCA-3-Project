"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[369],{60369:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var r=t(74165),n=t(15861),i=t(29439),s=t(72791),c=t(47022),o=t(28282),l=t(78983),d=t(31243),f=t(80226),u=t(80184),m=function(){var e=(0,s.useState)(),a=(0,i.Z)(e,2),t=a[0],o=a[1],m=(0,s.useState)(0),x=(0,i.Z)(m,2),v=x[0],h=x[1],g=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("/api/v1/receptionist/getNumberOfPatientVisitedToday");case 3:(a=e.sent).data.success&&h(a.data.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),f.ZP.error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){setInterval((function(){o(function(){var e=new Date,a=e.getHours(),t=e.getMinutes(),r=e.getSeconds();return"".concat(a,":").concat(t,":").concat(r)}())}),1e3)}),[]),(0,s.useEffect)((function(){g()}),[]),(0,u.jsxs)(l.rb,{className:"mb-3 h-100",children:[(0,u.jsx)("div",{className:"col-12 col-md-12 col-lg-4 mb-3 mb-lg-0",children:(0,u.jsxs)(c.Z,{className:"bg-black h-100 rounded-2 d-flex flex-column w-100 align-items-center justify-content-center",children:[(0,u.jsxs)(c.Z,{className:"fs-3 text-white",children:["Visits",(0,u.jsxs)("span",{className:"text-warning",children:[" ",v]})]}),(0,u.jsx)(c.Z,{className:"text-success fs-3",children:t})]})}),(0,u.jsx)("div",{className:"col-lg-8",children:(0,u.jsx)(c.Z,{className:"w-100 bg-warning rounded-2 h-100 col-5",fluid:!0,children:(0,u.jsxs)("div",{className:"h-100",children:[(0,u.jsx)("div",{className:"",children:(0,u.jsx)("h3",{children:"Alerts"})}),(0,u.jsx)("div",{children:(0,u.jsxs)("marquee",{children:[" ",(0,u.jsx)("h4",{children:"Dont be safety blinded be safety minded"})]})})]})})})]})},x=t(77128),v=t(45736),h=function(){var e=(0,s.useState)([]),a=(0,i.Z)(e,2),t=a[0],l=a[1],h=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("/api/v1/receptionist/getrecent4Patient");case 3:(a=e.sent).data.success?(l(a.data.data),f.ZP.success(a.data.message)):f.ZP.error(a.data.message),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),f.ZP.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){h()}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c.Z,{className:"mb-3",children:[(0,u.jsx)(m,{}),(0,u.jsxs)(o.Z,{title:"Recent Patients",className:"shadow-sm",children:[(0,u.jsx)(o.Z.Header,{children:"Recent Patients"}),(0,u.jsx)(c.Z,{className:"mt-2",children:t.map((function(e,a){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o.Z,{className:"border-0 mx-3",children:[(0,u.jsx)("div",{children:e.uniqueId}),(0,u.jsx)("div",{children:e.department}),(0,u.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,u.jsx)("div",{children:e.patientName}),(0,u.jsx)("div",{}),(0,u.jsx)("div",{className:"",children:e.isChecked?(0,u.jsx)(v.Z,{bg:"success",pill:!0,children:"Checked"}):(0,u.jsx)(v.Z,{bg:"warning",pill:!0,children:"Pending"})})]})]},a),(0,u.jsx)(x.Z,{className:"my-2"})]})}))})]})]})})}},77128:function(e,a,t){t.d(a,{Z:function(){return v}});var r=t(4942),n=t(29439),i=t(72791),s=t(81694),c=t.n(s),o=t(71929),l=t(67521),d=t(55564),f=t(89922),u=function(e){var a,t=e.componentCls,n=e.sizePaddingEdgeHorizontal,i=e.colorSplit,s=e.lineWidth,c=e.textPaddingInline,o=e.orientationMargin,d=e.verticalMarginInline;return(0,r.Z)({},t,Object.assign(Object.assign({},(0,l.Wf)(e)),(a={borderBlockStart:"".concat(s,"px solid ").concat(i),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(s,"px solid ").concat(i)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,r.Z)(a,"&-horizontal".concat(t,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(i),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(s,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,r.Z)(a,"&-horizontal".concat(t,"-with-text-left"),{"&::before":{width:"".concat(100*o,"%")},"&::after":{width:"".concat(100-100*o,"%")}}),(0,r.Z)(a,"&-horizontal".concat(t,"-with-text-right"),{"&::before":{width:"".concat(100-100*o,"%")},"&::after":{width:"".concat(100*o,"%")}}),(0,r.Z)(a,"".concat(t,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:c}),(0,r.Z)(a,"&-dashed",{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:"".concat(s,"px 0 0")}),(0,r.Z)(a,"&-horizontal".concat(t,"-with-text").concat(t,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,r.Z)(a,"&-vertical".concat(t,"-dashed"),{borderInlineStartWidth:s,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,r.Z)(a,"&-plain".concat(t,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,r.Z)(a,"&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left"),(0,r.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(t,"-inner-text"),{paddingInlineStart:n})),(0,r.Z)(a,"&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right"),(0,r.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(t,"-inner-text"),{paddingInlineEnd:n})),a)))},m=(0,d.Z)("Divider",(function(e){var a=(0,f.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[u(a)]}),(function(e){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}})),x=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};var v=function(e){var a,t=i.useContext(o.E_),s=t.getPrefixCls,l=t.direction,d=t.divider,f=e.prefixCls,u=e.type,v=void 0===u?"horizontal":u,h=e.orientation,g=void 0===h?"center":h,b=e.orientationMargin,p=e.className,Z=e.rootClassName,N=e.children,j=e.dashed,y=e.plain,w=e.style,P=x(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),k=s("divider",f),C=m(k),S=(0,n.Z)(C,2),E=S[0],z=S[1],O=g.length>0?"-".concat(g):g,I=!!N,R="left"===g&&null!=b,B="right"===g&&null!=b,H=c()(k,null===d||void 0===d?void 0:d.className,z,"".concat(k,"-").concat(v),(a={},(0,r.Z)(a,"".concat(k,"-with-text"),I),(0,r.Z)(a,"".concat(k,"-with-text").concat(O),I),(0,r.Z)(a,"".concat(k,"-dashed"),!!j),(0,r.Z)(a,"".concat(k,"-plain"),!!y),(0,r.Z)(a,"".concat(k,"-rtl"),"rtl"===l),(0,r.Z)(a,"".concat(k,"-no-default-orientation-margin-left"),R),(0,r.Z)(a,"".concat(k,"-no-default-orientation-margin-right"),B),a),p,Z),M=i.useMemo((function(){return"number"===typeof b?b:/^\d+$/.test(b)?Number(b):b}),[b]),_=Object.assign(Object.assign({},R&&{marginLeft:M}),B&&{marginRight:M});return E(i.createElement("div",Object.assign({className:H,style:Object.assign(Object.assign({},null===d||void 0===d?void 0:d.style),w)},P,{role:"separator"}),N&&"vertical"!==v&&i.createElement("span",{className:"".concat(k,"-inner-text"),style:_},N)))}},45736:function(e,a,t){var r=t(1413),n=t(45987),i=t(81694),s=t.n(i),c=t(72791),o=t(10162),l=t(80184),d=["bsPrefix","bg","pill","text","className","as"],f=c.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bg,c=void 0===i?"primary":i,f=e.pill,u=void 0!==f&&f,m=e.text,x=e.className,v=e.as,h=void 0===v?"span":v,g=(0,n.Z)(e,d),b=(0,o.vE)(t,"badge");return(0,l.jsx)(h,(0,r.Z)((0,r.Z)({ref:a},g),{},{className:s()(x,b,u&&"rounded-pill",m&&"text-".concat(m),c&&"bg-".concat(c))}))}));f.displayName="Badge",a.Z=f},28282:function(e,a,t){t.d(a,{Z:function(){return D}});var r=t(1413),n=t(45987),i=t(81694),s=t.n(i),c=t(72791),o=t(10162),l=t(80184),d=["className","bsPrefix","as"],f=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,f=void 0===c?"div":c,u=(0,n.Z)(e,d);return i=(0,o.vE)(i,"card-body"),(0,l.jsx)(f,(0,r.Z)({ref:a,className:s()(t,i)},u))}));f.displayName="CardBody";var u=f,m=["className","bsPrefix","as"],x=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,d=void 0===c?"div":c,f=(0,n.Z)(e,m);return i=(0,o.vE)(i,"card-footer"),(0,l.jsx)(d,(0,r.Z)({ref:a,className:s()(t,i)},f))}));x.displayName="CardFooter";var v=x,h=c.createContext(null);h.displayName="CardHeaderContext";var g=h,b=["bsPrefix","className","as"],p=c.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,d=e.as,f=void 0===d?"div":d,u=(0,n.Z)(e,b),m=(0,o.vE)(t,"card-header"),x=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,l.jsx)(g.Provider,{value:x,children:(0,l.jsx)(f,(0,r.Z)((0,r.Z)({ref:a},u),{},{className:s()(i,m)}))})}));p.displayName="CardHeader";var Z=p,N=["bsPrefix","className","variant","as"],j=c.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.variant,d=e.as,f=void 0===d?"img":d,u=(0,n.Z)(e,N),m=(0,o.vE)(t,"card-img");return(0,l.jsx)(f,(0,r.Z)({ref:a,className:s()(c?"".concat(m,"-").concat(c):m,i)},u))}));j.displayName="CardImg";var y=j,w=["className","bsPrefix","as"],P=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,d=void 0===c?"div":c,f=(0,n.Z)(e,w);return i=(0,o.vE)(i,"card-img-overlay"),(0,l.jsx)(d,(0,r.Z)({ref:a,className:s()(t,i)},f))}));P.displayName="CardImgOverlay";var k=P,C=["className","bsPrefix","as"],S=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,d=void 0===c?"a":c,f=(0,n.Z)(e,C);return i=(0,o.vE)(i,"card-link"),(0,l.jsx)(d,(0,r.Z)({ref:a,className:s()(t,i)},f))}));S.displayName="CardLink";var E=S,z=t(27472),O=["className","bsPrefix","as"],I=(0,z.Z)("h6"),R=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,d=void 0===c?I:c,f=(0,n.Z)(e,O);return i=(0,o.vE)(i,"card-subtitle"),(0,l.jsx)(d,(0,r.Z)({ref:a,className:s()(t,i)},f))}));R.displayName="CardSubtitle";var B=R,H=["className","bsPrefix","as"],M=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,d=void 0===c?"p":c,f=(0,n.Z)(e,H);return i=(0,o.vE)(i,"card-text"),(0,l.jsx)(d,(0,r.Z)({ref:a,className:s()(t,i)},f))}));M.displayName="CardText";var _=M,T=["className","bsPrefix","as"],W=(0,z.Z)("h5"),G=c.forwardRef((function(e,a){var t=e.className,i=e.bsPrefix,c=e.as,d=void 0===c?W:c,f=(0,n.Z)(e,T);return i=(0,o.vE)(i,"card-title"),(0,l.jsx)(d,(0,r.Z)({ref:a,className:s()(t,i)},f))}));G.displayName="CardTitle";var L=G,F=["bsPrefix","className","bg","text","border","body","children","as"],A=c.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.bg,d=e.text,f=e.border,m=e.body,x=void 0!==m&&m,v=e.children,h=e.as,g=void 0===h?"div":h,b=(0,n.Z)(e,F),p=(0,o.vE)(t,"card");return(0,l.jsx)(g,(0,r.Z)((0,r.Z)({ref:a},b),{},{className:s()(i,p,c&&"bg-".concat(c),d&&"text-".concat(d),f&&"border-".concat(f)),children:x?(0,l.jsx)(u,{children:v}):v}))}));A.displayName="Card";var D=Object.assign(A,{Img:y,Title:L,Subtitle:B,Body:u,Link:E,Text:_,Header:Z,Footer:v,ImgOverlay:k})},27472:function(e,a,t){var r=t(1413),n=t(72791),i=t(81694),s=t.n(i),c=t(80184);a.Z=function(e){return n.forwardRef((function(a,t){return(0,c.jsx)("div",(0,r.Z)((0,r.Z)({},a),{},{ref:t,className:s()(a.className,e)}))}))}}}]);
//# sourceMappingURL=369.fc861049.chunk.js.map