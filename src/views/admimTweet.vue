<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
      <img class="avatar mr-2" :src="tweet.User.avatar" alt="" />
      <div>
        <div @click="toReplyList(tweet.id)" class="d-flex">
          <h4>{{ tweet.User.name }}</h4>
          <p>@{{ tweet.User.account }} {{ tweet.createdAt | fromNow }}</p>
        </div>
        <p @click="toReplyList(tweet.id)">
          {{ tweet.description }}
        </p>
        <div class="d-flex">
          <div class="icon-group mr-5">
            <!-- 這邊 user_id 後續 可以用來 連結 到 該使用者 首頁  -->
            <img
              :id="tweet.user_id"
              class="icon"
              src="https://i.postimg.cc/3Rb08d24/message.png"
              alt=""
              data-toggle="modal"
              data-target="#replyTwitterModal"
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
    </div>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin.js";
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: [],
      replyMessage: "",
      isLike: "",
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await adminAPI.getAdminTweets();
        const { data } = response;
        this.tweets = data;
        console.log(this.tweets);
      } catch (error) {
        console.log(error);
      }
    },

    toReplyList(tweetId) {
      console.log("toda");
      this.$router.push(`/home/tweet/${tweetId}`);
    },
  },
};
</script>

<style scoped>
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
</style>