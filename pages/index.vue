<template>
  <main class="main">
    <!-- <MainIndexWidget/> -->
    <!-- <MainIndexCategorySwiper/> -->
    <MainIndexTabContent :data="data"/>
  </main>
</template>

<script setup lang="ts">
  // import { ref, onMounted, computed, onBeforeMount, provide } from "vue"
  // import { getIndexData } from "@/server/getIndex"
  // import type { IndexResponse } from "@/server/getIndex";

  // import IndexWidget from '@/components/main/Index/IndexWidget.vue';
  // import CategorySwiper from "@/components/main/Index/CategorySwiper.vue";
  // import TabContent from "@/components/main/Index/TabContent.vue";

  // const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

  // let data = ref <IndexResponse | null>(null)
  // let isLoading = ref(true);

  // const imagesArray = [];



  // const fetchData = async () => {
  //   isLoading.value = true;
    
  //   try {
  //     const response = await getIndexData();
  //     if (response) {
  //       data.value = response;
  //     }
  //   } catch (error) {
  //     console.log("Ошибка загрузки данных с серверва:", error)
  //   } finally {
  //     isLoading.value = false;
  //   }
  // }

  // onBeforeMount(() => {
  //   fetchData();
  // })  
  // let slidesInfo : any = computed(() => data.results.sliders_and_banners.sliders)
  // provide('slidesInfo', slidesInfo)
  const API_BASE_URL = 'https://imsound.ru/api';
  const { pending, data } = useFetch(`${API_BASE_URL}/index/`, {})
  
  useSeoMeta({
  title: 'IMSOUND',
  ogTitle: 'IMSOUND',
  description: 'Интернет-магазин световой и музыкальной техники IMSOUND',
  ogDescription: 'Интернет-магазин световой и музыкальной техники IMSOUND',
})
</script>

<style scoped>
.index__loader {
  display: grid;
  place-items: center;
  height: calc(100dvh - 86px);
}</style>
