<template>
  <div>
    <div>
      <adminNavbar />
    </div>
    <div class="tweet-card font-size-24 font-weight-bolder">推文清單</div>
    <div
      style="height: 110px"
      v-for="tweet in tweets"
      :key="tweet.id"
      class="tweet-card row"
    >
      <div class="col-1">
        <img class="avatar" :src="tweet.User.avatar" alt="" />
      </div>

      <div class="col-10 pl-5">
        <div class="row">
          <h5 class="user-name">{{ tweet.User.name }}</h5>
          <h6 class="account-time">
            @{{ tweet.User.account }} • {{ tweet.createdAt | fromNow }}
          </h6>
        </div>
        <div class="row">
          <p class="description">
            {{ tweet.description }}
          </p>
        </div>
      </div>

      <div class="col-1" style="padding: 5px 0px">
        <div
          class="d-flex justify-content-end"
          @click.prevent.stop="deleteTweet(tweet.id)"
        >
          <img
            class="iconX"
            src="https://i.postimg.cc/CxWv1xH2/X-button.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin.js";
import { fromNowFilter } from "./../utils/mixins";
import adminNavbar from "./../components/adminNavbar.vue";

export default {
  components: {
    adminNavbar,
  },
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
        const response = await adminAPI.adminGetTweets();
        const { data } = response;
        this.tweets = data.tweets;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTweet(tweetId) {
      try {
        const response = await adminAPI.deleteTweets(tweetId);
        console.log(response);
        // 要再補上 刷新頁面的方法
        // const { data } = response;
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.tweet-card {
  border: solid 1px #e6ecf0;
  padding: 10px 0px 2px 10px;
  margin: 0px 300px;
}

.user-name:hover {
  cursor: pointer;
}
.user-name {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.account-time:hover {
  color: #808080;
  cursor: default;
}
.account-time {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #92929d;
  margin-left: 5px;
}

.iconX:hover {
  cursor: pointer;
}
.iconX {
  width: 15px;
  margin-right: 1px;
  background-blend-mode: lighten;
}

.avatar:hover {
  cursor: pointer;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.description:hover {
  cursor: pointer;
}
.description {
  font-family: "Roboto", sans-serif;
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