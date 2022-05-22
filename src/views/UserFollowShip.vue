<template>
  <div class="user-page d-flex justify-content-between">
    <!-- NavBar -->
    <NavBar class="sidebar" />

    <!-- UserSection -->
    <section class="user-section" style="margin-left: 40px; width: 52%">
      <div class="d-flex align-items-center mt-2">
        <div class="mr-3" style="cursor: pointer" @click="$router.back()">
          ←
        </div>
        <div class="ml-4 mt-2">
          <h3 class="font-weight-bold font-size-18">
            {{ user.name }}
          </h3>
          <p class="text-secondary font-size-14" style="margin-bottom: 0px">
            {{ user.tweetCount }} 推文
          </p>
        </div>
      </div>

      <!-- 巢狀路由 -->
      <div>
        <div class="mb-4 pt-2 d-flex">
          <router-link
            :to="{ name: 'user-followers', params: { id: userId } }"
            class="tap text-center"
          >
            <div style="font-weight: 800">追隨者</div>
          </router-link>
          <router-link
            :to="{ name: 'user-followings', params: { id: userId } }"
            class="tap text-center"
          >
            <div style="font-weight: 800">正在追隨</div>
          </router-link>
        </div>
        <router-view />
      </div>
    </section>

    <!-- PopularUsers -->
    <PopularUsers class="popular-users" />
  </div>
</template>

<script>
import NavBar from "./../components/NavBar.vue";
import PopularUsers from "./../components/PopularUsers.vue";
import usersAPI from "./../apis/users";

export default {
  components: {
    NavBar,
    PopularUsers,
  },
  data() {
    return {
      user: {},
      userId: 1,
    };
  },
  created() {
    this.userId = this.$route.params.id;
    this.fetchClickedUser(this.userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;

    // 若點頁籤前後的userId不同
    if (Number(this.$route.params.id) !== Number(id)) {
      this.userId = id; // userId 給新值
      this.fetchClickedUser(this.userId);
    }
    next();
  },

  methods: {
    async fetchClickedUser(userId) {
      try {
        const response = await usersAPI.getUser(userId);
        const { data } = response;
        this.user = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .user-page {
    max-width: 960px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1200px) {
  .user-page {
    max-width: 1140px;
  }
}

/* 大區塊 */
/* .user-page {
  border: solid 1px;
} */

.sidebar {
  width: 16%;
}

.user-section {
  width: 55%;
}

.popular-users {
  width: 25%;
}

/* user-section  */

.avatar {
  width: 30px;
  height: 30px;
}
.tap {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  width: 150px;
  height: 30px;
  font-size: 14px;
  color: #92929d;
  text-decoration: none;
}
/* 巢狀路由 */
.router-link-exact-active {
  color: #ff6600;
  border-bottom: solid 1px #ff6600;
}
</style>