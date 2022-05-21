"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[555],{1555:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mx-auto",staticStyle:{width:"400px"}},[t._m(0),a("h3",{staticClass:"text-center font-weight-bold"},[t._v("建立你的帳號")]),a("form",{on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-wrapper mt-4",attrs:{height:"54px"}},[a("label",{attrs:{for:"account"}},[t._v("帳號")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form",class:{wrong:t.accountError},attrs:{id:"account",name:"account",type:"text",placeholder:"請輸入帳號",required:"",autofocus:""},domProps:{value:t.account},on:{input:function(s){s.target.composing||(t.account=s.target.value)}}})])]),a("div",{staticClass:"error-message"},[t.account.length>50?a("span",[t._v("字數超出上限！")]):t._e(),t.accountError?a("span",[t._v("帳號已經被註冊！")]):t._e()]),a("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[a("label",{attrs:{for:"name"}},[t._v("名稱")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form",class:{wrong:t.name.length>50},attrs:{id:"name",name:"name",type:"text",placeholder:"請輸入使用者名稱",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})])]),a("div",{staticClass:"error-message"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.name.length>50,expression:"name.length > 50"}]},[t._v("字數超出上限 50字！")])]),a("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form",class:{wrong:t.emailError},attrs:{id:"email",name:"email",type:"email",placeholder:"請輸入 Email",required:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})])]),a("div",{staticClass:"error-message"},[t.emailError?a("span",[t._v("Email 已經被註冊！")]):t._e()]),a("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[a("label",{attrs:{for:"password"}},[t._v("密碼")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form",class:{wrong:t.passwordError},attrs:{id:"password",name:"password",type:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),a("div",{staticClass:"error-message"},[t.passwordError?a("span",[t._v("密碼與確認密碼不符。")]):t._e()]),a("div",{staticClass:"form-wrapper mt-2",attrs:{height:"54px"}},[a("label",{attrs:{for:"checkPassword"}},[t._v("密碼確認")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkPassword,expression:"checkPassword"}],staticClass:"form",class:{wrong:t.passwordError},attrs:{id:"checkPassword",name:"checkPassword",type:"password",placeholder:"請再次輸入密碼",required:""},domProps:{value:t.checkPassword},on:{input:function(s){s.target.composing||(t.checkPassword=s.target.value)}}})])]),a("div",{staticClass:"error-message"},[t.passwordError?a("span",[t._v("密碼與確認密碼不符。")]):t._e()]),a("div",{staticClass:"mt-4"},[a("button",{staticClass:"btn btn-info btn-singin",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" 註冊 ")])])]),a("div",{staticClass:"d-flex mt-4 justify-content-center"},[a("router-link",{staticClass:"mx-1",attrs:{to:"/login"}},[t._v(" 取消 ")])],1)])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mx-auto",staticStyle:{width:"40px"}},[a("img",{staticClass:"mx-auto mt-4",attrs:{width:"40px",src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}})])}],i=a(6047),o=a(1926),n={data(){return{account:"",name:"",email:"",password:"",checkPassword:"",accountError:!1,nameError:!1,emailError:!1,passwordError:!1,isProcessing:!1}},methods:{async handleSubmit(){try{if(this.name.length>50)return;if(!this.account||!this.name||!this.email||!this.password||!this.checkPassword)return void o.F.fire({icon:"warning",title:"請確認已填寫所有欄位"});this.accountError=!1,this.emailError=!1,this.passwordError=!1;const t=await i.Z.regist({account:this.account,name:this.name,email:this.email,password:this.password,checkPassword:this.checkPassword});if(console.log("伺服器 回應",t),"error"===t.data.status){const s=t.data.message;if("帳號已經註冊。"===s)return void(this.accountError=!0);if("Email 已經註冊。"===s)return void(this.emailError=!0);if("密碼與確認密碼不符。"===s)return void(this.passwordError=!0)}else"註冊成功"===t.data.message&&o.F.fire({icon:"success",title:"註冊成功"})}catch(t){console.log(t),o.F.fire({icon:"warning",title:t})}}}},c=n,l=a(1001),m=(0,l.Z)(c,e,r,!1,null,null,null),d=m.exports}}]);
//# sourceMappingURL=555.cf62f8dc.js.map