"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[943],{943:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-page d-flex"},[s("NavBar",{on:{"modal-sbmit":e.submitTweetMessageModal}}),s("section",{staticClass:"user-section"},[s("div",{staticClass:"card col",staticStyle:{"z-index":"1"}},[s("div",{staticClass:"row card-header title"},[e._v("首頁")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"},[s("img",{staticClass:"avatar mt-2",attrs:{src:e.currentUser.avatar,alt:""}})]),s("div",{staticClass:"col-11"},[s("form",[s("div",{staticClass:"d-flex pt-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.tweetMessage,expression:"tweetMessage"}],staticClass:"mt-2",attrs:{required:"",cols:"35",rows:"5",placeholder:"有什麼新鮮事？","aria-label":"With textarea"},domProps:{value:e.tweetMessage},on:{input:function(t){t.target.composing||(e.tweetMessage=t.target.value)}}})]),s("div",{staticClass:"d-flex justify-content-end align-items-center mb-3"},[s("div",{staticClass:"mr-4"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.tweetMessage.length>140,expression:"tweetMessage.length > 140"}],staticClass:"error-notice"},[e._v(" 字數不可超過140字 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.blankContent&&0===e.tweetMessage.length,expression:"blankContent && tweetMessage.length === 0"}],staticClass:"error-notice"},[e._v(" 內容不可空白 ")])]),s("button",{staticClass:"tweet-btn",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.submitTweetMessage.apply(null,arguments)}}},[e._v(" 推文 ")])])])])])]),s("div",{staticClass:"col",staticStyle:{height:"10px",background:"#f0f8ff"}}),s("div",{staticClass:"col"},e._l(e.tweets,(function(t){return s("div",{key:t.id,staticClass:"tweet-card row"},[s("div",{staticClass:"col-1"},[s("router-link",{staticClass:"avatar-container",attrs:{to:{name:"user-tweets",params:{id:t.UserId}}}},[s("img",{staticClass:"avatar",attrs:{src:t.User.avatar,alt:""}})])],1),s("div",{staticClass:"col-11"},[s("div",{staticClass:"row ml-1",staticStyle:{cursor:"pointer"},on:{click:function(s){return e.toReplyList(t.id)}}},[s("h5",{staticClass:"user-name text-center"},[e._v(e._s(t.User.name))]),s("h6",{staticClass:"account-time"},[e._v(" @"+e._s(t.User.account)+" · "+e._s(e._f("fromNow")(t.createdAt))+" ")])]),s("div",{staticClass:"row ml-1",staticStyle:{cursor:"pointer"}},[s("p",{staticClass:"description",on:{click:function(s){return e.toReplyList(t.id)}}},[e._v(" "+e._s(t.description)+" ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"icon-group mr-5"},[s("img",{staticClass:"icon",attrs:{id:t.id,src:"https://i.postimg.cc/3Rb08d24/message.png",alt:"","data-toggle":"modal","data-target":"#replyTweeterModal"+t.id}}),s("p",{staticClass:"font-size-14 m-0"},[e._v(e._s(t.replyCount))])]),s("div",{staticClass:"icon-group"},[t.isLiked?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),e.unlike(t.id)}}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),e.addlike(t.id)}}}),s("p",{staticClass:"font-size-14 m-0"},[e._v(e._s(t.likeCount))])])])])]),s("div",[s("div",{staticClass:"modal fade",attrs:{id:"replyTweeterModal"+t.id,tabindex:"-1",role:"dialog","aria-labelledby":"replyTweeterModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(0,!0),s("div",{staticClass:"row p-2"},[s("div",{staticClass:"col-1"},[s("div",{staticClass:"avatar-container pl-4"},[s("img",{staticClass:"avatar",attrs:{src:t.User.avatar,alt:""}})]),s("div",{staticClass:"ml-4 mt-3",staticStyle:{"border-left":"2px solid #92929d",height:"45%"}})]),s("div",{staticClass:"col-11"},[s("div",{staticClass:"row pl-4"},[s("div",[s("div",[s("span",{staticClass:"user-name"},[e._v(e._s(t.User.name))]),s("span",{staticClass:"account-time"},[e._v("@"+e._s(t.User.account)+" · "+e._s(e._f("fromNow")(t.createdAt)))])]),s("p",{staticClass:"description"},[e._v(" "+e._s(t.description)+" ")]),s("p",{staticClass:"account-time"},[e._v(" 回覆給 "),s("span",{staticClass:"repliedAccount",staticStyle:{color:"#ff6600","font-family":"'Roboto', sans-serif","line-height":"22px"}},[e._v(" @"+e._s(t.User.account)+" ")])])])])])]),s("div",{staticClass:"p-2 row"},[s("div",{staticClass:"col-1"},[s("div",{staticClass:"avatar-container pl-4"},[s("img",{staticClass:"avatar",attrs:{src:e.currentUser.avatar,alt:""}})])]),s("div",{staticClass:"col-11"},[s("div",{staticClass:"d-flex justify-content-center"},[s("form",{staticClass:"pl-3"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyMessage,expression:"replyMessage"}],attrs:{cols:"45",rows:"8",placeholder:"推你的回覆",required:""},domProps:{value:e.replyMessage},on:{input:function(t){t.target.composing||(e.replyMessage=t.target.value)}}}),s("div",{staticClass:"\n                            d-flex\n                            justify-content-end\n                            align-items-center\n                            mb-3\n                          ",staticStyle:{width:"430px"}},[s("div",{staticClass:"mr-3"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.replyMessage.length>140,expression:"replyMessage.length > 140"}],staticClass:"error-notice"},[e._v(" 字數不可超過140字 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.blankContent&&0===e.replyMessage.length,expression:"\n                                blankContent && replyMessage.length === 0\n                              "}],staticClass:"error-notice"},[e._v(" 內容不可空白 ")])]),s("button",{staticClass:"replyBtn",attrs:{type:"button"},on:{click:function(s){return e.postReplyHandler(t.id)}}},[e._v(" 推文 ")])])])])])])])])])])])})),0)]),s("PopularUsers",{staticClass:"popular-users"})],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-header"},[s("div",[s("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])])}],n=s(6198),i=s(3019),c=(s(3210),s(8309),s(2526),s(1817),s(1249),s(9653),s(5666),s(3939)),o=s(3084),l=s(8118),u=s(8247),d=s(629),p=s(9755),v=s.n(p),m={mixins:[u.q],components:{NavBar:c.Z,PopularUsers:o.Z},data:function(){return{tweetMessage:"",tweets:[],replyMessage:"",isLike:"",blankContent:!1}},created:function(){this.fetchTweets()},computed:(0,i.Z)({},(0,d.rn)(["currentUser"])),methods:{fetchTweets:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.getAllTweet();case 3:s=t.sent,a=s.data,e.tweets=a,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},submitTweetMessage:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,0!==e.tweetMessage.trim().length){t.next=6;break}return e.blankContent=!0,t.abrupt("return");case 6:if(!(e.tweetMessage.length>140)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,l.Z.postTweet(e.tweetMessage);case 10:s=t.sent,a=s.data.newTweet,e.tweets.unshift({User:{account:e.currentUser.account,avatar:e.currentUser.avatar,name:e.currentUser.name},UserId:a.UserId,createdAt:a.createdAt,description:a.description,id:a.id,isLiked:!1,isReplied:!1,likeCount:0,replyCount:0}),e.tweetMessage="",e.blankContent=!1,t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()},submitTweetMessageModal:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.tweetMessage=e,s.prev=1,s.next=4,l.Z.postTweet(t.tweetMessage);case 4:a=s.sent,r=a.data.newTweet,t.tweets.unshift({User:{account:t.currentUser.account,avatar:t.currentUser.avatar,name:t.currentUser.name},UserId:r.UserId,createdAt:r.createdAt,description:r.description,id:r.id,isLiked:!1,isReplied:!1,likeCount:0,replyCount:0}),t.tweetMessage="",s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](1),console.log(s.t0);case 13:case"end":return s.stop()}}),s,null,[[1,10]])})))()},addlike:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,l.Z.likeTweet(e);case 3:s.sent,t.tweets=t.tweets.map((function(t){return t.id===e?(0,i.Z)((0,i.Z)({},t),{},{likeCount:t.likeCount+1,isLiked:!t.isLiked}):t})),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()},unlike:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,l.Z.unlikeTweet(e);case 3:s.sent,t.tweets=t.tweets.map((function(t){return t.id===e?(0,i.Z)((0,i.Z)({},t),{},{likeCount:t.likeCount-1,isLiked:!t.isLiked}):t})),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()},postReplyHandler:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,0!==t.replyMessage.trim().length){s.next=6;break}return t.blankContent=!0,s.abrupt("return");case 6:if(!(t.replyMessage.length>140)){s.next=8;break}return s.abrupt("return");case 8:return s.next=10,l.Z.postTweetReply({tweetId:e,comment:t.replyMessage});case 10:s.sent,t.tweets=t.tweets.map((function(t){return t.id===e?(0,i.Z)((0,i.Z)({},t),{},{replyCount:Number(t.replyCount)+1}):t})),t.replyMessage="",t.blankContent=!1,v()("#replyTweeterModal".concat(e)).modal("hide"),s.next=20;break;case 17:s.prev=17,s.t0=s["catch"](0),console.log(s.t0);case 20:case"end":return s.stop()}}),s,null,[[0,17]])})))()},toReplyList:function(e){this.$router.push("/home/tweet/".concat(e))}}},g=m,w=s(1001),C=(0,w.Z)(g,a,r,!1,null,"d58e32ce",null),f=C.exports},1817:function(e,t,s){var a=s(2109),r=s(9781),n=s(7854),i=s(1702),c=s(2597),o=s(614),l=s(7976),u=s(1340),d=s(3070).f,p=s(9920),v=n.Symbol,m=v&&v.prototype;if(r&&o(v)&&(!("description"in m)||void 0!==v().description)){var g={},w=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=l(m,this)?new v(e):void 0===e?v():v(e);return""===e&&(g[t]=!0),t};p(w,v),w.prototype=m,m.constructor=w;var C="Symbol(test)"==String(v("test")),f=i(m.toString),h=i(m.valueOf),k=/^Symbol\((.*)\)[^)]+$/,b=i("".replace),y=i("".slice);d(m,"description",{configurable:!0,get:function(){var e=h(this),t=f(e);if(c(g,e))return"";var s=C?y(t,7,-1):b(t,k,"$1");return""===s?void 0:s}}),a({global:!0,forced:!0},{Symbol:w})}}}]);
//# sourceMappingURL=943-legacy.c96af40e.js.map