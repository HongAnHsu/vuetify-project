<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 style="color: white;text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;">購物車</h1>
      </VCol>
      <VCol cols="12" style="box-shadow:2px 2px 2px 4px rgba(255, 255, 255, 0.7);background: white;" >
        <VTable class="table">
          <thead style="background: orange;font-size: 24px;text-shadow: 0.1em 0.1em 0.2em rgb(100, 100, 100)">
            <tr>
              <th>圖片</th>
              <th>名稱</th>
              <th>價格</th>
              <th>數量</th>
              <th>總金額</th>
              <th>移除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item._id" :class="{ 'bg-red-lighten-5': !item.product.sell }">
              <td>
                <VImg :src="item.product.image" cover width="200" aspect-ratio="1"></VImg>
              </td>
              <td>{{ item.product.name }}</td>
              <td>{{ item.product.price }}</td>
              <td>
                <VBtn color="primary" variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></VBtn>
                {{ item.quantity }}
                <VBtn color="primary" variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></VBtn>
              </td>
              <td>{{ item.quantity * item.product.price }}</td>
              <td>
                <VBtn color="red" variant="text" icon="mdi-delete" @click="updateCart(item.product._id, item.quantity * -1)"></VBtn>
              </td>
            </tr>
            <tr v-if="cart.length === 0">
              <td colspan="6" class="text-center" >快來選購美食吧!</td>
            </tr>
          </tbody>
        </VTable>
      </VCol>
      <VCol cols="12" class="text-center">
        <p style="color: white;">總金額: {{ total }}元</p>
        <p>&nbsp;</p>
        <VBtn color="orange" @click="submit" :disabled="!canCheckout">結帳</VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])

const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product,
      quantity
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
    user.cart = data.result
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

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const submit = async (req, res) => {
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
  } catch (error) {
    console.log(error)
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

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
</script>
