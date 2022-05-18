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
          <button
            v-if="!follower.isFollowing"
            @click.prevent.stop="addFollowing(follower.followerId)"
          >
            <!-- addFollowing(this.currentUser.id) -->
            跟隨
          </button>
          <button
            v-else
            @click.prevent.stop="deleteFollowing(follower.followerId)"
          >
            正在跟隨
          </button>
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
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

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
      currentUserFollowers: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const userId = this.$route.params.id;
    console.log("followers userId", userId);
    this.fetchCurrentUserFollowers(this.currentUser.id);
    this.fetchFollowers(userId);
    // 這樣顯示部分會錯
  },
  methods: {
    async fetchFollowers(userId) {
      try {
        const response = await usersAPI.getUserFollowers(userId);
        console.log("follower response", response);
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.followers = data;
        // this.followers = dummyData.followers;
        // console.log(this.followers);
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "沒有粉絲名單",
        });
        console.log(error);
      }
    },
    async fetchCurrentUserFollowers(userId) {
      try {
        const response = await usersAPI.getUserFollowers(userId);
        console.log("follower response", response);
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.currentUserFollowers = data;
        // this.followers = dummyData.followers;
        // console.log(this.followers);
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "沒有粉絲名單",
        });
        console.log(error);
      }
    },

    async deleteFollowing(followingId) {
      try {
        console.log("deleteFollowing ");

        const response = await usersAPI.deleteUserFollowing(followingId);
        console.log("deleteFollowing response", response);
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.followers = this.followers.map((follower) => {
          if (follower.followerId === followingId) {
            return {
              ...follower,
              isFollowing: false,
            };
          } else {
            return follower;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤",
        });
        console.log(error);
      }
    },

    async addFollowing(followerId) {
      try {
        console.log("addFollowing followerId", followerId);

        const response = await usersAPI.addUserFollowing(followerId);
        console.log("addFollowing response", response);

        this.followers = this.followers.map((follower) => {
          if (follower.followerId === followerId) {
            return {
              ...follower,
              isFollowing: true,
            };
          } else {
            return follower;
          }
        });

        // const { data } = response;
        // if (data.status === "error") {
        //   throw new Error(data.message);
        // }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤",
        });
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