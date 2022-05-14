<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
      <img class="avatar mr-2" :src="tweet.avatar" alt="" />
      <div>
        <div class="d-flex">
          <h4>{{ tweet.name }}</h4>
          <p>@{{ tweet.account }} {{ tweet.createdAt | fromNow }}</p>
        </div>
        <p>
          {{ tweet.tweetText }}
        </p>
        <div class="d-flex">
          <div class="icon-group mr-5">
            <img
              class="icon"
              src="https://i.postimg.cc/3Rb08d24/message.png"
              alt=""
            />
            <p class="font-size-14 m-0">{{ tweet.replyCount }}</p>
          </div>
          .
          <div class="icon-group">
            <img
              class="icon"
              src="https://i.postimg.cc/YSdhRhnn/iconLike.png"
              alt=""
            />
            <img
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
import usersAPI from "./../apis/users";
import { fromNowFilter } from "./../utils/mixins";
const dummyData = {
  tweets: [
    {
      id: 1,
      account: "limecorner",
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      createdAt: new Date(),
      tweetText: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      replyCount: 1,
      likeCount: 11,
    },
    {
      id: 2,
      account: "limecorner2",
      name: "limecorner2",
      avatar: "https://loremflickr.com/280/280/admin",
      createdAt: new Date(),
      tweetText: "2Nulla Lorem mollit cupidatat irure. Laborum magna",
      replyCount: 2,
      likeCount: 22,
    },
    {
      id: 3,
      account: "limecorner3",
      name: "limecorner3",
      avatar: "https://loremflickr.com/280/280/admin",
      createdAt: new Date(),
      tweetText: "3Nulla Lorem mollit cupidatat irure. Laborum magna",
      replyCount: 3,
      likeCount: 33,
    },
  ],
};

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    // const userId = this.$route.params.id;
    // console.log("id tweet", userId);
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        this.tweets = dummyData.tweets;
        const response = await usersAPI.getUserTweet();
        console.log(response);
        const { data } = response;
        // this.tweets = data.tweets;
        console.log(this.tweets);
      } catch (error) {
        console.log(error);
      }
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