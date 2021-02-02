<template>
  <el-main class="home">
    <div class="banner">
      <h1 class="box">{{ data.slogan }}</h1>
      <h4 class="box">{{ data.introduction }}</h4>
      <div class="btn box">开始制作</div>
    </div>
    <div></div>
  </el-main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Home',
  setup() {
    const data = reactive({
      slogan: '这是标语',
      introduction: '这是简介',
    });
    return { data };
  },
  components: {},
});
</script>

<style lang="less" scoped>
@color: red;
@k: 800px;
.home {
  width: 100%;
  min-height: @k;
  background: linear-gradient(45deg, #feac5e, #c779d0, #4bc0c8); //测试less
}
.banner {
  width: 100%;
  margin-top: 50px;
  text-align: center;
}
.box {
  margin: 20px;
}
.btn {
  width: 220px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  border-radius: 60px;
  background-color: gold;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  box-shadow: 2px 2px 5px grey;
}
</style>