<template>
  <div id="app">
    <router-view></router-view>
    <!-- 通过路由配置项实现底部导航的显示隐藏 -->
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: { FooterGuide }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color: red
  *{ touch-action: none; }
</style>
