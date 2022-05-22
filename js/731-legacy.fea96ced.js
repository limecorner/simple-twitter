"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[731],{8409:function(t,s,a){a.d(s,{Z:function(){return l}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sidebar-navbar-wrapper"},[a("section",{staticClass:"sidebar-navbar"},[a("div",[a("img",{staticClass:"product-mark mb-4",attrs:{src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}}),a("router-link",{staticClass:"tab",attrs:{to:{name:"admimTweet"}},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.navbarHandler("tweetList")}}},[a("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/L4rVt08L/PcHome.png",alt:""}}),a("img",{staticClass:"icon-active",attrs:{src:"https://i.postimg.cc/nh1YtFYG/Pc-Home-Active.png",alt:""}}),a("p",{class:{active:t.tweetList}},[t._v("推文清單")])]),a("router-link",{staticClass:"tab",attrs:{to:{name:"admimUser"}},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.navbarHandler("userList")}}},[a("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/qvB6y8y2/PcUser.png",alt:""}}),a("img",{staticClass:"icon-active",attrs:{src:"https://i.postimg.cc/28kSKCyD/Pc-User-Active.png",alt:""}}),a("p",{class:{active:t.userList}},[t._v("使用者列表")])])],1),a("div",{staticClass:"logout-button d-flex ml-2",on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.logoutHandler.apply(null,arguments)}}},[a("img",{staticClass:"logout",attrs:{src:"https://i.postimg.cc/NjVnH4Yp/logoOut.png",alt:""}}),a("p",{staticClass:"ml-2"},[t._v("登出")])])])])},i=[],n={data:function(){return{userList:!1,tweetList:!1}},methods:{navbarHandler:function(t){"tweetList"===t?(this.tweetList=!0,this.userList=!1,this.$router.push("/admin/tweet")):"userList"===t&&(this.userList=!1,this.userList=!0,this.$router.push("/admin/user"))},logoutHandler:function(){localStorage.setItem("token",""),this.$router.push("/login")}}},r=n,c=a(1001),o=(0,c.Z)(r,e,i,!1,null,"5d077652",null),l=o.exports},1731:function(t,s,a){a.r(s),a.d(s,{default:function(){return m}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",[a("adminNavbar")],1),a("div",{staticClass:"userlist"},[a("div",{staticClass:"container"},[a("h4",{staticClass:"mt-3"},[t._v("使用者列表")]),a("div",{staticClass:"row",attrs:{id:"user-panel"}},t._l(t.users,(function(s){return a("div",{key:s.id},[a("div",{staticClass:"col"},[a("div",{staticClass:"mb-2"},[a("div",{staticClass:"card"},[a("div",[a("img",{staticClass:"cover",attrs:{src:s.cover_image||"https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",alt:"背景圖片"}})]),a("img",{staticClass:"avatar",attrs:{src:s.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:"使用者頭貼"}}),a("div",{staticClass:"card-body"},[a("h5",[t._v(t._s(s.name))]),a("p",{staticClass:"font-color-light font-size-14"},[t._v(" @"+t._s(s.account)+" ")]),a("div",{staticClass:"d-grid gap-2 d-md-flex justify-content-center mt-2"},[a("img",{staticClass:"tweet-count",attrs:{src:"https://i.postimg.cc/Y93L2z3G/icon.png",alt:""}}),a("span",{staticClass:"font-size-15 pl-1"},[t._v(t._s(s.tweetCount)+" ")]),a("img",{staticClass:"user-like-count",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""}}),a("span",{staticClass:"font-size-15 pl-1"},[t._v(t._s(s.likeCount)+" ")])]),a("div",{staticClass:"d-grid gap-2 d-md-flex justify-content-center mt-2"},[a("span",{staticClass:"font-size-14"},[t._v(t._s(s.followingCount)+" 個"),a("span",{staticClass:"font-color-light"},[t._v("跟隨中")])]),a("span",{staticClass:"font-size-14"},[t._v(t._s(s.followerCount)+" 位"),a("span",{staticClass:"font-color-light"},[t._v("跟隨中")])])])])])])])])})),0)])])])},i=[],n=a(6198),r=(a(5666),a(9032)),c=a(8247),o=a(8409),l={components:{adminNavbar:o.Z},mixins:[c.q],data:function(){return{users:[]}},created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,r.Z.adminGetUsersList();case 3:a=s.sent,e=a.data,t.users=e,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()}}},u=l,p=a(1001),d=(0,p.Z)(u,e,i,!1,null,"b11bbab6",null),m=d.exports},9032:function(t,s,a){var e=a(1926),i=function(){return localStorage.getItem("token")};s["Z"]={adminGetTweets:function(){return e.l.get("/admin/tweets",{headers:{Authorization:"Bearer ".concat(i())}})},deleteTweets:function(t){return e.l["delete"]("/admin/tweets/".concat(t),{headers:{Authorization:"Bearer ".concat(i())}})},adminGetUsersList:function(){return e.l.get("admin/users",{headers:{Authorization:"Bearer ".concat(i())}})}}}}]);
//# sourceMappingURL=731-legacy.fea96ced.js.map