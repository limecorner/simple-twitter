<template>
  <div>
    <div
      v-for="follower in followers"
      :key="follower.followerId"
      class="row card"
    >
      <div class="col-1">
        <router-link
          class="avatar-container"
          :to="{ name: 'user-tweets', params: { id: follower.followerId } }"
        >
          <img
            class="avatar"
            :src="follower.avatar || 'https://i.imgur.com/hAKcS3E.jpg'"
            alt=""
          />
        </router-link>
      </div>
      <div class="col-11">
        <div class="p-1 d-flex justify-content-between align-items-center">
          <h5 class="font-size-18">{{ follower.name }}</h5>

          <template
            v-if="Number(currentUser.id) !== Number(follower.followerId)"
          >
            <button
              v-if="!follower.isFollowing"
              class="btn-not-following"
              @click.prevent.stop="addFollowing(follower.followerId)"
            >
              <!-- addFollowing(this.currentUser.id) -->
              跟隨
            </button>
            <button
              v-else
              class="btn-is-following"
              @click.prevent.stop="deleteFollowing(follower.followerId)"
            >
              正在跟隨
            </button>
          </template>
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

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      followers: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const userId = this.$route.params.id;
    this.fetchFollowers(userId);
  },
  methods: {
    async fetchFollowers(userId) {
      try {
        const response = await usersAPI.getUserFollowers(userId);
        const { data } = response;
        if (data.status === "error") {
          this.followers = [];
          throw new Error(data.message);
        }
        this.followers = data;
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
        const response = await usersAPI.deleteUserFollowing(followingId);
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
        const response = await usersAPI.addUserFollowing(followerId);

        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }

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
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法追蹤",
        });
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.avatar {
  max-width: 60px;
  align-self: center;
  border-radius: 50%;
}
.card {
  height: 130px;
  padding: 10px;
}
h5 {
  font-family: "Roboto", sans-serif;
}
p {
  font-family: "Roboto", sans-serif;
}

.btn-is-following {
  width: 20%;
  height: 40px;
  background-color: #ff6600;
  border-color: transparent;
  border-radius: 23px;
  color: white;
}

.btn-not-following {
  width: 14%;
  height: 40px;
  background-color: white;
  border: solid 1.5px #ff6600;
  border-radius: 23px;
  color: #ff6600;
}
</style>