<template>
  <el-main class="home">
    <div class="logo"></div>
    <h2 class="box">{{ data.slogan }}</h2>
    <div class="box">{{ data.introduction }}</div>
    <div class="btn box">免费制作</div>
  </el-main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Home',
  setup() {
    const data = reactive({
      slogan: 'XX简历，简历制作管理专家',
      introduction: '自动排版 · 12种模块组合 · 16种色系切换 · 3种隐私模式',
    });
    return { data };
  },
  components: {},
});
</script>

<style lang="less" scoped>
@color: red;
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.logo {
  width: 200px;
  height: 200px;
  background-image: url('../assets/images/logo.png');
  background-size: 100% 100%;
}
.box {
  margin: 20px;
}
.btn {
  width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  border-radius: 60px;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>