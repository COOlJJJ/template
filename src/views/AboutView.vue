<template>
  <div>
    <h1>This is an about page-ant-design-vue</h1>
    <!-- <a-button type="primary">Primary</a-button>
    <a-carousel :after-change="onChange" style="width: 500px;">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </a-carousel>

    <a-steps :current="1" :items="[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]"></a-steps> -->
  </div>
</template>
<script setup lang="ts">


import { inject, onMounted } from 'vue';
const axios: any = inject('$axios');
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
  fetchData()
})

const description = 'This is a description.';
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
