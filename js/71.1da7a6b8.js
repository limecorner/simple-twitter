"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[71],{2927:function(t,s,e){e.d(s,{Z:function(){return o}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar-navbar-wrapper"},[e("section",{staticClass:"sidebar-navbar"},[e("div",[e("img",{staticClass:"product-mark mb-4",attrs:{src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}}),e("div",{staticClass:"tab",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.navbarHandler("tweetList")}}},[t.tweetList?e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/nh1YtFYG/Pc-Home-Active.png",alt:""}}):e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/L4rVt08L/PcHome.png",alt:""}}),e("p",{class:{active:t.tweetList}},[t._v("推文清單")])]),e("div",{staticClass:"tab",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.navbarHandler("userList")}}},[t.userList?e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/28kSKCyD/Pc-User-Active.png",alt:""}}):e("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/qvB6y8y2/PcUser.png",alt:""}}),e("p",{class:{active:t.userList}},[t._v("使用者列表")])]),e("div",{staticClass:"d-flex ml-2",on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.logoutHandler.apply(null,arguments)}}},[e("img",{staticClass:"logout",attrs:{src:"https://i.postimg.cc/NjVnH4Yp/logoOut.png",alt:""}}),e("p",{staticClass:"ml-2"},[t._v("登出")])])])])])},i=[],r={data(){return{userList:!1,tweetList:!1}},methods:{navbarHandler(t){"tweetList"===t?(this.tweetList=!0,this.userList=!1,this.$router.push("/admin/tweet")):"userList"===t&&(this.userList=!1,this.userList=!0,this.$router.push("/admin/user"))},logoutHandler(){localStorage.setItem("token",""),this.$router.push("/login")}}},c=r,n=e(1001),l=(0,n.Z)(c,a,i,!1,null,"930798b0",null),o=l.exports},3071:function(t,s,e){e.r(s),e.d(s,{default:function(){return p}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",[e("adminNavbar")],1),e("div",{staticClass:"tweet-card font-size-24 font-weight-bolder"},[t._v("推文清單")]),t._l(t.tweets,(function(s){return e("div",{key:s.id,staticClass:"tweet-card row",staticStyle:{height:"110px"}},[e("div",{staticClass:"col-1"},[e("img",{staticClass:"avatar",attrs:{src:s.User.avatar,alt:""}})]),e("div",{staticClass:"col-10 pl-5"},[e("div",{staticClass:"row"},[e("h5",{staticClass:"user-name"},[t._v(t._s(s.User.name))]),e("h6",{staticClass:"account-time"},[t._v(" @"+t._s(s.User.account)+" • "+t._s(t._f("fromNow")(s.createdAt))+" ")])]),e("div",{staticClass:"row"},[e("p",{staticClass:"description"},[t._v(" "+t._s(s.description)+" ")])])]),e("div",{staticClass:"col-1",staticStyle:{padding:"5px 0px"}},[e("div",{staticClass:"d-flex justify-content-end",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteTweet(s.id)}}},[e("img",{staticClass:"iconX",attrs:{src:"https://i.postimg.cc/CxWv1xH2/X-button.png",alt:""}})])])])}))],2)},i=[],r=e(9032),c=e(8247),n=e(2927),l={components:{adminNavbar:n.Z},mixins:[c.q],data(){return{tweets:[],replyMessage:"",isLike:""}},created(){this.fetchTweets()},methods:{async fetchTweets(){try{const t=await r.Z.adminGetTweets(),{data:s}=t;this.tweets=s.tweets}catch(t){console.log(t)}},async deleteTweet(t){try{const s=await r.Z.deleteTweets(t);console.log(s)}catch(s){console.log(s)}}}},o=l,u=e(1001),d=(0,u.Z)(o,a,i,!1,null,"7e0dcc84",null),p=d.exports},9032:function(t,s,e){var a=e(1926);const i=()=>localStorage.getItem("token");s["Z"]={adminGetTweets(){return a.l.get("/admin/tweets",{headers:{Authorization:`Bearer ${i()}`}})},deleteTweets(t){return a.l["delete"](`/admin/tweets/${t}`,{headers:{Authorization:`Bearer ${i()}`}})},adminGetUsersList(){return a.l.get("admin/users",{headers:{Authorization:`Bearer ${i()}`}})}}}}]);
//# sourceMappingURL=71.1da7a6b8.js.map