<template>
  <div id="app">
    <!-- 考慮  將 navbar 拿到最外面  要再討論,  決定顯示與否 則是多寫一個 if page === login || page === admin 不顯示  --->

    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
};
</script>



