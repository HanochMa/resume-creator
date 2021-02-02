<template>
  <el-footer class="footer-container"> footer </el-footer>
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
  },
});
</script>

<style lang="less" scoped>
.footer-container {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>