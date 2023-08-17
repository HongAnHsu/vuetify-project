<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 style="text-decoration:underline; color: white;text-shadow: 0.1em 0.1em 0.2em rgb(218, 102, 102)" class="text-center">訂單管理</h1>
      </VCol>
      <VCol cols="12" style="box-shadow:2px 2px 2px 4px rgba(255, 255, 255, 0.7);background: white; font-size: 24px;">
        <VTable>
          <thead style="background: orange;text-shadow: 0.1em 0.1em 0.2em rgb(100, 100, 100)">
            <tr>
              <th>編號</th>
              <th>時間</th>
              <th>用戶</th>
              <th>金額</th>
              <th>商品</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,i) in orders" :key="order._id">
              <!-- <td>{{ order._id }}</td> -->
              <td>{{ i+1 }}</td>
              <td>{{ new Date(order.date).toLocaleString() }}</td>
              <td>{{ order.user.account }}</td>
              <td>{{ order.total }}</td>
                <ul>
                  <li v-for="item in order.cart" :key="item._id">
                    {{ item.product.name }} * {{ item.quantity }}
                  </li>
                </ul>
            </tr>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const orders = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
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
