<template>
  <h1>This is a home</h1>
  <div>
    <a-button type="primary" @click="btnclick">{{ count }}</a-button>
  </div>
</template>

<script setup lang="ts">
//导入pinia
import { useCounterStore } from "../stores/counter";
//导入ref函数
import { ref } from "vue";

// 使用pinia
const counterStore = useCounterStore();
//创建响应式数据,以pinia中的数据为初始值
let count = ref(counterStore.count);

function btnclick() {
  count.value++;
  //把更新后的数据存储到pinia中
  counterStore.count = count.value;
}
</script>

<style scoped>
/*局部css样式 */
</style>
