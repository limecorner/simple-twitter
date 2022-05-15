<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
      <router-link :to="{ name: 'user-tweets', params: { id: tweet.User.id } }">
        <img class="avatar mr-2" :src="tweet.User.avatar" alt="" />
      </router-link>
      <div>
        <div class="d-flex">
          <h4>{{ tweet.User.name }}</h4>
          <p>{{ tweet.User.account }} {{ tweet.createdAt | fromNow }}</p>
        </div>
        <p>{{ tweet.description }}</p>
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
      createdAt: new Date(),
      description: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      replyCount: 1,
      likeCount: 1,
      User: {
        id: 14,
        avatar: "https://loremflickr.com/280/280/admin",
        name: "limecorner",
        account: "limecorner",
      },
    },
    {
      id: 2,
      createdAt: new Date(),
      description: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      replyCount: 2,
      likeCount: 2,
      User: {
        id: 24,
        avatar: "https://loremflickr.com/280/280/admin",
        name: "limecorner",
        account: "limecorner",
      },
    },
    {
      id: 3,
      createdAt: new Date(),
      description: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      replyCount: 3,
      likeCount: 3,
      User: {
        id: 34,
        avatar: "https://loremflickr.com/280/280/admin",
        name: "limecorner",
        account: "limecorner",
      },
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
    const userId = this.$route.params.id;
    console.log("tweet clickedUser id", userId);
    this.fetchTweets(userId);
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserTweets(userId);
        console.log("tweet response", response);
        const { data } = response;
        this.tweets = data;
        // this.tweets = dummyData.tweets;
        // console.log(this.tweets);
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