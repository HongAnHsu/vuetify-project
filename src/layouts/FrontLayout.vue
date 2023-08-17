<template>
  <VNavigationDrawer v-if="isMobile" v-model="drawer" location="right" temporary="temporary">
      <VList nav="nav">
        <template v-for="navItem in navItems" :key="navItem.to">
          <VListItem v-if="navItem.show" :to="navItem.to">
            <template prepend="#prepend">
              <VIcon :icon="navItem.icon"></VIcon>
            </template>
            <template append="#append">
              <VBadge color="success" :content="cart.toString()" v-if="navItem.to === '/cart'"></VBadge>
            </template>
            <VListItemTitle>{{ navItem.text }}</VListItemTitle>
          </VListItem>
        </template>
        <VListItem v-if="isLogin" @click="logout" >
          <template prepend="#prepend">
            <VIcon icon="mdi-logout"></VIcon>
          </template>
          <VListItemTitle>登出</VListItemTitle>
        </VListItem>
      </VList>
  </VNavigationDrawer>
  <VAppBar color="#f90" style="box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.4);">
    <VContainer class="d-flex align-center">
      <VBtn to="/" :active="false" >
        <VImg src="@/assets/img/123.png"></VImg>
        <h1 style="text-shadow: 0.1em 0.1em 0.2em rgb(23, 22, 22)">找。漢堡 FoundBurger</h1>
      </VBtn>
      <VSpacer></VSpacer>
      <VAppBarNavIcon v-if="isMobile" @click="drawer = true" color="white"></VAppBarNavIcon>
      <template v-if="!isMobile" >
        <template v-for="navItem in navItems" :key="navItem.to" >
          <VBtn variant="text" :prepend-icon="navItem.icon" :to="navItem.to" v-if="navItem.show" color="white" style="box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);left: -2%;">{{ navItem.text }}
          </VBtn>
        </template>
      </template>
    </VContainer>
    <VBtn v-if="!isMobile && isLogin" variant="text" prepend-icon="mdi-logout" @click="logout" >登出</VBtn>
  </VAppBar>
  <v-main style="background: black;">
    <RouterView :key="$route.path"></RouterView>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const drawer = ref(false)

const navItems = computed(() => {
  return [

    { to: '/local', text: '店面資訊', icon: 'mdi-map', show: true },
    { to: '/login', text: '登入/註冊', icon: 'mdi-login', show: !isLogin.value },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: isLogin.value },
    { to: '/orders', text: '訂單紀錄', icon: 'mdi-format-list-numbered', show: isLogin.value },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: isLogin.value && isAdmin.value }
  ]
})

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
</script>
