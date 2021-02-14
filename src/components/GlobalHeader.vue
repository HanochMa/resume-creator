<template>
  <el-header class="header-container">
    <div>{{ title }}</div>
    <div></div>
  </el-header>
  <el-divider style="margin: 0px"></el-divider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'GlobalHeader',
  components: {},
  props: {
    title: String,
    options: Array,
    avatar: String,
  },
  setup() {
    const user = 'abc';
    return { user };
  },
});
</script>

<style lang="less" scoped>
.header-container {
  color: #333;
  text-align: left;
  line-height: 60px;
}
</style>