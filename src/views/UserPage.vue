<template>
  <div class="user-page d-flex justify-content-between border border-secondary">
    <!-- NavBar -->
    <NavBar class="sidebar" />

    <!-- UserSection -->
    <section class="user-section">
      <div>
        <div class="d-flex align-items-center ml-4 mt-2">
          <div>上頁</div>
          <div class="ml-4">
            <h3 class="font-weight-bold font-size-18">John Doe</h3>
            <p class="text-secondary font-size-14">25 推文</p>
          </div>
        </div>
        <div class="cover-image">
          <img
            class="avatar"
            src="https://image.cache.storm.mg/styles/smg-800xauto-er/s3/media/image/2020/07/04/20200704-125106_U5965_M622512_2945.png?itok=jD_-1XjG"
            alt=""
          />
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn-edit-info mr-3 mb-4">編輯個人資料</button>
        </div>

        <div>
          <div>
            <h4 class="font-size-18">John Doe</h4>
            <p class="font-size-14">@John Doe</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <div class="d-flex">
            <p class="font-size-14">34 個跟隨中</p>
            <p class="font-size-14">59 位跟隨者</p>
          </div>
        </div>
      </div>

      <!-- 巢狀路由 -->
      <div>
        <div class="mb-4">
          <router-link to="/user/page" class="mr-3">推文</router-link>
          <router-link to="/user/page/reply" class="mr-3">回覆</router-link>
          <router-link to="/user/page/like">喜歡的內容</router-link>
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

export default {
  components: {
    NavBar,
    PopularUsers,
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
.cover-image {
  position: relative;
  background: url("https://ibw.bwnet.com.tw/ac_gallery/2019/10/50e5bba8-a1bd-5410-9f7e-0a5e4bb83b76_620.jpg");
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
}

.avatar {
  width: 140px;
  height: 140px;
  position: absolute;
  left: 10px;
  top: 120px;
  border-radius: 50%;
}

.btn-edit-info {
  /* margin-top: -56px; */
  width: 128px;
  height: 40px;
  background-color: white;
  border: solid 1.5px #ff6600;
  border-radius: 23px;
  color: #ff6600;
}

/* 巢狀路由 */
.router-link-exact-active {
  color: #ff6600;
  border-bottom: solid 1px #ff6600;
}
</style>