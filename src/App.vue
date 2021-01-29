<template>
  <div id="app">
    <GlobalHeader></GlobalHeader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
});
</script>

<style lang="less">
@import 'assets/style/index.less'; //初始化样式

</style>
