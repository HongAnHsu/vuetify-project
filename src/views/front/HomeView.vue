<template>
  <v-container>
<<<<<<< HEAD
    <v-row>
    <swiper
      :direction="'horizontal'"
      :spaceBetween="0"
      :effect="'fade'"
      :autoplay="{ delay: 5000 , disableOnInteraction: false }"
      class="mySwiper"
      :modules="modules"
    >
    <swiper-slide class="swiper-custom-slide" v-for="(slide, index) in slides" :key="index">
      <v-img :src="slide.src" class="slide-content"></v-img>
    </swiper-slide>

    </swiper>
  </v-row>
</v-container>
=======
    <v-carousel hide-delimiters  class="carousel" >
      <v-carousel-item
        src="./src/assets/img/pic1.png"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="./src/assets/img/店內圖片.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="./src/assets/img/大畫面(輪播1).png"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
  <v-container>
    <v-row style="width: 75%; margin: auto;">
      <v-col cols="12">
        <h1 style="color: white;">餐點</h1>
      </v-col>
      <v-col
      cols="12" md="6" lg="3"
      v-for="product in products"
      :key="product._id"
      >
        <ProductCard v-bind="product"></ProductCard>
      </v-col>
    </v-row>
  </v-container>
<<<<<<< HEAD
  <v-footer
    class="text-center d-flex flex-column"
  >
    <div style="font-family: 'Courier New', Courier, monospace; font-size: 24px; font-weight: 1000;">
      Follow us
    </div>
    <div>
      <template
        v-for="info in infos"
        :key="info.icon">
        <v-btn
        class="mx-4"
        :icon="info.icon"
        variant="text"
        :href="info.href"
        ><Icon variant="text" :icon="info.icon" :color="info.color"></Icon></v-btn>
      </template>
    </div>
    <div class="pt-0">

    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>&copy;製作人:許宏安</strong>
    </div>
  </v-footer>

=======
>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import { Icon } from '@iconify/vue'

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

<<<<<<< HEAD
const infos = [
  { icon: 'mdi-facebook', href: 'https://www.facebook.com/foundburger/photos?locale=zh_TW', color: 'blue' },
  { icon: 'mdi-instagram', href: 'https://www.instagram.com/foundburger/', color: 'black' },
  { icon: 'fa6-brands:line', href: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=064thabc', color: 'green' }
]

const modules = [EffectFade, Autoplay]

const slides = [
  { src: new URL('@/assets/img/圖1.jpg', import.meta.url).href },
  { src: new URL('@/assets/img/222.png', import.meta.url).href },
  { src: new URL('@/assets/img/111.png', import.meta.url).href }
  // ... 可以繼續添加其他圖片
]

=======
>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
</script>

<style>
.carousel{
  margin: 0 auto;
  width: 60%;
  height: 0;
  padding-bottom: 10%;
<<<<<<< HEAD
  animation: 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.mySwiper {
  width: 100%; /* 設定寬度為 100% */
  max-width: 100%; /* 最大寬度，可以依需求調整 */
  margin: auto ;
  height: 70vh; /* 高度自動調整，適應內容 */
  transform: translate(2em);
}

.slide-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.swiper-custom-slide {
  width: 100%;
  height: 70vh;
  overflow: hidden;
  position: relative;
  background-color: #000;
}

.swiper-custom-slide .slide-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
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
=======

>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
}
</style>
