(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[986],{5986:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-page d-flex justify-content-between border border-secondary"},[r("NavBar"),r("section",{staticClass:"user-section"},[r("div",{staticClass:"home-title"},[e._v("← 推文")]),r("div",{staticClass:"d-flex"},[r("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.UserId}}}},[r("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:""}})]),r("div",[r("div",[e._v(e._s(e.user.name))]),r("div",[e._v("@"+e._s(e.user.account))])])],1),r("div",[r("p",[e._v(e._s(e.tweet.description))]),r("p",[e._v(e._s(e._f("fromNow")(e.tweet.createdAt)))])]),r("div",[r("span",[e._v(e._s(e.tweet.replyCount)+" 回覆 ")]),r("span",[e._v(" "+e._s(e.tweet.likeCount)+" 喜歡次數")])]),r("div",[r("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:"","data-toggle":"modal","data-target":"#replyTwitterModal"}}),e.tweet.isLiked?r("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.unlike(e.tweet.id)}}}):r("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.addlike(e.tweet.id)}}})]),r("div",[r("div",{staticClass:"modal fade",attrs:{id:"replyTwitterModal",tabindex:"-1",role:"dialog","aria-labelledby":"replyTwitterModal","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[e._m(0),r("div",[r("div",{staticClass:"d-flex"},[r("div",[r("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:""}})]),r("div",[r("div",[r("span",[e._v(e._s(e.user.name))]),r("span",[e._v(" @"+e._s(e.user.account)+" ")]),r("span",[e._v(" "+e._s(e._f("fromNow")(e.tweet.createdAt))+" ")])]),r("p",[e._v(e._s(e.tweet.description))]),r("p",[e._v("回覆給@"+e._s(e.user.account))])])])]),r("form",{attrs:{action:""}},[r("div",[r("p",[e._v("這邊要放當前使用者頭像")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyMessage,expression:"replyMessage"}],attrs:{cols:"40",rows:"5",placeholder:"推你的回覆",required:""},domProps:{value:e.replyMessage},on:{input:function(t){t.target.composing||(e.replyMessage=t.target.value)}}})]),r("button",{staticClass:"btn btn-info btn-w64",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.postReplyHandler()}}},[e._v(" 推文 ")])])])])])]),r("div",e._l(e.replies,(function(t){return r("div",{key:t.id,staticClass:"tweet-card"},[r("router-link",{attrs:{to:{name:"user-tweets",params:{id:t.UserId}}}},[r("img",{staticClass:"avatar mr-2",attrs:{src:t.User.avatar,alt:""}})]),r("div",[r("div",{staticClass:"d-flex"},[r("h4",[e._v(e._s(t.User.name))]),r("p",[e._v("@"+e._s(t.User.account)+" "+e._s(e._f("fromNow")(t.createdAt)))])]),r("div",[r("p",[e._v("回覆@"+e._s(e.user.account))])]),r("div",[r("p",[e._v(" "+e._s(t.comment)+" ")])]),r("div",{staticClass:"d-flex"},[e._m(1,!0),r("div",{staticClass:"icon-group"},[r("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""}}),e._e(),r("p",{staticClass:"font-size-14 m-0"},[e._v("76")])])])])],1)})),0)]),r("PopularUsers",{staticClass:"popular-users"})],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[e._v(' 後續 不需要文字 且 將關閉"X"符號 往左邊移動 ')]),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon-group mr-5"},[r("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:""}}),r("p",{staticClass:"font-size-14 m-0"},[e._v("13")])])}],n=r(6198),i=r(3019),c=(r(5666),r(8309),r(3210),r(5249)),o=r(9743),l=r(629),u=r(8247),d=r(1926),p=r(8118),v={computed:(0,i.Z)({},(0,l.rn)(["currentUser"])),components:{NavBar:c.Z,PopularUsers:o.Z},mixins:[u.q],data:function(){return{tweetId:"",tweet:{},replyMessage:"",user:{account:"",avatar:"",name:""},UserId:"",replies:[]}},methods:{fetchTweetData:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.Z.getTweetDetail(e);case 3:a=r.sent,s=a.data,t.tweet=s,t.user={account:s.User.account,avatar:s.User.avatar,name:s.User.name},t.UserId=s.UserId,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},postReplyHandler:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,0!==e.replyMessage.trim().length){t.next=4;break}return d.F.fire({icon:"warning",title:"內容不可空白！"}),t.abrupt("return");case 4:return t.next=6,p.Z.postTweetReply({tweetId:e.tweetId,comment:e.replyMessage});case 6:t.sent,e.replies.unshift({TweetId:e.tweetId,User:{account:e.currentUser.account,avatar:e.currentUser.avatar,name:e.currentUser.name},UserId:e.currentUser.id,comment:e.replyMessage,createdAt:new Date}),e.replyMessage="",t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},addlike:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.Z.likeTweet(e);case 3:r.sent,t.tweet.isLiked=!0,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},unlike:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.Z.unlikeTweet(e);case 3:r.sent,t.tweet.isLiked=!1,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetchTweetReplies:function(e){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.Z.getTweetreplies(e);case 3:a=r.sent,t.replies=a.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},created:function(){this.tweetId=this.$route.params.id,this.fetchTweetData(this.tweetId),this.fetchTweetReplies(this.tweetId)}},m=v,f=r(1001),w=(0,f.Z)(m,a,s,!1,null,"0621c5c5",null),g=w.exports},6091:function(e,t,r){var a=r(6530).PROPER,s=r(7293),n=r(1361),i="​᠎";e.exports=function(e){return s((function(){return!!n[e]()||i[e]()!==i||a&&n[e].name!==e}))}},3210:function(e,t,r){"use strict";var a=r(2109),s=r(3111).trim,n=r(6091);a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})}}]);
//# sourceMappingURL=986-legacy.15643268.js.map