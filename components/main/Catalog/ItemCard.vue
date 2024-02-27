<template>
  <!-- <router-link :to="{params: {id:`/${data.slug}/${data.id}`}}"> -->
    <article class="item">
      <router-link :to="{params: {id:`/${props.data.slug}/${data.id}`}}">
        <picture>
          <img class="item__pic" :src='props.data.image' />
        </picture>
      </router-link>
      <router-link :to="{params: {id:`/${data.slug}/${data.id}`}}">
        <section>
          <Button link class="item__name">{{data.name}}</Button>
          <Button link  class="item__price">{{price}} руб.</Button>
        </section>
      </router-link>
      <ButtonBaseButton>Купить</ButtonBaseButton>
    </article>
  <!-- </router-link> -->
</template>

<script setup lang="ts">
// import BaseButton from "@/shared/button/BaseButton.vue";
import { ref } from "vue";

const props = defineProps({
  data : Object,
  isFucked : {
    type: Boolean,
    default : false,
  }
});

let imgSrc = props.data?.image;

function checkUrl()
{
  if (props.isFucked === true){
    imgSrc = 'https://imsound.ru/api' + props.data?.image;
  }
}
const price = Math.floor(props.data.price)

onMounted(() => {
  checkUrl();
})
</script>

<style scoped>
.item {
  background-color: #f6f6f6;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 24px 12px 24px 12px; */
}
.item__pic {
  height: 150px;
  width: 150px;
  margin-top: 15px;
}

.item__name {
  font-size: auto;
}

.item__price {
  font-size: x-large;
  font-weight: 700;
}
</style>
