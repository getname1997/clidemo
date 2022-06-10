<script setup lang="ts">
import { ref} from 'vue';
const checked = ref(true);
import HelloWorld from '@/components/HelloWorld.vue'
import router from '@/route/index'
console.log(router)
</script>

<template>
  <div>
    <!--    你是谁-->
    <!--    <HelloWorld />-->
    <!--    <van-switch-->
    <!--      v-model="checked"-->
    <!--      size="22px"-->
    <!--    />-->
    <router-view />
  </div>
</template>
