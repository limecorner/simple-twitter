"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[498],{498:function(t,s,e){e.r(s),e.d(s,{default:function(){return g}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-page d-flex justify-content-between"},[e("NavBar"),e("section",{staticClass:"col ml-2 center-area"},[e("div",{staticClass:"title card-header row"},[e("span",{staticClass:"arrow mr-2",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.$router.back()}}},[t._v("←")]),t._v("推文 ")]),e("div",{staticClass:"row pl-3 pt-2"},[e("div",{staticClass:"d-flex flex-row justify-content-around"},[e("router-link",{staticClass:"avatar-container",attrs:{to:{name:"user-tweets",params:{id:t.UserId}}}},[e("img",{staticClass:"avatar mr-2",attrs:{src:t.user.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),e("div",{staticClass:"d-flex flex-column justify-content-around"},[e("div",{staticClass:"user-name"},[t._v(t._s(t.user.name))]),e("div",{staticClass:"account-time"},[t._v("@"+t._s(t.user.account))])])],1)]),e("div",{staticClass:"description row pl-3"},[e("p",{staticStyle:{"overflow-wrap":"anywhere"}},[t._v(t._s(t.tweet.description))])]),e("span",{staticClass:"row pl-3 mb-1 time"},[t._v(" "+t._s(t.timeAt)+" ")]),e("hr"),e("div",{staticClass:"row pl-3 pt-2 pb-2 d-flex"},[e("span",[t._v(t._s(t.tweet.replyCount)+" "),e("span",{staticClass:"reply-like"},[t._v("回覆")])]),e("span",{staticClass:"ml-5"},[t._v(t._s(t.tweet.likeCount)+" "),e("span",{staticClass:"reply-like"},[t._v("喜歡次數")])])]),e("hr"),e("div",{staticClass:"card-header row d-flex justify-content-start"},[e("img",{staticClass:"icon mr-5",attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:"","data-toggle":"modal","data-target":"#replyTweeterModal"}}),t.tweet.isLiked?e("img",{staticClass:"icon ml-5",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.unlike(t.tweet.id)}}}):e("img",{staticClass:"icon ml-5",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.addlike(t.tweet.id)}}})]),e("div",[e("div",{staticClass:"modal fade",attrs:{id:"replyTweeterModal",tabindex:"-1",role:"dialog","aria-labelledby":"replyTweeterModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content pl-1"},[t._m(0),e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-1"},[e("div",{staticClass:"avatar-container pl-4"},[e("img",{staticClass:"avatar",attrs:{src:t.user.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),e("div",{staticClass:"ml-4 mt-3",staticStyle:{"border-left":"2px solid #92929d",height:"45%"}})]),e("div",{staticClass:"col-11"},[e("div",{staticClass:"row pl-4"},[e("div",[e("div",[e("span",{staticClass:"user-name pl-2"},[t._v(t._s(t.user.name))]),e("span",{staticClass:"account-time pl-2"},[t._v("@"+t._s(t.user.account)+" · "+t._s(t._f("fromNow")(t.tweet.createdAt)))])]),e("p",{staticClass:"description pl-2",staticStyle:{"overflow-wrap":"anywhere"}},[t._v(" "+t._s(t.tweet.description)+" ")]),e("p",{staticClass:"account-time pl-2"},[t._v(" 回覆給 "),e("span",{staticClass:"repliedAccount",staticStyle:{color:"#ff6600","font-family":"'Roboto', sans-serif","line-height":"22px"}},[t._v(" @"+t._s(t.user.account)+" ")])])])])])]),e("div",{staticClass:"p-2 row mt-2"},[e("div",{staticClass:"col-1"},[e("div",{staticClass:"avatar-container pl-4"},[e("img",{staticClass:"avatar",attrs:{src:t.currentUser.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})])]),e("div",{staticClass:"col-11"},[e("div",{staticClass:"d-flex justify-content-center"},[e("form",{staticClass:"pl-4"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.replyMessage,expression:"replyMessage"}],attrs:{cols:"45",rows:"8",placeholder:"推你的回覆",required:""},domProps:{value:t.replyMessage},on:{input:function(s){s.target.composing||(t.replyMessage=s.target.value)}}}),e("div",{staticClass:"d-flex justify-content-end",staticStyle:{width:"410px"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.replyMessage.length>140,expression:"replyMessage.length > 140"}],staticClass:"error-notice"},[t._v("字數不可超過140字 ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.blankContent&&0===t.replyMessage.length,expression:"blankContent && replyMessage.length === 0"}],staticClass:"error-notice"},[t._v(" 內容不可空白 ")]),e("button",{staticClass:"replyBtn",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.postReplyHandler()}}},[t._v(" 回覆 ")])])])])])])])])])]),e("div",t._l(t.replies,(function(s){return e("div",{key:s.id,staticClass:"tweet-card row"},[e("div",{staticClass:"col-1"},[e("router-link",{staticClass:"avatar-container",attrs:{to:{name:"user-tweets",params:{id:s.UserId}}}},[e("img",{staticClass:"avatar",attrs:{src:s.User.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})])],1),e("div",{staticClass:"col-11 pl-4"},[e("div",{staticClass:"row"},[e("h5",{staticClass:"user-name font-size-16"},[t._v(t._s(s.User.name))]),e("h6",{staticClass:"account-time ml-2"},[t._v(" @"+t._s(s.User.account)+" "+t._s(t._f("fromNow")(s.createdAt))+" ")])]),e("div",{staticClass:"row d-flex align-items-center"},[e("span",{staticClass:"time"},[t._v("回覆")]),e("span",{staticClass:"reply-like ml-1",staticStyle:{color:"#ff6600","font-weight":"400"}},[t._v(" @"+t._s(t.user.account))])]),e("div",{staticClass:"row"},[e("p",{staticClass:"description",staticStyle:{"overflow-wrap":"anywhere"}},[t._v(" "+t._s(s.comment)+" ")])]),e("div",{staticClass:"row"},[t._m(1,!0),e("div",{staticClass:"icon-group"},[e("img",{staticClass:"icon",staticStyle:{width:"15px",height:"15px"},attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""}}),t._e(),e("p",{staticClass:"font-size-14 m-0"},[t._v("76")])])])])])})),0)]),e("PopularUsers",{staticClass:"popular-users"})],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-header"},[e("div",[e("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon-group mr-5"},[e("img",{staticClass:"icon",staticStyle:{width:"15px",height:"15px"},attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:""}}),e("p",{staticClass:"font-size-14 m-0"},[t._v("13")])])}],r=e(4977),l=e(6903),c=e(629),n=e(8247),o=e(9755),d=e.n(o),p=e(8118),u=e(381),m=e.n(u),v={computed:{...(0,c.rn)(["currentUser"])},components:{NavBar:r.Z,PopularUsers:l.Z},mixins:[n.q],data(){return{tweetId:"",tweet:{},replyMessage:"",user:{account:"",avatar:"",name:""},UserId:"",replies:[],blankContent:!1,timeAt:""}},methods:{async fetchTweetData(t){try{const s=await p.Z.getTweetDetail(t),{data:e}=s;this.tweet=e,this.user={account:e.User.account,avatar:e.User.avatar,name:e.User.name},this.UserId=e.UserId;const a=m()(this.tweet.createdAt).format("YYYY MM D, hh:mm:ss a"),i=a.substr(0,4),r=a.substr(5,2),l=a.substr(8,2),c=Number(a.substr(12,2)),n=a.substr(15,2);let o=a.substr(-2,2);o="pm"===o?"下午":"上午";const d=`${o}${c}:${n}分・${i}年${r}月${l}日`;this.timeAt=d}catch(s){console.log(s)}},async postReplyHandler(){try{if(0===this.replyMessage.trim().length)return void(this.blankContent=!0);if(this.replyMessage.length>140)return;const t=await p.Z.postTweetReply({tweetId:this.tweetId,comment:this.replyMessage});if("OK"!==t.statusText)return;this.replies.unshift({TweetId:this.tweetId,User:{account:this.currentUser.account,avatar:this.currentUser.avatar,name:this.currentUser.name},UserId:this.currentUser.id,comment:this.replyMessage,createdAt:new Date}),this.tweet.replyCount=this.tweet.replyCount+1,this.replyMessage="",this.blankContent=!1,d()("#replyTweeterModal").modal("hide")}catch(t){console.log(t)}},async addlike(t){try{const s=await p.Z.likeTweet(t);"OK"===s.statusText&&(this.tweet.likeCount=this.tweet.likeCount+1),this.tweet.isLiked=!0}catch(s){console.log(s)}},async unlike(t){try{const s=await p.Z.unlikeTweet(t);"OK"===s.statusText&&(this.tweet.likeCount=this.tweet.likeCount-1),this.tweet.isLiked=!1}catch(s){console.log(s)}},async fetchTweetReplies(t){try{const s=await p.Z.getTweetreplies(t);this.replies=s.data}catch(s){console.log(s)}}},created(){this.tweetId=this.$route.params.id,this.fetchTweetData(this.tweetId),this.fetchTweetReplies(this.tweetId)}},h=v,w=e(1001),C=(0,w.Z)(h,a,i,!1,null,"4e18af7e",null),g=C.exports}}]);
//# sourceMappingURL=498.b8387a71.js.map