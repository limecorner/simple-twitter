<template>
  <div class="user-page d-flex justify-content-between border border-secondary">
    <!-- NavBar -->
    <NavBar />

    <!-- home twitter -->
    <section class="user-section">
      <div class="home-title">← 推文</div>
      <!--  -->
      <div></div>

      <!-- 巢狀路由 -->
      <TweetCard />
    </section>

    <!-- PopularUsers -->
    <PopularUsers class="popular-users" />
  </div>
</template>



<script>
import NavBar from "./../components/NavBar.vue";
import PopularUsers from "./../components/PopularUsers.vue";
import TweetCard from "./../components/TweetCard.vue";

export default {
  components: {
    NavBar,
    PopularUsers,
    TweetCard,
  },
  data() {
    return {
      twitterMessage: "",
      activeTwitterMessageBotton: false,
    };
  },
  methods: {
    submittwitterMessage() {
      this.activeTwitterMessageBotton = true;
      console.log(this.twitterMessage);
      /// 以下程式碼 設定 將資料 傳給伺服器
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
.user-page {
  border: solid 1px;
}

.popular-users {
  width: 25%;
}

/*照片 */

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

/* 巢狀路由 */
.router-link-exact-active {
  color: #ff6600;
  border-bottom: solid 1px #ff6600;
}
</style>