<template>
  <div>
    <h1>This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
import { inject, onMounted, ref } from "vue";

const axios: any = inject("$axios");
const date = ref();
const fetchData = async () => {
  try {
    const response = await axios.post("/GetrohPieData");
    const data: any = JSON.parse(response.data);
    console.log(data.data);
  } catch (error) {
    console.error(error);
  }
};

const onChange = (current: number) => {
  console.log(current);
};

onMounted(() => {
  // fetchData();
});

const description = "This is a description.";
</script>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
