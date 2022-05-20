<template>
  <div class="user-page d-flex justify-content-between">
    <!-- NavBar -->
    <NavBar class="sidebar" />

    <div class="setting-area">
      <div>帳戶設定</div>
      <form @submit.prevent.stop="handleSubmit">
        <div class="form-wrapper mt-4" height="54px">
          <label for="account">帳號</label>
          <div>
            <input
              id="account"
              v-model="user.account"
              name="account"
              type="text"
              class="form"
              :class="{ wrong: accountError }"
              placeholder="請輸入帳號"
              required
              autofocus
            />
          </div>
        </div>
        <!--顯示錯誤文字用-->
        <div class="error-message">
          <span v-show="accountError">帳號 已重複註冊！</span>
        </div>

        <div class="form-wrapper mt-2" height="54px">
          <label for="account">名稱</label>
          <div>
            <input
              id="name"
              v-model="user.name"
              name="name"
              type="text"
              class="form"
              placeholder="請輸入使用者名稱"
              required
              autofocus
            />
          </div>
        </div>
        <div class="error-message">
          <span v-show="user.name.length > 50">字數超出上限 50字！</span>
        </div>

        <div class="form-wrapper mt-4" height="54px">
          <label for="account">Email</label>
          <div>
            <input
              id="email"
              v-model="user.email"
              name="email"
              type="email"
              class="form"
              :class="{ wrong: emailError }"
              placeholder="請輸入 Email"
              required
              autofocus
            />
          </div>
        </div>
        <div class="error-message">
          <span v-show="emailError">email 已重複註冊！</span>
        </div>

        <div class="form-wrapper mt-4" height="54px">
          <label for="password">密碼</label>
          <div>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              class="form"
              :class="{ wrong: passwordError }"
              placeholder="請輸入密碼"
              required
            />
          </div>
        </div>
        <div class="error-message">
          <span v-show="passwordError">密碼與確認密碼不符。</span>
        </div>

        <div class="form-wrapper mt-4" height="54px">
          <label for="checkPassword">密碼確認</label>
          <div>
            <input
              id="checkPassword"
              v-model="checkPassword"
              name="checkPassword"
              type="password"
              class="form"
              :class="{ wrong: passwordError }"
              placeholder="請再次輸入密碼"
              required
            />
          </div>
        </div>
        <div class="error-message">
          <span v-show="passwordError">密碼與確認密碼不符。</span>
        </div>

        <div class="mt-4">
          <button
            @click.prevent.stop="handleSubmit"
            :disabled="isProcessing"
            type="submit"
            class="btn btn-info btn-w88"
          >
            儲存
          </button>
        </div>
      </form>
    </div>
    <div class="sidebar"></div>
  </div>
</template>


<script>
import NavBar from "./../components/NavBar.vue";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        id: "",
        account: "",
        name: "",
        email: "",
      },
      password: "",
      checkPassword: "",
      isProcessing: false,
      accountError: false,
      emailError: false,
      passwordError: false,
    };
  },

  methods: {
    async getAccountInfo() {
      try {
        const response = await userAPI.getAccountInfo();
        this.user = { ...response.data.user };
      } catch (error) {
        console.log(error);
      }
    },
    async handleSubmit() {
      try {
        if (this.user.name.length > 50) {
          return;
        }
        this.accountError = false;
        this.emailError = false;
        this.passwordError = false;
        const { data } = await userAPI.putAccountInfo({
          data: {
            account: this.user.account,
            name: this.user.name,
            email: this.user.email,
            password: this.password,
            checkPassword: this.checkPassword,
          },
        });
        console.log(data);
        if (data.status === "error") {
          const errorMessage = data.message;
          if (errorMessage === "此帳號已經存在。") {
            this.accountError = true;
          } else if (errorMessage === "此email已經存在。") {
            this.emailError = true;
          } else if (errorMessage === "密碼與確認密碼不符。") {
            this.passwordError = true;
          }
        } else if (data.message === "成功修改個人資料") {
          Toast.fire({
            icon: "success",
            title: "成功修改個人資料",
          });
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
  },
  created() {
    this.getAccountInfo();
  },
};
</script>

<style scoped>
.sidebar {
  width: 16%;
}

.user-section {
  width: 55%;
}

.setting-area {
  width: 40%;
}
</style>