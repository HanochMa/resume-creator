<template>
  <div class="box1">
    home
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>

<style lang="less" scoped>
@color:red;
@k:100px;
.box1{
  width: @k;
  height: @k;
  background-color: @color; //测试less
}
</style>