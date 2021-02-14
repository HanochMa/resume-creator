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
        title: 'XX简历',
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
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
</style>
