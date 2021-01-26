<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div class="box1"></div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
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
