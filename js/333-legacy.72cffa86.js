"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[333],{2927:function(t,s,e){e.d(s,{Z:function(){return u}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar-navbar-wrapper"},[e("section",{staticClass:"sidebar-navbar"},[e("div",[e("img",{staticClass:"product-mark mb-4",attrs:{src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}}),e("div",{staticClass:"tab",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.navbarHandler("tweetList")}}},[t.tweetList?e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/nh1YtFYG/Pc-Home-Active.png",alt:""}}):e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/L4rVt08L/PcHome.png",alt:""}}),e("p",{class:{active:t.tweetList}},[t._v("推文清單")])]),e("div",{staticClass:"tab",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.navbarHandler("userList")}}},[t.userList?e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/28kSKCyD/Pc-User-Active.png",alt:""}}):e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/qvB6y8y2/PcUser.png",alt:""}}),e("p",{class:{active:t.userList}},[t._v("使用者列表")])]),e("div",{staticClass:"d-flex ml-2",on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.logoutHandler.apply(null,arguments)}}},[e("img",{staticClass:"logout",attrs:{src:"https://i.postimg.cc/NjVnH4Yp/logoOut.png",alt:""}}),e("p",{staticClass:"ml-2"},[t._v("登出")])])])])])},i=[],n={data:function(){return{userList:!1,tweetList:!1}},methods:{navbarHandler:function(t){"tweetList"===t?(this.tweetList=!0,this.userList=!1,this.$router.push("/admin/tweet")):"userList"===t&&(this.userList=!1,this.userList=!0,this.$router.push("/admin/user"))},logoutHandler:function(){localStorage.setItem("token",""),this.$router.push("/login")}}},r=n,c=e(1001),o=(0,c.Z)(r,a,i,!1,null,"930798b0",null),u=o.exports},4333:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("adminNavbar")],1),e("div",{staticClass:"userlist"},t._l(t.users,(function(s){return e("div",{key:s.id},[e("div",[e("img",{staticClass:"avatar",attrs:{src:s.avatar,alt:""}}),t._v(" avatar 頭貼")]),e("div",[t._v(t._s(s.name))]),e("div",[t._v("@"+t._s(s.account))]),e("div",[e("img",{attrs:{src:"https://i.postimg.cc/Y93L2z3G/icon.png",alt:""}}),e("span",[t._v(" 發文數量"+t._s(s.tweetCount)+" ")])]),e("div",[e("img",{attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""}}),e("span",[t._v(" liked 數量 "+t._s(s.likeCount)+" ")])]),e("div",[e("span",[t._v(t._s(s.followingCount)+" 個跟隨中")]),e("span",[t._v(t._s(s.followerCount)+" 個跟隨中")])])])})),0)])},i=[],n=e(6198),r=(e(5666),e(9032)),c=e(8247),o=e(2927),u={components:{adminNavbar:o.Z},mixins:[c.q],data:function(){return{users:[]}},created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var e,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,r.Z.adminGetUsersList();case 3:e=s.sent,a=e.data,t.users=a,console.log(t.users),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,9]])})))()}}},l=u,p=e(1001),d=(0,p.Z)(l,a,i,!1,null,"2deefde5",null),v=d.exports},9032:function(t,s,e){var a=e(1926),i=function(){return localStorage.getItem("token")};s["Z"]={adminGetTweets:function(){return a.l.get("/admin/tweets",{headers:{Authorization:"Bearer ".concat(i())}})},deleteTweets:function(t){return a.l["delete"]("/admin/tweets/".concat(t),{headers:{Authorization:"Bearer ".concat(i())}})},adminGetUsersList:function(){return a.l.get("admin/users",{headers:{Authorization:"Bearer ".concat(i())}})}}}}]);
//# sourceMappingURL=333-legacy.72cffa86.js.map