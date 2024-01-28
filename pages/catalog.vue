<template>
    <MainCatalogWidget />
</template>
  
<script setup lang="ts">
    useSeoMeta({
  title: 'IMSOUND || Каталог',
  ogTitle: 'IMSOUND || Каталог',
  description: 'Каталог интернет-магазина световой и музыкальной техники IMSOUND',
  ogDescription: 'Каталог интернет-магазина световой и музыкальной техники IMSOUND',
})
  // import CatalogWidget from "@/widgets/main/Catalog/CatalogWidget.vue";
</script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .brand-logo {
    font-weight: bold;
    font-size: 24px;
    padding: 24px 0 24px 16px;
  }
  
  .burger {
    padding: 24px 16px 24px 0;
  }
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
  </style>
  