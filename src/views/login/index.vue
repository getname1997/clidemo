<script lang="ts" setup >
import { ref, computed, Ref } from 'vue';
const value:Ref = ref(3);
const currentRate = ref(0);
const rate = ref(0);
const text = computed(() => `${currentRate.value.toFixed(0)}%`);
const addRate = () => {
  console.log(rate.value, currentRate.value);
  rate.value += 10;
};
</script>
<template>
  <div>我是登入页</div>
  <van-button
    type="primary"
    round
    @click="addRate"
  >
    点击
  </van-button>
  <van-circle
    v-model:current-rate="currentRate"
    :rate="rate"
    :speed="40"
    :text="text"
  />
  <van-rate
    v-model="value"
    icon="like"
    color="#526"
    void-icon="like-o"
  />
</template>
<style scoped>

</style>
