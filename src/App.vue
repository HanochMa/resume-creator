<template>
  <div id="app">
    <global-header v-bind:title="data.header.title"></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({
      header: {
        title: '简历生成平台',
        option: [],
        avatar: '',
      },
    });
    return { data };
  },
  components: {
    GlobalHeader,
    GlobalFooter,
  },
});
</script>

<style lang="less">
@import 'assets/style/index.less'; //初始化样式
</style>
