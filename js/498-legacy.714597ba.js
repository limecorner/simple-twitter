"use strict";(self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[]).push([[498],{498:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page d-flex justify-content-between"},[s("NavBar"),s("section",{staticClass:"col ml-2 center-area"},[s("div",{staticClass:"title card-header row"},[s("span",{staticClass:"arrow mr-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.back()}}},[t._v("←")]),t._v("推文 ")]),s("div",{staticClass:"row pl-3 pt-2"},[s("div",{staticClass:"d-flex flex-row justify-content-around"},[s("router-link",{staticClass:"avatar-container",attrs:{to:{name:"user-tweets",params:{id:t.UserId}}}},[s("img",{staticClass:"avatar mr-2",attrs:{src:t.user.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),s("div",{staticClass:"d-flex flex-column justify-content-around"},[s("div",{staticClass:"user-name"},[t._v(t._s(t.user.name))]),s("div",{staticClass:"account-time"},[t._v("@"+t._s(t.user.account))])])],1)]),s("div",{staticClass:"description row pl-3"},[s("p",{staticStyle:{"overflow-wrap":"anywhere"}},[t._v(t._s(t.tweet.description))])]),s("span",{staticClass:"row pl-3 mb-1 time"},[t._v(" "+t._s(t.timeAt)+" ")]),s("hr"),s("div",{staticClass:"row pl-3 pt-2 pb-2 d-flex"},[s("span",[t._v(t._s(t.tweet.replyCount)+" "),s("span",{staticClass:"reply-like"},[t._v("回覆")])]),s("span",{staticClass:"ml-5"},[t._v(t._s(t.tweet.likeCount)+" "),s("span",{staticClass:"reply-like"},[t._v("喜歡次數")])])]),s("hr"),s("div",{staticClass:"card-header row d-flex justify-content-start"},[s("img",{staticClass:"icon mr-5",attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:"","data-toggle":"modal","data-target":"#replyTweeterModal"}}),t.tweet.isLiked?s("img",{staticClass:"icon ml-5",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.unlike(t.tweet.id)}}}):s("img",{staticClass:"icon ml-5",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addlike(t.tweet.id)}}})]),s("div",[s("div",{staticClass:"modal fade",attrs:{id:"replyTweeterModal",tabindex:"-1",role:"dialog","aria-labelledby":"replyTweeterModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content pl-1"},[t._m(0),s("div",{staticClass:"row p-2"},[s("div",{staticClass:"col-1"},[s("div",{staticClass:"avatar-container pl-4"},[s("img",{staticClass:"avatar",attrs:{src:t.user.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})]),s("div",{staticClass:"ml-4 mt-3",staticStyle:{"border-left":"2px solid #92929d",height:"45%"}})]),s("div",{staticClass:"col-11"},[s("div",{staticClass:"row pl-4"},[s("div",[s("div",[s("span",{staticClass:"user-name pl-2"},[t._v(t._s(t.user.name))]),s("span",{staticClass:"account-time pl-2"},[t._v("@"+t._s(t.user.account)+" · "+t._s(t._f("fromNow")(t.tweet.createdAt)))])]),s("p",{staticClass:"description pl-2",staticStyle:{"overflow-wrap":"anywhere"}},[t._v(" "+t._s(t.tweet.description)+" ")]),s("p",{staticClass:"account-time pl-2"},[t._v(" 回覆給 "),s("span",{staticClass:"repliedAccount",staticStyle:{color:"#ff6600","font-family":"'Roboto', sans-serif","line-height":"22px"}},[t._v(" @"+t._s(t.user.account)+" ")])])])])])]),s("div",{staticClass:"p-2 row mt-2"},[s("div",{staticClass:"col-1"},[s("div",{staticClass:"avatar-container pl-4"},[s("img",{staticClass:"avatar",attrs:{src:t.currentUser.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})])]),s("div",{staticClass:"col-11"},[s("div",{staticClass:"d-flex justify-content-center"},[s("form",{staticClass:"pl-4"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.replyMessage,expression:"replyMessage"}],attrs:{cols:"45",rows:"8",placeholder:"推你的回覆",required:""},domProps:{value:t.replyMessage},on:{input:function(e){e.target.composing||(t.replyMessage=e.target.value)}}}),s("div",{staticClass:"d-flex justify-content-end",staticStyle:{width:"410px"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.replyMessage.length>140,expression:"replyMessage.length > 140"}],staticClass:"error-notice"},[t._v("字數不可超過140字 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.blankContent&&0===t.replyMessage.length,expression:"blankContent && replyMessage.length === 0"}],staticClass:"error-notice"},[t._v(" 內容不可空白 ")]),s("button",{staticClass:"replyBtn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.postReplyHandler()}}},[t._v(" 回覆 ")])])])])])])])])])]),s("div",t._l(t.replies,(function(e){return s("div",{key:e.id,staticClass:"tweet-card row"},[s("div",{staticClass:"col-1"},[s("router-link",{staticClass:"avatar-container",attrs:{to:{name:"user-tweets",params:{id:e.UserId}}}},[s("img",{staticClass:"avatar",attrs:{src:e.User.avatar||"https://i.imgur.com/hAKcS3E.jpg",alt:""}})])],1),s("div",{staticClass:"col-11 pl-4"},[s("div",{staticClass:"row"},[s("h5",{staticClass:"user-name font-size-16"},[t._v(t._s(e.User.name))]),s("h6",{staticClass:"account-time ml-2"},[t._v(" @"+t._s(e.User.account)+" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),s("div",{staticClass:"row d-flex align-items-center"},[s("span",{staticClass:"time"},[t._v("回覆")]),s("span",{staticClass:"reply-like ml-1",staticStyle:{color:"#ff6600","font-weight":"400"}},[t._v(" @"+t._s(t.user.account))])]),s("div",{staticClass:"row"},[s("p",{staticClass:"description",staticStyle:{"overflow-wrap":"anywhere"}},[t._v(" "+t._s(e.comment)+" ")])]),s("div",{staticClass:"row"},[t._m(1,!0),s("div",{staticClass:"icon-group"},[s("img",{staticClass:"icon",staticStyle:{width:"15px",height:"15px"},attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""}}),t._e(),s("p",{staticClass:"font-size-14 m-0"},[t._v("76")])])])])])})),0)]),s("PopularUsers",{staticClass:"popular-users"})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("div",[s("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon-group mr-5"},[s("img",{staticClass:"icon",staticStyle:{width:"15px",height:"15px"},attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:""}}),s("p",{staticClass:"font-size-14 m-0"},[t._v("13")])])}],n=s(6198),i=s(3019),c=(s(5666),s(8309),s(9653),s(2222),s(3210),s(4977)),l=s(6903),o=s(629),u=s(8247),p=s(9755),d=s.n(p),v=s(8118),m=s(381),w=s.n(m),h={computed:(0,i.Z)({},(0,o.rn)(["currentUser"])),components:{NavBar:c.Z,PopularUsers:l.Z},mixins:[u.q],data:function(){return{tweetId:"",tweet:{},replyMessage:"",user:{account:"",avatar:"",name:""},UserId:"",replies:[],blankContent:!1,timeAt:""}},methods:{fetchTweetData:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a,r,n,i,c,l,o,u,p,d;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v.Z.getTweetDetail(t);case 3:a=s.sent,r=a.data,e.tweet=r,e.user={account:r.User.account,avatar:r.User.avatar,name:r.User.name},e.UserId=r.UserId,n=w()(e.tweet.createdAt).format("YYYY MM D, hh:mm:ss a"),i=n.substr(0,4),c=n.substr(5,2),l=n.substr(8,2),o=Number(n.substr(12,2)),u=n.substr(15,2),p=n.substr(-2,2),p="pm"===p?"下午":"上午",d="".concat(p).concat(o,":").concat(u,"分・").concat(i,"年").concat(c,"月").concat(l,"日"),e.timeAt=d,s.next=23;break;case 20:s.prev=20,s.t0=s["catch"](0),console.log(s.t0);case 23:case"end":return s.stop()}}),s,null,[[0,20]])})))()},postReplyHandler:function(){var t=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,0!==t.replyMessage.trim().length){e.next=6;break}return t.blankContent=!0,e.abrupt("return");case 6:if(!(t.replyMessage.length>140)){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,v.Z.postTweetReply({tweetId:t.tweetId,comment:t.replyMessage});case 10:if(s=e.sent,"OK"===s.statusText){e.next=13;break}return e.abrupt("return");case 13:t.replies.unshift({TweetId:t.tweetId,User:{account:t.currentUser.account,avatar:t.currentUser.avatar,name:t.currentUser.name},UserId:t.currentUser.id,comment:t.replyMessage,createdAt:new Date}),t.tweet.replyCount=t.tweet.replyCount+1,t.replyMessage="",t.blankContent=!1,d()("#replyTweeterModal").modal("hide"),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()},addlike:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v.Z.likeTweet(t);case 3:a=s.sent,"OK"===a.statusText&&(e.tweet.likeCount=e.tweet.likeCount+1),e.tweet.isLiked=!0,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},unlike:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v.Z.unlikeTweet(t);case 3:a=s.sent,"OK"===a.statusText&&(e.tweet.likeCount=e.tweet.likeCount-1),e.tweet.isLiked=!1,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},fetchTweetReplies:function(t){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v.Z.getTweetreplies(t);case 3:a=s.sent,e.replies=a.data,s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()}},created:function(){this.tweetId=this.$route.params.id,this.fetchTweetData(this.tweetId),this.fetchTweetReplies(this.tweetId)}},f=h,g=s(1001),C=(0,g.Z)(f,a,r,!1,null,"4e18af7e",null),_=C.exports},2222:function(t,e,s){var a=s(2109),r=s(7854),n=s(7293),i=s(3157),c=s(111),l=s(7908),o=s(6244),u=s(6135),p=s(5417),d=s(1194),v=s(5112),m=s(7392),w=v("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",g=r.TypeError,C=m>=51||!n((function(){var t=[];return t[w]=!1,t.concat()[0]!==t})),_=d("concat"),y=function(t){if(!c(t))return!1;var e=t[w];return void 0!==e?!!e:i(t)},k=!C||!_;a({target:"Array",proto:!0,arity:1,forced:k},{concat:function(t){var e,s,a,r,n,i=l(this),c=p(i,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?i:arguments[e],y(n)){if(r=o(n),d+r>h)throw g(f);for(s=0;s<r;s++,d++)s in n&&u(c,d,n[s])}else{if(d>=h)throw g(f);u(c,d++,n)}return c.length=d,c}})}}]);
//# sourceMappingURL=498-legacy.714597ba.js.map