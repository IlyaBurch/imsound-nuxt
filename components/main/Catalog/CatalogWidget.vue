<template>
  <div class="catalog__loader" v-if="status==='pending'">
    <ProgressSpinner/>
  </div>
  <div v-if="status==='success'">
    <CatalogButtons class="filters" /> 
    <p class="items__number">Количество товаров: {{data?.count}}</p>
    <!-- <p>{{ itemsList }}</p> -->
    <!-- <p>{{ data.count }}</p> -->
    <div class="items" >
      <MainCatalogItemCard v-for="item in data?.results.product_list" :data="item"/>
    </div>
    <Paginator/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'

// import { getCatalogData } from "@/server/getCatalog";
// import type { ApiResponse  } from "@/server/getCatalog";
import CatalogButtons from './CatalogButtons.vue';

// let data = ref<any>(null);

let isLoading = ref(true);
// const getData = getCatalogData;data.results.product_list
const API_BASE_URL = 'https://imsound.ru/api';

// const paginationParam = 9;

const { data, status } = await useLazyFetch(`${API_BASE_URL}/catalog/`, {})

</script>

<style scoped>
.filters {
  padding-top: 40px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  gap: 16px;
  padding: 24px 16px 0 16px;
}
.items__number {
  padding-left: 13px;
  padding-top: 24px;
  font-size: 16px;
}
.catalog__loader {
  display: grid;
  place-items: center;
  height: calc(100dvh - 86px);
}

</style>

