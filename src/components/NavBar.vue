<template >
  <div class="sidebar-navbar-wrapper">
    <section class="sidebar-navbar">
      <div>
        <img
          class="product-mark mb-4"
          src="https://i.postimg.cc/Qx2dm12F/Pclogo.png"
          alt=""
        />

        <div @click.stop.prevent="handleNavbar('home')" class="tab">
          <img
            v-if="!navbarHome"
            class="icon"
            src="https://i.postimg.cc/L4rVt08L/PcHome.png"
            alt=""
          />
          <img
            v-else
            class="icon"
            src="https://i.postimg.cc/nh1YtFYG/Pc-Home-Active.png"
            alt=""
          />
          <p :class="{ active: navbarHome }">首頁</p>
        </div>

        <div @click.stop.prevent="handleNavbar('profile')" class="tab">
          <img
            v-if="!navbarprofile"
            class="icon"
            src="https://i.postimg.cc/qvB6y8y2/PcUser.png"
            alt=""
          />
          <img
            v-else
            class="icon"
            src="https://i.postimg.cc/28kSKCyD/Pc-User-Active.png"
            alt=""
          />
          <p :class="{ active: navbarprofile }">個人資料</p>
        </div>

        <div @click.stop.prevent="handleNavbar('Setting')" class="tab">
          <img
            v-if="!navbarSetting"
            class="icon"
            src="https://i.postimg.cc/nVQ4hYGz/Pc-Setting.png"
            alt=""
          />
          <img
            v-else
            class="icon"
            src="https://i.postimg.cc/pdT8bDdP/Pc-Setting-Active.png"
            alt=""
          />
          <p :class="{ active: navbarSetting }">設定</p>
        </div>
        <button
          class="btn btn-primary btn-post-tweet"
          data-toggle="modal"
          data-target="#postTwitterModal"
        >
          推文
        </button>
      </div>
      <!-- Modal -->
      <div>
        <div
          class="modal fade"
          id="postTwitterModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="postTwitterModal"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="postTwitterModal">
                  後續 不需要文字 且 將關閉"X"符號 往左邊移動
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="">
                <div>
                  <textarea
                    cols="40"
                    rows="5"
                    v-model="twitterMessage"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  @click.prevent.stop="postTweetModal"
                  class="btn btn-info btn-w64"
                >
                  推文
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->

      <div class="d-flex ml-2">
        <img
          class="logout"
          src="https://i.postimg.cc/NjVnH4Yp/logoOut.png"
          alt=""
        />
        <p class="ml-2">登出</p>
      </div>
    </section>
  </div>
</template>



<script>
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      twitterMessage: "",
      navbarHome: false,
      navbarprofile: false,
      navbarSetting: false,
    };
  },
  methods: {
    postTweetModal() {
      if (this.twitterMessage.length === 0) {
        console.log(this.twitterMessage.length);
        Toast.fire({
          icon: "warning",
          title: "內容不可空白",
        });
      }
    },
    handleNavbar(name) {
      if (name === "home") {
        this.navbarHome === true;
      }
    },
  },
};
</script>



<style scoped>
.sidebar-navbar-wrapper {
  width: 16vw;
}

.sidebar-navbar {
  width: 16vw;
  border-right-style: solid;
  border-color: #e6ecf0;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: fixed;
}

.tab {
  display: flex;
  margin-bottom: 12px;
}

.product-mark {
  width: 50px;
  height: 50px;
}

.icon {
  margin-left: 8px;
  margin-right: 8px;
}

.icon,
.logout {
  width: 24px;
  height: 24px;
}

.btn-post-tweet {
  width: 100%;
  height: 46px;
  background-color: #ff6600;
  border-color: transparent;
  border-radius: 23px;
  color: white;
}

.modal-footer {
  border-top: 0px;
}

.active {
  color: #ff6600;
}
</style>
