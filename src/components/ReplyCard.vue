<template>
  <div>
    <div v-for="reply in replies" :key="reply.id" class="reply-card">
      <router-link
        :to="{ name: 'user-tweets', params: { id: reply.Tweet.User.id } }"
      >
        <img class="avatar mr-2" :src="reply.Tweet.User.avatar" alt="" />
      </router-link>
      <div>
        <div class="d-flex">
          <h4>{{ reply.User.name }}</h4>
          <p>{{ reply.User.account }} {{ reply.createdAt | fromNow }}</p>
        </div>
        <p>回復 {{ reply.Tweet.User.account }}</p>
        <p>{{ reply.comment }}</p>
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
      id: 1,
      createdAt: new Date(),
      comment: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      Tweet: {
        User: {
          id: 14,
          avatar: "https://loremflickr.com/280/280/admin",
          account: "limecorner",
        },
      },
      User: {
        name: "limecorner",
        account: "limecorner",
      },
    },
    {
      id: 2,
      createdAt: new Date(),
      comment: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      Tweet: {
        User: {
          id: 24,
          avatar: "https://loremflickr.com/280/280/admin",
          account: "limecorner",
        },
      },
      User: {
        name: "limecorner",
        account: "limecorner",
      },
    },
    {
      id: 3,
      createdAt: new Date(),
      comment: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      Tweet: {
        User: {
          id: 34,
          avatar: "https://loremflickr.com/280/280/admin",
          account: "limecorner",
        },
      },
      User: {
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
      replies: [],
    };
  },
  created() {
    const repliedUserId = this.$route.params.id;
    console.log("reply clickedUser id", repliedUserId);
    this.fetchReplies(repliedUserId);
  },
  methods: {
    async fetchReplies(userId) {
      try {
        const response = await usersAPI.getUserReplies(userId);
        console.log("reply response", response);
        const { data } = response;

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.replies = data;

        // this.replies = dummyData.replies;
        // console.log("replies", this.replies);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style scoped>
.reply-card {
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