"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[555],{1555:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mx-auto",staticStyle:{width:"400px"}},[e._m(0),t("h3",{staticClass:"text-center font-weight-bold"},[e._v("建立你的帳號")]),t("form",{on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-wrapper mt-4",attrs:{height:"54px"}},[t("label",{attrs:{for:"account"}},[e._v("帳號")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"form",class:{wrong:e.accountError},attrs:{id:"account",name:"account",type:"text",placeholder:"請輸入帳號",required:"",autofocus:""},domProps:{value:e.account},on:{input:function(a){a.target.composing||(e.account=a.target.value)}}})])]),t("div",{staticClass:"error-message"},[e.account.length>50?t("span",[e._v("字數超出上限！")]):e._e(),e.accountError?t("span",[e._v("帳號已經被註冊！")]):e._e()]),t("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[t("label",{attrs:{for:"name"}},[e._v("名稱")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form",class:{wrong:e.name.length>50},attrs:{id:"name",name:"name",type:"text",placeholder:"請輸入使用者名稱",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})])]),t("div",{staticClass:"error-message"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.name.length>50,expression:"name.length > 50"}]},[e._v("字數超出上限 50字！")])]),t("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form",class:{wrong:e.emailError},attrs:{id:"email",name:"email",type:"email",placeholder:"請輸入 Email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})])]),t("div",{staticClass:"error-message"},[e.emailError?t("span",[e._v("Email 已經被註冊！")]):e._e()]),t("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[t("label",{attrs:{for:"password"}},[e._v("密碼")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form",class:{wrong:e.passwordError},attrs:{id:"password",name:"password",type:"password",placeholder:"請輸入密碼",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})])]),t("div",{staticClass:"error-message"},[e.passwordError?t("span",[e._v("密碼與確認密碼不符。")]):e._e()]),t("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[t("label",{attrs:{for:"checkPassword"}},[e._v("密碼確認")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],staticClass:"form",class:{wrong:e.passwordError},attrs:{id:"checkPassword",name:"checkPassword",type:"password",placeholder:"請再次輸入密碼",required:""},domProps:{value:e.checkPassword},on:{input:function(a){a.target.composing||(e.checkPassword=a.target.value)}}})])]),t("div",{staticClass:"error-message"},[e.passwordError?t("span",[e._v("密碼與確認密碼不符。")]):e._e()]),t("div",{staticClass:"mt-4"},[t("button",{staticClass:"btn btn-info btn-singin",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" 註冊 ")])])]),t("div",{staticClass:"d-flex mt-4 justify-content-center"},[t("router-link",{staticClass:"mx-1",attrs:{to:"/login"}},[e._v(" 取消 ")])],1)])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mx-auto",staticStyle:{width:"40px"}},[t("img",{staticClass:"mx-auto mt-4",attrs:{width:"40px",src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}})])}],o=t(6198),n=(t(5666),t(8309),t(6047)),i=t(1926),c={data:function(){return{account:"",name:"",email:"",password:"",checkPassword:"",accountError:!1,nameError:!1,emailError:!1,passwordError:!1,isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!(e.name.length>50)){a.next=3;break}return a.abrupt("return");case 3:if(e.account&&e.name&&e.email&&e.password&&e.checkPassword){a.next=6;break}return i.F.fire({icon:"warning",title:"請確認已填寫所有欄位"}),a.abrupt("return");case 6:return e.accountError=!1,e.emailError=!1,e.passwordError=!1,a.next=11,n.Z.regist({account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.checkPassword});case 11:if(t=a.sent,console.log("伺服器 回應",t),"error"!==t.data.status){a.next=30;break}if(r=t.data.message,"帳號已經註冊。"!==r){a.next=20;break}return e.accountError=!0,a.abrupt("return");case 20:if("Email 已經註冊。"!==r){a.next=25;break}return e.emailError=!0,a.abrupt("return");case 25:if("密碼與確認密碼不符。"!==r){a.next=28;break}return e.passwordError=!0,a.abrupt("return");case 28:a.next=31;break;case 30:"註冊成功"===t.data.message&&i.F.fire({icon:"success",title:"註冊成功"});case 31:a.next=37;break;case 33:a.prev=33,a.t0=a["catch"](0),console.log(a.t0),i.F.fire({icon:"warning",title:a.t0});case 37:case"end":return a.stop()}}),a,null,[[0,33]])})))()}}},l=c,m=t(1001),u=(0,m.Z)(l,r,s,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=555-legacy.2f8b0d8c.js.map