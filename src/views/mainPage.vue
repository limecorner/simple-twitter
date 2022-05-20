<template>
  <div class="user-page d-flex justify-content-between border border-secondary">
    <!-- NavBar -->
    <NavBar @modal-sbmit="submitTweetMessageModal" />

    <!-- home twitter -->
    <section class="user-section">
      <div class="home-title">首頁</div>

      <div class="d-flex">
        <img
          class="avatar mr-1"
          src="https://image.cache.storm.mg/styles/smg-800xauto-er/s3/media/image/2020/07/04/20200704-125106_U5965_M622512_2945.png?itok=jD_-1XjG"
          alt=""
        />
        <form>
          <textarea
            required
            cols="40"
            rows="3"
            class="form-control"
            placeholder="有什麼新鮮事？"
            aria-label="With textarea"
            v-model="tweetMessage"
          >
          </textarea>
          <div>
            <span>字數不可超過140字</span>
            <!--  <span v-show="tweetMessage.length> 140">  字數不可超過140字  </span> 
            <span v-show="blankContent && tweetMessage.length === 0">
              錯誤提示文字:內容不可空白
            </span>-->
            <button
              type="submit"
              class="btn btn-info btn-w88"
              @click.prevent.stop="submitTweetMessage"
            >
              推文
            </button>
          </div>
        </form>
      </div>
      <!-- 巢狀路由 -->
      <div>
        <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
          <router-link
            :to="{
              name: 'user-tweets',
              params: { id: tweet.UserId },
            }"
          >
            <img class="avatar mr-2" :src="tweet.User.avatar" alt="" />
          </router-link>
          <div class="message-wrapper">
            <div class="d-flex message-wrapper" @click="toReplyList(tweet.id)">
              <h4>{{ tweet.User.name }}</h4>
              <p class="message-wrapper">
                @{{ tweet.User.account }} ˙ {{ tweet.createdAt | fromNow }}
              </p>
            </div>
            <p @click="toReplyList(tweet.id)">
              {{ tweet.description }}
            </p>
            <div class="d-flex">
              <div class="icon-group mr-5">
                <img
                  :id="tweet.id"
                  class="icon"
                  src="https://i.postimg.cc/3Rb08d24/message.png"
                  alt=""
                  data-toggle="modal"
                  :data-target="'#replyTwitterModal' + tweet.id"
                />

                <p class="font-size-14 m-0">{{ tweet.replyCount }}</p>
              </div>

              <div class="icon-group">
                <img
                  v-if="!tweet.isLiked"
                  class="icon"
                  src="https://i.postimg.cc/YSdhRhnn/iconLike.png"
                  alt=""
                  @click.prevent.stop="addlike(tweet.id)"
                />
                <img
                  v-else
                  @click.prevent.stop="unlike(tweet.id)"
                  class="icon"
                  src="https://i.postimg.cc/DwdWWCqK/icon-Liked.png"
                  alt=""
                />
                <p class="font-size-14 m-0">{{ tweet.likeCount }}</p>
              </div>
            </div>
          </div>

          <!-- Modal -->
          <div>
            <div
              class="modal fade"
              :id="'replyTwitterModal' + tweet.id"
              tabindex="-1"
              role="dialog"
              aria-labelledby="replyTwitterModal"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">
                      後續 不需要文字 且 將關閉"X"符號 往左邊移動
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div>
                    <div class="d-flex">
                      <div>
                        <img class="avatar" :src="tweet.User.avatar" alt="" />
                      </div>
                      <div>
                        <div>
                          <span>{{ tweet.User.name }}</span>
                          <span> @{{ tweet.User.account }} </span>
                          <span>
                            {{ tweet.createdAt | fromNow }}
                          </span>
                        </div>
                        <p>{{ tweet.description }}</p>
                        <p>回覆給@{{ tweet.User.account }}</p>
                      </div>
                    </div>
                  </div>

                  <form action="">
                    <div>
                      <img class="avatar" :src="currentUser.avatar" alt="" />
                      <textarea
                        cols="40"
                        rows="5"
                        v-model="replyMessage"
                        placeholder="推你的回覆"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <span>錯誤提示文字:字數不可超過140字 </span>
                      <span v-show="replyMessage.length > 140">
                        錯誤提示文字:字數不可超過140字
                      </span>
                      <!-- 
                        後續 更換 提醒樣式   
                        <span v-show="replyMessage.length > 140"> 錯誤提示文字:字數不可超過140字 </span>                      
                   <span v-show="blankContent && replyMessage.length === 0">
                        錯誤提示文字:內容不可空白
                      </span>
                           -->
                      <button
                        type="button"
                        @click="postReplyHandler(tweet.id)"
                        class="btn btn-info btn-w64"
                      >
                        推文
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
        </div>
      </div>

      <!-- 巢狀路由 -->
    </section>

    <!-- PopularUsers -->
    <PopularUsers class="popular-users" />
  </div>
