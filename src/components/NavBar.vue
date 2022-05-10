<template>
  <section class="sidebar">
    <div>
      <img
        class="product-mark mb-4"
        src="https://i.postimg.cc/Qx2dm12F/Pclogo.png"
        alt=""
      />
      <div class="tab">
        <img
          class="icon"
          src="https://i.postimg.cc/L4rVt08L/PcHome.png"
          alt=""
        />
        <p>首頁</p>
      </div>
      <div class="tab">
        <img
          class="icon"
          src="https://i.postimg.cc/qvB6y8y2/PcUser.png"
          alt=""
        />
        <p>個人資料</p>
      </div>
      <div class="tab">
        <img
          class="icon icon1"
          src="https://i.postimg.cc/nVQ4hYGz/Pc-Setting.png"
          alt=""
        />
        <p>設定</p>
      </div>
      <button class="btn-post-tweet">推文</button>
    </div>
    <div class="d-flex ml-2">
      <img
        class="logout"
        src="https://i.postimg.cc/NjVnH4Yp/logoOut.png"
        alt=""
      />
      <p class="ml-2">登出</p>
    </div>
  </section>
</template>


<style scoped>
.sidebar {
  outline: solid 2px orange;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
