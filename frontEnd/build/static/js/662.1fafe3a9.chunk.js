(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[662],{23706:function(e,t,r){"use strict";r.r(t);var n=r(74165),s=r(15861),a=r(29439),o=r(72791),l=r(57689),c=r(11087),i=r(43289),d=r(13855),u=r(31243),m=r(80226),p=r(80184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],f=t[1],h=(0,o.useState)(""),x=(0,a.Z)(h,2),g=x[0],v=x[1],j=(0,o.useState)(""),b=(0,a.Z)(j,2),Z=b[0],y=b[1],N=(0,o.useState)(""),k=(0,a.Z)(N,2),_=k[0],C=k[1],w=(0,o.useState)(!1),S=(0,a.Z)(w,2),P=S[0],L=S[1],I=(0,l.s0)();(0,o.useEffect)((function(){null===localStorage.getItem("token")||I("/login"),localStorage.getItem("isAdmin")&&I("/spinner"),localStorage.getItem("isReceptionist")&&I("/spinner"),localStorage.getItem("isPatient")&&I("/spinner")}),[]);var T=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1!==t.currentTarget.checkValidity()){e.next=7;break}return t.preventDefault(),t.stopPropagation(),L(!0),e.abrupt("return");case 7:return t.preventDefault(),t.stopPropagation(),s={firstName:r,lastName:g,email:Z,password:_},e.next=12,u.Z.post("/api/v1/user/register",s);case 12:(a=e.sent).data.success?(m.ZP.success("Register successfull"),I("/login")):m.ZP.error(a.data.message),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),m.ZP.error("Something went wrong"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsx)("section",{className:"vh-100 d-flex align-items-center justify-content-center flex-column",children:(0,p.jsx)("div",{className:"container h-custom",children:(0,p.jsxs)("div",{className:"row d-flex justify-content-center align-items-center h-100 shadow-lg rounded py-5",children:[(0,p.jsx)("div",{className:"col-md-9 col-lg-6 col-xl-5",children:(0,p.jsx)("img",{src:i,className:"img-fluid",alt:""})}),(0,p.jsx)("div",{className:"col-md-8 col-lg-6 col-xl-4 offset-xl-1",children:(0,p.jsxs)(d.Z,{noValidate:!0,validated:P,onSubmit:T,autoComplete:"off",children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-6 mb-4",children:(0,p.jsx)("div",{className:"form-outline",children:(0,p.jsxs)(d.Z.Group,{controlId:"firstName",children:[(0,p.jsx)(d.Z.Label,{children:"First name"}),(0,p.jsx)(d.Z.Control,{required:!0,type:"text",placeholder:"First name",className:"form-control",value:r,onChange:function(e){return f(e.target.value)}}),(0,p.jsx)(d.Z.Control.Feedback,{children:"Looks good!"})]})})}),(0,p.jsx)("div",{className:"col-md-6 mb-4",children:(0,p.jsx)("div",{className:"form-outline",children:(0,p.jsxs)(d.Z.Group,{controlId:"lastName",children:[(0,p.jsx)(d.Z.Label,{children:"Last name"}),(0,p.jsx)(d.Z.Control,{required:!0,type:"text",placeholder:"Last name",className:"form-control",value:g,onChange:function(e){return v(e.target.value)}}),(0,p.jsx)(d.Z.Control.Feedback,{children:"Looks good!"})]})})})]}),(0,p.jsx)("div",{className:"form-outline mb-4",children:(0,p.jsxs)(d.Z.Group,{controlId:"emailAddress",children:[(0,p.jsx)(d.Z.Label,{children:"Email address"}),(0,p.jsx)(d.Z.Control,{required:!0,type:"text",placeholder:"Email Address",className:"form-control",value:Z,onChange:function(e){return y(e.target.value)}}),(0,p.jsx)(d.Z.Control.Feedback,{children:"Looks good!"})]})}),(0,p.jsx)("div",{className:"form-outline mb-4",children:(0,p.jsxs)(d.Z.Group,{controlId:"password",children:[(0,p.jsx)(d.Z.Label,{children:"Password"}),(0,p.jsx)(d.Z.Control,{required:!0,type:"password",placeholder:"Password",autoComplete:"on",className:"form-control",value:_,onChange:function(e){return C(e.target.value)}}),(0,p.jsx)(d.Z.Control.Feedback,{children:"Looks good!"})]})}),(0,p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",children:"Sign up"}),(0,p.jsx)("div",{className:"text-center",children:(0,p.jsxs)("p",{className:"small fw-bold mt-2 pt-1 mb-0",children:["Don't have an account? ",(0,p.jsx)(c.rU,{to:"/login",className:"link-danger",children:"Login"})]})})]})})]})})})}},80888:function(e,t,r){"use strict";var n=r(79047);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,a,o){if(o!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return r.PropTypes=r,r}},52007:function(e,t,r){e.exports=r(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=662.1fafe3a9.chunk.js.map