<template>
  <VNavigationDrawer v-if="isMobile" v-model="drawer" location="right" temporary="temporary">
    <div v-if="isLogin" style="margin: 20px;color: orange;cursor: default;">
      <Icon variant="text" icon="mdi-account"></Icon>&nbsp;您好，{{ info.firstname+info.lastname }}
    </div>
    <v-divider
      :thickness="3"
      class="border-opacity-50"
      color="warning"
    ></v-divider>
      <VList nav="nav" style="margin: 20px;">
        <template v-for="navItem in navItems" :key="navItem.to">
          <VListItem v-if="navItem.show" :to="navItem.to" >
              <Icon :icon="navItem.icon"></Icon>&nbsp;{{ navItem.text }}
              <!-- <VBadge color="success" :content="cart.toString()" v-if="navItem.to === '/cart'" b></VBadge> -->
          </VListItem>
        </template>
        <VListItem v-if="isLogin" @click="logout">
            <VIcon icon="mdi-logout"></VIcon>登出
        </VListItem>
      </VList>

  </VNavigationDrawer>
  <VAppBar color="#f90" style="box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.4);">
    <VContainer class="d-flex align-center">
        <div class="d-flex align-center"  @click="home">
          <VImg src="@/assets/img/bogo.png"  aspect-ratio="1" cover  min-width="64px"></VImg>
          <h1 style="
          text-shadow: 0.1em 0.1em 0.2em rgb(23, 22, 22);
          cursor:default;
          text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
          font-size: 30px;"
          class="title-name"
          >&nbsp;&nbsp;找．漢堡 </h1>
      </div>
      <VSpacer></VSpacer>
      <VAppBarNavIcon v-if="isMobile" @click="drawer = true" color="white"></VAppBarNavIcon>
      <template v-if="!isMobile" >
        <template v-for="navItem in navItems" :key="navItem.to" >
          <VBtn variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show" color="white" style="box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);left: -2%;">{{ navItem.text }}
          </VBtn>
        </template>
      </template>
      <div v-if="isLogin && !isMobile" style="cursor: default;" >
        <Icon variant="text" icon="mdi-account" style="font-size: 25px;margin: -6px;"></Icon>&nbsp;&nbsp;&nbsp;您好，{{ info.firstname+info.lastname }}
      </div>
    </VContainer>
    <VBtn v-if="!isMobile && isLogin" variant="text" prepend-icon="mdi-logout" @click="logout" >登出</VBtn>
  </VAppBar>
  <v-main style="background: black;">
    <RouterView :key="$route.path"></RouterView>
  </v-main>
  <v-footer
    class="text-center d-flex flex-column"
    style="
    flex: 0 1 auto;"
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
        target="_blank"
        ><Icon variant="text" :icon="info.icon" :color="info.color"></Icon></v-btn>
      </template>
    </div>
    <div class="pt-0">
      {{ new Date().getFullYear() }} — <strong>&copy;製作人:許宏安</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)
const info = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/users/me')
    info.value = data.result
    // console.log(data.result)
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})()

const navItems = computed(() => {
  return [
    { to: '/local', text: '店面資訊', icon: 'mdi-map', show: true },
    { to: '/login', text: '登入/註冊', icon: 'mdi-login', show: !isLogin.value },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: isLogin.value },
    { to: '/orders', text: '訂單紀錄', icon: 'mdi-format-list-numbered', show: isLogin.value },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value }
  ]
})

const home = () => {
  router.push('/')
}

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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
}

const infos = [
  { icon: 'mdi-facebook', href: 'https://www.facebook.com/foundburger/photos?locale=zh_TW', color: 'blue' },
  { icon: 'mdi-instagram', href: 'https://www.instagram.com/foundburger/', color: 'black' },
  { icon: 'fa6-brands:line', href: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=064thabc', color: 'green' }
]

</script>

<style>
.title-name{
  font-size: 25px;
  /* display: none;
  @media (min-width: 576px) {
    display: block;
  } */
}
</style>
