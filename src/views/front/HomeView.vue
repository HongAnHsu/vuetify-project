<template>
  <v-container>
    <v-row>
      <v-col cols="12" >
    <swiper
      :direction="'horizontal'"
      :spaceBetween="0"
      :effect="'fade'"
      :autoplay="{ delay: 5000 , disableOnInteraction: false }"
      class="mySwiper"
      :modules="modules"
    >
    <swiper-slide class="swiper-custom-slide mx-auto" v-for="(slide, index) in slides" :key="index">
      <v-img :src="slide.src" class="slide-content mx-auto" aspectRatio="16/9" cover maxWidth="1000" ></v-img>
    </swiper-slide>
  </swiper>
</v-col>
  </v-row>
</v-container>
  <v-container style="">
    <v-row style="width: 100%; margin: auto;position: relative;">
      <v-col cols="12" style="position: sticky; top: 50px; z-index: 1;">
        <div
          style="text-align: center; background: rgb(33, 33, 33); position: sticky; top: 100px; z-index: 1; padding: 10px;"
        >
          <h1 style="color: white;">餐點</h1>
        </div>
      </v-col>

      <v-col
      cols="12"  md="6" lg="4" xl="3" sm=""
      v-for="product in products"
      :key="product._id"
      >
        <ProductCard v-bind="product"></ProductCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'

// import './style.css'

// Import required modules
import { EffectFade, Autoplay } from 'swiper/modules'

const createSnackbar = useSnackbar()

const products = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})()

const modules = [EffectFade, Autoplay]

const slides = [
  { src: new URL('@/assets/img/圖1.jpg', import.meta.url).href },
  { src: new URL('@/assets/img/222.png', import.meta.url).href },
  { src: new URL('@/assets/img/111.png', import.meta.url).href }
  // ... 可以繼續添加其他圖片
]

</script>

<style>
.carousel{
  /* margin: 0 auto; */
  width: 60%;
  height: 0;
  padding-bottom: 10%;
  animation: 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.mySwiper {
  width: 100%; /* 設定寬度為 100% */
  max-width: 100%; /* 最大寬度，可以依需求調整 */
  margin: auto ;
  height: 70vh; /* 高度自動調整，適應內容 */
  /* transform: translate(2em); */
}

.slide-image {
  width: 100%;
  height: 100%;
  /* position: relative; */
}

.slide-image img {
  width: 100%;
  height: auto;
  /* position: absolute; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.swiper-custom-slide {
  width: 100%;
  height: 70vh;
  overflow: hidden;
  /* position: relative; */
  background-color: #000;
}

.swiper-custom-slide .slide-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  /* position: absolute; */
  animation: slide 20s infinite;
  opacity: 1;
  transform: scale(1.2);

}

.swiper-custom-slide .slide-content:nth-child(2) {
  animation-delay: 6s;
}

.swiper-custom-slide .slide-content:nth-child(3) {
  animation-delay: 6s;
}

.swiper-custom-slide .slide-content:nth-child(4) {
  animation-delay: 6s;
}

@keyframes slide {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>
