"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[907],{8409:function(t,e,s){s.d(e,{Z:function(){return l}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-navbar-wrapper"},[s("section",{staticClass:"sidebar-navbar"},[s("div",[s("img",{staticClass:"product-mark mb-4",attrs:{src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}}),s("router-link",{staticClass:"tab",attrs:{to:{name:"admimTweet"}},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.navbarHandler("tweetList")}}},[s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/L4rVt08L/PcHome.png",alt:""}}),s("img",{staticClass:"icon-active",attrs:{src:"https://i.postimg.cc/nh1YtFYG/Pc-Home-Active.png",alt:""}}),s("p",{class:{active:t.tweetList}},[t._v("推文清單")])]),s("router-link",{staticClass:"tab",attrs:{to:{name:"admimUser"}},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.navbarHandler("userList")}}},[s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/qvB6y8y2/PcUser.png",alt:""}}),s("img",{staticClass:"icon-active",attrs:{src:"https://i.postimg.cc/28kSKCyD/Pc-User-Active.png",alt:""}}),s("p",{class:{active:t.userList}},[t._v("使用者列表")])])],1),s("div",{staticClass:"logout-button d-flex ml-2",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.logoutHandler.apply(null,arguments)}}},[s("img",{staticClass:"logout",attrs:{src:"https://i.postimg.cc/NjVnH4Yp/logoOut.png",alt:""}}),s("p",{staticClass:"ml-2"},[t._v("登出")])])])])},i=[],r={data:function(){return{userList:!1,tweetList:!1}},methods:{navbarHandler:function(t){"tweetList"===t?(this.tweetList=!0,this.userList=!1,this.$router.push("/admin/tweet")):"userList"===t&&(this.userList=!1,this.userList=!0,this.$router.push("/admin/user"))},logoutHandler:function(){localStorage.setItem("token",""),this.$router.push("/login")}}},n=r,c=s(1001),o=(0,c.Z)(n,a,i,!1,null,"5d077652",null),l=o.exports},907:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("adminNavbar")],1),s("div",{staticClass:"list-wrapper"},[s("div",{staticClass:"tweet-card font-size-24 font-weight-bolder pl-4 pt-3 pb-3"},[t._v(" 推文清單 ")]),t._l(t.tweets,(function(e){return s("div",{key:e.id,staticClass:"tweet-card row pt-4",staticStyle:{height:"110px"}},[s("div",{staticClass:"col-1"},[s("img",{staticClass:"avatar",attrs:{src:e.User.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),s("div",{staticClass:"col-10 pl-5"},[s("div",{staticClass:"row"},[s("h5",{staticClass:"user-name"},[t._v(t._s(e.User.name))]),s("h6",{staticClass:"account-time"},[t._v(" @"+t._s(e.User.account)+" • "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),s("div",{staticClass:"row"},[s("p",{staticClass:"description"},[t._v(" "+t._s(t._f("wordsLimit")(e.description))+" ")])])]),s("div",{staticClass:"col-1",staticStyle:{padding:"5px 0px"}},[s("div",{staticClass:"d-flex justify-content-end"},[s("img",{staticClass:"iconX mr-3 mt-1",attrs:{src:"https://i.postimg.cc/CxWv1xH2/X-button.png",alt:"","data-toggle":"modal","data-target":"#deleteTweet"+e.id}}),s("div",{staticClass:"modal fade",attrs:{id:"deleteTweet"+e.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0,!0),s("div",{staticClass:"modal-body"},[t._v("是否刪除該筆貼文")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.deleteTweet(e.id)}}},[t._v(" 確定刪除 ")])])])])])])])])}))],2)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=s(6198),n=(s(7327),s(1539),s(5666),s(9032)),c=s(8247),o=s(8409),l=s(9755),u=s.n(l),d=s(1926),p={data:function(){return{tweets:[],replyMessage:"",isLike:""}},components:{adminNavbar:o.Z},mixins:[c.q],created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.Z.adminGetTweets();case 3:s=e.sent,a=s.data,t.tweets=a.tweets,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deleteTweet:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,n.Z.deleteTweets(t);case 3:s.sent,e.tweets=e.tweets.filter((function(e){return e.id!==t})),u()("#deleteTweet".concat(t)).modal("hide"),d.F.fire({icon:"success",title:"已成功刪除貼文"}),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,9]])})))()}},filters:{wordsLimit:function(t){return t.length<50||(t=t.substr(0,50)+"..."),t}}},m=p,v=s(1001),g=(0,v.Z)(m,a,i,!1,null,"213605ba",null),h=g.exports},9032:function(t,e,s){var a=s(1926),i=function(){return localStorage.getItem("token")};e["Z"]={adminGetTweets:function(){return a.l.get("/admin/tweets",{headers:{Authorization:"Bearer ".concat(i())}})},deleteTweets:function(t){return a.l["delete"]("/admin/tweets/".concat(t),{headers:{Authorization:"Bearer ".concat(i())}})},adminGetUsersList:function(){return a.l.get("admin/users",{headers:{Authorization:"Bearer ".concat(i())}})}}}}]);
//# sourceMappingURL=907-legacy.100a54a3.js.map