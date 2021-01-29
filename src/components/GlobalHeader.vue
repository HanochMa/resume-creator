<template>
  <div class="header-container">
    header
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    
  },
  props:{
    title: String,
    options: Array,
    avatar: String
  },
  setup () {
    const user = 'abc';
  }
})
</script>

<style lang="less" scoped>
.header-container{
  height: 64px;
  width: 100%;
  background-color: aqua;
}
</style>