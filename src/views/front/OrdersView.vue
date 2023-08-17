<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1>訂單</h1>
      </VCol>
      <VCol cols="12" style="box-shadow:2px 2px 2px 4px rgba(255, 255, 255, 0.7);background: white;">
        <VTable>
          <thead style="background: orange; font-size: 24px;text-shadow: 0.1em 0.1em 0.2em rgb(100, 100, 100)">
            <tr>
              <th>訂單編號</th>
              <th>下單日期時間</th>
              <th>總金額</th>
              <th>購買商品</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,i) in orders" :key="order._id">
              <td>{{(i+1)}}</td>
              <td>{{ new Date(order.date).toLocaleString() }}</td>
              <td>{{ order.total }}</td>
              <td>
                <ul>
                  <li v-for="item in order.cart" :key="item._id">
                    {{ item.product.name }} * {{ item.quantity }}
                  </li>
                </ul>
              </td>
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
    const { data } = await apiAuth.get('/orders')
    console.log(data)
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

// const month = (order) => {
//   if (new Date(order.date).getMonth() < 10) {
//     return `0${new Date(order.date).getMonth() + 1}`
//   } else {
//     return `${new Date(order.date).getMonth() + 1}`
//   }
// }
// const day = (order) => {
//   if (new Date(order.date).getDate() < 10) {
//     return `0${new Date(order.date).getDate()}`
//   } else {
//     return `${new Date(order.date).getDate()}`
//   }
// }
</script>
