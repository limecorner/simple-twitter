<template>
  <div>
    <div
      v-for="follower in followers"
      :key="follower.followerId"
      class="d-flex"
    >
      <router-link
        :to="{ name: 'user-tweets', params: { id: follower.followerId } }"
      >
        <img class="avatar" :src="follower.avatar" alt="" />
      </router-link>
      <div>
        <div class="d-flex justify-content-between">
          <p>{{ follower.name }}</p>
          <button>{{ follower.isFollowing }}</button>
        </div>
        <div>
          <p>{{ follower.introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { fromNowFilter } from "../utils/mixins";
const dummyData = {
  followers: [
    {
      followerId: 1,
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      introduction: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      isFollowing: false,
      // userId: 10,
    },
    {
      followerId: 2,
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      introduction: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      isFollowing: true,
      // userId: 20,
    },
    {
      followerId: 3,
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      introduction: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      isFollowing: false,
      // userId: 30,
    },
  ],
};

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      followers: [],
    };
  },
  created() {
    const userId = this.$route.params.id;
    console.log("followers userId", userId);
    this.fetchFollowers(userId);
  },
  methods: {
    async fetchFollowers(userId) {
      try {
        const response = await usersAPI.getUserFollowers(userId);
        console.log("follower response", response);
        const { data } = response;
        this.followers = data;
        // this.followers = dummyData.followers;
        // console.log(this.followers);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
}
</style>