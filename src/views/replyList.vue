<template>
  <div class="user-page d-flex justify-content-between border border-secondary">
    <!-- NavBar -->
    <NavBar />

    <!-- 顯示 詳細推文  -->
    <section class="user-section">
      <div class="home-title">← 推文</div>

      <div class="d-flex">
        <router-link :to="{ name: 'user-tweets', params: { id: UserId } }">
          <img class="avatar" :src="user.avatar" alt="" />
        </router-link>
        <div>
          <div>{{ user.name }}</div>
          <div>@{{ user.account }}</div>
        </div>
      </div>
      <div>
        <p>{{ tweet.description }}</p>
        <p>{{ tweet.createdAt | fromNow }}</p>
      </div>
      <div>
        <span>{{ tweet.replyCount }} 回覆 </span>
        <span> {{ tweet.likeCount }} 喜歡次數</span>
      </div>
      <div>
        <img
          class="icon"
          src="https://i.postimg.cc/3Rb08d24/message.png"
          alt=""
          data-toggle="modal"
          data-target="#replyTwitterModal"
        />
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
      </div>
      <!-- Modal -->
      <div>
        <div
          class="modal fade"
          id="replyTwitterModal"
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
                    <img class="avatar" :src="user.avatar" alt="" />
                  </div>
                  <div>
                    <div>
                      <span>{{ user.name }}</span>
                      <span> @{{ user.account }} </span>
                      <span>
                        {{ tweet.createdAt | fromNow }}
                      </span>
                    </div>
                    <p>{{ tweet.description }}</p>
                    <p>回覆給@{{ user.account }}</p>
                  </div>
                </div>
              </div>

              <form action="">
                <div>
                  <p>這邊要放當前使用者頭像</p>
                  <textarea
                    cols="40"
                    rows="5"
                    v-model="replyMessage"
                    placeholder="推你的回覆"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  @click.prevent.stop="postReplyHandler()"
                  class="btn btn-info btn-w64"
                >
                  推文
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->

      <!-- 巢狀路由 -->
      <div>
        <div v-for="reply in replies" :key="reply.id" class="tweet-card">
          <router-link
            :to="{
              name: 'user-tweets',
              params: { id: reply.UserId },
            }"
          >
            <img class="avatar mr-2" :src="reply.User.avatar" alt="" />
          </router-link>
          <div>
            <div class="d-flex">
              <h4>{{ reply.User.name }}</h4>
              <p>@{{ reply.User.account }} {{ reply.createdAt | fromNow }}</p>
            </div>

            <div>
              <p>回覆@{{ user.account }}</p>
            </div>

            <div>
              <p>
                {{ reply.comment }}
              </p>
            </div>

            <div class="d-flex">
              <div class="icon-group mr-5">
                <img
                  class="icon"
                  src="https://i.postimg.cc/3Rb08d24/message.png"
                  alt=""
                />
                <p class="font-size-14 m-0">13</p>
              </div>

              <div class="icon-group">
                <img
                  class="icon"
                  src="https://i.postimg.cc/YSdhRhnn/iconLike.png"
                  alt=""
                />
                <img
                  v-if="false"
                  class="icon"
                  src="https://i.postimg.cc/DwdWWCqK/icon-Liked.png"
                  alt=""
                />
                <p class="font-size-14 m-0">76</p>
              </div>
            </div>
          </div>
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
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import tweetsAPI from "./../apis/tweets.js";

export default {
  computed: {
    ...mapState(["currentUser"]),
  },
  components: {
    NavBar,
    PopularUsers,
  },
  mixins: [fromNowFilter],
  data() {
    return {
      tweetId: "",
      tweet: {},
      replyMessage: "",
      user: {
        account: "",
        avatar: "",
        name: "",
      },
      UserId: "",
      replies: [],
    };
  },
  methods: {
    async fetchTweetData(tweetId) {
      try {
        const response = await tweetsAPI.getTweetDetail(tweetId);
        const { data } = response;
        this.tweet = data;
        this.user = {
          account: data.User.account,
          avatar: data.User.avatar,
          name: data.User.name,
        };
        this.UserId = data.UserId;
      } catch (error) {
        console.log(error);
      }
    },
    async postReplyHandler() {
      try {
        if (this.replyMessage.trim().length === 0) {
          Toast.fire({
            icon: "warning",
            title: "內容不可空白！",
          });
          return;
        }
        const response = await tweetsAPI.postTweetReply({
          tweetId: this.tweetId,
          comment: this.replyMessage,
        });
        this.replies.unshift({
          TweetId: this.tweetId,
          User: {
            account: this.currentUser.account,
            avatar: this.currentUser.avatar,
            name: this.currentUser.name,
          },
          UserId: this.currentUser.id,
          comment: this.replyMessage,
          createdAt: new Date(),
        });
        this.replyMessage = "";
      } catch (error) {
        console.log(error);
      }
    },
    async addlike(tweetId) {
      try {
        const response = await tweetsAPI.likeTweet(tweetId);

        this.tweet.isLiked = true;
      } catch (error) {
        console.log(error);
      }
    },
    async unlike(tweetId) {
      try {
        const response = await tweetsAPI.unlikeTweet(tweetId);

        this.tweet.isLiked = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchTweetReplies(tweetId) {
      try {
        const response = await tweetsAPI.getTweetreplies(tweetId);
        this.replies = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.tweetId = this.$route.params.id;
    this.fetchTweetData(this.tweetId);
    this.fetchTweetReplies(this.tweetId);
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

/*照片 圖示 */

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.icon {
  width: 30px;
  height: 30px;
}

/* 巢狀路由 */
.router-link-exact-active {
  color: #ff6600;
  border-bottom: solid 1px #ff6600;
}

.icon-group {
  outline: solid 1px green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38px;
}
.tweet-card {
  display: flex;
  border: solid 1px #e6ecf0;
  padding: 10px 20px;
}
</style>