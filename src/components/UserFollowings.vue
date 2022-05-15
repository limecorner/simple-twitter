<template>
  <div>
    <div
      v-for="following in followings"
      :key="following.followingId"
      class="d-flex"
    >
      <router-link
        :to="{ name: 'user-tweets', params: { id: following.followingId } }"
      >
        <img class="avatar" :src="following.avatar" alt="" />
      </router-link>

      <div>
        <div class="d-flex justify-content-between">
          <p>{{ following.name }}</p>
          <button>{{ following.isFollowing }}</button>
        </div>
        <div>
          <p>{{ following.introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { fromNowFilter } from "../utils/mixins";
const dummyData = {
  followings: [
    {
      followingId: 1,
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      introduction: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      isFollowing: true,
      // userId: 10,
    },
    {
      followingId: 2,
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      introduction: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      isFollowing: true,
      // userId: 20,
    },
    {
      followingId: 3,
      name: "limecorner",
      avatar: "https://loremflickr.com/280/280/admin",
      introduction: "Nulla Lorem mollit cupidatat irure. Laborum magna",
      isFollowing: true,
      // userId: 30,
    },
  ],
};

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      followings: [],
    };
  },
  created() {
    const userId = this.$route.params.id;
    console.log("id followings", userId);
    this.fetchFollowings(userId);
  },
  methods: {
    async fetchFollowings(userId) {
      try {
        const response = await usersAPI.getUserFollowings(userId);
        console.log("followings response", response);
        const { data } = response;
        this.followings = data;
        // this.followings = dummyData.followings;
        // console.log(this.followings);
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