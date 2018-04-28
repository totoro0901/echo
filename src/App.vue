<template>
  <div id="app">
    <!--<router-view/>-->
    <!--<router-link to="/banner"></router-link>-->
    <!--<router-link to="/"></router-link>-->
    <!--<router-view></router-view>-->
    <!-- 视图层 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 音乐控制条 -->
    <music-bar></music-bar>
    <!-- 页面加载进度条 -->
    <!--<vue-progress-bar></vue-progress-bar>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
