(function(){var t={3344:function(t,e,s){"use strict";s.d(e,{Z:function(){return p}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-navbar-wrapper"},[s("section",{staticClass:"sidebar-navbar"},[s("div",[s("img",{staticClass:"product-mark mb-4",attrs:{src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}}),s("div",{staticClass:"tab",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.navbarHandler("home")}}},[t.navbarHome?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/nh1YtFYG/Pc-Home-Active.png",alt:""}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/L4rVt08L/PcHome.png",alt:""}}),s("p",{class:{active:t.navbarHome}},[t._v("首頁")])]),s("div",{staticClass:"tab",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.navbarHandler("profile")}}},[t.navbarprofile?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/28kSKCyD/Pc-User-Active.png",alt:""}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/qvB6y8y2/PcUser.png",alt:""}}),s("p",{class:{active:t.navbarprofile}},[t._v("個人資料")])]),s("div",{staticClass:"tab",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.navbarHandler("Setting")}}},[t.navbarSetting?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/pdT8bDdP/Pc-Setting-Active.png",alt:""}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/nVQ4hYGz/Pc-Setting.png",alt:""}}),s("p",{class:{active:t.navbarSetting}},[t._v("設定")])]),s("button",{staticClass:"btn btn-primary btn-post-tweet",attrs:{"data-toggle":"modal","data-target":"#postTwitterModal"}},[t._v(" 推文 ")])]),s("div",{staticClass:"d-flex ml-2",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.logoutHandler.apply(null,arguments)}}},[s("img",{staticClass:"logout",attrs:{src:"https://i.postimg.cc/NjVnH4Yp/logoOut.png",alt:""}}),s("p",{staticClass:"ml-2"},[t._v("登出")])])]),s("div",[s("div",{staticClass:"modal fade",attrs:{id:"postTwitterModal",tabindex:"-1",role:"dialog","aria-labelledby":"postTwitterModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("form",{attrs:{action:""}},[s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.twitterMessage,expression:"twitterMessage"}],attrs:{cols:"40",rows:"5",required:""},domProps:{value:t.twitterMessage},on:{input:function(e){e.target.composing||(t.twitterMessage=e.target.value)}}})]),s("button",{staticClass:"btn btn-info btn-w64",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.postTweetModal.apply(null,arguments)}}},[t._v(" 推文 ")])])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"postTwitterModal"}},[t._v(' 後續 不需要文字 且 將關閉"X"符號 往左邊移動 ')]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=s(1926),n=s(8118),i=s(6017),l={data(){return{twitterMessage:"",navbarHome:!1,navbarprofile:!1,navbarSetting:!1,id:""}},methods:{async postTweetModal(){0===this.twitterMessage.length&&(console.log(this.twitterMessage.length),o.F.fire({icon:"warning",title:"內容不可空白"}));const t=await n.Z.postTweet(this.twitterMessage);console.log(t)},navbarHandler(t){"home"===t?(this.navbarHome=!0,this.navbarprofile=!1,this.navbarSetting=!1,this.$router.push(`/home/${this.id}`)):"profile"===t?(this.navbarHome=!1,this.navbarprofile=!0,this.navbarSetting=!1,this.$router.push(`/users/${this.id}/tweets`)):"Setting"===t&&(this.navbarHome=!1,this.navbarprofile=!1,this.navbarSetting=!0,this.$router.push("/setting"))},logoutHandler(){localStorage.setItem("token",""),this.$store.commit("revokeAuthentication"),this.$router.push("/login")},async getAccountInfo(){try{const t=await i.Z.getAccountInfo();this.id=t.data.user.id}catch(t){console.log(t)}}},created(){this.getAccountInfo()}},c=l,u=s(1001),d=(0,u.Z)(c,r,a,!1,null,"0fe325a7",null),p=d.exports},2416:function(t,e,s){"use strict";s.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"popular-users"},[s("h1",{staticClass:"font-size-24"},[t._v("跟隨誰")]),t._l(t.topUsers,(function(e){return s("div",{key:e.id,staticClass:"popular-card"},[s("div",{staticClass:"d-flex"},[s("img",{staticClass:"avatar mr-1",attrs:{src:e.avatar,alt:""}}),s("div",[s("h4",{staticClass:"font-size-16"},[t._v(t._s(e.name))]),s("p",{staticClass:"font-size-14"},[t._v("@"+t._s(e.account))])])]),e.isFollowing?s("button",{staticClass:"btn-is-following",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.cancelFollowing(e.id)}}},[t._v(" 正在跟隨 ")]):s("button",{staticClass:"btn-not-following",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFollowing(e.id)}}},[t._v(" 跟隨 ")])])}))],2)},a=[],o=s(6017),n={data(){return{topUsers:[]}},methods:{async fetchTopUsers(){try{const t=await o.Z.getTopUsers(),e=t.data.result;this.topUsers=e}catch(t){console.log(t)}},async addFollowing(t){try{await o.Z.addFollowing(t);this.topUsers=this.topUsers.map((e=>e.id===t?{...e,isFollowing:!e.isFollowing}:e))}catch(e){console.log(e)}},async cancelFollowing(t){try{await o.Z.cancelFollowing(t);console.log(t),this.topUsers=this.topUsers.map((e=>(console.log(this.isFollowing),e.id===t?{...e,isFollowing:!e.isFollowing}:e)))}catch(e){console.log(e)}}},created(){this.fetchTopUsers()}},i=n,l=s(1001),c=(0,l.Z)(i,r,a,!1,null,"2f905751",null),u=c.exports},6700:function(t,e,s){var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-SG":5383,"./en-SG.js":5383,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-nz":6319,"./en-nz.js":6319,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":5251,"./es-do.js":5251,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-tw":4152,"./zh-tw.js":4152};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=6700},6047:function(t,e,s){"use strict";var r=s(1926);e["Z"]={signIn({account:t,password:e}){return r.l.post("/users/login",{account:t,password:e})},regist(t){return r.l.post("/users",{...t})},adminSignIn(t){return console.log("in.api"),r.l.post("/admin/login",{...t})}}},8118:function(t,e,s){"use strict";var r=s(1926);const a=()=>localStorage.getItem("token");e["Z"]={getAllTweet(){return r.l.get("/tweets",{headers:{Authorization:`Bearer ${a()}`}})},getTweetDetail(t){return r.l.get(`/tweets/${t}`,{headers:{Authorization:`Bearer ${a()}`}})},getTweetreplies(t){return r.l.get(`/tweets/${t}/replies`,{headers:{Authorization:`Bearer ${a()}`}})},likeTweet(t){return console.log("add , tweetId",t),r.l.post(`/tweets/${t}/like`,null,{headers:{Authorization:`Bearer ${a()}`}})},unlikeTweet(t){return console.log("tweetId",t),r.l.post(`/tweets/${t}/unlike`,null,{headers:{Authorization:`Bearer ${a()}`}})},postTweetReply({tweetId:t,comment:e}){return console.log("comment",e),r.l.post(`/tweets/${t}/replies`,{comment:e},{headers:{Authorization:`Bearer ${a()}`}})},postTweet(t){return r.l.post("/tweets",{description:t},{headers:{Authorization:`Bearer ${a()}`}})}}},6017:function(t,e,s){"use strict";var r=s(1926);const a=()=>localStorage.getItem("token");e["Z"]={getUser(t){return r.l.get(`/users/${t}`,{headers:{Authorization:`Bearer ${a()}`}})},getUserTweets(t){return r.l.get(`/users/${t}/tweets`,{headers:{Authorization:`Bearer ${a()}`}})},getUserReplies(t){return r.l.get(`/users/${t}/replied_tweets`,{headers:{Authorization:`Bearer ${a()}`}})},getUserLikes(t){return r.l.get(`/users/${t}/likes`,{headers:{Authorization:`Bearer ${a()}`}})},getUserFollowers(t){return r.l.get(`/users/${t}/followers`,{headers:{Authorization:`Bearer ${a()}`}})},getUserFollowings(t){return r.l.get(`/users/${t}/followings`,{headers:{Authorization:`Bearer ${a()}`}})},addUserFollowing(t){return r.l.post("/followships",{id:t},{headers:{Authorization:`Bearer ${a()}`}})},deleteUserFollowing(t){return r.l["delete"](`/followships/${t}`,{headers:{Authorization:`Bearer ${a()}`}})},getCurrentUser(){return r.l.get("/users/login_user",{headers:{Authorization:`Bearer ${a()}`}})},editCurrentUserInfo(t){return r.l.put(`/users/${t}`,{headers:{Authorization:`Bearer ${a()}`}})},getAccountInfo(){return r.l.get("/users/setting",{headers:{Authorization:`Bearer ${a()}`}})},putAccountInfo({data:t}){return console.log("inapi"),console.log({...t}),r.l.put("/users/setting",{...t},{headers:{Authorization:`Bearer ${a()}`}})},getTopUsers(){return r.l.get("/users/top",{headers:{Authorization:`Bearer ${a()}`}})},addFollowing(t){return r.l.post("/followships",{id:t},{headers:{Authorization:`Bearer ${a()}`}})},cancelFollowing(t){return r.l["delete"](`followships/${t}`,{headers:{Authorization:`Bearer ${a()}`}})}}},3659:function(t,e,s){"use strict";var r=s(144),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],n=(s(3734),{name:"App"}),i=n,l=s(1001),c=(0,l.Z)(i,a,o,!1,null,null,null),u=c.exports,d=s(8345),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page d-flex justify-content-between border border-secondary"},[s("NavBar"),s("section",{staticClass:"user-section"},[s("div",[s("div",{staticClass:"d-flex align-items-center ml-4 mt-2"},[s("div",[t._v("上頁")]),s("div",{staticClass:"ml-4"},[s("h3",{staticClass:"font-weight-bold font-size-18"},[t._v(" "+t._s(t.user.name)+" ")]),s("p",{staticClass:"text-secondary font-size-14"},[t._v(" "+t._s(t.user.tweetCount)+" 推文 ")])])]),s("div",{staticClass:"image-wrapper mb-3"},[s("img",{staticClass:"cover-image",attrs:{src:t.user.cover_image,alt:""}}),s("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:""}})]),s("div",{staticClass:"d-flex justify-content-end"},[Number(t.currentUser.id)===Number(t.userId)?s("button",{staticClass:"btn-edit-info mr-3 mb-4",attrs:{"data-toggle":"modal","data-target":"#user-info-edit-modal"}},[t._v(" 編輯個人資料 ")]):t._e()]),s("div",[s("div",[s("h4",{staticClass:"font-size-18"},[t._v(t._s(t.user.name))]),s("p",{staticClass:"font-size-14"},[t._v(t._s(t.user.account))])]),s("p",[t._v(" "+t._s(t.user.introduction)+" ")]),s("div",{staticClass:"d-flex"},[s("router-link",{staticClass:"mr-5",attrs:{to:{name:"user-followings",params:{id:t.userId}}}},[t._v(t._s(t.user.folloingCount)+"個跟隨中 ")]),s("router-link",{attrs:{to:{name:"user-followers",params:{id:t.userId}}}},[t._v(t._s(t.user.followerCount)+"位跟隨者 ")])],1)])]),s("div",[s("div",{staticClass:"mb-4"},[s("router-link",{staticClass:"mr-3",attrs:{to:{name:"user-tweets",params:{id:t.userId}}}},[t._v("推文")]),s("router-link",{staticClass:"mr-3",attrs:{to:{name:"user-replies",params:{id:t.userId}}}},[t._v("回覆")]),s("router-link",{attrs:{to:{name:"user-likes",params:{id:t.userId}}}},[t._v("喜歡的內容")])],1),s("router-view")],1)]),s("PopularUsers",{staticClass:"popular-users"}),s("div",{staticClass:"modal fade",attrs:{id:"user-info-edit-modal",tabindex:"-1",role:"dialog","aria-labelledby":"user-info-edit-modal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("form",{attrs:{action:""}},[s("div",{staticClass:"image-wrapper mb-5"},[s("img",{staticClass:"cover_image",staticStyle:{width:"498px"},attrs:{src:t.currentUser.cover_image,alt:""}}),s("img",{staticClass:"avatar",attrs:{src:t.currentUser.avatar,alt:""}})]),s("div",[s("label",{attrs:{for:"account"}}),s("div",{staticClass:"form-wrapper mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.name,expression:"currentUser.name"}],staticClass:"form",attrs:{id:"name",name:"name",type:"text",placeholder:"請輸入使用者名稱",required:""},domProps:{value:t.currentUser.name},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"name",e.target.value)}}})]),s("label",{attrs:{for:"introduction"}}),s("div",{staticClass:"form-wrapper mt-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentUser.introduction,expression:"currentUser.introduction"}],staticClass:"form",attrs:{id:"introduction",name:"introduction",type:"text",placeholder:"請輸入自我介紹",required:""},domProps:{value:t.currentUser.introduction},on:{input:function(e){e.target.composing||t.$set(t.currentUser,"introduction",e.target.value)}}})])]),s("button",{staticClass:"btn btn-info btn-w64",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.editInfo.apply(null,arguments)}}},[t._v(" 儲存 ")])]),s("div",{staticClass:"modal-footer"})])])])],1)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"user-info-edit-modal"}},[t._v(' 編輯個人資料 ( 後續將關閉"X"符號 往左邊移動) ')]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],f=s(3344),g=s(2416),h=s(6017),v=s(629);var w={components:{NavBar:f.Z,PopularUsers:g.Z},data(){return{user:{},name:"",introduction:"",userId:1}},computed:{...(0,v.rn)(["currentUser"])},created(){this.userId=this.$route.params.id,console.log("UserPage created clickedUser id ",this.userId),this.fetchClickedUser(this.userId)},beforeRouteUpdate(t,e,s){const r=this.$route.params.id;this.userId=r,console.log("beforeRouteUpdate clickedUser id",this.userId),this.fetchClickedUser(this.userId),s()},methods:{async fetchClickedUser(t){try{const e=await h.Z.getUser(t),{data:s}=e;this.user=s,console.log("UserPage user",this.user)}catch(e){console.log(e)}},async editInfo(){await h.Z.editCurrentUserInfo(this.currentUser.id);console.log("editInfo")}}},b=w,C=(0,l.Z)(b,p,m,!1,null,"5d2693d1",null),_=C.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.tweets,(function(e){return s("div",{key:e.id,staticClass:"tweet-card"},[s("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.User.id}}}},[s("img",{staticClass:"avatar mr-2",attrs:{src:e.User.avatar,alt:""}})]),s("div",[s("div",{staticClass:"d-flex"},[s("h4",[t._v(t._s(e.User.name))]),s("p",[t._v(t._s(e.User.account)+" "+t._s(t._f("fromNow")(e.createdAt)))])]),s("p",[t._v(t._s(e.description))]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"icon-group mr-5"},[s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:"","data-toggle":"modal","data-target":"#replyTwitterModal"}}),s("p",{staticClass:"font-size-14 m-0"},[t._v(t._s(e.replyCount))])]),t._v(" . "),s("div",{staticClass:"icon-group"},[e.isLiked?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.unlike(e.id)}}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.addlike(e.id)}}}),s("p",{staticClass:"font-size-14 m-0"},[t._v(t._s(e.likeCount))])])])]),s("div",[s("div",{staticClass:"modal fade",attrs:{id:"replyTwitterModal",tabindex:"-1",role:"dialog","aria-labelledby":"replyTwitterModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0,!0),s("div",[s("div",{staticClass:"d-flex"},[s("div",[s("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:""}})]),s("div",[s("div",[s("span",[t._v(t._s(e.name))]),s("span",[t._v(" @"+t._s(e.account)+" ")]),s("span",[t._v(" 待後續: 補發推特的時間 ")])]),s("p",[t._v(t._s(e.tweetText))]),s("p",[t._v("回覆給@"+t._s(e.account))])])])]),s("form",{attrs:{action:""}},[t._m(1,!0),s("button",{staticClass:"btn btn-info btn-w64",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.postTweetModal.apply(null,arguments)}}},[t._v(" 推文 ")])])])])])])],1)})),0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(' 後續 不需要文字 且 將關閉"X"符號 往左邊移動 ')]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("這邊要放當前使用者頭像")]),s("textarea",{attrs:{cols:"40",rows:"5",placeholder:"推你的回覆",required:""}})])}],y=(s(1703),s(8247)),U=s(1926),x=s(8118);new Date,new Date,new Date;var $={mixins:[y.q],data(){return{tweets:[]}},created(){const t=this.$route.params.id;console.log("tweet clickedUser id",t),this.fetchTweets(t)},methods:{async fetchTweets(t){try{const e=await h.Z.getUserTweets(t);console.log("tweet response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.tweets=s}catch(e){U.F.fire({icon:"warning",title:"沒有任何推文"}),console.log(e)}},async addlike(t){try{const e=await x.Z.likeTweet(t);console.log("addLike response",e),this.tweets=this.tweets.map((e=>e.id===t?{...e,likeCount:e.likeCount+1,isLiked:!0}:e))}catch(e){console.log(e)}},async unlike(t){try{const e=await x.Z.unlikeTweet(t);console.log("unlike response",e),this.tweets=this.tweets.map((e=>e.id===t?{...e,likeCount:e.likeCount-1,isLiked:!e.isLiked}:e))}catch(e){console.log(e)}}}},F=$,I=(0,l.Z)(F,k,j,!1,null,"bf285312",null),T=I.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.replies,(function(e){return s("div",{key:e.id,staticClass:"reply-card"},[s("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.Tweet.User.id}}}},[s("img",{staticClass:"avatar mr-2",attrs:{src:e.Tweet.User.avatar,alt:""}})]),s("div",[s("div",{staticClass:"d-flex"},[s("h4",[t._v(t._s(e.User.name))]),s("p",[t._v(t._s(e.User.account)+" "+t._s(t._f("fromNow")(e.createdAt)))])]),s("p",[t._v("回復 "+t._s(e.Tweet.User.account))]),s("p",[t._v(t._s(e.comment))])])],1)})),0)},Z=[];new Date,new Date,new Date;var A={mixins:[y.q],data(){return{replies:[]}},created(){const t=this.$route.params.id;console.log("reply clickedUser id",t),this.fetchReplies(t)},methods:{async fetchReplies(t){try{const e=await h.Z.getUserReplies(t);console.log("reply response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.replies=s}catch(e){U.F.fire({icon:"warning",title:"沒有回覆過的推文"}),console.log(e)}}}},P=A,E=(0,l.Z)(P,z,Z,!1,null,"fb580818",null),S=E.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.likes,(function(e){return s("div",{key:e.TweetId,staticClass:"like-card"},[s("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.Tweet.User.id}}}},[s("img",{staticClass:"avatar mr-2",attrs:{src:e.Tweet.User.avatar,alt:""}})]),s("div",[s("div",{staticClass:"d-flex"},[s("h4",[t._v(t._s(e.Tweet.User.name))]),s("p",[t._v(t._s(e.Tweet.User.account)+" "+t._s(t._f("fromNow")(e.createdAt)))])]),s("p",[t._v(t._s(e.Tweet.description))]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"icon-group mr-5"},[s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/3Rb08d24/message.png",alt:""}}),s("p",{staticClass:"font-size-14 m-0"},[t._v(t._s(e.replyCount))])]),s("div",{staticClass:"icon-group"},[e.isLiked?s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/DwdWWCqK/icon-Liked.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.unlike(e.TweetId)}}}):s("img",{staticClass:"icon",attrs:{src:"https://i.postimg.cc/YSdhRhnn/iconLike.png",alt:""},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.addlike(e.TweetId)}}}),s("p",{staticClass:"font-size-14 m-0"},[t._v(t._s(e.likeCount))])])])])],1)})),0)},B=[];new Date,new Date,new Date;var N={mixins:[y.q],data(){return{likes:[]}},created(){const t=this.$route.params.id;console.log("like clickedUser id",t),this.fetchLikes(t)},methods:{async fetchLikes(t){try{const e=await h.Z.getUserLikes(t);console.log("like response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.likes=s}catch(e){U.F.fire({icon:"warning",title:"沒有喜歡的推文"}),console.log(e)}},async addlike(t){try{const e=await x.Z.likeTweet(t);console.log("addLike response",e),this.likes=this.likes.map((e=>e.TweetId===t?{...e,likeCount:e.likeCount+1,isLiked:!0}:e))}catch(e){console.log(e)}},async unlike(t){try{const e=await x.Z.unlikeTweet(t);console.log("unlike response",e),this.likes=this.likes.map((e=>e.TweetId===t?{...e,likeCount:e.likeCount-1,isLiked:!1}:e)),this.likes=this.likes.filter((e=>e.TweetId!==t))}catch(e){console.log(e)}}}},L=N,M=(0,l.Z)(L,D,B,!1,null,"5328ff67",null),O=M.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("NotFound")])])}],R={},Y=(0,l.Z)(R,q,H,!1,null,null,null),G=Y.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-auto",staticStyle:{width:"400px"}},[t._m(0),s("h3",{staticClass:"text-center font-weight-bold"},[t._v("登入 Alphitter")]),s("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-wrapper mt-5",class:{wrong:t.error},attrs:{height:"54px"}},[s("label",{attrs:{for:"account"}},[t._v("帳號")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form",attrs:{id:"account",name:"account",type:"text",placeholder:"請輸入帳號",required:"",autofocus:""},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),s("div",{staticClass:"errorMesssage"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}]},[t._v(t._s(t.errorMesssage))])]),s("div",{staticClass:"form-wrapper mt-4",class:{wrong:t.error},attrs:{height:"54px"}},[s("label",{attrs:{for:"password"}},[t._v("密碼")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form",attrs:{id:"password",name:"password",type:"password",placeholder:"請輸入密碼",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("div",{staticClass:"mt-4"},[s("button",{staticClass:"btn btn-info btn-singin",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" 登入 ")])])]),s("div",{staticClass:"d-flex mt-4 justify-content-end"},[s("router-link",{staticClass:"mx-1",attrs:{to:"/regist"}},[t._v(" 註冊 ")]),t._v(" ・ "),s("router-link",{staticClass:"mx-1",attrs:{to:"/admin/login"}},[t._v(" 後台登入 ")])],1)])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-auto",staticStyle:{width:"40px"}},[s("img",{staticClass:"mx-auto mt-5",attrs:{width:"40px",src:"https://i.postimg.cc/Qx2dm12F/Pclogo.png",alt:""}})])}],Q=s(6047),V={data(){return{account:"",password:"",isProcessing:!1,error:!1,errorMesssage:"帳號不存在"}},methods:{async handleSubmit(){try{if(!this.account||!this.password)return;const t=await Q.Z.signIn({account:this.account,password:this.password});console.log(t);const{data:e}=t;if("error"===e.status)throw new Error(e.message);localStorage.setItem("token",e.token);const s=e.user.id;this.$router.push(`/home/${s}`)}catch(t){this.password="",this.isProcessing=!1,console.log("error",t)}}}},X=V,J=(0,l.Z)(X,K,W,!1,null,null,null),tt=J.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-page d-flex justify-content-between border border-secondary"},[s("NavBar",{staticClass:"sidebar"}),s("section",{staticClass:"user-section"},[s("div",[s("div",{staticClass:"mb-4"},[s("router-link",{staticClass:"mr-3",attrs:{to:{name:"user-followers",params:{id:t.userId}}}},[t._v("追隨者")]),s("router-link",{staticClass:"mr-3",attrs:{to:{name:"user-followings",params:{id:t.userId}}}},[t._v("正在追隨")])],1),s("router-view")],1)]),s("PopularUsers",{staticClass:"popular-users"})],1)},st=[];var rt={components:{NavBar:f.Z,PopularUsers:g.Z},data(){return{user:{},userId:1}},created(){this.userId=this.$route.params.id,console.log("UserFollowShip created userId ",this.userId),this.fetchClickedUser(this.userId)},beforeRouteUpdate(t,e,s){const r=this.$route.params.id;this.userId=r,console.log("beforeRouteUpdate clickedUser id",this.userId),s()},methods:{async fetchClickedUser(t){try{const e=await h.Z.getUser(t),{data:s}=e;this.user=s}catch(e){console.log(e)}}}},at=rt,ot=(0,l.Z)(at,et,st,!1,null,"39c71ef4",null),nt=ot.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.followers,(function(e){return s("div",{key:e.followerId,staticClass:"d-flex"},[s("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.followerId}}}},[s("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:""}})]),s("div",[s("div",{staticClass:"d-flex justify-content-between"},[s("p",[t._v(t._s(e.name))]),e.isFollowing?s("button",{on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.deleteFollowing(e.followerId)}}},[t._v(" 正在跟隨 ")]):s("button",{on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.addFollowing(e.followerId)}}},[t._v(" 跟隨 ")])]),s("div",[s("p",[t._v(t._s(e.introduction))])])])],1)})),0)},lt=[];var ct={mixins:[y.q],data(){return{followers:[],currentUserFollowers:[]}},computed:{...(0,v.rn)(["currentUser"])},created(){const t=this.$route.params.id;console.log("followers userId",t),this.fetchCurrentUserFollowers(this.currentUser.id),this.fetchFollowers(t)},methods:{async fetchFollowers(t){try{const e=await h.Z.getUserFollowers(t);console.log("follower response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.followers=s}catch(e){U.F.fire({icon:"warning",title:"沒有粉絲名單"}),console.log(e)}},async fetchCurrentUserFollowers(t){try{const e=await h.Z.getUserFollowers(t);console.log("follower response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.currentUserFollowers=s}catch(e){U.F.fire({icon:"warning",title:"沒有粉絲名單"}),console.log(e)}},async deleteFollowing(t){try{console.log("deleteFollowing ");const e=await h.Z.deleteUserFollowing(t);console.log("deleteFollowing response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.followers=this.followers.map((e=>e.followerId===t?{...e,isFollowing:!1}:e))}catch(e){U.F.fire({icon:"error",title:"無法取消追蹤"}),console.log(e)}},async addFollowing(t){try{console.log("addFollowing followerId",t);const e=await h.Z.addUserFollowing(t);console.log("addFollowing response",e),this.followers=this.followers.map((e=>e.followerId===t?{...e,isFollowing:!0}:e))}catch(e){U.F.fire({icon:"error",title:"無法取消追蹤"}),console.log(e)}}}},ut=ct,dt=(0,l.Z)(ut,it,lt,!1,null,"b11a1ba2",null),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.followings,(function(e){return s("div",{key:e.followingId,staticClass:"d-flex"},[s("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.followingId}}}},[s("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:""}})]),s("div",[s("div",{staticClass:"d-flex justify-content-between"},[s("p",[t._v(t._s(e.name))]),s("button",{on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.deleteFollowing(e.followingId)}}},[t._v(" 正在跟隨 ")])]),s("div",[s("p",[t._v(t._s(e.introduction))])])])],1)})),0)},ft=[];var gt={mixins:[y.q],data(){return{followings:[]}},computed:{...(0,v.rn)(["currentUser"])},created(){const t=this.$route.params.id;console.log("id followings",t),this.fetchFollowings(t)},methods:{async fetchFollowings(t){try{const e=await h.Z.getUserFollowings(t);console.log("followings response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.followings=s}catch(e){U.F.fire({icon:"warning",title:"沒有追隨者名單"}),console.log(e)}},async deleteFollowing(t){try{console.log("deleteFollowing ");const e=await h.Z.deleteUserFollowing(t);console.log("deleteFollowing response",e);const{data:s}=e;if("error"===s.status)throw new Error(s.message);this.followings=this.followings.map((e=>e.followingId===t?{...e,isFollowing:!1}:e)),this.followings=this.followings.filter((e=>e.followingId!==t))}catch(e){U.F.fire({icon:"error",title:"無法取消追蹤"}),console.log(e)}}}},ht=gt,vt=(0,l.Z)(ht,mt,ft,!1,null,"4c7e56c9",null),wt=vt.exports;r.Z.use(v.ZP);var bt=new v.ZP.Store({state:{currentUser:{id:-1,name:"",introduction:"",avatar:"",cover_image:"",isAdmin:!1},isAuthenticated:!1},getters:{},mutations:{setCurrentUser(t,e){t.currentUser={...t.currentUser,...e},t.isAuthenticated=!0},revokeAuthentication(t){t.currentUser={},t.isAuthenticated=!1,localStorage.removeItem("token")}},actions:{async fetchCurrentUser({commit:t}){try{const e=await h.Z.getCurrentUser(),{account:s,avatar:r,cover_image:a,folloingCount:o,followerCount:n,id:i,introduction:l,name:c,tweetCount:u}=e.data.user;t("setCurrentUser",{account:s,avatar:r,cover_image:a,folloingCount:o,followerCount:n,id:i,introduction:l,name:c,tweetCount:u})}catch(e){U.F.fire({icon:"warning",title:"無法取得登入者的資料"}),console.log(e.message)}}},modules:{}});r.Z.use(d.Z);const Ct=[{path:"/users/",component:_,children:[{path:":id/tweets",name:"user-tweets",component:T},{path:":id/replies",name:"user-replies",component:S},{path:":id/likes",name:"user-likes",component:O}]},{path:"/users/",component:nt,children:[{path:":id/followers",name:"user-followers",component:pt},{path:":id/followings",name:"user-followings",component:wt}]},{path:"/",name:"root",redirect:"/login"},{path:"/regist",name:"regist",component:()=>s.e(337).then(s.bind(s,5337))},{path:"/setting",name:"setting",component:()=>s.e(697).then(s.bind(s,2697))},{path:"/login",name:"login",component:tt},{path:"/admin/login",name:"adminLogin",component:()=>s.e(607).then(s.bind(s,9607))},{path:"/home/tweet/:id",name:"tweetMessage",component:()=>s.e(14).then(s.bind(s,7014))},{path:"/admin/tweet",name:"admimTweet",component:()=>s.e(698).then(s.bind(s,1698))},{path:"/admin/user",name:"admimUser",component:()=>s.e(333).then(s.bind(s,4333))},{path:"/home/:id",name:"home",component:()=>s.e(683).then(s.bind(s,2683))},{path:"*",name:"not-found",component:G}],_t=new d.Z({routes:Ct});_t.beforeEach(((t,e,s)=>{bt.dispatch("fetchCurrentUser"),s()}));var kt=_t;r.Z.config.productionTip=!1,new r.Z({router:kt,store:bt,render:t=>t(u)}).$mount("#app")},1926:function(t,e,s){"use strict";s.d(e,{F:function(){return c},l:function(){return l}});var r=s(9669),a=s.n(r),o=s(6455),n=s.n(o);const i="https://intense-journey-94086.herokuapp.com/api",l=a().create({baseURL:i}),c=n().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},8247:function(t,e,s){"use strict";s.d(e,{q:function(){return o}});var r=s(381),a=s.n(r);const o={filters:{fromNow(t){return t?a()(t).fromNow():"-"}}}}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,function(){var t=[];s.O=function(e,r,a,o){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,r){return s.f[r](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{14:"837584d4",333:"e1a5aa49",337:"a61be5b1",607:"a1e72b2c",683:"1ed770af",697:"defeaef9",698:"87733f87"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{14:"e4cf3b16",333:"baafddf4",683:"e0f49c27",697:"b1225e0a",698:"42eb86f6"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="simple-twitter:";s.l=function(r,a,o,n){if(t[r])t[r].push(a);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[a];var p=function(e,s){i.onerror=i.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/simple-twitter/"}(),function(){var t=function(t,e,s,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)s();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var a=s[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){a=n[r],o=a.getAttribute("data-href");if(o===t||o===e)return a}},r=function(r){return new Promise((function(a,o){var n=s.miniCssF(r),i=s.p+n;if(e(n,i))return a();t(r,i,a,o)}))},a={143:0};s.f.miniCss=function(t,e){var s={14:1,333:1,683:1,697:1,698:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,r){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(s,r){a=t[e]=[s,r]}));r.push(a[2]=o);var n=s.p+s.u(e),i=new Error,l=function(r){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}};s.l(n,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var u=l(s)}for(e&&e(r);c<n.length;c++)o=n[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},r=self["webpackChunksimple_twitter"]=self["webpackChunksimple_twitter"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(3659)}));r=s.O(r)})();
//# sourceMappingURL=app.40acecaf.js.map