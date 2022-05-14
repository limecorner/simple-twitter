<template>
  <div class="user-page d-flex justify-content-between border border-secondary">
    <!-- NavBar -->
    <NavBar />

    <!-- 顯示 詳細推文  -->
    <section class="user-section">
      <div class="home-title">← 推文</div>

      <div class="d-flex">
        <img class="avatar" :src="tweet.User.avatar" alt="" />
        <div>
          <div>{{ tweet.User.name }}</div>
          <div>@{{ tweet.User.account }}</div>
        </div>
      </div>
      <div>
        <p>{{ tweet.description }}</p>
        <p>待後續: 補發推特的時間</p>
        <!-- {{  tweet.createdAt | fromNow }} -->
      </div>
      <div>
        <span>{{ tweet.replyCounts }} 回覆 </span>
        <span> {{ tweet.likeCounts }} 喜歡次數</span>
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
          class="icon"
          src="https://i.postimg.cc/YSdhRhnn/iconLike.png"
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
                    <img class="avatar" :src="tweet.User.avatar" alt="" />
                  </div>
                  <div>
                    <div>
                      <span>{{ tweet.User.name }}</span>
                      <span> @{{ tweet.User.account }} </span>
                      <span>
                        待後續: 補發推特的時間
                        <!-- {{  tweet.createdAt | fromNow }} -->
                      </span>
                    </div>
                    <p>{{ tweet.description }}</p>
                    <p>回覆給@{{ tweet.User.account }}</p>
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
                  @click.prevent.stop="postTweetModal"
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
      <TweetReplyCard :postTweetAccount="tweet.User.account" />
    </section>

    <!-- PopularUsers -->
    <PopularUsers class="popular-users" />
  </div>
</template>



<script>
import NavBar from "./../components/NavBar.vue";
import PopularUsers from "./../components/PopularUsers.vue";
import TweetReplyCard from "./../components/TweetReplyCard.vue";
import { fromNowFilter } from "./../utils/mixins";
import { usersAPI } from "./../apis/users";

const dummyTweet = {
  id: 105,
  description:
    "Voluptates accusantium ut et excepturi delectus necessitatibus in error eum.",
  user_id: 14,
  likeCounts: 0,
  replyCounts: 3,
  User: {
    name: "user1",
    account: "user1",
    avatar: "https://loremflickr.com/280/280/admin",
  },
};

export default {
  components: {
    NavBar,
    PopularUsers,
    TweetReplyCard,
  },
  mixins: [fromNowFilter],
  data() {
    return {
      tweet: {},
      replyMessage: "",
    };
  },
  methods: {
    async fetchTweetData(tweetId) {
      try {
        // 改為路由 後 要調整 註解位置
        this.tweet = dummyTweet;
        const response = await usersAPI.getTweetDetail(tweetId);
        console.log(response);
        const data = response;
        // this.tweet = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    const tweetId = this.$route.params.id;
    this.fetchTweetData(tweetId);
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
</style>