</template>

<script>
import NavBar from "./../components/NavBar.vue";
import PopularUsers from "./../components/PopularUsers.vue";
import tweetsAPI from "./../apis/tweets.js";
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [fromNowFilter],
  components: {
    NavBar,
    PopularUsers,
  },
  data() {
    return {
      tweetMessage: "",
      tweets: [],
      replyMessage: "",
      isLike: "",
      blankContent: false,
    };
  },
  created() {
    this.fetchTweets();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async submitTweetMessage() {
      try {
        if (this.tweetMessage.trim().length === 0) {
          this.blankContent = true;
          return;
        } else if (this.tweetMessage.length > 140) {
          return;
        }

        const response = await tweetsAPI.postTweet(this.tweetMessage);
        const newTweet = response.data.newTweet;
        this.tweets.unshift({
          User: {
            account: this.currentUser.account,
            avatar: this.currentUser.avatar,
            name: this.currentUser.name,
          },
          UserId: newTweet.UserId,
          createdAt: newTweet.createdAt,
          description: newTweet.description,
          id: newTweet.id,
          isLiked: false,
          isReplied: false,
          likeCount: 0,
          replyCount: 0,
        });
        this.tweetMessage = "";
        this.blankContent = false;
      } catch (error) {
        console.log(error);
      }
    },
    async submitTweetMessageModal(modalMessage) {
      this.tweetMessage = modalMessage;
      try {
        const response = await tweetsAPI.postTweet(this.tweetMessage);
        const newTweet = response.data.newTweet;
        this.tweets.unshift({
          User: {
            account: this.currentUser.account,
            avatar: this.currentUser.avatar,
            name: this.currentUser.name,
          },
          UserId: newTweet.UserId,
          createdAt: newTweet.createdAt,
          description: newTweet.description,
          id: newTweet.id,
          isLiked: false,
          isReplied: false,
          likeCount: 0,
          replyCount: 0,
        });
        this.tweetMessage = "";
      } catch (error) {
        console.log(error);
      }
    },

    async fetchTweets() {
      try {
        const response = await tweetsAPI.getAllTweet();
        const { data } = response;
        console.log(data);
        this.tweets = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addlike(tweetId) {
      try {
        const response = await tweetsAPI.likeTweet(tweetId);
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              likeCount: tweet.likeCount + 1,
              isLiked: !tweet.isLiked,
            };
          } else {
            return tweet;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async unlike(tweetId) {
      try {
        const response = await tweetsAPI.unlikeTweet(tweetId);
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              likeCount: tweet.likeCount - 1,
              isLiked: !tweet.isLiked,
            };
          } else {
            return tweet;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async postReplyHandler(tweetId) {
      try {
        if (this.replyMessage.trim().length === 0) {
          this.blankContent = true;
          return;
        } else if (this.replyMessage.length > 140) {
          return;
        }
        const response = await tweetsAPI.postTweetReply({
          tweetId: tweetId,
          comment: this.replyMessage,
        });
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              replyCount: Number(tweet.replyCount) + 1,
            };
          } else {
            return tweet;
          }
        });
        this.replyMessage = "";
        this.blankContent = false;
      } catch (error) {
        console.log(error);
      }
    },
    toReplyList(tweetId) {
      this.$router.push(`/home/tweet/${tweetId}`);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .user-page {
    max-width: 960px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1200px) {
  .user-page {
    max-width: 1140px;
  }
}

/* 大區塊 */
.user-page {
  border: solid 1px;
}

.popular-users {
  width: 25%;
}

/* 巢狀路由 */
.router-link-exact-active {
  color: #ff6600;
  border-bottom: solid 1px #ff6600;
}

.tweet-card {
  display: flex;
  border: solid 1px #e6ecf0;
  padding: 10px 20px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.icon-group {
  outline: solid 1px green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38px;
}

.icon {
  width: 13px;
  height: 13px;
}

.message-wrapper {
  width: 100%;
}
</style>