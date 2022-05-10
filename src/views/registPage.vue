<template>
  <div class="mx-auto" style="width: 400px">
    <div class="mx-auto" style="width: 40px">
      <img
        class="mx-auto mt-4"
        width="40px"
        src="https://i.postimg.cc/Qx2dm12F/Pclogo.png"
        alt=""
      />
    </div>
    <h3 class="text-center font-weight-bold">建立你的帳號</h3>

    <form @submit.prevent.stop="handleSubmit">
      <div class="form-wrapper mt-4" :class="{ wrong: error }" height="54px">
        <label for="account">帳號</label>
        <div>
          <input
            id="account"
            v-model="account"
            name="account"
            type="text"
            class="form"
            placeholder="請輸入帳號"
            required
            autofocus
          />
        </div>
      </div>
      <!--顯示錯誤文字用-->
      <div class="errorMesssage">
        <span v-show="error">{{ errorMesssage }}</span>
      </div>

      <div class="form-wrapper mt-2" :class="{ wrong: error }" height="54px">
        <label for="account">名稱</label>
        <div>
          <input
            id="name"
            v-model="name"
            name="name"
            type="text"
            class="form"
            placeholder="請輸入使用者名稱"
            required
            autofocus
          />
        </div>
      </div>

      <div class="form-wrapper mt-4" :class="{ wrong: error }" height="54px">
        <label for="account">Email</label>
        <div>
          <input
            id="name"
            v-model="name"
            name="name"
            type="email"
            class="form"
            placeholder="請輸入 Email"
            required
            autofocus
          />
        </div>
      </div>

      <div class="form-wrapper mt-4" :class="{ wrong: error }" height="54px">
        <label for="password">密碼</label>
        <div>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="form"
            placeholder="請輸入密碼"
            autocomplete="current-password"
            required
          />
        </div>
      </div>

      <div class="form-wrapper mt-4" :class="{ wrong: error }" height="54px">
        <label for="password">密碼確認</label>
        <div>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            class="form"
            placeholder="請再次輸入密碼"
            autocomplete="current-password"
            required
          />
        </div>
      </div>

      <div class="mt-4">
        <button
          :disabled="isProcessing"
          type="submit"
          class="btn btn-info btn-singin"
        >
          註冊
        </button>
      </div>
    </form>

    <div class="d-flex mt-4 justify-content-center">
      <router-link class="mx-1" to="/login"> 取消 </router-link>
    </div>
  </div>
</template>