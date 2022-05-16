<template>
  <div>
    <div v-for="like in likes" :key="like.TweetId" class="like-card">
      <router-link
        :to="{ name: 'user-tweets', params: { id: like.Tweet.User.id } }"
      >
        <img class="avatar mr-2" :src="like.Tweet.User.avatar" alt="" />
      </router-link>
      <div>
        <div class="d-flex">
          <h4>{{ like.Tweet.User.name }}</h4>
          <p>{{ like.Tweet.User.account }} {{ like.createdAt | fromNow }}</p>
        </div>
        <p>{{ like.Tweet.description }}</p>
        <div class="d-flex">
          <div class="icon-group mr-5">
            <img
              class="icon"
              src="https://i.postimg.cc/3Rb08d24/message.png"
              alt=""
            />
            <p class="font-size-14 m-0">{{ like.replyCount }}</p>
          </div>
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
            <p class="font-size-14 m-0">{{ like.likeCount }}</p>
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
  likes: [
    {
      TweetId: 1,
      createdAt: new Date(),
      replyCount: 1,
      likeCount: 1,
      Tweet: {
        description: "Nulla Lorem mollit cupidatat irure. Laborum magna",
        User: {
          id: 14,
          avatar: "https://loremflickr.com/280/280/admin",
          name: "Austin",
          account: "Austin",
        },
      },
    },
    {
      TweetId: 2,
      createdAt: new Date(),
      replyCounts: 2,
      likeCounts: 2,
      Tweet: {
        description: "Nulla Lorem mollit cupidatat irure. Laborum magna",
        User: {
          id: 24,
          avatar: "https://loremflickr.com/280/280/admin",
          name: "Austin",
          account: "Austin",
        },
      },
    },
    {
      TweetId: 3,
      createdAt: new Date(),
      replyCounts: 3,
      likeCounts: 3,
      Tweet: {
        description: "Nulla Lorem mollit cupidatat irure. Laborum magna",
        User: {
          id: 34,
          avatar: "https://loremflickr.com/280/280/admin",
          name: "Austin",
          account: "Austin",
        },
      },
    },
  ],
};

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      likes: [],
    };
  },
  created() {
    const likedUserId = this.$route.params.id;
    console.log("like clickedUser id", likedUserId);
    this.fetchLikes(likedUserId);
  },
  methods: {
    async fetchLikes(userId) {
      try {
        const response = await usersAPI.getUserLikes(userId);
        console.log("like response", response);
        const { data } = response;
        this.likes = data; // data.likes
        // this.likes = dummyData.likes;
        // console.log("likes", this.likes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.like-card {
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