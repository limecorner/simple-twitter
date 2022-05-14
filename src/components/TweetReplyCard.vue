<template>
  <div>
    <div v-for="reply in replies" :key="reply.id" class="tweet-card">
      <img class="avatar mr-2" :src="reply.user.avatar" alt="" />
      <div>
        <div class="d-flex">
          <h4>{{ reply.user.name }}</h4>
          <p>@{{ reply.user.account }} {{ reply.createdAt | fromNow }}</p>
        </div>

        <div>
          <p>回覆@{{ postTweetAccount }}</p>
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
            <p class="font-size-14 m-0"></p>
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
            <p class="font-size-14 m-0"></p>
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
  replies: [
    {
      id: 1214,
      comment: "Sint dolor aperiam enim consequatur voluptas officia ea ut.",
      userId: 14,
      tweetId: 105,
      createdAt: "2022-05-10T09:57:32.000Z",
      updatedAt: "2022-05-13T12:23:09.000Z",
      user: {
        name: "user12",
        account: "user12",
        avatar: "https://loremflickr.com/280/280/admin",
      },
    },
    {
      id: 1216,
      comment: "Autem nemo natus minus.",
      userId: 16,
      tweetId: 105,
      createdAt: "2022-05-12T20:17:48.000Z",
      updatedAt: "2022-05-13T12:23:09.000Z",
      user: {
        name: "limecorner",
        account: "limecorner",
        avatar: "https://loremflickr.com/280/280/admin",
      },
    },
    {
      id: 1215,
      comment: "Voluptatem mollitia tempore optio nam minus veritatis.",
      userId: 15,
      tweetId: 105,
      createdAt: "2022-05-12T17:41:01.000Z",
      updatedAt: "2022-05-13T12:23:09.000Z",
      user: {
        name: "austin",
        account: "austin",
        avatar: "https://loremflickr.com/280/280/admin",
      },
    },
  ],
};

export default {
  props: {
    postTweetAccount: {
      type: String,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  data() {
    return {
      replies: [],
    };
  },
  created() {
    const tweetId = this.$route.params.id;
    console.log("網頁id", tweetId);
    this.fetchTweetReplies(tweetId);
  },
  methods: {
    async fetchTweetReplies(tweetId) {
      try {
        this.replies = dummyData.replies;
        // 載入 路由  要調整註解
        console.log(`api前:`);
        const response = await usersAPI.getTweetreplies(tweetId);
        console.log(`response內容:`);
        console.log(response);
        const { data } = response;
        // this.replies = data.replies;
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