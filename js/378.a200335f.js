"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[378],{3378:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page d-flex"},[s("NavBar",{on:{"modal-sbmit":t.submitTweetMessageModal}}),s("section",{staticClass:"user-section"},[s("div",{staticClass:"card col",staticStyle:{"z-index":"1"}},[s("div",{staticClass:"row card-header title"},[t._v("首頁")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"},[s("img",{staticClass:"avatar mt-2",attrs:{src:t.currentUser.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),s("div",{staticClass:"col-11"},[s("form",[s("div",{staticClass:"d-flex pt-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tweetMessage,expression:"tweetMessage"}],staticClass:"mt-2",attrs:{required:"",cols:"35",rows:"5",placeholder:"有什麼新鮮事？","aria-label":"With textarea"},domProps:{value:t.tweetMessage},on:{input:function(e){e.target.composing||(t.tweetMessage=e.target.value)}}})]),s("div",{staticClass:"d-flex justify-content-end align-items-center mb-3"},[s("div",{staticClass:"mr-4"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.tweetMessage.length>140,expression:"tweetMessage.length > 140"}],staticClass:"error-notice"},[t._v(" 字數不可超過140字 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.blankContent&&0===t.tweetMessage.length,expression:"blankContent && tweetMessage.length === 0"}],staticClass:"error-notice"},[t._v(" 內容不可空白 ")])]),s("button",{staticClass:"tweet-btn",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.submitTweetMessage.apply(null,arguments)}}},[t._v(" 推文 ")])])])])])]),s("div",{staticClass:"col",staticStyle:{height:"10px",background:"#f0f8ff"}}),s("div",{staticClass:"col"},t._l(t.tweets,(function(e){return s("div",{key:e.id,staticClass:"tweet-card row"},[s("div",{staticClass:"col-1"},[s("router-link",{staticClass:"avatar-container",attrs:{to:{name:"user-tweets",params:{id:e.UserId}}}},[s("img",{staticClass:"avatar",attrs:{src:e.User.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})])],1),s("div",{staticClass:"col-11"},[s("div",{staticClass:"row ml-1",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.toReplyList(e.id)}}},[s("h5",{staticClass:"user-name text-center"},[t._v(t._s(e.User.name))]),s("h6",{staticClass:"account-time"},[t._v(" @"+t._s(e.User.account)+" · "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),s("div",{staticClass:"row ml-1",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.toReplyList(e.id)}}},[s("p",{staticClass:"description",staticStyle:{"overflow-wrap":"anywhere",width:"100%",cursor:"pointer"}},[t._v(" "+t._s(e.description)+" ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"icon-group mr-5"},[s("img",{staticClass:"icon",attrs:{id:e.id,src:"https://i.postimg.cc/3Rb08d24/message.png",alt:"","data-toggle":"modal","data-target":"#replyTweeterModal"+e.id}}),s("p",{staticClass:"font-size-14 m-0"},[t._v(t._s(e.replyCount))])]),s("div",{staticClass:"icon-group"},[e.isLiked?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.unlike(e.id)}}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.addlike(e.id)}}}),s("p",{staticClass:"font-size-14 m-0"},[t._v(t._s(e.likeCount))])])])])]),s("div",[s("div",{staticClass:"modal fade",attrs:{id:"replyTweeterModal"+e.id,tabindex:"-1",role:"dialog","aria-labelledby":"replyTweeterModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0,!0),s("div",{staticClass:"row p-2"},[s("div",{staticClass:"col-1"},[s("div",{staticClass:"avatar-container pl-4"},[s("img",{staticClass:"avatar",attrs:{src:e.User.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),s("div",{staticClass:"ml-4 mt-3",staticStyle:{"border-left":"2px solid #92929d",height:"45%"}})]),s("div",{staticClass:"col-11"},[s("div",{staticClass:"row pl-4"},[s("div",[s("div",[s("span",{staticClass:"user-name"},[t._v(t._s(e.User.name))]),s("span",{staticClass:"account-time"},[t._v("@"+t._s(e.User.account)+" · "+t._s(t._f("fromNow")(e.createdAt)))])]),s("p",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")]),s("p",{staticClass:"account-time"},[t._v(" 回覆給 "),s("span",{staticClass:"repliedAccount",staticStyle:{color:"#ff6600","font-family":"'Roboto', sans-serif","line-height":"22px"}},[t._v(" @"+t._s(e.User.account)+" ")])])])])])]),s("div",{staticClass:"p-2 row"},[s("div",{staticClass:"col-1"},[s("div",{staticClass:"avatar-container pl-4"},[s("img",{staticClass:"avatar",attrs:{src:t.currentUser.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})])]),s("div",{staticClass:"col-11"},[s("div",{staticClass:"d-flex justify-content-center"},[s("form",{staticClass:"pl-3"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.replyMessage,expression:"replyMessage"}],attrs:{cols:"45",rows:"8",placeholder:"推你的回覆",required:""},domProps:{value:t.replyMessage},on:{input:function(e){e.target.composing||(t.replyMessage=e.target.value)}}}),s("div",{staticClass:"\n                            d-flex\n                            justify-content-end\n                            align-items-center\n                            mb-3\n                          ",staticStyle:{width:"430px"}},[s("div",{staticClass:"mr-3"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.replyMessage.length>140,expression:"replyMessage.length > 140"}],staticClass:"error-notice"},[t._v(" 字數不可超過140字 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.blankContent&&0===t.replyMessage.length,expression:"\n                                blankContent && replyMessage.length === 0\n                              "}],staticClass:"error-notice"},[t._v(" 內容不可空白 ")])]),s("button",{staticClass:"replyBtn",attrs:{type:"button"},on:{click:function(s){return t.postReplyHandler(e.id)}}},[t._v(" 推文 ")])])])])])])])])])])])})),0)]),s("PopularUsers",{staticClass:"popular-users"})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("div",[s("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])}],r=s(4977),l=s(6903),n=s(8118),c=s(8247),o=s(629),d=s(9755),p=s.n(d),u={mixins:[c.q],components:{NavBar:r.Z,PopularUsers:l.Z},data(){return{tweetMessage:"",tweets:[],replyMessage:"",isLike:"",blankContent:!1}},created(){this.fetchTweets()},computed:{...(0,o.rn)(["currentUser"])},methods:{async fetchTweets(){try{const t=await n.Z.getAllTweet(),{data:e}=t;this.tweets=e}catch(t){console.log(t)}},async submitTweetMessage(){try{if(0===this.tweetMessage.trim().length)return void(this.blankContent=!0);if(this.tweetMessage.length>140)return;const t=await n.Z.postTweet(this.tweetMessage),e=t.data.newTweet;this.tweets.unshift({User:{account:this.currentUser.account,avatar:this.currentUser.avatar,name:this.currentUser.name},UserId:e.UserId,createdAt:e.createdAt,description:e.description,id:e.id,isLiked:!1,isReplied:!1,likeCount:0,replyCount:0}),this.tweetMessage="",this.blankContent=!1}catch(t){console.log(t)}},async submitTweetMessageModal(t){this.tweetMessage=t;try{const t=await n.Z.postTweet(this.tweetMessage),e=t.data.newTweet;this.tweets.unshift({User:{account:this.currentUser.account,avatar:this.currentUser.avatar,name:this.currentUser.name},UserId:e.UserId,createdAt:e.createdAt,description:e.description,id:e.id,isLiked:!1,isReplied:!1,likeCount:0,replyCount:0}),this.tweetMessage=""}catch(e){console.log(e)}},async addlike(t){try{await n.Z.likeTweet(t);this.tweets=this.tweets.map((e=>e.id===t?{...e,likeCount:e.likeCount+1,isLiked:!e.isLiked}:e))}catch(e){console.log(e)}},async unlike(t){try{await n.Z.unlikeTweet(t);this.tweets=this.tweets.map((e=>e.id===t?{...e,likeCount:e.likeCount-1,isLiked:!e.isLiked}:e))}catch(e){console.log(e)}},async postReplyHandler(t){try{if(0===this.replyMessage.trim().length)return void(this.blankContent=!0);if(this.replyMessage.length>140)return;await n.Z.postTweetReply({tweetId:t,comment:this.replyMessage});this.tweets=this.tweets.map((e=>e.id===t?{...e,replyCount:Number(e.replyCount)+1}:e)),this.replyMessage="",this.blankContent=!1,p()(`#replyTweeterModal${t}`).modal("hide")}catch(e){console.log(e)}},toReplyList(t){this.$router.push(`/home/tweet/${t}`)}}},v=u,m=s(1001),h=(0,m.Z)(v,a,i,!1,null,"03044f94",null),g=h.exports}}]);
//# sourceMappingURL=378.a200335f.js.map